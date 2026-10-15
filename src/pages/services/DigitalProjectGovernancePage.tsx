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
  ClipboardCheck, CheckCircle2, ArrowRight, Shield, Scale,
  FileCheck, Users, AlertTriangle, DollarSign, Lock, Sparkles
} from 'lucide-react';
import CtaSection from '../../components/CtaSection';
import SEOSchema from '../../components/SEOSchema';
import { buildSeoTags } from '../../utils/seo-meta';

const DigitalProjectGovernancePage: React.FC = () => {
  const governancePillars = [
    {
      icon: <Users className="h-6 w-6 text-secunova-blue" />,
      title: 'Strategic Client Representation & Agency Mediation',
      description:
        'We sit on your side of the table as your executive representative. We translate your commercial vision into unambiguous technical requirements and represent your interests directly in all discussions with external tech or design agencies.',
      deliverables: [
        'Dedicated senior client representative',
        'Direct agency communication management',
        'Commercial vision to technical translation memo',
      ],
    },
    {
      icon: <FileCheck className="h-6 w-6 text-secunova-light" />,
      title: 'Business Requirements & SOW Scoping Architecture',
      description:
        'Vague agency contracts lead to scope creep and surprise change orders. We draft rigorous Statements of Work (SOW) with concrete deliverable definitions, acceptance criteria, and penalty clauses for unexcused delays.',
      deliverables: [
        'Definitive Statement of Work (SOW) scoping documentation',
        'Granular technical acceptance criteria checklists',
        'Vendor contract evaluation and risk clause audit',
      ],
    },
    {
      icon: <Scale className="h-6 w-6 text-secunova-blue" />,
      title: 'Milestone-Gated Deliverable Quality Audits',
      description:
        'No agency invoice is authorized until SecuNova independently inspects the code, design, or deliverable against agreed contract specifications. We enforce strict gatekeeper governance before milestone funds are released.',
      deliverables: [
        'Objective third-party quality compliance inspections',
        'Milestone payment authorization reports',
        'Punch-list defect tracking and resolution verification',
      ],
    },
    {
      icon: <DollarSign className="h-6 w-6 text-secunova-light" />,
      title: 'Budget Drift Defense & Change Order Control',
      description:
        'Eliminate the standard 40% to 60% budget overruns typical of unmanaged agency engagements. We challenge unnecessary change orders and hold external vendors strictly accountable to their original commercial commitments.',
      deliverables: [
        'Formal change-request evaluation matrix',
        'Live financial threshold and burn-rate tracking',
        'Executive risk registers and mitigation protocols',
      ],
    },
  ];

  return (
    <div className="min-h-screen bg-white">
      <Helmet>
        <title>Digital Project Governance &amp; Vendor Mediation | SecuNova Inc.</title>
        <meta
          name="description"
          content="Protect your budget and enforce quality. SecuNova serves as your strategic client representative, managing external web and tech agencies through milestone-gated PMaaS governance."
        />
        <meta
          name="keywords"
          content="digital project governance Calgary, vendor mediation Alberta, PMaaS project management, tech agency oversight Canada, milestone gating, SOW scoping"
        />
        {buildSeoTags({
          title: 'Digital Project Governance & Vendor Mediation | SecuNova Inc.',
          description:
            'Executive client representation and third-party vendor oversight. We eliminate budget drift, enforce milestone gating, and guarantee contract deliverable quality.',
          url: '/services/digital-project-governance',
          imageAlt: 'SecuNova Inc. - Digital Project Governance & Vendor Mediation',
        })}
      </Helmet>

      <SEOSchema
        type="service"
        data={{
          title: 'Digital Project Governance & Vendor Mediation | SecuNova Inc.',
          description:
            'Strategic client representation, agency mediation, SOW scoping, and milestone-gated payment authorization.',
          url: 'https://secunovainc.ca/services/digital-project-governance',
        }}
      />

      {/* Hero Section */}
      <section className="relative min-h-[750px] overflow-hidden flex items-center justify-center pt-32 pb-20 bg-secunova-dark text-white">
        <div className="absolute inset-0">
          <video
            src="/hero-video1.mp4"
            autoPlay
            muted
            loop
            playsInline
            preload="metadata"
            poster="/images/heroes/governance-hero.jpg"
            className="w-full h-full object-cover opacity-60"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-secunova-dark/80 via-secunova-dark/60 to-secunova-dark/90"></div>
        </div>

        <div className="container mx-auto px-4 relative z-10 w-full text-center">
          <div className="max-w-3xl mx-auto">
            <div className="inline-flex items-center bg-white/10 backdrop-blur-md px-4 py-1.5 rounded-full text-xs font-bold uppercase tracking-widest text-secunova-light mb-5">
              <ClipboardCheck className="h-3.5 w-3.5 mr-1.5" />
              Fiduciary PMaaS Governance
            </div>

            <h1 className="text-3xl sm:text-5xl font-extrabold text-white leading-tight tracking-tight mb-4">
              Project Governance. <span className="text-secunova-light block sm:inline">Zero Budget Drift.</span>
            </h1>

            <p className="text-sm sm:text-base text-blue-100/90 max-w-xl mx-auto leading-relaxed mb-8">
              We act as your executive representative before external tech, web, and creative agencies. We translate business requirements, define airtight SOWs, and verify deliverable quality before any invoice is paid.
            </p>

            <div className="flex flex-col sm:flex-row justify-center gap-3">
              <Link to="/contact" className="btn btn-gradient text-xs sm:text-sm font-bold text-white px-6 py-3">
                Retain Governance Oversight
              </Link>
              <a href="#governance-pillars" className="btn btn-outline-light text-xs sm:text-sm font-bold text-white px-6 py-3">
                View Governance Scope
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* The Strategic Challenge */}
      <section className="secunova-section secunova-section--light">
        <div className="container mx-auto px-4">
          <div className="max-w-5xl mx-auto">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
              <div className="lg:col-span-7">
                <span className="text-xs font-bold uppercase tracking-widest text-secunova-blue block mb-2">The Vendor Dilemma</span>
                <h2 className="text-2xl sm:text-3xl font-bold text-secunova-dark mb-4 leading-tight">
                  Why Leaders Need an Independent Strategic Representative
                </h2>
                <p className="text-slate-600 text-xs sm:text-sm leading-relaxed mb-4">
                  External development and marketing agencies are incentivized by billable hours and scope expansion, not your commercial bottom line. Without experienced technical oversight on the client side, project costs routinely spiral out of control.
                </p>
                <p className="text-slate-600 text-xs sm:text-sm leading-relaxed mb-6">
                  SecuNova acts as your external Chief Project Officer. Because we are an independent advisory firm and do not sell software or code websites ourselves, our sole fiduciary duty is protecting your capital, enforcing contractual quality, and ensuring your digital vision is executed flawlessly.
                </p>
                <div className="grid grid-cols-2 gap-3 text-xs font-bold text-secunova-dark">
                  <div className="flex items-center"><CheckCircle2 className="h-4 w-4 text-secunova-blue mr-2 flex-shrink-0" /> Pay-For-Outcome Gatekeeping</div>
                  <div className="flex items-center"><CheckCircle2 className="h-4 w-4 text-secunova-blue mr-2 flex-shrink-0" /> Zero Unjustified Change Orders</div>
                  <div className="flex items-center"><CheckCircle2 className="h-4 w-4 text-secunova-blue mr-2 flex-shrink-0" /> Complete Agency Accountability</div>
                  <div className="flex items-center"><CheckCircle2 className="h-4 w-4 text-secunova-blue mr-2 flex-shrink-0" /> Objective Technical QA</div>
                </div>
              </div>

              <div className="lg:col-span-5">
                <div className="bg-slate-50 border border-gray-200 rounded-2xl p-6 shadow-sm">
                  <h3 className="text-sm font-bold text-secunova-dark uppercase tracking-wider mb-4 flex items-center gap-2">
                    <AlertTriangle className="h-4 w-4 text-secunova-blue" />
                    Risks of Unsupervised Agencies
                  </h3>
                  <div className="space-y-3 text-xs text-slate-700">
                    <div className="p-3 bg-white rounded-lg border border-gray-100 shadow-2xs">
                      <strong className="block text-secunova-dark font-bold mb-0.5">Budget Overruns (40-60%)</strong>
                      Unmonitored change requests silently inflate invoices beyond authorized capital.
                    </div>
                    <div className="p-3 bg-white rounded-lg border border-gray-100 shadow-2xs">
                      <strong className="block text-secunova-dark font-bold mb-0.5">Vague Acceptance Criteria</strong>
                      Clients forced to accept substandard work because contract terms were poorly scoped.
                    </div>
                    <div className="p-3 bg-white rounded-lg border border-gray-100 shadow-2xs">
                      <strong className="block text-secunova-dark font-bold mb-0.5">Unacceptable Timeline Delays</strong>
                      Agencies reassigning top talent to other accounts while your launch is postponed.
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 4 Pillars of Governance */}
      <section id="governance-pillars" className="secunova-section bg-gray-50 border-t border-gray-200">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="text-center max-w-2xl mx-auto mb-12">
              <span className="text-[10px] font-bold uppercase tracking-widest text-secunova-blue block mb-1">PMaaS Framework</span>
              <h2 className="text-2xl sm:text-3xl font-bold text-secunova-dark tracking-tight">
                Our Four-Tier Governance &amp; Mediation Model
              </h2>
              <p className="text-xs sm:text-sm text-slate-600 mt-2">
                Proven gatekeeping mechanisms that safeguard capital and guarantee delivery compliance.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {governancePillars.map((pillar, index) => (
                <div key={index} className="bg-white rounded-xl border border-gray-200 p-6 shadow-sm flex flex-col justify-between">
                  <div>
                    <div className="w-12 h-12 rounded-xl bg-slate-50 border border-gray-100 flex items-center justify-center mb-4">
                      {pillar.icon}
                    </div>
                    <h3 className="text-base font-bold text-secunova-dark mb-2">{pillar.title}</h3>
                    <p className="text-xs text-slate-600 leading-relaxed mb-4">{pillar.description}</p>

                    <div className="border-t border-gray-100 pt-3">
                      <span className="text-[11px] font-bold uppercase tracking-wider text-slate-500 block mb-2">Key Governance Controls:</span>
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

      {/* Tangible Controls */}
      <section className="secunova-section secunova-section--light border-t border-gray-200">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <div className="inline-flex items-center bg-secunova-blue/10 text-secunova-blue px-3.5 py-1.5 rounded-full text-xs font-bold uppercase tracking-widest mb-3">
              <Sparkles className="h-3.5 w-3.5 mr-1.5" />
              Tangible Assets
            </div>
            <h2 className="text-2xl sm:text-3xl font-bold text-secunova-dark tracking-tight mb-4">
              Your Executive Project Protection Kit
            </h2>
            <p className="text-xs sm:text-sm text-slate-600 max-w-xl mx-auto mb-8">
              A disciplined governance shield that eliminates guesswork and enforces total vendor compliance.
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 text-left">
              <div className="p-5 rounded-xl border border-gray-200 bg-white shadow-2xs">
                <FileCheck className="h-6 w-6 text-secunova-blue mb-2" />
                <h4 className="text-sm font-bold text-secunova-dark mb-1">Airtight SOW Specification</h4>
                <p className="text-xs text-slate-600 leading-relaxed">
                  Definitive requirements and acceptance criteria before contract execution.
                </p>
              </div>
              <div className="p-5 rounded-xl border border-gray-200 bg-white shadow-2xs">
                <Scale className="h-6 w-6 text-secunova-light mb-2" />
                <h4 className="text-sm font-bold text-secunova-dark mb-1">Milestone Gate Approval</h4>
                <p className="text-xs text-slate-600 leading-relaxed">
                  Written inspection sign-offs required before any invoice payment release.
                </p>
              </div>
              <div className="p-5 rounded-xl border border-gray-200 bg-white shadow-2xs">
                <Shield className="h-6 w-6 text-secunova-blue mb-2" />
                <h4 className="text-sm font-bold text-secunova-dark mb-1">Weekly Executive Briefing</h4>
                <p className="text-xs text-slate-600 leading-relaxed">
                  Concise dashboard reports on budget burn, critical path timelines, and risk registers.
                </p>
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

export default DigitalProjectGovernancePage;
