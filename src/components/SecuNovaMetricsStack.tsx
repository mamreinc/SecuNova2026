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

import React, { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';

interface MetricLineProps {
  primary: string;
  secondary: string;
  progress: any;
  range: [number, number];
}

const MetricLine: React.FC<MetricLineProps> = ({ primary, secondary, progress, range }) => {
  const opacity = useTransform(progress, range, [0.25, 1]);
  const scale = useTransform(progress, range, [0.97, 1]);
  const color = useTransform(progress, range, ['#6e6e73', '#ffffff']);

  return (
    <motion.div
      style={{ opacity, scale }}
      className="py-4 sm:py-6 border-b border-white/10 transition-all duration-300 flex flex-col md:flex-row md:items-baseline justify-between gap-2"
    >
      <motion.span
        style={{ color }}
        className="text-3xl sm:text-5xl lg:text-6xl font-semibold tracking-[-0.03em] font-display"
      >
        {primary}
      </motion.span>
      <span className="text-sm sm:text-lg text-slate-400 font-sans max-w-md md:text-right">
        {secondary}
      </span>
    </motion.div>
  );
};

export const SecuNovaMetricsStack: React.FC = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ['start 0.8', 'end 0.35'],
  });

  const METRICS = [
    {
      primary: '$0 Reseller Markups',
      secondary: 'Zero agency commissions or vendor kickbacks. Uncompromising client alignment.',
    },
    {
      primary: '100% Milestone Escrow',
      secondary: 'Capital disbursements released only when code and deliverables pass automated inspection.',
    },
    {
      primary: '48 Forensic Audit Vectors',
      secondary: 'Comprehensive evaluation covering Core Web Vitals, trust leaks, and commercial authority.',
    },
    {
      primary: 'Bespoke Advisory Scopes',
      secondary: 'Engagements individually calibrated to your organizational scale, governance complexity, and delivery goals.',
    },
    {
      primary: '100% Client-Side Advocacy',
      secondary: 'We govern external agencies and technology vendors to protect your capital and eliminate lock-in.',
    },
  ];

  const step = 1 / METRICS.length;

  return (
    <section id="benchmarks" ref={containerRef} className="py-24 sm:py-36 bg-black text-[#f5f5f7] relative border-t border-white/10 scroll-mt-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="mb-14 sm:mb-20 text-left">
          <span className="text-xs font-mono font-medium text-[#2997ff] uppercase tracking-wider block mb-3">
            Quantitative Accountability
          </span>
          <motion.h2
            initial={{ opacity: 0, y: 22 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-50px' }}
            transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
            className="text-4xl sm:text-6xl font-semibold tracking-[-0.03em] text-white leading-tight"
          >
            The standard of fiduciary delivery.
          </motion.h2>
          <p className="text-lg text-slate-400 mt-4 max-w-2xl leading-relaxed">
            Numbers that demonstrate independent advocacy. As you scroll, each metric reflects verified benchmarks enforced across our enterprise client engagements.
          </p>
        </div>

        <div className="space-y-2">
          {METRICS.map((metric, idx) => {
            const start = idx * step;
            const end = Math.min(start + step * 1.15, 1);
            return (
              <MetricLine
                key={idx}
                primary={metric.primary}
                secondary={metric.secondary}
                progress={scrollYProgress}
                range={[start, end]}
              />
            );
          })}
        </div>

      </div>
    </section>
  );
};

export default SecuNovaMetricsStack;
