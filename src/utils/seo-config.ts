export const baseSEO = {
  siteName: 'SecuNova Consulting',
  siteUrl: 'https://secunovainc.com',
  defaultImage: 'https://secunovainc.com/og-image.png',
  logo: 'https://secunovainc.com/logo/secunova-logo.png',
  defaultAuthor: 'SecuNova Inc.',
  companyName: 'SecuNova Consulting',
  legalName: 'SecuNova Inc.',
  slogan: 'Strategic Advisory & Digital Transformation for the Digital Enterprise.',
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
    'SecuNova Inc.',
    'SecuNova Inc Calgary',
    'SecuNova Consulting',
    'SecuNova Consulting Calgary',
    'consulting firm Calgary',
    'executive IT consulting firm Calgary',
    'IT consulting Calgary',
    'digital transformation consulting Calgary'
  ],
  services: [
    'strategic advisory Calgary',
    'Project Management as a Service Calgary',
    'PMaaS Calgary',
    'digital transformation roadmap Calgary',
    'business process reengineering Alberta',
    'cloud transformation AWS GCP',
    'cybersecurity risk management Calgary',
    'customer experience strategy Canada',
    'data analytics strategy Calgary'
  ],
  longTail: [
    'Calgary consulting and advisory firm',
    'digital transformation consulting Canada',
    'project management as a service Alberta',
    'organizational change management Canada',
    'feasibility studies and digital readiness assessment',
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
    title: 'SecuNova Consulting Calgary | Strategic Advisory & Digital Transformation',
    description:
      'SecuNova Consulting is a Calgary-based advisory firm delivering strategic advisory, digital transformation, and Project Management as a Service (PMaaS) to restructure organizations for the digital age.',
    keywords:
      'SecuNova Consulting, SecuNova Consulting Calgary, consulting firm Calgary, strategic advisory Calgary, digital transformation Canada, PMaaS Calgary, business process reengineering, cybersecurity risk management'
  },
  '/services': {
    title: 'Services Calgary | Strategic Advisory & PMaaS | SecuNova Consulting',
    description:
      'Explore SecuNova Consulting services in Calgary: strategic advisory, digital transformation, cybersecurity & risk management, customer experience, and Project Management as a Service (PMaaS).',
    keywords:
      'SecuNova Consulting, strategic advisory Calgary, PMaaS Calgary, digital transformation roadmap Calgary, business process reengineering, cloud transformation, cybersecurity governance, consulting firm Alberta'
  },
  '/services/strategic-advisory-pmaas': {
    title: 'Strategic Advisory & PMaaS Calgary | Digital Transformation | SecuNova Consulting',
    description:
      'Strategic advisory, digital transformation, cybersecurity & risk management, customer experience, and Project Management as a Service (PMaaS) in Calgary, AB.',
    keywords:
      'strategic advisory Calgary, PMaaS Calgary, Project Management as a Service, digital transformation roadmap Calgary, BPR, cloud transformation AWS GCP, AI automation RPA, SecuNova Consulting'
  },
  '/services/enterprise-it-security-audits': {
    title: 'Enterprise IT & Security Audits Calgary | SecuNova Consulting',
    description:
      'Enterprise IT and security audits in Calgary. Forensic infrastructure audits, security posture reviews, subscription bloat elimination, and compliance advisory.',
    keywords:
      'enterprise IT audit Calgary, IT security audit Calgary, security posture review, infrastructure forensic audit, subscription bloat audit, compliance advisory Alberta, SecuNova Consulting'
  },
  '/about': {
    title: 'About SecuNova Consulting | Senior-Led Advisory Firm in Calgary',
    description:
      'Meet SecuNova Consulting, a Calgary-based advisory firm restructuring organizations through strategic advisory, digital transformation, and Project Management as a Service (PMaaS).',
    keywords:
      'About SecuNova Consulting, senior-led consulting firm Calgary, Calgary consulting and advisory firm, digital transformation consulting Alberta, SecuNova team'
  },
  '/about/our-work': {
    title: 'Our Work & Products | SecuNova Consulting',
    description:
      'Explore SecuNova Consulting shipped products: Nova AI agent, Career OS, SecuBoost, and more. Engineered end to end in-house with zero technical debt.',
    keywords:
      'SecuNova products, Nova AI agent, Career OS, custom software portfolio Calgary, zero-debt architecture'
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
      'Answers to common questions about SecuNova Consulting: strategic advisory, PMaaS, digital transformation, and enterprise IT and security audits in Calgary.',
    keywords:
      'SecuNova FAQ, IT consulting questions, PMaaS questions, enterprise IT audit Calgary, security audit Calgary, strategic advisory'
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
      'Read the SecuNova Consulting privacy policy and terms of service for our strategic advisory and IT audit services in Calgary and Alberta.',
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
      'SecuNova Consulting is a Calgary-based advisory firm delivering strategic advisory, digital transformation, and Project Management as a Service (PMaaS). Independent advisory that restructures organizations for the digital age.',
    'foundingDate': '2025',
    'slogan': baseSEO.slogan,
    'sameAs': [baseSEO.social.linkedin]
  };
};
