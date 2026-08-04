import React from 'react';
import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';
import {
  Compass, Users, ShieldCheck, ArrowRight, MapPin, Briefcase, Lock, Globe, Building,
  CheckCircle2, Sparkles, Target, Zap, Shield, Award, Play, Code
} from 'lucide-react';
import CtaSection from '../components/CtaSection';

const AboutPage: React.FC = () => {
  const PRINCIPLES = [
    {
      icon: <Compass className="w-6 h-6 text-secunova-blue" />,
      title: "Strategy Before Systems",
      desc: "Technology is only as valuable as the strategy behind it. We start with your core business objectives and work backward, never forcing pre-packaged tools onto your process."
    },
    {
      icon: <Users className="h-6 w-6 text-secunova-light" />,
      title: "Senior Craft & Direct Ownership",
      desc: "Every engagement is led by senior specialists spanning strategic advisory and software engineering with direct craft, accountability, and zero junior hand-offs."
    },
    {
      icon: <ShieldCheck className="h-6 w-6 text-secunova-light" />,
      title: "Built to Prevent Technology Entropy",
      desc: "Systems, subscriptions, and processes slowly decay into inefficiency. We build durable operating guardrails and transfer full ownership, keeping your digital footprint compounding.",
    },
  ];

  const ENGAGEMENTS = [
    {
      icon: <Briefcase className="w-6 h-6 text-secunova-blue" />,
      label: "Consult",
      title: "Strategic Consulting & Advisory",
      desc: "Digital transformation roadmaps, executive leadership programs, and governance frameworks that equip C-suite teams to make confident, long-term technology decisions.",
    },
    {
      icon: <Compass className="w-6 h-6 text-secunova-light" />,
      label: "Supervise",
      title: "Digital Project Management (PMaaS)",
      desc: "Independent technical project supervision and vendor oversight. Our senior consultants enforce milestones, protect budgets, and ensure every engagement delivers capital-efficient outcomes."
    },
    {
      icon: <Code className="h-6 w-6 text-secunova-blue" />,
      label: "Build",
      title: "Digital Engineering",
      desc: "Custom web applications, UI/UX redesigns, B2B content & SEO strategy, and digital architecture audits. Senior-built assets you own completely with zero vendor lock-in.",
    },
  ];

  const TRUST_ITEMS = [
    {
      icon: <Lock className="w-6 h-6 text-white" />,
      title: "NDA-First Engagements",
      desc: "Every discussion starts with a mutual non-disclosure agreement. Your strategy, sensitive data, and technical IP are protected from day zero."
    },
    {
      icon: <Globe className="w-6 h-6 text-white" />,
      title: "100% Intellectual Property Ownership",
      desc: "You own every line of code, design file, and deployment asset. No recurring license fees to us, no proprietary traps, and zero vendor lock-in."
    },
    {
      icon: <Building className="w-6 h-6 text-white" />,
      title: "Canadian-Owned & Calgary-Based",
      desc: "A federally registered Canadian consulting and technology firm headquartered in Calgary, Alberta. Senior-led and committed to Canadian business excellence."
    },
    {
      icon: <ShieldCheck className="w-6 h-6 text-white" />,
      title: "Vendor-Independent Guidance",
      desc: "We accept zero commissions or referral kickbacks from software vendors. Our technical recommendations serve your business objectives exclusively."
    },
  ];

  return (
    <div className="min-h-screen bg-white">
      <Helmet>
        <title>About SecuNova | Canadian Consulting & Technology Firm | Calgary, AB</title>
        <meta
          name="description"
          content="SecuNova is a Canadian consulting and technology firm based in Calgary, Alberta. Founded in Warsaw in 2016 and incorporated in Calgary in 2025, SecuNova helps organizations navigate digital change and prevent technology entropy."
        />
        <meta
          name="keywords"
          content="SecuNova about, Canadian technology firm, Calgary digital consulting, technology entropy, custom digital engineering, PMaaS Calgary, IT consulting Alberta"
        />
        <link rel="canonical" href="https://secunovainc.com/about" />

        <meta property="og:title" content="About SecuNova Inc. | Canadian Consulting & Technology Firm" />
        <meta
          property="og:description"
          content="Senior-led digital advisory and engineering firm based in Calgary, Alberta. SecuNova helps organizations navigate digital change and prevent technology entropy."
        />
        <meta property="og:url" content="https://secunovainc.com/about" />
        <meta property="og:type" content="website" />

        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Organization",
            "name": "SecuNova Inc.",
            "url": "https://secunovainc.com/about",
            "description": "SecuNova is a Canadian consulting and technology firm based in Calgary, Alberta, that helps organizations and leaders navigate digital change. Founded in Warsaw, Poland, in 2016 and incorporated in Calgary in 2025, SecuNova operates as a single-expert firm preventing technology entropy.",
            "address": {
              "@type": "PostalAddress",
              "addressLocality": "Calgary",
              "addressRegion": "Alberta",
              "addressCountry": "CA"
            },
            "sameAs": [
              "https://secunovainc.com/",
              "https://linkedin.com/company/secunova-inc"
            ]
          })}
        </script>
      </Helmet>

      {/* ── HERO SECTION ─── */}
      <section className="relative pt-28 sm:pt-36 md:pt-44 pb-20 md:pb-28 bg-gradient-to-br from-secunova-dark via-gray-900 to-secunova-blue text-white overflow-hidden">
        <div className="absolute inset-0 opacity-10 bg-[radial-gradient(#ffffff_1px,transparent_1px)] [background-size:16px_16px]"></div>
        
        <div className="container mx-auto px-4 max-w-7xl relative z-10">
          <div className="max-w-4xl mx-auto text-center space-y-6">
            
            <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-md px-5 py-2 rounded-full border border-white/20 text-xs font-semibold text-secunova-light tracking-wide">
              <Sparkles className="h-4 w-4 text-white" />
              <span>Canadian Consulting & Technology Firm, Calgary, AB</span>
            </div>

            <h1 className="text-4xl sm:text-6xl md:text-7xl font-extrabold leading-tight tracking-tight">
              Engineering Digital Change{' '}
              <span className="bg-clip-text text-transparent bg-gradient-to-r from-secunova-light via-blue-200 to-white block mt-2">
                With Authority & Precision.
              </span>
            </h1>

            <p className="text-lg sm:text-xl text-blue-100 leading-relaxed max-w-3xl mx-auto font-normal">
              Based in Calgary, Alberta, SecuNova Inc. helps organizations make confident technology decisions,
              deploy senior-led digital engineering, and eliminate technology entropy before it slows growth down.
            </p>

            <div className="flex flex-col sm:flex-row justify-center gap-4 pt-6">
              <Link to="/contact" className="btn btn-gradient btn-lg">
                <span>Start a Project</span>
                <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
              <Link to="/about/our-work" className="btn btn-outline-light btn-lg">
                <span>Explore Our Work</span>
              </Link>
            </div>

          </div>
        </div>
      </section>

      {/* ── VIDEO SHOWCASE (COMPACT SPLIT LAYOUT) ─── */}
      <section className="py-14 md:py-20 bg-gray-950 text-white relative overflow-hidden border-y border-white/10">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-secunova-blue/10 rounded-full blur-3xl pointer-events-none"></div>

        <div className="container mx-auto px-4 max-w-6xl relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
            
            {/* Text Column */}
            <div className="lg:col-span-5 space-y-5 text-left">
              <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-md px-3.5 py-1.5 rounded-full border border-white/15 text-xs font-semibold text-secunova-light">
                <Play className="h-3.5 w-3.5 fill-current text-secunova-light" />
                <span>Brand Video Overview</span>
              </div>

              <h2 className="text-2xl md:text-3xl font-bold text-white leading-tight">
                SecuNova in Action,{' '}
                <span className="bg-clip-text text-transparent bg-gradient-to-r from-secunova-light to-blue-200">
                  Engineering Digital Change
                </span>
              </h2>

              <p className="text-gray-300 text-sm leading-relaxed">
                Discover how our senior advisory and digital engineering teams eliminate technical debt, safeguard project capital, and build high-converting platforms.
              </p>

              <div className="pt-1 space-y-2.5">
                <div className="flex items-center gap-3 text-xs text-blue-100 font-medium">
                  <CheckCircle2 className="h-4 w-4 text-secunova-light flex-shrink-0" />
                  <span>Strategic advisory & technical project supervision</span>
                </div>
                <div className="flex items-center gap-3 text-xs text-blue-100 font-medium">
                  <CheckCircle2 className="h-4 w-4 text-secunova-light flex-shrink-0" />
                  <span>100% intellectual property transferred to you</span>
                </div>
              </div>
            </div>

            {/* Compact Video Container Column */}
            <div className="lg:col-span-7">
              <div className="relative max-w-xl lg:max-w-2xl mx-auto p-2.5 sm:p-3 bg-gray-900/90 rounded-2xl border border-white/15 shadow-2xl backdrop-blur-xl">
                <div className="relative rounded-xl overflow-hidden bg-black aspect-video">
                  <video
                    src="/about.mp4"
                    controls
                    controlsList="nodownload"
                    playsInline
                    preload="metadata"
                    poster="https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=1200&q=80&auto=format&fit=crop"
                    className="w-full h-full object-cover rounded-xl"
                  />
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* ── LEADERSHIP & FOUNDATION ─── */}
      <section className="py-20 md:py-28 bg-white border-b border-gray-200">
        <div className="container mx-auto px-4 max-w-7xl">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            
            <div className="lg:col-span-6 space-y-6">
              <span className="text-xs font-bold text-secunova-blue uppercase tracking-wider block">
                Leadership & Vision
              </span>
              <h2 className="text-3xl md:text-5xl font-bold text-secunova-dark leading-tight">
                Founded on One Core Principle,{' '}
                <span className="bg-clip-text text-transparent bg-gradient-to-r from-secunova-blue to-secunova-light">
                  Total Client Ownership.
                </span>
              </h2>

              <div className="p-6 rounded-2xl bg-gray-50 border border-gray-200 space-y-4">
                <div className="flex items-center justify-between flex-wrap gap-3">
                  <div className="flex items-center gap-3">
                    <div className="w-12 h-12 rounded-xl bg-secunova-blue/10 flex items-center justify-center text-secunova-blue font-bold text-lg">
                      SN
                    </div>
                    <div>
                      <h3 className="text-lg font-bold text-secunova-dark">SecuNova Inc.</h3>
                      <p className="text-xs font-semibold text-secunova-blue flex items-center gap-1 mt-0.5">
                        <MapPin className="h-3.5 w-3.5" /> Canadian Consulting & Technology Firm, Calgary, Alberta
                      </p>
                    </div>
                  </div>
                  <span className="text-xs font-bold text-secunova-blue bg-secunova-blue/10 px-3.5 py-1.5 rounded-full border border-secunova-blue/20">
                    Est. 2016
                  </span>
                </div>
                <p className="text-sm text-gray-700 leading-relaxed">
                  SecuNova was founded in 2016 in Warsaw, Poland, where Europe's regulated technology landscape forged a core engineering conviction: security, privacy, and performance are decisions you make on day one, not features you add later.
                </p>
                <p className="text-sm text-gray-700 leading-relaxed border-t border-gray-200 pt-3">
                  <strong className="text-secunova-dark font-semibold">The Single-Expert Model:</strong> Every engagement is scoped, designed, and delivered by a principal architect with no junior hand-offs, no rotating teams. When your project ends, you receive clean, documented code, full infrastructure access, and complete technical ownership.
                </p>
              </div>

              <div className="space-y-4 text-gray-600 leading-relaxed text-sm md:text-base">
                <p>
                  <strong className="text-secunova-dark font-semibold">Preventing Technology Entropy:</strong> Technology entropy is the slow, silent decay of systems, software, and workflows into inefficiency, manifesting through bloated recurring subscriptions, outdated platforms, unmaintained code, and unaligned technical debt.
                </p>
                <p>
                  Since our foundation in 2016, we exist to eliminate that decay. Through strategic advisory, executive training, startup foundations, technical project supervision, and senior-led AI-augmented digital builds (Vibe Coding), we give organizations total clarity and complete ownership over their digital infrastructure.
                </p>
              </div>
            </div>

            <div className="lg:col-span-6">
              <div className="relative rounded-3xl overflow-hidden shadow-2xl border border-gray-200 bg-gray-900 text-white p-8 md:p-12 space-y-8">
                <div className="absolute top-0 right-0 w-64 h-64 bg-secunova-blue/20 rounded-full blur-3xl -mr-32 -mt-32"></div>

                <div className="relative z-10">
                  <span className="text-xs font-bold text-secunova-light uppercase tracking-wider block mb-2">Company Milestones & Growth</span>
                  <h3 className="text-2xl md:text-3xl font-bold text-white mb-6">
                    From Warsaw to Calgary: Our Journey
                  </h3>

                  <div className="space-y-6 relative border-l-2 border-white/20 pl-6 ml-2">
                    <div className="relative">
                      <span className="absolute -left-[31px] top-1 w-3.5 h-3.5 rounded-full bg-secunova-light border-2 border-gray-900"></span>
                      <span className="text-xs font-bold text-secunova-light uppercase tracking-wider">01 · The Origins · 2016 · Warsaw, Poland</span>
                      <h4 className="text-sm font-bold text-white mt-1">A Foundation Built on European Standards</h4>
                      <p className="text-xs text-blue-100 mt-1 leading-relaxed">Founded in Warsaw under GDPR, financial security mandates, and strict data residency requirements. The firm led the design and delivery of custom architectures for fintech platforms, high-traffic API ecosystems, and regulated industry clients.</p>
                    </div>

                    <div className="relative">
                      <span className="absolute -left-[31px] top-1 w-3.5 h-3.5 rounded-full bg-secunova-blue border-2 border-gray-900"></span>
                      <span className="text-xs font-bold text-secunova-light uppercase tracking-wider">02 · The Transition · 2021 · Calgary, Alberta</span>
                      <h4 className="text-sm font-bold text-white mt-1">Bringing Global Quality to Alberta</h4>
                      <p className="text-xs text-blue-100 mt-1 leading-relaxed">SecuNova relocated to Calgary and saw Canadian businesses underserved by off-the-shelf software and generic dev shops. The firm began replacing fragile, rented-software dependencies with durable, custom-built systems clients can own, understand, and grow on their own terms.</p>
                    </div>

                    <div className="relative">
                      <span className="absolute -left-[31px] top-1 w-3.5 h-3.5 rounded-full bg-white border-2 border-gray-900"></span>
                      <span className="text-xs font-bold text-secunova-light uppercase tracking-wider">03 · Established Practice · 2025 · Calgary, Alberta</span>
                      <h4 className="text-sm font-bold text-white mt-1">The Single-Expert Model</h4>
                      <p className="text-xs text-blue-100 mt-1 leading-relaxed">Officially incorporated in Calgary as a single-expert corporation. Every engagement is scoped, designed, and delivered by a principal architect, ensuring complete technical continuity from first conversation to final handover.</p>
                    </div>
                  </div>

                  <ul className="space-y-4 pt-6 border-t border-white/10">
                    <li className="flex items-start gap-3">
                      <CheckCircle2 className="h-5 w-5 text-secunova-light flex-shrink-0 mt-0.5" />
                      <span className="text-sm text-blue-100"><strong className="text-white font-semibold">Single-Expert, Zero Hand-offs:</strong> Every project is scoped, designed, and delivered by a principal architect with no junior handoffs or rotating teams.</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <CheckCircle2 className="h-5 w-5 text-secunova-light flex-shrink-0 mt-0.5" />
                      <span className="text-sm text-blue-100"><strong className="text-white font-semibold">100% IP Transfer:</strong> You own every repository, design system, and credential from day one.</span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* ── CORE PRINCIPLES ─── */}
      <section className="py-20 md:py-28 bg-gray-50 border-b border-gray-200">
        <div className="container mx-auto px-4 max-w-7xl">
          <div className="max-w-3xl mb-16">
            <span className="text-xs font-semibold text-secunova-blue uppercase tracking-wider block mb-2">Our Operating Philosophy</span>
            <h2 className="text-3xl md:text-5xl font-bold text-secunova-dark leading-tight">
              Three Principles That Guide Every Engagement
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {PRINCIPLES.map((p, idx) => (
              <div
                key={idx}
                className="bg-white border border-gray-200 rounded-2xl p-8 shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all duration-300 group"
              >
                <div className="w-12 h-12 rounded-xl bg-gray-50 border border-gray-100 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                  {p.icon}
                </div>
                <h3 className="text-xl font-bold text-secunova-dark mb-3">{p.title}</h3>
                <p className="text-sm text-gray-600 leading-relaxed">{p.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── ENGAGEMENT PILLARS (Consult, Map, Build) ─── */}
      <section className="py-20 md:py-28 bg-white border-b border-gray-200">
        <div className="container mx-auto px-4 max-w-7xl">
          <div className="flex flex-col md:flex-row items-start justify-between gap-6 mb-16">
            <div>
              <span className="text-xs font-semibold text-secunova-blue uppercase tracking-wider block mb-2">Engagement Models</span>
              <h2 className="text-3xl md:text-5xl font-bold text-secunova-dark leading-tight">
                Consult. Map. Build.
              </h2>
            </div>
            <p className="text-gray-600 max-w-md md:self-end leading-relaxed text-sm md:text-base">
              Whether you need executive advisory, strategic technical shield supervision for a vendor, or full custom software builds, SecuNova delivers tailored engagement structures.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {ENGAGEMENTS.map((e, idx) => (
              <div key={idx} className="bg-gray-50 border border-gray-200 rounded-2xl p-8 flex flex-col justify-between hover:shadow-xl transition-shadow">
                <div>
                  <div className="flex items-center gap-3 mb-6">
                    <div className="w-10 h-10 rounded-xl bg-white shadow-sm flex items-center justify-center text-secunova-blue">
                      {e.icon}
                    </div>
                    <span className="text-xs font-bold uppercase tracking-wider text-secunova-blue bg-secunova-blue/10 px-3 py-1 rounded-full">
                      {e.label}
                    </span>
                  </div>
                  <h3 className="text-xl font-bold text-secunova-dark mb-3">{e.title}</h3>
                  <p className="text-sm text-gray-600 leading-relaxed">{e.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── TRUST & NON-NEGOTIABLES ─── */}
      <section className="py-20 md:py-28 bg-gray-900 text-white">
        <div className="container mx-auto px-4 max-w-7xl">
          <div className="max-w-3xl mb-16">
            <span className="text-xs font-semibold text-secunova-light uppercase tracking-wider block mb-2">Non-Negotiable Commitments</span>
            <h2 className="text-3xl md:text-5xl font-bold text-white leading-tight">
              Built on Trust, Discretion & Transparency
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {TRUST_ITEMS.map((item, idx) => (
              <div key={idx} className="p-8 rounded-2xl bg-gray-800/80 border border-gray-700/80 hover:border-secunova-blue/50 transition-colors flex flex-col justify-between">
                <div>
                  <div className="flex items-center gap-4 mb-4">
                    <div className="w-10 h-10 rounded-xl bg-secunova-blue border border-blue-400/30 flex items-center justify-center flex-shrink-0 text-white shadow-md shadow-blue-500/20">
                      {item.icon}
                    </div>
                    <h3 className="text-xl font-bold text-white leading-tight">{item.title}</h3>
                  </div>
                  <p className="text-sm text-gray-300 leading-relaxed">{item.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── CTA SECTION ─── */}
      <CtaSection />
    </div>
  );
};

export default AboutPage;
