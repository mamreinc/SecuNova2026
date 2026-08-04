import React from 'react';
import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';
import { HomeIcon, AlertCircle } from 'lucide-react';

const NotFoundPage = () => {
  return (
    <div className="min-h-screen bg-gray-50">
      <Helmet>
        <title>Page Not Found | SecuNova Consulting</title>
        <meta name="description" content="The page you are looking for does not exist or has been moved." />
        <meta name="robots" content="noindex, nofollow" />
        <meta name="googlebot" content="noindex, nofollow" />
      </Helmet>
      <section className="relative page-header pb-16 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-blue-600/5 via-transparent to-blue-800/5"></div>
        <div className="container mx-auto px-4 relative">
          <div className="text-center max-w-3xl mx-auto">
            <h1 className="text-4xl md:text-5xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-blue-800">
              Page Not Found
            </h1>
            <p className="text-gray-600 text-lg mb-8">
              The page you're looking for doesn't exist or has been moved.
            </p>
          </div>
        </div>
      </section>

      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-lg mx-auto text-center">
            <div className="mb-8">
              <AlertCircle className="h-16 w-16 text-secunova-blue mx-auto mb-4" />
              <p className="text-gray-600 text-lg mb-8">
                We couldn't find what you were looking for, but we're here to help you get back on track.
              </p>
              <Link
                to="/"
                className="btn btn-gradient btn-lg"
              >
                <HomeIcon className="h-5 w-5 mr-2" />
                Back to Home
              </Link>
            </div>
            
            <div className="border-t border-gray-200 pt-8">
              <h2 className="text-lg font-semibold text-gray-800 mb-4">Need Help?</h2>
              <p className="text-gray-600 mb-4">
                If you need assistance, our support team is here to help.
              </p>
              <Link
                to="/contact"
                className="text-secunova-blue hover:text-secunova-blue font-medium"
              >
                Contact Support
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default NotFoundPage;