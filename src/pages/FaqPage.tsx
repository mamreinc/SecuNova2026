/*
========================================
FAQ PAGE COMPONENT
Custom Built by SecuNova Inc.
========================================

Frequently asked questions organized by service category.

Features:
- Categorized FAQ sections
- Expandable question/answer format
- Comprehensive service coverage
- Easy navigation and search

Built from scratch for optimal user experience.
========================================
*/

import React from 'react';
import { Helmet } from 'react-helmet-async';
import { ChevronDown } from 'lucide-react';

/* ========================================
   START: FAQ PAGE COMPONENT
   Main FAQ page with categorized questions and answers
   ======================================== */
const FaqPage = () => {
  /* ========================================
     START: FAQ Data
     Comprehensive FAQ content organized by service categories
     ======================================== */
  const faqs = [
    {
      category: 'Getting Started',
      questions: [
        { q: 'Who is SecuNova a good fit for?', a: 'SMBs and mid‑market teams that value security, reliability, and measurable outcomes. Common profiles: professional services, construction, healthcare, non‑profit, retail, education and SaaS startups.' },
        { q: 'How do we start?', a: 'Begin with a short discovery call. We outline goals, risks and priorities, then propose either an assessment, a managed services plan, or a fixed‑scope project.' },
        { q: 'What does onboarding include?', a: 'Access provisioning, asset and risk inventory, backup and MFA baselines, monitoring setup, ticketing escalation rules, and a 90‑day roadmap.' },
        { q: 'Where do you work?', a: 'We are Calgary‑based and serve clients across Alberta. Remote delivery is standard; on‑site visits are available as needed.' },
      ],
    },
    {
      category: 'Support & SLAs',
      questions: [
        { q: 'What are your support hours?', a: '24/7 for managed clients. Business hours 9:00-18:00 MT with target first response under 60-120 minutes based on severity. After-hours emergency escalation is available.' },
        { q: 'How do I open a ticket?', a: 'Use the support portal or email helpdesk@secunovainc.com with your company, contact info, and issue details. Screenshots/logs help accelerate diagnosis.' },
        { q: 'Do you provide on‑site support?', a: 'Yes, in Calgary and surrounding areas when remote resolution is not sufficient.' },
        { q: 'Do you have documented SLAs?', a: 'Yes. SLAs define severity levels, response and resolution targets, and escalation paths. We review SLA performance in quarterly business reviews.' },
      ],
    },
    {
      category: 'Security & Compliance',
      questions: [
        { q: 'What is your security baseline?', a: 'MFA everywhere, device hardening, EDR, patching, email security, backups with immutability, least‑privilege access, logging and monitoring.' },
        { q: 'Do you run security assessments?', a: 'Yes. Vulnerability scans, risk register, control gaps and a remediation roadmap. Recommended quarterly with continuous monitoring.' },
        { q: 'Do you support compliance (PIPEDA/FOIP, SOC 2, HIPAA, ISO 27001)?', a: 'We align controls and documentation to your framework. We assist with policies, evidence collection and auditor readiness.' },
        { q: 'Incident response coverage?', a: 'Containment, investigation, communication, recovery and lessons learned. Runbooks and tabletop exercises are included for managed clients.' },
        { q: 'Data residency?', a: 'We can keep data in Canadian regions when using supported cloud providers and backup platforms.' },
      ],
    },
    {
      category: 'Cloud & Microsoft/Google',
      questions: [
        { q: 'Which clouds do you support?', a: 'Microsoft 365/Azure, Google Workspace/Cloud and AWS. We choose based on workload, budget and compliance.' },
        { q: 'Do you migrate email and files?', a: 'Yes. Cutover or staged migrations with coexistence where required. We plan DNS changes, identity, and rollback.' },
        { q: 'Do you manage backups for M365/Google?', a: 'Yes. SaaS backups are configured with retention, immutability and periodic restore tests.' },
        { q: 'Cost optimization?', a: 'Rightsizing, reserved/committed plans, lifecycle policies and automated cleanup with monthly reports.' },
      ],
    },
    {
      category: 'Networks & Devices',
      questions: [
        { q: 'Do you monitor networks 24/7?', a: 'Yes. Performance, availability and security events. Alerts feed our NOC/SOC with documented triage.' },
        { q: 'Wi‑Fi and VPN?', a: 'We design secure wireless with segmentation and implement site‑to‑site/user VPN with MFA and device posture checks.' },
        { q: 'Device management?', a: 'Lifecycle management with RMM/MDM: onboarding, patching, encryption, profiles, and secure deprovisioning.' },
      ],
    },
    {
      category: 'Web Development & SEO',
      questions: [
        { q: 'What stacks do you use?', a: 'React, TypeScript, Node, Tailwind and modern tooling. We focus on accessibility, performance and security.' },
        { q: 'How long does a website take?', a: 'Typical marketing sites: ~4-6 weeks. Larger sites/apps: 8-12+ weeks depending on scope and integrations.' },
        { q: 'Do you provide hosting and maintenance?', a: 'Yes. Managed hosting, CI/CD, uptime monitoring, backups and vulnerability patching.' },
        { q: 'Who owns the code and content?', a: 'You do. We assign IP upon final payment; repositories and assets are shared with your team.' },
        { q: 'SEO approach?', a: 'Technical SEO (CWV, structure, schema), content strategy and ethical link building with measurable KPIs.' },
      ],
    },
    {
      category: 'Pricing & Billing',
      questions: [
        { q: 'How do you price support?', a: 'Per‑user managed plans starting around $95/user/mo for essentials, with options for advanced security. Hourly ad‑hoc work is available.' },
        { q: 'Do you offer fixed‑price projects?', a: 'Yes. Clear scope, milestones, and acceptance criteria with weekly demos.' },
        { q: 'Payment terms?', a: 'Monthly by default; quarterly/annual available. We accept major payment methods.' },
        { q: 'Cancellation?', a: 'Most agreements allow 30‑day notice after the initial term. We provide offboarding and handover assistance.' },
      ],
    },
    {
      category: 'Legal & Data',
      questions: [
        { q: 'Do you sign NDAs and DPAs?', a: 'Yes. Mutual NDAs and data‑processing addenda are available. We support confidentiality and privacy requirements.' },
        { q: 'Backups and disaster recovery?', a: 'Versioned, immutable backups with periodic restore tests; DR runbooks for critical systems.' },
        { q: 'Third‑party access?', a: 'Least‑privilege, time‑bound access with logging. Vendor access follows approval workflows.' },
      ],
    },
  ];
  /* ========================================
     END: FAQ Data
     ======================================== */

  return (
    <div className="min-h-screen bg-gray-50">
      {/* ========================================
          START: SEO Head Section
          Meta tags and page title for search optimization
          ======================================== */}
      <Helmet>
        <title>FAQ - SecuNova Inc. Calgary | IT Services Questions | 50+ Specialists | 24/7 Support</title>
        <meta name="description" content="Frequently asked questions about SecuNova Inc.'s IT services in Calgary. Get answers about our 50+ specialists team, 24/7 technical support, cybersecurity solutions, web development, pricing, service packages, response times, and enterprise-grade solutions for Alberta SMEs. Founded 2016." />
        <meta name="keywords" content="SecuNova FAQ, IT services questions Calgary, technical support FAQ, cybersecurity questions, web development FAQ, IT support pricing Calgary, SecuNova response time, IT agency FAQ Alberta, enterprise IT questions, SME IT solutions FAQ, SecuNova specialists, Calgary IT FAQ" />
        <link rel="canonical" href="https://secunovainc.com/faq" />

        {/* OpenGraph Tags */}
        <meta property="og:title" content="FAQ - SecuNova Inc. Calgary | IT Services Questions Answered" />
        <meta property="og:description" content="Get answers about SecuNova's IT services. 50+ specialists. 24/7 support. Enterprise solutions. Pricing. Service packages. Response times." />
        <meta property="og:url" content="https://secunovainc.com/faq" />
        <meta property="og:type" content="website" />
        <meta property="og:image" content="https://secunovainc.com/iPhone.png" />
        <meta property="og:site_name" content="SecuNova Inc." />

        {/* Twitter Card Tags */}
        <meta name="twitter:card" content="summary" />
        <meta name="twitter:title" content="FAQ - SecuNova Inc. Calgary" />
        <meta name="twitter:description" content="Answers to common questions about SecuNova's IT services, pricing, and support in Calgary." />

        {/* Additional SEO Tags */}
        <meta name="robots" content="index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1" />

        {/* Structured Data - FAQPage */}
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "FAQPage",
            "mainEntity": [
              {
                "@type": "Question",
                "name": "What services does SecuNova Inc. offer?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "SecuNova Inc. provides comprehensive IT services including 24/7 technical support, cybersecurity solutions, web development, mobile app development, cloud solutions, managed IT services, and digital marketing."
                }
              },
              {
                "@type": "Question",
                "name": "Where is SecuNova Inc. located?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "SecuNova Inc. is located in Calgary, Alberta at #270, 1122 3 St SE Ste 1906, T2G 0E7. We serve clients across Alberta and beyond."
                }
              },
              {
                "@type": "Question",
                "name": "How many specialists does SecuNova have?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "SecuNova Inc. has 50+ in-house dedicated specialists with 15+ years of international experience in IT and cybersecurity."
                }
              }
            ]
          })}
        </script>

        {/* Structured Data - BreadcrumbList */}
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "BreadcrumbList",
            "itemListElement": [
              {
                "@type": "ListItem",
                "position": 1,
                "name": "Home",
                "item": "https://secunovainc.com"
              },
              {
                "@type": "ListItem",
                "position": 2,
                "name": "FAQ",
                "item": "https://secunovainc.com/faq"
              }
            ]
          })}
        </script>
      </Helmet>
      {/* ========================================
          END: SEO Head Section
          ======================================== */}

      {/* ========================================
          START: Hero Section
          Page header with FAQ introduction
          ======================================== */}
      <section className="relative page-header pb-16 overflow-hidden">
        {/* Background gradient overlay */}
        <div className="absolute inset-0 bg-gradient-to-br from-blue-600/5 via-transparent to-blue-800/5"></div>
        <div className="container mx-auto px-4 relative">
          <div className="text-center max-w-3xl mx-auto">
            {/* Page title */}
            <h1 className="text-4xl md:text-5xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-blue-800">
              Frequently Asked Questions
            </h1>
            {/* Page description */}
            <p className="text-gray-600 text-lg mb-12">
              Find answers to common questions about our services and solutions.
            </p>
          </div>
        </div>
      </section>
      {/* ========================================
          END: Hero Section
          ======================================== */}

      {/* ========================================
          START: FAQ Content Section
          Categorized FAQ sections with expandable questions
          ======================================== */}
      <section className="py-16 md:py-24">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            {faqs.map((category, index) => (
              <div key={index} className="mb-16">
                <h2 className="text-2xl font-bold mb-8 text-secunova-dark">{category.category}</h2>
                <div className="space-y-6">
                  {category.questions.map((faq, faqIndex) => (
                    <details
                      key={faqIndex}
                      className="group relative overflow-hidden rounded-2xl bg-white shadow-md transition-all duration-300 hover:shadow-xl"
                    >
                      <summary className="flex cursor-pointer items-center justify-between p-6 text-lg font-medium text-secunova-dark">
                        <span>{faq.q}</span>
                        <ChevronDown className="h-5 w-5 text-gray-500 transition-transform duration-300 group-open:rotate-180" />
                      </summary>
                      <div className="border-t border-gray-100 px-6 py-6">
                        <p className="text-gray-600 leading-relaxed">{faq.a}</p>
                      </div>
                    </details>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
      {/* ========================================
          END: FAQ Content Section
          ======================================== */}
    </div>
  );
};

/* ========================================
   END: FAQ PAGE COMPONENT
   ======================================== */
export default FaqPage;