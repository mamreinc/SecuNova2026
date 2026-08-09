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
  ChevronRight, Zap, Lightbulb, RefreshCw, Shield, Globe,
  BarChart, Users, Scale, Award, LineChart, Target, Clock,
  ClipboardCheck, TrendingUp, Map
} from 'lucide-react';
import CtaSection from '../../components/CtaSection';
import OptimizedImage from '../../components/OptimizedImage';

const StrategicAdvisoryPage = () => {
  const capabilityGroups = [
    {
      icon: <Lightbulb className="h-7 w-7" />,
      accent: 'blue',
      number: '01',
      title: 'Executive Technology & Governance Advisory',
      description:
        'Develop long-term strategic plans aligning technology with corporate vision, board governance expectations, and capital allocation frameworks.',
      services: [
        {
          name: 'Digital Maturity & Roadmap Planning',
          detail: 'Long-term technology roadmaps aligned with corporate balance sheets and market objectives.',
        },
        {
          name: 'Organizational Change Governance',
          detail: 'Prepare management structures to adopt digital operating models and mitigate organizational resistance.',
        },
        {
          name: 'Feasibility Studies & Technical Readiness',
          detail: 'Forensic audits of existing infrastructure to identify operational gaps and innovation opportunities.',
        },
        {
          name: 'Innovation & Digital Business Models',
          detail: 'Transition legacy business operations into scalable, technology-enabled revenue engines.',
        },
      ],
    },
    {
      icon: <RefreshCw className="h-7 w-7" />,
      accent: 'light',
      number: '02',
      title: 'Digital Transformation & Process Optimization',
      description:
        'Reengineer operational workflows, migrate infrastructure to cloud environments, and integrate automation to reduce overhead.',
      services: [
        {
          name: 'Business Process Reengineering (BPR)',
          detail: 'Analyze and optimize operational workflows to eliminate waste and accelerate delivery.',
        },
        {
          name: 'Cloud Architecture & Migration',
          detail: 'Architect multi-cloud migration strategies across AWS and GCP tailored to security requirements.',
        },
        {
          name: 'AI Automation & Workflow Integration',
          detail: 'Deploy custom AI models and robotic process automation (RPA) to raise service speed.',
        },
        {
          name: 'Data Architecture & Analytics',
          detail: 'Design enterprise data warehouses that power quantitative executive decision-making.',
        },
      ],
    },
    {
      icon: <Shield className="h-7 w-7" />,
      accent: 'blue',
      number: '03',
      title: 'Cybersecurity Risk & Regulatory Compliance',
      description:
        'Safeguard enterprise assets, audit security posture, and enforce compliance standards (SOC 2, ISO 27001, PIPEDA).',
      services: [
        {
          name: 'Cyber Risk Posture Assessment',
          detail: 'Identify security vulnerabilities across infrastructure and define prioritized remediation plans.',
        },
        {
          name: 'Regulatory Compliance & Audits',
          detail: 'Ensure digital infrastructure satisfies Canadian and US statutory privacy and security mandates.',
        },
        {
          name: 'Disaster Recovery & Business Continuity',
          detail: 'Architect resilient recovery protocols guaranteeing operational continuity during technical events.',
        },
      ],
    },
    {
      icon: <Globe className="h-7 w-7" />,
      accent: 'light',
      number: '04',
      title: 'Customer Platforms & Bespoke Engineering',
      description:
        'Architect high-performance client portals, digital products, and web systems engineered with sub-second responsiveness.',
      services: [
        {
          name: 'Digital Journey Architecture',
          detail: 'Design seamless omni-channel experiences for high-value enterprise customer touchpoints.',
        },
        {
          name: 'Bespoke Software Development Oversight',
          detail: 'Supervise technical buildout of custom web applications with zero pre-made agency templates.',
        },
      ],
    },
  ];

  const roadmapPhases = [
    {
      step: '01',
      title: 'Assess & Discover',
      description: 'Forensic audits expose infrastructure gaps, cost bloat, and legacy operational bottlenecks.',
      deliverable: 'Current-State Gap Analysis & Audit',
      icon: <Map className="h-6 w-6" />
    },
    {
      step: '02',
      title: 'Architect Roadmap',
      description: 'Phase-gated implementation plans align technology investment with corporate targets.',
      deliverable: 'Board-Ready Digital Roadmap',
      icon: <Compass className="h-6 w-6" />
    },
    {
      step: '03',
      title: 'Transform & Deploy',
      description: 'Workflow reengineering, cloud migration, and automation deployed in governed sprints.',
      deliverable: 'Modernized Enterprise Infrastructure',
      icon: <Zap className="h-6 w-6" />
    },
    {
      step: '04',
      title: 'Govern & Optimize',
      description: 'On-demand PMaaS enforces timelines, budget authorizations, and quantitative KPIs.',
      deliverable: 'Governed Performance & C-Suite Dashboard',
      icon: <LineChart className="h-6 w-6" />
    }
  ];

  const pmaasCapabilities = [
    {
      icon: <Users className="h-6 w-6" />,
      title: 'Senior Project Leadership',
      description: 'Senior project leads drive initiatives from charter definition through execution and handoff.',
    },
    {
      icon: <Scale className="h-6 w-6" />,
      title: 'Resource Allocation',
      description: 'Align technical tasks by specialization to maximize throughput and eliminate downtime.',
    },
    {
      icon: <BarChart className="h-6 w-6" />,
      title: 'Capital & Cost Control',
      description: 'Continuous financial monitoring ensures projects stay strictly within approved authorizations.',
    },
    {
      icon: <Shield className="h-6 w-6" />,
      title: 'Risk Governance',
      description: 'Proactively identify technical dependencies and counter obstacles before milestones slip.',
    },
    {
      icon: <Award className="h-6 w-6" />,
      title: 'Quality Benchmarking',
      description: 'Systematic code reviews and technical audits verify outputs meet sub-second performance standards.',
    },
    {
      icon: <LineChart className="h-6 w-6" />,
      title: 'Executive Reporting',
      description: 'Transparent C-suite dashboards report completion velocity, burn rate, and deliverable status.',
    },
    {
      icon: <Zap className="h-6 w-6" />,
      title: 'Agile & Hybrid Precision',
      description: 'Deploy adaptive sprint cycles or structured waterfall delivery matching corporate governance.',
    },
    {
      icon: <Clock className="h-6 w-6" />,
      title: 'Milestone Integrity',
      description: 'Strict schedule management guarantees adherence to agreed launch timelines.',
    },
  ];

  return (
    <div className="min-h-screen bg-white">
      <Helmet>
        <title>Strategic Advisory &amp; PMaaS | SecuNova Inc. Calgary</title>
        <meta name="description" content="SecuNova Inc. delivers executive strategic advisory, digital transformation, cybersecurity risk governance, and Project Management as a Service (PMaaS) in Calgary, AB." />
        <meta name="keywords" content="strategic advisory Calgary, digital transformation Canada, PMaaS Calgary, business process reengineering, cloud transformation AWS GCP, cybersecurity risk management" />
        <link rel="canonical" href="https://secunovainc.com/services/strategic-advisory-pmaas" />

        <meta property="og:title" content="Strategic Advisory &amp; PMaaS | SecuNova Inc." />
        <meta property="og:description" content="Strategic advisory, digital transformation, and Project Management as a Service (PMaaS) for Canadian and US enterprise markets." />
        <meta property="og:url" content="https://secunovainc.com/services/strategic-advisory-pmaas" />
        <meta property="og:type" content="website" />

        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Service",
            "name": "Strategic Advisory & Digital Transformation",
            "provider": { "@type": "Organization", "name": "SecuNova Inc.", "url": "https://secunovainc.com" },
            "areaServed": ["CA", "US"],
            "description": "Executive strategic technology advisory and governed Project Management as a Service."
          })}
        </script>
      </Helmet>

      {/* Hero Section */}
      <section className="relative min-h-[85vh] overflow-hidden flex items-center justify-center pt-36 sm:pt-44 pb-24 bg-secunova-dark text-white">
        <div className="absolute inset-0">
          <OptimizedImage
            src="/images/hero_strategic.png"
            alt="Strategic Advisory and Digital Systems"
            className="w-full h-full object-cover opacity-30"
            priority={true}
          />
          <div className="absolute inset-0 bg-gradient-to-r from-secunova-dark via-secunova-dark/95 to-secunova-blue/80"></div>
          <div className="absolute inset-0 bg-gradient-to-t from-secunova-dark via-transparent to-secunova-dark/70"></div>
        </div>

        <div className="container mx-auto px-4 relative z-10 w-full">
          <div className="max-w-7xl mx-auto">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">

              {/* Left Column Text */}
              <div className="lg:col-span-7">
                <div className="inline-flex items-center bg-white/10 backdrop-blur-md border border-white/20 px-5 py-2 rounded-full text-xs font-semibold uppercase tracking-widest text-secunova-light mb-6">
                  <Crown className="h-4 w-4 mr-2" />
                  Strategic Advisory &amp; PMaaS
                </div>

                <h1 className="text-4xl sm:text-6xl font-bold tracking-tight mb-6 leading-tight">
                  Restructure Systems. <br />
                  <span className="text-secunova-light">Execute with Discipline.</span>
                </h1>

                <p className="text-lg md:text-xl text-blue-100/90 leading-relaxed mb-8 max-w-2xl font-normal">
                  SecuNova Inc. pairs senior executive advisory with on-demand project execution (PMaaS). We help leadership teams modernize core operations, de-risk cloud architecture, and maintain total budget integrity.
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

              {/* Right Column Metric Cards */}
              <div className="lg:col-span-5 grid grid-cols-2 gap-4">
                <div className="bg-white/10 backdrop-blur-md border border-white/20 p-6 rounded-2xl">
                  <RefreshCw className="h-8 w-8 text-secunova-light mb-3" />
                  <div className="text-3xl font-black text-white mb-1">4</div>
                  <div className="text-xs uppercase tracking-wider text-blue-100 font-semibold">Core Practice Lines</div>
                </div>
                <div className="bg-white/10 backdrop-blur-md border border-white/20 p-6 rounded-2xl">
                  <Target className="h-8 w-8 text-secunova-blue mb-3" />
                  <div className="text-3xl font-black text-white mb-1">8</div>
                  <div className="text-xs uppercase tracking-wider text-blue-100 font-semibold">PMaaS Disciplines</div>
                </div>
                <div className="bg-white/10 backdrop-blur-md border border-white/20 p-6 rounded-2xl">
                  <BarChart className="h-8 w-8 text-secunova-light mb-3" />
                  <div className="text-3xl font-black text-white mb-1">On-Budget</div>
                  <div className="text-xs uppercase tracking-wider text-blue-100 font-semibold">Capital Protection</div>
                </div>
                <div className="bg-white/10 backdrop-blur-md border border-white/20 p-6 rounded-2xl">
                  <Crown className="h-8 w-8 text-secunova-blue mb-3" />
                  <div className="text-3xl font-black text-white mb-1">Senior</div>
                  <div className="text-xs uppercase tracking-wider text-blue-100 font-semibold">Advisory Practice</div>
                </div>
              </div>

            </div>
          </div>
        </div>
      </section>

      {/* Service Line I: Strategic Advisory & Digital Transformation */}
      <section className="secunova-section secunova-section--light">
        <div className="container mx-auto px-4">
          <div className="max-w-7xl mx-auto">
            <div className="text-center max-w-3xl mx-auto mb-16">
              <div className="inline-flex items-center bg-secunova-blue/10 text-secunova-blue px-4 py-2 rounded-full text-xs font-bold uppercase tracking-widest mb-4">
                <Compass className="h-4 w-4 mr-2" />
                Practice Area One
              </div>
              <h2 className="text-3xl md:text-5xl font-bold text-secunova-dark tracking-tight leading-tight">
                Strategic Advisory &amp; <span className="bg-clip-text text-transparent bg-gradient-to-r from-secunova-blue to-secunova-light">Digital Systems</span>
              </h2>
              <p className="text-slate-700 text-base md:text-lg mt-4 leading-relaxed">
                Advanced advisory practices engineered to restructure operations, de-risk cloud migrations, and enforce cybersecurity governance across your enterprise.
              </p>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-stretch">
              {capabilityGroups.map((group, i) => (
                <div key={i} className="group bg-white rounded-2xl border border-gray-200 shadow-md hover:shadow-xl hover:-translate-y-1 transition-all duration-300 overflow-hidden flex flex-col justify-between h-full">
                  <div className="p-6 sm:p-8">
                    <div className="flex items-center justify-between mb-5">
                      <div className={`w-14 h-14 rounded-2xl flex items-center justify-center flex-shrink-0 ${
                        group.accent === 'blue' ? 'bg-secunova-blue/10 text-secunova-blue' : 'bg-secunova-light/15 text-secunova-light'
                      }`}>
                        {group.icon}
                      </div>
                      <span className="text-3xl font-black text-gray-100 group-hover:text-secunova-blue/20 transition-colors">{group.number}</span>
                    </div>
                    <h3 className="text-xl font-bold text-secunova-dark mb-3 group-hover:text-secunova-blue transition-colors">{group.title}</h3>
                    <p className="text-sm text-slate-600 leading-relaxed mb-6">{group.description}</p>

                    <div className="border-t border-gray-100 pt-4 space-y-3">
                      {group.services.map((service, idx) => (
                        <div key={idx} className="flex items-start gap-3">
                          <CheckCircle className={`h-4 w-4 flex-shrink-0 mt-0.5 ${group.accent === 'blue' ? 'text-secunova-blue' : 'text-secunova-light'}`} />
                          <div>
                            <span className="text-sm font-bold text-secunova-dark">{service.name}</span>
                            <p className="text-xs text-slate-500 leading-relaxed">{service.detail}</p>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                  <div className="px-6 sm:px-8 pb-6">
                    <Link to="/contact" className="text-xs font-bold text-secunova-blue hover:text-secunova-light flex items-center justify-between pt-4 border-t border-gray-100 transition-colors">
                      <span>Inquire About This Capability</span> <ChevronRight className="h-4 w-4" />
                    </Link>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* 4-Phase Execution Framework */}
      <section className="secunova-section bg-gradient-to-br from-secunova-dark via-gray-900 to-secunova-blue text-white relative overflow-hidden">
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-7xl mx-auto">
            <div className="text-center max-w-3xl mx-auto mb-16">
              <span className="text-xs font-bold uppercase tracking-widest text-secunova-light block mb-2">Governed Delivery Process</span>
              <h2 className="text-3xl md:text-5xl font-bold tracking-tight mb-4">
                The 4-Phase <span className="text-secunova-light">Advisory Methodology</span>
              </h2>
              <p className="text-blue-100/90 text-base md:text-lg leading-relaxed">
                A disciplined framework that takes organizations from forensic gap discovery to long-term governed performance.
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
                  <div className="pt-4 border-t border-white/10 text-[11px] font-semibold text-secunova-light">
                    Deliverable: {phase.deliverable}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Service Line II: PMaaS */}
      <section className="secunova-section secunova-section--light">
        <div className="container mx-auto px-4">
          <div className="max-w-7xl mx-auto">
            <div className="text-center max-w-3xl mx-auto mb-16">
              <div className="inline-flex items-center bg-secunova-blue/10 text-secunova-blue px-4 py-2 rounded-full text-xs font-bold uppercase tracking-widest mb-4">
                <ClipboardCheck className="h-4 w-4 mr-2" />
                Practice Area Two
              </div>
              <h2 className="text-3xl md:text-5xl font-bold text-secunova-dark tracking-tight">
                Project Management <span className="bg-clip-text text-transparent bg-gradient-to-r from-secunova-blue to-secunova-light">as a Service (PMaaS)</span>
              </h2>
              <p className="text-slate-700 text-base md:text-lg mt-4 leading-relaxed">
                An agile execution model granting instant access to senior project leads on demand. We enforce strict schedule discipline, budget oversight, and transparent C-suite status reporting.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {pmaasCapabilities.map((cap, i) => (
                <div key={i} className="bg-gray-50 rounded-2xl border border-gray-200 p-6 hover:shadow-lg hover:-translate-y-1 transition-all duration-300 flex flex-col justify-between h-full">
                  <div>
                    <div className="w-12 h-12 bg-secunova-blue/10 rounded-xl flex items-center justify-center text-secunova-blue mb-4">
                      {cap.icon}
                    </div>
                    <h3 className="text-lg font-bold text-secunova-dark mb-2">{cap.title}</h3>
                    <p className="text-sm text-slate-600 leading-relaxed">{cap.description}</p>
                  </div>
                </div>
              ))}
            </div>

            {/* PMaaS Strategic Advantages */}
            <div className="mt-16 rounded-2xl border border-gray-200 shadow-lg overflow-hidden">
              <div className="bg-gradient-to-r from-secunova-blue/10 to-secunova-light/10 px-8 py-6 border-b border-gray-100 flex flex-col md:flex-row md:items-center md:justify-between gap-4">
                <div>
                  <h3 className="text-2xl font-bold text-secunova-dark">Strategic Advantages of PMaaS Governance</h3>
                  <p className="text-sm text-slate-600 mt-1">Why modern enterprises choose flexible delivery leadership.</p>
                </div>
                <Link to="/contact" className="btn btn-gradient btn-md text-white">
                  Schedule PMaaS Assessment <ArrowRight className="ml-2 h-4 w-4 text-white" />
                </Link>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8 p-8">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-secunova-blue/10 rounded-xl flex items-center justify-center text-secunova-blue flex-shrink-0">
                    <RefreshCw className="h-6 w-6" />
                  </div>
                  <div>
                    <h4 className="font-bold text-secunova-dark mb-1">Operational Scalability</h4>
                    <p className="text-sm text-slate-600 leading-relaxed">Scale project leadership capacity up or down seamlessly based on project requirements without fixed headcount burden.</p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-secunova-light/15 rounded-xl flex items-center justify-center text-secunova-light flex-shrink-0">
                    <TrendingUp className="h-6 w-6" />
                  </div>
                  <div>
                    <h4 className="font-bold text-secunova-dark mb-1">Cost Control</h4>
                    <p className="text-sm text-slate-600 leading-relaxed">Replace fixed executive salary commitments with performance-focused investment tied to delivered deliverables.</p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-secunova-blue/10 rounded-xl flex items-center justify-center text-secunova-blue flex-shrink-0">
                    <Clock className="h-6 w-6" />
                  </div>
                  <div>
                    <h4 className="font-bold text-secunova-dark mb-1">Immediate Senior Expertise</h4>
                    <p className="text-sm text-slate-600 leading-relaxed">Gain immediate access to battle-tested project leads experienced in complex cloud infrastructure and risk compliance.</p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-secunova-light/15 rounded-xl flex items-center justify-center text-secunova-light flex-shrink-0">
                    <Target className="h-6 w-6" />
                  </div>
                  <div>
                    <h4 className="font-bold text-secunova-dark mb-1">Uninterrupted Executive Focus</h4>
                    <p className="text-sm text-slate-600 leading-relaxed">Your internal leadership focuses on commercial growth while our PMaaS team governs technical execution.</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <CtaSection />
    </div>
  );
};

export default StrategicAdvisoryPage;
