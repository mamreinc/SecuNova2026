import React, { useState, useMemo } from 'react';
import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';
import { 
  ChevronDown, 
  Search, 
  HelpCircle, 
  Sparkles, 
  Shield, 
  Code, 
  Layout, 
  TrendingUp, 
  Briefcase, 
  FileSearch, 
  DollarSign, 
  ArrowRight, 
  CheckCircle2, 
  Phone, 
  Mail 
} from 'lucide-react';
import CtaSection from '../components/CtaSection';

interface FaqItem {
  q: string;
  a: string;
  category: string;
  link?: string;
  linkText?: string;
}

const FaqPage: React.FC = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [activeCategory, setActiveCategory] = useState<string>('All');
  const [openIndex, setOpenIndex] = useState<number | null>(0); // First item open by default

  const categories = [
    'All',
    'Strategic Consulting',
    'Digital Engineering',
    'UI/UX Design',
    'B2B SEO & Growth',
    'PMaaS & IT Governance',
    'Tech Audits & Security',
    'Pricing & Retainers'
  ];

  const faqs: FaqItem[] = [
    // 1. Strategic Consulting
    {
      category: 'Strategic Consulting',
      q: 'How does SecuNova Strategic Consulting differ from traditional IT vendor sales?',
      a: 'We operate as independent technical advocates, not vendors pushing proprietary licenses or managed service subscriptions. We evaluate your digital infrastructure, identify software entropy, and build zero-debt technology roadmaps tailored strictly to your business growth.',
      link: '/services#strategic-consulting',
      linkText: 'Explore Strategic Consulting'
    },
    {
      category: 'Strategic Consulting',
      q: 'What does a Strategic Consulting engagement include?',
      a: 'Our engagements include executive C-Suite technology alignment, forensic IT stack audits, software vendor evaluation, cloud architecture reviews, and a 90-day execution roadmap designed to eliminate software bloat and protect capital.',
      link: '/services#strategic-consulting',
      linkText: 'Learn about Boardroom Advisory'
    },
    {
      category: 'Strategic Consulting',
      q: 'Can SecuNova evaluate existing vendor contracts and third-party software tools?',
      a: 'Yes. We perform forensic vendor audits to identify overpriced subscriptions, duplicate software licenses, and non-performing SLAs, helping organizations negotiate better terms or transition to lean, custom-engineered alternatives.'
    },

    // 2. Digital Engineering & Custom Web Apps
    {
      category: 'Digital Engineering',
      q: 'Why does SecuNova build with pure React.js custom code instead of legacy CMS platforms like WordPress?',
      a: 'Legacy CMS platforms introduce plugin vulnerabilities, slow page speed, heavy maintenance costs, and database debt. Pure React.js and TypeScript custom applications offer instant page loads (sub-500ms), zero plugin dependencies, tight security, and complete architectural control.',
      link: '/services/web-development',
      linkText: 'View Custom Web Development'
    },
    {
      category: 'Digital Engineering',
      q: 'What is Vibe Coding and how does senior-led execution benefit our project?',
      a: 'Vibe Coding is our high-velocity engineering methodology combining senior software architectural discipline with modern AI-accelerated dev workflows. This allows us to build production-grade custom applications in weeks rather than months without compromising code quality.',
      link: '/services/web-development',
      linkText: 'Read about Vibe Coding'
    },
    {
      category: 'Digital Engineering',
      q: 'Who owns the intellectual property (IP) and source code upon completion?',
      a: 'You retain 100% full ownership of all intellectual property, source code, design files, and database schemas. Upon final milestone completion, all GitHub repositories and production deployment credentials are fully transferred to your organization.'
    },
    {
      category: 'Digital Engineering',
      q: 'Do you build custom API integrations and high-converting marketing funnels?',
      a: 'Yes. We engineer custom API connectors, CRM integrations, lead capture funnels, and enterprise web applications tailored to your exact operational workflows.'
    },

    // 3. UI/UX Design
    {
      category: 'UI/UX Design',
      q: 'What is included in a SecuNova UI/UX Design Audit?',
      a: 'Our UI/UX Audit analyzes user friction points, navigation flow, visual hierarchy, mobile responsiveness, accessibility (WCAG 2.1 compliance), and conversion bottlenecks across your digital assets.',
      link: '/services/ui-ux-design',
      linkText: 'Explore UI/UX Design Services'
    },
    {
      category: 'UI/UX Design',
      q: 'Do you deliver interactive Figma design systems and component libraries?',
      a: 'Yes. We deliver complete, production-ready Figma design systems with interactive prototypes, typography scales, color tokens, and BEM component rules that developers can implement seamlessly.',
      link: '/services/ui-ux-design',
      linkText: 'View Design System Showcase'
    },
    {
      category: 'UI/UX Design',
      q: 'How does user experience design impact business conversion rates?',
      a: 'Intuitive UX eliminates cognitive friction, guides high-intent buyers naturally to call-to-action triggers, and builds instant brand authority, driving higher conversion rates and lower customer acquisition costs.'
    },

    // 4. B2B SEO & Growth
    {
      category: 'B2B SEO & Growth',
      q: 'How does SecuNova approach B2B SEO and high-intent organic traffic acquisition?',
      a: 'We focus on high-intent B2B search terms rather than vanity traffic volume. We optimize technical SEO, Core Web Vitals (LCP/INP), structured Schema.org markup, and publish executive-grade content that positions your brand as an industry leader.',
      link: '/services/seo-marketing',
      linkText: 'Explore B2B SEO Strategy'
    },
    {
      category: 'B2B SEO & Growth',
      q: 'What tone of voice is used in your B2B executive copywriting?',
      a: 'We write for North American corporate decision-makers, executives, and technical buyers. Our copy is grounded, professional, direct, and completely free from AI clichés or generic fluff.'
    },
    {
      category: 'B2B SEO & Growth',
      q: 'How fast can we expect organic search ranking improvements?',
      a: 'Technical SEO fixes (such as speed optimization and Schema fixes) take effect within 2 to 4 weeks. High-intent B2B keyword ranking improvements typically build strong momentum over 60 to 90 days.'
    },

    // 5. PMaaS & IT Governance
    {
      category: 'PMaaS & IT Governance',
      q: 'What is Project Management as a Service (PMaaS)?',
      a: 'PMaaS provides senior project leadership on demand. We take accountability for project governance, vendor oversight, budget discipline, and milestone tracking without requiring a permanent C-suite hire.',
      link: '/services/digital-project-management',
      linkText: 'View Digital Project Management'
    },
    {
      category: 'PMaaS & IT Governance',
      q: 'How does SecuNova protect client capital during complex software migrations?',
      a: 'We enforce strict milestone sign-offs, independent code quality reviews, scope control, and transparent budget tracking to ensure third-party vendors deliver on contract promises without cost overruns.',
      link: '/services/digital-project-management',
      linkText: 'Learn about Vendor Oversight'
    },
    {
      category: 'PMaaS & IT Governance',
      q: 'Can SecuNova rescue a failing or delayed software development project?',
      a: 'Yes. We conduct rapid project diagnostics, audit existing codebases and project roadmaps, eliminate blockers, and re-establish disciplined execution to bring stalled projects back on schedule.'
    },

    // 6. Tech Audits & Security
    {
      category: 'Tech Audits & Security',
      q: 'What is a Forensic Tech Stack Audit?',
      a: 'A Forensic Tech Stack Audit evaluates your company\'s entire software ecosystem to identify redundant SaaS subscriptions, security vulnerabilities, shadow IT, and performance bottlenecks.',
      link: '/services#strategic-consulting',
      linkText: 'Request a Tech Stack Audit'
    },
    {
      category: 'Tech Audits & Security',
      q: 'How do you ensure security and privacy compliance in custom web builds?',
      a: 'All custom builds adhere to OWASP security principles, strict SSL encryption, content security policies (CSP), and privacy standards (PIPEDA, FOIP, GDPR). We also offer noindex, noarchive privacy configurations when requested.'
    },
    {
      category: 'Tech Audits & Security',
      q: 'Do you offer ongoing web application maintenance and monitoring?',
      a: 'Yes. We provide comprehensive web application maintenance, uptime monitoring, security patching, and continuous performance optimization.'
    },

    // 7. Pricing & Retainers
    {
      category: 'Pricing & Retainers',
      q: 'How are SecuNova engagements priced?',
      a: 'We offer transparent fixed-price project quotes for web development and UI/UX design, as well as monthly advisory retainers for Strategic Consulting and PMaaS. You always receive a clear scope and cost estimate upfront with zero hidden fees.'
    },
    {
      category: 'Pricing & Retainers',
      q: 'Do you offer post-launch support and warranties on custom code?',
      a: 'Yes. All custom code developments include a post-launch warranty covering bug fixes and adjustments, alongside optional long-term maintenance packages.'
    },
    {
      category: 'Pricing & Retainers',
      q: 'Where are your operations located, and how do we get started?',
      a: 'Our office is located in Calgary, Alberta, serving clients across Canada and North America. You can get started by calling us at 403-401-1552 or emailing hello@secunovainc.com to schedule a discovery consultation.',
      link: '/contact',
      linkText: 'Book a Consultation'
    }
  ];

  // Filter FAQs based on active category and search query
  const filteredFaqs = useMemo(() => {
    return faqs.filter(faq => {
      const matchesCategory = activeCategory === 'All' || faq.category === activeCategory;
      const matchesSearch = searchQuery === '' || 
        faq.q.toLowerCase().includes(searchQuery.toLowerCase()) || 
        faq.a.toLowerCase().includes(searchQuery.toLowerCase());
      return matchesCategory && matchesSearch;
    });
  }, [activeCategory, searchQuery, faqs]);

  // Structured Data Schema for FAQPage
  const faqSchema = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    'mainEntity': faqs.slice(0, 10).map(faq => ({
      '@type': 'Question',
      'name': faq.q,
      'acceptedAnswer': {
        '@type': 'Answer',
        'text': faq.a
      }
    }))
  };

  const categoryIcons: Record<string, React.ReactNode> = {
    'Strategic Consulting': <Shield className="h-4 w-4" />,
    'Digital Engineering': <Code className="h-4 w-4" />,
    'UI/UX Design': <Layout className="h-4 w-4" />,
    'B2B SEO & Growth': <TrendingUp className="h-4 w-4" />,
    'PMaaS & IT Governance': <Briefcase className="h-4 w-4" />,
    'Tech Audits & Security': <FileSearch className="h-4 w-4" />,
    'Pricing & Retainers': <DollarSign className="h-4 w-4" />
  };

  return (
    <div className="min-h-screen bg-white">
      <Helmet>
        <title>Frequently Asked Questions | SecuNova Consulting Calgary</title>
        <meta
          name="description"
          content="Find answers to executive questions about SecuNova Consulting: digital transformation strategy, custom web development, UI/UX design, B2B SEO, and digital project management (PMaaS) in Calgary."
        />
        <meta
          name="keywords"
          content="SecuNova FAQ, IT consulting questions, custom web development FAQ, React JS development Calgary, UI UX design FAQ, PMaaS questions, B2B SEO Calgary, tech stack audit, SecuNova Consulting"
        />
        <link rel="canonical" href="https://secunovainc.com/faq" />

        {/* OpenGraph */}
        <meta property="og:title" content="Frequently Asked Questions | SecuNova Consulting" />
        <meta property="og:description" content="Answers to executive questions on Strategic Consulting, Custom Web Apps, UI/UX Design, B2B SEO, and PMaaS Governance." />
        <meta property="og:url" content="https://secunovainc.com/faq" />
        <meta property="og:type" content="website" />
        <meta property="og:image" content="https://secunovainc.com/og-image.png" />
        <meta property="og:image:width" content="1200" />
        <meta property="og:image:height" content="630" />
        <meta property="og:site_name" content="SecuNova Consulting" />

        {/* Twitter Card */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Frequently Asked Questions | SecuNova Consulting" />
        <meta name="twitter:description" content="Executive answers on consulting, custom web apps, UI/UX design, B2B SEO, and PMaaS." />
        <meta name="twitter:image" content="https://secunovainc.com/og-image.png" />

        {/* BreadcrumbList Schema */}
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "BreadcrumbList",
            "itemListElement": [
              { "@type": "ListItem", "position": 1, "name": "Home", "item": "https://secunovainc.com" },
              { "@type": "ListItem", "position": 2, "name": "FAQ", "item": "https://secunovainc.com/faq" }
            ]
          })}
        </script>

        {/* Structured Data */}
        <script type="application/ld+json">{JSON.stringify(faqSchema)}</script>
      </Helmet>

      {/* Hero Section */}
      <section className="relative min-h-[50vh] flex items-center justify-center pt-28 sm:pt-36 pb-16 overflow-hidden bg-gradient-to-b from-secunova-dark via-secunova-dark to-[#0B121E]">
        <div className="absolute inset-0 bg-gradient-to-br from-secunova-dark/95 via-secunova-dark/90 to-secunova-blue/80"></div>
        <div className="container mx-auto px-4 sm:px-6 relative z-10 w-full">
          <div className="max-w-4xl mx-auto text-center text-white">
            <div className="inline-flex items-center bg-white/10 backdrop-blur-sm border border-white/20 px-6 py-3 rounded-full text-sm font-medium mb-6">
              <HelpCircle className="h-4 w-4 mr-2 text-white" />
              Executive FAQ Knowledge Base
            </div>
            
            <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold mb-6 leading-tight">
              Frequently Asked <span className="text-secunova-light">Questions</span>
            </h1>

            <p className="text-lg sm:text-xl text-gray-300 max-w-2xl mx-auto leading-relaxed mb-8">
              Straightforward answers about our Strategic Consulting, Custom Web Development, UI/UX Design, B2B SEO, and PMaaS Governance services.
            </p>

            {/* Interactive Search Box */}
            <div className="relative max-w-2xl mx-auto">
              <div className="relative flex items-center">
                <Search className="absolute left-4 h-5 w-5 text-gray-400 pointer-events-none" />
                <input
                  type="text"
                  placeholder="Search questions (e.g. React.js, PMaaS, Pricing, UI/UX, SEO)..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="w-full pl-12 pr-4 py-4 rounded-xl bg-white/10 backdrop-blur-md border border-white/20 text-white placeholder-gray-300 focus:outline-none focus:ring-2 focus:ring-secunova-light transition-all text-base shadow-xl"
                />
                {searchQuery && (
                  <button
                    onClick={() => setSearchQuery('')}
                    className="absolute right-4 text-xs bg-white/20 text-white px-2.5 py-1 rounded-md hover:bg-white/30 transition-colors"
                  >
                    Clear
                  </button>
                )}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Main FAQ Content Section */}
      <section className="secunova-section secunova-section--light">
        <div className="container mx-auto px-4 sm:px-6">
          <div className="max-w-6xl mx-auto">
            
            {/* Category Filter Tabs */}
            <div className="flex items-center justify-start sm:justify-center gap-2 overflow-x-auto pb-4 mb-12 scrollbar-none">
              {categories.map((cat, idx) => (
                <button
                  key={idx}
                  onClick={() => {
                    setActiveCategory(cat);
                    setOpenIndex(0);
                  }}
                  className={`px-4 py-2.5 rounded-full text-sm font-semibold whitespace-nowrap transition-all flex items-center gap-2 border ${
                    activeCategory === cat
                      ? 'bg-secunova-blue text-white border-secunova-blue shadow-md'
                      : 'bg-white text-gray-600 border-gray-200 hover:border-gray-300 hover:bg-gray-50'
                  }`}
                >
                  {cat !== 'All' && categoryIcons[cat]}
                  <span>{cat}</span>
                </button>
              ))}
            </div>

            {/* Results Count Summary */}
            <div className="flex items-center justify-between mb-8 pb-4 border-b border-gray-200">
              <div className="text-sm font-semibold text-gray-600 flex items-center gap-2">
                <Sparkles className="h-4 w-4 text-secunova-blue" />
                Showing {filteredFaqs.length} {filteredFaqs.length === 1 ? 'question' : 'questions'}
                {activeCategory !== 'All' && ` in ${activeCategory}`}
                {searchQuery && ` for "${searchQuery}"`}
              </div>
              {(searchQuery || activeCategory !== 'All') && (
                <button
                  onClick={() => {
                    setSearchQuery('');
                    setActiveCategory('All');
                  }}
                  className="text-xs font-semibold text-secunova-blue hover:underline"
                >
                  Reset Filters
                </button>
              )}
            </div>

            {/* Accordions */}
            {filteredFaqs.length > 0 ? (
              <div className="space-y-4">
                {filteredFaqs.map((faq, index) => {
                  const isOpen = openIndex === index;
                  return (
                    <div
                      key={index}
                      className={`secunova-card transition-all duration-300 border ${
                        isOpen
                          ? 'border-secunova-blue/40 shadow-lg bg-blue-50/20'
                          : 'border-gray-200 bg-white hover:border-gray-300'
                      }`}
                    >
                      <button
                        onClick={() => setOpenIndex(isOpen ? null : index)}
                        className="w-full text-left p-6 flex items-start justify-between gap-4 focus:outline-none"
                      >
                        <div className="flex items-center gap-3">
                          <span className="p-2 rounded-lg bg-blue-50 text-secunova-blue shrink-0 hidden sm:flex">
                            {categoryIcons[faq.category] || <HelpCircle className="h-4 w-4" />}
                          </span>
                          <div>
                            <span className="text-xs font-bold uppercase tracking-wider text-secunova-blue block mb-1">
                              {faq.category}
                            </span>
                            <h3 className="text-lg sm:text-xl font-bold text-secunova-dark leading-snug">
                              {faq.q}
                            </h3>
                          </div>
                        </div>
                        <div className={`p-2 rounded-full transition-transform duration-300 shrink-0 ${
                          isOpen ? 'rotate-180 bg-secunova-blue text-white' : 'bg-gray-100 text-gray-500'
                        }`}>
                          <ChevronDown className="h-5 w-5" />
                        </div>
                      </button>

                      {isOpen && (
                        <div className="px-6 pb-6 pt-2 border-t border-gray-100 text-gray-700 leading-relaxed text-base">
                          <p className="mb-4">{faq.a}</p>
                          {faq.link && (
                            <Link
                              to={faq.link}
                              className="inline-flex items-center gap-2 text-sm font-bold text-secunova-blue hover:underline"
                            >
                              <span>{faq.linkText || 'Learn More'}</span>
                              <ArrowRight className="h-4 w-4" />
                            </Link>
                          )}
                        </div>
                      )}
                    </div>
                  );
                })}
              </div>
            ) : (
              <div className="text-center py-16 bg-gray-50 rounded-2xl border border-gray-200">
                <HelpCircle className="h-12 w-12 text-gray-400 mx-auto mb-4" />
                <h3 className="text-xl font-bold text-secunova-dark mb-2">No matching questions found</h3>
                <p className="text-gray-600 mb-6 max-w-md mx-auto">
                  We couldn't find any questions matching your search query. Have a specific question for our engineers?
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <button
                    onClick={() => {
                      setSearchQuery('');
                      setActiveCategory('All');
                    }}
                    className="btn btn-outline btn-md"
                  >
                    Clear Search
                  </button>
                  <Link to="/contact" className="btn btn-gradient btn-md">
                    Contact Us Directly
                  </Link>
                </div>
              </div>
            )}
          </div>
        </div>
      </section>

      {/* Quick Direct Support Contact Section */}
      <section className="secunova-section secunova-section--gray">
        <div className="container mx-auto px-4 sm:px-6">
          <div className="max-w-4xl mx-auto bg-white rounded-2xl p-8 sm:p-12 border border-gray-200 shadow-xl flex flex-col md:flex-row items-center justify-between gap-8">
            <div>
              <span className="text-xs font-bold uppercase tracking-wider text-secunova-blue bg-blue-50 px-3 py-1 rounded-full border border-blue-200 inline-block mb-3">
                Have a Specific Technical Question?
              </span>
              <h3 className="text-2xl sm:text-3xl font-extrabold text-secunova-dark mb-2">
                Speak directly with a Senior Engineer
              </h3>
              <p className="text-gray-600 text-base max-w-lg">
                No salespeople or account managers. Get direct technical answers to your strategy, architecture, or project governance questions.
              </p>
            </div>
            <div className="flex flex-col sm:flex-row gap-3 w-full md:w-auto shrink-0">
              <a
                href="tel:403-401-1552"
                className="btn btn-gradient btn-md flex items-center justify-center gap-2"
              >
                <Phone className="h-4 w-4 text-white" />
                <span>403-401-1552</span>
              </a>
              <a
                href="mailto:hello@secunovainc.com"
                className="btn btn-outline btn-md flex items-center justify-center gap-2"
              >
                <Mail className="h-4 w-4 text-secunova-blue" />
                <span>Email Us</span>
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Bottom Executive CTA */}
      <CtaSection
        title="Ready to Elevate Your Digital Strategy?"
        subtitle="Book a technical discovery session with SecuNova's principal engineers in Calgary, AB."
        ctaText="Schedule Technical Consultation"
        ctaLink="/contact"
      />
    </div>
  );
};

export default FaqPage;