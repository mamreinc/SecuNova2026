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

import { Helmet } from 'react-helmet-async';
import { Shield, Lock, FileCheck, Sparkles } from 'lucide-react';
import { buildSeoTags } from '../utils/seo-meta';
import SEOSchema from '../components/SEOSchema';

const PrivacyTermsPage = () => {
  return (
    <div className="min-h-screen bg-gray-50">
      <Helmet>
        <title>Privacy Policy & Terms of Service | SecuNova Consulting Calgary</title>
        <meta name="description" content="SecuNova Consulting privacy policy and terms of service. Learn how we protect your data and the terms governing our advisory and governance services in Calgary & Alberta." />
        <meta name="keywords" content="SecuNova privacy policy, SecuNova terms of service, consulting privacy Calgary, data protection Alberta, service terms Calgary, SecuNova Consulting legal" />
        <link rel="canonical" href="https://secunovainc.com/privacy-terms" />
        {buildSeoTags({
          title: 'Privacy Policy & Terms of Service | SecuNova Consulting Calgary',
          description:
            'SecuNova Consulting privacy policy and terms of service. Learn how we protect your data and the terms governing our advisory and governance services in Calgary & Alberta.',
          url: '/privacy-terms',
          imageAlt: 'SecuNova Consulting - Privacy Policy & Terms',
        })}
      </Helmet>
      <SEOSchema
        type="webpage"
        data={{
          title: 'Privacy Policy & Terms of Service | SecuNova Consulting Calgary',
          description:
            'SecuNova Consulting privacy policy and terms of service. Learn how we protect your data and the terms governing our advisory and governance services in Calgary & Alberta.',
          url: 'https://secunovainc.com/privacy-terms',
        }}
      />

      <section className="relative min-h-[70vh] overflow-hidden flex items-center justify-center pt-32 sm:pt-36 pb-16 bg-secunova-dark text-white">
        <div className="absolute inset-0 bg-gradient-to-br from-secunova-dark via-gray-900 to-secunova-blue opacity-95"></div>
        <div className="container mx-auto px-4 relative z-10">
          <div className="text-center max-w-3xl mx-auto">
            <h1 className="hero-heading mb-6 text-white">
              <span className="block">Privacy Policy</span>
              <span className="block text-secunova-light mt-1">&amp; Legal Terms.</span>
            </h1>
            <p className="text-blue-100 text-lg mb-8 max-w-2xl mx-auto leading-relaxed">
              Your privacy and security are important to us. Learn how we protect your data and the terms governing our services.
            </p>
          </div>
        </div>
      </section>

      <section className="secunova-section secunova-section--gray">
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
                  This Privacy Policy describes how SecuNova Inc. (Business Number 714343225, Corporation Number 2026915245) collects, uses, and protects personal information provided to us in connection with our advisory and governance services and through our website. We are committed to handling your information with transparency and care.
                </p>

                <div className="mb-10">
                  <h3 className="text-xl font-bold mb-4 text-gray-800">Information We Collect</h3>
                  <p className="text-gray-600 mb-4 leading-relaxed">
                    We collect only the information that is reasonably necessary to respond to inquiries and deliver our services. This may include:
                  </p>
                  <ul className="list-disc pl-6 text-gray-600 space-y-2 mb-6">
                    <li className="leading-relaxed">Contact information you provide by email or telephone, such as your name, organization, and contact details</li>
                    <li className="leading-relaxed">Information shared during scoping calls, engagements, or under a mutual non-disclosure agreement</li>
                    <li className="leading-relaxed">Technical data generated by your visit to our website, such as IP address, browser type, and pages viewed</li>
                  </ul>
                </div>

                <div className="mb-10">
                  <h3 className="text-xl font-bold mb-4 text-gray-800">How We Use Your Information</h3>
                  <p className="text-gray-600 mb-4 leading-relaxed">
                    We use the information we collect solely for legitimate business purposes, including to:
                  </p>
                  <ul className="list-disc pl-6 text-gray-600 space-y-2 mb-6">
                    <li className="leading-relaxed">Respond to your inquiries and schedule consultations</li>
                    <li className="leading-relaxed">Prepare proposals and deliver the advisory, audit, and project governance services you request</li>
                    <li className="leading-relaxed">Comply with our legal, regulatory, and professional obligations</li>
                    <li className="leading-relaxed">Maintain and improve the security and functionality of our website</li>
                  </ul>
                  <p className="text-gray-600 leading-relaxed">
                    We do not sell, rent, or trade your personal information to any third party.
                  </p>
                </div>

                <div className="mb-10">
                  <h3 className="text-xl font-bold mb-4 text-gray-800">Data Security</h3>
                  <p className="text-gray-600 leading-relaxed">
                    We implement appropriate technical and organizational security measures to protect personal information against unauthorized access, alteration, disclosure, or destruction. Access to information is limited to personnel who require it to perform their duties, and confidential client information is governed by mutual non-disclosure agreements.
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
                    <Sparkles className="h-5 w-5 mr-2 text-secunova-blue" />
                    SecuNova AI Advisor
                  </h3>
                  <p className="text-gray-700 mb-5 leading-relaxed">
                    SecuNova AI Advisor is a proprietary artificial intelligence assistant designed specifically for SecuNova Inc. It is available exclusively on our Contact page and is configured to answer questions about our services, including strategic advisory, project management as a service (PMaaS), and enterprise IT and security audits, in English.
                  </p>
                  
                  <div className="mb-5">
                    <h4 className="text-lg font-semibold mb-3 text-gray-800">No Personal Information Required</h4>
                    <p className="text-gray-600 leading-relaxed">
                      You are not required to provide any personal information to use the assistant. The assistant draws exclusively from SecuNova's own in-house service knowledge base.
                    </p>
                  </div>
                  
                  <div>
                    <h4 className="text-lg font-semibold mb-3 text-gray-800">Privacy & Data Handling</h4>
                    <p className="text-gray-600 leading-relaxed">
                      Conversations with the assistant are processed locally in your browser and are not stored on SecuNova servers or transmitted to third parties. The assistant does not collect, retain, or have access to any personal information. For formal engagements or confidential matters, we invite you to contact a senior partner directly by email at{' '}
                      <a href="mailto:hello@secunovainc.com" className="text-secunova-blue hover:text-secunova-dark underline font-medium">hello@secunovainc.com</a>{' '}
                      or by telephone at{' '}
                      <a href="tel:403-401-1552" className="text-secunova-blue hover:text-secunova-dark underline font-medium">403-401-1552</a>.
                    </p>
                  </div>
                </div>

                <div className="mb-10">
                  <h3 className="text-xl font-bold mb-4 text-gray-800">Cookies & Technical Data</h3>
                  <p className="text-gray-600 leading-relaxed">
                    Our website may collect standard technical data, such as IP address, browser type, and device information, to maintain security and improve site performance. We do not use advertising trackers or third-party profiling cookies.
                  </p>
                </div>

                <div className="mb-10">
                  <h3 className="text-xl font-bold mb-4 text-gray-800">Disclosure of Information</h3>
                  <p className="text-gray-600 leading-relaxed">
                    We do not disclose your personal information to third parties, except where necessary to deliver the services you have requested, to comply with a legal obligation, or with your consent. Any service provider engaged on our behalf is bound by confidentiality obligations.
                  </p>
                </div>

                <div className="mb-10">
                  <h3 className="text-xl font-bold mb-4 text-gray-800">Your Rights</h3>
                  <p className="text-gray-600 leading-relaxed">
                    Subject to applicable law, you may request access to, correction of, or deletion of your personal information held by us. To exercise these rights, contact us using the details below.
                  </p>
                </div>

                <div className="mb-10">
                  <h3 className="text-xl font-bold mb-4 text-gray-800">Changes to This Policy</h3>
                  <p className="text-gray-600 leading-relaxed">
                    We may update this Privacy Policy from time to time. Material changes will be posted on this page, and the revised policy will apply from the date of posting.
                  </p>
                </div>

                <div>
                  <h3 className="text-xl font-bold mb-4 text-gray-800">Contact</h3>
                  <p className="text-gray-600 leading-relaxed">
                    For questions about this Privacy Policy or to exercise your privacy rights, contact us at <a href="mailto:hello@secunovainc.com" className="text-secunova-blue hover:text-secunova-dark underline font-medium">hello@secunovainc.com</a> or by telephone at <a href="tel:403-401-1552" className="text-secunova-blue hover:text-secunova-dark underline font-medium">403-401-1552</a>.
                  </p>
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
                  These Terms of Service govern your use of the SecuNova website and your engagement of SecuNova Inc. for strategic advisory, project management, and governance services. Please read them carefully before engaging our services.
                </p>

                <div className="mb-8">
                  <h3 className="text-xl font-bold mb-4 text-gray-800">1. Nature of Our Services</h3>
                  <p className="text-gray-600 leading-relaxed">
                    SecuNova Inc. (Business Number 714343225, Corporation Number 2026915245) is an independent technology advisory and governance firm headquartered in Calgary, Alberta. We provide executive strategic advisory, project management as a service (PMaaS), cybersecurity and IT risk audits, and digital transformation governance.
                  </p>
                  <p className="text-gray-600 leading-relaxed mt-3">
                    Our services are advisory and governance oriented. Program and project delivery is supervised by our senior partners and executed through accountable vendors, partners, or client resources, unless otherwise specified in a written engagement agreement.
                  </p>
                </div>

                <div className="mb-8">
                  <h3 className="text-xl font-bold mb-4 text-gray-800">2. Engagement Documentation</h3>
                  <p className="text-gray-600 leading-relaxed">
                    Each engagement is governed by a written statement of work, proposal, or master services agreement that defines the scope, deliverables, milestones, fees, and acceptance criteria. Where a conflict arises between these general terms and a signed engagement agreement, the signed agreement prevails.
                  </p>
                </div>

                <div className="mb-8">
                  <h3 className="text-xl font-bold mb-4 text-gray-800">3. Client Responsibilities</h3>
                  <ul className="list-disc pl-6 text-gray-600 space-y-2">
                    <li className="leading-relaxed">Provide accurate and complete information relevant to the engagement</li>
                    <li className="leading-relaxed">Grant reasonable access to systems, personnel, and records required to deliver the services</li>
                    <li className="leading-relaxed">Designate a decision-maker with authority to review deliverables and approve milestones</li>
                    <li className="leading-relaxed">Use our website and services in compliance with applicable laws</li>
                    <li className="leading-relaxed">Notify us immediately of any unauthorized access or suspected security incident</li>
                  </ul>
                </div>

                <div className="mb-8">
                  <h3 className="text-xl font-bold mb-4 text-gray-800">4. Fees, Invoicing &amp; Payment</h3>
                  <p className="text-gray-600 leading-relaxed">
                    Fees, payment schedules, and invoicing terms are defined in the applicable engagement agreement. Where not otherwise specified, invoices are due upon receipt. Payments are processed securely through Square, a PCI-DSS compliant payment gateway, and through established Canadian banking institutions.
                  </p>
                  <p className="text-gray-600 leading-relaxed mt-3">
                    SecuNova does not store, retain, or have access to sensitive payment information such as credit card, debit card, or bank account details on our systems.
                  </p>
                </div>

                <div className="mb-8">
                  <h3 className="text-xl font-bold mb-4 text-gray-800">5. Intellectual Property</h3>
                  <p className="text-gray-600 leading-relaxed">
                    You retain all rights to your pre-existing materials, data, and intellectual property. Upon full payment, deliverables prepared specifically for your engagement are provided for your internal business use. SecuNova retains ownership of its methodologies, frameworks, templates, and proprietary tools, together with any pre-existing materials incorporated into its deliverables.
                  </p>
                </div>

                <div className="mb-8">
                  <h3 className="text-xl font-bold mb-4 text-gray-800">6. Confidentiality</h3>
                  <p className="text-gray-600 leading-relaxed">
                    Where a mutual non-disclosure agreement is executed, we protect the confidential information you share with us during an engagement. Confidentiality obligations survive the conclusion of the engagement and apply to all personnel and authorized subcontractors involved in the delivery of services.
                  </p>
                </div>

                <div className="mb-8">
                  <h3 className="text-xl font-bold mb-4 text-gray-800">7. No Warranty &amp; Limitation of Liability</h3>
                  <p className="text-gray-600 leading-relaxed">
                    Advisory and audit deliverables reflect our professional opinion and analysis based on information available at the time of the engagement. We do not guarantee specific business outcomes. To the maximum extent permitted by law, our aggregate liability for any claim arising out of or relating to an engagement is limited to the fees paid for that engagement, and we are not liable for any indirect, incidental, special, consequential, or punitive damages.
                  </p>
                </div>

                <div className="mb-8">
                  <h3 className="text-xl font-bold mb-4 text-gray-800">8. Independent Relationship</h3>
                  <p className="text-gray-600 leading-relaxed">
                    SecuNova operates as an independent contractor. Nothing in these terms or in any engagement creates a partnership, joint venture, employment, or agency relationship between you and SecuNova.
                  </p>
                </div>

                <div className="mb-8">
                  <h3 className="text-xl font-bold mb-4 text-gray-800">9. Changes to Terms</h3>
                  <p className="text-gray-600 leading-relaxed">
                    We may revise these terms from time to time. Material changes will be posted on this page and, where appropriate, communicated to active clients. Continued use of our website or services after changes take effect constitutes acceptance of the revised terms.
                  </p>
                </div>

                <div className="mb-8">
                  <h3 className="text-xl font-bold mb-4 text-gray-800">10. Governing Law</h3>
                  <p className="text-gray-600 leading-relaxed">
                    These terms are governed by the laws of the Province of Alberta and the applicable laws of Canada. Any disputes arising under these terms are subject to the exclusive jurisdiction of the courts of Alberta, sitting in the City of Calgary.
                  </p>
                </div>

                <div>
                  <h3 className="text-xl font-bold mb-4 text-gray-800">11. Contact</h3>
                  <p className="text-gray-600 leading-relaxed">
                    For questions about these terms or our services, contact us at <a href="mailto:hello@secunovainc.com" className="text-secunova-blue hover:text-secunova-dark underline font-medium">hello@secunovainc.com</a> or by telephone at <a href="tel:403-401-1552" className="text-secunova-blue hover:text-secunova-dark underline font-medium">403-401-1552</a>.
                  </p>
                </div>
              </div>
            </div>

            {/* Contact Section */}
            <div className="bg-gradient-to-br from-secunova-blue/10 to-secunova-light/15 rounded-2xl shadow-md p-8 md:p-10 border border-secunova-blue/20">
              <div className="flex items-center mb-6">
                <Lock className="h-8 w-8 text-secunova-blue mr-3" />
                <h3 className="text-2xl font-bold text-secunova-dark">Questions About Privacy &amp; Terms?</h3>
              </div>
              <p className="text-gray-700 mb-6 leading-relaxed text-lg">
                If you have any questions about our privacy policy or terms of service, please contact our team.
              </p>
              <a
                href="mailto:hello@secunovainc.com"
                className="inline-flex items-center justify-center px-6 py-3 border border-transparent text-base font-medium rounded-xl text-white bg-gradient-to-r from-secunova-blue to-secunova-light hover:from-secunova-light hover:to-secunova-blue transition-all duration-300 transform hover:-translate-y-1 hover:shadow-xl"
              >
                Contact Privacy &amp; Legal Team
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default PrivacyTermsPage;