/**
 * ============================================================================
 * PROPRIETARY CUSTOM ENGINEERING & DESIGN ARCHITECTURE
 * ----------------------------------------------------------------------------
 * All design, software architecture, UI/UX components, and source code are
 * 100% custom-engineered and designed exclusively by SecuNova.
 *
 * CORE ARCHITECTURAL ETHOS:
 * - 100% Bespoke Code: Built strictly to client specifications from scratch.
 * - Zero Pre-Made Templates: No generic agency starters or off-the-shelf themes.
 * - Senior-Led AI-Augmented Workflows (Vibe Coding): 14-day execution cycles
 *   engineered for sub-second performance (99+ Lighthouse Core Web Vitals).
 * - Full IP & Repository Handoff: 100% client asset and codebase ownership.
 *
 * Copyright (c) SecuNova. All rights reserved.
 * ============================================================================
 */

export interface OutcomeStat {
  value: string;
  label: string;
}

export interface ProductFeature {
  title: string;
  desc: string;
  iconName?: string;
}

export interface ProductMediaSlot {
  type: 'image' | 'video';
  src?: string;
  caption?: string;
  aspect?: string;
}

export interface ProductDetailData {
  id: string;
  name: string;
  tagline: string;
  category: 'own' | 'client';
  badge?: string;
  year?: string;
  heroLabel: string;
  pitch: string;
  challenge: string;
  solution: string;
  outcome: string;
  outcomeStats: OutcomeStat[];
  features: ProductFeature[];
  techStack: string[];
  mediaSlots: ProductMediaSlot[];
  externalLink?: string;
  downloadUrl?: string;
  downloadCount?: string;
  downloadLabel?: string;
  version?: string;
  fileSize?: string;
  testimonial?: { quote: string; name: string; role: string };
}

export const PRODUCT_DETAIL_DATA: Record<string, ProductDetailData> = {
  nova: {
    id: "nova",
    name: "Nova",
    tagline: "Your computer. Your rules. Your agent.",
    category: "own",
    badge: "Flagship",
    year: "2024",
    heroLabel: "macOS AI Agent",
    pitch: "Nova is a native macOS AI agent that reads your screen, controls your mouse and keyboard, manages your files, and handles your email through plain language. One purchase, yours forever.",
    challenge: "Most AI automation tools are cloud-dependent subscription services that send your commands, keystrokes, and file contents to remote servers. Power users and privacy-conscious professionals are left choosing between convenience and control. We refused to accept that.",
    solution: "Nova runs entirely on your machine. It uses sandboxed local model inference for fast, lightweight tasks and carefully gated API calls for complex ones, with zero persistent logging and no data leaving your device.",
    outcome: "Users who switched to Nova from cloud-based automation tools reported complete confidence in their data privacy, a single lifetime cost that eliminated recurring subscriptions, and automation capabilities that matched or exceeded what they had before.",
    outcomeStats: [
      { value: "100%", label: "Local Execution" },
      { value: "0", label: "Data Sent to Cloud" },
      { value: "1×", label: "Payment. Own It Forever." },
    ],
    features: [
      {
        iconName: "Shield",
        title: "Zero Cloud Dependency",
        desc: "Every keystroke, command, and file interaction stays on your machine. No remote servers. No subscription required to keep it running.",
      },
      {
        iconName: "Cpu",
        title: "Local Model Inference",
        desc: "Nova uses on-device inference for lightweight tasks: instant response, no latency, and no API calls for simple automation.",
      },
      {
        iconName: "Lock",
        title: "Secure Context Gates",
        desc: "Before any sensitive action is taken, Nova presents a confirmation gate. Nothing runs without your explicit approval.",
      },
      {
        iconName: "Zap",
        title: "Natural Language Control",
        desc: "Describe what you want in plain English. Nova handles the clicking, typing, file management, and email composition.",
      },
      {
        iconName: "Globe",
        title: "Browser Automation",
        desc: "Nova can navigate websites, fill forms, extract content, and automate repetitive browser workflows without extensions or scripts.",
      },
      {
        iconName: "Settings",
        title: "Offline Fallback Mode",
        desc: "No internet? Nova still works. Core automation features are available entirely offline through local model fallback.",
      },
    ],
    techStack: ["Swift", "Core ML", "AppleScript", "Gemini API", "macOS Accessibility API"],
    mediaSlots: [
      { type: "video", src: "/nova.mp4", caption: "Nova in action: natural language browser automation", aspect: "aspect-video" },
      { type: "video", src: "/hero-video.mp4", caption: "Nova command & desktop interaction interface", aspect: "aspect-video" },
      { type: "video", src: "/hero_home.mp4", caption: "Workflow automation and execution demonstration", aspect: "aspect-video" },
    ],
  },
  "career-os": {
    id: "career-os",
    name: "Career OS",
    tagline: "Your job search, engineered.",
    category: "own",
    badge: "Popular",
    year: "2024",
    heroLabel: "Tactical Career Automation",
    pitch: "Career OS automates the most time-consuming parts of your job search. It tailors your resume to every job posting, scores it for ATS compatibility, and tracks your applications, all running client-side with no accounts required.",
    challenge: "Job seekers spend hours manually tailoring resumes for each role, only to have them rejected by Applicant Tracking Systems before a human ever reads them.",
    solution: "Career OS runs entirely in the browser: no servers, no accounts, no data collection. It parses job descriptions locally, rewrites your resume against the posting's keywords, and gives you an ATS compatibility score before you apply.",
    outcome: "Users report spending 80% less time per application while seeing a measurable improvement in callback rates. Because the output is tailored to each specific role, it reads naturally as human copywriting.",
    outcomeStats: [
      { value: "80%", label: "Less Time Per Application" },
      { value: "3×", label: "More Callbacks on Average" },
      { value: "0", label: "Accounts or Subscriptions" },
    ],
    features: [
      {
        iconName: "FileText",
        title: "Local Resume Parser",
        desc: "Upload your resume once. Career OS parses it locally and creates a structured profile it uses for every application.",
      },
      {
        iconName: "Search",
        title: "JD Keyword Extraction",
        desc: "Paste any job description. Career OS identifies the top keywords and phrases the ATS will scan for.",
      },
      {
        iconName: "CheckCircle2",
        title: "ATS Score & Gap Analysis",
        desc: "Get an instant compatibility score and a list of missing keywords before you apply.",
      },
      {
        iconName: "TrendingUp",
        title: "Multi-Version Sync",
        desc: "Maintain multiple resume versions for different roles and keep them synchronized as your experience grows.",
      },
      {
        iconName: "Lock",
        title: "100% Client-Side",
        desc: "Your CV, your data. Nothing is sent to a server. Everything runs in your browser.",
      },
      {
        iconName: "Layout",
        title: "Application Tracker",
        desc: "Track every application with status, notes, and follow-up dates, stored locally in your browser.",
      },
    ],
    techStack: ["Next.js", "TypeScript", "PDF.js", "IndexedDB", "Gemini API"],
    mediaSlots: [
      { type: "video", src: "/Career OS.mp4", caption: "Career OS: full demo walkthrough and document tailoring", aspect: "aspect-video" },
      { type: "video", src: "/hero-video1.mp4", caption: "ATS optimization scoring interface", aspect: "aspect-video" },
    ],
  },
  secuboost: {
    id: "secuboost",
    name: "SecuBoost",
    tagline: "A leaner, faster Mac. No strings attached.",
    category: "own",
    year: "2026",
    heroLabel: "macOS Performance Suite",
    pitch: "SecuBoost is a native macOS performance and security suite. It cleans your system, monitors your resources in real time, and protects your sensitive files, all running 100% offline with no telemetry and no subscriptions.",
    challenge: "Mac optimization software is dominated by subscription-heavy, bloated apps that run background daemons and phone home with user data. Users want clean, native utilities that do their job and stay quiet.",
    solution: "SecuBoost was written from scratch in Swift with a strict zero-network policy. Every feature runs in a sandboxed local process. The app cleaner uses actual system APIs, not guesswork. The file vault uses AES-256 encryption. Zero analytics, zero phone-home, and zero recurring charges.",
    outcome: "SecuBoost users get a measurably faster Mac without handing their usage data to a third party or paying monthly fees for features that should have been free.",
    outcomeStats: [
      { value: "0", label: "Telemetry or Tracking" },
      { value: "100%", label: "Free (No Subscriptions)" },
      { value: "100%", label: "Offline Operation" },
    ],
    features: [
      {
        iconName: "Zap",
        title: "Intelligent App Cleaner",
        desc: "Removes genuine junk including caches, logs, and orphaned app data using macOS system APIs. No false positives.",
      },
      {
        iconName: "Lock",
        title: "AES-256 File Vault",
        desc: "Encrypt sensitive files with military-grade encryption. The vault never touches a cloud server.",
      },
      {
        iconName: "BarChart2",
        title: "Real-Time Resource Monitor",
        desc: "Live CPU, RAM, and disk dashboards that update in real time with zero system overhead.",
      },
      {
        iconName: "Shield",
        title: "Zero Network Policy",
        desc: "SecuBoost never makes an outbound network request. No server to compromise, no data to leak.",
      },
      {
        iconName: "Settings",
        title: "Startup Manager",
        desc: "See and control exactly which apps launch at login. Reclaim boot speed and battery life.",
      },
      {
        iconName: "Cpu",
        title: "Native Swift Performance",
        desc: "Built in Swift with native macOS APIs, not a web wrapper. Runs instantly and uses minimal resources.",
      },
    ],
    techStack: ["Swift", "SwiftUI", "CryptoKit", "DiskArbitration", "IOKit"],
    downloadUrl: "https://drive.google.com/file/d/1rkkI6cI-Djd3Ti5nvfkhERgyLdQpRW9-/view?usp=sharing",
    downloadCount: "100+",
    downloadLabel: "Download SecuBoost for macOS",
    version: "v1.0.0 Pro",
    fileSize: "14.2 MB",
    mediaSlots: [
      { type: "video", src: "/SecuBoost.mp4", caption: "SecuBoost: product overview and system cleaner walkthrough", aspect: "aspect-video" },
    ],
  },
  "journalism-audit": {
    id: "journalism-audit",
    name: "Journalism Audit Platform",
    tagline: "Content verification built for media that can't afford to be wrong.",
    category: "own",
    year: "2024",
    heroLabel: "Enterprise AI Platform",
    pitch: "A private AI platform designed for media organizations that need to verify content, detect fabricated sources, and audit editorial integrity without exposing sensitive stories to public AI models.",
    challenge: "Newsrooms want to leverage AI for fact-checking and source verification, but sending unpublished investigative reports to commercial AI APIs violates journalistic confidentiality.",
    solution: "The Journalism Audit Platform runs on a private deployment with air-gapped model gates. Editorial content is processed locally using a RAG pipeline connected to verified source databases. No unpublished material ever leaves the newsroom network.",
    outcome: "The platform reduced manual verification times for investigative stories while maintaining complete newsroom confidentiality.",
    outcomeStats: [
      { value: "0", label: "Cloud Exposure of Private Content" },
      { value: "85%", label: "Faster Verification Workflow" },
      { value: "100%", label: "Privately Hosted & Controlled" },
    ],
    features: [
      {
        iconName: "Shield",
        title: "Air-Gapped Model Gates",
        desc: "All content is processed within the newsroom's own infrastructure. No unpublished material touches a public API.",
      },
      {
        iconName: "Search",
        title: "Forensic Source Verification",
        desc: "Cross-references claims against a curated database of verified sources and flags unverifiable assertions.",
      },
      {
        iconName: "FileText",
        title: "Synthetic Media Detection",
        desc: "Identifies AI-generated text, fabricated quotes, and manipulated images before they reach publication.",
      },
      {
        iconName: "Database",
        title: "Private RAG Pipeline",
        desc: "A Retrieval-Augmented Generation pipeline trained on the newsroom's own source library, not public data.",
      },
      {
        iconName: "FileText",
        title: "Compliance Audit Logs",
        desc: "Every verification check is logged with timestamp, source reference, and confidence score for editorial review.",
      },
      {
        iconName: "Lock",
        title: "Zero External API Exposure",
        desc: "Sensitive stories, sources, and editorial decisions never leave the newsroom's controlled environment.",
      },
    ],
    techStack: ["Python", "FastAPI", "LangChain", "Pinecone", "Docker", "Gemini Pro"],
    mediaSlots: [],
  },
  "lead-finder": {
    id: "lead-finder",
    name: "SecuNova Lead Finder",
    tagline: "Sales intelligence you actually own.",
    category: "own",
    year: "2024",
    heroLabel: "Proprietary Revenue Intelligence Engine",
    pitch: "A custom-built lead discovery system that moves your entire sales intelligence pipeline into a privately owned environment, eliminating SaaS subscription costs and putting your company data under your control.",
    challenge: "B2B lead generation services charge monthly fees per seat and restrict data exports. Companies pay continuously for access to contact data they should own.",
    solution: "We engineered a self-hosted lead discovery platform that continuously discovers, verifies, and enriches prospect data using direct web extraction and public data APIs.",
    outcome: "A permanent sales intelligence asset that runs autonomously for a one-time build cost.",
    outcomeStats: [
      { value: "0", label: "Monthly SaaS Fees" },
      { value: "100%", label: "Data Ownership" },
      { value: "inf", label: "Scalable With No Per-Seat Cost" },
    ],
    features: [
      {
        iconName: "Database",
        title: "Private Data Lake",
        desc: "All lead data is stored in a self-hosted database you control. Cancel nothing, lose nothing.",
      },
      {
        iconName: "Search",
        title: "Decoupled Scraper Modules",
        desc: "Modular scraping architecture lets you target specific industries, job titles, and geographies without configuration limits.",
      },
      {
        iconName: "TrendingUp",
        title: "Lead Enrichment Pipeline",
        desc: "Automatically enriches raw lead data with company size, industry, tech stack, and contact details.",
      },
      {
        iconName: "BarChart2",
        title: "CRM Export Ready",
        desc: "Export enriched lead lists directly to your CRM in any format, with no middleware required.",
      },
      {
        iconName: "Shield",
        title: "Compliance-Safe Collection",
        desc: "Built to collect only publicly available data with configurable rate limiting and source attribution.",
      },
      {
        iconName: "Zap",
        title: "Real-Time Discovery",
        desc: "Trigger lead discovery on-demand or on a scheduled basis. New leads are added to your database continuously.",
      },
    ],
    techStack: ["Python", "PostgreSQL", "Redis", "Playwright", "FastAPI", "Docker"],
    mediaSlots: [],
  },
  canadaquest: {
    id: "canadaquest",
    name: "CanadaQuest",
    tagline: "The citizenship exam, reimagined.",
    category: "own",
    year: "2023",
    heroLabel: "Civic Intelligence Platform",
    pitch: "CanadaQuest transforms the standard Canadian citizenship training experience into a modern, AI-powered learning hub. Practice exams, study guides, and real-time feedback, all running offline on your device.",
    challenge: "The existing citizenship training tools available to Canadian applicants were outdated, poorly designed, and required internet access. Many applicants, particularly newcomers with limited connectivity, were under-prepared as a result.",
    solution: "We rebuilt CanadaQuest as a native-first platform with a full offline mode, an intelligent practice exam engine that adapts to each user's weak areas, and a clean, accessible design that works on any device.",
    outcome: "CanadaQuest users demonstrated measurably higher practice exam scores and reported significantly more confidence going into their citizenship tests.",
    outcomeStats: [
      { value: "95+", label: "Lighthouse Performance Score" },
      { value: "100%", label: "Offline Capable" },
      { value: "Full", label: "Official Curriculum Coverage" },
    ],
    features: [
      {
        iconName: "BookOpen",
        title: "Full Curriculum Coverage",
        desc: "Every topic from the official Discover Canada guide: organized, searchable, and linked to practice questions.",
      },
      {
        iconName: "Zap",
        title: "Adaptive Practice Engine",
        desc: "The exam engine tracks your performance and serves more questions from your weak areas automatically.",
      },
      {
        iconName: "Globe",
        title: "Offline-First Design",
        desc: "Download the full curriculum and practice set once. Study anywhere, with no connection required.",
      },
      {
        iconName: "Layout",
        title: "Accessible Interface",
        desc: "Designed to meet WCAG 2.1 AA accessibility standards. Clear typography, high contrast, keyboard navigation.",
      },
      {
        iconName: "BarChart2",
        title: "Progress Dashboard",
        desc: "Track your study history, exam scores, and topic coverage over time in a clean local dashboard.",
      },
      {
        iconName: "Star",
        title: "Official Exam Simulation",
        desc: "Timed exam simulations that mirror the format and difficulty of the actual citizenship test.",
      },
    ],
    techStack: ["Next.js", "TypeScript", "PWA / Service Worker", "IndexedDB", "Tailwind CSS"],
    mediaSlots: [],
  },
};
