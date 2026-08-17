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
  ArrowRight, CheckCircle, Phone, Brain,
  ChevronRight, Zap, Shield, Lock,
  Users, Target, Clock, Cpu,
  FileText, Workflow, BarChart3, MessageSquare,
  Wifi, DollarSign, Settings, AlertTriangle,
  Sparkles, Package, X
} from 'lucide-react';
import CtaSection from '../../components/CtaSection';
import { buildSeoTags } from '../../utils/seo-meta';

const AISmallBusinessPage = () => {

  const painPoints = [
    {
      icon: <DollarSign className="h-6 w-6" />,
      title: 'Subscription Costs That Never Stop',
      description: 'Monthly SaaS AI fees stack up fast. Most small businesses pay for features they never use, with no option to own the tool outright.',
      color: 'text-red-400',
      bg: 'bg-red-500/10',
    },
    {
      icon: <Lock className="h-6 w-6" />,
      title: 'Your Business Data Leaves the Building',
      description: 'Cloud AI tools process your client data, financials, and internal documents on third-party servers. That is a compliance and confidentiality liability most small businesses cannot afford.',
      color: 'text-amber-400',
      bg: 'bg-amber-500/10',
    },
    {
      icon: <Settings className="h-6 w-6" />,
      title: 'Generic Tools That Do Not Fit',
      description: 'Off-the-shelf AI products are built for the average business. Your workflows, terminology, and documents are not average. Generic tools produce generic results.',
      color: 'text-red-400',
      bg: 'bg-red-500/10',
    },
    {
      icon: <Wifi className="h-6 w-6" />,
      title: 'Internet Dependency and Downtime Risk',
      description: 'Cloud AI sends your data to external servers for processing. Our tools run the AI inference locally - your business data is never transmitted to a third-party service, regardless of whether the app needs internet access.',
      color: 'text-amber-400',
      bg: 'bg-amber-500/10',
    },
  ];

  const serviceModules = [
    {
      icon: <MessageSquare className="h-7 w-7" />,
      accent: 'blue' as const,
      number: '01',
      title: 'Custom AI Assistants',
      description: 'We build AI assistants that understand your business context: your products, your clients, your internal language. These tools handle routine communication drafts, internal Q&A, and repetitive decision support - all running privately on your machine.',
      services: [
        { name: 'Business-Specific Knowledge Base', detail: 'Train the assistant on your SOPs, product catalogues, pricing, and client communication standards.' },
        { name: 'Automated Response Drafting', detail: 'Generate first-draft emails, quotes, and follow-ups tailored to your tone and business rules.' },
        { name: 'Internal Query Engine', detail: 'Staff can ask questions in plain language and receive accurate answers from your own documented processes.' },
        { name: 'Zero Cloud Transmission', detail: 'All queries and responses stay on your local machine. No data ever reaches a third-party AI server.' },
      ],
    },
    {
      icon: <FileText className="h-7 w-7" />,
      accent: 'light' as const,
      number: '02',
      title: 'Document Intelligence Tools',
      description: 'We engineer tools that read, extract, and summarize your business documents locally. Contracts, invoices, reports, and forms are processed privately on your hardware with no external API calls required.',
      services: [
        { name: 'Contract and Agreement Review', detail: 'Automatically surface key clauses, deadlines, obligations, and risk flags from contract documents.' },
        { name: 'Invoice and Form Data Extraction', detail: 'Extract structured data from unstructured PDFs and scanned forms into usable spreadsheet or database formats.' },
        { name: 'Report Summarization', detail: 'Condense lengthy supplier reports, site assessments, or research documents into executive-ready summaries.' },
        { name: 'Offline-Capable Processing', detail: 'For document analysis and internal AI tools, processing works without an internet connection. Tools that collect external data (e.g., lead finders, marketing apps) use internet only to fetch that data - never for AI processing.' },
      ],
    },
    {
      icon: <Workflow className="h-7 w-7" />,
      accent: 'blue' as const,
      number: '03',
      title: 'Workflow Automation',
      description: 'We connect AI intelligence to the repetitive daily tasks that consume your team\'s time. From data entry to scheduling coordination, we build automations that run locally and integrate directly with your existing tools.',
      services: [
        { name: 'Automated Data Entry and Routing', detail: 'Eliminate manual data transfer between systems by building AI-powered bridges that read and populate fields automatically.' },
        { name: 'Scheduling and Coordination Assistants', detail: 'Automate appointment follow-ups, booking confirmations, and calendar management without cloud calendar API dependencies.' },
        { name: 'Local System Integration', detail: 'Connect your AI workflow to local databases, spreadsheets, CRMs, or legacy software running on your network.' },
        { name: 'Trigger-Based Execution', detail: 'Set rules that activate AI-powered actions automatically based on new files, form submissions, or time-based conditions.' },
      ],
    },
    {
      icon: <BarChart3 className="h-7 w-7" />,
      accent: 'light' as const,
      number: '04',
      title: 'Team Productivity Dashboards',
      description: 'We build private, locally-hosted dashboards that aggregate your business data and surface AI-generated insights. Your team sees what matters most without any data leaving your network.',
      services: [
        { name: 'Operational KPI Tracking', detail: 'Consolidate sales, project, and operational data into a single private dashboard refreshed automatically from your local sources.' },
        { name: 'AI-Generated Weekly Summaries', detail: 'Automatically produce plain-language business summaries from raw operational data every week without manual effort.' },
        { name: 'Team Output Monitoring', detail: 'Track individual and team output metrics to identify bottlenecks and capacity constraints in real time.' },
        { name: 'Private Hosting', detail: 'Dashboards run on your local network with no third-party analytics, no tracking, and no external data exposure.' },
      ],
    },
    {
      icon: <Cpu className="h-7 w-7" />,
      accent: 'blue' as const,
      number: '05',
      title: 'Client-Tailored Custom AI Apps',
      description: 'Have a unique operational challenge, custom workflow, or specific company requirement? We build 100% bespoke AI applications tailored strictly to your business rules. Tell us what your team needs; we design, build, and deploy it locally with full code ownership.',
      services: [
        { name: 'Bespoke Operational Logic', detail: 'Engineered specifically around your internal rules, formulas, domain terminology, and exact business requirements.' },
        { name: 'Proprietary System & Data Integration', detail: 'Direct bridges to your local databases, internal network files, spreadsheets, or specialized local systems.' },
        { name: 'Client-Driven Feature Roadmap', detail: 'Built to solve the exact problem your company faces, with zero generic compromise or unwanted software bloat.' },
        { name: '100% IP & Source Code Transfer', detail: 'Complete codebase handoff with zero recurring licenses, no lock-in, and full intellectual property ownership.' },
      ],
    },
  ];

  const deliverySteps = [
    {
      step: '01',
      title: 'Discovery Call',
      description: 'We learn your workflows, daily pain points, and the specific repetitive tasks costing your team the most time. No generic solutions.',
      deliverable: 'Scope Definition Document',
      icon: <Target className="h-6 w-6" />,
    },
    {
      step: '02',
      title: 'Custom Build',
      description: 'We engineer the tool specifically for your business context: your data, your language, your operational rules. Built to run privately on your hardware.',
      deliverable: 'Working Local AI Application',
      icon: <Cpu className="h-6 w-6" />,
    },
    {
      step: '03',
      title: 'Local Deployment',
      description: 'We install and configure the application directly on your machine or local network. Zero cloud dependencies. Fully tested in your actual working environment.',
      deliverable: 'Verified Local Installation',
      icon: <Shield className="h-6 w-6" />,
    },
    {
      step: '04',
      title: 'Training and Handoff',
      description: 'Your team receives hands-on training. Full documentation and source files are handed over. You own the tool completely with no ongoing subscription required.',
      deliverable: 'Full Asset and IP Handoff',
      icon: <Package className="h-6 w-6" />,
    },
  ];

  const portfolioExamples = [
    {
      id: 'nova',
      name: 'Nova macOS AI Agent',
      category: 'Local AI Agent',
      year: '2026',
      summary: 'Native macOS intelligence platform built in Swift and Core ML. Executes AI tasks fully on-device with zero cloud data transmission - a direct example of the locally-run AI architecture we deliver for clients.',
      metrics: [
        { value: '100%', label: 'On-Device' },
        { value: '0 MB', label: 'Cloud Leak' },
        { value: 'Swift', label: 'Stack' },
      ],
    },
    {
      id: 'journalism-audit',
      name: 'Private AI Verification Platform',
      category: 'Document Intelligence',
      year: '2025',
      summary: 'Air-gapped AI content-verification platform built on Python and FastAPI. Private RAG pipeline processes documents locally, achieving 85 percent faster verification with zero external data exposure.',
      metrics: [
        { value: '0 MB', label: 'Cloud Leak' },
        { value: '85%', label: 'Faster' },
        { value: 'Private', label: 'Local RAG' },
      ],
    },
    {
      id: 'lead-finder',
      name: 'SecuNova Lead Finder',
      category: 'Workflow Automation',
      year: '2025',
      summary: 'Self-hosted sales intelligence engine built with Python and PostgreSQL. Replaces recurring SaaS seat fees with a privately-owned system that the client controls entirely.',
      metrics: [
        { value: '100%', label: 'Data Owned' },
        { value: '$0', label: 'SaaS Fees' },
        { value: 'SQL', label: 'Database' },
      ],
    },
  ];

  const engagementModels = [
    {
      title: 'One-Time Build - Full Ownership',
      badge: 'Pay Once. Own Everything.',
      badgeColor: 'bg-secunova-blue/10 text-secunova-blue',
      description: 'You pay once. We build the tool, install it on your machine, and hand over the complete source code and all assets - 100% ownership. No subscriptions. No recurring fees. No dependency.',
      highlights: [
        'Single fixed payment - no follow-up invoices or monthly charges',
        'Full source code delivered to you upon project completion',
        'All assets, documentation, and resources are 100% yours',
        'On-site installation and team training included in the price',
        'Ideal for: AI Assistants, Document Tools, Workflow Automations',
      ],
      cta: 'Request a Build Briefing',
      icon: <Package className="h-6 w-6" />,
    },
    {
      title: 'Build + Ongoing Support',
      badge: 'Ownership + Growth',
      badgeColor: 'bg-secunova-light/15 text-secunova-light',
      description: 'We build your first tool and you own it outright from day one. We then remain available monthly to expand capabilities, add new tools, or update models - without you ever losing ownership.',
      highlights: [
        'First tool built and ready within 14 days - yours immediately',
        'Monthly updates and capability expansions on your schedule',
        'Add new AI models or custom training as your business grows',
        'Every addition is delivered with its full source code as well',
        'Ideal for: Growing teams, multi-tool AI environments',
      ],
      cta: 'Request Retainer Briefing',
      icon: <Zap className="h-6 w-6" />,
    },
  ];

  return (
    <div className="min-h-screen bg-white">
      <Helmet>
        <title>AI for Small Business | Local AI Apps Built for Real Teams | SecuNova Inc.</title>
        <meta name="description" content="SecuNova Inc. builds custom AI applications that run locally for small businesses in Calgary and across Canada. Private AI tools with local processing, no SaaS fees, and full IP ownership." />
        <meta name="keywords" content="AI for small business Calgary, local AI tools Canada, private AI apps Alberta, custom AI software small business, private AI assistants, no cloud AI processing" />
        <link rel="canonical" href="https://secunovainc.com/services/ai-for-small-business" />
        {buildSeoTags({
          title: 'AI for Small Business | Local AI Apps | SecuNova Inc.',
          description:
            'Custom AI applications built to run locally for small businesses. Private tools with local AI processing, no SaaS subscriptions, and full IP ownership. Serving Calgary and North America.',
          url: '/services/ai-for-small-business',
          imageAlt: 'SecuNova Inc. - AI for Small Business - Local AI Applications',
        })}

        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Service",
            "@id": "https://secunovainc.com/services/ai-for-small-business#service",
            "name": "AI for Small Business",
            "provider": { "@id": "https://secunovainc.com/#organization" },
            "areaServed": [
              { "@type": "City", "name": "Calgary" },
              { "@type": "State", "name": "Alberta" },
              { "@type": "Country", "name": "Canada" },
              { "@type": "Country", "name": "United States" }
            ],
            "url": "https://secunovainc.com/services/ai-for-small-business",
            "description": "Custom locally-executed AI applications built for small businesses. AI assistants, document intelligence tools, workflow automation, and productivity dashboards - all running privately on your hardware.",
            "serviceType": [
              "Custom AI Assistants",
              "Document Intelligence Tools",
              "Workflow Automation",
              "Team Productivity Dashboards",
              "Local AI Application Development"
            ],
            "offers": {
              "@type": "Offer",
              "priceCurrency": "CAD",
              "availability": "https://schema.org/InStock",
              "url": "https://secunovainc.com/services/ai-for-small-business"
            }
          })}
        </script>
      </Helmet>

      {/* ========================================
          Hero Section
          ======================================== */}
      <section className="relative min-h-[85vh] overflow-hidden flex items-center justify-center pt-36 sm:pt-44 pb-24 bg-secunova-dark text-white">
        <div className="absolute inset-0">
          <img
            src="https://images.pexels.com/photos/8386434/pexels-photo-8386434.jpeg?auto=compress&cs=tinysrgb&w=1920"
            alt="AI tools for small business - local AI applications"
            className="w-full h-full object-cover opacity-20"
            loading="eager"
            fetchPriority="high"
            decoding="async"
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
                  <Brain className="h-4 w-4 mr-2" />
                  AI for Small Business &nbsp;|&nbsp; macOS &amp; Windows
                </div>

                <h1 className="hero-heading mb-6 text-white">
                  <span className="block">AI Built for Small Business.</span>
                  <span className="block text-secunova-light mt-1">Runs on Your Machine. Zero Cloud.</span>
                </h1>

                <p className="text-lg md:text-xl text-blue-100/90 leading-relaxed mb-4 max-w-2xl font-normal">
                  We build locally-executed AI applications for small businesses and growing teams.
                </p>
                <p className="text-base text-blue-100/75 leading-relaxed mb-8 max-w-2xl font-normal">
                  Tools that help real teams work smarter - installed on your hardware, running privately, and handed over with full ownership. No SaaS. No data sent to cloud AI. No subscription fees.
                </p>

                <div className="flex flex-col sm:flex-row gap-4">
                  <Link to="/contact" className="btn btn-gradient btn-lg text-white">
                    Book a Discovery Call <ArrowRight className="ml-2 h-4 w-4 text-white" />
                  </Link>
                  <a href="tel:403-401-1552" className="btn btn-outline-light btn-lg text-white">
                    <Phone className="mr-2 h-4 w-4" /> 403-401-1552
                  </a>
                </div>
              </div>

              {/* Right Column: Metric Cards */}
              <div className="lg:col-span-5 grid grid-cols-2 gap-4">
                {[
                  { icon: <Shield className="h-8 w-8 text-secunova-light" />, stat: '100% Local', label: 'Runs On Your Hardware - Zero Cloud Required' },
                  { icon: <Lock className="h-8 w-8 text-secunova-blue" />, stat: 'Zero Cloud', label: 'Your Data Never Leaves Your Building' },
                  { icon: <DollarSign className="h-8 w-8 text-secunova-light" />, stat: 'Pay Once', label: 'No Monthly Fees. No Subscriptions. Ever.' },
                  { icon: <Package className="h-8 w-8 text-secunova-blue" />, stat: 'Mac + Win', label: 'Native Apps for macOS and Windows' },
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
          Cloud vs Local Comparison Strip
          ======================================== */}
      <section className="bg-white border-b border-gray-100 py-12 sm:py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-5xl mx-auto">
            <div className="text-center mb-10">
              <span className="text-xs font-bold uppercase tracking-widest text-slate-400 block mb-2">Why Local Execution Matters</span>
              <h2 className="text-2xl md:text-3xl font-bold text-secunova-dark">
                Cloud AI vs. <span className="bg-clip-text text-transparent bg-gradient-to-r from-secunova-blue to-secunova-light">Local AI</span>
              </h2>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-stretch">
              {/* Cloud AI - Red Card */}
              <div className="bg-white rounded-2xl border-2 border-red-200/90 shadow-sm hover:shadow-md transition-all duration-300 p-7 sm:p-8 flex flex-col justify-between h-full">
                <div>
                  <div className="mb-6 pb-6 border-b border-red-100">
                    <div className="w-14 h-14 rounded-2xl bg-red-100 flex items-center justify-center mb-4 shadow-sm">
                      <Wifi className="h-7 w-7 text-red-500" />
                    </div>
                    <div className="mb-1.5">
                      <span className="text-[10px] uppercase tracking-wider font-extrabold px-2.5 py-0.5 rounded bg-red-100 text-red-700 inline-block">
                        Generic Cloud Model
                      </span>
                    </div>
                    <h3 className="text-2xl font-bold text-secunova-dark leading-snug">Third-Party SaaS AI</h3>
                  </div>
                  <ul className="space-y-3.5">
                    {[
                      'Monthly or annual subscription - fees never stop compounding',
                      'Your business data processed and stored on third-party cloud servers',
                      'Generic model outputs not tailored to your specific operations',
                      'AI processing happens on remote servers - data is transmitted externally',
                      'Vendor controls pricing, feature access, and usage rate limits',
                      'Zero code ownership. No asset value. Permanent vendor lock-in.',
                    ].map((item, i) => (
                      <li key={i} className="flex items-start gap-3">
                        <div className="w-5 h-5 rounded-full bg-red-100 flex items-center justify-center flex-shrink-0 mt-0.5">
                          <X className="h-3 w-3 text-red-600 stroke-[3]" />
                        </div>
                        <span className="text-sm text-slate-700 leading-relaxed">{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              {/* Local AI - Blue Card */}
              <div className="bg-white rounded-2xl border-2 border-secunova-blue shadow-lg hover:shadow-xl transition-all duration-300 p-7 sm:p-8 flex flex-col justify-between h-full relative">
                <div>
                  <div className="mb-6 pb-6 border-b border-blue-100">
                    <div className="flex items-center justify-between mb-4">
                      <div className="w-14 h-14 rounded-2xl bg-secunova-blue/10 flex items-center justify-center shadow-sm">
                        <Shield className="h-7 w-7 text-secunova-blue" />
                      </div>
                      <span className="text-[10px] font-bold uppercase tracking-wider px-3 py-1 rounded-full bg-secunova-blue text-white shadow-sm">
                        Client Owned
                      </span>
                    </div>
                    <div className="mb-1.5">
                      <span className="text-[10px] uppercase tracking-wider font-extrabold px-2.5 py-0.5 rounded bg-blue-100 text-secunova-blue inline-block">
                        SecuNova Architecture
                      </span>
                    </div>
                    <h3 className="text-2xl font-bold text-secunova-dark leading-snug">Locally-Built AI Tools</h3>
                  </div>
                  <ul className="space-y-3.5">
                    {[
                      'One-time fixed build cost - zero recurring monthly subscriptions ever',
                      'All proprietary data stays on your machine - zero cloud leakage',
                      'Engineered specifically for your exact business workflows and terminology',
                      'AI inference runs locally on your hardware - no data sent to cloud AI APIs',
                      'Complete source code and all repository assets transferred to you',
                      'Zero vendor lock-in. No ongoing dependency on SecuNova to operate.',
                    ].map((item, i) => (
                      <li key={i} className="flex items-start gap-3">
                        <div className="w-5 h-5 rounded-full bg-blue-50 flex items-center justify-center flex-shrink-0 mt-0.5">
                          <CheckCircle className="h-4 w-4 text-secunova-blue flex-shrink-0" />
                        </div>
                        <span className="text-sm text-slate-800 font-medium leading-relaxed">{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>

            <div className="mt-8 bg-secunova-dark text-white rounded-2xl p-6 flex flex-col sm:flex-row items-center justify-between gap-5">
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 bg-secunova-light/15 rounded-xl flex items-center justify-center flex-shrink-0">
                  <Package className="h-6 w-6 text-secunova-light" />
                </div>
                <p className="text-sm text-blue-100/90 leading-relaxed">
                  <span className="font-bold text-white">Pay once. The application is fully yours.</span> No monthly subscriptions, no recurring fees. You receive the complete source code and all resources upon delivery - 100% ownership.
                </p>
              </div>
              <Link to="/contact" className="btn btn-gradient btn-md text-white whitespace-nowrap flex-shrink-0">
                Book a Call <ArrowRight className="ml-2 h-4 w-4 text-white" />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* ========================================
          Ownership Guarantee Strip
          ======================================== */}
      <section className="bg-gradient-to-r from-secunova-blue via-secunova-blue to-secunova-dark py-10 sm:py-12">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 text-white text-center">
              <div className="flex flex-col items-center gap-3">
                <div className="w-14 h-14 bg-white/15 rounded-2xl flex items-center justify-center">
                  <DollarSign className="h-7 w-7 text-white" />
                </div>
                <div className="text-2xl font-black">Pay Once</div>
                <p className="text-sm text-blue-100/85 leading-relaxed max-w-xs">
                  No monthly subscriptions. No annual fees. You pay once for the complete build.
                </p>
              </div>
              <div className="flex flex-col items-center gap-3 sm:border-x sm:border-white/20">
                <div className="w-14 h-14 bg-white/15 rounded-2xl flex items-center justify-center">
                  <Package className="h-7 w-7 text-white" />
                </div>
                <div className="text-2xl font-black">100% Ownership</div>
                <p className="text-sm text-blue-100/85 leading-relaxed max-w-xs">
                  The application is fully yours - complete source code, all resources, and documentation. No restrictions, no lock-in.
                </p>
              </div>
              <div className="flex flex-col items-center gap-3">
                <div className="w-14 h-14 bg-white/15 rounded-2xl flex items-center justify-center">
                  <Shield className="h-7 w-7 text-white" />
                </div>
                <div className="text-2xl font-black">No Lock-In</div>
                <p className="text-sm text-blue-100/85 leading-relaxed max-w-xs">
                  You do not need us to run your tool. It operates fully independently on your machine after handoff.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ========================================
          Pain Points Section
          ======================================== */}
      <section className="secunova-section bg-secunova-dark text-white relative overflow-hidden">
        <div className="absolute inset-0 opacity-5" style={{backgroundImage: 'linear-gradient(rgba(255,255,255,0.1) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.1) 1px, transparent 1px)', backgroundSize: '48px 48px'}}></div>
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-7xl mx-auto">
            <div className="text-center max-w-3xl mx-auto mb-14">
              <div className="inline-flex items-center bg-red-500/15 text-red-400 px-4 py-2 rounded-full text-xs font-bold uppercase tracking-widest mb-5">
                <AlertTriangle className="h-4 w-4 mr-2" />
                The Problem with Generic AI Tools
              </div>
              <h2 className="text-3xl md:text-5xl font-bold tracking-tight leading-tight mb-4">
                Why Most AI Tools <span className="text-red-400">Fail Small Business</span>
              </h2>
              <p className="text-blue-100/80 text-base md:text-lg leading-relaxed">
                Off-the-shelf AI platforms are built for enterprise volume, not the realities of a small or mid-sized operation. Here is what most small businesses discover too late.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {painPoints.map((point, i) => (
                <div key={i} className="bg-white/5 border border-white/10 rounded-2xl p-7 hover:bg-white/8 transition-all duration-300">
                  <div className={`w-12 h-12 ${point.bg} rounded-xl flex items-center justify-center ${point.color} mb-5`}>
                    {point.icon}
                  </div>
                  <h3 className="text-xl font-bold text-white mb-3">{point.title}</h3>
                  <p className="text-sm text-blue-100/75 leading-relaxed">{point.description}</p>
                </div>
              ))}
            </div>

            <div className="mt-12 bg-white/5 border border-white/10 rounded-2xl p-8 flex flex-col md:flex-row items-center justify-between gap-6">
              <div className="max-w-xl">
                <h3 className="text-xl font-bold text-white mb-2">There is a better approach.</h3>
                <p className="text-sm text-blue-100/80 leading-relaxed">We build AI tools that run entirely on your machine. Your data stays yours. No subscription. No cloud dependency. No compromise on privacy.</p>
              </div>
              <Link to="/contact" className="btn btn-gradient btn-lg text-white whitespace-nowrap flex-shrink-0">
                Let's Build Your Tool <ArrowRight className="ml-2 h-4 w-4 text-white" />
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
                <Sparkles className="h-4 w-4 mr-2" />
                What We Build
              </div>
              <h2 className="text-3xl md:text-5xl font-bold text-secunova-dark tracking-tight leading-tight">
                Modular Solutions &amp; <span className="bg-clip-text text-transparent bg-gradient-to-r from-secunova-blue to-secunova-light">Custom Client Applications</span>
              </h2>
              <p className="text-slate-700 text-base md:text-lg mt-4 leading-relaxed">
                Choose from our core private AI modules or commission a 100% custom-engineered local application built to your exact business requirements.
              </p>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-stretch">
              {serviceModules.map((group, i) => (
                <div 
                  key={i} 
                  id={group.number === '05' ? 'custom-apps' : undefined}
                  className={`group bg-white rounded-2xl border ${group.number === '05' ? 'border-2 border-secunova-blue shadow-lg lg:col-span-2' : 'border-gray-200 shadow-md'} hover:shadow-xl hover:-translate-y-1 transition-all duration-300 overflow-hidden flex flex-col justify-between h-full`}
                >
                  <div className="p-6 sm:p-8">
                    <div className="flex items-center justify-between mb-5">
                      <div className={`w-14 h-14 rounded-2xl flex items-center justify-center flex-shrink-0 ${group.accent === 'blue' ? 'bg-secunova-blue/10 text-secunova-blue' : 'bg-secunova-light/15 text-secunova-light'}`}>
                        {group.icon}
                      </div>
                      <div className="flex items-center gap-3">
                        {group.number === '05' && (
                          <span className="text-[10px] font-bold uppercase tracking-wider px-3 py-1 rounded-full bg-secunova-blue text-white shadow-sm">
                            Bespoke &amp; On-Demand
                          </span>
                        )}
                        <span className="text-3xl font-black text-gray-100 group-hover:text-secunova-blue/20 transition-colors">{group.number}</span>
                      </div>
                    </div>
                    <h3 className="text-xl sm:text-2xl font-bold text-secunova-dark mb-3 group-hover:text-secunova-blue transition-colors">{group.title}</h3>
                    <p className="text-sm text-slate-600 leading-relaxed mb-6 max-w-4xl">{group.description}</p>

                    <div className={`border-t border-gray-100 pt-5 space-y-4 ${group.number === '05' ? 'grid grid-cols-1 md:grid-cols-2 gap-4 space-y-0' : ''}`}>
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
                      <span>{group.number === '05' ? 'Request a Custom Application Scope Briefing' : 'Discuss This Tool for Your Business'}</span> <ChevronRight className="h-4 w-4" />
                    </Link>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ========================================
          Delivery Process
          ======================================== */}
      <section className="secunova-section bg-gradient-to-br from-secunova-dark via-gray-900 to-secunova-blue text-white relative overflow-hidden">
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-7xl mx-auto">
            <div className="text-center max-w-3xl mx-auto mb-16">
              <span className="text-xs font-bold uppercase tracking-widest text-secunova-light block mb-2">How It Works</span>
              <h2 className="text-3xl md:text-5xl font-bold tracking-tight mb-4">
                From Discovery to <span className="text-secunova-light">Full Ownership</span>
              </h2>
              <p className="text-blue-100/90 text-base md:text-lg leading-relaxed">
                A disciplined four-step process that goes from understanding your workflows to handing you a fully operational local AI tool - in 14 days.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {deliverySteps.map((phase, i) => (
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
                    <div className="text-[10px] uppercase tracking-widest text-white/40 font-semibold mb-0.5">Deliverable</div>
                    <div className="text-xs font-bold text-secunova-light">{phase.deliverable}</div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ========================================
          Portfolio Examples
          ======================================== */}
      <section className="secunova-section secunova-section--gray">
        <div className="container mx-auto px-4">
          <div className="max-w-7xl mx-auto">
            <div className="text-center max-w-3xl mx-auto mb-16">
              <div className="inline-flex items-center bg-secunova-blue/10 text-secunova-blue px-4 py-2 rounded-full text-xs font-bold uppercase tracking-widest mb-4">
                <Users className="h-4 w-4 mr-2" />
                Real Examples
              </div>
              <h2 className="text-3xl md:text-4xl font-bold text-secunova-dark tracking-tight leading-tight">
                Applications Built Under Our Oversight
              </h2>
              <p className="text-slate-600 text-base mt-4 leading-relaxed">
                These are real projects we have scoped, built, and delivered - each one running privately and owned entirely by the client.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-stretch">
              {portfolioExamples.map((item) => (
                <div key={item.id} className="bg-white rounded-2xl p-7 sm:p-8 border border-gray-200 shadow-md flex flex-col justify-between hover:shadow-xl transition-all duration-300 h-full">
                  <div>
                    <div className="flex items-center justify-between mb-4">
                      <span className="text-[10px] uppercase font-bold tracking-widest px-3 py-1 bg-secunova-light/15 text-secunova-light rounded-full">
                        {item.category}
                      </span>
                      <span className="text-xs font-mono text-slate-500">{item.year}</span>
                    </div>

                    <h3 className="text-xl font-bold text-secunova-dark mb-3 leading-snug">{item.name}</h3>
                    <p className="text-xs text-slate-600 leading-relaxed mb-6 min-h-[64px]">{item.summary}</p>

                    <div className="flex flex-wrap gap-2 mb-6 min-h-[38px] items-center">
                      {item.metrics.map((metric, idx) => (
                        <span
                          key={idx}
                          className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-slate-100 border border-slate-200/80 text-xs text-slate-700 whitespace-nowrap"
                        >
                          <strong className="font-bold text-secunova-dark font-mono">{metric.value}</strong>
                          <span className="text-slate-500 text-[11px] font-medium">{metric.label}</span>
                        </span>
                      ))}
                    </div>
                  </div>

                  <Link
                    to={`/about/our-work/${item.id}`}
                    className="btn btn-outline w-full justify-center text-xs uppercase tracking-wider font-bold py-3"
                  >
                    View Full Case Study <ArrowRight className="ml-2 h-4 w-4" />
                  </Link>
                </div>
              ))}
            </div>

            <div className="mt-10 text-center">
              <Link to="/about/our-work" className="btn btn-gradient btn-lg text-white">
                View All Projects <ArrowRight className="ml-2 h-4 w-4 text-white" />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* ========================================
          Tech Stack Section
          ======================================== */}
      <section id="tech-stack" className="secunova-section secunova-section--light">
        <div className="container mx-auto px-4">
          <div className="max-w-7xl mx-auto">
            <div className="text-center max-w-3xl mx-auto mb-16">
              <div className="inline-flex items-center bg-secunova-blue/10 text-secunova-blue px-4 py-2 rounded-full text-xs font-bold uppercase tracking-widest mb-4">
                <Cpu className="h-4 w-4 mr-2" />
                Technology Stack
              </div>
              <h2 className="text-3xl md:text-5xl font-bold text-secunova-dark tracking-tight leading-tight">
                Built With <span className="bg-clip-text text-transparent bg-gradient-to-r from-secunova-blue to-secunova-light">Production-Grade Tools</span>
              </h2>
              <p className="text-slate-700 text-base md:text-lg mt-4 leading-relaxed">
                Every local AI application we build uses a carefully chosen stack of open-source and battle-tested technologies - selected to run privately on your hardware with zero cloud dependencies.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 items-stretch">

              {/* AI Runtime */}
              <div className="bg-white rounded-2xl border border-gray-200 shadow-sm hover:shadow-lg transition-all duration-300 p-7 flex flex-col justify-between h-full">
                <div>
                  <div className="mb-5">
                    <div className="w-12 h-12 bg-purple-100 rounded-xl flex items-center justify-center mb-3.5 shadow-sm">
                      <Brain className="h-6 w-6 text-purple-600" />
                    </div>
                    <div className="mb-1">
                      <span className="text-[10px] uppercase tracking-wider font-extrabold px-2 py-0.5 rounded bg-purple-100 text-purple-700 inline-block">
                        Layer 01
                      </span>
                    </div>
                    <h3 className="text-lg font-bold text-secunova-dark leading-snug">Local AI Runtime</h3>
                  </div>
                  <p className="text-xs text-slate-500 leading-relaxed mb-5 min-h-[48px]">
                    The engine that runs large language models and AI inference entirely on your hardware - no API keys, no usage billing, no data transmitted to external AI services.
                  </p>
                  <div className="space-y-3">
                    {[
                      { name: 'Ollama', detail: 'Runs open-source LLMs locally (Mistral, LLaMA 3, Phi-3, Gemma) with a simple API interface' },
                      { name: 'LlamaCPP', detail: 'High-performance CPU/GPU inference for quantized models - ideal for business hardware without dedicated GPUs' },
                      { name: 'Mistral / LLaMA 3 / Phi-3', detail: 'Open-weight local LLMs selected per task: reasoning, document analysis, or lightweight Q&A' },
                      { name: 'Whisper (OpenAI - Local)', detail: 'Local speech-to-text for voice input and audio transcription with zero audio upload' },
                    ].map((tech, i) => (
                      <div key={i} className="flex items-start gap-2.5">
                        <CheckCircle className="h-4 w-4 text-purple-500 flex-shrink-0 mt-0.5" />
                        <div>
                          <span className="text-xs font-bold text-secunova-dark font-mono">{tech.name}</span>
                          <p className="text-[11px] text-slate-500 leading-relaxed mt-0.5">{tech.detail}</p>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              {/* AI Frameworks */}
              <div className="bg-white rounded-2xl border border-gray-200 shadow-sm hover:shadow-lg transition-all duration-300 p-7 flex flex-col justify-between h-full">
                <div>
                  <div className="mb-5">
                    <div className="w-12 h-12 bg-amber-100 rounded-xl flex items-center justify-center mb-3.5 shadow-sm">
                      <Workflow className="h-6 w-6 text-amber-600" />
                    </div>
                    <div className="mb-1">
                      <span className="text-[10px] uppercase tracking-wider font-extrabold px-2 py-0.5 rounded bg-amber-100 text-amber-700 inline-block">
                        Layer 02
                      </span>
                    </div>
                    <h3 className="text-lg font-bold text-secunova-dark leading-snug">AI Frameworks</h3>
                  </div>
                  <p className="text-xs text-slate-500 leading-relaxed mb-5 min-h-[48px]">
                    Orchestration frameworks that connect the LLM runtime to your documents, databases, and business workflows - all operating locally.
                  </p>
                  <div className="space-y-3">
                    {[
                      { name: 'LangChain', detail: 'Chain AI reasoning steps, RAG pipelines, and tool-calling agents into structured local workflows' },
                      { name: 'LlamaIndex', detail: 'Build local document indexes for fast retrieval over contracts, manuals, and internal knowledge bases' },
                      { name: 'ChromaDB / FAISS', detail: 'Local vector databases for semantic search - no Pinecone, no cloud vector store' },
                      { name: 'Hugging Face Transformers', detail: 'Run classification, summarization, and NER models locally from the open-source model library' },
                    ].map((tech, i) => (
                      <div key={i} className="flex items-start gap-2.5">
                        <CheckCircle className="h-4 w-4 text-amber-500 flex-shrink-0 mt-0.5" />
                        <div>
                          <span className="text-xs font-bold text-secunova-dark font-mono">{tech.name}</span>
                          <p className="text-[11px] text-slate-500 leading-relaxed mt-0.5">{tech.detail}</p>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              {/* Backend */}
              <div className="bg-white rounded-2xl border border-gray-200 shadow-sm hover:shadow-lg transition-all duration-300 p-7 flex flex-col justify-between h-full">
                <div>
                  <div className="mb-5">
                    <div className="w-12 h-12 bg-blue-100 rounded-xl flex items-center justify-center mb-3.5 shadow-sm">
                      <Settings className="h-6 w-6 text-secunova-blue" />
                    </div>
                    <div className="mb-1">
                      <span className="text-[10px] uppercase tracking-wider font-extrabold px-2 py-0.5 rounded bg-blue-100 text-secunova-blue inline-block">
                        Layer 03
                      </span>
                    </div>
                    <h3 className="text-lg font-bold text-secunova-dark leading-snug">Backend &amp; API Layer</h3>
                  </div>
                  <p className="text-xs text-slate-500 leading-relaxed mb-5 min-h-[48px]">
                    The server layer that processes business logic, manages your data locally, and exposes a private API to the frontend - all running on your machine or local network.
                  </p>
                  <div className="space-y-3">
                    {[
                      { name: 'Python', detail: 'Primary backend language for AI pipelines, document processing, automation scripts, and data workflows' },
                      { name: 'FastAPI', detail: 'High-performance local API server connecting the AI runtime to the frontend with async request handling' },
                      { name: 'SQLite / PostgreSQL', detail: 'Local database storage for application data, conversation history, and extracted document data' },
                      { name: 'Celery / APScheduler', detail: 'Local task queuing and scheduling for background automations and recurring AI jobs' },
                    ].map((tech, i) => (
                      <div key={i} className="flex items-start gap-2.5">
                        <CheckCircle className="h-4 w-4 text-secunova-blue flex-shrink-0 mt-0.5" />
                        <div>
                          <span className="text-xs font-bold text-secunova-dark font-mono">{tech.name}</span>
                          <p className="text-[11px] text-slate-500 leading-relaxed mt-0.5">{tech.detail}</p>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              {/* Desktop Apps */}
              <div className="bg-white rounded-2xl border-2 border-secunova-blue/20 shadow-md hover:shadow-lg transition-all duration-300 p-7 relative flex flex-col justify-between h-full">
                <div>
                  <div className="flex items-center justify-between mb-3.5">
                    <div className="w-12 h-12 bg-indigo-100 rounded-xl flex items-center justify-center shadow-sm">
                      <Package className="h-6 w-6 text-indigo-600" />
                    </div>
                    <div className="flex gap-1.5">
                      <span className="text-[10px] font-bold px-2.5 py-1 rounded-full bg-slate-900 text-white">macOS</span>
                      <span className="text-[10px] font-bold px-2.5 py-1 rounded-full bg-secunova-blue/90 text-white">Windows</span>
                    </div>
                  </div>
                  <div className="mb-5">
                    <div className="mb-1">
                      <span className="text-[10px] uppercase tracking-wider font-extrabold px-2 py-0.5 rounded bg-indigo-100 text-indigo-700 inline-block">
                        Layer 04
                      </span>
                    </div>
                    <h3 className="text-lg font-bold text-secunova-dark leading-snug">Desktop App Shell</h3>
                  </div>
                  <p className="text-xs text-slate-500 leading-relaxed mb-5 min-h-[48px]">
                    We build desktop applications that run natively on <strong className="text-secunova-dark">macOS and Windows</strong>. Installed on your machine like any standard application with fully local processing.
                  </p>
                  <div className="space-y-3">
                    {[
                      { name: 'Electron', detail: 'Cross-platform desktop app that runs on macOS and Windows from the same codebase - ships as .app on Mac and .exe on Windows' },
                      { name: 'Tauri', detail: 'Lightweight Rust-based alternative to Electron - smaller binary, lower memory footprint, faster startup on both platforms' },
                      { name: 'Swift / SwiftUI', detail: 'Native macOS applications with Core ML for Apple Silicon - direct on-device AI inference without any cloud calls' },
                      { name: 'PyInstaller / Nuitka', detail: 'Packages Python AI scripts into a standalone .exe for Windows or .app for Mac with no Python installation required' },
                    ].map((tech, i) => (
                      <div key={i} className="flex items-start gap-2.5">
                        <CheckCircle className="h-4 w-4 text-indigo-500 flex-shrink-0 mt-0.5" />
                        <div>
                          <span className="text-xs font-bold text-secunova-dark font-mono">{tech.name}</span>
                          <p className="text-[11px] text-slate-500 leading-relaxed mt-0.5">{tech.detail}</p>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              {/* Frontend UI */}
              <div className="bg-white rounded-2xl border border-gray-200 shadow-sm hover:shadow-lg transition-all duration-300 p-7 flex flex-col justify-between h-full">
                <div>
                  <div className="mb-5">
                    <div className="w-12 h-12 bg-cyan-100 rounded-xl flex items-center justify-center mb-3.5 shadow-sm">
                      <BarChart3 className="h-6 w-6 text-cyan-600" />
                    </div>
                    <div className="mb-1">
                      <span className="text-[10px] uppercase tracking-wider font-extrabold px-2 py-0.5 rounded bg-cyan-100 text-cyan-700 inline-block">
                        Layer 05
                      </span>
                    </div>
                    <h3 className="text-lg font-bold text-secunova-dark leading-snug">Frontend &amp; UI</h3>
                  </div>
                  <p className="text-xs text-slate-500 leading-relaxed mb-5 min-h-[48px]">
                    The interface your team interacts with daily - built for clarity and speed, served from localhost or packaged into the desktop app.
                  </p>
                  <div className="space-y-3">
                    {[
                      { name: 'React + TypeScript', detail: 'Component-based UI for chat interfaces, dashboards, and document review tools served locally from the FastAPI backend' },
                      { name: 'Vite', detail: 'Fast local development server and production bundler for React-based local web interfaces' },
                      { name: 'Recharts / Chart.js', detail: 'Local data visualization for productivity dashboards and business intelligence displays' },
                      { name: 'PDF.js / Mammoth', detail: 'Client-side document rendering for in-browser contract and document review without file upload' },
                    ].map((tech, i) => (
                      <div key={i} className="flex items-start gap-2.5">
                        <CheckCircle className="h-4 w-4 text-cyan-500 flex-shrink-0 mt-0.5" />
                        <div>
                          <span className="text-xs font-bold text-secunova-dark font-mono">{tech.name}</span>
                          <p className="text-[11px] text-slate-500 leading-relaxed mt-0.5">{tech.detail}</p>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              {/* Security and Privacy */}
              <div className="bg-white rounded-2xl border border-gray-200 shadow-sm hover:shadow-lg transition-all duration-300 p-7 flex flex-col justify-between h-full">
                <div>
                  <div className="mb-5">
                    <div className="w-12 h-12 bg-emerald-100 rounded-xl flex items-center justify-center mb-3.5 shadow-sm">
                      <Lock className="h-6 w-6 text-emerald-600" />
                    </div>
                    <div className="mb-1">
                      <span className="text-[10px] uppercase tracking-wider font-extrabold px-2 py-0.5 rounded bg-emerald-100 text-emerald-700 inline-block">
                        Layer 06
                      </span>
                    </div>
                    <h3 className="text-lg font-bold text-secunova-dark leading-snug">Security &amp; Privacy</h3>
                  </div>
                  <p className="text-xs text-slate-500 leading-relaxed mb-5 min-h-[48px]">
                    Every application is hardened to ensure data stays local, network access is restricted, and no telemetry or usage data is transmitted externally.
                  </p>
                  <div className="space-y-3">
                    {[
                      { name: 'AI Process Isolation', detail: 'The AI inference process runs in an isolated environment with no outbound calls to cloud AI APIs' },
                      { name: 'CryptoKit / Python cryptography', detail: 'Local encryption of sensitive stored data at rest using AES-256 with keys held only on your hardware' },
                      { name: 'Zero Telemetry Configuration', detail: 'All LLM tools configured with telemetry disabled and no model fingerprinting or usage reporting' },
                      { name: 'Local Auth (JWT / Session)', detail: 'Role-based access control for multi-user tools running on your local network without cloud identity providers' },
                    ].map((tech, i) => (
                      <div key={i} className="flex items-start gap-2.5">
                        <CheckCircle className="h-4 w-4 text-emerald-500 flex-shrink-0 mt-0.5" />
                        <div>
                          <span className="text-xs font-bold text-secunova-dark font-mono">{tech.name}</span>
                          <p className="text-[11px] text-slate-500 leading-relaxed mt-0.5">{tech.detail}</p>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>

            {/* Tech Badge Strip */}
            <div className="mt-12 bg-secunova-dark rounded-2xl p-8">
              <div className="text-center mb-6">
                <span className="text-xs font-bold uppercase tracking-widest text-secunova-light block mb-1">Full Stack at a Glance</span>
                <p className="text-sm text-blue-100/70">Every tool below runs 100% on your local hardware</p>
              </div>
              <div className="flex flex-wrap gap-2.5 justify-center">
                {[
                  'Ollama', 'LlamaCPP', 'Mistral', 'LLaMA 3', 'Phi-3', 'Whisper',
                  'Python', 'FastAPI', 'LangChain', 'LlamaIndex', 'ChromaDB', 'FAISS',
                  'React', 'TypeScript', 'Vite', 'Electron', 'Tauri', 'Swift',
                  'SwiftUI', 'Core ML', 'PyInstaller', 'SQLite', 'PostgreSQL',
                  'Hugging Face', 'PDF.js', 'Recharts', 'Celery'
                ].map((tech, i) => (
                  <span key={i} className="text-[11px] font-mono font-bold px-3 py-1.5 rounded-lg bg-white/10 text-blue-100 hover:bg-white/20 transition-colors cursor-default">
                    {tech}
                  </span>
                ))}
              </div>
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
                <Clock className="h-4 w-4 mr-2" />
                How to Engage
              </div>
              <h2 className="text-3xl md:text-5xl font-bold text-secunova-dark tracking-tight leading-tight">
                Built for Your Budget. <span className="bg-clip-text text-transparent bg-gradient-to-r from-secunova-blue to-secunova-light">Owned by You.</span>
              </h2>
              <p className="text-slate-700 text-base md:text-lg mt-4 leading-relaxed">
                Two straightforward engagement models - no lock-in, no hidden subscription layers. Choose what fits your current stage.
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

            <div className="mt-10 bg-gray-50 border border-gray-200 rounded-2xl p-6 sm:p-8 flex flex-col sm:flex-row items-center gap-6">
              <div className="w-12 h-12 bg-secunova-blue/10 rounded-xl flex items-center justify-center text-secunova-blue flex-shrink-0">
                <Shield className="h-6 w-6" />
              </div>
              <div className="flex-1">
                <h4 className="font-bold text-secunova-dark mb-1 text-lg">Both models include full IP ownership and local deployment.</h4>
                <p className="text-sm text-slate-600 leading-relaxed">Regardless of engagement model, you receive complete source code, local installation on your hardware, staff training, and no dependency on SecuNova to continue operating your tool.</p>
              </div>
              <Link to="/contact" className="btn btn-outline btn-md whitespace-nowrap flex-shrink-0">
                Ask a Question <ChevronRight className="ml-1 h-4 w-4" />
              </Link>
            </div>
          </div>
        </div>
      </section>

      <CtaSection />
    </div>
  );
};

export default AISmallBusinessPage;
