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

import React, { useState, useEffect } from 'react';

const SecuNovaLocalNav: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 40);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className={`sticky top-0 z-40 backdrop-blur-xl bg-black/85 border-b border-white/10 transition-all duration-300 ${isScrolled ? 'shadow-2xl' : ''}`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-12 flex items-center justify-between text-xs">
        {/* Left: Product Name */}
        <div className="flex items-center gap-3">
          <a href="#overview" className="font-semibold text-white tracking-tight text-sm sm:text-base hover:text-secunova-light transition-colors">
            SecuNova Advisory Pro
          </a>
          <span className="hidden md:inline-block text-[10px] font-mono px-2 py-0.5 rounded-full bg-white/10 text-slate-300 border border-white/10">
            Alberta Corp Registry #2026915245
          </span>
        </div>

        {/* Right: Sub-Navigation Links */}
        <div className="flex items-center gap-3 sm:gap-6 text-slate-400 font-medium">
          <a href="#overview" className="hover:text-white transition-colors">Overview</a>
          <a href="#services" className="hover:text-white transition-colors">What We Deliver</a>
          <a href="#case-studies" className="hover:text-white transition-colors hidden sm:inline-block">Track Record</a>
          <a href="#about" className="hover:text-white transition-colors">Leadership</a>
          <a
            href="#consultation"
            className="px-4 py-1.5 rounded-full bg-[#0071e3] hover:bg-[#0077ed] text-white font-semibold text-xs tracking-tight transition-all duration-200 apple-press shadow-[0_2px_12px_rgba(0,113,227,0.4)]"
          >
            Book Consultation
          </a>
        </div>
      </div>
    </div>
  );
};

export default SecuNovaLocalNav;
