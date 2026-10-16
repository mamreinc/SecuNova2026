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

import React from 'react';
import { Helmet } from 'react-helmet-async';
import { buildSeoTags } from '../utils/seo-meta';
import SecuNovaHero from '../components/SecuNovaHero';
import AppleScrollTextReveal from '../components/AppleScrollTextReveal';
import SecuNovaHighlightsCarousel from '../components/SecuNovaHighlightsCarousel';
import SecuNovaEngineSection from '../components/SecuNovaEngineSection';
import SecuNovaFeatureShowcase from '../components/SecuNovaFeatureShowcase';
import SecuNovaMetricsStack from '../components/SecuNovaMetricsStack';
import ExecutiveDossierHub from '../components/ExecutiveDossierHub';
import SecuNovaAboutSection from '../components/SecuNovaAboutSection';
import SecuNovaConsultationSection from '../components/SecuNovaConsultationSection';

const HomePage: React.FC = () => {
  return (
    <div className="bg-black text-[#f5f5f7] min-h-screen selection:bg-[#0071e3] selection:text-white overflow-x-hidden w-full max-w-full">
      <Helmet>
        <title>SecuNova Advisory Pro | Canadian Digital Presence &amp; PMaaS Governance</title>
        <meta
          name="description"
          content="Strategic advisory that protects your bottom line while elevating your market reach. We bridge high-level digital direction with disciplined execution, free from vendor overhead."
        />
        <meta
          name="keywords"
          content="Digital Presence Consultant, strategic advisory Calgary, PMaaS Canada, executive branding, digital authority, conversion optimization, enterprise IT governance, vendor-neutral advisory Alberta"
        />
        {buildSeoTags({
          title: 'SecuNova Advisory Pro | Canadian Digital Presence & PMaaS Governance',
          description:
            'Strategic advisory that protects your bottom line while elevating your market reach. High-level digital direction, disciplined execution, and zero vendor overhead for Canadian enterprises.',
          url: '/',
          imageAlt: 'SecuNova Advisory Pro - Unfair Authority. Zero Agency Bloat.',
        })}
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@graph": [
              {
                "@type": "ProfessionalService",
                "@id": "https://secunovainc.ca/#organization",
                "name": "SecuNova Advisory Pro",
                "legalName": "SecuNova Inc.",
                "alternateName": ["SecuNova", "SecuNova Consulting", "SecuNova Calgary"],
                "url": "https://secunovainc.ca",
                "logo": "https://secunovainc.ca/logo/secunova-logo.png",
                "image": "https://secunovainc.ca/og-image.png",
                "telephone": "+1-403-401-1552",
                "email": "hello@secunovainc.ca",
                "address": {
                  "@type": "PostalAddress",
                  "addressLocality": "Calgary",
                  "addressRegion": "AB",
                  "addressCountry": "CA"
                },
                "geo": {
                  "@type": "GeoCoordinates",
                  "latitude": 51.0447,
                  "longitude": -114.0719
                },
                "priceRange": "$$$",
                "currenciesAccepted": "CAD, USD",
                "areaServed": ["Calgary", "Edmonton", "Alberta", "Canada", "United States"],
                "founder": {
                  "@type": "Person",
                  "name": "Max Amrein",
                  "jobTitle": "Founder & Practice Lead"
                },
                "sameAs": [
                  "https://ca.linkedin.com/company/secunovac"
                ],
                "hasOfferCatalog": {
                  "@type": "OfferCatalog",
                  "name": "SecuNova Executive Advisory Engines",
                  "itemListElement": [
                    {
                      "@type": "Offer",
                      "itemOffered": {
                        "@type": "Service",
                        "name": "Diagnostic Presence Audit",
                        "description": "48-vector forensic scan across digital surface, narrative positioning, conversion friction, and technical credibility leaks."
                      }
                    },
                    {
                      "@type": "Offer",
                      "itemOffered": {
                        "@type": "Service",
                        "name": "Authority Architecture",
                        "description": "High-leverage executive market positioning, conversion engineering, and institutional trust building."
                      }
                    },
                    {
                      "@type": "Offer",
                      "itemOffered": {
                        "@type": "Service",
                        "name": "PMaaS Delivery Governance",
                        "description": "Client-side Chief Project Officer oversight, milestone disbursement gating, and zero-trust vendor verification."
                      }
                    },
                    {
                      "@type": "Offer",
                      "itemOffered": {
                        "@type": "Service",
                        "name": "Local AI & IT Infrastructure Audits",
                        "description": "Private on-premises neural software applications, IT contract optimization, and technical debt recovery."
                      }
                    }
                  ]
                }
              },
              {
                "@type": "WebSite",
                "@id": "https://secunovainc.ca/#website",
                "name": "SecuNova Advisory Pro",
                "url": "https://secunovainc.ca",
                "description": "Independent Digital Presence Consulting and PMaaS Governance Practice in Calgary, Alberta.",
                "publisher": { "@id": "https://secunovainc.ca/#organization" }
              },
              {
                "@type": "BreadcrumbList",
                "@id": "https://secunovainc.ca/#breadcrumbs",
                "itemListElement": [
                  { "@type": "ListItem", "position": 1, "name": "Home", "item": "https://secunovainc.ca" }
                ]
              },
              {
                "@type": "FAQPage",
                "@id": "https://secunovainc.ca/#faq",
                "mainEntity": [
                  {
                    "@type": "Question",
                    "name": "What does SecuNova Advisory Pro deliver?",
                    "acceptedAnswer": {
                      "@type": "Answer",
                      "text": "SecuNova delivers four core advisory engines: (1) 48-Vector Diagnostic Presence Audits; (2) Strategic Authority Architecture for executive market positioning; (3) Project Management as a Service (PMaaS) for vendor governance and milestone gating; and (4) Local AI application engineering running privately on client hardware."
                    }
                  },
                  {
                    "@type": "Question",
                    "name": "How does SecuNova eliminate agency bloat and protect tech budgets?",
                    "acceptedAnswer": {
                      "@type": "Answer",
                      "text": "Unlike traditional agencies that mark up billable hours and create permanent vendor dependence, SecuNova sits strictly on the client side as a fiduciary shield. We inspect deliverables, audit code quality, gate milestone payments, and enforce strict contractual accountability."
                    }
                  },
                  {
                    "@type": "Question",
                    "name": "Does SecuNova accept commissions or vendor referral kickbacks?",
                    "acceptedAnswer": {
                      "@type": "Answer",
                      "text": "No. SecuNova maintains 100% vendor-neutral independence with zero reseller affiliations, zero commission kickbacks, and zero partner markups. Every recommendation is aligned exclusively with client financial and operational outcomes."
                    }
                  }
                ]
              }
            ]
          })}
        </script>
      </Helmet>

      {/* Monumental Hero Section ("Unfair authority. Zero agency bloat.") */}
      <SecuNovaHero />

      {/* 3. Apple-Style Scroll Text Illumination (Kinetic Typography) */}
      <AppleScrollTextReveal
        eyebrow="Fiduciary Governance Standard"
        headline="Clarity before capital. Evidence before execution."
        sentences={[
          'Enterprise technology initiatives fail silently when non-technical leaders lack independent client advocacy.',
          'External digital agencies bill hours and push proprietary lock-in while delivery accountability dissolves into excuses.',
          'SecuNova operates strictly on the client side of the table as your Chief Project Officer and fiduciary shield.',
          'We inspect code quality, audit milestone deliverables, and gate every disbursement behind verified business outcomes.',
        ]}
        citation="Independent Advisory Practice | Calgary & Canadian Enterprise Standard"
      />

      {/* 4. Apple-Style Highlights Carousel with Floating Controller Dock */}
      <SecuNovaHighlightsCarousel />

      {/* 5. What We Deliver: The 5 Core Advisory Disciplines with Horizontal Tab Glider */}
      <SecuNovaEngineSection />

      {/* 6. Interactive Side-Pill Capability Showcase (Accordion Drawer) */}
      <SecuNovaFeatureShowcase />

      {/* 7. Scroll-Scrubbed Quantitative Metrics Stack */}
      <SecuNovaMetricsStack />

      {/* 8. Verified Client Track Record: The 3 Key Engagements */}
      <ExecutiveDossierHub />

      {/* 9. About SecuNova & Executive Leadership Team */}
      <SecuNovaAboutSection />

      {/* 10. Confidential Direct Executive Engagement */}
      <SecuNovaConsultationSection />

    </div>
  );
};

export default HomePage;
