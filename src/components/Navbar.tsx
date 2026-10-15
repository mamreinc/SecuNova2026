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
import { Menu, X, Users, Calendar } from 'lucide-react';
import Logo from './Logo';

interface NavItem {
  name: string;
  href: string;
}

const NAV_ITEMS: NavItem[] = [
  { name: 'Overview', href: '#overview' },
  { name: 'What We Deliver', href: '#services' },
  { name: 'Track Record', href: '#case-studies' },
  { name: 'Leadership', href: '#about' },
];

const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => {
      document.body.style.overflow = '';
    };
  }, [isOpen]);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 40);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header className="fixed w-full z-50 transition-all duration-300 backdrop-blur-2xl bg-[#000000cc] border-b border-white/10">
      <nav className="bg-transparent transition-all duration-300">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16 sm:h-20 gap-4 sm:gap-6">
            
            {/* Left: Brand Logo */}
            <div className="flex items-center flex-shrink-0 pt-[2px]">
              <a href="#overview" className="apple-press">
                <Logo size="md" theme="dark" />
              </a>
            </div>

            {/* Center: Single-Page Navigation Anchors */}
            <div className="hidden lg:flex items-center justify-center flex-1 space-x-8 xl:space-x-12 min-w-0">
              {NAV_ITEMS.map((item) => (
                <a
                  key={item.name}
                  href={item.href}
                  className="text-xs xl:text-sm font-semibold text-slate-300 hover:text-white transition-colors py-2 whitespace-nowrap apple-press"
                >
                  {item.name}
                </a>
              ))}
            </div>

            {/* Right: Primary Actions Container */}
            <div className="hidden lg:flex items-center flex-shrink-0 space-x-5">
              <a
                href="#about"
                className="flex items-center text-xs font-semibold text-slate-300 hover:text-white transition-colors apple-press"
              >
                <Users className="h-3.5 w-3.5 mr-1.5 text-secunova-light" />
                About Us
              </a>
              <a
                href="#consultation"
                className="px-5 py-2 rounded-full bg-[#0071e3] hover:bg-[#0077ed] text-white font-semibold text-xs tracking-tight shadow-md transition-all apple-press flex items-center"
              >
                <Calendar className="h-3.5 w-3.5 mr-1.5" />
                Book Consultation
              </a>
            </div>

            {/* Mobile Hamburger Button */}
            <div className="flex items-center lg:hidden">
              <button
                onClick={toggleMenu}
                className="p-2 rounded-md text-white hover:text-secunova-light hover:bg-white/10 focus:outline-none touch-target flex items-center justify-center apple-press"
                aria-label="Toggle navigation menu"
                aria-expanded={isOpen}
                aria-controls="mobile-navigation"
              >
                {isOpen ? <X className="h-6 w-6 text-white" /> : <Menu className="h-6 w-6 text-white" />}
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Navigation Drawer */}
        {isOpen && (
          <div
            id="mobile-navigation"
            className="lg:hidden mobile-menu border-t border-white/10 bg-[#000000f0] backdrop-blur-2xl px-5 pt-4 pb-20 space-y-3 max-h-[calc(100dvh-4rem)] overflow-y-auto overscroll-contain shadow-2xl text-white"
            style={{ WebkitOverflowScrolling: 'touch' }}
          >
            {NAV_ITEMS.map((item) => (
              <div key={item.name} className="py-2 border-b border-white/10 last:border-b-0">
                <a
                  href={item.href}
                  className="flex items-center text-base font-bold text-white py-2 hover:text-secunova-light transition-colors apple-press"
                  onClick={() => setIsOpen(false)}
                >
                  {item.name}
                </a>
              </div>
            ))}
            
            <div className="pt-4 border-t border-white/10 space-y-3">
              <a
                href="#about"
                className="w-full flex items-center justify-center text-xs font-semibold text-slate-300 hover:text-white py-3 rounded-xl border border-white/10 bg-white/5 apple-press min-h-[44px]"
                onClick={() => setIsOpen(false)}
              >
                <Users className="h-4 w-4 mr-2 text-secunova-light" />
                About Us
              </a>
              <a
                href="#consultation"
                className="btn btn-gradient w-full justify-center text-xs uppercase tracking-wider font-bold min-h-[44px] flex items-center shadow-md apple-press"
                onClick={() => setIsOpen(false)}
              >
                <Calendar className="h-4 w-4 mr-2" />
                Book Consultation
              </a>
            </div>
          </div>
        )}
      </nav>
    </header>
  );
};

export default Navbar;