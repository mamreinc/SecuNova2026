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
import { motion } from 'framer-motion';
import { ChevronRight } from 'lucide-react';

const SecuNovaHero: React.FC = () => {
  return (
    <section
      id="overview"
      className="relative min-h-[780px] lg:min-h-[860px] bg-black text-[#f5f5f7] pt-28 sm:pt-40 pb-20 overflow-hidden flex flex-col items-center justify-start"
    >
      {/* Background Cinematic Video: hero3.mp4 */}
      <video
        src="/hero3.mp4"
        autoPlay
        loop
        muted
        playsInline
        aria-hidden="true"
        title="SecuNova Consulting Cinematic Visual"
        className="absolute inset-0 w-full h-full object-cover opacity-45 pointer-events-none z-0"
      />

      {/* Cinematic Vignette & Ambient Gradient Overlays */}
      <div className="absolute inset-0 bg-gradient-to-b from-black/85 via-black/60 to-black pointer-events-none z-0" />
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[1200px] h-[750px] bg-[radial-gradient(ellipse_at_top,rgba(0,113,227,0.22)_0%,rgba(16,25,40,0.06)_50%,transparent_80%)] pointer-events-none z-0" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center flex flex-col items-center w-full">
        
        {/* Apple Signature Eyebrow: Pure Open-Air Text */}
        <motion.div
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
          className="mb-6 inline-flex items-center justify-center flex-wrap gap-2 text-[11px] sm:text-sm font-semibold tracking-wider sm:tracking-widest uppercase font-mono text-slate-300 text-center max-w-full px-2"
        >
          <span className="w-2 h-2 rounded-full bg-[#2997ff] shrink-0" />
          <span>Independent Advisory Practice</span>
          <span className="hidden sm:inline text-slate-500">|</span>
          <span className="text-slate-400">Calgary &amp; Canadian Enterprise</span>
        </motion.div>

        {/* Apple Monumental Keynote Headline */}
        <motion.h1
          initial={{ opacity: 0, y: 18 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
          className="text-4xl xs:text-5xl sm:text-7xl md:text-8xl lg:text-9xl font-semibold tracking-[-0.04em] text-[#f5f5f7] leading-[0.94] sm:leading-[0.90] lg:leading-[0.88] mb-8 drop-shadow-[0_4px_24px_rgba(0,0,0,0.8)] overflow-visible max-w-full break-words"
        >
          <span className="block">Unfair authority.</span>
          <span className="block -mt-[0.06em] sm:-mt-[0.08em] pb-3 sm:pb-4 lg:pb-6 text-transparent bg-clip-text bg-gradient-to-b from-white via-white to-slate-300">
            Zero agency bloat.
          </span>
        </motion.h1>

        {/* Apple Persuasive Subhead: Crisp, Declarative, Outcome-Focused */}
        <motion.p
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
          className="text-base sm:text-xl lg:text-2xl text-slate-300 max-w-3xl mx-auto font-medium leading-relaxed mb-10 drop-shadow-[0_2px_12px_rgba(0,0,0,0.8)] px-2"
        >
          Strategic advisory that protects your bottom line while elevating your market reach. We bridge the gap between high-level digital direction and disciplined execution, completely free from vendor overhead.
        </motion.p>

        {/* Action Controls */}
        <motion.div
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.25, ease: [0.16, 1, 0.3, 1] }}
          className="flex flex-col sm:flex-row items-center justify-center gap-4 sm:gap-8 mb-16 sm:mb-20 w-full max-w-md sm:max-w-none px-4"
        >
          <a
            href="#consultation"
            aria-label="Book Strategic Consultation with SecuNova"
            className="w-full sm:w-auto px-8 sm:px-9 py-3.5 sm:py-4 rounded-full bg-[#0071e3] hover:bg-[#0077ed] text-white font-semibold text-sm sm:text-base tracking-tight transition-all duration-200 apple-press shadow-[0_4px_24px_rgba(0,113,227,0.5)] text-center justify-center"
          >
            Book Strategic Consultation
          </a>
          <a
            href="#services"
            className="w-full sm:w-auto group text-[#2997ff] hover:text-[#52aaff] font-semibold text-sm sm:text-base flex items-center justify-center gap-2 transition-colors apple-press py-2"
          >
            <span>Explore what we deliver</span>
            <ChevronRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
          </a>
        </motion.div>

        {/* Open-Air Fiduciary Triad: Pure Typography & Massive Numbers (Zero Boxes, Zero Tabs) */}
        <div className="w-full mx-auto text-left space-y-12">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 pb-2">
            <div>
              <span className="text-xs font-mono font-medium text-[#2997ff] uppercase tracking-wider block mb-2">
                Fiduciary Commitment
              </span>
              <motion.h2
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-50px' }}
                transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
                className="text-3xl sm:text-5xl font-semibold text-white tracking-tight leading-tight"
              >
                Your agencies build. <br />
                <span className="text-slate-400">We govern. You win.</span>
              </motion.h2>
            </div>
            <p className="text-sm sm:text-base text-slate-300 max-w-md font-sans leading-relaxed">
              We sit strictly on the client side of the table, defending your SOW, inspecting code deliverables, and gating milestone payments.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
            <div>
              <div className="text-5xl sm:text-6xl font-display font-semibold text-white tracking-tight mb-2 drop-shadow-md">
                $0
              </div>
              <div className="text-base font-semibold text-white mb-1.5">
                Reseller Markups
              </div>
              <p className="text-xs sm:text-sm text-slate-300 font-sans leading-relaxed">
                We accept zero vendor kickbacks and zero software commissions. Complete fiduciary alignment.
              </p>
            </div>

            <div>
              <div className="text-5xl sm:text-6xl font-display font-semibold text-[#2997ff] tracking-tight mb-2 drop-shadow-md">
                100%
              </div>
              <div className="text-base font-semibold text-white mb-1.5">
                Milestone Escrow Gates
              </div>
              <p className="text-xs sm:text-sm text-slate-300 font-sans leading-relaxed">
                Disbursements occur only when deliverables pass independent functional and architectural tests.
              </p>
            </div>

            <div>
              <div className="text-5xl sm:text-6xl font-display font-semibold text-white tracking-tight mb-2 drop-shadow-md">
                Bespoke
              </div>
              <div className="text-base font-semibold text-white mb-1.5">
                Executive Scope
              </div>
              <p className="text-xs sm:text-sm text-slate-300 font-sans leading-relaxed">
                Tailored advisory mandates calibrated specifically to your enterprise complexity and governance requirements.
              </p>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
};

export default SecuNovaHero;
