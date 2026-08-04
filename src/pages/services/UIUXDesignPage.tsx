import React from 'react';
import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';
import { ArrowLeft, Layers, Users, Eye, Lightbulb, Zap, BarChart, CheckCircle, FileSearch, Smartphone, Palette, FileText } from 'lucide-react';

const UIUXDesignPage = () => {
  return (
    <div className="min-h-screen bg-white">
      <Helmet>
        <title>UI/UX Design Calgary | Website & App Redesign | SecuNova Consulting</title>
        <meta name="description" content="UI/UX design and website redesign in Calgary. User research, wireframes, Figma prototypes, and conversion-focused interface design that boosts engagement and credibility." />
        <meta name="keywords" content="UI UX design Calgary, user experience design Calgary, user interface design Calgary, website redesign Calgary, app UI design, Figma prototyping Calgary, wireframing Calgary, usability testing Calgary, interface design Alberta, conversion-focused design, SecuNova Consulting" />
        <link rel="canonical" href="https://secunovainc.com/services/ui-ux-design" />

        {/* OpenGraph Tags */}
        <meta property="og:title" content="UI/UX Design Calgary | Website & App Redesign | SecuNova Consulting" />
        <meta property="og:description" content="Professional UI/UX design in Calgary. User research, wireframing, prototyping. Create intuitive interfaces that users love for Alberta businesses." />
        <meta property="og:url" content="https://secunovainc.com/services/ui-ux-design" />
        <meta property="og:type" content="website" />
        <meta property="og:image" content="https://secunovainc.com/og-image.png" />
        <meta property="og:image:width" content="1200" />
        <meta property="og:image:height" content="630" />
        <meta property="og:site_name" content="SecuNova Consulting" />

        {/* Twitter Card */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="UI/UX Design Calgary | SecuNova Consulting" />
        <meta name="twitter:description" content="Professional UI/UX design services. User research, wireframing, prototyping. Calgary & Alberta." />
        <meta name="twitter:image" content="https://secunovainc.com/og-image.png" />

        {/* BreadcrumbList Schema */}
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "BreadcrumbList",
            "itemListElement": [
              { "@type": "ListItem", "position": 1, "name": "Home", "item": "https://secunovainc.com" },
              { "@type": "ListItem", "position": 2, "name": "Services", "item": "https://secunovainc.com/services" },
              { "@type": "ListItem", "position": 3, "name": "UI/UX Design Calgary", "item": "https://secunovainc.com/services/ui-ux-design" }
            ]
          })}
        </script>

        {/* Structured Data */}
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Service",
            "name": "UI/UX Design Services Calgary",
            "description": "User experience and user interface design services including user research, wireframing, prototyping, and usability testing to create intuitive, user-friendly digital products for Alberta businesses.",
            "provider": {
              "@type": "LocalBusiness",
              "name": "SecuNova Inc.",
              "telephone": "+1-403-401-1552",
              "address": {
                "@type": "PostalAddress",
                "streetAddress": "#270, 1122 3 St SE Ste 1906",
                "addressLocality": "Calgary",
                "addressRegion": "AB",
                "postalCode": "T2G 0E7",
                "addressCountry": "CA"
              }
            },
            "areaServed": {
              "@type": "City",
              "name": "Calgary"
            },
            "serviceType": "UI/UX Design"
          })}
        </script>
      </Helmet>

      <section className="relative min-h-screen overflow-hidden flex items-center justify-center pt-24 sm:pt-32 md:pt-40 pb-12 sm:pb-16 md:pb-20">
        <div className="absolute inset-0">
          <img
            src="https://images.unsplash.com/photo-1581291518857-4e27b48ff24e?w=1920&q=85&auto=format&fit=crop"
            alt="UI/UX Design Services"
            className="w-full h-full object-cover"
            loading="eager"
            fetchPriority="high"
            decoding="async"
          />
          <div className="absolute inset-0 bg-gradient-to-br from-secunova-dark/95 via-secunova-dark/90 to-secunova-blue/85"></div>
        </div>
        <div className="container mx-auto px-4 relative z-10 w-full">
          <div className="max-w-6xl mx-auto w-full">
            <div className="text-center text-white">
              <div className="inline-flex items-center bg-white/10 backdrop-blur-sm border border-white/20 px-6 py-3 rounded-full text-sm font-medium mb-6">
                <Layers className="h-4 w-4 mr-2 text-white" />
                  Professional UI/UX Design
                </div>
              
              <h1 className="text-4xl md:text-6xl font-bold mb-5 leading-tight">
                    Design That
                <span className="block text-secunova-light">Users Love</span>
                  </h1>
              
              <p className="text-xl text-blue-100 max-w-2xl mx-auto leading-relaxed">
                    Data-driven UI/UX design that transforms complex products into intuitive experiences. Research, design, test, iterate until it's perfect.
                  </p>
            </div>
          </div>
        </div>
      </section>

      {/* Value Pillars Section (BEM Refactored) */}
      <section className="secunova-section secunova-section--light">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-secunova-dark mb-4">
                User Experience <span className="gradient-text">That Drives Results</span>
              </h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                88% of users won't return to a website after a bad experience. We create interfaces that are intuitive, accessible, and delightful, keeping users engaged and converting.
              </p>
            </div>

            <div className="secunova-grid secunova-grid--3col mb-16">
              <div className="secunova-card">
                <div>
                  <div className="secunova-card__header">
                    <div className="secunova-card__icon">
                      <Users className="h-6 w-6 text-secunova-blue" />
                    </div>
                    <h3 className="secunova-card__title">User Research</h3>
                  </div>
                  <div className="secunova-card__body">
                    <p className="secunova-card__description">
                      Deep dive into your users' needs, behaviors, and pain points. Surveys, interviews, and analytics inform every design decision.
                    </p>
                  </div>
                </div>
              </div>

              <div className="secunova-card">
                <div>
                  <div className="secunova-card__header">
                    <div className="secunova-card__icon">
                      <Lightbulb className="h-6 w-6 text-secunova-blue" />
                    </div>
                    <h3 className="secunova-card__title">Information Architecture</h3>
                  </div>
                  <div className="secunova-card__body">
                    <p className="secunova-card__description">
                      Organize complex information into clear, logical structures. Users find what they need instantly with intuitive navigation.
                    </p>
                  </div>
                </div>
              </div>

              <div className="secunova-card">
                <div>
                  <div className="secunova-card__header">
                    <div className="secunova-card__icon">
                      <Eye className="h-6 w-6 text-secunova-blue" />
                    </div>
                    <h3 className="secunova-card__title">Wireframing & Prototyping</h3>
                  </div>
                  <div className="secunova-card__body">
                    <p className="secunova-card__description">
                      Interactive prototypes that feel real. Test and validate concepts before committing to development, saving time and money.
                    </p>
                  </div>
                </div>
              </div>

              <div className="secunova-card">
                <div>
                  <div className="secunova-card__header">
                    <div className="secunova-card__icon">
                      <Layers className="h-6 w-6 text-secunova-blue" />
                    </div>
                    <h3 className="secunova-card__title">Visual Design</h3>
                  </div>
                  <div className="secunova-card__body">
                    <p className="secunova-card__description">
                      Beautiful interfaces that align with your brand. Every pixel crafted to create cohesive, memorable user experiences.
                    </p>
                  </div>
                </div>
              </div>

              <div className="secunova-card">
                <div>
                  <div className="secunova-card__header">
                    <div className="secunova-card__icon">
                      <Zap className="h-6 w-6 text-secunova-blue" />
                    </div>
                    <h3 className="secunova-card__title">Usability Testing</h3>
                  </div>
                  <div className="secunova-card__body">
                    <p className="secunova-card__description">
                      Real users, real feedback. Identify friction points and validate design decisions with comprehensive usability testing.
                    </p>
                  </div>
                </div>
              </div>

              <div className="secunova-card">
                <div>
                  <div className="secunova-card__header">
                    <div className="secunova-card__icon">
                      <BarChart className="h-6 w-6 text-secunova-blue" />
                    </div>
                    <h3 className="secunova-card__title">Analytics & Optimization</h3>
                  </div>
                  <div className="secunova-card__body">
                    <p className="secunova-card__description">
                      Data-driven improvements post-launch. Heat maps, session recordings, and A/B testing to continuously enhance performance.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Service Showcase with Images */}
      <section className="secunova-section secunova-section--gray">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-secunova-dark mb-4">Our UI/UX Design Services</h2>
              <p className="text-lg text-secunova-dark/70">Comprehensive design solutions for your business needs</p>
            </div>

            {/* User Research & Wireframing */}
            <div className="mb-20">
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
                <div>
                  <div className="w-16 h-16 bg-secunova-blue/10 rounded-xl flex items-center justify-center mb-6">
                    <Users className="h-8 w-8 text-secunova-blue" />
                  </div>
                  <h3 className="text-2xl md:text-3xl font-bold text-secunova-dark mb-4">User Research & Wireframing</h3>
                  <p className="text-lg text-secunova-dark/70 mb-6">
                    Understand your users deeply through comprehensive research and create intuitive information architectures. Transform user insights into low-fidelity wireframes that map out the perfect user journey.
                  </p>
                  <ul className="space-y-3 mb-6">
                    <li className="flex items-start">
                      <CheckCircle className="h-5 w-5 text-secunova-blue mr-3 mt-0.5 flex-shrink-0" />
                      <span className="text-secunova-dark/80"><strong>User Interviews & Surveys:</strong> Deep dive into user needs, behaviors, and pain points through comprehensive research</span>
                    </li>
                    <li className="flex items-start">
                      <CheckCircle className="h-5 w-5 text-secunova-blue mr-3 mt-0.5 flex-shrink-0" />
                      <span className="text-secunova-dark/80"><strong>Persona Development:</strong> Create detailed user personas that guide all design decisions</span>
                    </li>
                    <li className="flex items-start">
                      <CheckCircle className="h-5 w-5 text-secunova-blue mr-3 mt-0.5 flex-shrink-0" />
                      <span className="text-secunova-dark/80"><strong>Information Architecture:</strong> Organize content logically for intuitive navigation</span>
                    </li>
                  </ul>
                </div>
                <div className="rounded-2xl overflow-hidden shadow-2xl border border-gray-100">
                  <img
                    src="https://images.unsplash.com/photo-1581291518633-83b4ebd1d83e?auto=format&fit=crop&w=1200&q=85"
                    alt="User Research & Wireframing"
                    className="w-full h-auto object-cover hover:scale-105 transition-transform duration-500"
                  />
                </div>
              </div>
            </div>

            {/* High-Fidelity UI Design */}
            <div className="mb-20">
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
                <div className="lg:order-2">
                  <div className="w-16 h-16 bg-secunova-light/10 rounded-xl flex items-center justify-center mb-6">
                    <Palette className="h-8 w-8 text-secunova-light" />
                  </div>
                  <h3 className="text-2xl md:text-3xl font-bold text-secunova-dark mb-4">High-Fidelity UI Design</h3>
                  <p className="text-lg text-secunova-dark/70 mb-6">
                    Craft pixel-perfect visual designs that elevate your brand and delight users. We create cohesive design systems, micro-interactions, and responsive layouts that work flawlessly across all devices.
                  </p>
                  <ul className="space-y-3 mb-6">
                    <li className="flex items-start">
                      <CheckCircle className="h-5 w-5 text-secunova-light mr-3 mt-0.5 flex-shrink-0" />
                      <span className="text-secunova-dark/80"><strong>Design Systems:</strong> Build scalable UI kit libraries for consistent branding</span>
                    </li>
                    <li className="flex items-start">
                      <CheckCircle className="h-5 w-5 text-secunova-light mr-3 mt-0.5 flex-shrink-0" />
                      <span className="text-secunova-dark/80"><strong>Responsive UI:</strong> Seamless designs adapted for mobile, tablet, and desktop</span>
                    </li>
                    <li className="flex items-start">
                      <CheckCircle className="h-5 w-5 text-secunova-light mr-3 mt-0.5 flex-shrink-0" />
                      <span className="text-secunova-dark/80"><strong>Interactive Prototypes:</strong> High-fidelity Figma prototypes for testing and developer handoff</span>
                    </li>
                  </ul>
                </div>
                <div className="rounded-2xl overflow-hidden shadow-2xl border border-gray-100 lg:order-1">
                  <img
                    src="https://images.unsplash.com/photo-1507238691740-187a5b1d37b8?auto=format&fit=crop&w=1200&q=85"
                    alt="High-Fidelity UI Design"
                    className="w-full h-auto object-cover hover:scale-105 transition-transform duration-500"
                  />
                </div>
              </div>
            </div>

            {/* Design Systems & Handoff */}
            <div>
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
                <div>
                  <div className="w-16 h-16 bg-secunova-blue/10 rounded-xl flex items-center justify-center mb-6">
                    <FileText className="h-8 w-8 text-secunova-blue" />
                  </div>
                  <h3 className="text-2xl md:text-3xl font-bold text-secunova-dark mb-4">Design Systems & Developer Handoff</h3>
                  <p className="text-lg text-secunova-dark/70 mb-6">
                    Bridge the gap between design and engineering with production-ready design systems and detailed developer documentation. Ensure your vision is executed precisely as intended.
                  </p>
                  <ul className="space-y-3 mb-6">
                    <li className="flex items-start">
                      <CheckCircle className="h-5 w-5 text-secunova-blue mr-3 mt-0.5 flex-shrink-0" />
                      <span className="text-secunova-dark/80"><strong>Component Libraries:</strong> Production-ready tokens, typography, and UI specs</span>
                    </li>
                    <li className="flex items-start">
                      <CheckCircle className="h-5 w-5 text-secunova-blue mr-3 mt-0.5 flex-shrink-0" />
                      <span className="text-secunova-dark/80"><strong>Developer Documentation:</strong> Detailed handoff notes, spacing scales, and interaction rules</span>
                    </li>
                    <li className="flex items-start">
                      <CheckCircle className="h-5 w-5 text-secunova-blue mr-3 mt-0.5 flex-shrink-0" />
                      <span className="text-secunova-dark/80"><strong>QA & Implementation Support:</strong> Direct collaboration with developers during build phase</span>
                    </li>
                  </ul>
                </div>
                <div className="rounded-2xl overflow-hidden shadow-2xl border border-gray-100">
                  <img
                    src="https://images.unsplash.com/photo-1542744094-3a31b272c490?auto=format&fit=crop&w=1200&q=85"
                    alt="Design Systems & Developer Handoff"
                    className="w-full h-auto object-cover hover:scale-105 transition-transform duration-500"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Our Design Process (BEM Refactored) */}
      <section className="secunova-section secunova-section--dark">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">Our Design Process</h2>
              <p className="text-xl text-gray-200">
                Human-centered design methodology that delivers results
              </p>
            </div>

            <div className="space-y-6">
              {[
                {
                  step: '01',
                  title: 'Research & Discovery',
                  description: 'Understand your users, business goals, and competitive landscape through comprehensive research and stakeholder interviews.'
                },
                {
                  step: '02',
                  title: 'Define & Ideate',
                  description: 'Create user personas, journey maps, and define core features. Brainstorm solutions and prioritize based on impact and feasibility.'
                },
                {
                  step: '03',
                  title: 'Design & Prototype',
                  description: 'Build low-fidelity wireframes, then high-fidelity mockups. Create interactive prototypes for user testing and feedback.'
                },
                {
                  step: '04',
                  title: 'Test & Validate',
                  description: 'Conduct usability testing with real users. Analyze results, identify issues, and iterate on designs until optimal.'
                },
                {
                  step: '05',
                  title: 'Deliver & Support',
                  description: 'Hand off design specs to development with detailed documentation. Post-launch analysis and continuous improvement.'
                }
              ].map((item, index) => (
                <div key={index} className="secunova-card secunova-card--glass">
                  <div>
                    <div className="secunova-card__header">
                      <span className="text-3xl sm:text-4xl font-black text-secunova-light shrink-0">
                        {item.step}
                      </span>
                      <h3 className="secunova-card__title">{item.title}</h3>
                    </div>
                    <div className="secunova-card__body">
                      <p className="secunova-card__description">{item.description}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Design Services We Offer (BEM Refactored) */}
      <section className="secunova-section secunova-section--gray">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-secunova-dark mb-4">
                Design Services We Offer
              </h2>
              <p className="text-xl text-gray-600">
                End-to-end UX solutions for web and mobile
              </p>
            </div>

            <div className="secunova-grid">
              {[
                { name: 'Web Application UX', desc: 'Complex dashboards and admin panels' },
                { name: 'Mobile App Design', desc: 'iOS and Android interfaces' },
                { name: 'E-Commerce UX', desc: 'Optimized shopping experiences' },
                { name: 'SaaS Product Design', desc: 'Enterprise software interfaces' },
                { name: 'Design Systems', desc: 'Scalable component libraries' },
                { name: 'Accessibility Audits', desc: 'WCAG 2.1 compliance' }
              ].map((service, index) => (
                <div key={index} className="secunova-card">
                  <div>
                    <div className="secunova-card__header">
                      <div className="secunova-card__icon">
                        <CheckCircle className="h-6 w-6 text-secunova-blue" />
                      </div>
                      <h4 className="secunova-card__title">{service.name}</h4>
                    </div>
                    <div className="secunova-card__body">
                      <p className="secunova-card__description">{service.desc}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-secunova-dark mb-6">
              Ready to Improve Your User Experience?
            </h2>
            <p className="text-xl text-gray-600 mb-8">
              Let's create intuitive, beautiful interfaces that your users will love. Schedule a free UX consultation today.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                to="/contact"
                className="btn btn-gradient btn-md"
              >
                <span className="flex items-center justify-center relative z-10">
                  Start Your Design Project
                </span>
              </Link>
              <a
                href="tel:403-401-1552"
                className="btn btn-outline btn-md"
              >
                Call 403-401-1552
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default UIUXDesignPage;
