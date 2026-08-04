import React, { ReactNode, memo } from 'react';
import { useIntersectionObserver } from '../hooks/useIntersectionObserver';

interface LazySectionProps {
  children: ReactNode;
  className?: string;
  threshold?: number;
  rootMargin?: string;
  fallback?: ReactNode;
}

const LazySection: React.FC<LazySectionProps> = memo(({
  children,
  className = '',
  threshold = 0.1,
  rootMargin = '100px',
  fallback = null
}) => {
  const { elementRef, isIntersecting } = useIntersectionObserver({
    threshold,
    rootMargin,
    triggerOnce: true
  });

  return (
    <div
      ref={elementRef}
      className={`transition-opacity duration-500 ${
        isIntersecting ? 'opacity-100' : 'opacity-0'
      } ${className}`}
    >
      {isIntersecting ? children : fallback}
    </div>
  );
});

LazySection.displayName = 'LazySection';

export default LazySection;