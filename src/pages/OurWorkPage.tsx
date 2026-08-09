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

const RND_PRODUCTS: Product[] = [
  {
    id: 'nova',
    name: 'Nova macOS AI Agent',
    tagline: 'Native macOS Intelligence for Autonomous Local Execution',
    badge: 'Flagship R&D',
    year: '2026',
    heroLabel: 'macOS AI Agent',
    pitch: 'Nova is a native macOS intelligence architecture engineered in Swift and Core ML. It executes desktop workflows locally on-device with zero cloud data transmission, reading screen context and orchestrating tasks securely.',
    outcomeStats: [
      { value: '100%', label: 'Local On-Device' },
      { value: '0 MB', label: 'Cloud Leakage' },
      { value: 'Swift', label: 'Core ML Native' },
    ],
    techStack: ['Swift', 'Core ML', 'AppleScript', 'macOS Accessibility API'],
  },
  {
    id: 'career-os',
    name: 'Career OS Engine',
    tagline: 'Automated Job Intelligence & Resume Tailoring Platform',
    badge: 'Career Automation',
    year: '2025',
    heroLabel: 'Career Intelligence Engine',
    pitch: 'Career OS is a client-side web engine built with Next.js and TypeScript. It parses job specifications, rewrites resume components for optimal ATS alignment, and manages data entirely within local browser storage.',
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
    badge: 'Security Suite',
    year: '2025',
    heroLabel: 'macOS Security Utility',
    pitch: 'SecuBoost is a native macOS utility engineered in SwiftUI and CryptoKit. Operating 100 percent offline with zero background telemetry, SecuBoost provides system optimization and AES-256 file vault encryption.',
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
    badge: 'Media Verification',
    year: '2025',
    heroLabel: 'Private AI Verification',
    pitch: 'A private AI content verification platform engineered for media organizations using Python, FastAPI, and LangChain. It audits source validity and detects synthetic media within air-gapped corporate networks.',
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
    badge: 'Revenue Tech',
    year: '2025',
    heroLabel: 'Sales Intelligence System',
    pitch: 'SecuNova Lead Finder is a self-hosted sales intelligence system engineered with Python, PostgreSQL, and Redis. It provides automated web extraction, contact enrichment, and verification without recurring SaaS fees.',
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
    badge: 'Civic EdTech',
    year: '2025',
    heroLabel: 'Civic Learning Platform',
    pitch: 'CanadaQuest is an AI-powered Canadian citizenship training platform built with Next.js, TypeScript, and Progressive Web App architecture. It offers adaptive exam simulations, full offline curriculum access, and WCAG AA compliance.',
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
        <title>Technical Track Record | SecuNova Inc. Calgary</title>
        <meta name="description" content="Explore enterprise software systems and internal R&amp;D platforms engineered under SecuNova Inc. technical leadership: Nova, Career OS, SecuBoost, and custom platforms." />
        <meta name="keywords" content="SecuNova R&amp;D, Nova macOS AI agent, Career OS, SecuBoost macOS, Journalism Audit Platform, SecuNova Lead Finder, CanadaQuest" />
        <link rel="canonical" href="https://secunovainc.com/about/our-work" />

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

      {/* Hero Header */}
      <section className="relative min-h-[85vh] overflow-hidden flex items-center justify-center pt-36 sm:pt-44 pb-24 bg-secunova-dark text-white">
        <div className="absolute inset-0">
          <img
            src="https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&w=1200&q=85"
            alt="SecuNova Technical Engineering Lab"
            className="w-full h-full object-cover opacity-20"
          />
          <div className="absolute inset-0 bg-gradient-to-br from-secunova-dark/95 via-secunova-dark/90 to-secunova-blue/80"></div>
        </div>

        <div className="container mx-auto px-4 relative z-10 w-full">
          <div className="max-w-4xl mx-auto text-center">
            <div className="inline-flex items-center bg-white/10 backdrop-blur-sm border border-white/20 px-5 py-2 rounded-full text-xs font-semibold uppercase tracking-widest text-secunova-light mb-6">
              <Code className="h-4 w-4 mr-2" />
              Supervised Technical Delivery
            </div>

            <h1 className="text-4xl sm:text-6xl font-bold tracking-tight mb-6 leading-tight">
              Engineered Under Our Leadership. <br />
              <span className="text-secunova-light">Delivered to Institutional Standards.</span>
            </h1>

            <p className="text-lg md:text-xl text-blue-100/90 max-w-3xl mx-auto leading-relaxed font-normal">
              A showcase of software platforms and internal technical systems architected, engineered, and brought to market under SecuNova's governance protocols and sub-second performance standards.
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
                Supervised Engineering Track Record
              </h2>
              <p className="text-slate-600 text-base">
                Six flagship digital platforms engineered under SecuNova's architectural oversight, technical governance, and PMaaS delivery discipline.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {RND_PRODUCTS.map((prod) => (
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

                    <div className="grid grid-cols-3 gap-2 py-4 border-y border-gray-100 mb-6 text-center">
                      {prod.outcomeStats.map((stat, idx) => (
                        <div key={idx}>
                          <div className="text-sm font-bold text-secunova-dark">{stat.value}</div>
                          <div className="text-[9px] text-slate-500 uppercase tracking-tight">{stat.label}</div>
                        </div>
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
                    to={`/our-work/${prod.id}`}
                    className="btn btn-outline w-full justify-center text-xs uppercase tracking-wider font-bold py-3"
                  >
                    Explore Architecture <ArrowRight className="ml-2 h-4 w-4" />
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
                Engineering Authority Applied to Advisory
              </span>
              <h2 className="text-2xl md:text-4xl font-bold mb-4 leading-tight">
                Advisory Rooted in Active System Engineering.
              </h2>
              <p className="text-blue-100/90 text-sm md:text-base leading-relaxed mb-8 font-normal">
                When SecuNova audits your technical estate or manages your vendor roadmaps, our guidance is informed by active engineering experience. We build native Swift applications, high-throughput Python NLP microservices, and client-side TypeScript engines in-house, giving us definitive technical authority.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Link to="/services/strategic-advisory-pmaas" className="btn btn-gradient btn-md text-white">
                  Explore Strategic Advisory <ArrowRight className="ml-2 h-4 w-4 text-white" />
                </Link>
                <Link to="/services/enterprise-audits" className="btn btn-outline-light btn-md text-white">
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
