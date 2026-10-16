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

import React, { Suspense } from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate, useLocation } from 'react-router-dom';
import { HelmetProvider, Helmet } from 'react-helmet-async';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import ScrollToTop from './components/ScrollToTop';
import PageTransition from './components/PageTransition';
import LoadingSpinner from './components/LoadingSpinner';
import SecurityWrapper from './components/SecurityWrapper';
import { CanonicalDomainRedirect } from './components/CanonicalDomainRedirect';
const ChatWidget = React.lazy(() => import('./components/ChatWidget'));

// Lazy load active pages for maximum performance
const HomePage = React.lazy(() => import('./pages/HomePage'));
const PrivacyTermsPage = React.lazy(() => import('./pages/PrivacyTermsPage'));
const BrandPage = React.lazy(() => import('./pages/BrandPage'));

// Custom redirect component for external URLs
const ExternalRedirect: React.FC<{ url: string }> = ({ url }) => {
  React.useEffect(() => {
    window.location.href = url;
  }, [url]);
  
  return (
    <div className="min-h-screen flex items-center justify-center">
      <div className="text-center">
        <LoadingSpinner size="lg" color="blue" className="mx-auto mb-4" />
        <p className="text-gray-600">Redirecting...</p>
      </div>
    </div>
  );
};

// Loading fallback component
const PageLoadingFallback = () => (
  <div className="min-h-screen flex items-center justify-center bg-gray-50">
    <div className="text-center">
      <LoadingSpinner size="lg" color="blue" className="mx-auto mb-4" />
      <p className="text-gray-600">Loading page...</p>
    </div>
  </div>
);

function App() {
  return (
    <HelmetProvider
      context={{}}
    >
      <Helmet
        defaultTitle="SecuNova Inc. | Strategic Advisory & Digital Transformation Calgary"
        titleTemplate="%s"
      />
      <SecurityWrapper>
        <Router>
          <CanonicalDomainRedirect />
          <ScrollToTop />
          <div className="flex flex-col min-h-screen">
            <Routes>
              {/* Single-Page Experience: All Sub-Pages Redirect Directly to Home Page */}
              <Route path="/" element={
                <>
                  <Navbar />
                  <main className="flex-grow">
                    <Suspense fallback={<PageLoadingFallback />}>
                      <PageTransition><HomePage /></PageTransition>
                    </Suspense>
                  </main>
                  <Footer />
                </>
              } />

              {/* Administrative, Legal & Brand Pages */}
              <Route path="/privacy-terms" element={
                <>
                  <Navbar />
                  <main className="flex-grow">
                    <Suspense fallback={<PageLoadingFallback />}>
                      <PageTransition><PrivacyTermsPage /></PageTransition>
                    </Suspense>
                  </main>
                  <Footer />
                </>
              } />
              <Route path="/brand" element={
                <>
                  <Navbar />
                  <main className="flex-grow">
                    <Suspense fallback={<PageLoadingFallback />}>
                      <PageTransition><BrandPage /></PageTransition>
                    </Suspense>
                  </main>
                  <Footer />
                </>
              } />

              {/* Explicit Sub-Page Redirects to Home Page */}
              <Route path="/services" element={<Navigate to="/" replace />} />
              <Route path="/services/*" element={<Navigate to="/" replace />} />
              <Route path="/about" element={<Navigate to="/" replace />} />
              <Route path="/about/*" element={<Navigate to="/" replace />} />
              <Route path="/team" element={<Navigate to="/" replace />} />
              <Route path="/our-work" element={<Navigate to="/" replace />} />
              <Route path="/our-work/*" element={<Navigate to="/" replace />} />
              <Route path="/products" element={<Navigate to="/" replace />} />
              <Route path="/products/*" element={<Navigate to="/" replace />} />
              <Route path="/contact" element={<Navigate to="/" replace />} />
              <Route path="/support" element={<Navigate to="/" replace />} />
              <Route path="/faq" element={<Navigate to="/" replace />} />
              <Route path="/join-us" element={<Navigate to="/" replace />} />
              <Route path="/free-services" element={<Navigate to="/" replace />} />
              <Route path="/alberta-startups" element={<Navigate to="/" replace />} />
              <Route path="/login" element={<Navigate to="/" replace />} />
              <Route path="/portal" element={<Navigate to="/" replace />} />

              {/* Catch-all fallback */}
              <Route path="*" element={<Navigate to="/" replace />} />
            </Routes>
          </div>
        </Router>
      </SecurityWrapper>
    </HelmetProvider>
  );
}

export default App;

// Render chat only on /contact to avoid site-wide footprint
const ChatOnlyOnContact: React.FC = () => {
  const location = useLocation();
  if (location.pathname !== '/contact') return null;
  return (
    <Suspense fallback={null}>
      <ChatWidget />
    </Suspense>
  );
};