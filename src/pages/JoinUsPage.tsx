import { useState } from 'react';
import { Helmet } from 'react-helmet-async';
import { 
  Users, Crown, DollarSign, Star, ArrowRight, 
  Mail, Phone, Lightbulb, Briefcase, 
  Shield, Network, Handshake, ArrowUpRight, Lock, PieChart, Check
} from 'lucide-react';

type PartnershipTrackId = 'investors' | 'cofounders';

const JoinUsPage = () => {
  const [activeTab, setActiveTab] = useState<PartnershipTrackId>('investors');

  const PARTNERSHIP_TRACKS = [
    {
      id: 'investors',
      tabLabel: 'Capital & Investors',
      badge: 'Seed & Growth Equity',
      title: 'Early-Stage & Growth Capital Investment',
      icon: <DollarSign className="h-7 w-7 text-white" />,
      description: 'Allocate capital into a high-margin, zero-debt Canadian technology firm with proven product-market fit, senior leadership, and high market demand across Alberta and North America.',
      highlights: [
        'Ground-floor equity allocation in a high-growth Canadian IT company',
        'Direct access to senior executive management and quarterly financial reports',
        'High-margin revenue streams across proprietary software and enterprise consulting',
        'Structured exit pathways through acquisition or secondary share liquidity'
      ],
      ctaText: 'Inquire for Investor Deck',
      contactEmail: 'invest@secunovainc.com',
      subject: 'Inquiry: Strategic Capital & Investment Opportunities'
    },
    {
      id: 'cofounders',
      tabLabel: 'Co-Founders & Executive Partners',
      badge: 'Executive Leadership',
      title: 'Co-Founder & Specialized Division Leadership',
      icon: <Crown className="h-7 w-7 text-white" />,
      description: 'Help shape the future of SecuNova Inc. by establishing and leading specialized practice divisions in AI Automation, Cybersecurity, or Cloud Infrastructure with equity co-ownership.',
      highlights: [
        'Executive co-founder equity stake and direct profit sharing',
        'Full operational authority to build and scale your specialized practice group',
        'Access to SecuNova shared enterprise infrastructure, branding, and lead generation',
        'Collaborative C-Suite decision-making authority on corporate growth strategy'
      ],
      ctaText: 'Explore Leadership Roles',
      contactEmail: 'careers@secunovainc.com',
      subject: 'Inquiry: Executive Leadership & Co-Founder Position'
    }
  ];

  const WHY_SECUNOVA_METRICS = [
    {
      metric: '$12 Billion',
      label: 'Alberta IT Market Demand',
      desc: 'High demand across Calgary, Edmonton, and regional enterprises for modern software and cybersecurity.',
      icon: <Briefcase className="h-6 w-6 text-secunova-blue" />
    },
    {
      metric: '100% IP',
      label: 'Client IP Ownership',
      desc: 'We transfer full code ownership, building high client trust and repeat enterprise referrals.',
      icon: <Shield className="h-6 w-6 text-secunova-blue" />
    },
    {
      metric: 'Zero-Debt',
      label: 'Financial Architecture',
      desc: 'Profitable core operational model driven by senior-led execution and zero debt overhead.',
      icon: <PieChart className="h-6 w-6 text-secunova-light" />
    },
    {
      metric: '50+ Team',
      label: 'Specialist Network',
      desc: 'Battle-tested network of senior Canadian software engineers, architects, and cybersecurity leads.',
      icon: <Users className="h-6 w-6 text-secunova-blue" />
    }
  ];

  const OPERATIONAL_PILLARS = [
    {
      title: 'Senior-Led Execution',
      desc: 'We do not pass client work to junior staff. Every project is planned, architected, and reviewed by senior engineers with 10+ years of proven industry experience.',
      icon: <Crown className="h-6 w-6 text-white" />
    },
    {
      title: 'Zero Vendor Lock-In',
      desc: 'Clients retain full ownership of source code, deployment assets, and architecture. This transparent approach generates high customer loyalty and multi-year renewals.',
      icon: <Lock className="h-6 w-6 text-white" />
    },
    {
      title: 'Agile Delivery Network',
      desc: 'Our flexible consultant network scales instantly up or down based on client scope, eliminating unnecessary overhead while maximizing margin.',
      icon: <Network className="h-6 w-6 text-white" />
    }
  ];

  const ENGAGEMENT_STEPS = [
    {
      step: '01',
      title: 'Confidential Discussion',
      desc: 'Schedule a private consultation with our founder to review alignment, mutual goals, and financial or technical objectives.'
    },
    {
      step: '02',
      title: 'Model & Terms Review',
      desc: 'Examine detailed business projections, investment decks, equity structures, or executive agreement terms.'
    },
    {
      step: '03',
      title: 'Agreement Structuring',
      desc: 'Finalize a tailored legal agreement, NDA, investment note, or executive co-founder contract structured for clarity and long-term security.'
    },
    {
      step: '04',
      title: 'Launch & Growth',
      desc: 'Integrate into SecuNova operations, deploy capital, or start leading your practice division with full corporate support.'
    }
  ];

  const activeTrackData = PARTNERSHIP_TRACKS.find(t => t.id === activeTab) || PARTNERSHIP_TRACKS[0];

  return (
    <div className="min-h-screen bg-white">
      <Helmet>
        <title>Join SecuNova Consulting | Investment &amp; Executive Partnership Opportunities</title>
        <meta name="description" content="Partner with SecuNova Consulting in Calgary, Alberta. Explore seed investment opportunities and executive co-founder leadership roles." />
        <meta name="keywords" content="SecuNova investment, Calgary IT startup investment, co-founder opportunity Calgary, tech equity Alberta, SecuNova partnership" />
        <link rel="canonical" href="https://secunovainc.com/join-us" />

        <meta property="og:title" content="Join SecuNova Consulting | Capital &amp; Executive Partnerships" />
        <meta property="og:description" content="Invest and scale with a senior-led Canadian technology firm redefining enterprise IT delivery." />
        <meta property="og:url" content="https://secunovainc.com/join-us" />
        <meta property="og:type" content="website" />
        <meta property="og:image" content="https://secunovainc.com/og-image.png" />
        <meta property="og:image:width" content="1200" />
        <meta property="og:image:height" content="630" />
        <meta property="og:site_name" content="SecuNova Consulting" />

        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Join SecuNova Consulting | Capital &amp; Leadership" />
        <meta name="twitter:description" content="Investment and executive co-founder leadership opportunities." />
        <meta name="twitter:image" content="https://secunovainc.com/og-image.png" />

        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "WebPage",
            "name": "Join SecuNova Consulting Investor & Co-Founder Opportunities",
            "description": "Investment and executive co-founder leadership opportunities with SecuNova Consulting.",
            "publisher": {
              "@type": "Organization",
              "name": "SecuNova Inc.",
              "alternateName": "SecuNova Consulting",
              "url": "https://secunovainc.com"
            }
          })}
        </script>
      </Helmet>

      {/* ─── Hero Section ─── */}
      <section className="relative min-h-[70vh] flex items-center pt-32 sm:pt-36 pb-16 bg-secunova-dark overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-secunova-dark via-gray-900 to-secunova-blue/40"></div>
        <div className="absolute -top-40 -right-40 w-96 h-96 bg-secunova-blue/20 rounded-full blur-3xl"></div>
        <div className="absolute -bottom-40 -left-40 w-96 h-96 bg-secunova-light/10 rounded-full blur-3xl"></div>

        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-md border border-white/20 px-4 py-2 rounded-full text-xs font-semibold uppercase tracking-wider text-secunova-light mb-6">
              <Star className="h-4 w-4 text-yellow-400 fill-yellow-400" />
              Executive Growth &amp; Investor Pathways
            </div>

            <h1 className="hero-heading mb-6">
              Invest &amp; Scale With <span className="bg-clip-text text-transparent bg-gradient-to-r from-secunova-blue via-sky-400 to-secunova-light">SecuNova Inc.</span>
            </h1>

            <p className="text-lg sm:text-xl text-gray-300 leading-relaxed max-w-3xl mx-auto mb-10">
              A federally registered Canadian technology firm headquartered in Calgary, Alberta. We partner with strategic investors and executive co-founders to deliver world-class software, cybersecurity, and digital infrastructure.
            </p>

            <div className="flex flex-wrap justify-center gap-4">
              <a
                href="#partnership-tracks"
                className="inline-flex items-center gap-2 px-8 py-4 bg-secunova-blue text-white font-bold rounded-xl hover:bg-secunova-blue/90 transition-all shadow-lg hover:shadow-secunova-blue/25"
              >
                <span>Explore Executive Tracks</span>
                <ArrowRight className="h-5 w-5" />
              </a>
              <a
                href="mailto:invest@secunovainc.com"
                className="inline-flex items-center gap-2 px-8 py-4 bg-white/10 backdrop-blur-md border border-white/20 text-white font-bold rounded-xl hover:bg-white/20 transition-all"
              >
                <Mail className="h-5 w-5 text-secunova-light" />
                <span>Contact Leadership Directly</span>
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* ─── Company Foundation Metrics ─── */}
      <section className="secunova-section secunova-section--gray border-y border-gray-200">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
            {WHY_SECUNOVA_METRICS.map((item, index) => (
              <div key={index} className="p-6 rounded-2xl bg-white border border-gray-200/80 shadow-xs hover:shadow-md transition-shadow">
                <div className="w-12 h-12 rounded-xl bg-secunova-blue/10 flex items-center justify-center mb-4">
                  {item.icon}
                </div>
                <div className="text-2xl font-black text-secunova-dark mb-1">{item.metric}</div>
                <div className="text-sm font-bold text-secunova-blue mb-2">{item.label}</div>
                <p className="text-xs text-gray-600 leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ─── Interactive Partnership Tracks (Core Section) ─── */}
      <section id="partnership-tracks" className="secunova-section secunova-section--light">
        <div className="container mx-auto px-4 max-w-6xl">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <span className="text-xs font-bold uppercase tracking-wider text-secunova-blue bg-secunova-blue/10 px-3.5 py-1.5 rounded-full border border-secunova-blue/20 inline-block mb-3">
              Two Executive Pathways
            </span>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-secunova-dark mb-4">
              Choose How You Partner With SecuNova
            </h2>
            <p className="text-gray-600 leading-relaxed">
              Whether you represent investment capital or executive co-founder leadership, we offer clear legal and financial frameworks for collaboration.
            </p>
          </div>

          {/* Tab Navigation */}
          <div className="flex flex-wrap justify-center gap-2 mb-10 p-1.5 bg-gray-100/80 rounded-2xl max-w-2xl mx-auto border border-gray-200">
            {PARTNERSHIP_TRACKS.map((track) => (
              <button
                key={track.id}
                onClick={() => setActiveTab(track.id as PartnershipTrackId)}
                className={`px-6 py-3.5 rounded-xl text-xs sm:text-sm font-bold transition-all cursor-pointer flex-1 ${
                  activeTab === track.id
                    ? 'bg-secunova-blue text-white shadow-md'
                    : 'text-gray-600 hover:text-secunova-dark hover:bg-gray-200/60'
                }`}
              >
                {track.tabLabel}
              </button>
            ))}
          </div>

          {/* Selected Track Detailed Card */}
          <div className="rounded-3xl bg-gray-900 text-white p-8 sm:p-12 border border-gray-800 shadow-2xl relative overflow-hidden">
            <div className="absolute top-0 right-0 w-80 h-80 bg-secunova-blue/10 rounded-full blur-3xl pointer-events-none"></div>

            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center relative z-10">
              <div className="lg:col-span-7 space-y-6">
                <div className="inline-flex items-center gap-2 bg-secunova-blue/20 border border-secunova-light/30 text-secunova-light px-3.5 py-1 rounded-full text-xs font-semibold">
                  <Star className="h-3.5 w-3.5 text-secunova-light fill-secunova-light" />
                  {activeTrackData.badge}
                </div>

                <h3 className="text-2xl sm:text-3xl font-bold leading-tight">{activeTrackData.title}</h3>
                <p className="text-gray-300 text-base leading-relaxed">{activeTrackData.description}</p>

                <div className="space-y-3 pt-2">
                  <h4 className="text-xs font-bold uppercase tracking-wider text-secunova-light">Key Benefits &amp; Offerings:</h4>
                  {activeTrackData.highlights.map((highlight, idx) => (
                    <div key={idx} className="flex items-start gap-3">
                      <div className="w-5 h-5 rounded-full bg-secunova-blue flex items-center justify-center flex-shrink-0 mt-0.5">
                        <Check className="h-3 w-3 text-white" />
                      </div>
                      <span className="text-sm text-gray-200">{highlight}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="lg:col-span-5 bg-white/10 backdrop-blur-xl border border-white/20 rounded-2xl p-6 sm:p-8 space-y-6">
                <div className="w-14 h-14 rounded-2xl bg-secunova-blue flex items-center justify-center shadow-lg shadow-secunova-blue/30">
                  {activeTrackData.icon}
                </div>

                <div>
                  <h4 className="text-lg font-bold text-white mb-2">Direct Channel Request</h4>
                  <p className="text-xs text-blue-100/90 leading-relaxed">
                    Connect directly with our corporate development team to request legal documents, equity terms, or investor decks.
                  </p>
                </div>

                <div className="pt-2 space-y-3">
                  <a
                    href={`mailto:${activeTrackData.contactEmail}?subject=${encodeURIComponent(activeTrackData.subject)}`}
                    className="w-full inline-flex items-center justify-center gap-2 px-6 py-3.5 bg-secunova-blue hover:bg-secunova-blue/90 text-white font-bold rounded-xl transition-all shadow-md"
                  >
                    <span>{activeTrackData.ctaText}</span>
                    <ArrowUpRight className="h-4 w-4" />
                  </a>

                  <div className="text-center">
                    <span className="text-[11px] text-blue-200/90">Direct Email: </span>
                    <a href={`mailto:${activeTrackData.contactEmail}`} className="text-[11px] font-semibold text-secunova-light hover:underline">
                      {activeTrackData.contactEmail}
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ─── Operational Philosophy & Edge ─── */}
      <section className="secunova-section secunova-section--gray border-y border-gray-200">
        <div className="container mx-auto px-4 max-w-6xl">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <span className="text-xs font-bold uppercase tracking-wider text-secunova-blue bg-secunova-blue/10 px-3.5 py-1.5 rounded-full border border-secunova-blue/20 inline-block mb-3">
              Why Partner With SecuNova
            </span>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-secunova-dark mb-4">
              Engineered For High Growth &amp; Long-Term Trust
            </h2>
            <p className="text-gray-600 leading-relaxed">
              We operate differently than legacy consulting agencies or bloated software houses.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {OPERATIONAL_PILLARS.map((pillar, idx) => (
              <div key={idx} className="p-8 rounded-2xl bg-white border border-gray-200 shadow-sm hover:shadow-lg transition-all">
                <div className="w-12 h-12 rounded-xl bg-secunova-dark flex items-center justify-center mb-6">
                  {pillar.icon}
                </div>
                <h3 className="text-xl font-bold text-secunova-dark mb-3">{pillar.title}</h3>
                <p className="text-sm text-gray-600 leading-relaxed">{pillar.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ─── Engagement Process ─── */}
      <section className="secunova-section secunova-section--light">
        <div className="container mx-auto px-4 max-w-6xl">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <span className="text-xs font-bold uppercase tracking-wider text-secunova-blue bg-secunova-blue/10 px-3.5 py-1.5 rounded-full border border-secunova-blue/20 inline-block mb-3">
              Four Simple Steps
            </span>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-secunova-dark mb-4">
              How Our Executive Process Works
            </h2>
            <p className="text-gray-600 leading-relaxed">
              Transparent, confidential, and structured from initial contact to active execution.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {ENGAGEMENT_STEPS.map((step, idx) => (
              <div key={idx} className="p-7 rounded-2xl bg-gray-50 border border-gray-200/80 relative flex flex-col justify-between">
                <div>
                  <span className="block text-3xl font-black text-secunova-blue mb-4 font-mono">{step.step}</span>
                  <h3 className="text-lg font-bold text-secunova-dark mb-2">{step.title}</h3>
                  <p className="text-xs text-gray-600 leading-relaxed">{step.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ─── Direct Contact & Investor Inquiry Section ─── */}
      <section className="secunova-section secunova-section--dark">
        <div className="container mx-auto px-4 max-w-5xl">
          <div className="text-center max-w-2xl mx-auto mb-14">
            <h2 className="text-3xl font-bold mb-4">Ready to Discuss a Partnership?</h2>
            <p className="text-blue-100 text-sm leading-relaxed">
              Reach out directly to our corporate leadership to initiate a confidential discussion.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
            <a
              href="mailto:invest@secunovainc.com"
              className="p-6 rounded-2xl bg-white/10 backdrop-blur-xl border border-white/20 hover:border-secunova-light/50 transition-all text-center group"
            >
              <div className="w-12 h-12 rounded-xl bg-secunova-blue/30 text-secunova-light flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform">
                <Mail className="h-6 w-6" />
              </div>
              <h3 className="text-base font-bold text-white mb-1">Capital &amp; Investment</h3>
              <p className="text-xs font-semibold text-secunova-light mb-1">invest@secunovainc.com</p>
              <p className="text-[11px] text-blue-100/80 font-medium">Equity rounds &amp; investor decks</p>
            </a>

            <a
              href="mailto:careers@secunovainc.com"
              className="p-6 rounded-2xl bg-white/10 backdrop-blur-xl border border-white/20 hover:border-secunova-light/50 transition-all text-center group"
            >
              <div className="w-12 h-12 rounded-xl bg-secunova-blue/30 text-secunova-light flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform">
                <Handshake className="h-6 w-6" />
              </div>
              <h3 className="text-base font-bold text-white mb-1">Executive Co-Founders</h3>
              <p className="text-xs font-semibold text-secunova-light mb-1">careers@secunovainc.com</p>
              <p className="text-[11px] text-blue-100/80 font-medium">Practice division equity roles</p>
            </a>

            <a
              href="tel:403-401-1552"
              className="p-6 rounded-2xl bg-white/10 backdrop-blur-xl border border-white/20 hover:border-secunova-light/50 transition-all text-center group"
            >
              <div className="w-12 h-12 rounded-xl bg-secunova-blue/30 text-secunova-light flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform">
                <Phone className="h-6 w-6" />
              </div>
              <h3 className="text-base font-bold text-white mb-1">Direct Line</h3>
              <p className="text-xs font-semibold text-secunova-light mb-1">403-401-1552</p>
              <p className="text-[11px] text-blue-100/80 font-medium">Calgary, Alberta Base of Operations</p>
            </a>
          </div>

          {/* ─── Legal & Investment Disclosure ─── */}
          <div className="p-6 rounded-2xl bg-white/10 backdrop-blur-xl border border-white/20 text-center">
            <div className="inline-flex items-center gap-2 text-yellow-300 font-bold text-xs uppercase tracking-wider mb-2">
              <Lightbulb className="h-4 w-4" />
              Legal &amp; Investment Disclosure
            </div>
            <p className="text-xs text-blue-100/90 leading-relaxed max-w-3xl mx-auto font-medium">
              SecuNova Inc. is a Canadian corporation headquartered in Calgary, Alberta. All investment information provided is for preliminary educational purposes and does not constitute a formal solicitation to buy or sell securities. Formal investment offers are made exclusively through definitive legal documentation to accredited and qualified investors in compliance with applicable Canadian securities regulations.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default JoinUsPage;