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
    name: 'Nova',
    tagline: 'Native macOS AI Agent for Autonomous Local Execution',
    badge: 'Flagship R&D',
    year: '2026',
    heroLabel: 'macOS AI Agent',
    pitch: 'Nova is a native macOS AI agent engineered in Swift and Core ML. It executes desktop workflows locally on device with zero cloud data transfer, reading screen context, orchestrating application tasks, and managing system assets securely.',
    outcomeStats: [
      { value: '100%', label: 'Local Execution' },
      { value: '0 MB', label: 'Cloud Data Transfer' },
      { value: 'Swift', label: 'Core ML Native' },
    ],
    techStack: ['Swift', 'Core ML', 'AppleScript', 'macOS Accessibility API'],
  },
  {
    id: 'career-os',
    name: 'Career OS',
    tagline: 'Automated Job Search & ATS Resume Tailoring System',
    badge: 'Career Automation',
    year: '2025',
    heroLabel: 'Career Intelligence Engine',
    pitch: 'Career OS is an automated job search and ATS resume tailoring system built with Next.js and TypeScript. It parses job specifications, rewrites resume components for optimal ATS matching, and tracks applications entirely client-side.',
    outcomeStats: [
      { value: '100%', label: 'Client-Side Data Privacy' },
      { value: '98%', label: 'ATS Compatibility Score' },
      { value: 'IndexedDB', label: 'Local Persistence' },
    ],
    techStack: ['Next.js', 'TypeScript', 'PDF.js', 'IndexedDB', 'Tailwind CSS'],
  },
  {
    id: 'secuboost',
    name: 'SecuBoost',
    tagline: 'Native macOS Performance & Security Suite',
    badge: 'Security Suite',
    year: '2025',
    heroLabel: 'macOS Security Utility',
    pitch: 'SecuBoost is a native macOS performance and security suite engineered in SwiftUI and CryptoKit. Operating 100 percent offline with zero telemetry, SecuBoost provides system optimization, AES-256 file vault encryption, and real-time resource diagnostics.',
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
    pitch: 'A private AI content verification platform engineered for news organizations using Python, FastAPI, and LangChain. It audits source validity, detects synthetic media, and enforces editorial integrity within an air-gapped corporate network.',
    outcomeStats: [
      { value: '0', label: 'External Cloud Leakage' },
      { value: '85%', label: 'Faster Verification' },
      { value: 'RAG', label: 'Private Vector Pipeline' },
    ],
    techStack: ['Python', 'FastAPI', 'LangChain', 'Pinecone', 'Docker'],
  },
  {
    id: 'lead-finder',
    name: 'SecuNova Lead Finder',
    tagline: 'Privately Owned Sales Intelligence & Lead Discovery System',
    badge: 'Revenue Tech',
    year: '2025',
    heroLabel: 'Sales Intelligence System',
    pitch: 'SecuNova Lead Finder is a privately owned sales intelligence system engineered with Python, PostgreSQL, and Redis. It provides automated web extraction, contact data enrichment, and prospect verification without recurring SaaS seat fees.',
    outcomeStats: [
      { value: '100%', label: 'Data Ownership' },
      { value: '$0', label: 'Third-Party SaaS Fees' },
      { value: 'PostgreSQL', label: 'Self-Hosted Data Lake' },
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
    pitch: 'CanadaQuest is an AI-powered Canadian citizenship training platform built with Next.js, TypeScript, and Progressive Web App (PWA) architecture. It offers adaptive exam simulations, full offline curriculum access, and WCAG AA accessibility.',
    outcomeStats: [
      { value: '99+', label: 'Lighthouse Rating' },
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
        <title>Our Work. Engineered by SecuNova | Proprietary R&amp;D Portfolio</title>
        <meta name="description" content="Explore proprietary software engineered end to end by SecuNova: Nova, Career OS, SecuBoost, Journalism Audit Platform, SecuNova Lead Finder, and CanadaQuest." />
        <meta name="keywords" content="SecuNova R&amp;D, Nova macOS AI agent, Career OS, SecuBoost macOS, Journalism Audit Platform, SecuNova Lead Finder, CanadaQuest, proprietary software Canada" />
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
      <section className="relative min-h-[70vh] overflow-hidden flex items-center justify-center pt-32 sm:pt-36 pb-16 bg-secunova-dark text-white">
        <div className="absolute inset-0">
          <img
            src="https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&w=1200&q=85"
            alt="SecuNova Internal R&D Lab"
            className="w-full h-full object-cover opacity-20"
          />
          <div className="absolute inset-0 bg-gradient-to-br from-secunova-dark/95 via-secunova-dark/90 to-secunova-blue/80"></div>
        </div>

        <div className="container mx-auto px-4 relative z-10 w-full">
          <div className="max-w-4xl mx-auto text-center">
            <div className="inline-flex items-center bg-white/10 backdrop-blur-sm border border-white/20 px-6 py-2.5 rounded-full text-xs font-bold uppercase tracking-widest text-secunova-light mb-6">
              <Code className="h-4 w-4 mr-2" />
              Engineered &amp; Delivered Under Our Leadership
            </div>

            <h1 className="hero-heading mb-6">
              Our Work. <br />
              <span className="text-secunova-light">Engineered by SecuNova.</span>
            </h1>

            <p className="text-lg md:text-xl text-blue-100 max-w-3xl mx-auto leading-relaxed">
              A showcase of elite software systems and digital platforms engineered, architected, and successfully brought to market under SecuNova's direct technical standards and strategic stewardship - proving our unmatched technical mastery.
            </p>

          </div>
        </div>
      </section>

      {/* R&D Flagship Showcase */}
      <section className="secunova-section secunova-section--gray">
        <div className="container mx-auto px-4">
          <div className="max-w-7xl mx-auto">
            <div className="text-center max-w-3xl mx-auto mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-secunova-dark mb-4">
                Track Record of Supervised Delivery
              </h2>
              <p className="text-secunova-dark/70 text-base">
                Six flagship software platforms engineered and delivered under SecuNova's technical governance, architecture oversight, and PMaaS discipline.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {RND_PRODUCTS.map((prod) => (
                <div key={prod.id} className="bg-white rounded-2xl p-8 border border-gray-200 shadow-lg flex flex-col justify-between hover:shadow-xl transition-all">
                  <div>
                    <div className="flex items-center justify-between mb-4">
                      <span className="text-[10px] uppercase font-bold tracking-widest px-3 py-1 bg-secunova-blue/10 text-secunova-blue rounded-full">
                        {prod.badge}
                      </span>
                      <span className="text-xs font-mono text-gray-500">{prod.year}</span>
                    </div>

                    <h3 className="text-2xl font-bold text-secunova-dark mb-2">{prod.name}</h3>
                    <p className="text-xs font-semibold text-secunova-blue mb-4">{prod.tagline}</p>
                    <p className="text-xs text-secunova-dark/70 leading-relaxed mb-6">{prod.pitch}</p>

                    <div className="grid grid-cols-3 gap-2 py-4 border-y border-gray-100 mb-6 text-center">
                      {prod.outcomeStats.map((stat, idx) => (
                        <div key={idx}>
                          <div className="text-sm font-bold text-secunova-dark">{stat.value}</div>
                          <div className="text-[9px] text-gray-500 uppercase tracking-tight">{stat.label}</div>
                        </div>
                      ))}
                    </div>

                    <div className="flex flex-wrap gap-1.5 mb-6">
                      {prod.techStack.map((tech, idx) => (
                        <span key={idx} className="text-[10px] bg-gray-100 text-gray-700 px-2.5 py-1 rounded font-mono font-medium">
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>

                  <Link
                    to={`/our-work/${prod.id}`}
                    className="btn btn-outline w-full justify-center text-xs uppercase tracking-wider"
                  >
                    Explore Technical Specs <ArrowRight className="ml-2 h-4 w-4" />
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
                Why R&amp;D Matters to Our Advisory Clients
              </span>
              <h2 className="text-2xl md:text-4xl font-bold mb-4 leading-tight">
                Advisory Grounded in Production Engineering.
              </h2>
              <p className="text-blue-100 text-sm md:text-base leading-relaxed mb-6">
                When SecuNova audits your infrastructure or manages your vendor roadmaps, our advice is backed by hands-on engineering experience. We build native Swift applications, high-throughput Python NLP microservices, and client-side TypeScript engines in-house, giving us unmatched technical insight when scrutinizing vendor claims.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Link to="/services/strategic-advisory-pmaas" className="btn btn-gradient btn-md">
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
