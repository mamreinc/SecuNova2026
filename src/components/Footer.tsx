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
import { Phone, Mail, MapPin, Linkedin, Lock, ShieldCheck } from 'lucide-react';
import Logo from './Logo';

const Footer = () => {
  return (
    <footer className="bg-secunova-dark text-white relative overflow-hidden">
      {/* Background Graphic */}
      <div className="absolute right-0 bottom-0 opacity-5 pointer-events-none transform translate-x-1/4 translate-y-1/4">
        <div className="w-[600px] h-[600px] border-[40px] border-white rounded-full"></div>
      </div>
      <div className="absolute left-1/4 top-0 opacity-5 pointer-events-none">
        <div className="w-96 h-96">
          <Lock className="h-full w-full text-secunova-blue" />
        </div>
      </div>
      
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-16 lg:py-20 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 lg:gap-12 items-start">
          {/* Company Info */}
          <div>
            <div className="mb-6">
              <Logo theme="dark" size="md" />
            </div>
            <p className="text-sm text-blue-100/90 mb-6 leading-relaxed max-w-sm">
              SecuNova Inc. is a Calgary-based boutique IT advisory firm delivering executive strategic consulting, PMaaS execution, cybersecurity risk governance, and high-performance digital systems across North America.
            </p>
            
            <div className="flex items-center gap-3">
              <a 
                href="https://ca.linkedin.com/company/secunovac" 
                target="_blank"
                rel="noopener noreferrer"
                className="bg-white/10 hover:bg-secunova-blue p-2.5 rounded-lg transition-all duration-300 hover:scale-105 touch-target"
                aria-label="LinkedIn Profile"
              >
                <Linkedin className="h-5 w-5 text-white" />
              </a>
              <div className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-md bg-white/5 border border-white/10 text-xs text-secunova-light">
                <ShieldCheck className="h-3.5 w-3.5" />
                <span>Enterprise Governance</span>
              </div>
            </div>
          </div>

          {/* Strategic Advisory */}
          <div>
            <h3 className="h-11 flex items-center text-sm font-semibold uppercase tracking-wider text-white mb-6">
              Strategic Advisory
            </h3>
            <ul className="space-y-3">
              <li>
                <Link to="/services/strategic-advisory-pmaas" className="text-sm text-white hover:text-secunova-light transition-colors">
                  Executive Technology Advisory
                </Link>
              </li>
              <li>
                <Link to="/services/strategic-advisory-pmaas" className="text-sm text-white/70 hover:text-secunova-light transition-colors">
                  Digital Transformation Roadmaps
                </Link>
              </li>
              <li>
                <Link to="/services/enterprise-it-security-audits" className="text-sm text-white/70 hover:text-secunova-light transition-colors">
                  Cybersecurity &amp; Risk Mitigation
                </Link>
              </li>
              <li>
                <Link to="/services/strategic-advisory-pmaas" className="text-sm text-white/70 hover:text-secunova-light transition-colors">
                  Enterprise Cloud Architecture
                </Link>
              </li>
            </ul>
          </div>

          {/* Project Management as a Service */}
          <div>
            <h3 className="h-11 flex items-center text-sm font-semibold uppercase tracking-wider text-white mb-6">
              PMaaS &amp; Delivery
            </h3>
            <ul className="space-y-3">
              <li>
                <Link to="/services/strategic-advisory-pmaas" className="text-sm text-white hover:text-secunova-light transition-colors">
                  Senior Project Leadership
                </Link>
              </li>
              <li>
                <Link to="/services/strategic-advisory-pmaas" className="text-sm text-white/70 hover:text-secunova-light transition-colors">
                  Budget &amp; Capital Protection
                </Link>
              </li>
              <li>
                <Link to="/services/enterprise-it-security-audits" className="text-sm text-white/70 hover:text-secunova-light transition-colors">
                  Governance &amp; Quality Assurance
                </Link>
              </li>
              <li>
                <Link to="/services/strategic-advisory-pmaas" className="text-sm text-white/70 hover:text-secunova-light transition-colors">
                  Agile &amp; Waterfall Orchestration
                </Link>
              </li>
            </ul>
          </div>

          {/* Organization & Track Record */}
          <div>
            <h3 className="h-11 flex items-center text-sm font-semibold uppercase tracking-wider text-white mb-6">
              Organization
            </h3>
            <ul className="space-y-3">
              <li>
                <Link to="/about" className="text-sm text-white hover:text-secunova-light transition-colors">
                  About SecuNova Inc.
                </Link>
              </li>
              <li>
                <Link to="/about/our-work" className="text-sm text-white hover:text-secunova-light transition-colors">
                  Supervised Track Record
                </Link>
              </li>
              <li>
                <Link to="/contact" className="text-sm text-white hover:text-secunova-light transition-colors">
                  Executive Consultation Briefing
                </Link>
              </li>
              <li>
                <Link to="/faq" className="text-sm text-white hover:text-secunova-light transition-colors">
                  Enterprise FAQ
                </Link>
              </li>
              <li>
                <Link to="/join-us" className="text-sm text-white hover:text-secunova-light transition-colors">
                  Careers &amp; Partners
                </Link>
              </li>
            </ul>
          </div>
        </div>

        {/* Contact Strip */}
        <div className="border-t border-gray-800 mt-12 lg:mt-16 pt-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="flex items-center">
              <div className="w-10 h-10 bg-white/10 rounded-lg flex items-center justify-center mr-4 flex-shrink-0">
                <MapPin className="h-5 w-5 text-secunova-light" />
              </div>
              <div>
                <p className="text-xs text-blue-200 uppercase tracking-wider mb-1 font-medium">Mailing Address</p>
                <p className="text-sm text-white leading-relaxed">
                  #270, 1122 3 St SE Ste 1906<br />
                  Calgary, AB T2G 0E7, Canada
                </p>
              </div>
            </div>
            <div className="flex items-center">
              <div className="w-10 h-10 bg-white/10 rounded-lg flex items-center justify-center mr-4 flex-shrink-0">
                <Phone className="h-5 w-5 text-secunova-light" />
              </div>
              <div>
                <p className="text-xs text-blue-200 uppercase tracking-wider mb-1 font-medium">Direct Telephone</p>
                <a href="tel:403-401-1552" className="text-sm text-white hover:text-secunova-light transition-colors">
                  403-401-1552
                </a>
              </div>
            </div>
            <div className="flex items-center">
              <div className="w-10 h-10 bg-white/10 rounded-lg flex items-center justify-center mr-4 flex-shrink-0">
                <Mail className="h-5 w-5 text-secunova-light" />
              </div>
              <div>
                <p className="text-xs text-blue-200 uppercase tracking-wider mb-1 font-medium">Executive Inquiries</p>
                <a href="mailto:hello@secunovainc.com" className="text-sm text-white hover:text-secunova-light transition-colors">
                  hello@secunovainc.com
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-gray-800 mt-8 pt-8 flex flex-col sm:flex-row justify-between items-center text-xs text-blue-200">
          <p className="text-xs text-blue-200 leading-relaxed text-center sm:text-left">
            © {new Date().getFullYear()} SecuNova Inc. All rights reserved.<br />
            <span className="text-blue-200/70">Business No. 714343225 · Corporation No. 2026915245</span>
          </p>
          <div className="flex items-center space-x-6 mt-4 sm:mt-0">
            <Link to="/join-us" className="hover:text-white transition-colors">Partners</Link>
            <Link to="/privacy-terms" className="hover:text-white transition-colors">Privacy &amp; Terms</Link>
            <Link to="/contact" className="hover:text-white transition-colors">Executive Contact</Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;