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
  ArrowRight, ShieldCheck, Shield, ClipboardCheck,
  ScanLine, Phone, ChevronRight, DollarSign, Award,
  Database, FileText, Lock, CheckCircle, Scale
} from 'lucide-react';
import CtaSection from '../../components/CtaSection';
import OptimizedImage from '../../components/OptimizedImage';
import { buildSeoTags } from '../../utils/seo-meta';

const EnterpriseAuditsPage = () => {

  const auditModules = [
    {
      icon: <ScanLine className="h-7 w-7" />,
      accent: 'blue' as const,
      number: '01',
      title: 'Infrastructure Forensic Audit',
      description: 'A deep, independent examination of your networks, cloud environments, legacy server stacks, and system dependencies to expose latent vulnerabilities, unauthorized access points, and technical debt before it becomes a liability.',
      deliverables: [
        { name: 'Network Topology Gap Analysis', detail: 'Map all internal and external network boundaries to identify unprotected ingress points and misconfigured access controls.' },
        { name: 'Dependency Vulnerability Mapping', detail: 'Catalog all third-party dependencies, open-source libraries, and APIs against current CVE databases.' },
        { name: 'Technical Debt Quantification', detail: 'Estimate remediation cost and business risk associated with deferred infrastructure maintenance and aging systems.' },
        { name: 'Cloud Security Configuration Review', detail: 'Audit IAM roles, bucket permissions, logging configurations, and encryption protocols across AWS, GCP, or Azure.' },
      ],
    },
    {
      icon: <ClipboardCheck className="h-7 w-7" />,
      accent: 'light' as const,
      number: '02',
      title: 'Vendor and Contractor Accountability Audit',
      description: 'An independent review of all external technology vendors, development agencies, and managed service providers to verify deliverable quality, contractual compliance, and billing integrity - without relying on self-reported progress.',
      deliverables: [
        { name: 'Code Quality and Architecture Review', detail: 'Independently verify that delivered software meets the agreed technical specifications, security standards, and performance benchmarks.' },
        { name: 'Contract Compliance Assessment', detail: 'Cross-reference vendor invoices, deliverables, and timelines against contractual obligations to identify overcharging or non-compliance.' },
        { name: 'Vendor Access and IP Audit', detail: 'Audit all third-party credentials, staging access, and data exposure incidents to close unauthorized access pathways.' },
        { name: 'Scope Drift and Change Order Analysis', detail: 'Review all change order history to identify unauthorized scope expansions and recover overpaid amounts.' },
      ],
    },
    {
      icon: <Shield className="h-7 w-7" />,
      accent: 'blue' as const,
      number: '03',
      title: 'Cybersecurity Risk and Compliance Audit',
      description: 'A structured security posture assessment against NIST, ISO 27001, SOC 2, and PIPEDA frameworks to identify exploitable vulnerabilities, non-compliant data handling practices, and board-reportable risk exposures.',
      deliverables: [
        { name: 'Security Posture Baseline Assessment', detail: 'Evaluate current security controls against industry frameworks and quantify the maturity gap for board reporting.' },
        { name: 'Sensitive Data Handling Review', detail: 'Identify all data assets, classify sensitivity, and verify that handling and storage practices meet regulatory requirements (PIPEDA, GDPR, HIPAA).' },
        { name: 'Penetration Testing Coordination', detail: 'Procure and supervise independent penetration testing engagements, then validate remediation of all critical findings.' },
        { name: 'Incident Response Readiness Assessment', detail: 'Evaluate current incident response plans, escalation procedures, and staff readiness against active threat scenarios.' },
      ],
    },
    {
      icon: <DollarSign className="h-7 w-7" />,
      accent: 'light' as const,
      number: '04',
      title: 'Technology Budget and Cost Recovery Audit',
      description: 'A forensic review of all technology expenditures, SaaS subscriptions, cloud compute costs, and managed service billing to expose redundant spend, licensing waste, and recoverable overcharges from vendors and service providers.',
      deliverables: [
        { name: 'SaaS License and Utilization Audit', detail: 'Catalog all active software subscriptions, identify unused licenses, and calculate annualized savings from consolidation.' },
        { name: 'Cloud Compute Cost Optimization Review', detail: 'Analyze cloud usage patterns, identify over-provisioned resources, and produce a rightsizing roadmap with savings projections.' },
        { name: 'MSP and Vendor Billing Reconciliation', detail: 'Cross-reference all managed service provider invoices against contracted service levels to identify billing discrepancies.' },
        { name: 'IT Budget Reallocation Recommendations', detail: 'Produce a prioritized recommendation set for reallocating recovered spend toward highest-impact technology initiatives.' },
      ],
    },
  ];

  const vendorAccountabilitySteps = [
    {
      step: '01',
      title: 'Independent Position',
      description: 'SecuNova holds no financial stake in any vendor, platform, or technology product. Our recommendations are objective, uncompromised assessments based exclusively on your organization\'s interests.',
      icon: <Scale className="h-5 w-5" />,
    },
    {
      step: '02',
      title: 'Milestone Payment Gating',
      description: 'Vendor payments are held in a structured approval queue and released only after SecuNova independently verifies that each milestone deliverable meets the agreed technical and contractual specifications.',
      icon: <DollarSign className="h-5 w-5" />,
    },
    {
      step: '03',
      title: 'IP Isolation Protocols',
      description: 'All third-party access to your systems is conducted through isolated staging environments with NDA-enforced access controls, time-limited credentials, and a full audit trail of every action taken.',
      icon: <Lock className="h-5 w-5" />,
    },
  ];

  const milestoneSteps = [
    { step: '01', title: 'Milestone Defined', detail: 'Each deliverable is formally specified in writing before development begins - including acceptance criteria, technical requirements, and performance benchmarks.' },
    { step: '02', title: 'Delivery Submitted', detail: 'The vendor submits the completed deliverable to SecuNova for independent technical review before any invoice is raised or payment is requested.' },
    { step: '03', title: 'Independent Audit', detail: 'SecuNova conducts a structured code review, functionality verification, and security scan to confirm the deliverable meets all agreed specifications independently.' },
    { step: '04', title: 'Conditional Approval', detail: 'If the deliverable passes audit, SecuNova issues a milestone approval and authorizes payment release. Deficiencies are documented and remediation is required before re-review.' },
    { step: '05', title: 'Remediation Gate', detail: 'All critical deficiencies identified during audit are formally tracked. The vendor resolves each issue before the next milestone phase is authorized to begin.' },
    { step: '06', title: 'Final IP Handoff', detail: 'Upon project completion, SecuNova conducts a full IP and asset audit to confirm that all source code, documentation, credentials, and proprietary assets are fully transferred to the client.' },
  ];

  const auditMethodology = [
    {
      icon: <Database className="h-6 w-6" />,
      title: 'Discovery and Scoping',
      description: 'A structured discovery session to define audit boundaries, identify stakeholders, and inventory all systems, vendors, and data assets within scope.',
    },
    {
      icon: <ScanLine className="h-6 w-6" />,
      title: 'Forensic Assessment',
      description: 'Systematic, evidence-based analysis of all systems, contracts, code, billing records, and access logs within the defined audit scope.',
    },
    {
      icon: <FileText className="h-6 w-6" />,
      title: 'Board-Ready Reporting',
      description: 'A comprehensive audit report with executive summary, prioritized findings, risk ratings, and actionable remediation recommendations.',
    },
    {
      icon: <Award className="h-6 w-6" />,
      title: 'Remediation Oversight',
      description: 'Ongoing verification that all critical findings are remediated by the appropriate responsible party, with re-audit confirmation on completion.',
    },
  ];

  return (
    <div className="min-h-screen bg-white">
      <Helmet>
        <title>Enterprise IT Audits &amp; Vendor Accountability | SecuNova Inc. Calgary</title>
        <meta name="description" content="SecuNova Inc. conducts independent forensic IT audits that expose latent vulnerabilities, recover misallocated technology budgets, and deliver board-ready compliance documentation for Canadian and US enterprises." />
        <meta name="keywords" content="enterprise IT audit Calgary, vendor accountability audit, cybersecurity audit Canada, technology budget audit, IT compliance audit, forensic IT review Alberta" />
        <link rel="canonical" href="https://secunovainc.com/services/enterprise-it-security-audits" />
        {buildSeoTags({
          title: 'Enterprise IT Audits & Vendor Accountability | SecuNova Inc.',
          description:
            'Independent forensic IT audits, vendor accountability reviews, and cybersecurity risk assessments for Canadian and US mid-market enterprises.',
          url: '/services/enterprise-it-security-audits',
          imageAlt: 'SecuNova Inc. - Enterprise IT Audits & Vendor Accountability',
        })}

        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Service",
            "@id": "https://secunovainc.com/services/enterprise-it-security-audits#service",
            "name": "Enterprise IT Audits & Vendor Accountability",
            "provider": { "@id": "https://secunovainc.com/#organization" },
            "areaServed": [
              { "@type": "City", "name": "Calgary" },
              { "@type": "State", "name": "Alberta" },
              { "@type": "Country", "name": "Canada" },
              { "@type": "Country", "name": "United States" }
            ],
            "url": "https://secunovainc.com/services/enterprise-it-security-audits",
            "image": "https://secunovainc.com/og-image.png",
            "description": "Independent forensic IT infrastructure audits, vendor contract compliance reviews, cybersecurity risk assessments, and technology budget recovery for enterprise organizations.",
            "serviceType": [
              "Forensic IT Infrastructure Audits",
              "Vendor Contract Compliance Reviews",
              "Cybersecurity Risk Assessments",
              "Subscription Bloat Elimination",
              "Technology Budget Recovery"
            ],
            "offers": {
              "@type": "Offer",
              "priceCurrency": "CAD",
              "availability": "https://schema.org/InStock",
              "url": "https://secunovainc.com/services/enterprise-it-security-audits"
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
            src="/images/security_posture.png"
            alt="Enterprise IT audit and forensic security assessment"
            className="w-full h-full object-cover opacity-20"
            priority={true}
          />
          <div className="absolute inset-0 bg-gradient-to-r from-secunova-dark via-secunova-dark/95 to-secunova-blue/70"></div>
          <div className="absolute inset-0 bg-gradient-to-t from-secunova-dark via-transparent to-secunova-dark/70"></div>
        </div>

        <div className="container mx-auto px-4 relative z-10 w-full">
          <div className="max-w-7xl mx-auto">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">

              {/* Left Column */}
              <div className="lg:col-span-7">
                <div className="inline-flex items-center bg-white/10 backdrop-blur-md border border-white/20 px-5 py-2 rounded-full text-xs font-semibold uppercase tracking-widest text-secunova-light mb-6">
                  <ShieldCheck className="h-4 w-4 mr-2" />
                  Enterprise IT Audits &amp; Vendor Accountability
                </div>

                <h1 className="hero-heading mb-6 text-white">
                  <span className="block">Audit Systems.</span>
                  <span className="block text-secunova-light mt-1">Eliminate Cost Bloat.</span>
                </h1>

                <p className="text-lg md:text-xl text-blue-100/90 leading-relaxed mb-8 max-w-2xl font-normal">
                  SecuNova conducts independent forensic IT audits that expose latent vulnerabilities, recover misallocated technology budgets, and deliver board-ready compliance documentation for Canadian and US enterprises.
                </p>

                <div className="flex flex-col sm:flex-row gap-4">
                  <Link to="/contact" className="btn btn-gradient btn-lg text-white">
                    Schedule Your Audit Briefing <ArrowRight className="ml-2 h-4 w-4 text-white" />
                  </Link>
                  <a href="tel:403-401-1552" className="btn btn-outline-light btn-lg text-white">
                    <Phone className="mr-2 h-4 w-4" /> 403-401-1552
                  </a>
                </div>
              </div>

              {/* Right Column: Metric Cards */}
              <div className="lg:col-span-5 grid grid-cols-2 gap-4">
                {[
                  { icon: <ShieldCheck className="h-8 w-8 text-secunova-light" />, stat: 'Independent', label: 'No Vendor Stake. No Conflict of Interest.' },
                  { icon: <DollarSign className="h-8 w-8 text-secunova-blue" />, stat: 'Milestone-Gated', label: 'Vendor Payments Released Only on Verified Completion' },
                  { icon: <Lock className="h-8 w-8 text-secunova-light" />, stat: 'Zero-Trust', label: 'Isolated Staging Access with Full Audit Trail' },
                  { icon: <FileText className="h-8 w-8 text-secunova-blue" />, stat: '4 Modules', label: 'Forensic Audit Disciplines Available' },
                ].map((card, i) => (
                  <div key={i} className="bg-white/10 backdrop-blur-md border border-white/20 p-5 rounded-2xl">
                    {card.icon}
                    <div className="text-xl font-black text-white mt-3 mb-1">{card.stat}</div>
                    <div className="text-[11px] uppercase tracking-wider text-blue-100 font-medium leading-tight">{card.label}</div>
                  </div>
                ))}
              </div>

            </div>
          </div>
        </div>
      </section>

      {/* ========================================
          Vendor Accountability: How We Eliminate Problems
          ======================================== */}
      <section className="secunova-section secunova-section--light">
        <div className="container mx-auto px-4">
          <div className="max-w-7xl mx-auto">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">

              <div className="lg:col-span-5">
                <div className="inline-flex items-center bg-secunova-blue/10 text-secunova-blue px-4 py-2 rounded-full text-xs font-bold uppercase tracking-widest mb-5">
                  <Scale className="h-4 w-4 mr-2" />
                  Our Position
                </div>
                <h2 className="text-3xl md:text-4xl font-bold text-secunova-dark tracking-tight leading-tight mb-5">
                  How We Eliminate Delays, <span className="bg-clip-text text-transparent bg-gradient-to-r from-secunova-blue to-secunova-light">Overruns, and Scope Creep</span>
                </h2>
                <p className="text-slate-600 text-base leading-relaxed mb-6">
                  SecuNova's independence is the foundation of its audit integrity. We hold no financial relationships with any technology vendor, platform provider, or outsourcing firm. Every recommendation we make is based exclusively on your organization's interests and evidence from the audit itself.
                </p>
                <p className="text-slate-600 text-base leading-relaxed">
                  Our three operational principles prevent vendor manipulation, budget erosion, and data exposure throughout every audit and project governance engagement.
                </p>
              </div>

              <div className="lg:col-span-7 space-y-5">
                {vendorAccountabilitySteps.map((step, i) => (
                  <div key={i} className="flex items-start gap-5 bg-white rounded-2xl border border-gray-200 p-6 shadow-sm hover:shadow-md transition-all">
                    <div className="w-12 h-12 bg-secunova-blue/10 rounded-xl flex items-center justify-center text-secunova-blue flex-shrink-0">
                      {step.icon}
                    </div>
                    <div>
                      <div className="flex items-center gap-3 mb-2">
                        <span className="text-xs font-black text-secunova-blue/40 uppercase tracking-widest">{step.step}</span>
                        <h3 className="text-lg font-bold text-secunova-dark">{step.title}</h3>
                      </div>
                      <p className="text-sm text-slate-600 leading-relaxed">{step.description}</p>
                    </div>
                  </div>
                ))}
              </div>

            </div>
          </div>
        </div>
      </section>

      {/* ========================================
          Audit Modules
          ======================================== */}
      <section className="secunova-section bg-gradient-to-br from-slate-50 to-gray-100 border-t border-gray-200">
        <div className="container mx-auto px-4">
          <div className="max-w-7xl mx-auto">
            <div className="text-center max-w-3xl mx-auto mb-16">
              <div className="inline-flex items-center bg-secunova-blue/10 text-secunova-blue px-4 py-2 rounded-full text-xs font-bold uppercase tracking-widest mb-4">
                <ClipboardCheck className="h-4 w-4 mr-2" />
                Audit Practice Areas
              </div>
              <h2 className="text-3xl md:text-5xl font-bold text-secunova-dark tracking-tight leading-tight">
                Four Forensic <span className="bg-clip-text text-transparent bg-gradient-to-r from-secunova-blue to-secunova-light">Audit Disciplines</span>
              </h2>
              <p className="text-slate-700 text-base md:text-lg mt-4 leading-relaxed">
                Each audit module is conducted with total independence, evidence-based methodology, and board-ready reporting as the standard output.
              </p>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-stretch">
              {auditModules.map((module, i) => (
                <div key={i} className="group bg-white rounded-2xl border border-gray-200 shadow-md hover:shadow-xl hover:-translate-y-1 transition-all duration-300 overflow-hidden flex flex-col justify-between h-full">
                  <div className="p-6 sm:p-8">
                    <div className="flex items-center justify-between mb-5">
                      <div className={`w-14 h-14 rounded-2xl flex items-center justify-center flex-shrink-0 ${module.accent === 'blue' ? 'bg-secunova-blue/10 text-secunova-blue' : 'bg-secunova-light/15 text-secunova-light'}`}>
                        {module.icon}
                      </div>
                      <span className="text-3xl font-black text-gray-100 group-hover:text-secunova-blue/20 transition-colors">{module.number}</span>
                    </div>
                    <h3 className="text-xl font-bold text-secunova-dark mb-3 group-hover:text-secunova-blue transition-colors">{module.title}</h3>
                    <p className="text-sm text-slate-600 leading-relaxed mb-6">{module.description}</p>

                    <div className="border-t border-gray-100 pt-5 space-y-4">
                      {module.deliverables.map((d, j) => (
                        <div key={j} className="flex items-start gap-3">
                          <CheckCircle className={`h-4 w-4 flex-shrink-0 mt-0.5 ${module.accent === 'blue' ? 'text-secunova-blue' : 'text-secunova-light'}`} />
                          <div>
                            <span className="text-sm font-bold text-secunova-dark">{d.name}</span>
                            <p className="text-xs text-slate-500 leading-relaxed mt-0.5">{d.detail}</p>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                  <div className="px-6 sm:px-8 pb-6">
                    <Link to="/contact" className="text-xs font-bold text-secunova-blue hover:text-secunova-light flex items-center justify-between pt-4 border-t border-gray-100 transition-colors">
                      <span>Inquire About This Audit</span> <ChevronRight className="h-4 w-4" />
                    </Link>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ========================================
          Milestone-Gated Payment System
          ======================================== */}
      <section className="secunova-section bg-secunova-dark text-white relative overflow-hidden">
        <div className="absolute inset-0 opacity-5" style={{backgroundImage: 'linear-gradient(rgba(255,255,255,0.1) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.1) 1px, transparent 1px)', backgroundSize: '48px 48px'}}></div>
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-7xl mx-auto">
            <div className="text-center max-w-3xl mx-auto mb-16">
              <div className="inline-flex items-center bg-white/10 text-secunova-light px-4 py-2 rounded-full text-xs font-bold uppercase tracking-widest mb-5">
                <DollarSign className="h-4 w-4 mr-2" />
                Payment Protection Protocol
              </div>
              <h2 className="text-3xl md:text-5xl font-bold tracking-tight leading-tight mb-4">
                The Milestone-Gated <span className="text-secunova-light">Payment Approval System</span>
              </h2>
              <p className="text-blue-100/80 text-base md:text-lg leading-relaxed">
                Vendors are never paid based on reported progress. Payments are held and released only after SecuNova independently verifies that each deliverable meets the agreed technical and contractual specifications.
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
              {milestoneSteps.map((step, i) => (
                <div key={i} className="bg-white/5 border border-white/15 rounded-2xl p-6 hover:bg-white/10 transition-all duration-300">
                  <div className="flex items-center gap-3 mb-4">
                    <span className="text-4xl font-black text-secunova-light">{step.step}</span>
                  </div>
                  <h3 className="text-base font-bold text-white mb-2">{step.title}</h3>
                  <p className="text-xs text-blue-100/80 leading-relaxed">{step.detail}</p>
                </div>
              ))}
            </div>

            <div className="mt-12 text-center">
              <Link to="/contact" className="btn btn-gradient btn-lg text-white">
                Request Audit Governance Details <ArrowRight className="ml-2 h-4 w-4 text-white" />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* ========================================
          Zero-Trust Methodology
          ======================================== */}
      <section className="secunova-section secunova-section--light">
        <div className="container mx-auto px-4">
          <div className="max-w-7xl mx-auto">
            <div className="text-center max-w-3xl mx-auto mb-14">
              <div className="inline-flex items-center bg-secunova-blue/10 text-secunova-blue px-4 py-2 rounded-full text-xs font-bold uppercase tracking-widest mb-4">
                <Lock className="h-4 w-4 mr-2" />
                Audit Methodology
              </div>
              <h2 className="text-3xl md:text-4xl font-bold text-secunova-dark tracking-tight leading-tight">
                The Zero-Trust <span className="bg-clip-text text-transparent bg-gradient-to-r from-secunova-blue to-secunova-light">Operational Model</span>
              </h2>
              <p className="text-slate-700 text-base md:text-lg mt-4 leading-relaxed">
                Every audit engagement is conducted inside a forensic-grade operational framework. No assumptions. No shared credentials. No unmonitored access.
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
              {auditMethodology.map((step, i) => (
                <div key={i} className="bg-white rounded-2xl border border-gray-200 p-6 shadow-sm hover:shadow-md hover:-translate-y-1 transition-all duration-300 text-center flex flex-col items-center">
                  <div className="w-14 h-14 bg-secunova-blue/10 rounded-2xl flex items-center justify-center text-secunova-blue mb-5">
                    {step.icon}
                  </div>
                  <h3 className="text-base font-bold text-secunova-dark mb-2">{step.title}</h3>
                  <p className="text-xs text-slate-500 leading-relaxed">{step.description}</p>
                </div>
              ))}
            </div>

            {/* Zero-trust specific callouts */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
              {[
                { icon: <Lock className="h-5 w-5" />, title: 'NDA-Enforced Access', body: 'All third-party and internal audit participants operate under executed NDA agreements before receiving any system access, credential, or sensitive documentation.' },
                { icon: <Shield className="h-5 w-5" />, title: 'Isolated Staging Environments', body: 'Production data and live systems are never accessed during audit phases. All testing and code review occurs in isolated, mirrored environments with no production exposure.' },
                { icon: <FileText className="h-5 w-5" />, title: 'Complete Audit Trail', body: 'Every access event, credential issuance, and system interaction during the audit engagement is logged, timestamped, and retained for post-audit review by the client organization.' },
              ].map((item, i) => (
                <div key={i} className="flex items-start gap-4 bg-slate-50 rounded-xl border border-gray-200 p-5">
                  <div className="w-10 h-10 bg-secunova-blue/10 rounded-lg flex items-center justify-center text-secunova-blue flex-shrink-0">
                    {item.icon}
                  </div>
                  <div>
                    <h4 className="font-bold text-secunova-dark text-sm mb-1.5">{item.title}</h4>
                    <p className="text-xs text-slate-600 leading-relaxed">{item.body}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <CtaSection />
    </div>
  );
};

export default EnterpriseAuditsPage;
