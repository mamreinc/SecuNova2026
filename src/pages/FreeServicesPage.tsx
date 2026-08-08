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
import { Helmet } from 'react-helmet-async';
import {
  Gift, Globe, ArrowRight, CheckCircle, CheckCircle2, Flag,
  ExternalLink, Shield, Zap, Phone, Mail,
  MapPin, Laptop, Layout, Building2, Code
} from 'lucide-react';
import CtaSection from '../components/CtaSection';

const PORTFOLIO_SITES = [
  {
    id: 'canadaquest',
    name: 'CanadaQuest',
    domain: 'canadaquest.app',
    url: 'https://canadaquest.app',
    category: 'Civic Education Platform',
    tagline: 'Adaptive Canadian Citizenship Exam Engine',
    description: 'Modern offline-first citizenship training hub with full curriculum coverage, practice exam simulation, and accessibility standards.',
    metrics: ['100% Offline Capable', 'WCAG 2.1 Compliant', 'Adaptive Exam Engine'],
    tags: ['Educational App', 'Offline First', 'WCAG Compliant']
  }
];

const INCLUDED_FEATURES = [
  {
    title: 'Custom Responsive Design',
    description: 'Tailored single-page layout crafted specifically for your business branding and target audience.',
    icon: <Layout className="h-5 w-5 text-secunova-blue" />
  },
  {
    title: 'Mobile-First Optimization',
    description: 'Flawless responsive layout across mobile phones, tablets, and desktop computers.',
    icon: <Laptop className="h-5 w-5 text-secunova-blue" />
  },
  {
    title: 'Contact & Lead Capture',
    description: 'Integrated contact forms, direct phone links, and business location mapping.',
    icon: <Mail className="h-5 w-5 text-secunova-blue" />
  },
  {
    title: 'On-Page SEO Setup',
    description: 'Meta titles, descriptions, and structured metadata for search engine indexability.',
    icon: <Globe className="h-5 w-5 text-secunova-blue" />
  },
  {
    title: 'Free SSL & Security',
    description: 'HTTPS encryption setup to protect your visitors and build trust.',
    icon: <Shield className="h-5 w-5 text-secunova-blue" />
  },
  {
    title: '1st Year Hosting Guidance',
    description: 'Complimentary assistance setting up fast static hosting with zero maintenance hassle.',
    icon: <Zap className="h-5 w-5 text-secunova-blue" />
  }
];

const ELIGIBILITY = [
  {
    title: 'Registered .CA Domain',
    desc: 'You must own or register an active Canadian .ca domain to verify your Canadian presence.',
    icon: <Flag className="h-6 w-6 text-red-600" />
  },
  {
    title: 'Alberta Business Location',
    desc: 'Located in Calgary, Edmonton, or elsewhere within Alberta communities.',
    icon: <MapPin className="h-6 w-6 text-secunova-blue" />
  },
  {
    title: 'Small Business / Startup',
    desc: 'Fewer than 10 employees or early-stage independent business in your first year.',
    icon: <Building2 className="h-6 w-6 text-secunova-light" />
  }
];

const FreeServicesPage = () => {
  return (
    <div className="min-h-screen bg-white text-gray-900">
      <Helmet>
        <title>Free Website for Alberta Small Businesses | SecuNova Consulting</title>
        <meta
          name="description"
          content="Complimentary professional website development for eligible small businesses in Calgary and Alberta with a registered .ca domain. Apply today."
        />
        <meta
          name="keywords"
          content="free website Calgary, free website Alberta, small business website Alberta, .ca domain website, Calgary web design, SecuNova Consulting community initiative"
        />
        <link rel="canonical" href="https://secunovainc.com/free-services" />

        <meta property="og:title" content="Free Website for Alberta Small Businesses | SecuNova Consulting" />
        <meta property="og:description" content="100% free professional websites for eligible small Canadian businesses with a .ca domain. Apply today." />
        <meta property="og:url" content="https://secunovainc.com/free-services" />
        <meta property="og:type" content="website" />
        <meta property="og:image" content="https://secunovainc.com/og-image.png" />
        <meta property="og:image:width" content="1200" />
        <meta property="og:image:height" content="630" />
        <meta property="og:site_name" content="SecuNova Consulting" />

        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Free Website for Alberta Small Businesses | SecuNova Consulting" />
        <meta name="twitter:description" content="100% free professional websites for eligible small Canadian businesses." />
        <meta name="twitter:image" content="https://secunovainc.com/og-image.png" />
      </Helmet>

      {/* Hero Section */}
      <section className="pt-28 pb-16 md:pt-36 md:pb-24 bg-gradient-to-b from-blue-50/70 via-white to-white border-b border-gray-100">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <div className="inline-flex items-center gap-2 bg-blue-100/80 text-secunova-blue px-4 py-2 rounded-full text-xs font-semibold uppercase tracking-wider mb-6 border border-blue-200">
              <Gift className="h-4 w-4" />
              <span>SecuNova Community Initiative</span>
            </div>
            
            <h1 className="text-4xl sm:text-5xl font-bold text-secunova-dark tracking-tight leading-tight mb-6">
              Free Professional Websites for <br className="hidden sm:inline" />
              <span className="text-secunova-blue">Small Canadian Businesses</span>
            </h1>
            
            <p className="text-lg md:text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed mb-8">
              We believe every small business in Alberta deserves a high-quality, professional online presence.
              SecuNova Inc. provides 100% free website development for eligible local businesses holding a registered <span className="font-semibold text-gray-800">.ca domain</span>.
            </p>

            <div className="flex flex-col sm:flex-row justify-center gap-4 mb-12">
              <a
                href="mailto:freewebsite@secunovainc.com?subject=Free%20Website%20Application&body=Hi%20SecuNova%20Team,%0D%0A%0D%0AI%20would%20like%20to%20apply%20for%20a%20free%20website%20for%20my%20small%20business.%0D%0A%0D%0ABusiness%20Name:%20%0D%0ALocation%20(City,%20Alberta):%20%0D%0A.CA%20Domain%20Name:%20%0D%0APhone%20Number:%20"
                className="btn btn-gradient btn-md shadow-md hover:shadow-lg transition-all group"
              >
                <span>Apply for Your Free Website</span>
                <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
              </a>
              <a
                href="#eligibility"
                className="btn btn-outline border-gray-300 text-gray-700 hover:text-secunova-blue hover:border-secunova-blue btn-md"
              >
                <span>Check Eligibility</span>
              </a>
            </div>

            {/* Quick Feature Pillars */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 text-center">
              <div className="p-4 rounded-xl bg-white border border-gray-200/80 shadow-sm">
                <div className="text-2xl font-bold text-secunova-blue">100% Free</div>
                <div className="text-xs text-gray-500 font-medium mt-1">Zero Development Fees</div>
              </div>
              <div className="p-4 rounded-xl bg-white border border-gray-200/80 shadow-sm">
                <div className="text-2xl font-bold text-secunova-blue">.CA Only</div>
                <div className="text-xs text-gray-500 font-medium mt-1">Canadian Market Focus</div>
              </div>
              <div className="p-4 rounded-xl bg-white border border-gray-200/80 shadow-sm">
                <div className="text-2xl font-bold text-secunova-blue">Mobile-First</div>
                <div className="text-xs text-gray-500 font-medium mt-1">Responsive Design</div>
              </div>
              <div className="p-4 rounded-xl bg-white border border-gray-200/80 shadow-sm">
                <div className="text-2xl font-bold text-secunova-blue">Fast Delivery</div>
                <div className="text-xs text-gray-500 font-medium mt-1">Quick Turnaround</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Websites Portfolio Section */}
      <section className="py-20 md:py-28 bg-gray-50 border-b border-gray-100">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            
            <div className="text-center mb-16">
              <div className="inline-flex items-center gap-2 bg-blue-100/80 text-secunova-blue px-3.5 py-1.5 rounded-full text-xs font-semibold uppercase tracking-wider mb-4 border border-blue-200">
                <Globe className="h-4 w-4" />
                <span>Our Track Record & Portfolio</span>
              </div>
              <h2 className="text-3xl md:text-5xl font-bold text-secunova-dark tracking-tight mb-4">
                Websites & Platforms Built by SecuNova
              </h2>
              <p className="text-gray-600 text-lg max-w-2xl mx-auto leading-relaxed">
                Explore a selection of live digital platforms and web systems engineered by our team. Each project demonstrates our commitment to performance, accessibility, and clean design.
              </p>
            </div>

            {/* Portfolio Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {PORTFOLIO_SITES.map((site) => (
                <div
                  key={site.id}
                  className="bg-white border border-gray-200 rounded-3xl p-8 shadow-sm hover:shadow-xl transition-all duration-300 flex flex-col justify-between group"
                >
                  <div>
                    {/* Top Row: Category Badge & Domain Link */}
                    <div className="flex items-center justify-between gap-2 mb-4">
                      <span className="px-3 py-1 bg-blue-50 text-secunova-blue border border-blue-100 rounded-full text-xs font-semibold">
                        {site.category}
                      </span>
                      {site.url && (
                        <a
                          href={site.url}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="inline-flex items-center gap-1 text-xs font-medium text-gray-500 hover:text-secunova-blue transition-colors"
                        >
                          <span>{site.domain}</span>
                          <ExternalLink className="h-3.5 w-3.5" />
                        </a>
                      )}
                    </div>

                    {/* Site Title & Tagline */}
                    <h3 className="text-2xl font-bold text-secunova-dark group-hover:text-secunova-blue transition-colors mb-1">
                      {site.name}
                    </h3>
                    <p className="text-sm font-semibold text-secunova-light mb-4">
                      {site.tagline}
                    </p>

                    {/* Description */}
                    <p className="text-gray-600 text-sm leading-relaxed mb-6">
                      {site.description}
                    </p>

                    {/* Metrics Badges */}
                    <div className="grid grid-cols-3 gap-2 mb-6 p-3 bg-gray-50 rounded-xl border border-gray-100">
                      {site.metrics.map((metric, i) => (
                        <div key={i} className="text-center">
                          <div className="text-xs font-bold text-secunova-dark">{metric}</div>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Footer Action */}
                  <div className="pt-4 border-t border-gray-100 flex items-center justify-between">
                    <div className="flex flex-wrap gap-1.5">
                      {site.tags.map((tag, i) => (
                        <span key={i} className="px-2.5 py-0.5 bg-gray-100 text-gray-600 rounded-md text-[11px] font-medium">
                          {tag}
                        </span>
                      ))}
                    </div>
                    {site.url && (
                      <a
                        href={site.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-1 text-xs font-bold text-secunova-blue hover:underline"
                      >
                        Visit Website <ArrowRight className="h-3.5 w-3.5" />
                      </a>
                    )}
                  </div>
                </div>
              ))}
            </div>

          </div>
        </div>
      </section>

      {/* Included Features Section (BEM Refactored) */}
      <section className="secunova-section secunova-section--light">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-5xl font-bold text-secunova-dark tracking-tight mb-4">
                What's Included in Your Free Website
              </h2>
              <p className="text-gray-600 text-lg max-w-2xl mx-auto leading-relaxed">
                Everything you need to launch a credible, modern online presence for your business at zero cost.
              </p>
            </div>

            <div className="secunova-grid secunova-grid--3col">
              {INCLUDED_FEATURES.map((feature, index) => (
                <div
                  key={index}
                  className="secunova-card"
                >
                  <div>
                    <div className="secunova-card__header">
                      <div className="secunova-card__icon">
                        {feature.icon}
                      </div>
                      <h3 className="secunova-card__title">{feature.title}</h3>
                    </div>
                    <div className="secunova-card__body">
                      <p className="secunova-card__description">{feature.description}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>

          </div>
        </div>
      </section>

      {/* Vibe Coding & Managed Content Architecture Section */}
      <section className="py-16 md:py-24 bg-gradient-to-b from-blue-50/60 to-white border-y border-gray-100">
        <div className="container mx-auto px-4">
          <div className="max-w-5xl mx-auto">
            <div className="bg-white border border-gray-200 rounded-3xl p-8 md:p-12 shadow-sm">
              <div className="inline-flex items-center gap-2 bg-blue-50 text-secunova-blue border border-blue-100 px-3.5 py-1.5 rounded-full text-xs font-semibold uppercase tracking-wider mb-4">
                <Code className="h-4 w-4" />
                <span>Architecture & Content Operations</span>
              </div>
              
              <h2 className="text-2xl md:text-4xl font-bold text-secunova-dark mb-4">
                Built with Vibe Coding. Fully Managed by SecuNova.
              </h2>
              
              <p className="text-gray-600 text-base md:text-lg leading-relaxed mb-8">
                Our free websites are engineered to give small business owners maximum performance and zero administrative headaches.
              </p>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                {/* Vibe Coding */}
                <div className="p-6 rounded-2xl bg-gray-50 border border-gray-200/80">
                  <div className="w-12 h-12 rounded-xl bg-blue-100 text-secunova-blue flex items-center justify-center mb-4">
                    <Code className="h-6 w-6" />
                  </div>
                  <h3 className="text-xl font-bold text-secunova-dark mb-2">
                    Vibe Coding (Custom Code)
                  </h3>
                  <p className="text-sm text-gray-600 leading-relaxed">
                    These websites are built from scratch using <strong>Vibe Coding</strong> (AI-augmented high-velocity code engineering). Rather than relying on slow, vulnerable Content Management Systems (CMS) like WordPress or Wix, your site is built as lightweight static code for instant loading and enterprise-grade security.
                  </p>
                </div>

                {/* Managed Content Service */}
                <div className="p-6 rounded-2xl bg-gray-50 border border-gray-200/80">
                  <div className="w-12 h-12 rounded-xl bg-blue-100 text-secunova-blue flex items-center justify-center mb-4">
                    <Shield className="h-6 w-6" />
                  </div>
                  <h3 className="text-xl font-bold text-secunova-dark mb-2">
                    Fully Managed Content Updates
                  </h3>
                  <p className="text-sm text-gray-600 leading-relaxed">
                    Our free websites do <strong>not</strong> include a CMS backend or admin control panel. You don’t have to waste time learning software or fixing broken plugins. When you need to update text, business hours, services, or images, simply send us an email and <strong>we manage the updates for you</strong>.
                  </p>
                </div>
              </div>

              <div className="mt-8 p-4 rounded-xl bg-blue-50/80 border border-blue-200 text-xs md:text-sm text-slate-800 flex items-center gap-3">
                <CheckCircle2 className="h-5 w-5 text-secunova-blue flex-shrink-0" />
                <span>
                  <strong>Hassle-Free Maintenance:</strong> You focus on growing your business while we handle all technical maintenance, hosting stability, and content updates.
                </span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Eligibility Requirements Section */}
      <section id="eligibility" className="py-20 md:py-28 bg-gray-50 border-t border-gray-100">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            
            <div className="text-center mb-16">
              <div className="inline-flex items-center gap-2 bg-blue-100/80 text-secunova-blue px-3.5 py-1.5 rounded-full text-xs font-semibold uppercase tracking-wider mb-4 border border-blue-200">
                <CheckCircle className="h-4 w-4" />
                <span>Eligibility Criteria</span>
              </div>
              <h2 className="text-3xl md:text-5xl font-bold text-secunova-dark tracking-tight mb-4">
                Simple Eligibility Criteria
              </h2>
              <p className="text-gray-600 text-lg max-w-2xl mx-auto leading-relaxed">
                To keep this community offer accessible and focused on local impact, applicants should satisfy the following criteria:
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
              {ELIGIBILITY.map((item, index) => (
                <div key={index} className="bg-white border border-gray-200 rounded-2xl p-6 text-center shadow-sm">
                  <div className="w-14 h-14 mx-auto rounded-xl bg-gray-50 flex items-center justify-center mb-4 border border-gray-100">
                    {item.icon}
                  </div>
                  <h3 className="text-lg font-bold text-secunova-dark mb-2">{item.title}</h3>
                  <p className="text-sm text-gray-600 leading-relaxed">{item.desc}</p>
                </div>
              ))}
            </div>

            {/* .CA Domain Note Box */}
            <div className="bg-blue-50/80 border border-blue-200 rounded-2xl p-8 text-blue-950">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-xl bg-blue-100 flex items-center justify-center flex-shrink-0 text-secunova-blue">
                  <Flag className="h-6 w-6" />
                </div>
                <div>
                  <h3 className="text-lg font-bold text-secunova-dark mb-2">
                    Requirement: Registered .CA Domain Name
                  </h3>
                  <p className="text-sm text-gray-700 leading-relaxed mb-3">
                    A registered <strong>.ca domain</strong> demonstrates your active presence in the Canadian market. You must possess or register a .ca domain prior to beginning development.
                  </p>
                  <div className="text-xs text-gray-600 font-medium">
                    Recommended Registrars: Canadian Internet Registration Authority (CIRA), authorized Canadian web hosts.
                  </div>
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* How to Apply / 4 Steps */}
      <section className="py-20 md:py-28 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-5xl mx-auto">
            
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-5xl font-bold text-secunova-dark tracking-tight mb-4">
                4 Easy Steps to Get Started
              </h2>
              <p className="text-gray-600 text-lg max-w-2xl mx-auto leading-relaxed">
                Our application process is simple, fast, and straightforward.
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {[
                { step: '01', title: 'Secure .CA Domain', desc: 'Register your official Canadian .ca domain name.' },
                { step: '02', title: 'Submit Application', desc: 'Email us your business details and domain name.' },
                { step: '03', title: 'Design & Build', desc: 'We craft your responsive single-page website.' },
                { step: '04', title: 'Launch & Publish', desc: 'Your website goes live with free hosting guidance.' }
              ].map((s, index) => (
                <div key={index} className="p-6 rounded-2xl bg-gray-50 border border-gray-200/80 text-center relative">
                  <div className="text-3xl font-extrabold text-secunova-blue mb-3">{s.step}</div>
                  <h3 className="text-base font-bold text-secunova-dark mb-1.5">{s.title}</h3>
                  <p className="text-xs text-gray-600 leading-relaxed">{s.desc}</p>
                </div>
              ))}
            </div>

          </div>
        </div>
      </section>

      {/* Main Action Banner */}
      <section className="py-16 md:py-24 bg-gradient-to-r from-secunova-dark via-slate-900 to-secunova-blue text-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm px-4 py-2 rounded-full text-xs font-semibold uppercase tracking-wider mb-6 border border-white/20">
              <Gift className="h-4 w-4" />
              <span>Limited Availability Monthly</span>
            </div>
            
            <h2 className="text-3xl md:text-5xl font-extrabold tracking-tight mb-6">
              Ready to Launch Your Free Business Website?
            </h2>
            
            <p className="text-lg text-blue-100 max-w-2xl mx-auto mb-8 leading-relaxed">
              Contact us today with your .ca domain details to reserve your complimentary website development slot.
            </p>

            <div className="flex flex-col sm:flex-row justify-center gap-4">
              <a
                href="mailto:freewebsite@secunovainc.com?subject=Free%20Website%20Application"
                className="btn btn-gradient btn-lg shadow-lg hover:shadow-xl"
              >
                <Mail className="mr-2 h-5 w-5" />
                <span>Apply via Email</span>
                <ArrowRight className="ml-2 h-5 w-5" />
              </a>
              <a
                href="tel:403-401-1552"
                className="btn btn-outline-light btn-lg"
              >
                <Phone className="mr-2 h-5 w-5" />
                <span>Call 403-401-1552</span>
              </a>
            </div>
          </div>
        </div>
      </section>

      <CtaSection />
    </div>
  );
};

export default FreeServicesPage;