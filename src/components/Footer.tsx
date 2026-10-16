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
import { Link } from 'react-router-dom';
import { Phone, Mail, Globe, Linkedin, ShieldCheck } from 'lucide-react';
import Logo from './Logo';

const Footer: React.FC = () => {
  return (
    <footer className="bg-[#05070a] text-white relative overflow-hidden border-t border-white/10">
      {/* Background Graphic */}
      <div className="absolute right-0 bottom-0 opacity-5 pointer-events-none transform translate-x-1/4 translate-y-1/4">
        <div className="w-[600px] h-[600px] border-[40px] border-white rounded-full"></div>
      </div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-16 lg:py-20 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 lg:gap-12 items-start">
          {/* Company Info */}
          <div>
            <div className="mb-6">
              <Logo theme="dark" size="md" />
            </div>
            <p className="text-sm text-slate-400 mb-6 leading-relaxed max-w-sm">
              SecuNova Inc. is an independent advisory and PMaaS governance practice in Calgary, Alberta. We help enterprise leaders audit, position, and govern digital market authority with zero agency conflicts.
            </p>
            
            <div className="flex items-center gap-3">
              <a 
                href="https://ca.linkedin.com/company/secunovac" 
                target="_blank"
                rel="noopener noreferrer"
                className="bg-white/10 hover:bg-secunova-blue p-2.5 rounded-lg transition-all duration-300 hover:scale-105 apple-press"
                aria-label="LinkedIn Profile"
              >
                <Linkedin className="h-5 w-5 text-white" />
              </a>
            </div>
          </div>

          {/* Strategic Consulting */}
          <div>
            <h3 className="h-11 flex items-center text-xs font-mono font-bold uppercase tracking-wider text-secunova-light mb-4">
              Strategic Advisory Practices
            </h3>
            <ul className="space-y-3 text-sm">
              <li>
                <a href="#services" className="text-slate-300 hover:text-white transition-colors apple-press">
                  1. Digital Presence Audit
                </a>
              </li>
              <li>
                <a href="#services" className="text-slate-400 hover:text-white transition-colors apple-press">
                  2. Strategic Storytelling
                </a>
              </li>
              <li>
                <a href="#services" className="text-slate-400 hover:text-white transition-colors apple-press">
                  3. AI Prompt &amp; Autonomous Workflows
                </a>
              </li>
              <li>
                <a href="#services" className="text-slate-400 hover:text-white transition-colors apple-press">
                  4. Local SEO &amp; Reputation
                </a>
              </li>
              <li>
                <a href="#services" className="text-slate-400 hover:text-white transition-colors apple-press">
                  5. Digital Project Governance (PMaaS)
                </a>
              </li>
            </ul>
          </div>

          {/* Governance & Benchmarks */}
          <div>
            <h3 className="h-11 flex items-center text-xs font-mono font-bold uppercase tracking-wider text-secunova-light mb-4">
              Governance &amp; Intelligence
            </h3>
            <ul className="space-y-3 text-sm">
              <li>
                <a href="#benchmarks" className="text-slate-300 hover:text-white transition-colors apple-press">
                  Performance Benchmarks
                </a>
              </li>
              <li>
                <a href="#governance" className="text-slate-400 hover:text-white transition-colors apple-press">
                  Fiduciary Governance Standard
                </a>
              </li>
              <li>
                <a href="#highlights" className="text-slate-400 hover:text-white transition-colors apple-press">
                  Institutional Highlights
                </a>
              </li>
              <li>
                <a href="#showcase" className="text-slate-400 hover:text-white transition-colors apple-press">
                  Advisory Architecture
                </a>
              </li>
              <li>
                <a href="#case-studies" className="text-slate-400 hover:text-white transition-colors apple-press">
                  Governed Track Record
                </a>
              </li>
            </ul>
          </div>

          {/* Institutional Trust */}
          <div>
            <h3 className="h-11 flex items-center text-xs font-mono font-bold uppercase tracking-wider text-secunova-light mb-4">
              Institutional Trust
            </h3>
            <ul className="space-y-3 text-sm">
              <li>
                <a href="#case-studies" className="text-slate-300 hover:text-white transition-colors apple-press">
                  Verified Executive Dossier
                </a>
              </li>
              <li>
                <a href="#consultation" className="text-slate-300 hover:text-white transition-colors apple-press font-semibold">
                  Initiate Strategic Briefing
                </a>
              </li>
              <li>
                <Link to="/privacy-terms" className="text-slate-400 hover:text-white transition-colors">
                  Privacy Policy &amp; Terms
                </Link>
              </li>
              <li>
                <a href="#about" className="text-slate-400 hover:text-white transition-colors apple-press">
                  About SecuNova &amp; Leadership
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Contact Strip */}
        <div className="border-t border-white/10 mt-12 lg:mt-16 pt-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="flex items-center">
              <div className="w-10 h-10 bg-white/5 border border-white/10 rounded-xl flex items-center justify-center mr-4 flex-shrink-0">
                <Globe className="h-5 w-5 text-secunova-light" />
              </div>
              <div>
                <p className="text-xs text-slate-400 uppercase tracking-wider mb-0.5 font-mono">Operating Model</p>
                <p className="text-sm text-white leading-relaxed">
                  Remote-First Operations<br />
                  Headquartered in Calgary, AB, Canada
                </p>
              </div>
            </div>
            <div className="flex items-center">
              <div className="w-10 h-10 bg-white/5 border border-white/10 rounded-xl flex items-center justify-center mr-4 flex-shrink-0">
                <Phone className="h-5 w-5 text-secunova-light" />
              </div>
              <div>
                <p className="text-xs text-slate-400 uppercase tracking-wider mb-0.5 font-mono">Direct Telephone</p>
                <a href="tel:403-401-1552" className="text-sm text-white hover:text-secunova-light transition-colors apple-press">
                  403-401-1552
                </a>
              </div>
            </div>
            <div className="flex items-center">
              <div className="w-10 h-10 bg-white/5 border border-white/10 rounded-xl flex items-center justify-center mr-4 flex-shrink-0">
                <Mail className="h-5 w-5 text-secunova-light" />
              </div>
              <div>
                <p className="text-xs text-slate-400 uppercase tracking-wider mb-0.5 font-mono">Executive Inquiries</p>
                <a href="mailto:hello@secunovainc.ca" className="text-sm text-white hover:text-secunova-light transition-colors apple-press">
                  hello@secunovainc.ca
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-white/10 mt-8 pt-8 flex flex-col md:flex-row justify-between items-center gap-4 text-xs text-slate-400">
          <div className="text-center md:text-left">
            <p className="text-xs text-slate-400 leading-relaxed">
              (c) {new Date().getFullYear()} SecuNova Inc. All rights reserved.
            </p>
            <p className="text-[11px] text-slate-500 font-mono mt-0.5">
              Business No. 714343225 | Corporation No. 2026915245
            </p>
          </div>

          {/* Architecture & Design Credit */}
          <a
            href="https://www.maxphaos.ca/"
            target="_blank"
            rel="noopener noreferrer"
            className="group flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/[0.03] hover:bg-white/[0.07] border border-white/10 hover:border-[#2997ff]/40 text-[11px] tracking-wide text-slate-400 hover:text-slate-200 transition-all duration-300 backdrop-blur-sm apple-press"
            title="MaxPhaos Marketing - Bespoke Digital Architecture"
          >
            <span className="inline-block w-1.5 h-1.5 rounded-full bg-[#2997ff] shadow-[0_0_8px_rgba(41,151,255,0.8)] group-hover:scale-125 transition-transform"></span>
            <span>Crafted by <span className="font-semibold text-white group-hover:text-[#64d2ff] tracking-wider transition-colors">MAXPHAOS MARKETING</span></span>
          </a>

          <div className="flex flex-wrap items-center justify-center gap-4 sm:gap-6 font-medium text-center">
            <a href="#overview" className="hover:text-white transition-colors apple-press">Overview</a>
            <Link to="/privacy-terms" className="hover:text-white transition-colors">Privacy &amp; Terms</Link>
            <a href="#consultation" className="hover:text-white transition-colors apple-press">Executive Contact</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;