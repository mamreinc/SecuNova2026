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
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, User, Mail, Phone, ChevronDown, Home, LayoutGrid, Users, PhoneCall, Globe, Crown, RefreshCw, GraduationCap, PenTool, FileText, ClipboardCheck, Shield, Code, Cpu, Target, Calendar } from 'lucide-react';
import Logo from './Logo';

interface NavDropdownItem {
  name: string;
  path: string;
  hasNestedDropdown?: boolean;
  nestedItems?: Array<{ name: string; path: string }>;
}

interface NavMegaCategory {
  category: string;
  icon: React.ReactNode;
  items: Array<{ name: string; path: string; icon?: React.ReactNode }>;
}

interface NavLink {
  name: string;
  path: string;
  icon: React.ReactNode;
  hasDropdown?: boolean;
  isMegaMenu?: boolean;
  megaMenuItems?: NavMegaCategory[];
  dropdownItems?: NavDropdownItem[];
}

const TopBar = () => {  
  return (
    <div className="bg-gradient-to-r from-secunova-dark to-[#16233B] text-white py-2 hidden lg:block border-b border-white/10">
      <div className="container mx-auto px-4 flex justify-between items-center text-xs">
        <div className="flex items-center space-x-6">
          <a href="mailto:hello@secunovainc.com" className="flex items-center text-slate-300 hover:text-secunova-light transition-colors">
            <Mail className="h-3.5 w-3.5 mr-2 text-secunova-light" />
            hello@secunovainc.com
          </a>
          <a href="tel:403-401-1552" className="flex items-center text-slate-300 hover:text-secunova-light transition-colors">
            <Phone className="h-3.5 w-3.5 mr-1.5 text-secunova-light" />
            403-401-1552
          </a>
        </div>

        <div className="flex items-center space-x-6">
          <Link to="/login" className="flex items-center text-slate-300 hover:text-secunova-light transition-colors font-medium">
            <User className="h-3.5 w-3.5 mr-1.5 text-secunova-light" />
            Client Portal
          </Link>
        </div>
      </div>
    </div>
  );
};

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isAboutDropdownOpen, setIsAboutDropdownOpen] = useState(false);
  const [isContactDropdownOpen, setIsContactDropdownOpen] = useState(false);
  const [isServicesDropdownOpen, setIsServicesDropdownOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const location = useLocation();

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY;
      if (scrollPosition > 40) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    setIsOpen(false);
    setIsAboutDropdownOpen(false);
    setIsContactDropdownOpen(false);
    setIsServicesDropdownOpen(false);
  }, [location.pathname]);

  const navLinks: NavLink[] = [
    { name: 'Home', path: '/', icon: <Home className="h-4 w-4 mr-1.5" /> },
    { 
      name: 'Services',
      path: '/services',
      icon: <LayoutGrid className="h-4 w-4 mr-1.5" />,
      hasDropdown: true,
      isMegaMenu: true,
      megaMenuItems: [
        {
          category: 'Strategic Advisory & Digital Transformation',
          icon: <Crown className="h-5 w-5 text-secunova-blue" />,
          items: [
            { name: 'Strategic Advisory & Business Planning', path: '/services/strategic-advisory-pmaas', icon: <ClipboardCheck className="h-4 w-4" /> },
            { name: 'Digital Transformation & Process Optimization', path: '/services/strategic-advisory-pmaas', icon: <RefreshCw className="h-4 w-4" /> },
            { name: 'Cybersecurity & Risk Management', path: '/services/strategic-advisory-pmaas', icon: <Shield className="h-4 w-4" /> },
            { name: 'Customer Experience & Digital Solutions', path: '/services/strategic-advisory-pmaas', icon: <Globe className="h-4 w-4" /> }
          ]
        },
        {
          category: 'Project Management as a Service (PMaaS)',
          icon: <ClipboardCheck className="h-5 w-5 text-secunova-light" />,
          items: [
            { name: 'Project Leadership & Delivery', path: '/services/strategic-advisory-pmaas', icon: <Users className="h-4 w-4" /> },
            { name: 'Resource Allocation', path: '/services/strategic-advisory-pmaas', icon: <GraduationCap className="h-4 w-4" /> },
            { name: 'Budget & Cost Control', path: '/services/strategic-advisory-pmaas', icon: <PenTool className="h-4 w-4" /> },
            { name: 'Risk Management', path: '/services/strategic-advisory-pmaas', icon: <Shield className="h-4 w-4" /> },
            { name: 'Quality Assurance', path: '/services/strategic-advisory-pmaas', icon: <FileText className="h-4 w-4" /> },
            { name: 'Governance & Reporting', path: '/services/strategic-advisory-pmaas', icon: <Target className="h-4 w-4" /> }
          ]
        },
        {
          category: 'Track Record of Supervised Delivery',
          icon: <Code className="h-5 w-5 text-secunova-blue" />,
          items: [
            { name: 'Track Record Overview', path: '/about/our-work', icon: <Code className="h-4 w-4" /> },
            { name: 'Nova macOS AI Agent', path: '/our-work/nova', icon: <Cpu className="h-4 w-4" /> },
            { name: 'Career OS Automation Engine', path: '/our-work/career-os', icon: <FileText className="h-4 w-4" /> },
            { name: 'SecuBoost Native Security Suite', path: '/our-work/secuboost', icon: <Shield className="h-4 w-4" /> }
          ]
        }
      ]
    },
    { 
      name: 'About', 
      path: '/about',
      icon: <Users className="h-4 w-4 mr-1.5" />,
      hasDropdown: true,
      dropdownItems: [
        { name: 'About SecuNova Inc.', path: '/about' },
        { name: 'Track Record & Supervised Delivery', path: '/about/our-work' },
        { name: 'Investor & Partner Opportunities', path: '/join-us' }
      ]
    },
    { 
      name: 'Contact', 
      path: '/contact',
      icon: <PhoneCall className="h-4 w-4 mr-1.5" />,
      hasDropdown: true,
      dropdownItems: [
        { name: 'Executive Consultation Briefing', path: '/contact' },
        { name: 'Frequently Asked Questions', path: '/faq' }
      ]
    },
  ];

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      const target = event.target as HTMLElement;
      if (target.closest('.mobile-menu') || target.closest('nav')) {
        return;
      }
      setIsAboutDropdownOpen(false);
      setIsContactDropdownOpen(false);
      setIsServicesDropdownOpen(false);
    };

    if (isOpen) {
      document.addEventListener('click', handleClickOutside);
      return () => document.removeEventListener('click', handleClickOutside);
    }
  }, [isOpen]);

  return (
    <header className={`fixed w-full z-50 transition-all duration-300 ${isScrolled ? 'backdrop-blur-xl bg-white/95 shadow-lg' : 'bg-white'}`}>
      <TopBar />
      
      <nav className="bg-white shadow-sm border-b border-gray-100 transition-all duration-300">
        <div className="container mx-auto px-4 sm:px-6">
          <div className="flex justify-between items-center h-16 sm:h-20 gap-4 sm:gap-6">
            {/* Left: Brand Logo Container */}
            <div className="flex items-center flex-shrink-0">
              <Logo size="md" theme="light" />
            </div>

            {/* Center: Navigation Links Flexbox Container */}
            <div className="hidden lg:flex items-center justify-center flex-1 space-x-6 xl:space-x-8 min-w-0">
              {navLinks.map((link) => (
                <div key={link.name} className="relative flex-shrink-0">
                  {link.hasDropdown ? (
                    <div
                      className="relative py-2"
                      onMouseEnter={() => { 
                        if (link.name === 'About') setIsAboutDropdownOpen(true);
                        if (link.name === 'Contact') setIsContactDropdownOpen(true);
                        if (link.name === 'Services') setIsServicesDropdownOpen(true);
                      }}
                      onMouseLeave={() => { 
                        if (link.name === 'About') setIsAboutDropdownOpen(false);
                        if (link.name === 'Contact') setIsContactDropdownOpen(false);
                        if (link.name === 'Services') setIsServicesDropdownOpen(false);
                      }}
                    >
                      <button
                        className={`flex items-center text-xs xl:text-sm font-semibold transition-colors hover:text-secunova-blue whitespace-nowrap ${
                          location.pathname === link.path ||
                           (link.name === 'Services' && location.pathname.startsWith('/services')) ||
                           (link.name === 'Contact' && (location.pathname === '/contact' || location.pathname === '/faq'))
                            ? 'text-secunova-blue font-bold'
                            : 'text-secunova-dark'
                        }`}
                      >
                        {link.icon}
                        {link.name}
                        <ChevronDown className={`ml-1 h-3.5 w-3.5 transition-transform duration-200 ${
                          ((link.name === 'About' && isAboutDropdownOpen) || (link.name === 'Contact' && isContactDropdownOpen) || (link.name === 'Services' && isServicesDropdownOpen)) ? 'rotate-180 text-secunova-blue' : 'text-gray-400'
                        }`} />
                      </button>
                      
                      {link.isMegaMenu && link.megaMenuItems ? (
                        <div className={`absolute top-full left-1/2 transform -translate-x-1/2 mt-1 w-[92vw] max-w-5xl bg-white border border-gray-200/90 rounded-2xl shadow-2xl transition-all duration-200 z-50 overflow-hidden ${
                          (link.name === 'Services' && isServicesDropdownOpen)
                            ? 'opacity-100 visible translate-y-0' 
                            : 'opacity-0 invisible -translate-y-2'
                        }`}>
                          <div className="p-6 sm:p-8">
                            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                              {link.megaMenuItems.map((category, categoryIndex) => (
                                <div key={categoryIndex} className="space-y-4">
                                  <div className="pb-3 border-b border-gray-100 flex items-center gap-2.5">
                                    {category.icon}
                                    <h3 className="font-bold text-secunova-dark text-xs uppercase tracking-wider">{category.category}</h3>
                                  </div>
                                  <div className="space-y-1.5">
                                    {category.items.map((item, itemIndex) => (
                                      <Link
                                        key={itemIndex}
                                        to={item.path}
                                        className={`flex items-center space-x-2.5 px-3 py-2 rounded-xl text-xs sm:text-sm transition-colors group ${
                                          location.pathname === item.path
                                            ? 'text-secunova-blue bg-secunova-blue/5 font-bold' 
                                            : 'text-slate-700 hover:text-secunova-blue hover:bg-gray-50'
                                        }`}
                                        onClick={() => {
                                          setIsOpen(false);
                                          setIsServicesDropdownOpen(false);
                                        }}
                                      >
                                        <span className="text-gray-400 group-hover:text-secunova-blue transition-colors flex-shrink-0">
                                          {item.icon}
                                        </span>
                                        <span className="leading-snug">{item.name}</span>
                                      </Link>
                                    ))}
                                  </div>
                                </div>
                              ))}
                            </div>
                          </div>
                        </div>
                      ) : (
                        <div className={`absolute top-full left-0 mt-1 w-64 bg-white border border-gray-200/90 rounded-xl shadow-xl py-3 transition-all duration-200 z-50 ${
                          ((link.name === 'About' && isAboutDropdownOpen) || (link.name === 'Contact' && isContactDropdownOpen))
                            ? 'opacity-100 visible translate-y-0' 
                            : 'opacity-0 invisible -translate-y-2'
                        }`}>
                          {link.dropdownItems?.map((item) => (
                            <Link
                              key={item.name}
                              to={item.path}
                              className={`block px-5 py-2.5 text-xs sm:text-sm transition-colors ${
                                location.pathname === item.path
                                  ? 'text-secunova-blue bg-secunova-blue/5 font-bold'
                                  : 'text-slate-700 hover:text-secunova-blue hover:bg-gray-50 font-medium'
                              }`}
                              onClick={() => {
                                setIsAboutDropdownOpen(false);
                                setIsContactDropdownOpen(false);
                              }}
                            >
                              {item.name}
                            </Link>
                          ))}
                        </div>
                      )}
                    </div>
                  ) : (
                    <Link
                      to={link.path}
                      className={`flex items-center text-xs xl:text-sm font-semibold transition-colors hover:text-secunova-blue py-2 whitespace-nowrap ${
                        location.pathname === link.path ? 'text-secunova-blue font-bold' : 'text-secunova-dark'
                      }`}
                    >
                      {link.icon}
                      {link.name}
                    </Link>
                  )}
                </div>
              ))}
            </div>

            {/* Right: Primary Action Button Container */}
            <div className="hidden lg:flex items-center flex-shrink-0">
              <Link
                to="/contact"
                className="btn btn-gradient btn-sm text-[11px] xl:text-xs uppercase tracking-wider font-bold shadow-xs hover:shadow-md transition-all whitespace-nowrap px-4 py-2 rounded-xl flex items-center"
              >
                <Calendar className="h-3.5 w-3.5 mr-1.5" />
                Book Consultation
              </Link>
            </div>

            {/* Mobile Hamburger Button */}
            <div className="flex items-center lg:hidden">
              <button
                onClick={toggleMenu}
                className="p-2 rounded-md text-secunova-dark hover:text-secunova-blue hover:bg-gray-100 focus:outline-none touch-target flex items-center justify-center"
                aria-label="Toggle navigation menu"
                aria-expanded={isOpen}
                aria-controls="mobile-navigation"
              >
                {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Navigation Drawer */}
        {isOpen && (
          <div id="mobile-navigation" className="lg:hidden mobile-menu border-t border-gray-200 bg-white px-4 pt-2 pb-6 space-y-3">
            {navLinks.map((link) => (
              <div key={link.name} className="py-1">
                <Link
                  to={link.path}
                  className="flex items-center text-base font-bold text-secunova-dark py-2.5 min-h-[44px]"
                  onClick={() => setIsOpen(false)}
                >
                  {link.icon}
                  {link.name}
                </Link>

                {link.megaMenuItems && link.megaMenuItems.map((category, categoryIndex) => (
                  <div key={categoryIndex} className="pl-6 mt-1 mb-3 border-l-2 border-secunova-blue/20">
                    <div className="flex items-center gap-2 pt-2 pb-1">
                      {category.icon}
                      <h3 className="text-[11px] font-bold uppercase tracking-wider text-secunova-blue">{category.category}</h3>
                    </div>
                    <div className="space-y-0.5">
                      {category.items.map((item, itemIndex) => (
                        <Link
                          key={itemIndex}
                          to={item.path}
                          className="flex items-center gap-2 text-sm text-gray-600 hover:text-secunova-blue py-2.5 font-medium min-h-[44px]"
                          onClick={() => setIsOpen(false)}
                        >
                          {item.icon}
                          {item.name}
                        </Link>
                      ))}
                    </div>
                  </div>
                ))}

                {!link.megaMenuItems && link.dropdownItems && (
                  <div className="pl-6 space-y-1 mt-1 border-l-2 border-secunova-blue/20">
                    {link.dropdownItems.map((subItem) => (
                      <Link
                        key={subItem.name}
                        to={subItem.path}
                        className="block text-sm text-gray-600 hover:text-secunova-blue py-2.5 font-medium min-h-[44px]"
                        onClick={() => setIsOpen(false)}
                      >
                        {subItem.name}
                      </Link>
                    ))}
                  </div>
                )}
              </div>
            ))}
            <div className="pt-4 border-t border-gray-100">
              <Link
                to="/contact"
                className="btn btn-gradient w-full justify-center text-xs uppercase tracking-wider font-bold min-h-[44px] flex items-center"
                onClick={() => setIsOpen(false)}
              >
                <Calendar className="h-4 w-4 mr-2" />
                Book Consultation
              </Link>
            </div>
          </div>
        )}
      </nav>
    </header>
  );
};

export default Navbar;