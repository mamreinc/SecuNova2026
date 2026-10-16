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

interface TextSentenceProps {
  children: React.ReactNode;
  progress: any;
  range: [number, number];
}

const TextSentence: React.FC<TextSentenceProps> = ({ children, progress, range }) => {
  const opacity = useTransform(progress, range, [0.22, 1]);
  const color = useTransform(progress, range, ['#6e6e73', '#f5f5f7']);
  const blur = useTransform(progress, range, ['blur(1px)', 'blur(0px)']);

  return (
    <motion.span
      style={{ opacity, color, filter: blur }}
      className="inline transition-all duration-300 ease-out font-medium"
    >
      {children}{' '}
    </motion.span>
  );
};

interface AppleScrollTextRevealProps {
  eyebrow?: string;
  headline?: string;
  sentences: string[];
  citation?: string;
}

export const AppleScrollTextReveal: React.FC<AppleScrollTextRevealProps> = ({
  eyebrow = 'Strategic Due Diligence',
  headline = 'Independent authority. Before the first dollar leaves.',
  sentences,
  citation,
}) => {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ['start 0.85', 'end 0.45'],
  });

  const step = 1 / sentences.length;

  return (
    <div id="governance" ref={containerRef} className="py-24 sm:py-36 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-left scroll-mt-24">
      {eyebrow && (
        <span className="text-xs font-mono font-medium text-[#2997ff] uppercase tracking-wider block mb-4">
          {eyebrow}
        </span>
      )}
      {headline && (
        <motion.h2
          initial={{ opacity: 0, y: 22 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-50px' }}
          transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
          className="text-3xl sm:text-5xl lg:text-6xl font-semibold tracking-[-0.03em] text-[#f5f5f7] leading-[1.08] mb-10"
        >
          {headline}
        </motion.h2>
      )}
      <p className="text-2xl sm:text-4xl md:text-5xl font-medium tracking-tight leading-[1.3] text-[#6e6e73]">
        {sentences.map((sentence, idx) => {
          const start = idx * step;
          const end = Math.min(start + step * 1.2, 1);
          return (
            <TextSentence key={idx} progress={scrollYProgress} range={[start, end]}>
              {sentence}
            </TextSentence>
          );
        })}
      </p>
      {citation && (
        <div className="mt-8 text-sm font-mono text-slate-400">
          {citation}
        </div>
      )}
    </div>
  );
};

export default AppleScrollTextReveal;
