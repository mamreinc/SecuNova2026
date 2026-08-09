import React from 'react';
import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';
import {
  Crown, Shield, ArrowRight, CheckCircle,
  RefreshCw, Globe, Target, Zap, Phone, Code, Lightbulb, Scale, Users,
  Award, LineChart, ClipboardCheck, BarChart, TrendingUp, Clock
} from 'lucide-react';
import CtaSection from '../components/CtaSection';

interface ServiceCardProps {
  title: string;
  description: string;
  icon: React.ReactNode;
  highlights: string[];
  path: string;
  accent: 'blue' | 'light' | 'dark';
  badge?: string;
  className?: string;
}

const accentStyles = {
  blue: {
    icon: 'from-secunova-blue to-secunova-blue',
    hoverBorder: 'hover:border-secunova-blue/40',
    hoverTitle: 'group-hover:text-secunova-blue',
    check: 'text-secunova-blue',
    glow: 'from-secunova-blue/5 to-secunova-light/5',
  },
  light: {
    icon: 'from-secunova-light to-secunova-light',
    hoverBorder: 'hover:border-secunova-light/40',
    hoverTitle: 'group-hover:text-secunova-light',
    check: 'text-secunova-light',
    glow: 'from-secunova-light/5 to-secunova-blue/5',
  },
  dark: {
    icon: 'from-secunova-dark to-secunova-dark',
    hoverBorder: 'hover:border-secunova-dark/40',
    hoverTitle: 'group-hover:text-secunova-dark',
    check: 'text-secunova-dark',
    glow: 'from-secunova-dark/5 to-secunova-blue/5',
  },
};

const ServiceCard: React.FC<ServiceCardProps> = ({ title, description, icon, highlights, path, accent, badge, className = '' }) => {
  const styles = accentStyles[accent];

  return (
    <Link
      to={path}
      className={`secunova-card group ${className}`}
    >
      <div>
        <div className="secunova-card__header">
          <div className="secunova-card__icon">
            {icon}
          </div>
          <div className="secunova-card__header-content">
            <h3 className={`secunova-card__title transition-colors duration-300 ${styles.hoverTitle}`}>{title}</h3>
            {badge && (
              <span className="secunova-card__badge">
                {badge}
              </span>
            )}
          </div>
        </div>

        <div className="secunova-card__body">
          <p className="secunova-card__description">{description}</p>
          <div className="secunova-card__list">
            {highlights.slice(0, 3).map((item, index) => (
              <div key={index} className="secunova-card__list-item">
                <CheckCircle className={`secunova-card__list-icon ${styles.check}`} />
                <span>{item}</span>
              </div>
            ))}
          </div>
        </div>
      </div>

      <div className="secunova-card__footer">
        <span className="inline-flex items-center text-secunova-blue font-semibold transition-all group-hover:gap-3 gap-2 text-sm">
          Explore Specifications <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
        </span>
      </div>
    </Link>
  );
};

interface PillarHeaderProps {
  index: string;
  label: string;
  title: string;
  description: string;
  icon: React.ReactNode;
}

const PillarHeader: React.FC<PillarHeaderProps> = ({ index, label, title, description, icon }) => {
  return (
    <div className="mb-12 md:mb-16">
      <div className="inline-flex items-center bg-secunova-blue/10 text-secunova-blue px-6 py-3 rounded-full text-sm font-semibold mb-6">
        <span className="flex items-center gap-2">
          {icon}
          <span className="uppercase tracking-wide">{label}</span>
          <span className="px-2 py-0.5 rounded-md bg-secunova-blue text-white text-xs">{index}</span>
        </span>
      </div>
      <h2 className="text-3xl md:text-5xl font-bold text-secunova-dark mb-5 leading-tight">
        {title}
      </h2>
      <p className="text-lg md:text-xl text-secunova-dark/70 max-w-3xl leading-relaxed">
        {description}
      </p>
    </div>
  );
};

const ServicesPage = () => {
  const strategicServices = [
    {
      title: 'Strategic Advisory & Business Planning',
      description:
        'Long-term strategic plans aligned with corporate objectives: digital roadmaps, organizational change management, feasibility studies, and innovation-led business models.',
      icon: <Lightbulb className="h-6 w-6" />,
      highlights: ['Digital roadmaps & readiness assessment', 'Organizational change management', 'Feasibility studies & innovation models'],
      path: '/services/strategic-advisory-pmaas',
      accent: 'blue' as const,
      badge: 'Core Practice',
    },
    {
      title: 'Digital Transformation & Process Optimization',
      description:
        'Business process reengineering (BPR), cloud transformation across AWS and GCP, AI and RPA automation integration, and advanced data analytics strategies.',
      icon: <RefreshCw className="h-6 w-6" />,
      highlights: ['Business process reengineering (BPR)', 'Cloud strategies (AWS & GCP)', 'AI, RPA & advanced data analytics'],
      path: '/services/strategic-advisory-pmaas',
      accent: 'light' as const,
    },
    {
      title: 'Cybersecurity & Risk Management',
      description:
        'Cyber risk assessments, governance and compliance frameworks, and business continuity and disaster recovery (BCDR) planning for operational resilience.',
      icon: <Shield className="h-6 w-6" />,
      highlights: ['Cyber risk assessment & remediation', 'Governance & regulatory compliance', 'Business continuity & BCDR planning'],
      path: '/services/strategic-advisory-pmaas',
      accent: 'blue' as const,
    },
    {
      title: 'Customer Experience & Digital Solutions',
      description:
        'Integrated CX strategy across every channel and expert oversight for digital products, websites, and applications that precisely meet market needs.',
      icon: <Globe className="h-6 w-6" />,
      highlights: ['CX strategy & journey architecture', 'Digital product & platform oversight', 'Precise market-fit delivery'],
      path: '/services/strategic-advisory-pmaas',
      accent: 'dark' as const,
    },
  ];

  const pmaasServices = [
    {
      title: 'Project Leadership',
      description:
        'Professional project managers who lead digital and technical initiatives from planning through delivery, handover, and closure.',
      icon: <Users className="h-6 w-6" />,
      highlights: ['End-to-end project ownership', 'Delivery & closure management', 'Digital initiative leadership'],
      path: '/services/strategic-advisory-pmaas',
      accent: 'blue' as const,
      badge: 'PMaaS',
    },
    {
      title: 'Resource Allocation',
      description:
        'Roles and tasks assigned based on team capability and efficiency to eliminate waste in time and energy.',
      icon: <Scale className="h-6 w-6" />,
      highlights: ['Capability-based assignment', 'Zero time or energy waste', 'Optimized team utilization'],
      path: '/services/strategic-advisory-pmaas',
      accent: 'dark' as const,
    },
    {
      title: 'Budget & Cost Control',
      description:
        'Precision monitoring of project financial flows and strict control of expenses so approved budgets are never exceeded.',
      icon: <BarChart className="h-6 w-6" />,
      highlights: ['Financial flow monitoring', 'Expense control & forecasting', 'Budget compliance assurance'],
      path: '/services/strategic-advisory-pmaas',
      accent: 'light' as const,
    },
    {
      title: 'Risk Management',
      description:
        'Anticipating potential obstacles and building proactive plans before risks can impact project delivery.',
      icon: <Shield className="h-6 w-6" />,
      highlights: ['Proactive obstacle anticipation', 'Pre-emptive mitigation plans', 'Delivery impact protection'],
      path: '/services/strategic-advisory-pmaas',
      accent: 'blue' as const,
    },
    {
      title: 'Quality Assurance',
      description:
        'Reviewing and delivering software and technical outputs against the highest agreed quality standards.',
      icon: <Award className="h-6 w-6" />,
      highlights: ['Highest agreed quality standards', 'Rigorous output review', 'Technical excellence delivery'],
      path: '/services/strategic-advisory-pmaas',
      accent: 'dark' as const,
    },
    {
      title: 'Governance & Reporting',
      description:
        'Regular, transparent reports to senior leadership on completion rate, time spent, and key performance indicators (KPIs).',
      icon: <LineChart className="h-6 w-6" />,
      highlights: ['Transparent periodic reporting', 'Completion & time metrics', 'KPI tracking for leadership'],
      path: '/services/strategic-advisory-pmaas',
      accent: 'light' as const,
    },
    {
      title: 'Agile & Waterfall Methodologies',
      description:
        'The right methodology for every project: fast iterative agile cycles or precisely scheduled engineering plans.',
      icon: <Zap className="h-6 w-6" />,
      highlights: ['Adaptive agile cycles', 'Scheduled waterfall plans', 'Methodology-fit selection'],
      path: '/services/strategic-advisory-pmaas',
      accent: 'blue' as const,
    },
    {
      title: 'Timeline & Milestone Enforcement',
      description:
        'Rigorous schedule management that enforces strict delivery timelines and milestone commitments.',
      icon: <Clock className="h-6 w-6" />,
      highlights: ['Strict timeline enforcement', 'Milestone commitment tracking', 'Delivery velocity assurance'],
      path: '/services/strategic-advisory-pmaas',
      accent: 'dark' as const,
    },
  ];

  const pmaasAdvantages = [
    {
      icon: <RefreshCw className="h-5 w-5" />,
      title: 'High Operational Flexibility',
      description: 'Scale your project management team up or down with project demand, with no long-term hiring commitments.',
    },
    {
      icon: <TrendingUp className="h-5 w-5" />,
      title: 'Lower Costs',
      description: 'Avoid fixed full-time salaries and pay for value and actual delivered results instead.',
    },
    {
      icon: <Clock className="h-5 w-5" />,
      title: 'Immediate Access to Expertise',
      description: 'Tap specialized capabilities experienced in complex technical standards and digital transformation.',
    },
    {
      icon: <Target className="h-5 w-5" />,
      title: 'Focus on Core Operations',
      description: 'Let your internal team and leadership drive growth while the PMaaS team handles execution.',
    },
  ];

  return (
    <div className="min-h-screen bg-white">
      <Helmet>
        <title>Services | SecuNova Inc. | Strategic Advisory &amp; PMaaS</title>
        <meta name="description" content="SecuNova Inc. delivers Strategic Advisory &amp; Digital Transformation and Project Management as a Service (PMaaS) to restructure organizations for the digital age." />
        <meta name="keywords" content="SecuNova Inc., SecuNova Consulting, strategic advisory Calgary, digital transformation roadmap, PMaaS Canada, business process reengineering, cloud transformation, cybersecurity governance" />
        <link rel="canonical" href="https://secunovainc.com/services" />

        {/* OpenGraph Tags */}
        <meta property="og:title" content="Services | SecuNova Consulting | Strategic Advisory &amp; PMaaS" />
        <meta property="og:description" content="Two service lines: Strategic Advisory &amp; Digital Transformation, and Project Management as a Service (PMaaS)." />
        <meta property="og:url" content="https://secunovainc.com/services" />
        <meta property="og:type" content="website" />
        <meta property="og:image" content="https://secunovainc.com/og-image.png" />

        {/* BreadcrumbList Schema */}
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "BreadcrumbList",
            "itemListElement": [
              { "@type": "ListItem", "position": 1, "name": "Home", "item": "https://secunovainc.com" },
              { "@type": "ListItem", "position": 2, "name": "Services", "item": "https://secunovainc.com/services" }
            ]
          })}
        </script>
      </Helmet>

      {/* Hero */}
      <section className="relative min-h-[70vh] overflow-hidden flex items-center justify-center pt-32 sm:pt-36 pb-16 bg-secunova-dark text-white">
        <div className="absolute inset-0">
          <img
            src="https://images.pexels.com/photos/3184338/pexels-photo-3184338.jpeg?auto=compress&cs=tinysrgb&w=1920"
            alt="SecuNova Strategic Advisory and Digital Transformation"
            className="w-full h-full object-cover opacity-30"
            loading="eager"
            fetchPriority="high"
            decoding="async"
          />
          <div className="absolute inset-0 bg-gradient-to-br from-secunova-dark/95 via-secunova-dark/90 to-secunova-blue/85"></div>
        </div>
        <div className="container mx-auto px-4 relative z-10 w-full">
          <div className="max-w-4xl mx-auto text-center">
            <div className="inline-flex items-center bg-white/10 backdrop-blur-sm border border-white/20 px-6 py-2.5 rounded-full text-xs font-bold uppercase tracking-widest text-secunova-light mb-6">
              <Crown className="h-4 w-4 mr-2" />
              Two Service Lines
            </div>

            <h1 className="hero-heading mb-6">
              Advisory. Transformation. <br />
              <span className="text-secunova-light">On-Demand Delivery.</span>
            </h1>

            <p className="text-lg md:text-xl text-blue-100 max-w-3xl mx-auto leading-relaxed">
              SecuNova restructures and develops organizations through strategic advisory and digital transformation, backed by flexible project management expertise that executes on time and on budget.
            </p>

            <div className="flex flex-col sm:flex-row justify-center gap-4 mt-8">
              <Link to="/contact" className="btn btn-gradient btn-lg">
                Schedule a Consultation <ArrowRight className="ml-2 h-4 w-4 text-white" />
              </Link>
              <a href="tel:403-401-1552" className="btn btn-outline-light btn-lg text-white">
                <Phone className="mr-2 h-4 w-4" /> 403-401-1552
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Service Line I: Strategic Advisory & Digital Transformation */}
      <section id="strategic-consulting" className="secunova-section secunova-section--light">
        <div className="container mx-auto px-4">
          <div className="max-w-7xl mx-auto">
            <PillarHeader
              index="01"
              label="Service Line"
              title="Strategic Advisory & Digital Transformation"
              description="A wide range of advanced services that restructure and develop organizations to strengthen competitive advantage and operational efficiency in the digital age, from digital roadmaps and process reengineering to cybersecurity governance and customer experience."
              icon={<Crown className="h-4 w-4" />}
            />

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {strategicServices.map((service, index) => (
                <ServiceCard
                  key={index}
                  title={service.title}
                  description={service.description}
                  icon={service.icon}
                  highlights={service.highlights}
                  path={service.path}
                  accent={service.accent}
                  badge={service.badge}
                />
              ))}
            </div>

            <div className="mt-12 bg-gradient-to-r from-secunova-blue/5 to-secunova-light/5 border border-secunova-blue/20 rounded-2xl p-8 flex flex-col md:flex-row items-center justify-between gap-6">
              <div>
                <h3 className="text-xl font-bold text-secunova-dark mb-2">Ready to reshape your organization for the digital age?</h3>
                <p className="text-secunova-dark/70 text-sm">Schedule a direct briefing with our strategic advisory practice.</p>
              </div>
              <Link to="/services/strategic-advisory-pmaas" className="btn btn-gradient btn-lg">
                View Full Specifications <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Service Line II: PMaaS */}
      <section id="pmaas" className="secunova-section secunova-section--gray">
        <div className="container mx-auto px-4">
          <div className="max-w-7xl mx-auto">
            <PillarHeader
              index="02"
              label="Service Line"
              title="Project Management as a Service (PMaaS)"
              description="A flexible operational model giving your organization access to experienced project management expertise on demand, without hiring a permanent team. Execute projects at maximum efficiency while reducing costs and guaranteeing adherence to timelines and budgets."
              icon={<ClipboardCheck className="h-4 w-4" />}
            />

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {pmaasServices.map((service, index) => (
                <ServiceCard
                  key={index}
                  title={service.title}
                  description={service.description}
                  icon={service.icon}
                  highlights={service.highlights}
                  path={service.path}
                  accent={service.accent}
                  badge={service.badge}
                />
              ))}
            </div>

            {/* Strategic Advantages */}
            <div className="mt-14 bg-white rounded-2xl border border-gray-200 shadow-lg overflow-hidden">
              <div className="bg-gradient-to-r from-secunova-blue/10 to-secunova-light/10 px-8 py-6 border-b border-gray-100">
                <h3 className="text-2xl font-bold text-secunova-dark">Strategic Advantages of the PMaaS Model</h3>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 p-8">
                {pmaasAdvantages.map((adv, i) => (
                  <div key={i}>
                    <div className="w-12 h-12 bg-secunova-blue/10 rounded-xl flex items-center justify-center text-secunova-blue mb-4">
                      {adv.icon}
                    </div>
                    <h4 className="font-bold text-secunova-dark mb-2">{adv.title}</h4>
                    <p className="text-sm text-secunova-dark/70 leading-relaxed">{adv.description}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Portfolio: Engineered & Delivered Under Our Leadership */}
      <section id="internal-rnd" className="secunova-section secunova-section--dark">
        <div className="container mx-auto px-4">
          <div className="max-w-7xl mx-auto">
            <PillarHeader
              index="03"
              label="Technical Mastery"
              title="Our Work. Engineered & Delivered Under Our Leadership"
              description="A showcase of software systems and digital platforms engineered, architected, and brought to market under SecuNova's direct technical standards and strategic stewardship."
              icon={<Code className="h-4 w-4" />}
            />

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              <div className="bg-white/5 border border-white/10 rounded-xl p-6">
                <span className="text-[10px] uppercase font-bold tracking-widest px-2.5 py-1 bg-secunova-light/15 text-secunova-light rounded font-semibold inline-block mb-3">
                  Supervised Delivery · 2026
                </span>
                <h4 className="text-lg font-bold text-white mb-2">Nova</h4>
                <p className="text-xs text-blue-100 mb-4">Native macOS AI agent engineered for local execution (Swift, Core ML, AppleScript) with zero cloud data transfer.</p>
                <Link to="/our-work/nova" className="text-xs font-bold text-secunova-light hover:underline flex items-center gap-1">
                  View Tech Architecture <ArrowRight className="h-3 w-3" />
                </Link>
              </div>

              <div className="bg-white/5 border border-white/10 rounded-xl p-6">
                <span className="text-[10px] uppercase font-bold tracking-widest px-2.5 py-1 bg-secunova-light/15 text-secunova-light rounded font-semibold inline-block mb-3">
                  Supervised Delivery · 2025
                </span>
                <h4 className="text-lg font-bold text-white mb-2">Career OS</h4>
                <p className="text-xs text-blue-100 mb-4">Automated career management and ATS resume tailoring platform (Next.js, TypeScript, IndexedDB) running client-side.</p>
                <Link to="/our-work/career-os" className="text-xs font-bold text-secunova-light hover:underline flex items-center gap-1">
                  View Tech Architecture <ArrowRight className="h-3 w-3" />
                </Link>
              </div>

              <div className="bg-white/5 border border-white/10 rounded-xl p-6">
                <span className="text-[10px] uppercase font-bold tracking-widest px-2.5 py-1 bg-secunova-light/15 text-secunova-light rounded font-semibold inline-block mb-3">
                  Supervised Delivery · 2025
                </span>
                <h4 className="text-lg font-bold text-white mb-2">SecuBoost</h4>
                <p className="text-xs text-blue-100 mb-4">High-performance native macOS utility and security suite operating 100 percent offline (Swift, SwiftUI, CryptoKit).</p>
                <Link to="/our-work/secuboost" className="text-xs font-bold text-secunova-light hover:underline flex items-center gap-1">
                  View Tech Architecture <ArrowRight className="h-3 w-3" />
                </Link>
              </div>

              <div className="bg-white/5 border border-white/10 rounded-xl p-6">
                <span className="text-[10px] uppercase font-bold tracking-widest px-2.5 py-1 bg-secunova-light/15 text-secunova-light rounded font-semibold inline-block mb-3">
                  Supervised Delivery · 2025
                </span>
                <h4 className="text-lg font-bold text-white mb-2">Journalism Audit Platform</h4>
                <p className="text-xs text-blue-100 mb-4">Private AI content verification platform for media organizations (Python, FastAPI, LangChain) requiring editorial integrity.</p>
                <Link to="/our-work/journalism-audit" className="text-xs font-bold text-secunova-light hover:underline flex items-center gap-1">
                  View Tech Architecture <ArrowRight className="h-3 w-3" />
                </Link>
              </div>

              <div className="bg-white/5 border border-white/10 rounded-xl p-6">
                <span className="text-[10px] uppercase font-bold tracking-widest px-2.5 py-1 bg-secunova-light/15 text-secunova-light rounded font-semibold inline-block mb-3">
                  Supervised Delivery · 2025
                </span>
                <h4 className="text-lg font-bold text-white mb-2">SecuNova Lead Finder</h4>
                <p className="text-xs text-blue-100 mb-4">Custom sales intelligence and lead discovery system (Python, PostgreSQL, Redis) eliminating recurring SaaS fees.</p>
                <Link to="/our-work/lead-finder" className="text-xs font-bold text-secunova-light hover:underline flex items-center gap-1">
                  View Tech Architecture <ArrowRight className="h-3 w-3" />
                </Link>
              </div>

              <div className="bg-white/5 border border-white/10 rounded-xl p-6">
                <span className="text-[10px] uppercase font-bold tracking-widest px-2.5 py-1 bg-secunova-light/15 text-secunova-light rounded font-semibold inline-block mb-3">
                  Supervised Delivery · 2025
                </span>
                <h4 className="text-lg font-bold text-white mb-2">CanadaQuest</h4>
                <p className="text-xs text-blue-100 mb-4">AI-powered Canadian citizenship training platform (Next.js, TypeScript, PWA) built for offline civic learning.</p>
                <Link to="/our-work/canadaquest" className="text-xs font-bold text-secunova-light hover:underline flex items-center gap-1">
                  View Tech Architecture <ArrowRight className="h-3 w-3" />
                </Link>
              </div>
            </div>

            <div className="mt-10 text-center">
              <Link to="/about/our-work" className="btn btn-gradient btn-lg">
                View Full Track Record <ArrowRight className="ml-2 h-4 w-4 text-white" />
              </Link>
            </div>
          </div>
        </div>
      </section>

      <CtaSection />
    </div>
  );
};

export default ServicesPage;
