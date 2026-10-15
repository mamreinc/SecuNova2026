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
import { motion } from 'framer-motion';
import { Mail, Phone, Copy, Check, ShieldCheck, Building, Lock, ArrowUpRight } from 'lucide-react';

const SecuNovaConsultationSection: React.FC = () => {
  const [copied, setCopied] = useState(false);

  const handleCopyEmail = () => {
    navigator.clipboard.writeText('hello@secunovainc.ca');
    setCopied(true);
    setTimeout(() => setCopied(false), 2500);
  };

  return (
    <section id="consultation" className="bg-black text-[#f5f5f7] py-28 sm:py-40 relative overflow-hidden scroll-mt-24">
      {/* Apple Subtle Radial Ambient Light */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[900px] h-[600px] bg-[radial-gradient(ellipse_at_center,rgba(0,113,227,0.18)_0%,transparent_70%)] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Apple Monumental Contact Header */}
        <div className="text-center max-w-4xl mx-auto mb-16 sm:mb-24">
          <span className="text-xs font-mono font-medium text-[#2997ff] uppercase tracking-widest block mb-4">
            Direct Partner Engagement
          </span>
          <motion.h2
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-50px' }}
            transition={{ duration: 0.65, ease: [0.16, 1, 0.3, 1] }}
            className="font-display font-semibold text-4xl sm:text-6xl md:text-7xl lg:text-8xl tracking-[-0.04em] text-white leading-[0.98] mb-8"
          >
            Strategic clarity <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-300 via-white to-slate-300">
              begins with one conversation.
            </span>
          </motion.h2>
          <p className="text-lg sm:text-2xl text-[#86868b] font-medium leading-relaxed max-w-3xl mx-auto">
            We communicate with every prospective client directly via executive email. No automated forms, no sales middlemen, and zero marketing funnels. Direct access to senior leadership.
          </p>
        </div>

        {/* Dual Luxury Glass Contact Cards */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-10 items-start">
          
          {/* Left Column: Direct Communication Channels Card */}
          <div className="lg:col-span-6 rounded-3xl bg-gradient-to-b from-white/[0.04] to-white/[0.01] border border-white/10 p-8 sm:p-10 lg:p-12 space-y-6 shadow-[0_20px_60px_rgba(0,0,0,0.5)]">
            
            {/* Primary Email Block */}
            <div className="space-y-3">
              <div className="flex items-center justify-between gap-4">
                <span className="text-xs font-mono uppercase text-[#2997ff] tracking-wider font-semibold flex items-center gap-2">
                  <Mail className="h-3.5 w-3.5" />
                  <span>Primary Executive Contact</span>
                </span>
                
                {/* Independent Copy Pill Button */}
                <button
                  onClick={handleCopyEmail}
                  className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-full bg-white/[0.06] hover:bg-white/[0.12] border border-white/10 text-xs font-mono text-slate-300 hover:text-white transition-all apple-press shadow-sm"
                  title="Copy email to clipboard"
                >
                  {copied ? (
                    <>
                      <Check className="h-3.5 w-3.5 text-emerald-400" />
                      <span className="text-emerald-400 font-semibold">Copied</span>
                    </>
                  ) : (
                    <>
                      <Copy className="h-3.5 w-3.5 text-[#2997ff]" />
                      <span>Copy Email</span>
                    </>
                  )}
                </button>
              </div>

              <div>
                <a
                  href="mailto:hello@secunovainc.ca"
                  className="group inline-flex items-center gap-2 text-lg sm:text-xl md:text-2xl font-display font-semibold text-white hover:text-[#2997ff] transition-colors tracking-tight break-all sm:break-normal"
                >
                  <span>hello@secunovainc.ca</span>
                  <ArrowUpRight className="h-5 w-5 opacity-0 group-hover:opacity-100 transition-opacity text-[#2997ff] shrink-0" />
                </a>
              </div>
            </div>

            {/* Direct Telephone Block */}
            <div className="pt-5 border-t border-white/10 space-y-2">
              <span className="text-xs font-mono uppercase text-slate-400 tracking-wider block font-medium">
                Direct Telephone
              </span>
              <a
                href="tel:4034011552"
                className="group inline-flex items-center gap-3 text-base sm:text-lg font-display font-semibold text-slate-200 hover:text-white transition-colors tracking-tight"
              >
                <div className="w-9 h-9 rounded-full bg-white/[0.05] group-hover:bg-[#2997ff]/20 border border-white/10 group-hover:border-[#2997ff]/40 flex items-center justify-center transition-all">
                  <Phone className="h-4 w-4 text-[#2997ff]" />
                </div>
                <span>+1 (403) 401-1552</span>
              </a>
            </div>

            {/* Trust & Legal Verification Badges */}
            <div className="pt-5 border-t border-white/10 space-y-2.5 text-xs font-mono text-slate-400">
              <div className="flex items-center gap-2.5">
                <Building className="h-4 w-4 text-slate-500 shrink-0" />
                <span>Headquartered in Calgary, Alberta, Canada</span>
              </div>
              <div className="flex items-center gap-2.5">
                <ShieldCheck className="h-4 w-4 text-[#2997ff] shrink-0" />
                <span>Alberta Corporate Registry #2026915245</span>
              </div>
              <div className="flex items-center gap-2.5">
                <Lock className="h-4 w-4 text-emerald-400 shrink-0" />
                <span>Fiduciary Non-Disclosure Standard on Every Engagement</span>
              </div>
            </div>

          </div>

          {/* Right Column: Confidential Advisory Protocol Card */}
          <div className="lg:col-span-6 rounded-3xl bg-gradient-to-b from-white/[0.04] to-white/[0.01] border border-white/10 p-8 sm:p-10 lg:p-12 space-y-6 shadow-[0_20px_60px_rgba(0,0,0,0.5)]">
            
            <div className="space-y-3">
              <span className="text-xs font-mono uppercase text-[#2997ff] tracking-wider block font-semibold">
                What to expect when you contact us
              </span>
              <motion.h3
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-40px' }}
                transition={{ duration: 0.55, ease: [0.16, 1, 0.3, 1] }}
                className="font-display font-semibold text-2xl sm:text-3xl text-white tracking-tight"
              >
                Our Three-Step Engagement Protocol.
              </motion.h3>
            </div>

            <div className="space-y-6 text-sm text-slate-300 font-sans">
              <div className="space-y-1">
                <div className="text-white font-semibold text-base flex items-center gap-2">
                  <span className="text-xs font-mono text-[#2997ff] font-bold">01</span>
                  <span>Senior Partner Review</span>
                </div>
                <p className="text-slate-400 text-xs sm:text-sm leading-relaxed pl-6">
                  Your brief is opened and assessed directly by practice leadership. No account managers, junior sales staff, or automated questionnaires.
                </p>
              </div>

              <div className="space-y-1">
                <div className="text-white font-semibold text-base flex items-center gap-2">
                  <span className="text-xs font-mono text-[#2997ff] font-bold">02</span>
                  <span>Mutual NDA First</span>
                </div>
                <p className="text-slate-400 text-xs sm:text-sm leading-relaxed pl-6">
                  Complete legal non-disclosure protection is executed before reviewing sensitive technology roadmaps, SOWs, or vendor contracts.
                </p>
              </div>

              <div className="space-y-1">
                <div className="text-white font-semibold text-base flex items-center gap-2">
                  <span className="text-xs font-mono text-[#2997ff] font-bold">03</span>
                  <span>Empirical Scoping &amp; Fixed Fiduciary Terms</span>
                </div>
                <p className="text-slate-400 text-xs sm:text-sm leading-relaxed pl-6">
                  Clear milestone deliverables, fixed fiduciary terms, and guaranteed zero scope creep. Milestones calibrated strictly to project scope.
                </p>
              </div>
            </div>

            <div className="pt-4">
              <a
                href="mailto:hello@secunovainc.ca"
                className="w-full sm:w-auto px-9 py-4 rounded-full bg-[#0071e3] hover:bg-[#0077ed] text-white font-semibold text-sm sm:text-base tracking-tight transition-all duration-200 apple-press shadow-[0_4px_24px_rgba(0,113,227,0.45)] inline-flex items-center justify-center gap-2.5"
              >
                <Mail className="h-4 w-4" />
                <span>Send Executive Inquiry Directly</span>
              </a>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
};

export default SecuNovaConsultationSection;
