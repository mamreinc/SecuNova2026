import { Helmet } from 'react-helmet-async';
import {
  ShieldCheck, Target, Users, CheckCircle2, Building
} from 'lucide-react';
import CtaSection from '../components/CtaSection';

const AboutPage = () => {
  const PRINCIPLES = [
    {
      title: 'Uncompromised Independence',
      desc: 'We accept zero software reseller commissions, referral kickbacks, or vendor alliances. Our strategic advice serves your corporate interest exclusively.',
      icon: <ShieldCheck className="h-6 w-6 text-secunova-blue" />
    },
    {
      title: 'Senior-Led Execution',
      desc: 'Every engagement is directed by senior partners with deep experience in strategy, cloud architecture, cybersecurity, and project governance.',
      icon: <Users className="h-6 w-6 text-secunova-light" />
    },
    {
      title: 'Evidence-Based Decisions',
      desc: 'From feasibility studies to data analytics, our recommendations rest on empirical data, financial modeling, and measurable KPIs.',
      icon: <Target className="h-6 w-6 text-secunova-blue" />
    }
  ];


  return (
    <div className="min-h-screen bg-white">
      <Helmet>
        <title>About SecuNova Inc. | Strategic Advisory &amp; Digital Transformation Firm Calgary</title>
        <meta
          name="description"
          content="SecuNova Inc. (operating as SecuNova Consulting) is a Calgary-based advisory firm delivering strategic advisory, digital transformation, and Project Management as a Service (PMaaS)."
        />
        <meta
          name="keywords"
          content="SecuNova Consulting, SecuNova Inc., consulting firm Calgary, strategic advisory Calgary, digital transformation Canada, PMaaS Calgary, IT consulting firm Calgary"
        />
        <link rel="canonical" href="https://secunovainc.com/about" />

        <meta property="og:title" content="About SecuNova Inc. | Strategic Advisory &amp; Digital Transformation Calgary" />
        <meta property="og:description" content="SecuNova Inc. restructures and develops organizations through strategic advisory, digital transformation, and Project Management as a Service (PMaaS)." />
        <meta property="og:url" content="https://secunovainc.com/about" />
        <meta property="og:type" content="website" />

        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "BreadcrumbList",
            "itemListElement": [
              { "@type": "ListItem", "position": 1, "name": "Home", "item": "https://secunovainc.com" },
              { "@type": "ListItem", "position": 2, "name": "About", "item": "https://secunovainc.com/about" }
            ]
          })}
        </script>
      </Helmet>

      {/* Hero Section */}
      <section className="relative min-h-[70vh] overflow-hidden flex items-center justify-center pt-32 sm:pt-36 pb-16 bg-secunova-dark text-white">
        <div className="absolute inset-0">
          <img
            src="https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&w=1200&q=85"
            alt="SecuNova Base of Operations"
            className="w-full h-full object-cover opacity-20"
          />
          <div className="absolute inset-0 bg-gradient-to-br from-secunova-dark/95 via-secunova-dark/90 to-secunova-blue/80"></div>
        </div>

        <div className="container mx-auto px-4 relative z-10 w-full">
          <div className="max-w-4xl mx-auto text-center">
            <div className="inline-flex items-center bg-white/10 backdrop-blur-sm border border-white/20 px-6 py-2.5 rounded-full text-xs font-bold uppercase tracking-widest text-secunova-light mb-6">
              <Building className="h-4 w-4 mr-2" />
              Corporate Identity &amp; Advisory Ethos
            </div>

            <h1 className="hero-heading mb-6">
              Restructuring Enterprises for <br />
              <span className="text-secunova-light">the Digital Age.</span>
            </h1>

            <p className="text-lg md:text-xl text-blue-100 max-w-3xl mx-auto leading-relaxed">
              SecuNova Inc. is an advisory firm based in Calgary, Alberta. We help organizations restructure and develop through strategic advisory, digital transformation, and flexible project management expertise.
            </p>
          </div>
        </div>
      </section>

      {/* Core Ethos & Narrative */}
      <section className="secunova-section secunova-section--light">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
              <div className="lg:col-span-7">
                <span className="text-xs font-bold uppercase tracking-widest text-secunova-blue block mb-2">Our Mission &amp; Purpose</span>
                <h2 className="text-3xl md:text-4xl font-bold text-secunova-dark mb-6 leading-tight">
                  Restructuring Organizations to Compete in the Digital Age
                </h2>
                <p className="text-secunova-dark/80 text-base leading-relaxed mb-4 max-w-prose">
                  The pace of technological change now outruns traditional operating models. Organizations that fail to restructure, to reengineer processes, modernize infrastructure, and adopt data-driven decision-making, risk losing competitive ground.
                </p>
                <p className="text-secunova-dark/80 text-base leading-relaxed mb-6 max-w-prose">
                  SecuNova pairs executive strategic advisory with on-demand project management expertise. We draw the digital roadmap, drive process optimization and cloud transformation, secure operations, and then execute delivery with discipline, so transformation happens on time, on budget, and with measurable results.
                </p>
                <div className="grid grid-cols-2 gap-4 text-xs font-bold text-secunova-dark">
                  <div className="flex items-center"><CheckCircle2 className="h-4 w-4 text-secunova-blue mr-2" /> Calgary Base of Operations</div>
                  <div className="flex items-center"><CheckCircle2 className="h-4 w-4 text-secunova-blue mr-2" /> Senior-Led Advisory</div>
                  <div className="flex items-center"><CheckCircle2 className="h-4 w-4 text-secunova-blue mr-2" /> Zero Vendor Kickbacks</div>
                  <div className="flex items-center"><CheckCircle2 className="h-4 w-4 text-secunova-blue mr-2" /> Flexible On-Demand Delivery</div>
                </div>
              </div>

              <div className="lg:col-span-5 bg-gray-50 border border-gray-200 rounded-2xl p-8 shadow-lg">
                <h3 className="text-xl font-bold text-secunova-dark mb-4">Advisory Framework</h3>
                <div className="space-y-4 text-xs text-secunova-dark/80">
                  <div className="pb-3 border-b border-gray-200">
                    <strong className="text-secunova-dark block mb-0.5">Strategic Advisory &amp; Business Planning</strong>
                    Digital roadmaps, change management, feasibility studies, and innovation business models aligned to corporate vision.
                  </div>
                  <div className="pb-3 border-b border-gray-200">
                    <strong className="text-secunova-dark block mb-0.5">Digital Transformation &amp; Process Optimization</strong>
                    BPR, cloud transformation (AWS &amp; GCP), AI &amp; RPA automation, and advanced data analytics.
                  </div>
                  <div className="pb-3 border-b border-gray-200">
                    <strong className="text-secunova-dark block mb-0.5">Cybersecurity &amp; Risk Management</strong>
                    Risk assessment, governance &amp; compliance, and business continuity and disaster recovery (BCDR).
                  </div>
                  <div>
                    <strong className="text-secunova-dark block mb-0.5">Project Management as a Service (PMaaS)</strong>
                    On-demand project leadership, budget control, risk management, quality assurance, and transparent reporting.
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Guiding Principles */}
      <section className="secunova-section secunova-section--gray">
        <div className="container mx-auto px-4">
          <div className="max-w-7xl mx-auto">
            <div className="text-center max-w-3xl mx-auto mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-secunova-dark mb-4">
                Core Advisory Principles
              </h2>
              <p className="text-secunova-dark/70 text-base">
                The standards that guide every strategic advisory engagement, transformation initiative, and project delivery we lead.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {PRINCIPLES.map((principle, index) => (
                <div key={index} className="bg-white p-8 rounded-2xl border border-gray-200 shadow-md">
                  <div className="p-3 bg-gray-50 rounded-xl inline-block mb-6">{principle.icon}</div>
                  <h3 className="text-xl font-bold text-secunova-dark mb-3">{principle.title}</h3>
                  <p className="text-sm text-secunova-dark/70 leading-relaxed">{principle.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <CtaSection />
    </div>
  );
};

export default AboutPage;
