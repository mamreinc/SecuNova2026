import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';
import {
  ArrowRight, CheckCircle, Phone, Crown, Compass,
  ChevronRight, Zap, Lightbulb, RefreshCw, Shield, Globe,
  BarChart, Users, Scale, Award, LineChart, Target, Clock,
  ClipboardCheck, TrendingUp, Map
} from 'lucide-react';
import CtaSection from '../../components/CtaSection';
import OptimizedImage from '../../components/OptimizedImage';

const StrategicAdvisoryPage = () => {
  const capabilityGroups = [
    {
      icon: <Lightbulb className="h-7 w-7" />,
      accent: 'blue',
      number: '01',
      title: 'Strategic Advisory & Business Planning',
      description:
        'Develop long-term strategic plans that align technology with your corporate objectives and future vision, and prepare the organization to adopt them.',
      services: [
        {
          name: 'Digital Roadmap',
          detail: 'Long-term strategic technology plans aligned with corporate goals and future vision.',
        },
        {
          name: 'Organizational Change Management',
          detail: 'Prepare teams and management structures to adopt a digital culture and reduce resistance to change.',
        },
        {
          name: 'Feasibility Studies & Digital Readiness',
          detail: 'Evaluate the current state of infrastructure and operations to identify gaps and development opportunities.',
        },
        {
          name: 'Innovation Strategies & New Business Models',
          detail: 'Shift from traditional models to technology-driven digital business models.',
        },
      ],
    },
    {
      icon: <RefreshCw className="h-7 w-7" />,
      accent: 'light',
      number: '02',
      title: 'Digital Transformation & Process Optimization',
      description:
        'Reengineer how work flows across the organization, automating processes and modernizing infrastructure to raise efficiency and cut operating costs.',
      services: [
        {
          name: 'Business Process Reengineering (BPR)',
          detail: 'Analyze current processes and automate them to lift efficiency and reduce operational costs.',
        },
        {
          name: 'Cloud Transformation',
          detail: 'Design cloud migration strategies and select the right infrastructure (such as AWS or GCP).',
        },
        {
          name: 'AI & Automation Integration',
          detail: 'Deploy artificial intelligence and robotic process automation (RPA) to improve service speed and quality.',
        },
        {
          name: 'Data Management & Advanced Analytics',
          detail: 'Build big-data strategies that enable accurate, numbers-driven decisions.',
        },
      ],
    },
    {
      icon: <Shield className="h-7 w-7" />,
      accent: 'blue',
      number: '03',
      title: 'Cybersecurity & Risk Management',
      description:
        'Protect the organization from cyber threats and regulatory exposure while guaranteeing operational continuity through any emergency.',
      services: [
        {
          name: 'Cyber Risk Assessment',
          detail: 'Identify security vulnerabilities across systems and processes and build remediation plans.',
        },
        {
          name: 'Governance & Compliance',
          detail: 'Ensure digital systems and operations align with local and international regulations and standards.',
        },
        {
          name: 'Business Continuity & Disaster Recovery (BCDR)',
          detail: 'Design plans that keep operations running through any cyber or technical emergency.',
        },
      ],
    },
    {
      icon: <Globe className="h-7 w-7" />,
      accent: 'light',
      number: '04',
      title: 'Customer Experience & Digital Solutions',
      description:
        'Design seamless digital experiences and oversee the delivery of products and platforms that meet market needs with precision.',
      services: [
        {
          name: 'Customer Experience (CX) Strategy',
          detail: 'Design integrated digital customer journeys across every channel.',
        },
        {
          name: 'Digital Product & Platform Development',
          detail: 'Oversee the development of software, websites, and applications that meet market needs precisely.',
        },
      ],
    },
  ];

  const roadmapPhases = [
    {
      step: '01',
      title: 'Assess & Align',
      description: 'Feasibility studies and digital readiness assessments expose current-state gaps and establish corporate benchmarks.',
      deliverable: 'Current-State Assessment & Gap Analysis',
      icon: <Map className="h-6 w-6" />
    },
    {
      step: '02',
      title: 'Architect the Roadmap',
      description: 'Phased digital plans align technology with corporate vision, sequencing investment and defining governance gates.',
      deliverable: 'Board-Ready Digital Roadmap',
      icon: <Compass className="h-6 w-6" />
    },
    {
      step: '03',
      title: 'Transform & Optimize',
      description: 'Process reengineering, cloud migration, and AI automation are executed in governed sprints with quality gates.',
      deliverable: 'Optimized Processes & Modern Infrastructure',
      icon: <Zap className="h-6 w-6" />
    },
    {
      step: '04',
      title: 'Govern & Report',
      description: 'On-demand PMaaS enforces timelines, budgets, and KPIs with transparent reporting to senior leadership.',
      deliverable: 'Governed Delivery & Transparent Reporting',
      icon: <LineChart className="h-6 w-6" />
    }
  ];

  const pmaasCapabilities = [
    {
      icon: <Users className="h-6 w-6" />,
      title: 'Project Leadership',
      description: 'Professional project managers who lead digital and technical initiatives from planning through delivery and closure.',
    },
    {
      icon: <Scale className="h-6 w-6" />,
      title: 'Resource Allocation',
      description: 'Roles and tasks distributed based on team capability to eliminate waste in time and energy.',
    },
    {
      icon: <BarChart className="h-6 w-6" />,
      title: 'Budget & Cost Control',
      description: 'Precise monitoring of project financial flows and strict expense control to protect approved budgets.',
    },
    {
      icon: <Shield className="h-6 w-6" />,
      title: 'Risk Management',
      description: 'Anticipate obstacles and build proactive plans before they can impact project delivery.',
    },
    {
      icon: <Award className="h-6 w-6" />,
      title: 'Quality Assurance',
      description: 'Review and deliver tasks and technical outputs against the highest agreed quality standards.',
    },
    {
      icon: <LineChart className="h-6 w-6" />,
      title: 'Governance & Reporting',
      description: 'Transparent periodic reports on completion rate, time spent, and KPIs for senior management.',
    },
    {
      icon: <Zap className="h-6 w-6" />,
      title: 'Agile & Waterfall Methodologies',
      description: 'Apply the right methodology per project: agile cycles or precisely scheduled engineering plans.',
    },
    {
      icon: <Clock className="h-6 w-6" />,
      title: 'Timeline & Milestone Enforcement',
      description: 'Rigorous schedule management guaranteeing adherence to delivery timelines and commitments.',
    },
  ];

  return (
    <div className="min-h-screen bg-white">
      <Helmet>
        <title>Strategic Advisory &amp; PMaaS Calgary | Digital Transformation | SecuNova</title>
        <meta name="description" content="SecuNova Consulting delivers strategic advisory, digital transformation, cybersecurity &amp; risk management, customer experience, and Project Management as a Service (PMaaS) in Calgary, AB." />
        <meta name="keywords" content="strategic advisory Calgary, digital transformation Canada, PMaaS Calgary, business process reengineering, cloud transformation AWS GCP, AI automation RPA, cybersecurity risk management, BCDR" />
        <link rel="canonical" href="https://secunovainc.com/services/strategic-advisory-pmaas" />

        <meta property="og:title" content="Strategic Advisory &amp; PMaaS Calgary | SecuNova Consulting" />
        <meta property="og:description" content="Strategic advisory, digital transformation, and Project Management as a Service (PMaaS) that restructure organizations for the digital age." />
        <meta property="og:url" content="https://secunovainc.com/services/strategic-advisory-pmaas" />
        <meta property="og:type" content="website" />

        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Service",
            "name": "Strategic Advisory & Digital Transformation",
            "provider": { "@type": "Organization", "name": "SecuNova Inc.", "url": "https://secunovainc.com" },
            "areaServed": "CA",
            "description": "A wide range of advanced services that restructure and develop organizations to strengthen competitive advantage and operational efficiency in the digital age."
          })}
        </script>
      </Helmet>

      {/* Hero Section */}
      <section className="relative min-h-[70vh] overflow-hidden flex items-center justify-center pt-32 sm:pt-36 pb-16 bg-secunova-dark text-white">
        <div className="absolute inset-0">
          <OptimizedImage
            src="/images/hero_strategic.png"
            alt="Strategic Advisory and Digital Transformation"
            className="w-full h-full object-cover opacity-35"
            priority={true}
          />
          <div className="absolute inset-0 bg-gradient-to-r from-secunova-dark via-secunova-dark/90 to-secunova-blue/80"></div>
          <div className="absolute inset-0 bg-gradient-to-t from-secunova-dark via-transparent to-secunova-dark/60"></div>
        </div>

        <div className="container mx-auto px-4 relative z-10 w-full">
          <div className="max-w-7xl mx-auto">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">

              {/* Left Column Text */}
              <div className="lg:col-span-7">
                <div className="inline-flex items-center bg-white/10 backdrop-blur-md border border-white/20 px-4 py-2 rounded-full text-xs font-bold uppercase tracking-widest text-secunova-light mb-6">
                  <Crown className="h-4 w-4 mr-2" />
                  Strategic Advisory &amp; PMaaS
                </div>

                <h1 className="hero-heading mb-6">
                  Restructure. Transform. <br />
                  <span className="text-secunova-light">Deliver on Demand.</span>
                </h1>

                <p className="text-lg md:text-xl text-blue-100 leading-relaxed mb-8 max-w-2xl">
                  SecuNova combines executive strategic advisory with flexible Project Management as a Service (PMaaS) to restructure organizations, modernize operations, and execute initiatives on time and on budget in the digital age.
                </p>

                <div className="flex flex-col sm:flex-row gap-4">
                  <Link to="/contact" className="btn btn-gradient btn-lg">
                    Book Advisory Briefing <ArrowRight className="ml-2 h-4 w-4 text-white" />
                  </Link>
                  <a href="tel:403-401-1552" className="btn btn-outline-light btn-lg text-white">
                    <Phone className="mr-2 h-4 w-4" /> 403-401-1552
                  </a>
                </div>
              </div>

              {/* Right Column Metric Cards */}
              <div className="lg:col-span-5 grid grid-cols-2 gap-4">
                <div className="bg-white/10 backdrop-blur-md border border-white/20 p-6 rounded-2xl">
                  <RefreshCw className="h-8 w-8 text-secunova-light mb-3" />
                  <div className="text-3xl font-black text-white mb-1">4</div>
                  <div className="text-xs uppercase tracking-wider text-blue-100 font-semibold">Transformation Capabilities</div>
                </div>
                <div className="bg-white/10 backdrop-blur-md border border-white/20 p-6 rounded-2xl">
                  <Target className="h-8 w-8 text-secunova-blue mb-3" />
                  <div className="text-3xl font-black text-white mb-1">7</div>
                  <div className="text-xs uppercase tracking-wider text-blue-100 font-semibold">PMaaS Disciplines</div>
                </div>
                <div className="bg-white/10 backdrop-blur-md border border-white/20 p-6 rounded-2xl">
                  <BarChart className="h-8 w-8 text-secunova-light mb-3" />
                  <div className="text-3xl font-black text-white mb-1">On-Budget</div>
                  <div className="text-xs uppercase tracking-wider text-blue-100 font-semibold">Delivery Governance</div>
                </div>
                <div className="bg-white/10 backdrop-blur-md border border-white/20 p-6 rounded-2xl">
                  <Crown className="h-8 w-8 text-secunova-blue mb-3" />
                  <div className="text-3xl font-black text-white mb-1">Senior</div>
                  <div className="text-xs uppercase tracking-wider text-blue-100 font-semibold">Advisory Leadership</div>
                </div>
              </div>

            </div>
          </div>
        </div>
      </section>

      {/* Service Line I: Strategic Advisory & Digital Transformation */}
      <section className="secunova-section secunova-section--light">
        <div className="container mx-auto px-4">
          <div className="max-w-7xl mx-auto">
            <div className="text-center max-w-3xl mx-auto mb-16">
              <div className="inline-flex items-center bg-secunova-blue/10 text-secunova-blue px-4 py-2 rounded-full text-xs font-bold uppercase tracking-widest mb-4">
                <Compass className="h-4 w-4 mr-2" />
                Service Line One
              </div>
              <h2 className="text-3xl md:text-5xl font-bold text-secunova-dark tracking-tight">
                Strategic Advisory &amp; <span className="bg-clip-text text-transparent bg-gradient-to-r from-secunova-blue to-secunova-light">Digital Transformation</span>
              </h2>
              <p className="text-secunova-dark/70 text-base md:text-lg mt-4 leading-relaxed">
                A comprehensive suite of advanced services that restructures and develops organizations to strengthen competitive advantage and operational efficiency in the digital age.
              </p>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-stretch">
              {capabilityGroups.map((group, i) => (
                <div key={i} className="group bg-white rounded-2xl border border-gray-200 shadow-md hover:shadow-xl hover:-translate-y-1 transition-all duration-300 overflow-hidden flex flex-col justify-between h-full">
                  <div className="p-6 sm:p-8">
                    <div className="flex items-center justify-between mb-5">
                      <div className={`w-14 h-14 rounded-2xl flex items-center justify-center flex-shrink-0 ${
                        group.accent === 'blue' ? 'bg-secunova-blue/10 text-secunova-blue' : 'bg-secunova-light/15 text-secunova-light'
                      }`}>
                        {group.icon}
                      </div>
                      <span className="text-3xl font-black text-gray-100 group-hover:text-secunova-blue/20 transition-colors">{group.number}</span>
                    </div>
                    <h3 className="text-xl font-bold text-secunova-dark mb-3 group-hover:text-secunova-blue transition-colors">{group.title}</h3>
                    <p className="text-sm text-secunova-dark/70 leading-relaxed mb-6">{group.description}</p>

                    <div className="border-t border-gray-100 pt-4 space-y-3">
                      {group.services.map((service, idx) => (
                        <div key={idx} className="flex items-start gap-3">
                          <CheckCircle className={`h-4 w-4 flex-shrink-0 mt-0.5 ${group.accent === 'blue' ? 'text-secunova-blue' : 'text-secunova-light'}`} />
                          <div>
                            <span className="text-sm font-bold text-secunova-dark">{service.name}</span>
                            <p className="text-xs text-slate-500 leading-relaxed">{service.detail}</p>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                  <div className="px-6 sm:px-8 pb-6">
                    <Link to="/contact" className={`text-xs font-bold flex items-center justify-between pt-4 border-t border-gray-100 transition-colors ${
                      group.accent === 'blue' ? 'text-secunova-blue hover:text-secunova-light' : 'text-secunova-blue hover:text-secunova-light'
                    }`}>
                      <span>Inquire About This Practice</span> <ChevronRight className="h-4 w-4" />
                    </Link>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* 4-Phase Execution Framework */}
      <section className="secunova-section bg-gradient-to-br from-secunova-dark via-gray-900 to-secunova-blue text-white relative overflow-hidden">
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-7xl mx-auto">
            <div className="text-center max-w-3xl mx-auto mb-16">
              <span className="text-xs font-bold uppercase tracking-widest text-secunova-light block mb-2">Governed Transformation Process</span>
              <h2 className="text-3xl md:text-5xl font-bold tracking-tight mb-4">
                The 4-Phase <span className="text-secunova-light">Transformation Journey</span>
              </h2>
              <p className="text-blue-100 text-base md:text-lg leading-relaxed">
                A disciplined framework that moves organizations from current state to digital maturity, with governance at every step.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {roadmapPhases.map((phase, i) => (
                <div key={i} className="bg-white/5 border border-white/15 rounded-2xl p-6 backdrop-blur-md flex flex-col justify-between hover:bg-white/10 transition-all">
                  <div>
                    <div className="flex items-center justify-between mb-4">
                      <span className="text-3xl font-black text-secunova-light">{phase.step}</span>
                      <div className="p-2 bg-white/10 rounded-lg text-secunova-light">{phase.icon}</div>
                    </div>
                    <h3 className="text-lg font-bold text-white mb-2">{phase.title}</h3>
                    <p className="text-xs text-blue-100 leading-relaxed mb-6">{phase.description}</p>
                  </div>
                  <div className="pt-4 border-t border-white/10 text-[11px] font-semibold text-secunova-light">
                    Deliverable: {phase.deliverable}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Service Line II: PMaaS */}
      <section className="secunova-section secunova-section--light">
        <div className="container mx-auto px-4">
          <div className="max-w-7xl mx-auto">
            <div className="text-center max-w-3xl mx-auto mb-16">
              <div className="inline-flex items-center bg-secunova-blue/10 text-secunova-blue px-4 py-2 rounded-full text-xs font-bold uppercase tracking-widest mb-4">
                <ClipboardCheck className="h-4 w-4 mr-2" />
                Service Line Two
              </div>
              <h2 className="text-3xl md:text-5xl font-bold text-secunova-dark tracking-tight">
                Project Management <span className="bg-clip-text text-transparent bg-gradient-to-r from-secunova-blue to-secunova-light">as a Service</span>
              </h2>
              <p className="text-secunova-dark/70 text-base md:text-lg mt-4 leading-relaxed">
                A flexible operational model that gives your organization access to project management expertise and resources on demand, without the need to hire a permanent team. Execute at maximum efficiency, reduce costs, and guarantee adherence to timelines and budgets.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {pmaasCapabilities.map((cap, i) => (
                <div key={i} className="bg-gray-50 rounded-2xl border border-gray-200 p-6 hover:shadow-lg hover:-translate-y-1 transition-all duration-300 flex flex-col justify-between h-full">
                  <div>
                    <div className="w-12 h-12 bg-secunova-blue/10 rounded-xl flex items-center justify-center text-secunova-blue mb-4">
                      {cap.icon}
                    </div>
                    <h3 className="text-lg font-bold text-secunova-dark mb-2">{cap.title}</h3>
                    <p className="text-sm text-secunova-dark/70 leading-relaxed">{cap.description}</p>
                  </div>
                </div>
              ))}
            </div>

            {/* PMaaS Strategic Advantages */}
            <div className="mt-16 rounded-2xl border border-gray-200 shadow-lg overflow-hidden">
              <div className="bg-gradient-to-r from-secunova-blue/10 to-secunova-light/10 px-8 py-6 border-b border-gray-100 flex flex-col md:flex-row md:items-center md:justify-between gap-4">
                <div>
                  <h3 className="text-2xl font-bold text-secunova-dark">Strategic Advantages of the PMaaS Model</h3>
                  <p className="text-sm text-secunova-dark/70 mt-1">Why organizations adopt flexible project management.</p>
                </div>
                <Link to="/contact" className="btn btn-gradient btn-md">
                  Discuss PMaaS <ArrowRight className="ml-2 h-4 w-4 text-white" />
                </Link>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8 p-8">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-secunova-blue/10 rounded-xl flex items-center justify-center text-secunova-blue flex-shrink-0">
                    <RefreshCw className="h-6 w-6" />
                  </div>
                  <div>
                    <h4 className="font-bold text-secunova-dark mb-1">High Operational Flexibility</h4>
                    <p className="text-sm text-secunova-dark/70 leading-relaxed">Scale your project management team up or down based on current project volume, with no long-term hiring commitments.</p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-secunova-light/15 rounded-xl flex items-center justify-center text-secunova-light flex-shrink-0">
                    <TrendingUp className="h-6 w-6" />
                  </div>
                  <div>
                    <h4 className="font-bold text-secunova-dark mb-1">Lower Costs</h4>
                    <p className="text-sm text-secunova-dark/70 leading-relaxed">Avoid fixed costs tied to full-time PM experts and pay for value and actual delivered results instead.</p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-secunova-blue/10 rounded-xl flex items-center justify-center text-secunova-blue flex-shrink-0">
                    <Clock className="h-6 w-6" />
                  </div>
                  <div>
                    <h4 className="font-bold text-secunova-dark mb-1">Immediate Access to Expertise</h4>
                    <p className="text-sm text-secunova-dark/70 leading-relaxed">Benefit directly from specialized capabilities experienced in complex technical standards and digital transformation.</p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-secunova-light/15 rounded-xl flex items-center justify-center text-secunova-light flex-shrink-0">
                    <Target className="h-6 w-6" />
                  </div>
                  <div>
                    <h4 className="font-bold text-secunova-dark mb-1">Focus on Core Operations</h4>
                    <p className="text-sm text-secunova-dark/70 leading-relaxed">Your internal team and leadership focus on business development and growth while the PMaaS team handles execution details.</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Outcome Metrics */}
      <section className="secunova-section secunova-section--dark border-t border-white/10">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto grid grid-cols-2 lg:grid-cols-4 gap-8 text-center">
            <div>
              <div className="text-4xl md:text-5xl font-bold text-secunova-light mb-2">4</div>
              <div className="text-xs uppercase tracking-widest text-blue-100/80 font-semibold">Transformation Capabilities</div>
            </div>
            <div>
              <div className="text-4xl md:text-5xl font-bold text-secunova-light mb-2">7</div>
              <div className="text-xs uppercase tracking-widest text-blue-100/80 font-semibold">PMaaS Disciplines</div>
            </div>
            <div>
              <div className="text-4xl md:text-5xl font-bold text-secunova-light mb-2">On-Budget</div>
              <div className="text-xs uppercase tracking-widest text-blue-100/80 font-semibold">Delivery Guarantees</div>
            </div>
            <div>
              <div className="text-4xl md:text-5xl font-bold text-secunova-light mb-2">100%</div>
              <div className="text-xs uppercase tracking-widest text-blue-100/80 font-semibold">Independent Advisory</div>
            </div>
          </div>
        </div>
      </section>

      <CtaSection />
    </div>
  );
};

export default StrategicAdvisoryPage;
