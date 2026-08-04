/*
========================================
OPTIMIZED IMAGE COMPONENT
Custom Built by SecuNova Inc.
========================================

Optimized image component for better performance:
- Lazy loading support
- Priority loading for critical images
- Width/height attributes to prevent CLS
- Responsive image loading

========================================
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
      fetchpriority={fetchPriorityValue}
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


