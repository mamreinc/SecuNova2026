export const baseSEO = {
  siteName: 'SecuNova Inc.',
  siteUrl: 'https://secunovainc.com',
  defaultImage: 'https://secunovainc.com/logo/secunova-logo.png',
  defaultAuthor: 'SecuNova Inc.',
  companyName: 'SecuNova Inc.',
  keywords: 'SecuNova Consulting, SecuNova Inc Calgary, SecuNova Consulting Calgary, consulting firm Calgary, digital transformation consulting Calgary, executive training Alberta, custom corporate websites Calgary, B2B website copywriting, SEO content strategy, digital engineering, technology consulting Canada',
  phone: '+1-403-401-1552',
  emergencyPhone: '+1-403-401-1552',
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
      'logo': baseSEO.defaultImage,
      'image': baseSEO.defaultImage,
      'priceRange': service.priceRange || '$$',
      'aggregateRating': {
        '@type': 'AggregateRating',
        'ratingValue': '4.9',
        'reviewCount': '127',
        'bestRating': '5',
        'worstRating': '1'
      }
    },
    'areaServed': [
      {
        '@type': 'City',
        'name': 'Calgary'
      },
      {
        '@type': 'State',
        'name': 'Alberta'
      }
    ],
    'serviceType': service.name,
    'offers': service.features ? {
      '@type': 'AggregateOffer',
      'priceCurrency': 'CAD',
      'availability': 'https://schema.org/InStock',
      'itemOffered': service.features.map(feature => ({
        '@type': 'Service',
        'name': feature
      }))
    } : undefined
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
    'mainEntity': faqs.map(faq => ({
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
    '@type': 'LocalBusiness',
    '@id': baseSEO.siteUrl,
    'name': baseSEO.companyName,
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
        'closes': '17:00'
      }
    ],
    'image': baseSEO.defaultImage,
    'logo': baseSEO.defaultImage,
    'description': 'A Canadian consulting and technology firm in Calgary, AB. Strategic consulting, executive programs, custom corporate websites, and growth engineering for North American businesses.',
    'aggregateRating': {
      '@type': 'AggregateRating',
      'ratingValue': '4.9',
      'reviewCount': '127',
      'bestRating': '5',
      'worstRating': '1'
    },
    'sameAs': [baseSEO.social.linkedin]
  };
};

export const servicesData = {
  'technical-support': {
    name: 'Technical Support Services Calgary',
    title: 'Technical Support Calgary | 24/7 IT Support Services Alberta | SecuNova Inc.',
    description: 'Professional 24/7 technical IT support in Calgary & Alberta. Remote assistance, on-site support, system optimization, troubleshooting. Fast response times. Certified technicians. Serving businesses across Calgary.',
    keywords: 'SecuNova Consulting, technical support Calgary, IT support Calgary, 24/7 IT support Calgary, computer support Calgary, IT help desk Calgary, remote IT support Calgary, on-site IT support Calgary, Calgary tech support, IT troubleshooting Calgary, technical assistance Calgary, Calgary IT technicians, help desk services Calgary',
    features: ['24/7 Remote Support', 'On-Site Assistance', 'System Optimization', 'Troubleshooting', 'Hardware Support', 'Software Support']
  },
  'home-tech-support': {
    name: 'Home Tech Support Calgary',
    title: 'Home Tech Support Calgary | Residential IT Services Alberta | SecuNova Inc.',
    description: 'Professional home tech support in Calgary. Computer repair, network setup, smart home installation, virus removal, data recovery. Same-day service available. Emergency support 24/7.',
    keywords: 'SecuNova Consulting, home tech support Calgary, residential IT Calgary, home computer repair Calgary, Calgary home IT services, smart home setup Calgary, home network Calgary, computer troubleshooting Calgary, Calgary tech help home',
    features: ['Computer Repair', 'Network Setup', 'Smart Home Installation', 'Virus Removal', 'Data Recovery', 'Emergency Support']
  },
  'managed-it': {
    name: 'Managed IT Services Calgary',
    title: 'Managed IT Services Calgary | Managed Service Provider Alberta | SecuNova MSP',
    description: 'Comprehensive managed IT services in Calgary & Alberta. Proactive monitoring, cloud management, network administration, backup solutions. Reduce costs, improve security. Trusted MSP for Calgary businesses.',
    keywords: 'SecuNova Consulting, managed IT services Calgary, MSP Calgary, managed service provider Calgary, IT management Calgary, proactive IT Calgary, cloud management Calgary, network administration Calgary, IT monitoring Calgary, Calgary MSP, Alberta managed IT',
    features: ['Proactive Monitoring', 'Cloud Management', 'Network Administration', 'Backup Solutions', 'Security Management', 'IT Consulting']
  },
  'managed-it-services': {
    name: 'Managed IT Support Calgary',
    title: 'Managed IT Support Services Calgary | Complete IT Management Alberta | SecuNova',
    description: 'Complete managed IT support for Calgary businesses. Infrastructure management, cybersecurity, cloud services, data backup, disaster recovery. Scalable solutions for SMBs.',
    keywords: 'SecuNova Consulting, managed IT support Calgary, IT infrastructure Calgary, IT management services Calgary, business IT Calgary, Calgary IT provider, enterprise IT Calgary, IT support packages Calgary',
    features: ['Infrastructure Management', 'Cybersecurity', 'Cloud Services', 'Data Backup', 'Disaster Recovery', 'IT Strategy']
  },
  'cybersecurity': {
    name: 'Cybersecurity Services Calgary',
    title: 'Cybersecurity Services Calgary | Cyber Security Solutions Alberta | SecuNova Inc.',
    description: 'Enterprise-grade cybersecurity services in Calgary & Alberta. Threat detection, security assessments, penetration testing, vulnerability scanning, compliance management. Protecting Calgary businesses from cyber threats.',
    keywords: 'SecuNova Consulting, cybersecurity Calgary, cyber security Calgary, IT security Calgary, network security Calgary, penetration testing Calgary, security audit Calgary, vulnerability assessment Calgary, cybersecurity services Alberta, Calgary cybersecurity company',
    features: ['Threat Detection', 'Security Assessments', 'Penetration Testing', 'Vulnerability Scanning', 'Compliance Management', '24/7 Monitoring']
  },
  'web-development': {
    name: 'Web Development & Landing Pages Calgary',
    title: 'Web Development & Landing Pages Calgary | Custom Corporate Websites Alberta | SecuNova Inc.',
    description: 'Custom corporate websites, web applications, and high-converting landing pages in Calgary & Alberta. React, Node.js, full-stack development, conversion-focused web design, e-commerce. SEO-optimized, mobile-responsive. Expert Calgary web developers.',
    keywords: 'SecuNova Consulting, web development Calgary, web developer Calgary, custom website Calgary, Calgary web development company, full-stack development Calgary, React developer Calgary, e-commerce Calgary, web application Calgary, web design Calgary, website design Calgary, landing pages Calgary, high-converting landing pages Calgary, conversion focused web design Calgary',
    features: ['Custom Development', 'Full-Stack Solutions', 'E-Commerce', 'Web Applications', 'Landing Pages', 'Conversion-Focused Design']
  },
  'wordpress': {
    name: 'WordPress Development Calgary',
    title: 'WordPress Development Calgary | WordPress Website Design Alberta | SecuNova',
    description: 'Expert WordPress development in Calgary. Custom themes, plugin development, WooCommerce, WordPress optimization. Calgary WordPress specialists.',
    keywords: 'SecuNova Consulting, WordPress Calgary, WordPress development Calgary, WordPress designer Calgary, WooCommerce Calgary, WordPress website Calgary, custom WordPress Calgary',
    features: ['Custom Themes', 'Plugin Development', 'WooCommerce', 'WordPress Optimization', 'Security Hardening', 'Maintenance']
  },
  'mobile-apps': {
    name: 'Mobile App Development Calgary',
    title: 'Mobile App Development Calgary | iOS Android App Developers Alberta | SecuNova',
    description: 'Custom mobile app development in Calgary. iOS, Android, React Native, cross-platform apps. Expert Calgary mobile developers.',
    keywords: 'SecuNova Consulting, mobile app development Calgary, app developer Calgary, iOS development Calgary, Android development Calgary, React Native Calgary, Calgary app development company',
    features: ['iOS Development', 'Android Development', 'Cross-Platform Apps', 'React Native', 'App Design', 'App Maintenance']
  },
  'ui-ux-design': {
    name: 'UI/UX Design Calgary',
    title: 'UI/UX Design Calgary | User Experience Design Alberta | SecuNova Inc.',
    description: 'Professional UI/UX design services in Calgary. User research, wireframing, prototyping, usability testing. Award-winning Calgary UX designers.',
    keywords: 'SecuNova Consulting, UI UX design Calgary, user experience Calgary, UX designer Calgary, UI designer Calgary, Calgary UX agency, user interface design Calgary',
    features: ['User Research', 'Wireframing', 'Prototyping', 'Usability Testing', 'Design Systems', 'Accessibility']
  },
  'seo-marketing': {
    name: 'SEO Marketing Calgary',
    title: 'SEO Marketing Calgary | Digital Marketing Services Alberta | SecuNova Inc.',
    description: 'SEO and digital marketing services in Calgary. Search engine optimization, content marketing, PPC, social media marketing. Increase traffic and conversions.',
    keywords: 'SecuNova Consulting, SEO Calgary, search engine optimization Calgary, digital marketing Calgary, SEO services Calgary, Calgary SEO company, PPC Calgary, content marketing Calgary',
    features: ['Search Engine Optimization', 'Content Marketing', 'PPC Advertising', 'Social Media Marketing', 'Analytics', 'Conversion Optimization']
  },
  'branding': {
    name: 'Branding Services Calgary',
    title: 'Branding Services Calgary | Brand Identity Design Alberta | SecuNova Inc.',
    description: 'Professional branding services in Calgary. Logo design, brand identity, brand strategy, visual identity. Build a memorable brand.',
    keywords: 'SecuNova Consulting, branding Calgary, brand design Calgary, logo design Calgary, brand identity Calgary, Calgary branding agency, visual identity Calgary',
    features: ['Logo Design', 'Brand Identity', 'Brand Strategy', 'Visual Identity', 'Brand Guidelines', 'Rebranding']
  },
  'photography': {
    name: 'Professional Photography Calgary',
    title: 'Professional Photography Calgary | Commercial Photography Alberta | SecuNova',
    description: 'Professional photography services in Calgary. Commercial, corporate, product photography. High-quality images for your business.',
    keywords: 'SecuNova Consulting, photography Calgary, commercial photography Calgary, corporate photography Calgary, product photography Calgary, professional photographer Calgary',
    features: ['Commercial Photography', 'Corporate Photography', 'Product Photography', 'Photo Editing', 'Studio Services', 'On-Location Shoots']
  }
};
