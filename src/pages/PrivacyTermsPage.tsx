/**
 * ============================================================================
 * PROPRIETARY CUSTOM ENGINEERING & DESIGN ARCHITECTURE
 * ----------------------------------------------------------------------------
 * All design, software architecture, UI/UX components, and source code are
 * 100% custom-engineered and designed exclusively by SecuNova.
 *
 * CORE ARCHITECTURAL ETHOS:
 * - 100% Bespoke Code: Built strictly to client specifications from scratch.
 * - Zero Pre-Made Templates: No generic agency starters or off-the-shelf themes.
 * - Senior-Led AI-Augmented Workflows (Vibe Coding): 14-day execution cycles
 *   engineered for sub-second performance (99+ Lighthouse Core Web Vitals).
 * - Full IP & Repository Handoff: 100% client asset and codebase ownership.
 *
 * Copyright (c) SecuNova. All rights reserved.
 * ============================================================================
 */
import { Helmet } from 'react-helmet-async';
import { Shield, Lock, FileCheck, Phone } from 'lucide-react';

const PrivacyTermsPage = () => {
  return (
    <div className="min-h-screen bg-gray-50">
      <Helmet>
        <title>Privacy Policy & Terms of Service | SecuNova Consulting Calgary</title>
        <meta name="description" content="SecuNova Consulting privacy policy and terms of service. Learn how we protect your data and the terms governing our consulting and engineering services in Calgary & Alberta." />
        <meta name="keywords" content="SecuNova privacy policy, SecuNova terms of service, consulting privacy Calgary, data protection Alberta, service terms Calgary, SecuNova Consulting legal" />
        <link rel="canonical" href="https://secunovainc.com/privacy-terms" />
      </Helmet>

      <section className="relative page-header pb-16 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-blue-600/5 via-transparent to-blue-800/5"></div>
        <div className="container mx-auto px-4 relative">
          <div className="text-center max-w-3xl mx-auto">
            <h1 className="text-4xl md:text-5xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-blue-800">
              Privacy Policy & Terms
            </h1>
            <p className="text-gray-600 text-lg mb-8">
              Your privacy and security are important to us. Learn how we protect your data and the terms governing our services.
            </p>
          </div>
        </div>
      </section>

      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto space-y-12">
            {/* Privacy Policy */}
            <div className="bg-white rounded-2xl shadow-sm p-8 md:p-10">
              <div className="flex items-center mb-8">
                <Shield className="h-8 w-8 text-secunova-blue mr-3" />
                <h2 className="text-3xl font-bold text-secunova-dark">Privacy Policy</h2>
              </div>

              <div className="prose max-w-none">
                <p className="text-gray-700 text-lg mb-8 leading-relaxed">
                  At SecuNova Inc., we take your privacy seriously. This privacy policy describes how we collect, use, and protect your personal information.
                </p>

                <div className="mb-10">
                  <h3 className="text-xl font-bold mb-4 text-gray-800">Information We Collect</h3>
                  <p className="text-gray-600 mb-4 leading-relaxed">
                  We collect information that you provide directly to us, including:
                </p>
                  <ul className="list-disc pl-6 text-gray-600 space-y-2 mb-6">
                    <li className="leading-relaxed">Name and contact information</li>
                    <li className="leading-relaxed">Company details</li>
                    <li className="leading-relaxed">Service usage data</li>
                    <li className="leading-relaxed">Communication preferences</li>
                </ul>
                </div>

                <div className="mb-10">
                <h3 className="text-xl font-bold mb-4 text-gray-800">How We Use Your Information</h3>
                  <p className="text-gray-600 mb-4 leading-relaxed">
                  We use the information we collect to:
                </p>
                  <ul className="list-disc pl-6 text-gray-600 space-y-2 mb-6">
                    <li className="leading-relaxed">Provide and maintain our services</li>
                    <li className="leading-relaxed">Send you technical notices and support messages</li>
                    <li className="leading-relaxed">Communicate with you about products, services, and events</li>
                    <li className="leading-relaxed">Respond to your comments and questions</li>
                </ul>
                </div>

                <div className="mb-10">
                <h3 className="text-xl font-bold mb-4 text-gray-800">Data Security</h3>
                  <p className="text-gray-600 leading-relaxed">
                  We implement appropriate technical and organizational security measures to protect your personal information against unauthorized access, alteration, disclosure, or destruction.
                </p>
                </div>

                <div className="mb-10 p-6 bg-blue-50 rounded-xl border border-blue-100">
                  <h3 className="text-xl font-bold mb-5 text-gray-800">Payment Security & Privacy</h3>
                  <p className="text-gray-700 mb-5 leading-relaxed">
                    SecuNova Inc. is committed to maintaining the highest standards of payment security and financial privacy. We have implemented strict policies to ensure your payment information remains secure and confidential.
                  </p>
                  
                  <div className="mb-5">
                    <h4 className="text-lg font-semibold mb-3 text-gray-800">We Do Not Store Payment Information</h4>
                    <p className="text-gray-600 leading-relaxed">
                      For your security and privacy protection, SecuNova Inc. does not store, retain, or have access to any sensitive payment information, including credit card numbers, debit card details, bank account numbers, or any other financial data on our servers.
                    </p>
                  </div>
                  
                  <div className="mb-5">
                    <h4 className="text-lg font-semibold mb-3 text-gray-800">Secure Payment Processing</h4>
                    <p className="text-gray-600 leading-relaxed">
                      All payment transactions are processed exclusively through Square, a PCI-DSS compliant, industry-leading third-party payment gateway. Square employs bank-level encryption and security protocols to ensure your payment information is handled securely.
                    </p>
                  </div>
                  
                  <div>
                    <h4 className="text-lg font-semibold mb-3 text-gray-800">Trusted Banking Partners</h4>
                    <p className="text-gray-600 leading-relaxed">
                      Payments to businesses and clients are processed and facilitated through major Canadian financial institutions, including but not limited to: Royal Bank of Canada (RBC), Toronto-Dominion Bank (TD), Bank of Montreal (BMO), Bank of Nova Scotia (Scotiabank), Canadian Imperial Bank of Commerce (CIBC), National Bank of Canada, Equitable Bank, and Laurentian Bank. All banking transactions are subject to Canadian banking regulations and security standards.
                    </p>
                  </div>
                </div>

                <div className="mb-10 p-6 bg-gray-50 rounded-xl border border-gray-200">
                  <h3 className="text-xl font-bold mb-5 text-gray-800 flex items-center">
                    <Phone className="h-5 w-5 mr-2 text-secunova-blue" />
                    Customer Calls & AI Assistant Services
                  </h3>
                  <p className="text-gray-700 mb-5 leading-relaxed">
                    SecuNova Inc. uses Interface AI Assistant, powered by Interface.ai, to handle initial customer calls and inquiries. This service helps us provide efficient customer support by answering common questions and directing inquiries to the appropriate staff members when necessary.
                  </p>
                  
                  <div className="mb-5">
                    <h4 className="text-lg font-semibold mb-3 text-gray-800">Third-Party Data Responsibility</h4>
                    <div className="bg-amber-50 border-l-4 border-amber-400 p-4 mb-4">
                      <p className="text-gray-800 font-semibold mb-2">Important Notice</p>
                      <p className="text-gray-700 leading-relaxed">
                        SecuNova Inc. does not collect, store, or have access to caller information, call recordings, conversation transcripts, or any other data collected during interactions with Interface AI Assistant. All caller information, including but not limited to phone numbers, names, conversation content, and inquiry details, is processed, stored, and managed exclusively by Interface.ai (the provider of Interface AI Assistant).
                      </p>
                    </div>
                  </div>
                  
                  <div className="mb-5">
                    <h4 className="text-lg font-semibold mb-3 text-gray-800">Privacy & Data Protection</h4>
                    <p className="text-gray-600 leading-relaxed mb-3">
                      Interface.ai, not SecuNova Inc., is solely responsible for the collection, storage, security, and management of all caller information and data associated with Interface AI Assistant interactions. This includes compliance with applicable privacy laws, data protection regulations, and security standards for all information collected through the Interface AI Assistant system.
                    </p>
                    <p className="text-gray-600 leading-relaxed">
                      For detailed information about how your data is handled when interacting with Interface AI Assistant, please review{' '}
                      <a 
                        href="https://interfaceai.com/privacy" 
                        target="_blank" 
                        rel="noopener noreferrer" 
                        className="text-secunova-blue hover:text-secunova-dark underline font-medium"
                      >
                        Interface.ai's privacy policy
                      </a>.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Divider */}
            <div className="border-t border-gray-200"></div>

            {/* Terms of Service */}
            <div className="bg-white rounded-2xl shadow-sm p-8 md:p-10">
              <div className="flex items-center mb-8">
                <FileCheck className="h-8 w-8 text-secunova-blue mr-3" />
                <h2 className="text-3xl font-bold text-secunova-dark">Terms of Service</h2>
              </div>

              <div className="prose max-w-none">
                <p className="text-gray-700 text-lg mb-8 leading-relaxed">
                  By using our services, you agree to these terms. Please read them carefully.
                </p>

                <div className="mb-8">
                <h3 className="text-xl font-bold mb-4 text-gray-800">Service Agreement</h3>
                  <p className="text-gray-600 leading-relaxed">
                  SecuNova Inc. provides IT support, cybersecurity, and web development services subject to the following terms and conditions.
                </p>
                </div>

                <div className="mb-8">
                <h3 className="text-xl font-bold mb-4 text-gray-800">User Responsibilities</h3>
                  <ul className="list-disc pl-6 text-gray-600 space-y-2">
                    <li className="leading-relaxed">Provide accurate and complete information</li>
                    <li className="leading-relaxed">Maintain the confidentiality of your account credentials</li>
                    <li className="leading-relaxed">Use our services in compliance with applicable laws</li>
                    <li className="leading-relaxed">Notify us immediately of any unauthorized access</li>
                </ul>
                </div>

                <div className="mb-8">
                <h3 className="text-xl font-bold mb-4 text-gray-800">Service Level Agreements</h3>
                  <p className="text-gray-600 leading-relaxed">
                  Our service level agreements specify response times, availability, and support coverage. These terms vary by service package and are detailed in your service agreement.
                </p>
                </div>

                <div className="mb-8">
                <h3 className="text-xl font-bold mb-4 text-gray-800">Limitation of Liability</h3>
                  <p className="text-gray-600 leading-relaxed">
                  SecuNova Inc. shall not be liable for any indirect, incidental, special, consequential, or punitive damages resulting from your use or inability to use our services.
                </p>
                </div>

                <div>
                <h3 className="text-xl font-bold mb-4 text-gray-800">Changes to Terms</h3>
                  <p className="text-gray-600 leading-relaxed">
                  We reserve the right to modify these terms at any time. We will notify you of any material changes via email or through our services.
                </p>
                </div>
              </div>
            </div>

            {/* Contact Section */}
            <div className="bg-gradient-to-br from-blue-50 to-blue-100 rounded-2xl shadow-md p-8 md:p-10 border border-blue-200">
              <div className="flex items-center mb-6">
                <Lock className="h-8 w-8 text-secunova-blue mr-3" />
                <h3 className="text-2xl font-bold text-secunova-dark">Questions About Privacy & Terms?</h3>
              </div>
              <p className="text-gray-700 mb-6 leading-relaxed text-lg">
                If you have any questions about our privacy policy or terms of service, please contact our privacy team.
              </p>
              <a
                href="mailto:info@secunovainc.com"
                className="inline-flex items-center justify-center px-6 py-3 border border-transparent text-base font-medium rounded-xl text-white bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-700 hover:to-blue-800 transition-all duration-300 transform hover:-translate-y-1 hover:shadow-xl"
              >
                Contact Privacy Team
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default PrivacyTermsPage;