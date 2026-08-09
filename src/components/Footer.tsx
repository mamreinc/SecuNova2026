import { Link } from 'react-router-dom';
import { Phone, Mail, MapPin, Linkedin, Lock } from 'lucide-react';
import Logo from './Logo';

const Footer = () => {
  return (
    <footer className="bg-secunova-dark text-white relative overflow-hidden">
      {/* Background Graphic */}
      <div className="absolute right-0 bottom-0 opacity-5 pointer-events-none transform translate-x-1/4 translate-y-1/4">
        <div className="w-[600px] h-[600px] border-[40px] border-white rounded-full"></div>
      </div>
      <div className="absolute left-1/4 top-0 opacity-5 pointer-events-none">
        <div className="w-96 h-96">
          <Lock className="h-full w-full text-secunova-blue" />
        </div>
      </div>
      
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-16 lg:py-20 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 lg:gap-12 items-start">
          {/* Company Info */}
          <div>
            <div className="mb-6">
              <Logo theme="dark" size="md" />
            </div>
            <p className="text-sm text-white/90 mb-6 leading-relaxed max-w-sm">
              SecuNova Inc. is a Calgary-based advisory firm guiding organizations through strategic consulting, digital transformation, and on-demand project management, engineered to raise competitive advantage and operational efficiency in the digital age.
            </p>
            
            <div className="flex flex-wrap gap-2">
              <a 
                href="https://ca.linkedin.com/company/secunovac" 
                target="_blank"
                rel="noopener noreferrer"
                className="bg-white/10 hover:bg-secunova-blue p-2.5 rounded-lg transition-all duration-300 hover:scale-110 touch-target"
                aria-label="LinkedIn"
              >
                <Linkedin className="h-5 w-5 text-white" />
              </a>
            </div>
          </div>

          {/* Strategic Advisory */}
          <div>
            <h3 className="h-11 flex items-center text-sm font-semibold uppercase tracking-wider text-white mb-6">
              Strategic Advisory
            </h3>
            <ul className="space-y-3">
              <li>
                <Link to="/services/strategic-advisory-pmaas" className="text-sm text-white hover:text-secunova-light transition-colors">
                  Strategic Advisory &amp; Business Planning
                </Link>
              </li>
              <li>
                <Link to="/services/strategic-advisory-pmaas" className="text-sm text-white/70 hover:text-secunova-light transition-colors">
                  Digital Transformation &amp; Process Optimization
                </Link>
              </li>
              <li>
                <Link to="/services/strategic-advisory-pmaas" className="text-sm text-white/70 hover:text-secunova-light transition-colors">
                  Cybersecurity &amp; Risk Management
                </Link>
              </li>
              <li>
                <Link to="/services/strategic-advisory-pmaas" className="text-sm text-white/70 hover:text-secunova-light transition-colors">
                  Customer Experience &amp; Digital Solutions
                </Link>
              </li>
            </ul>
          </div>

          {/* Project Management as a Service */}
          <div>
            <h3 className="h-11 flex items-center text-sm font-semibold uppercase tracking-wider text-white mb-6">
              PMaaS
            </h3>
            <ul className="space-y-3">
              <li>
                <Link to="/services/strategic-advisory-pmaas" className="text-sm text-white hover:text-secunova-light transition-colors">
                  Project Leadership &amp; Resource Allocation
                </Link>
              </li>
              <li>
                <Link to="/services/strategic-advisory-pmaas" className="text-sm text-white/70 hover:text-secunova-light transition-colors">
                  Budget &amp; Cost Control
                </Link>
              </li>
              <li>
                <Link to="/services/strategic-advisory-pmaas" className="text-sm text-white/70 hover:text-secunova-light transition-colors">
                  Risk Management &amp; Quality Assurance
                </Link>
              </li>
              <li>
                <Link to="/services/strategic-advisory-pmaas" className="text-sm text-white/70 hover:text-secunova-light transition-colors">
                  Agile &amp; Waterfall Methodologies
                </Link>
              </li>
            </ul>
          </div>

          {/* Practice & Organization */}
          <div>
            <h3 className="h-11 flex items-center text-sm font-semibold uppercase tracking-wider text-white mb-6">
              Organization &amp; Track Record
            </h3>
            <ul className="space-y-3">
              <li>
                <Link to="/about" className="text-sm text-white hover:text-secunova-light transition-colors">
                  About SecuNova
                </Link>
              </li>
              <li>
                <Link to="/about/our-work" className="text-sm text-white hover:text-secunova-light transition-colors">
                  Track Record &amp; Supervised Delivery
                </Link>
              </li>
              <li>
                <Link to="/contact" className="text-sm text-white hover:text-secunova-light transition-colors">
                  Executive Contact
                </Link>
              </li>
              <li>
                <Link to="/faq" className="text-sm text-white hover:text-secunova-light transition-colors">
                  FAQ
                </Link>
              </li>
              <li>
                <Link to="/join-us" className="text-sm text-white hover:text-secunova-light transition-colors">
                  Investors &amp; Partners
                </Link>
              </li>
            </ul>
          </div>
        </div>

        {/* Contact Strip */}
        <div className="border-t border-gray-800 mt-12 lg:mt-16 pt-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="flex items-center">
              <div className="w-10 h-10 bg-white/10 rounded-lg flex items-center justify-center mr-4 flex-shrink-0">
                <MapPin className="h-5 w-5 text-secunova-light" />
              </div>
              <div>
                <p className="text-xs text-blue-200 uppercase tracking-wider mb-1 font-medium">Mailing Address</p>
                <p className="text-sm text-white leading-relaxed">
                  #270, 1122 3 St SE Ste 1906<br />
                  Calgary, AB T2G 0E7, CA
                </p>
              </div>
            </div>
            <div className="flex items-center">
              <div className="w-10 h-10 bg-white/10 rounded-lg flex items-center justify-center mr-4 flex-shrink-0">
                <Phone className="h-5 w-5 text-secunova-light" />
              </div>
              <div>
                <p className="text-xs text-blue-200 uppercase tracking-wider mb-1 font-medium">Direct Telephone</p>
                <a href="tel:403-401-1552" className="text-sm text-white hover:text-secunova-light transition-colors">
                  403-401-1552
                </a>
              </div>
            </div>
            <div className="flex items-center">
              <div className="w-10 h-10 bg-white/10 rounded-lg flex items-center justify-center mr-4 flex-shrink-0">
                <Mail className="h-5 w-5 text-secunova-light" />
              </div>
              <div>
                <p className="text-xs text-blue-200 uppercase tracking-wider mb-1 font-medium">Direct Email</p>
                <a href="mailto:hello@secunovainc.com" className="text-sm text-white hover:text-secunova-light transition-colors">
                  hello@secunovainc.com
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-gray-800 mt-8 pt-8 flex flex-col sm:flex-row justify-between items-center text-xs text-blue-200">
          <p>© {new Date().getFullYear()} SecuNova Inc. All rights reserved. Registered in Calgary, AB, Canada.</p>
          <div className="flex items-center space-x-6 mt-4 sm:mt-0">
            <Link to="/join-us" className="hover:text-white transition-colors">Investors &amp; Partners</Link>
            <Link to="/privacy-terms" className="hover:text-white transition-colors">Privacy Policy &amp; Terms of Service</Link>
            <Link to="/contact" className="hover:text-white transition-colors">Contact</Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;