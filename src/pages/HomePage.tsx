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

import { memo } from 'react';
import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';
import {
  ArrowRight, Shield, Zap, Phone, Crown, BarChart, Target, CheckCircle,
  Briefcase, Compass, Code, Gauge, RefreshCw, Users, Globe, ClipboardCheck,
  Scale, TrendingUp, Clock, Lightbulb, Database, LineChart, Award, Wrench
} from 'lucide-react';
import LazySection from '../components/LazySection';
import OptimizedImage from '../components/OptimizedImage';

const HomePage = () => {
  return (
    <div className="overflow-hidden">
      <Helmet>
        <title>SecuNova Inc. | Enterprise Strategic Advisory, IT Governance &amp; Digital Systems</title>
        <meta name="description" content="SecuNova Inc. is a Calgary-based boutique IT advisory firm delivering executive strategic advisory, PMaaS, cybersecurity risk governance, and custom digital systems across North America." />
        <meta name="keywords" content="SecuNova Inc, strategic advisory Calgary, digital transformation Canada, PMaaS Calgary, IT governance Canada, cloud architecture advisory, enterprise cybersecurity risk" />
        <link rel="canonical" href="https://secunovainc.com/" />

        {/* OpenGraph Tags */}
        <meta property="og:title" content="SecuNova Inc. | Enterprise IT Governance &amp; Strategic Advisory" />
        <meta property="og:description" content="Executive strategic advisory, PMaaS, cybersecurity risk governance, and digital systems architecture for North American enterprises." />
        <meta property="og:url" content="https://secunovainc.com/" />
        <meta property="og:type" content="website" />
        <meta property="og:image" content="https://secunovainc.com/og-image.png" />
        <meta property="og:site_name" content="SecuNova Inc." />
        <meta property="og:locale" content="en_CA" />

        {/* Structured Data */}
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "ProfessionalService",
            "@id": "https://secunovainc.com",
            "name": "SecuNova Inc.",
            "alternateName": ["SecuNova", "SecuNova Consulting"],
            "url": "https://secunovainc.com",
            "description": "Calgary-based boutique IT firm delivering executive advisory, PMaaS, cybersecurity risk governance, and digital transformation.",
            "telephone": "+1-403-401-1552",
            "email": "hello@secunovainc.com",
            "address": {
              "@type": "PostalAddress",
              "streetAddress": "#270, 1122 3 St SE Ste 1906",
              "addressLocality": "Calgary",
              "addressRegion": "AB",
              "postalCode": "T2G 0E7",
              "addressCountry": "CA"
            },
            "areaServed": [
              { "@type": "State", "name": "Alberta" },
              { "@type": "Country", "name": "Canada" },
              { "@type": "Country", "name": "United States" }
            ],
            "serviceType": [
              "Executive Strategic Technology Advisory",
              "Project Management as a Service (PMaaS)",
              "Cybersecurity Risk Governance & Audit",
              "Digital Transformation Roadmaps",
              "Enterprise Cloud Architecture"
            ]
          })}
        </script>
      </Helmet>

      {/* ========================================
          Hero Section
          ======================================== */}
      <section className="relative min-h-[92vh] sm:min-h-screen overflow-hidden bg-secunova-dark pt-36 sm:pt-48 pb-28 sm:pb-36 flex flex-col justify-center">
        <div className="absolute inset-0 hero-bg-optimized">
          <OptimizedImage
            src="https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&w=1200&q=85"
            srcSet="https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&w=800&q=85 800w, https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&w=1200&q=85 1200w, https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&w=1920&q=85 1920w"
            sizes="100vw"
            alt="SecuNova corporate enterprise architecture"
            className="w-full h-full object-cover hero-zoom opacity-60"
            priority={true}
            loading="eager"
            fetchPriority="high"
            decoding="async"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-secunova-dark via-secunova-dark/95 to-secunova-dark/60"></div>
          <div className="absolute inset-0 bg-gradient-to-t from-secunova-dark via-transparent to-secunova-dark/70"></div>
        </div>

        <div className="container mx-auto px-4 relative z-10 flex flex-col items-center justify-center text-center w-full">
          <div className="max-w-4xl mx-auto w-full flex flex-col items-center">

            <h1 className="text-3xl sm:text-5xl lg:text-6xl xl:text-[4rem] font-bold text-white leading-[1.15] tracking-tight hero-title-optimized max-w-5xl text-center">
              <span className="block whitespace-normal md:whitespace-nowrap">Institutional IT Governance.</span>
              <span className="block text-secunova-light mt-2 whitespace-normal md:whitespace-nowrap">Bespoke Enterprise Execution.</span>
            </h1>

            <p className="mt-8 max-w-2xl text-base sm:text-xl text-blue-100/90 leading-relaxed hero-description-optimized animate-fade-in-up delay-500 font-normal">
              SecuNova Inc. bridges senior strategic advisory with on-demand project execution (PMaaS). We empower executives to modernize core operations, de-risk technology investments, and drive sub-second digital performance.
            </p>

            {/* Signature Momentum Meter */}
            <div className="mt-8 w-full max-w-md animate-fade-in-up delay-700">
              <div className="w-full h-[3px] bg-white/10 overflow-hidden rounded-full">
                <div className="momentum-bar h-full w-full bg-gradient-to-r from-secunova-blue via-secunova-light to-white"></div>
              </div>
              <div className="mt-3 flex items-center justify-between text-[11px] uppercase tracking-[0.25em] text-white/80">
                <span>Enterprise Maturity</span>
                <span className="text-secunova-light font-semibold">Institutional Grade</span>
              </div>
            </div>

            <div className="mt-10 flex flex-col sm:flex-row gap-4 animate-fade-in-up delay-1000">
              <Link
                to="/contact"
                className="btn btn-gradient btn-lg text-white"
              >
                Schedule Consultation
                <ArrowRight className="ml-2 h-4 w-4 text-white" />
              </Link>
              <Link
                to="/services"
                className="btn btn-outline-light btn-lg text-white"
              >
                Explore Advisory Capabilities
              </Link>
            </div>

          </div>
        </div>
      </section>

      {/* ========================================
          Mandate & Enterprise Pillars Section
          ======================================== */}
      <LazySection className="secunova-section secunova-section--gray border-b border-gray-200">
        <div className="container mx-auto px-4">
          <div className="max-w-5xl mx-auto">
            <div className="text-center max-w-3xl mx-auto mb-14">
              <div className="inline-flex items-center bg-secunova-blue/10 text-secunova-blue px-4 py-2 rounded-full text-xs font-bold uppercase tracking-widest mb-4">
                <Compass className="h-4 w-4 mr-2" />
                Institutional Mandate
              </div>
              <h2 className="text-3xl md:text-5xl font-bold text-secunova-dark tracking-tight leading-tight">
                Architecting Modern Enterprises with <span className="bg-clip-text text-transparent bg-gradient-to-r from-secunova-blue to-secunova-light">Discipline &amp; Precision</span>
              </h2>
              <p className="text-base sm:text-lg text-slate-700 mt-6 leading-relaxed">
                SecuNova Inc. delivers senior-led technical guidance to replace legacy bottlenecks with resilient cloud architectures, disciplined delivery pipelines, and comprehensive cybersecurity governance.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8 mt-12 items-stretch">
              <div className="bg-white p-6 sm:p-8 rounded-2xl border border-gray-200/90 shadow-sm hover:shadow-md transition-all duration-300 flex flex-col justify-between h-full overflow-hidden">
                <div>
                  <div className="w-12 h-12 bg-secunova-blue/10 rounded-xl flex items-center justify-center text-secunova-blue mb-5 flex-shrink-0">
                    <TrendingUp className="h-6 w-6" />
                  </div>
                  <h3 className="text-xl font-bold text-secunova-dark mb-3 leading-snug break-words">Strategic Authority</h3>
                  <p className="text-sm text-slate-600 leading-relaxed break-words">
                    Transform complex technology investments into measurable enterprise equity with board-ready strategic roadmaps.
                  </p>
                </div>
              </div>

              <div className="bg-white p-6 sm:p-8 rounded-2xl border border-gray-200/90 shadow-sm hover:shadow-md transition-all duration-300 flex flex-col justify-between h-full overflow-hidden">
                <div>
                  <div className="w-12 h-12 bg-secunova-light/15 rounded-xl flex items-center justify-center text-secunova-light mb-5 flex-shrink-0">
                    <Gauge className="h-6 w-6" />
                  </div>
                  <h3 className="text-xl font-bold text-secunova-dark mb-3 leading-snug break-words">Operational Velocity</h3>
                  <p className="text-sm text-slate-600 leading-relaxed break-words">
                    Automate manual business processes and deploy cloud infrastructure engineered for sub-second system execution.
                  </p>
                </div>
              </div>

              <div className="bg-white p-6 sm:p-8 rounded-2xl border border-gray-200/90 shadow-sm hover:shadow-md transition-all duration-300 flex flex-col justify-between h-full overflow-hidden">
                <div>
                  <div className="w-12 h-12 bg-secunova-blue/10 rounded-xl flex items-center justify-center text-secunova-blue mb-5 flex-shrink-0">
                    <ClipboardCheck className="h-6 w-6" />
                  </div>
                  <h3 className="text-xl font-bold text-secunova-dark mb-3 leading-snug break-words">Governed Delivery</h3>
                  <p className="text-sm text-slate-600 leading-relaxed break-words">
                    Eliminate project budget overruns using on-demand senior PMaaS leaders who enforce milestones and quality standards.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </LazySection>

      {/* ========================================
          Strategic Advisory Capabilities
          ======================================== */}
      <LazySection className="secunova-section secunova-section--light">
        <div className="container mx-auto px-4">
          <div className="max-w-7xl mx-auto">
            <div className="text-center max-w-3xl mx-auto mb-16">
              <div className="inline-flex items-center bg-secunova-blue/10 text-secunova-blue px-4 py-2 rounded-full text-xs font-bold uppercase tracking-widest mb-4">
                <Crown className="h-4 w-4 mr-2" />
                Practice Area One
              </div>
              <h2 className="text-3xl md:text-5xl font-bold text-secunova-dark tracking-tight leading-tight">
                Strategic Advisory &amp; <span className="bg-clip-text text-transparent bg-gradient-to-r from-secunova-blue to-secunova-light">Digital Systems</span>
              </h2>
              <p className="text-base sm:text-lg text-slate-700 mt-4 leading-relaxed">
                Four core practices designed to guide enterprise organizations from legacy friction into modern digital resilience.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-stretch">
              {/* Capability 1 */}
              <div className="bg-gray-50 rounded-2xl p-6 sm:p-8 lg:p-10 border border-gray-200/80 shadow-lg hover:shadow-xl transition-all duration-300 flex flex-col justify-between h-full overflow-hidden">
                <div>
                  <div className="flex items-center justify-between mb-6">
                    <div className="w-14 h-14 bg-secunova-blue/10 rounded-2xl flex items-center justify-center text-secunova-blue flex-shrink-0">
                      <Lightbulb className="h-7 w-7" />
                    </div>
                    <span className="text-xs font-bold uppercase tracking-widest px-3.5 py-1.5 bg-secunova-blue/10 text-secunova-blue rounded-full">01</span>
                  </div>
                  <h3 className="text-2xl sm:text-3xl font-bold text-secunova-dark mb-4 leading-tight break-words">Strategic Advisory &amp; Enterprise Governance</h3>
                  <p className="text-slate-700 text-sm sm:text-base leading-relaxed mb-8 break-words">
                    Align long-term technology strategies with corporate objectives through board-level roadmaps, capital allocation reviews, and digital readiness frameworks.
                  </p>
                  <ul className="space-y-3.5 text-xs sm:text-sm text-slate-800 font-medium mb-10">
                    <li className="flex items-start text-left gap-3"><CheckCircle className="h-5 w-5 text-secunova-blue flex-shrink-0 mt-0.5" /> <span>Digital Maturity &amp; Readiness Assessments</span></li>
                    <li className="flex items-start text-left gap-3"><CheckCircle className="h-5 w-5 text-secunova-blue flex-shrink-0 mt-0.5" /> <span>Enterprise Architecture Governance</span></li>
                    <li className="flex items-start text-left gap-3"><CheckCircle className="h-5 w-5 text-secunova-blue flex-shrink-0 mt-0.5" /> <span>Technology Feasibility &amp; Vendor Due Diligence</span></li>
                  </ul>
                </div>
                <Link to="/services/strategic-advisory-pmaas" className="btn btn-outline w-full justify-center text-xs uppercase tracking-wider font-bold py-4">
                  Explore Advisory Details <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </div>

              {/* Capability 2 */}
              <div className="bg-gray-50 rounded-2xl p-6 sm:p-8 lg:p-10 border border-gray-200/80 shadow-lg hover:shadow-xl transition-all duration-300 flex flex-col justify-between h-full overflow-hidden">
                <div>
                  <div className="flex items-center justify-between mb-6">
                    <div className="w-14 h-14 bg-secunova-light/15 rounded-2xl flex items-center justify-center text-secunova-light flex-shrink-0">
                      <RefreshCw className="h-7 w-7 text-secunova-light" />
                    </div>
                    <span className="text-xs font-bold uppercase tracking-widest px-3.5 py-1.5 bg-secunova-light/15 text-secunova-light rounded-full">02</span>
                  </div>
                  <h3 className="text-2xl sm:text-3xl font-bold text-secunova-dark mb-4 leading-tight break-words">Digital Transformation &amp; Process Optimization</h3>
                  <p className="text-slate-700 text-sm sm:text-base leading-relaxed mb-8 break-words">
                    Reengineer complex operational workflows, migrate infrastructure to cloud environments, and integrate automation to reduce overhead.
                  </p>
                  <ul className="space-y-3.5 text-xs sm:text-sm text-slate-800 font-medium mb-10">
                    <li className="flex items-start text-left gap-3"><CheckCircle className="h-5 w-5 text-secunova-light flex-shrink-0 mt-0.5" /> <span>Business Process Reengineering (BPR)</span></li>
                    <li className="flex items-start text-left gap-3"><CheckCircle className="h-5 w-5 text-secunova-light flex-shrink-0 mt-0.5" /> <span>Multi-Cloud Migration Strategies (AWS &amp; GCP)</span></li>
                    <li className="flex items-start text-left gap-3"><CheckCircle className="h-5 w-5 text-secunova-light flex-shrink-0 mt-0.5" /> <span>AI Automation &amp; Workflow Optimization</span></li>
                  </ul>
                </div>
                <Link to="/services/strategic-advisory-pmaas" className="btn btn-outline w-full justify-center text-xs uppercase tracking-wider font-bold py-4">
                  Explore Transformation Details <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </div>

              {/* Capability 3 */}
              <div className="bg-gray-50 rounded-2xl p-6 sm:p-8 lg:p-10 border border-gray-200/80 shadow-lg hover:shadow-xl transition-all duration-300 flex flex-col justify-between h-full overflow-hidden">
                <div>
                  <div className="flex items-center justify-between mb-6">
                    <div className="w-14 h-14 bg-secunova-blue/10 rounded-2xl flex items-center justify-center text-secunova-blue flex-shrink-0">
                      <Shield className="h-7 w-7" />
                    </div>
                    <span className="text-xs font-bold uppercase tracking-widest px-3.5 py-1.5 bg-secunova-blue/10 text-secunova-blue rounded-full">03</span>
                  </div>
                  <h3 className="text-2xl sm:text-3xl font-bold text-secunova-dark mb-4 leading-tight break-words">Cybersecurity &amp; Risk Governance</h3>
                  <p className="text-slate-700 text-sm sm:text-base leading-relaxed mb-8 break-words">
                    Identify threat exposure, audit infrastructure posture, enforce compliance frameworks (SOC 2, ISO 27001), and safeguard continuity.
                  </p>
                  <ul className="space-y-3.5 text-xs sm:text-sm text-slate-800 font-medium mb-10">
                    <li className="flex items-start text-left gap-3"><CheckCircle className="h-5 w-5 text-secunova-blue flex-shrink-0 mt-0.5" /> <span>Cyber Risk Posture Audits &amp; Remediation</span></li>
                    <li className="flex items-start text-left gap-3"><CheckCircle className="h-5 w-5 text-secunova-blue flex-shrink-0 mt-0.5" /> <span>Regulatory Compliance Advisory (SOC 2, PIPEDA)</span></li>
                    <li className="flex items-start text-left gap-3"><CheckCircle className="h-5 w-5 text-secunova-blue flex-shrink-0 mt-0.5" /> <span>Disaster Recovery &amp; Business Continuity Planning</span></li>
                  </ul>
                </div>
                <Link to="/services/enterprise-audits" className="btn btn-outline w-full justify-center text-xs uppercase tracking-wider font-bold py-4">
                  Explore Security Audit Details <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </div>

              {/* Capability 4 */}
              <div className="bg-gray-50 rounded-2xl p-6 sm:p-8 lg:p-10 border border-gray-200/80 shadow-lg hover:shadow-xl transition-all duration-300 flex flex-col justify-between h-full overflow-hidden">
                <div>
                  <div className="flex items-center justify-between mb-6">
                    <div className="w-14 h-14 bg-secunova-light/15 rounded-2xl flex items-center justify-center text-secunova-light flex-shrink-0">
                      <Globe className="h-7 w-7 text-secunova-light" />
                    </div>
                    <span className="text-xs font-bold uppercase tracking-widest px-3.5 py-1.5 bg-secunova-light/15 text-secunova-light rounded-full">04</span>
                  </div>
                  <h3 className="text-2xl sm:text-3xl font-bold text-secunova-dark mb-4 leading-tight break-words">Customer Platforms &amp; Bespoke Engineering</h3>
                  <p className="text-slate-700 text-sm sm:text-base leading-relaxed mb-8 break-words">
                    Architect custom enterprise applications, web portals, and internal tools engineered with sub-second performance and zero pre-made templates.
                  </p>
                  <ul className="space-y-3.5 text-xs sm:text-sm text-slate-800 font-medium mb-10">
                    <li className="flex items-start text-left gap-3"><CheckCircle className="h-5 w-5 text-secunova-light flex-shrink-0 mt-0.5" /> <span>Custom Enterprise Web Application Engineering</span></li>
                    <li className="flex items-start text-left gap-3"><CheckCircle className="h-5 w-5 text-secunova-light flex-shrink-0 mt-0.5" /> <span>High-Performance Platform Architecture</span></li>
                    <li className="flex items-start text-left gap-3"><CheckCircle className="h-5 w-5 text-secunova-light flex-shrink-0 mt-0.5" /> <span>End-to-End Client Asset Ownership</span></li>
                  </ul>
                </div>
                <Link to="/services/strategic-advisory-pmaas" className="btn btn-outline w-full justify-center text-xs uppercase tracking-wider font-bold py-4">
                  Explore Engineering Details <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </LazySection>

      {/* ========================================
          PMaaS Model Section
          ======================================== */}
      <LazySection className="secunova-section bg-gradient-to-br from-secunova-dark via-gray-900 to-secunova-blue text-white relative overflow-hidden">
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-7xl mx-auto">
            <div className="text-center max-w-3xl mx-auto mb-16">
              <div className="inline-flex items-center bg-white/10 backdrop-blur-md px-4 py-2 rounded-full text-xs font-bold uppercase tracking-widest text-secunova-light mb-6">
                <Briefcase className="h-4 w-4 mr-2" />
                Practice Area Two
              </div>
              <h2 className="text-3xl sm:text-5xl font-bold tracking-tight leading-tight mb-4">
                Project Management <span className="text-secunova-light">as a Service (PMaaS)</span>
              </h2>
              <p className="text-blue-100/90 text-base sm:text-lg leading-relaxed">
                An agile execution framework granting your leadership team immediate access to senior project directors on demand, ensuring capital protection, strict milestone tracking, and audit-ready governance.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              <div className="bg-white/5 border border-white/15 rounded-2xl p-6 backdrop-blur-md hover:bg-white/10 transition-all">
                <div className="p-2.5 bg-white/10 rounded-lg inline-flex mb-4 text-secunova-light">
                  <Users className="h-6 w-6" />
                </div>
                <h3 className="text-lg font-bold text-white mb-2">Senior Delivery Leadership</h3>
                <p className="text-xs text-blue-100/90 leading-relaxed">Seasoned project leads drive initiatives from charter definition through execution and formal handoff.</p>
              </div>

              <div className="bg-white/5 border border-white/15 rounded-2xl p-6 backdrop-blur-md hover:bg-white/10 transition-all">
                <div className="p-2.5 bg-white/10 rounded-lg inline-flex mb-4 text-secunova-light">
                  <Scale className="h-6 w-6" />
                </div>
                <h3 className="text-lg font-bold text-white mb-2">Resource &amp; Vendor Control</h3>
                <p className="text-xs text-blue-100/90 leading-relaxed">Optimize internal talent and enforce external vendor accountability to prevent scope creep.</p>
              </div>

              <div className="bg-white/5 border border-white/15 rounded-2xl p-6 backdrop-blur-md hover:bg-white/10 transition-all">
                <div className="p-2.5 bg-white/10 rounded-lg inline-flex mb-4 text-secunova-light">
                  <BarChart className="h-6 w-6" />
                </div>
                <h3 className="text-lg font-bold text-white mb-2">Capital &amp; Budget Protection</h3>
                <p className="text-xs text-blue-100/90 leading-relaxed">Rigorous financial oversight keeps project spending aligned with board-approved authorizations.</p>
              </div>

              <div className="bg-white/5 border border-white/15 rounded-2xl p-6 backdrop-blur-md hover:bg-white/10 transition-all">
                <div className="p-2.5 bg-white/10 rounded-lg inline-flex mb-4 text-secunova-light">
                  <Shield className="h-6 w-6" />
                </div>
                <h3 className="text-lg font-bold text-white mb-2">Risk Anticipation</h3>
                <p className="text-xs text-blue-100/90 leading-relaxed">Proactive risk identification mitigates technical bottlenecks before they disrupt operations.</p>
              </div>

              <div className="bg-white/5 border border-white/15 rounded-2xl p-6 backdrop-blur-md hover:bg-white/10 transition-all">
                <div className="p-2.5 bg-white/10 rounded-lg inline-flex mb-4 text-secunova-light">
                  <Award className="h-6 w-6" />
                </div>
                <h3 className="text-lg font-bold text-white mb-2">Quality Assurance</h3>
                <p className="text-xs text-blue-100/90 leading-relaxed">Systematic peer reviews verify that technical code and architecture meet rigorous benchmarks.</p>
              </div>

              <div className="bg-white/5 border border-white/15 rounded-2xl p-6 backdrop-blur-md hover:bg-white/10 transition-all">
                <div className="p-2.5 bg-white/10 rounded-lg inline-flex mb-4 text-secunova-light">
                  <LineChart className="h-6 w-6" />
                </div>
                <h3 className="text-lg font-bold text-white mb-2">Executive Reporting</h3>
                <p className="text-xs text-blue-100/90 leading-relaxed">Clear executive dashboards provide total visibility into milestones, budget burn, and deliverables.</p>
              </div>

              <div className="bg-white/5 border border-white/15 rounded-2xl p-6 backdrop-blur-md hover:bg-white/10 transition-all">
                <div className="p-2.5 bg-white/10 rounded-lg inline-flex mb-4 text-secunova-light">
                  <Zap className="h-6 w-6" />
                </div>
                <h3 className="text-lg font-bold text-white mb-2">Methodological Precision</h3>
                <p className="text-xs text-blue-100/90 leading-relaxed">Tailored deployment of Agile, Waterfall, or hybrid methodologies matching your environment.</p>
              </div>

              <div className="bg-white/5 border border-white/15 rounded-2xl p-6 backdrop-blur-md hover:bg-white/10 transition-all">
                <div className="p-2.5 bg-white/10 rounded-lg inline-flex mb-4 text-secunova-light">
                  <Target className="h-6 w-6" />
                </div>
                <h3 className="text-lg font-bold text-white mb-2">Milestone Integrity</h3>
                <p className="text-xs text-blue-100/90 leading-relaxed">Strict adherence to delivery commitments to guarantee predictable launch schedules.</p>
              </div>
            </div>

            <div className="mt-12 text-center">
              <Link to="/services/strategic-advisory-pmaas" className="btn btn-gradient btn-lg">
                View PMaaS Delivery Models <ArrowRight className="ml-2 h-4 w-4 text-white" />
              </Link>
            </div>
          </div>
        </div>
      </LazySection>

      {/* ========================================
          Data Architecture Highlight
          ======================================== */}
      <LazySection className="secunova-section secunova-section--gray border-t border-b border-gray-200/80">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
              <div className="lg:col-span-7">
                <div className="inline-flex items-center bg-secunova-blue/10 text-secunova-blue px-4 py-2 rounded-full text-xs font-bold uppercase tracking-widest mb-4">
                  <Database className="h-4 w-4 mr-2" />
                  Data Infrastructure
                </div>
                <h2 className="text-3xl md:text-4xl font-bold text-secunova-dark tracking-tight leading-tight mb-4">
                  Data Governance Built for <span className="bg-clip-text text-transparent bg-gradient-to-r from-secunova-blue to-secunova-light">Strategic Insight</span>
                </h2>
                <p className="text-slate-700 text-base leading-relaxed mb-6 max-w-prose">
                  Big data creates long-term ROI when governed effectively. We design secure data pipelines, warehouse analytics, and reporting structures that convert disparate data streams into boardroom clarity.
                </p>
                <div className="flex flex-wrap gap-3">
                  <Link to="/services/strategic-advisory-pmaas" className="btn btn-gradient btn-md">
                    Explore Architecture <ArrowRight className="ml-2 h-4 w-4 text-white" />
                  </Link>
                </div>
              </div>
              <div className="lg:col-span-5">
                <div className="bg-white rounded-2xl border border-gray-200 shadow-lg p-8">
                  <div className="flex items-center gap-3 mb-6">
                    <div className="w-10 h-10 bg-secunova-blue/10 rounded-xl flex items-center justify-center text-secunova-blue">
                      <Wrench className="h-5 w-5" />
                    </div>
                    <h3 className="text-lg font-bold text-secunova-dark">The SecuNova Delivery Framework</h3>
                  </div>
                  <div className="space-y-4 text-xs text-slate-600 leading-relaxed">
                    <div className="pb-3 border-b border-gray-100">
                      <span className="font-bold text-secunova-dark block mb-0.5">1. Forensic Discovery &amp; Audit</span>
                      Diagnostic evaluation identifies structural vulnerabilities, cost bloat, and legacy technical debt.
                    </div>
                    <div className="pb-3 border-b border-gray-100">
                      <span className="font-bold text-secunova-dark block mb-0.5">2. Architecture &amp; Governance Roadmap</span>
                      Phase-gated implementation plans aligned with regulatory standards and corporate targets.
                    </div>
                    <div>
                      <span className="font-bold text-secunova-dark block mb-0.5">3. Governed PMaaS Execution</span>
                      On-demand leadership enforces quality control, milestone compliance, and transparent reporting.
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </LazySection>

      {/* ========================================
          Track Record Overview
          ======================================== */}
      <LazySection className="secunova-section secunova-section--light">
        <div className="container mx-auto px-4">
          <div className="max-w-7xl mx-auto">
            <div className="flex flex-col md:flex-row md:items-end justify-between mb-12">
              <div>
                <div className="inline-flex items-center bg-secunova-blue/10 text-secunova-blue px-4 py-2 rounded-full text-xs font-bold uppercase tracking-widest mb-4">
                  <Code className="h-4 w-4 mr-2" />
                  Technical Track Record
                </div>
                <h2 className="text-3xl md:text-4xl font-bold text-secunova-dark tracking-tight">
                  Supervised Engineering <span className="bg-clip-text text-transparent bg-gradient-to-r from-secunova-blue to-secunova-light">&amp; Case Studies</span>
                </h2>
                <p className="text-xs font-semibold text-secunova-blue uppercase tracking-wider mt-2">
                  Institutional Execution Demonstrated
                </p>
              </div>
              <p className="text-slate-600 max-w-md text-sm mt-4 md:mt-0 leading-relaxed">
                Our team applies rigorous engineering principles across internal R&amp;D platforms and supervised client initiatives to achieve sub-second execution speeds.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8 items-stretch">
              {/* Product 1: Nova */}
              <div className="bg-white rounded-2xl p-6 sm:p-7 shadow-md border border-gray-200/90 flex flex-col justify-between h-full min-h-[290px] hover:shadow-lg transition-all duration-300 overflow-hidden">
                <div>
                  <div className="flex items-center justify-between mb-4">
                    <span className="text-[10px] uppercase font-bold tracking-widest px-2.5 py-1 bg-amber-500/10 text-amber-600 rounded border border-amber-500/20">
                      ACTIVE R&amp;D · 2026
                    </span>
                    <span className="text-xs font-mono text-slate-500">macOS Platform</span>
                  </div>
                  <h3 className="text-xl font-bold text-secunova-dark mb-2 break-words">Nova macOS AI Agent</h3>
                  <p className="text-xs sm:text-sm text-slate-600 mb-5 leading-relaxed break-words">
                    A native macOS intelligence architecture built in Swift and Core ML to execute complex desktop tasks with zero cloud data transmission.
                  </p>
                  <div className="flex flex-wrap gap-1.5 mb-6">
                    <span className="text-[10px] bg-gray-100 text-gray-700 px-2 py-0.5 rounded font-mono">Swift</span>
                    <span className="text-[10px] bg-gray-100 text-gray-700 px-2 py-0.5 rounded font-mono">Core ML</span>
                    <span className="text-[10px] bg-gray-100 text-gray-700 px-2 py-0.5 rounded font-mono">AppleScript</span>
                  </div>
                </div>
                <Link to="/our-work/nova" className="text-xs font-bold text-secunova-blue hover:text-secunova-light flex items-center justify-between pt-4 border-t border-gray-100">
                  <span>View Tech Architecture</span> <ArrowRight className="h-3.5 w-3.5" />
                </Link>
              </div>

              {/* Product 2: Career OS */}
              <div className="bg-white rounded-2xl p-6 sm:p-7 shadow-md border border-gray-200/90 flex flex-col justify-between h-full min-h-[290px] hover:shadow-lg transition-all duration-300 overflow-hidden">
                <div>
                  <div className="flex items-center justify-between mb-4">
                    <span className="text-[10px] uppercase font-bold tracking-widest px-2.5 py-1 bg-secunova-blue/10 text-secunova-blue rounded">
                      PLATFORM DELIVERY · 2025
                    </span>
                    <span className="text-xs font-mono text-slate-500">Web Engine</span>
                  </div>
                  <h3 className="text-xl font-bold text-secunova-dark mb-2 break-words">Career OS Engine</h3>
                  <p className="text-xs sm:text-sm text-slate-600 mb-5 leading-relaxed break-words">
                    A high-performance client-side application delivered under our PMaaS discipline using Next.js, TypeScript, and local storage encryption.
                  </p>
                  <div className="flex flex-wrap gap-1.5 mb-6">
                    <span className="text-[10px] bg-gray-100 text-gray-700 px-2 py-0.5 rounded font-mono">Next.js</span>
                    <span className="text-[10px] bg-gray-100 text-gray-700 px-2 py-0.5 rounded font-mono">TypeScript</span>
                    <span className="text-[10px] bg-gray-100 text-gray-700 px-2 py-0.5 rounded font-mono">IndexedDB</span>
                  </div>
                </div>
                <Link to="/our-work/career-os" className="text-xs font-bold text-secunova-blue hover:text-secunova-light flex items-center justify-between pt-4 border-t border-gray-100">
                  <span>View Tech Architecture</span> <ArrowRight className="h-3.5 w-3.5" />
                </Link>
              </div>

              {/* Product 3: SecuBoost */}
              <div className="bg-white rounded-2xl p-6 sm:p-7 shadow-md border border-gray-200/90 flex flex-col justify-between h-full min-h-[290px] hover:shadow-lg transition-all duration-300 overflow-hidden">
                <div>
                  <div className="flex items-center justify-between mb-4">
                    <span className="text-[10px] uppercase font-bold tracking-widest px-2.5 py-1 bg-secunova-blue/10 text-secunova-blue rounded">
                      SECURITY SUITE · 2025
                    </span>
                    <span className="text-xs font-mono text-slate-500">System Utility</span>
                  </div>
                  <h3 className="text-xl font-bold text-secunova-dark mb-2 break-words">SecuBoost Security Suite</h3>
                  <p className="text-xs sm:text-sm text-slate-600 mb-5 leading-relaxed break-words">
                    A native macOS system security utility built with SwiftUI and CryptoKit, operating 100 percent offline for absolute data confidentiality.
                  </p>
                  <div className="flex flex-wrap gap-1.5 mb-6">
                    <span className="text-[10px] bg-gray-100 text-gray-700 px-2 py-0.5 rounded font-mono">SwiftUI</span>
                    <span className="text-[10px] bg-gray-100 text-gray-700 px-2 py-0.5 rounded font-mono">CryptoKit</span>
                    <span className="text-[10px] bg-gray-100 text-gray-700 px-2 py-0.5 rounded font-mono">IOKit</span>
                  </div>
                </div>
                <Link to="/our-work/secuboost" className="text-xs font-bold text-secunova-blue hover:text-secunova-light flex items-center justify-between pt-4 border-t border-gray-100">
                  <span>View Tech Architecture</span> <ArrowRight className="h-3.5 w-3.5" />
                </Link>
              </div>
            </div>

            <div className="text-center mt-12">
              <Link to="/about/our-work" className="btn btn-gradient btn-lg">
                View Complete Track Record <ArrowRight className="ml-2 h-4 w-4 text-white" />
              </Link>
            </div>
          </div>
        </div>
      </LazySection>

      {/* ========================================
          Final Action CTA
          ======================================== */}
      <section className="secunova-section secunova-section--dark relative overflow-hidden">
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <div className="inline-flex items-center bg-white/10 px-4 py-2 rounded-full text-xs font-bold uppercase tracking-widest text-secunova-light mb-6">
              <Phone className="h-4 w-4 mr-2" />
              Executive Consultation
            </div>
            <h2 className="text-3xl md:text-5xl font-bold tracking-tight mb-6 text-white">
              Ready to Upgrade Enterprise Performance <span className="text-secunova-light">&amp; Governance?</span>
            </h2>
            <p className="text-blue-100/90 text-lg max-w-2xl mx-auto mb-8 leading-relaxed">
              Connect directly with SecuNova's advisory team for an independent assessment of your digital roadmap, security posture, and project execution models.
            </p>
            <div className="flex flex-col sm:flex-row justify-center gap-4">
              <Link to="/contact" className="btn btn-gradient btn-lg text-white">
                Schedule Executive Consultation <ArrowRight className="ml-2 h-4 w-4 text-white" />
              </Link>
              <Link to="/services" className="btn btn-outline-light btn-lg text-white">
                Explore Advisory Solutions
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default memo(HomePage);
