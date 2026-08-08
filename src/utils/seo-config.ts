/**
 * ============================================================================
 * PROPRIETARY CUSTOM ENGINEERING & DESIGN ARCHITECTURE
 * ----------------------------------------------------------------------------
 * All design, software architecture, UI/UX components, and source code are
 * 100% custom-engineered and designed exclusively by SecuNova.
 *
 * CORE ARCHITECTURAL ETHOS:
 * - 100% Bespoke Code: Built strictly to client specifications from scratch.
 * - Zero Pre-Made Templates: No generic agency starters or off-the-shelf themes.
 * - Senior-Led AI-Augmented Workflows (Vibe Coding): 14-day execution cycles
 *   engineered for sub-second performance (99+ Lighthouse Core Web Vitals).
 * - Full IP & Repository Handoff: 100% client asset and codebase ownership.
 *
 * Copyright (c) SecuNova. All rights reserved.
 * ============================================================================
 */
export const baseSEO = {
  siteName: 'SecuNova Consulting',
  siteUrl: 'https://secunovainc.com',
  defaultImage: 'https://secunovainc.com/og-image.png',
  logo: 'https://secunovainc.com/logo/secunova-logo.png',
  defaultAuthor: 'SecuNova Inc.',
  companyName: 'SecuNova Inc.',
  slogan: 'Navigate Digital Change. Before It Costs You Momentum.',
  phone: '+1-403-401-1552',
  phoneDisplay: '403-401-1552',
  email: 'hello@secunovainc.com',
  address: {
    street: '#270, 1122 3 St SE Ste 1906',
    city: 'Calgary',
    region: 'AB',
    postal: 'T2G 0E7',
    country: 'CA'
  },
  geo: {
    latitude: '51.0447',
    longitude: '-114.0719'
  },
  social: {
    linkedin: 'https://ca.linkedin.com/company/secunovac'
  }
};

/*
 * Keyword strategy for SecuNova Consulting
 * Primary (brand + location), service, and long-tail keywords.
 */
export const keywords = {
  primary: [
    'SecuNova Consulting',
    'SecuNova Consulting Calgary',
    'SecuNova Inc Calgary',
    'consulting firm Calgary',
    'IT consulting Calgary',
    'digital transformation consulting Calgary'
  ],
  services: [
    'custom web development Calgary',
    'React.js web development Calgary',
    'UI UX design Calgary',
    'B2B SEO strategy Calgary',
    'digital project management Calgary',
    'Project Management as a Service Calgary',
    'executive leadership consulting Alberta',
    'web maintenance Calgary',
    'tech stack audit Calgary',
    'custom web app development Calgary'
  ],
  longTail: [
    'Calgary consulting and technology firm',
    'senior-led digital engineering Calgary',
    'custom corporate websites Calgary Alberta',
    'B2B content and SEO strategy Canada',
    'Calgary IT project governance',
    'executive digital transformation advisory Calgary'
  ],
  all: function () {
    return [...this.primary, ...this.services, ...this.longTail];
  },
  asMeta: function () {
    return this.all().join(', ');
  }
};

/*
 * Per-route metadata for every page of the site.
 */
export const pageSEO = {
  '/': {
    title: 'SecuNova Consulting Calgary | Digital Transformation & Custom Web Development',
    description:
      'SecuNova Consulting is a Calgary-based consulting firm for digital transformation, executive leadership, custom web development, UI/UX design, and B2B SEO. One senior-led partner for North American leaders.',
    keywords:
      'SecuNova Consulting, SecuNova Consulting Calgary, consulting firm Calgary, digital transformation consulting Calgary, custom web development Calgary, UI UX design Calgary, B2B SEO strategy Calgary, IT consulting Canada'
  },
  '/services': {
    title: 'Consulting & Engineering Services Calgary | SecuNova Consulting',
    description:
      'Explore SecuNova Consulting services in Calgary: digital transformation consulting, executive leadership programs, custom web apps, UI/UX redesign, B2B SEO strategy, and digital project management (PMaaS).',
    keywords:
      'SecuNova Consulting, digital transformation consulting Calgary, custom web development Calgary, UI UX design Calgary, B2B SEO strategy Calgary, digital project management Calgary, consulting firm Alberta'
  },
  '/services/web-development': {
    title: 'Custom Web Development Calgary | React Web Apps & Landing Pages | SecuNova Consulting',
    description:
      'Custom web development in Calgary: React.js web applications, enterprise platforms, and high-converting landing pages built with senior-led engineering and 100% IP ownership.',
    keywords:
      'custom web development Calgary, React.js web apps, web application development Alberta, high-converting landing pages, custom corporate websites Calgary, SecuNova Consulting'
  },
  '/services/ui-ux-design': {
    title: 'UI/UX Design Calgary | Website & App Redesign | SecuNova Consulting',
    description:
      'UI/UX design and website redesign in Calgary. User research, wireframes, Figma prototypes, and conversion-focused interface design that boosts engagement and credibility.',
    keywords:
      'UI UX design Calgary, user experience design Calgary, website redesign Calgary, app UI design, Figma prototyping, interface design Calgary, SecuNova Consulting'
  },
  '/services/seo-marketing': {
    title: 'B2B SEO Strategy & Content Marketing Calgary | SecuNova Consulting',
    description:
      'B2B SEO and content strategy in Calgary. High-intent keyword strategy, executive copywriting, technical SEO, and schema markup that turn organic traffic into B2B pipeline.',
    keywords:
      'B2B SEO strategy Calgary, SEO content marketing Calgary, B2B copywriting Alberta, technical SEO Canada, thought leadership content, SecuNova Consulting'
  },
  '/services/digital-project-management': {
    title: 'Digital Project Management Calgary | PMaaS | SecuNova Consulting',
    description:
      'Digital project management (PMaaS) in Calgary. Independent project supervision, vendor oversight, budget protection, and milestone enforcement for North American organizations.',
    keywords:
      'digital project management Calgary, Project Management as a Service, PMaaS Calgary, vendor oversight, IT project governance Alberta, budget protection, SecuNova Consulting'
  },
  '/about': {
    title: 'About SecuNova Consulting | Senior-Led Consulting Firm in Calgary',
    description:
      'Meet SecuNova Consulting, a Calgary-based consulting firm built by senior architects. Strategy and engineering under one roof with 100% IP ownership and zero handoffs.',
    keywords:
      'About SecuNova Consulting, senior-led consulting firm Calgary, Calgary consulting and technology firm, IT consulting Alberta, SecuNova team'
  },
  '/about/our-work': {
    title: 'Our Work & Products | SecuNova Consulting Case Studies',
    description:
      'Explore SecuNova Consulting shipped products and case studies: Nova AI agent, Career OS, SecuBoost, and more. Custom software with zero technical debt and full IP transfer.',
    keywords:
      'SecuNova products, custom software case studies Calgary, Nova AI agent, Career OS, custom web app portfolio, zero-debt architecture'
  },
  '/contact': {
    title: 'Contact SecuNova Consulting Calgary | Free Strategy Call',
    description:
      'Contact SecuNova Consulting in Calgary, AB. Call 403-401-1552 or email hello@secunovainc.com for a free strategy call. Located at #270, 1122 3 St SE Ste 1906, Calgary, AB T2G 0E7.',
    keywords:
      'contact SecuNova Consulting Calgary, free strategy call, consulting firm Calgary contact, 403-401-1552, hello@secunovainc.com'
  },
  '/faq': {
    title: 'FAQ | SecuNova Consulting Calgary Questions Answered',
    description:
      'Answers to common questions about SecuNova Consulting: digital transformation, custom web development, UI/UX design, B2B SEO, PMaaS, and tech stack audits in Calgary.',
    keywords:
      'SecuNova FAQ, IT consulting questions, custom web development FAQ Calgary, PMaaS questions, B2B SEO Calgary, tech stack audit'
  },
  '/free-services': {
    title: 'Free Digital Services & Assessments | SecuNova Consulting Calgary',
    description:
      'Free digital assessments and resources from SecuNova Consulting: free strategy calls, digital footprint audits, and tools for Calgary businesses.',
    keywords:
      'free strategy call Calgary, free digital assessment, IT consulting free consultation, SecuNova Consulting free services'
  },
  '/join-us': {
    title: 'Join SecuNova Consulting | Careers, Partnerships & Investment',
    description:
      'Partner with SecuNova Consulting in Calgary: senior contractor roles, referral programs, executive co-founder opportunities, and seed investment.',
    keywords:
      'SecuNova careers, IT consulting jobs Calgary, tech partnership Alberta, referral program, seed investment Calgary'
  },
  '/privacy-terms': {
    title: 'Privacy Policy & Terms | SecuNova Consulting',
    description:
      'Read the SecuNova Consulting privacy policy and terms of service for our consulting and digital engineering services in Calgary and Alberta.',
    keywords:
      'SecuNova privacy policy, terms of service, data protection Alberta, consulting service terms Calgary'
  },
  '/brand': {
    title: 'Brand & Identity | SecuNova Consulting',
    description:
      'SecuNova Consulting brand guidelines, identity, and digital assets.',
    keywords: 'SecuNova brand, SecuNova Consulting identity, brand guidelines'
  },
  '/login': {
    title: 'Client Portal Login | SecuNova Consulting',
    description:
      'Secure client portal login for SecuNova Consulting clients.',
    keywords: 'SecuNova client login, client portal Calgary',
    noIndex: true
  }
};

export const getPageSEO = (path: string) => {
  return pageSEO[path as keyof typeof pageSEO] || pageSEO['/'];
};

export const generateServiceSchema = (service: {
  name: string;
  description: string;
  url: string;
  features?: string[];
  priceRange?: string;
}) => {
  return {
    '@context': 'https://schema.org',
    '@type': 'Service',
    'name': service.name,
    'description': service.description,
    'url': `${baseSEO.siteUrl}${service.url}`,
    'provider': {
      '@type': 'LocalBusiness',
      'name': baseSEO.companyName,
      'alternateName': 'SecuNova Consulting',
      'telephone': baseSEO.phone,
      'email': baseSEO.email,
      'address': {
        '@type': 'PostalAddress',
        'streetAddress': baseSEO.address.street,
        'addressLocality': baseSEO.address.city,
        'addressRegion': baseSEO.address.region,
        'postalCode': baseSEO.address.postal,
        'addressCountry': baseSEO.address.country
      },
      'geo': {
        '@type': 'GeoCoordinates',
        'latitude': baseSEO.geo.latitude,
        'longitude': baseSEO.geo.longitude
      },
      'url': baseSEO.siteUrl,
      'logo': baseSEO.logo,
      'image': baseSEO.defaultImage,
      'priceRange': service.priceRange || '$$'
    },
    'areaServed': [
      { '@type': 'City', 'name': 'Calgary' },
      { '@type': 'State', 'name': 'Alberta' },
      { '@type': 'Country', 'name': 'Canada' },
      { '@type': 'Country', 'name': 'United States' }
    ],
    'serviceType': service.name,
    'offers': service.features
      ? {
          '@type': 'AggregateOffer',
          'priceCurrency': 'CAD',
          'availability': 'https://schema.org/InStock',
          'itemOffered': service.features.map((feature) => ({
            '@type': 'Service',
            'name': feature
          }))
        }
      : undefined
  };
};

export const generateBreadcrumbs = (items: Array<{ name: string; url: string }>) => {
  return {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    'itemListElement': items.map((item, index) => ({
      '@type': 'ListItem',
      'position': index + 1,
      'name': item.name,
      'item': `${baseSEO.siteUrl}${item.url}`
    }))
  };
};

export const generateFAQSchema = (faqs: Array<{ question: string; answer: string }>) => {
  return {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    'mainEntity': faqs.map((faq) => ({
      '@type': 'Question',
      'name': faq.question,
      'acceptedAnswer': {
        '@type': 'Answer',
        'text': faq.answer
      }
    }))
  };
};

export const generateLocalBusinessSchema = () => {
  return {
    '@context': 'https://schema.org',
    '@type': ['LocalBusiness', 'ProfessionalService'],
    '@id': baseSEO.siteUrl,
    'name': baseSEO.companyName,
    'alternateName': 'SecuNova Consulting',
    'url': baseSEO.siteUrl,
    'telephone': baseSEO.phone,
    'email': baseSEO.email,
    'priceRange': '$$',
    'address': {
      '@type': 'PostalAddress',
      'streetAddress': baseSEO.address.street,
      'addressLocality': baseSEO.address.city,
      'addressRegion': baseSEO.address.region,
      'postalCode': baseSEO.address.postal,
      'addressCountry': baseSEO.address.country
    },
    'geo': {
      '@type': 'GeoCoordinates',
      'latitude': baseSEO.geo.latitude,
      'longitude': baseSEO.geo.longitude
    },
    'openingHoursSpecification': [
      {
        '@type': 'OpeningHoursSpecification',
        'dayOfWeek': ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday'],
        'opens': '09:00',
        'closes': '18:00'
      }
    ],
    'image': baseSEO.defaultImage,
    'logo': baseSEO.logo,
    'description':
      'SecuNova Consulting is a Calgary-based B2B consulting and digital engineering firm. Strategic consulting, executive leadership programs, custom web applications, UI/UX redesigns, B2B content and SEO strategy, and digital project management for North American leaders.',
    'foundingDate': '2016',
    'slogan': baseSEO.slogan,
    'sameAs': [baseSEO.social.linkedin]
  };
};
