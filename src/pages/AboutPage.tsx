/**
 * ============================================================================
 * MAXPHAOS MARKETING: PROPRIETARY CUSTOM ENGINEERING & DESIGN ARCHITECTURE
 * ----------------------------------------------------------------------------
 * All design, software architecture, UI/UX components, and source code are
 * 100% custom-engineered and designed exclusively by MaxPhaos Marketing.
 *
 * CORE ARCHITECTURAL ETHOS:
 * - 100% Bespoke Code: Built strictly to client specifications from scratch.
 * - Zero Pre-Made Templates: No generic agency starters or off-the-shelf themes.
 * - Senior-Led AI-Augmented Workflows (Vibe Coding): 14-day execution cycles
 *   engineered for sub-second performance (99+ Lighthouse Core Web Vitals).
 * - Full IP & Repository Handoff: 100% client asset and codebase ownership.
 *
 * Copyright (c) MaxPhaos Marketing. All rights reserved.
 * ============================================================================
 */

import { Helmet } from 'react-helmet-async';
import {
  ShieldCheck, Target, Users, CheckCircle2, Building, Award, LineChart
} from 'lucide-react';
import CtaSection from '../components/CtaSection';

const AboutPage = () => {
  const PRINCIPLES = [
    {
      title: 'Uncompromising Independence',
      desc: 'We operate free from vendor reseller commissions or hardware markup incentives. Strategic recommendations serve client balance sheets exclusively.',
      icon: <ShieldCheck className="h-6 w-6 text-secunova-blue" />
    },
    {
      title: 'Senior-Led Engineering',
      desc: 'Engagements are directed exclusively by senior advisors with deep expertise in governance, cloud architecture, security compliance, and PMaaS.',
      icon: <Users className="h-6 w-6 text-secunova-light" />
    },
    {
      title: 'Empirical Risk Governance',
      desc: 'From technical readiness assessments to financial audits, our advice relies on verifiable data, quantitative metrics, and board-ready reporting.',
      icon: <Target className="h-6 w-6 text-secunova-blue" />
    }
  ];

  return (
    <div className="min-h-screen bg-white">
      <Helmet>
        <title>About SecuNova Inc. | Corporate Identity, Governance &amp; IT Advisory</title>
        <meta
          name="description"
          content="SecuNova Inc. is a Calgary-based boutique IT advisory firm delivering executive strategic advisory, PMaaS, cybersecurity risk governance, and digital systems architecture across North America."
        />
        <meta
          name="keywords"
          content="SecuNova Inc, IT consulting Calgary, strategic advisory Canada, PMaaS Calgary, enterprise IT governance, cybersecurity compliance Alberta"
        />
        <link rel="canonical" href="https://secunovainc.com/about" />

        <meta property="og:title" content="About SecuNova Inc. | Corporate Identity &amp; Enterprise Governance" />
        <meta property="og:description" content="Institutional strategic advisory, PMaaS, cybersecurity risk governance, and digital systems execution for Canadian and North American enterprises." />
        <meta property="og:url" content="https://secunovainc.com/about" />
        <meta property="og:type" content="website" />

        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "BreadcrumbList",
            "itemListElement": [
              { "@type": "ListItem", "position": 1, "name": "Home", "item": "https://secunovainc.com" },
              { "@type": "ListItem", "position": 2, "name": "About", "item": "https://secunovainc.com/about" }
            ]
          })}
        </script>
      </Helmet>

      {/* Hero Section */}
      <section className="relative min-h-[85vh] overflow-hidden flex items-center justify-center pt-36 sm:pt-44 pb-24 bg-secunova-dark text-white">
        <div className="absolute inset-0">
          <img
            src="https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&w=1200&q=85"
            alt="SecuNova Headquarters &amp; Operations"
            className="w-full h-full object-cover opacity-20"
          />
          <div className="absolute inset-0 bg-gradient-to-br from-secunova-dark/95 via-secunova-dark/90 to-secunova-blue/80"></div>
        </div>

        <div className="container mx-auto px-4 relative z-10 w-full">
          <div className="max-w-4xl mx-auto text-center">
            <div className="inline-flex items-center bg-white/10 backdrop-blur-sm border border-white/20 px-5 py-2 rounded-full text-xs font-semibold uppercase tracking-widest text-secunova-light mb-6">
              <Building className="h-4 w-4 mr-2" />
              Institutional Identity &amp; Advisory Ethos
            </div>

            <h1 className="text-4xl sm:text-6xl font-bold tracking-tight mb-6 leading-tight">
              Enterprise Technology Governance <br />
              <span className="text-secunova-light">Engineered for Results.</span>
            </h1>

            <p className="text-lg md:text-xl text-blue-100/90 max-w-3xl mx-auto leading-relaxed font-normal">
              SecuNova Inc. is an institutional technology advisory firm headquartered in Calgary, Alberta. We partner with executive leaders across Canada and the US to de-risk digital transformation, enforce cybersecurity governance, and deliver on-demand project leadership.
            </p>
          </div>
        </div>
      </section>

      {/* Core Ethos & Mission */}
      <section className="secunova-section secunova-section--light">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
              <div className="lg:col-span-7">
                <span className="text-xs font-bold uppercase tracking-widest text-secunova-blue block mb-2">Corporate Mandate</span>
                <h2 className="text-3xl md:text-4xl font-bold text-secunova-dark mb-6 leading-tight tracking-tight">
                  Protecting Enterprise Capital Through Disciplined Architecture
                </h2>
                <p className="text-slate-700 text-base leading-relaxed mb-6 max-w-prose">
                  In an environment defined by rapid platform shifts and escalating cyber threats, enterprise organizations require objective technical guidance. SecuNova Inc. operates as a high-touch boutique partner, offering clear strategic foresight without the overhead of massive legacy consulting firms.
                </p>
                <p className="text-slate-700 text-base leading-relaxed mb-8 max-w-prose">
                  We combine executive technology roadmaps with Project Management as a Service (PMaaS), ensuring every architecture decision is executed with precision, verified quality control, and sub-second performance.
                </p>
                <div className="grid grid-cols-2 gap-4 text-xs font-bold text-secunova-dark">
                  <div className="flex items-center"><CheckCircle2 className="h-4 w-4 text-secunova-blue mr-2 flex-shrink-0" /> Canadian Headquartered</div>
                  <div className="flex items-center"><CheckCircle2 className="h-4 w-4 text-secunova-blue mr-2 flex-shrink-0" /> Senior Partner Led</div>
                  <div className="flex items-center"><CheckCircle2 className="h-4 w-4 text-secunova-blue mr-2 flex-shrink-0" /> Independent Governance</div>
                  <div className="flex items-center"><CheckCircle2 className="h-4 w-4 text-secunova-blue mr-2 flex-shrink-0" /> On-Demand PMaaS Execution</div>
                </div>
              </div>

              <div className="lg:col-span-5 bg-gray-50 border border-gray-200/90 rounded-2xl p-8 shadow-lg">
                <h3 className="text-xl font-bold text-secunova-dark mb-6">Core Practice Pillars</h3>
                <div className="space-y-4 text-xs text-slate-700">
                  <div className="pb-4 border-b border-gray-200">
                    <strong className="text-secunova-dark text-sm block mb-1">Executive Strategic Advisory</strong>
                    Board-ready technology roadmaps, digital maturity audits, vendor due diligence, and capital allocation frameworks.
                  </div>
                  <div className="pb-4 border-b border-gray-200">
                    <strong className="text-secunova-dark text-sm block mb-1">Digital Transformation &amp; Cloud</strong>
                    Business process reengineering, AWS and GCP cloud migrations, and high-performance system integration.
                  </div>
                  <div className="pb-4 border-b border-gray-200">
                    <strong className="text-secunova-dark text-sm block mb-1">Cybersecurity &amp; Risk Governance</strong>
                    Forensic security audits, threat vector assessments, SOC 2 / ISO 27001 readiness, and continuity strategy.
                  </div>
                  <div>
                    <strong className="text-secunova-dark text-sm block mb-1">PMaaS &amp; Delivery Management</strong>
                    On-demand project leadership, milestone tracking, resource optimization, and transparent status reporting.
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Guiding Principles */}
      <section className="secunova-section secunova-section--gray">
        <div className="container mx-auto px-4">
          <div className="max-w-7xl mx-auto">
            <div className="text-center max-w-3xl mx-auto mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-secunova-dark mb-4 tracking-tight">
                Our Institutional Guiding Principles
              </h2>
              <p className="text-slate-600 text-base">
                The core standards governing every enterprise audit, transformation roadmap, and PMaaS engagement we manage.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {PRINCIPLES.map((principle, index) => (
                <div key={index} className="bg-white p-8 rounded-2xl border border-gray-200 shadow-sm hover:shadow-md transition-shadow">
                  <div className="p-3 bg-secunova-blue/5 rounded-xl inline-block mb-6">{principle.icon}</div>
                  <h3 className="text-xl font-bold text-secunova-dark mb-3">{principle.title}</h3>
                  <p className="text-sm text-slate-600 leading-relaxed">{principle.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <CtaSection />
    </div>
  );
};

export default AboutPage;
