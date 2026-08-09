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
  ArrowRight, ShieldCheck, Shield, ClipboardCheck, Users, AlertTriangle,
  Target, ScanLine, Phone, ChevronRight, DollarSign, CheckCircle2, Award
} from 'lucide-react';
import CtaSection from '../../components/CtaSection';
import OptimizedImage from '../../components/OptimizedImage';

const EnterpriseAuditsPage = () => {
  const auditModules = [
    {
      icon: <ScanLine className="h-6 w-6 text-secunova-blue" />,
      title: 'Infrastructure Forensic Audits',
      description: 'A deep forensic examination of networks, cloud environments, legacy server stacks, and dependencies to expose latent vulnerabilities.',
      image: '/images/security_posture.png',
      deliverables: ['Topology gap analysis', 'Dependency vulnerability mapping', 'Technical debt quantification']
    },
    {
      icon: <Target className="h-6 w-6 text-secunova-light" />,
      title: 'SaaS Subscription & License Bloat Purge',
      description: 'A line-item forensic audit of corporate software licensing and recurring SaaS agreements to eliminate redundant seats and contract bloat.',
      image: '/images/saas_bloat_audit.png',
      deliverables: ['Line-item license reconciliation', 'Idle seat & duplicate tier purging', 'Immediate capital recovery']
    },
    {
      icon: <ShieldCheck className="h-6 w-6 text-secunova-blue" />,
      title: 'IT Security Posture Evaluations',
      description: 'Independent evaluation of enterprise security controls, network perimeter integrity, access policies, and incident readiness.',
      image: '/images/audit_hero_bg.png',
      deliverables: ['Security control evaluation', 'Threat surface gap analysis', 'Incident readiness stress-testing']
    },
    {
      icon: <ClipboardCheck className="h-6 w-6 text-secunova-light" />,
      title: 'Enterprise Compliance Advisory',
      description: 'Mapping corporate technology controls to Canadian and international regulatory standards (SOC 2, ISO 27001, PIPEDA).',
      image: '/images/hero_strategic.png',
      deliverables: ['PIPEDA & SOC 2 compliance mapping', 'Audit-ready control documentation', 'Regulatory gap remediation']
    },
    {
      icon: <Users className="h-6 w-6 text-secunova-blue" />,
      title: 'Identity & Access Governance Audits',
      description: 'Forensic review of identity management systems, privileged access controls, offboarding procedures, and zero-trust policies.',
      image: '/images/card_strat_roadmap.png',
      deliverables: ['Privileged access audit', 'Offboarding workflow verification', 'Zero-trust policy validation']
    },
    {
      icon: <AlertTriangle className="h-6 w-6 text-secunova-light" />,
      title: 'Disaster Preparedness & Resilience Audits',
      description: 'Stress-testing business continuity plans, automated backup integrity, and failover preparedness for operational resilience.',
      image: '/images/pmaas_oversight_card.png',
      deliverables: ['Backup restoration verification', 'Failover timing benchmark', 'Business continuity plan audit']
    }
  ];

  const auditMethodology = [
    {
      stage: '01',
      title: 'Forensic Discovery',
      desc: 'Deploy passive discovery protocols to inventory all cloud assets, server instances, endpoints, and SaaS licenses across your enterprise.',
      keyOutput: 'Comprehensive Asset & Expense Inventory'
    },
    {
      stage: '02',
      title: 'Vulnerability Analysis',
      desc: 'Stress-test security perimeters, identity boundaries, encryption standards, and threat vectors to quantify technical risk.',
      keyOutput: 'Threat Exposure & Vulnerability Matrix'
    },
    {
      stage: '03',
      title: 'Cost & License Reconciliation',
      desc: 'Perform a line-item audit of recurring technology spending, identifying idle seats, duplicate tools, and contract bloat.',
      keyOutput: 'Capital Recovery & Cost Optimization Blueprint'
    },
    {
      stage: '04',
      title: 'Board-Ready Remediation Plan',
      desc: 'Compile forensic findings into a defensible executive blueprint with prioritized remediation actions and cost-recovery schedules.',
      keyOutput: 'Board-Ready Audit Blueprint'
    }
  ];

  const complianceBadges = [
    { name: 'PIPEDA & FOIP', desc: 'Canadian Data Privacy Standards' },
    { name: 'SOC 2 Type II', desc: 'Trust Services Criteria Audit' },
    { name: 'ISO/IEC 27001', desc: 'Information Security Standards' },
    { name: 'NIST CSF', desc: 'Cybersecurity Control Framework' },
    { name: 'OWASP Top 10', desc: 'Application Security Baseline' },
    { name: 'CIS Benchmarks', desc: 'Hardened Security Standards' }
  ];

  const outcomes = [
    { metric: '100%', label: 'Forensic Estate Visibility' },
    { metric: '$0', label: 'Vendor Commission Bias' },
    { metric: '100%', label: 'Board-Defensible Audit Reports' },
    { metric: 'Zero', label: 'Third-Party Template Reliance' }
  ];

  return (
    <div className="min-h-screen bg-white">
      <Helmet>
        <title>Enterprise IT &amp; Security Audits | SecuNova Inc. Calgary</title>
        <meta name="description" content="SecuNova Inc. delivers technical infrastructure forensic audits, software subscription bloat elimination, IT security reviews, and compliance advisory in Calgary, AB." />
        <meta name="keywords" content="enterprise IT audit Calgary, IT security audit, infrastructure forensic audit, subscription bloat audit, compliance advisory Alberta" />
        <link rel="canonical" href="https://secunovainc.com/services/enterprise-it-security-audits" />

        <meta property="og:title" content="Enterprise IT &amp; Security Audits | SecuNova Inc." />
        <meta property="og:description" content="Independent forensic audits of IT infrastructure and security posture. Expose exposure, eliminate subscription bloat, and maintain audit readiness." />
        <meta property="og:url" content="https://secunovainc.com/services/enterprise-it-security-audits" />
        <meta property="og:type" content="website" />

        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "BreadcrumbList",
            "itemListElement": [
              { "@type": "ListItem", "position": 1, "name": "Home", "item": "https://secunovainc.com" },
              { "@type": "ListItem", "position": 2, "name": "Services", "item": "https://secunovainc.com/services" },
              { "@type": "ListItem", "position": 3, "name": "Enterprise IT & Security Audits", "item": "https://secunovainc.com/services/enterprise-it-security-audits" }
            ]
          })}
        </script>
      </Helmet>

      {/* Hero Section */}
      <section className="relative min-h-[85vh] overflow-hidden flex items-center justify-center pt-36 sm:pt-44 pb-24 bg-secunova-dark text-white">
        <div className="absolute inset-0">
          <OptimizedImage
            src="/images/audit_hero_bg.png"
            alt="Enterprise IT &amp; Security Forensic Audits"
            className="w-full h-full object-cover opacity-30"
            priority={true}
          />
          <div className="absolute inset-0 bg-gradient-to-r from-secunova-dark via-secunova-dark/95 to-secunova-blue/80"></div>
          <div className="absolute inset-0 bg-gradient-to-t from-secunova-dark via-transparent to-secunova-dark/70"></div>
        </div>

        <div className="container mx-auto px-4 relative z-10 w-full">
          <div className="max-w-7xl mx-auto">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
              
              {/* Left Column Content */}
              <div className="lg:col-span-7">
                <div className="inline-flex items-center bg-white/10 backdrop-blur-md border border-white/20 px-5 py-2 rounded-full text-xs font-semibold uppercase tracking-widest text-secunova-light mb-6">
                  <Shield className="h-4 w-4 mr-2" />
                  Forensic IT &amp; Security Audits
                </div>

                <h1 className="text-4xl sm:text-6xl font-bold tracking-tight mb-6 leading-tight">
                  Audit Technical Systems. <br />
                  <span className="text-secunova-light">Eliminate Cost Bloat.</span>
                </h1>

                <p className="text-lg md:text-xl text-blue-100/90 leading-relaxed mb-8 max-w-2xl font-normal">
                  SecuNova Inc. conducts independent forensic audits of infrastructure environments, eliminates software subscription waste, evaluates security posture, and delivers board-ready compliance advisory.
                </p>

                <div className="flex flex-col sm:flex-row gap-4">
                  <Link to="/contact" className="btn btn-gradient btn-lg text-white">
                    Schedule Forensic Audit Briefing <ArrowRight className="ml-2 h-4 w-4 text-white" />
                  </Link>
                  <a href="tel:403-401-1552" className="btn btn-outline-light btn-lg text-white">
                    <Phone className="mr-2 h-4 w-4" /> 403-401-1552
                  </a>
                </div>
              </div>

              {/* Right Column Visual Metric Cards */}
              <div className="lg:col-span-5 grid grid-cols-2 gap-4">
                <div className="bg-white/10 backdrop-blur-md border border-white/20 p-6 rounded-2xl">
                  <ScanLine className="h-8 w-8 text-secunova-light mb-3" />
                  <div className="text-3xl font-black text-white mb-1">Forensic</div>
                  <div className="text-xs uppercase tracking-wider text-blue-100 font-semibold">Infrastructure Audit</div>
                </div>
                <div className="bg-white/10 backdrop-blur-md border border-white/20 p-6 rounded-2xl">
                  <DollarSign className="h-8 w-8 text-secunova-blue mb-3" />
                  <div className="text-3xl font-black text-white mb-1">Cost Purge</div>
                  <div className="text-xs uppercase tracking-wider text-blue-100 font-semibold">SaaS Reconciliation</div>
                </div>
                <div className="bg-white/10 backdrop-blur-md border border-white/20 p-6 rounded-2xl">
                  <ShieldCheck className="h-8 w-8 text-secunova-light mb-3" />
                  <div className="text-3xl font-black text-white mb-1">Zero-Trust</div>
                  <div className="text-xs uppercase tracking-wider text-blue-100 font-semibold">Posture Evaluation</div>
                </div>
                <div className="bg-white/10 backdrop-blur-md border border-white/20 p-6 rounded-2xl">
                  <Award className="h-8 w-8 text-secunova-blue mb-3" />
                  <div className="text-3xl font-black text-white mb-1">Board Ready</div>
                  <div className="text-xs uppercase tracking-wider text-blue-100 font-semibold">Defensible Reports</div>
                </div>
              </div>

            </div>
          </div>
        </div>
      </section>

      {/* Forensic Audit Modules */}
      <section className="secunova-section secunova-section--light">
        <div className="container mx-auto px-4">
          <div className="max-w-7xl mx-auto">
            <div className="text-center max-w-3xl mx-auto mb-16">
              <div className="inline-flex items-center bg-secunova-blue/10 text-secunova-blue px-4 py-2 rounded-full text-xs font-bold uppercase tracking-widest mb-4">
                <ScanLine className="h-4 w-4 mr-2" />
                Audit Practice Modules
              </div>
              <h2 className="text-3xl md:text-5xl font-bold text-secunova-dark tracking-tight leading-tight">
                Forensic Infrastructure &amp; <span className="bg-clip-text text-transparent bg-gradient-to-r from-secunova-blue to-secunova-light">Security Reviews</span>
              </h2>
              <p className="text-slate-700 text-base md:text-lg mt-4 leading-relaxed">
                Six specialized audit modules providing C-suite executives and audit committees total visibility into infrastructure risks, compliance gaps, and wasted capital.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 items-stretch">
              {auditModules.map((module, i) => (
                <div key={i} className="group bg-white rounded-2xl border border-gray-200 shadow-md hover:shadow-xl hover:-translate-y-1 transition-all duration-300 overflow-hidden flex flex-col justify-between h-full">
                  <div>
                    <div className="relative h-56 w-full overflow-hidden bg-slate-900">
                      <OptimizedImage
                        src={module.image}
                        alt={module.title}
                        priority={true}
                        className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-500"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-secunova-dark/70 via-secunova-dark/10 to-transparent"></div>
                      <div className="absolute bottom-4 left-4 p-2.5 bg-white/95 backdrop-blur-md rounded-xl shadow-md border border-white/40 z-10">
                        {module.icon}
                      </div>
                    </div>

                    <div className="p-6">
                      <h3 className="text-xl font-bold text-secunova-dark mb-3 group-hover:text-secunova-blue transition-colors">{module.title}</h3>
                      <p className="text-xs text-slate-600 leading-relaxed mb-6">{module.description}</p>
                      
                      <div className="space-y-2 border-t border-gray-100 pt-4">
                        {module.deliverables.map((d, idx) => (
                          <div key={idx} className="flex items-center text-xs text-slate-800 font-medium">
                            <CheckCircle2 className="h-3.5 w-3.5 text-secunova-light mr-2 flex-shrink-0" />
                            <span>{d}</span>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>

                  <div className="p-6 pt-0">
                    <Link to="/contact" className="text-xs font-bold text-secunova-blue hover:text-secunova-light flex items-center justify-between pt-4 border-t border-gray-100 transition-colors">
                      <span>Request Audit Scope</span> <ChevronRight className="h-4 w-4" />
                    </Link>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* 4-Stage Audit Methodology Framework */}
      <section className="secunova-section bg-gradient-to-br from-secunova-dark via-gray-900 to-secunova-blue text-white relative overflow-hidden">
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-7xl mx-auto">
            <div className="text-center max-w-3xl mx-auto mb-16">
              <span className="text-xs font-bold uppercase tracking-widest text-secunova-light block mb-2">Evidence-Based Discovery</span>
              <h2 className="text-3xl md:text-5xl font-bold tracking-tight mb-4">
                The 4-Stage <span className="text-secunova-light">Audit Methodology</span>
              </h2>
              <p className="text-blue-100/90 text-base md:text-lg leading-relaxed">
                From passive asset discovery to board-defensible reporting, our forensic methodology guarantees zero speculation and complete audit readiness.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {auditMethodology.map((m, i) => (
                <div key={i} className="bg-white/5 border border-white/15 rounded-2xl p-6 backdrop-blur-md flex flex-col justify-between hover:bg-white/10 transition-all">
                  <div>
                    <div className="flex items-center justify-between mb-4">
                      <span className="text-3xl font-black text-secunova-light">{m.stage}</span>
                      <Shield className="h-6 w-6 text-white/60" />
                    </div>
                    <h3 className="text-lg font-bold text-white mb-2">{m.title}</h3>
                    <p className="text-xs text-blue-100/90 leading-relaxed mb-6">{m.desc}</p>
                  </div>
                  <div className="pt-4 border-t border-white/10 text-[11px] font-semibold text-secunova-light">
                    Deliverable: {m.keyOutput}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Compliance Standards Badges */}
      <section className="secunova-section secunova-section--gray">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="text-center max-w-3xl mx-auto mb-12">
              <span className="text-xs font-bold uppercase tracking-widest text-secunova-blue block mb-2">Regulatory Alignment</span>
              <h2 className="text-3xl font-bold text-secunova-dark mb-4 tracking-tight">
                Compliance Standards &amp; Framework Coverage
              </h2>
              <p className="text-slate-600 text-sm">
                Our forensic audits evaluate technical security controls against leading Canadian and global enterprise regulatory frameworks.
              </p>
            </div>

            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
              {complianceBadges.map((badge, i) => (
                <div key={i} className="bg-white p-4 rounded-xl border border-gray-200 text-center shadow-xs hover:border-secunova-blue/40 transition-colors">
                  <ShieldCheck className="h-6 w-6 text-secunova-blue mx-auto mb-2" />
                  <div className="text-xs font-bold text-secunova-dark mb-1">{badge.name}</div>
                  <div className="text-[10px] text-slate-500 leading-tight">{badge.desc}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Audit Outcomes Summary */}
      <section className="secunova-section secunova-section--dark border-t border-white/10">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto grid grid-cols-2 lg:grid-cols-4 gap-8 text-center">
            {outcomes.map((o, i) => (
              <div key={i}>
                <div className="text-3xl md:text-4xl font-bold text-secunova-light mb-2">{o.metric}</div>
                <div className="text-xs uppercase tracking-widest text-blue-100/80 font-semibold">{o.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <CtaSection />
    </div>
  );
};

export default EnterpriseAuditsPage;
