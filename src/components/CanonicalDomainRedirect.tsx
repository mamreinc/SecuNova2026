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

import React, { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

const PRIMARY_CANONICAL_DOMAIN = 'secunovainc.ca';

/**
 * CanonicalDomainRedirect
 * Ensures that any visitor accessing the application via secondary domains,
 * aliases, or HTTP is automatically redirected to the primary domain secunovainc.ca.
 */
export const CanonicalDomainRedirect: React.FC = () => {
  const location = useLocation();

  useEffect(() => {
    if (typeof window === 'undefined') return;

    try {
      const hostname = window.location.hostname.toLowerCase();

      // Bypass during local development and testing
      if (
        hostname === 'localhost' ||
        hostname === '127.0.0.1' ||
        hostname === '::1' ||
        hostname.endsWith('.local')
      ) {
        return;
      }

      // If the visitor is on any other domain or www, redirect to primary canonical domain
      if (hostname !== PRIMARY_CANONICAL_DOMAIN) {
        const targetUrl = `https://${PRIMARY_CANONICAL_DOMAIN}${location.pathname}${location.search}${location.hash}`;
        window.location.replace(targetUrl);
      }
    } catch {
      // Graceful fallback
    }
  }, [location]);

  return null;
};

export default CanonicalDomainRedirect;
