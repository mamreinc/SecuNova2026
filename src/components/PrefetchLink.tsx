/*
========================================
PREFETCH LINK COMPONENT
Custom Built by SecuNova Inc.
========================================

Enhanced Link component with prefetching for faster navigation.
========================================
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

