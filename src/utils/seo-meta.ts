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
const ROBOTS_NOINDEX = 'noindex, nofollow';

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
    createElement('meta', { key: 'robots', name: 'robots', content: robots }),
    createElement('meta', { key: 'googlebot', name: 'googlebot', content: robots }),
    createElement('link', { key: 'canonical', rel: 'canonical', href: absoluteUrl }),

    createElement('meta', { key: 'og:type', property: 'og:type', content: type }),
    createElement('meta', { key: 'og:url', property: 'og:url', content: absoluteUrl }),
    createElement('meta', { key: 'og:locale', property: 'og:locale', content: 'en_CA' }),
    createElement('meta', { key: 'og:site_name', property: 'og:site_name', content: baseSEO.siteName }),
    createElement('meta', { key: 'og:title', property: 'og:title', content: title }),
    createElement('meta', { key: 'og:description', property: 'og:description', content: description }),
    createElement('meta', { key: 'og:image', property: 'og:image', content: image }),
    createElement('meta', { key: 'og:image:secure_url', property: 'og:image:secure_url', content: image }),
    createElement('meta', { key: 'og:image:type', property: 'og:image:type', content: 'image/png' }),
    createElement('meta', { key: 'og:image:width', property: 'og:image:width', content: '1200' }),
    createElement('meta', { key: 'og:image:height', property: 'og:image:height', content: '630' }),
    createElement('meta', { key: 'og:image:alt', property: 'og:image:alt', content: alt }),

    createElement('meta', { key: 'twitter:card', name: 'twitter:card', content: 'summary_large_image' }),
    createElement('meta', { key: 'twitter:title', name: 'twitter:title', content: title }),
    createElement('meta', { key: 'twitter:description', name: 'twitter:description', content: description }),
    createElement('meta', { key: 'twitter:image', name: 'twitter:image', content: image }),
    createElement('meta', { key: 'twitter:image:alt', name: 'twitter:image:alt', content: alt }),
  ];
};

export { ROBOTS_DEFAULT, ROBOTS_NOINDEX };
