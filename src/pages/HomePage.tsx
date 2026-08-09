import { memo } from 'react';
import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';
import {
  ArrowRight, Shield, Zap, Phone, Crown, BarChart, Target, CheckCircle,
  Briefcase, Compass, Code, Gauge, RefreshCw, Users, Globe, ClipboardCheck,
  Scale, TrendingUp, Clock, Lightbulb, Database, LineChart, Award, Wrench
} from 'lucide-react';
import LazySection from '../components/LazySection';
import OptimizedImage from '../components/OptimizedImage';

const HomePage = () => {
  return (
    <div className="overflow-hidden">
      <Helmet>
        <title>SecuNova Inc. | SecuNova Consulting Calgary | Strategic Advisory &amp; Digital Transformation</title>
        <meta name="description" content="SecuNova Inc. (operating as SecuNova Consulting) is a Calgary-based advisory firm delivering strategic advisory, digital transformation, and Project Management as a Service (PMaaS) to restructure enterprises for the digital age." />
        <meta name="keywords" content="SecuNova Inc., SecuNova Consulting, strategic advisory Calgary, digital transformation Canada, PMaaS Calgary, business process reengineering, cloud transformation, cybersecurity risk management" />
        <link rel="canonical" href="https://secunovainc.com/" />

        {/* OpenGraph Tags */}
        <meta property="og:title" content="SecuNova Consulting Calgary | Strategic Advisory &amp; Digital Transformation" />
        <meta property="og:description" content="Strategic advisory, digital transformation, and Project Management as a Service (PMaaS) that restructure organizations for competitive advantage in the digital age." />
        <meta property="og:url" content="https://secunovainc.com/" />
        <meta property="og:type" content="website" />
        <meta property="og:image" content="https://secunovainc.com/og-image.png" />
        <meta property="og:site_name" content="SecuNova Consulting" />
        <meta property="og:locale" content="en_CA" />

        {/* Structured Data - Organization */}
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "ProfessionalService",
            "@id": "https://secunovainc.com",
            "name": "SecuNova Inc.",
            "alternateName": ["SecuNova", "SecuNova Consulting", "SecuNova Calgary"],
            "url": "https://secunovainc.com",
            "description": "Calgary-based advisory firm delivering strategic consulting, digital transformation, and Project Management as a Service (PMaaS).",
            "telephone": "+1-403-401-1552",
            "email": "hello@secunovainc.com",
            "address": {
              "@type": "PostalAddress",
              "streetAddress": "#270, 1122 3 St SE Ste 1906",
              "addressLocality": "Calgary",
              "addressRegion": "AB",
              "postalCode": "T2G 0E7",
              "addressCountry": "CA"
            },
            "areaServed": [
              { "@type": "State", "name": "Alberta" },
              { "@type": "Country", "name": "Canada" }
            ],
            "serviceType": [
              "Strategic Advisory & Business Planning",
              "Digital Transformation & Process Optimization",
              "Cybersecurity & Risk Management",
              "Customer Experience & Digital Solutions",
              "Project Management as a Service (PMaaS)"
            ]
          })}
        </script>
      </Helmet>

      {/* ========================================
          Hero Section
          ======================================== */}
      <section className="relative min-h-[70vh] overflow-hidden bg-secunova-dark pt-32 sm:pt-36 pb-16 flex flex-col justify-center">
        <div className="absolute inset-0 hero-bg-optimized">
          <OptimizedImage
            src="https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&w=1200&q=85"
            srcSet="https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&w=800&q=85 800w, https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&w=1200&q=85 1200w, https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&w=1920&q=85 1920w"
            sizes="100vw"
            alt="SecuNova corporate transformation"
            className="w-full h-full object-cover hero-zoom opacity-60"
            priority={true}
            loading="eager"
            fetchPriority="high"
            decoding="async"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-secunova-dark via-secunova-dark/90 to-secunova-dark/50"></div>
          <div className="absolute inset-0 bg-gradient-to-t from-secunova-dark via-transparent to-secunova-dark/60"></div>
        </div>

        <div className="container mx-auto px-4 relative z-10 flex flex-col items-center justify-center text-center w-full">
          <div className="max-w-4xl mx-auto w-full flex flex-col items-center">

            {/* Eyebrow Label */}
            <div className="inline-flex items-center gap-3 mb-6 px-4 py-2 rounded-full bg-white/5 border border-white/10 backdrop-blur-md animate-fade-in-down delay-100">
              <span className="block w-2 h-2 rounded-full bg-secunova-light animate-pulse"></span>
              <span className="text-[11px] sm:text-xs uppercase tracking-[0.3em] font-semibold text-secunova-light">
                Strategic Advisory &amp; Digital Transformation | Calgary, Canada
              </span>
            </div>

            <h1 className="text-4xl sm:text-6xl xl:text-7xl font-bold text-white leading-tight tracking-tight hero-title-optimized max-w-3xl">
              <span className="hero-line block">Restructure Your Organization</span>
              <span className="hero-line block text-secunova-light">For the Digital Age.</span>
            </h1>

            <p className="mt-8 max-w-2xl text-base sm:text-xl text-blue-100 leading-relaxed hero-description-optimized animate-fade-in-up delay-500">
              SecuNova pairs executive strategic advisory with on-demand project management (PMaaS), helping organizations reshape their operations, adopt digital models, and execute with discipline to strengthen competitive advantage and operational efficiency.
            </p>

            {/* Signature Momentum Meter */}
            <div className="mt-8 w-full max-w-md animate-fade-in-up delay-700">
              <div className="w-full h-[3px] bg-white/10 overflow-hidden rounded-full">
                <div className="momentum-bar h-full w-full bg-gradient-to-r from-secunova-blue via-secunova-light to-white"></div>
              </div>
              <div className="mt-3 flex items-center justify-between text-[11px] uppercase tracking-[0.25em] text-white/80">
                <span>Digital Maturity</span>
                <span className="text-secunova-light font-semibold">Transformation Ready</span>
              </div>
            </div>

            <div className="mt-10 flex flex-col sm:flex-row gap-4 animate-fade-in-up delay-1000">
              <Link
                to="/contact"
                className="btn btn-gradient btn-lg"
              >
                Schedule a Consultation
                <ArrowRight className="ml-2 h-4 w-4 text-white" />
              </Link>
              <Link
                to="/services"
                className="btn btn-outline-light btn-lg text-white"
              >
                Explore Our Services
              </Link>
            </div>

          </div>
        </div>
      </section>

      {/* ========================================
          Mandate & Value Proposition Section
          ======================================== */}
      <LazySection className="secunova-section secunova-section--gray border-b border-gray-200">
        <div className="container mx-auto px-4">
          <div className="max-w-5xl mx-auto">
            <div className="text-center max-w-3xl mx-auto mb-14">
              <div className="inline-flex items-center bg-secunova-blue/10 text-secunova-blue px-4 py-2 rounded-full text-xs font-bold uppercase tracking-widest mb-4">
                <Compass className="h-4 w-4 mr-2" />
                Our Mandate
              </div>
              <h2 className="text-3xl md:text-5xl font-bold text-secunova-dark tracking-tight leading-tight">
                Built to Rebuild &amp; <span className="bg-clip-text text-transparent bg-gradient-to-r from-secunova-blue to-secunova-light">Develop Modern Enterprises</span>
              </h2>
              <p className="text-lg text-secunova-dark/80 mt-6 leading-relaxed">
                Under the umbrella of strategic advisory and digital transformation, we deliver a wide range of advanced services that restructure and develop organizations, strengthening their competitive position and operational efficiency in the digital age.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8 mt-12 items-stretch">
              <div className="bg-white p-6 sm:p-8 rounded-2xl border border-gray-200/90 shadow-sm hover:shadow-md transition-all duration-300 flex flex-col justify-between h-full overflow-hidden">
                <div>
                  <div className="w-12 h-12 bg-secunova-blue/10 rounded-xl flex items-center justify-center text-secunova-blue mb-5 flex-shrink-0">
                    <TrendingUp className="h-6 w-6" />
                  </div>
                  <h3 className="text-xl font-bold text-secunova-dark mb-3 leading-snug break-words">Competitive Advantage</h3>
                  <p className="text-sm text-slate-600 leading-relaxed break-words">
                    Restructure your business models and operations so technology becomes a strategic weapon rather than a cost centre.
                  </p>
                </div>
              </div>

              <div className="bg-white p-6 sm:p-8 rounded-2xl border border-gray-200/90 shadow-sm hover:shadow-md transition-all duration-300 flex flex-col justify-between h-full overflow-hidden">
                <div>
                  <div className="w-12 h-12 bg-secunova-light/15 rounded-xl flex items-center justify-center text-secunova-light mb-5 flex-shrink-0">
                    <Gauge className="h-6 w-6" />
                  </div>
                  <h3 className="text-xl font-bold text-secunova-dark mb-3 leading-snug break-words">Operational Efficiency</h3>
                  <p className="text-sm text-slate-600 leading-relaxed break-words">
                    Reengineer processes, automate workflows, and harness data to cut costs and accelerate service delivery.
                  </p>
                </div>
              </div>

              <div className="bg-white p-6 sm:p-8 rounded-2xl border border-gray-200/90 shadow-sm hover:shadow-md transition-all duration-300 flex flex-col justify-between h-full overflow-hidden">
                <div>
                  <div className="w-12 h-12 bg-secunova-blue/10 rounded-xl flex items-center justify-center text-secunova-blue mb-5 flex-shrink-0">
                    <ClipboardCheck className="h-6 w-6" />
                  </div>
                  <h3 className="text-xl font-bold text-secunova-dark mb-3 leading-snug break-words">Disciplined Execution</h3>
                  <p className="text-sm text-slate-600 leading-relaxed break-words">
                    Deliver initiatives on time and on budget with on-demand project management expertise that scales with your needs.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </LazySection>

      {/* ========================================
          Strategic Advisory & Digital Transformation Overview
          ======================================== */}
      <LazySection className="secunova-section secunova-section--light">
        <div className="container mx-auto px-4">
          <div className="max-w-7xl mx-auto">
            <div className="text-center max-w-3xl mx-auto mb-16">
              <div className="inline-flex items-center bg-secunova-blue/10 text-secunova-blue px-4 py-2 rounded-full text-xs font-bold uppercase tracking-widest mb-4">
                <Crown className="h-4 w-4 mr-2" />
                Service Line One
              </div>
              <h2 className="text-3xl md:text-5xl font-bold text-secunova-dark tracking-tight leading-tight">
                Strategic Advisory &amp; <span className="bg-clip-text text-transparent bg-gradient-to-r from-secunova-blue to-secunova-light">Digital Transformation</span>
              </h2>
              <p className="text-lg text-secunova-dark/80 mt-4 leading-relaxed">
                Four integrated capabilities that take organizations from legacy operations to fully digital, data-driven enterprises.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-stretch">
              {/* Capability 1 */}
              <div className="bg-gray-50 rounded-2xl p-6 sm:p-8 lg:p-10 border border-gray-200/80 shadow-lg hover:shadow-xl transition-all duration-300 flex flex-col justify-between h-full overflow-hidden">
                <div>
                  <div className="flex items-center justify-between mb-6">
                    <div className="w-14 h-14 bg-secunova-blue/10 rounded-2xl flex items-center justify-center text-secunova-blue flex-shrink-0">
                      <Lightbulb className="h-7 w-7" />
                    </div>
                    <span className="text-xs font-bold uppercase tracking-widest px-3.5 py-1.5 bg-secunova-blue/10 text-secunova-blue rounded-full">01</span>
                  </div>
                  <h3 className="text-2xl sm:text-3xl font-bold text-secunova-dark mb-4 leading-tight break-words">Strategic Advisory &amp; Business Planning</h3>
                  <p className="text-slate-700 text-sm sm:text-base leading-relaxed mb-8 break-words">
                    Long-term plans that align technology with corporate vision, from digital roadmaps and change management to feasibility studies and innovation-led business models.
                  </p>
                  <ul className="space-y-3.5 text-xs sm:text-sm text-slate-800 font-medium mb-10">
                    <li className="flex items-start text-left gap-3"><CheckCircle className="h-5 w-5 text-secunova-blue flex-shrink-0 mt-0.5" /> <span>Digital Roadmaps &amp; Digital Readiness Assessment</span></li>
                    <li className="flex items-start text-left gap-3"><CheckCircle className="h-5 w-5 text-secunova-blue flex-shrink-0 mt-0.5" /> <span>Organizational Change Management</span></li>
                    <li className="flex items-start text-left gap-3"><CheckCircle className="h-5 w-5 text-secunova-blue flex-shrink-0 mt-0.5" /> <span>Feasibility Studies &amp; Innovation Strategies</span></li>
                  </ul>
                </div>
                <Link to="/services/strategic-advisory-pmaas" className="btn btn-outline w-full justify-center text-xs uppercase tracking-wider font-bold py-4">
                  View Capability Details <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </div>

              {/* Capability 2 */}
              <div className="bg-gray-50 rounded-2xl p-6 sm:p-8 lg:p-10 border border-gray-200/80 shadow-lg hover:shadow-xl transition-all duration-300 flex flex-col justify-between h-full overflow-hidden">
                <div>
                  <div className="flex items-center justify-between mb-6">
                    <div className="w-14 h-14 bg-secunova-light/15 rounded-2xl flex items-center justify-center text-secunova-light flex-shrink-0">
                      <RefreshCw className="h-7 w-7 text-secunova-light" />
                    </div>
                    <span className="text-xs font-bold uppercase tracking-widest px-3.5 py-1.5 bg-secunova-light/15 text-secunova-light rounded-full">02</span>
                  </div>
                  <h3 className="text-2xl sm:text-3xl font-bold text-secunova-dark mb-4 leading-tight break-words">Digital Transformation &amp; Process Optimization</h3>
                  <p className="text-slate-700 text-sm sm:text-base leading-relaxed mb-8 break-words">
                    Reengineer business processes, migrate to the cloud, and embed AI and automation to lift efficiency while lowering operating costs.
                  </p>
                  <ul className="space-y-3.5 text-xs sm:text-sm text-slate-800 font-medium mb-10">
                    <li className="flex items-start text-left gap-3"><CheckCircle className="h-5 w-5 text-secunova-light flex-shrink-0 mt-0.5" /> <span>Business Process Reengineering (BPR)</span></li>
                    <li className="flex items-start text-left gap-3"><CheckCircle className="h-5 w-5 text-secunova-light flex-shrink-0 mt-0.5" /> <span>Cloud Transformation (AWS &amp; GCP)</span></li>
                    <li className="flex items-start text-left gap-3"><CheckCircle className="h-5 w-5 text-secunova-light flex-shrink-0 mt-0.5" /> <span>AI, RPA &amp; Advanced Data Analytics</span></li>
                  </ul>
                </div>
                <Link to="/services/strategic-advisory-pmaas" className="btn btn-outline w-full justify-center text-xs uppercase tracking-wider font-bold py-4">
                  View Capability Details <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </div>

              {/* Capability 3 */}
              <div className="bg-gray-50 rounded-2xl p-6 sm:p-8 lg:p-10 border border-gray-200/80 shadow-lg hover:shadow-xl transition-all duration-300 flex flex-col justify-between h-full overflow-hidden">
                <div>
                  <div className="flex items-center justify-between mb-6">
                    <div className="w-14 h-14 bg-secunova-blue/10 rounded-2xl flex items-center justify-center text-secunova-blue flex-shrink-0">
                      <Shield className="h-7 w-7" />
                    </div>
                    <span className="text-xs font-bold uppercase tracking-widest px-3.5 py-1.5 bg-secunova-blue/10 text-secunova-blue rounded-full">03</span>
                  </div>
                  <h3 className="text-2xl sm:text-3xl font-bold text-secunova-dark mb-4 leading-tight break-words">Cybersecurity &amp; Risk Management</h3>
                  <p className="text-slate-700 text-sm sm:text-base leading-relaxed mb-8 break-words">
                    Identify vulnerabilities, enforce governance and compliance, and design business continuity plans that keep operations running through any emergency.
                  </p>
                  <ul className="space-y-3.5 text-xs sm:text-sm text-slate-800 font-medium mb-10">
                    <li className="flex items-start text-left gap-3"><CheckCircle className="h-5 w-5 text-secunova-blue flex-shrink-0 mt-0.5" /> <span>Cyber Risk Assessment &amp; Remediation</span></li>
                    <li className="flex items-start text-left gap-3"><CheckCircle className="h-5 w-5 text-secunova-blue flex-shrink-0 mt-0.5" /> <span>Governance &amp; Regulatory Compliance</span></li>
                    <li className="flex items-start text-left gap-3"><CheckCircle className="h-5 w-5 text-secunova-blue flex-shrink-0 mt-0.5" /> <span>Business Continuity &amp; Disaster Recovery (BCDR)</span></li>
                  </ul>
                </div>
                <Link to="/services/strategic-advisory-pmaas" className="btn btn-outline w-full justify-center text-xs uppercase tracking-wider font-bold py-4">
                  View Capability Details <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </div>

              {/* Capability 4 */}
              <div className="bg-gray-50 rounded-2xl p-6 sm:p-8 lg:p-10 border border-gray-200/80 shadow-lg hover:shadow-xl transition-all duration-300 flex flex-col justify-between h-full overflow-hidden">
                <div>
                  <div className="flex items-center justify-between mb-6">
                    <div className="w-14 h-14 bg-secunova-light/15 rounded-2xl flex items-center justify-center text-secunova-light flex-shrink-0">
                      <Globe className="h-7 w-7 text-secunova-light" />
                    </div>
                    <span className="text-xs font-bold uppercase tracking-widest px-3.5 py-1.5 bg-secunova-light/15 text-secunova-light rounded-full">04</span>
                  </div>
                  <h3 className="text-2xl sm:text-3xl font-bold text-secunova-dark mb-4 leading-tight break-words">Customer Experience &amp; Digital Solutions</h3>
                  <p className="text-slate-700 text-sm sm:text-base leading-relaxed mb-8 break-words">
                    Design integrated digital customer journeys and oversee the development of products and platforms that meet market needs with precision.
                  </p>
                  <ul className="space-y-3.5 text-xs sm:text-sm text-slate-800 font-medium mb-10">
                    <li className="flex items-start text-left gap-3"><CheckCircle className="h-5 w-5 text-secunova-light flex-shrink-0 mt-0.5" /> <span>Customer Experience (CX) Strategy</span></li>
                    <li className="flex items-start text-left gap-3"><CheckCircle className="h-5 w-5 text-secunova-light flex-shrink-0 mt-0.5" /> <span>Digital Product &amp; Platform Development Oversight</span></li>
                    <li className="flex items-start text-left gap-3"><CheckCircle className="h-5 w-5 text-secunova-light flex-shrink-0 mt-0.5" /> <span>Multi-Channel Journey Architecture</span></li>
                  </ul>
                </div>
                <Link to="/services/strategic-advisory-pmaas" className="btn btn-outline w-full justify-center text-xs uppercase tracking-wider font-bold py-4">
                  View Capability Details <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </LazySection>

      {/* ========================================
          PMaaS Overview
          ======================================== */}
      <LazySection className="secunova-section bg-gradient-to-br from-secunova-dark via-gray-900 to-secunova-blue text-white relative overflow-hidden">
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-7xl mx-auto">
            <div className="text-center max-w-3xl mx-auto mb-16">
              <div className="inline-flex items-center bg-white/10 backdrop-blur-md px-4 py-2 rounded-full text-xs font-bold uppercase tracking-widest text-secunova-light mb-6">
                <Briefcase className="h-4 w-4 mr-2" />
                Service Line Two
              </div>
              <h2 className="text-3xl sm:text-5xl font-bold tracking-tight leading-tight mb-4">
                Project Management <span className="text-secunova-light">as a Service (PMaaS)</span>
              </h2>
              <p className="text-blue-100 text-base sm:text-lg leading-relaxed">
                A flexible operational model that gives your organization access to professional project management expertise on demand, without the fixed cost of a permanent team. Execute at maximum efficiency while staying true to schedules and budgets.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              <div className="bg-white/5 border border-white/15 rounded-2xl p-6 backdrop-blur-md hover:bg-white/10 transition-all">
                <div className="p-2.5 bg-white/10 rounded-lg inline-flex mb-4 text-secunova-light">
                  <Users className="h-6 w-6" />
                </div>
                <h3 className="text-lg font-bold text-white mb-2">Project Leadership</h3>
                <p className="text-xs text-blue-100 leading-relaxed">Professional project managers lead digital initiatives from planning to delivery and closure.</p>
              </div>
              <div className="bg-white/5 border border-white/15 rounded-2xl p-6 backdrop-blur-md hover:bg-white/10 transition-all">
                <div className="p-2.5 bg-white/10 rounded-lg inline-flex mb-4 text-secunova-light">
                  <Scale className="h-6 w-6" />
                </div>
                <h3 className="text-lg font-bold text-white mb-2">Resource Allocation</h3>
                <p className="text-xs text-blue-100 leading-relaxed">Roles and tasks assigned by capability so no time or energy is ever wasted.</p>
              </div>
              <div className="bg-white/5 border border-white/15 rounded-2xl p-6 backdrop-blur-md hover:bg-white/10 transition-all">
                <div className="p-2.5 bg-white/10 rounded-lg inline-flex mb-4 text-secunova-light">
                  <BarChart className="h-6 w-6" />
                </div>
                <h3 className="text-lg font-bold text-white mb-2">Budget &amp; Cost Control</h3>
                <p className="text-xs text-blue-100 leading-relaxed">Financial flows monitored with precision to keep approved budgets intact.</p>
              </div>
              <div className="bg-white/5 border border-white/15 rounded-2xl p-6 backdrop-blur-md hover:bg-white/10 transition-all">
                <div className="p-2.5 bg-white/10 rounded-lg inline-flex mb-4 text-secunova-light">
                  <Shield className="h-6 w-6" />
                </div>
                <h3 className="text-lg font-bold text-white mb-2">Risk Management</h3>
                <p className="text-xs text-blue-100 leading-relaxed">Obstacles anticipated and countered with proactive plans before they impact delivery.</p>
              </div>
              <div className="bg-white/5 border border-white/15 rounded-2xl p-6 backdrop-blur-md hover:bg-white/10 transition-all">
                <div className="p-2.5 bg-white/10 rounded-lg inline-flex mb-4 text-secunova-light">
                  <Award className="h-6 w-6" />
                </div>
                <h3 className="text-lg font-bold text-white mb-2">Quality Assurance</h3>
                <p className="text-xs text-blue-100 leading-relaxed">Technical outputs reviewed and delivered against the highest agreed quality standards.</p>
              </div>
              <div className="bg-white/5 border border-white/15 rounded-2xl p-6 backdrop-blur-md hover:bg-white/10 transition-all">
                <div className="p-2.5 bg-white/10 rounded-lg inline-flex mb-4 text-secunova-light">
                  <LineChart className="h-6 w-6" />
                </div>
                <h3 className="text-lg font-bold text-white mb-2">Governance &amp; Reporting</h3>
                <p className="text-xs text-blue-100 leading-relaxed">Transparent periodic reports on completion rate, time spent, and KPIs for senior leadership.</p>
              </div>
              <div className="bg-white/5 border border-white/15 rounded-2xl p-6 backdrop-blur-md hover:bg-white/10 transition-all">
                <div className="p-2.5 bg-white/10 rounded-lg inline-flex mb-4 text-secunova-light">
                  <Zap className="h-6 w-6" />
                </div>
                <h3 className="text-lg font-bold text-white mb-2">Agile &amp; Waterfall</h3>
                <p className="text-xs text-blue-100 leading-relaxed">The right methodology for every project: fast iterative cycles or precisely scheduled plans.</p>
              </div>
              <div className="bg-white/5 border border-white/15 rounded-2xl p-6 backdrop-blur-md hover:bg-white/10 transition-all">
                <div className="p-2.5 bg-white/10 rounded-lg inline-flex mb-4 text-secunova-light">
                  <Target className="h-6 w-6" />
                </div>
                <h3 className="text-lg font-bold text-white mb-2">Time &amp; Milestones</h3>
                <p className="text-xs text-blue-100 leading-relaxed">Strict adherence to delivery timelines, milestones, and approved budgets.</p>
              </div>
            </div>

            {/* PMaaS Strategic Advantages */}
            <div className="mt-16 rounded-2xl bg-white/5 border border-white/15 backdrop-blur-md overflow-hidden">
              <div className="bg-gradient-to-r from-secunova-blue/20 to-secunova-light/20 px-6 sm:px-10 py-6 border-b border-white/10">
                <h3 className="text-xl sm:text-2xl font-bold text-white">Why the PMaaS Model Wins</h3>
                <p className="text-xs text-blue-100 mt-1">Four strategic advantages for organizations that choose flexible project management.</p>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 px-6 sm:px-10 py-8">
                <div>
                  <div className="flex items-center gap-4">
                    <div className="w-10 h-10 bg-secunova-light/15 rounded-xl flex items-center justify-center text-secunova-light flex-shrink-0">
                      <RefreshCw className="h-5 w-5" />
                    </div>
                    <h4 className="text-sm font-bold text-white">High Operational Flexibility</h4>
                  </div>
                  <p className="text-xs text-blue-100 leading-relaxed mt-2 pl-14">Scale the team up or down with project demand, with no long-term hiring commitments.</p>
                </div>
                <div>
                  <div className="flex items-center gap-4">
                    <div className="w-10 h-10 bg-secunova-light/15 rounded-xl flex items-center justify-center text-secunova-light flex-shrink-0">
                      <TrendingUp className="h-5 w-5" />
                    </div>
                    <h4 className="text-sm font-bold text-white">Lower Costs</h4>
                  </div>
                  <p className="text-xs text-blue-100 leading-relaxed mt-2 pl-14">Avoid fixed full-time salaries and pay for value and actual delivered results.</p>
                </div>
                <div>
                  <div className="flex items-center gap-4">
                    <div className="w-10 h-10 bg-secunova-light/15 rounded-xl flex items-center justify-center text-secunova-light flex-shrink-0">
                      <Clock className="h-5 w-5" />
                    </div>
                    <h4 className="text-sm font-bold text-white">Immediate Access to Expertise</h4>
                  </div>
                  <p className="text-xs text-blue-100 leading-relaxed mt-2 pl-14">Tap specialized capabilities experienced in complex technical standards and transformation.</p>
                </div>
                <div>
                  <div className="flex items-center gap-4">
                    <div className="w-10 h-10 bg-secunova-light/15 rounded-xl flex items-center justify-center text-secunova-light flex-shrink-0">
                      <Globe className="h-5 w-5" />
                    </div>
                    <h4 className="text-sm font-bold text-white">Focus on Core Operations</h4>
                  </div>
                  <p className="text-xs text-blue-100 leading-relaxed mt-2 pl-14">Your team drives growth while the PMaaS team handles execution details and follow-through.</p>
                </div>
              </div>
            </div>

            <div className="mt-12 text-center">
              <Link to="/services/strategic-advisory-pmaas" className="btn btn-gradient btn-lg">
                View PMaaS Specifications <ArrowRight className="ml-2 h-4 w-4 text-white" />
              </Link>
            </div>
          </div>
        </div>
      </LazySection>

      {/* ========================================
          Data-Driven Decisions Highlight
          ======================================== */}
      <LazySection className="secunova-section secunova-section--gray border-t border-b border-gray-200/80">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
              <div className="lg:col-span-7">
                <div className="inline-flex items-center bg-secunova-blue/10 text-secunova-blue px-4 py-2 rounded-full text-xs font-bold uppercase tracking-widest mb-4">
                  <Database className="h-4 w-4 mr-2" />
                  Data &amp; Analytics
                </div>
                <h2 className="text-3xl md:text-4xl font-bold text-secunova-dark tracking-tight leading-tight mb-4">
                  Decisions Built on <span className="bg-clip-text text-transparent bg-gradient-to-r from-secunova-blue to-secunova-light">Numbers, Not Guesswork</span>
                </h2>
                <p className="text-secunova-dark/70 text-base leading-relaxed mb-6 max-w-prose">
                  Big data only creates value when it informs decisions. We build data management and advanced analytics strategies that transform raw information into accurate, numbers-driven direction, from cost optimization to product strategy.
                </p>
                <div className="flex flex-wrap gap-3">
                  <Link to="/services/strategic-advisory-pmaas" className="btn btn-gradient btn-md">
                    Explore Our Approach <ArrowRight className="ml-2 h-4 w-4 text-white" />
                  </Link>
                </div>
              </div>
              <div className="lg:col-span-5">
                <div className="bg-white rounded-2xl border border-gray-200 shadow-lg p-8">
                  <div className="flex items-center gap-3 mb-6">
                    <div className="w-10 h-10 bg-secunova-blue/10 rounded-xl flex items-center justify-center text-secunova-blue">
                      <Wrench className="h-5 w-5" />
                    </div>
                    <h3 className="text-lg font-bold text-secunova-dark">The SecuNova Method</h3>
                  </div>
                  <div className="space-y-4 text-xs text-slate-600 leading-relaxed">
                    <div className="pb-3 border-b border-gray-100">
                      <span className="font-bold text-secunova-dark block mb-0.5">1. Assess Current State</span>
                      Feasibility studies and readiness assessments expose gaps in infrastructure and operations.
                    </div>
                    <div className="pb-3 border-b border-gray-100">
                      <span className="font-bold text-secunova-dark block mb-0.5">2. Architect the Roadmap</span>
                      Phased digital plans aligned to corporate objectives, budgets, and governance gates.
                    </div>
                    <div>
                      <span className="font-bold text-secunova-dark block mb-0.5">3. Execute &amp; Govern</span>
                      On-demand PMaaS enforces timelines, budgets, quality, and transparent reporting.
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </LazySection>

      {/* ========================================
          Track Record of Supervised Delivery
          ======================================== */}
      <LazySection className="secunova-section secunova-section--light">
        <div className="container mx-auto px-4">
          <div className="max-w-7xl mx-auto">
            <div className="flex flex-col md:flex-row md:items-end justify-between mb-12">
              <div>
                <div className="inline-flex items-center bg-secunova-blue/10 text-secunova-blue px-4 py-2 rounded-full text-xs font-bold uppercase tracking-widest mb-4">
                  <Code className="h-4 w-4 mr-2" />
                  Track Record of Supervised Delivery
                </div>
                <h2 className="text-3xl md:text-4xl font-bold text-secunova-dark tracking-tight">
                  Projects Delivered <span className="bg-clip-text text-transparent bg-gradient-to-r from-secunova-blue to-secunova-light">Under Our Leadership</span>
                </h2>
                <p className="text-sm font-semibold text-secunova-blue mt-2">
                  Proof of practice, not a product line.
                </p>
              </div>
              <p className="text-secunova-dark/70 max-w-md text-sm mt-4 md:mt-0 leading-relaxed">
                We don't just advise on delivery discipline; we apply it. These are internal initiatives and supervised engagements run end-to-end under our methodology, from roadmap to shipped product.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8 items-stretch">
              {/* Product 1: Nova */}
              <div className="bg-white rounded-2xl p-6 sm:p-7 shadow-md border border-gray-200/90 flex flex-col justify-between h-full min-h-[290px] hover:shadow-lg transition-all duration-300 overflow-hidden">
                <div>
                  <div className="flex items-center justify-between mb-4">
                    <span className="text-[10px] uppercase font-bold tracking-widest px-2.5 py-1 bg-amber-500/10 text-amber-600 rounded border border-amber-500/20 font-semibold">
                      SUPERVISED DELIVERY · IN PROGRESS · 2026
                    </span>
                    <span className="text-xs font-mono text-gray-500">macOS Platform</span>
                  </div>
                  <h3 className="text-xl font-bold text-secunova-dark mb-2 break-words">Nova</h3>
                  <p className="text-xs sm:text-sm text-slate-600 mb-5 leading-relaxed break-words">
                    A native macOS AI agent engineered under SecuNova's technical oversight in Swift and Core ML to execute tasks entirely on-device with zero cloud data transfer.
                  </p>
                  <div className="flex flex-wrap gap-1.5 mb-6">
                    <span className="text-[10px] bg-gray-100 text-gray-700 px-2 py-0.5 rounded font-mono">Swift</span>
                    <span className="text-[10px] bg-gray-100 text-gray-700 px-2 py-0.5 rounded font-mono">Core ML</span>
                    <span className="text-[10px] bg-gray-100 text-gray-700 px-2 py-0.5 rounded font-mono">AppleScript</span>
                  </div>
                </div>
                <Link to="/our-work/nova" className="text-xs font-bold text-secunova-blue hover:text-secunova-light flex items-center justify-between pt-4 border-t border-gray-100">
                  <span>View Tech Architecture</span> <ArrowRight className="h-3.5 w-3.5" />
                </Link>
              </div>

              {/* Product 2: Career OS */}
              <div className="bg-white rounded-2xl p-6 sm:p-7 shadow-md border border-gray-200/90 flex flex-col justify-between h-full min-h-[290px] hover:shadow-lg transition-all duration-300 overflow-hidden">
                <div>
                  <div className="flex items-center justify-between mb-4">
                    <span className="text-[10px] uppercase font-bold tracking-widest px-2.5 py-1 bg-secunova-blue/10 text-secunova-blue rounded font-semibold">
                      SUPERVISED DELIVERY · 2025
                    </span>
                    <span className="text-xs font-mono text-gray-500">Career Tech</span>
                  </div>
                  <h3 className="text-xl font-bold text-secunova-dark mb-2 break-words">Career OS</h3>
                  <p className="text-xs sm:text-sm text-slate-600 mb-5 leading-relaxed break-words">
                    An automated job search and ATS resume-tailoring system delivered under our project management discipline using Next.js and TypeScript, running entirely client-side.
                  </p>
                  <div className="flex flex-wrap gap-1.5 mb-6">
                    <span className="text-[10px] bg-gray-100 text-gray-700 px-2 py-0.5 rounded font-mono">Next.js</span>
                    <span className="text-[10px] bg-gray-100 text-gray-700 px-2 py-0.5 rounded font-mono">TypeScript</span>
                    <span className="text-[10px] bg-gray-100 text-gray-700 px-2 py-0.5 rounded font-mono">IndexedDB</span>
                  </div>
                </div>
                <Link to="/our-work/career-os" className="text-xs font-bold text-secunova-blue hover:text-secunova-light flex items-center justify-between pt-4 border-t border-gray-100">
                  <span>View Tech Architecture</span> <ArrowRight className="h-3.5 w-3.5" />
                </Link>
              </div>

              {/* Product 3: SecuBoost */}
              <div className="bg-white rounded-2xl p-6 sm:p-7 shadow-md border border-gray-200/90 flex flex-col justify-between h-full min-h-[290px] hover:shadow-lg transition-all duration-300 overflow-hidden">
                <div>
                  <div className="flex items-center justify-between mb-4">
                    <span className="text-[10px] uppercase font-bold tracking-widest px-2.5 py-1 bg-secunova-blue/10 text-secunova-blue rounded font-semibold">
                      SUPERVISED DELIVERY · 2025
                    </span>
                    <span className="text-xs font-mono text-gray-500">macOS Suite</span>
                  </div>
                  <h3 className="text-xl font-bold text-secunova-dark mb-2 break-words">SecuBoost</h3>
                  <p className="text-xs sm:text-sm text-slate-600 mb-5 leading-relaxed break-words">
                    A native macOS performance and security suite delivered under our technical governance in SwiftUI and CryptoKit, operating 100 percent offline for total data security.
                  </p>
                  <div className="flex flex-wrap gap-1.5 mb-6">
                    <span className="text-[10px] bg-gray-100 text-gray-700 px-2 py-0.5 rounded font-mono">SwiftUI</span>
                    <span className="text-[10px] bg-gray-100 text-gray-700 px-2 py-0.5 rounded font-mono">CryptoKit</span>
                    <span className="text-[10px] bg-gray-100 text-gray-700 px-2 py-0.5 rounded font-mono">IOKit</span>
                  </div>
                </div>
                <Link to="/our-work/secuboost" className="text-xs font-bold text-secunova-blue hover:text-secunova-light flex items-center justify-between pt-4 border-t border-gray-100">
                  <span>View Tech Architecture</span> <ArrowRight className="h-3.5 w-3.5" />
                </Link>
              </div>
            </div>

            <div className="text-center mt-12">
              <Link to="/about/our-work" className="btn btn-gradient btn-lg">
                View the Full Track Record <ArrowRight className="ml-2 h-4 w-4 text-white" />
              </Link>
            </div>
          </div>
        </div>
      </LazySection>

      {/* ========================================
          Final Conversion CTA Section
          ======================================== */}
      <section className="secunova-section secunova-section--dark relative overflow-hidden">
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <div className="inline-flex items-center bg-white/10 px-4 py-2 rounded-full text-xs font-bold uppercase tracking-widest text-secunova-light mb-6">
              <Phone className="h-4 w-4 mr-2" />
              Executive Consultation
            </div>
            <h2 className="text-3xl md:text-5xl font-bold tracking-tight mb-6">
              Ready to Transform Your Organization <span className="text-secunova-light">for the Digital Age?</span>
            </h2>
            <p className="text-blue-100 text-lg max-w-2xl mx-auto mb-8 leading-relaxed">
              Connect with SecuNova's advisory team for an independent review of your digital roadmap, business processes, or project delivery model.
            </p>
            <div className="flex flex-col sm:flex-row justify-center gap-4">
              <Link to="/contact" className="btn btn-gradient btn-lg">
                Schedule a Consultation <ArrowRight className="ml-2 h-4 w-4 text-white" />
              </Link>
              <Link to="/services" className="btn btn-outline-light btn-lg text-white">
                Explore Our Services
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default memo(HomePage);
