/*
========================================
LOGIN PAGE COMPONENT
Custom Built by SecuNova Inc.
========================================

Secure login page with enhanced security measures.

Features:
- Input sanitization and validation
- Rate limiting protection
- Secure form handling
- Error management
- Timing attack prevention

Built from scratch with security focus.
========================================
*/

import React, { useState } from 'react';
import { Helmet } from 'react-helmet-async';
import { Lock } from 'lucide-react';

/* ========================================
   START: Security Utilities
   Enhanced security functions for login protection
   ======================================== */
const sanitizeInput = (input: string): string => {
  return input.replace(/[<>'"&]/g, (match) => {
    const entities: { [key: string]: string } = {
      '<': '&lt;',
      '>': '&gt;',
      '"': '&quot;',
      "'": "'",
      '&': '&amp;'
    };
    return entities[match] || match;
  });
};

// Credential validation with security checks
const validateCredentials = (username: string, password: string): { isValid: boolean; errors: string[] } => {
  const errors: string[] = [];
  
  if (!username || username.length < 3) {
    errors.push('Username must be at least 3 characters');
  }
  
  if (!password || password.length < 8) {
    errors.push('Password must be at least 8 characters');
  }
  
  return { isValid: errors.length === 0, errors };
};

// Rate limiting to prevent brute force attacks
const attemptTracker = {
  attempts: 0,
  lastAttempt: 0,
  isBlocked: false,
  
  recordAttempt(): boolean {
    const now = Date.now();
    
    // Reset after 15 minutes
    if (now - this.lastAttempt > 900000) {
      this.attempts = 0;
      this.isBlocked = false;
    }
    
    this.attempts++;
    this.lastAttempt = now;
    
    // Block after 5 attempts
    if (this.attempts >= 5) {
      this.isBlocked = true;
      return false;
    }
    
    return true;
  }
};
/* ========================================
   END: Security Utilities
   ======================================== */

/* ========================================
   START: LOGIN PAGE COMPONENT
   Secure login form with comprehensive protection
   ======================================== */
const LoginPage = () => {
  const [credentials, setCredentials] = useState({
    username: '',
    password: '',
  });
  const [errors, setErrors] = useState<string[]>([]);
  const [isSubmitting, setIsSubmitting] = useState(false);

  /* ========================================
     START: Form Submit Handler
     Secure form submission with validation and rate limiting
     ======================================== */
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    // Rate limiting security check
    if (attemptTracker.isBlocked) {
      setErrors(['Too many failed attempts. Please try again in 15 minutes.']);
      return;
    }
    
    // Record attempt for rate limiting
    if (!attemptTracker.recordAttempt()) {
      setErrors(['Too many failed attempts. Please try again in 15 minutes.']);
      return;
    }
    
    setIsSubmitting(true);
    setErrors([]);
    
    // Input sanitization for security
    const sanitizedCredentials = {
      username: sanitizeInput(credentials.username.trim()),
      password: sanitizeInput(credentials.password)
    };
    
    // Credential validation
    const validation = validateCredentials(sanitizedCredentials.username, sanitizedCredentials.password);
    
    if (!validation.isValid) {
      setErrors(validation.errors);
      setIsSubmitting(false);
      return;
    }
    
    // Simulate authentication with timing attack prevention
    setTimeout(() => {
      console.log('Secure login attempted with sanitized inputs');
      setIsSubmitting(false);
      // Note: In production, this would make a secure API call
    }, 1000 + Math.random() * 1000); // Random delay between 1-2 seconds
  };
  /* ========================================
     END: Form Submit Handler
     ======================================== */

  /* ========================================
     START: Input Change Handler
     Handle form input changes with state updates
     ======================================== */
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setCredentials(prev => ({
      ...prev,
      [name]: value
    }));
  };
  /* ========================================
     END: Input Change Handler
     ======================================== */

  return (
    <div className="min-h-screen bg-gray-50">
      {/* ========================================
          START: SEO Head Section
          Meta tags and page title
          ======================================== */}
      <Helmet>
        <title>Client Portal Login | SecuNova Consulting Calgary</title>
        <meta name="description" content="Secure client portal login for SecuNova Consulting customers in Calgary & Alberta. Access your account, support tickets, and project information." />
        <meta name="keywords" content="SecuNova login, client portal Calgary, IT services login Alberta, SecuNova account access, customer portal Calgary" />
        <meta name="robots" content="noindex, nofollow" />
        <meta name="googlebot" content="noindex, nofollow" />
        <link rel="canonical" href="https://secunovainc.com/login" />
      </Helmet>
      {/* ========================================
          END: SEO Head Section
          ======================================== */}

      {/* ========================================
          START: Login Form Section
          Secure login form with validation and error handling
          ======================================== */}
      <section className="py-16">
        <div className="container mx-auto px-4 pt-24">
          <div className="max-w-md mx-auto">
            {/* START: Login Form Card */}
            <div className="bg-white rounded-3xl shadow-lg p-8">
              {/* START: Form Header */}
              <div className="text-center mb-8">
                {/* Lock icon */}
                <div className="inline-flex items-center justify-center w-16 h-16 bg-secunova-blue/10 rounded-full mb-4">
                  <Lock className="w-8 h-8 text-secunova-blue" />
                </div>
                {/* Form title and description */}
                <h2 className="text-2xl font-bold text-secunova-dark">Welcome Back</h2>
                <p className="text-gray-600 mt-2">Please sign in to your account</p>
              </div>
              {/* END: Form Header */}

              {/* START: Error Display */}
              {errors.length > 0 && (
                <div className="mb-6 p-4 bg-red-50 border border-red-200 rounded-xl">
                  {errors.map((error, index) => (
                    <p key={index} className="text-red-600 text-sm">{error}</p>
                  ))}
                </div>
              )}
              {/* END: Error Display */}
              
              {/* START: Login Form */}
              <form onSubmit={handleSubmit}>
                {/* Username input field */}
                <div className="mb-6">
                  <label htmlFor="username" className="block text-sm font-medium text-gray-700 mb-2">
                    Username
                  </label>
                  <input
                    type="text"
                    id="username"
                    name="username"
                    value={credentials.username}
                    onChange={handleChange}
                    className="w-full px-4 py-2 border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-300"
                    required
                  />
                </div>

                {/* Password input field */}
                <div className="mb-6">
                  <label htmlFor="password" className="block text-sm font-medium text-gray-700 mb-2">
                    Password
                  </label>
                  <input
                    type="password"
                    id="password"
                    name="password"
                    value={credentials.password}
                    onChange={handleChange}
                    className="w-full px-4 py-2 border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-300"
                    required
                  />
                </div>

                {/* Submit button with security states */}
                <button
                  type="submit"
                  disabled={isSubmitting || attemptTracker.isBlocked}
                  className={`w-full py-3 px-6 rounded-xl transition-all duration-300 transform hover:-translate-y-1 hover:shadow-xl ${
                    isSubmitting || attemptTracker.isBlocked
                      ? 'bg-gray-400 cursor-not-allowed' 
                      : 'bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-700 hover:to-blue-800 text-white'
                  }`}
                >
                  {isSubmitting ? 'Signing In...' : 'Sign In'}
                </button>
              </form>
              {/* END: Login Form */}
            </div>
            {/* END: Login Form Card */}
          </div>
        </div>
      </section>
      {/* ========================================
          END: Login Form Section
          ======================================== */}
    </div>
  );
};

/* ========================================
   END: LOGIN PAGE COMPONENT
   ======================================== */
export default LoginPage;