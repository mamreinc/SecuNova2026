import { Helmet } from 'react-helmet-async';
import { Mail, Phone, MapPin, Clock, CheckCircle2, MessageSquare, Globe } from 'lucide-react';
import CtaSection from '../components/CtaSection';

const ContactPage = () => {
  const contactMethods = [
    {
      icon: <Phone className="h-6 w-6 text-secunova-blue" />,
      title: 'Telephone Consultation',
      description: 'Direct executive telephone access for enterprise inquiries.',
      contact: '403-401-1552',
      action: 'tel:403-401-1552'
    },
    {
      icon: <Mail className="h-6 w-6 text-secunova-light" />,
      title: 'Electronic Briefing',
      description: 'Email our senior leadership directly regarding engagement terms.',
      contact: 'hello@secunovainc.com',
      action: 'mailto:hello@secunovainc.com'
    }
  ];

  return (
    <div className="min-h-screen bg-white">
      <Helmet>
        <title>Contact SecuNova Inc. | SecuNova Consulting Calgary | Advisory Firm</title>
        <meta name="description" content="Contact SecuNova Inc. (operating as SecuNova Consulting), a Calgary-based advisory firm. Call 403-401-1552 or email hello@secunovainc.com for strategic advisory, digital transformation, and PMaaS." />
        <meta name="keywords" content="SecuNova Inc., SecuNova Consulting, consulting firm Calgary, contact SecuNova, strategic advisory Calgary, digital transformation, PMaaS consultation" />
        <link rel="canonical" href="https://secunovainc.com/contact" />

        <meta property="og:title" content="Contact SecuNova Consulting | Strategic Advisory &amp; Digital Transformation" />
        <meta property="og:description" content="Direct engagement channels for executives seeking strategic advisory, digital transformation, and PMaaS." />
        <meta property="og:url" content="https://secunovainc.com/contact" />
        <meta property="og:type" content="website" />

        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "ContactPage",
            "name": "Contact SecuNova Consulting",
            "description": "Direct contact channels for enterprise IT strategic advisory, PMaaS, and forensic audits.",
            "url": "https://secunovainc.com/contact",
            "mainEntity": {
              "@type": "Organization",
              "name": "SecuNova Inc.",
              "telephone": "+1-403-401-1552",
              "email": "hello@secunovainc.com",
              "address": {
                "@type": "PostalAddress",
                "streetAddress": "#270, 1122 3 St SE Ste 1906",
                "addressLocality": "Calgary",
                "addressRegion": "AB",
                "postalCode": "T2G 0E7",
                "addressCountry": "CA"
              }
            }
          })}
        </script>
      </Helmet>

      {/* Hero Section */}
      <section className="relative min-h-[70vh] overflow-hidden flex items-center justify-center pt-32 sm:pt-36 pb-16 bg-secunova-dark text-white">
        <div className="absolute inset-0">
          <div className="absolute inset-0 bg-gradient-to-br from-secunova-dark via-gray-900 to-secunova-blue opacity-95"></div>
        </div>

        <div className="container mx-auto px-4 relative z-10 w-full">
          <div className="max-w-4xl mx-auto text-center">
            <div className="inline-flex items-center bg-white/10 backdrop-blur-md border border-white/20 px-4 py-2 rounded-full text-xs font-bold uppercase tracking-widest text-secunova-light mb-6">
              <MessageSquare className="h-4 w-4 mr-2" />
              Executive Contact &amp; Consultations
            </div>

            <h1 className="hero-heading mb-6">
              Begin Your <br />
              <span className="text-secunova-light">Transformation Journey</span>
            </h1>

            <p className="text-lg md:text-xl text-blue-100 leading-relaxed max-w-2xl mx-auto mb-8">
              Direct access to senior SecuNova partners for executives and leadership teams in Calgary and across Canada.
            </p>

            <div className="flex flex-col sm:flex-row justify-center gap-4">
              <a href="tel:403-401-1552" className="btn btn-gradient btn-lg text-white">
                <Phone className="mr-2 h-5 w-5 text-white" />
                Call 403-401-1552
              </a>
              <a href="mailto:hello@secunovainc.com" className="btn btn-outline-light btn-lg text-white">
                <Mail className="mr-2 h-5 w-5" />
                Email Advisory Brief
              </a>
            </div>
            <p className="text-xs text-blue-200 mt-6 flex items-center justify-center gap-1">
              <Clock className="h-4 w-4 text-secunova-light" />
              Same business day executive response guarantee
            </p>
          </div>
        </div>
      </section>

      {/* Contact Methods & Details */}
      <section className="secunova-section secunova-section--light">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-2xl md:text-3xl font-bold text-secunova-dark mb-2">Direct Engagement Channels</h2>
              <p className="text-gray-600 text-sm">Reach out to discuss strategic advisory, digital transformation, or PMaaS terms</p>
            </div>
            
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-start">
              <div className="space-y-4">
                {contactMethods.map((m, i) => (
                  <a key={i} href={m.action} className="flex items-center justify-between bg-white rounded-2xl p-6 border border-gray-200 shadow-sm hover:shadow-lg hover:border-secunova-blue/30 transition-all duration-300 group">
                    <div className="flex items-center gap-4">
                      <div className="flex-shrink-0 w-12 h-12 bg-gradient-to-br from-secunova-blue/10 to-secunova-light/10 rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform">
                        {m.icon}
                      </div>
                      <div>
                        <div className="font-semibold text-secunova-dark text-lg">{m.title}</div>
                        <div className="text-sm text-secunova-dark/70">{m.description}</div>
                      </div>
                    </div>
                    <div className="text-secunova-blue font-semibold text-lg">{m.contact}</div>
                  </a>
                ))}

                <div className="bg-white rounded-2xl p-6 border border-gray-200 shadow-sm">
                  <div className="flex items-start gap-4 mb-4">
                    <div className="flex-shrink-0 w-12 h-12 bg-gradient-to-br from-secunova-blue/10 to-secunova-light/10 rounded-xl flex items-center justify-center">
                      <MapPin className="h-6 w-6 text-secunova-blue" />
                    </div>
                    <div className="flex-1">
                      <div className="font-semibold text-secunova-dark text-lg mb-1">Mailing Address</div>
                      <div className="text-sm text-gray-700 font-mono">#270, 1122 3 St SE Ste 1906, Calgary, AB T2G 0E7, CA</div>
                      <p className="text-xs text-gray-600 mt-2 leading-relaxed">
                        We operate on a fully remote basis, conducting client consultations via Zoom or Google Meet. When an in-person meeting is necessary, we are pleased to travel to your location or arrange a private meeting room at the Calgary Public Library.
                      </p>
                    </div>
                  </div>
                  <div className="flex items-start gap-4 pt-4 border-t border-gray-100">
                    <div className="flex-shrink-0 w-12 h-12 bg-gradient-to-br from-secunova-light/10 to-secunova-blue/10 rounded-xl flex items-center justify-center">
                      <Clock className="h-6 w-6 text-secunova-light" />
                    </div>
                    <div className="text-sm text-gray-700">
                      <div className="font-medium mb-1">Business Hours</div>
                      <div><strong>Mon-Fri:</strong> 9:00-18:00 MT</div>
                    </div>
                  </div>
                </div>

                <div className="bg-blue-50/80 rounded-2xl p-6 border border-blue-200/80 shadow-sm">
                  <div className="flex items-start gap-4">
                    <div className="flex-shrink-0 w-10 h-10 bg-secunova-blue/15 rounded-xl flex items-center justify-center text-secunova-blue">
                      <Globe className="h-5 w-5" />
                    </div>
                    <div>
                      <div className="font-bold text-secunova-dark text-sm mb-1">Calgary &amp; National Canadian Practice</div>
                      <p className="text-xs text-secunova-dark/70 leading-relaxed">
                        Headquartered in Calgary, Alberta, serving client enterprise accounts across Western and Eastern Canada.
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Consultation Details Card */}
              <div className="bg-gradient-to-br from-secunova-dark to-gray-900 text-white rounded-2xl p-8 shadow-xl border border-gray-800">
                <h3 className="text-2xl font-bold mb-4">Advisory Engagement Protocol</h3>
                <p className="text-blue-100 text-sm leading-relaxed mb-6">
                  SecuNova operates on a direct executive consultation model. Every inquiry is reviewed by a senior director to assess strategic, technical, and financial alignment.
                </p>
                <div className="space-y-4 text-xs text-blue-100 border-t border-white/10 pt-6">
                  <div className="flex items-center gap-2 font-semibold text-white">
                    <CheckCircle2 className="h-4 w-4 text-secunova-light" /> 100% Confidentiality &amp; NDA Standard
                  </div>
                  <div className="flex items-center gap-2 font-semibold text-white">
                    <CheckCircle2 className="h-4 w-4 text-secunova-light" /> Direct Senior Partner Lead
                  </div>
                  <div className="flex items-center gap-2 font-semibold text-white">
                    <CheckCircle2 className="h-4 w-4 text-secunova-light" /> Board-Ready Documentation Standards
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

export default ContactPage;