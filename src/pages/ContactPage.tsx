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
import { Mail, Phone, MapPin, Clock, CheckCircle2, MessageSquare, Globe, ChevronRight } from 'lucide-react';
import CtaSection from '../components/CtaSection';
import { buildSeoTags } from '../utils/seo-meta';

const ContactPage = () => {
  const contactMethods = [
    {
      icon: <Phone className="h-6 w-6 text-secunova-blue" />,
      title: 'Direct Advisory Line',
      description: 'Telephone channel for executive inquiries and consultation scheduling.',
      contact: '403-401-1552',
      action: 'tel:403-401-1552'
    },
    {
      icon: <Mail className="h-6 w-6 text-secunova-light" />,
      title: 'Executive Electronic Briefing',
      description: 'Email our senior leadership directly regarding engagement scope.',
      contact: 'hello@secunovainc.com',
      action: 'mailto:hello@secunovainc.com'
    }
  ];

  const engagementSteps = [
    {
      title: 'Executive Inquiry',
      description:
        'Reach out by phone or email. Your message lands directly with a senior partner, never a call center.',
    },
    {
      title: 'Scope Verification Call',
      description:
        'A focused briefing to confirm objectives, stakeholders, and whether an advisory, audit, or PMaaS mandate fits.',
    },
    {
      title: 'Proposal & Mutual NDA',
      description:
        'A board-ready engagement proposal with fixed deliverables, benchmarks, and commercial terms under mutual NDA.',
    },
  ];

  return (
    <div className="min-h-screen bg-white">
      <Helmet>
        <title>Executive Contact &amp; Consultations | SecuNova Inc. Calgary</title>
        <meta name="description" content="Contact SecuNova Inc., a Calgary-based IT advisory firm. Call 403-401-1552 or email hello@secunovainc.com for executive strategic advisory, PMaaS, and enterprise audits." />
        <meta name="keywords" content="SecuNova Inc, contact SecuNova, IT advisory Calgary, strategic consulting Canada, PMaaS consultation" />
        <link rel="canonical" href="https://secunovainc.com/contact" />
        {buildSeoTags({
          title: 'Executive Contact & Consultations | SecuNova Inc.',
          description:
            'Direct engagement channels for enterprise leaders seeking strategic advisory, cybersecurity risk governance, and PMaaS.',
          url: '/contact',
          imageAlt: 'SecuNova Inc. - Executive Contact & Consultations',
        })}

        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "ContactPage",
            "name": "Contact SecuNova Inc.",
            "description": "Direct contact channels for executive IT advisory, PMaaS, and forensic audits.",
            "url": "https://secunovainc.com/contact",
            "mainEntity": {
              "@type": "Organization",
              "name": "SecuNova Inc.",
              "telephone": "+1-403-401-1552",
              "email": "hello@secunovainc.com",
              "taxID": "714343225",
              "identifier": "2026915245",
              "address": {
                "@type": "PostalAddress",
                "streetAddress": "#270, 1122 3 St SE Ste 1906",
                "addressLocality": "Calgary",
                "addressRegion": "AB",
                "postalCode": "T2G 0E7",
                "addressCountry": "CA"
              }
            }
          })}
        </script>
      </Helmet>

      {/* Hero Section */}
      <section className="relative min-h-[85vh] overflow-hidden flex items-center justify-center pt-36 sm:pt-44 pb-24 bg-secunova-dark text-white">
        <div className="absolute inset-0">
          <div className="absolute inset-0 bg-gradient-to-br from-secunova-dark via-gray-900 to-secunova-blue opacity-95"></div>
        </div>

        <div className="container mx-auto px-4 relative z-10 w-full">
          <div className="max-w-4xl mx-auto text-center">
            <div className="inline-flex items-center bg-white/10 backdrop-blur-md border border-white/20 px-5 py-2 rounded-full text-xs font-semibold uppercase tracking-widest text-secunova-light mb-6">
              <MessageSquare className="h-4 w-4 mr-2" />
              Executive Consultation Briefings
            </div>

            <h1 className="hero-heading mb-6 text-white">
              <span className="block">Connect With Senior</span>
              <span className="block text-secunova-light mt-1">Technology Leadership.</span>
            </h1>

            <p className="text-lg md:text-xl text-blue-100/90 max-w-2xl mx-auto leading-relaxed font-normal mb-10">
              Direct access to senior SecuNova partners for C-suite leaders and enterprise directors in Calgary and across North America.
            </p>

            <div className="flex flex-col sm:flex-row justify-center gap-4">
              <a href="tel:403-401-1552" className="btn btn-gradient btn-lg text-white">
                <Phone className="mr-2 h-5 w-5 text-white" />
                Call 403-401-1552
              </a>
              <a href="mailto:hello@secunovainc.com" className="btn btn-outline-light btn-lg text-white">
                <Mail className="mr-2 h-5 w-5 text-white" />
                Email Executive Brief
              </a>
            </div>
            <p className="text-xs text-blue-200 mt-6 flex items-center justify-center gap-1.5">
              <Clock className="h-4 w-4 text-secunova-light" />
              Same business day response protocol
            </p>
          </div>
        </div>
      </section>

      {/* Contact Channels */}
      <section className="secunova-section secunova-section--light">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-14">
              <span className="inline-flex items-center bg-secunova-blue/10 border border-secunova-blue/20 px-4 py-1.5 rounded-full text-xs font-semibold uppercase tracking-widest text-secunova-blue mb-4">
                <MessageSquare className="h-3.5 w-3.5 mr-2" />
                Executive Access
              </span>
              <h2 className="text-2xl md:text-4xl font-bold text-secunova-dark mb-3 tracking-tight">Direct Engagement Channels</h2>
              <p className="text-slate-600 text-sm md:text-base">Reach out directly to discuss strategic advisory, cybersecurity audits, or PMaaS terms. No intake forms, no queues.</p>
            </div>
            
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-stretch">
              <div className="space-y-4">
                {contactMethods.map((m, i) => (
                  <a key={i} href={m.action} className="flex items-center justify-between gap-4 bg-white rounded-2xl p-6 border border-gray-200 shadow-sm hover:shadow-lg hover:border-secunova-blue/30 hover:-translate-y-0.5 transition-all duration-300 group">
                    <div className="flex items-center gap-4 min-w-0">
                      <div className="flex-shrink-0 w-14 h-14 bg-gradient-to-br from-secunova-blue/10 to-secunova-light/10 rounded-xl flex items-center justify-center group-hover:scale-105 transition-transform">
                        {m.icon}
                      </div>
                      <div className="min-w-0">
                        <div className="font-semibold text-secunova-dark text-lg">{m.title}</div>
                        <div className="text-sm text-slate-600">{m.description}</div>
                        <div className="text-secunova-blue font-bold mt-1">{m.contact}</div>
                      </div>
                    </div>
                    <div className="flex-shrink-0 w-10 h-10 rounded-full border border-gray-200 flex items-center justify-center text-secunova-blue group-hover:bg-secunova-blue group-hover:text-white group-hover:border-secunova-blue transition-all duration-300">
                      <ChevronRight className="h-5 w-5" />
                    </div>
                  </a>
                ))}

                <div className="bg-white rounded-2xl p-6 border border-gray-200 shadow-sm">
                  <div className="flex items-start gap-4 mb-4">
                    <div className="flex-shrink-0 w-12 h-12 bg-gradient-to-br from-secunova-blue/10 to-secunova-light/10 rounded-xl flex items-center justify-center">
                      <MapPin className="h-6 w-6 text-secunova-blue" />
                    </div>
                    <div className="flex-1">
                      <div className="font-semibold text-secunova-dark text-lg mb-1">Mailing Address</div>
                      <div className="text-sm text-slate-700 font-mono">#270, 1122 3 St SE Ste 1906, Calgary, AB T2G 0E7, Canada</div>
                      <div className="mt-3 space-y-1 border-t border-gray-100 pt-3 text-xs">
                        <div className="flex justify-between gap-4">
                          <span className="text-slate-500 font-medium">Business Number</span>
                          <span className="font-mono text-secunova-dark font-semibold">714343225</span>
                        </div>
                        <div className="flex justify-between gap-4">
                          <span className="text-slate-500 font-medium">Corporation Number</span>
                          <span className="font-mono text-secunova-dark font-semibold">2026915245</span>
                        </div>
                      </div>
                    </div>
                  </div>
                  <p className="text-xs text-slate-600 mt-2 leading-relaxed">
                    We operate on a fully remote basis, conducting client consultations via Zoom or Google Meet. When an in-person meeting is necessary, we are pleased to travel to your location or arrange a private meeting room at the Calgary Public Library.
                  </p>
                </div>

                <div className="bg-blue-50/80 rounded-2xl p-6 border border-blue-200/80 shadow-sm space-y-5">
                  <div className="flex items-start gap-4">
                    <div className="flex-shrink-0 w-10 h-10 bg-secunova-blue/15 rounded-xl flex items-center justify-center text-secunova-blue">
                      <Clock className="h-5 w-5" />
                    </div>
                    <div>
                      <div className="font-bold text-secunova-dark text-sm mb-1">Office Hours &amp; Response</div>
                      <p className="text-xs text-slate-600 leading-relaxed">
                        Monday to Friday, 9:00 AM to 5:00 PM MT. Inquiries received outside these hours are reviewed the next business day.
                      </p>
                    </div>
                  </div>
                  <div className="border-t border-blue-200/60 pt-5 flex items-start gap-4">
                    <div className="flex-shrink-0 w-10 h-10 bg-secunova-blue/15 rounded-xl flex items-center justify-center text-secunova-blue">
                      <Globe className="h-5 w-5" />
                    </div>
                    <div>
                      <div className="font-bold text-secunova-dark text-sm mb-1">North American Practice Coverage</div>
                      <p className="text-xs text-slate-600 leading-relaxed">
                        Headquartered in Calgary, Alberta, serving enterprise accounts across Western Canada, Eastern Canada, and the United States.
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              {/* What Happens Next Card */}
              <div className="bg-gradient-to-br from-secunova-dark to-gray-900 text-white rounded-2xl p-8 shadow-xl border border-gray-800 flex flex-col">
                <h3 className="text-2xl font-bold mb-2">What Happens Next</h3>
                <p className="text-blue-100/90 text-sm leading-relaxed mb-8">
                  From first contact to proposal, a senior partner owns your inquiry end to end.
                </p>
                <div className="space-y-6">
                  {engagementSteps.map((step, i) => (
                    <div key={i} className="flex items-start gap-4">
                      <div className="flex-shrink-0 w-10 h-10 rounded-full bg-gradient-to-br from-secunova-light to-secunova-blue flex items-center justify-center text-secunova-dark font-bold text-sm">
                        {i + 1}
                      </div>
                      <div>
                        <div className="font-semibold text-white">{step.title}</div>
                        <div className="text-xs text-blue-100/80 leading-relaxed mt-1">{step.description}</div>
                      </div>
                    </div>
                  ))}
                </div>
                <div className="border-t border-white/10 pt-6 space-y-4 text-xs text-blue-100/90 mt-8">
                  <div className="flex items-center gap-2.5 font-semibold text-white">
                    <CheckCircle2 className="h-4 w-4 text-secunova-light flex-shrink-0" /> Mutual NDA &amp; Confidentiality Guaranteed
                  </div>
                  <div className="flex items-center gap-2.5 font-semibold text-white">
                    <CheckCircle2 className="h-4 w-4 text-secunova-light flex-shrink-0" /> Direct Senior Partner Lead
                  </div>
                  <div className="flex items-center gap-2.5 font-semibold text-white">
                    <CheckCircle2 className="h-4 w-4 text-secunova-light flex-shrink-0" /> Board-Ready Documentation Benchmarks
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <CtaSection />
    </div>
  );
};

export default ContactPage;