import React from 'react';
import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';
import { ArrowLeft, ArrowRight, ClipboardCheck, Target, CheckCircle, Users, BarChart, Shield, Zap, Clock, AlertTriangle, TrendingUp, Briefcase, FileText, Network, Star, Phone, User, MapPin, Award, Code, Sparkles, Quote, BadgeCheck, Globe, Layers, Cpu, CheckCircle2, PhoneCall } from 'lucide-react';
import CtaSection from '../../components/CtaSection';

const DigitalProjectManagementPage = () => {
  const capabilities = [
    {
      icon: <Target className="h-6 w-6 text-secunova-blue" />,
      title: 'Agile & Waterfall Delivery',
      description: 'Framework-agnostic project execution. We adapt to your methodology or recommend the right one for your scope, timeline, and team structure.'
    },
    {
      icon: <Shield className="h-6 w-6 text-secunova-light" />,
      title: 'Risk Mitigation & Governance',
      description: 'Proactive risk identification, escalation protocols, and governance frameworks that prevent scope creep, budget overruns, and missed deadlines.'
    },
    {
      icon: <BarChart className="h-6 w-6 text-secunova-blue" />,
      title: 'Budget & Timeline Tracking',
      description: 'Real-time financial dashboards, milestone tracking, and variance reporting that keep every stakeholder aligned and every dollar accounted for.'
    },
    {
      icon: <Users className="h-6 w-6 text-secunova-light" />,
      title: 'Stakeholder Communication',
      description: 'Structured reporting cadences, executive summaries, and steering committee facilitation. No surprises, no information gaps.'
    },
    {
      icon: <Network className="h-6 w-6 text-secunova-blue" />,
      title: 'Vendor & Resource Management',
      description: 'Third-party vendor oversight, contract enforcement, and resource allocation optimization to maximize delivery velocity.'
    },
    {
      icon: <FileText className="h-6 w-6 text-secunova-light" />,
      title: 'Documentation & Handoff',
      description: 'Comprehensive project documentation, knowledge transfer plans, and handoff protocols that ensure continuity beyond the engagement.'
    }
  ];

  const deliveryModels = [
    {
      title: 'Project Management as a Service (PMaaS)',
      description: 'Embed a senior SecuNova project manager directly into your team on a retainer basis. Ideal for organizations running multiple concurrent digital initiatives.',
      highlights: ['Dedicated senior PM', 'Monthly retainer model', 'Multi-project oversight', 'Executive reporting included'],
      badge: 'Most Popular'
    },
    {
      title: 'Fixed-Scope Project Delivery',
      description: 'End-to-end management of a defined project from kickoff to deployment. Clear milestones, fixed budget, guaranteed delivery.',
      highlights: ['Defined scope & deliverables', 'Fixed-price engagement', 'Milestone-based payments', 'Post-launch support included'],
      badge: 'Best for Defined Projects'
    },
    {
      title: 'Technical Project Supervision',
      description: 'We act as your strategic technical shield. Our senior consultants oversee your existing vendor engagements to protect your capital and enforce quality.',
      highlights: ['Vendor accountability', 'Quality gate enforcement', 'Budget protection', 'Independent oversight'],
      badge: 'Capital Protection'
    }
  ];

  const outcomes = [
    { metric: '95%', label: 'On-Time Delivery Rate' },
    { metric: '40%', label: 'Average Cost Savings' },
    { metric: '100%', label: 'Scope Compliance' },
    { metric: '0', label: 'Missed Deadlines (Last 12 Months)' }
  ];

  return (
    <div className="min-h-screen bg-white">
      <Helmet>
        <title>Digital Project Management Calgary | PMaaS & IT Governance | SecuNova Inc.</title>
        <meta name="description" content="Expert digital project management services in Calgary. Project Management as a Service (PMaaS), Agile/Waterfall delivery, vendor oversight, budget governance. Protecting your digital investments since 2016." />
        <meta name="keywords" content="digital project management Calgary, PMaaS Calgary, project management as a service, IT project governance, Agile project management Alberta, vendor oversight Calgary, technical project supervision, budget governance, SecuNova project management" />
        <link rel="canonical" href="https://secunovainc.com/services/digital-project-management" />

        <meta property="og:title" content="Digital Project Management | PMaaS & IT Governance | SecuNova Inc." />
        <meta property="og:description" content="Expert digital project management. PMaaS, vendor oversight, and budget governance for North American businesses." />
        <meta property="og:url" content="https://secunovainc.com/services/digital-project-management" />
        <meta property="og:type" content="website" />

        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Service",
            "name": "Digital Project Management Calgary",
            "description": "Expert digital project management services including PMaaS, Agile/Waterfall delivery, vendor oversight, and budget governance for North American businesses.",
            "provider": {
              "@type": "LocalBusiness",
              "name": "SecuNova Inc.",
              "telephone": "+1-403-401-1552"
            },
            "areaServed": {
              "@type": "City",
              "name": "Calgary"
            },
            "serviceType": "Digital Project Management"
          })}
        </script>
      </Helmet>

      {/* Hero Section */}
      <section className="relative min-h-screen overflow-hidden flex items-center justify-center pt-24 sm:pt-32 md:pt-40 pb-12 sm:pb-16 md:pb-20">
        <div className="absolute inset-0">
          <img
            src="https://images.unsplash.com/photo-1552664730-d307ca884978?w=1920&q=85&auto=format&fit=crop"
            alt="Digital Project Management"
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
                <ClipboardCheck className="h-4 w-4 mr-2 text-white" />
                Digital Project Management
              </div>

              <h1 className="text-4xl md:text-6xl font-bold mb-5 leading-tight">
                Your Projects, Delivered.
                <span className="block text-secunova-light">On Time. On Budget. Zero Surprises.</span>
              </h1>

              <p className="text-xl text-blue-100 max-w-2xl mx-auto leading-relaxed">
                Senior-led project management that protects your capital, enforces accountability, and delivers results.
                From PMaaS to technical project supervision, we keep your digital investments on track.
              </p>

              <div className="flex flex-col sm:flex-row justify-center gap-4 mt-8">
                <Link to="/contact" className="btn btn-gradient btn-lg">
                  <span>Book a Free Strategy Call</span>
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Link>
                <a href="tel:403-401-1552" className="btn btn-outline-light btn-lg">
                  <Phone className="mr-2 h-5 w-5" />
                  <span>403-401-1552</span>
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Outcomes Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
              {outcomes.map((outcome, index) => (
                <div key={index} className="text-center group">
                  <div className="text-4xl md:text-5xl font-bold text-secunova-blue mb-2 group-hover:scale-105 transition-transform duration-300">{outcome.metric}</div>
                  <div className="text-sm text-gray-600 font-medium">{outcome.label}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Capabilities Grid */}
      <section className="py-16 md:py-24 bg-gradient-to-b from-white to-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <div className="inline-flex items-center bg-secunova-blue/10 text-secunova-blue px-6 py-3 rounded-full text-sm font-semibold mb-6">
                Core Capabilities
              </div>
              <h2 className="text-3xl md:text-5xl font-bold text-secunova-dark mb-6 leading-tight">
                End-to-End <span className="bg-clip-text text-transparent bg-gradient-to-r from-secunova-blue to-secunova-light">Project Governance</span>
              </h2>
              <p className="text-lg text-gray-600 max-w-3xl mx-auto">
                Every aspect of your project lifecycle managed with precision, transparency, and accountability.
              </p>
            </div>

            <div className="secunova-grid secunova-grid--3col">
              {capabilities.map((capability, index) => (
                <div key={index} className="secunova-card group">
                  <div>
                    <div className="secunova-card__header">
                      <div className="secunova-card__icon">
                        {capability.icon}
                      </div>
                      <h3 className="secunova-card__title">{capability.title}</h3>
                    </div>
                    <div className="secunova-card__body">
                      <p className="secunova-card__description">{capability.description}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Delivery Models (BEM Refactored) */}
      <section className="secunova-section secunova-section--light">
        <div className="container mx-auto px-4">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <div className="inline-flex items-center bg-secunova-blue/10 text-secunova-blue px-6 py-3 rounded-full text-sm font-semibold mb-6">
                Engagement Models
              </div>
              <h2 className="text-3xl md:text-5xl font-bold text-secunova-dark mb-6 leading-tight">
                Choose Your <span className="bg-clip-text text-transparent bg-gradient-to-r from-secunova-blue to-secunova-light">Delivery Model</span>
              </h2>
              <p className="text-lg text-gray-600 max-w-3xl mx-auto">
                Flexible engagement structures designed to match your organization's needs, scale, and budget.
              </p>
            </div>

            <div className="secunova-grid secunova-grid--3col">
              {deliveryModels.map((model, index) => (
                <div key={index} className="secunova-card group">
                  <div>
                    <div className="secunova-card__header">
                      <div className="secunova-card__icon">
                        <CheckCircle className="h-6 w-6 text-secunova-blue" />
                      </div>
                      <div className="secunova-card__header-content">
                        <h3 className="secunova-card__title group-hover:text-secunova-blue transition-colors duration-300">{model.title}</h3>
                        <span className="secunova-card__badge">
                          {model.badge}
                        </span>
                      </div>
                    </div>

                    <div className="secunova-card__body">
                      <p className="secunova-card__description">{model.description}</p>
                      <div className="secunova-card__list">
                        {model.highlights.map((item, i) => (
                          <div key={i} className="secunova-card__list-item">
                            <CheckCircle className="secunova-card__list-icon" />
                            <span>{item}</span>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>

                  <div className="secunova-card__footer">
                    <Link to="/contact" className="inline-flex items-center text-secunova-blue font-semibold transition-all group-hover:gap-3 gap-2 text-sm">
                      Get Started <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                    </Link>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Why SecuNova for PM (BEM Refactored) */}
      <section className="secunova-section secunova-section--gray">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="bg-white border border-gray-200 rounded-3xl p-8 md:p-12 shadow-sm">
              <div className="text-center mb-12">
                <h2 className="text-2xl md:text-4xl font-bold text-secunova-dark mb-4">
                  Why SecuNova for Project Management?
                </h2>
              </div>

              <div className="secunova-grid mb-10">
                {[
                  { icon: <Star className="h-6 w-6 text-secunova-blue" />, title: 'Senior Leadership, Not Junior PMs', desc: 'Every engagement is led by a senior consultant with 10+ years of enterprise delivery experience.' },
                  { icon: <AlertTriangle className="h-6 w-6 text-secunova-blue" />, title: 'Your Strategic Shield, Not Just Another Vendor', desc: 'Independent oversight that prioritizes your interests. We hold vendors accountable, not excuses.' },
                  { icon: <Clock className="h-6 w-6 text-secunova-blue" />, title: 'Proactive, Not Reactive', desc: 'We identify risks and resolve blockers before they impact your timeline or budget.' },
                  { icon: <TrendingUp className="h-6 w-6 text-secunova-blue" />, title: 'Measurable Results', desc: '95% on-time delivery, 40% average cost savings. Our track record speaks for itself.' }
                ].map((item, index) => (
                  <div key={index} className="secunova-card">
                    <div>
                      <div className="secunova-card__header">
                        <div className="secunova-card__icon">
                          {item.icon}
                        </div>
                        <h3 className="secunova-card__title">{item.title}</h3>
                      </div>
                      <div className="secunova-card__body">
                        <p className="secunova-card__description">{item.desc}</p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>

              <div className="text-center">
                <Link to="/contact" className="btn btn-gradient btn-lg">
                  Discuss Your Project <ArrowRight className="ml-2 h-5 w-5" />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

{/* Meet Your Project Manager */}
      <section className="py-20 md:py-28 bg-white border-t border-gray-100 relative">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            {/* Header */}
            <div className="text-center mb-16">
              <div className="inline-flex items-center gap-2 bg-blue-50 text-secunova-blue border border-blue-100 px-4 py-2 rounded-full text-xs font-semibold uppercase tracking-wider mb-4">
                <User className="h-4 w-4" />
                <span>Direct Founder Leadership</span>
              </div>
              <h2 className="text-3xl md:text-5xl font-bold text-secunova-dark tracking-tight mb-4">
                Meet Your Principal Project Manager
              </h2>
              <p className="text-gray-600 text-lg max-w-2xl mx-auto leading-relaxed">
                Senior expertise bridging complex IT infrastructure and high-performance digital delivery with complete transparency and accountability.
              </p>
            </div>

            {/* Profile Card Container */}
            <div className="bg-white border border-gray-200 rounded-3xl p-8 md:p-12 shadow-sm hover:shadow-md transition-shadow duration-300">
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center">
                
                {/* Image Column */}
                <div className="lg:col-span-5">
                  <div className="relative mx-auto max-w-md lg:max-w-none">
                    <div className="rounded-2xl overflow-hidden border border-gray-200 shadow-md aspect-[4/5] bg-gray-100">
                      <img
                        src="/img/Founder.jpg"
                        alt="Maisen Alamrein - Principal IT Solutions & Digital Project Manager"
                        className="w-full h-full object-cover"
                      />
                    </div>

                    {/* Stats Strip under photo */}
                    <div className="grid grid-cols-3 gap-3 mt-4">
                      <div className="bg-gray-50 border border-gray-200/80 rounded-xl p-3 text-center">
                        <div className="text-xl font-bold text-secunova-blue">10+ Yrs</div>
                        <div className="text-xs text-gray-500 font-medium mt-0.5">Global Experience</div>
                      </div>
                      <div className="bg-gray-50 border border-gray-200/80 rounded-xl p-3 text-center">
                        <div className="text-xl font-bold text-secunova-blue">95%+</div>
                        <div className="text-xs text-gray-500 font-medium mt-0.5">On-Time Delivery</div>
                      </div>
                      <div className="bg-gray-50 border border-gray-200/80 rounded-xl p-3 text-center">
                        <div className="text-xl font-bold text-secunova-blue">100%</div>
                        <div className="text-xs text-gray-500 font-medium mt-0.5">Scope Compliance</div>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Content Column */}
                <div className="lg:col-span-7 space-y-6">
                  <div>
                    <div className="inline-block bg-gray-100 text-gray-700 text-xs font-semibold px-3 py-1 rounded-md mb-2">
                      Calgary, Alberta • Principal Consultant
                    </div>
                    <h3 className="text-3xl font-bold text-secunova-dark">Maisen Alamrein</h3>
                    <p className="text-secunova-blue font-semibold mt-1 text-base">
                      Principal IT Solutions & Digital Project Manager
                    </p>
                  </div>

                  <p className="text-gray-600 text-base leading-relaxed">
                    Based in Calgary, I provide senior-level project oversight for organizations seeking reliable digital execution. Every SecuNova engagement is directed personally by me, eliminating junior account handoffs and ensuring direct accountability from kickoff to post-launch support.
                  </p>

                  <div className="bg-blue-50/60 border-l-4 border-secunova-blue p-5 rounded-r-xl">
                    <p className="text-gray-700 text-sm md:text-base italic leading-relaxed">
                      &ldquo;My philosophy is straightforward: deliver resilient, scalable technology that clients actually own, control, and understand. We eliminate budget overruns and hidden technical debt.&rdquo;
                    </p>
                  </div>

                  {/* Expertise Grid */}
                  <div>
                    <h4 className="text-sm font-bold text-secunova-dark uppercase tracking-wider mb-3">
                      Core Areas of Expertise
                    </h4>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                      {[
                        { title: 'Agile & Waterfall PM', desc: 'Scope definition, milestone tracking, and risk management.' },
                        { title: 'Cloud & Infrastructure', desc: 'GCP/AWS architecture with zero vendor lock-in.' },
                        { title: 'Modern Web Systems', desc: 'React.js, WordPress, and custom digital applications.' },
                        { title: 'IT Governance & Ops', desc: 'Identity controls, disaster recovery, and operational continuity.' }
                      ].map((item, index) => (
                        <div key={index} className="flex items-start gap-2.5 p-3 rounded-lg bg-gray-50 border border-gray-200/60">
                          <CheckCircle className="h-4 w-4 text-secunova-blue flex-shrink-0 mt-0.5" />
                          <div>
                            <div className="text-xs font-bold text-secunova-dark">{item.title}</div>
                            <div className="text-xs text-gray-600 mt-0.5 leading-snug">{item.desc}</div>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Actions */}
                  <div className="pt-4 flex flex-col sm:flex-row items-stretch sm:items-center gap-4">
                    <Link
                      to="/contact"
                      className="btn btn-gradient btn-md shadow-md hover:shadow-lg transition-all duration-300 group"
                    >
                      <span>Schedule a Strategy Call</span>
                      <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                    </Link>
                    <a
                      href="tel:403-401-1552"
                      className="btn btn-outline border-gray-300 text-gray-800 hover:border-secunova-blue hover:text-secunova-blue hover:bg-blue-50/50 btn-md shadow-sm transition-all duration-300"
                    >
                      <Phone className="mr-2 h-4 w-4 text-secunova-blue" />
                      <span>403-401-1552</span>
                    </a>
                  </div>
                </div>

              </div>
            </div>

          </div>
        </div>
      </section>

      <CtaSection />
    </div>
  );
};

export default DigitalProjectManagementPage;
