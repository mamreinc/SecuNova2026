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

import React, { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ArrowRight, CheckCircle2, ShieldCheck, Sparkles } from 'lucide-react';

interface AdvisoryDiscipline {
  number: string;
  tagline: string;
  shortTitle: string;
  headline: string;
  story: string;
  primaryMetric: { value: string; label: string };
  secondaryMetric: { value: string; label: string };
  tangibleDeliverable: string;
  supervisedOutcomes: string[];
}

const DISCIPLINES: AdvisoryDiscipline[] = [
  {
    number: '01',
    tagline: 'DIAGNOSTIC PRESENCE AUDIT',
    shortTitle: 'Presence Audit',
    headline: 'See what your market actually sees.',
    story: 'Before an enterprise buyer books a call, they conduct silent due diligence. They test your site speed, inspect your executive positioning, and compare your authority against competitors. If anything stumbles, they vanish. We run a rigorous 48-vector forensic scan across your entire digital surface, pinpointing every credibility leak, performance bottleneck, and narrative friction point that costs you high-value contracts.',
    primaryMetric: { value: '48 Vectors', label: 'Forensic evaluation scope across UX, SEO, and trust' },
    secondaryMetric: { value: 'Bespoke', label: 'Mandate calibrated to enterprise complexity' },
    tangibleDeliverable: 'Prioritized Action Register & Revenue Roadmap',
    supervisedOutcomes: [
      'Expose silent credibility leaks that stall enterprise buying decisions',
      'Benchmark organic domain authority against direct Canadian competitors',
      'Deliver an unvarnished board-ready roadmap tied directly to revenue',
    ],
  },
  {
    number: '02',
    tagline: 'PROJECT MANAGEMENT AS A SERVICE (PMaaS)',
    shortTitle: 'PMaaS Governance',
    headline: 'Surgical delivery. Zero bureaucratic drag.',
    story: 'Enterprise digital initiatives fail for one reason: lack of independent delivery governance. Agencies overbill, timelines drift, and internal teams lack the leverage to enforce technical discipline. SecuNova steps in as your Chief Project Officer on demand. We manage your high-stakes technology and digital roadmaps from milestone zero to production sign-off with unbending scope discipline.',
    primaryMetric: { value: '100%', label: 'Milestone delivery on-time rate enforced' },
    secondaryMetric: { value: '-80%', label: 'Executive overhead and meeting friction eliminated' },
    tangibleDeliverable: 'Production Milestone Ledger & Escrow Governance Register',
    supervisedOutcomes: [
      'Senior project management directing internal teams and outside vendors',
      'Transparent board-ready progress reporting with zero technical jargon',
      'Strict quality gates ensuring zero architectural debt at production launch',
    ],
  },
  {
    number: '03',
    tagline: 'INDEPENDENT VENDOR & AGENCY MEDIATION',
    shortTitle: 'Vendor Mediation',
    headline: 'We sit on your side of the table.',
    story: 'When digital agencies hold technical knowledge hostage, change orders skyrocket and budgets implode. We change the equation. SecuNova does not sell development hours, take kickbacks, or accept agency commissions. We formulate watertight Scopes of Work (SOWs), inspect code deliverables before any milestone disbursement is released, and defend your capital with uncompromising client advocacy.',
    primaryMetric: { value: '$0', label: 'Vendor kickbacks or reseller markups accepted' },
    secondaryMetric: { value: '4 Stages', label: 'Audited escrow payment milestones per contract' },
    tangibleDeliverable: 'Independent SOW Defense & Deliverable Inspection Report',
    supervisedOutcomes: [
      'Independent client representation before digital agencies and dev vendors',
      'Milestone-gated budget releases contingent on verified code quality',
      'Total elimination of phantom agency hours and recurring licensing traps',
    ],
  },
  {
    number: '04',
    tagline: 'EXECUTIVE POSITIONING & NARRATIVE ARCHITECTURE',
    shortTitle: 'Executive Narrative',
    headline: 'Command the room before you enter.',
    story: 'True commercial authority is never accidental. It is engineered. We strip away hollow corporate jargon and formulate an unassailable commercial moat for your firm. From board briefs to website copy and executive thought leadership, we ensure your message commands commercial respect and attracts tier-one enterprise partnerships without price resistance.',
    primaryMetric: { value: '+140%', label: 'Enterprise commercial conversion velocity' },
    secondaryMetric: { value: '100%', label: 'Proprietary narrative and IP owned by client' },
    tangibleDeliverable: 'Executive Positioning Blueprint & Thought Leadership Playbook',
    supervisedOutcomes: [
      'Eliminate buzzwords and establish an authoritative corporate voice',
      'Formulate documentary thought leadership guidelines for C-level executives',
      'Unify commercial messaging across pitch decks, web touchpoints, and board briefs',
    ],
  },
  {
    number: '05',
    tagline: 'INTERNAL TEAM ENABLEMENT & AI GOVERNANCE',
    shortTitle: 'AI Governance',
    headline: 'Empower your staff. Eliminate agency dependency.',
    story: 'Operational AI capability should belong directly to your internal organization, not external agency retainers. We advise executive leadership on internal AI governance, formulate institutional standard operating procedures (SOPs), and train your internal teams to execute with permanent autonomy.',
    primaryMetric: { value: 'Autonomy', label: 'Internal execution capability without recurring vendor fees' },
    secondaryMetric: { value: 'Zero', label: 'Agency retainers or proprietary third-party lock-in' },
    tangibleDeliverable: 'Institutional AI Governance Charter & Team SOP Framework',
    supervisedOutcomes: [
      'Institutional AI governance guidelines aligned with executive compliance',
      'Standard operating procedures (SOPs) establishing internal team autonomy',
      'Complete elimination of recurring agency retainers and third-party dependency',
    ],
  },
];

const getMetricFontSize = (val: string): string => {
  if (val.length >= 7) return 'text-xl sm:text-2xl xl:text-3xl';
  if (val.length >= 5) return 'text-2xl sm:text-3xl xl:text-4xl';
  return 'text-3xl sm:text-4xl xl:text-5xl';
};

const SecuNovaEngineSection: React.FC = () => {
  const [activeTab, setActiveTab] = useState<string>(DISCIPLINES[0].number);
  const isUserClickingRef = useRef<boolean>(false);
  const clickTimeoutRef = useRef<number | null>(null);

  // Automatic scrollspy observer to highlight the active discipline
  useEffect(() => {
    const handleScroll = () => {
      if (isUserClickingRef.current) return;

      const scrollPosition = window.scrollY + 280;
      for (let i = DISCIPLINES.length - 1; i >= 0; i--) {
        const item = DISCIPLINES[i];
        const el = document.getElementById(`discipline-${item.number}`);
        if (el && el.offsetTop <= scrollPosition) {
          setActiveTab(item.number);
          break;
        }
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleTabClick = (num: string) => {
    isUserClickingRef.current = true;
    setActiveTab(num);

    if (clickTimeoutRef.current) {
      window.clearTimeout(clickTimeoutRef.current);
    }
    clickTimeoutRef.current = window.setTimeout(() => {
      isUserClickingRef.current = false;
    }, 800);

    const element = document.getElementById(`discipline-${num}`);
    if (element) {
      const navOffset = 100;
      const elementPosition = element.getBoundingClientRect().top + window.pageYOffset;
      window.scrollTo({
        top: elementPosition - navOffset,
        behavior: 'smooth',
      });
    }
  };

  return (
    <section id="services" className="bg-black text-[#f5f5f7] py-28 sm:py-40 relative overflow-hidden scroll-mt-24">
      {/* Background ambient lighting */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[500px] bg-[#2997ff]/5 rounded-full blur-[140px] pointer-events-none" />
      <div className="absolute bottom-1/4 left-1/3 w-[500px] h-[400px] bg-[#0071e3]/5 rounded-full blur-[120px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Apple Monumental Section Header */}
        <div className="text-center max-w-4xl mx-auto mb-16 sm:mb-20">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/[0.04] border border-white/10 text-xs font-mono font-medium text-[#2997ff] uppercase tracking-widest mb-6 backdrop-blur-md">
            <Sparkles className="w-3.5 h-3.5" />
            <span>Advisory Framework</span>
          </div>
          <motion.h2
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-50px' }}
            transition={{ duration: 0.65, ease: [0.16, 1, 0.3, 1] }}
            className="font-display font-semibold text-3xl sm:text-5xl md:text-6xl lg:text-7xl tracking-[-0.04em] text-white leading-[0.98] mb-6 sm:mb-8"
          >
            Five disciplines. <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#2997ff] via-[#64d2ff] to-white">
              One fiduciary standard.
            </span>
          </motion.h2>
          <p className="text-base sm:text-xl lg:text-2xl text-[#86868b] font-medium leading-relaxed max-w-3xl mx-auto px-2">
            We do not sell website templates, billable coding hours, or off-the-shelf software. We operate as client-side fiduciary advisors, directing technology initiatives, evaluating vendors, and enforcing milestone accountability.
          </p>
        </div>

        {/* State-of-the-Art Apple Floating Segmented Capsule Bar */}
        <div className="sticky top-16 sm:top-20 z-30 mb-16 sm:mb-28 flex justify-center px-2 w-full max-w-full">
          <nav
            aria-label="Advisory Disciplines Navigation"
            className="inline-flex items-center p-1.5 sm:p-2 rounded-2xl md:rounded-full bg-[#12151e]/85 backdrop-blur-2xl border border-white/10 shadow-[0_16px_40px_rgba(0,0,0,0.65)] max-w-full overflow-x-auto scrollbar-none no-scrollbar gap-1 sm:gap-1.5"
            style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
          >
            {DISCIPLINES.map((d) => {
              const isActive = activeTab === d.number;
              return (
                <button
                  key={d.number}
                  onClick={() => handleTabClick(d.number)}
                  className={`relative flex items-center gap-1.5 sm:gap-2 px-3 sm:px-5 py-1.5 sm:py-2.5 rounded-xl md:rounded-full text-xs sm:text-sm font-medium whitespace-nowrap transition-all duration-300 apple-press ${
                    isActive ? 'text-white font-semibold' : 'text-slate-400 hover:text-white hover:bg-white/[0.04]'
                  }`}
                  aria-selected={isActive}
                  role="tab"
                >
                  {isActive && (
                    <motion.div
                      layoutId="engineActiveSegment"
                      className="absolute inset-0 rounded-xl md:rounded-full bg-gradient-to-r from-[#2997ff] to-[#0071e3] shadow-[0_2px_16px_rgba(41,151,255,0.45)]"
                      transition={{ type: 'spring', stiffness: 380, damping: 30 }}
                    />
                  )}
                  <span className={`relative z-10 font-mono text-[11px] sm:text-xs font-bold transition-opacity ${isActive ? 'text-white opacity-90' : 'text-slate-500'}`}>
                    {d.number}
                  </span>
                  <span className="relative z-10 tracking-tight">
                    {d.shortTitle}
                  </span>
                </button>
              );
            })}
          </nav>
        </div>

        {/* The 5 Disciplines: Luxury Editorial Chapters */}
        <div className="space-y-16 sm:space-y-32">
          {DISCIPLINES.map((discipline) => {
            const isSelected = activeTab === discipline.number;
            return (
              <div
                key={discipline.number}
                id={`discipline-${discipline.number}`}
                className={`relative rounded-2xl sm:rounded-3xl p-5 sm:p-10 lg:p-16 transition-all duration-500 border ${
                  isSelected
                    ? 'bg-gradient-to-b from-white/[0.04] to-white/[0.01] border-[#2997ff]/40 shadow-[0_20px_60px_rgba(41,151,255,0.08)]'
                    : 'bg-white/[0.02] border-white/10 hover:border-white/20'
                } scroll-mt-48`}
              >
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-16 items-start">
                  
                  {/* Left Column: Story & Strategy */}
                  <div className="lg:col-span-7 space-y-5 sm:space-y-6">
                    <div className="flex items-center gap-3">
                      <span className="px-2.5 py-1 rounded-md bg-[#2997ff]/15 border border-[#2997ff]/30 text-xs font-mono font-bold text-[#64d2ff]">
                        DISCIPLINE {discipline.number}
                      </span>
                      <span className="w-1.5 h-1.5 rounded-full bg-slate-600" />
                      <span className="text-xs font-mono font-semibold tracking-wider uppercase text-slate-400">
                        {discipline.tagline}
                      </span>
                    </div>

                    <motion.h3
                      initial={{ opacity: 0, y: 16 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true, margin: '-40px' }}
                      transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
                      className="font-display font-semibold text-2xl sm:text-4xl lg:text-5xl text-white tracking-tight leading-[1.12]"
                    >
                      {discipline.headline}
                    </motion.h3>

                    <p className="text-sm sm:text-lg text-slate-300 font-sans leading-relaxed pt-1">
                      {discipline.story}
                    </p>

                    <div className="pt-3 space-y-3">
                      <span className="text-xs font-mono font-semibold uppercase tracking-wider text-slate-400 block mb-2">
                        Supervised Executive Outcomes:
                      </span>
                      {discipline.supervisedOutcomes.map((outcome, idx) => (
                        <div key={idx} className="flex items-start gap-3 text-xs sm:text-sm text-slate-300 font-sans">
                          <CheckCircle2 className="h-4 w-4 text-[#2997ff] flex-shrink-0 mt-0.5" />
                          <span className="leading-relaxed">{outcome}</span>
                        </div>
                      ))}
                    </div>

                    <div className="pt-4 sm:pt-6">
                      <a
                        href="#consultation"
                        className="w-full sm:w-auto inline-flex items-center justify-center gap-2.5 px-5 py-3 sm:py-2.5 rounded-full bg-white/[0.05] hover:bg-[#2997ff] text-white border border-white/10 hover:border-[#2997ff] text-xs sm:text-sm font-semibold transition-all duration-300 apple-press group text-center"
                      >
                        <ShieldCheck className="h-4 w-4 text-[#2997ff] group-hover:text-white transition-colors" />
                        <span>Request advisory briefing on {discipline.shortTitle}</span>
                        <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                      </a>
                    </div>
                  </div>

                  {/* Right Column: Empirical Metrics & Deliverables */}
                  <div className="lg:col-span-5 space-y-4 sm:space-y-6 pt-2 lg:pt-4 w-full">
                    {/* Primary Tangible Deliverable */}
                    <div className="p-4 sm:p-6 rounded-2xl bg-black/60 border border-white/10 backdrop-blur-sm min-w-0">
                      <div className="flex items-center gap-2 mb-2">
                        <span className="w-1.5 h-1.5 rounded-full bg-[#2997ff]" />
                        <span className="text-xs font-mono uppercase tracking-wider text-[#2997ff] font-semibold">
                          Primary Tangible Deliverable
                        </span>
                      </div>
                      <div className="text-sm sm:text-lg font-bold text-white tracking-tight leading-snug break-words">
                        {discipline.tangibleDeliverable}
                      </div>
                    </div>

                    {/* Empirical Performance Metrics - Unified Specification Card */}
                    <div className="p-4 sm:p-6 rounded-2xl bg-white/[0.02] border border-white/10 divide-y divide-white/10 min-w-0">
                      <div className="pb-4 sm:pb-5">
                        <div className="text-2xl sm:text-4xl font-display font-semibold text-white tracking-tight mb-1 whitespace-nowrap">
                          {discipline.primaryMetric.value}
                        </div>
                        <div className="text-xs sm:text-sm text-slate-400 font-sans leading-relaxed">
                          {discipline.primaryMetric.label}
                        </div>
                      </div>

                      <div className="pt-4 sm:pt-5">
                        <div className="text-2xl sm:text-4xl font-display font-semibold text-[#2997ff] tracking-tight mb-1 whitespace-nowrap">
                          {discipline.secondaryMetric.value}
                        </div>
                        <div className="text-xs sm:text-sm text-slate-400 font-sans leading-relaxed">
                          {discipline.secondaryMetric.label}
                        </div>
                      </div>
                    </div>
                  </div>

                </div>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
};

export default SecuNovaEngineSection;
