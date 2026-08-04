/*
========================================
CONTACT PAGE COMPONENT
Custom Built by SecuNova Inc.
========================================

Professional contact page with strategic layout
for maximum conversions and user engagement.

Features:
- Multi-section professional layout
- Strategic contact method placement
- Service-focused contact options
- Enhanced visual hierarchy
- Security-enhanced form handling

Built from scratch with security focus.
========================================
*/

import { Helmet } from 'react-helmet-async';
import { Mail, Phone, MapPin, Clock, MessageCircle, Globe } from 'lucide-react';

/* ========================================
   START: CONTACT PAGE COMPONENT
   Professional contact page with strategic layout
   ======================================== */
const ContactPage = () => {
  /* ========================================
     START: Contact Methods Data
     ======================================== */

  const contactMethods = [
    {
      icon: <Phone className="h-8 w-8 text-secunova-light" />,
      title: 'Call Direct',
      description: 'Speak with our team immediately',
      contact: '403-401-1552',
      action: 'tel:403-401-1552',
      color: 'from-secunova-light/10 to-secunova-light/20 hover:from-secunova-light/20 hover:to-secunova-light/30'
    },
    {
      icon: <Mail className="h-8 w-8 text-secunova-blue" />,
      title: 'Email Us',
      description: 'Send us a detailed message',
      contact: 'hello@secunovainc.com',
      action: 'mailto:hello@secunovainc.com',
      color: 'from-secunova-blue/10 to-secunova-blue/20 hover:from-secunova-blue/20 hover:to-secunova-blue/30'
    }
  ];
  /* ========================================
     END: Contact Methods Data
     ======================================== */

  return (
    <div className="min-h-screen bg-white">
      {/* ========================================
          START: SEO Head Section
          ======================================== */}
      <Helmet>
        <title>Contact SecuNova Consulting Calgary | Free Strategy Call | 403-401-1552</title>
        <meta name="description" content="Contact SecuNova Consulting in Calgary, AB. Call 403-401-1552 or email hello@secunovainc.com for a free strategy call. Located at #270, 1122 3 St SE Ste 1906, Calgary, AB T2G 0E7." />
        <meta name="keywords" content="contact SecuNova Consulting Calgary, free strategy call Calgary, consulting firm Calgary contact, SecuNova phone number 403 401 1552, SecuNova email hello@secunovainc.com, SecuNova Calgary office #270 1122 3 St SE Ste 1906" />
        <link rel="canonical" href="https://secunovainc.com/contact" />

        {/* OpenGraph Tags */}
        <meta property="og:title" content="Contact SecuNova Consulting Calgary | Free Strategy Call" />
        <meta property="og:description" content="Get in touch with SecuNova Consulting in Calgary. Call 403-401-1552 or email hello@secunovainc.com." />
        <meta property="og:url" content="https://secunovainc.com/contact" />
        <meta property="og:type" content="website" />
        <meta property="og:image" content="https://secunovainc.com/og-image.png" />
        <meta property="og:image:width" content="1200" />
        <meta property="og:image:height" content="630" />
        <meta property="og:site_name" content="SecuNova Consulting" />
        <meta property="og:locale" content="en_CA" />

        {/* Twitter Card Tags */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Contact SecuNova Consulting Calgary | 403-401-1552" />
        <meta name="twitter:description" content="Free strategy call. Call 403-401-1552 or email hello@secunovainc.com" />
        <meta name="twitter:image" content="https://secunovainc.com/og-image.png" />

        {/* Additional SEO Tags */}
        <meta name="robots" content="index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1" />
        <meta name="geo.region" content="CA-AB" />
        <meta name="geo.placename" content="Calgary" />

        {/* Structured Data */}
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "ContactPage",
            "name": "Contact SecuNova Consulting",
            "description": "Contact SecuNova Consulting for digital transformation consulting, custom software engineering, and technical project supervision in Calgary, Alberta",
            "url": "https://secunovainc.com/contact",
            "mainEntity": {
              "@type": "Organization",
              "name": "SecuNova Inc.",
              "alternateName": "SecuNova Consulting",
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
      {/* ========================================
          END: SEO Head Section
          ======================================== */}

      {/* Hero Section */}
      <section className="relative min-h-screen overflow-hidden flex items-center justify-center pt-24 sm:pt-32 md:pt-40 pb-12 sm:pb-16 md:pb-20 bg-gradient-to-br from-secunova-blue via-secunova-dark to-secunova-blue">
        <div className="absolute inset-0 bg-[url('/contact.png')] bg-cover bg-center opacity-10"></div>
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-4xl mx-auto text-center text-white">
            <div className="inline-flex items-center bg-white/10 backdrop-blur-sm border border-white/20 px-6 py-3 rounded-full text-sm font-medium mb-6">
              <MessageCircle className="h-4 w-4 mr-2 text-white" />
              Get in Touch
            </div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-4 leading-tight">
              Let's Build Something
              <span className="block text-secunova-light">Great Together</span>
            </h1>
            <p className="text-lg md:text-xl text-blue-100 max-w-2xl mx-auto mb-8 leading-relaxed">
              Ready to transform your technical strategy and eliminate digital entropy? Contact us today for a straightforward consultation.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="tel:403-401-1552"
                className="btn btn-white btn-lg"
              >
                <Phone className="mr-2 h-5 w-5 text-white" />
                Call 403-401-1552
              </a>
              <a
                href="mailto:hello@secunovainc.com"
                className="btn btn-outline-light btn-lg"
              >
                <MessageCircle className="mr-2 h-5 w-5" />
                Send Message
              </a>
            </div>
            <p className="text-sm text-blue-200 mt-6">
              <Clock className="inline h-4 w-4 mr-1" />
              Same business day response guarantee
            </p>
          </div>
        </div>
      </section>

      {/* Contact Information Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-2xl md:text-3xl font-bold text-secunova-dark mb-2">How to Reach Us</h2>
              <p className="text-gray-600">Choose the method that works best for you</p>
            </div>
            
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-start">
              {/* Contact cards */}
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
                      <div className="font-semibold text-secunova-dark text-lg mb-1">Mailbox</div>
                      <div className="text-sm text-gray-700">#270, 1122 3 St SE Ste 1906, Calgary, AB T2G 0E7, CA</div>
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

                {/* Remote & Meeting Notice */}
                <div className="bg-blue-50/80 rounded-2xl p-6 border border-blue-200/80 shadow-sm">
                  <div className="flex items-start gap-4">
                    <div className="flex-shrink-0 w-10 h-10 bg-secunova-blue/15 rounded-xl flex items-center justify-center text-secunova-blue">
                      <Globe className="h-5 w-5" />
                    </div>
                    <div>
                      <div className="font-semibold text-secunova-dark text-base mb-1">Remote & In-Person Meetings</div>
                      <p className="text-sm text-gray-700 leading-relaxed">
                        We operate on a fully remote basis, conducting client consultations via Zoom or Google Meet. When an in-person meeting is necessary, we are pleased to travel to your location or arrange a private meeting room at the Calgary Public Library.
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Office image */}
              <div className="w-full">
                <div className="bg-gray-50 rounded-2xl overflow-hidden border border-gray-200 shadow-lg">
                  <img
                    src="/contact.png"
                    alt="SecuNova Inc. Calgary Office - Modern workspace with mountain views at 1122 3rd St SE"
                    className="w-full h-auto rounded-2xl"
                    onError={(e) => {
                      const target = e.target as HTMLImageElement;
                      if (!target.src.includes('office.png')) {
                        target.src = '/office.png';
                      }
                    }}
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Organization Information */}
      <section className="border-t border-gray-100 bg-gray-50">
        <div className="container mx-auto px-4 py-4">
          <p className="text-xs text-gray-500 text-center leading-relaxed">
            Business Number: <span className="font-medium text-gray-700">714343225</span> · Corporation
            Number: <span className="font-medium text-gray-700">2026915245</span>
          </p>
        </div>
      </section>
    </div>
  );
};

/* ========================================
   END: CONTACT PAGE COMPONENT
   ======================================== */
export default ContactPage;