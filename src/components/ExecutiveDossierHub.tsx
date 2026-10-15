/**
 * ============================================================================
 * MAXPHAOS MARKETING: PROPRIETARY CUSTOM ENGINEERING & DESIGN ARCHITECTURE
 * ----------------------------------------------------------------------------
 * All design, software architecture, UI/UX components, and source code are
 * 100% custom-engineered and designed exclusively by MaxPhaos Marketing.
 *
 * CORE ARCHITECTURAL ETHos:
 * - 100% Bespoke Code: Built strictly to client specifications from scratch.
 * - Zero Pre-Made Templates: No generic agency starters or off-the-shelf themes.
 * - Senior-Led AI-Augmented Workflows (Vibe Coding): 14-day execution cycles
 *   engineered for sub-second performance (99+ Lighthouse Core Web Vitals).
 * - Full IP & Repository Handoff: 100% client asset and codebase ownership.
 *
 * Copyright (c) MaxPhaos Marketing. All rights reserved.
 * ============================================================================
 */

import React, { useState, useRef } from 'react';
import { motion } from 'framer-motion';
import { Play, Pause, ArrowRight, CheckCircle2 } from 'lucide-react';

interface AdvisoryCase {
  id: string;
  discipline: string;
  clientIndustry: string;
  mandateTitle: string;
  headline: string;
  challengeStory: string;
  secuNovaIntervention: string;
  governedDeliverableName: string;
  videoSrc: string;
  verifiedDeliverables: string[];
}

const ADVISORY_CASES: AdvisoryCase[] = [
  {
    id: 'case-01',
    discipline: 'PMaaS // AI Program Governance',
    clientIndustry: 'Enterprise Financial Services',
    mandateTitle: 'The Autonomous Intelligence Mandate',
    headline: 'Eliminated cloud data leakage. Retained complete client IP.',
    challengeStory: 'The client hired an external software agency that proposed an open cloud architecture. The approach would have exposed confidential client data to third-party model providers, created indefinite cloud hosting costs, and left proprietary prompt assets in vendor hands.',
    secuNovaIntervention: 'SecuNova was retained as Chief Project Officer (PMaaS). We intervened before contract signing, rejected the vendor cloud telemetry model, and enforced a zero-leakage local execution architecture. We gated all vendor milestone disbursements against strict code inspections.',
    governedDeliverableName: 'Nova Enterprise AI Governance Architecture',
    videoSrc: '/nova.mp4',
    verifiedDeliverables: [
      'Independent SOW audit eliminating vendor proprietary licensing traps',
      'Milestone-gated payment releases contingent on zero-telemetry code tests',
      'Complete IP and repository handoff with zero ongoing retainers',
    ],
  },
  {
    id: 'case-02',
    discipline: 'Vendor Mediation // SOW Defense',
    clientIndustry: 'B2B Recruitment Intelligence',
    mandateTitle: 'The Platform Delivery Defense Mandate',
    headline: 'Stopped timeline drift. Eliminated unvetted change orders.',
    challengeStory: 'A fast-growing recruitment platform was paralyzed by offshore vendor disputes. The agency had missed delivery deadlines, claimed technical impossibility for core resume parsing algorithms, and demanded unvetted change orders to proceed.',
    secuNovaIntervention: 'SecuNova assumed delivery governance. We audited the agency code repository, proved that the algorithmic bottlenecks were caused by vendor technical debt, and renegotiated the SOW with binding escrow milestones. We brought the project to production launch rapidly.',
    governedDeliverableName: 'Career OS Enterprise Intelligence Engine',
    videoSrc: '/Career OS.mp4',
    verifiedDeliverables: [
      'Comprehensive code and architectural forensics exposing agency debt',
      'Restructured sprint backlog with board-level delivery transparency',
      'Final acceptance sign-off with zero vendor lock-in or recurring fees',
    ],
  },
  {
    id: 'case-03',
    discipline: 'Delivery Governance // Security Architecture',
    clientIndustry: 'Critical System Infrastructure',
    mandateTitle: 'The Mission-Critical Cryptographic Mandate',
    headline: 'Total air-gapped security. Zero background telemetry.',
    challengeStory: 'A mission-critical enterprise software release failed compliance review. External contractors had bundled third-party analytical daemons that transmitted system diagnostics outside Canada, violating enterprise confidentiality agreements.',
    secuNovaIntervention: 'SecuNova took immediate supervisory control of the security roadmap. We mandated hardware-accelerated AES-256 cryptographic protocols, stripped every background telemetry daemon from the build, and verified air-gapped performance under real-world stress testing.',
    governedDeliverableName: 'SecuBoost Cryptographic Governance Protocol',
    videoSrc: '/SecuBoost.mp4',
    verifiedDeliverables: [
      'Forensic code review certifying complete zero-telemetry compliance',
      'Contract SLA enforcement requiring contractors to patch security flaws at zero cost',
      'Full administrative sign-off and permanent client code sovereignty',
    ],
  },
];

const ExecutiveDossierHub: React.FC = () => {
  const [activeIdx, setActiveIdx] = useState(0);
  const [isPlaying, setIsPlaying] = useState(true);
  const videoRef = useRef<HTMLVideoElement>(null);

  const current = ADVISORY_CASES[activeIdx];

  const toggleVideo = () => {
    if (!videoRef.current) return;
    if (videoRef.current.paused) {
      videoRef.current.play();
      setIsPlaying(true);
    } else {
      videoRef.current.pause();
      setIsPlaying(false);
    }
  };

  return (
    <section id="case-studies" className="bg-black text-[#f5f5f7] py-28 sm:py-40 relative overflow-hidden scroll-mt-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Apple Monumental Header */}
        <div className="text-center max-w-4xl mx-auto mb-20 sm:mb-28">
          <span className="text-xs font-mono font-medium text-[#2997ff] uppercase tracking-widest block mb-4">
            Verified Advisory Track Record
          </span>
          <motion.h2
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-50px' }}
            transition={{ duration: 0.65, ease: [0.16, 1, 0.3, 1] }}
            className="font-display font-semibold text-4xl sm:text-6xl md:text-7xl lg:text-8xl tracking-[-0.04em] text-white leading-[0.98] mb-8"
          >
            Proof in production. <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-300 via-white to-slate-300">
              Governed with precision.
            </span>
          </motion.h2>
          <p className="text-lg sm:text-2xl text-[#86868b] font-medium leading-relaxed max-w-3xl mx-auto">
            Real enterprise interventions. Real capital protected. Explore three corporate mandates where SecuNova policed outside technology agencies, eliminated runaway scope drift, and delivered full client ownership.
          </p>
        </div>

        {/* Minimalist Advisory Mandate Switcher: Borderless, Open-Air */}
        <div className="flex flex-wrap items-center justify-center gap-3 sm:gap-4 mb-20">
          {ADVISORY_CASES.map((advisoryCase, idx) => (
            <button
              key={advisoryCase.id}
              onClick={() => {
                setActiveIdx(idx);
                setIsPlaying(true);
              }}
              className={`apple-press px-6 py-2.5 rounded-full text-xs sm:text-sm font-semibold transition-all duration-200 ${
                activeIdx === idx
                  ? 'bg-[#0071e3] text-white shadow-[0_2px_14px_rgba(0,113,227,0.45)]'
                  : 'text-slate-400 hover:text-white bg-white/[0.04]'
              }`}
            >
              {advisoryCase.mandateTitle}
            </button>
          ))}
        </div>

        {/* Open-Air Case Study Presentation: Focus On SecuNova Advisory Intervention */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
          
          {/* Left Column: Governed Production Artifact Preview */}
          <div className="lg:col-span-7 space-y-6">
            <div className="relative rounded-2xl sm:rounded-3xl overflow-hidden aspect-video bg-black shadow-[0_24px_80px_rgba(0,0,0,0.85)] group">
              <video
                ref={videoRef}
                key={current.videoSrc}
                src={current.videoSrc}
                autoPlay
                loop
                muted
                playsInline
                className="w-full h-full object-cover"
              />

              {/* Minimalist Play / Pause Overlay */}
              <button
                onClick={toggleVideo}
                className="absolute bottom-4 right-4 p-2.5 rounded-full bg-black/60 hover:bg-black/80 text-white backdrop-blur-md transition-all apple-press"
                aria-label={isPlaying ? 'Pause video preview' : 'Play video preview'}
              >
                {isPlaying ? <Pause className="h-4 w-4" /> : <Play className="h-4 w-4" />}
              </button>

              <div className="absolute top-4 left-4 px-3 py-1 rounded-full bg-black/60 backdrop-blur-md text-[11px] font-mono text-[#2997ff] font-semibold uppercase tracking-wider">
                Audited Production Artifact
              </div>
            </div>

            <div className="text-xs font-mono text-slate-400 flex items-center justify-between pt-1">
              <span>Governed Deliverable: <strong className="text-white font-medium">{current.governedDeliverableName}</strong></span>
              <span className="text-[#2997ff]">{current.clientIndustry}</span>
            </div>
          </div>

          {/* Right Column: Keynote Advisory Narrative & Measurable Business Impact */}
          <div className="lg:col-span-5 space-y-8">
            <div>
              <span className="text-xs font-mono font-medium text-[#2997ff] uppercase tracking-wider block mb-2">
                {current.discipline}
              </span>
              <motion.h3
                key={current.id}
                initial={{ opacity: 0, y: 14 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.45, ease: [0.16, 1, 0.3, 1] }}
                className="font-display font-semibold text-3xl sm:text-4xl text-white tracking-tight leading-tight"
              >
                {current.headline}
              </motion.h3>
            </div>

            <div className="space-y-4 text-sm font-sans leading-relaxed">
              <div>
                <strong className="text-xs font-mono uppercase text-slate-400 tracking-wider block mb-1">
                  The Client Risk:
                </strong>
                <p className="text-slate-300">
                  {current.challengeStory}
                </p>
              </div>

              <div>
                <strong className="text-xs font-mono uppercase text-[#2997ff] tracking-wider block mb-1">
                  SecuNova Fiduciary Intervention:
                </strong>
                <p className="text-slate-300">
                  {current.secuNovaIntervention}
                </p>
              </div>
            </div>


            {/* Verified Deliverables */}
            <div className="space-y-2.5 pt-4">
              <span className="text-xs font-mono font-semibold uppercase tracking-wider text-slate-400 block mb-2">
                SecuNova Supervised Deliverables:
              </span>
              {current.verifiedDeliverables.map((item, i) => (
                <div key={i} className="flex items-start gap-2.5 text-xs sm:text-sm text-slate-300 font-sans">
                  <CheckCircle2 className="h-4 w-4 text-[#2997ff] flex-shrink-0 mt-0.5" />
                  <span className="leading-relaxed">{item}</span>
                </div>
              ))}
            </div>

            <div className="pt-4">
              <a
                href="#consultation"
                className="inline-flex items-center gap-2 text-sm sm:text-base font-semibold text-[#2997ff] hover:text-[#52aaff] transition-colors apple-press group"
              >
                <span>Protect your technology roadmap with PMaaS</span>
                <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
              </a>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
};

export default ExecutiveDossierHub;
