/*
========================================
MAIN APPLICATION COMPONENT
Custom Built by SecuNova Inc.
========================================

This is the root component of our custom React application.
Features include:
- Multi-language routing (English/French)
- Custom navigation system
- Dynamic page routing
- Responsive design
- SEO optimization

Built entirely from scratch - no templates used.
Contact SecuNova Inc. for custom web development.
========================================
*/

import React, { Suspense } from 'react';
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import { HelmetProvider, Helmet } from 'react-helmet-async';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import ScrollToTop from './components/ScrollToTop';
import PageTransition from './components/PageTransition';
import LoadingSpinner from './components/LoadingSpinner';
import SecurityWrapper from './components/SecurityWrapper';
const ChatWidget = React.lazy(() => import('./components/ChatWidget'));

// Lazy load pages for better performance with prefetch hints
const HomePage = React.lazy(() => import(/* webpackPrefetch: true */ './pages/HomePage'));
const ServicesPage = React.lazy(() => import(/* webpackPrefetch: true */ './pages/ServicesPage'));
const AboutPage = React.lazy(() => import('./pages/AboutPage'));
const ContactPage = React.lazy(() => import(/* webpackPrefetch: true */ './pages/ContactPage'));
const LoginPage = React.lazy(() => import('./pages/LoginPage'));
const FaqPage = React.lazy(() => import('./pages/FaqPage'));
const PrivacyTermsPage = React.lazy(() => import('./pages/PrivacyTermsPage'));
const FreeServicesPage = React.lazy(() => import('./pages/FreeServicesPage'));
const JoinUsPage = React.lazy(() => import('./pages/JoinUsPage'));
const BrandPage = React.lazy(() => import('./pages/BrandPage'));
const NotFoundPage = React.lazy(() => import('./pages/NotFoundPage'));

// Service Pages
const WebDevelopmentPage = React.lazy(() => import('./pages/services/WebDevelopmentPage'));
const UIUXDesignPage = React.lazy(() => import(/* webpackPrefetch: true */ './pages/services/UIUXDesignPage'));
const SEOMarketingPage = React.lazy(() => import(/* webpackPrefetch: true */ './pages/services/SEOMarketingPage'));
const DigitalProjectManagementPage = React.lazy(() => import(/* webpackPrefetch: true */ './pages/services/DigitalProjectManagementPage'));

// About Sub-Pages
const OurWorkPage = React.lazy(() => import('./pages/OurWorkPage'));
const ProductDetailPage = React.lazy(() => import('./pages/ProductDetailPage'));

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

/**
 * Main Application Component
 * 
 * This component orchestrates the entire application routing and layout.
 * Features:
 * - Bilingual support (English/French)
 * - Dynamic navigation based on language
 * - External redirect handling
 * - SEO optimization with React Helmet
 * - Custom scroll management
 * - AI chat integration
 * - Lazy loading for performance
 * 
 * Built from scratch by SecuNova Inc.
 */
function App() {
  return (
    <HelmetProvider
      context={{}}
    >
      <Helmet
        defaultTitle="SecuNova Consulting Calgary | Digital Transformation & Custom Web Development"
        titleTemplate="%s"
      />
      <SecurityWrapper>
        <Router>
          <ScrollToTop />
          <div className="flex flex-col min-h-screen">
            <Routes>
              {/* External Redirects - Custom implementation */}
              <Route 
                path="/alberta-startups" 
                element={<ExternalRedirect url="https://maxphaos.com/alberta-startups" />} 
              />
              
              {/* English routes - Default language implementation */}
              <Route path="/*" element={
                <>
                  <Navbar />
                  <main className="flex-grow">
                    <Suspense fallback={<PageLoadingFallback />}>
                      <Routes>
                        <Route path="/" element={<PageTransition><HomePage /></PageTransition>} />
                        <Route path="/services" element={<PageTransition><ServicesPage /></PageTransition>} />
                        <Route path="/services/web-development" element={<PageTransition><WebDevelopmentPage /></PageTransition>} />
                        <Route path="/services/ui-ux-design" element={<PageTransition><UIUXDesignPage /></PageTransition>} />
                        <Route path="/services/seo-marketing" element={<PageTransition><SEOMarketingPage /></PageTransition>} />
                        <Route path="/services/digital-project-management" element={<PageTransition><DigitalProjectManagementPage /></PageTransition>} />
                        <Route path="/support" element={<PageTransition><ContactPage /></PageTransition>} />
                        <Route path="/about" element={<PageTransition><AboutPage /></PageTransition>} />
                        <Route path="/about/our-work" element={<PageTransition><OurWorkPage /></PageTransition>} />
                        <Route path="/about/our-work/:productId" element={<PageTransition><ProductDetailPage /></PageTransition>} />
                        <Route path="/our-work/:productId" element={<PageTransition><ProductDetailPage /></PageTransition>} />
                        <Route path="/products/:productId" element={<PageTransition><ProductDetailPage /></PageTransition>} />
                        <Route path="/contact" element={<PageTransition><ContactPage /></PageTransition>} />
                        <Route path="/login" element={<PageTransition><LoginPage /></PageTransition>} />
                        <Route path="/faq" element={<PageTransition><FaqPage /></PageTransition>} />
                        <Route path="/privacy-terms" element={<PageTransition><PrivacyTermsPage /></PageTransition>} />
                        <Route path="/free-services" element={<PageTransition><FreeServicesPage /></PageTransition>} />
                        <Route path="/join-us" element={<PageTransition><JoinUsPage /></PageTransition>} />
                        <Route path="/brand" element={<PageTransition><BrandPage /></PageTransition>} />
                        <Route path="*" element={<PageTransition><NotFoundPage /></PageTransition>} />
                      </Routes>
                    </Suspense>
                  </main>
                  <Footer />
                  {/* Chat widget only on the Contact page */}
                  <ChatOnlyOnContact />
                </>
              } />
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