import React from 'react';
import { Helmet } from 'react-helmet-async';
import { TrendingUp, Users, Crown, DollarSign, Target, Globe, Star, ArrowRight, CheckCircle, Award, Mail, Phone, MapPin, Heart, Lightbulb, Building2, Briefcase, Shield, Code, BarChart, Network, Zap } from 'lucide-react';
import { Link } from 'react-router-dom';

const JoinUsPage = () => {
  const investmentOpportunities = [
    {
      title: 'Early-Stage Investment',
      icon: <DollarSign className="h-8 w-8 text-secunova-light" />,
      description: 'Join us as an early investor in a promising IT company with experienced leadership and proven market demand',
      benefits: [
        'Ground-floor investment opportunity in growing Alberta IT market',
        'Significant equity stake with high growth potential',
        'Direct access to experienced management team',
        'Quarterly updates and transparent financial reporting'
      ],
      
    },
    {
      title: 'Co-Founder & Leadership',
      icon: <Crown className="h-8 w-8 text-secunova-blue" />,
      description: 'Join our founding team and help shape the future of SecuNova as we expand across Alberta',
      benefits: [
        'Co-founder equity and profit sharing',
        'Executive decision-making authority',
        'Build and lead specialized service divisions',
        'Opportunity to shape company culture and direction'
      ],
      
    },
  ];

  const whyJoinUs = [
    {
      icon: <Users className="h-6 w-6 text-secunova-blue" />,
      title: 'Experienced Leadership',
      description: 'Join a company led by seasoned IT professionals with 10+ years of international experience'
    },
    {
      icon: <Target className="h-6 w-6 text-secunova-blue" />,
      title: 'Massive Market Opportunity',
      description: 'Enter the $12B Alberta IT services market with a proven team and innovative business model'
    },
    {
      icon: <Award className="h-6 w-6 text-secunova-blue" />,
      title: 'Early Mover Advantage',
      description: 'Be part of a new company positioned to capture significant market share in underserved segments'
    }
  ];

  const investmentDetails = [
    {
      category: 'Seed Investment',
      details: [
        'Minimum investment: $10,000 CAD',
        'Convertible notes or equity shares',
        'Monthly progress reports',
        'Board observer rights for major investors',
        'Target exit through acquisition or IPO in 5-7 years'
      ]
    },
    {
      category: 'Strategic Partnership',
      details: [
        'Service-specific collaboration opportunities',
        'Revenue sharing on joint projects',
        'Co-marketing and business development',
        'Shared resource and knowledge exchange',
        'Joint venture opportunities in specific markets'
      ]
    },
    {
      category: 'Leadership Opportunities',
      details: [
        'Co-founder, CTO, CMO, or Regional Director roles',
        'Equity compensation with vesting schedules',
        'Performance-based bonus structures',
        'Professional development and training budget',
        'Full decision-making authority in your domain'
      ]
    }
  ];

  const companyMetrics = [
    { metric: '10+', label: 'Years Combined Experience', icon: <Users className="h-6 w-6 text-secunova-blue" /> },
    { metric: '$12B', label: 'Alberta IT Market Size', icon: <Briefcase className="h-6 w-6 text-secunova-blue" /> },
    { metric: '2025', label: 'Founded & Ready to Scale', icon: <TrendingUp className="h-6 w-6 text-secunova-light" /> }
  ];

  const companyHighlights = [
    {
      icon: <Crown className="h-6 w-6" />,
      title: '10+ Years Experience',
      description: 'Led by seasoned IT professional with international expertise'
    },
    {
      icon: <Building2 className="h-6 w-6" />,
      title: 'Founded 2025',
      description: 'New company positioned for rapid growth in Alberta'
    },
    {
      icon: <MapPin className="h-6 w-6" />,
      title: 'Calgary Based',
      description: 'Serving businesses across Alberta and beyond'
    }
  ];

  const nextSteps = [
    {
      step: '01',
      title: 'Initial Conversation',
      description: 'Schedule a confidential discussion to explore mutual interests and alignment.'
    },
    {
      step: '02', 
      title: 'Business Model Review',
      description: 'Deep dive into our strategy, market opportunity, and growth projections.'
    },
    {
      step: '03',
      title: 'Partnership Structure',
      description: 'Design a customized investment or partnership agreement that works for everyone.'
    },
    {
      step: '04',
      title: 'Launch & Growth',
      description: 'Begin your journey with SecuNova and help us capture the Alberta IT market.'
    }
  ];

  return (
    <div className="min-h-screen bg-white">
      <Helmet>
        <title>Join SecuNova Inc. Calgary | Investment Partnership Opportunities Alberta IT Company</title>
        <meta name="description" content="Join SecuNova Inc. as investor, co-founder, or strategic partner. Calgary IT company with experienced leadership, 50+ professionals, positioned for rapid growth in Alberta's $12B IT market." />
        <meta name="keywords" content="SecuNova investment Calgary, IT company investment Alberta, technology partnership Calgary, co-founder opportunity Alberta, Calgary tech startup investment, Alberta IT company partnership, SecuNova Inc investment" />
        <link rel="canonical" href="https://secunovainc.com/join-us" />
      </Helmet>

      {/* Hero Section */}
      <section className="relative min-h-screen overflow-hidden flex items-center justify-center pt-24 sm:pt-32 md:pt-40 pb-12 sm:pb-16 md:pb-20">
        <div className="absolute inset-0">
          <img
            src="https://images.pexels.com/photos/3183197/pexels-photo-3183197.jpeg?auto=compress&cs=tinysrgb&w=1920"
            alt="Business Partnership"
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
                <Star className="h-4 w-4 mr-2" />
                  Ground Floor Opportunity
                </div>
              
              <h1 className="text-4xl md:text-6xl font-bold mb-5 leading-tight">
                    Join Our Journey
                <span className="block text-secunova-light">To Success</span>
                  </h1>
              
              <p className="text-xl text-blue-100 max-w-2xl mx-auto leading-relaxed">
                    SecuNova Inc. is a revolutionary IT company launched in 2025, powered by battle-tested leadership. Join us as an investor, co-founder, or strategic partner.
                  </p>
            </div>
          </div>
        </div>
      </section>

      {/* Company Foundation Metrics */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-secunova-dark mb-6">Why SecuNova is the Right Investment</h2>
            <p className="text-secunova-dark/70 max-w-2xl mx-auto">
              Built on solid foundations with experienced leadership and positioned in a high-growth market.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            {companyMetrics.map((item, index) => (
              <div key={index} className="text-center bg-gradient-to-br from-white to-gray-50 rounded-2xl p-8 shadow-lg border border-secunova-dark/10">
                <div className="inline-flex items-center justify-center w-16 h-16 bg-secunova-blue/10 rounded-xl mb-4">
                  {item.icon}
                </div>
                <div className="text-3xl font-bold text-secunova-dark mb-2">{item.metric}</div>
                <p className="text-secunova-dark/70 font-medium">{item.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Opportunity Types */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-secunova-dark mb-6">Investment Opportunities</h2>
            <p className="text-secunova-dark/70 max-w-2xl mx-auto">
              Join SecuNova's founding journey as an investor or co-founder.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {investmentOpportunities.map((opportunity, index) => (
              <div key={index} className="group relative overflow-hidden rounded-3xl bg-white shadow-xl border border-secunova-dark/10 hover:shadow-2xl transition-all duration-500">
                <div className="absolute inset-0 bg-gradient-to-br from-blue-600/5 via-transparent to-blue-800/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                
                <div className="relative p-8">
                  {/* Header */}
                  <div className="flex items-center mb-6">
                    <div className="inline-flex items-center justify-center w-16 h-16 bg-secunova-blue/10 rounded-xl mr-4 group-hover:scale-110 transition-transform duration-300">
                      {opportunity.icon}
                    </div>
                    <h3 className="text-2xl font-bold text-secunova-dark">{opportunity.title}</h3>
                  </div>
                  
                  <p className="text-secunova-dark/70 mb-8 leading-relaxed">{opportunity.description}</p>
                  
                  {/* Benefits */}
                  <div className="mb-8">
                    <h4 className="font-semibold text-gray-800 mb-4">What You Get:</h4>
                    <ul className="space-y-3">
                      {opportunity.benefits.map((benefit, benefitIndex) => (
                        <li key={benefitIndex} className="flex items-start">
                          <CheckCircle className="h-5 w-5 text-green-500 mr-3 flex-shrink-0 mt-0.5" />
                          <span className="text-gray-700">{benefit}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                  
                  {/* Commitment & ROI removed per request */}
                  
                  <a
                    href={`mailto:invest@secunovainc.com?subject=${encodeURIComponent(`Interest in ${opportunity.title}`)}&body=${encodeURIComponent(`Hi SecuNova team,\n\nI'm interested in exploring ${opportunity.title} opportunities with SecuNova Inc.\n\nI'd like to learn more about:\n- Investment/partnership requirements\n- Expected timeline and milestones\n- The founding team and their experience\n- Market opportunity and competitive advantage\n\nPlease send me information about next steps.\n\nBest regards,`)}`}
                    className="w-full inline-flex items-center justify-center px-6 py-3 bg-gradient-to-r from-secunova-blue to-secunova-light text-white font-semibold rounded-xl hover:from-blue-700 hover:to-blue-800 transition-all duration-300 transform hover:-translate-y-1 hover:shadow-lg"
                  >
                    Learn More
                    <ArrowRight className="ml-2 h-5 w-5" />
                  </a>
                </div>
              </div>
            ))}
          </div>
          
        </div>
      </section>

      {/* Why Join SecuNova */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-secunova-dark mb-6">Why Join SecuNova Now?</h2>
            <p className="text-secunova-dark/70 max-w-2xl mx-auto">
              Be part of a new company with experienced leadership, positioned to capture significant market share in Alberta's expanding IT services industry.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            {whyJoinUs.map((reason, index) => (
              <div key={index} className="group text-center p-6 rounded-2xl hover:bg-blue-50 transition-all duration-300">
                <div className="inline-flex items-center justify-center w-16 h-16 bg-secunova-blue/10 rounded-xl mb-6 group-hover:scale-110 transition-transform duration-300">
                  {reason.icon}
                </div>
                <h3 className="text-xl font-bold mb-4 text-secunova-dark">{reason.title}</h3>
                <p className="text-secunova-dark/70">{reason.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Market Opportunity */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="flex flex-col lg:flex-row items-center gap-16">
              <div className="lg:w-1/2">
                <div className="inline-flex items-center bg-secunova-blue/10 text-secunova-blue px-4 py-2 rounded-full text-sm font-medium mb-6">
                  <TrendingUp className="h-4 w-4 mr-2" />
                  Market Opportunity
                </div>
                <h2 className="text-3xl font-bold text-secunova-dark mb-6">
                  Perfect Timing in a
                  <span className="bg-clip-text text-transparent bg-gradient-to-r from-secunova-blue to-secunova-light"> Booming Alberta Market</span>
                </h2>
                <p className="text-xl text-secunova-dark/70 mb-8 leading-relaxed">
                  The Alberta IT services market is experiencing unprecedented growth, projected to reach $12 billion by 2026. 
                  Small and medium businesses across Calgary, Edmonton, and rural Alberta are driving massive demand for quality IT services, cybersecurity, and digital transformation.
                </p>
                
                <div className="space-y-6">
                  <div className="bg-secunova-dark/5 rounded-xl p-6">
                    <div className="flex items-center mb-3">
                      <Building2 className="h-6 w-6 text-secunova-blue mr-3" />
                      <h3 className="font-semibold text-secunova-dark">Underserved Alberta Market</h3>
                    </div>
                    <p className="text-secunova-dark/70 text-sm">
                      Over 400,000 SMBs in Alberta need quality IT services but are underserved by traditional 
                      providers who focus on large enterprises. Our independent professional network model allows us to serve 
                      this market efficiently with personalized attention.
                    </p>
                  </div>
                  
                  <div className="bg-secunova-blue/5 rounded-xl p-6">
                    <div className="flex items-center mb-3">
                      <Target className="h-6 w-6 text-secunova-light mr-3" />
                      <h3 className="font-semibold text-secunova-dark">Our Competitive Advantage</h3>
                    </div>
                    <p className="text-secunova-dark/70 text-sm">
                      As a new company with experienced leadership and a network of 50+ independent IT professionals, we can move fast, adapt quickly, and capture 
                      market share before larger competitors realize the opportunity. Our innovative freelancer 
                      network model provides cost advantages traditional agencies can't match.
                    </p>
                  </div>
                </div>
              </div>
              
              <div className="lg:w-1/2">
                <div className="bg-gradient-to-br from-secunova-blue to-blue-800 rounded-3xl p-8 text-white">
                  <h3 className="text-2xl font-bold mb-8 text-center">Alberta Market Growth Projections</h3>
                  
                  <div className="space-y-6">
                    <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6">
                      <div className="flex items-center justify-between mb-2">
                        <span className="font-medium">Alberta IT Services Market</span>
                        <span className="text-2xl font-bold">$12B</span>
                      </div>
                      <div className="w-full bg-white/20 rounded-full h-2">
                        <div className="bg-white h-2 rounded-full" style={{ width: '78%' }}></div>
                      </div>
                      <p className="text-xs text-blue-100 mt-2">Projected by 2026</p>
                    </div>
                    
                    <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6">
                      <div className="flex items-center justify-between mb-2">
                        <span className="font-medium">Annual Growth Rate</span>
                        <span className="text-2xl font-bold">15%</span>
                      </div>
                      <div className="w-full bg-white/20 rounded-full h-2">
                        <div className="bg-white h-2 rounded-full" style={{ width: '90%' }}></div>
                      </div>
                      <p className="text-xs text-blue-100 mt-2">Compound annual growth</p>
                    </div>
                    
                    <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6">
                      <div className="flex items-center justify-between mb-2">
                        <span className="font-medium">SMB Market Gap</span>
                        <span className="text-2xl font-bold">70%</span>
                      </div>
                      <div className="w-full bg-white/20 rounded-full h-2">
                        <div className="bg-white h-2 rounded-full" style={{ width: '70%' }}></div>
                      </div>
                      <p className="text-xs text-blue-100 mt-2">Underserved by current providers</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Next Steps Process */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-secunova-dark mb-6">How to Get Involved</h2>
            <p className="text-secunova-dark/70 max-w-2xl mx-auto">
              Our investment and partnership process is designed to be transparent, thorough, and mutually beneficial.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {nextSteps.map((step, index) => (
              <div key={index} className="relative">
                <div className="bg-gradient-to-br from-white to-gray-50 rounded-2xl p-8 shadow-lg border border-secunova-dark/10 h-full">
                  <div className="flex items-center mb-6">
                    <div className="w-12 h-12 bg-gradient-to-r from-secunova-blue to-secunova-light text-white rounded-xl flex items-center justify-center font-bold text-lg mr-4">
                      {step.step}
                    </div>
                    <h3 className="text-xl font-bold text-secunova-dark">{step.title}</h3>
                  </div>
                  <p className="text-secunova-dark/70">{step.description}</p>
                </div>
                
                {/* Connection arrow for desktop */}
                {index < nextSteps.length - 1 && (
                  <div className="hidden lg:block absolute top-1/2 -right-4 transform -translate-y-1/2 z-10">
                    <ArrowRight className="h-6 w-6 text-blue-300" />
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact & Investment Inquiry */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl font-bold text-secunova-dark mb-6">Ready to Invest in Alberta's Next IT Success Story?</h2>
              <p className="text-secunova-dark/70 max-w-2xl mx-auto">
                Take the first step towards being part of Alberta's next IT success story. We're excited to discuss 
                opportunities with qualified investors and co-founders.
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
              <a
                href="mailto:invest@secunovainc.com"
                className="group bg-white rounded-2xl p-8 shadow-lg border border-secunova-dark/10 hover:shadow-xl transition-all duration-300 hover:-translate-y-1"
              >
                <div className="text-center">
                  <div className="inline-flex items-center justify-center w-16 h-16 bg-secunova-blue/10 rounded-xl mb-6 group-hover:scale-110 transition-transform duration-300">
                    <Mail className="h-8 w-8 text-secunova-blue" />
                  </div>
                  <h3 className="text-xl font-bold text-secunova-dark mb-4">Investment Inquiries</h3>
                  <p className="text-secunova-blue font-medium">invest@secunovainc.com</p>
                  <p className="text-secunova-dark/70 text-sm mt-2">Investment opportunities and due diligence</p>
                </div>
              </a>

              <a
                href="tel:403-401-1552"
                className="group bg-white rounded-2xl p-8 shadow-lg border border-secunova-dark/10 hover:shadow-xl transition-all duration-300 hover:-translate-y-1"
              >
                <div className="text-center">
                  <div className="inline-flex items-center justify-center w-16 h-16 bg-green-100 rounded-xl mb-6 group-hover:scale-110 transition-transform duration-300">
                    <Phone className="h-8 w-8 text-secunova-light" />
                  </div>
                  <h3 className="text-xl font-bold text-secunova-dark mb-4">Direct Line</h3>
                  <p className="text-secunova-light font-medium">403-401-1552</p>
                  <p className="text-secunova-dark/70 text-sm mt-2">Speak directly with our founder and CEO</p>
                </div>
              </a>

              <Link
                to="/contact"
                className="group bg-white rounded-2xl p-8 shadow-lg border border-secunova-dark/10 hover:shadow-xl transition-all duration-300 hover:-translate-y-1"
              >
                <div className="text-center">
                  <div className="inline-flex items-center justify-center w-16 h-16 bg-secunova-blue/10 rounded-xl mb-6 group-hover:scale-110 transition-transform duration-300">
                    <MapPin className="h-8 w-8 text-secunova-blue" />
                  </div>
                  <h3 className="text-xl font-bold text-secunova-dark mb-4">Schedule Meeting</h3>
                  <p className="text-secunova-blue font-medium">In-Person or Virtual</p>
                  <p className="text-secunova-dark/70 text-sm mt-2">Comprehensive partnership discussion</p>
                </div>
              </Link>
            </div>

            {/* Investment Disclaimer */}
            <div className="bg-yellow-50 border border-yellow-200 rounded-2xl p-8 text-center">
              <div className="flex items-center justify-center mb-4">
                <Lightbulb className="h-6 w-6 text-yellow-600 mr-2" />
                <h3 className="text-lg font-semibold text-yellow-800">Investment Disclosure</h3>
              </div>
              <p className="text-yellow-700 text-sm leading-relaxed">
                SecuNova Inc. is a technology company seeking qualified investors and partners. 
                All investment opportunities are subject to applicable securities laws and regulations. 
                This information is for educational purposes only and does not constitute an offer to sell securities. 
                Potential investors should conduct thorough due diligence and consult with financial and legal advisors 
                before making any investment decisions. Investments carry inherent risks and potential for loss.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default JoinUsPage;