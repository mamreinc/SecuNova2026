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

import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';
import { useState } from 'react';
import { buildSeoTags } from '../utils/seo-meta';
import SEOSchema from '../components/SEOSchema';
import {
  ShieldCheck, Target, Users, CheckCircle2, Building, Award, Lock,
  Crown, ClipboardCheck, Compass, RefreshCw, Shield, Globe, ArrowRight,
  Code, Cpu, FileText, Database, BookOpen, Sparkles
} from 'lucide-react';
import CtaSection from '../components/CtaSection';

const PRINCIPLES = [
  {
    title: 'Absolute Independence',
    desc: 'Zero software reseller affiliations and zero vendor kickbacks. Every recommendation serves the client balance sheet exclusively, guaranteeing completely objective executive guidance.',
    icon: <ShieldCheck className="h-6 w-6 text-secunova-blue" />
  },
  {
    title: 'Strict Scope Exclusion',
    desc: 'SecuNova functions strictly as a governance, advisory, and audit powerhouse. We do not build websites or commercial software for third parties, maintaining total separation from agency development services.',
    icon: <Lock className="h-6 w-6 text-secunova-light" />
  },
  {
    title: 'Senior-Led Advisory',
    desc: 'Engagements are directed exclusively by senior advisors with deep expertise in governance, cloud architecture, security compliance, and project leadership.',
    icon: <Users className="h-6 w-6 text-secunova-blue" />
  },
  {
    title: 'Empirical Risk Governance',
    desc: 'From technical readiness assessments to financial audits, our advice relies on verifiable data, quantitative metrics, and board-ready reporting.',
    icon: <Target className="h-6 w-6 text-secunova-light" />
  }
];

const PORTFOLIO = [
  {
    id: 'nova',
    name: 'Nova macOS AI Agent',
    desc: 'A native macOS AI agent engineered for secure on-device task execution using Swift and Core ML.',
    icon: <Cpu className="h-5 w-5" />,
  },
  {
    id: 'career-os',
    name: 'Career OS',
    desc: 'An automated career management and ATS resume tailoring system built with Next.js and TypeScript.',
    icon: <FileText className="h-5 w-5" />,
  },
  {
    id: 'secuboost',
    name: 'SecuBoost',
    desc: 'A high-performance native macOS utility and security suite operating entirely offline using SwiftUI and CryptoKit.',
    icon: <Shield className="h-5 w-5" />,
  },
  {
    id: 'journalism-audit',
    name: 'Journalism Audit Platform',
    desc: 'A private AI content verification and fact-checking hub built for media organizations using Python, FastAPI, and LangChain.',
    icon: <BookOpen className="h-5 w-5" />,
  },
  {
    id: 'lead-finder',
    name: 'SecuNova Lead Finder',
    desc: 'A privately owned sales intelligence and lead discovery system powered by Python, PostgreSQL, and Redis.',
    icon: <Database className="h-5 w-5" />,
  },
  {
    id: 'canadaquest',
    name: 'CanadaQuest',
    desc: 'An advanced AI-powered Canadian citizenship training platform built with Next.js and TypeScript.',
    icon: <Globe className="h-5 w-5" />,
  },
];

const AboutPage = () => {
  const [teamImageFailed, setTeamImageFailed] = useState(false);
  return (
    <div className="min-h-screen bg-white">
      <Helmet>
        <title>About SecuNova Consulting | Enterprise Technology Advisory &amp; Governance</title>
        <meta
          name="description"
          content="SecuNova Consulting is a Calgary-based enterprise technology advisory and governance firm protecting corporate capital, enforcing vendor accountability, and directing digital transformation roadmaps across Canada and the US."
        />
        <meta
          name="keywords"
          content="SecuNova Consulting, IT advisory Calgary, strategic advisory Canada, PMaaS Calgary, enterprise IT governance, cybersecurity compliance Alberta, vendor accountability"
        />
        <link rel="canonical" href="https://secunovainc.com/about" />
        {buildSeoTags({
          title: 'About SecuNova Consulting | Enterprise Technology Advisory & Governance',
          description:
            'Independent enterprise technology advisory and governance: strategic advisory, digital transformation, and PMaaS for Canadian and American corporate leadership.',
          url: '/about',
          imageAlt: 'SecuNova Consulting - About the Firm',
        })}

        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "BreadcrumbList",
            "itemListElement": [
              { "@type": "ListItem", "position": 1, "name": "Home", "item": "https://secunovainc.com" },
              { "@type": "ListItem", "position": 2, "name": "About", "item": "https://secunovainc.com/about" }
            ]
          })}
        </script>
      </Helmet>
      <SEOSchema
        type="webpage"
        data={{
          title: 'About SecuNova Consulting | Enterprise Technology Advisory & Governance',
          description:
            'SecuNova Consulting is a Calgary-based enterprise technology advisory and governance firm protecting corporate capital, enforcing vendor accountability, and directing digital transformation roadmaps across Canada and the US.',
          url: 'https://secunovainc.com/about',
        }}
      />

      {/* Hero Section */}
      <section className="relative min-h-[85vh] overflow-hidden flex items-center justify-center pt-36 sm:pt-44 pb-24 bg-secunova-dark text-white">
        <div className="absolute inset-0">
          <img
            src="https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&w=1200&q=85"
            alt="SecuNova Consulting Headquarters &amp; Operations"
            className="w-full h-full object-cover opacity-20"
          />
          <div className="absolute inset-0 bg-gradient-to-br from-secunova-dark/95 via-secunova-dark/90 to-secunova-blue/80"></div>
        </div>

        <div className="container mx-auto px-4 relative z-10 w-full">
          <div className="max-w-4xl mx-auto text-center">
            <div className="inline-flex items-center bg-white/10 backdrop-blur-sm border border-white/20 px-5 py-2 rounded-full text-xs font-semibold uppercase tracking-widest text-secunova-light mb-6">
              <Building className="h-4 w-4 mr-2" />
              Institutional Advisory &amp; Governance
            </div>

            <h1 className="hero-heading mb-6 text-white">
              <span className="block">The Strategic Shield for</span>
              <span className="block text-secunova-light mt-1">Enterprise Technology Investment.</span>
            </h1>

            <p className="text-lg md:text-xl text-blue-100/90 max-w-3xl mx-auto leading-relaxed font-normal">
              SecuNova Consulting is a high-level enterprise technology advisory and governance firm based in Calgary, Alberta, serving corporate leadership across the Canadian and American markets. We protect corporate capital, enforce strict vendor accountability, direct digital transformation roadmaps, and audit complex IT infrastructure.
            </p>
          </div>
        </div>
      </section>

      {/* Corporate Overview */}
      <section className="secunova-section secunova-section--light">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
              <div className="lg:col-span-7">
                <span className="text-xs font-bold uppercase tracking-widest text-secunova-blue block mb-2">Corporate Overview</span>
                <h2 className="text-3xl md:text-4xl font-bold text-secunova-dark mb-6 leading-tight tracking-tight">
                  Governance, Oversight &amp; Advisory: Built on Absolute Independence
                </h2>
                <p className="text-slate-700 text-base leading-relaxed mb-6 max-w-prose">
                  SecuNova Consulting operates as an elite strategic shield for enterprise technology investment. The firm protects corporate capital, enforces strict vendor accountability, directs digital transformation roadmaps, and audits complex IT infrastructure across Canada and the United States.
                </p>
                <p className="text-slate-700 text-base leading-relaxed mb-8 max-w-prose">
                  SecuNova functions strictly as a governance, advisory, and audit powerhouse. With zero software reseller affiliations and zero vendor kickbacks, every recommendation is completely objective, and every engagement remains fully separated from agency development services.
                </p>
                <div className="grid grid-cols-2 gap-4 text-xs font-bold text-secunova-dark">
                  <div className="flex items-center"><CheckCircle2 className="h-4 w-4 text-secunova-blue mr-2 flex-shrink-0" /> Canadian Headquartered</div>
                  <div className="flex items-center"><CheckCircle2 className="h-4 w-4 text-secunova-blue mr-2 flex-shrink-0" /> Senior Partner Led</div>
                  <div className="flex items-center"><CheckCircle2 className="h-4 w-4 text-secunova-blue mr-2 flex-shrink-0" /> Zero Vendor Affiliations</div>
                  <div className="flex items-center"><CheckCircle2 className="h-4 w-4 text-secunova-blue mr-2 flex-shrink-0" /> North American Coverage</div>
                </div>
              </div>

              <div className="lg:col-span-5">
                <div className="rounded-2xl overflow-hidden shadow-2xl border border-gray-200">
                  <div className="relative aspect-square w-full overflow-hidden bg-gray-100">
                    {!teamImageFailed && (
                      <img
                        src="/team.jpg"
                        alt="The SecuNova Consulting Team"
                        className="w-full h-full object-cover"
                        loading="eager"
                        onError={() => setTeamImageFailed(true)}
                      />
                    )}
                    {teamImageFailed && (
                      <div className="w-full h-full flex flex-col items-center justify-center bg-gradient-to-br from-secunova-dark to-secunova-blue text-white/50">
                        <Users className="h-16 w-16 mb-3" />
                        <span className="text-xs uppercase tracking-widest font-semibold">Team Profile</span>
                      </div>
                    )}
                  </div>
                  <div className="bg-secunova-dark text-white p-5 text-center">
                    <div className="text-sm font-bold flex items-center justify-center gap-2">
                      <Sparkles className="h-4 w-4 text-secunova-light" />
                      The SecuNova Consulting Team
                    </div>
                    <div className="text-xs text-blue-200 mt-1">Calgary, AB · Serving North American Enterprises</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Core Identity & Operational Boundaries */}
      <section className="secunova-section secunova-section--gray">
        <div className="container mx-auto px-4">
          <div className="max-w-7xl mx-auto">
            <div className="text-center max-w-3xl mx-auto mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-secunova-dark mb-4 tracking-tight">
                Core Identity &amp; Operational Boundaries
              </h2>
              <p className="text-slate-600 text-base">
                The structural guarantees that ensure every engagement delivers uncompromised, objective executive guidance.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-stretch">
              <div className="bg-white p-8 sm:p-10 rounded-2xl border border-gray-200 shadow-sm hover:shadow-lg transition-all duration-300">
                <div className="p-3 bg-secunova-blue/5 rounded-xl inline-block mb-6">
                  <ShieldCheck className="h-8 w-8 text-secunova-blue" />
                </div>
                <h3 className="text-2xl font-bold text-secunova-dark mb-4">Absolute Independence</h3>
                <p className="text-slate-600 text-sm leading-relaxed mb-6">
                  SecuNova operates with zero software reseller affiliations and zero vendor kickbacks, guaranteeing completely objective executive guidance and uncompromised strategic advice.
                </p>
                <ul className="space-y-3">
                  {[
                    'Zero reseller or commission relationships',
                    'Objective recommendations on every engagement',
                    'Vendor neutrality enforced at the structural level',
                  ].map((item, i) => (
                    <li key={i} className="flex items-start gap-3 text-sm text-slate-700">
                      <CheckCircle2 className="h-4 w-4 text-secunova-blue mt-0.5 flex-shrink-0" /> {item}
                    </li>
                  ))}
                </ul>
              </div>

              <div className="bg-white p-8 sm:p-10 rounded-2xl border border-gray-200 shadow-sm hover:shadow-lg transition-all duration-300">
                <div className="p-3 bg-secunova-light/10 rounded-xl inline-block mb-6">
                  <Lock className="h-8 w-8 text-secunova-light" />
                </div>
                <h3 className="text-2xl font-bold text-secunova-dark mb-4">Strict Scope Exclusion</h3>
                <p className="text-slate-600 text-sm leading-relaxed mb-6">
                  The firm functions strictly as a governance, advisory, and audit powerhouse. It explicitly does not build custom websites, web applications, or commercial software for third-party clients, maintaining total separation from agency development services.
                </p>
                <ul className="space-y-3">
                  {[
                    'Governance, advisory, and audit only',
                    'No agency or build-shop development services',
                    'Total separation from client vendor conflicts',
                  ].map((item, i) => (
                    <li key={i} className="flex items-start gap-3 text-sm text-slate-700">
                      <CheckCircle2 className="h-4 w-4 text-secunova-light mt-0.5 flex-shrink-0" /> {item}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Two Core Advisory Pillars */}
      <section className="secunova-section secunova-section--light">
        <div className="container mx-auto px-4">
          <div className="max-w-7xl mx-auto">
            <div className="text-center max-w-3xl mx-auto mb-16">
              <div className="inline-flex items-center bg-secunova-blue/10 text-secunova-blue px-4 py-2 rounded-full text-xs font-bold uppercase tracking-widest mb-4">
                <Award className="h-4 w-4 mr-2" />
                Practice Lines
              </div>
              <h2 className="text-3xl md:text-4xl font-bold text-secunova-dark mb-4 tracking-tight">
                The Two Core Advisory Pillars
              </h2>
              <p className="text-slate-600 text-base">
                Every SecuNova engagement resolves around two integrated practice lines, governed under one zero-trust execution standard.
              </p>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-stretch">

              {/* Pillar 1: Strategic Advisory & Digital Transformation */}
              <div className="bg-white rounded-2xl border border-gray-200/90 shadow-lg p-8 sm:p-10 flex flex-col">
                <div className="flex items-center justify-between mb-6">
                  <div className="w-14 h-14 bg-secunova-blue/10 rounded-2xl flex items-center justify-center text-secunova-blue flex-shrink-0">
                    <Crown className="h-7 w-7" />
                  </div>
                  <span className="text-xs font-bold uppercase tracking-widest px-3.5 py-1.5 bg-secunova-blue/10 text-secunova-blue rounded-full">Pillar 01</span>
                </div>
                <h3 className="text-2xl sm:text-3xl font-bold text-secunova-dark mb-3 leading-tight">
                  Strategic Advisory &amp; Digital Transformation
                </h3>
                <p className="text-slate-600 text-sm sm:text-base leading-relaxed mb-8">
                  Developing long-term digital roadmaps aligned with corporate vision, managing organizational change, and guiding business model innovation.
                </p>
                <div className="space-y-4 mb-8 flex-1">
                  {[
                    { icon: <Compass className="h-4 w-4" />, title: 'Strategic Advisory', detail: 'Digital roadmaps, change management, feasibility studies, and business model innovation.' },
                    { icon: <RefreshCw className="h-4 w-4" />, title: 'Digital Transformation & Process Optimization', detail: 'Business process reengineering, AWS/GCP cloud migration, AI and automation integration, and data analytics frameworks.' },
                    { icon: <Shield className="h-4 w-4" />, title: 'Cybersecurity & Risk Management', detail: 'Cyber risk assessments, corporate governance and compliance, and business continuity planning.' },
                    { icon: <Globe className="h-4 w-4" />, title: 'Customer Experience & Digital Solutions', detail: 'Digital customer journey design and high-level executive oversight for digital products.' },
                  ].map((item, i) => (
                    <div key={i} className="flex items-start gap-4">
                      <div className="w-9 h-9 bg-secunova-blue/8 rounded-lg flex items-center justify-center text-secunova-blue flex-shrink-0 mt-0.5">
                        {item.icon}
                      </div>
                      <div>
                        <div className="text-sm font-bold text-secunova-dark mb-0.5">{item.title}</div>
                        <div className="text-xs text-slate-500 leading-relaxed">{item.detail}</div>
                      </div>
                    </div>
                  ))}
                </div>
                <Link to="/services/strategic-advisory-pmaas" className="btn btn-gradient w-full justify-center text-sm font-bold text-white">
                  Explore Strategic Advisory <ArrowRight className="ml-2 h-4 w-4 text-white" />
                </Link>
              </div>

              {/* Pillar 2: PMaaS */}
              <div className="bg-gradient-to-br from-secunova-dark to-gray-900 text-white rounded-2xl border border-gray-800 shadow-lg p-8 sm:p-10 flex flex-col">
                <div className="flex items-center justify-between mb-6">
                  <div className="w-14 h-14 bg-secunova-light/15 rounded-2xl flex items-center justify-center text-secunova-light flex-shrink-0">
                    <ClipboardCheck className="h-7 w-7" />
                  </div>
                  <span className="text-xs font-bold uppercase tracking-widest px-3.5 py-1.5 bg-secunova-light/15 text-secunova-light rounded-full">Pillar 02</span>
                </div>
                <h3 className="text-2xl sm:text-3xl font-bold text-white mb-3 leading-tight">
                  Project Management as a Service (PMaaS)
                </h3>
                <p className="text-blue-100/90 text-sm sm:text-base leading-relaxed mb-8">
                  Delivering uncompromising technical supervision for major enterprise initiatives.
                </p>
                <div className="space-y-4 mb-8 flex-1">
                  {[
                    { title: 'Strict Milestone Timelines', detail: 'Enforcing milestone schedules so launches land predictably and on time.' },
                    { title: 'Corporate Budget Protection', detail: 'Safeguarding approved budgets through disciplined financial control.' },
                    { title: 'Rigorous Vendor Oversight', detail: 'Auditing vendor deliverables with independent technical verification.' },
                    { title: 'Technical Debt Elimination', detail: 'Systematically removing technical debt before it impacts operations.' },
                  ].map((item, i) => (
                    <div key={i} className="flex items-start gap-4">
                      <CheckCircle2 className="h-5 w-5 text-secunova-light mt-0.5 flex-shrink-0" />
                      <div>
                        <div className="text-sm font-bold text-white mb-0.5">{item.title}</div>
                        <div className="text-xs text-blue-100/70 leading-relaxed">{item.detail}</div>
                      </div>
                    </div>
                  ))}
                </div>
                <Link to="/services/strategic-advisory-pmaas" className="btn btn-gradient w-full justify-center text-sm font-bold text-white">
                  Explore PMaaS Governance <ArrowRight className="ml-2 h-4 w-4 text-white" />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Guiding Principles */}
      <section className="secunova-section secunova-section--gray">
        <div className="container mx-auto px-4">
          <div className="max-w-7xl mx-auto">
            <div className="text-center max-w-3xl mx-auto mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-secunova-dark mb-4 tracking-tight">
                Our Institutional Guiding Principles
              </h2>
              <p className="text-slate-600 text-base">
                The core standards governing every audit, transformation roadmap, and PMaaS engagement we manage.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {PRINCIPLES.map((principle, index) => (
                <div key={index} className="bg-white p-8 rounded-2xl border border-gray-200 shadow-sm hover:shadow-md transition-shadow">
                  <div className="p-3 bg-secunova-blue/5 rounded-xl inline-block mb-6">{principle.icon}</div>
                  <h3 className="text-xl font-bold text-secunova-dark mb-3">{principle.title}</h3>
                  <p className="text-sm text-slate-600 leading-relaxed">{principle.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Proprietary Technical Portfolio */}
      <section className="secunova-section secunova-section--light">
        <div className="container mx-auto px-4">
          <div className="max-w-7xl mx-auto">
            <div className="text-center max-w-3xl mx-auto mb-16">
              <div className="inline-flex items-center bg-secunova-blue/10 text-secunova-blue px-4 py-2 rounded-full text-xs font-bold uppercase tracking-widest mb-4">
                <Code className="h-4 w-4 mr-2" />
                In-House Technical Portfolio
              </div>
              <h2 className="text-3xl md:text-4xl font-bold text-secunova-dark mb-4 tracking-tight">
                Proprietary Platforms Delivered Under Our Standards
              </h2>
              <p className="text-slate-600 text-base">
                SecuNova demonstrates its deep technical mastery and execution capability through an in-house portfolio of production-grade software platforms developed entirely under its internal technical standards and project management discipline.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {PORTFOLIO.map((prod) => (
                <Link
                  key={prod.id}
                  to={`/about/our-work/${prod.id}`}
                  className="group bg-white rounded-2xl p-7 border border-gray-200 shadow-sm hover:shadow-lg hover:border-secunova-blue/30 transition-all duration-300 flex flex-col"
                >
                  <div className="w-11 h-11 bg-secunova-blue/10 rounded-xl flex items-center justify-center text-secunova-blue mb-5 group-hover:scale-105 transition-transform">
                    {prod.icon}
                  </div>
                  <h3 className="text-lg font-bold text-secunova-dark mb-2 group-hover:text-secunova-blue transition-colors">{prod.name}</h3>
                  <p className="text-xs text-slate-600 leading-relaxed mb-5 flex-1">{prod.desc}</p>
                  <span className="text-xs font-bold text-secunova-blue flex items-center gap-1">
                    View Case Study <ArrowRight className="h-3.5 w-3.5" />
                  </span>
                </Link>
              ))}
            </div>
          </div>
        </div>
      </section>

      <CtaSection />
    </div>
  );
};

export default AboutPage;
