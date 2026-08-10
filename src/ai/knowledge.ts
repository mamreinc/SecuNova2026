/**
 * SecuNova AI Services Knowledge Base & Intent Matcher
 * Strictly focused on SecuNova Services & Business Inquiries (English Only)
 */

export interface KnowledgeItem {
  id: string;
  title: string;
  category: 'strategic' | 'engineering' | 'security' | 'it-support' | 'products' | 'pricing' | 'contact';
  keywords: string[];
  answerEn: string;
  ctaEn?: string;
  link?: string;
}

export const SUPPORT_PHONE = '403-401-1552';
export const SUPPORT_EMAIL = 'hello@secunovainc.com';

// Detect if query contains non-Latin (non-English) script characters.
// Used to enforce English-only policy across the assistant.
const NON_LATIN_RANGES: RegExp[] = [
  /[\u0400-\u04FF]/, // Cyrillic
  /[\u0590-\u05FF]/, // Hebrew
  /[\u0600-\u06FF]/, // Arabic
  /[\u0900-\u097F]/, // Devanagari
  /[\u0E00-\u0E7F]/, // Thai
  /[\u3040-\u30FF]/, // Japanese kana
  /[\u3400-\u4DBF]/, // CJK Extension A
  /[\u4E00-\u9FFF]/, // CJK Unified Ideographs
  /[\uAC00-\uD7AF]/  // Hangul syllables
];

export function isNonEnglishText(text: string): boolean {
  return NON_LATIN_RANGES.some((regex) => regex.test(text));
}

// Off-topic / Non-service keywords detection
const OFF_TOPIC_KEYWORDS = [
  'weather', 'joke', 'movie', 'recipe', 'football', 'soccer', 'game', 'python code for',
  'solve math', 'who is the president', 'capital of', 'translate this', 'tell me a story'
];

export function isOffTopicQuery(query: string): boolean {
  const normalized = query.toLowerCase();
  return OFF_TOPIC_KEYWORDS.some(word => normalized.includes(word));
}

export const knowledgeBase: KnowledgeItem[] = [
  {
    id: 'digital-transformation',
    title: 'Digital Transformation & Process Optimization',
    category: 'strategic',
    keywords: [
      'digital transformation', 'transformation consulting', 'digital strategy', 'roadmap',
      'business process reengineering', 'bpr', 'cloud transformation', 'cloud migration',
      'ai automation', 'rpa', 'data analytics', 'change management'
    ],
    answerEn:
      'We reengineer business processes, plan cloud migrations across AWS and GCP, integrate AI and RPA automation, and build data analytics strategies that raise efficiency and cut operational costs in the digital age.',
    ctaEn: 'Explore Digital Transformation & Process Optimization.',
    link: '/services/strategic-advisory-pmaas'
  },
  {
    id: 'it-operations-cloud-governance',
    title: 'IT Operations & Cloud Governance',
    category: 'strategic',
    keywords: [
      'it operations', 'cloud governance', 'cloud architecture', 'business continuity',
      'risk mitigation', 'governance', 'cloud strategy', 'disaster recovery'
    ],
    answerEn:
      'We provide ongoing governance of IT operations, cloud architecture, business continuity, and risk mitigation, keeping your technology estate aligned with your corporate risk tolerance.',
    ctaEn: 'Inquire about IT Operations & Cloud Governance.',
    link: '/services/strategic-advisory-pmaas'
  },
  {
    id: 'strategic-advisory-pmaas',
    title: 'Strategic Advisory & PMaaS',
    category: 'strategic',
    keywords: [
      'project management', 'pmaas', 'strategic advisory', 'project leadership',
      'resource allocation', 'budget control', 'vendor oversight', 'delivery management',
      'project governance', 'milestone tracking', 'risk management', 'quality assurance',
      'agile', 'waterfall', 'project recovery'
    ],
    answerEn:
      'PMaaS is a flexible operational model: we provide project leadership, resource allocation, budget & cost control, risk management, quality assurance, governance & reporting, and Agile or Waterfall delivery, on demand and without a permanent project management team.',
    ctaEn: 'Learn more about Strategic Advisory & PMaaS.',
    link: '/services/strategic-advisory-pmaas'
  },
  {
    id: 'enterprise-it-security-audits',
    title: 'Enterprise IT & Security Audits',
    category: 'security',
    keywords: [
      'enterprise audit', 'it audit', 'security audit', 'infrastructure audit', 'forensic audit',
      'attack surface', 'vulnerability', 'remediation plan', 'technical audit'
    ],
    answerEn:
      'We conduct forensic audits of your entire IT infrastructure. We identify vulnerabilities, map the attack surface, and deliver a prioritized remediation plan tied to business risk.',
    ctaEn: 'Explore Enterprise IT & Security Audits.',
    link: '/services/enterprise-it-security-audits'
  },
  {
    id: 'security-posture-reviews',
    title: 'IT Security Posture Reviews',
    category: 'security',
    keywords: [
      'security posture', 'security assessment', 'access control', 'identity review',
      'incident readiness', 'controls review', 'security baseline'
    ],
    answerEn:
      'An objective review of your security controls, access policies, and incident readiness against current enterprise standards. No product pitches, just evidence.',
    ctaEn: 'Request an IT Security Posture Review.',
    link: '/services/enterprise-it-security-audits'
  },
  {
    id: 'technology-expense-audits',
    title: 'Technology Expense & Subscription Audits',
    category: 'security',
    keywords: [
      'subscription bloat', 'cost reduction', 'expense audit', 'software licences', 'saas audit',
      'recurring spend', 'cost recovery', 'renewals'
    ],
    answerEn:
      'A forensic line-item audit of your software subscriptions and recurring technology spend. We eliminate bloat and reclaim budget without reducing capability.',
    ctaEn: 'Request a Technology Expense Audit.',
    link: '/services/enterprise-it-security-audits'
  },
  {
    id: 'compliance-risk-advisory',
    title: 'Compliance & Risk Advisory',
    category: 'security',
    keywords: [
      'compliance', 'risk advisory', 'regulatory', 'controls', 'audit readiness',
      'documentation', 'governance'
    ],
    answerEn:
      'Practical advisory that translates regulatory obligations into concrete controls, documentation, and governance so your enterprise stays audit-ready.',
    ctaEn: 'Explore Compliance & Risk Advisory.',
    link: '/services/enterprise-it-security-audits'
  },
  {
    id: 'board-ready-reporting',
    title: 'Board-Ready Audit Reporting',
    category: 'security',
    keywords: [
      'board reporting', 'executive summary', 'risk ratings', 'audit report', 'executive reporting',
      'risk register', 'actionable findings'
    ],
    answerEn:
      'Every audit concludes with board-ready reporting: clear risk ratings, priorities, and financial impact written for executives and directors, with ownership and estimated effort for each action.',
    ctaEn: 'Request a board-ready audit proposal.',
    link: '/services/enterprise-it-security-audits'
  },
  {
    id: 'vendor-contract-review',
    title: 'IT Vendor & Contract Review',
    category: 'strategic',
    keywords: [
      'vendor review', 'contract review', 'sla', 'vendor oversight', 'licence audit',
      'negotiation', 'supplier management', 'software selection', 'tool vetting'
    ],
    answerEn:
      'We independently review vendor contracts and SLAs to identify overpriced subscriptions, duplicate licences, and non-performing agreements, and advise on renegotiation or transition.',
    ctaEn: 'Request an IT Vendor & Contract Review.',
    link: '/services/strategic-advisory-pmaas'
  },
  {
    id: 'cybersecurity-architecture',
    title: 'Cybersecurity Architecture & Compliance',
    category: 'security',
    keywords: [
      'cybersecurity', 'security audit', 'penetration testing', 'soc 2', 'iso 27001',
      'nist', 'threat detection', 'compliance audit', 'zero-trust', 'encryption'
    ],
    answerEn:
      'We conduct vulnerability assessments, penetration testing, and security posture reviews, and prepare your organization for SOC 2, ISO 27001, and NIST compliance. We protect your digital infrastructure from evolving threats.',
    ctaEn: 'Schedule a free cybersecurity risk assessment with our team.',
    link: '/services/enterprise-it-security-audits'
  },
  {
    id: 'products-portfolio',
    title: 'Client Work & R&D Portfolio',
    category: 'products',
    keywords: [
      'products', 'our work', 'nova', 'career os', 'secuboost',
      'portfolio', 'case studies'
    ],
    answerEn:
      'Our work page showcases proprietary R&D products such as Nova AI, Career OS, and SecuBoost, delivered under SecuNova project management supervision, alongside the advisory, audit, and governance engagements we lead for clients.',
    ctaEn: 'Browse our work and R&D showcase.',
    link: '/about/our-work'
  },
  {
    id: 'contact-support',
    title: 'Contact SecuNova & Sales Support',
    category: 'contact',
    keywords: [
      'contact', 'phone', 'email', 'address', 'calgary office', 'talk to human'
    ],
    answerEn:
      `You can reach SecuNova Inc. directly at ${SUPPORT_PHONE} or via email at ${SUPPORT_EMAIL}. Our Calgary office team responds within the same business day.`,
    ctaEn: 'Go to our Contact page to send a message.',
    link: '/contact'
  }
];

export function searchKnowledge(query: string, limit = 3): KnowledgeItem[] {
  const q = query.toLowerCase().trim();
  const tokens = q.split(/\s+/).filter(Boolean);

  const scored = knowledgeBase.map(item => {
    let score = 0;
    const keywords = item.keywords.map(k => k.toLowerCase());

    tokens.forEach(token => {
      keywords.forEach(kw => {
        if (kw === token) score += 5;
        else if (kw.includes(token) || token.includes(kw)) score += 2;
      });
      if (item.title.toLowerCase().includes(token)) score += 3;
      if (item.answerEn.toLowerCase().includes(token)) score += 1;
    });

    if (q.length > 3 && (item.title.toLowerCase().includes(q) || keywords.some(k => k.includes(q)))) {
      score += 4;
    }

    return { item, score };
  })
    .filter(x => x.score > 0)
    .sort((a, b) => b.score - a.score)
    .slice(0, limit)
    .map(x => x.item);

  return scored.length ? scored : [knowledgeBase[0], knowledgeBase[1]];
}
