/*
========================================
HOMEPAGE - PROFESSIONAL & MARKET-READY
Custom Built by SecuNova Inc.
========================================

Enhanced homepage with strong value proposition, social proof,
and results-driven messaging for maximum market impact.
========================================
*/

import React, { memo } from 'react';
import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';
import { ArrowRight, Shield, Award, Zap, Phone, Mail, MapPin, Crown, Network, BarChart, Target, Database, CheckCircle, CheckCircle2, Star, Code, Layers, Briefcase, Compass } from 'lucide-react';
import LazySection from '../components/LazySection';
import OptimizedImage from '../components/OptimizedImage';

/* ========================================
   Hero live work showcase
   Proof by work: rotates shipped SecuNova
   products with labels, one at a time
   ======================================== */
const HERO_WORK = [
  {
    name: 'Nova',
    tagline: 'Native macOS AI Agent',
    video: '/nova.mp4',
    year: '2024',
  },
  {
    name: 'Career OS',
    tagline: 'Your job search, engineered.',
    video: '/Career%20OS.mp4',
    year: '2024',
  },
  {
    name: 'SecuBoost',
    tagline: 'macOS Performance Suite',
    video: '/SecuBoost.mp4',
    year: '2023',
  },
  {
    name: 'MoonYYC',
    tagline: 'The settlement guide Calgary immigrants actually needed.',
    video: '/MoonYYC.mp4',
    year: '2024',
  },
];

const HeroShowcase = () => {
  const [index, setIndex] = React.useState(0);
  const cycleMs = 5500;

  React.useEffect(() => {
    const timer = setInterval(() => {
      setIndex((i) => (i + 1) % HERO_WORK.length);
    }, cycleMs);
    return () => clearInterval(timer);
  }, []);

  const current = HERO_WORK[index];

  return (
    <div className="border border-white/10 bg-white/[0.03] animate-fade-in-left delay-500">
      {/* Header */}
      <div className="flex items-center justify-between px-6 py-4 border-b border-white/10">
        <div className="flex items-center gap-2.5">
          <span className="status-dot w-2 h-2 bg-secunova-light"></span>
          <span className="text-[11px] uppercase tracking-[0.3em] text-white">Live work</span>
        </div>
        <span className="text-[11px] font-mono text-white">
          {String(index + 1).padStart(2, '0')} / {String(HERO_WORK.length).padStart(2, '0')}
        </span>
      </div>

      {/* Video */}
      <div className="relative aspect-video overflow-hidden">
        <video
          key={index}
          src={current.video}
          autoPlay
          muted
          loop
          playsInline
          className="absolute inset-0 w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-secunova-dark via-secunova-dark/20 to-transparent" />
        <div className="absolute bottom-0 left-0 right-0 p-6">
          <h3 className="text-2xl font-bold text-white">{current.name}</h3>
          <p className="mt-1 text-sm text-white/80">{current.tagline}</p>
        </div>
      </div>

      {/* Footer */}
      <div className="flex items-center justify-between px-6 py-4 border-t border-white/10">
        <div className="flex items-center gap-2">
          {HERO_WORK.map((work, i) => (
            <button
              key={work.name}
              onClick={() => setIndex(i)}
              className={`h-[3px] rounded-full transition-all duration-500 cursor-pointer ${
                i === index ? 'w-8 bg-secunova-light' : 'w-4 bg-white/25 hover:bg-white/50'
              }`}
              aria-label={`Show ${work.name}`}
            />
          ))}
        </div>
        <span className="text-[11px] uppercase tracking-[0.25em] text-white/80">Built by SecuNova</span>
      </div>
    </div>
  );
};

/* ========================================
   START: HOMEPAGE COMPONENT
   Main landing page with enhanced value proposition and social proof
   ======================================== */
const HomePage = () => {
  return (
    <div className="overflow-hidden">
      <Helmet>
        <title>SecuNova Inc. Calgary | Consulting & Digital Engineering | Digital Change Partner</title>
        <meta name="description" content="SecuNova Inc. is a Calgary-based consulting and technology firm helping North American leaders navigate digital change. Strategic consulting, executive programs, custom websites, and growth engineering before technology entropy slows you down." />
        <meta name="keywords" content="SecuNova Consulting, SecuNova Consulting Calgary, SecuNova Inc Calgary, digital transformation consulting Calgary, consulting firm Alberta, executive training Calgary, business foundations program, startup strategy, custom corporate websites Calgary, high-converting landing pages, B2B website copywriting, SEO content strategy, web development Calgary, Calgary consulting firm, digital engineering, technology consulting Canada" />
        <link rel="canonical" href="https://secunovainc.com/" />

        {/* OpenGraph Tags */}
        <meta property="og:title" content="SecuNova Inc. Calgary | Consulting & Digital Engineering" />
        <meta property="og:description" content="A Canadian consulting and technology firm helping organizations navigate digital change. Strategic consulting, executive programs, and digital engineering for North American growth." />
        <meta property="og:url" content="https://secunovainc.com/" />
        <meta property="og:type" content="website" />
        <meta property="og:image" content="https://secunovainc.com/logo/secunova-logo.png" />
        <meta property="og:image:alt" content="SecuNova Inc. - Consulting and Digital Engineering" />
        <meta property="og:site_name" content="SecuNova Inc." />
        <meta property="og:locale" content="en_CA" />

        {/* Twitter Card Tags */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="SecuNova Inc. Calgary | Consulting & Digital Engineering" />
        <meta name="twitter:description" content="Strategic consulting, executive programs, and digital engineering for North American leaders. Calgary, AB." />
        <meta name="twitter:image" content="https://secunovainc.com/logo/secunova-logo.png" />
        <meta name="twitter:image:alt" content="SecuNova Inc. Calgary Consulting and Digital Engineering" />

        {/* Additional SEO Tags */}
        <meta name="robots" content="index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1" />
        <meta name="author" content="SecuNova Inc." />
        <meta name="geo.region" content="CA-AB" />
        <meta name="geo.placename" content="Calgary" />
        <meta name="geo.position" content="51.0447;-114.0719" />
        <meta name="ICBM" content="51.0447, -114.0719" />

        {/* Structured Data - WebSite */}
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "WebSite",
            "name": "SecuNova Inc.",
            "url": "https://secunovainc.com",
            "potentialAction": {
              "@type": "SearchAction",
              "target": "https://secunovainc.com/search?q={search_term_string}",
              "query-input": "required name=search_term_string"
            }
          })}
        </script>

        {/* Structured Data - Organization */}
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "ProfessionalService",
            "name": "SecuNova Inc.",
            "alternateName": ["SecuNova", "SecuNova Calgary", "SecuNova IT"],
            "url": "https://secunovainc.com",
            "logo": "https://secunovainc.com/iPhone.png",
            "image": "https://secunovainc.com/iPhone.png",
            "description": "A Canadian consulting and technology firm based in Calgary, Alberta. Helping organizations navigate digital change with strategic consulting, executive programs, and digital engineering.",
            "foundingDate": "2016",
            "slogan": "Navigate Digital Change. Before It Costs You Momentum.",
            "priceRange": "$$",
            "telephone": "+1-403-401-1552",
            "email": "hello@secunova.ca",
            "address": {
              "@type": "PostalAddress",
              "streetAddress": "#270, 1122 3 St SE Ste 1906",
              "addressLocality": "Calgary",
              "addressRegion": "AB",
              "postalCode": "T2G 0E7",
              "addressCountry": "CA"
            },
            "geo": {
              "@type": "GeoCoordinates",
              "latitude": "51.0447",
              "longitude": "-114.0719"
            },
            "areaServed": [
              {
                "@type": "State",
                "name": "Alberta"
              },
              {
                "@type": "City",
                "name": "Calgary"
              },
              {
                "@type": "City",
                "name": "Edmonton"
              }
            ],
                "serviceType": [
              "Digital Transformation Consulting",
              "Executive Leadership & Innovation Consulting",
              "Digital Project Management (PMaaS)",
              "Custom Web App Development",
              "Web Maintenance & Performance Optimization",
              "UI/UX Redesigns",
              "B2B Content & SEO Strategy",
              "Digital Architecture & Tech Stack Audits"
            ],
            "openingHoursSpecification": {
              "@type": "OpeningHoursSpecification",
              "dayOfWeek": ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"],
              "opens": "00:00",
              "closes": "23:59"
            },
            "sameAs": [
              "https://ca.linkedin.com/company/secunovac"
            ],
            "hasOfferCatalog": {
              "@type": "OfferCatalog",
              "name": "SecuNova Consulting Services",
              "itemListElement": [
                {
                  "@type": "OfferCatalog",
                  "name": "Strategic Consulting & Executive Programs",
                  "itemListElement": [
                    {
                      "@type": "Offer",
                      "itemOffered": {
                        "@type": "Service",
                        "name": "Digital Transformation Consulting"
                      }
                    },
                    {
                      "@type": "Offer",
                      "itemOffered": {
                        "@type": "Service",
                        "name": "Executive Leadership & Innovation Consulting"
                      }
                    },
                    {
                      "@type": "Offer",
                      "itemOffered": {
                        "@type": "Service",
                        "name": "Digital Project Management (PMaaS)"
                      }
                    }
                  ]
                },
                {
                  "@type": "OfferCatalog",
                  "name": "Digital Engineering & Growth Solutions",
                  "itemListElement": [
                    {
                      "@type": "Offer",
                      "itemOffered": {
                        "@type": "Service",
                        "name": "Custom Web App Development"
                      }
                    },
                    {
                      "@type": "Offer",
                      "itemOffered": {
                        "@type": "Service",
                        "name": "Web Maintenance & Performance Optimization"
                      }
                    },
                    {
                      "@type": "Offer",
                      "itemOffered": {
                        "@type": "Service",
                        "name": "Website & App UI/UX Redesigns"
                      }
                    },
                    {
                      "@type": "Offer",
                      "itemOffered": {
                        "@type": "Service",
                        "name": "B2B Content & SEO Strategy"
                      }
                    },
                    {
                      "@type": "Offer",
                      "itemOffered": {
                        "@type": "Service",
                        "name": "Digital Architecture & Tech Stack Audits"
                      }
                    }
                  ]
                }
              ]
            }
          })}
        </script>

        {/* Structured Data - BreadcrumbList for Homepage */}
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "BreadcrumbList",
            "itemListElement": [
              {
                "@type": "ListItem",
                "position": 1,
                "name": "Home",
                "item": "https://secunovainc.com"
              }
            ]
          })}
        </script>
      </Helmet>
      
      {/* ========================================
          START: Hero Section
          Proof by work: headline + CTA left,
          live rotating product showcase right
          ======================================== */}
      <section className="relative min-h-screen overflow-hidden bg-secunova-dark pt-24 sm:pt-28 lg:pt-32 flex flex-col">
        <div className="absolute inset-0 hero-bg-optimized">
          <OptimizedImage
            src="https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&w=1200&q=85"
            srcSet="https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&w=800&q=85 800w, https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&w=1200&q=85 1200w, https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&w=1920&q=85 1920w"
            sizes="100vw"
            alt="SecuNova corporate architecture"
            className="w-full h-full object-cover hero-zoom opacity-60"
            priority={true}
            loading="eager"
            fetchPriority="high"
            decoding="async"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-secunova-dark via-secunova-dark/85 to-secunova-dark/40"></div>
          <div className="absolute inset-0 bg-gradient-to-t from-secunova-dark via-transparent to-secunova-dark/50"></div>
        </div>

        <div className="container mx-auto px-4 relative z-10 flex flex-col flex-grow w-full">
          <div className="max-w-7xl mx-auto w-full flex flex-col flex-grow">

            {/* Top meta rule */}
            <div className="flex items-center justify-between text-[11px] sm:text-xs uppercase tracking-[0.25em] text-white border-b border-white/10 py-4 animate-fade-in-down">
              <span className="font-semibold text-white">SecuNova Inc.</span>
              <span className="hidden md:block text-white/90">Strategy + Engineering</span>
              <span className="text-white/90">Calgary, Canada</span>
            </div>

            {/* Main */}
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-10 flex-grow py-14 lg:py-16 items-center">
              {/* Left copy */}
              <div className="lg:col-span-7 max-w-3xl">
                <div className="flex items-center gap-3 mb-8 animate-fade-in-down delay-100">
                  <span className="block w-10 h-[2px] bg-secunova-light"></span>
                  <span className="text-[11px] sm:text-xs uppercase tracking-[0.3em] text-white">Strategy + Engineering, one firm</span>
                </div>

                <h1 className="text-4xl sm:text-6xl xl:text-[4.75rem] font-bold text-white leading-[0.98] tracking-tight hero-title-optimized">
                  <span className="hero-line">We navigate the change.</span>
                  <span className="hero-line text-white">You capture the advantage.</span>
                </h1>

                <p className="mt-8 max-w-xl text-base sm:text-lg text-white leading-relaxed hero-description-optimized animate-fade-in-up delay-500">
                  SecuNova Consulting partners with North American leaders to turn technology complexity into competitive advantage. Senior-led strategic consulting, executive programs, and precision digital engineering. One partner, from strategy to launch, no handoffs.
                </p>

                {/* Signature momentum meter */}
                <div className="mt-10 max-w-md animate-fade-in-up delay-700">
                  <div className="w-full h-[3px] bg-white/10 overflow-hidden">
                    <div className="momentum-bar h-full w-full bg-gradient-to-r from-secunova-blue to-secunova-light"></div>
                  </div>
                  <div className="mt-3 flex items-center justify-between text-[11px] uppercase tracking-[0.25em] text-white">
                    <span>Momentum</span>
                    <span className="text-white/90">Shipping</span>
                  </div>
                </div>

                <div className="mt-10 flex flex-col sm:flex-row gap-4 animate-fade-in-up delay-1000">
                  <Link
                    to="/contact"
                    className="btn btn-gradient btn-lg"
                  >
                    Book your free strategy call
                    <ArrowRight className="ml-2 h-4 w-4 text-white" />
                  </Link>
                  <Link
                    to="/about/our-work"
                    className="btn btn-outline-light btn-lg text-white"
                  >
                    See the shipped work
                  </Link>
                </div>
              </div>

              {/* Right: live work showcase */}
              <div className="hidden lg:block lg:col-span-5">
                <HeroShowcase />
              </div>
            </div>

            {/* Bottom meta rule */}
            <div className="border-t border-white/10 py-4 flex items-center justify-between text-[11px] uppercase tracking-[0.25em] text-white">
              <span>Est. 2016</span>
              <span className="hidden sm:block">100% Senior-led delivery</span>
              <span>Calgary-based</span>
            </div>
          </div>
        </div>
      </section>
      {/* ========================================
          END: Hero Section
          ======================================== */}

      {/* ========================================
          START: Why SecuNova Section
          Marketing-driven outcome cards with an ownership guarantee
          ======================================== */}
      <LazySection className="secunova-section secunova-section--light">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="max-w-3xl mb-14 md:mb-16">
              <div className="inline-flex items-center bg-secunova-blue/10 text-secunova-blue px-4 py-2 rounded-full text-sm font-medium mb-5">
                <Crown className="h-4 w-4 mr-2" />
                Why SecuNova
              </div>
              <h2 className="text-4xl md:text-5xl font-bold text-secunova-dark leading-tight">
                You Don't Get Reports.
                <span className="block bg-clip-text text-transparent bg-gradient-to-r from-secunova-blue to-secunova-light">
                  You Get Results.
                </span>
              </h2>
              <p className="text-lg text-secunova-dark/70 mt-6 leading-relaxed">
                Most firms hand you a binder and disappear. SecuNova pairs senior strategy
                with the team that builds it. Every engagement ends with something you can
                use, own, and scale.
              </p>
            </div>

            <div className="secunova-grid secunova-grid--3col mb-12">
              <div className="secunova-card">
                <div>
                  <div className="secunova-card__header">
                    <div className="secunova-card__icon">
                      <CheckCircle2 className="h-6 w-6 text-secunova-blue" />
                    </div>
                    <h3 className="secunova-card__title">You Own Everything</h3>
                  </div>
                  <div className="secunova-card__body">
                    <p className="secunova-card__description">
                      100% of the code and intellectual property is handed to you. No vendor lock-in, no expiring software licenses, and no monthly administrative dependencies.
                    </p>
                  </div>
                </div>
                <div className="secunova-card__footer">
                  <span className="inline-block bg-secunova-blue/10 text-secunova-blue text-xs font-bold px-3 py-1.5 rounded-full">
                    100% IP Transfer
                  </span>
                </div>
              </div>

              <div className="secunova-card">
                <div>
                  <div className="secunova-card__header">
                    <div className="secunova-card__icon">
                      <Zap className="h-6 w-6 text-secunova-blue" />
                    </div>
                    <h3 className="secunova-card__title">You Ship Faster</h3>
                  </div>
                  <div className="secunova-card__body">
                    <p className="secunova-card__description">
                      Senior engineers build using Vibe Coding AI workflows. You receive enterprise-grade software at startup velocity within weeks instead of quarters.
                    </p>
                  </div>
                </div>
                <div className="secunova-card__footer">
                  <span className="inline-block bg-secunova-light/10 text-secunova-light text-xs font-bold px-3 py-1.5 rounded-full">
                    Senior-Led Delivery
                  </span>
                </div>
              </div>

              <div className="secunova-card">
                <div>
                  <div className="secunova-card__header">
                    <div className="secunova-card__icon">
                      <Network className="h-6 w-6 text-secunova-blue" />
                    </div>
                    <h3 className="secunova-card__title">You Keep One Partner</h3>
                  </div>
                  <div className="secunova-card__body">
                    <p className="secunova-card__description">
                      Strategy, interface design, and custom code delivered by one accountable team. No handoffs between agencies and zero finger-pointing.
                    </p>
                  </div>
                </div>
                <div className="secunova-card__footer">
                  <span className="inline-block bg-secunova-blue/10 text-secunova-blue text-xs font-bold px-3 py-1.5 rounded-full">
                    Zero Handoffs
                  </span>
                </div>
              </div>
            </div>

            <div className="relative rounded-3xl overflow-hidden bg-secunova-dark p-8 md:p-12 shadow-2xl">
              <div className="absolute inset-0 bg-gradient-to-r from-secunova-dark via-secunova-dark/90 to-secunova-blue/70" />
              <div className="relative z-10 flex flex-col lg:flex-row items-start lg:items-center justify-between gap-8">
                <div className="max-w-xl">
                  <div className="flex items-center mb-3">
                    <Shield className="w-5 h-5 text-white mr-2.5" />
                    <span className="text-xs font-bold uppercase tracking-widest text-white/80">
                      The SecuNova Guarantee
                    </span>
                  </div>
                  <h3 className="text-2xl md:text-3xl font-bold text-white leading-snug">
                    If your strategy doesn't become a working, owned advantage, we keep working until it does.
                  </h3>
                </div>
                <div className="flex flex-col sm:flex-row gap-4 flex-shrink-0">
                  <Link
                    to="/contact"
                    className="btn btn-white btn-lg"
                  >
                    <span>Start Your Project</span>
                    <ArrowRight className="ml-2 h-5 w-5" />
                  </Link>
                  <Link
                    to="/services"
                    className="btn btn-outline-light btn-lg"
                  >
                    <span>Explore Services</span>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </LazySection>

      {/* ========================================
          START: Our Approach Section (Redesigned & Standalone)
          Modern 4-Step Strategic Execution Process
          ======================================== */}
      <LazySection className="py-20 md:py-28 bg-gradient-to-br from-secunova-dark via-gray-900 to-secunova-blue text-white relative overflow-hidden">
        {/* Subtle glowing radial background effects */}
        <div className="absolute inset-0 bg-[radial-gradient(#3b82f6_1px,transparent_1px)] [background-size:28px_28px] opacity-10 pointer-events-none" />
        <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-white/10 rounded-full blur-3xl pointer-events-none" />
        <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-secunova-blue/20 rounded-full blur-3xl pointer-events-none" />

        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-4xl mx-auto text-center mb-16 md:mb-20">
            <div className="inline-flex items-center bg-white/10 backdrop-blur-md border border-white/20 px-5 py-2.5 rounded-full text-xs font-semibold text-white tracking-wide mb-4">
              <Compass className="h-4 w-4 mr-2 text-white" />
              Strategic Execution Framework
            </div>
            <h2 className="text-3xl sm:text-5xl font-extrabold text-white tracking-tight mb-4 leading-tight">
              Our Approach to{' '}
              <span className="bg-clip-text text-transparent bg-gradient-to-r from-white via-blue-100 to-white">
                Digital Excellence
              </span>
            </h2>
            <p className="text-white text-base sm:text-lg max-w-2xl mx-auto leading-relaxed">
              Four disciplined phases designed to eliminate technology entropy, accelerate execution, and guarantee total technical ownership for your enterprise.
            </p>
          </div>

          {/* 4-Step Interactive Process Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-7xl mx-auto">
            {/* Step 1 */}
            <div className="group relative bg-white/10 backdrop-blur-md border border-white/20 rounded-2xl p-6 sm:p-8 hover:bg-white/15 transition-all duration-500 hover:-translate-y-2 hover:shadow-2xl flex flex-col justify-between">
              <div>
                <div className="flex items-center justify-between mb-6">
                  <div className="w-12 h-12 rounded-xl bg-white/20 flex items-center justify-center text-white group-hover:scale-110 transition-transform duration-300 border border-white/30 shadow-inner">
                    <Target className="h-6 w-6 text-white" />
                  </div>
                  <span className="text-3xl font-black text-white/40 group-hover:text-white transition-colors">01</span>
                </div>
                <h3 className="text-xl font-bold text-white mb-3">1. Audit & Discover</h3>
                <p className="text-sm text-white leading-relaxed">
                  We map your digital footprint, tech stack, recurring SaaS overhead, and codebases to pinpoint friction points before recommending any action.
                </p>
              </div>
              <div className="mt-8 pt-4 border-t border-white/20 flex items-center text-xs font-semibold text-white">
                <span>Phase Outcome: Zero Assumptions</span>
              </div>
            </div>

            {/* Step 2 */}
            <div className="group relative bg-white/10 backdrop-blur-md border border-white/20 rounded-2xl p-6 sm:p-8 hover:bg-white/15 transition-all duration-500 hover:-translate-y-2 hover:shadow-2xl flex flex-col justify-between">
              <div>
                <div className="flex items-center justify-between mb-6">
                  <div className="w-12 h-12 rounded-xl bg-white/20 flex items-center justify-center text-white group-hover:scale-110 transition-transform duration-300 border border-white/30 shadow-inner">
                    <Zap className="h-6 w-6 text-white" />
                  </div>
                  <span className="text-3xl font-black text-white/40 group-hover:text-white transition-colors">02</span>
                </div>
                <h3 className="text-xl font-bold text-white mb-3">2. Senior-Led Build</h3>
                <p className="text-sm text-white leading-relaxed">
                  Senior specialists engineer your solution using AI-augmented workflows (Vibe Coding). We deliver enterprise-grade software at startup velocity.
                </p>
              </div>
              <div className="mt-8 pt-4 border-t border-white/20 flex items-center text-xs font-semibold text-white">
                <span>Phase Outcome: Rapid Delivery</span>
              </div>
            </div>

            {/* Step 3 */}
            <div className="group relative bg-white/10 backdrop-blur-md border border-white/20 rounded-2xl p-6 sm:p-8 hover:bg-white/15 transition-all duration-500 hover:-translate-y-2 hover:shadow-2xl flex flex-col justify-between">
              <div>
                <div className="flex items-center justify-between mb-6">
                  <div className="w-12 h-12 rounded-xl bg-white/20 flex items-center justify-center text-white group-hover:scale-110 transition-transform duration-300 border border-white/30 shadow-inner">
                    <Shield className="h-6 w-6 text-white" />
                  </div>
                  <span className="text-3xl font-black text-white/40 group-hover:text-white transition-colors">03</span>
                </div>
                <h3 className="text-xl font-bold text-white mb-3">3. Harden & Secure</h3>
                <p className="text-sm text-white leading-relaxed">
                  Cybersecurity hardening, zero-trust policies, and performance benchmarks are engineered in from day one, never bolted on later.
                </p>
              </div>
              <div className="mt-8 pt-4 border-t border-white/20 flex items-center text-xs font-semibold text-white">
                <span>Phase Outcome: Zero Vulnerabilities</span>
              </div>
            </div>

            {/* Step 4 */}
            <div className="group relative bg-white/10 backdrop-blur-md border border-white/20 rounded-2xl p-6 sm:p-8 hover:bg-white/15 transition-all duration-500 hover:-translate-y-2 hover:shadow-2xl flex flex-col justify-between">
              <div>
                <div className="flex items-center justify-between mb-6">
                  <div className="w-12 h-12 rounded-xl bg-white/20 flex items-center justify-center text-white group-hover:scale-110 transition-transform duration-300 border border-white/30 shadow-inner">
                    <CheckCircle2 className="h-6 w-6 text-white" />
                  </div>
                  <span className="text-3xl font-black text-white/40 group-hover:text-white transition-colors">04</span>
                </div>
                <h3 className="text-xl font-bold text-white mb-3">4. Full IP Handoff</h3>
                <p className="text-sm text-white leading-relaxed">
                  You receive 100% intellectual property transfer: every line of code, design asset, and deployment credential. Zero recurring fees or vendor lock-in.
                </p>
              </div>
              <div className="mt-8 pt-4 border-t border-white/20 flex items-center text-xs font-semibold text-white">
                <span>Phase Outcome: Total Ownership</span>
              </div>
            </div>
          </div>
        </div>
      </LazySection>
      {/* ========================================
          END: Why SecuNova Section
          ======================================== */}

      {/* ========================================
          START: Simplified Metrics Section
          Clean, modern design with better visual hierarchy
          ======================================== */}
      <LazySection className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            
            {/* Section Header */}
            <div className="mb-12">
              <div className="inline-flex items-center bg-secunova-blue/10 text-secunova-blue px-4 py-2 rounded-full text-sm font-medium mb-4">
                <Award className="h-4 w-4 mr-2" />
                Built for Momentum
              </div>
              <h2 className="text-3xl font-bold text-secunova-dark mb-4">
                Outcomes Your Leadership Team Can Defend
              </h2>
            </div>

            {/* Simplified Metrics Grid */}
            <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
              <div className="text-center">
                <div className="text-3xl font-bold text-secunova-blue mb-2">2</div>
                <div className="text-secunova-dark font-semibold mb-1">Strategic Pillars</div>
                <div className="text-secunova-dark/60 text-sm">Consulting + Engineering</div>
              </div>

              <div className="text-center">
                <div className="text-3xl font-bold text-secunova-light mb-2">8</div>
                <div className="text-secunova-dark font-semibold mb-1">Specialized Services</div>
                <div className="text-secunova-dark/60 text-sm">Focused, not diluted</div>
              </div>

              <div className="text-center">
                <div className="text-3xl font-bold text-secunova-blue mb-2">100%</div>
                <div className="text-secunova-dark font-semibold mb-1">Senior-Led Delivery</div>
                <div className="text-secunova-dark/60 text-sm">Decision-makers, not middlemen</div>
              </div>

              <div className="text-center">
                <div className="text-3xl font-bold text-secunova-light mb-2">0</div>
                <div className="text-secunova-dark font-semibold mb-1">Template Shortcuts</div>
                <div className="text-secunova-dark/60 text-sm">Custom code, every time</div>
              </div>
            </div>

            {/* Trust Badges */}
            <div className="flex flex-wrap justify-center gap-4">
              <div className="flex items-center text-secunova-dark/70 text-sm">
                <CheckCircle className="h-4 w-4 text-green-500 mr-2" />
                Calgary-Based Team
              </div>
              <div className="flex items-center text-secunova-dark/70 text-sm">
                <MapPin className="h-4 w-4 text-secunova-blue mr-2" />
                Serving Canada & the U.S.
              </div>
              <div className="flex items-center text-secunova-dark/70 text-sm">
                <Shield className="h-4 w-4 text-secunova-light mr-2" />
                Security-First Engineering
              </div>
            </div>
          </div>
        </div>
      </LazySection>
      {/* ========================================
          END: Simplified Metrics Section
          ======================================== */}

      {/* ========================================
          START: Featured Services Section (BEM Refactored)
          ======================================== */}
      <LazySection className="secunova-section secunova-section--gradient">
        <div className="container mx-auto px-4">
          <div className="max-w-7xl mx-auto">
            {/* Section Header */}
            <div className="text-center mb-16">
              <div className="inline-flex items-center bg-secunova-blue/10 text-secunova-blue px-6 py-3 rounded-full text-sm font-medium mb-6">
                <Target className="h-5 w-5 mr-2" />
                Two Strategic Pillars
              </div>
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-secunova-dark mb-4">
                Two Pillars. <span className="bg-clip-text text-transparent bg-gradient-to-r from-secunova-blue to-secunova-light">One Goal: Growth.</span>
              </h2>
              <p className="text-lg md:text-xl text-secunova-dark/70 max-w-3xl mx-auto">
                We pair executive strategic guidance with rapid, senior-led digital engineering. One partner, zero handoffs.
              </p>
            </div>

            {/* Featured Services Grid (BEM Structure) */}
            <div className="secunova-grid mb-12">
              {/* Pillar I Card: We advise. You lead. */}
              <Link 
                to="/services" 
                className="secunova-card group"
              >
                <div>
                  <div className="secunova-card__header">
                    <div className="secunova-card__icon">
                      <Crown className="h-6 w-6 text-secunova-blue" />
                    </div>
                    <h3 className="secunova-card__title group-hover:text-secunova-blue transition-colors">
                      We Advise. You Lead.
                    </h3>
                  </div>
                  <div className="secunova-card__body">
                    <p className="secunova-card__description">
                      Executive strategic consulting and digital transformation programs designed for leadership teams. We help you navigate rapid tech changes, optimize legacy stacks, and protect your capital.
                    </p>
                  </div>
                </div>
                <div className="secunova-card__footer">
                  <span className="inline-flex items-center text-secunova-blue font-semibold group-hover:gap-3 gap-2 transition-all">
                    Explore Strategic Consulting <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                  </span>
                </div>
              </Link>

              {/* Pillar II Card: We build. You grow. */}
              <Link 
                to="/services" 
                className="secunova-card group"
              >
                <div>
                  <div className="secunova-card__header">
                    <div className="secunova-card__icon">
                      <Code className="h-6 w-6 text-secunova-blue" />
                    </div>
                    <h3 className="secunova-card__title group-hover:text-secunova-blue transition-colors">
                      We Build. You Grow.
                    </h3>
                  </div>
                  <div className="secunova-card__body">
                    <p className="secunova-card__description">
                      Custom React web applications, enterprise platforms, and high-converting marketing funnels built with Vibe Coding. Pure custom code delivered at high velocity with 100% IP ownership handed to you.
                    </p>
                  </div>
                </div>
                <div className="secunova-card__footer">
                  <span className="inline-flex items-center text-secunova-blue font-semibold group-hover:gap-3 gap-2 transition-all">
                    Explore Digital Engineering <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                  </span>
                </div>
              </Link>
            </div>

            {/* CTA Button */}
            <div className="text-center">
              <Link
                to="/services"
                className="btn btn-gradient btn-lg"
              >
                <span>Explore All Services</span>
                <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
            </div>
          </div>
        </div>
      </LazySection>
      {/* ========================================
          END: Featured Services Section
          ======================================== */}

      {/* ========================================
          START: Right Partner Section
          Why SecuNova is the right partner for prospective clients
          ======================================== */}
      <LazySection className="py-12 sm:py-16 md:py-20 lg:py-24 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-12 sm:mb-16">
              <div className="inline-flex items-center bg-secunova-light/10 text-secunova-light px-3 sm:px-4 py-2 rounded-full text-xs sm:text-sm font-medium mb-4 sm:mb-6">
                <Shield className="h-4 w-4 mr-2" />
                Your Partner, Not a Vendor
              </div>
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-secunova-dark mb-4 sm:mb-6">
                The Partner Your Board Will <span className="bg-clip-text text-transparent bg-gradient-to-r from-secunova-blue to-secunova-light">Thank You For Choosing</span>
              </h2>
              <p className="text-base sm:text-lg md:text-xl text-secunova-dark/70 max-w-3xl mx-auto leading-relaxed">
                Choosing a digital partner is a bet on your momentum. Here's why leaders across Canada and the U.S. place that bet with SecuNova.
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8">
              <div className="bg-gray-50 rounded-2xl p-8 border border-gray-100 hover:shadow-xl hover:-translate-y-1 transition-all duration-300">
                <div className="w-14 h-14 bg-gradient-to-br from-secunova-blue to-secunova-blue/80 rounded-xl flex items-center justify-center mb-6">
                  <Shield className="h-7 w-7 text-white" />
                </div>
                <h3 className="text-xl font-bold text-secunova-dark mb-3">We Own Outcomes, Not Just Deliverables</h3>
                <p className="text-secunova-dark/70 leading-relaxed">
                  We measure our work by the momentum you gain, not the pages we push live. When your goals move, so do we until they're met.
                </p>
              </div>

              <div className="bg-gray-50 rounded-2xl p-8 border border-gray-100 hover:shadow-xl hover:-translate-y-1 transition-all duration-300">
                <div className="w-14 h-14 bg-gradient-to-br from-secunova-light to-secunova-light/80 rounded-xl flex items-center justify-center mb-6">
                  <Layers className="h-7 w-7 text-white" />
                </div>
                <h3 className="text-xl font-bold text-secunova-dark mb-3">One Team, Zero Handoffs</h3>
                <p className="text-secunova-dark/70 leading-relaxed">
                  Strategy, design, and engineering under one roof. No passing projects between agencies, no finger-pointing when something needs fixing.
                </p>
              </div>

              <div className="bg-gray-50 rounded-2xl p-8 border border-gray-100 hover:shadow-xl hover:-translate-y-1 transition-all duration-300">
                <div className="w-14 h-14 bg-gradient-to-br from-secunova-blue to-secunova-light rounded-xl flex items-center justify-center mb-6">
                  <Briefcase className="h-7 w-7 text-white" />
                </div>
                <h3 className="text-xl font-bold text-secunova-dark mb-3">Business First, Technology Second</h3>
                <p className="text-secunova-dark/70 leading-relaxed">
                  We start in the boardroom, not the codebase. We understand P&amp;L, budgets, and revenue, then we choose the technology that serves them.
                </p>
              </div>

              <div className="bg-gray-50 rounded-2xl p-8 border border-gray-100 hover:shadow-xl hover:-translate-y-1 transition-all duration-300">
                <div className="w-14 h-14 bg-gradient-to-br from-secunova-light to-secunova-blue/80 rounded-xl flex items-center justify-center mb-6">
                  <Compass className="h-7 w-7 text-white" />
                </div>
                <h3 className="text-xl font-bold text-secunova-dark mb-3">Honest Advice, Even When It Means Less Work</h3>
                <p className="text-secunova-dark/70 leading-relaxed">
                  If you don't need a service, we'll tell you. Trust is what we build, and our services are simply how we deliver it.
                </p>
              </div>
            </div>

            <div className="text-center mt-12 sm:mt-16">
              <p className="text-secunova-dark/70 text-lg max-w-2xl mx-auto">
                No two engagements look alike because no two organizations should. 
                <Link to="/contact" className="text-secunova-blue font-semibold hover:text-secunova-light transition-colors ml-1">
                  Let's talk about yours <ArrowRight className="inline h-4 w-4" />
                </Link>
              </p>
            </div>
          </div>
        </div>
      </LazySection>
      {/* ========================================
          END: Right Partner Section
          ======================================== */}

      {/* ========================================
          START: Competitive Advantages Section
          Unique differentiators and value proposition
          ======================================== */}
      <LazySection className="py-12 sm:py-16 md:py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-12">
              <div className="inline-flex items-center bg-secunova-blue/10 text-secunova-blue px-4 py-2 rounded-full text-sm font-medium mb-6">
                <Star className="h-4 w-4 mr-2" />
                What Sets Us Apart
              </div>
              <h2 className="text-3xl md:text-4xl font-bold text-secunova-dark mb-4">
                The SecuNova <span className="bg-clip-text text-transparent bg-gradient-to-r from-secunova-blue to-secunova-light">Difference</span>
              </h2>
              <p className="text-lg text-secunova-dark/70 max-w-3xl mx-auto">
                Three reasons North American leaders trust SecuNova with their digital future
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
              <div className="bg-white rounded-2xl p-8 shadow-lg border border-gray-100">
                <div className="w-14 h-14 bg-gradient-to-br from-secunova-blue to-secunova-blue/80 rounded-xl flex items-center justify-center mb-6">
                  <MapPin className="h-7 w-7 text-white" />
                </div>
                <h3 className="text-xl font-bold text-secunova-dark mb-4">Calgary-Based, North America-Ready</h3>
                <p className="text-secunova-dark/70 leading-relaxed">
                  Deep roots in the Canadian market with delivery standards built for U.S. and Canadian corporate expectations. We understand how your buyers buy.
                </p>
              </div>
              
              <div className="bg-white rounded-2xl p-8 shadow-lg border border-gray-100">
                <div className="w-14 h-14 bg-gradient-to-br from-secunova-light to-secunova-light/80 rounded-xl flex items-center justify-center mb-6">
                  <Crown className="h-7 w-7 text-white" />
                </div>
                <h3 className="text-xl font-bold text-secunova-dark mb-4">Senior-Led, Not Delegated</h3>
                <p className="text-secunova-dark/70 leading-relaxed">
                  Every engagement is scoped, designed, and delivered by a principal architect with no junior hand-offs. You never get handed off to a junior who's learning on your dime.
                </p>
              </div>
              
              <div className="bg-white rounded-2xl p-8 shadow-lg border border-gray-100">
                <div className="w-14 h-14 bg-gradient-to-br from-secunova-blue to-secunova-light rounded-xl flex items-center justify-center mb-6">
                  <Database className="h-7 w-7 text-white" />
                </div>
                <h3 className="text-xl font-bold text-secunova-dark mb-4">Predictable, Transparent Costs</h3>
                <p className="text-secunova-dark/70 leading-relaxed">
                  No hidden fees, no surprise invoices. Flat, transparent pricing that scales with you, so your board gets budget certainty and your finance team gets control.
                </p>
              </div>
            </div>
            
            <div className="bg-white rounded-2xl p-8 shadow-lg border-2 border-secunova-blue/20">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
                <div>
                  <h3 className="text-2xl font-bold text-secunova-dark mb-4">Ready to Get Started?</h3>
                  <p className="text-secunova-dark/70 mb-6">
                    Book a free strategy call. No pressure, no obligation, just an honest assessment of where your organization stands and the fastest path forward.
                  </p>
                  <div className="space-y-3 mb-6">
                    <div className="flex items-center">
                      <CheckCircle className="h-5 w-5 text-green-500 mr-3 flex-shrink-0" />
                      <span className="text-secunova-dark">Free strategic assessment</span>
                    </div>
                    <div className="flex items-center">
                      <CheckCircle className="h-5 w-5 text-green-500 mr-3 flex-shrink-0" />
                      <span className="text-secunova-dark">Customized action plan</span>
                    </div>
                    <div className="flex items-center">
                      <CheckCircle className="h-5 w-5 text-green-500 mr-3 flex-shrink-0" />
                      <span className="text-secunova-dark">No commitment required</span>
                    </div>
                  </div>
                </div>
                <div className="text-center md:text-right">
                  <Link
                    to="/contact"
                    className="btn btn-gradient btn-lg"
                  >
                    <span>Book Your Free Strategy Call</span>
                    <ArrowRight className="ml-2 h-5 w-5" />
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </LazySection>
      {/* ========================================
          END: Competitive Advantages Section
          ======================================== */}


      {/* ========================================
          START: Quick Contact Section
          Direct contact methods and call-to-action for immediate engagement
          ======================================== */}
      <section 
        className="relative min-h-[50vh] overflow-hidden flex items-center justify-center py-16 md:py-24"
        style={{
          backgroundImage: 'url(https://images.pexels.com/photos/3184416/pexels-photo-3184416.jpeg?auto=compress&cs=tinysrgb&w=1920&q=85)',
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundRepeat: 'no-repeat'
        }}
      >
        <div className="absolute inset-0 bg-gradient-to-br from-secunova-dark/95 via-secunova-dark/90 to-secunova-blue/85"></div>
        <div className="container mx-auto px-4 relative z-10 w-full">
          <div className="max-w-6xl mx-auto w-full">
            <div className="text-center text-white">
              <div className="inline-flex items-center bg-white/10 backdrop-blur-sm border border-white/20 px-6 py-3 rounded-full text-sm font-medium mb-6">
              <Phone className="h-4 w-4 mr-2" />
              Ready to Get Started?
            </div>

              <h2 className="text-3xl md:text-5xl font-bold mb-5 leading-tight">
              Let's Build Your <span className="block text-secunova-light">Next Advantage</span>
            </h2>

              <p className="text-xl text-blue-100 max-w-2xl mx-auto mb-8 leading-relaxed">
              Whether you need boardroom strategy or a website that sells, our senior team is ready
              to map out your fastest path to growth. Tell us where you want to be in twelve months.
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 mb-8 sm:mb-12">
              <a href="tel:403-401-1552" className="group bg-white/10 backdrop-blur-sm border border-white/20 rounded-lg sm:rounded-xl p-4 sm:p-6 hover:bg-white/20 transition-all duration-300 hover:-translate-y-1 hover:shadow-xl touch-target">
                <Phone className="h-6 sm:h-8 w-6 sm:w-8 text-secunova-light mx-auto mb-3 sm:mb-4 group-hover:scale-110 transition-transform duration-300" />
                <h3 className="font-bold text-white mb-2 text-sm sm:text-base">Call Now</h3>
                  <p className="text-blue-100 text-xs sm:text-sm">403-401-1552</p>
              </a>

              <a href="mailto:hello@secunovainc.com" className="group bg-white/10 backdrop-blur-sm border border-white/20 rounded-lg sm:rounded-xl p-4 sm:p-6 hover:bg-white/20 transition-all duration-300 hover:-translate-y-1 hover:shadow-xl touch-target">
                <Mail className="h-6 sm:h-8 w-6 sm:w-8 text-secunova-blue mx-auto mb-3 sm:mb-4 group-hover:scale-110 transition-transform duration-300" />
                <h3 className="font-bold text-white mb-2 text-sm sm:text-base">Send Message</h3>
                  <p className="text-blue-100 text-xs sm:text-sm">hello@secunovainc.com</p>
              </a>

              <Link to="/contact" className="group bg-white/10 backdrop-blur-sm border border-white/20 rounded-lg sm:rounded-xl p-4 sm:p-6 hover:bg-white/20 transition-all duration-300 hover:-translate-y-1 hover:shadow-xl touch-target sm:col-span-2 lg:col-span-1">
                <Target className="h-6 sm:h-8 w-6 sm:w-8 text-secunova-light mx-auto mb-3 sm:mb-4 group-hover:scale-110 transition-transform duration-300" />
                <h3 className="font-bold text-white mb-2 text-sm sm:text-base">Free Strategy Call</h3>
                  <p className="text-blue-100 text-xs sm:text-sm">Map your path forward</p>
              </Link>
            </div>

            <div className="flex flex-col sm:flex-row justify-center gap-4 sm:gap-6">
              <Link
                to="/contact"
                  className="btn btn-white btn-md"
              >
                <span className="flex items-center justify-center">
                    <span>Start Your Project Today</span>
                  <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform duration-300" />
                </span>
              </Link>

              <Link
                to="/services"
                  className="btn btn-outline-light btn-md"
              >
                <span className="flex items-center justify-center">
                    <span>Browse All Services</span>
                  <BarChart className="ml-2 h-4 w-4 group-hover:scale-110 transition-transform duration-300" />
                </span>
              </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* ========================================
          END: Quick Contact Section
          ======================================== */}
    </div>
  );
};

/* ========================================
   END: HOMEPAGE COMPONENT
   ======================================== */
export default memo(HomePage);