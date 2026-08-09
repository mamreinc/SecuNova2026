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
  RefreshCw, Globe, Target, Zap, Phone, Code, Lightbulb, Scale, Users,
  Award, LineChart, ClipboardCheck, BarChart, TrendingUp, Clock
} from 'lucide-react';
import CtaSection from '../components/CtaSection';

interface ServiceCardProps {
  title: string;
  description: string;
  icon: React.ReactNode;
  highlights: string[];
  path: string;
  accent: 'blue' | 'light' | 'dark';
  badge?: string;
  className?: string;
}

const accentStyles = {
  blue: {
    icon: 'from-secunova-blue to-secunova-blue',
    hoverBorder: 'hover:border-secunova-blue/40',
    hoverTitle: 'group-hover:text-secunova-blue',
    check: 'text-secunova-blue',
    glow: 'from-secunova-blue/5 to-secunova-light/5',
  },
  light: {
    icon: 'from-secunova-light to-secunova-light',
    hoverBorder: 'hover:border-secunova-light/40',
    hoverTitle: 'group-hover:text-secunova-light',
    check: 'text-secunova-light',
    glow: 'from-secunova-light/5 to-secunova-blue/5',
  },
  dark: {
    icon: 'from-secunova-dark to-secunova-dark',
    hoverBorder: 'hover:border-secunova-dark/40',
    hoverTitle: 'group-hover:text-secunova-dark',
    check: 'text-secunova-dark',
    glow: 'from-secunova-dark/5 to-secunova-blue/5',
  },
};

const ServiceCard: React.FC<ServiceCardProps> = ({ title, description, icon, highlights, path, accent, badge, className = '' }) => {
  const styles = accentStyles[accent];

  return (
    <Link
      to={path}
      className={`secunova-card group ${className}`}
    >
      <div>
        <div className="secunova-card__header">
          <div className="secunova-card__icon">
            {icon}
          </div>
          <div className="secunova-card__header-content">
            <h3 className={`secunova-card__title transition-colors duration-300 ${styles.hoverTitle}`}>{title}</h3>
            {badge && (
              <span className="secunova-card__badge">
                {badge}
              </span>
            )}
          </div>
        </div>

        <div className="secunova-card__body">
          <p className="secunova-card__description">{description}</p>
          <div className="secunova-card__list">
            {highlights.slice(0, 3).map((item, index) => (
              <div key={index} className="secunova-card__list-item">
                <CheckCircle className={`secunova-card__list-icon ${styles.check}`} />
                <span>{item}</span>
              </div>
            ))}
          </div>
        </div>
      </div>

      <div className="secunova-card__footer">
        <span className="inline-flex items-center text-secunova-blue font-semibold transition-all group-hover:gap-3 gap-2 text-sm">
          Explore Specifications <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
        </span>
      </div>
    </Link>
  );
};

interface PillarHeaderProps {
  index: string;
  label: string;
  title: string;
  description: string;
  icon: React.ReactNode;
}

const PillarHeader: React.FC<PillarHeaderProps> = ({ index, label, title, description, icon }) => {
  return (
    <div className="mb-12 md:mb-16">
      <div className="inline-flex items-center bg-secunova-blue/10 text-secunova-blue px-6 py-3 rounded-full text-sm font-semibold mb-6">
        <span className="flex items-center gap-2">
          {icon}
          <span className="uppercase tracking-wide">{label}</span>
          <span className="px-2 py-0.5 rounded-md bg-secunova-blue text-white text-xs">{index}</span>
        </span>
      </div>
      <h2 className="text-3xl md:text-5xl font-bold text-secunova-dark mb-5 leading-tight tracking-tight">
        {title}
      </h2>
      <p className="text-lg md:text-xl text-slate-700 max-w-3xl leading-relaxed">
        {description}
      </p>
    </div>
  );
};

const ServicesPage = () => {
  const strategicServices = [
    {
      title: 'Executive Technology & Governance Advisory',
      description:
        'Long-term strategic plans aligned with enterprise objectives: digital roadmaps, change governance, feasibility studies, and capital allocation frameworks.',
      icon: <Lightbulb className="h-6 w-6" />,
      highlights: ['Digital roadmaps & maturity audits', 'Change management governance', 'Feasibility studies & capital modeling'],
      path: '/services/strategic-advisory-pmaas',
      accent: 'blue' as const,
      badge: 'Core Practice',
    },
    {
      title: 'Digital Transformation & Process Optimization',
      description:
        'Business process reengineering (BPR), cloud transformation across AWS and GCP, AI automation integration, and data architecture strategies.',
      icon: <RefreshCw className="h-6 w-6" />,
      highlights: ['Business process reengineering (BPR)', 'Multi-cloud migration strategies', 'AI & workflow automation integration'],
      path: '/services/strategic-advisory-pmaas',
      accent: 'light' as const,
    },
    {
      title: 'Cybersecurity Risk & Compliance Governance',
      description:
        'Forensic risk audits, regulatory compliance frameworks (SOC 2, ISO 27001, PIPEDA), threat vector mitigation, and business continuity architecture.',
      icon: <Shield className="h-6 w-6" />,
      highlights: ['Cyber risk posture assessments', 'Regulatory compliance & audits', 'Business continuity (BCDR) planning'],
      path: '/services/enterprise-audits',
      accent: 'blue' as const,
    },
    {
      title: 'Enterprise Platforms & Bespoke Engineering',
      description:
        'Architecting custom digital applications, web portals, and software platforms engineered with sub-second performance and total client IP ownership.',
      icon: <Globe className="h-6 w-6" />,
      highlights: ['100% custom web application architecture', 'Sub-second performance engineering', 'Full client IP & codebase handoff'],
      path: '/services/strategic-advisory-pmaas',
      accent: 'dark' as const,
    },
  ];

  const pmaasServices = [
    {
      title: 'Senior Delivery Leadership',
      description:
        'Experienced project directors who lead complex digital and technical initiatives from scope definition through delivery and final closure.',
      icon: <Users className="h-6 w-6" />,
      highlights: ['End-to-end initiative leadership', 'Scope & delivery governance', 'Vendor oversight & accountability'],
      path: '/services/strategic-advisory-pmaas',
      accent: 'blue' as const,
      badge: 'PMaaS',
    },
    {
      title: 'Resource Allocation & Control',
      description:
        'Task assignment based on team specialization and capacity, eliminating friction and maximizing operational velocity.',
      icon: <Scale className="h-6 w-6" />,
      highlights: ['Capability-matched task assignment', 'Elimination of execution bottlenecks', 'Optimized resource utilization'],
      path: '/services/strategic-advisory-pmaas',
      accent: 'dark' as const,
    },
    {
      title: 'Budget & Capital Protection',
      description:
        'Precision monitoring of financial burn rates and strict cost controls ensuring approved project budgets are never exceeded.',
      icon: <BarChart className="h-6 w-6" />,
      highlights: ['Continuous financial tracking', 'Expense forecasting & control', 'Board budget compliance'],
      path: '/services/strategic-advisory-pmaas',
      accent: 'light' as const,
    },
    {
      title: 'Proactive Risk Governance',
      description:
        'Anticipating technical dependencies and building mitigation plans before risks impact critical project milestones.',
      icon: <Shield className="h-6 w-6" />,
      highlights: ['Early risk factor identification', 'Pre-emptive mitigation plans', 'Milestone protection'],
      path: '/services/strategic-advisory-pmaas',
      accent: 'blue' as const,
    },
    {
      title: 'Systematic Quality Assurance',
      description:
        'Rigorous peer reviews and testing protocols verifying that software outputs meet strict architectural standards.',
      icon: <Award className="h-6 w-6" />,
      highlights: ['Peer-reviewed code quality', 'Strict testing benchmarks', 'Sub-second performance standards'],
      path: '/services/strategic-advisory-pmaas',
      accent: 'dark' as const,
    },
    {
      title: 'Executive Dashboards & Reporting',
      description:
        'Transparent periodic reporting providing C-suite executives clear visibility into completion velocity, KPIs, and deliverables.',
      icon: <LineChart className="h-6 w-6" />,
      highlights: ['C-suite periodic reporting', 'Completion rate tracking', 'Quantitative KPI dashboards'],
      path: '/services/strategic-advisory-pmaas',
      accent: 'light' as const,
    },
    {
      title: 'Agile & Hybrid Frameworks',
      description:
        'Deploying the ideal methodology for your operational environment: rapid iterative sprints or structured milestone delivery.',
      icon: <Zap className="h-6 w-6" />,
      highlights: ['Iterative sprint orchestration', 'Structured milestone planning', 'Tailored governance model'],
      path: '/services/strategic-advisory-pmaas',
      accent: 'blue' as const,
    },
    {
      title: 'Milestone & Schedule Integrity',
      description:
        'Enforcing strict schedule discipline and milestone completion commitments to ensure on-time system launches.',
      icon: <Clock className="h-6 w-6" />,
      highlights: ['Strict schedule management', 'Milestone commitment tracking', 'Predictable launch timelines'],
      path: '/services/strategic-advisory-pmaas',
      accent: 'dark' as const,
    },
  ];

  const pmaasAdvantages = [
    {
      icon: <RefreshCw className="h-5 w-5" />,
      title: 'Operational Flexibility',
      description: 'Scale delivery resources up or down seamlessly based on project requirements without fixed headcount burden.',
    },
    {
      icon: <TrendingUp className="h-5 w-5" />,
      title: 'Capital Efficiency',
      description: 'Replace fixed executive compensation overhead with value-driven investment tied directly to milestone outputs.',
    },
    {
      icon: <Clock className="h-5 w-5" />,
      title: 'Immediate Senior Expertise',
      description: 'Gain instant access to battle-tested advisors skilled in cloud engineering, compliance, and enterprise delivery.',
    },
    {
      icon: <Target className="h-5 w-5" />,
      title: 'Uninterrupted Focus',
      description: 'Allow internal leadership to focus on core growth while our PMaaS team governs execution details.',
    },
  ];

  return (
    <div className="min-h-screen bg-white">
      <Helmet>
        <title>Services &amp; Practice Areas | SecuNova Inc. | Advisory &amp; PMaaS</title>
        <meta name="description" content="SecuNova Inc. delivers Strategic Advisory, Digital Transformation, Cybersecurity Governance, and Project Management as a Service (PMaaS) for North American enterprises." />
        <meta name="keywords" content="SecuNova Inc, strategic advisory Calgary, digital transformation roadmap, PMaaS Canada, business process reengineering, cybersecurity audit Calgary" />
        <link rel="canonical" href="https://secunovainc.com/services" />

        {/* OpenGraph Tags */}
        <meta property="og:title" content="Services &amp; Practice Areas | SecuNova Inc." />
        <meta property="og:description" content="Two core practice areas: Strategic Advisory &amp; Digital Transformation, and Project Management as a Service (PMaaS)." />
        <meta property="og:url" content="https://secunovainc.com/services" />
        <meta property="og:type" content="website" />
        <meta property="og:image" content="https://secunovainc.com/og-image.png" />

        {/* BreadcrumbList Schema */}
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "BreadcrumbList",
            "itemListElement": [
              { "@type": "ListItem", "position": 1, "name": "Home", "item": "https://secunovainc.com" },
              { "@type": "ListItem", "position": 2, "name": "Services", "item": "https://secunovainc.com/services" }
            ]
          })}
        </script>
      </Helmet>

      {/* Hero */}
      <section className="relative min-h-[85vh] overflow-hidden flex items-center justify-center pt-36 sm:pt-44 pb-24 bg-secunova-dark text-white">
        <div className="absolute inset-0">
          <img
            src="https://images.pexels.com/photos/3184338/pexels-photo-3184338.jpeg?auto=compress&cs=tinysrgb&w=1920"
            alt="SecuNova Strategic Advisory &amp; Enterprise Governance"
            className="w-full h-full object-cover opacity-25"
            loading="eager"
            fetchPriority="high"
            decoding="async"
          />
          <div className="absolute inset-0 bg-gradient-to-br from-secunova-dark/95 via-secunova-dark/90 to-secunova-blue/85"></div>
        </div>
        <div className="container mx-auto px-4 relative z-10 w-full">
          <div className="max-w-4xl mx-auto text-center">
            <div className="inline-flex items-center bg-white/10 backdrop-blur-sm border border-white/20 px-5 py-2 rounded-full text-xs font-semibold uppercase tracking-widest text-secunova-light mb-6">
              <Crown className="h-4 w-4 mr-2" />
              Institutional Practice Areas
            </div>

            <h1 className="text-4xl sm:text-6xl font-bold tracking-tight mb-6 leading-tight">
              Strategic Advisory. <br />
              <span className="text-secunova-light">Governed Project Delivery.</span>
            </h1>

            <p className="text-lg md:text-xl text-blue-100/90 max-w-3xl mx-auto leading-relaxed">
              SecuNova Inc. elevates enterprise performance through senior strategic advisory and Project Management as a Service (PMaaS), executing initiatives on schedule and within approved authorizations.
            </p>

            <div className="flex flex-col sm:flex-row justify-center gap-4 mt-10">
              <Link to="/contact" className="btn btn-gradient btn-lg text-white">
                Schedule Executive Briefing <ArrowRight className="ml-2 h-4 w-4 text-white" />
              </Link>
              <a href="tel:403-401-1552" className="btn btn-outline-light btn-lg text-white">
                <Phone className="mr-2 h-4 w-4" /> 403-401-1552
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Service Line I: Strategic Advisory & Digital Transformation */}
      <section id="strategic-consulting" className="secunova-section secunova-section--light">
        <div className="container mx-auto px-4">
          <div className="max-w-7xl mx-auto">
            <PillarHeader
              index="01"
              label="Practice Area"
              title="Strategic Advisory &amp; Digital Transformation"
              description="Senior technology advisory services designed to modernize infrastructure, reengineer legacy workflows, enforce risk compliance, and architect custom software platforms for North American enterprises."
              icon={<Crown className="h-4 w-4" />}
            />

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {strategicServices.map((service, index) => (
                <ServiceCard
                  key={index}
                  title={service.title}
                  description={service.description}
                  icon={service.icon}
                  highlights={service.highlights}
                  path={service.path}
                  accent={service.accent}
                  badge={service.badge}
                />
              ))}
            </div>

            <div className="mt-12 bg-gradient-to-r from-secunova-blue/5 to-secunova-light/5 border border-secunova-blue/20 rounded-2xl p-8 flex flex-col md:flex-row items-center justify-between gap-6">
              <div>
                <h3 className="text-xl font-bold text-secunova-dark mb-2">Ready to modernize your technical architecture?</h3>
                <p className="text-slate-600 text-sm">Schedule a strategic briefing with our senior advisory team.</p>
              </div>
              <Link to="/services/strategic-advisory-pmaas" className="btn btn-gradient btn-lg text-white">
                View Advisory Specifications <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Service Line II: PMaaS */}
      <section id="pmaas" className="secunova-section secunova-section--gray">
        <div className="container mx-auto px-4">
          <div className="max-w-7xl mx-auto">
            <PillarHeader
              index="02"
              label="Practice Area"
              title="Project Management as a Service (PMaaS)"
              description="On-demand project leadership model providing access to senior project directors without permanent headcount commitments. We enforce strict schedule discipline, budget oversight, and technical quality standards."
              icon={<ClipboardCheck className="h-4 w-4" />}
            />

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {pmaasServices.map((service, index) => (
                <ServiceCard
                  key={index}
                  title={service.title}
                  description={service.description}
                  icon={service.icon}
                  highlights={service.highlights}
                  path={service.path}
                  accent={service.accent}
                  badge={service.badge}
                />
              ))}
            </div>

            {/* Strategic Advantages */}
            <div className="mt-14 bg-white rounded-2xl border border-gray-200 shadow-lg overflow-hidden">
              <div className="bg-gradient-to-r from-secunova-blue/10 to-secunova-light/10 px-8 py-6 border-b border-gray-100">
                <h3 className="text-2xl font-bold text-secunova-dark">Strategic Advantages of PMaaS Governance</h3>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 p-8">
                {pmaasAdvantages.map((adv, i) => (
                  <div key={i}>
                    <div className="w-12 h-12 bg-secunova-blue/10 rounded-xl flex items-center justify-center text-secunova-blue mb-4">
                      {adv.icon}
                    </div>
                    <h4 className="font-bold text-secunova-dark mb-2">{adv.title}</h4>
                    <p className="text-sm text-slate-600 leading-relaxed">{adv.description}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Track Record */}
      <section id="internal-rnd" className="secunova-section secunova-section--dark">
        <div className="container mx-auto px-4">
          <div className="max-w-7xl mx-auto">
            <PillarHeader
              index="03"
              label="Technical Track Record"
              title="Supervised Systems &amp; Technical Architecture"
              description="A showcase of enterprise software systems, internal R&amp;D platforms, and digital solutions engineered under SecuNova's direct technical standards and project leadership."
              icon={<Code className="h-4 w-4" />}
            />

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              <div className="bg-white/5 border border-white/10 rounded-xl p-6">
                <span className="text-[10px] uppercase font-bold tracking-widest px-2.5 py-1 bg-secunova-light/15 text-secunova-light rounded font-semibold inline-block mb-3">
                  ACTIVE R&amp;D · 2026
                </span>
                <h4 className="text-lg font-bold text-white mb-2">Nova macOS AI Agent</h4>
                <p className="text-xs text-blue-100/90 mb-4">Native macOS artificial intelligence platform built in Swift and Core ML for local execution with zero cloud data transmission.</p>
                <Link to="/our-work/nova" className="text-xs font-bold text-secunova-light hover:underline flex items-center gap-1">
                  View Tech Architecture <ArrowRight className="h-3 w-3" />
                </Link>
              </div>

              <div className="bg-white/5 border border-white/10 rounded-xl p-6">
                <span className="text-[10px] uppercase font-bold tracking-widest px-2.5 py-1 bg-secunova-light/15 text-secunova-light rounded font-semibold inline-block mb-3">
                  SUPERVISED DELIVERY · 2025
                </span>
                <h4 className="text-lg font-bold text-white mb-2">Career OS Engine</h4>
                <p className="text-xs text-blue-100/90 mb-4">High-performance client-side application delivered under our PMaaS discipline using Next.js and TypeScript.</p>
                <Link to="/our-work/career-os" className="text-xs font-bold text-secunova-light hover:underline flex items-center gap-1">
                  View Tech Architecture <ArrowRight className="h-3 w-3" />
                </Link>
              </div>

              <div className="bg-white/5 border border-white/10 rounded-xl p-6">
                <span className="text-[10px] uppercase font-bold tracking-widest px-2.5 py-1 bg-secunova-light/15 text-secunova-light rounded font-semibold inline-block mb-3">
                  SUPERVISED DELIVERY · 2025
                </span>
                <h4 className="text-lg font-bold text-white mb-2">SecuBoost Security Suite</h4>
                <p className="text-xs text-blue-100/90 mb-4">Native macOS performance and security application built with SwiftUI and CryptoKit operating 100 percent offline.</p>
                <Link to="/our-work/secuboost" className="text-xs font-bold text-secunova-light hover:underline flex items-center gap-1">
                  View Tech Architecture <ArrowRight className="h-3 w-3" />
                </Link>
              </div>
            </div>

            <div className="mt-10 text-center">
              <Link to="/about/our-work" className="btn btn-gradient btn-lg text-white">
                View Full Track Record <ArrowRight className="ml-2 h-4 w-4 text-white" />
              </Link>
            </div>
          </div>
        </div>
      </section>

      <CtaSection />
    </div>
  );
};

export default ServicesPage;
