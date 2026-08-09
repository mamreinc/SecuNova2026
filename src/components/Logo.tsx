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

interface LogoProps {
  variant?: 'horizontal' | 'vertical' | 'monogram';
  size?: 'sm' | 'md' | 'lg';
  theme?: 'light' | 'dark';
  subtext?: string;
  className?: string;
  showLink?: boolean;
}

export const Logo: React.FC<LogoProps> = ({
  variant = 'horizontal',
  size = 'md',
  theme = 'light',
  subtext,
  className = '',
  showLink = true,
}) => {
  // Icon height responsive classes
  const iconHeightClass = {
    sm: 'h-6 sm:h-7',
    md: 'h-8 sm:h-9',
    lg: 'h-10 sm:h-12',
  }[size];

  // Font size responsive classes
  const textSizeClass = {
    sm: 'text-lg sm:text-xl',
    md: 'text-xl sm:text-2xl md:text-[1.65rem]',
    lg: 'text-3xl sm:text-4xl',
  }[size];

  const iconSrc = theme === 'dark' ? '/logo/secunova-icon-white.png' : '/logo/secunova-icon.png';

  const logoContent = (
    <div
      className={`inline-flex group transition-transform duration-300 hover:scale-[1.02] ${
        variant === 'vertical' ? 'flex-col items-center text-center space-y-2.5' : 'flex-row space-x-2.5 sm:space-x-3 items-center'
      } ${className}`}
    >
      {/* Icon from attached image mark */}
      <img
        src={iconSrc}
        alt="SecuNova Icon"
        className={`${iconHeightClass} w-auto object-contain shrink-0 transition-opacity duration-200`}
        loading="eager"
        decoding="async"
      />

      {/* Brand Text formatted strictly matching secunovainc.com */}
      {variant !== 'monogram' && (
        <div className="flex flex-col">
          <div
            className={`font-sans uppercase tracking-widest leading-none select-none transition-colors duration-200 ${textSizeClass} ${
              theme === 'dark' ? 'text-white' : 'text-secunova-dark'
            }`}
          >
            <span className="font-light opacity-85">SECU</span>
            <span className="font-black">NOVA</span>
            <span className="text-secunova-blue font-black ml-0.5 select-none">.</span>
          </div>
          {subtext && (
            <div
              className={`font-sans uppercase tracking-[0.32em] font-bold text-[0.42em] mt-1 select-none leading-none ${
                theme === 'dark' ? 'text-secunova-light' : 'text-secunova-blue'
              }`}
            >
              {subtext}
            </div>
          )}
        </div>
      )}
    </div>
  );

  if (showLink) {
    return (
      <Link
        to="/"
        aria-label="SecuNova Inc. - Home"
        className="inline-block focus:outline-none"
      >
        {logoContent}
      </Link>
    );
  }

  return logoContent;
};

export default Logo;
