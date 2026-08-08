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
/**
 * Preload critical images
 * @param imageUrls - Array of image URLs to preload
 */
export const preloadImages = (imageUrls: string[]): void => {
  imageUrls.forEach((url) => {
    const link = document.createElement('link');
    link.rel = 'preload';
    link.as = 'image';
    link.href = url;
    link.fetchPriority = 'high';
    document.head.appendChild(link);
  });
};

/**
 * Add resource hints for better performance
 * @param domains - Array of domains to preconnect
 */
export const addPreconnectHints = (domains: string[]): void => {
  domains.forEach((domain) => {
    if (!document.querySelector(`link[href="${domain}"]`)) {
      const link = document.createElement('link');
      link.rel = 'preconnect';
      link.href = domain;
      link.crossOrigin = 'anonymous';
      document.head.appendChild(link);
    }
  });
};

/**
 * Defer non-critical CSS loading
 * @param href - CSS file URL
 */
export const loadCSSDeferred = (href: string): void => {
  const link = document.createElement('link');
  link.rel = 'stylesheet';
  link.href = href;
  link.media = 'print';
  link.onload = () => {
    link.media = 'all';
  };
  document.head.appendChild(link);
};

/**
 * Measure Core Web Vitals
 */
export const measureWebVitals = (): void => {
  if (typeof window === 'undefined' || !('PerformanceObserver' in window)) {
    return;
  }

  interface LayoutShiftEntry extends PerformanceEntry {
    value: number;
    hadRecentInput: boolean;
  }

  interface FirstInputEntry extends PerformanceEntry {
    processingStart: number;
  }

  // Measure Largest Contentful Paint (LCP)
  try {
    const lcpObserver = new PerformanceObserver((list) => {
      const entries = list.getEntries();
      const lastEntry = entries[entries.length - 1];
      if (lastEntry) {
        console.log('LCP:', lastEntry.startTime);
      }
    });
    lcpObserver.observe({ entryTypes: ['largest-contentful-paint'] });
  } catch {
    // PerformanceObserver not supported
  }

  // Measure First Input Delay (FID)
  try {
    const fidObserver = new PerformanceObserver((list) => {
      const entries = list.getEntries() as FirstInputEntry[];
      entries.forEach((entry) => {
        console.log('FID:', entry.processingStart - entry.startTime);
      });
    });
    fidObserver.observe({ entryTypes: ['first-input'] });
  } catch {
    // PerformanceObserver not supported
  }

  // Measure Cumulative Layout Shift (CLS)
  try {
    let clsValue = 0;
    const clsObserver = new PerformanceObserver((list) => {
      const entries = list.getEntries() as LayoutShiftEntry[];
      entries.forEach((entry) => {
        if (!entry.hadRecentInput) {
          clsValue += entry.value;
        }
      });
      console.log('CLS:', clsValue);
    });
    clsObserver.observe({ entryTypes: ['layout-shift'] });
  } catch {
    // PerformanceObserver not supported
  }
};

/**
 * Optimize images by adding loading attributes
 * @param imgElement - Image HTML element
 * @param priority - Whether image is priority (above the fold)
 */
export const optimizeImage = (imgElement: HTMLImageElement, priority: boolean = false): void => {
  if (!imgElement.hasAttribute('loading')) {
    imgElement.setAttribute('loading', priority ? 'eager' : 'lazy');
  }
  if (!imgElement.hasAttribute('decoding')) {
    imgElement.setAttribute('decoding', 'async');
  }
  if (priority && !imgElement.hasAttribute('fetchpriority')) {
    imgElement.setAttribute('fetchpriority', 'high');
  }
};

/**
 * Initialize performance optimizations
 */
export const initPerformanceOptimizations = (): void => {
  // Preconnect to important domains
  addPreconnectHints([
    'https://images.pexels.com',
    'https://fonts.cdnfonts.com',
  ]);

  // Measure Core Web Vitals in development
  if (import.meta.env.DEV) {
    measureWebVitals();
  }

  // Optimize all images on page load
  if (typeof document !== 'undefined') {
    document.addEventListener('DOMContentLoaded', () => {
      const images = document.querySelectorAll('img:not([loading])');
      images.forEach((img, index) => {
        // First few images are likely above the fold
        optimizeImage(img as HTMLImageElement, index < 3);
      });
    });
  }
};
