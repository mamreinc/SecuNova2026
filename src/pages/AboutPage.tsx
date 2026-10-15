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
import { Link } from 'react-router-dom';
import { useState } from 'react';
import { buildSeoTags } from '../utils/seo-meta';
import SEOSchema from '../components/SEOSchema';
import {
  ShieldCheck, Target, Users, CheckCircle2, Building, Scale,
  Crown, ClipboardCheck, ArrowRight, Sparkles, Search, Globe,
  PenTool, Brain, MapPin
} from 'lucide-react';
import CtaSection from '../components/CtaSection';
import Card3D from '../components/Card3D';
import { MotionFadeIn } from '../components/MotionView';

const AboutPage = () => {
  const [teamImageFailed, setTeamImageFailed] = useState(false);

  return (
    <div className="min-h-screen bg-white">
      <Helmet>
        <title>About SecuNova Inc. | Digital Presence Consulting &amp; Strategic Advisory</title>
        <meta
          name="description"
          content="SecuNova Inc. is an executive Digital Presence Consulting and PMaaS Governance firm in Calgary, Alberta. We establish, optimize, and govern online market authority for B2B enterprises."
        />
        <meta
          name="keywords"
          content="about SecuNova Inc, digital presence consultant Calgary, strategic advisory Canada, PMaaS governance, executive branding, conversion optimization Alberta"
        />
        {buildSeoTags({
          title: 'About SecuNova Inc. | Digital Presence Consulting & Strategic Advisory',
          description:
            'SecuNova Inc. helps enterprises, institutions, and leaders architect, optimize, and govern their complete online market authority.',
          url: '/about',
          imageAlt: 'SecuNova Inc. - Corporate Overview & Advisory Ethos',
        })}

        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "WebPage",
            "@id": "https://secunovainc.ca/about#webpage",
            "url": "https://secunovainc.ca/about",
            "name": "About SecuNova Inc. | Digital Presence Consulting & Strategic Advisory",
            "description": "Executive Digital Presence Consulting and PMaaS Governance firm in Calgary, Alberta.",
            "inLanguage": "en-CA",
            "isPartOf": { "@id": "https://secunovainc.ca/#website" },
            "about": { "@id": "https://secunovainc.ca/#organization" },
            "breadcrumb": {
              "@type": "BreadcrumbList",
              "itemListElement": [
                { "@type": "ListItem", "position": 1, "name": "Home", "item": "https://secunovainc.ca" },
                { "@type": "ListItem", "position": 2, "name": "About", "item": "https://secunovainc.ca/about" }
              ]
            }
          })}
        </script>
      </Helmet>

      <SEOSchema
        type="webpage"
        data={{
          title: 'About SecuNova Inc. | Digital Presence Consulting & Strategic Advisory',
          description:
            'SecuNova Inc. is an executive Digital Presence Consulting and Strategic Advisory firm based in Calgary, Alberta.',
          url: 'https://secunovainc.ca/about',
        }}
      />

      {/* Hero Section: Concise & Authoritative */}
      <section className="relative min-h-[750px] overflow-hidden flex items-center justify-center pt-32 pb-20 bg-secunova-dark text-white">
        <div className="absolute inset-0">
          <img
            src="/office.png"
            alt="SecuNova Canadian Corporate Executive Headquarters and Workspace"
            className="w-full h-full object-cover object-center opacity-60"
            loading="eager"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-secunova-dark/85 via-secunova-dark/65 to-secunova-dark/95"></div>
        </div>

        <div className="container mx-auto px-4 relative z-10 w-full text-center">
          <div className="max-w-3xl mx-auto">
            <div className="inline-flex items-center bg-white/10 backdrop-blur-md px-4 py-1.5 rounded-full text-xs font-bold uppercase tracking-widest text-secunova-light mb-5">
              <Building className="h-3.5 w-3.5 mr-1.5" />
              Executive Consulting Practice · First &amp; Foremost
            </div>

            <h1 className="text-3xl sm:text-5xl font-extrabold text-white leading-tight tracking-tight mb-4">
              A Consulting Practice First &amp; Foremost. <span className="text-secunova-light block sm:inline">Institutional Authority.</span>
            </h1>

            <p className="text-sm sm:text-base text-blue-100/90 max-w-xl mx-auto leading-relaxed">
              SecuNova Inc. is an executive consulting practice in Calgary, Alberta. We advise, audit, and govern digital presence to build institutional trust and generate commercial revenue.
            </p>
          </div>
        </div>
      </section>

      {/* What We Do: Concise Strategic Overview */}
      <section className="secunova-section secunova-section--light">
        <div className="container mx-auto px-4">
          <div className="max-w-5xl mx-auto">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">

              <div className="lg:col-span-7">
                <span className="text-xs font-bold uppercase tracking-widest text-secunova-blue block mb-2">Our Consulting Identity</span>
                <h2 className="text-2xl sm:text-3xl font-bold text-secunova-dark mb-4 leading-tight tracking-tight">
                  Independent Strategic Advisors, Not an Agency
                </h2>
                <p className="text-slate-600 text-xs sm:text-sm leading-relaxed mb-3">
                  SecuNova is a consulting practice first and foremost. We do not sell web design, programming hours, or marketing retainers. We operate beside executives to diagnose market presence, sharpen narrative strategy, and govern external vendors.
                </p>
                <p className="text-slate-600 text-xs sm:text-sm leading-relaxed mb-6">
                  We ensure every digital touchpoint reflects institutional authority, commands customer trust, and accelerates commercial contracts.
                </p>

                <div className="grid grid-cols-2 gap-3 text-xs font-bold text-secunova-dark">
                  <div className="flex items-center"><CheckCircle2 className="h-3.5 w-3.5 text-secunova-blue mr-2 flex-shrink-0" /> Canadian Headquartered</div>
                  <div className="flex items-center"><CheckCircle2 className="h-3.5 w-3.5 text-secunova-blue mr-2 flex-shrink-0" /> Senior Partner Led</div>
                  <div className="flex items-center"><CheckCircle2 className="h-3.5 w-3.5 text-secunova-blue mr-2 flex-shrink-0" /> Fiduciary Independence</div>
                  <div className="flex items-center"><CheckCircle2 className="h-3.5 w-3.5 text-secunova-blue mr-2 flex-shrink-0" /> North American Reach</div>
                </div>
              </div>

              <div className="lg:col-span-5">
                <div className="rounded-xl overflow-hidden shadow-lg border border-gray-200">
                  <div className="relative aspect-video lg:aspect-square w-full overflow-hidden bg-gray-100">
                    {!teamImageFailed && (
                      <img
                        src="/office.png"
                        alt="SecuNova Headquarters & Workspace"
                        className="w-full h-full object-cover"
                        loading="eager"
                        onError={() => setTeamImageFailed(true)}
                      />
                    )}
                    {teamImageFailed && (
                      <div className="w-full h-full flex flex-col items-center justify-center bg-gradient-to-br from-secunova-dark to-secunova-blue text-white/50">
                        <Users className="h-12 w-12 mb-2" />
                        <span className="text-xs uppercase tracking-widest font-semibold">Executive Workspace</span>
                      </div>
                    )}
                  </div>
                  <div className="bg-secunova-dark text-white p-4 text-center">
                    <div className="text-xs font-bold flex items-center justify-center gap-1.5">
                      <Sparkles className="h-3.5 w-3.5 text-secunova-light" />
                      SecuNova Executive Workspace
                    </div>
                    <div className="text-[11px] text-blue-200 mt-0.5">Calgary, AB · Remote-First Operations</div>
                  </div>
                </div>
              </div>

            </div>
          </div>
        </div>
      </section>

      {/* Core Principles: 4 Clean Pillars */}
      <section className="secunova-section bg-gray-50 border-t border-gray-200">
        <div className="container mx-auto px-4">
          <div className="max-w-5xl mx-auto">
            <div className="text-center max-w-2xl mx-auto mb-10">
              <span className="text-[10px] font-bold uppercase tracking-widest text-secunova-blue block mb-1">Our Ethos</span>
              <h2 className="text-2xl sm:text-3xl font-bold text-secunova-dark tracking-tight">
                Architectural &amp; Governance Principles
              </h2>
              <p className="text-xs sm:text-sm text-slate-600 mt-1">
                The foundational standards that guarantee objective, conflict-free executive counsel.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-5">

              <MotionFadeIn delay={0.05} yOffset={20}>
                <div className="bg-white p-6 rounded-xl border border-gray-200 shadow-sm h-full">
                  <div className="w-10 h-10 rounded-lg bg-secunova-blue/10 flex items-center justify-center text-secunova-blue mb-4">
                    <ShieldCheck className="h-5 w-5" />
                  </div>
                  <h3 className="text-base font-bold text-secunova-dark mb-2">Absolute Independence</h3>
                  <p className="text-xs text-slate-600 leading-relaxed">
                    Zero software reseller agreements and zero agency commissions. Our advice serves your balance sheet exclusively, ensuring 100% unbiased recommendations.
                  </p>
                </div>
              </MotionFadeIn>

              <MotionFadeIn delay={0.1} yOffset={20}>
                <div className="bg-white p-6 rounded-xl border border-gray-200 shadow-sm h-full">
                  <div className="w-10 h-10 rounded-lg bg-secunova-light/15 flex items-center justify-center text-secunova-light mb-4">
                    <Scale className="h-5 w-5" />
                  </div>
                  <h3 className="text-base font-bold text-secunova-dark mb-2">Strict Fiduciary Focus</h3>
                  <p className="text-xs text-slate-600 leading-relaxed">
                    We are not an off-the-shelf volume shop. We operate as an elite advisory boutique focusing on high-impact strategy, audit rigor, and vendor governance.
                  </p>
                </div>
              </MotionFadeIn>

              <MotionFadeIn delay={0.15} yOffset={20}>
                <div className="bg-white p-6 rounded-xl border border-gray-200 shadow-sm h-full">
                  <div className="w-10 h-10 rounded-lg bg-secunova-blue/10 flex items-center justify-center text-secunova-blue mb-4">
                    <Users className="h-5 w-5" />
                  </div>
                  <h3 className="text-base font-bold text-secunova-dark mb-2">Senior-Partner Led</h3>
                  <p className="text-xs text-slate-600 leading-relaxed">
                    Every engagement is directed personally by senior advisors with deep experience in corporate positioning, SEO architecture, and delivery governance.
                  </p>
                </div>
              </MotionFadeIn>

              <MotionFadeIn delay={0.2} yOffset={20}>
                <div className="bg-white p-6 rounded-xl border border-gray-200 shadow-sm h-full">
                  <div className="w-10 h-10 rounded-lg bg-secunova-light/15 flex items-center justify-center text-secunova-light mb-4">
                    <Target className="h-5 w-5" />
                  </div>
                  <h3 className="text-base font-bold text-secunova-dark mb-2">Empirical ROI Standards</h3>
                  <p className="text-xs text-slate-600 leading-relaxed">
                    From search rankings to conversion rate optimization, every metric is measured quantitatively with board-ready transparency.
                  </p>
                </div>
              </MotionFadeIn>

            </div>
          </div>
        </div>
      </section>

      {/* Core Services Section: Direct & Simple Explanation with Buttons to Subpages */}
      <section className="secunova-section secunova-section--light border-t border-gray-200">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="text-center max-w-2xl mx-auto mb-12">
              <div className="inline-flex items-center bg-secunova-blue/10 text-secunova-blue px-3.5 py-1.5 rounded-full text-xs font-bold uppercase tracking-widest mb-3">
                <Crown className="h-3.5 w-3.5 mr-1.5" />
                Strategic Advisory Scope
              </div>
              <h2 className="text-2xl sm:text-3xl font-bold text-secunova-dark tracking-tight">
                Our Core Services &amp; Advisory Solutions
              </h2>
              <p className="text-xs sm:text-sm text-slate-600 mt-2 leading-relaxed">
                Direct, objective consulting designed to establish market authority, optimize digital acquisition, and protect your project investments without writing code.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 items-stretch">

              {/* Service 1: Digital Presence Audit */}
              <MotionFadeIn delay={0.05} yOffset={25} className="h-full">
                <Card3D maxTilt={8} className="h-full">
                  <div className="bg-white rounded-xl border border-gray-200 p-6 flex flex-col justify-between shadow-sm hover:shadow-xl transition-all h-full">
                    <div>
                      <div className="flex items-center justify-between mb-4">
                        <div className="w-10 h-10 bg-secunova-blue/10 rounded-lg flex items-center justify-center text-secunova-blue">
                          <Search className="h-5 w-5" />
                        </div>
                        <span className="text-[10px] font-bold uppercase tracking-wider text-secunova-blue px-2.5 py-0.5 rounded-full bg-secunova-blue/10">
                          01 · Diagnostic
                        </span>
                      </div>
                      <h3 className="text-base sm:text-lg font-bold text-secunova-dark mb-2">Digital Presence Audit</h3>
                      <p className="text-xs text-slate-600 leading-relaxed mb-4">
                        Forensic evaluation of customer UX, multi-channel messaging, and identity clarity with a prioritized 90-day roadmap.
                      </p>
                      <ul className="space-y-2 mb-6 text-xs text-slate-700">
                        <li className="flex items-center gap-2"><CheckCircle2 className="h-3.5 w-3.5 text-secunova-blue flex-shrink-0" /> Full digital footprint diagnostics</li>
                        <li className="flex items-center gap-2"><CheckCircle2 className="h-3.5 w-3.5 text-secunova-blue flex-shrink-0" /> Multi-channel messaging alignment</li>
                        <li className="flex items-center gap-2"><CheckCircle2 className="h-3.5 w-3.5 text-secunova-blue flex-shrink-0" /> Prioritized gap analysis &amp; roadmap</li>
                      </ul>
                    </div>
                    <Link to="/services/digital-presence-audit" className="btn btn-gradient text-xs font-bold text-white justify-center py-2.5 w-full">
                      Explore Presence Audit <ArrowRight className="ml-1.5 h-3.5 w-3.5 text-white" />
                    </Link>
                  </div>
                </Card3D>
              </MotionFadeIn>

              {/* Service 2: Content & Visual Storytelling Strategy */}
              <MotionFadeIn delay={0.1} yOffset={25} className="h-full">
                <Card3D maxTilt={8} className="h-full">
                  <div className="bg-white rounded-xl border border-gray-200 p-6 flex flex-col justify-between shadow-sm hover:shadow-xl transition-all h-full">
                    <div>
                      <div className="flex items-center justify-between mb-4">
                        <div className="w-10 h-10 bg-secunova-light/15 rounded-lg flex items-center justify-center text-secunova-light">
                          <PenTool className="h-5 w-5" />
                        </div>
                        <span className="text-[10px] font-bold uppercase tracking-wider text-secunova-light px-2.5 py-0.5 rounded-full bg-secunova-light/15">
                          02 · Narrative
                        </span>
                      </div>
                      <h3 className="text-base sm:text-lg font-bold text-secunova-dark mb-2">Content &amp; Visual Storytelling</h3>
                      <p className="text-xs text-slate-600 leading-relaxed mb-4">
                        Formulating your digital narrative with documentary photo standards and unified brand voice guidelines.
                      </p>
                      <ul className="space-y-2 mb-6 text-xs text-slate-700">
                        <li className="flex items-center gap-2"><CheckCircle2 className="h-3.5 w-3.5 text-secunova-blue flex-shrink-0" /> Corporate story &amp; positioning framework</li>
                        <li className="flex items-center gap-2"><CheckCircle2 className="h-3.5 w-3.5 text-secunova-blue flex-shrink-0" /> Brand voice &amp; editorial tone guidelines</li>
                        <li className="flex items-center gap-2"><CheckCircle2 className="h-3.5 w-3.5 text-secunova-blue flex-shrink-0" /> Visual documentation &amp; photo standards</li>
                      </ul>
                    </div>
                    <Link to="/services/content-storytelling-strategy" className="btn btn-primary text-xs font-bold text-white justify-center py-2.5 w-full">
                      Explore Story Strategy <ArrowRight className="ml-1.5 h-3.5 w-3.5 text-white" />
                    </Link>
                  </div>
                </Card3D>
              </MotionFadeIn>

              {/* Service 3: AI Prompt Engineering & Workflows */}
              <MotionFadeIn delay={0.15} yOffset={25} className="h-full">
                <Card3D maxTilt={8} className="h-full">
                  <div className="bg-white rounded-xl border border-gray-200 p-6 flex flex-col justify-between shadow-sm hover:shadow-xl transition-all h-full">
                    <div>
                      <div className="flex items-center justify-between mb-4">
                        <div className="w-10 h-10 bg-secunova-blue/10 rounded-lg flex items-center justify-center text-secunova-blue">
                          <Brain className="h-5 w-5" />
                        </div>
                        <span className="text-[10px] font-bold uppercase tracking-wider text-secunova-blue px-2.5 py-0.5 rounded-full bg-secunova-blue/10">
                          03 · AI Workflows
                        </span>
                      </div>
                      <h3 className="text-base sm:text-lg font-bold text-secunova-dark mb-2">AI Prompt &amp; Content Workflows</h3>
                      <p className="text-xs text-slate-600 leading-relaxed mb-4">
                        Custom AI prompt systems for your team: drafting high-converting copy, video scripts, and repeatable SOPs.
                      </p>
                      <ul className="space-y-2 mb-6 text-xs text-slate-700">
                        <li className="flex items-center gap-2"><CheckCircle2 className="h-3.5 w-3.5 text-secunova-blue flex-shrink-0" /> Custom corporate AI prompt libraries</li>
                        <li className="flex items-center gap-2"><CheckCircle2 className="h-3.5 w-3.5 text-secunova-blue flex-shrink-0" /> Educational video scripting engines</li>
                        <li className="flex items-center gap-2"><CheckCircle2 className="h-3.5 w-3.5 text-secunova-blue flex-shrink-0" /> Repeatable team velocity SOPs</li>
                      </ul>
                    </div>
                    <Link to="/services/ai-workflows-prompt-engineering" className="btn btn-gradient text-xs font-bold text-white justify-center py-2.5 w-full">
                      Explore AI Workflows <ArrowRight className="ml-1.5 h-3.5 w-3.5 text-white" />
                    </Link>
                  </div>
                </Card3D>
              </MotionFadeIn>

              {/* Service 4: Local SEO & Reputation Management */}
              <MotionFadeIn delay={0.2} yOffset={25} className="h-full">
                <Card3D maxTilt={8} className="h-full">
                  <div className="bg-white rounded-xl border border-gray-200 p-6 flex flex-col justify-between shadow-sm hover:shadow-xl transition-all h-full">
                    <div>
                      <div className="flex items-center justify-between mb-4">
                        <div className="w-10 h-10 bg-secunova-light/15 rounded-lg flex items-center justify-center text-secunova-light">
                          <MapPin className="h-5 w-5" />
                        </div>
                        <span className="text-[10px] font-bold uppercase tracking-wider text-secunova-light px-2.5 py-0.5 rounded-full bg-secunova-light/15">
                          04 · Local Authority
                        </span>
                      </div>
                      <h3 className="text-base sm:text-lg font-bold text-secunova-dark mb-2">Local SEO &amp; Reputation</h3>
                      <p className="text-xs text-slate-600 leading-relaxed mb-4">
                        Google Business Profile optimization, systematic 5-star review acquisition, and crisis mitigation protocols.
                      </p>
                      <ul className="space-y-2 mb-6 text-xs text-slate-700">
                        <li className="flex items-center gap-2"><CheckCircle2 className="h-3.5 w-3.5 text-secunova-blue flex-shrink-0" /> Google Business Profile recalibration</li>
                        <li className="flex items-center gap-2"><CheckCircle2 className="h-3.5 w-3.5 text-secunova-blue flex-shrink-0" /> Systematic 5-star review acquisition</li>
                        <li className="flex items-center gap-2"><CheckCircle2 className="h-3.5 w-3.5 text-secunova-blue flex-shrink-0" /> Negative review crisis mitigation</li>
                      </ul>
                    </div>
                    <Link to="/services/local-seo-reputation-management" className="btn btn-primary text-xs font-bold text-white justify-center py-2.5 w-full">
                      Explore Local SEO <ArrowRight className="ml-1.5 h-3.5 w-3.5 text-white" />
                    </Link>
                  </div>
                </Card3D>
              </MotionFadeIn>

              {/* Service 5: Digital Project Governance */}
              <MotionFadeIn delay={0.25} yOffset={25} className="h-full md:col-span-2 lg:col-span-2">
                <Card3D maxTilt={6} className="h-full">
                  <div className="bg-secunova-dark text-white rounded-xl border border-gray-800 p-6 flex flex-col justify-between shadow-sm hover:shadow-xl transition-all h-full">
                    <div>
                      <div className="flex items-center justify-between mb-4">
                        <div className="w-10 h-10 bg-secunova-light/15 rounded-lg flex items-center justify-center text-secunova-light">
                          <ClipboardCheck className="h-5 w-5" />
                        </div>
                        <span className="text-[10px] font-bold uppercase tracking-wider text-secunova-light px-2.5 py-0.5 rounded-full bg-secunova-light/15">
                          05 · Governance &amp; Mediation
                        </span>
                      </div>
                      <h3 className="text-base sm:text-lg font-bold text-white mb-2">Digital Project Governance &amp; Agency Mediation</h3>
                      <p className="text-xs text-blue-100/80 leading-relaxed mb-4">
                        Independent client representation before technical web and dev agencies: defining SOWs, inspecting deliverables, and gating milestone payments.
                      </p>
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 mb-6 text-xs text-blue-100/90">
                        <div className="flex items-center gap-2"><CheckCircle2 className="h-3.5 w-3.5 text-secunova-light flex-shrink-0" /> Independent client representation</div>
                        <div className="flex items-center gap-2"><CheckCircle2 className="h-3.5 w-3.5 text-secunova-light flex-shrink-0" /> Precise SOW scope definition</div>
                        <div className="flex items-center gap-2"><CheckCircle2 className="h-3.5 w-3.5 text-secunova-light flex-shrink-0" /> Milestone-gated budget releases</div>
                        <div className="flex items-center gap-2"><CheckCircle2 className="h-3.5 w-3.5 text-secunova-light flex-shrink-0" /> Zero budget drift &amp; change order defense</div>
                      </div>
                    </div>
                    <Link to="/services/digital-project-governance" className="btn btn-gradient text-xs font-bold text-white justify-center py-2.5 w-full sm:w-auto sm:self-start">
                      Explore Project Governance <ArrowRight className="ml-1.5 h-3.5 w-3.5 text-white" />
                    </Link>
                  </div>
                </Card3D>
              </MotionFadeIn>

            </div>

            {/* Track Record & Case Studies Link Banner */}
            <div className="mt-10 p-6 bg-gradient-to-r from-gray-50 to-blue-50/50 rounded-xl border border-blue-100 flex flex-col sm:flex-row items-center justify-between gap-4">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-lg bg-secunova-blue/10 flex items-center justify-center text-secunova-blue flex-shrink-0">
                  <ShieldCheck className="h-5 w-5" />
                </div>
                <div>
                  <h4 className="text-sm font-bold text-secunova-dark">Want to see our delivery track record?</h4>
                  <p className="text-xs text-slate-600">Review verified case summaries and supervised client outcomes across North America.</p>
                </div>
              </div>
              <Link to="/about/our-work" className="btn btn-outline text-xs font-bold whitespace-nowrap">
                View Track Record <ArrowRight className="ml-1.5 h-3.5 w-3.5" />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <CtaSection />
    </div>
  );
};

export default AboutPage;
