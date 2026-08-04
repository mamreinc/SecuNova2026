/*
 ========================================
 PRERENDER SCRIPT - SecuNova Consulting
 Renders every static SPA route into its own
 static index.html so search engines and social
 crawlers see the full HTML + meta tags immediately.

 Uses the project's top-level puppeteer (modern).
 ========================================
 */

import { createServer } from 'node:http';
import { readFile, writeFile, mkdir } from 'node:fs/promises';
import { extname, join, normalize } from 'node:path';
import { fileURLToPath } from 'node:url';
import puppeteer from 'puppeteer';

const __dirname = fileURLToPath(new URL('.', import.meta.url));
const DIST = normalize(join(__dirname, '..', 'dist'));
const PORT = process.env.PRERENDER_PORT || '4199';

const ROUTES = [
  '/',
  '/services',
  '/services/web-development',
  '/services/ui-ux-design',
  '/services/seo-marketing',
  '/services/digital-project-management',
  '/about',
  '/about/our-work',
  '/about/our-work/nova',
  '/about/our-work/career-os',
  '/about/our-work/secuboost',
  '/about/our-work/journalism-audit',
  '/about/our-work/lead-finder',
  '/about/our-work/canadaquest',
  '/about/our-work/moonyyc',
  '/about/our-work/yycecho',
  '/about/our-work/abarabic',
  '/contact',
  '/faq',
  '/free-services',
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

async function main() {
  await new Promise((resolve) => server.listen(PORT, resolve));
  console.log(`[prerender] serving ${DIST} on http://localhost:${PORT}`);

  const browser = await puppeteer.launch({
    headless: true,
    args: ['--no-sandbox', '--disable-setuid-sandbox', '--disable-dev-shm-usage'],
  });

  for (const route of ROUTES) {
    const page = await browser.newPage();
    await page.setViewport({ width: 1440, height: 20000 });
    await page.setRequestInterception(true);

    page.on('request', (req) => {
      const url = req.url();
      const isSameOrigin = url.startsWith(`http://localhost:${PORT}`);
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
      await page.goto(`http://localhost:${PORT}${route}`, {
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

      const html = await page.content();

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
