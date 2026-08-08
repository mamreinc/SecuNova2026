/**
 * ============================================================================
 * PROPRIETARY CUSTOM ENGINEERING & DESIGN ARCHITECTURE
 * ----------------------------------------------------------------------------
 * All design, software architecture, UI/UX components, and source code are
 * 100% custom-engineered and designed exclusively by SecuNova.
 *
 * CORE ARCHITECTURAL ETHOS:
 * - 100% Bespoke Code: Built strictly to client specifications from scratch.
 * - Zero Pre-Made Templates: No generic agency starters or off-the-shelf themes.
 * - Senior-Led AI-Augmented Workflows (Vibe Coding): 14-day execution cycles
 *   engineered for sub-second performance (99+ Lighthouse Core Web Vitals).
 * - Full IP & Repository Handoff: 100% client asset and codebase ownership.
 *
 * Copyright (c) SecuNova. All rights reserved.
 * ============================================================================
 */
import { Link } from 'react-router-dom';
import { ArrowRight, Phone } from 'lucide-react';

/* ========================================
   START: CTA SECTION COMPONENT
   Reusable call-to-action section for page endings
   ======================================== */
interface CtaSectionProps {
  title?: string;
  subtitle?: string;
  ctaText?: string;
  ctaLink?: string;
}

const CtaSection = ({
  title,
  subtitle,
  ctaText = 'Book Your Free Strategy Call',
  ctaLink = '/contact'
}: CtaSectionProps) => {
  const headingTitle = title ?? 'Get Your Free';
  const headingSubtitle = subtitle ?? 'An honest assessment of where your organization stands and the fastest path forward. No pressure, no obligation, just senior-level guidance from the start.';
  return (
    <section className="relative min-h-[50vh] overflow-hidden flex items-center justify-center py-16 md:py-24">
      <div className="absolute inset-0">
        <img
          src="https://images.pexels.com/photos/3184338/pexels-photo-3184338.jpeg?auto=compress&cs=tinysrgb&w=1920"
          alt="Professional IT Consultation"
          className="w-full h-full object-cover"
          loading="lazy"
          decoding="async"
        />
        <div className="absolute inset-0 bg-gradient-to-br from-secunova-dark/95 via-secunova-dark/90 to-secunova-blue/85"></div>
      </div>

      <div className="container mx-auto px-4 relative z-10 w-full">
        <div className="max-w-6xl mx-auto w-full">
          <div className="text-center text-white">
            <div className="inline-flex items-center bg-white/10 backdrop-blur-sm border border-white/20 px-6 py-3 rounded-full text-sm font-medium mb-6 text-white">
              <Phone className="h-4 w-4 mr-2 text-white" />
              Ready to Get Started?
            </div>
            
            <h2 className="text-3xl md:text-5xl font-bold mb-5 leading-tight text-white">
              {headingTitle}
              {title === undefined && (
                <span className="block text-white">Strategy Call</span>
              )}
            </h2>
            
            <p className="text-xl text-white max-w-2xl mx-auto mb-8 leading-relaxed">
              {headingSubtitle}
            </p>

            <div className="flex flex-col sm:flex-row justify-center gap-4 sm:gap-6">
              <Link
                to={ctaLink}
                className="btn btn-gradient btn-lg text-white"
              >
                <span className="relative flex items-center justify-center text-white">
                  <span>{ctaText}</span>
                  <ArrowRight className="ml-2 h-5 w-5 text-white group-hover:translate-x-1 transition-transform duration-300" />
                </span>
              </Link>
              
              <a
                href="tel:403-401-1552"
                className="btn btn-outline-light btn-lg flex items-center justify-center gap-2 group border-white/30 hover:border-white text-white hover:bg-white/10 transition-all duration-300"
              >
                <Phone className="h-5 w-5 text-white group-hover:scale-110 transition-transform" />
                <span className="text-white">Call 403-401-1552</span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

/* ========================================
   END: CTA SECTION COMPONENT
   ======================================== */
export default CtaSection;