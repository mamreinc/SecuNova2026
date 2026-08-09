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

interface OptimizedImageProps extends React.ImgHTMLAttributes<HTMLImageElement> {
  priority?: boolean; // For above-the-fold images
  aspectRatio?: string; // e.g., "16/9", "4/3"
}

const OptimizedImage: React.FC<OptimizedImageProps> = ({
  priority = false,
  aspectRatio,
  className = '',
  loading,
  fetchPriority,
  ...props
}) => {
  // Determine loading strategy
  const loadingStrategy = loading || (priority ? 'eager' : 'lazy');
  const fetchPriorityValue = fetchPriority || (priority ? 'high' : 'auto');

  // Calculate aspect ratio padding if provided
  const aspectRatioStyle = aspectRatio
    ? {
        aspectRatio,
        width: '100%',
        height: 'auto',
      }
    : {};

  return (
    <img
      {...props}
      loading={loadingStrategy}
      fetchPriority={fetchPriorityValue}
      decoding="async"
      className={className}
      style={{
        ...aspectRatioStyle,
        ...props.style,
      }}
    />
  );
};

export default OptimizedImage;


