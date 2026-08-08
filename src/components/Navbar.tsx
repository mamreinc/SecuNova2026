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
import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, User, Mail, Phone, ChevronDown, Home, LayoutGrid, LifeBuoy, Users, PhoneCall, Gift, Globe, DollarSign, UserPlus, HelpCircle, Code, Crown, RefreshCw, GraduationCap, PenTool, FileText, ClipboardCheck, Briefcase } from 'lucide-react';
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
    <div className="bg-gradient-to-r from-secunova-dark to-secunova-blue text-white py-2 hidden lg:block">
      <div className="container mx-auto px-4 flex flex-col lg:flex-row justify-between items-center space-y-2 lg:space-y-0">
        <div className="flex flex-col sm:flex-row items-center space-y-2 sm:space-y-0 sm:space-x-4 lg:space-x-6">
          <a href="mailto:hello@secunovainc.com" className="flex items-center hover:text-white transition-all duration-300 hover:scale-105 text-xs sm:text-sm text-white">
            <Mail className="h-4 w-4 mr-2 transition-transform duration-300 hover:rotate-12" />
            hello@secunovainc.com
          </a>
          <a href="tel:403-401-1552" className="flex items-center hover:text-white transition-all duration-300 hover:scale-105 text-xs sm:text-sm text-white">
            <Phone className="h-3.5 w-3.5 mr-1.5 text-white" />
            403-401-1552
          </a>
        </div>

        <div className="flex flex-col sm:flex-row items-center space-y-2 sm:space-y-0 sm:space-x-4 lg:space-x-6">
          <Link to="/contact" className="flex items-center hover:text-white transition-all duration-300 hover:scale-105 text-sm text-white">
            <Phone className="h-4 w-4 mr-2 transition-transform duration-300 hover:rotate-12" />
            Support
          </Link>
          <div className="hidden sm:block h-4 w-px bg-white/20"></div>
          <Link to="/free-services" className="flex items-center hover:text-white transition-all duration-300 hover:scale-105 text-xs sm:text-sm text-white">
            <Gift className="h-4 w-4 mr-2 transition-transform duration-300 hover:rotate-12" />
            Free
          </Link>
          <div className="hidden sm:block h-4 w-px bg-white/20"></div>
          <Link to="/login" className="flex items-center hover:text-white transition-all duration-300 hover:scale-105 text-xs sm:text-sm text-white">
            <User className="h-4 w-4 mr-2 transition-transform duration-300 hover:rotate-12" />
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
  const [isAboutUsDropdownOpen, setIsAboutUsDropdownOpen] = useState(false);
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
      if (scrollPosition > 50) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

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
          category: 'Pillar I · Strategic Consulting',
          icon: <Crown className="h-5 w-5 text-secunova-blue" />,
          items: [
            { name: 'Digital Transformation Consulting', path: '/services#strategic-consulting', icon: <RefreshCw className="h-4 w-4" /> },
            { name: 'Executive Leadership & Innovation Consulting', path: '/services#strategic-consulting', icon: <GraduationCap className="h-4 w-4" /> },
            { name: 'Digital Project Management', path: '/services/digital-project-management', icon: <ClipboardCheck className="h-4 w-4" /> }
          ]
        },
        {
          category: 'Pillar II · Digital Engineering',
          icon: <Code className="h-5 w-5 text-secunova-light" />,
          items: [
            { name: 'Custom Web App Development', path: '/services/web-development', icon: <Globe className="h-4 w-4" /> },
            { name: 'Website & App UI/UX Redesigns', path: '/services/ui-ux-design', icon: <PenTool className="h-4 w-4" /> },
            { name: 'B2B Content & SEO Strategy', path: '/services/seo-marketing', icon: <FileText className="h-4 w-4" /> },
            { name: 'Digital Architecture & Tech Stack Audits', path: '/services#digital-engineering', icon: <ClipboardCheck className="h-4 w-4" /> }
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
        { name: 'About Us', path: '/about' },
        { name: 'Our Work', path: '/about/our-work' },
        { name: 'Investors', path: '/join-us' }
      ]
    },
    { 
      name: 'Contact', 
      path: '/contact',
      icon: <PhoneCall className="h-4 w-4 mr-1.5" />,
      hasDropdown: true,
      dropdownItems: [
        { name: 'Contact Us', path: '/contact' },
        { name: 'FAQ', path: '/faq' },
        { name: 'Join Us', path: '/join-us' }
      ]
    },
  ];

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      const target = event.target as HTMLElement;
      // Don't close if clicking inside the menu or navigation
      if (target.closest('.mobile-menu') || target.closest('nav')) {
        return;
      }
      setIsAboutDropdownOpen(false);
    };

    if (isOpen) {
    document.addEventListener('click', handleClickOutside);
    return () => document.removeEventListener('click', handleClickOutside);
    }
  }, [isOpen]);

  return (
    <header className={`fixed w-full z-50 transition-all duration-300 ${isScrolled ? 'backdrop-blur-lg bg-white/90 shadow-md' : ''}`}>
      <TopBar />
      
      <nav className="bg-white shadow-md transition-all duration-300">
        <div className="container mx-auto px-4 sm:px-6">
          <div className="flex justify-between items-center h-14 sm:h-16 md:h-20">
            <Logo size="md" theme="light" />

            <nav className="hidden lg:flex items-center space-x-6 xl:space-x-8">
              {navLinks.map((link) => (
                <div key={link.name} className="relative">
                  {link.hasDropdown ? (
                    <div
                      className="relative"
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
                      onClick={(e) => e.stopPropagation()}
                    >
                      <button
                        className={`flex items-center text-sm font-medium transition-colors hover:text-secunova-blue ${
                          location.pathname === link.path ||
                           (link.name === 'About' && location.pathname === '/join-us') ||
                           (link.name === 'Services' && location.pathname.startsWith('/services')) ||
                           (link.name === 'Contact' && (location.pathname === '/contact' || location.pathname === '/faq' || location.pathname === '/join-us'))
                            ? 'text-secunova-blue'
                            : 'text-secunova-dark'
                        }`}
                      >
                        {link.icon}
                        {link.name}
                        <ChevronDown className={`ml-1 h-4 w-4 transition-transform duration-200 ${
                          ((link.name === 'About' && isAboutDropdownOpen) || (link.name === 'Contact' && isContactDropdownOpen) || (link.name === 'Services' && isServicesDropdownOpen)) ? 'rotate-180' : ''
                        }`} />
                      </button>
                      
                      {link.isMegaMenu && link.megaMenuItems ? (
                        <div className={`absolute top-full left-1/2 transform -translate-x-1/2 mt-2 w-[95vw] max-w-6xl bg-white border border-gray-200 rounded-lg shadow-2xl transition-all duration-200 z-50 ${
                          (link.name === 'Services' && isServicesDropdownOpen)
                            ? 'opacity-100 visible translate-y-0' 
                            : 'opacity-0 invisible -translate-y-2'
                        }`}>
                          <div className="p-6">
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                              {link.megaMenuItems.map((category, categoryIndex) => (
                                <div key={categoryIndex} className="space-y-3">
                                  <div className="mb-4 pb-2 border-b border-gray-200">
                                    <h3 className="font-semibold text-secunova-dark text-sm">{category.category}</h3>
                                  </div>
                                  <div className="space-y-2">
                                    {category.items.map((item, itemIndex) => (
                                      <Link
                                        key={itemIndex}
                                        to={item.path}
                                        className={`flex items-center space-x-2 px-3 py-2 rounded-md text-sm transition-colors hover:bg-gray-50 group ${
                                          location.pathname === item.path
                                            ? 'text-secunova-blue bg-secunova-blue/5' 
                                            : 'text-gray-700 hover:text-secunova-blue'
                                        }`}
                                        onClick={() => {
                                          setIsOpen(false);
                                          setIsServicesDropdownOpen(false);
                                        }}
                                      >
                                        <span className="text-gray-400 group-hover:text-secunova-blue transition-colors flex-shrink-0 inline-block" style={{ lineHeight: '1.5rem' }}>
                                          {item.icon}
                                        </span>
                                        <span style={{ lineHeight: '1.5rem' }}>{item.name}</span>
                                      </Link>
                                    ))}
                                  </div>
                                </div>
                              ))}
                            </div>
                          </div>
                        </div>
                      ) : (
                        <div className={`absolute top-full left-0 mt-2 w-48 sm:w-56 bg-white border border-gray-200 rounded-lg shadow-xl transition-all duration-200 z-50 ${
                          ((link.name === 'About' && isAboutDropdownOpen) || (link.name === 'Contact' && isContactDropdownOpen))
                            ? 'opacity-100 visible translate-y-0' 
                            : 'opacity-0 invisible -translate-y-2'
                        }`}>
                        <div className="py-1 sm:py-2">
                          {link.dropdownItems?.map((item) => (
                            item.hasNestedDropdown ? (
                              <div
                                key={item.name}
                                className="relative"
                                onMouseEnter={() => {
                                  if (item.name === 'About Us') setIsAboutUsDropdownOpen(true);
                                }}
                                onMouseLeave={() => {
                                  if (item.name === 'About Us') setIsAboutUsDropdownOpen(false);
                                }}
                              >
                                <Link
                                  to={item.path}
                                  className={`flex items-center justify-between px-4 sm:px-6 py-2 sm:py-3 text-sm sm:text-base font-medium transition-colors hover:bg-gray-100 ${
                                    (location.pathname === item.path)
                                      ? 'text-secunova-blue' : 'text-secunova-dark/80'
                                  }`}
                                  onClick={() => {
                                    setIsOpen(false);
                                    setIsAboutDropdownOpen(false);
                                  }}
                                >
                                  <div className="flex items-center">
                                    {item.name === 'About Us' && <Users className="h-4 w-4 mr-2" />}
                                    {item.name}
                                  </div>
                                  <ChevronDown className={`h-4 w-4 transition-transform duration-200 ${
                                    (item.name === 'About Us' && isAboutUsDropdownOpen) ? 'rotate-180' : ''
                                  }`} />
                                </Link>
                                <div className={`absolute top-0 right-full mr-2 w-48 sm:w-56 bg-white border border-gray-200 rounded-lg shadow-xl transition-all duration-200 z-50 ${
                                  (item.name === 'About Us' && isAboutUsDropdownOpen)
                                    ? 'opacity-100 visible translate-x-0'
                                    : 'opacity-0 invisible translate-x-2'
                                }`}>
                                  <div className="py-1 sm:py-2">
                                    {item.nestedItems?.map((nestedItem) => (
                                      <Link
                                        key={nestedItem.name}
                                        to={nestedItem.path}
                                        className={`flex items-center px-4 sm:px-6 py-2 sm:py-3 text-sm sm:text-base font-medium transition-colors hover:bg-gray-100 ${
                                          location.pathname === nestedItem.path ? 'text-secunova-blue' : 'text-secunova-dark/80'}`}
                                        onClick={() => {
                                          setIsOpen(false);
                                          setIsAboutDropdownOpen(false);
                                          setIsAboutUsDropdownOpen(false);
                                        }}
                                      >
                                        {nestedItem.name}
                                      </Link>
                                    ))}
                                  </div>
                                </div>
                              </div>
                            ) : (
                              <Link
                                key={item.name}
                                to={item.path}
                                className={`flex items-center px-4 sm:px-6 py-2 sm:py-3 text-sm sm:text-base font-medium transition-colors hover:bg-gray-100 ${
                                  (location.pathname === item.path) ||
                                  (item.path.includes('#') && location.pathname === item.path.split('#')[0])
                                    ? 'text-secunova-blue' : 'text-secunova-dark/80'
                                }`}
                                onClick={() => {
                                  setIsOpen(false);
                                  setIsAboutDropdownOpen(false);
                                  setIsContactDropdownOpen(false);
                                }}
                              >
                                {item.name === 'About Us' && <Users className="h-4 w-4 mr-2" />}
                                {item.name === 'Our Work' && <Briefcase className="h-4 w-4 mr-2" />}
                                {item.name === 'Contact Us' && <PhoneCall className="h-4 w-4 mr-2" />}
                                {item.name === 'Portfolio' && <Globe className="h-4 w-4 mr-2" />}
                                {item.name === 'Investors' && <DollarSign className="h-4 w-4 mr-2" />}
                                {item.name === 'FAQ' && <HelpCircle className="h-4 w-4 mr-2" />}
                                {item.name === 'Ask Support' && <LifeBuoy className="h-4 w-4 mr-2" />}
                                {item.name === 'Join Us' && <UserPlus className="h-4 w-4 mr-2" />}
                                {item.name === 'Freelancers' && <UserPlus className="h-4 w-4 mr-2" />}
                                {item.name}
                              </Link>
                            )
                          ))}
                        </div>
                      </div>
                      )}
                    </div>
                  ) : (
                    <Link
                      to={link.path}
                      className={`flex items-center text-sm font-medium transition-colors hover:text-secunova-blue ${
                        location.pathname === link.path ||
                        (link.name === 'About' && (location.pathname === '/portfolio' || location.pathname === '/join-us')) ||
                        (link.name === 'Services' && location.pathname.startsWith('/services'))
                          ? 'text-secunova-blue'
                          : 'text-secunova-dark'
                        }`}
                    >
                      {link.icon}
                      {link.name}
                    </Link>
                  )}
                </div>
              ))}
              <Link
                to="/join-us"
                className="btn btn-gradient btn-nav"
              >
                <div className="flex items-center">
                  <UserPlus className="h-4 w-4 mr-1.5" />
                  <span className="hidden sm:inline">Join Us</span>
                  <span className="sm:hidden">Join</span>
                </div>
              </Link>
            </nav>

            <button
              className="lg:hidden focus:outline-none text-secunova-dark hover:text-secunova-blue transition-colors touch-target"
              onClick={toggleMenu}
              aria-label={isOpen ? 'Close menu' : 'Open menu'}
              aria-expanded={isOpen}
              aria-controls="mobile-menu"
            >
              {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>

          {isOpen && (
            <nav id="mobile-menu" className="mobile-menu lg:hidden absolute top-14 sm:top-16 left-0 right-0 bg-white border-t border-gray-100 shadow-lg z-50">
              <div className="flex flex-col py-2 sm:py-4 max-h-screen overflow-y-auto">
                {navLinks.map((link) => (
                  <div key={link.name}>
                    {link.hasDropdown ? (
                      <>
                        <button
                          onClick={(e) => {
                            e.stopPropagation();
                            if (link.name === 'About') {
                              setIsAboutDropdownOpen(!isAboutDropdownOpen);
                            }
                            if (link.name === 'Contact') {
                              setIsContactDropdownOpen(!isContactDropdownOpen);
                            }
                            if (link.name === 'Services') {
                              setIsServicesDropdownOpen(!isServicesDropdownOpen);
                            }
                          }}
                          className={`w-full px-4 sm:px-6 py-3 sm:py-4 text-sm sm:text-base font-medium transition-colors hover:bg-gray-50 flex items-center touch-target ${
                            location.pathname === link.path ||
                             (link.name === 'About' && (location.pathname === '/partner' || location.pathname.startsWith('/about'))) ||
                             (link.name === 'Contact' && (location.pathname === '/contact' || location.pathname === '/faq' || location.pathname === '/join-us' || location.pathname === '/freelancer')) ||
                            (link.name === 'Services' && location.pathname.startsWith('/services'))
                              ? 'text-secunova-blue' : 'text-secunova-dark'
                          }`}
                        >
                          <div className="flex items-center flex-grow">
                            {link.icon}
                            {link.name}
                          </div>
                          <ChevronDown className={`h-4 w-4 flex-shrink-0 transition-transform duration-200 ${
                            ((link.name === 'About' && isAboutDropdownOpen) || (link.name === 'Contact' && isContactDropdownOpen) || (link.name === 'Services' && isServicesDropdownOpen)) ? 'rotate-180' : ''
                          }`} />
                        </button>
                        {(link.name === 'Services' && isServicesDropdownOpen && link.megaMenuItems) && (
                          <div className="bg-gray-50 border-l-4 border-blue-200">
                            {link.megaMenuItems.map((category, categoryIndex) => (
                              <div key={categoryIndex} className="mb-4">
                                <div className="px-6 sm:px-8 py-2 bg-gray-100">
                                  <h3 className="font-semibold text-secunova-dark text-sm">{category.category}</h3>
                                </div>
                                <div className="space-y-1">
                                  {category.items.map((item, itemIndex) => (
                                    <Link
                                      key={itemIndex}
                                      to={item.path}
                                      className={`flex items-center space-x-2 px-8 sm:px-10 py-2 sm:py-3 text-sm sm:text-base font-medium transition-colors hover:bg-gray-100 touch-target ${
                                        location.pathname === item.path
                                          ? 'text-secunova-blue' : 'text-secunova-dark/80'
                                      }`}
                                      onClick={(e) => {
                                        e.stopPropagation();
                                        setIsOpen(false);
                                        setIsServicesDropdownOpen(false);
                                      }}
                                    >
                                      <span className="text-gray-400 flex-shrink-0 inline-block" style={{ lineHeight: '1.5rem' }}>{item.icon}</span>
                                      <span style={{ lineHeight: '1.5rem' }}>{item.name}</span>
                                    </Link>
                                  ))}
                                </div>
                              </div>
                            ))}
                          </div>
                        )}
                        {(link.name === 'About' && isAboutDropdownOpen) && (
                          <div className="bg-gray-50 border-l-4 border-blue-200">
                            {link.dropdownItems?.map((item) => (
                              item.hasNestedDropdown ? (
                                <div key={item.name}>
                                  <button
                                    onClick={(e) => {
                                      e.stopPropagation();
                                      if (item.name === 'About Us') {
                                        setIsAboutUsDropdownOpen(!isAboutUsDropdownOpen);
                                      }
                                    }}
                                    className={`w-full flex items-center justify-between px-6 sm:px-8 py-2 sm:py-3 text-sm sm:text-base font-medium transition-colors hover:bg-gray-100 touch-target ${
                                      location.pathname === item.path
                                        ? 'text-secunova-blue' : 'text-secunova-dark/80'
                                    }`}
                                  >
                                    <div className="flex items-center">
                                      {item.name === 'About Us' && <Users className="h-4 w-4 mr-2" />}
                                      <span>{item.name}</span>
                                    </div>
                                    <ChevronDown className={`h-4 w-4 flex-shrink-0 transition-transform duration-200 ${
                                      (item.name === 'About Us' && isAboutUsDropdownOpen) ? 'rotate-180' : ''
                                    }`} />
                                  </button>
                                  {(item.name === 'About Us' && isAboutUsDropdownOpen) && (
                                    <div className="bg-gray-100 border-l-4 border-blue-300">
                                      {item.nestedItems?.map((nestedItem) => (
                                        <Link
                                          key={nestedItem.name}
                                          to={nestedItem.path}
                                          className={`flex items-center px-8 sm:px-10 py-2 sm:py-3 text-sm sm:text-base font-medium transition-colors hover:bg-gray-200 touch-target ${
                                            location.pathname === nestedItem.path ||
(nestedItem.path === '/about' && location.pathname === '/about')
                                              ? 'text-secunova-blue' : 'text-secunova-dark/80'
                                          }`}
                                          onClick={(e) => {
                                            e.stopPropagation();
                                            setIsOpen(false);
                                            setIsAboutDropdownOpen(false);
                                            setIsAboutUsDropdownOpen(false);
                                          }}
                                        >
                                           <span>{nestedItem.name}</span>
                                        </Link>
                                      ))}
                                    </div>
                                  )}
                                </div>
                              ) : (
                                <Link
                                  key={item.name}
                                  to={item.path}
                                  className={`flex items-center px-6 sm:px-8 py-2 sm:py-3 text-sm sm:text-base font-medium transition-colors hover:bg-gray-100 touch-target ${
                                    location.pathname === item.path ||
                                    (item.path.includes('#') && location.pathname === item.path.split('#')[0])
                                      ? 'text-secunova-blue' : 'text-secunova-dark/80'
                                  }`}
                                  onClick={(e) => {
                                    e.stopPropagation();
                                    setIsOpen(false);
                                    setIsAboutDropdownOpen(false);
                                  }}
                                >
                                  {item.name === 'About Us' && <Users className="h-4 w-4 mr-2" />}
                                  {item.name === 'Our Work' && <Briefcase className="h-4 w-4 mr-2" />}
                                  {item.name === 'Portfolio' && <Globe className="h-4 w-4 mr-2" />}
                                  {item.name === 'Investors' && <DollarSign className="h-4 w-4 mr-2" />}
                                  {item.name === 'Freelancers' && <UserPlus className="h-4 w-4 mr-2" />}
                                  {item.name === 'FAQ' && <HelpCircle className="h-4 w-4 mr-2" />}
                                  <span>{item.name}</span>
                                </Link>
                              )
                            ))}
                          </div>
                        )}
                        {(link.name === 'Contact' && isContactDropdownOpen) && (
                          <div className="bg-gray-50 border-l-4 border-blue-200">
                            {link.dropdownItems?.map((item) => (
                              <Link
                                key={item.name}
                                to={item.path}
                                className={`flex items-center px-6 sm:px-8 py-2 sm:py-3 text-sm sm:text-base font-medium transition-colors hover:bg-gray-100 touch-target ${
                                  location.pathname === item.path ||
                                  (item.path.includes('#') && location.pathname === item.path.split('#')[0])
                                    ? 'text-secunova-blue' : 'text-secunova-dark/80'
                                }`}
                                onClick={(e) => {
                                  e.stopPropagation();
                                  setIsOpen(false);
                                  setIsContactDropdownOpen(false);
                                }}
                              >
                                {item.name === 'Contact Us' && <PhoneCall className="h-4 w-4 mr-2" />}
                                {item.name === 'FAQ' && <HelpCircle className="h-4 w-4 mr-2" />}
                                {item.name === 'Ask Support' && <LifeBuoy className="h-4 w-4 mr-2" />}
                                {item.name === 'Join Us' && <UserPlus className="h-4 w-4 mr-2" />}
                                {item.name === 'Freelancers' && <UserPlus className="h-4 w-4 mr-2" />}
                                <span>{item.name}</span>
                              </Link>
                            ))}
                          </div>
                        )}
                      </>
                    ) : (
                      <Link 
                        to={link.path}
                        className={`flex items-center px-4 sm:px-6 py-3 sm:py-4 text-sm sm:text-base font-medium transition-colors hover:bg-gray-50 touch-target ${
                          location.pathname === link.path ? 'text-secunova-blue' : 'text-secunova-dark'
                        }`}
                        onClick={(e) => {
                          e.stopPropagation();
                          setIsOpen(false);
                        }}
                      >
                        {link.icon}
                        {link.name}
                      </Link>
                    )}
                  </div>
                ))}
                <Link
                  to="/contact"
                  className="mx-4 mt-3 btn btn-gradient font-semibold px-4 py-3 rounded-lg shadow-md hover:from-secunova-light hover:to-secunova-blue hover:shadow-lg transition-all duration-300 flex items-center justify-start touch-target"
                  onClick={() => setIsOpen(false)}
                > 
                  <Phone className="h-5 w-5 mr-2" />
                  Contact Support
                </Link>
                <Link
                  to="/contact"
                  className="mx-4 mt-4 btn btn-gradient font-semibold px-4 sm:px-5 py-3 rounded-lg shadow-md hover:from-secunova-light hover:to-secunova-blue hover:shadow-lg transition-all duration-300 flex items-center justify-start touch-target"
                  onClick={() => setIsOpen(false)}
                >
                  <Phone className="h-5 w-5 mr-2" />
                  Get Consultation
                </Link>
              </div>
            </nav>
          )}
        </div>
      </nav>
    </header>
  );
};

export default Navbar;