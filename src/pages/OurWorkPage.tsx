import React, { useState } from 'react';
import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';
import {
  ArrowLeft, ArrowRight, ArrowUpRight, X, ExternalLink, Download,
  Shield, Cpu, Globe, Zap, Lock, BarChart2,
  FileText, Search, BookOpen, Layout, Users, Database,
  Star, Settings, CheckCircle2, TrendingUp,
  Briefcase, Target, Code
} from 'lucide-react';
import { getDownloadCount, incrementDownloadCount } from '../utils/downloadTracker';

/* ─── Product data pulled from secunova.ca source ─── */

interface OutcomeStat {
  value: string;
  label: string;
}

interface ProductFeature {
  icon: React.ReactNode;
  title: string;
  desc: string;
}

interface Product {
  id: string;
  name: string;
  tagline: string;
  category: 'own' | 'client';
  badge?: string;
  year: string;
  heroLabel: string;
  pitch: string;
  challenge: string;
  solution: string;
  outcome: string;
  outcomeStats: OutcomeStat[];
  features: ProductFeature[];
  techStack: string[];
  externalLink?: string;
  downloadUrl?: string;
  downloadCount?: string;
  downloadLabel?: string;
  version?: string;
  fileSize?: string;
  testimonial?: { quote: string; name: string; role: string };
}

const OWN_PRODUCTS: Product[] = [
  {
    id: 'nova',
    name: 'Nova',
    tagline: 'Your computer. Your rules. Your agent.',
    category: 'own',
    year: '2026',
    heroLabel: 'macOS AI Agent',
    pitch: 'Nova is a native macOS AI agent that reads your screen, controls your mouse and keyboard, manages your files, and handles your email. One purchase, yours forever.',
    challenge: 'Most AI automation tools are cloud-dependent subscription services that send your commands, keystrokes, and file contents to remote servers. Power users and privacy-conscious professionals are left choosing between convenience and control.',
    solution: 'Nova runs entirely on your machine. It uses sandboxed local model inference for fast, lightweight tasks and carefully gated API calls for complex ones, with zero persistent logging and no data leaving your device.',
    outcome: 'Users who switched to Nova from cloud-based automation tools reported complete confidence in their data privacy, a single lifetime cost that eliminated recurring subscriptions, and automation capabilities that matched or exceeded what they had before.',
    outcomeStats: [
      { value: '100%', label: 'Local Execution' },
      { value: '0', label: 'Data Sent to Cloud' },
      { value: '1', label: 'Payment. Own It Forever.' },
    ],
    features: [
      { icon: <Shield className="h-5 w-5" />, title: 'Zero Cloud Dependency', desc: 'Every keystroke, command, and file interaction stays on your machine. No remote servers. No subscription required.' },
      { icon: <Cpu className="h-5 w-5" />, title: 'Local Model Inference', desc: 'On-device inference for lightweight tasks: instant response, no latency, no API calls for simple automation.' },
      { icon: <Lock className="h-5 w-5" />, title: 'Secure Context Gates', desc: 'Before any sensitive action is taken, Nova presents a confirmation gate. Nothing runs without your approval.' },
      { icon: <Zap className="h-5 w-5" />, title: 'Natural Language Control', desc: 'Describe what you want in plain English. Nova handles clicking, typing, file management, and email.' },
      { icon: <Globe className="h-5 w-5" />, title: 'Browser Automation', desc: 'Navigate websites, fill forms, extract content, and automate repetitive browser workflows.' },
      { icon: <Settings className="h-5 w-5" />, title: 'Offline Fallback Mode', desc: 'No internet? Nova still works. Core automation features are available entirely offline.' },
    ],
    techStack: ['Swift', 'Core ML', 'AppleScript', 'Gemini API', 'macOS Accessibility API'],
  },
  {
    id: 'career-os',
    name: 'Career OS',
    tagline: 'Your job search, engineered.',
    category: 'own',
    year: '2026',
    heroLabel: 'Tactical Career Automation',
    pitch: 'Career OS automates the most time-consuming parts of your job search. It tailors your resume to every job posting, scores it for ATS compatibility, and tracks your applications, all running client-side with no accounts required.',
    challenge: 'Job seekers spend hours manually tailoring resumes for each role, only to have them rejected by Applicant Tracking Systems before a human ever reads them.',
    solution: 'Career OS runs entirely in the browser: no servers, no accounts, no data collection. It parses job descriptions locally, rewrites your resume against the posting keywords, and gives you an ATS compatibility score.',
    outcome: 'Users report spending 80% less time per application while seeing a measurable improvement in callback rates.',
    outcomeStats: [
      { value: '80%', label: 'Less Time Per Application' },
      { value: '3', label: 'More Callbacks on Average' },
      { value: '0', label: 'Accounts or Subscriptions' },
    ],
    features: [
      { icon: <FileText className="h-5 w-5" />, title: 'Local Resume Parser', desc: 'Upload your resume once. Career OS parses it locally and creates a structured profile for every application.' },
      { icon: <Search className="h-5 w-5" />, title: 'JD Keyword Extraction', desc: 'Paste any job description. Career OS identifies the top keywords the ATS will scan for.' },
      { icon: <CheckCircle2 className="h-5 w-5" />, title: 'ATS Score & Gap Analysis', desc: 'Get an instant compatibility score and a list of missing keywords before you apply.' },
      { icon: <TrendingUp className="h-5 w-5" />, title: 'Multi-Version Sync', desc: 'Maintain multiple resume versions for different roles and keep them synchronized.' },
      { icon: <Lock className="h-5 w-5" />, title: '100% Client-Side', desc: 'Your CV, your data. Nothing is sent to a server. Everything runs in your browser.' },
      { icon: <Layout className="h-5 w-5" />, title: 'Application Tracker', desc: 'Track every application with status, notes, and follow-up dates, stored locally.' },
    ],
    techStack: ['Next.js', 'TypeScript', 'PDF.js', 'IndexedDB', 'Gemini API'],
  },
  {
    id: 'secuboost',
    name: 'SecuBoost',
    tagline: 'A leaner, faster Mac. No strings attached.',
    category: 'own',
    year: '2026',
    heroLabel: 'macOS Performance Suite',
    pitch: 'SecuBoost is a native macOS performance and security suite. It cleans your system, monitors your resources in real time, and protects your sensitive files, all running 100% offline with no telemetry and no subscriptions.',
    challenge: 'Mac cleanup and security tools are almost universally subscription-based, collect usage analytics, or rely on outdated heuristics that flag harmless files and miss real threats.',
    solution: 'SecuBoost was written from scratch in Swift with a strict zero-network policy. Every feature runs in a sandboxed local process. The file vault uses AES-256 encryption. No analytics, no phone-home, no recurring charges.',
    outcome: 'SecuBoost users get a measurably faster Mac without handing their usage data to a third party or paying monthly fees.',
    outcomeStats: [
      { value: '0', label: 'Telemetry or Tracking' },
      { value: '1', label: 'Payment. No Subscription.' },
      { value: '100%', label: 'Offline Operation' },
    ],
    features: [
      { icon: <Zap className="h-5 w-5" />, title: 'Intelligent App Cleaner', desc: 'Removes genuine junk: caches, logs, orphaned app data, using macOS system APIs.' },
      { icon: <Lock className="h-5 w-5" />, title: 'AES-256 File Vault', desc: 'Encrypt sensitive files with military-grade encryption. The vault never touches a cloud.' },
      { icon: <BarChart2 className="h-5 w-5" />, title: 'Real-Time Resource Monitor', desc: 'Live CPU, RAM, and disk dashboards that update in real time.' },
      { icon: <Shield className="h-5 w-5" />, title: 'Zero Network Policy', desc: 'SecuBoost never makes an outbound network request. No server to compromise, no data to leak.' },
      { icon: <Settings className="h-5 w-5" />, title: 'Startup Manager', desc: 'See and control exactly which apps launch at login. Reclaim boot speed and battery life.' },
      { icon: <Cpu className="h-5 w-5" />, title: 'Native Swift Performance', desc: 'Built in Swift with native macOS APIs, not a web wrapper. Runs instantly, uses minimal resources.' },
    ],
    techStack: ['Swift', 'SwiftUI', 'CryptoKit', 'DiskArbitration', 'IOKit'],
    downloadUrl: 'https://drive.google.com/file/d/1rkkI6cI-Djd3Ti5nvfkhERgyLdQpRW9-/view?usp=sharing',
    downloadCount: '1,420+',
    downloadLabel: 'Download SecuBoost for macOS',
    version: 'v1.0.0 Pro',
    fileSize: '14.2 MB',
  },
  {
    id: 'journalism-audit',
    name: 'Journalism Audit Platform',
    tagline: 'Content verification built for media that can\'t afford to be wrong.',
    category: 'own',
    year: '2026',
    heroLabel: 'Enterprise AI Platform',
    pitch: 'A private AI platform designed for media organizations that need to verify content, detect fabricated sources, and audit editorial integrity without exposing sensitive stories to public AI models.',
    challenge: 'Newsrooms are under pressure to verify content faster while facing unprecedented levels of synthetic media, fabricated quotes, and AI-generated misinformation.',
    solution: 'The platform runs on a private deployment with air-gapped model gates. Editorial content is processed locally using a RAG pipeline connected to verified source databases: no unpublished material ever leaves the newsroom\'s network.',
    outcome: 'The platform reduced the manual verification time for complex stories from hours to minutes, with no data exposure risk.',
    outcomeStats: [
      { value: '0', label: 'Cloud Exposure of Private Content' },
      { value: '85%', label: 'Faster Verification Workflow' },
      { value: '100%', label: 'Privately Hosted & Controlled' },
    ],
    features: [
      { icon: <Shield className="h-5 w-5" />, title: 'Air-Gapped Model Gates', desc: 'All content is processed within the newsroom\'s own infrastructure. No unpublished material touches a public API.' },
      { icon: <Search className="h-5 w-5" />, title: 'Forensic Source Verification', desc: 'Cross-references claims against a curated database of verified sources and flags unverifiable assertions.' },
      { icon: <FileText className="h-5 w-5" />, title: 'Synthetic Media Detection', desc: 'Identifies AI-generated text, fabricated quotes, and manipulated images before they reach publication.' },
      { icon: <Database className="h-5 w-5" />, title: 'Private RAG Pipeline', desc: 'A Retrieval-Augmented Generation pipeline trained on the newsroom\'s own source library.' },
      { icon: <FileText className="h-5 w-5" />, title: 'Compliance Audit Logs', desc: 'Every verification check is logged with timestamp, source reference, and confidence score.' },
      { icon: <Lock className="h-5 w-5" />, title: 'Zero External API Exposure', desc: 'Sensitive stories, sources, and editorial decisions never leave the newsroom\'s controlled environment.' },
    ],
    techStack: ['Python', 'FastAPI', 'LangChain', 'Pinecone', 'Docker', 'Gemini Pro'],
  },
  {
    id: 'lead-finder',
    name: 'SecuNova Lead Finder',
    tagline: 'Sales intelligence you actually own.',
    category: 'own',
    year: '2026',
    heroLabel: 'Proprietary Revenue Intelligence Engine',
    pitch: 'A custom-built lead discovery system that moves your entire sales intelligence pipeline into a privately owned environment: eliminating SaaS subscription costs and putting your company data under your control.',
    challenge: 'Sales teams pay thousands of dollars monthly to SaaS platforms that provide lead data they don\'t own, can\'t customize, and can\'t take with them when they cancel.',
    solution: 'Lead Finder is a self-hosted system built on a private data lake. It scrapes, enriches, and stores lead data in your own infrastructure using decoupled scraper modules that you can customize.',
    outcome: 'Companies that deployed Lead Finder eliminated their dependency on expensive SaaS lead databases and gained permanent ownership of a growing, enriched lead dataset.',
    outcomeStats: [
      { value: '0', label: 'Monthly SaaS Fees' },
      { value: '100%', label: 'Data Ownership' },
      { value: '∞', label: 'Scalable With No Per-Seat Cost' },
    ],
    features: [
      { icon: <Database className="h-5 w-5" />, title: 'Private Data Lake', desc: 'All lead data is stored in a self-hosted database you control. Cancel nothing, lose nothing.' },
      { icon: <Search className="h-5 w-5" />, title: 'Decoupled Scraper Modules', desc: 'Modular scraping architecture lets you target specific industries, job titles, and geographies.' },
      { icon: <TrendingUp className="h-5 w-5" />, title: 'Lead Enrichment Pipeline', desc: 'Automatically enriches raw lead data with company size, industry, tech stack, and contact details.' },
      { icon: <BarChart2 className="h-5 w-5" />, title: 'CRM Export Ready', desc: 'Export enriched lead lists directly to your CRM in any format: no middleware required.' },
      { icon: <Shield className="h-5 w-5" />, title: 'Compliance-Safe Collection', desc: 'Built to collect only publicly available data with configurable rate limiting and source attribution.' },
      { icon: <Zap className="h-5 w-5" />, title: 'Real-Time Discovery', desc: 'Trigger lead discovery on-demand or on a scheduled basis: new leads added continuously.' },
    ],
    techStack: ['Python', 'PostgreSQL', 'Redis', 'Playwright', 'FastAPI', 'Docker'],
  },
  {
    id: 'canadaquest',
    name: 'CanadaQuest',
    tagline: 'The citizenship exam, reimagined.',
    category: 'own',
    year: '2026',
    heroLabel: 'Civic Intelligence Platform',
    pitch: 'CanadaQuest transforms the standard Canadian citizenship training experience into a modern, AI-powered learning hub. Practice exams, study guides, and real-time feedback, all running offline on your device.',
    challenge: 'The existing citizenship training tools available to Canadian applicants were outdated, poorly designed, and required internet access.',
    solution: 'We rebuilt CanadaQuest as a native-first platform with a full offline mode, an intelligent practice exam engine that adapts to each user\'s weak areas, and a clean, accessible design.',
    outcome: 'CanadaQuest users demonstrated measurably higher practice exam scores and reported significantly more confidence going into their citizenship tests.',
    outcomeStats: [
      { value: '95+', label: 'Lighthouse Performance Score' },
      { value: '100%', label: 'Offline Capable' },
      { value: 'Full', label: 'Official Curriculum Coverage' },
    ],
    features: [
      { icon: <BookOpen className="h-5 w-5" />, title: 'Full Curriculum Coverage', desc: 'Every topic from the official Discover Canada guide: organized, searchable, and linked to practice questions.' },
      { icon: <Zap className="h-5 w-5" />, title: 'Adaptive Practice Engine', desc: 'The exam engine tracks your performance and serves more questions from your weak areas.' },
      { icon: <Globe className="h-5 w-5" />, title: 'Offline-First Design', desc: 'Download the full curriculum and practice set once. Study anywhere, with no connection required.' },
      { icon: <Layout className="h-5 w-5" />, title: 'Accessible Interface', desc: 'Designed to meet WCAG 2.1 AA accessibility standards. Clear typography, high contrast, keyboard navigation.' },
      { icon: <BarChart2 className="h-5 w-5" />, title: 'Progress Dashboard', desc: 'Track your study history, exam scores, and topic coverage over time.' },
      { icon: <Star className="h-5 w-5" />, title: 'Official Exam Simulation', desc: 'Timed exam simulations that mirror the format and difficulty of the actual citizenship test.' },
    ],
    techStack: ['Next.js', 'TypeScript', 'PWA / Service Worker', 'IndexedDB', 'Tailwind CSS'],
  },
];

const CLIENT_PROJECTS: Product[] = [
  {
    id: 'moonyyc',
    name: 'MoonYYC',
    tagline: 'The settlement guide Calgary immigrants actually needed.',
    category: 'client',
    year: '2024',
    heroLabel: 'Client Project · Civic Tech',
    externalLink: 'https://moonyyc.ca',
    pitch: 'MoonYYC is a comprehensive, AI-powered digital guide for newcomers, immigrants, and international students arriving in Calgary, built and delivered end-to-end as a complete managed package.',
    challenge: 'Newcomers to Calgary were navigating an overwhelming patchwork of government websites, outdated PDFs, and language barriers just to access basic settlement information.',
    solution: 'We designed and built MoonYYC as a complete package: full content architecture, an AI-powered Q&A assistant, multilingual support across four languages, and a fast static delivery setup.',
    outcome: 'MoonYYC became Calgary\'s most referenced digital settlement guide for multilingual newcomers within its first year.',
    outcomeStats: [
      { value: '95+', label: 'Lighthouse Score' },
      { value: '4', label: 'Languages Supported' },
      { value: '#1', label: 'Digital Settlement Guide' },
    ],
    features: [
      { icon: <Globe className="h-5 w-5" />, title: 'Multilingual Content', desc: 'Arabic, English, French, and Somali: each language version is a first-class experience.' },
      { icon: <Zap className="h-5 w-5" />, title: 'AI-Powered Q&A Assistant', desc: 'A private AI assistant answers settlement questions drawing from the site\'s curated knowledge base.' },
      { icon: <Layout className="h-5 w-5" />, title: 'Step-by-Step Settlement Guides', desc: 'Structured checklists covering housing, healthcare, education, employment, and government services.' },
      { icon: <Shield className="h-5 w-5" />, title: 'Emergency Contact Directory', desc: 'Verified emergency contacts and community resources, organized by situation and location.' },
      { icon: <TrendingUp className="h-5 w-5" />, title: 'Performance-First Build', desc: 'Static delivery with Cloudflare CDN ensures fast loading even on slow mobile connections.' },
      { icon: <Users className="h-5 w-5" />, title: 'Community Resources Hub', desc: 'A curated directory of Calgary-based community organizations, verified and maintained by the client.' },
    ],
    techStack: ['Next.js', 'TypeScript', 'Tailwind CSS', 'Gemini API', 'Cloudflare', 'i18n'],
    testimonial: {
      quote: 'We needed something that our community could actually use: in their language, on their phone, without needing to know where to look. MoonYYC made that happen.',
      name: 'MoonYYC Team',
      role: 'Client',
    },
  },
  {
    id: 'yycecho',
    name: 'YYC Echo',
    tagline: 'Local stories. Your platform. Your data.',
    category: 'client',
    year: '2023',
    heroLabel: 'Client Project · Media',
    externalLink: 'https://yycecho.ca',
    pitch: 'YYC Echo is a self-hosted, minimalist podcast platform built for a Calgary media team that was done paying platform fees and ready to own their audience data completely.',
    challenge: 'The YYC Echo team was hosted on a major podcast platform that charged growing monthly fees, gave them no control over design, and gave them no access to their own listener data.',
    solution: 'We moved them to a fully self-hosted setup: a custom-built player, RSS feed management, listener analytics piped to their own dashboard, and a clean editorial interface.',
    outcome: 'YYC Echo now owns every byte of their content and every data point about their audience. Platform fees dropped to zero.',
    outcomeStats: [
      { value: '100%', label: 'Data Ownership' },
      { value: '0', label: 'Platform Fees' },
      { value: 'Full', label: 'Design Control' },
    ],
    features: [
      { icon: <Layout className="h-5 w-5" />, title: 'Custom Audio Player', desc: 'A lightweight, accessible audio player designed to match the brand and work on any device.' },
      { icon: <Database className="h-5 w-5" />, title: 'Self-Hosted RSS Management', desc: 'Generate and manage your own RSS feed. Compatible with Apple Podcasts, Spotify, and all major directories.' },
      { icon: <BarChart2 className="h-5 w-5" />, title: 'First-Party Analytics', desc: 'Listener data flows directly to a private dashboard: no third-party analytics platforms.' },
      { icon: <Globe className="h-5 w-5" />, title: 'CDN-Optimized Delivery', desc: 'Audio files served from Cloudflare R2: fast delivery worldwide with no bandwidth surprises.' },
      { icon: <Shield className="h-5 w-5" />, title: '100% Code Ownership', desc: 'Every file, every deployment config, every credential: fully transferred to the client.' },
      { icon: <FileText className="h-5 w-5" />, title: 'Editorial CMS', desc: 'A simple CMS interface for publishing new episodes, writing show notes, and managing the archive.' },
    ],
    techStack: ['Next.js', 'TypeScript', 'Cloudflare R2', 'RSS', 'Tailwind CSS'],
  },
  {
    id: 'abarabic',
    name: 'AB Arabic',
    tagline: 'A province\'s worth of information, finally in Arabic.',
    category: 'client',
    year: '2023',
    heroLabel: 'Client Project · Community Portal',
    externalLink: 'https://abarabic.ca',
    pitch: 'AB Arabic is the go-to government and civic information portal in Arabic for Alberta residents: covering immigration, education, health, and business, delivered in a fast, accessible, RTL-native design.',
    challenge: 'Alberta\'s Arabic-speaking community had no reliable, accurate, native-language portal for government services and civic information.',
    solution: 'We built AB Arabic as a content-first platform with a clean editorial architecture, fast static delivery, and a fully RTL layout that treated Arabic as a primary language, not an afterthought.',
    outcome: 'AB Arabic became the go-to reference for Alberta\'s Arabic-speaking community and is actively used by settlement organizations across the province.',
    outcomeStats: [
      { value: '95+', label: 'Lighthouse Score' },
      { value: 'RTL', label: 'Native Arabic Layout' },
      { value: '#1', label: 'Arabic Guide in Alberta' },
    ],
    features: [
      { icon: <Globe className="h-5 w-5" />, title: 'RTL-First Design', desc: 'The entire layout, typography, and navigation was designed for Arabic as a primary language.' },
      { icon: <BookOpen className="h-5 w-5" />, title: 'Government Services Guide', desc: 'Comprehensive, verified guides to Alberta government services in clear, accurate Arabic.' },
      { icon: <Users className="h-5 w-5" />, title: 'Community Resources Directory', desc: 'A curated directory of Arabic-speaking community organizations and support services across Alberta.' },
      { icon: <TrendingUp className="h-5 w-5" />, title: 'Performance-First Build', desc: '95+ Lighthouse score. Optimized for mobile users on slower connections.' },
      { icon: <Search className="h-5 w-5" />, title: 'Topic-Organized Architecture', desc: 'Information organized by topic: immigration, health, education, business, not by government department.' },
      { icon: <Shield className="h-5 w-5" />, title: 'Full Ownership Delivered', desc: 'Complete codebase, hosting access, and content CMS handed to the client at project close.' },
    ],
    techStack: ['Next.js', 'TypeScript', 'i18n / RTL', 'Cloudflare', 'Tailwind CSS'],
    testimonial: {
      quote: 'Our clients use AB Arabic every day. It became the first thing we recommend to every newcomer we work with.',
      name: 'AB Arabic Partner Organization',
      role: 'Community Partner',
    },
  },
];

/* ─── Case Study Modal ─── */
const CaseStudyModal: React.FC<{ product: Product; onClose: () => void }> = ({ product, onClose }) => (
  <div
    className="fixed inset-0 z-50 flex items-center justify-center p-4 md:p-8"
    onClick={onClose}
  >
    <div className="absolute inset-0 bg-black/70 backdrop-blur-sm" />
    <div
      className="relative w-full max-w-3xl max-h-[90vh] overflow-y-auto rounded-2xl bg-white shadow-2xl border border-gray-200"
      onClick={(e) => e.stopPropagation()}
    >
      {/* Header */}
      <div className="sticky top-0 z-10 flex items-start justify-between p-8 pb-6 bg-white rounded-t-2xl border-b border-gray-100">
        <div>
          <span className="text-xs font-semibold text-secunova-blue uppercase tracking-wider">{product.year} · {product.heroLabel}</span>
          <h2 className="text-2xl font-bold text-secunova-dark mt-1">{product.name}</h2>
          <p className="text-sm text-gray-500 mt-1">{product.tagline}</p>
        </div>
        <button onClick={onClose} className="flex-shrink-0 ml-4 w-9 h-9 rounded-xl flex items-center justify-center border border-gray-200 text-gray-400 hover:text-gray-600 hover:border-gray-300 transition-colors cursor-pointer">
          <X className="h-4 w-4" />
        </button>
      </div>

      <div className="p-8 space-y-8">
        {/* Outcome Stats */}
        <div className="space-y-2">
          <span className="text-xs font-semibold text-secunova-blue uppercase tracking-wider block">Key Performance Metrics</span>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
            {product.outcomeStats.map((stat, i) => (
              <div key={i} className="flex items-center justify-between p-3.5 rounded-xl bg-blue-50/50 border border-blue-100/80">
                <span className="text-xs font-medium text-slate-700">{stat.label}</span>
                <span className="text-sm font-extrabold text-secunova-blue font-mono ml-2 shrink-0">{stat.value}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Challenge */}
        <div>
          <span className="text-xs font-semibold text-secunova-blue uppercase tracking-wider">The Challenge</span>
          <p className="text-sm text-gray-600 mt-2 leading-relaxed">{product.challenge}</p>
        </div>

        {/* Solution */}
        <div>
          <span className="text-xs font-semibold text-secunova-blue uppercase tracking-wider">What We Built</span>
          <p className="text-sm text-gray-600 mt-2 leading-relaxed">{product.solution}</p>
        </div>

        {/* Outcome */}
        <div className="rounded-xl bg-secunova-blue/5 border border-secunova-blue/15 p-6">
          <span className="text-xs font-semibold text-secunova-blue uppercase tracking-wider">The Outcome</span>
          <p className="text-sm font-semibold text-secunova-dark mt-2 leading-relaxed">{product.outcome}</p>
        </div>

        {/* Features */}
        <div>
          <span className="text-xs font-semibold text-secunova-blue uppercase tracking-wider mb-4 block">Key Features</span>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {product.features.map((feature, i) => (
              <div key={i} className="flex items-start gap-3">
                <div className="w-8 h-8 bg-secunova-blue/10 rounded-lg flex items-center justify-center flex-shrink-0 text-secunova-blue">
                  {feature.icon}
                </div>
                <div>
                  <h4 className="text-sm font-semibold text-secunova-dark">{feature.title}</h4>
                  <p className="text-xs text-gray-500 mt-0.5 leading-relaxed">{feature.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Tech Stack */}
        <div>
          <span className="text-xs font-semibold text-secunova-blue uppercase tracking-wider mb-3 block">Built With</span>
          <div className="flex flex-wrap gap-2">
            {product.techStack.map((tech, i) => (
              <span key={i} className="text-xs font-medium px-3 py-1.5 rounded-full bg-secunova-blue/10 text-secunova-blue border border-secunova-blue/15">
                {tech}
              </span>
            ))}
          </div>
        </div>

        {/* Testimonial */}
        {product.testimonial && (
          <div className="rounded-xl bg-gray-50 border border-gray-100 p-6">
            <p className="text-sm italic text-gray-700 leading-relaxed">"{product.testimonial.quote}"</p>
            <p className="text-xs font-semibold text-secunova-dark mt-3">{product.testimonial.name}, {product.testimonial.role}</p>
          </div>
        )}

        {/* Footer */}
        <div className="pt-4 flex items-center justify-between border-t border-gray-100 flex-wrap gap-3">
          <button onClick={onClose} className="text-sm text-gray-400 cursor-pointer hover:text-gray-600 transition-colors bg-transparent border-0">Close</button>
          <div className="flex items-center gap-3">
            <Link
              to={`/about/our-work/${product.id}`}
              onClick={onClose}
              className="inline-flex items-center gap-1.5 text-xs font-bold px-4 py-2.5 bg-gray-100 text-secunova-dark rounded-lg hover:bg-gray-200 transition-colors"
            >
              <span>Dedicated Page</span>
              <ArrowRight className="h-3.5 w-3.5" />
            </Link>
            {product.downloadUrl && (
              <a
                href={product.downloadUrl}
                target="_blank"
                rel="noopener noreferrer"
                onClick={() => incrementDownloadCount(product.id)}
                className="inline-flex items-center gap-2 text-xs font-bold px-4 py-2.5 bg-gradient-to-r from-emerald-500 to-teal-600 text-white rounded-lg hover:from-emerald-400 hover:to-teal-500 transition-colors shadow-sm"
              >
                <Download className="h-4 w-4" />
                <span>Download ({getDownloadCount(product.id)})</span>
              </a>
            )}
            {product.externalLink && (
              <a href={product.externalLink} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 text-xs font-bold px-4 py-2.5 bg-secunova-blue text-white rounded-lg hover:bg-secunova-blue/90 transition-colors">
                <span>Visit Site</span>
                <ArrowUpRight className="h-4 w-4" />
              </a>
            )}
          </div>
        </div>
      </div>
    </div>
  </div>
);

/* ─── Product Card ─── */
const ProductCard: React.FC<{ product: Product; index: number; onOpen: (p: Product) => void }> = ({ product, index, onOpen }) => (
  <div className="group relative h-full flex flex-col rounded-2xl overflow-hidden bg-white border border-gray-100 shadow-lg hover:shadow-2xl hover:-translate-y-2 transition-all duration-500 hover:border-secunova-blue/30">
    <div className="absolute top-0 right-0 w-40 h-40 bg-gradient-to-br from-secunova-blue/5 to-secunova-light/5 rounded-full -mr-20 -mt-20 group-hover:scale-150 transition-transform duration-700"></div>

    <div className="p-7 flex flex-col flex-1 relative">
      {/* Header */}
      <div className="flex items-start justify-between mb-5">
        <div className="flex items-center gap-3">
          {product.badge && (
            <span className="text-[10px] font-bold uppercase tracking-widest px-2.5 py-1 rounded-full bg-secunova-blue text-white">
              {product.badge}
            </span>
          )}
        </div>
      </div>

      {/* Name + tagline */}
      <h3 className="text-xl font-bold text-secunova-dark mb-2 group-hover:text-secunova-blue transition-colors">{product.name}</h3>
      <p className="text-xs font-semibold text-secunova-light mb-3">{product.tagline}</p>
      <p className="text-sm text-gray-600 leading-relaxed flex-1">{product.pitch.length > 180 ? product.pitch.substring(0, 180) + '...' : product.pitch}</p>

      {/* Outcome stats - Executive Horizontal Key-Value Metrics */}
      <div className="mt-4 pt-3.5 border-t border-gray-100/90 space-y-1.5">
        {product.outcomeStats.map((stat, i) => (
          <div key={i} className="flex items-center justify-between px-3 py-1.5 rounded-lg bg-slate-50/90 border border-slate-100/80 text-xs">
            <span className="font-medium text-slate-600 truncate mr-2">{stat.label}</span>
            <span className="font-bold text-secunova-blue font-mono shrink-0">{stat.value}</span>
          </div>
        ))}
      </div>

      {/* Tech stack tags */}
      <div className="mt-5 flex flex-wrap gap-1.5">
        {product.techStack.slice(0, 3).map((tech, i) => (
          <span key={i} className="text-xs font-medium px-2.5 py-1 rounded-full border border-gray-200 text-gray-500">
            {tech}
          </span>
        ))}
        {product.techStack.length > 3 && (
          <span className="text-xs font-medium px-2.5 py-1 rounded-full border border-gray-200 text-gray-400">
            +{product.techStack.length - 3}
          </span>
        )}
      </div>

      {/* CTA row */}
      <div className="mt-5 pt-4 flex items-center justify-between gap-3 border-t border-gray-100">
        <button
          className="text-xs font-semibold text-gray-500 hover:text-secunova-blue transition-colors cursor-pointer bg-transparent border-0"
          onClick={() => onOpen(product)}
        >
          Quick preview
        </button>
        <Link
          to={`/about/our-work/${product.id}`}
          className="inline-flex items-center gap-1.5 text-xs font-bold px-5 py-3 bg-secunova-blue text-white rounded-lg hover:bg-secunova-blue/90 transition-colors shadow-sm"
        >
          <span>View Full Page</span>
          <ArrowRight className="h-3.5 w-3.5" />
        </Link>
      </div>
    </div>
  </div>
);

/* ─── Main Page ─── */
const OurWorkPage = () => {
  const [activeModal, setActiveModal] = useState<Product | null>(null);

  return (
    <div className="min-h-screen bg-white">
      <Helmet>
        <title>Our Work & Products | SecuNova Consulting Calgary</title>
        <meta name="description" content="Explore SecuNova Consulting's product portfolio: Nova macOS AI agent, Career OS, SecuBoost, Journalism Audit Platform, Lead Finder, CanadaQuest, and client projects MoonYYC, YYC Echo, AB Arabic. Custom software, zero-debt architecture, full IP transfer." />
        <meta name="keywords" content="SecuNova products, Nova macOS AI agent, Career OS, SecuBoost, CanadaQuest, MoonYYC, YYC Echo, AB Arabic, custom software Calgary, zero-debt architecture, privacy-first software" />
        <link rel="canonical" href="https://secunovainc.com/about/our-work" />

        <meta property="og:title" content="Our Work & Products | SecuNova Consulting" />
        <meta property="og:description" content="Products we own, platforms we delivered. Proof of execution from SecuNova Consulting." />
        <meta property="og:url" content="https://secunovainc.com/about/our-work" />
        <meta property="og:type" content="website" />
        <meta property="og:image" content="https://secunovainc.com/og-image.png" />
        <meta property="og:image:width" content="1200" />
        <meta property="og:image:height" content="630" />
        <meta property="og:site_name" content="SecuNova Consulting" />

        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Our Work & Products | SecuNova Consulting" />
        <meta name="twitter:description" content="Products we own, platforms we delivered. Proof of execution from SecuNova Consulting." />
        <meta name="twitter:image" content="https://secunovainc.com/og-image.png" />

        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "CollectionPage",
            "name": "SecuNova Products & Client Work",
            "description": "Proprietary software products and client case studies from SecuNova Inc.",
            "provider": {
              "@type": "LocalBusiness",
              "name": "SecuNova Inc.",
              "alternateName": "SecuNova Consulting",
              "telephone": "+1-403-401-1552"
            },
          })}
        </script>
      </Helmet>

      {/* ── HERO ─── */}
      <section className="relative min-h-screen overflow-hidden flex items-center justify-center pt-24 sm:pt-32 md:pt-40 pb-12 sm:pb-16 md:pb-20">
        <div className="absolute inset-0">
          <img
            src="https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=1920&q=85&auto=format&fit=crop"
            alt="SecuNova Products & Solutions"
            className="w-full h-full object-cover"
            loading="eager"
            fetchPriority="high"
            decoding="async"
          />
          <div className="absolute inset-0 bg-gradient-to-br from-secunova-dark/95 via-secunova-dark/90 to-secunova-blue/85"></div>
        </div>
        <div className="container mx-auto px-4 relative z-10 w-full">
          <div className="max-w-6xl mx-auto w-full">
            <Link to="/about" className="inline-flex items-center text-white/80 hover:text-white mb-6 transition-all duration-300">
              <ArrowLeft className="h-4 w-4 mr-2 text-white" />
              Back to About
            </Link>
            <div className="text-center text-white">
              <div className="inline-flex items-center bg-white/10 backdrop-blur-sm border border-white/20 px-6 py-3 rounded-full text-sm font-medium mb-6">
                <Briefcase className="h-4 w-4 mr-2 text-white" />
                Our Work
              </div>
              <h1 className="text-4xl md:text-6xl font-bold mb-5 leading-tight">
                Proof of Execution.
                <span className="block bg-clip-text text-transparent bg-gradient-to-r from-secunova-light to-white">
                  Products we own, platforms we delivered.
                </span>
              </h1>
              <p className="text-xl text-blue-100 max-w-3xl mx-auto leading-relaxed">
                Before we advise anyone on technology, we ship it ourselves. The first section is software we
                built, own, and use internally. The second is what we delivered for clients and handed over completely.
              </p>
              <div className="flex flex-col sm:flex-row justify-center gap-4 mt-8">
                <Link to="/contact" className="btn btn-gradient btn-lg">
                  <span>Start a Project</span>
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── SECTION 1: OWN PRODUCTS ─── */}
      <section className="py-16 md:py-24 bg-gradient-to-b from-white to-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-7xl mx-auto">
            <div className="flex flex-col md:flex-row items-start justify-between gap-6 mb-16">
              <div>
                <div className="inline-flex items-center bg-secunova-blue/10 text-secunova-blue px-6 py-3 rounded-full text-sm font-semibold mb-6">
                  Built for Ourselves
                </div>
                <h2 className="text-3xl md:text-5xl font-bold text-secunova-dark leading-tight">
                  Software we use,{' '}
                  <span className="bg-clip-text text-transparent bg-gradient-to-r from-secunova-blue to-secunova-light">
                    own, and sell outright.
                  </span>
                </h2>
              </div>
              <p className="text-gray-600 max-w-sm md:self-end leading-relaxed">
                These are products we built because the market alternatives did not meet our standards. One-time
                purchase, lifetime ownership, zero subscriptions, and the same rigor we bring to every client mandate.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {OWN_PRODUCTS.map((product, i) => (
                <ProductCard key={product.id} product={product} index={i} onOpen={setActiveModal} />
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ── DIVIDER ─── */}
      <div className="container mx-auto px-4">
        <div className="max-w-7xl mx-auto">
          <div className="border-t border-gray-200" />
        </div>
      </div>

      {/* ── SECTION 2: CLIENT PROJECTS ─── */}
      <section className="py-16 md:py-24 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-7xl mx-auto">
            <div className="flex flex-col md:flex-row items-start justify-between gap-6 mb-16">
              <div>
                <div className="inline-flex items-center bg-secunova-light/10 text-secunova-light px-6 py-3 rounded-full text-sm font-semibold mb-6">
                  Built for Clients
                </div>
                <h2 className="text-3xl md:text-5xl font-bold text-secunova-dark leading-tight">
                  Real projects.{' '}
                  <span className="bg-clip-text text-transparent bg-gradient-to-r from-secunova-blue to-secunova-light">
                    Real outcomes. Full ownership transferred.
                  </span>
                </h2>
              </div>
              <p className="text-gray-600 max-w-sm md:self-end leading-relaxed">
                Every project below was delivered as a complete package, managed, built, audited, and handed
                over. The client owns everything. Click any card to read the full case study.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {CLIENT_PROJECTS.map((product, i) => (
                <ProductCard key={product.id} product={product} index={i} onOpen={setActiveModal} />
              ))}
            </div>

            <div className="mt-14 text-center pt-12 border-t border-gray-200">
              <p className="text-xs font-medium text-gray-400 uppercase tracking-wider mb-4">
                Want to see everything?
              </p>
              <a
                href="mailto:hello@secunovainc.com?subject=Full%20Portfolio%20Request"
                className="inline-flex items-center gap-2 font-semibold text-sm px-6 py-3 border border-gray-200 text-secunova-dark rounded-lg hover:border-secunova-blue/40 hover:text-secunova-blue transition-all"
              >
                <span>Request Full Portfolio</span>
                <ArrowUpRight className="h-4 w-4" />
              </a>
              <p className="text-xs text-gray-400 mt-3">
                We will send you a complete portfolio of our work including case studies, metrics, and tech stacks.
              </p>
            </div>
          </div>
        </div>
      </section>

      <CtaSection />

      {/* ── CASE STUDY MODAL ─── */}
      {activeModal && (
        <CaseStudyModal product={activeModal} onClose={() => setActiveModal(null)} />
      )}
    </div>
  );
};

export default OurWorkPage;
