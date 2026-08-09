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
  answerAr: string;
  ctaEn?: string;
  ctaAr?: string;
  link?: string;
}

export const SUPPORT_PHONE = '403-401-1552';
export const SUPPORT_EMAIL = 'hello@secunovainc.com';

// Detect if query is Arabic
export function isArabicText(text: string): boolean {
  const arabicCharRegex = /[\u0600-\u06FF]/;
  return arabicCharRegex.test(text);
}

// Off-topic / Non-service keywords detection
const OFF_TOPIC_KEYWORDS = [
  'weather', 'joke', 'movie', 'recipe', 'football', 'soccer', 'game', 'python code for',
  'solve math', 'who is the president', 'capital of', 'translate this', 'tell me a story',
  'الطقس', 'نكتة', 'فيلم', 'وصفة', 'كرة القدم', 'رياضة', 'من هو رئيس', 'عاصمة'
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
      'ai automation', 'rpa', 'data analytics', 'change management',
      'التحول الرقمي', 'استشارات التحول الرقمي', 'استراتيجية رقمية', 'خارطة طريق رقمية', 'إعادة هندسة العمليات'
    ],
    answerEn:
      'We reengineer business processes, plan cloud migrations across AWS and GCP, integrate AI and RPA automation, and build data analytics strategies that raise efficiency and cut operational costs in the digital age.',
    answerAr:
      'نعيد هندسة العمليات التجارية، ونخطط للانتقال إلى الحوسبة السحابية عبر AWS و GCP، وندمج الذكاء الاصطناعي وأتمتة العمليات الروبوتية، ونبني استراتيجيات التحليلات المتقدمة لرفع الكفاءة وخفض التكاليف التشغيلية.',
    ctaEn: 'Explore Digital Transformation & Process Optimization.',
    ctaAr: 'استكشف التحول الرقمي وإعادة هندسة العمليات.',
    link: '/services/strategic-advisory-pmaas'
  },
  {
    id: 'it-operations-cloud-governance',
    title: 'IT Operations & Cloud Governance',
    category: 'strategic',
    keywords: [
      'it operations', 'cloud governance', 'cloud architecture', 'business continuity',
      'risk mitigation', 'governance', 'cloud strategy', 'disaster recovery',
      'حوكمة تكنولوجيا المعلومات', 'حوكمة السحابة', 'استمرارية الأعمال', 'استراتيجية السحابة', 'تخفيف المخاطر'
    ],
    answerEn:
      'We provide ongoing governance of IT operations, cloud architecture, business continuity, and risk mitigation, keeping your technology estate aligned with your corporate risk tolerance.',
    answerAr:
      'نقدم حوكمة مستمرة لعمليات تكنولوجيا المعلومات ومعمارية السحابة واستمرارية الأعمال وتخفيف المخاطر، مع إبقاء البنية التقنية متوافقة مع مستويات المخاطر المعتمدة في مؤسستك.',
    ctaEn: 'Inquire about IT Operations & Cloud Governance.',
    ctaAr: 'استفسر عن حوكمة عمليات تكنولوجيا المعلومات والسحابة.',
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
      'agile', 'waterfall', 'project recovery',
      'إدارة المشاريع', 'إدارة المشاريع كخدمة', 'الاستشارات الاستراتيجية', 'حوكمة المشاريع', 'إدارة الميزانيات'
    ],
    answerEn:
      'PMaaS is a flexible operational model: we provide project leadership, resource allocation, budget & cost control, risk management, quality assurance, governance & reporting, and Agile or Waterfall delivery, on demand and without a permanent project management team.',
    answerAr:
      'إدارة المشاريع كخدمة (PMaaS) هي نموذج تشغيلي مرن: نوفر قيادة المشاريع، وتخصيص الموارد، والتحكم بالميزانية والتكاليف، وإدارة المخاطر، وضمان الجودة، وحوكمة المشاريع والتقارير، وتطبيق منهجيات Agile أو Waterfall عند الطلب دون فريق دائم.',
    ctaEn: 'Learn more about Strategic Advisory & PMaaS.',
    ctaAr: 'تعرف على الاستشارات الاستراتيجية وخدمة إدارة المشاريع.',
    link: '/services/strategic-advisory-pmaas'
  },
  {
    id: 'enterprise-it-security-audits',
    title: 'Enterprise IT & Security Audits',
    category: 'security',
    keywords: [
      'enterprise audit', 'it audit', 'security audit', 'infrastructure audit', 'forensic audit',
      'attack surface', 'vulnerability', 'remediation plan', 'technical audit',
      'تدقيق تكنولوجيا المعلومات', 'تدقيق أمني', 'تدقيق البنية التحتية', 'أسطح الهجوم', 'خطة المعالجة'
    ],
    answerEn:
      'We conduct forensic audits of your entire IT infrastructure. We identify vulnerabilities, map the attack surface, and deliver a prioritized remediation plan tied to business risk.',
    answerAr:
      'نقوم بتدقيق جنائي شامل للبنية التحتية لتقنية المعلومات لديك. نحدد نقاط الضعف ونرسم خريطة أسطح الهجوم ونقدم خطة معالجة مرتبة حسب الأولوية ومرتبطة بمخاطر الأعمال.',
    ctaEn: 'Explore Enterprise IT & Security Audits.',
    ctaAr: 'استكشف تدقيق تكنولوجيا المعلومات والأمن للمؤسسات.',
    link: '/services/enterprise-it-security-audits'
  },
  {
    id: 'security-posture-reviews',
    title: 'IT Security Posture Reviews',
    category: 'security',
    keywords: [
      'security posture', 'security assessment', 'access control', 'identity review',
      'incident readiness', 'controls review', 'security baseline',
      'تقييم الوضع الأمني', 'مراجعة الضوابط الأمنية', 'مراجعة الوصول', 'جاهزية الحوادث'
    ],
    answerEn:
      'An objective review of your security controls, access policies, and incident readiness against current enterprise standards. No product pitches, just evidence.',
    answerAr:
      'مراجعة موضوعية لضوابطك الأمنية وسياسات الوصول وجاهزية الحوادث وفق المعايير المؤسسية الحالية. بدون ترويج لمنتجات، فقط أدلة.',
    ctaEn: 'Request an IT Security Posture Review.',
    ctaAr: 'اطلب مراجعة الوضع الأمني لتقنية المعلومات.',
    link: '/services/enterprise-it-security-audits'
  },
  {
    id: 'technology-expense-audits',
    title: 'Technology Expense & Subscription Audits',
    category: 'security',
    keywords: [
      'subscription bloat', 'cost reduction', 'expense audit', 'software licences', 'saas audit',
      'recurring spend', 'cost recovery', 'renewals',
      'الاشتراكات الزائدة', 'تدقيق المصاريف', 'تراخيص البرمجيات', 'تقليل التكاليف', 'استرداد التكاليف'
    ],
    answerEn:
      'A forensic line-item audit of your software subscriptions and recurring technology spend. We eliminate bloat and reclaim budget without reducing capability.',
    answerAr:
      'تدقيق جنائي تفصيلي لاشتراكاتك البرمجية ونفقاتك التقنية المتكررة. نحذف الهدر ونسترد الميزانية دون خفض القدرات.',
    ctaEn: 'Request a Technology Expense Audit.',
    ctaAr: 'اطلب تدقيق المصاريف التقنية والاشتراكات.',
    link: '/services/enterprise-it-security-audits'
  },
  {
    id: 'compliance-risk-advisory',
    title: 'Compliance & Risk Advisory',
    category: 'security',
    keywords: [
      'compliance', 'risk advisory', 'regulatory', 'controls', 'audit readiness',
      'documentation', 'governance',
      'الامتثال', 'استشارات المخاطر', 'الضوابط', 'جاهزية التدقيق', 'التوثيق'
    ],
    answerEn:
      'Practical advisory that translates regulatory obligations into concrete controls, documentation, and governance so your enterprise stays audit-ready.',
    answerAr:
      'استشارات عملية تحوّل الالتزامات التنظيمية إلى ضوابط وتوثيق وحوكمة ملموسة لإبقاء مؤسستك جاهزة للتدقيق.',
    ctaEn: 'Explore Compliance & Risk Advisory.',
    ctaAr: 'استكشف استشارات الامتثال والمخاطر.',
    link: '/services/enterprise-it-security-audits'
  },
  {
    id: 'board-ready-reporting',
    title: 'Board-Ready Audit Reporting',
    category: 'security',
    keywords: [
      'board reporting', 'executive summary', 'risk ratings', 'audit report', 'executive reporting',
      'risk register', 'actionable findings',
      'تقارير مجلس الإدارة', 'ملخص تنفيذي', 'تقييم المخاطر', 'تقرير التدقيق', 'التوصيات'
    ],
    answerEn:
      'Every audit concludes with board-ready reporting: clear risk ratings, priorities, and financial impact written for executives and directors, with ownership and estimated effort for each action.',
    answerAr:
      'ينتهي كل تدقيق بتقرير جاهز لمجلس الإدارة: تقييمات مخاطر واضحة وأولويات وأثر مالي مكتوبة للتنفيذيين، مع تحديد المسؤول والجهد التقديري لكل إجراء.',
    ctaEn: 'Request a board-ready audit proposal.',
    ctaAr: 'اطلب عرض تدقيق جاهزًا لمجلس الإدارة.',
    link: '/services/enterprise-it-security-audits'
  },
  {
    id: 'vendor-contract-review',
    title: 'IT Vendor & Contract Review',
    category: 'strategic',
    keywords: [
      'vendor review', 'contract review', 'sla', 'vendor oversight', 'licence audit',
      'negotiation', 'supplier management', 'software selection', 'tool vetting',
      'مراجعة الموردين', 'مراجعة العقود', 'اتفاقيات مستوى الخدمة', 'تفاوض', 'إدارة الموردين'
    ],
    answerEn:
      'We independently review vendor contracts and SLAs to identify overpriced subscriptions, duplicate licences, and non-performing agreements, and advise on renegotiation or transition.',
    answerAr:
      'نراجع عقود الموردين واتفاقيات مستوى الخدمة بشكل مستقل لتحديد الاشتراكات المبالغ فيها والتراخيص المكررة والاتفاقيات غير الملتزمة، وننصح بإعادة التفاوض أو التحول.',
    ctaEn: 'Request an IT Vendor & Contract Review.',
    ctaAr: 'اطلب مراجعة الموردين والعقود التقنية.',
    link: '/services/strategic-advisory-pmaas'
  },
  {
    id: 'cybersecurity-architecture',
    title: 'Cybersecurity Architecture & Compliance',
    category: 'security',
    keywords: [
      'cybersecurity', 'security audit', 'penetration testing', 'soc 2', 'iso 27001',
      'nist', 'threat detection', 'compliance audit', 'zero-trust', 'encryption',
      'الأمن السيبراني', 'حماية البيانات', 'اختبار الاختراق', 'تدقيق أمني', 'امتثال'
    ],
    answerEn:
      'We conduct vulnerability assessments, penetration testing, and security posture reviews, and prepare your organization for SOC 2, ISO 27001, and NIST compliance. We protect your digital infrastructure from evolving threats.',
    answerAr:
      'نقوم بإجراء تقييمات الثغرات واختبارات الاختراق ومراجعات الوضع الأمني، وإعداد مؤسستك للامتثال لمعايير SOC 2 و ISO 27001 و NIST لحماية البنية التحتية من التهديدات.',
    ctaEn: 'Schedule a free cybersecurity risk assessment with our team.',
    ctaAr: 'احجز تقييمًا مجانيًا للمخاطر السيبرانية مع فريقنا المختص.',
    link: '/services/enterprise-it-security-audits'
  },
  {
    id: 'products-portfolio',
    title: 'Proprietary Products & Client Work',
    category: 'products',
    keywords: [
      'products', 'our work', 'nova', 'career os', 'secuboost',
      'portfolio', 'case studies',
      'منتجاتنا', 'أعمالنا', 'مشاريعنا', 'نماذج أعمال'
    ],
    answerEn:
      'SecuNova develops proprietary privacy-first software products (such as Nova AI agent, Career OS, SecuBoost) and delivers custom client builds with 100% intellectual property transfer.',
    answerAr:
      'تطور SecuNova منتجات برمجية خاصة تتميز بالخصوصية (مثل Nova AI و Career OS و SecuBoost)، بالإضافة لتنفيذ مشاريع مخصصة للعملاء مع نقل الملكية الفكرية بالكامل.',
    ctaEn: 'View our complete product portfolio on Our Work page.',
    ctaAr: 'استعرض معرض منتجاتنا ومشاريعنا على صفحة أعمالنا.',
    link: '/about/our-work'
  },
  {
    id: 'contact-support',
    title: 'Contact SecuNova & Sales Support',
    category: 'contact',
    keywords: [
      'contact', 'phone', 'email', 'address', 'calgary office', 'talk to human',
      'تواصل معنا', 'رقم الهاتف', 'البريد الإلكتروني', 'موقع المكتب'
    ],
    answerEn:
      `You can reach SecuNova Inc. directly at ${SUPPORT_PHONE} or via email at ${SUPPORT_EMAIL}. Our Calgary office team responds within the same business day.`,
    answerAr:
      `يمكنك التواصل مباشرة مع SecuNova عبر الهاتف ${SUPPORT_PHONE} أو عبر البريد الإلكتروني ${SUPPORT_EMAIL}. يجيب فريقنا في كالغاري خلال نفس يوم العمل.`,
    ctaEn: 'Go to our Contact page to send a message.',
    ctaAr: 'انتقل لصفحة اتصل بنا لإرسال رسالة مباشرة.',
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
      if (item.answerAr.includes(token)) score += 1;
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
