/*
========================================
CALL-TO-ACTION SECTION COMPONENT
Custom Built by SecuNova Inc.
========================================

Reusable CTA section for encouraging user engagement.

Features:
- Gradient background with animations
- Multiple contact methods
- Responsive design
- Hover effects and transitions

Built from scratch for maximum conversion.
========================================
*/

import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Phone } from 'lucide-react';

/* ========================================
   START: CTA SECTION COMPONENT
   Reusable call-to-action section for page endings
   ======================================== */
const CtaSection = () => {
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
              Get Your Free
              <span className="block text-white">Strategy Call</span>
            </h2>
            
            <p className="text-xl text-white max-w-2xl mx-auto mb-8 leading-relaxed">
              An honest assessment of where your organization stands and the fastest path forward.
              No pressure, no obligation, just senior-level guidance from the start.
            </p>

            <div className="flex flex-col sm:flex-row justify-center gap-4 sm:gap-6">
              <Link
                to="/contact"
                className="btn btn-gradient btn-lg text-white"
              >
                <span className="relative flex items-center justify-center text-white">
                  <span>Book Your Free Strategy Call</span>
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