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

import React, { useState } from 'react';
import { Helmet } from 'react-helmet-async';
import { Lock } from 'lucide-react';
import { sanitizeInput } from '../utils/security';

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

const attemptTracker = {
  attempts: 0,
  lastAttempt: 0,
  isBlocked: false,

  recordAttempt(): boolean {
    const now = Date.now();

    if (now - this.lastAttempt > 900000) {
      this.attempts = 0;
      this.isBlocked = false;
    }

    this.attempts++;
    this.lastAttempt = now;

    if (this.attempts >= 5) {
      this.isBlocked = true;
      return false;
    }

    return true;
  }
};

const LoginPage = () => {
  const [credentials, setCredentials] = useState({
    username: '',
    password: '',
  });
  const [errors, setErrors] = useState<string[]>([]);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    if (attemptTracker.isBlocked) {
      setErrors(['Too many failed attempts. Please try again in 15 minutes.']);
      return;
    }

    if (!attemptTracker.recordAttempt()) {
      setErrors(['Too many failed attempts. Please try again in 15 minutes.']);
      return;
    }

    setIsSubmitting(true);
    setErrors([]);

    const sanitizedCredentials = {
      username: sanitizeInput(credentials.username.trim()),
      password: sanitizeInput(credentials.password)
    };

    const validation = validateCredentials(sanitizedCredentials.username, sanitizedCredentials.password);

    if (!validation.isValid) {
      setErrors(validation.errors);
      setIsSubmitting(false);
      return;
    }

    setTimeout(() => {
      setIsSubmitting(false);
    }, 1000 + Math.random() * 1000);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setCredentials(prev => ({
      ...prev,
      [name]: value
    }));
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <Helmet>
        <title>Client Portal Login | SecuNova Inc.</title>
        <meta name="description" content="Secure client portal login for SecuNova Inc. clients in Calgary & Alberta. Access your account, support tickets, and project information." />
        <meta name="robots" content="noindex, nofollow" />
        <meta name="googlebot" content="noindex, nofollow" />
        <link rel="canonical" href="https://secunovainc.com/login" />
      </Helmet>

      <section className="py-16">
        <div className="container mx-auto px-4 pt-24">
          <div className="max-w-md mx-auto">
            <div className="bg-white rounded-3xl shadow-lg p-8">
              <div className="text-center mb-8">
                <div className="inline-flex items-center justify-center w-16 h-16 bg-secunova-blue/10 rounded-full mb-4">
                  <Lock className="w-8 h-8 text-secunova-blue" />
                </div>
                <h2 className="text-2xl font-bold text-secunova-dark">Welcome Back</h2>
                <p className="text-gray-600 mt-2">Please sign in to your account</p>
              </div>

              {errors.length > 0 && (
                <div className="mb-6 p-4 bg-red-50 border border-red-200 rounded-xl">
                  {errors.map((error, index) => (
                    <p key={index} className="text-red-600 text-sm">{error}</p>
                  ))}
                </div>
              )}

              <form onSubmit={handleSubmit}>
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
                    className="w-full px-4 py-2 border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-secunova-blue focus:border-transparent transition-all duration-300"
                    required
                  />
                </div>

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
                    className="w-full px-4 py-2 border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-secunova-blue focus:border-transparent transition-all duration-300"
                    required
                  />
                </div>

                <button
                  type="submit"
                  disabled={isSubmitting || attemptTracker.isBlocked}
                  className={`w-full py-3 px-6 rounded-xl transition-all duration-300 transform hover:-translate-y-1 hover:shadow-xl ${
                    isSubmitting || attemptTracker.isBlocked
                      ? 'bg-gray-400 cursor-not-allowed'
                      : 'bg-gradient-to-r from-secunova-blue to-secunova-light text-white'
                  }`}
                >
                  {isSubmitting ? 'Signing In...' : 'Sign In'}
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default LoginPage;
