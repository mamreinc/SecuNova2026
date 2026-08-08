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
import { useState } from 'react';
import { Helmet } from 'react-helmet-async';
import { 
  Users, Crown, DollarSign, Star, ArrowRight, 
  Mail, Phone, Lightbulb, Briefcase, 
  Shield, Code, Network, Handshake, ArrowUpRight, Lock, PieChart, Check
} from 'lucide-react';

type PartnershipTrackId = 'investors' | 'cofounders' | 'subcontractors' | 'referrals';

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
      tabLabel: 'Co-Founders & Executives',
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
    },
    {
      id: 'subcontractors',
      tabLabel: 'Tech Specialists',
      badge: 'Senior Delivery Network',
      title: 'Senior Engineers & Specialist Sub-Contractors',
      icon: <Code className="h-7 w-7 text-white" />,
      description: 'Join SecuNova verified expert network. Deliver high-impact enterprise projects with premium hourly rates, 100% transparent scope, and zero administrative friction.',
      highlights: [
        'Access to high-budget enterprise consulting contracts across North America',
        'Transparent project agreements with prompt, guaranteed payment schedules',
        'Flexible project-based or ongoing retainer arrangements tailored to your schedule',
        'Senior-only peer environment with zero bureaucracy or micromanagement'
      ],
      ctaText: 'Apply to Delivery Network',
      contactEmail: 'partners@secunovainc.com',
      subject: 'Inquiry: Senior Specialist & Sub-Contractor Application'
    },
    {
      id: 'referrals',
      tabLabel: 'Referral Partners',
      badge: 'Revenue Share Program',
      title: 'Strategic Referral & Affiliate Partners',
      icon: <Handshake className="h-7 w-7 text-white" />,
      description: 'Introduce enterprise clients needing custom web development, cybersecurity, or IT modernization to SecuNova and earn generous referral commissions on closed deals.',
      highlights: [
        'Competitive commission payouts on initial and recurring project contracts',
        'Dedicated senior sales support to handle discovery, proposals, and closing',
        'No technical expertise required. We handle end-to-end execution and client care',
        'Transparent deal tracking and instant payout upon contract execution'
      ],
      ctaText: 'Become a Referral Partner',
      contactEmail: 'partners@secunovainc.com',
      subject: 'Inquiry: Referral & Affiliate Partner Program'
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
      desc: 'Our flexible consultant and sub-contractor network scales instantly up or down based on client scope, eliminating unnecessary overhead while maximizing margin.',
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
      desc: 'Examine detailed business projections, investment decks, equity structures, or sub-contractor rate cards depending on your track.'
    },
    {
      step: '03',
      title: 'Agreement Structuring',
      desc: 'Finalize a tailored legal agreement, NDA, investment note, or partnership contract structured for clarity and long-term security.'
    },
    {
      step: '04',
      title: 'Launch & Growth',
      desc: 'Integrate into SecuNova operations, deploy capital, or start delivering on high-value client engagements with ongoing executive support.'
    }
  ];

  const activeTrackData = PARTNERSHIP_TRACKS.find(t => t.id === activeTab) || PARTNERSHIP_TRACKS[0];

  return (
    <div className="min-h-screen bg-white">
      <Helmet>
        <title>Join SecuNova Consulting | Investment, Leadership & Partnership Opportunities</title>
        <meta name="description" content="Partner with SecuNova Consulting in Calgary, Alberta. Explore seed investment opportunities, executive co-founder roles, senior sub-contractor contracts, and referral programs." />
        <meta name="keywords" content="SecuNova investment, Calgary IT startup investment, co-founder opportunity Calgary, tech sub-contractor Alberta, IT referral program Calgary, SecuNova partnership" />
        <link rel="canonical" href="https://secunovainc.com/join-us" />

        <meta property="og:title" content="Join SecuNova Consulting | Capital & Strategic Partnerships" />
        <meta property="og:description" content="Build, invest, and scale with a senior-led Canadian technology firm redefining enterprise IT delivery." />
        <meta property="og:url" content="https://secunovainc.com/join-us" />
        <meta property="og:type" content="website" />
        <meta property="og:image" content="https://secunovainc.com/og-image.png" />
        <meta property="og:image:width" content="1200" />
        <meta property="og:image:height" content="630" />
        <meta property="og:site_name" content="SecuNova Consulting" />

        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Join SecuNova Consulting | Partnerships" />
        <meta name="twitter:description" content="Investment, executive co-founder, delivery network, and referral opportunities." />
        <meta name="twitter:image" content="https://secunovainc.com/og-image.png" />

        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "WebPage",
            "name": "Join SecuNova Consulting Partnership Opportunities",
            "description": "Investment, executive co-founder, delivery network, and referral opportunities with SecuNova Consulting.",
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
      <section className="relative pt-32 pb-20 md:pt-40 md:pb-28 bg-secunova-dark overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-secunova-dark via-gray-900 to-secunova-blue/40"></div>
        <div className="absolute -top-40 -right-40 w-96 h-96 bg-secunova-blue/20 rounded-full blur-3xl"></div>
        <div className="absolute -bottom-40 -left-40 w-96 h-96 bg-secunova-light/10 rounded-full blur-3xl"></div>

        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-md border border-white/20 px-4 py-2 rounded-full text-xs font-semibold uppercase tracking-wider text-secunova-light mb-6">
              <Star className="h-4 w-4 text-yellow-400 fill-yellow-400" />
              Strategic Growth & Partnership Pathways
            </div>

            <h1 className="text-4xl sm:text-5xl font-black text-white leading-tight mb-6">
              Build, Invest & Scale With <span className="bg-clip-text text-transparent bg-gradient-to-r from-blue-400 via-sky-300 to-secunova-light">SecuNova Inc.</span>
            </h1>

            <p className="text-lg sm:text-xl text-gray-300 leading-relaxed max-w-3xl mx-auto mb-10">
              A federally registered Canadian technology firm headquartered in Calgary, Alberta. We unite senior tech talent, strategic investors, and referral partners to deliver world-class software, cybersecurity, and digital infrastructure.
            </p>

            <div className="flex flex-wrap justify-center gap-4">
              <a
                href="#partnership-tracks"
                className="inline-flex items-center gap-2 px-8 py-4 bg-secunova-blue text-white font-bold rounded-xl hover:bg-secunova-blue/90 transition-all shadow-lg hover:shadow-blue-500/25"
              >
                <span>Explore Opportunity Tracks</span>
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
      <section className="py-16 bg-gray-50 border-y border-gray-100">
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
      <section id="partnership-tracks" className="py-20 md:py-28 bg-white">
        <div className="container mx-auto px-4 max-w-6xl">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <span className="text-xs font-bold uppercase tracking-wider text-secunova-blue bg-blue-50 px-3.5 py-1.5 rounded-full border border-blue-100 inline-block mb-3">
              Four Tailored Pathways
            </span>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-secunova-dark mb-4">
              Choose How You Partner With SecuNova
            </h2>
            <p className="text-gray-600 leading-relaxed">
              Whether you represent investment capital, executive leadership, senior technical expertise, or client networks, we offer clear legal and financial frameworks for collaboration.
            </p>
          </div>

          {/* Tab Navigation */}
          <div className="flex flex-wrap justify-center gap-2 mb-10 p-1.5 bg-gray-100/80 rounded-2xl max-w-3xl mx-auto border border-gray-200">
            {PARTNERSHIP_TRACKS.map((track) => (
              <button
                key={track.id}
                onClick={() => setActiveTab(track.id as PartnershipTrackId)}
                className={`px-5 py-3 rounded-xl text-xs sm:text-sm font-bold transition-all cursor-pointer ${
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
                <div className="inline-flex items-center gap-2 bg-secunova-blue/20 border border-blue-400/30 text-blue-300 px-3.5 py-1 rounded-full text-xs font-semibold">
                  <Star className="h-3.5 w-3.5 text-blue-300 fill-blue-300" />
                  {activeTrackData.badge}
                </div>

                <h3 className="text-2xl sm:text-3xl font-bold leading-tight">{activeTrackData.title}</h3>
                <p className="text-gray-300 text-base leading-relaxed">{activeTrackData.description}</p>

                <div className="space-y-3 pt-2">
                  <h4 className="text-xs font-bold uppercase tracking-wider text-secunova-light">Key Benefits & Offerings:</h4>
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

              <div className="lg:col-span-5 bg-gray-800/80 border border-gray-700/80 rounded-2xl p-6 sm:p-8 space-y-6">
                <div className="w-14 h-14 rounded-2xl bg-secunova-blue flex items-center justify-center shadow-lg shadow-blue-500/20">
                  {activeTrackData.icon}
                </div>

                <div>
                  <h4 className="text-lg font-bold text-white mb-2">Direct Channel Request</h4>
                  <p className="text-xs text-gray-400 leading-relaxed">
                    Connect directly with our corporate development team to request legal documents, rate sheets, or partner terms.
                  </p>
                </div>

                <div className="pt-2 space-y-3">
                  <a
                    href={`mailto:${activeTrackData.contactEmail}?subject=${encodeURIComponent(activeTrackData.subject)}`}
                    className="w-full inline-flex items-center justify-center gap-2 px-6 py-3.5 bg-secunova-blue hover:bg-blue-600 text-white font-bold rounded-xl transition-all shadow-md"
                  >
                    <span>{activeTrackData.ctaText}</span>
                    <ArrowUpRight className="h-4 w-4" />
                  </a>

                  <div className="text-center">
                    <span className="text-[11px] text-gray-400">Direct Email: </span>
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
      <section className="py-20 bg-gray-50 border-y border-gray-200">
        <div className="container mx-auto px-4 max-w-6xl">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <span className="text-xs font-bold uppercase tracking-wider text-secunova-blue bg-blue-50 px-3.5 py-1.5 rounded-full border border-blue-100 inline-block mb-3">
              Why Partner With SecuNova
            </span>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-secunova-dark mb-4">
              Engineered For High Growth & Long-Term Trust
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
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4 max-w-6xl">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <span className="text-xs font-bold uppercase tracking-wider text-secunova-blue bg-blue-50 px-3.5 py-1.5 rounded-full border border-blue-100 inline-block mb-3">
              Four Simple Steps
            </span>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-secunova-dark mb-4">
              How Our Partnership Process Works
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
      <section className="py-20 bg-gray-900 text-white">
        <div className="container mx-auto px-4 max-w-5xl">
          <div className="text-center max-w-2xl mx-auto mb-14">
            <h2 className="text-3xl font-bold mb-4">Ready to Discuss a Partnership?</h2>
            <p className="text-gray-300 text-sm leading-relaxed">
              Reach out directly to our corporate leadership to initiate a confidential discussion.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
            <a
              href="mailto:invest@secunovainc.com"
              className="p-6 rounded-2xl bg-gray-800 border border-gray-700 hover:border-secunova-blue transition-all text-center group"
            >
              <div className="w-12 h-12 rounded-xl bg-secunova-blue/20 text-secunova-light flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform">
                <Mail className="h-6 w-6" />
              </div>
              <h3 className="text-base font-bold text-white mb-1">Capital & Investment</h3>
              <p className="text-xs font-semibold text-secunova-light mb-1">invest@secunovainc.com</p>
              <p className="text-[11px] text-gray-400">Equity rounds & investor decks</p>
            </a>

            <a
              href="mailto:partners@secunovainc.com"
              className="p-6 rounded-2xl bg-gray-800 border border-gray-700 hover:border-secunova-blue transition-all text-center group"
            >
              <div className="w-12 h-12 rounded-xl bg-secunova-blue/20 text-secunova-light flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform">
                <Handshake className="h-6 w-6" />
              </div>
              <h3 className="text-base font-bold text-white mb-1">Partnerships & Referrals</h3>
              <p className="text-xs font-semibold text-secunova-light mb-1">partners@secunovainc.com</p>
              <p className="text-[11px] text-gray-400">Sub-contractors & affiliate deals</p>
            </a>

            <a
              href="tel:403-401-1552"
              className="p-6 rounded-2xl bg-gray-800 border border-gray-700 hover:border-secunova-blue transition-all text-center group"
            >
              <div className="w-12 h-12 rounded-xl bg-secunova-blue/20 text-secunova-light flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform">
                <Phone className="h-6 w-6" />
              </div>
              <h3 className="text-base font-bold text-white mb-1">Direct Line</h3>
              <p className="text-xs font-semibold text-secunova-light mb-1">403-401-1552</p>
              <p className="text-[11px] text-gray-400">Calgary, Alberta Headquarters</p>
            </a>
          </div>

          {/* ─── Legal & Investment Disclosure ─── */}
          <div className="p-6 rounded-2xl bg-gray-800/60 border border-gray-700/60 text-center">
            <div className="inline-flex items-center gap-2 text-yellow-400 font-bold text-xs uppercase tracking-wider mb-2">
              <Lightbulb className="h-4 w-4" />
              Legal & Investment Disclosure
            </div>
            <p className="text-xs text-gray-400 leading-relaxed max-w-3xl mx-auto">
              SecuNova Inc. is a Canadian corporation headquartered in Calgary, Alberta. All investment information provided is for preliminary educational purposes and does not constitute a formal solicitation to buy or sell securities. Formal investment offers are made exclusively through definitive legal documentation to accredited and qualified investors in compliance with applicable Canadian securities regulations.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default JoinUsPage;