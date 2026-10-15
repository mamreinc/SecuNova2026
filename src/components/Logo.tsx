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
  // Refined Apple-scale Icon height classes
  const iconHeightClass = {
    sm: 'h-4 sm:h-5',
    md: 'h-5 sm:h-6',
    lg: 'h-7 sm:h-8',
  }[size];

  // Scaled-down Apple-scale typography classes
  const textSizeClass = {
    sm: 'text-xs sm:text-[13px] tracking-[0.16em]',
    md: 'text-sm sm:text-[15px] tracking-[0.18em]',
    lg: 'text-lg sm:text-xl tracking-[0.2em]',
  }[size];

  // Micro-typography for specialization subtext with transform scale
  const subtextSizeClass = {
    sm: 'text-[8px] scale-[0.65]',
    md: 'text-[8.5px] scale-[0.68]',
    lg: 'text-[9.5px] scale-[0.72]',
  }[size];

  const subtextOriginClass = variant === 'vertical' ? 'origin-center' : 'origin-left';

  // Brand subtext under logo
  const effectiveSubtext = subtext !== undefined ? subtext : 'Advancing Success';

  const iconSrc = theme === 'dark' ? '/logo/secunova-icon-white.png' : '/logo/secunova-icon.png';

  const logoContent = (
    <div
      className={`inline-flex group transition-transform duration-300 hover:scale-[1.01] ${
        variant === 'vertical' ? 'flex-col items-center text-center space-y-1.5' : 'flex-row space-x-2 sm:space-x-2.5 items-center'
      } ${className}`}
    >
      {/* Icon mark */}
      <img
        src={iconSrc}
        alt="SecuNova Icon"
        className={`${iconHeightClass} w-auto object-contain shrink-0 transition-opacity duration-200`}
        loading="eager"
        decoding="async"
      />

      {/* Brand Text scaled down with Apple-style specialization subtext */}
      {variant !== 'monogram' && (
        <div className="flex flex-col text-left">
          <div
            className={`font-sans uppercase font-bold tracking-widest leading-none select-none transition-colors duration-200 ${textSizeClass} ${
              theme === 'dark' ? 'text-white' : 'text-secunova-dark'
            }`}
          >
            <span className="font-light opacity-90">SECU</span>
            <span className="font-black">NOVA</span>
            <span className="text-secunova-blue font-black ml-0.5 select-none">.</span>
          </div>
          {effectiveSubtext && (
            <div
              className={`font-mono uppercase font-normal mt-0.5 select-none leading-none whitespace-nowrap transform tracking-[0.24em] opacity-80 ${subtextSizeClass} ${subtextOriginClass} ${
                theme === 'dark' ? 'text-slate-400' : 'text-secunova-blue/80'
              }`}
            >
              {effectiveSubtext}
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
