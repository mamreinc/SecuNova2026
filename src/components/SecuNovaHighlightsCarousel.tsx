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
import { Play, Pause, ChevronLeft, ChevronRight, ShieldCheck, Cpu, ArrowUpRight, Lock } from 'lucide-react';

interface HighlightItem {
  id: string;
  tag: string;
  title: string;
  description: string;
  metric: string;
  metricLabel: string;
  badge: string;
  accentColor: string;
}

const HIGHLIGHTS: HighlightItem[] = [
  {
    id: 'highlight-01',
    tag: 'Fiduciary Governance',
    title: 'Zero agency markups. 100% client advocacy.',
    description: 'We do not sell software, bill development hours, or collect vendor kickbacks. We sit strictly on the client side of the executive table, protecting your capital and governing deliverables.',
    metric: '$0',
    metricLabel: 'Reseller commissions or software kickbacks accepted',
    badge: 'Pure Fiduciary Shield',
    accentColor: '#2997ff',
  },
  {
    id: 'highlight-02',
    tag: 'Diagnostic Precision',
    title: '48 forensic audit vectors. Unvarnished truth.',
    description: 'Before enterprise buyers sign a mandate, they scrutinize your digital footprint. We run deep forensic checks across UX friction, performance benchmarks, and narrative authority leaks.',
    metric: '48',
    metricLabel: 'Audited vectors across speed, security, and market position',
    badge: 'Bespoke Audit',
    accentColor: '#30d158',
  },
  {
    id: 'highlight-03',
    tag: 'Project Management as a Service',
    title: 'Surgical delivery. Milestone escrow enforcement.',
    description: 'Vendor disbursements release strictly when independent automated and code inspections pass. No milestone drift. No scope creep. Board-level accountability.',
    metric: '100%',
    metricLabel: 'Milestone escrow governance on supervised initiatives',
    badge: 'PMaaS Senior Leadership',
    accentColor: '#bf5af2',
  },
  {
    id: 'highlight-04',
    tag: 'Vendor Sovereignty',
    title: 'Zero agency lock-in. Total client sovereignty.',
    description: 'We ensure outside development vendors and software agencies cannot hold your digital infrastructure hostage. All contracts, systems, and deliverables are structured for complete client autonomy.',
    metric: '100%',
    metricLabel: 'Client operational independence from external agency retainers',
    badge: 'Fiduciary Independence',
    accentColor: '#ff9f0a',
  },
];

export const SecuNovaHighlightsCarousel: React.FC = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isPlaying, setIsPlaying] = useState(true);
  const timerRef = useRef<NodeJS.Timeout | null>(null);

  useEffect(() => {
    if (isPlaying) {
      timerRef.current = setInterval(() => {
        setCurrentIndex((prev) => (prev + 1) % HIGHLIGHTS.length);
      }, 5000);
    } else if (timerRef.current) {
      clearInterval(timerRef.current);
    }
    return () => {
      if (timerRef.current) clearInterval(timerRef.current);
    };
  }, [isPlaying, currentIndex]);

  const handleNext = () => {
    setCurrentIndex((prev) => (prev + 1) % HIGHLIGHTS.length);
  };

  const handlePrev = () => {
    setCurrentIndex((prev) => (prev - 1 + HIGHLIGHTS.length) % HIGHLIGHTS.length);
  };

  const current = HIGHLIGHTS[currentIndex];

  return (
    <section className="py-20 sm:py-28 bg-black text-[#f5f5f7] overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header Row */}
        <div className="flex flex-col sm:flex-row sm:items-end justify-between mb-12 sm:mb-16 gap-4">
          <div>
            <span className="text-xs font-mono font-medium text-[#2997ff] uppercase tracking-wider block mb-3">
              Institutional Highlights
            </span>
            <motion.h2
              initial={{ opacity: 0, y: 22 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-50px' }}
              transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
              className="text-4xl sm:text-6xl font-semibold tracking-[-0.03em] text-white"
            >
              Get the highlights.
            </motion.h2>
          </div>
          <a
            href="#consultation"
            className="group text-sm font-semibold text-[#2997ff] hover:text-white flex items-center gap-1.5 transition-colors apple-press"
          >
            <span>Initiate confidential consultation</span>
            <ArrowUpRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
          </a>
        </div>

        {/* Carousel Viewport */}
        <div className="relative">
          <div className="overflow-hidden rounded-[28px] sm:rounded-[36px] bg-[#0c0e14] border border-white/10 min-h-[460px] sm:min-h-[500px] flex items-center relative shadow-[0_20px_60px_rgba(0,0,0,0.8)]">
            
            {/* Ambient Lighting Glow tailored to current highlight */}
            <div
              className="absolute -top-32 -left-32 w-96 h-96 rounded-full blur-[120px] opacity-25 pointer-events-none transition-all duration-700"
              style={{ backgroundColor: current.accentColor }}
            />
            <div
              className="absolute -bottom-32 -right-32 w-96 h-96 rounded-full blur-[140px] opacity-20 pointer-events-none transition-all duration-700"
              style={{ backgroundColor: current.accentColor }}
            />

            <AnimatePresence mode="wait">
              <motion.div
                key={current.id}
                initial={{ opacity: 0, x: 40 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -40 }}
                transition={{ duration: 0.45, ease: [0.16, 1, 0.3, 1] }}
                className="w-full p-8 sm:p-14 lg:p-16 grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center z-10"
              >
                {/* Left Narrative Column */}
                <div className="lg:col-span-7 space-y-6">
                  <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/5 border border-white/10 text-xs font-mono text-slate-300">
                    <span
                      className="w-2 h-2 rounded-full"
                      style={{ backgroundColor: current.accentColor }}
                    />
                    <span>{current.tag}</span>
                  </div>

                  <h3 className="text-3xl sm:text-5xl font-semibold text-white tracking-[-0.03em] leading-[1.08]">
                    {current.title}
                  </h3>

                  <p className="text-base sm:text-lg text-slate-300 leading-relaxed max-w-xl font-normal">
                    {current.description}
                  </p>

                  <div className="pt-2">
                    <span className="text-xs font-mono uppercase tracking-wider text-slate-400">
                      Advisory Discipline: <span className="text-white font-medium">{current.badge}</span>
                    </span>
                  </div>
                </div>

                {/* Right Monumental Quantitative Card */}
                <div className="lg:col-span-5 flex flex-col items-start lg:items-end justify-center">
                  <div className="w-full max-w-sm rounded-2xl bg-white/[0.03] border border-white/10 p-8 text-left backdrop-blur-md">
                    <div
                      className="text-6xl sm:text-7xl font-display font-semibold tracking-tight mb-3"
                      style={{ color: current.accentColor }}
                    >
                      {current.metric}
                    </div>
                    <div className="text-sm font-medium text-white mb-1">
                      Enforced Benchmark
                    </div>
                    <p className="text-xs text-slate-400 leading-relaxed font-sans">
                      {current.metricLabel}
                    </p>
                  </div>
                </div>
              </motion.div>
            </AnimatePresence>

          </div>

          {/* Apple-Style Floating Controller Dock at the Bottom */}
          <div className="flex justify-center mt-8">
            <div className="inline-flex items-center gap-3 px-5 py-2.5 rounded-full bg-[#161617]/90 border border-white/10 backdrop-blur-xl shadow-2xl">
              
              {/* Previous Button */}
              <button
                onClick={handlePrev}
                aria-label="Previous highlight"
                className="w-8 h-8 rounded-full flex items-center justify-center text-slate-400 hover:text-white hover:bg-white/10 transition-colors apple-press"
              >
                <ChevronLeft className="h-4 w-4" />
              </button>

              {/* Progress Indicator Dots / Expandable Pills */}
              <div className="flex items-center gap-2">
                {HIGHLIGHTS.map((item, idx) => {
                  const isActive = idx === currentIndex;
                  return (
                    <button
                      key={item.id}
                      onClick={() => setCurrentIndex(idx)}
                      aria-label={`Jump to highlight ${idx + 1}`}
                      className="relative h-2 rounded-full transition-all duration-300 overflow-hidden"
                      style={{
                        width: isActive ? '32px' : '8px',
                        backgroundColor: isActive ? 'rgba(255, 255, 255, 0.2)' : 'rgba(255, 255, 255, 0.25)',
                      }}
                    >
                      {isActive && (
                        <motion.div
                          layoutId="activePillIndicator"
                          className="h-full w-full rounded-full bg-white"
                          transition={{ type: 'spring', stiffness: 350, damping: 30 }}
                        />
                      )}
                    </button>
                  );
                })}
              </div>

              {/* Next Button */}
              <button
                onClick={handleNext}
                aria-label="Next highlight"
                className="w-8 h-8 rounded-full flex items-center justify-center text-slate-400 hover:text-white hover:bg-white/10 transition-colors apple-press"
              >
                <ChevronRight className="h-4 w-4" />
              </button>

              <div className="w-[1px] h-4 bg-white/10 mx-1" />

              {/* Play / Pause Toggle Button */}
              <button
                onClick={() => setIsPlaying(!isPlaying)}
                aria-label={isPlaying ? 'Pause slideshow' : 'Play slideshow'}
                className="w-8 h-8 rounded-full flex items-center justify-center text-slate-400 hover:text-white hover:bg-white/10 transition-colors apple-press"
              >
                {isPlaying ? <Pause className="h-3.5 w-3.5" /> : <Play className="h-3.5 w-3.5 translate-x-0.5" />}
              </button>

            </div>
          </div>

        </div>

      </div>
    </section>
  );
};

export default SecuNovaHighlightsCarousel;
