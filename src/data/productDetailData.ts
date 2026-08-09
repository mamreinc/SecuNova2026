
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
  category: 'own';
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
    tagline: "Native macOS AI Agent for Autonomous Execution",
    category: "own",
    badge: "Internal Flagship R&D",
    year: "2026",
    heroLabel: "Native macOS AI Agent",
    pitch: "Nova is a native macOS AI agent engineered in Swift and Core ML. It executes tasks locally on device with zero cloud data transfer, reading screen context, orchestrating desktop workflows, and managing system assets securely.",
    challenge: "Commercial AI automation solutions rely on cloud APIs that transmit private enterprise telemetry, keystrokes, and proprietary files to external servers. Enterprise security leads and executives cannot compromise on data sovereignty or expose sensitive corporate IP.",
    solution: "SecuNova engineered Nova as a native Apple Silicon software solution using Swift, Core ML, and macOS Accessibility APIs. Nova processes tasks on-device via local model inference, operating within strict sandboxed permissions with zero cloud data leakage.",
    outcome: "Proves SecuNova's engineering capability in local AI model inference, zero-trust security architecture, and native Apple Silicon optimization.",
    outcomeStats: [
      { value: "100%", label: "Local On-Device Execution" },
      { value: "0 MB", label: "Cloud Data Transfer" },
      { value: "Sub-50ms", label: "Local Model Response Time" },
    ],
    features: [
      {
        iconName: "Shield",
        title: "Zero Cloud Data Transfer",
        desc: "Every interaction, command, and context evaluation is strictly processed on local hardware. Zero external telemetry or API calls.",
      },
      {
        iconName: "Cpu",
        title: "Swift & Core ML Architecture",
        desc: "Engineered specifically for Apple Silicon hardware acceleration, achieving ultra-low latency and minimal memory overhead.",
      },
      {
        iconName: "Lock",
        title: "Sandboxed Permission Model",
        desc: "Operates within macOS system security boundaries with explicit user confirmation gates for all sensitive operations.",
      },
      {
        iconName: "Zap",
        title: "Autonomous Workflow Orchestration",
        desc: "Parses complex multi-step user intents, automating file management, application navigation, and data extraction locally.",
      },
      {
        iconName: "Globe",
        title: "Local Web Automation",
        desc: "Navigates enterprise web portals and internal dashboards without third-party browser extensions or cloud parsers.",
      },
      {
        iconName: "Settings",
        title: "Air-Gapped Offline Operation",
        desc: "Fully operational without an active internet connection, leveraging quantized Core ML models for complete resilience.",
      },
    ],
    techStack: ["Swift", "Core ML", "AppleScript", "macOS Accessibility API", "Metal"],
    mediaSlots: [
      { type: "video", src: "/nova.mp4", caption: "Nova in action: autonomous local macOS agent execution", aspect: "aspect-video" },
      { type: "video", src: "/hero-video.mp4", caption: "Nova native desktop interaction and command interface", aspect: "aspect-video" },
      { type: "video", src: "/hero_home.mp4", caption: "Local model inference and workflow orchestration demo", aspect: "aspect-video" },
    ],
  },
  "career-os": {
    id: "career-os",
    name: "Career OS",
    tagline: "Automated Job Search & ATS Resume Tailoring System",
    category: "own",
    badge: "Internal R&D Solution",
    year: "2025",
    heroLabel: "Automated Career Intelligence Engine",
    pitch: "Career OS is an automated job search and ATS resume tailoring system built with Next.js and TypeScript. It parses job specifications, rewrites resume components for optimal ATS compatibility, and tracks application pipelines entirely client-side.",
    challenge: "Candidates and executives spend countless hours adjusting resumes for Applicant Tracking Systems, often falling victim to opaque keyword filters or handing personal employment records to unvetted SaaS platforms.",
    solution: "SecuNova developed Career OS using Next.js, TypeScript, IndexedDB, and local document parsing engines. All resume parsing, keyword gap analysis, and document generation occur within the client browser environment.",
    outcome: "Demonstrates SecuNova's mastery of client-side web application architecture, local data storage pipelines, and automated text analysis engines.",
    outcomeStats: [
      { value: "100%", label: "Client-Side Data Privacy" },
      { value: "98%", label: "ATS Parsing Compatibility" },
      { value: "0", label: "Server-Side Data Storage" },
    ],
    features: [
      {
        iconName: "FileText",
        title: "Local Resume Parsing Engine",
        desc: "Extracts experience structures, technical skills, and metrics from PDF and DOCX files locally without external server uploads.",
      },
      {
        iconName: "Search",
        title: "Automated Keyword Gap Analysis",
        desc: "Compares resume text directly against target job descriptions, identifying critical missing technical terms and competencies.",
      },
      {
        iconName: "CheckCircle2",
        title: "Real-Time ATS Compatibility Scoring",
        desc: "Generates instant readiness metrics and structural formatting feedback prior to submission.",
      },
      {
        iconName: "TrendingUp",
        title: "Dynamic Profile Synchronization",
        desc: "Maintains structured career data trees, allowing rapid generation of targeted executive resume variants.",
      },
      {
        iconName: "Lock",
        title: "Zero Account Dependency",
        desc: "Stores all application history, metrics, and document drafts in local browser storage via IndexedDB.",
      },
      {
        iconName: "Layout",
        title: "Application Pipeline Management",
        desc: "Comprehensive tracking dashboard for application status, follow-up schedules, and response analytics.",
      },
    ],
    techStack: ["Next.js", "TypeScript", "PDF.js", "IndexedDB", "Tailwind CSS"],
    mediaSlots: [
      { type: "video", src: "/Career OS.mp4", caption: "Career OS: automated resume tailoring and ATS analysis walkthrough", aspect: "aspect-video" },
      { type: "video", src: "/hero-video1.mp4", caption: "ATS keyword matching engine and scoring interface", aspect: "aspect-video" },
    ],
  },
  secuboost: {
    id: "secuboost",
    name: "SecuBoost",
    tagline: "Native macOS Performance & Security Suite",
    category: "own",
    badge: "Internal R&D Software",
    year: "2025",
    heroLabel: "Native macOS Security Suite",
    pitch: "SecuBoost is a native macOS performance and security suite engineered in SwiftUI and CryptoKit. Operating 100 percent offline with zero telemetry, SecuBoost provides system optimization, AES-256 file encryption, and real-time resource diagnostics.",
    challenge: "Most commercial utility software for macOS requires intrusive background daemons, transmits telemetry to remote servers, and charges monthly SaaS subscriptions for basic maintenance features.",
    solution: "SecuNova engineered SecuBoost completely offline using SwiftUI, CryptoKit, and low-level macOS system frameworks. It delivers forensic system cleanup, robust file vault encryption, and process management without network connectivity.",
    outcome: "Showcases SecuNova's low-level system engineering, cryptographic architecture, and commitment to zero-telemetry software design.",
    outcomeStats: [
      { value: "100%", label: "Offline Operation" },
      { value: "AES-256", label: "Military-Grade File Encryption" },
      { value: "0", label: "Background Telemetry Daemons" },
    ],
    features: [
      {
        iconName: "Zap",
        title: "System Cache & Log Optimizer",
        desc: "Safely purges system junk, orphaned application caches, and temporary logs using native macOS system interfaces.",
      },
      {
        iconName: "Lock",
        title: "CryptoKit AES-256 File Vault",
        desc: "Protects sensitive enterprise documents with hardware-accelerated local cryptographic vaults.",
      },
      {
        iconName: "BarChart2",
        title: "Real-Time Diagnostics Dashboard",
        desc: "Monitors CPU usage, memory allocation, and disk write overhead with zero background performance penalty.",
      },
      {
        iconName: "Shield",
        title: "100 Percent Offline Operation",
        desc: "Strictly forbidden from making outbound network calls. Total insulation from remote exploits or data leaks.",
      },
      {
        iconName: "Settings",
        title: "Login Daemon & Startup Control",
        desc: "Provides total visibility and control over startup items and launch daemons to maximize boot performance.",
      },
      {
        iconName: "Cpu",
        title: "Pure SwiftUI Architecture",
        desc: "Engineered natively for macOS without web wrappers, achieving immediate launch times and minimal footprint.",
      },
    ],
    techStack: ["Swift", "SwiftUI", "CryptoKit", "DiskArbitration", "IOKit"],
    downloadUrl: "https://drive.google.com/file/d/1rkkI6cI-Djd3Ti5nvfkhERgyLdQpRW9-/view?usp=sharing",
    downloadCount: "100+",
    downloadLabel: "Download SecuBoost for macOS",
    version: "v1.0.0 Pro",
    fileSize: "14.2 MB",
    mediaSlots: [
      { type: "video", src: "/SecuBoost.mp4", caption: "SecuBoost: native macOS security and performance walkthrough", aspect: "aspect-video" },
    ],
  },
  "journalism-audit": {
    id: "journalism-audit",
    name: "Journalism Audit Platform",
    tagline: "Private AI Content Verification & Editorial Integrity Platform",
    category: "own",
    badge: "Internal Enterprise R&D",
    year: "2025",
    heroLabel: "Private AI Verification Platform",
    pitch: "The Journalism Audit Platform is a private AI content verification platform engineered for news organizations and media enterprises using Python, FastAPI, and LangChain. It audits source validity, detects synthetic media, and enforces editorial integrity within an isolated network.",
    challenge: "Media conglomerates require AI-powered factual verification and source validation, but transmitting unreleased investigative pieces or confidential source names to public cloud AI models breaches journalistic confidentiality.",
    solution: "SecuNova built a privately hosted content verification platform featuring air-gapped language models, a Retrieval-Augmented Generation (RAG) pipeline over verified news databases, and automated claim audit trails.",
    outcome: "Proves SecuNova's expertise in enterprise RAG architecture, high-throughput NLP pipelines, and confidential AI infrastructure design.",
    outcomeStats: [
      { value: "0", label: "External Cloud Exposure" },
      { value: "85%", label: "Reduction in Verification Latency" },
      { value: "100%", label: "Private Enterprise RAG Pipeline" },
    ],
    features: [
      {
        iconName: "Shield",
        title: "Isolated Language Model Gates",
        desc: "Processes sensitive manuscripts entirely within corporate network boundaries, preventing third-party model training.",
      },
      {
        iconName: "Search",
        title: "Forensic Source Validation",
        desc: "Cross-references claims against verified reference repositories to flag unbacked statements and factual discrepancies.",
      },
      {
        iconName: "FileText",
        title: "Synthetic Media & Quote Audit",
        desc: "Detects AI-generated text patterns, unauthorized modifications, and fabricated attribution prior to publication.",
      },
      {
        iconName: "Database",
        title: "Private Enterprise RAG Engine",
        desc: "Vector search architecture connected strictly to verified internal knowledge bases and historic archives.",
      },
      {
        iconName: "CheckCircle2",
        title: "Immutable Compliance Audit Trail",
        desc: "Logs every editorial check with cryptographic timestamps, confidence scoring, and source lineage.",
      },
      {
        iconName: "Lock",
        title: "Air-Gapped Infrastructure Deployment",
        desc: "Configured for deployment on private enterprise servers or on-premise hardware clusters.",
      },
    ],
    techStack: ["Python", "FastAPI", "LangChain", "Pinecone", "Docker", "PostgreSQL"],
    mediaSlots: [],
  },
  "lead-finder": {
    id: "lead-finder",
    name: "SecuNova Lead Finder",
    tagline: "Privately Owned Sales Intelligence & Lead Discovery System",
    category: "own",
    badge: "Internal Revenue Tech",
    year: "2025",
    heroLabel: "Sales Intelligence System",
    pitch: "SecuNova Lead Finder is a privately owned sales intelligence and lead discovery system engineered with Python, PostgreSQL, and Redis. It provides automated web extraction, data enrichment, and prospect verification without recurring SaaS seat fees.",
    challenge: "Commercial B2B data providers charge exorbitant monthly subscription fees, enforce arbitrary export caps, and retain control over the company data enterprises need for revenue expansion.",
    solution: "SecuNova built a self-hosted lead discovery platform that continuously ingests public business telemetry, enriches contact attributes, and manages outreach pipelines in a dedicated database environment.",
    outcome: "Eliminates recurring data subscription costs while giving SecuNova an autonomous, internal revenue intelligence pipeline.",
    outcomeStats: [
      { value: "100%", label: "Data Ownership" },
      { value: "$0", label: "Third-Party SaaS Seat Fees" },
      { value: "Unlimited", label: "Lead Pipeline Scale" },
    ],
    features: [
      {
        iconName: "Database",
        title: "Private Data Infrastructure",
        desc: "Stores all prospect data and company attributes in a dedicated PostgreSQL database controlled exclusively by SecuNova.",
      },
      {
        iconName: "Search",
        title: "Decoupled Web Extraction Engine",
        desc: "Scalable scraping modules utilizing Redis queues and Python extractors to gather public commercial records.",
      },
      {
        iconName: "TrendingUp",
        title: "Automated Data Enrichment",
        desc: "Parses corporate domain records, technology stacks, executive roles, and verified communication channels automatically.",
      },
      {
        iconName: "BarChart2",
        title: "Direct Pipeline Integration",
        desc: "Exposes clean API endpoints and CSV export tools to push structured lead data directly into internal workflows.",
      },
      {
        iconName: "Shield",
        title: "Compliance Governance Controls",
        desc: "Enforces strict domain rate limits, robots.txt compliance, and privacy rules across all automated extraction jobs.",
      },
      {
        iconName: "Zap",
        title: "Continuous Automated Discovery",
        desc: "Schedules background discovery jobs to identify newly formed corporate entities and target accounts in real time.",
      },
    ],
    techStack: ["Python", "PostgreSQL", "Redis", "Playwright", "FastAPI", "Docker"],
    mediaSlots: [],
  },
  canadaquest: {
    id: "canadaquest",
    name: "CanadaQuest",
    tagline: "AI-Powered Canadian Citizenship Training Platform",
    category: "own",
    badge: "Internal EdTech Solution",
    year: "2025",
    heroLabel: "Civic Learning Platform",
    pitch: "CanadaQuest is an AI-powered Canadian citizenship training platform built with Next.js, TypeScript, and Progressive Web App (PWA) architecture. It offers adaptive exam simulations, full offline curriculum access, and intelligent weak-point tracking.",
    challenge: "Existing citizenship preparation tools in Canada suffered from outdated interfaces, mandatory online connectivity, and static test banks that failed to adapt to individual candidate learning gaps.",
    solution: "SecuNova engineered CanadaQuest as a mobile-first PWA with full offline capabilities, an adaptive question engine that prioritises low-mastery topics, and a modern WCAG AA accessible design system.",
    outcome: "Demonstrates SecuNova's proficiency in PWA offline caching, adaptive test engines, and high-accessibility design standards.",
    outcomeStats: [
      { value: "99+", label: "Lighthouse Performance Rating" },
      { value: "100%", label: "Offline Capability via PWA" },
      { value: "WCAG AA", label: "Accessibility Compliance" },
    ],
    features: [
      {
        iconName: "BookOpen",
        title: "Comprehensive Curriculum Engine",
        desc: "Modules covering Canadian history, governance systems, legal rights, and geography based on official preparation material.",
      },
      {
        iconName: "Zap",
        title: "Adaptive Exam Simulation",
        desc: "Tracks question mastery and automatically concentrates practice sets on areas requiring further study.",
      },
      {
        iconName: "Globe",
        title: "Offline Progressive Web App",
        desc: "Service worker architecture allows full study access and mock exams anywhere without an active network connection.",
      },
      {
        iconName: "Layout",
        title: "Accessible UI Architecture",
        desc: "Strictly adheres to WCAG 2.1 AA guidelines, featuring dynamic typography, high-contrast themes, and full keyboard control.",
      },
      {
        iconName: "BarChart2",
        title: "Local Mastery Analytics",
        desc: "Visual analytics dashboards providing real-time readiness scoring and domain-by-domain progress tracking.",
      },
      {
        iconName: "Star",
        title: "Official Format Testing",
        desc: "Simulates actual Canadian citizenship exam conditions with timed 20-question tests and immediate feedback.",
      },
    ],
    techStack: ["Next.js", "TypeScript", "PWA / Service Worker", "IndexedDB", "Tailwind CSS"],
    mediaSlots: [],
  },
};
