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
  ArrowRight, Code
} from 'lucide-react';
import CtaSection from '../components/CtaSection';
import { buildSeoTags } from '../utils/seo-meta';
import SEOSchema from '../components/SEOSchema';

interface OutcomeStat {
  value: string;
  label: string;
}

interface Product {
  id: string;
  name: string;
  tagline: string;
  badge: string;
  year: string;
  heroLabel: string;
  pitch: string;
  outcomeStats: OutcomeStat[];
  techStack: string[];
}

const SUPERVISED_PROJECTS: Product[] = [
  {
    id: 'nova',
    name: 'Nova macOS AI Agent',
    tagline: 'Native macOS Intelligence for Autonomous Local Execution',
    badge: 'Supervised Delivery',
    year: '2026',
    heroLabel: 'macOS AI Agent',
    pitch: 'End-to-end project management oversight of a native macOS AI agent programme. SecuNova scoped the Swift and Core ML roadmap, supervised the engineering delivery, enforced milestone gates, and validated on-device execution with zero cloud data transfer.',
    outcomeStats: [
      { value: '100%', label: 'On-Device Delivery' },
      { value: '0 MB', label: 'Cloud Leakage' },
      { value: 'Swift', label: 'Core ML Stack' },
    ],
    techStack: ['Swift', 'Core ML', 'AppleScript', 'macOS Accessibility API'],
  },
  {
    id: 'career-os',
    name: 'Career OS Engine',
    tagline: 'Automated Job Intelligence & Resume Tailoring Platform',
    badge: 'PMaaS Oversight',
    year: '2025',
    heroLabel: 'Career Intelligence Engine',
    pitch: 'Independent project management for a client-side job intelligence engine built with Next.js and TypeScript. SecuNova governed the delivery vendor, audited ATS alignment logic, and gated every release behind verified quality benchmarks.',
    outcomeStats: [
      { value: '100%', label: 'Client-Side Privacy' },
      { value: '98%', label: 'ATS Alignment Score' },
      { value: 'IndexedDB', label: 'Local Storage' },
    ],
    techStack: ['Next.js', 'TypeScript', 'PDF.js', 'IndexedDB', 'Tailwind CSS'],
  },
  {
    id: 'secuboost',
    name: 'SecuBoost Security Suite',
    tagline: 'Native macOS System Utility & Security Architecture',
    badge: 'Supervised Delivery',
    year: '2025',
    heroLabel: 'macOS Security Utility',
    pitch: 'Project governance for a native macOS security suite delivered in SwiftUI and CryptoKit. SecuNova controlled scope, supervised the build team, and enforced zero-telemetry compliance through every delivery milestone.',
    outcomeStats: [
      { value: '100%', label: 'Offline Operation' },
      { value: 'AES-256', label: 'CryptoKit Vault' },
      { value: '0', label: 'Background Telemetry' },
    ],
    techStack: ['Swift', 'SwiftUI', 'CryptoKit', 'DiskArbitration', 'IOKit'],
  },
  {
    id: 'journalism-audit',
    name: 'Journalism Audit Platform',
    tagline: 'Private AI Content Verification & Editorial Integrity Platform',
    badge: 'Delivery Oversight',
    year: '2025',
    heroLabel: 'Private AI Verification',
    pitch: 'Delivery oversight for a private AI content-verification platform built on Python and FastAPI. SecuNova managed the engineering roadmap, audited air-gapped RAG pipelines, and enforced editorial-integrity requirements at each milestone.',
    outcomeStats: [
      { value: '0', label: 'Cloud Data Leakage' },
      { value: '85%', label: 'Faster Verification' },
      { value: 'Private RAG', label: 'Vector Pipeline' },
    ],
    techStack: ['Python', 'FastAPI', 'LangChain', 'Pinecone', 'Docker'],
  },
  {
    id: 'lead-finder',
    name: 'SecuNova Lead Finder',
    tagline: 'Privately Owned Sales Intelligence & Lead Discovery Engine',
    badge: 'PMaaS Oversight',
    year: '2025',
    heroLabel: 'Sales Intelligence System',
    pitch: 'Project management for a self-hosted sales intelligence system delivered with Python and PostgreSQL. SecuNova supervised the vendor build, verified data-ownership controls, and gated budget release against verified feature completion.',
    outcomeStats: [
      { value: '100%', label: 'Data Ownership' },
      { value: '$0', label: 'SaaS Seat Fees' },
      { value: 'PostgreSQL', label: 'Self-Hosted Engine' },
    ],
    techStack: ['Python', 'PostgreSQL', 'Redis', 'Playwright', 'FastAPI'],
  },
  {
    id: 'canadaquest',
    name: 'CanadaQuest',
    tagline: 'AI-Powered Canadian Citizenship Training Platform',
    badge: 'Delivery Governance',
    year: '2025',
    heroLabel: 'Civic Learning Platform',
    pitch: 'Governance and delivery management for an AI-powered citizenship training PWA built with Next.js and TypeScript. SecuNova oversaw accessibility compliance, offline architecture reviews, and milestone-gated release to production.',
    outcomeStats: [
      { value: '99+', label: 'Lighthouse Score' },
      { value: '100%', label: 'Offline PWA Access' },
      { value: 'WCAG AA', label: 'Accessibility Standard' },
    ],
    techStack: ['Next.js', 'TypeScript', 'PWA / Service Worker', 'IndexedDB'],
  },
];

const OurWorkPage = () => {
  return (
    <div className="min-h-screen bg-white">
      <Helmet>
        <title>Projects Under Our Project Management | SecuNova Inc. Calgary</title>
        <meta name="description" content="Technology initiatives delivered under SecuNova Inc. independent project management: Nova, Career OS, SecuBoost, and more, governed end-to-end under our PMaaS discipline." />
        <meta name="keywords" content="SecuNova PMaaS, project management Calgary, supervised delivery, Nova macOS AI agent, Career OS, SecuBoost macOS, Journalism Audit Platform, SecuNova Lead Finder, CanadaQuest" />
        <link rel="canonical" href="https://secunovainc.com/about/our-work" />
        {buildSeoTags({
          title: 'Projects Under Our Project Management | SecuNova Inc. Calgary',
          description:
            'Technology initiatives delivered under SecuNova Inc. independent project management: Nova, Career OS, SecuBoost, and more, governed end-to-end under our PMaaS discipline.',
          url: '/about/our-work',
          imageAlt: 'SecuNova Inc. - Supervised Track Record',
        })}

        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "BreadcrumbList",
            "itemListElement": [
              { "@type": "ListItem", "position": 1, "name": "Home", "item": "https://secunovainc.com" },
              { "@type": "ListItem", "position": 2, "name": "About", "item": "https://secunovainc.com/about" },
              { "@type": "ListItem", "position": 3, "name": "Our Work", "item": "https://secunovainc.com/about/our-work" }
            ]
          })}
        </script>
      </Helmet>
      <SEOSchema
        type="webpage"
        data={{
          title: 'Projects Under Our Project Management | SecuNova Inc. Calgary',
          description:
            'Technology initiatives delivered under SecuNova Inc. independent project management: Nova, Career OS, SecuBoost, and more, governed end-to-end under our PMaaS discipline.',
          url: 'https://secunovainc.com/about/our-work',
        }}
      />

      {/* Hero Header */}
      <section className="relative min-h-[85vh] overflow-hidden flex items-center justify-center pt-36 sm:pt-44 pb-24 bg-secunova-dark text-white">
        <div className="absolute inset-0">
          <img
            src="https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&w=1200&q=85"
            alt="SecuNova project management delivery oversight"
            className="w-full h-full object-cover opacity-20"
          />
          <div className="absolute inset-0 bg-gradient-to-br from-secunova-dark/95 via-secunova-dark/90 to-secunova-blue/80"></div>
        </div>

        <div className="container mx-auto px-4 relative z-10 w-full">
          <div className="max-w-4xl mx-auto text-center">
            <div className="inline-flex items-center bg-white/10 backdrop-blur-sm border border-white/20 px-5 py-2 rounded-full text-xs font-semibold uppercase tracking-widest text-secunova-light mb-6">
              <Code className="h-4 w-4 mr-2" />
              Independent Project Management
            </div>

            <h1 className="hero-heading mb-6 text-white">
              <span className="block">Oversaw as Project Managers.</span>
              <span className="block text-secunova-light mt-1">Delivered to Institutional Standards.</span>
            </h1>

            <p className="text-lg md:text-xl text-blue-100/90 max-w-3xl mx-auto leading-relaxed font-normal">
              A track record of technology initiatives delivered under SecuNova's independent project management, governing scope, vendors, milestones, budgets, and quality for every engagement we supervise.
            </p>
          </div>
        </div>
      </section>

      {/* R&D Flagship Showcase */}
      <section className="secunova-section secunova-section--gray">
        <div className="container mx-auto px-4">
          <div className="max-w-7xl mx-auto">
            <div className="text-center max-w-3xl mx-auto mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-secunova-dark mb-4 tracking-tight">
                Projects Delivered Under Our Project Management
              </h2>
              <p className="text-slate-600 text-base">
                Six technology initiatives governed end-to-end under SecuNova's PMaaS discipline: independent oversight, vendor accountability, milestone-gated delivery, and total IP protection.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {SUPERVISED_PROJECTS.map((prod) => (
                <div key={prod.id} className="bg-white rounded-2xl p-8 border border-gray-200 shadow-md flex flex-col justify-between hover:shadow-xl transition-all duration-300">
                  <div>
                    <div className="flex items-center justify-between mb-4">
                      <span className="text-[10px] uppercase font-bold tracking-widest px-3 py-1 bg-secunova-blue/10 text-secunova-blue rounded-full">
                        {prod.badge}
                      </span>
                      <span className="text-xs font-mono text-slate-500">{prod.year}</span>
                    </div>

                    <h3 className="text-2xl font-bold text-secunova-dark mb-2">{prod.name}</h3>
                    <p className="text-xs font-semibold text-secunova-blue mb-4">{prod.tagline}</p>
                    <p className="text-xs text-slate-600 leading-relaxed mb-6">{prod.pitch}</p>

                    <div className="flex flex-wrap gap-2 mb-5 items-center">
                      {prod.outcomeStats.map((stat, idx) => (
                        <span
                          key={idx}
                          className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-slate-100 border border-slate-200/80 text-xs text-slate-700 whitespace-nowrap"
                        >
                          <strong className="font-bold text-secunova-dark font-mono">{stat.value}</strong>
                          <span className="text-slate-500 text-[11px] font-medium">{stat.label}</span>
                        </span>
                      ))}
                    </div>

                    <div className="flex flex-wrap gap-1.5 mb-6">
                      {prod.techStack.map((tech, idx) => (
                        <span key={idx} className="text-[10px] bg-gray-100 text-slate-700 px-2.5 py-1 rounded font-mono font-medium">
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>

                  <Link
                    to={`/about/our-work/${prod.id}`}
                    className="btn btn-outline w-full justify-center text-xs uppercase tracking-wider font-bold py-3"
                  >
                    View Case Study <ArrowRight className="ml-2 h-4 w-4" />
                  </Link>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Advisory & Engineering Synergy */}
      <section className="secunova-section secunova-section--light">
        <div className="container mx-auto px-4">
          <div className="max-w-5xl mx-auto bg-secunova-dark text-white rounded-3xl p-8 md:p-12 border border-white/10 shadow-2xl">
            <div className="max-w-3xl">
              <span className="text-xs font-bold uppercase tracking-widest text-secunova-light block mb-3">
                PM Experience Applied to Advisory
              </span>
              <h2 className="text-2xl md:text-4xl font-bold mb-4 leading-tight">
                Advisory Rooted in Live Project Governance.
              </h2>
              <p className="text-blue-100/90 text-sm md:text-base leading-relaxed mb-8 font-normal">
                When SecuNova audits your technical estate or manages your vendor roadmaps, our guidance is informed by hands-on project management experience. We have supervised the delivery of native Swift applications, high-throughput Python NLP microservices, and client-side TypeScript engines under our PMaaS model, giving us definitive technical authority to audit and govern third-party delivery.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Link to="/services/strategic-advisory-pmaas" className="btn btn-gradient btn-md text-white">
                  Explore Strategic Advisory <ArrowRight className="ml-2 h-4 w-4 text-white" />
                </Link>
                <Link to="/services/enterprise-it-security-audits" className="btn btn-outline-light btn-md text-white">
                  Explore Forensic Audits
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      <CtaSection />
    </div>
  );
};

export default OurWorkPage;
