/*
========================================
FOOTER COMPONENT
Custom Built by SecuNova Inc.
========================================

Site footer with company information and navigation.

Features:
- Company branding and description
- Service links and navigation
- Contact information
- Social media links
- Cybersecurity themed design elements

Built from scratch for professional presentation.
========================================
*/

import React from 'react';
import { Link } from 'react-router-dom';
import { Mail, Phone, MapPin, Linkedin, Shield, Lock } from 'lucide-react';
import Logo from './Logo';

const Footer = () => {
  return (
    <footer className="bg-gradient-to-b from-secunova-dark to-secunova-dark text-white relative overflow-hidden">
      <div className="absolute inset-0 opacity-5 pointer-events-none">
        <div className="absolute top-0 right-0 w-96 h-96">
          <Shield className="h-full w-full text-secunova-blue" />
        </div>
        <div className="absolute bottom-0 left-0 w-72 h-72 opacity-30">
          <Lock className="h-full w-full text-secunova-blue" />
        </div>
        
        <div className="absolute inset-0 text-xs opacity-5 overflow-hidden">
          {Array(100).fill(0).map((_, i) => (
            <div key={i} style={{position: 'absolute', top: `${Math.random() * 100}%`, left: `${Math.random() * 100}%`}}>
              {Math.random() > 0.5 ? '1' : '0'}
            </div>
          ))}
        </div>
      </div>
      
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-16 lg:py-20 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 lg:gap-12 items-start">
          {/* Company Info */}
          <div>
            <div className="mb-6">
              <Logo theme="dark" size="md" />
            </div>
            <p className="text-sm text-white/90 mb-6 leading-relaxed max-w-sm">
              A Calgary-based consulting & technology firm helping organizations navigate digital change and take ownership of their digital infrastructure.
            </p>
            
            <div className="flex flex-wrap gap-2">
              <a 
                href="https://ca.linkedin.com/company/secunovac" 
                target="_blank"
                rel="noopener noreferrer"
                className="bg-white/10 hover:bg-secunova-blue p-2.5 rounded-lg transition-all duration-300 hover:scale-110 touch-target"
                aria-label="LinkedIn"
              >
                <Linkedin className="h-5 w-5 text-white" />
              </a>
            </div>
          </div>

          {/* Strategic Consulting */}
          <div>
            <h3 className="h-11 flex items-center text-sm font-semibold uppercase tracking-wider text-white mb-6">
              Strategic Consulting
            </h3>
            <ul className="space-y-3">
              <li>
                <Link to="/services#strategic-consulting" className="text-sm text-white hover:text-secunova-light transition-colors">
                  Digital Transformation Consulting
                </Link>
              </li>
              <li>
                <Link to="/services#strategic-consulting" className="text-sm text-white hover:text-secunova-light transition-colors">
                  Executive Leadership & Innovation
                </Link>
              </li>
              <li>
                <Link to="/services/digital-project-management" className="text-sm text-white hover:text-secunova-light transition-colors">
                  Digital Project Management
                </Link>
              </li>
            </ul>
          </div>

          {/* Digital Engineering */}
          <div>
            <h3 className="h-11 flex items-center text-sm font-semibold uppercase tracking-wider text-white mb-6">
              Digital Engineering
            </h3>
            <ul className="space-y-3">
              <li>
                <Link to="/services/web-development" className="text-sm text-white hover:text-secunova-light transition-colors">
                  Custom Web App Development
                </Link>
              </li>
              <li>
                <Link to="/services/ui-ux-design" className="text-sm text-white hover:text-secunova-light transition-colors">
                  UI/UX Redesigns
                </Link>
              </li>
              <li>
                <Link to="/services/seo-marketing" className="text-sm text-white hover:text-secunova-light transition-colors">
                  B2B Content & SEO Strategy
                </Link>
              </li>
              <li>
                <Link to="/services#digital-engineering" className="text-sm text-white hover:text-secunova-light transition-colors">
                  Web Maintenance & Performance
                </Link>
              </li>
              <li>
                <Link to="/services#digital-engineering" className="text-sm text-white hover:text-secunova-light transition-colors">
                  Digital Architecture Audits
                </Link>
              </li>
            </ul>
          </div>

          {/* Company */}
          <div>
            <h3 className="h-11 flex items-center text-sm font-semibold uppercase tracking-wider text-white mb-6">
              Company
            </h3>
            <ul className="space-y-3">
              <li>
                <Link to="/" className="text-sm text-white hover:text-secunova-light transition-colors">
                  Home
                </Link>
              </li>
              <li>
                <Link to="/about" className="text-sm text-white hover:text-secunova-light transition-colors">
                  About Us
                </Link>
              </li>
              <li>
                <Link to="/about/our-work" className="text-sm text-white hover:text-secunova-light transition-colors">
                  Our Work
                </Link>
              </li>
              <li>
                <Link to="/contact" className="text-sm text-white hover:text-secunova-light transition-colors">
                  Contact
                </Link>
              </li>
              <li>
                <Link to="/faq" className="text-sm text-white hover:text-secunova-light transition-colors">
                  FAQ
                </Link>
              </li>
            </ul>
          </div>
        </div>

        {/* Contact Strip */}
        <div className="border-t border-gray-800 mt-12 lg:mt-16 pt-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="flex items-start">
              <div className="w-10 h-10 bg-white/10 rounded-lg flex items-center justify-center mr-4 flex-shrink-0">
                <MapPin className="h-5 w-5 text-secunova-light" />
              </div>
              <div>
                <p className="text-xs text-blue-200 uppercase tracking-wider mb-1 font-medium">Mailbox</p>
                <p className="text-sm text-white leading-relaxed">
                  1122 3 St SE Ste 1906<br />
                  Calgary, AB T2G 1H7, CA
                </p>
              </div>
            </div>
            <div className="flex items-start">
              <div className="w-10 h-10 bg-white/10 rounded-lg flex items-center justify-center mr-4 flex-shrink-0">
                <Phone className="h-5 w-5 text-secunova-light" />
              </div>
              <div>
                <p className="text-xs text-blue-200 uppercase tracking-wider mb-1 font-medium">Call Us</p>
                <a href="tel:403-401-1552" className="text-sm text-white hover:text-secunova-light transition-colors">
                  403-401-1552
                </a>
              </div>
            </div>
            <div className="flex items-start">
              <div className="w-10 h-10 bg-white/10 rounded-lg flex items-center justify-center mr-4 flex-shrink-0">
                <Mail className="h-5 w-5 text-secunova-light" />
              </div>
              <div>
                <p className="text-xs text-blue-200 uppercase tracking-wider mb-1 font-medium">Email Us</p>
                <a href="mailto:hello@secunovainc.com" className="text-sm text-white hover:text-secunova-light transition-colors break-all">
                  hello@secunovainc.com
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="border-t border-gray-800 mt-8 pt-6">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4">
            <p className="text-xs text-white/90 text-center md:text-left">
              © {new Date().getFullYear()} SecuNova Inc. All rights reserved.
            </p>
            <div className="flex flex-wrap justify-center gap-4 md:gap-6">
              <Link to="/privacy-terms" className="text-xs text-white hover:text-secunova-light transition-colors">
                Privacy Policy
              </Link>
              <Link to="/privacy-terms" className="text-xs text-white hover:text-secunova-light transition-colors">
                Terms of Service
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;