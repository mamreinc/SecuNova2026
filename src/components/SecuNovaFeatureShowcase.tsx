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

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronUp, ChevronDown, Plus, CheckCircle2, Shield, FileCheck, Layers, Award, Terminal } from 'lucide-react';

interface FeaturePill {
  id: string;
  title: string;
  shortLabel: string;
  description: string;
  detailPoints: string[];
  metric: string;
  metricLabel: string;
  icon: any;
}

const FEATURE_PILLS: FeaturePill[] = [
  {
    id: 'sow-defense',
    title: 'SOW Defense & Escrow',
    shortLabel: 'Escrow Gates',
    description: 'We audit vendor contracts before execution, closing ambiguous clauses that trigger change-order cascades. Milestone funds remain in independent escrow until verified.',
    detailPoints: [
      'Pre-contract scope forensic inspection',
      'Milestone sign-off gated on code quality audits',
      'Elimination of unapproved agency hourly billing',
    ],
    metric: '100%',
    metricLabel: 'Capital disbursements tied to verified code quality',
    icon: Shield,
  },
  {
    id: 'audit-vectors',
    title: '48 Forensic Audit Vectors',
    shortLabel: 'Forensic Audit',
    description: 'A deep diagnostic scan inspecting Core Web Vitals, organic search authority, executive positioning moats, and technical debt across your digital ecosystem.',
    detailPoints: [
      'Sub-second performance and CWV diagnostics',
      'Technical SEO and competitive SERP positioning',
      'Enterprise trust and conversion friction analysis',
    ],
    metric: '48',
    metricLabel: 'Forensic vectors analyzed across digital and technical touchpoints',
    icon: FileCheck,
  },
  {
    id: 'fiduciary-shield',
    title: 'Zero Vendor Kickbacks',
    shortLabel: 'Zero Kickbacks',
    description: 'Unlike digital agencies that earn software commissions or resell SaaS tools, SecuNova is 100% independent. We take zero vendor fees, ensuring pure client loyalty.',
    detailPoints: [
      'Zero reseller software commissions or referral cuts',
      'Unbiased technical stack recommendations',
      '100% fiduciary alignment on the client side of the table',
    ],
    metric: '$0',
    metricLabel: 'Third-party commissions or kickbacks accepted',
    icon: Award,
  },
  {
    id: 'pmaas-governance',
    title: 'PMaaS Senior Leadership',
    shortLabel: 'PMaaS Governance',
    description: 'Fractional Chief Project Officer directing both internal engineers and outside agency partners. Structured reporting, risk registers, and strict accountability.',
    detailPoints: [
      'Senior oversight on mission-critical roadmaps',
      'Bi-weekly board-ready status and risk registers',
      'Strict quality gating before production rollouts',
    ],
    metric: 'Bespoke',
    metricLabel: 'Milestones calibrated to enterprise project complexity',
    icon: Layers,
  },
  {
    id: 'contract-sovereignty',
    title: 'Vendor Contract Sovereignty',
    shortLabel: 'Vendor Control',
    description: 'We audit vendor contracts and deliverables so third-party agencies cannot lock your business into proprietary traps. Your leadership retains absolute control over all institutional assets.',
    detailPoints: [
      'Enforce full client ownership of all vendor-built systems',
      'Eliminate agency hostage retainers and proprietary lock-in',
      'Freedom to transition, maintain, or evolve vendors independently',
    ],
    metric: '100%',
    metricLabel: 'Fiduciary client protection against vendor dependency traps',
    icon: Terminal,
  },
];

export const SecuNovaFeatureShowcase: React.FC = () => {
  const [activeId, setActiveId] = useState<string>(FEATURE_PILLS[0].id);

  const activeIndex = FEATURE_PILLS.findIndex((p) => p.id === activeId);
  const activePill = FEATURE_PILLS[activeIndex];

  const handlePrev = (e: React.MouseEvent) => {
    e.stopPropagation();
    const prevIndex = (activeIndex - 1 + FEATURE_PILLS.length) % FEATURE_PILLS.length;
    setActiveId(FEATURE_PILLS[prevIndex].id);
  };

  const handleNext = (e: React.MouseEvent) => {
    e.stopPropagation();
    const nextIndex = (activeIndex + 1) % FEATURE_PILLS.length;
    setActiveId(FEATURE_PILLS[nextIndex].id);
  };

  return (
    <section className="py-24 sm:py-36 bg-black text-[#f5f5f7] relative overflow-hidden border-t border-white/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="max-w-3xl mb-16 sm:mb-20">
          <span className="text-xs font-mono font-medium text-[#2997ff] uppercase tracking-wider block mb-3">
            Interactive Advisory Architecture
          </span>
          <motion.h2
            initial={{ opacity: 0, y: 22 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-50px' }}
            transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
            className="text-4xl sm:text-6xl font-semibold tracking-[-0.03em] text-white leading-tight"
          >
            Built for enterprise scrutiny.
          </motion.h2>
          <p className="text-lg text-slate-300 mt-4 leading-relaxed font-normal">
            Explore the five pillars of our independent governance practice. Select each capability below to examine its fiduciary mandate and verified deliverables.
          </p>
        </div>

        {/* Apple-Style Interactive Layout: Floating Pill Stack on Left, Expansive Context on Right */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-start">
          
          {/* Left Column: Stack of Interactive Pills / Accordion Cards */}
          <div className="lg:col-span-5 space-y-3">
            {FEATURE_PILLS.map((pill, idx) => {
              const isActive = pill.id === activeId;
              const Icon = pill.icon;

              if (isActive) {
                return (
                  <motion.div
                    key={pill.id}
                    layoutId={`pill-card-${pill.id}`}
                    className="rounded-3xl bg-[#1d1d1f]/90 border border-white/15 p-6 sm:p-7 backdrop-blur-xl shadow-2xl text-left"
                    transition={{ type: 'spring', stiffness: 350, damping: 30 }}
                  >
                    {/* Active Pill Header with Navigation Arrows */}
                    <div className="flex items-center justify-between mb-4">
                      <div className="flex items-center gap-3">
                        <div className="w-8 h-8 rounded-full bg-[#0071e3]/20 border border-[#0071e3]/40 flex items-center justify-center text-[#2997ff]">
                          <Icon className="h-4 w-4" />
                        </div>
                        <span className="text-xs font-mono uppercase tracking-wider text-[#2997ff]">
                          Pillar {idx + 1} of {FEATURE_PILLS.length}
                        </span>
                      </div>

                      {/* Up/Down Micro Navigation */}
                      <div className="flex items-center gap-1">
                        <button
                          onClick={handlePrev}
                          aria-label="Previous capability"
                          className="w-7 h-7 rounded-full bg-white/5 hover:bg-white/15 flex items-center justify-center text-slate-300 hover:text-white transition-colors apple-press"
                        >
                          <ChevronUp className="h-4 w-4" />
                        </button>
                        <button
                          onClick={handleNext}
                          aria-label="Next capability"
                          className="w-7 h-7 rounded-full bg-white/5 hover:bg-white/15 flex items-center justify-center text-slate-300 hover:text-white transition-colors apple-press"
                        >
                          <ChevronDown className="h-4 w-4" />
                        </button>
                      </div>
                    </div>

                    <h3 className="text-xl sm:text-2xl font-semibold text-white mb-3 tracking-tight">
                      {pill.title}
                    </h3>

                    <p className="text-sm sm:text-base text-slate-300 leading-relaxed font-normal mb-5">
                      {pill.description}
                    </p>

                    <div className="space-y-2 pt-2 border-t border-white/10">
                      {pill.detailPoints.map((point, i) => (
                        <div key={i} className="flex items-start gap-2.5 text-xs text-slate-300">
                          <CheckCircle2 className="h-3.5 w-3.5 text-[#2997ff] flex-shrink-0 mt-0.5" />
                          <span>{point}</span>
                        </div>
                      ))}
                    </div>
                  </motion.div>
                );
              }

              return (
                <button
                  key={pill.id}
                  onClick={() => setActiveId(pill.id)}
                  className="w-full text-left px-5 py-3.5 rounded-full bg-white/[0.04] hover:bg-white/[0.08] border border-white/10 hover:border-white/20 transition-all duration-200 flex items-center justify-between group apple-press"
                >
                  <div className="flex items-center gap-3">
                    <span className="w-1.5 h-1.5 rounded-full bg-white/40 group-hover:bg-[#2997ff] transition-colors" />
                    <span className="text-sm font-medium text-slate-300 group-hover:text-white transition-colors">
                      {pill.title}
                    </span>
                  </div>
                  <div className="w-6 h-6 rounded-full bg-white/5 flex items-center justify-center text-slate-400 group-hover:text-white group-hover:bg-white/10 transition-colors">
                    <Plus className="h-3.5 w-3.5" />
                  </div>
                </button>
              );
            })}
          </div>

          {/* Right Column: Expansive Context Display */}
          <div className="lg:col-span-7">
            <div className="rounded-3xl sm:rounded-[36px] bg-[#0c0e14] border border-white/10 p-8 sm:p-12 lg:p-14 relative min-h-[480px] flex flex-col justify-between overflow-hidden shadow-2xl">
              
              {/* Subtle Ambient Radial Highlight */}
              <div className="absolute top-0 right-0 w-80 h-80 bg-[radial-gradient(circle,rgba(41,151,255,0.18)_0%,transparent_70%)] pointer-events-none" />

              <AnimatePresence mode="wait">
                <motion.div
                  key={activePill.id}
                  initial={{ opacity: 0, y: 16 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -16 }}
                  transition={{ duration: 0.35, ease: [0.16, 1, 0.3, 1] }}
                  className="space-y-8 z-10"
                >
                  <div className="flex items-center justify-between border-b border-white/10 pb-6">
                    <div>
                      <span className="text-xs font-mono uppercase tracking-wider text-slate-400 block mb-1">
                        Active Verification Focus
                      </span>
                      <h4 className="text-2xl sm:text-3xl font-semibold text-white tracking-tight">
                        {activePill.title}
                      </h4>
                    </div>
                    <div className="text-right">
                      <div className="text-4xl sm:text-5xl font-display font-semibold text-[#2997ff]">
                        {activePill.metric}
                      </div>
                      <div className="text-[11px] font-mono text-slate-400 uppercase tracking-wider mt-1">
                        {activePill.metricLabel}
                      </div>
                    </div>
                  </div>

                  <div className="space-y-4">
                    <p className="text-base sm:text-lg text-slate-200 leading-relaxed font-normal">
                      {activePill.description}
                    </p>
                    <p className="text-sm text-slate-400 leading-relaxed">
                      SecuNova acts as an unyielding fiduciary proxy. We bridge the critical gap between non-technical executive leadership and technical execution partners, ensuring deliverables align strictly with business velocity.
                    </p>
                  </div>

                  {/* Fiduciary Deliverables Grid */}
                  <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 pt-4 border-t border-white/10">
                    <div className="p-4 rounded-xl bg-white/[0.03] border border-white/5">
                      <div className="text-xs font-mono text-[#2997ff] uppercase tracking-wider mb-1">Independence</div>
                      <div className="text-sm font-semibold text-white">100% Fiduciary</div>
                      <div className="text-xs text-slate-400 mt-1">Zero vendor commissions</div>
                    </div>
                    <div className="p-4 rounded-xl bg-white/[0.03] border border-white/5">
                      <div className="text-xs font-mono text-[#30d158] uppercase tracking-wider mb-1">Supervision</div>
                      <div className="text-sm font-semibold text-white">Milestone Gated</div>
                      <div className="text-xs text-slate-400 mt-1">Strict deliverable inspection</div>
                    </div>
                    <div className="p-4 rounded-xl bg-white/[0.03] border border-white/5">
                      <div className="text-xs font-mono text-[#bf5af2] uppercase tracking-wider mb-1">Integrity</div>
                      <div className="text-sm font-semibold text-white">Zero Vendor Traps</div>
                      <div className="text-xs text-slate-400 mt-1">Independent client governance</div>
                    </div>
                  </div>
                </motion.div>
              </AnimatePresence>

              {/* Bottom Direct Action */}
              <div className="pt-8 border-t border-white/10 flex items-center justify-between text-xs text-slate-400 z-10 mt-6">
                <span className="font-mono">Calgary &amp; Canadian Enterprise Fiduciary Standard</span>
                <a
                  href="#consultation"
                  className="text-white hover:text-[#2997ff] font-medium transition-colors apple-press"
                >
                  Schedule brief &rarr;
                </a>
              </div>

            </div>
          </div>

        </div>

      </div>
    </section>
  );
};

export default SecuNovaFeatureShowcase;
