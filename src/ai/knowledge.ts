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
export const SUPPORT_EMAIL = 'hello@secunova.ca';

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
    title: 'Digital Transformation Consulting',
    category: 'strategic',
    keywords: [
      'digital transformation', 'transformation consulting', 'digital strategy',
      'system inefficiency', 'technology entropy', 'modernization', 'change management',
      'التحول الرقمي', 'استشارات التحول الرقمي', 'استراتيجية رقمية', 'تدهور تقني'
    ],
    answerEn:
      'We help leaders and organizations adapt to rapid technological changes and build sustainable digital strategies that eliminate system inefficiency and prevent technology entropy.',
    answerAr:
      'نساعد القادة والمؤسسات على التكيف مع التغيرات التكنولوجية السريعة وبناء استراتيجيات رقمية مستدامة تحمي المؤسسة من الكفاءة المنخفضة والتدهور التقني.',
    ctaEn: 'Explore Digital Transformation Consulting.',
    ctaAr: 'استكشف استشارات التحول الرقمي.',
    link: '/services'
  },
  {
    id: 'executive-leadership-innovation',
    title: 'Executive Leadership & Innovation Consulting',
    category: 'strategic',
    keywords: [
      'executive leadership', 'executive training', 'c-suite training', 'leadership programs', 'digital fluency',
      'decision making', 'executive education', 'innovation consulting', 'collaboration', 'co-create custom technology',
      'تدريب التنفيذيين', 'برامج القيادة الرقمية', 'استشارات الابتكار', 'التعاون التقني', 'ابتكار الحلول'
    ],
    answerEn:
      'We empower executives and leadership teams with strategic digital fluency while co-creating custom technology solutions tailored exactly to your organization\'s operational needs and vision.',
    answerAr:
      'نمكن التنفيذيين وصناع القرار بالمعرفة الرقمية الاستراتيجية إلى جانب الابتكار والإنتاج المشترك لحلول تقنية مخصصة تناسب رؤية وملاءمة المؤسسة.',
    ctaEn: 'Inquire about Executive Leadership & Innovation Consulting.',
    ctaAr: 'استفسر عن استشارات القيادة والابتكار للتنفيذيين.',
    link: '/contact'
  },
  {
    id: 'digital-project-management',
    title: 'Digital Project Management & PMaaS',
    category: 'strategic',
    keywords: [
      'project management', 'pmaas', 'strategic shield', 'technical project supervision',
      'project manager', 'agile pm', 'waterfall', 'vendor oversight', 'delivery management',
      'project governance', 'milestone tracking', 'risk management', 'project recovery'
    ],
    answerEn:
      'Our Digital Project Management service (including PMaaS - Project Management as a Service) embeds senior SecuNova consultants into your engagements. We enforce vendor accountability, protect budgets, eliminate scope creep, and ensure on-time delivery.',
    answerAr:
      'تتضمن خدمة إدارة المشاريع الرقمية (PMaaS - إدارة المشاريع كخدمة) إسناد خبراء SecuNova لكفالة تنفيذ مشاريعك بدقة. نحن نضمن مساجلة الموردين، حماية الميزانية، منع انحراف النطاق، والتسليم في المواعيد المحددة.',
    ctaEn: 'Learn more about PMaaS on our Digital Project Management page.',
    ctaAr: 'تعرف على نماذج تعاقد PMaaS من خلال صفحة إدارة المشاريع الرقمية.',
    link: '/services/digital-project-management'
  },
  {
    id: 'custom-web-app',
    title: 'Custom Web App (Websites & Landing Pages)',
    category: 'engineering',
    keywords: [
      'custom web app', 'web application', 'corporate websites', 'react.js', 'wordpress', 'vibe coding', 'ai-augmented',
      'landing page', 'high converting', 'funnels', 'google ads', 'meta ads', 'paid campaigns', 'lead generation',
      'تطبيقات الويب المخصصة', 'مواقع الشركات', 'صفحات الهبوط', 'برمجة رياكت'
    ],
    answerEn:
      'We build custom Web Apps, React.js applications, enterprise platforms, and high-converting landing page funnels using senior-led AI-augmented workflows (Vibe Coding) for maximum performance and ROI.',
    answerAr:
      'نبني تطبيقات ويب مخصصة (Custom Web Apps) ومواقع شركات وصفحات هبوط عالية التحويل باستخدام تقنيات React.js وبنية وسير عمل مدعوم بالذكاء الاصطناعي لتحقيق أعلى كفاءة وأداء.',
    ctaEn: 'Explore Custom Web App development.',
    ctaAr: 'استكشف خدمات تطوير تطبيقات الويب المخصصة.',
    link: '/services/web-development'
  },
  {
    id: 'web-maintenance',
    title: 'Web Maintenance & Performance Optimization',
    category: 'engineering',
    keywords: [
      'web maintenance', 'performance optimization', 'site speed', 'security updates',
      'uptime monitoring', 'bug fixes', 'retainer',
      'صيانة المواقع', 'تحسين الأداء', 'سرعة الموقع', 'تحديثات الأمان'
    ],
    answerEn:
      'Offering monthly retainer packages for site speed enhancements, security updates, uptime monitoring, and technical bug fixes to keep your digital assets bulletproof.',
    answerAr:
      'تقديم باقات صيانة شهرية تشمل تسريع المواقع، تحديثات الأمان، مراقبة الجاهزية 24/7، وإصلاح الأخطاء البرمجية.',
    ctaEn: 'Explore website maintenance retainers.',
    ctaAr: 'استكشف باقات صيانة المواقع.',
    link: '/services/managed-it'
  },
  {
    id: 'ui-ux-redesigns',
    title: 'Website & App UI/UX Redesigns',
    category: 'engineering',
    keywords: [
      'ui ux redesign', 'figma', 'wireframes', 'mockups', 'interface redesign',
      'human-centric design', 'user engagement',
      'إعادة تصميم الواجهات', 'تصميم UI UX', 'فيجما', 'تجربة المستخدم'
    ],
    answerEn:
      'Auditing existing platforms and delivering modern, human-centric interface wireframes and high-fidelity mockups (using Figma) that boost user engagement and credibility.',
    answerAr:
      'تدقيق المنصات الحالية وتقديم مخططات هيكلية ونماذج عالية الدقة (باستخدام Figma) تركز على الإنسان لرفع التفاعل والمصداقية.',
    ctaEn: 'Check UI/UX redesign offerings.',
    ctaAr: 'اطلع على عروض إعادة تصميم الواجهات.',
    link: '/services/ui-ux-design'
  },
  {
    id: 'b2b-copywriting',
    title: 'B2B Website Copywriting',
    category: 'engineering',
    keywords: [
      'copywriting', 'b2b copywriting', 'localized English', 'persuasive copy',
      'zero generic ai phrasing', 'content creation',
      'كتابة المحتوى', 'كتابة إعلانية', 'محتوى B2B', 'صياغة نصوص'
    ],
    answerEn:
      'Crafting persuasive, authoritative, and localized copy (English) that speaks directly to North American decision-makers, completely free of generic AI phrasing.',
    answerAr:
      'صياغة نصوص ترويجية ومحتوى بليغ وموجه خصيصًا لصناع القرار في أمريكا الشمالية باللغة الإنجليزية، بعيدًا عن العبارات الآلية المبتذلة.',
    ctaEn: 'Learn more about B2B copywriting.',
    ctaAr: 'تعرف على خدمة كتابة المحتوى B2B.',
    link: '/services/seo-marketing'
  },
  {
    id: 'seo-content-strategy',
    title: 'SEO Content Strategy',
    category: 'engineering',
    keywords: [
      'seo content', 'organic traffic', 'search strategy', 'blog posts',
      'service page content', 'target focused',
      'استراتيجية SEO', 'محتوى السيو', 'زيارات عضوية', 'تصدر نتائج البحث'
    ],
    answerEn:
      'Writing target-focused blog posts or service page content structured to capture organic search traffic and convert visitors into active pipeline opportunities.',
    answerAr:
      'كتابة المقالات وصفحات الخدمات الموجهة بهيكل مدروس لجلب الزيارات العضوية من محركات البحث وتحويلها إلى فرص عمل مؤكدة.',
    ctaEn: 'Explore SEO content strategies.',
    ctaAr: 'استكشف استراتيجيات محتوى SEO.',
    link: '/services/seo-marketing'
  },
  {
    id: 'digital-architecture-tech-stack-audits',
    title: 'Digital Architecture & Tech Stack Audits',
    category: 'strategic',
    keywords: [
      'digital architecture audit', 'tech stack audit', 'digital audit', 'security assessment',
      'subscription bloat', 'cost reduction', 'software selection', 'tool vetting',
      'تدقيق البنية الرقمية', 'تدقيق التقنيات', 'إلغاء الاشتراكات الزائدة', 'تقليل التكاليف', 'فحص الأمان'
    ],
    answerEn:
      'We conduct comprehensive forensic audits of your digital footprint, security posture, and software stack to eliminate subscription bloat, optimize infrastructure costs, and provide actionable technical roadmaps.',
    answerAr:
      'نقدم خدمات تدقيق جنائي وحيادي شامل للبصمة الرقمية والبنية التكنولوجية، لإلغاء الاشتراكات البرمجية الزائدة وتأمين الأنظمة وتزويدكم بخريطة طريق استراتيجية للتوسع.',
    ctaEn: 'Request a Digital Architecture & Tech Stack Audit.',
    ctaAr: 'اطلب تدقيق البنية الرقمية والتقنيات الآن.',
    link: '/contact'
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
      'We design defense-in-depth security architectures, conduct vulnerability assessments, penetration testing, and prepare your organization for SOC 2, ISO 27001, and NIST compliance. We protect your digital infrastructure from evolving threats.',
    answerAr:
      'نقوم بتصميم معماريات أمنية متكاملة (Defense-in-Depth)، وإجراء تقييمات الثغرات واختبارات الاختراق، وإعداد مؤسستك للامتثال لمعايير SOC 2 و ISO 27001 و NIST لحماية البنية التحتية من التهديدات.',
    ctaEn: 'Schedule a free cybersecurity risk assessment with our team.',
    ctaAr: 'احجز تقييمًا مجانيًا للمخاطر السيبرانية مع فريقنا المختص.',
    link: '/services/digital-project-management'
  },
  {
    id: 'products-portfolio',
    title: 'Proprietary Products & Client Work',
    category: 'products',
    keywords: [
      'products', 'our work', 'nova', 'career os', 'secuboost', 'moonyyc',
      'abarabic', 'yycecho', 'portfolio', 'case studies',
      'منتجاتنا', 'أعمالنا', 'مشاريعنا', 'نماذج أعمال'
    ],
    answerEn:
      'SecuNova develops proprietary privacy-first software products (such as Nova AI agent, Career OS, SecuBoost) and delivers custom client builds with 100% intellectual property transfer (e.g. MoonYYC, AB Arabic).',
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
