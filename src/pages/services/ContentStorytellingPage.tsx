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
  PenTool, CheckCircle2, ArrowRight, BookOpen, Camera,
  MessageSquare, Sparkles, Target, Users, Award, ShieldCheck
} from 'lucide-react';
import CtaSection from '../../components/CtaSection';
import SEOSchema from '../../components/SEOSchema';
import { buildSeoTags } from '../../utils/seo-meta';

const ContentStorytellingPage: React.FC = () => {
  const strategyPillars = [
    {
      icon: <BookOpen className="h-6 w-6 text-secunova-blue" />,
      title: 'Brand Narrative & Core Positioning Architecture',
      description:
        'We help organizations extract and articulate their authentic story. We define who you are, why you matter, and how your core capabilities solve critical client problems, eliminating sterile corporate jargon.',
      deliverables: [
        'Corporate story framework & master narrative',
        'Executive value proposition statements',
        'Customer-centric hero messaging pillars',
      ],
    },
    {
      icon: <MessageSquare className="h-6 w-6 text-secunova-light" />,
      title: 'Voice, Tone & Publishing Editorial Guidelines',
      description:
        'A comprehensive editorial style guide establishing how your firm communicates across all digital touchpoints. We codify exact vocabulary, prohibited terms, and guidelines for human, engaging interaction.',
      deliverables: [
        'Brand tone of voice & personality matrix',
        'Editorial style guide & grammar standards',
        'Publishing protocols across corporate channels',
      ],
    },
    {
      icon: <Camera className="h-6 w-6 text-secunova-blue" />,
      title: 'Visual Documentation & Photography Standards',
      description:
        'Sterile stock photography destroys credibility. We establish detailed guidelines for documentary-style imagery, authentic executive photography, and visual asset curation that radiates premium institutional standards.',
      deliverables: [
        'Visual art direction & photo styling guide',
        'Documentary imagery guidelines for internal teams',
        'Social media & web visual composition rules',
      ],
    },
    {
      icon: <Users className="h-6 w-6 text-secunova-light" />,
      title: 'Executive Thought Leadership Strategy',
      description:
        'Positioning founders and C-suite leaders as authoritative industry voices. We create strategic content themes and publishing cadences that attract peer respect, investor confidence, and client inquiries.',
      deliverables: [
        'Executive LinkedIn positioning strategy',
        'Quarterly thought leadership themes & topics',
        'Authentic storytelling interview frameworks',
      ],
    },
  ];

  return (
    <div className="min-h-screen bg-white">
      <Helmet>
        <title>Content &amp; Visual Storytelling Strategy | SecuNova Inc.</title>
        <meta
          name="description"
          content="Transform your brand narrative with SecuNova's Content & Visual Storytelling Strategy. Brand tone of voice, visual documentation guidelines, and thought leadership positioning."
        />
        <meta
          name="keywords"
          content="content strategy Calgary, visual storytelling advisory, brand tone of voice guide, executive narrative architecture, B2B photography guidelines Canada"
        />
        {buildSeoTags({
          title: 'Content & Visual Storytelling Strategy | SecuNova Inc.',
          description:
            'Crafting an authentic, human-centric corporate narrative that resonates with decision-makers. Includes editorial tone guides and visual standards.',
          url: '/services/content-storytelling-strategy',
          imageAlt: 'SecuNova Inc. - Content & Visual Storytelling Strategy',
        })}
      </Helmet>

      <SEOSchema
        type="service"
        data={{
          title: 'Content & Visual Storytelling Strategy | SecuNova Inc.',
          description:
            'Strategic corporate storytelling, editorial tone guidelines, and visual documentation standards.',
          url: 'https://secunovainc.ca/services/content-storytelling-strategy',
        }}
      />

      {/* Hero Section */}
      <section className="relative min-h-[750px] overflow-hidden flex items-center justify-center pt-32 pb-20 bg-secunova-dark text-white">
        <div className="absolute inset-0">
          <img
            src="/images/heroes/storytelling-hero.jpg"
            alt="SecuNova Content and Visual Storytelling Architecture"
            className="w-full h-full object-cover opacity-55"
            loading="eager"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-secunova-dark/80 via-secunova-dark/60 to-secunova-dark/90"></div>
        </div>

        <div className="container mx-auto px-4 relative z-10 w-full text-center">
          <div className="max-w-3xl mx-auto">
            <div className="inline-flex items-center bg-white/10 backdrop-blur-md px-4 py-1.5 rounded-full text-xs font-bold uppercase tracking-widest text-secunova-light mb-5">
              <PenTool className="h-3.5 w-3.5 mr-1.5" />
              Narrative Architecture
            </div>

            <h1 className="text-3xl sm:text-5xl font-extrabold text-white leading-tight tracking-tight mb-4">
              Content &amp; Visual Storytelling. <span className="text-secunova-light block sm:inline">Human Authority.</span>
            </h1>

            <p className="text-sm sm:text-base text-blue-100/90 max-w-xl mx-auto leading-relaxed mb-8">
              We guide companies to formulate their corporate story with clarity and emotional resonance. Replace hollow buzzwords with authentic narrative standards that command client trust.
            </p>

            <div className="flex flex-col sm:flex-row justify-center gap-3">
              <Link to="/contact" className="btn btn-gradient text-xs sm:text-sm font-bold text-white px-6 py-3">
                Develop Your Story Strategy
              </Link>
              <a href="#storytelling-pillars" className="btn btn-outline-light text-xs sm:text-sm font-bold text-white px-6 py-3">
                View Strategy Scope
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
                <span className="text-xs font-bold uppercase tracking-widest text-secunova-blue block mb-2">Narrative Reality</span>
                <h2 className="text-2xl sm:text-3xl font-bold text-secunova-dark mb-4 leading-tight">
                  Why Great Companies Get Ignored Online
                </h2>
                <p className="text-slate-600 text-xs sm:text-sm leading-relaxed mb-4">
                  Most enterprise marketing sounds completely identical: sterile, generic adjectives that say nothing memorable. Potential clients cannot distinguish your firm from a dozen competitors.
                </p>
                <p className="text-slate-600 text-xs sm:text-sm leading-relaxed mb-6">
                  SecuNova crafts bespoke narrative frameworks and visual documentation guidelines that make your values palpable. We replace cliché stock photos with authentic visual storytelling protocols that turn casual viewers into loyal advocates.
                </p>
                <div className="grid grid-cols-2 gap-3 text-xs font-bold text-secunova-dark">
                  <div className="flex items-center"><CheckCircle2 className="h-4 w-4 text-secunova-blue mr-2 flex-shrink-0" /> Zero Generic Stock Clichés</div>
                  <div className="flex items-center"><CheckCircle2 className="h-4 w-4 text-secunova-blue mr-2 flex-shrink-0" /> Turnkey Guidelines Manual</div>
                  <div className="flex items-center"><CheckCircle2 className="h-4 w-4 text-secunova-blue mr-2 flex-shrink-0" /> Tailored B2B Voice Matrix</div>
                  <div className="flex items-center"><CheckCircle2 className="h-4 w-4 text-secunova-blue mr-2 flex-shrink-0" /> Cross-Team Consistency</div>
                </div>
              </div>

              <div className="lg:col-span-5">
                <div className="bg-slate-50 border border-gray-200 rounded-2xl p-6 shadow-sm">
                  <h3 className="text-sm font-bold text-secunova-dark uppercase tracking-wider mb-4 flex items-center gap-2">
                    <Sparkles className="h-4 w-4 text-secunova-blue" />
                    The SecuNova Storytelling Difference
                  </h3>
                  <div className="space-y-3 text-xs text-slate-700">
                    <div className="p-3 bg-white rounded-lg border border-gray-100 shadow-2xs">
                      <strong className="block text-secunova-dark font-bold mb-0.5">From Theory to Actionable Rules</strong>
                      Concrete guidelines any staff member, copywriter, or photographer can follow immediately.
                    </div>
                    <div className="p-3 bg-white rounded-lg border border-gray-100 shadow-2xs">
                      <strong className="block text-secunova-dark font-bold mb-0.5">Authentic Human Connection</strong>
                      Framing your team's real expertise and behind-the-scenes craft rather than empty marketing claims.
                    </div>
                    <div className="p-3 bg-white rounded-lg border border-gray-100 shadow-2xs">
                      <strong className="block text-secunova-dark font-bold mb-0.5">Protection of Brand Equity</strong>
                      Guarding your brand voice against diluted, off-brand posts across multi-department teams.
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 4 Pillars of Storytelling */}
      <section id="storytelling-pillars" className="secunova-section bg-gray-50 border-t border-gray-200">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="text-center max-w-2xl mx-auto mb-12">
              <span className="text-[10px] font-bold uppercase tracking-widest text-secunova-blue block mb-1">Strategic Framework</span>
              <h2 className="text-2xl sm:text-3xl font-bold text-secunova-dark tracking-tight">
                Core Storytelling Pillars &amp; Guidelines
              </h2>
              <p className="text-xs sm:text-sm text-slate-600 mt-2">
                Four interconnected frameworks that codify your brand's digital narrative.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {strategyPillars.map((pillar, index) => (
                <div key={index} className="bg-white rounded-xl border border-gray-200 p-6 shadow-sm flex flex-col justify-between">
                  <div>
                    <div className="w-12 h-12 rounded-xl bg-slate-50 border border-gray-100 flex items-center justify-center mb-4">
                      {pillar.icon}
                    </div>
                    <h3 className="text-base font-bold text-secunova-dark mb-2">{pillar.title}</h3>
                    <p className="text-xs text-slate-600 leading-relaxed mb-4">{pillar.description}</p>

                    <div className="border-t border-gray-100 pt-3">
                      <span className="text-[11px] font-bold uppercase tracking-wider text-slate-500 block mb-2">Tangible Deliverables:</span>
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

      {/* Tangible Guidelines Manual */}
      <section className="secunova-section secunova-section--light border-t border-gray-200">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <div className="inline-flex items-center bg-secunova-blue/10 text-secunova-blue px-3.5 py-1.5 rounded-full text-xs font-bold uppercase tracking-widest mb-3">
              <Award className="h-3.5 w-3.5 mr-1.5" />
              Tangible Assets
            </div>
            <h2 className="text-2xl sm:text-3xl font-bold text-secunova-dark tracking-tight mb-4">
              Your Complete Brand Guidelines Playbook
            </h2>
            <p className="text-xs sm:text-sm text-slate-600 max-w-xl mx-auto mb-8">
              Everything your internal marketing department or external agencies need to create consistent, high-converting content with zero guesswork.
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 text-left">
              <div className="p-5 rounded-xl border border-gray-200 bg-white shadow-2xs">
                <BookOpen className="h-6 w-6 text-secunova-blue mb-2" />
                <h4 className="text-sm font-bold text-secunova-dark mb-1">Brand Voice Manual</h4>
                <p className="text-xs text-slate-600 leading-relaxed">
                  Definitive tone standards, vocabulary dos and don'ts, and sentence rhythm guides.
                </p>
              </div>
              <div className="p-5 rounded-xl border border-gray-200 bg-white shadow-2xs">
                <Camera className="h-6 w-6 text-secunova-light mb-2" />
                <h4 className="text-sm font-bold text-secunova-dark mb-1">Visual Direction Kit</h4>
                <p className="text-xs text-slate-600 leading-relaxed">
                  Photo composition guides, color palette moodboards, and photo shoot brief templates.
                </p>
              </div>
              <div className="p-5 rounded-xl border border-gray-200 bg-white shadow-2xs">
                <Target className="h-6 w-6 text-secunova-blue mb-2" />
                <h4 className="text-sm font-bold text-secunova-dark mb-1">Editorial Content Calendar</h4>
                <p className="text-xs text-slate-600 leading-relaxed">
                  Strategic quarterly themes and post archetypes to maintain consistent publishing velocity.
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

export default ContentStorytellingPage;
