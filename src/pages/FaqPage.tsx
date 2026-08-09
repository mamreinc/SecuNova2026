import { useState, useMemo } from 'react';
import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';
import { Search, HelpCircle, ChevronDown, ArrowRight, Phone } from 'lucide-react';
import CtaSection from '../components/CtaSection';

interface FaqItem {
  category: string;
  q: string;
  a: string;
  link?: string;
  linkText?: string;
}

const FaqPage = () => {
  const [activeCategory, setActiveCategory] = useState<string>('All');
  const [searchQuery, setSearchQuery] = useState<string>('');
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const categories = [
    'All',
    'Strategic Advisory',
    'PMaaS & Governance',
    'IT & Security Audits',
    'Internal R&D Portfolio'
  ];

  const faqs = useMemo<FaqItem[]>(() => [
    // Strategic Advisory
    {
      category: 'Strategic Advisory',
      q: 'How does SecuNova Strategic Advisory differ from conventional IT consulting?',
      a: 'We operate as a strategic shield for corporate budgets. We start at the executive boardroom level, aligning technology roadmaps with financial goals, enforcing strict vendor oversight, and preventing capital waste before projects begin.',
      link: '/services/strategic-advisory-pmaas',
      linkText: 'Explore Strategic Advisory Practice'
    },
    {
      category: 'Strategic Advisory',
      q: 'What size organizations does SecuNova advise?',
      a: 'We primary serve mid-market to enterprise-grade corporations, board committees, and institutional investors in Calgary, Western Canada, and nationally.',
      link: '/about',
      linkText: 'Learn About Our Practice'
    },

    // PMaaS & Governance
    {
      category: 'PMaaS & Governance',
      q: 'What is Project Management as a Service (PMaaS)?',
      a: 'PMaaS delivers senior executive project management leadership on a flexible engagement model. We embed experienced directors into your initiative to manage vendor contracts, control timelines, enforce milestone budget gates, and report directly to your executive steering committee.',
      link: '/services/strategic-advisory-pmaas',
      linkText: 'Discover PMaaS Structure'
    },
    {
      category: 'PMaaS & Governance',
      q: 'How does SecuNova enforce vendor accountability?',
      a: 'We establish contract milestone gates before vendor invoices are approved for payment. We review architectural code, verify SLA performance metrics, and hold third-party implementation partners strictly accountable to initial bid commitments.',
      link: '/contact',
      linkText: 'Request Vendor Oversight Briefing'
    },

    // IT & Security Audits
    {
      category: 'IT & Security Audits',
      q: 'What does a Technical Infrastructure Forensic Audit cover?',
      a: 'Our forensic audits evaluate your entire technology stack: network perimeter integrity, server environments, cloud configurations, SaaS subscription spend line-items, and backup disaster recovery readiness. We deliver evidence-based, board-ready audit reports.',
      link: '/services/enterprise-it-security-audits',
      linkText: 'View Audit Modules'
    },
    {
      category: 'IT & Security Audits',
      q: 'How much capital can SaaS Subscription Bloat audits recover?',
      a: 'On average, enterprise audit engagements identify 15% to 35% in redundant software licenses, unassigned user seats, duplicate SaaS tool tiers, and unnegotiated auto-renewals that can be immediately eliminated.',
      link: '/services/enterprise-it-security-audits',
      linkText: 'Learn About SaaS Expense Audits'
    },

    // Internal R&D Portfolio
    {
      category: 'Internal R&D Portfolio',
      q: 'What is the purpose of SecuNova Proprietary R&D Portfolio?',
      a: 'We operate an active internal software engineering lab to build and maintain production platforms (such as Nova AI, Career OS, SecuBoost, and CanadaQuest). Building high-scale platforms in-house proves our technical execution standards, ensuring our advisory guidance is rooted in real-world production engineering.',
      link: '/about/our-work',
      linkText: 'Explore R&D Product Showcase'
    }
  ], []);

  const filteredFaqs = useMemo(() => {
    return faqs.filter(faq => {
      const matchesCategory = activeCategory === 'All' || faq.category === activeCategory;
      const matchesSearch = searchQuery.trim() === '' ||
        faq.q.toLowerCase().includes(searchQuery.toLowerCase()) ||
        faq.a.toLowerCase().includes(searchQuery.toLowerCase());
      return matchesCategory && matchesSearch;
    });
  }, [faqs, activeCategory, searchQuery]);

  const toggleAccordion = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div className="min-h-screen bg-white">
      <Helmet>
        <title>Frequently Asked Questions | SecuNova Consulting Calgary</title>
        <meta
          name="description"
          content="Find answers to executive questions about SecuNova Consulting: strategic advisory, PMaaS, forensic IT audits, and internal R&amp;D products."
        />
        <meta
          name="keywords"
          content="SecuNova FAQ, IT consulting questions Calgary, strategic advisory FAQ, PMaaS questions, enterprise IT audit FAQ"
        />
        <link rel="canonical" href="https://secunovainc.com/faq" />

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
      </Helmet>

      {/* Hero Section */}
      <section className="relative min-h-[70vh] overflow-hidden flex items-center justify-center pt-32 sm:pt-36 pb-16 bg-secunova-dark text-white">
        <div className="absolute inset-0 bg-gradient-to-br from-secunova-dark via-gray-900 to-secunova-blue opacity-95"></div>

        <div className="container mx-auto px-4 relative z-10 w-full">
          <div className="max-w-4xl mx-auto text-center">
            <div className="inline-flex items-center bg-white/10 backdrop-blur-md border border-white/20 px-4 py-2 rounded-full text-xs font-bold uppercase tracking-widest text-secunova-light mb-6">
              <HelpCircle className="h-4 w-4 mr-2" />
              Executive Knowledge Base
            </div>

            <h1 className="hero-heading mb-6">
              Frequently Asked <span className="text-secunova-light">Questions</span>
            </h1>

            <p className="text-base sm:text-lg text-blue-100 leading-relaxed max-w-2xl mx-auto mb-8">
              Clear answers regarding SecuNova advisory engagements, PMaaS execution, forensic IT audits, and our internal R&amp;D software portfolio.
            </p>

            {/* Search Input */}
            <div className="relative max-w-xl mx-auto">
              <Search className="absolute left-4 top-1/2 -translate-y-1/2 h-5 w-5 text-gray-400" />
              <input
                type="text"
                placeholder="Search executive questions or keywords..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full pl-12 pr-4 py-3.5 bg-white text-secunova-dark rounded-xl shadow-lg focus:outline-none focus:ring-2 focus:ring-secunova-light text-sm font-medium"
              />
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Main Content */}
      <section className="secunova-section secunova-section--gray">
        <div className="container mx-auto px-4">
          <div className="max-w-5xl mx-auto">

            {/* Category Filter Pills */}
            <div className="flex flex-wrap items-center justify-center gap-2 mb-12">
              {categories.map((cat) => (
                <button
                  key={cat}
                  onClick={() => { setActiveCategory(cat); setOpenIndex(0); }}
                  className={`px-4 py-2 rounded-xl text-xs font-bold transition-all duration-200 ${
                    activeCategory === cat
                      ? 'bg-secunova-blue text-white shadow-md scale-105'
                      : 'bg-white text-secunova-dark/70 hover:bg-gray-200 border border-gray-200'
                  }`}
                >
                  {cat}
                </button>
              ))}
            </div>

            {/* FAQ Accordion List */}
            {filteredFaqs.length === 0 ? (
              <div className="bg-white rounded-2xl p-12 text-center border border-gray-200 shadow-sm">
                <HelpCircle className="h-12 w-12 text-gray-300 mx-auto mb-4" />
                <h3 className="text-lg font-bold text-secunova-dark mb-2">No matching questions found</h3>
                <p className="text-sm text-gray-500 mb-6">Try adjusting your search terms or selecting another category.</p>
                <button
                  onClick={() => { setSearchQuery(''); setActiveCategory('All'); }}
                  className="btn btn-outline btn-sm"
                >
                  Reset Filters
                </button>
              </div>
            ) : (
              <div className="space-y-4">
                {filteredFaqs.map((faq, idx) => {
                  const isOpen = openIndex === idx;
                  return (
                    <div
                      key={idx}
                      className={`bg-white rounded-2xl border transition-all duration-200 overflow-hidden shadow-xs ${
                        isOpen ? 'border-secunova-blue shadow-md' : 'border-gray-200 hover:border-gray-300'
                      }`}
                    >
                      <button
                        onClick={() => toggleAccordion(idx)}
                        className="w-full p-6 text-left flex items-center justify-between gap-4 focus:outline-none"
                      >
                        <div className="flex items-center gap-3">
                          <span className="text-[10px] uppercase font-bold tracking-widest px-2.5 py-1 bg-secunova-blue/10 text-secunova-blue rounded-md flex-shrink-0">
                            {faq.category}
                          </span>
                          <h3 className="text-base md:text-lg font-bold text-secunova-dark leading-snug">
                            {faq.q}
                          </h3>
                        </div>
                        <ChevronDown
                          className={`h-5 w-5 text-secunova-blue transition-transform duration-300 flex-shrink-0 ${
                            isOpen ? 'rotate-180' : ''
                          }`}
                        />
                      </button>

                      {isOpen && (
                        <div className="px-6 pb-6 pt-0 border-t border-gray-100 text-sm text-secunova-dark/80 leading-relaxed space-y-4">
                          <p className="mt-3">{faq.a}</p>
                          {faq.link && (
                            <Link
                              to={faq.link}
                              className="inline-flex items-center text-xs font-bold text-secunova-blue hover:text-secunova-light transition-colors pt-2"
                            >
                              {faq.linkText || 'Learn More'} <ArrowRight className="h-3.5 w-3.5 ml-1" />
                            </Link>
                          )}
                        </div>
                      )}
                    </div>
                  );
                })}
              </div>
            )}

            {/* Direct Contact Support Callout */}
            <div className="mt-16 bg-gradient-to-br from-secunova-dark to-gray-900 text-white rounded-2xl p-8 shadow-xl text-center border border-gray-800">
              <h3 className="text-xl md:text-2xl font-bold mb-3">Have a specific executive inquiry?</h3>
              <p className="text-blue-100 text-sm max-w-2xl mx-auto mb-6">
                Our senior advisory partners are available for direct consultations to evaluate your enterprise project requirements.
              </p>
              <div className="flex flex-col sm:flex-row justify-center gap-4">
                <Link to="/contact" className="btn btn-gradient btn-md">
                  Contact Advisory Team <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
                <a href="tel:403-401-1552" className="btn btn-outline-light btn-md text-white">
                  <Phone className="mr-2 h-4 w-4" /> Call 403-401-1552
                </a>
              </div>
            </div>

          </div>
        </div>
      </section>

      <CtaSection />
    </div>
  );
};

export default FaqPage;