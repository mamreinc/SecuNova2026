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

import { createElement, type ReactNode } from 'react';
import { baseSEO } from './seo-config';

interface SeoMetaProps {
  title: string;
  description: string;
  url: string;
  type?: 'website' | 'article';
  image?: string;
  imageAlt?: string;
  robots?: string;
}

const ROBOTS_DEFAULT = 'index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1';
const ROBOTS_NOINDEX = 'noindex, nofollow, noarchive, nosnippet';

/**
 * Builds a complete, deduplicated set of per-page SEO meta tags for use inside
 * a react-helmet-async <Helmet> block. Covers Open Graph, Twitter Card, robots,
 * canonical, geo-targeting, hreflang, and shared authorship signals.
 *
 * NOTE: Do NOT manually add a duplicate <link rel="canonical"> in the same
 * <Helmet> block -- this helper already emits the canonical.
 */
export const buildSeoTags = ({
  title,
  description,
  url,
  type = 'website',
  image = `${baseSEO.siteUrl}/og-image.png`,
  imageAlt,
  robots = ROBOTS_DEFAULT,
}: SeoMetaProps): ReactNode[] => {
  const absoluteUrl = `${baseSEO.siteUrl}${url}`;
  const alt = imageAlt || title;

  return [
    /* Robots */
    createElement('meta', { key: 'robots', name: 'robots', content: robots }),
    createElement('meta', { key: 'googlebot', name: 'googlebot', content: robots }),
    createElement('meta', { key: 'bingbot', name: 'bingbot', content: robots }),

    /* Canonical + hreflang */
    createElement('link', { key: 'canonical', rel: 'canonical', href: absoluteUrl }),
    createElement('link', { key: 'hreflang-en', rel: 'alternate', hrefLang: 'en', href: absoluteUrl }),
    createElement('link', { key: 'hreflang-default', rel: 'alternate', hrefLang: 'x-default', href: absoluteUrl }),

    /* Authorship */
    createElement('meta', { key: 'author', name: 'author', content: baseSEO.defaultAuthor }),
    createElement('meta', { key: 'publisher', name: 'publisher', content: baseSEO.legalName }),

    /* Geographic targeting (Calgary, AB) */
    createElement('meta', { key: 'geo.region', name: 'geo.region', content: 'CA-AB' }),
    createElement('meta', { key: 'geo.placename', name: 'geo.placename', content: 'Calgary' }),
    createElement('meta', { key: 'geo.position', name: 'geo.position', content: `${baseSEO.geo.latitude};${baseSEO.geo.longitude}` }),
    createElement('meta', { key: 'ICBM', name: 'ICBM', content: `${baseSEO.geo.latitude}, ${baseSEO.geo.longitude}` }),

    /* Open Graph */
    createElement('meta', { key: 'og:type', property: 'og:type', content: type }),
    createElement('meta', { key: 'og:url', property: 'og:url', content: absoluteUrl }),
    createElement('meta', { key: 'og:locale', property: 'og:locale', content: 'en_CA' }),
    createElement('meta', { key: 'og:locale:alternate', property: 'og:locale:alternate', content: 'fr_CA' }),
    createElement('meta', { key: 'og:site_name', property: 'og:site_name', content: baseSEO.siteName }),
    createElement('meta', { key: 'og:title', property: 'og:title', content: title }),
    createElement('meta', { key: 'og:description', property: 'og:description', content: description }),
    createElement('meta', { key: 'og:image', property: 'og:image', content: image }),
    createElement('meta', { key: 'og:image:secure_url', property: 'og:image:secure_url', content: image }),
    createElement('meta', { key: 'og:image:type', property: 'og:image:type', content: 'image/png' }),
    createElement('meta', { key: 'og:image:width', property: 'og:image:width', content: '1200' }),
    createElement('meta', { key: 'og:image:height', property: 'og:image:height', content: '630' }),
    createElement('meta', { key: 'og:image:alt', property: 'og:image:alt', content: alt }),

    /* Twitter Card */
    createElement('meta', { key: 'twitter:card', name: 'twitter:card', content: 'summary_large_image' }),
    createElement('meta', { key: 'twitter:site', name: 'twitter:site', content: '@SecuNova' }),
    createElement('meta', { key: 'twitter:creator', name: 'twitter:creator', content: '@SecuNova' }),
    createElement('meta', { key: 'twitter:url', name: 'twitter:url', content: absoluteUrl }),
    createElement('meta', { key: 'twitter:title', name: 'twitter:title', content: title }),
    createElement('meta', { key: 'twitter:description', name: 'twitter:description', content: description }),
    createElement('meta', { key: 'twitter:image', name: 'twitter:image', content: image }),
    createElement('meta', { key: 'twitter:image:alt', name: 'twitter:image:alt', content: alt }),

    /* Generative Engine Optimization (GEO) & Dublin Core Standards */
    createElement('meta', { key: 'dc-title', name: 'DC.title', content: title }),
    createElement('meta', { key: 'dc-creator', name: 'DC.creator', content: baseSEO.defaultAuthor }),
    createElement('meta', { key: 'dc-description', name: 'DC.description', content: description }),
    createElement('meta', { key: 'dc-publisher', name: 'DC.publisher', content: baseSEO.legalName }),
    createElement('meta', { key: 'dc-language', name: 'DC.language', content: 'en-CA' }),
    createElement('meta', { key: 'dc-type', name: 'DC.type', content: 'Service' }),
    createElement('meta', { key: 'dc-format', name: 'DC.format', content: 'text/html' }),
    createElement('meta', { key: 'dc-identifier', name: 'DC.identifier', content: absoluteUrl }),
    createElement('meta', { key: 'dc-coverage', name: 'DC.coverage', content: 'Calgary, Alberta, Canada, North America' }),
    createElement('meta', { key: 'dc-rights', name: 'DC.rights', content: `Copyright (c) ${baseSEO.legalName}. All rights reserved.` }),
    createElement('meta', { key: 'dc-date-created', name: 'DC.date.created', content: '2025-01-01' }),

    /* AI Search Citation Optimization & Machine-Readable Manifests */
    createElement('meta', { key: 'citation-title', name: 'citation_title', content: title }),
    createElement('meta', { key: 'citation-author', name: 'citation_author', content: baseSEO.defaultAuthor }),
    createElement('meta', { key: 'citation-url', name: 'citation_fulltext_html_url', content: absoluteUrl }),
    createElement('meta', { key: 'citation-publisher', name: 'citation_publisher', content: baseSEO.legalName }),
    createElement('meta', { key: 'citation-publication-date', name: 'citation_publication_date', content: '2025/01/01' }),
    createElement('meta', { key: 'ai-content-declaration', name: 'ai-content-declaration', content: 'human-directed-bespoke-engineering' }),
    createElement('meta', { key: 'llms-txt', name: 'llms-txt', content: `${baseSEO.siteUrl}/llms.txt` }),
    createElement('meta', { key: 'ai-agent-discovery', name: 'ai-agent-discovery', content: 'allowed' }),
    createElement('link', { key: 'llms-manifest', rel: 'alternate', type: 'text/plain', href: `${baseSEO.siteUrl}/llms.txt`, title: 'LLM Context Manifest' }),
    createElement('link', { key: 'llms-full-manifest', rel: 'alternate', type: 'text/plain', href: `${baseSEO.siteUrl}/llms-full.txt`, title: 'Comprehensive LLM Knowledge Base' }),
  ];
};

export { ROBOTS_DEFAULT, ROBOTS_NOINDEX };

