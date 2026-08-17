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
import { buildSeoTags } from '../utils/seo-meta';
import {
  ArrowRight, Shield, Phone, Crown, Target, CheckCircle,
  Briefcase, Compass, Code, RefreshCw, Users, Globe, ClipboardCheck,
  Scale, Clock, Lightbulb, Database, Award, Wrench,
  X, Lock, FileText, ChevronRight, Zap, Mail, Brain, Workflow,
  DollarSign, Package, BarChart3, MessageSquare, Cpu, Sparkles
} from 'lucide-react';
import LazySection from '../components/LazySection';

const HomePage = () => {
  return (
    <div className="overflow-hidden">
      <Helmet>
        <title>SecuNova Inc. | Local AI Applications, PMaaS &amp; Enterprise Strategic Advisory</title>
        <meta name="description" content="SecuNova Inc. builds private, locally-run AI applications for small businesses and delivers PMaaS governance, cybersecurity risk management, and strategic advisory for North American enterprises." />
        <meta name="keywords" content="AI for small business Calgary, local AI applications Canada, private AI tools Alberta, PMaaS Calgary, enterprise strategic advisory, digital transformation Canada, offline AI apps macOS Windows, cybersecurity audits" />
        <link rel="canonical" href="https://secunovainc.com/" />
        {buildSeoTags({
          title: 'SecuNova Inc. | Local AI Applications, PMaaS & Enterprise Strategic Advisory',
          description:
            'SecuNova Inc. builds private, locally-run AI applications for small businesses and delivers PMaaS governance, cybersecurity risk management, and strategic advisory for North American enterprises.',
          url: '/',
          imageAlt: 'SecuNova Inc. - Local AI Applications & Enterprise Strategic Advisory',
        })}
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "WebPage",
            "@id": "https://secunovainc.com/#webpage",
            "url": "https://secunovainc.com/",
            "name": "SecuNova Inc. | Local AI Applications, PMaaS & Enterprise Strategic Advisory",
            "description":
              "SecuNova Inc. builds private, locally-run AI applications for small businesses and delivers PMaaS governance, cybersecurity risk management, and strategic advisory for North American enterprises.",
            "inLanguage": "en-CA",
            "isPartOf": { "@id": "https://secunovainc.com/#website" },
            "about": { "@id": "https://secunovainc.com/#organization" },
            "primaryImageOfPage": {
              "@type": "ImageObject",
              "url": "https://secunovainc.com/og-image.png",
              "width": 1200,
              "height": 630
            }
          })}
        </script>
      </Helmet>

      {/* ========================================
          Hero Section
          ======================================== */}
      <section className="relative min-h-[92vh] sm:min-h-screen overflow-hidden bg-secunova-dark pt-36 sm:pt-48 pb-24 sm:pb-32 flex flex-col justify-center">
        <div className="absolute inset-0 hero-bg-optimized">
          <video
            src="/hero-video.mp4"
            autoPlay
            muted
            loop
            playsInline
            preload="auto"
            poster="/images/hero_strategic.png"
            className="w-full h-full object-cover hero-zoom opacity-60"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-secunova-dark via-secunova-dark/95 to-secunova-dark/60"></div>
          <div className="absolute inset-0 bg-gradient-to-t from-secunova-dark via-transparent to-secunova-dark/70"></div>
        </div>

        <div className="container mx-auto px-4 relative z-10 flex flex-col items-center justify-center text-center w-full">
          <div className="max-w-5xl mx-auto w-full flex flex-col items-center">

            {/* Strategic Positioning Badge */}
            <div className="inline-flex items-center bg-white/10 backdrop-blur-sm border border-white/20 px-5 py-2 rounded-full text-xs font-bold uppercase tracking-widest text-secunova-light mb-8 animate-fade-in shadow-lg">
              <Sparkles className="h-3.5 w-3.5 mr-2 text-secunova-light" />
              Local AI Applications &amp; Enterprise PMaaS Governance
            </div>

            {/* High-Converting Main Headline */}
            <h1 className="text-3xl sm:text-5xl lg:text-6xl xl:text-[4.2rem] font-extrabold text-white leading-[1.12] tracking-tight hero-title-optimized max-w-5xl text-center">
              <span className="block whitespace-normal">Own Your AI. Protect Your Projects.</span>
              <span className="block text-secunova-light mt-2 whitespace-normal bg-clip-text text-transparent bg-gradient-to-r from-secunova-light via-blue-200 to-white">
                Local AI Applications &amp; Enterprise PMaaS.
              </span>
            </h1>

            {/* Marketing Value Proposition Hook */}
            <p className="mt-8 max-w-3xl text-base sm:text-xl text-blue-100/90 leading-relaxed hero-description-optimized animate-fade-in-up delay-500 font-normal">
              SecuNova provides two high-impact capabilities: <strong className="text-white font-semibold">100% locally-executed AI applications</strong> you own outright with zero monthly subscriptions, and <strong className="text-white font-semibold">Project Management as a Service (PMaaS)</strong> that eliminates vendor risk, protects your budget, and guarantees milestone execution.
            </p>

            {/* Dual Core Pillar Feature Cards in Hero */}
            <div className="mt-10 w-full grid grid-cols-1 md:grid-cols-2 gap-4 text-left animate-fade-in-up delay-700">
              
              {/* Pillar 1: Local AI */}
              <div className="bg-white/10 backdrop-blur-md border border-white/20 rounded-2xl p-6 hover:bg-white/15 transition-all duration-300 flex flex-col justify-between group">
                <div>
                  <div className="flex items-center justify-between mb-4">
                    <div className="w-10 h-10 rounded-xl bg-secunova-light/20 flex items-center justify-center text-secunova-light">
                      <Brain className="h-5 w-5" />
                    </div>
                    <span className="text-[10px] uppercase tracking-widest font-black px-2.5 py-1 rounded bg-secunova-light/20 text-secunova-light">
                      01 / Local AI
                    </span>
                  </div>
                  <h3 className="text-lg font-bold text-white mb-2">Local AI for Small Business</h3>
                  <p className="text-xs text-blue-100/80 leading-relaxed mb-4">
                    Custom AI Apps and document automation built natively for macOS &amp; Windows. Pay once, zero subscriptions, complete source code handoff.
                  </p>
                  <div className="flex flex-wrap gap-2 mb-4">
                    <span className="text-[10px] font-bold px-2 py-0.5 rounded bg-white/10 text-white">100% Local</span>
                    <span className="text-[10px] font-bold px-2 py-0.5 rounded bg-white/10 text-white">$0 SaaS Fees</span>
                    <span className="text-[10px] font-bold px-2 py-0.5 rounded bg-white/10 text-white">Mac &amp; Windows</span>
                  </div>
                </div>
                <Link
                  to="/services/ai-for-small-business"
                  className="text-xs font-bold text-secunova-light flex items-center gap-1.5 group-hover:translate-x-1 transition-transform pt-3 border-t border-white/10"
                >
                  <span>Explore Local AI Tools</span>
                  <ArrowRight className="h-3.5 w-3.5" />
                </Link>
              </div>

              {/* Pillar 2: PMaaS */}
              <div className="bg-white/10 backdrop-blur-md border border-white/20 rounded-2xl p-6 hover:bg-white/15 transition-all duration-300 flex flex-col justify-between group">
                <div>
                  <div className="flex items-center justify-between mb-4">
                    <div className="w-10 h-10 rounded-xl bg-secunova-blue/30 flex items-center justify-center text-secunova-light">
                      <ClipboardCheck className="h-5 w-5" />
                    </div>
                    <span className="text-[10px] uppercase tracking-widest font-black px-2.5 py-1 rounded bg-white/10 text-white">
                      02 / PMaaS
                    </span>
                  </div>
                  <h3 className="text-lg font-bold text-white mb-2">PMaaS &amp; Operations Governance</h3>
                  <p className="text-xs text-blue-100/80 leading-relaxed mb-4">
                    On-demand Chief Project Officer leadership. We hold external agencies accountable, gate milestone payments, and enforce zero-trust security.
                  </p>
                  <div className="flex flex-wrap gap-2 mb-4">
                    <span className="text-[10px] font-bold px-2 py-0.5 rounded bg-white/10 text-white">Vendor Audits</span>
                    <span className="text-[10px] font-bold px-2 py-0.5 rounded bg-white/10 text-white">Budget Gating</span>
                    <span className="text-[10px] font-bold px-2 py-0.5 rounded bg-white/10 text-white">Zero-Trust</span>
                  </div>
                </div>
                <Link
                  to="/services/strategic-advisory-pmaas"
                  className="text-xs font-bold text-secunova-light flex items-center gap-1.5 group-hover:translate-x-1 transition-transform pt-3 border-t border-white/10"
                >
                  <span>Explore PMaaS Governance</span>
                  <ArrowRight className="h-3.5 w-3.5" />
                </Link>
              </div>

            </div>

            {/* Main Action CTAs */}
            <div className="mt-8 flex flex-col sm:flex-row gap-4 animate-fade-in-up delay-800">
              <Link to="/services/ai-for-small-business" className="btn btn-gradient btn-lg text-white font-bold shadow-xl">
                Build a Local AI Tool
                <ArrowRight className="ml-2 h-4 w-4 text-white" />
              </Link>
              <Link to="/services/strategic-advisory-pmaas" className="btn btn-outline-light btn-lg text-white font-bold">
                Retain PMaaS Leadership
              </Link>
            </div>

          </div>
        </div>
      </section>

      {/* ========================================
          Core Service Offerings (Reordered: 01 AI, 02 PMaaS, 03 Strategic Advisory)
          ======================================== */}
      <LazySection className="secunova-section secunova-section--light">
        <div className="container mx-auto px-4">
          <div className="max-w-7xl mx-auto">
            <div className="text-center max-w-3xl mx-auto mb-16">
              <div className="inline-flex items-center bg-secunova-blue/10 text-secunova-blue px-4 py-2 rounded-full text-xs font-bold uppercase tracking-widest mb-4">
                <Briefcase className="h-4 w-4 mr-2" />
                Core Practice Areas
              </div>
              <h2 className="text-3xl md:text-5xl font-bold text-secunova-dark tracking-tight leading-tight">
                Three Practice Lines. <span className="bg-clip-text text-transparent bg-gradient-to-r from-secunova-blue to-secunova-light">One Governance Standard.</span>
              </h2>
              <p className="text-base sm:text-lg text-slate-700 mt-4 leading-relaxed">
                From local AI tools for small business to enterprise PMaaS and strategic advisory, every engagement delivers complete IP ownership, milestone gating, and independent oversight.
              </p>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-stretch">

              {/* Service 01: AI for Small Business */}
              <div className="bg-white rounded-2xl border-2 border-secunova-blue/20 shadow-xl hover:shadow-2xl transition-all duration-300 overflow-hidden flex flex-col justify-between h-full relative">
                <div className="absolute top-4 right-4 text-[10px] font-bold uppercase tracking-widest bg-secunova-light/15 text-secunova-light px-3 py-1 rounded-full">Flagship Practice</div>
                <div className="p-8 sm:p-9 flex-1">
                  <div className="flex items-center justify-between mb-6">
                    <div className="w-14 h-14 bg-gradient-to-br from-secunova-light/20 to-secunova-blue/10 rounded-2xl flex items-center justify-center text-secunova-light flex-shrink-0">
                      <Brain className="h-7 w-7" />
                    </div>
                    <span className="text-xs font-bold uppercase tracking-widest px-3.5 py-1.5 bg-secunova-blue/10 text-secunova-blue rounded-full">Service 01</span>
                  </div>
                  <h3 className="text-2xl sm:text-3xl font-bold text-secunova-dark mb-3 leading-tight">
                    AI for Small Business
                  </h3>
                  <p className="text-slate-600 text-sm sm:text-base leading-relaxed mb-6">
                    Custom AI applications built to run locally on your machine (macOS &amp; Windows). Pay once, zero subscriptions, complete source code handoff, and total data privacy.
                  </p>
                  <div className="space-y-4 mb-8">
                    {[
                      { icon: <MessageSquare className="h-4 w-4" />, title: 'Custom AI Assistants', detail: 'Trained on your business context and documents. Runs locally on your hardware.' },
                      { icon: <FileText className="h-4 w-4" />, title: 'Document Intelligence Tools', detail: 'Extract data and summarize contracts, invoices, and reports with zero cloud AI calls.' },
                      { icon: <Workflow className="h-4 w-4" />, title: 'Workflow Automation', detail: 'Automate repetitive daily operations and connect local systems seamlessly.' },
                      { icon: <BarChart3 className="h-4 w-4" />, title: 'Team Productivity Dashboards', detail: 'Self-hosted internal intelligence dashboards with complete data privacy.' },
                    ].map((item, i) => (
                      <div key={i} className="flex items-start gap-3.5">
                        <div className="w-8 h-8 bg-secunova-light/15 rounded-lg flex items-center justify-center text-secunova-light flex-shrink-0 mt-0.5">
                          {item.icon}
                        </div>
                        <div>
                          <div className="text-sm font-bold text-secunova-dark mb-0.5">{item.title}</div>
                          <div className="text-xs text-slate-500 leading-relaxed">{item.detail}</div>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
                <div className="px-8 sm:px-9 pb-8">
                  <Link to="/services/ai-for-small-business" className="btn btn-gradient w-full justify-center text-sm font-bold text-white">
                    Explore AI for Small Business <ArrowRight className="ml-2 h-4 w-4 text-white" />
                  </Link>
                </div>
              </div>

              {/* Service 02: PMaaS */}
              <div className="bg-white rounded-2xl border border-gray-200/90 shadow-lg hover:shadow-xl transition-all duration-300 overflow-hidden flex flex-col justify-between h-full">
                <div className="p-8 sm:p-9 flex-1">
                  <div className="flex items-center justify-between mb-6">
                    <div className="w-14 h-14 bg-secunova-blue/10 rounded-2xl flex items-center justify-center text-secunova-blue flex-shrink-0">
                      <ClipboardCheck className="h-7 w-7" />
                    </div>
                    <span className="text-xs font-bold uppercase tracking-widest px-3.5 py-1.5 bg-secunova-blue/10 text-secunova-blue rounded-full">Service 02</span>
                  </div>
                  <h3 className="text-2xl sm:text-3xl font-bold text-secunova-dark mb-3 leading-tight">
                    PMaaS &amp; Operations Governance
                  </h3>
                  <p className="text-slate-600 text-sm sm:text-base leading-relaxed mb-6">
                    Acting as your independent Chief Project Officer: governing digital initiatives, holding vendors accountable, protecting your budget, and enforcing zero-trust operational security.
                  </p>
                  <div className="space-y-4 mb-8">
                    {[
                      { icon: <Users className="h-4 w-4" />, title: 'Vendor Management & Oversight', detail: 'Auditing agency deliverables, verifying code, and gating milestone payments independently.' },
                      { icon: <Shield className="h-4 w-4" />, title: 'Zero-Trust Operations', detail: 'Isolated staging access, IP protection protocols, and confidential data handling enforced.' },
                      { icon: <Target className="h-4 w-4" />, title: 'Scope & Risk Mitigation', detail: 'Formal change-request protocols, timeline enforcement, and active risk mitigation.' },
                      { icon: <Wrench className="h-4 w-4" />, title: 'Workspace Engineering', detail: 'Structured project platforms (Jira, ClickUp, Notion) with repeatable SOPs built for your team.' },
                    ].map((item, i) => (
                      <div key={i} className="flex items-start gap-3.5">
                        <div className="w-8 h-8 bg-secunova-blue/8 rounded-lg flex items-center justify-center text-secunova-blue flex-shrink-0 mt-0.5">
                          {item.icon}
                        </div>
                        <div>
                          <div className="text-sm font-bold text-secunova-dark mb-0.5">{item.title}</div>
                          <div className="text-xs text-slate-500 leading-relaxed">{item.detail}</div>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
                <div className="px-8 sm:px-9 pb-8">
                  <Link to="/services/strategic-advisory-pmaas" className="btn btn-outline w-full justify-center text-sm font-bold">
                    Explore PMaaS Governance <ArrowRight className="ml-2 h-4 w-4" />
                  </Link>
                </div>
              </div>

              {/* Service 03: Strategic Advisory */}
              <div className="bg-white rounded-2xl border border-gray-200/90 shadow-lg hover:shadow-xl transition-all duration-300 overflow-hidden flex flex-col justify-between h-full">
                <div className="p-8 sm:p-9 flex-1">
                  <div className="flex items-center justify-between mb-6">
                    <div className="w-14 h-14 bg-secunova-light/15 rounded-2xl flex items-center justify-center text-secunova-light flex-shrink-0">
                      <Crown className="h-7 w-7" />
                    </div>
                    <span className="text-xs font-bold uppercase tracking-widest px-3.5 py-1.5 bg-secunova-light/15 text-secunova-light rounded-full">Service 03</span>
                  </div>
                  <h3 className="text-2xl sm:text-3xl font-bold text-secunova-dark mb-3 leading-tight">
                    Strategic Advisory &amp; Transformation
                  </h3>
                  <p className="text-slate-600 text-sm sm:text-base leading-relaxed mb-6">
                    Providing executive guidance to eliminate operational friction, replace legacy processes with modern digital workflows, and integrate practical, secure AI into daily operations.
                  </p>
                  <div className="space-y-4 mb-8">
                    {[
                      { icon: <Lightbulb className="h-4 w-4" />, title: 'Digital Readiness Assessment', detail: 'Deep-dive audits of workflows, software stacks, and operational bottlenecks.' },
                      { icon: <Zap className="h-4 w-4" />, title: 'Practical AI Adoption Roadmap', detail: 'Secure AI deployment strategies that lower costs without data exposure risks.' },
                      { icon: <RefreshCw className="h-4 w-4" />, title: 'Business Process Re-engineering', detail: 'Modernizing manual routines into automated, connected digital workflows.' },
                      { icon: <Users className="h-4 w-4" />, title: 'Executive Guidance', detail: 'Coaching leadership teams and training staff for seamless digital adoption.' },
                    ].map((item, i) => (
                      <div key={i} className="flex items-start gap-3.5">
                        <div className="w-8 h-8 bg-secunova-light/12 rounded-lg flex items-center justify-center text-secunova-light flex-shrink-0 mt-0.5">
                          {item.icon}
                        </div>
                        <div>
                          <div className="text-sm font-bold text-secunova-dark mb-0.5">{item.title}</div>
                          <div className="text-xs text-slate-500 leading-relaxed">{item.detail}</div>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
                <div className="px-8 sm:px-9 pb-8">
                  <Link to="/services/strategic-advisory-pmaas" className="btn btn-outline w-full justify-center text-sm font-bold">
                    Explore Strategic Advisory <ArrowRight className="ml-2 h-4 w-4" />
                  </Link>
                </div>
              </div>

            </div>
          </div>
        </div>
      </LazySection>

      {/* ========================================
          Strategic Comparison Matrix
          ======================================== */}
      <LazySection className="secunova-section bg-white text-secunova-dark relative overflow-hidden">
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-14">
              <div className="inline-flex items-center bg-secunova-blue/10 text-secunova-blue px-4 py-2 rounded-full text-xs font-bold uppercase tracking-widest mb-5">
                <Scale className="h-4 w-4 mr-2" />
                Why SecuNova
              </div>
              <h2 className="text-3xl md:text-5xl font-bold tracking-tight leading-tight mb-4">
                The Execution Model That <span className="text-secunova-blue">Protects Your Investment</span>
              </h2>
              <p className="text-slate-600 text-base md:text-lg max-w-2xl mx-auto leading-relaxed">
                Most technology engagements fail not from lack of talent, but from lack of governance. Here is the structural difference.
              </p>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-0 rounded-2xl overflow-hidden border border-gray-200/90 shadow-2xl">
              {/* Column: Traditional Agencies */}
              <div className="bg-gray-50 p-8 sm:p-10 border-r border-gray-200/90">
                <div className="flex items-center gap-3 mb-8">
                  <div className="w-10 h-10 bg-red-500/10 rounded-xl flex items-center justify-center flex-shrink-0">
                    <X className="h-5 w-5 text-red-500" />
                  </div>
                  <div>
                    <div className="text-xs font-bold uppercase tracking-widest text-red-500 mb-0.5">Standard Agency Model</div>
                    <div className="text-lg font-bold text-secunova-dark">Traditional Execution Agencies</div>
                  </div>
                </div>
                <ul className="space-y-5">
                  {[
                    { label: 'Billing Model', value: 'Hourly or recurring monthly subscriptions with no outcome accountability' },
                    { label: 'Scope Management', value: 'Change orders accumulate without structured approval gates' },
                    { label: 'Vendor Oversight', value: 'Self-reported progress with no independent code verification' },
                    { label: 'IP Protection', value: 'Shared development credentials and vendor lock-in dependencies' },
                    { label: 'Reporting', value: 'Reactive status updates delivered after issues surface' },
                    { label: 'Risk Management', value: 'No formal risk register or escalation protocols in place' },
                    { label: 'Budget Control', value: 'Invoice-first with retroactive cost reconciliation' },
                  ].map((item, i) => (
                    <li key={i} className="flex items-start gap-4">
                      <div className="w-1.5 h-1.5 rounded-full bg-red-500 mt-2.5 flex-shrink-0"></div>
                      <div>
                        <div className="text-xs font-bold uppercase tracking-wider text-slate-500 mb-0.5">{item.label}</div>
                        <div className="text-sm text-slate-600 leading-relaxed">{item.value}</div>
                      </div>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Column: SecuNova Model */}
              <div className="bg-gradient-to-br from-secunova-blue/10 to-secunova-light/15 p-8 sm:p-10 relative">
                <div className="absolute top-4 right-4 text-[10px] font-bold uppercase tracking-widest bg-secunova-blue/10 text-secunova-blue px-3 py-1 rounded-full">Recommended</div>
                <div className="flex items-center gap-3 mb-8">
                  <div className="w-10 h-10 bg-secunova-blue/10 rounded-xl flex items-center justify-center flex-shrink-0">
                    <CheckCircle className="h-5 w-5 text-secunova-blue" />
                  </div>
                  <div>
                    <div className="text-xs font-bold uppercase tracking-widest text-secunova-blue mb-0.5">The SecuNova Model</div>
                    <div className="text-lg font-bold text-secunova-dark">Strategic &amp; Bespoke Framework</div>
                  </div>
                </div>
                <ul className="space-y-5">
                  {[
                    { label: 'Billing Model', value: 'Fixed investment or milestone-gated approval: pay once with 100% full IP ownership' },
                    { label: 'Scope Management', value: 'Formal change-request protocols enforce strict roadmap controls and prevent drift' },
                    { label: 'Vendor Oversight', value: 'Independent code audits and technical verification of all software deliverables' },
                    { label: 'IP Protection', value: 'Zero-trust access controls, local execution, and complete source code handoff' },
                    { label: 'Reporting', value: 'Proactive C-suite dashboards with real-time milestone, budget, and risk visibility' },
                    { label: 'Risk Management', value: 'Active risk registers with escalation protocols and contingency authorization paths' },
                    { label: 'Budget Control', value: 'Milestone-gated spending with board-authorized financial thresholds enforced throughout' },
                  ].map((item, i) => (
                    <li key={i} className="flex items-start gap-4">
                      <CheckCircle className="h-4 w-4 text-secunova-blue mt-1 flex-shrink-0" />
                      <div>
                        <div className="text-xs font-bold uppercase tracking-wider text-secunova-blue/80 mb-0.5">{item.label}</div>
                        <div className="text-sm text-slate-600 leading-relaxed">{item.value}</div>
                      </div>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            <div className="text-center mt-10">
              <Link to="/contact" className="btn btn-gradient btn-lg text-white">
                Schedule Your Executive Briefing <ArrowRight className="ml-2 h-4 w-4 text-white" />
              </Link>
            </div>
          </div>
        </div>
      </LazySection>

      {/* ========================================
          4-Step Governance Process
          ======================================== */}
      <LazySection className="secunova-section bg-gradient-to-br from-secunova-dark via-gray-900 to-secunova-blue text-white relative overflow-hidden">
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-7xl mx-auto">
            <div className="text-center max-w-3xl mx-auto mb-16">
              <div className="inline-flex items-center bg-white/10 backdrop-blur-md px-4 py-2 rounded-full text-xs font-bold uppercase tracking-widest text-secunova-light mb-6">
                <Compass className="h-4 w-4 mr-2" />
                Governed Delivery Process
              </div>
              <h2 className="text-3xl sm:text-5xl font-bold tracking-tight leading-tight mb-4">
                The 4-Phase <span className="text-secunova-light">Governance Framework</span>
              </h2>
              <p className="text-blue-100/90 text-base sm:text-lg leading-relaxed">
                A disciplined engagement model that takes organizations from discovery to complete operational handover. No ambiguity. No surprises.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {[
                {
                  phase: '01',
                  title: 'Diagnostic Audit',
                  description: 'A forensic review of your existing infrastructure, software stack, workflows, and tool requirements before committing a single dollar.',
                  deliverable: 'Current-State Gap Analysis',
                  icon: <Database className="h-5 w-5" />,
                  accentColor: 'text-secunova-light',
                },
                {
                  phase: '02',
                  title: 'Strategic Blueprint',
                  description: 'A phase-gated implementation roadmap aligned with your business objectives, hardware specifications, and security requirements.',
                  deliverable: 'Governed Digital Roadmap',
                  icon: <FileText className="h-5 w-5" />,
                  accentColor: 'text-secunova-blue',
                },
                {
                  phase: '03',
                  title: 'Governed Execution',
                  description: 'Bespoke software build and senior project leadership governing all technical execution: local AI runtimes, milestone gating, and verification.',
                  deliverable: 'Audited Technical Delivery',
                  icon: <ClipboardCheck className="h-5 w-5" />,
                  accentColor: 'text-secunova-light',
                },
                {
                  phase: '04',
                  title: 'Operational Handover',
                  description: 'Complete source code handoff, local hardware installation, SOP documentation, and staff training so your team operates independently.',
                  deliverable: 'Full Asset & IP Handoff',
                  icon: <Award className="h-5 w-5" />,
                  accentColor: 'text-secunova-blue',
                },
              ].map((item, i) => (
                <div key={i} className="bg-white/5 border border-white/15 rounded-2xl p-6 backdrop-blur-md flex flex-col justify-between hover:bg-white/10 transition-all duration-300">
                  <div>
                    <div className="flex items-center justify-between mb-5">
                      <span className="text-4xl font-black text-white/15">{item.phase}</span>
                      <div className={`p-2.5 bg-white/10 rounded-xl ${item.accentColor}`}>{item.icon}</div>
                    </div>
                    <h3 className="text-lg font-bold text-white mb-3">{item.title}</h3>
                    <p className="text-xs text-blue-100/80 leading-relaxed">{item.description}</p>
                  </div>
                  <div className="mt-6 pt-4 border-t border-white/10 flex items-center justify-between">
                    <div>
                      <div className="text-[10px] uppercase tracking-widest text-white/40 font-semibold mb-0.5">Key Deliverable</div>
                      <div className="text-xs font-bold text-secunova-light">{item.deliverable}</div>
                    </div>
                    <ChevronRight className="h-4 w-4 text-white/30" />
                  </div>
                </div>
              ))}
            </div>

            <div className="mt-12 text-center">
              <Link to="/services" className="btn btn-gradient btn-lg text-white">
                View Full Delivery Framework <ArrowRight className="ml-2 h-4 w-4 text-white" />
              </Link>
            </div>
          </div>
        </div>
      </LazySection>

      {/* ========================================
          Technical Track Record
          ======================================== */}
      <LazySection id="track-record" className="secunova-section secunova-section--light">
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
                  Demonstrated Software Engineering &amp; Governance
                </p>
              </div>
              <p className="text-slate-600 max-w-md text-sm mt-4 md:mt-0 leading-relaxed">
                We build bespoke software platforms and apply rigorous governance principles across internal R&amp;D and client initiatives.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8 items-stretch">
              <div className="bg-white rounded-2xl p-6 sm:p-7 shadow-md border border-gray-200/90 flex flex-col justify-between h-full min-h-[290px] hover:shadow-lg transition-all duration-300 overflow-hidden">
                <div>
                  <div className="flex items-center justify-between gap-2 mb-4">
                    <span className="text-[10px] uppercase font-bold tracking-wider px-2.5 py-1 bg-amber-500/10 text-amber-600 rounded-md border border-amber-500/20 whitespace-nowrap">Active R&amp;D</span>
                    <span className="text-xs font-mono text-slate-500 whitespace-nowrap">macOS • 2026</span>
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
                <Link to="/about/our-work/nova" className="text-xs font-bold text-secunova-blue hover:text-secunova-light flex items-center justify-between pt-4 border-t border-gray-100">
                  <span>View Tech Architecture</span> <ArrowRight className="h-3.5 w-3.5" />
                </Link>
              </div>

              <div className="bg-white rounded-2xl p-6 sm:p-7 shadow-md border border-gray-200/90 flex flex-col justify-between h-full min-h-[290px] hover:shadow-lg transition-all duration-300 overflow-hidden">
                <div>
                  <div className="flex items-center justify-between gap-2 mb-4">
                    <span className="text-[10px] uppercase font-bold tracking-wider px-2.5 py-1 bg-secunova-blue/10 text-secunova-blue rounded-md border border-secunova-blue/20 whitespace-nowrap">Sales Engine</span>
                    <span className="text-xs font-mono text-slate-500 whitespace-nowrap">Python • 2025</span>
                  </div>
                  <h3 className="text-xl font-bold text-secunova-dark mb-2 break-words">SecuNova Lead Finder</h3>
                  <p className="text-xs sm:text-sm text-slate-600 mb-5 leading-relaxed break-words">
                    A self-hosted sales intelligence platform built with Python and PostgreSQL that replaces recurring SaaS subscriptions with a privately owned local system.
                  </p>
                  <div className="flex flex-wrap gap-1.5 mb-6">
                    <span className="text-[10px] bg-gray-100 text-gray-700 px-2 py-0.5 rounded font-mono">Python</span>
                    <span className="text-[10px] bg-gray-100 text-gray-700 px-2 py-0.5 rounded font-mono">PostgreSQL</span>
                    <span className="text-[10px] bg-gray-100 text-gray-700 px-2 py-0.5 rounded font-mono">FastAPI</span>
                  </div>
                </div>
                <Link to="/about/our-work/lead-finder" className="text-xs font-bold text-secunova-blue hover:text-secunova-light flex items-center justify-between pt-4 border-t border-gray-100">
                  <span>View Tech Architecture</span> <ArrowRight className="h-3.5 w-3.5" />
                </Link>
              </div>

              <div className="bg-white rounded-2xl p-6 sm:p-7 shadow-md border border-gray-200/90 flex flex-col justify-between h-full min-h-[290px] hover:shadow-lg transition-all duration-300 overflow-hidden">
                <div>
                  <div className="flex items-center justify-between gap-2 mb-4">
                    <span className="text-[10px] uppercase font-bold tracking-wider px-2.5 py-1 bg-secunova-blue/10 text-secunova-blue rounded-md border border-secunova-blue/20 whitespace-nowrap">Security Suite</span>
                    <span className="text-xs font-mono text-slate-500 whitespace-nowrap">SwiftUI • 2025</span>
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
                <Link to="/about/our-work/secuboost" className="text-xs font-bold text-secunova-blue hover:text-secunova-light flex items-center justify-between pt-4 border-t border-gray-100">
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
          Executive Lead Capture Engine
          ======================================== */}
      <LazySection className="secunova-section secunova-section--gray border-t border-gray-200">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">

              {/* Left: Positioning Copy */}
              <div className="lg:col-span-5">
                <div className="inline-flex items-center bg-secunova-blue/10 text-secunova-blue px-4 py-2 rounded-full text-xs font-bold uppercase tracking-widest mb-6">
                  <Mail className="h-4 w-4 mr-2" />
                  Executive Intake
                </div>
                <h2 className="text-3xl md:text-4xl font-bold text-secunova-dark tracking-tight leading-tight mb-5">
                  Request an <span className="bg-clip-text text-transparent bg-gradient-to-r from-secunova-blue to-secunova-light">Executive Briefing</span>
                </h2>
                <p className="text-slate-600 text-base leading-relaxed mb-8">
                  Connect directly with a senior SecuNova partner via email. Every inquiry is reviewed personally and answered within one business day. No forms, no automated replies, no account executives. Direct access.
                </p>
                <ul className="space-y-4">
                  {[
                    { icon: <Clock className="h-4 w-4" />, text: 'Response within 1 business day from a senior partner' },
                    { icon: <Shield className="h-4 w-4" />, text: 'All submissions handled under strict NDA protocols' },
                    { icon: <Globe className="h-4 w-4" />, text: 'Serving enterprises across Canada and the United States' },
                    { icon: <Lock className="h-4 w-4" />, text: 'Your data is never shared, sold, or used for marketing' },
                  ].map((item, i) => (
                    <li key={i} className="flex items-center gap-3">
                      <div className="w-8 h-8 bg-secunova-blue/10 rounded-lg flex items-center justify-center text-secunova-blue flex-shrink-0">
                        {item.icon}
                      </div>
                      <span className="text-sm text-slate-700 leading-snug">{item.text}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Right: Direct Email */}
              <div className="lg:col-span-7">
                <div className="bg-white rounded-2xl border border-gray-200 shadow-xl p-8 sm:p-10">
                  <h3 className="text-xl font-bold text-secunova-dark mb-1">Contact Directly by Email</h3>
                  <p className="text-sm text-slate-500 mb-8">Reach the senior advisory team directly. Every message is read and answered by a senior SecuNova partner.</p>

                  <div className="space-y-4">
                    <a
                      href="mailto:hello@secunovainc.com?subject=Executive%20Briefing%20Request"
                      className="flex items-center justify-between gap-4 bg-white rounded-2xl border border-gray-200 p-6 shadow-sm hover:shadow-lg hover:border-secunova-blue/30 transition-all duration-300 group"
                    >
                      <div className="flex items-center gap-4 min-w-0">
                        <div className="flex-shrink-0 w-12 h-12 bg-gradient-to-br from-secunova-blue/10 to-secunova-light/10 rounded-xl flex items-center justify-center group-hover:scale-105 transition-transform">
                          <Mail className="h-6 w-6 text-secunova-blue" />
                        </div>
                        <div className="min-w-0">
                          <div className="font-semibold text-secunova-dark text-lg">Executive Email</div>
                          <div className="text-sm text-slate-600 break-all">hello@secunovainc.com</div>
                        </div>
                      </div>
                      <ArrowRight className="h-5 w-5 text-secunova-blue flex-shrink-0" />
                    </a>

                    <a
                      href="tel:403-401-1552"
                      className="flex items-center justify-between gap-4 bg-white rounded-2xl border border-gray-200 p-6 shadow-sm hover:shadow-lg hover:border-secunova-blue/30 transition-all duration-300 group"
                    >
                      <div className="flex items-center gap-4">
                        <div className="flex-shrink-0 w-12 h-12 bg-gradient-to-br from-secunova-light/10 to-secunova-blue/10 rounded-xl flex items-center justify-center group-hover:scale-105 transition-transform">
                          <Phone className="h-6 w-6 text-secunova-light" />
                        </div>
                        <div>
                          <div className="font-semibold text-secunova-dark text-lg">Direct Advisory Line</div>
                          <div className="text-sm text-slate-600">403-401-1552</div>
                        </div>
                      </div>
                      <ArrowRight className="h-5 w-5 text-secunova-light flex-shrink-0" />
                    </a>
                  </div>

                  <a
                    href="mailto:hello@secunovainc.com?subject=Executive%20Briefing%20Request"
                    className="btn btn-gradient btn-lg w-full text-white font-bold mt-6"
                  >
                    Compose Executive Brief <ArrowRight className="ml-2 h-4 w-4 text-white" />
                  </a>

                  <p className="text-[11px] text-slate-400 text-center leading-relaxed mt-4">
                    Emails are handled under strict NDA protocols. No spam, no data sharing, no marketing lists.
                  </p>
                </div>
              </div>
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
              Ready to Build Your AI Tool or <span className="text-secunova-light">Govern Your Next Project?</span>
            </h2>
            <p className="text-blue-100/90 text-lg max-w-2xl mx-auto mb-8 leading-relaxed">
              Connect directly with SecuNova's senior engineering and advisory team. We deliver custom local AI applications and independent project governance for organizations across Canada and North America.
            </p>
            <div className="flex flex-col sm:flex-row justify-center gap-4">
              <Link to="/contact" className="btn btn-gradient btn-lg text-white">
                Schedule Executive Consultation <ArrowRight className="ml-2 h-4 w-4 text-white" />
              </Link>
              <Link to="/services/ai-for-small-business" className="btn btn-outline-light btn-lg text-white">
                Explore AI for Small Business
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default memo(HomePage);

