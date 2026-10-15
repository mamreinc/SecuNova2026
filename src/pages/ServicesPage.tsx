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
import { Link } from 'react-router-dom';
import {
  Crown, Shield, ArrowRight, CheckCircle,
  Globe, Target, Phone, Scale, Users,
  ClipboardCheck, Clock, Search, TrendingUp, X,
  Compass, ShieldCheck
} from 'lucide-react';
import CtaSection from '../components/CtaSection';
import { buildSeoTags } from '../utils/seo-meta';
import SEOSchema from '../components/SEOSchema';

interface ServiceCardProps {
  title: string;
  description: string;
  icon: React.ReactNode;
  highlights: string[];
  accent: 'blue' | 'light' | 'dark';
  badge?: string;
  href?: string;
}

const accentStyles = {
  blue: {
    iconBg: 'bg-secunova-blue/10 text-secunova-blue',
    check: 'text-secunova-blue',
    hoverBorder: 'hover:border-secunova-blue/40',
  },
  light: {
    iconBg: 'bg-secunova-light/15 text-secunova-light',
    check: 'text-secunova-light',
    hoverBorder: 'hover:border-secunova-light/40',
  },
  dark: {
    iconBg: 'bg-secunova-dark/10 text-secunova-dark',
    check: 'text-secunova-dark',
    hoverBorder: 'hover:border-secunova-dark/40',
  },
};

const ServiceItem: React.FC<ServiceCardProps> = ({ title, description, icon, highlights, accent, badge, href }) => {
  const styles = accentStyles[accent];

  return (
    <div className={`bg-white rounded-xl border border-gray-200 p-6 shadow-sm transition-all flex flex-col justify-between ${styles.hoverBorder}`}>
      <div>
        <div className="flex items-center justify-between mb-4">
          <div className={`w-10 h-10 rounded-lg flex items-center justify-center ${styles.iconBg}`}>
            {icon}
          </div>
          {badge && (
            <span className="text-[10px] font-bold uppercase tracking-wider px-2.5 py-0.5 rounded-full bg-secunova-blue/10 text-secunova-blue">
              {badge}
            </span>
          )}
        </div>
        <h3 className="text-lg font-bold text-secunova-dark mb-2">{title}</h3>
        <p className="text-xs text-slate-600 leading-relaxed mb-4">{description}</p>
        <ul className="space-y-2 mb-6">
          {highlights.map((item, idx) => (
            <li key={idx} className="flex items-center gap-2 text-xs text-slate-700">
              <CheckCircle className={`h-3.5 w-3.5 flex-shrink-0 ${styles.check}`} />
              <span>{item}</span>
            </li>
          ))}
        </ul>
      </div>
      <Link to={href || "/contact"} className="text-xs font-bold text-secunova-blue hover:text-secunova-light flex items-center gap-1 pt-3 border-t border-gray-100">
        <span>{href ? 'Explore Detailed Service' : 'Request Briefing'}</span>
        <ArrowRight className="h-3 w-3" />
      </Link>
    </div>
  );
};

const ServicesPage = () => {
  const presenceServices = [
    {
      title: 'Digital Presence Audit',
      description:
        'Forensic diagnostics of your current brand visibility, website friction points, and competitor market positioning.',
      icon: <Search className="h-5 w-5" />,
      highlights: ['Full digital footprint diagnostics', 'Competitor market share benchmarking', 'Conversion funnel friction analysis'],
      accent: 'blue' as const,
      badge: 'Core Diagnostic',
      href: '/services/digital-presence-audit',
    },
    {
      title: 'Content & Visual Storytelling',
      description:
        'Architecting authentic brand narratives, documentary photo guidelines, and unified tone of voice that commands authority.',
      icon: <Target className="h-5 w-5" />,
      highlights: ['Corporate story & narrative architecture', 'Visual documentation standards', 'Brand tone & voice guidelines'],
      accent: 'light' as const,
      badge: 'Brand Narrative',
      href: '/services/content-storytelling-strategy',
    },
    {
      title: 'AI Prompt & Content Workflows',
      description:
        'Custom corporate prompt libraries and automated internal workflows enabling 10x marketing content velocity.',
      icon: <Crown className="h-5 w-5" />,
      highlights: ['Bespoke marketing prompt libraries', 'Video scripting frameworks', 'Internal team velocity SOPs'],
      accent: 'blue' as const,
      badge: 'AI Enablement',
      href: '/services/ai-workflows-prompt-engineering',
    },
    {
      title: 'Local SEO & Reputation Management',
      description:
        'Google Business Profile map dominance, automated 5-star review capture systems, and crisis mitigation protocols.',
      icon: <Globe className="h-5 w-5" />,
      highlights: ['Google Map-Pack dominance', 'Systematic 5-star review acquisition', 'Crisis review mitigation'],
      accent: 'dark' as const,
      badge: 'Local Authority',
      href: '/services/local-seo-reputation-management',
    },
  ];

  const pmaasServices = [
    {
      title: 'Independent Vendor Audits',
      description:
        'Verifying deliverable compliance, technical quality, and contract specifications before milestone payments are released.',
      icon: <Shield className="h-5 w-5" />,
      highlights: ['Third-party deliverable compliance review', 'Milestone specification verification', 'Payment authorization governance'],
      accent: 'blue' as const,
      badge: 'Fiduciary Control',
      href: '/services/digital-project-governance',
    },
    {
      title: 'Milestone-Gated Budget Control',
      description:
        'Enforcing strict financial thresholds that eliminate budget drift and hold external execution agencies accountable.',
      icon: <Scale className="h-5 w-5" />,
      highlights: ['Pay-for-outcome release schedules', 'Zero unexpected change orders', 'Executive financial visibility'],
      accent: 'light' as const,
      href: '/services/digital-project-governance',
    },
    {
      title: 'Scope & Delivery Governance',
      description:
        'Protecting project timelines through formal change control protocols and proactive risk mitigation registers.',
      icon: <ClipboardCheck className="h-5 w-5" />,
      highlights: ['Strict change request management', 'Critical path timeline enforcement', 'Proactive executive risk registers'],
      accent: 'dark' as const,
      href: '/services/digital-project-governance',
    },
    {
      title: 'Turnkey Workspace Handover',
      description:
        'Engineering structured project environments with repeatable standard operating procedures for your internal team.',
      icon: <Users className="h-5 w-5" />,
      highlights: ['Clean Jira/ClickUp workspace setup', 'Repeatable standard operating procedures', 'Complete documentation handoff'],
      accent: 'blue' as const,
      href: '/services/digital-project-governance',
    },
  ];

  return (
    <div className="min-h-screen bg-white">
      <Helmet>
        <title>Advisory &amp; PMaaS Services | SecuNova Inc. Calgary</title>
        <meta
          name="description"
          content="Explore SecuNova's advisory practice: Digital Presence Consulting, Authority Architecture, and Project Management as a Service (PMaaS) in Calgary."
        />
        <meta
          name="keywords"
          content="digital presence services, strategic advisory Calgary, PMaaS governance, B2B SEO authority, vendor management Canada, conversion optimization"
        />
        {buildSeoTags({
          title: 'Advisory & PMaaS Services | SecuNova Inc.',
          description:
            'Comprehensive digital presence consulting, authority architecture, and PMaaS delivery governance for North American enterprises.',
          url: '/services',
          imageAlt: 'SecuNova Inc. - Advisory & PMaaS Services',
        })}
      </Helmet>

      <SEOSchema
        type="service"
        data={{
          title: 'Digital Presence Consulting & PMaaS Services | SecuNova Inc.',
          description:
            'Executive digital presence consulting, authority architecture, and PMaaS project governance for North American enterprises.',
          url: 'https://secunovainc.ca/services',
        }}
      />

      {/* Hero Section */}
      <section id="strategic-advisory" className="relative min-h-[750px] overflow-hidden flex items-center justify-center pt-32 pb-20 bg-secunova-dark text-white">
        <div className="absolute inset-0">
          <img
            src="/images/heroes/services-hero.jpg"
            alt="SecuNova Strategic Advisory Solutions Architecture"
            className="w-full h-full object-cover opacity-55"
            loading="eager"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-secunova-dark/80 via-secunova-dark/60 to-secunova-dark/90"></div>
        </div>

        <div className="container mx-auto px-4 relative z-10 w-full text-center">
          <div className="max-w-3xl mx-auto">
            <div className="inline-flex items-center bg-white/10 backdrop-blur-md px-4 py-1.5 rounded-full text-xs font-bold uppercase tracking-widest text-secunova-light mb-5">
              <Crown className="h-3.5 w-3.5 mr-1.5" />
              Executive Consulting Firm · Practice Areas
            </div>

            <h1 className="text-3xl sm:text-5xl font-extrabold text-white leading-tight tracking-tight mb-4">
              Strategic Advisory Solutions. <span className="text-secunova-light block sm:inline">Fiduciary Governance.</span>
            </h1>

            <p className="text-sm sm:text-base text-blue-100/90 max-w-xl mx-auto leading-relaxed mb-8">
              A consulting practice first and foremost. We guide enterprises, institutions, and founders to diagnose market presence, architect authority, and govern external agency delivery.
            </p>

            <div className="flex flex-col sm:flex-row justify-center gap-3">
              <a href="#presence" className="btn btn-gradient text-xs sm:text-sm font-bold text-white px-5 py-3">
                Digital Presence Advisory
              </a>
              <a href="#pmaas" className="btn btn-outline-light text-xs sm:text-sm font-bold text-white px-5 py-3">
                PMaaS Governance
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Pillar 01: Digital Presence Consulting */}
      <section id="presence" className="secunova-section secunova-section--light">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="mb-10 text-center max-w-2xl mx-auto">
              <span className="text-[10px] font-bold uppercase tracking-widest text-secunova-blue block mb-1">Pillar 01</span>
              <h2 className="text-2xl sm:text-3xl font-bold text-secunova-dark tracking-tight">
                Digital Presence &amp; Authority Architecture
              </h2>
              <p className="text-xs sm:text-sm text-slate-600 mt-2 leading-relaxed">
                Transforming every touchpoint between your company and its market into a credibility-building asset that drives inbound revenue.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5">
              {presenceServices.map((service, index) => (
                <ServiceItem key={index} {...service} />
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Pillar 02: PMaaS Delivery Governance */}
      <section id="pmaas" className="secunova-section bg-gray-50 border-t border-gray-200">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="mb-10 text-center max-w-2xl mx-auto">
              <span className="text-[10px] font-bold uppercase tracking-widest text-secunova-blue block mb-1">Pillar 02</span>
              <h2 className="text-2xl sm:text-3xl font-bold text-secunova-dark tracking-tight">
                Project Management as a Service (PMaaS)
              </h2>
              <p className="text-xs sm:text-sm text-slate-600 mt-2 leading-relaxed">
                Acting as your external Chief Project Officer: holding external agencies accountable, stopping budget drift, and verifying milestones.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5">
              {pmaasServices.map((service, index) => (
                <ServiceItem key={index} {...service} />
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Qualification Framework: Who This Is For / Not For */}
      <section className="secunova-section secunova-section--light border-t border-gray-200">
        <div className="container mx-auto px-4">
          <div className="max-w-5xl mx-auto">
            <div className="text-center mb-10">
              <div className="inline-flex items-center bg-secunova-blue/10 text-secunova-blue px-3.5 py-1.5 rounded-full text-xs font-bold uppercase tracking-widest mb-3">
                <Scale className="h-3.5 w-3.5 mr-1.5" />
                Engagement Fit
              </div>
              <h2 className="text-2xl sm:text-3xl font-bold text-secunova-dark tracking-tight">
                Who Needs Our Advisory?
              </h2>
              <p className="text-xs sm:text-sm text-slate-600 mt-1 max-w-xl mx-auto">
                Our advisory practice is specialized. We work exclusively with organizations where strategic positioning produces high-value outcomes.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-5">

              {/* Who Needs This */}
              <div className="p-6 rounded-xl border border-blue-200 bg-blue-50/50">
                <div className="flex items-center gap-2 mb-4">
                  <div className="w-7 h-7 rounded-lg bg-secunova-blue/15 flex items-center justify-center text-secunova-blue">
                    <CheckCircle className="h-4 w-4" />
                  </div>
                  <h3 className="text-sm font-bold text-secunova-dark uppercase tracking-wider">Organizations That Need This</h3>
                </div>
                <ul className="space-y-3 text-xs text-slate-700">
                  <li className="flex items-start gap-2">
                    <CheckCircle className="h-3.5 w-3.5 text-secunova-blue mt-0.5 flex-shrink-0" />
                    <span>Established B2B companies looking to outrank competitors and capture high-value contracts</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="h-3.5 w-3.5 text-secunova-blue mt-0.5 flex-shrink-0" />
                    <span>Enterprise executives who need to audit and govern external marketing or engineering agencies</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="h-3.5 w-3.5 text-secunova-blue mt-0.5 flex-shrink-0" />
                    <span>Founders preparing for capital raising or major strategic expansion requiring institutional credibility</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="h-3.5 w-3.5 text-secunova-blue mt-0.5 flex-shrink-0" />
                    <span>Organizations experiencing budget drift and missed deadlines with current digital providers</span>
                  </li>
                </ul>
              </div>

              {/* Who Does Not Need This */}
              <div className="p-6 rounded-xl border border-gray-200 bg-gray-50/70">
                <div className="flex items-center gap-2 mb-4">
                  <div className="w-7 h-7 rounded-lg bg-red-100 flex items-center justify-center text-red-500">
                    <X className="h-4 w-4" />
                  </div>
                  <h3 className="text-sm font-bold text-slate-700 uppercase tracking-wider">Who This Is Not For</h3>
                </div>
                <ul className="space-y-3 text-xs text-slate-600">
                  <li className="flex items-start gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-red-400 mt-1.5 flex-shrink-0"></span>
                    <span>Companies seeking low-cost transactional work or cookie-cutter templates</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-red-400 mt-1.5 flex-shrink-0"></span>
                    <span>Organizations looking for short-term vanity traffic campaigns without commercial goals</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-red-400 mt-1.5 flex-shrink-0"></span>
                    <span>Teams unwilling to participate in executive milestone reviews and governance protocols</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-red-400 mt-1.5 flex-shrink-0"></span>
                    <span>Direct-to-consumer micro-projects without enterprise or B2B sales pipelines</span>
                  </li>
                </ul>
              </div>

            </div>
          </div>
        </div>
      </section>

      {/* Transition Framework: From Diagnostic to Advisory Packages / Agency Governance */}
      <section className="secunova-section bg-gray-50 border-t border-gray-200">
        <div className="container mx-auto px-4">
          <div className="max-w-5xl mx-auto">
            <div className="text-center max-w-2xl mx-auto mb-12">
              <div className="inline-flex items-center bg-secunova-blue/10 text-secunova-blue px-3.5 py-1.5 rounded-full text-xs font-bold uppercase tracking-widest mb-3">
                <Compass className="h-3.5 w-3.5 mr-1.5" />
                The Advisory Engagement Model
              </div>
              <h2 className="text-2xl sm:text-3xl font-bold text-secunova-dark tracking-tight">
                From Diagnostic to Governance: How We Partner With Leaders
              </h2>
              <p className="text-xs sm:text-sm text-slate-600 mt-2 leading-relaxed">
                We position your leadership as the decision-maker. After diagnosing current gaps, we transition seamlessly into either internal coaching or technical agency oversight.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 items-stretch mb-10">

              {/* Step 1: Diagnose */}
              <div className="bg-white rounded-xl border border-gray-200 p-6 flex flex-col justify-between shadow-sm">
                <div>
                  <div className="w-10 h-10 rounded-lg bg-secunova-blue/10 flex items-center justify-center text-secunova-blue mb-4">
                    <Search className="h-5 w-5" />
                  </div>
                  <span className="text-[10px] font-bold uppercase tracking-wider text-secunova-blue block mb-1">Phase 01 · Diagnostic</span>
                  <h3 className="text-base font-bold text-secunova-dark mb-2">Digital Presence Audit</h3>
                  <p className="text-xs text-slate-600 leading-relaxed mb-4">
                    We independently evaluate your digital touchpoints, benchmark competitors, and deliver a prioritized 90-day strategic roadmap.
                  </p>
                </div>
                <Link to="/services/digital-presence-audit" className="text-xs font-bold text-secunova-blue hover:text-secunova-light flex items-center gap-1 pt-3 border-t border-gray-100">
                  <span>Audit Methodology</span>
                  <ArrowRight className="h-3 w-3" />
                </Link>
              </div>

              {/* Step 2: Implementation Pathways */}
              <div className="bg-white rounded-xl border-2 border-secunova-blue/40 p-6 flex flex-col justify-between shadow-md relative">
                <span className="absolute -top-3 left-6 px-3 py-0.5 bg-secunova-blue text-white rounded-full text-[10px] font-bold uppercase tracking-wider">
                  Phase 02 · Execution Bridge
                </span>
                <div>
                  <div className="w-10 h-10 rounded-lg bg-secunova-light/15 flex items-center justify-center text-secunova-light mb-4 mt-2">
                    <Target className="h-5 w-5" />
                  </div>
                  <h3 className="text-base font-bold text-secunova-dark mb-2">Advisory Packages or PMaaS</h3>
                  <p className="text-xs text-slate-600 leading-relaxed mb-4">
                    <strong>Path A:</strong> We coach internal teams through structured milestone cycles.<br />
                    <strong>Path B:</strong> We oversee and audit external tech agencies to eliminate budget drift.
                  </p>
                </div>
                <div className="pt-3 border-t border-gray-100 flex flex-col gap-2">
                  <Link to="/services/content-storytelling-strategy" className="text-xs font-bold text-secunova-blue hover:underline flex items-center gap-1">
                    <span>Path A: Advisory Packages</span>
                    <ArrowRight className="h-3 w-3" />
                  </Link>
                  <Link to="/services/digital-project-governance" className="text-xs font-bold text-secunova-blue hover:underline flex items-center gap-1">
                    <span>Path B: Agency Governance</span>
                    <ArrowRight className="h-3 w-3" />
                  </Link>
                </div>
              </div>

              {/* Step 3: Governance & Growth */}
              <div className="bg-white rounded-xl border border-gray-200 p-6 flex flex-col justify-between shadow-sm">
                <div>
                  <div className="w-10 h-10 rounded-lg bg-secunova-blue/10 flex items-center justify-center text-secunova-blue mb-4">
                    <ShieldCheck className="h-5 w-5" />
                  </div>
                  <span className="text-[10px] font-bold uppercase tracking-wider text-secunova-blue block mb-1">Phase 03 · Authority</span>
                  <h3 className="text-base font-bold text-secunova-dark mb-2">Empirical Market Dominance</h3>
                  <p className="text-xs text-slate-600 leading-relaxed mb-4">
                    Institutional credibility, top search rankings, higher consultation conversion, and complete intellectual property ownership.
                  </p>
                </div>
                <Link to="/about/our-work" className="text-xs font-bold text-secunova-blue hover:text-secunova-light flex items-center gap-1 pt-3 border-t border-gray-100">
                  <span>Track Record</span>
                  <ArrowRight className="h-3 w-3" />
                </Link>
              </div>

            </div>

            <div className="p-6 bg-white rounded-xl border border-gray-200 shadow-2xs flex flex-col sm:flex-row items-center justify-between gap-4">
              <div>
                <h4 className="text-sm font-bold text-secunova-dark">Ready to diagnose your digital presence?</h4>
                <p className="text-xs text-slate-600">Schedule a 30-minute executive briefing to discuss diagnostic scope or agency governance.</p>
              </div>
              <Link to="/contact" className="btn btn-gradient text-xs font-bold text-white px-5 py-2.5 whitespace-nowrap">
                Schedule Executive Briefing <ArrowRight className="ml-1.5 h-3.5 w-3.5 text-white" />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <CtaSection />
    </div>
  );
};

export default ServicesPage;
