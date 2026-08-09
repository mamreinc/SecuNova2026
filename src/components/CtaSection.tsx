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

import { Link } from 'react-router-dom';
import { ArrowRight, Phone, ShieldCheck } from 'lucide-react';
import OptimizedImage from './OptimizedImage';

interface CtaSectionProps {
  title?: string;
  subtitle?: string;
  ctaText?: string;
  ctaLink?: string;
}

const CtaSection = ({
  title,
  subtitle,
  ctaText = 'Schedule Executive Consultation',
  ctaLink = '/contact'
}: CtaSectionProps) => {
  const headingTitle = title ?? 'Elevate Your Enterprise Systems & Governance';
  const headingSubtitle = subtitle ?? 'Partner with senior technology advisors to audit infrastructure, de-risk cloud architecture, and execute digital transformation with institutional discipline.';
  
  return (
    <section className="secunova-section secunova-section--dark relative min-h-[45vh] overflow-hidden flex items-center justify-center">
      <div className="absolute inset-0">
        <OptimizedImage
          src="/images/strategic_hero_bg.png"
          alt="Professional Executive IT Consultation"
          className="w-full h-full object-cover opacity-30"
          priority={false}
        />
        <div className="absolute inset-0 bg-gradient-to-br from-secunova-dark/95 via-secunova-dark/90 to-secunova-blue/85"></div>
      </div>

      <div className="container mx-auto px-4 relative z-10 w-full">
        <div className="max-w-4xl mx-auto w-full">
          <div className="text-center text-white">
            <div className="inline-flex items-center bg-white/10 backdrop-blur-sm border border-white/20 px-5 py-2 rounded-full text-xs font-semibold uppercase tracking-wider mb-6 text-secunova-light">
              <ShieldCheck className="h-4 w-4 mr-2 text-secunova-light" />
              Senior Advisory &amp; Enterprise Governance
            </div>
            
            <h2 className="text-3xl md:text-5xl font-bold mb-6 leading-tight text-white tracking-tight">
              {headingTitle}
            </h2>
            
            <p className="text-lg md:text-xl text-blue-100/90 max-w-2xl mx-auto mb-10 leading-relaxed font-normal">
              {headingSubtitle}
            </p>

            <div className="flex flex-col sm:flex-row justify-center items-center gap-4 sm:gap-6">
              <Link
                to={ctaLink}
                className="btn btn-gradient btn-lg text-white w-full sm:w-auto"
              >
                <span className="relative flex items-center justify-center text-white">
                  <span>{ctaText}</span>
                  <ArrowRight className="ml-2 h-5 w-5 text-white group-hover:translate-x-1 transition-transform duration-300" />
                </span>
              </Link>
              
              <a
                href="tel:403-401-1552"
                className="btn btn-outline-light btn-lg flex items-center justify-center gap-2 group border-white/30 hover:border-white text-white hover:bg-white/10 transition-all duration-300 w-full sm:w-auto"
              >
                <Phone className="h-4 w-4 text-white group-hover:scale-110 transition-transform" />
                <span className="text-white">Call 403-401-1552</span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CtaSection;