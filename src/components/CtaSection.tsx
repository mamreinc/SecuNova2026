import { Link } from 'react-router-dom';
import { ArrowRight, Phone } from 'lucide-react';
import OptimizedImage from './OptimizedImage';

interface CtaSectionProps {
  title?: string;
  subtitle?: string;
  ctaText?: string;
  ctaLink?: string;
}

const CtaSection = ({
  title,
  subtitle,
  ctaText = 'Book Executive Advisory Consultation',
  ctaLink = '/contact'
}: CtaSectionProps) => {
  const headingTitle = title ?? 'Get Your Digital Transformation Briefing';
  const headingSubtitle = subtitle ?? 'An honest, independent assessment of where your organization stands and the fastest path to digital maturity. Zero pressure, zero software reseller pitch.';
  return (
    <section className="secunova-section secunova-section--dark relative min-h-[50vh] overflow-hidden flex items-center justify-center">
      <div className="absolute inset-0">
        <OptimizedImage
          src="/images/strategic_hero_bg.png"
          alt="Professional IT Consultation"
          className="w-full h-full object-cover opacity-30"
          priority={false}
        />
        <div className="absolute inset-0 bg-gradient-to-br from-secunova-dark/95 via-secunova-dark/90 to-secunova-blue/85"></div>
      </div>

      <div className="container mx-auto px-4 relative z-10 w-full">
        <div className="max-w-6xl mx-auto w-full">
          <div className="text-center text-white">
            <div className="inline-flex items-center bg-white/10 backdrop-blur-sm border border-white/20 px-6 py-3 rounded-full text-sm font-medium mb-6 text-white">
              <Phone className="h-4 w-4 mr-2 text-white" />
              Ready to Transform &amp; Execute?
            </div>
            
            <h2 className="text-3xl md:text-5xl font-bold mb-5 leading-tight text-white">
              {headingTitle}
            </h2>
            
            <p className="text-xl text-white max-w-2xl mx-auto mb-8 leading-relaxed">
              {headingSubtitle}
            </p>

            <div className="flex flex-col sm:flex-row justify-center gap-4 sm:gap-6">
              <Link
                to={ctaLink}
                className="btn btn-gradient btn-lg text-white"
              >
                <span className="relative flex items-center justify-center text-white">
                  <span>{ctaText}</span>
                  <ArrowRight className="ml-2 h-5 w-5 text-white group-hover:translate-x-1 transition-transform duration-300" />
                </span>
              </Link>
              
              <a
                href="tel:403-401-1552"
                className="btn btn-outline-light btn-lg flex items-center justify-center gap-2 group border-white/30 hover:border-white text-white hover:bg-white/10 transition-all duration-300"
              >
                <Phone className="h-5 w-5 text-white group-hover:scale-110 transition-transform" />
                <span className="text-white">Call 403-401-1552</span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CtaSection;