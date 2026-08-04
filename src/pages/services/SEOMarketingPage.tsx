import React from 'react';
import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';
import { ArrowLeft, TrendingUp, Search, Target, BarChart, Globe, Zap, CheckCircle, FileText, Award, ShieldCheck, Sparkles, MessageSquare, Layers } from 'lucide-react';
import CtaSection from '../../components/CtaSection';

const SEOMarketingPage = () => {
  return (
    <div className="min-h-screen bg-white">
      <Helmet>
        <title>B2B SEO Strategy & Content Marketing Calgary | SecuNova Consulting</title>
        <meta
          name="description"
          content="B2B SEO and content strategy in Calgary. High-intent keyword strategy, executive copywriting, technical SEO, and schema markup that turn organic traffic into B2B pipeline."
        />
        <meta
          name="keywords"
          content="B2B SEO strategy Calgary, SEO content marketing Calgary, B2B copywriting Alberta, high-intent keyword strategy, technical SEO Canada, thought leadership content, executive copywriting, SecuNova Consulting"
        />
        <link rel="canonical" href="https://secunovainc.com/services/seo-marketing" />

        {/* OpenGraph Tags */}
        <meta property="og:title" content="B2B SEO Strategy & Content Marketing | SecuNova Consulting" />
        <meta
          property="og:description"
          content="Persuasive B2B copywriting and intent-driven SEO strategies that convert North American decision-makers into high-value clients."
        />
        <meta property="og:url" content="https://secunovainc.com/services/seo-marketing" />
        <meta property="og:type" content="website" />
        <meta property="og:image" content="https://secunovainc.com/og-image.png" />
        <meta property="og:image:width" content="1200" />
        <meta property="og:image:height" content="630" />
        <meta property="og:site_name" content="SecuNova Consulting" />

        {/* Twitter Card */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="B2B SEO Strategy & Content Marketing | SecuNova Consulting" />
        <meta
          name="twitter:description"
          content="Persuasive B2B copywriting and intent-focused SEO strategies engineered for North American leaders."
        />
        <meta name="twitter:image" content="https://secunovainc.com/og-image.png" />

        {/* BreadcrumbList Schema */}
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "BreadcrumbList",
            "itemListElement": [
              { "@type": "ListItem", "position": 1, "name": "Home", "item": "https://secunovainc.com" },
              { "@type": "ListItem", "position": 2, "name": "Services", "item": "https://secunovainc.com/services" },
              { "@type": "ListItem", "position": 3, "name": "B2B SEO Strategy Calgary", "item": "https://secunovainc.com/services/seo-marketing" }
            ]
          })}
        </script>

        {/* Structured Data */}
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Service",
            "name": "B2B Content & SEO Strategy",
            "description":
              "Engineered B2B messaging and SEO content strategies designed to capture search intent, establish thought leadership, and convert North American decision-makers into active lead pipeline.",
            "provider": {
              "@type": "LocalBusiness",
              "name": "SecuNova Inc.",
              "telephone": "+1-403-401-1552",
              "address": {
                "@type": "PostalAddress",
                "streetAddress": "#270, 1122 3 St SE Ste 1906",
                "addressLocality": "Calgary",
                "addressRegion": "AB",
                "postalCode": "T2G 0E7",
                "addressCountry": "CA"
              }
            },
            "areaServed": {
              "@type": "Country",
              "name": "Canada"
            },
            "serviceType": "B2B Content Strategy & SEO Copywriting"
          })}
        </script>
      </Helmet>

      {/* Hero Section */}
      <section className="relative min-h-[85vh] flex items-center justify-center pt-24 sm:pt-32 md:pt-40 pb-16 sm:pb-20 overflow-hidden bg-gradient-to-b from-secunova-dark via-secunova-dark to-[#0B121E]">
        <div className="absolute inset-0 pointer-events-none opacity-20">
          <img
            src="https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=1920&q=85&auto=format&fit=crop"
            alt="B2B Content & SEO Strategy"
            className="w-full h-full object-cover"
            loading="eager"
            fetchPriority="high"
            decoding="async"
          />
          <div className="absolute inset-0 bg-gradient-to-br from-secunova-dark/95 via-secunova-dark/90 to-secunova-blue/85"></div>
        </div>

        <div className="container mx-auto px-4 sm:px-6 relative z-10 w-full">
          <div className="max-w-5xl mx-auto text-center text-white">
            <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold mb-6 leading-[1.15] tracking-tight">
              B2B Content & <span className="text-secunova-light">SEO Strategy</span>
            </h1>

            <p className="text-lg sm:text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed font-normal mb-8">
              Engineered B2B messaging and SEO strategies that capture high-intent search traffic, build industry authority, and convert North American decision-makers into active pipeline.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <Link
                to="/contact"
                className="w-full sm:w-auto px-8 py-4 bg-gradient-to-r from-secunova-blue to-secunova-light text-white font-bold rounded-xl shadow-lg hover:shadow-secunova-blue/30 transition-all duration-300 hover:scale-[1.02]"
              >
                Request a Strategy Consultation
              </Link>
              <a
                href="tel:403-401-1552"
                className="w-full sm:w-auto px-8 py-4 bg-white/10 backdrop-blur-md border border-white/20 text-white font-semibold rounded-xl hover:bg-white/20 transition-all duration-300"
              >
                Call 403-401-1552
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Value Pillars Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4 sm:px-6">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-16">
              <div className="inline-flex items-center space-x-2 text-secunova-blue font-bold text-sm tracking-widest uppercase mb-3">
                <Sparkles className="h-4 w-4" />
                <span>Conversion-First Organic Growth</span>
              </div>
              <h2 className="text-3xl sm:text-4xl font-extrabold text-secunova-dark mb-4">
                Why Standard Consumer Marketing Fails in B2B
              </h2>
              <p className="text-lg text-gray-600 max-w-3xl mx-auto leading-relaxed">
                B2B buyers do not make impulse decisions based on viral buzz. They demand clarity, technical authority, and proven ROI. We align keyword strategy with actual buying intent to capture decision-makers at the right moment in their evaluation cycle.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {/* Feature 1 */}
              <div className="bg-gradient-to-br from-gray-50 to-white p-8 rounded-2xl border border-gray-100 shadow-sm hover:shadow-md transition-all duration-300">
                <div className="bg-secunova-blue/10 w-12 h-12 rounded-xl flex items-center justify-center mb-6">
                  <Target className="h-6 w-6 text-secunova-blue" />
                </div>
                <h3 className="text-xl font-bold text-secunova-dark mb-3">High-Intent Keyword Mapping</h3>
                <p className="text-gray-600 leading-relaxed text-sm">
                  We ignore vanity search volume and target commercial search queries used by corporate buyers actively seeking solutions.
                </p>
              </div>

              {/* Feature 2 */}
              <div className="bg-gradient-to-br from-gray-50 to-white p-8 rounded-2xl border border-gray-100 shadow-sm hover:shadow-md transition-all duration-300">
                <div className="bg-secunova-light/10 w-12 h-12 rounded-xl flex items-center justify-center mb-6">
                  <FileText className="h-6 w-6 text-secunova-light" />
                </div>
                <h3 className="text-xl font-bold text-secunova-dark mb-3">Executive B2B Copywriting</h3>
                <p className="text-gray-600 leading-relaxed text-sm">
                  Authoritative English copy written for C-suite and VP decision-makers. Precise commercial language, no filler, no jargon for its own sake.
                </p>
              </div>

              {/* Feature 3 */}
              <div className="bg-gradient-to-br from-gray-50 to-white p-8 rounded-2xl border border-gray-100 shadow-sm hover:shadow-md transition-all duration-300">
                <div className="bg-secunova-blue/10 w-12 h-12 rounded-xl flex items-center justify-center mb-6">
                  <Award className="h-6 w-6 text-secunova-blue" />
                </div>
                <h3 className="text-xl font-bold text-secunova-dark mb-3">Thought Leadership Positioning</h3>
                <p className="text-gray-600 leading-relaxed text-sm">
                  Position your firm as the trusted authority in your niche through deep-dive pillar content, case studies, and industry insight that buyers actually read.
                </p>
              </div>

              {/* Feature 4 */}
              <div className="bg-gradient-to-br from-gray-50 to-white p-8 rounded-2xl border border-gray-100 shadow-sm hover:shadow-md transition-all duration-300">
                <div className="bg-secunova-light/10 w-12 h-12 rounded-xl flex items-center justify-center mb-6">
                  <Layers className="h-6 w-6 text-secunova-light" />
                </div>
                <h3 className="text-xl font-bold text-secunova-dark mb-3">Conversion-Optimized Pages</h3>
                <p className="text-gray-600 leading-relaxed text-sm">
                  Service pages and solution hubs structured with clear value statements, proof points, and calls to action that move qualified readers toward a conversation.
                </p>
              </div>

              {/* Feature 5 */}
              <div className="bg-gradient-to-br from-gray-50 to-white p-8 rounded-2xl border border-gray-100 shadow-sm hover:shadow-md transition-all duration-300">
                <div className="bg-secunova-blue/10 w-12 h-12 rounded-xl flex items-center justify-center mb-6">
                  <Search className="h-6 w-6 text-secunova-blue" />
                </div>
                <h3 className="text-xl font-bold text-secunova-dark mb-3">Technical SEO & Schema Markup</h3>
                <p className="text-gray-600 leading-relaxed text-sm">
                  Ensuring zero indexation friction with speed optimization, structured JSON-LD data, and clean technical site architecture.
                </p>
              </div>

              {/* Feature 6 */}
              <div className="bg-gradient-to-br from-gray-50 to-white p-8 rounded-2xl border border-gray-100 shadow-sm hover:shadow-md transition-all duration-300">
                <div className="bg-secunova-light/10 w-12 h-12 rounded-xl flex items-center justify-center mb-6">
                  <BarChart className="h-6 w-6 text-secunova-light" />
                </div>
                <h3 className="text-xl font-bold text-secunova-dark mb-3">Pipeline & Lead Analytics</h3>
                <p className="text-gray-600 leading-relaxed text-sm">
                  Reporting focused on qualified inquiries, organic lead quality, and revenue impact. Not traffic graphs nobody acts on.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Deep-Dive Capabilities Showcase */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4 sm:px-6">
          <div className="max-w-6xl mx-auto space-y-20">
            {/* Deep Dive 1 */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div>
                <div className="w-14 h-14 bg-secunova-blue/10 rounded-xl flex items-center justify-center mb-6">
                  <FileText className="h-7 w-7 text-secunova-blue" />
                </div>
                <h3 className="text-2xl sm:text-3xl font-extrabold text-secunova-dark mb-4">
                  Persuasive B2B Copywriting & Messaging Architecture
                </h3>
                <p className="text-gray-600 leading-relaxed mb-6">
                  Decision-makers ignore generic fluff and tired marketing buzzwords. We write sharp, authoritative, localized English copy that speaks directly to executive priorities, risk reduction, and operational growth.
                </p>
                <ul className="space-y-3.5">
                  <li className="flex items-start">
                    <CheckCircle className="h-5 w-5 text-secunova-blue mr-3 mt-0.5 shrink-0" />
                    <span className="text-gray-700 text-sm"><strong>Zero Generic AI Phrasing:</strong> Human-crafted, authentic tone tailored for North American corporate culture.</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="h-5 w-5 text-secunova-blue mr-3 mt-0.5 shrink-0" />
                    <span className="text-gray-700 text-sm"><strong>Value-Driven Messaging:</strong> Translating complex technical specifications into tangible business outcomes.</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="h-5 w-5 text-secunova-blue mr-3 mt-0.5 shrink-0" />
                    <span className="text-gray-700 text-sm"><strong>Trust & Risk Mitigation:</strong> Incorporating proof points, compliance metrics, and clear guarantees that eliminate buying friction.</span>
                  </li>
                </ul>
              </div>
              <div className="rounded-2xl overflow-hidden shadow-lg border border-gray-200">
                <img
                  src="https://images.unsplash.com/photo-1542744173-8e7e53415bb0?w=1200&q=85&auto=format&fit=crop"
                  alt="Executive B2B Copywriting"
                  className="w-full h-auto object-cover"
                />
              </div>
            </div>

            {/* Deep Dive 2 */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div className="lg:order-2">
                <div className="w-14 h-14 bg-secunova-light/10 rounded-xl flex items-center justify-center mb-6">
                  <Search className="h-7 w-7 text-secunova-light" />
                </div>
                <h3 className="text-2xl sm:text-3xl font-extrabold text-secunova-dark mb-4">
                  High-Intent SEO Content Strategy
                </h3>
                <p className="text-gray-600 leading-relaxed mb-6">
                  Traffic that does not convert costs you twice. Our SEO strategy targets high-intent search terms where buyers are actively evaluating solutions, comparing vendors, and making shortlist decisions.
                </p>
                <ul className="space-y-3.5">
                  <li className="flex items-start">
                    <CheckCircle className="h-5 w-5 text-secunova-blue mr-3 mt-0.5 shrink-0" />
                    <span className="text-gray-700 text-sm"><strong>Commercial Search Intent:</strong> Prioritizing high-conversion queries over low-intent informational keywords.</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="h-5 w-5 text-secunova-blue mr-3 mt-0.5 shrink-0" />
                    <span className="text-gray-700 text-sm"><strong>Topic Clusters & Pillar Content:</strong> Building topical authority that signals expertise to search engine algorithms.</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="h-5 w-5 text-secunova-blue mr-3 mt-0.5 shrink-0" />
                    <span className="text-gray-700 text-sm"><strong>Competitive Content Gaps:</strong> Identifying competitor weaknesses and seizing uncaptured organic search traffic.</span>
                  </li>
                </ul>
              </div>
              <div className="rounded-2xl overflow-hidden shadow-lg border border-gray-200 lg:order-1">
                <img
                  src="https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=1200&q=85&auto=format&fit=crop"
                  alt="High Intent SEO Content Strategy"
                  className="w-full h-auto object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Framework Section (BEM Refactored) */}
      <section className="secunova-section secunova-section--dark">
        <div className="container mx-auto px-4 sm:px-6">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl sm:text-4xl font-extrabold text-white mb-4">
                Our B2B Content & SEO Execution Framework
              </h2>
              <p className="text-gray-300 text-lg">
                A structured, data-informed process for organic growth and B2B pipeline velocity
              </p>
            </div>

            <div className="space-y-6">
              {[
                {
                  step: '01',
                  title: 'B2B Search & Audience Intent Audit',
                  description:
                    'Forensic analysis of your existing content, search presence, competitor positioning, and high-value decision-maker search queries.'
                },
                {
                  step: '02',
                  title: 'Messaging Architecture & Keyword Mapping',
                  description:
                    'Developing core brand positioning, buyer persona pain points, and mapping commercial-intent keywords to strategic content pillars.'
                },
                {
                  step: '03',
                  title: 'Executive Copywriting & Content Creation',
                  description:
                    'Crafting crisp, authoritative service pages, landing copy, and thought leadership articles tailored for North American decision-makers.'
                },
                {
                  step: '04',
                  title: 'On-Page Optimization & Technical Schema',
                  description:
                    'Implementing technical SEO enhancements, internal linking structures, schema markup, and speed optimizations for peak indexation.'
                },
                {
                  step: '05',
                  title: 'Pipeline Lead Tracking & Conversion Iteration',
                  description:
                    'Measuring organic lead quality, tracking conversion paths, and refining messaging to improve lead velocity over time.'
                }
              ].map((item, index) => (
                <div
                  key={index}
                  className="secunova-card secunova-card--glass"
                >
                  <div>
                    <div className="secunova-card__header">
                      <span className="text-3xl sm:text-4xl font-black text-secunova-light shrink-0">
                        {item.step}
                      </span>
                      <h3 className="secunova-card__title">{item.title}</h3>
                    </div>
                    <div className="secunova-card__body">
                      <p className="secunova-card__description">{item.description}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Deliverables Matrix (BEM Refactored) */}
      <section className="secunova-section secunova-section--gray">
        <div className="container mx-auto px-4 sm:px-6">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-14">
              <h2 className="text-3xl sm:text-4xl font-extrabold text-secunova-dark mb-4">
                Key Deliverables & Core Offerings
              </h2>
              <p className="text-gray-600 text-lg">
                Complete B2B messaging and organic search solutions
              </p>
            </div>

            <div className="secunova-grid">
              {[
                { name: 'B2B Service Page Copywriting', desc: 'High-converting copy structured to turn traffic into qualified client inquiries.' },
                { name: 'Commercial Keyword Mapping', desc: 'Targeting non-brand high-intent search terms used by active B2B buyers.' },
                { name: 'Thought Leadership Articles', desc: 'In-depth pillar articles positioning your leadership team as trusted experts.' },
                { name: 'Competitive Messaging Analysis', desc: 'Uncovering competitor gaps and crafting differentiated market positioning.' },
                { name: 'Technical & On-Page SEO', desc: 'Clean site architecture, schema markup, and speed enhancements for top rankings.' },
                { name: 'AI Fluff Removal & Content Audits', desc: 'Upgrading existing site copy into crisp, professional North American English.' },
                { name: 'Local & Regional B2B SEO', desc: 'Optimizing geographic search presence across Alberta, Canada, and North America.' },
                { name: 'Conversion Path Optimization', desc: 'Strategic call-to-action placements that increase form fills and contact calls.' }
              ].map((deliverable, idx) => (
                <div key={idx} className="secunova-card">
                  <div>
                    <div className="secunova-card__header">
                      <div className="secunova-card__icon">
                        <CheckCircle className="h-6 w-6 text-secunova-blue" />
                      </div>
                      <h4 className="secunova-card__title">{deliverable.name}</h4>
                    </div>
                    <div className="secunova-card__body">
                      <p className="secunova-card__description">{deliverable.desc}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <CtaSection
        title="Ready to Scale Your Organic B2B Pipeline?"
        subtitle="Schedule a strategic consultation to discover how engineered B2B copywriting and high-intent SEO can drive qualified leads for your organization."
        ctaText="Book B2B Content Strategy Session"
        ctaLink="/contact"
      />
    </div>
  );
};

export default SEOMarketingPage;
