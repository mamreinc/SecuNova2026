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
import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';
import { Code, Zap, Shield, Cloud, CheckCircle, CheckCircle2, Target, Cpu, Sparkles } from 'lucide-react';
import CtaSection from '../../components/CtaSection';

const WebDevelopmentPage = () => {
  return (
    <div className="min-h-screen bg-white">
      <Helmet>
        <title>Custom Web Development Calgary | React Web Apps & Landing Pages | SecuNova Consulting</title>
        <meta
          name="description"
          content="Custom web development in Calgary: React.js web applications, enterprise platforms, and high-converting landing pages built with senior-led engineering and 100% IP ownership."
        />
        <meta
          name="keywords"
          content="custom web development Calgary, React.js web apps, web application development Alberta, high-converting landing pages, custom corporate websites Calgary, enterprise web platforms Canada, Vibe Coding development, SecuNova Consulting"
        />
        <link rel="canonical" href="https://secunovainc.com/services/web-development" />

        {/* OpenGraph Tags */}
        <meta property="og:title" content="Custom Web Development Calgary | React Web Apps | SecuNova Consulting" />
        <meta
          property="og:description"
          content="Custom web applications, corporate platforms, and high-converting funnels engineered for North American organizations."
        />
        <meta property="og:url" content="https://secunovainc.com/services/web-development" />
        <meta property="og:type" content="website" />
        <meta property="og:image" content="https://secunovainc.com/og-image.png" />
        <meta property="og:image:width" content="1200" />
        <meta property="og:image:height" content="630" />
        <meta property="og:site_name" content="SecuNova Consulting" />

        {/* Twitter Card */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Custom Web Development Calgary | SecuNova Consulting" />
        <meta
          name="twitter:description"
          content="Custom web applications and high-converting landing funnels engineered with React, TypeScript, and senior AI workflows."
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
              { "@type": "ListItem", "position": 3, "name": "Custom Web Development Calgary", "item": "https://secunovainc.com/services/web-development" }
            ]
          })}
        </script>

        {/* Structured Data */}
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Service",
            "name": "Custom Web App Development",
            "description":
              "Custom web applications, enterprise platforms, and high-converting landing funnels built using modern React.js architectures and senior-led AI workflows for maximum performance and conversion.",
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
            "serviceType": "Custom Web Application & Funnel Engineering"
          })}
        </script>
      </Helmet>

      {/* Hero Section */}
      <section className="relative min-h-[85vh] flex items-center justify-center pt-24 sm:pt-32 md:pt-40 pb-16 sm:pb-20 overflow-hidden bg-gradient-to-b from-secunova-dark via-secunova-dark to-[#0B121E]">
        <div className="absolute inset-0 pointer-events-none opacity-20">
          <img
            src="https://images.unsplash.com/photo-1461749280684-dccba630e2f6?w=1920&q=85&auto=format&fit=crop"
            alt="Custom Web App Development Services"
            className="w-full h-full object-cover"
            loading="eager"
            fetchPriority="high"
            decoding="async"
          />
          <div className="absolute inset-0 bg-gradient-to-br from-secunova-dark/95 via-secunova-dark/90 to-secunova-blue/85"></div>
        </div>

        <div className="container mx-auto px-4 sm:px-6 relative z-10 w-full">
          <div className="max-w-5xl mx-auto text-center text-white">
            <h1 className="text-4xl sm:text-5xl font-extrabold mb-6 leading-[1.15] tracking-tight">
              Custom <span className="text-secunova-light">Web App</span>
            </h1>

            <p className="text-lg sm:text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed font-normal mb-8">
              Enterprise React.js applications, custom corporate platforms, and high-converting marketing funnels. Built by senior engineers using AI-augmented workflows to ship faster without cutting corners on architecture or security.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <Link
                to="/contact"
                className="w-full sm:w-auto px-8 py-4 bg-gradient-to-r from-secunova-blue to-secunova-light text-white font-bold rounded-xl shadow-lg hover:shadow-secunova-blue/30 transition-all duration-300 hover:scale-[1.02]"
              >
                Start Your Web App Project
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

      {/* Value Pillars Section (BEM Refactored) */}
      <section className="secunova-section secunova-section--light">
        <div className="container mx-auto px-4 sm:px-6">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-16">
              <div className="inline-flex items-center space-x-2 text-secunova-blue font-bold text-sm tracking-widest uppercase mb-3">
                <Sparkles className="h-4 w-4" />
                <span>Zero-Debt High-Performance Engineering</span>
              </div>
              <h2 className="text-3xl sm:text-4xl font-extrabold text-secunova-dark mb-4">
                Modern Web Applications Built for Growth & Conversion
              </h2>
              <p className="text-lg text-gray-600 max-w-3xl mx-auto leading-relaxed">
                We combine modern frontend frameworks, cloud-native backend infrastructure, and conversion design to build web applications that load fast and turn visitors into revenue.
              </p>
            </div>

            <div className="secunova-grid secunova-grid--3col">
              {/* Feature 1 */}
              <div className="secunova-card">
                <div>
                  <div className="secunova-card__header">
                    <div className="secunova-card__icon">
                      <Code className="h-6 w-6 text-secunova-blue" />
                    </div>
                    <h3 className="secunova-card__title">Modern React & TypeScript</h3>
                  </div>
                  <div className="secunova-card__body">
                    <p className="secunova-card__description">
                      Built on battle-tested React.js, TypeScript, and Vite/Next.js architectures for modular maintenance, security, and lightning-fast state management.
                    </p>
                  </div>
                </div>
              </div>

              {/* Feature 2 */}
              <div className="secunova-card">
                <div>
                  <div className="secunova-card__header">
                    <div className="secunova-card__icon">
                      <Cpu className="h-6 w-6 text-secunova-blue" />
                    </div>
                    <h3 className="secunova-card__title">Senior Vibe Coding</h3>
                  </div>
                  <div className="secunova-card__body">
                    <p className="secunova-card__description">
                      AI-assisted engineering under senior architectural control. We cut development timelines significantly while holding the code to enterprise standards throughout.
                    </p>
                  </div>
                </div>
              </div>

              {/* Feature 3 */}
              <div className="secunova-card">
                <div>
                  <div className="secunova-card__header">
                    <div className="secunova-card__icon">
                      <Target className="h-6 w-6 text-secunova-blue" />
                    </div>
                    <h3 className="secunova-card__title">High-Converting Paid Funnels</h3>
                  </div>
                  <div className="secunova-card__body">
                    <p className="secunova-card__description">
                      Single-page landing funnels specifically engineered for Google Ads and Meta Ads campaigns to maximize lead generation and ad spend ROI.
                    </p>
                  </div>
                </div>
              </div>

              {/* Feature 4 */}
              <div className="secunova-card">
                <div>
                  <div className="secunova-card__header">
                    <div className="secunova-card__icon">
                      <Shield className="h-6 w-6 text-secunova-blue" />
                    </div>
                    <h3 className="secunova-card__title">Enterprise Security & Compliance</h3>
                  </div>
                  <div className="secunova-card__body">
                    <p className="secunova-card__description">
                      OWASP Top 10 protection, strict Content Security Policies (CSP), sanitized data handling, and encrypted SSL communications built in from line one.
                    </p>
                  </div>
                </div>
              </div>

              {/* Feature 5 */}
              <div className="secunova-card">
                <div>
                  <div className="secunova-card__header">
                    <div className="secunova-card__icon">
                      <Cloud className="h-6 w-6 text-secunova-blue" />
                    </div>
                    <h3 className="secunova-card__title">Cloud-Native & API Architecture</h3>
                  </div>
                  <div className="secunova-card__body">
                    <p className="secunova-card__description">
                      Clean RESTful and GraphQL APIs built for direct integration with third-party CRMs, payment gateways, and cloud infrastructure (AWS/Azure/GCP).
                    </p>
                  </div>
                </div>
              </div>

              {/* Feature 6 */}
              <div className="secunova-card">
                <div>
                  <div className="secunova-card__header">
                    <div className="secunova-card__icon">
                      <Zap className="h-6 w-6 text-secunova-blue" />
                    </div>
                    <h3 className="secunova-card__title">Core Web Vitals Optimization</h3>
                  </div>
                  <div className="secunova-card__body">
                    <p className="secunova-card__description">
                      Sub-second page loads, optimized asset pipelines, responsive layouts across all viewports, and 95+ Google Lighthouse speed scores.
                    </p>
                  </div>
                </div>
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
                  <Code className="h-7 w-7 text-secunova-blue" />
                </div>
                <h3 className="text-2xl sm:text-3xl font-extrabold text-secunova-dark mb-4">
                  Custom Web Applications & Enterprise Software Platforms
                </h3>
                <p className="text-gray-600 leading-relaxed mb-6">
                  From B2B client portals to operational dashboards and SaaS platforms, we build web applications around your exact business logic. No templates, no restrictive plugins, nothing you did not ask for.
                </p>
                <ul className="space-y-3.5">
                  <li className="flex items-start">
                    <CheckCircle className="h-5 w-5 text-secunova-blue mr-3 mt-0.5 shrink-0" />
                    <span className="text-gray-700 text-sm"><strong>Zero Technical Debt:</strong> Clean, documented codebase engineered for easy long-term maintenance and scaling.</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="h-5 w-5 text-secunova-blue mr-3 mt-0.5 shrink-0" />
                    <span className="text-gray-700 text-sm"><strong>Tailored Workflow Automation:</strong> Custom integrations that sync data between your internal tools, CRMs, and databases.</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="h-5 w-5 text-secunova-blue mr-3 mt-0.5 shrink-0" />
                    <span className="text-gray-700 text-sm"><strong>Bespoke UI/UX Engineering:</strong> Human-centric interface designs created in Figma and brought to life with smooth micro-animations.</span>
                  </li>
                </ul>
              </div>
              <div className="rounded-2xl overflow-hidden shadow-lg border border-gray-200">
                <img
                  src="https://images.unsplash.com/photo-1461749280684-dccba630e2f6?w=1200&q=85&auto=format&fit=crop"
                  alt="Custom Web Application Engineering"
                  className="w-full h-auto object-cover"
                />
              </div>
            </div>

            {/* Deep Dive 2 */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div className="lg:order-2">
                <div className="w-14 h-14 bg-secunova-light/10 rounded-xl flex items-center justify-center mb-6">
                  <Target className="h-7 w-7 text-secunova-light" />
                </div>
                <h3 className="text-2xl sm:text-3xl font-extrabold text-secunova-dark mb-4">
                  High-Converting Paid Traffic & Campaign Funnels
                </h3>
                <p className="text-gray-600 leading-relaxed mb-6">
                  Sending paid traffic to a standard homepage wastes ad spend. We build single-purpose, campaign-matched landing pages designed to guide visitors directly to a lead form submission.
                </p>
                <ul className="space-y-3.5">
                  <li className="flex items-start">
                    <CheckCircle className="h-5 w-5 text-secunova-blue mr-3 mt-0.5 shrink-0" />
                    <span className="text-gray-700 text-sm"><strong>Ad-to-Landing Alignment:</strong> Copy and visual hierarchy directly matched with your campaign ad copy to maximize Quality Scores.</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="h-5 w-5 text-secunova-blue mr-3 mt-0.5 shrink-0" />
                    <span className="text-gray-700 text-sm"><strong>A/B Testing Infrastructure:</strong> Built-in versioning to run variant testing on headlines, CTAs, and layout structures.</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="h-5 w-5 text-secunova-blue mr-3 mt-0.5 shrink-0" />
                    <span className="text-gray-700 text-sm"><strong>Lead Capture Built Right:</strong> Fast-loading forms, click-to-call, and direct CRM routing so no lead gets lost between your campaign and your inbox.</span>
                  </li>
                </ul>
              </div>
              <div className="rounded-2xl overflow-hidden shadow-lg border border-gray-200 lg:order-1">
                <img
                  src="https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=1200&q=85&auto=format&fit=crop"
                  alt="High Converting Campaign Funnels"
                  className="w-full h-auto object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Commercial Vibe Coding & Managed Architecture Section */}
      <section className="py-20 bg-gradient-to-b from-blue-50/70 to-white border-y border-gray-100">
        <div className="container mx-auto px-4 sm:px-6">
          <div className="max-w-5xl mx-auto">
            <div className="bg-white border border-gray-200 rounded-3xl p-8 md:p-12 shadow-sm">
              <div className="inline-flex items-center gap-2 bg-blue-50 text-secunova-blue border border-blue-100 px-3.5 py-1.5 rounded-full text-xs font-semibold uppercase tracking-wider mb-4">
                <Code className="h-4 w-4" />
                <span>Commercial Vibe Coding Engine</span>
              </div>
              
              <h2 className="text-2xl sm:text-4xl font-extrabold text-secunova-dark mb-4">
                Built with Vibe Coding. Pure Code with Zero CMS Bloat.
              </h2>
              
              <p className="text-gray-600 text-base md:text-lg leading-relaxed mb-8">
                We engineer paid commercial websites using <strong>Vibe Coding</strong> (senior-led, AI-augmented high-velocity custom coding). Rather than relying on slow, vulnerable Content Management Systems (CMS) like WordPress or Wix, your platform is built as ultra-fast, secure, custom React code.
              </p>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
                <div className="p-6 rounded-2xl bg-gray-50 border border-gray-200/80">
                  <div className="w-12 h-12 rounded-xl bg-blue-100 text-secunova-blue flex items-center justify-center mb-4">
                    <Code className="h-6 w-6" />
                  </div>
                  <h3 className="text-xl font-bold text-secunova-dark mb-2">
                    Pure Custom Architecture
                  </h3>
                  <p className="text-sm text-gray-600 leading-relaxed">
                    No database overhead, no plugin security vulnerabilities, and no recurring CMS platform fees. Your website is built in pure React.js & TypeScript, giving you sub-second page load speeds and complete code ownership.
                  </p>
                </div>

                <div className="p-6 rounded-2xl bg-gray-50 border border-gray-200/80">
                  <div className="w-12 h-12 rounded-xl bg-blue-100 text-secunova-blue flex items-center justify-center mb-4">
                    <Shield className="h-6 w-6" />
                  </div>
                  <h3 className="text-xl font-bold text-secunova-dark mb-2">
                    Fully Managed Content Retainers
                  </h3>
                  <p className="text-sm text-gray-600 leading-relaxed">
                    Rather than forcing your team to navigate complex CMS admin panels or manage software updates, we offer <strong>fully managed service retainers</strong>. Whenever you need content, image, or structure updates, our engineering team executes them directly for you.
                  </p>
                </div>
              </div>

              <div className="p-4 rounded-xl bg-blue-50/80 border border-blue-200 text-xs md:text-sm text-slate-800 flex items-center gap-3">
                <CheckCircle2 className="h-5 w-5 text-secunova-blue flex-shrink-0" />
                <span>
                  <strong>Hassle-Free Managed Service:</strong> Enjoy the speed and security of enterprise custom code while SecuNova handles all technical maintenance, hosting stability, and content updates for your business.
                </span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 5-Step Web Engineering Framework (BEM Refactored) */}
      <section className="secunova-section secunova-section--dark">
        <div className="container mx-auto px-4 sm:px-6">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl sm:text-4xl font-extrabold text-white mb-4">
                Our Web App Engineering Process
              </h2>
              <p className="text-gray-300 text-lg">
                Agile, senior-led execution from architecture to production release
              </p>
            </div>

            <div className="space-y-6">
              {[
                {
                  step: '01',
                  title: 'Architecture & Technical Discovery',
                  description:
                    'Mapping operational requirements, user journeys, tech stack selection, and database topology to establish a rock-solid foundation.'
                },
                {
                  step: '02',
                  title: 'Senior-Guided Development',
                  description:
                    'Using senior-guided workflows to rapidly build out responsive frontend components, styling systems, and page layouts without sacrificing code quality.'
                },
                {
                  step: '03',
                  title: 'Security Hardening & API Integration',
                  description:
                    'Implementing secure authentication, database endpoints, CSP headers, data validation, and third-party integrations.'
                },
                {
                  step: '04',
                  title: 'Performance Optimization & Testing',
                  description:
                    'Rigorous QA testing across 20+ device viewports, Core Web Vitals speed tuning, and automated accessibility auditing.'
                },
                {
                  step: '05',
                  title: 'Production Deployment & Continuous Support',
                  description:
                    'Zero-downtime deployment to modern cloud platforms, SSL setup, automated monitoring, and ongoing technical maintenance.'
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
                Deliverables & Core Capabilities
              </h2>
              <p className="text-gray-600 text-lg">
                Complete custom web application solutions tailored to your operational goals
              </p>
            </div>

            <div className="secunova-grid">
              {[
                { name: 'Custom React & TypeScript Web Apps', desc: 'Modern single-page applications and web portals built for performance.' },
                { name: 'Paid Ad Campaign Landing Funnels', desc: 'Single-purpose landing pages engineered to maximize Google & Meta Ads ROI.' },
                { name: 'B2B Enterprise Client Portals', desc: 'Secure, role-authenticated dashboards for client and partner management.' },
                { name: 'SaaS Minimum Viable Products (MVPs)', desc: 'Rapidly engineered cloud software products built to validate new ventures.' },
                { name: 'Enterprise WordPress Development', desc: 'Bespoke WordPress themes engineered without slow, bloated page builders.' },
                { name: 'RESTful & GraphQL API Engineering', desc: 'High-speed backend API endpoints for seamless system integrations.' },
                { name: 'Core Web Vitals & Speed Optimization', desc: 'Comprehensive site speed tuning ensuring sub-second load times.' },
                { name: 'OWASP Security Audits & Hardening', desc: 'Built-in protection against vulnerabilities, XSS, and data leaks.' }
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
        title="Ready to Build Your Custom Web App?"
        subtitle="Talk to a senior engineer about your project requirements, architecture, and a realistic launch timeline."
        ctaText="Book a Technical Consultation"
        ctaLink="/contact"
      />
    </div>
  );
};

export default WebDevelopmentPage;
