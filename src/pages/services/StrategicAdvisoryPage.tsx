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
import {
  ArrowRight, CheckCircle, Phone, Crown, Compass,
  ChevronRight, Zap, RefreshCw, Shield,
  BarChart, Users, Award, Target, Clock, AlertTriangle,
  ClipboardCheck, Lock, FileText, Database
} from 'lucide-react';
import CtaSection from '../../components/CtaSection';
import OptimizedImage from '../../components/OptimizedImage';
import { buildSeoTags } from '../../utils/seo-meta';

const StrategicAdvisoryPage = () => {

  const hiddenCosts = [
    {
      icon: <AlertTriangle className="h-6 w-6" />,
      title: 'Vendor Misalignment',
      description: 'Technology vendors optimize for billable hours, not your outcomes. Without an independent client representative, scope drift, inflated invoices, and unverified deliverables are the default result.',
      color: 'text-red-400',
      bg: 'bg-red-500/10',
    },
    {
      icon: <BarChart className="h-6 w-6" />,
      title: 'Scope Creep and Budget Overruns',
      description: 'Every uncontrolled change request erodes your budget and delays your launch. Without formal change-request gates, projects routinely deliver 40 to 60 percent over original authorization.',
      color: 'text-amber-400',
      bg: 'bg-amber-500/10',
    },
    {
      icon: <Lock className="h-6 w-6" />,
      title: 'Unprotected IP and Data Exposure',
      description: 'Shared credentials, unmonitored staging access, and undocumented data handling expose your proprietary systems, customer data, and competitive intelligence to unnecessary third-party risk.',
      color: 'text-red-400',
      bg: 'bg-red-500/10',
    },
    {
      icon: <Users className="h-6 w-6" />,
      title: 'Failed Change Adoption',
      description: 'New systems fail not from technical flaws, but from poor change management. Without structured executive coaching and staff training, adoption rates collapse and ROI evaporates within 90 days.',
      color: 'text-amber-400',
      bg: 'bg-amber-500/10',
    },
  ];

  const serviceModules = [
    {
      icon: <Database className="h-7 w-7" />,
      accent: 'blue' as const,
      number: '01',
      title: 'Digital Readiness Assessment',
      description: 'Before any technology investment is authorized, SecuNova conducts a forensic audit of your existing workflows, software stack, vendor contracts, and organizational capacity. The output is a board-ready gap analysis that forms the foundation of every subsequent decision.',
      services: [
        { name: 'Workflow and Process Mapping', detail: 'Document and evaluate all operational workflows to identify redundancy, manual bottlenecks, and automation opportunities.' },
        { name: 'Software Stack Forensic Audit', detail: 'Catalog all active systems, integrations, and SaaS subscriptions with utilization data and cost analysis.' },
        { name: 'Organizational Capacity Assessment', detail: 'Evaluate internal team capabilities, bandwidth, and readiness for digital change initiatives.' },
        { name: 'Board-Ready Gap Analysis', detail: 'Compile findings into a defensible executive report with prioritized recommendations and investment thresholds.' },
      ],
    },
    {
      icon: <Zap className="h-7 w-7" />,
      accent: 'light' as const,
      number: '02',
      title: 'Practical AI Adoption Roadmap',
      description: 'SecuNova formulates clear, secure strategies to deploy AI tools that lower operational costs and boost productivity - without exposing proprietary data to third-party model training or uncontrolled API endpoints.',
      services: [
        { name: 'Use-Case Identification and Prioritization', detail: 'Map AI deployment opportunities to specific workflows where measurable ROI and security requirements align.' },
        { name: 'Secure AI Architecture Design', detail: 'Specify deployment models (on-premise, private cloud, isolated API) that prevent data sovereignty issues.' },
        { name: 'Vendor Evaluation and Procurement Oversight', detail: 'Independently evaluate AI vendors against security, compliance, and contractual criteria before any commitment.' },
        { name: 'Adoption Metrics and KPI Framework', detail: 'Establish baseline metrics and quarterly benchmarks to measure productivity gains from AI deployment.' },
      ],
    },
    {
      icon: <RefreshCw className="h-7 w-7" />,
      accent: 'blue' as const,
      number: '03',
      title: 'Business Process Re-Engineering',
      description: 'SecuNova modernizes manual, fragmented routines into automated, connected digital workflows. Every re-engineering initiative is governed by a formal change-request protocol to prevent scope drift and ensure budget integrity.',
      services: [
        { name: 'Process Automation Design', detail: 'Map manual workflows to automation candidates using RPA, workflow engines, and API integration layers.' },
        { name: 'System Integration Architecture', detail: 'Architect data flow between disconnected platforms to create unified, real-time operational visibility.' },
        { name: 'Operational SOP Documentation', detail: 'Create standardized operating procedures for every re-engineered process to ensure repeatability and auditability.' },
        { name: 'Cloud Migration Planning', detail: 'Architect phased migration from legacy on-premise systems to compliant cloud environments (AWS, GCP).' },
      ],
    },
    {
      icon: <Users className="h-7 w-7" />,
      accent: 'light' as const,
      number: '04',
      title: 'Executive Guidance and Change Management',
      description: 'Technology investments fail when leadership teams and staff are not prepared to operate new systems. SecuNova coaches leadership teams and designs staff training protocols that guarantee adoption rates exceed 90 percent within the first quarter.',
      services: [
        { name: 'C-Suite Change Leadership Coaching', detail: 'Equip executive teams with the frameworks and communication strategies needed to sponsor digital transformation effectively.' },
        { name: 'Staff Training Program Design', detail: 'Develop role-specific training curricula and onboarding workflows for all new digital systems delivered.' },
        { name: 'Adoption Monitoring and Escalation', detail: 'Track usage metrics post-deployment and intervene with targeted interventions when adoption rates fall below threshold.' },
        { name: 'Organizational Readiness Certification', detail: 'Conduct structured readiness reviews before each phase gate to confirm organizational capacity before proceeding.' },
      ],
    },
  ];

  const roadmapPhases = [
    {
      step: '01',
      title: 'Diagnostic Audit',
      description: 'Forensic review of infrastructure, workflows, vendor contracts, and organizational capacity to expose gaps before any investment.',
      deliverable: 'Current-State Gap Analysis',
      icon: <Database className="h-6 w-6" />,
    },
    {
      step: '02',
      title: 'Strategic Blueprint',
      description: 'Phase-gated implementation roadmap aligned with corporate objectives, compliance standards, and board-authorized budgets.',
      deliverable: 'Board-Ready Digital Roadmap',
      icon: <FileText className="h-6 w-6" />,
    },
    {
      step: '03',
      title: 'Governed Execution',
      description: 'On-demand senior project leadership enforces milestone gates, vendor accountability, and zero-trust access controls throughout delivery.',
      deliverable: 'Audited Technical Delivery',
      icon: <ClipboardCheck className="h-6 w-6" />,
    },
    {
      step: '04',
      title: 'Operational Handover',
      description: 'Structured knowledge transfer, SOP documentation, and adoption verification ensure your team fully owns and operates the delivered systems.',
      deliverable: 'Full Asset and IP Handoff',
      icon: <Award className="h-6 w-6" />,
    },
  ];

  const engagementModels = [
    {
      title: 'Fixed Roadmap Package',
      badge: 'Project-Based',
      badgeColor: 'bg-secunova-blue/10 text-secunova-blue',
      description: 'A defined-scope, fixed-timeline, fixed-investment engagement for organizations with a specific digital initiative or transformation objective.',
      highlights: [
        'Defined deliverable scope agreed before work begins',
        'Fixed investment with no retroactive billing',
        'Phase-gated payment tied to verified completion',
        'Board-ready documentation at each milestone',
        'Ideal for: Digital audits, AI roadmaps, specific process overhauls',
      ],
      cta: 'Request Fixed Package Briefing',
      icon: <FileText className="h-6 w-6" />,
    },
    {
      title: 'Recurring Advisory Retainer',
      badge: 'Ongoing Access',
      badgeColor: 'bg-secunova-light/15 text-secunova-light',
      description: 'Continuous access to a senior SecuNova partner for strategic decision support, vendor governance, and operational oversight on a monthly basis.',
      highlights: [
        'Dedicated senior advisor assigned to your account',
        'Monthly strategic review sessions with action outputs',
        'Priority response for vendor escalations and urgent decisions',
        'Ongoing risk monitoring and budget oversight',
        'Ideal for: Growing enterprises, active dev teams, ongoing transformations',
      ],
      cta: 'Request Retainer Briefing',
      icon: <Clock className="h-6 w-6" />,
    },
  ];

  return (
    <div className="min-h-screen bg-white">
      <Helmet>
        <title>Strategic Advisory &amp; Digital Transformation | SecuNova Inc. Calgary</title>
        <meta name="description" content="SecuNova Inc. delivers executive strategic advisory, digital readiness assessments, practical AI integration, business process re-engineering, and change management for Canadian and US enterprises." />
        <meta name="keywords" content="strategic advisory Calgary, digital transformation Canada, AI adoption roadmap, business process reengineering, change management, enterprise advisory Calgary" />
        <link rel="canonical" href="https://secunovainc.com/services/strategic-advisory-pmaas" />
        {buildSeoTags({
          title: 'Strategic Advisory & Digital Transformation | SecuNova Inc.',
          description:
            'Executive strategic advisory, digital readiness assessments, practical AI adoption, business process re-engineering, and change management for Canadian and US mid-market enterprises.',
          url: '/services/strategic-advisory-pmaas',
          imageAlt: 'SecuNova Inc. - Strategic Advisory & Digital Transformation',
        })}

        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Service",
            "@id": "https://secunovainc.com/services/strategic-advisory-pmaas#service",
            "name": "Strategic Advisory & Digital Transformation",
            "provider": { "@id": "https://secunovainc.com/#organization" },
            "areaServed": [
              { "@type": "City", "name": "Calgary" },
              { "@type": "State", "name": "Alberta" },
              { "@type": "Country", "name": "Canada" },
              { "@type": "Country", "name": "United States" }
            ],
            "url": "https://secunovainc.com/services/strategic-advisory-pmaas",
            "image": "https://secunovainc.com/og-image.png",
            "description": "Executive strategic advisory, digital readiness assessments, AI adoption roadmaps, and business process re-engineering for enterprise organizations.",
            "serviceType": [
              "Executive Technology Advisory",
              "Digital Transformation Roadmaps",
              "Practical AI Adoption",
              "Business Process Re-Engineering",
              "Change Management Governance"
            ],
            "offers": {
              "@type": "Offer",
              "priceCurrency": "CAD",
              "availability": "https://schema.org/InStock",
              "url": "https://secunovainc.com/services/strategic-advisory-pmaas"
            }
          })}
        </script>
      </Helmet>

      {/* ========================================
          Hero Section
          ======================================== */}
      <section className="relative min-h-[85vh] overflow-hidden flex items-center justify-center pt-36 sm:pt-44 pb-24 bg-secunova-dark text-white">
        <div className="absolute inset-0">
          <OptimizedImage
            src="/images/hero_strategic.png"
            alt="Strategic Advisory and Digital Transformation"
            className="w-full h-full object-cover opacity-25"
            priority={true}
          />
          <div className="absolute inset-0 bg-gradient-to-r from-secunova-dark via-secunova-dark/95 to-secunova-blue/80"></div>
          <div className="absolute inset-0 bg-gradient-to-t from-secunova-dark via-transparent to-secunova-dark/70"></div>
        </div>

        <div className="container mx-auto px-4 relative z-10 w-full">
          <div className="max-w-7xl mx-auto">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">

              {/* Left Column */}
              <div className="lg:col-span-7">
                <div className="inline-flex items-center bg-white/10 backdrop-blur-md border border-white/20 px-5 py-2 rounded-full text-xs font-semibold uppercase tracking-widest text-secunova-light mb-6">
                  <Crown className="h-4 w-4 mr-2" />
                  Strategic Advisory &amp; Digital Transformation
                </div>

                <h1 className="hero-heading mb-6 text-white">
                  <span className="block">Restructure Operations.</span>
                  <span className="block text-secunova-light mt-1">Execute with Precision.</span>
                </h1>

                <p className="text-lg md:text-xl text-blue-100/90 leading-relaxed mb-8 max-w-2xl font-normal">
                  SecuNova's advisory practice delivers executive governance frameworks, practical AI integration strategies, and zero-trust digital transformation for mid-market enterprises that cannot afford failed implementations.
                </p>

                <div className="flex flex-col sm:flex-row gap-4">
                  <Link to="/contact" className="btn btn-gradient btn-lg text-white">
                    Schedule Executive Consultation <ArrowRight className="ml-2 h-4 w-4 text-white" />
                  </Link>
                  <a href="tel:403-401-1552" className="btn btn-outline-light btn-lg text-white">
                    <Phone className="mr-2 h-4 w-4" /> 403-401-1552
                  </a>
                </div>
              </div>

              {/* Right Column: Metric Cards */}
              <div className="lg:col-span-5 grid grid-cols-2 gap-4">
                {[
                  { icon: <Database className="h-8 w-8 text-secunova-light" />, stat: 'Audit-First', label: 'Every Engagement Begins with Forensic Discovery' },
                  { icon: <Shield className="h-8 w-8 text-secunova-blue" />, stat: 'Zero-Trust', label: 'Security Protocols on All Advisory Engagements' },
                  { icon: <Target className="h-8 w-8 text-secunova-light" />, stat: '4 Modules', label: 'Core Advisory Disciplines Delivered' },
                  { icon: <Crown className="h-8 w-8 text-secunova-blue" />, stat: 'Senior', label: 'Partner-Level Access From Day One' },
                ].map((card, i) => (
                  <div key={i} className="bg-white/10 backdrop-blur-md border border-white/20 p-5 rounded-2xl">
                    {card.icon}
                    <div className="text-2xl font-black text-white mt-3 mb-1">{card.stat}</div>
                    <div className="text-[11px] uppercase tracking-wider text-blue-100 font-medium leading-tight">{card.label}</div>
                  </div>
                ))}
              </div>

            </div>
          </div>
        </div>
      </section>

      {/* ========================================
          Hidden Costs Section
          ======================================== */}
      <section className="secunova-section bg-secunova-dark text-white relative overflow-hidden">
        <div className="absolute inset-0 opacity-5" style={{backgroundImage: 'linear-gradient(rgba(255,255,255,0.1) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.1) 1px, transparent 1px)', backgroundSize: '48px 48px'}}></div>
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-7xl mx-auto">
            <div className="text-center max-w-3xl mx-auto mb-14">
              <div className="inline-flex items-center bg-red-500/15 text-red-400 px-4 py-2 rounded-full text-xs font-bold uppercase tracking-widest mb-5">
                <AlertTriangle className="h-4 w-4 mr-2" />
                The Real Cost of Inaction
              </div>
              <h2 className="text-3xl md:text-5xl font-bold tracking-tight leading-tight mb-4">
                The Hidden Costs of <span className="text-red-400">Unguided Tech Adoption</span>
              </h2>
              <p className="text-blue-100/80 text-base md:text-lg leading-relaxed">
                Every enterprise without independent advisory oversight is absorbing one or more of these costs silently. The longer the delay, the greater the erosion.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {hiddenCosts.map((cost, i) => (
                <div key={i} className="bg-white/5 border border-white/10 rounded-2xl p-7 hover:bg-white/8 transition-all duration-300">
                  <div className={`w-12 h-12 ${cost.bg} rounded-xl flex items-center justify-center ${cost.color} mb-5`}>
                    {cost.icon}
                  </div>
                  <h3 className="text-xl font-bold text-white mb-3">{cost.title}</h3>
                  <p className="text-sm text-blue-100/75 leading-relaxed">{cost.description}</p>
                </div>
              ))}
            </div>

            <div className="mt-12 bg-white/5 border border-white/10 rounded-2xl p-8 flex flex-col md:flex-row items-center justify-between gap-6">
              <div className="max-w-xl">
                <h3 className="text-xl font-bold text-white mb-2">These costs are preventable.</h3>
                <p className="text-sm text-blue-100/80 leading-relaxed">SecuNova's advisory model eliminates each of these risk categories through independent oversight, formal governance protocols, and zero-trust operational security.</p>
              </div>
              <Link to="/contact" className="btn btn-gradient btn-lg text-white whitespace-nowrap flex-shrink-0">
                Request a Risk Assessment <ArrowRight className="ml-2 h-4 w-4 text-white" />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* ========================================
          Service Modules
          ======================================== */}
      <section className="secunova-section secunova-section--light">
        <div className="container mx-auto px-4">
          <div className="max-w-7xl mx-auto">
            <div className="text-center max-w-3xl mx-auto mb-16">
              <div className="inline-flex items-center bg-secunova-blue/10 text-secunova-blue px-4 py-2 rounded-full text-xs font-bold uppercase tracking-widest mb-4">
                <Compass className="h-4 w-4 mr-2" />
                Advisory Practice Areas
              </div>
              <h2 className="text-3xl md:text-5xl font-bold text-secunova-dark tracking-tight leading-tight">
                Four Modules. <span className="bg-clip-text text-transparent bg-gradient-to-r from-secunova-blue to-secunova-light">One Cohesive Strategy.</span>
              </h2>
              <p className="text-slate-700 text-base md:text-lg mt-4 leading-relaxed">
                Each advisory module is interconnected and delivered with the same governance standard: audit-first, milestone-gated, and zero-trust by design.
              </p>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-stretch">
              {serviceModules.map((group, i) => (
                <div key={i} className="group bg-white rounded-2xl border border-gray-200 shadow-md hover:shadow-xl hover:-translate-y-1 transition-all duration-300 overflow-hidden flex flex-col justify-between h-full">
                  <div className="p-6 sm:p-8">
                    <div className="flex items-center justify-between mb-5">
                      <div className={`w-14 h-14 rounded-2xl flex items-center justify-center flex-shrink-0 ${group.accent === 'blue' ? 'bg-secunova-blue/10 text-secunova-blue' : 'bg-secunova-light/15 text-secunova-light'}`}>
                        {group.icon}
                      </div>
                      <span className={`text-3xl font-black text-gray-100 group-hover:text-secunova-blue/20 transition-colors`}>{group.number}</span>
                    </div>
                    <h3 className="text-xl font-bold text-secunova-dark mb-3 group-hover:text-secunova-blue transition-colors">{group.title}</h3>
                    <p className="text-sm text-slate-600 leading-relaxed mb-6">{group.description}</p>

                    <div className="border-t border-gray-100 pt-5 space-y-4">
                      {group.services.map((service, idx) => (
                        <div key={idx} className="flex items-start gap-3">
                          <CheckCircle className={`h-4 w-4 flex-shrink-0 mt-0.5 ${group.accent === 'blue' ? 'text-secunova-blue' : 'text-secunova-light'}`} />
                          <div>
                            <span className="text-sm font-bold text-secunova-dark">{service.name}</span>
                            <p className="text-xs text-slate-500 leading-relaxed mt-0.5">{service.detail}</p>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                  <div className="px-6 sm:px-8 pb-6">
                    <Link to="/contact" className="text-xs font-bold text-secunova-blue hover:text-secunova-light flex items-center justify-between pt-4 border-t border-gray-100 transition-colors">
                      <span>Inquire About This Module</span> <ChevronRight className="h-4 w-4" />
                    </Link>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ========================================
          4-Phase Governance Process
          ======================================== */}
      <section className="secunova-section bg-gradient-to-br from-secunova-dark via-gray-900 to-secunova-blue text-white relative overflow-hidden">
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-7xl mx-auto">
            <div className="text-center max-w-3xl mx-auto mb-16">
              <span className="text-xs font-bold uppercase tracking-widest text-secunova-light block mb-2">Governed Delivery Process</span>
              <h2 className="text-3xl md:text-5xl font-bold tracking-tight mb-4">
                The 4-Phase <span className="text-secunova-light">Advisory Methodology</span>
              </h2>
              <p className="text-blue-100/90 text-base md:text-lg leading-relaxed">
                A disciplined engagement model that eliminates ambiguity and delivers measurable outcomes at every phase gate.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {roadmapPhases.map((phase, i) => (
                <div key={i} className="bg-white/5 border border-white/15 rounded-2xl p-6 backdrop-blur-md flex flex-col justify-between hover:bg-white/10 transition-all">
                  <div>
                    <div className="flex items-center justify-between mb-4">
                      <span className="text-3xl font-black text-secunova-light">{phase.step}</span>
                      <div className="p-2 bg-white/10 rounded-lg text-secunova-light">{phase.icon}</div>
                    </div>
                    <h3 className="text-lg font-bold text-white mb-2">{phase.title}</h3>
                    <p className="text-xs text-blue-100/90 leading-relaxed mb-6">{phase.description}</p>
                  </div>
                  <div className="pt-4 border-t border-white/10">
                    <div className="text-[10px] uppercase tracking-widest text-white/40 font-semibold mb-0.5">Key Deliverable</div>
                    <div className="text-xs font-bold text-secunova-light">{phase.deliverable}</div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ========================================
          Engagement Models
          ======================================== */}
      <section className="secunova-section secunova-section--light">
        <div className="container mx-auto px-4">
          <div className="max-w-7xl mx-auto">
            <div className="text-center max-w-3xl mx-auto mb-16">
              <div className="inline-flex items-center bg-secunova-blue/10 text-secunova-blue px-4 py-2 rounded-full text-xs font-bold uppercase tracking-widest mb-4">
                <ClipboardCheck className="h-4 w-4 mr-2" />
                Engagement Models
              </div>
              <h2 className="text-3xl md:text-5xl font-bold text-secunova-dark tracking-tight leading-tight">
                Structured Engagements <span className="bg-clip-text text-transparent bg-gradient-to-r from-secunova-blue to-secunova-light">for Every Context</span>
              </h2>
              <p className="text-slate-700 text-base md:text-lg mt-4 leading-relaxed">
                Whether you have a defined project scope or need ongoing strategic access, SecuNova provides an engagement model built around your objectives.
              </p>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-stretch">
              {engagementModels.map((model, i) => (
                <div key={i} className="bg-white rounded-2xl border border-gray-200 shadow-lg hover:shadow-xl transition-all duration-300 overflow-hidden flex flex-col justify-between h-full">
                  <div className="p-8 sm:p-10 flex-1">
                    <div className="flex items-center justify-between mb-6">
                      <div className="w-14 h-14 bg-secunova-blue/10 rounded-2xl flex items-center justify-center text-secunova-blue">
                        {model.icon}
                      </div>
                      <span className={`text-xs font-bold uppercase tracking-widest px-3.5 py-1.5 rounded-full ${model.badgeColor}`}>{model.badge}</span>
                    </div>
                    <h3 className="text-2xl font-bold text-secunova-dark mb-3">{model.title}</h3>
                    <p className="text-slate-600 text-sm leading-relaxed mb-8">{model.description}</p>
                    <ul className="space-y-3">
                      {model.highlights.map((item, j) => (
                        <li key={j} className="flex items-start gap-3">
                          <CheckCircle className="h-4 w-4 text-secunova-blue flex-shrink-0 mt-0.5" />
                          <span className="text-sm text-slate-700 leading-relaxed">{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                  <div className="px-8 sm:px-10 pb-8">
                    <Link to="/contact" className="btn btn-gradient w-full justify-center text-sm font-bold text-white">
                      {model.cta} <ArrowRight className="ml-2 h-4 w-4 text-white" />
                    </Link>
                  </div>
                </div>
              ))}
            </div>

            {/* Comparison footnote */}
            <div className="mt-10 bg-gray-50 border border-gray-200 rounded-2xl p-6 sm:p-8 flex flex-col sm:flex-row items-center gap-6">
              <div className="w-12 h-12 bg-secunova-blue/10 rounded-xl flex items-center justify-center text-secunova-blue flex-shrink-0">
                <Shield className="h-6 w-6" />
              </div>
              <div className="flex-1">
                <h4 className="font-bold text-secunova-dark mb-1 text-lg">Both engagement models include the same governance standard.</h4>
                <p className="text-sm text-slate-600 leading-relaxed">Milestone gating, independent vendor oversight, zero-trust access controls, and direct access to a senior SecuNova partner are non-negotiable components of every engagement we accept.</p>
              </div>
              <Link to="/contact" className="btn btn-outline btn-md whitespace-nowrap flex-shrink-0">
                Compare Models <ChevronRight className="ml-1 h-4 w-4" />
              </Link>
            </div>
          </div>
        </div>
      </section>

      <CtaSection />
    </div>
  );
};

export default StrategicAdvisoryPage;
