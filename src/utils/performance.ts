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
