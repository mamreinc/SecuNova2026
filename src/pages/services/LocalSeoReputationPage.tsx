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

import React from 'react';
import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';
import {
  MapPin, CheckCircle2, ArrowRight, Star, ShieldCheck,
  Search, MessageSquare, TrendingUp, Sparkles, Building, Globe
} from 'lucide-react';
import CtaSection from '../../components/CtaSection';
import SEOSchema from '../../components/SEOSchema';
import { buildSeoTags } from '../../utils/seo-meta';

const LocalSeoReputationPage: React.FC = () => {
  const reputationPillars = [
    {
      icon: <MapPin className="h-6 w-6 text-secunova-blue" />,
      title: 'Google Business Profile Optimization & Audit',
      description:
        'Complete restructuring of your Google Business Profile (GBP) and local map citations. We optimize primary and secondary business categories, service catalogs, geospatial signals, and visual assets to command local map-pack dominance.',
      deliverables: [
        'Complete GBP forensic audit & category recalibration',
        'High-converting service descriptions & attribute optimization',
        'High-resolution geotagged image & media strategy',
      ],
    },
    {
      icon: <Star className="h-6 w-6 text-secunova-light" />,
      title: 'Ethical Review Generation & Customer Advocacy Systems',
      description:
        'A systematic, automated strategy for capturing genuine 5-star customer reviews at moments of peak satisfaction. We create frictionless review funnels that consistently generate authentic social proof without violating Google guidelines.',
      deliverables: [
        'Review acquisition workflows & timing sequences',
        'Direct frictionless QR code & SMS/email review templates',
        'Customer satisfaction milestone triggering protocols',
      ],
    },
    {
      icon: <ShieldCheck className="h-6 w-6 text-secunova-blue" />,
      title: 'Negative Review Mitigation & Reputation Defense',
      description:
        'A structured crisis protocol to handle unfair or negative reviews with executive diplomacy. We craft de-escalation responses that turn critical feedback into public demonstrations of accountability and professionalism.',
      deliverables: [
        'Executive response scripts for complex complaints',
        'Google terms-of-service dispute & review removal protocols',
        'Sentiment monitoring & brand alert matrix',
      ],
    },
    {
      icon: <TrendingUp className="h-6 w-6 text-secunova-light" />,
      title: 'Local Geo-Targeted Search Authority',
      description:
        'Optimizing your digital footprint for high-intent local queries in your target geographic markets (e.g., Calgary, Alberta, and Western Canada). Ensure regional buyers discover your company before any competitor.',
      deliverables: [
        'Local keyword mapping & geographic service area setup',
        'Local citation audit & NAP consistency cleanup',
        'Monthly local ranking & map visibility tracking',
      ],
    },
  ];

  return (
    <div className="min-h-screen bg-white">
      <Helmet>
        <title>Local SEO &amp; Reputation Management | SecuNova Inc. Calgary</title>
        <meta
          name="description"
          content="Dominate local Google Search and Google Maps. SecuNova optimizes Google Business Profiles, engineers 5-star review acquisition, and protects corporate reputation."
        />
        <meta
          name="keywords"
          content="local SEO Calgary, Google Business Profile optimization Alberta, reputation management Canada, B2B review strategy, Google maps ranking"
        />
        {buildSeoTags({
          title: 'Local SEO & Reputation Management | SecuNova Inc.',
          description:
            'Secure local search dominance and protect your corporate reputation. Comprehensive Google Business Profile optimization and review management frameworks.',
          url: '/services/local-seo-reputation-management',
          imageAlt: 'SecuNova Inc. - Local SEO & Reputation Management',
        })}
      </Helmet>

      <SEOSchema
        type="service"
        data={{
          title: 'Local SEO & Reputation Management | SecuNova Inc.',
          description:
            'Google Business Profile optimization, review acquisition systems, and corporate reputation defense.',
          url: 'https://secunovainc.ca/services/local-seo-reputation-management',
        }}
      />

      {/* Hero Section */}
      <section className="relative min-h-[750px] overflow-hidden flex items-center justify-center pt-32 pb-20 bg-secunova-dark text-white">
        <div className="absolute inset-0">
          <img
            src="/images/heroes/local-seo-hero.jpg"
            alt="SecuNova Canadian Metropolitan Regional Authority and Local SEO"
            className="w-full h-full object-cover opacity-55"
            loading="eager"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-secunova-dark/80 via-secunova-dark/60 to-secunova-dark/90"></div>
        </div>

        <div className="container mx-auto px-4 relative z-10 w-full text-center">
          <div className="max-w-3xl mx-auto">
            <div className="inline-flex items-center bg-white/10 backdrop-blur-md px-4 py-1.5 rounded-full text-xs font-bold uppercase tracking-widest text-secunova-light mb-5">
              <MapPin className="h-3.5 w-3.5 mr-1.5" />
              Regional Authority
            </div>

            <h1 className="text-3xl sm:text-5xl font-extrabold text-white leading-tight tracking-tight mb-4">
              Local SEO &amp; Reputation. <span className="text-secunova-light block sm:inline">Defend Market Trust.</span>
            </h1>

            <p className="text-sm sm:text-base text-blue-100/90 max-w-xl mx-auto leading-relaxed mb-8">
              Command the top of Google Maps and local search results. We optimize your business profile, build systematic customer review pipelines, and shield your reputation with executive diplomacy.
            </p>

            <div className="flex flex-col sm:flex-row justify-center gap-3">
              <Link to="/contact" className="btn btn-gradient text-xs sm:text-sm font-bold text-white px-6 py-3">
                Optimize Your Local Authority
              </Link>
              <a href="#reputation-pillars" className="btn btn-outline-light text-xs sm:text-sm font-bold text-white px-6 py-3">
                View Local Services
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* The Strategic Challenge */}
      <section className="secunova-section secunova-section--light">
        <div className="container mx-auto px-4">
          <div className="max-w-5xl mx-auto">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
              <div className="lg:col-span-7">
                <span className="text-xs font-bold uppercase tracking-widest text-secunova-blue block mb-2">High-Stakes Local Search</span>
                <h2 className="text-2xl sm:text-3xl font-bold text-secunova-dark mb-4 leading-tight">
                  Why Local Google Dominance Matters for B2B &amp; Enterprises
                </h2>
                <p className="text-slate-600 text-xs sm:text-sm leading-relaxed mb-4">
                  Even in high-value B2B industries, prospective clients and partners verify your credibility on Google Maps before signing contracts. An incomplete profile or neglected reviews instantly creates doubt.
                </p>
                <p className="text-slate-600 text-xs sm:text-sm leading-relaxed mb-6">
                  SecuNova transforms your Google Business Profile into a powerful inbound asset. We ensure your firm outranks local competitors, projects immediate institutional authority, and consistently captures positive client testimonials.
                </p>
                <div className="grid grid-cols-2 gap-3 text-xs font-bold text-secunova-dark">
                  <div className="flex items-center"><CheckCircle2 className="h-4 w-4 text-secunova-blue mr-2 flex-shrink-0" /> Google Map-Pack Dominance</div>
                  <div className="flex items-center"><CheckCircle2 className="h-4 w-4 text-secunova-blue mr-2 flex-shrink-0" /> Automated Review Funnels</div>
                  <div className="flex items-center"><CheckCircle2 className="h-4 w-4 text-secunova-blue mr-2 flex-shrink-0" /> Executive Diplomatic Responses</div>
                  <div className="flex items-center"><CheckCircle2 className="h-4 w-4 text-secunova-blue mr-2 flex-shrink-0" /> Regional Geographic Focus</div>
                </div>
              </div>

              <div className="lg:col-span-5">
                <div className="bg-slate-50 border border-gray-200 rounded-2xl p-6 shadow-sm">
                  <h3 className="text-sm font-bold text-secunova-dark uppercase tracking-wider mb-4 flex items-center gap-2">
                    <Star className="h-4 w-4 text-secunova-blue" />
                    The Impact of Reputation Governance
                  </h3>
                  <div className="space-y-3 text-xs text-slate-700">
                    <div className="p-3 bg-white rounded-lg border border-gray-100 shadow-2xs">
                      <strong className="block text-secunova-dark font-bold mb-0.5">Top 3 Map Pack Visibility</strong>
                      Directly capture high-intent inquiries from decision-makers searching locally.
                    </div>
                    <div className="p-3 bg-white rounded-lg border border-gray-100 shadow-2xs">
                      <strong className="block text-secunova-dark font-bold mb-0.5">Social Proof Protection</strong>
                      A steady stream of verified 5-star reviews buffers against occasional negative feedback.
                    </div>
                    <div className="p-3 bg-white rounded-lg border border-gray-100 shadow-2xs">
                      <strong className="block text-secunova-dark font-bold mb-0.5">Accurate Commercial NAP Data</strong>
                      Consistent name, address, and phone citations across all regional directories.
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 4 Pillars of Local SEO */}
      <section id="reputation-pillars" className="secunova-section bg-gray-50 border-t border-gray-200">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="text-center max-w-2xl mx-auto mb-12">
              <span className="text-[10px] font-bold uppercase tracking-widest text-secunova-blue block mb-1">Methodology</span>
              <h2 className="text-2xl sm:text-3xl font-bold text-secunova-dark tracking-tight">
                Local SEO &amp; Reputation Governance Services
              </h2>
              <p className="text-xs sm:text-sm text-slate-600 mt-2">
                Four strategic pillars to establish dominance and protect your corporate standing.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {reputationPillars.map((pillar, index) => (
                <div key={index} className="bg-white rounded-xl border border-gray-200 p-6 shadow-sm flex flex-col justify-between">
                  <div>
                    <div className="w-12 h-12 rounded-xl bg-slate-50 border border-gray-100 flex items-center justify-center mb-4">
                      {pillar.icon}
                    </div>
                    <h3 className="text-base font-bold text-secunova-dark mb-2">{pillar.title}</h3>
                    <p className="text-xs text-slate-600 leading-relaxed mb-4">{pillar.description}</p>

                    <div className="border-t border-gray-100 pt-3">
                      <span className="text-[11px] font-bold uppercase tracking-wider text-slate-500 block mb-2">Key Deliverables:</span>
                      <ul className="space-y-1.5 text-xs text-slate-700">
                        {pillar.deliverables.map((item, dIdx) => (
                          <li key={dIdx} className="flex items-center gap-2">
                            <CheckCircle2 className="h-3.5 w-3.5 text-secunova-blue flex-shrink-0" />
                            <span>{item}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Tangible Assets */}
      <section className="secunova-section secunova-section--light border-t border-gray-200">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <div className="inline-flex items-center bg-secunova-blue/10 text-secunova-blue px-3.5 py-1.5 rounded-full text-xs font-bold uppercase tracking-widest mb-3">
              <Sparkles className="h-3.5 w-3.5 mr-1.5" />
              Tangible Assets
            </div>
            <h2 className="text-2xl sm:text-3xl font-bold text-secunova-dark tracking-tight mb-4">
              Your Local Authority Management Kit
            </h2>
            <p className="text-xs sm:text-sm text-slate-600 max-w-xl mx-auto mb-8">
              A comprehensive system to ensure your local digital storefront remains authoritative and active.
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 text-left">
              <div className="p-5 rounded-xl border border-gray-200 bg-white shadow-2xs">
                <MapPin className="h-6 w-6 text-secunova-blue mb-2" />
                <h4 className="text-sm font-bold text-secunova-dark mb-1">Optimized Google Profile</h4>
                <p className="text-xs text-slate-600 leading-relaxed">
                  Fully calibrated categories, optimized services, and geo-targeted service territory settings.
                </p>
              </div>
              <div className="p-5 rounded-xl border border-gray-200 bg-white shadow-2xs">
                <Star className="h-6 w-6 text-secunova-light mb-2" />
                <h4 className="text-sm font-bold text-secunova-dark mb-1">Review Capture System</h4>
                <p className="text-xs text-slate-600 leading-relaxed">
                  Friction-free QR cards and automated client email/SMS review request templates.
                </p>
              </div>
              <div className="p-5 rounded-xl border border-gray-200 bg-white shadow-2xs">
                <ShieldCheck className="h-6 w-6 text-secunova-blue mb-2" />
                <h4 className="text-sm font-bold text-secunova-dark mb-1">Reputation Protocol Manual</h4>
                <p className="text-xs text-slate-600 leading-relaxed">
                  Step-by-step response playbooks for negative feedback and terms violation dispute procedures.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <CtaSection />
    </div>
  );
};

export default LocalSeoReputationPage;
