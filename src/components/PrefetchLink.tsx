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
import React from 'react';
import { Link, LinkProps } from 'react-router-dom';

interface PrefetchLinkProps extends LinkProps {
  prefetch?: boolean;
}

const PrefetchLink: React.FC<PrefetchLinkProps> = ({ 
  prefetch = true, 
  to, 
  children,
  ...props 
}) => {
  const handleMouseEnter = () => {
    if (prefetch && typeof to === 'string') {
      // Prefetch the route when user hovers (likely to click)
      const link = document.createElement('link');
      link.rel = 'prefetch';
      link.href = to as string;
      document.head.appendChild(link);
    }
  };

  return (
    <Link 
      to={to} 
      onMouseEnter={handleMouseEnter}
      {...props}
    >
      {children}
    </Link>
  );
};

export default PrefetchLink;

