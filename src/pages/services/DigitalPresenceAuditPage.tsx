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
  Search, CheckCircle2, ArrowRight, ShieldCheck, Target,
  FileText, BarChart3, Users, AlertCircle, Compass, Sparkles, Building
} from 'lucide-react';
import CtaSection from '../../components/CtaSection';
import SEOSchema from '../../components/SEOSchema';
import { buildSeoTags } from '../../utils/seo-meta';

const DigitalPresenceAuditPage: React.FC = () => {
  const auditPillars = [
    {
      icon: <Users className="h-6 w-6 text-secunova-blue" />,
      title: 'Customer Experience & UX Friction Review',
      description:
        'We evaluate how prospective clients perceive and navigate your brand online. We uncover hidden friction points, confusing navigation, and drop-off triggers that prevent qualified prospects from inquiring.',
      deliverables: [
        'Multi-device customer journey mapping',
        'Friction-point diagnostic register',
        'Inquiry path conversion barriers report',
      ],
    },
    {
      icon: <FileText className="h-6 w-6 text-secunova-light" />,
      title: 'Cross-Platform Messaging & Tone Consistency',
      description:
        'A fragmented corporate message destroys buyer trust. We review your positioning across your website, executive profiles, social touchpoints, and collateral to ensure unified, premium authority.',
      deliverables: [
        'Multi-channel messaging consistency audit',
        'Brand value proposition alignment review',
        'Tone of voice & credibility gap analysis',
      ],
    },
    {
      icon: <Target className="h-6 w-6 text-secunova-blue" />,
      title: 'Competitor Market Share & Positioning Benchmarking',
      description:
        'Understand where your competitors win attention and how your digital footprint measures against market leaders. We pinpoint positioning white-space your company can claim immediately.',
      deliverables: [
        'Direct competitor digital footprint scoring',
        'Market authority & search visibility comparison',
        'Strategic differentiation opportunities',
      ],
    },
    {
      icon: <Compass className="h-6 w-6 text-secunova-light" />,
      title: 'Actionable Prioritized Growth Roadmap',
      description:
        'We do not hand you academic theory. You receive an executive-ready roadmap with clear, prioritized actions categorized by strategic impact, implementation speed, and expected commercial ROI.',
      deliverables: [
        'Prioritized 90-day execution roadmap',
        'High-impact quick wins identification',
        'Executive presentation deck for board alignment',
      ],
    },
  ];

  return (
    <div className="min-h-screen bg-white">
      <Helmet>
        <title>Digital Presence Audit | SecuNova Inc. Calgary</title>
        <meta
          name="description"
          content="Comprehensive Digital Presence Audit for enterprises and leaders. Forensic diagnostics of your customer UX, messaging consistency, and strategic growth roadmap."
        />
        <meta
          name="keywords"
          content="digital presence audit, brand footprint diagnostic, UX review Calgary, B2B messaging consistency, competitor benchmarking Canada"
        />
        {buildSeoTags({
          title: 'Digital Presence Audit | SecuNova Inc.',
          description:
            'A forensic, objective diagnostic of how your brand appears, communicates, and converts online. Includes comprehensive gap analysis and an executive roadmap.',
          url: '/services/digital-presence-audit',
          imageAlt: 'SecuNova Inc. - Digital Presence Audit',
        })}
      </Helmet>

      <SEOSchema
        type="service"
        data={{
          title: 'Digital Presence Audit | SecuNova Inc.',
          description:
            'Forensic digital presence audit and strategic gap analysis for North American enterprises.',
          url: 'https://secunovainc.ca/services/digital-presence-audit',
        }}
      />

      {/* Hero Section */}
      <section className="relative min-h-[750px] overflow-hidden flex items-center justify-center pt-32 pb-20 bg-secunova-dark text-white">
        <div className="absolute inset-0">
          <video
            src="/SecuBoost.mp4"
            autoPlay
            muted
            loop
            playsInline
            preload="metadata"
            poster="/images/heroes/audit-hero.jpg"
            className="w-full h-full object-cover opacity-60"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-secunova-dark/80 via-secunova-dark/60 to-secunova-dark/90"></div>
        </div>

        <div className="container mx-auto px-4 relative z-10 w-full text-center">
          <div className="max-w-3xl mx-auto">
            <div className="inline-flex items-center bg-white/10 backdrop-blur-md px-4 py-1.5 rounded-full text-xs font-bold uppercase tracking-widest text-secunova-light mb-5">
              <Search className="h-3.5 w-3.5 mr-1.5" />
              Diagnostic Advisory
            </div>

            <h1 className="text-3xl sm:text-5xl font-extrabold text-white leading-tight tracking-tight mb-4">
              Digital Presence Audit. <span className="text-secunova-light block sm:inline">Objective Clarity.</span>
            </h1>

            <p className="text-sm sm:text-base text-blue-100/90 max-w-xl mx-auto leading-relaxed mb-8">
              A forensic evaluation of how your organization appears across the digital realm. We reveal critical friction points, align fragmented messaging, and deliver a board-ready roadmap for market leadership.
            </p>

            <div className="flex flex-col sm:flex-row justify-center gap-3">
              <Link to="/contact" className="btn btn-gradient text-xs sm:text-sm font-bold text-white px-6 py-3">
                Request Diagnostic Audit
              </Link>
              <a href="#audit-pillars" className="btn btn-outline-light text-xs sm:text-sm font-bold text-white px-6 py-3">
                View Audit Scope
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* The Strategic Value */}
      <section className="secunova-section secunova-section--light">
        <div className="container mx-auto px-4">
          <div className="max-w-5xl mx-auto">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
              <div className="lg:col-span-7">
                <span className="text-xs font-bold uppercase tracking-widest text-secunova-blue block mb-2">The Strategic Challenge</span>
                <h2 className="text-2xl sm:text-3xl font-bold text-secunova-dark mb-4 leading-tight">
                  Why Leaders Need an Independent Digital Presence Audit
                </h2>
                <p className="text-slate-600 text-xs sm:text-sm leading-relaxed mb-4">
                  Most organizations assume their digital presence is functioning well simply because their website is online. In reality, prospective B2B buyers form definitive judgments in seconds.
                </p>
                <p className="text-slate-600 text-xs sm:text-sm leading-relaxed mb-6">
                  Inconsistent messaging, confusing customer touchpoints, and unaddressed positioning gaps quietly cost companies millions in lost contract opportunities. Because SecuNova is an independent advisory firm without software reseller incentives, our audit delivers 100% objective, conflict-free truth.
                </p>
                <div className="grid grid-cols-2 gap-3 text-xs font-bold text-secunova-dark">
                  <div className="flex items-center"><CheckCircle2 className="h-4 w-4 text-secunova-blue mr-2 flex-shrink-0" /> Zero Software Vendor Bias</div>
                  <div className="flex items-center"><CheckCircle2 className="h-4 w-4 text-secunova-blue mr-2 flex-shrink-0" /> Senior Partner Conducted</div>
                  <div className="flex items-center"><CheckCircle2 className="h-4 w-4 text-secunova-blue mr-2 flex-shrink-0" /> Bespoke Milestone Scopes</div>
                  <div className="flex items-center"><CheckCircle2 className="h-4 w-4 text-secunova-blue mr-2 flex-shrink-0" /> Board-Ready Deliverables</div>
                </div>
              </div>

              <div className="lg:col-span-5">
                <div className="bg-slate-50 border border-gray-200 rounded-2xl p-6 shadow-sm">
                  <h3 className="text-sm font-bold text-secunova-dark uppercase tracking-wider mb-4 flex items-center gap-2">
                    <AlertCircle className="h-4 w-4 text-secunova-blue" />
                    Common Symptoms We Uncover
                  </h3>
                  <div className="space-y-3 text-xs text-slate-700">
                    <div className="p-3 bg-white rounded-lg border border-gray-100 shadow-2xs">
                      <strong className="block text-secunova-dark font-bold mb-0.5">High Traffic, Low Inquiries</strong>
                      Visitors arrive but leave without initiating contact due to unclear value propositions.
                    </div>
                    <div className="p-3 bg-white rounded-lg border border-gray-100 shadow-2xs">
                      <strong className="block text-secunova-dark font-bold mb-0.5">Disconnected Brand Voices</strong>
                      Different departments present conflicting messaging across social channels and website copy.
                    </div>
                    <div className="p-3 bg-white rounded-lg border border-gray-100 shadow-2xs">
                      <strong className="block text-secunova-dark font-bold mb-0.5">Competitor Blind Spots</strong>
                      Rivals winning high-intent search rankings that should belong to your firm.
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 4 Pillars of the Audit */}
      <section id="audit-pillars" className="secunova-section bg-gray-50 border-t border-gray-200">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="text-center max-w-2xl mx-auto mb-12">
              <span className="text-[10px] font-bold uppercase tracking-widest text-secunova-blue block mb-1">Methodology</span>
              <h2 className="text-2xl sm:text-3xl font-bold text-secunova-dark tracking-tight">
                What the Digital Presence Audit Evaluates
              </h2>
              <p className="text-xs sm:text-sm text-slate-600 mt-2">
                Four comprehensive investigative dimensions that leave no blind spot unexamined.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {auditPillars.map((pillar, index) => (
                <div key={index} className="bg-white rounded-xl border border-gray-200 p-6 shadow-sm flex flex-col justify-between">
                  <div>
                    <div className="w-12 h-12 rounded-xl bg-slate-50 border border-gray-100 flex items-center justify-center mb-4">
                      {pillar.icon}
                    </div>
                    <h3 className="text-base font-bold text-secunova-dark mb-2">{pillar.title}</h3>
                    <p className="text-xs text-slate-600 leading-relaxed mb-4">{pillar.description}</p>

                    <div className="border-t border-gray-100 pt-3">
                      <span className="text-[11px] font-bold uppercase tracking-wider text-slate-500 block mb-2">Key Audit Deliverables:</span>
                      <ul className="space-y-1.5 text-xs text-slate-700">
                        {pillar.deliverables.map((item, dIdx) => (
                          <li key={dIdx} className="flex items-center gap-2">
                            <CheckCircle2 className="h-3.5 w-3.5 text-secunova-blue flex-shrink-0" />
                            <span>{item}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Board-Ready Deliverables */}
      <section className="secunova-section secunova-section--light border-t border-gray-200">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <div className="inline-flex items-center bg-secunova-blue/10 text-secunova-blue px-3.5 py-1.5 rounded-full text-xs font-bold uppercase tracking-widest mb-3">
              <Sparkles className="h-3.5 w-3.5 mr-1.5" />
              Final Tangible Output
            </div>
            <h2 className="text-2xl sm:text-3xl font-bold text-secunova-dark tracking-tight mb-4">
              What You Receive at Conclusion
            </h2>
            <p className="text-xs sm:text-sm text-slate-600 max-w-xl mx-auto mb-8">
              At the conclusion of the diagnostic cycle, your executive team receives a complete strategic package.
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 text-left">
              <div className="p-5 rounded-xl border border-gray-200 bg-white shadow-2xs">
                <FileText className="h-6 w-6 text-secunova-blue mb-2" />
                <h4 className="text-sm font-bold text-secunova-dark mb-1">Diagnostic Report</h4>
                <p className="text-xs text-slate-600 leading-relaxed">
                  A 30+ page in-depth report detailing every friction point, channel evaluation, and UX gap.
                </p>
              </div>
              <div className="p-5 rounded-xl border border-gray-200 bg-white shadow-2xs">
                <BarChart3 className="h-6 w-6 text-secunova-light mb-2" />
                <h4 className="text-sm font-bold text-secunova-dark mb-1">90-Day Execution Roadmap</h4>
                <p className="text-xs text-slate-600 leading-relaxed">
                  A sequenced, phased plan outlining exact fixes, milestones, and required internal or agency steps.
                </p>
              </div>
              <div className="p-5 rounded-xl border border-gray-200 bg-white shadow-2xs">
                <Users className="h-6 w-6 text-secunova-blue mb-2" />
                <h4 className="text-sm font-bold text-secunova-dark mb-1">Executive Briefing Session</h4>
                <p className="text-xs text-slate-600 leading-relaxed">
                  A 90-minute live presentation with your leadership team to walk through findings and Q&amp;A.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Two Implementation Pathways: Advisory Packages vs Project Governance */}
      <section className="secunova-section bg-gray-50 border-t border-gray-200">
        <div className="container mx-auto px-4">
          <div className="max-w-5xl mx-auto">
            <div className="text-center max-w-2xl mx-auto mb-12">
              <div className="inline-flex items-center bg-secunova-blue/10 text-secunova-blue px-3.5 py-1.5 rounded-full text-xs font-bold uppercase tracking-widest mb-3">
                <Compass className="h-3.5 w-3.5 mr-1.5" />
                Next-Stage Execution
              </div>
              <h2 className="text-2xl sm:text-3xl font-bold text-secunova-dark tracking-tight">
                What Happens After the Audit? Two Pathways to Execution
              </h2>
              <p className="text-xs sm:text-sm text-slate-600 mt-2 leading-relaxed">
                The audit delivers the exact diagnostic roadmap. To implement the recommendations without capital waste, SecuNova provides two specialized engagement models.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 items-stretch">

              {/* Pathway 1: Strategic Advisory Packages */}
              <div className="bg-white rounded-xl border border-gray-200 p-6 sm:p-8 flex flex-col justify-between shadow-sm hover:shadow-md transition-shadow">
                <div>
                  <div className="flex items-center justify-between mb-4">
                    <div className="w-10 h-10 bg-secunova-blue/10 rounded-lg flex items-center justify-center text-secunova-blue">
                      <Target className="h-5 w-5" />
                    </div>
                    <span className="text-[10px] font-bold uppercase tracking-wider text-secunova-blue px-2.5 py-0.5 rounded-full bg-secunova-blue/10">
                      In-House Teams
                    </span>
                  </div>
                  <h3 className="text-lg sm:text-xl font-bold text-secunova-dark mb-2">
                    Ongoing Strategic Advisory Packages
                  </h3>
                  <p className="text-xs sm:text-sm text-slate-600 leading-relaxed mb-5">
                    For organizations implementing the roadmap using internal marketing and content personnel. We provide ongoing strategic guidance, custom AI prompt libraries, and editorial quality reviews to ensure your team executes at an elite level.
                  </p>

                  <div className="border-t border-gray-100 pt-4 mb-6">
                    <span className="text-[11px] font-bold uppercase tracking-wider text-slate-500 block mb-2">How We Support Your Team:</span>
                    <ul className="space-y-2 text-xs text-slate-700">
                      <li className="flex items-start gap-2">
                        <CheckCircle2 className="h-3.5 w-3.5 text-secunova-blue mt-0.5 flex-shrink-0" />
                        <span>Weekly or bi-weekly executive advisory sessions</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <CheckCircle2 className="h-3.5 w-3.5 text-secunova-blue mt-0.5 flex-shrink-0" />
                        <span>Custom AI prompt systems for 10x content velocity</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <CheckCircle2 className="h-3.5 w-3.5 text-secunova-blue mt-0.5 flex-shrink-0" />
                        <span>Editorial tone calibration and visual brand standards</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <CheckCircle2 className="h-3.5 w-3.5 text-secunova-blue mt-0.5 flex-shrink-0" />
                        <span>Conversion funnel and local authority monitoring</span>
                      </li>
                    </ul>
                  </div>
                </div>

                <Link to="/services/content-storytelling-strategy" className="btn btn-primary text-xs font-bold text-white justify-center py-3 w-full">
                  Explore Advisory Packages <ArrowRight className="ml-1.5 h-3.5 w-3.5 text-white" />
                </Link>
              </div>

              {/* Pathway 2: Digital Project Governance */}
              <div className="bg-secunova-dark text-white rounded-xl border border-gray-800 p-6 sm:p-8 flex flex-col justify-between shadow-sm hover:shadow-md transition-shadow">
                <div>
                  <div className="flex items-center justify-between mb-4">
                    <div className="w-10 h-10 bg-secunova-light/15 rounded-lg flex items-center justify-center text-secunova-light">
                      <ShieldCheck className="h-5 w-5" />
                    </div>
                    <span className="text-[10px] font-bold uppercase tracking-wider text-secunova-light px-2.5 py-0.5 rounded-full bg-secunova-light/15">
                      Agency Oversight
                    </span>
                  </div>
                  <h3 className="text-lg sm:text-xl font-bold text-white mb-2">
                    Digital Project Governance &amp; PMaaS
                  </h3>
                  <p className="text-xs sm:text-sm text-blue-100/80 leading-relaxed mb-5">
                    For organizations retaining external web, design, or software agencies to build or re-architect digital assets. We step in as your strategic representative to define SOW scopes, eliminate budget drift, and verify quality before payment.
                  </p>

                  <div className="border-t border-gray-800 pt-4 mb-6">
                    <span className="text-[11px] font-bold uppercase tracking-wider text-blue-200/70 block mb-2">How We Protect Your Capital:</span>
                    <ul className="space-y-2 text-xs text-blue-100/90">
                      <li className="flex items-start gap-2">
                        <CheckCircle2 className="h-3.5 w-3.5 text-secunova-light mt-0.5 flex-shrink-0" />
                        <span>Airtight Statement of Work (SOW) specification</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <CheckCircle2 className="h-3.5 w-3.5 text-secunova-light mt-0.5 flex-shrink-0" />
                        <span>Independent agency RFP vetting and selection</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <CheckCircle2 className="h-3.5 w-3.5 text-secunova-light mt-0.5 flex-shrink-0" />
                        <span>Milestone-gated budget authorization (Pay-for-Outcome)</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <CheckCircle2 className="h-3.5 w-3.5 text-secunova-light mt-0.5 flex-shrink-0" />
                        <span>Zero change order bloat and timeline defense</span>
                      </li>
                    </ul>
                  </div>
                </div>

                <Link to="/services/digital-project-governance" className="btn btn-gradient text-xs font-bold text-white justify-center py-3 w-full">
                  Retain Project Governance <ArrowRight className="ml-1.5 h-3.5 w-3.5 text-white" />
                </Link>
              </div>

            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <CtaSection />
    </div>
  );
};

export default DigitalPresenceAuditPage;
