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
import React, { useState, useEffect, memo } from 'react';
import { useLocation } from 'react-router-dom';
import LoadingSpinner from './LoadingSpinner';

interface PageTransitionProps {
  children: React.ReactNode;
  isLoading?: boolean;
  className?: string;
}

const PageTransition: React.FC<PageTransitionProps> = memo(({
  children,
  isLoading = false,
  className = ''
}) => {
  const [isVisible, setIsVisible] = useState(false);
  const location = useLocation();

  useEffect(() => {
    // Reset visibility on route change
    setIsVisible(false);
    
    if (!isLoading) {
      const timer = setTimeout(() => {
        setIsVisible(true);
      }, 100);
      return () => clearTimeout(timer);
    }
  }, [isLoading, location.pathname]);

  if (isLoading) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gray-50">
        <div className="text-center">
          <LoadingSpinner size="lg" color="blue" className="mx-auto mb-4" />
          <p className="text-gray-600">Loading...</p>
        </div>
      </div>
    );
  }

  return (
    <div
      className={`
        transition-opacity duration-300 ease-in-out
        ${isVisible ? 'opacity-100' : 'opacity-0'}
        ${className}
      `}
    >
      {children}
    </div>
  );
});

PageTransition.displayName = 'PageTransition';

export default PageTransition;