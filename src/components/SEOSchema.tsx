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
import React from 'react';
import { Helmet } from 'react-helmet-async';

interface SEOSchemaProps {
  type: 'organization' | 'service' | 'faq' | 'breadcrumb' | 'localbusiness' | 'webpage' | 'article';
  data?: SEOSchemaData;
}

interface SEOSchemaData {
  name?: string;
  description?: string;
  url?: string;
  title?: string;
  publishedTime?: string;
  modifiedTime?: string;
  image?: string;
  services?: Array<{ name: string; description?: string }>;
  faqs?: Array<{ question: string; answer: string }>;
  breadcrumbs?: Array<{ name: string; url: string }>;
}

const SEOSchema: React.FC<SEOSchemaProps> = ({ type, data }) => {
  const generateSchema = () => {
    switch (type) {
      case 'organization':
        return {
          "@context": "https://schema.org",
          "@type": "Organization",
          "name": "SecuNova Inc.",
          "alternateName": ["SecuNova", "Secu Nova", "SecuNova IT"],
          "url": "https://secunovainc.com",
          "logo": {
            "@type": "ImageObject",
            "url": "https://secunovainc.com/logo/secunova-logo.png",
            "width": "800",
            "height": "800"
          },
          "image": "https://secunovainc.com/logo/secunova-logo.png",
          "description": "A Canadian consulting and technology firm in Calgary, Alberta. Helping organizations navigate digital change with strategic consulting, executive programs, and digital engineering.",
          "foundingDate": "2016",
          "foundingLocation": {
            "@type": "Place",
            "name": "Poland, Europe"
          },
          "slogan": "Navigate Digital Change. Before It Costs You Momentum.",
          "address": {
            "@type": "PostalAddress",
            "streetAddress": "#270, 1122 3 St SE Ste 1906",
            "addressLocality": "Calgary",
            "addressRegion": "AB",
            "postalCode": "T2G 0E7",
            "addressCountry": "CA"
          },
          "geo": {
            "@type": "GeoCoordinates",
            "latitude": "51.0447",
            "longitude": "-114.0719"
          },
          "contactPoint": [
            {
              "@type": "ContactPoint",
              "telephone": "+1-403-401-1552",
              "contactType": "customer service",
              "email": "hello@secunovainc.com",
              "availableLanguage": ["English", "French"],
              "areaServed": "CA-AB",
              "contactOption": "TollFree",
              "hoursAvailable": {
                "@type": "OpeningHoursSpecification",
                "dayOfWeek": [
                  "Monday",
                  "Tuesday",
                  "Wednesday",
                  "Thursday",
                  "Friday"
                ],
                "opens": "09:00",
                "closes": "17:00"
              }
            },
            {
              "@type": "ContactPoint",
              "telephone": "+1-403-401-1552",
              "contactType": "emergency",
              "availableLanguage": ["English"],
              "areaServed": "CA-AB",
              "hoursAvailable": "24/7"
            }
          ],
          "sameAs": [
            "https://ca.linkedin.com/company/secunovac"
          ]
        };

      case 'service':
        return {
          "@context": "https://schema.org",
          "@type": "Service",
          "name": data?.name || "IT Services",
          "description": data?.description || "Professional IT services",
          "provider": {
            "@type": "Organization",
            "name": "SecuNova Inc.",
            "url": "https://secunovainc.com"
          },
          "areaServed": {
            "@type": "Place",
            "name": "Calgary, Alberta, Canada"
          },
          "hasOfferCatalog": {
            "@type": "OfferCatalog",
            "name": "IT Services",
            "itemListElement": data?.services || []
          }
        };

      case 'faq':
        return {
          "@context": "https://schema.org",
          "@type": "FAQPage",
          "mainEntity": data?.faqs?.map((faq) => ({
            "@type": "Question",
            "name": faq.question,
            "acceptedAnswer": {
              "@type": "Answer",
              "text": faq.answer
            }
          })) || []
        };

      case 'breadcrumb':
        return {
          "@context": "https://schema.org",
          "@type": "BreadcrumbList",
          "itemListElement": data?.breadcrumbs?.map((crumb, index) => ({
            "@type": "ListItem",
            "position": index + 1,
            "name": crumb.name,
            "item": crumb.url
          })) || []
        };

      case 'localbusiness':
        return {
          "@context": "https://schema.org",
          "@type": "LocalBusiness",
          "@id": "https://secunovainc.com",
          "name": "SecuNova Inc.",
          "url": "https://secunovainc.com",
          "telephone": "+1-403-401-1552",
          "email": "hello@secunovainc.com",
          "priceRange": "$$",
          "address": {
            "@type": "PostalAddress",
            "streetAddress": "#270, 1122 3 St SE Ste 1906",
            "addressLocality": "Calgary",
            "addressRegion": "AB",
            "postalCode": "T2G 0E7",
            "addressCountry": "CA"
          },
          "geo": {
            "@type": "GeoCoordinates",
            "latitude": "51.0447",
            "longitude": "-114.0719"
          },
          "openingHoursSpecification": [
            {
              "@type": "OpeningHoursSpecification",
              "dayOfWeek": ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
              "opens": "09:00",
              "closes": "17:00"
            }
          ],
          "image": "https://secunovainc.com/logo/secunova-logo.png",
          "description": "A Canadian consulting and technology firm in Calgary, AB. Strategic consulting, executive programs, custom corporate websites, and growth engineering."
        };

      case 'webpage':
        return {
          "@context": "https://schema.org",
          "@type": "WebPage",
          "name": data?.title || "SecuNova Inc.",
          "description": data?.description || "Premier IT services in Calgary",
          "url": data?.url || "https://secunovainc.com",
          "inLanguage": "en-CA",
          "isPartOf": {
            "@type": "WebSite",
            "name": "SecuNova Inc.",
            "url": "https://secunovainc.com"
          },
          "about": {
            "@type": "Organization",
            "name": "SecuNova Inc."
          },
          "publisher": {
            "@type": "Organization",
            "name": "SecuNova Inc.",
            "logo": {
              "@type": "ImageObject",
              "url": "https://secunovainc.com/logo/secunova-logo.png"
            }
          }
        };

      case 'article':
        return {
          "@context": "https://schema.org",
          "@type": "Article",
          "headline": data?.title || "",
          "description": data?.description || "",
          "image": data?.image || "https://secunovainc.com/logo/secunova-logo.png",
          "datePublished": data?.publishedTime || new Date().toISOString(),
          "dateModified": data?.modifiedTime || new Date().toISOString(),
          "author": {
            "@type": "Organization",
            "name": "SecuNova Inc."
          },
          "publisher": {
            "@type": "Organization",
            "name": "SecuNova Inc.",
            "logo": {
              "@type": "ImageObject",
              "url": "https://secunovainc.com/logo/secunova-logo.png"
            }
          },
          "mainEntityOfPage": {
            "@type": "WebPage",
            "@id": data?.url || "https://secunovainc.com"
          }
        };

      default:
        return null;
    }
  };

  const schema = generateSchema();

  if (!schema) return null;

  return (
    <Helmet>
      <script type="application/ld+json">
        {JSON.stringify(schema)}
      </script>
    </Helmet>
  );
};

export default SEOSchema;