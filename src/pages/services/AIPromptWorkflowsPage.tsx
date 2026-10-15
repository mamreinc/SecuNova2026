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
  Brain, CheckCircle2, ArrowRight, Zap, Cpu,
  Layers, Video, FileText, Sparkles, Workflow, ShieldCheck
} from 'lucide-react';
import CtaSection from '../../components/CtaSection';
import SEOSchema from '../../components/SEOSchema';
import { buildSeoTags } from '../../utils/seo-meta';

const AIPromptWorkflowsPage: React.FC = () => {
  const workflowModules = [
    {
      icon: <Layers className="h-6 w-6 text-secunova-blue" />,
      title: 'Bespoke Corporate AI Prompt Libraries',
      description:
        'We engineer tailored prompt systems encoded with your company’s unique voice, industry terminology, and client personas. Your team generates authentic marketing copy with a genuine human touch rather than robotic AI clichés.',
      deliverables: [
        'Proprietary prompt library organized by content format',
        'Tone calibration prompts to eliminate generic AI phrases',
        'Audience persona injection parameters',
      ],
    },
    {
      icon: <Video className="h-6 w-6 text-secunova-light" />,
      title: 'Video & Educational Script Structuring Frameworks',
      description:
        'Structured prompt workflows designed to outline, script, and format high-retention video content, customer case breakdown videos, and educational webinars for founders and marketing leads.',
      deliverables: [
        'Hook, retention & call-to-action video script formulas',
        'Short-form and long-form video drafting systems',
        'Webinar & podcast interview preparation prompts',
      ],
    },
    {
      icon: <Workflow className="h-6 w-6 text-secunova-blue" />,
      title: 'Internal Marketing Content Velocity Workflows',
      description:
        'Accelerate content production internally without hiring expensive external agencies or writing a single line of code. We streamline ideation, research synthesis, first draft generation, and editorial polish into standard repeatable SOPs.',
      deliverables: [
        'Step-by-step content production standard operating procedures',
        'Fact-checking and editorial verification checklist',
        'Batching & multi-format repurposing playbooks',
      ],
    },
    {
      icon: <Cpu className="h-6 w-6 text-secunova-light" />,
      title: 'Team Hands-On Enablement & Governance Coaching',
      description:
        'We do not just hand over prompts; we train your in-house marketing personnel to master prompt engineering and maintain quality control. We establish ethical AI guidelines and brand safety protocols.',
      deliverables: [
        'Interactive team training workshops & recordings',
        'Corporate AI usage & brand safety guidelines',
        'Prompt maintenance and continuous updating framework',
      ],
    },
  ];

  return (
    <div className="min-h-screen bg-white">
      <Helmet>
        <title>AI Prompt Engineering &amp; Content Workflows | SecuNova Inc.</title>
        <meta
          name="description"
          content="Empower your marketing team with bespoke AI prompt engineering and automated content production workflows. 10x content velocity with human-grade quality."
        />
        <meta
          name="keywords"
          content="AI prompt engineering Calgary, marketing AI workflows, custom prompt libraries Canada, video scripting AI, internal content velocity advisory"
        />
        {buildSeoTags({
          title: 'AI Prompt Engineering & Content Workflows | SecuNova Inc.',
          description:
            'Turn artificial intelligence into an internal competitive advantage. Custom corporate prompt libraries and structured content workflows for marketing teams.',
          url: '/services/ai-workflows-prompt-engineering',
          imageAlt: 'SecuNova Inc. - AI Prompt Engineering & Workflows',
        })}
      </Helmet>

      <SEOSchema
        type="service"
        data={{
          title: 'AI Prompt Engineering & Content Workflows | SecuNova Inc.',
          description:
            'Bespoke AI prompt libraries, educational video scripting frameworks, and marketing velocity workflows.',
          url: 'https://secunovainc.ca/services/ai-workflows-prompt-engineering',
        }}
      />

      {/* Hero Section */}
      <section className="relative min-h-[750px] overflow-hidden flex items-center justify-center pt-32 pb-20 bg-secunova-dark text-white">
        <div className="absolute inset-0">
          <video
            src="/nova.mp4"
            autoPlay
            muted
            loop
            playsInline
            preload="metadata"
            poster="/images/heroes/ai-workflows-hero.jpg"
            className="w-full h-full object-cover opacity-60"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-secunova-dark/80 via-secunova-dark/60 to-secunova-dark/90"></div>
        </div>

        <div className="container mx-auto px-4 relative z-10 w-full text-center">
          <div className="max-w-3xl mx-auto">
            <div className="inline-flex items-center bg-white/10 backdrop-blur-md px-4 py-1.5 rounded-full text-xs font-bold uppercase tracking-widest text-secunova-light mb-5">
              <Brain className="h-3.5 w-3.5 mr-1.5" />
              Operational Enablement
            </div>

            <h1 className="text-3xl sm:text-5xl font-extrabold text-white leading-tight tracking-tight mb-4">
              AI Prompt Engineering. <span className="text-secunova-light block sm:inline">10x Content Velocity.</span>
            </h1>

            <p className="text-sm sm:text-base text-blue-100/90 max-w-xl mx-auto leading-relaxed mb-8">
              We design custom AI prompt architectures and structured workflows for your in-house marketing team. Produce authoritative, human-grade content at scale without writing code or hiring outside agencies.
            </p>

            <div className="flex flex-col sm:flex-row justify-center gap-3">
              <Link to="/contact" className="btn btn-gradient text-xs sm:text-sm font-bold text-white px-6 py-3">
                Design Your AI Workflow
              </Link>
              <a href="#prompt-modules" className="btn btn-outline-light text-xs sm:text-sm font-bold text-white px-6 py-3">
                View Prompt Systems
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
                <span className="text-xs font-bold uppercase tracking-widest text-secunova-blue block mb-2">The Operational Bottleneck</span>
                <h2 className="text-2xl sm:text-3xl font-bold text-secunova-dark mb-4 leading-tight">
                  Stop Settling for Generic, Robotic AI Outputs
                </h2>
                <p className="text-slate-600 text-xs sm:text-sm leading-relaxed mb-4">
                  Most teams try using basic AI tools with unguided prompts and receive sterile, repetitive text that damages their brand reputation. They end up rewriting everything from scratch or giving up entirely.
                </p>
                <p className="text-slate-600 text-xs sm:text-sm leading-relaxed mb-6">
                  SecuNova bridges the gap between raw AI capability and nuanced corporate communications. We engineer deeply contextualized prompt structures that capture your firm’s specific voice, technical depth, and strategic nuance, giving your internal team superpowers.
                </p>
                <div className="grid grid-cols-2 gap-3 text-xs font-bold text-secunova-dark">
                  <div className="flex items-center"><CheckCircle2 className="h-4 w-4 text-secunova-blue mr-2 flex-shrink-0" /> Zero Robotic Cliches</div>
                  <div className="flex items-center"><CheckCircle2 className="h-4 w-4 text-secunova-blue mr-2 flex-shrink-0" /> Turnkey Prompt Notion/Doc</div>
                  <div className="flex items-center"><CheckCircle2 className="h-4 w-4 text-secunova-blue mr-2 flex-shrink-0" /> Video &amp; Social Ready</div>
                  <div className="flex items-center"><CheckCircle2 className="h-4 w-4 text-secunova-blue mr-2 flex-shrink-0" /> In-House Team Independence</div>
                </div>
              </div>

              <div className="lg:col-span-5">
                <div className="bg-slate-50 border border-gray-200 rounded-2xl p-6 shadow-sm">
                  <h3 className="text-sm font-bold text-secunova-dark uppercase tracking-wider mb-4 flex items-center gap-2">
                    <Zap className="h-4 w-4 text-secunova-blue" />
                    Expected Efficiency Gains
                  </h3>
                  <div className="space-y-3 text-xs text-slate-700">
                    <div className="p-3 bg-white rounded-lg border border-gray-100 shadow-2xs">
                      <strong className="block text-secunova-dark font-bold mb-0.5">70% Faster First Drafts</strong>
                      Articles, case summaries, and client memos drafted in minutes rather than days.
                    </div>
                    <div className="p-3 bg-white rounded-lg border border-gray-100 shadow-2xs">
                      <strong className="block text-secunova-dark font-bold mb-0.5">Structured Video Scripts</strong>
                      Clear, punchy educational video outlines ready for immediate filming.
                    </div>
                    <div className="p-3 bg-white rounded-lg border border-gray-100 shadow-2xs">
                      <strong className="block text-secunova-dark font-bold mb-0.5">Substantial Agency Savings</strong>
                      Keep content production internal without monthly agency retainer fees.
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 4 Workflow Modules */}
      <section id="prompt-modules" className="secunova-section bg-gray-50 border-t border-gray-200">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="text-center max-w-2xl mx-auto mb-12">
              <span className="text-[10px] font-bold uppercase tracking-widest text-secunova-blue block mb-1">Architecture</span>
              <h2 className="text-2xl sm:text-3xl font-bold text-secunova-dark tracking-tight">
                AI Prompt Systems &amp; Workflows We Engineer
              </h2>
              <p className="text-xs sm:text-sm text-slate-600 mt-2">
                Four battle-tested components customized to your market and internal capabilities.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {workflowModules.map((module, index) => (
                <div key={index} className="bg-white rounded-xl border border-gray-200 p-6 shadow-sm flex flex-col justify-between">
                  <div>
                    <div className="w-12 h-12 rounded-xl bg-slate-50 border border-gray-100 flex items-center justify-center mb-4">
                      {module.icon}
                    </div>
                    <h3 className="text-base font-bold text-secunova-dark mb-2">{module.title}</h3>
                    <p className="text-xs text-slate-600 leading-relaxed mb-4">{module.description}</p>

                    <div className="border-t border-gray-100 pt-3">
                      <span className="text-[11px] font-bold uppercase tracking-wider text-slate-500 block mb-2">System Components:</span>
                      <ul className="space-y-1.5 text-xs text-slate-700">
                        {module.deliverables.map((item, dIdx) => (
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
              Your Complete In-House AI Kit
            </h2>
            <p className="text-xs sm:text-sm text-slate-600 max-w-xl mx-auto mb-8">
              Everything your staff needs to operate at maximum speed while preserving brand dignity and accuracy.
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 text-left">
              <div className="p-5 rounded-xl border border-gray-200 bg-white shadow-2xs">
                <FileText className="h-6 w-6 text-secunova-blue mb-2" />
                <h4 className="text-sm font-bold text-secunova-dark mb-1">Custom Prompt Matrix</h4>
                <p className="text-xs text-slate-600 leading-relaxed">
                  Ready-to-use prompts for blogs, case breakdowns, executive posts, and emails.
                </p>
              </div>
              <div className="p-5 rounded-xl border border-gray-200 bg-white shadow-2xs">
                <Video className="h-6 w-6 text-secunova-light mb-2" />
                <h4 className="text-sm font-bold text-secunova-dark mb-1">Video Scripting Engine</h4>
                <p className="text-xs text-slate-600 leading-relaxed">
                  Formulaic prompt sequences to outline, hook, and script educational client videos.
                </p>
              </div>
              <div className="p-5 rounded-xl border border-gray-200 bg-white shadow-2xs">
                <Workflow className="h-6 w-6 text-secunova-blue mb-2" />
                <h4 className="text-sm font-bold text-secunova-dark mb-1">SOP &amp; Training Video</h4>
                <p className="text-xs text-slate-600 leading-relaxed">
                  Standard operating procedures and recorded team walkthrough for ongoing onboarding.
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

export default AIPromptWorkflowsPage;
