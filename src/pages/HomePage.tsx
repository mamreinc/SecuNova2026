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
import SecuNovaLocalNav from '../components/SecuNovaLocalNav';
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
    <div className="bg-black text-[#f5f5f7] min-h-screen selection:bg-[#0071e3] selection:text-white">
      <Helmet>
        <title>SecuNova Advisory Pro | Canadian Digital Presence &amp; PMaaS Governance</title>
        <meta
          name="description"
          content="SecuNova Advisory Pro. Independent digital presence consulting, authority architecture, and PMaaS delivery governance for North American enterprise leaders."
        />
        <meta
          name="keywords"
          content="Digital Presence Consultant, strategic advisory Calgary, PMaaS Canada, executive branding, conversion optimization, digital authority, SEO advisory Alberta"
        />
        {buildSeoTags({
          title: 'SecuNova Advisory Pro | Canadian Digital Presence & PMaaS Governance',
          description:
            'Independent digital presence consulting and delivery governance for North American enterprises. We fix credibility leaks, clarify market positioning, and protect your technology budget.',
          url: '/',
          imageAlt: 'SecuNova Inc. - SecuNova Advisory Pro',
        })}
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "WebSite",
            "name": "SecuNova Inc.",
            "url": "https://secunovainc.ca",
            "description": "Independent Digital Presence Consulting and PMaaS Governance Practice in Calgary, Alberta.",
            "publisher": {
              "@type": "Organization",
              "name": "SecuNova Inc.",
              "url": "https://secunovainc.ca",
              "logo": {
                "@type": "ImageObject",
                "url": "https://secunovainc.ca/logo.png"
              }
            }
          })}
        </script>
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "BreadcrumbList",
            "itemListElement": [
              { "@type": "ListItem", "position": 1, "name": "Home", "item": "https://secunovainc.ca" }
            ]
          })}
        </script>
      </Helmet>

      {/* 1. SecuNova Sticky Sub-Navigation */}
      <SecuNovaLocalNav />

      {/* 2. Monumental Hero Section ("Unfair authority. Zero vendor waste.") */}
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
