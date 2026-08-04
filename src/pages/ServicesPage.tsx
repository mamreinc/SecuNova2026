/*
========================================
SERVICES PAGE COMPONENT
Custom Built by SecuNova Inc.
========================================

Reorganized service architecture built around two strategic pillars:

  Pillar I  - Strategic Consulting & Executive Programs
  Pillar II - Digital Engineering & Growth Solutions

Conversion-focused, executive-grade copy for the North American
corporate market. Built from scratch for professional presentation.
========================================
*/

import React from 'react';
import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';
import {
  Crown, Code, ArrowRight, CheckCircle, Lightbulb,
  GraduationCap, RefreshCw, Globe, Wrench, PenTool, FileText,
  ClipboardCheck, Boxes, Network, Target, Zap, Phone, Mail
} from 'lucide-react';
import CtaSection from '../components/CtaSection';

interface ServiceCardProps {
  title: string;
  description: string;
  icon: React.ReactNode;
  highlights: string[];
  path: string;
  accent: 'blue' | 'light' | 'dark';
  badge?: string;
  className?: string;
}

const accentStyles = {
  blue: {
    icon: 'from-secunova-blue to-secunova-blue',
    hoverBorder: 'hover:border-secunova-blue/40',
    hoverTitle: 'group-hover:text-secunova-blue',
    check: 'text-secunova-blue',
    glow: 'from-secunova-blue/5 to-secunova-light/5',
  },
  light: {
    icon: 'from-secunova-light to-secunova-light',
    hoverBorder: 'hover:border-secunova-light/40',
    hoverTitle: 'group-hover:text-secunova-light',
    check: 'text-secunova-light',
    glow: 'from-secunova-light/5 to-secunova-blue/5',
  },
  dark: {
    icon: 'from-secunova-dark to-secunova-dark',
    hoverBorder: 'hover:border-secunova-dark/40',
    hoverTitle: 'group-hover:text-secunova-dark',
    check: 'text-secunova-dark',
    glow: 'from-secunova-dark/5 to-secunova-blue/5',
  },
};

const ServiceCard: React.FC<ServiceCardProps> = ({ title, description, icon, highlights, path, accent, badge, className = '' }) => {
  const styles = accentStyles[accent];

  return (
    <Link
      to={path}
      className={`secunova-card group ${className}`}
    >
      <div>
        <div className="secunova-card__header">
          <div className="secunova-card__icon">
            {icon}
          </div>
          <div className="secunova-card__header-content">
            <h3 className={`secunova-card__title transition-colors duration-300 ${styles.hoverTitle}`}>{title}</h3>
            {badge && (
              <span className="secunova-card__badge">
                {badge}
              </span>
            )}
          </div>
        </div>

        <div className="secunova-card__body">
          <p className="secunova-card__description">{description}</p>
          <div className="secunova-card__list">
            {highlights.slice(0, 3).map((item, index) => (
              <div key={index} className="secunova-card__list-item">
                <CheckCircle className={`secunova-card__list-icon ${styles.check}`} />
                <span>{item}</span>
              </div>
            ))}
          </div>
        </div>
      </div>

      <div className="secunova-card__footer">
        <span className="inline-flex items-center text-secunova-blue font-semibold transition-all group-hover:gap-3 gap-2 text-sm">
          Explore <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
        </span>
      </div>
    </Link>
  );
};

interface PillarHeaderProps {
  index: string;
  label: string;
  title: string;
  description: string;
  icon: React.ReactNode;
}

const PillarHeader: React.FC<PillarHeaderProps> = ({ index, label, title, description, icon }) => {
  return (
    <div className="mb-12 md:mb-16">
      <div className="inline-flex items-center bg-secunova-blue/10 text-secunova-blue px-6 py-3 rounded-full text-sm font-semibold mb-6">
        <span className="flex items-center gap-2">
          {icon}
          <span className="uppercase tracking-wide">{label}</span>
          <span className="px-2 py-0.5 rounded-md bg-secunova-blue text-white text-xs">{index}</span>
        </span>
      </div>
      <h2 className="text-3xl md:text-5xl font-bold text-secunova-dark mb-5 leading-tight">
        {title}
      </h2>
      <p className="text-lg md:text-xl text-secunova-dark/70 max-w-3xl leading-relaxed">
        {description}
      </p>
    </div>
  );
};

const ServicesPage = () => {
  const strategicServices = [
    {
      title: 'Digital Transformation Consulting',
      description:
        'Helping leaders and organizations adapt to rapid technological changes and build sustainable digital strategies to prevent system inefficiency and technological entropy.',
      icon: <RefreshCw className="h-6 w-6" />,
      highlights: ['Digital strategy & roadmap', 'Technology change management', 'System inefficiency recovery'],
      path: '/contact',
      accent: 'blue' as const,
    },
    {
      title: 'Executive Leadership & Innovation Consulting',
      description:
        'Empowering C-suite executives and leadership teams with strategic digital fluency while co-creating custom technology solutions tailored to your organization\'s unique operational vision.',
      icon: <GraduationCap className="h-6 w-6" />,
      highlights: ['Executive digital fluency & C-suite training', 'Collaborative technology co-creation', 'Workflow-driven innovation frameworks'],
      path: '/contact',
      accent: 'light' as const,
    },
    {
      title: 'Digital Project Management (PMaaS)',
      description:
        'Independent technical project supervision for business engagements. Our senior consultants enforce milestones, protect budgets, and deliver strict vendor oversight.',
      icon: <ClipboardCheck className="h-6 w-6" />,
      highlights: ['Project Management as a Service', 'Vendor oversight & accountability', 'Capital & budget protection'],
      path: '/services/digital-project-management',
      accent: 'blue' as const,
      badge: 'Strategic Shield PMaaS',
    },
  ];

  const engineeringServices = [
    {
      title: 'Custom Web App',
      description:
        'Custom web applications, enterprise platforms, and high-converting funnels built using modern React.js architectures and senior-led AI workflows for maximum performance and conversion.',
      icon: <Globe className="h-6 w-6" />,
      highlights: ['Custom React.js & Web Applications', 'Enterprise platforms & conversion funnels', 'High-performance AI-augmented engineering'],
      path: '/services/web-development',
      accent: 'blue' as const,
    },
    {
      title: 'Vibe Coding & Custom Web Engineering',
      description:
        'High-velocity custom web development built with Vibe Coding (senior-led AI-augmented code architecture). Pure custom React.js code that eliminates slow CMS software, plugin vulnerabilities, and database bloat. Fully managed retainer packages available.',
      icon: <Code className="h-6 w-6" />,
      highlights: ['100% Pure Custom Code (Zero Slow CMS / WordPress)', 'High-Velocity AI-Augmented Engineering', 'Fully Managed Content & Hosting Retainers'],
      path: '/services/web-development',
      accent: 'blue' as const,
      badge: 'Vibe Coding',
    },
    {
      title: 'Web Maintenance & Performance Optimization',
      description:
        'Offering monthly retainer packages for site speed enhancements, security updates, 24/7 uptime monitoring, and technical bug fixes to ensure zero business disruption.',
      icon: <Wrench className="h-6 w-6" />,
      highlights: ['Monthly retainer care', 'Speed & Core Web Vitals optimization', 'Security updates & bug fixes'],
      path: '/contact',
      accent: 'dark' as const,
    },
    {
      title: 'Website & App UI/UX Redesigns',
      description:
        'Auditing existing platforms and delivering modern, human-centric interface wireframes and high-fidelity mockups (using Figma) that boost user engagement and credibility.',
      icon: <PenTool className="h-6 w-6" />,
      highlights: ['Human-centric UX audit', 'Figma wireframes & high-fidelity mockups', 'Engagement & credibility lift'],
      path: '/services/ui-ux-design',
      accent: 'blue' as const,
    },
    {
      title: 'B2B Content & SEO Strategy',
      description:
        'Engineered B2B messaging and SEO content strategies designed to capture high-intent search traffic, establish industry thought leadership, and convert North American decision-makers.',
      icon: <FileText className="h-6 w-6" />,
      highlights: ['High-intent organic search acquisition', 'Persuasive executive B2B copywriting', 'Zero generic AI filler / Localized English'],
      path: '/services/seo-marketing',
      accent: 'light' as const,
    },
    {
      title: 'Digital Architecture & Tech Stack Audits',
      description:
        'Comprehensive forensic audits of your digital footprint, security posture, and software stack. We eliminate bloated subscription costs and engineer actionable roadmaps for scalable infrastructure.',
      icon: <ClipboardCheck className="h-6 w-6" />,
      highlights: ['Digital footprint & security risk audit', 'Software subscription bloat elimination', 'Actionable tech stack roadmap'],
      path: '/contact',
      accent: 'blue' as const,
    },
  ];

  return (
    <div className="min-h-screen bg-white">
      <Helmet>
        <title>Consulting & Engineering Services Calgary | SecuNova Consulting</title>
        <meta name="description" content="Explore SecuNova Consulting services in Calgary: digital transformation consulting, executive leadership programs, custom web apps, UI/UX redesign, B2B SEO strategy, and digital project management (PMaaS)." />
        <meta name="keywords" content="SecuNova Consulting, SecuNova Consulting Calgary, digital transformation consulting Calgary, consulting firm Alberta, custom web development Calgary, UI UX design Calgary, B2B SEO strategy Calgary, digital project management Calgary, PMaaS Calgary, web maintenance Calgary, tech stack audit Calgary, executive leadership consulting Alberta, IT consulting Calgary" />
        <link rel="canonical" href="https://secunovainc.com/services" />

        {/* OpenGraph Tags */}
        <meta property="og:title" content="Consulting & Engineering Services Calgary | SecuNova Consulting" />
        <meta property="og:description" content="Two pillars. One partner. Strategic consulting for leaders and digital engineering that turns your online presence into your hardest-working salesperson." />
        <meta property="og:url" content="https://secunovainc.com/services" />
        <meta property="og:type" content="website" />
        <meta property="og:image" content="https://secunovainc.com/og-image.png" />
        <meta property="og:image:width" content="1200" />
        <meta property="og:image:height" content="630" />
        <meta property="og:site_name" content="SecuNova Consulting" />
        <meta property="og:locale" content="en_CA" />

        {/* Twitter Card */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Consulting & Engineering Services Calgary | SecuNova Consulting" />
        <meta name="twitter:description" content="Consulting, executive programs, and digital engineering built for North American growth. Calgary, AB." />
        <meta name="twitter:image" content="https://secunovainc.com/og-image.png" />

        {/* Additional SEO Tags */}
        <meta name="robots" content="index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1" />

        {/* BreadcrumbList Schema */}
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "BreadcrumbList",
            "itemListElement": [
              { "@type": "ListItem", "position": 1, "name": "Home", "item": "https://secunovainc.com" },
              { "@type": "ListItem", "position": 2, "name": "Services", "item": "https://secunovainc.com/services" }
            ]
          })}
        </script>


        {/* Structured Data for Services Page */}
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Service",
            "name": "SecuNova Inc. Services",
            "description": "Strategic consulting, executive programs, and digital engineering for North American businesses.",
            "provider": {
              "@type": "LocalBusiness",
              "name": "SecuNova Inc.",
              "address": {
                "@type": "PostalAddress",
                "streetAddress": "#270, 1122 3 St SE Ste 1906",
                "addressLocality": "Calgary",
                "addressRegion": "AB",
                "postalCode": "T2G 0E7",
                "addressCountry": "CA"
              },
              "telephone": "+1-403-401-1552",
              "email": "hello@secunovainc.com"
            },
            "areaServed": [
              { "@type": "Country", "name": "Canada" },
              { "@type": "Country", "name": "United States" }
            ],
            "hasOfferCatalog": {
              "@type": "OfferCatalog",
              "name": "SecuNova Services",
              "itemListElement": [
                {
                  "@type": "OfferCatalog",
                  "name": "Strategic Consulting & Executive Programs",
                  "itemListElement": [
                    { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "Digital Transformation Consulting" } },
                    { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "Executive Leadership & Innovation Consulting" } }
                  ]
                },
                {
                  "@type": "OfferCatalog",
                  "name": "Digital Engineering & Growth Solutions",
                  "itemListElement": [
                    { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "Custom Web App" } },
                    { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "Web Maintenance & Performance Optimization" } },
                    { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "Website & App UI/UX Redesigns" } },
                    { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "B2B Content & SEO Strategy" } },
                    { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "Digital Architecture & Tech Stack Audits" } }
                  ]
                }
              ]
            }
          })}
        </script>
      </Helmet>

      {/* ================= Hero ================= */}
      <section className="relative min-h-screen overflow-hidden flex items-center justify-center pt-24 sm:pt-32 md:pt-40 pb-12 sm:pb-16 md:pb-20">
        <div className="absolute inset-0">
          <img
            src="https://images.pexels.com/photos/3184338/pexels-photo-3184338.jpeg?auto=compress&cs=tinysrgb&w=1920"
            alt="SecuNova Consulting & Digital Engineering"
            className="w-full h-full object-cover"
            loading="eager"
            fetchPriority="high"
            decoding="async"
          />
          <div className="absolute inset-0 bg-gradient-to-br from-secunova-dark/95 via-secunova-dark/90 to-secunova-blue/85"></div>
        </div>
        <div className="container mx-auto px-4 relative z-10 w-full">
          <div className="max-w-6xl mx-auto w-full">
            <div className="text-center text-white">
              <div className="inline-flex items-center bg-white/10 backdrop-blur-sm border border-white/20 px-6 py-3 rounded-full text-sm font-medium mb-6">
                <Crown className="h-4 w-4 mr-2 text-white" />
                Two Pillars. One Partner.
              </div>

              <h1 className="text-4xl md:text-6xl font-bold mb-5 leading-tight">
                Strategy For Leaders.
                <span className="block bg-clip-text text-transparent bg-gradient-to-r from-secunova-light to-white">Engineering For Growth.</span>
              </h1>

              <p className="text-xl text-blue-100 max-w-3xl mx-auto leading-relaxed">
                SecuNova helps North American leaders navigate digital change before it costs them momentum.
                From executive strategy to enterprise-grade digital products, we keep your organization
                moving efficiently, securely, and ahead of the curve.
              </p>

              <div className="flex flex-col sm:flex-row justify-center gap-4 mt-8">
                <Link
                  to="/contact"
                  className="btn btn-gradient btn-lg"
                >
                  <span>Book a Free Strategy Call</span>
                  <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform duration-300" />
                </Link>
                <a
                  href="tel:403-401-1552"
                  className="inline-flex items-center gap-2 bg-white/10 hover:bg-white/20 text-white px-6 py-3 rounded-full text-sm font-semibold transition-all backdrop-blur-sm border border-white/20"
                >
                  <Phone className="h-4 w-4 text-white" />
                  <span>403-401-1552</span>
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ================= Pillar I: Strategic Consulting ================= */}
      <section id="strategic-consulting" className="secunova-section secunova-section--light">
        <div className="container mx-auto px-4">
          <div className="max-w-7xl mx-auto">
            <PillarHeader
              index="01"
              label="Pillar I"
              title="Strategic Consulting & Executive Programs"
              description="For executives and founders who refuse to fall behind. We turn technological change from a threat into your competitive edge, with the strategy, structure, and execution to act before the market forces your hand."
              icon={<Crown className="h-4 w-4" />}
            />

            <div className="secunova-grid secunova-grid--3col">
              {strategicServices.map((service, index) => (
                <ServiceCard
                  key={index}
                  title={service.title}
                  description={service.description}
                  icon={service.icon}
                  highlights={service.highlights}
                  path={service.path}
                  accent={service.accent}
                  badge={service.badge}
                />
              ))}
            </div>

            <div className="mt-12 bg-gradient-to-r from-secunova-blue/5 to-secunova-light/5 border border-secunova-blue/20 rounded-2xl p-8 flex flex-col md:flex-row items-center justify-between gap-6">
              <div>
                <h3 className="text-xl font-bold text-secunova-dark mb-2">Need a partner who understands your boardroom?</h3>
                <p className="text-secunova-dark/70">Talk directly with a senior architect about your strategic priorities.</p>
              </div>
              <Link
                to="/contact"
                className="btn btn-gradient btn-lg"
              >
                Start the Conversation <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* ================= Pillar II: Digital Engineering ================= */}
      <section id="digital-engineering" className="secunova-section secunova-section--gray">
        <div className="container mx-auto px-4">
          <div className="max-w-7xl mx-auto">
            <PillarHeader
              index="02"
              label="Pillar II"
              title="Digital Engineering & Growth Solutions"
              description="For small, emerging, and new businesses ready to compete like enterprises. Senior-led engineering, conversion-focused design, and growth systems that turn your digital presence into your hardest-working salesperson."
              icon={<Code className="h-4 w-4" />}
            />

            <div className="secunova-grid">
              {engineeringServices.map((service, index) => (
                <ServiceCard
                  key={index}
                  title={service.title}
                  description={service.description}
                  icon={service.icon}
                  highlights={service.highlights}
                  path={service.path}
                  accent={service.accent}
                />
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ================= Why SecuNova ================= */}
      <section className="py-16 md:py-24 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-16">
              <div className="inline-flex items-center bg-secunova-blue/10 text-secunova-blue px-6 py-3 rounded-full text-sm font-semibold mb-6">
                Why SecuNova
              </div>
              <h2 className="text-3xl md:text-5xl font-bold text-secunova-dark mb-6 leading-tight">
                Why Leaders <span className="bg-clip-text text-transparent bg-gradient-to-r from-secunova-blue to-secunova-light">Choose SecuNova</span>
              </h2>
              <p className="text-lg md:text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
                We keep your organization resilient, strategically sharp, operationally clean, and digitally unstoppable.
              </p>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                <div className="bg-white border border-gray-200 rounded-2xl p-6 hover:shadow-xl hover:-translate-y-1 transition-all duration-300 group">
                  <div className="w-12 h-12 bg-secunova-blue/10 rounded-xl flex items-center justify-center mb-4 group-hover:bg-secunova-blue/20 transition-colors duration-300">
                    <Crown className="h-6 w-6 text-secunova-blue" />
                  </div>
                  <h3 className="text-lg font-bold text-secunova-dark mb-2">Senior Leadership on Every Engagement</h3>
                  <p className="text-sm text-gray-600 leading-relaxed">
                    Led directly by a principal architect. You get decision-makers, not account managers reading scripts.
                  </p>
                </div>

                <div className="bg-white border border-gray-200 rounded-2xl p-6 hover:shadow-xl hover:-translate-y-1 transition-all duration-300 group">
                  <div className="w-12 h-12 bg-secunova-light/10 rounded-xl flex items-center justify-center mb-4 group-hover:bg-secunova-light/20 transition-colors duration-300">
                    <Network className="h-6 w-6 text-secunova-light" />
                  </div>
                  <h3 className="text-lg font-bold text-secunova-dark mb-2">Strategy and Engineering Under One Roof</h3>
                  <p className="text-sm text-gray-600 leading-relaxed">
                    Consulting that actually ships. Our creative directors and developers execute the strategies we recommend. No handoffs, no drift.
                  </p>
                </div>

                <div className="bg-white border border-gray-200 rounded-2xl p-6 hover:shadow-xl hover:-translate-y-1 transition-all duration-300 group">
                  <div className="w-12 h-12 bg-secunova-blue/10 rounded-xl flex items-center justify-center mb-4 group-hover:bg-secunova-blue/20 transition-colors duration-300">
                    <Target className="h-6 w-6 text-secunova-blue" />
                  </div>
                  <h3 className="text-lg font-bold text-secunova-dark mb-2">Built for North American Decision-Makers</h3>
                  <p className="text-sm text-gray-600 leading-relaxed">
                    Messaging, compliance, and delivery standards tuned for Canadian and U.S. corporate expectations.
                  </p>
                </div>

                <div className="bg-white border border-gray-200 rounded-2xl p-6 hover:shadow-xl hover:-translate-y-1 transition-all duration-300 group">
                  <div className="w-12 h-12 bg-secunova-light/10 rounded-xl flex items-center justify-center mb-4 group-hover:bg-secunova-light/20 transition-colors duration-300">
                    <Zap className="h-6 w-6 text-secunova-light" />
                  </div>
                  <h3 className="text-lg font-bold text-secunova-dark mb-2">Speed Without Sacrifice</h3>
                  <p className="text-sm text-gray-600 leading-relaxed">
                    Senior-led, AI-augmented workflows deliver enterprise precision at delivery speeds that feel unfair to the competition.
                  </p>
                </div>
              </div>

              <div className="bg-white border border-gray-200 rounded-3xl p-8 lg:sticky lg:top-24 shadow-sm">
                <div className="inline-flex items-center bg-secunova-blue/10 text-secunova-blue px-4 py-1.5 rounded-full text-xs font-semibold uppercase tracking-wide mb-4">
                  The SecuNova Standard
                </div>
                <div className="space-y-4">
                  <div className="flex items-center justify-between bg-gray-50 border border-gray-100 rounded-xl p-4">
                    <span className="text-secunova-dark font-medium">Senior-Led Delivery</span>
                    <span className="font-bold text-secunova-blue">100%</span>
                  </div>
                  <div className="flex items-center justify-between bg-gray-50 border border-gray-100 rounded-xl p-4">
                    <span className="text-secunova-dark font-medium">Conversion-First Design</span>
                    <span className="font-bold text-secunova-blue">Always</span>
                  </div>
                  <div className="flex items-center justify-between bg-gray-50 border border-gray-100 rounded-xl p-4">
                    <span className="text-secunova-dark font-medium">Zero Template Shortcuts</span>
                    <span className="font-bold text-secunova-blue">Guaranteed</span>
                  </div>
                  <div className="flex items-center justify-between bg-gray-50 border border-gray-100 rounded-xl p-4">
                    <span className="text-secunova-dark font-medium">North American Localization</span>
                    <span className="font-bold text-secunova-blue">Built-In</span>
                  </div>
                </div>

                <div className="mt-8">
                  <Link
                    to="/about"
                    className="btn btn-gradient btn-md w-full"
                  >
                    Meet Our Principal Architect
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ================= Direct contact strip ================= */}
      <section className="py-12 md:py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-2xl md:text-3xl font-bold text-secunova-dark mb-4">
              Prefer to talk it through?
            </h2>
            <p className="text-lg text-secunova-dark/70 mb-8">
              A senior consultant answers, not a call center. Tell us where you want your organization to be in twelve months.
            </p>
            <div className="flex flex-col sm:flex-row justify-center gap-4">
              <a
                href="tel:403-401-1552"
                className="btn btn-gradient btn-lg"
              >
                <Phone className="mr-2 h-5 w-5" />
                Call 403-401-1552
              </a>
              <a
                href="mailto:hello@secunovainc.com"
                className="btn btn-outline btn-lg"
              >
                <Mail className="mr-2 h-5 w-5" />
                hello@secunovainc.com
              </a>
            </div>
          </div>
        </div>
      </section>

      <CtaSection />
    </div>
  );
};

export default ServicesPage;
