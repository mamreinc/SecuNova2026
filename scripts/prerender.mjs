/**
 * ============================================================================
 * MAXPHAOS MARKETING: PROPRIETARY CUSTOM ENGINEERING & DESIGN ARCHITECTURE
 * ----------------------------------------------------------------------------
 * All design, software architecture, UI/UX components, and source code are
 * 100% custom-engineered and designed exclusively by MaxPhaos Marketing.
 *
 * CORE ARCHITECTURAL ETHOS:
 * - 100% Bespoke Code: Built strictly to client specifications from scratch.
 * - Zero Pre-Made Templates: No generic agency starters or off-the-shelf themes.
 * - Senior-Led AI-Augmented Workflows (Vibe Coding): 14-day execution cycles
 *   engineered for sub-second performance (99+ Lighthouse Core Web Vitals).
 * - Full IP & Repository Handoff: 100% client asset and codebase ownership.
 *
 * Copyright (c) MaxPhaos Marketing. All rights reserved.
 * ============================================================================
 */
import { createServer } from 'node:http';
import { readFile, writeFile, mkdir } from 'node:fs/promises';
import { extname, join, normalize } from 'node:path';
import { fileURLToPath } from 'node:url';
import puppeteer from 'puppeteer';

const __dirname = fileURLToPath(new URL('.', import.meta.url));
const DIST = normalize(join(__dirname, '..', 'dist'));
let activePort = process.env.PRERENDER_PORT ? parseInt(process.env.PRERENDER_PORT, 10) : 0;

const ROUTES = [
  '/',
  '/services',
  '/services/strategic-advisory-pmaas',
  '/services/enterprise-it-security-audits',
  '/about',
  '/about/our-work',
  '/about/our-work/nova',
  '/about/our-work/career-os',
  '/about/our-work/secuboost',
  '/about/our-work/journalism-audit',
  '/about/our-work/lead-finder',
  '/about/our-work/canadaquest',
  '/contact',
  '/faq',
  '/join-us',
  '/privacy-terms',
  '/brand',
];

// Requests that are not needed inside the prerendered HTML.
const BLOCK_PREFIXES = [
  'https://images.pexels.com',
  'https://images.unsplash.com',
  'https://raw.githubusercontent.com',
  'https://fonts.googleapis.com',
  'https://fonts.gstatic.com',
  'https://fonts.cdnfonts.com',
];

const MIME = {
  '.html': 'text/html',
  '.js': 'text/javascript',
  '.css': 'text/css',
  '.json': 'application/json',
  '.svg': 'image/svg+xml',
  '.png': 'image/png',
  '.jpg': 'image/jpeg',
  '.jpeg': 'image/jpeg',
  '.webp': 'image/webp',
  '.ico': 'image/x-icon',
  '.txt': 'text/plain',
  '.xml': 'application/xml',
};

// Canonical domain for all on-page metadata. Each route gets exactly one
// canonical / og:url / twitter:url tag pointing at its own URL.
const SITE_BASE = 'https://secunovainc.com';

/**
 * Removes all but the last occurrence of a tag matching the given attribute
 * selector. The static SPA shell ships homepage metadata and react-helmet
 * appends its per-route tags without removing those shell tags, so every
 * prerendered page currently carries duplicate description / og: / twitter:
 * / robots tags. Crawlers and social parsers generally read the first match,
 * which is the shell's homepage value, so the per-route values are shadowed.
 * Helmet's tags are appended last, so we keep the last occurrence.
 */
const dedupeTags = (html, tagName, attrName) => {
  const re = new RegExp(`<${tagName}[^>]*${attrName}[^>]*>`, 'gi');
  const matches = [...html.matchAll(re)].map((m) => m[0]);
  if (matches.length <= 1) return html;
  for (const tag of matches.slice(0, -1)) {
    html = html.replace(tag, '');
  }
  return html;
};

const DEDUPE_SELECTORS = [
  ['meta', 'name="description"'],
  ['meta', 'name="keywords"'],
  ['meta', 'property="og:title"'],
  ['meta', 'property="og:description"'],
  ['meta', 'property="og:image"'],
  ['meta', 'property="og:image:width"'],
  ['meta', 'property="og:image:height"'],
  ['meta', 'property="og:image:alt"'],
  ['meta', 'property="og:site_name"'],
  ['meta', 'property="og:type"'],
  ['meta', 'property="og:locale"'],
  ['meta', 'name="twitter:title"'],
  ['meta', 'name="twitter:description"'],
  ['meta', 'name="twitter:image"'],
  ['meta', 'name="twitter:image:alt"'],
  ['meta', 'name="twitter:card"'],
  ['meta', 'name="robots"'],
  ['meta', 'name="googlebot"'],
  ['meta', 'name="bingbot"'],
  ['meta', 'name="author"'],
  ['meta', 'name="publisher"'],
  ['meta', 'name="geo.region"'],
  ['meta', 'name="geo.placename"'],
  ['meta', 'name="geo.position"'],
  ['meta', 'name="ICBM"'],
  ['meta', 'name="theme-color"'],
  ['meta', 'name="viewport"'],
  ['meta', 'name="language"'],
  ['meta', 'name="mobile-web-app-capable"'],
  ['meta', 'name="apple-mobile-web-app-capable"'],
  ['meta', 'name="apple-mobile-web-app-status-bar-style"'],
];

/**
 * Normalizes the prerendered head so every route serves exactly one canonical,
 * og:url, and twitter:url tag, each pointing at that route's own URL, and no
 * duplicate per-route meta tags. Search engines treat conflicting canonicals
 * as unreliable, so we strip all three and inject a single authoritative set.
 */
const sanitizeHead = (html, route) => {
  const canonicalUrl = route === '/' ? `${SITE_BASE}/` : `${SITE_BASE}${route}`;
  let cleaned = html
    .replace(/<link[^>]*rel="canonical"[^>]*>/gi, '')
    .replace(/<meta[^>]*property="og:url"[^>]*>/gi, '')
    .replace(/<meta[^>]*name="twitter:url"[^>]*>/gi, '');
  for (const [tagName, attrName] of DEDUPE_SELECTORS) {
    cleaned = dedupeTags(cleaned, tagName, attrName);
  }
  const canonicalTags =
    `    <link rel="canonical" href="${canonicalUrl}" />\n` +
    `    <meta property="og:url" content="${canonicalUrl}" />\n` +
    `    <meta name="twitter:url" content="${canonicalUrl}" />\n`;
  return cleaned.replace('<head>', `<head>\n${canonicalTags}`);
};

// Minimal static file server with SPA fallback.
const server = createServer(async (req, res) => {
  try {
    const url = new URL(req.url, `http://localhost:${PORT}`);
    let pathname = decodeURIComponent(url.pathname);
    if (pathname === '/') pathname = '/index.html';
    const filePath = normalize(join(DIST, pathname));
    let body = await readFile(filePath);
    res.writeHead(200, { 'Content-Type': MIME[extname(filePath)] || 'application/octet-stream' });
    res.end(body);
  } catch {
    try {
      const index = await readFile(join(DIST, 'index.html'));
      res.writeHead(200, { 'Content-Type': 'text/html' });
      res.end(index);
    } catch (e) {
      res.writeHead(500);
      res.end('prerender server error');
    }
  }
});

const sleep = (ms) => new Promise((r) => setTimeout(r, ms));

async function launchBrowser() {
  const attempts = [
    {
      label: 'puppeteer bundled chrome',
      options: {
        headless: true,
        args: ['--no-sandbox', '--disable-setuid-sandbox', '--disable-dev-shm-usage'],
      },
    },
    {
      label: `PUPPETEER_EXECUTABLE_PATH (${process.env.PUPPETEER_EXECUTABLE_PATH || 'unset'})`,
      options: {
        headless: true,
        args: ['--no-sandbox', '--disable-setuid-sandbox', '--disable-dev-shm-usage'],
        executablePath: process.env.PUPPETEER_EXECUTABLE_PATH,
      },
      condition: () => !!process.env.PUPPETEER_EXECUTABLE_PATH,
    },
  ];

  for (const attempt of attempts) {
    if (attempt.condition && !attempt.condition()) continue;
    try {
      const browser = await puppeteer.launch(attempt.options);
      console.log(`[prerender] launched browser via ${attempt.label}`);
      return browser;
    } catch (e) {
      console.warn(`[prerender] could not launch browser via ${attempt.label}: ${e.message.split('\n')[0]}`);
    }
  }
  return null;
}

async function main() {
  await new Promise((resolve) => server.listen(activePort, resolve));
  activePort = server.address().port;
  console.log(`[prerender] serving ${DIST} on http://localhost:${activePort}`);

  const browser = await launchBrowser();
  if (!browser) {
    console.warn('[prerender] no usable browser found. Skipping prerendering (SPA fallback will serve the site).');
    server.close();
    return;
  }

  for (const route of ROUTES) {
    const page = await browser.newPage();
    await page.setViewport({ width: 1440, height: 20000 });
    await page.setRequestInterception(true);

    page.on('request', (req) => {
      const url = req.url();
      const isSameOrigin = url.startsWith(`http://localhost:${activePort}`);
      const isBlocked = BLOCK_PREFIXES.some((p) => url.startsWith(p));
      if (isBlocked) {
        req.abort();
      } else if (!isSameOrigin && (url.endsWith('.mp4') || url.endsWith('.mov'))) {
        req.abort();
      } else {
        req.continue();
      }
    });

    try {
      await page.goto(`http://localhost:${activePort}${route}`, {
        waitUntil: 'domcontentloaded',
        timeout: 45000,
      });
      // Let React hydrate, lazy sections intersect, and PageTransition fade in.
      await page.waitForFunction(
        () => {
          const h1 = document.querySelector('h1');
          const root = document.getElementById('root');
          return h1 && root && root.textContent.length > 200;
        },
        { timeout: 30000 }
      ).catch(() => {});
      await sleep(2500);

      const html = sanitizeHead(await page.content(), route);

      const outputPath =
        route === '/' ? join(DIST, 'index.html') : join(DIST, route, 'index.html');
      await mkdir(join(outputPath, '..'), { recursive: true });
      await writeFile(outputPath, html);
      console.log(`[prerender] ✓ ${route} -> ${outputPath.replace(DIST, 'dist')}`);
    } catch (e) {
      console.error(`[prerender] ✗ ${route}:`, e.message);
    } finally {
      await page.close();
    }
  }

  await browser.close();
  server.close();
  console.log('[prerender] done.');
}

main().catch((e) => {
  console.error('[prerender] fatal:', e);
  server.close();
  process.exit(1);
});
