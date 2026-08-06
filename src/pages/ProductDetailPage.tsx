import React from 'react';
import { useParams, Link, useNavigate } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';
import {
  ArrowLeft, ArrowRight, ArrowUpRight, CheckCircle2, Shield, Cpu, Lock,
  Zap, Globe, Settings, FileText, Search, TrendingUp, Layout, BarChart2,
  Database, BookOpen, Star, Users, Play, Code, CheckCircle, Download, ArrowDown, ShieldCheck, Sparkles
} from 'lucide-react';
import { PRODUCT_DETAIL_DATA, ProductMediaSlot } from '../data/productDetailData';
import { getDownloadCount, incrementDownloadCount } from '../utils/downloadTracker';
import CtaSection from '../components/CtaSection';

const ICON_MAP: Record<string, React.ReactNode> = {
  Shield: <Shield className="h-6 w-6 text-secunova-blue" />,
  Cpu: <Cpu className="h-6 w-6 text-secunova-light" />,
  Lock: <Lock className="h-6 w-6 text-secunova-blue" />,
  Zap: <Zap className="h-6 w-6 text-secunova-light" />,
  Globe: <Globe className="h-6 w-6 text-secunova-blue" />,
  Settings: <Settings className="h-6 w-6 text-secunova-light" />,
  FileText: <FileText className="h-6 w-6 text-secunova-blue" />,
  Search: <Search className="h-6 w-6 text-secunova-light" />,
  TrendingUp: <TrendingUp className="h-6 w-6 text-secunova-blue" />,
  Layout: <Layout className="h-6 w-6 text-secunova-light" />,
  BarChart2: <BarChart2 className="h-6 w-6 text-secunova-blue" />,
  Database: <Database className="h-6 w-6 text-secunova-light" />,
  BookOpen: <BookOpen className="h-6 w-6 text-secunova-blue" />,
  Star: <Star className="h-6 w-6 text-secunova-light" />,
  Users: <Users className="h-6 w-6 text-secunova-blue" />,
  CheckCircle2: <CheckCircle2 className="h-6 w-6 text-secunova-light" />,
};

const ProductDetailPage: React.FC = () => {
  const { productId } = useParams<{ productId: string }>();
  const navigate = useNavigate();

  const product = productId ? PRODUCT_DETAIL_DATA[productId] : undefined;

  const [downloadCountNum, setDownloadCountNum] = React.useState<number>(() =>
    productId ? getDownloadCount(productId) : 100
  );

  React.useEffect(() => {
    if (!productId) return;
    setDownloadCountNum(getDownloadCount(productId));

    const handleUpdate = (e: Event) => {
      const customEvt = e as CustomEvent<{ productId: string; count: number }>;
      if (customEvt.detail?.productId === productId) {
        setDownloadCountNum(customEvt.detail.count);
      }
    };

    window.addEventListener('secunova_download_updated', handleUpdate);
    return () => {
      window.removeEventListener('secunova_download_updated', handleUpdate);
    };
  }, [productId]);

  const handleDownloadClick = () => {
    if (productId) {
      const updated = incrementDownloadCount(productId);
      setDownloadCountNum(updated);
    }
  };

  if (!product) {
    return (
      <div className="min-h-screen bg-white flex flex-col items-center justify-center p-8 text-center pt-32">
        <h1 className="text-3xl font-bold text-secunova-dark mb-4">Project Not Found</h1>
        <p className="text-gray-600 mb-6">The requested product or case study could not be found.</p>
        <Link to="/about/our-work" className="btn btn-gradient">
          <ArrowLeft className="mr-2 h-4 w-4" /> Back to Our Work
        </Link>
      </div>
    );
  }

  const heroMedia = product.mediaSlots[0];
  const galleryMedia = product.mediaSlots.slice(1);

  return (
    <div className="min-h-screen bg-white">
      <Helmet>
        <title>{product.name} | {product.tagline} | SecuNova Consulting</title>
        <meta name="description" content={`${product.name}: ${product.pitch}`} />
        <meta name="keywords" content={`${product.name}, ${product.techStack.join(', ')}, SecuNova Consulting products, custom software, case study`} />
        <link rel="canonical" href={`https://secunovainc.com/about/our-work/${product.id}`} />

        <meta property="og:title" content={`${product.name} | SecuNova Consulting`} />
        <meta property="og:description" content={product.pitch} />
        <meta property="og:url" content={`https://secunovainc.com/about/our-work/${product.id}`} />
        <meta property="og:type" content="article" />
        <meta property="og:image" content="https://secunovainc.com/og-image.png" />
        <meta property="og:image:width" content="1200" />
        <meta property="og:image:height" content="630" />
        <meta property="og:site_name" content="SecuNova Consulting" />

        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content={`${product.name} | SecuNova Consulting`} />
        <meta name="twitter:description" content={product.pitch} />
        <meta name="twitter:image" content="https://secunovainc.com/og-image.png" />
      </Helmet>



      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-secunova-dark via-gray-900 to-secunova-blue text-white pt-36 sm:pt-40 md:pt-48 pb-16 md:pb-24">
        <div className="container mx-auto px-4 max-w-7xl">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            
            {/* Left Content Column */}
            <div className={`${heroMedia ? 'lg:col-span-7' : 'lg:col-span-12 max-w-4xl'} space-y-6`}>
              <div className="flex items-center gap-3 flex-wrap">
                <span className="text-xs font-semibold uppercase tracking-wider text-secunova-light bg-white/10 backdrop-blur-md px-3 py-1 rounded-full border border-white/20">
                  {product.year} · {product.heroLabel}
                </span>
                {product.badge && (
                  <span className="text-[11px] font-bold uppercase tracking-widest px-3 py-1 rounded-full bg-secunova-blue text-white">
                    {product.badge}
                  </span>
                )}
              </div>

              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold leading-tight tracking-tight">
                {product.name}
              </h1>

              <p className="text-xl sm:text-2xl font-semibold text-secunova-light">
                {product.tagline}
              </p>

              <p className="text-blue-100 text-lg leading-relaxed max-w-3xl">
                {product.pitch}
              </p>

              {/* Stats Highlights */}
              <div className="grid grid-cols-3 gap-4 pt-4 border-t border-white/10 max-w-2xl">
                {product.outcomeStats.map((stat, i) => (
                  <div key={i} className="p-3.5 rounded-xl bg-white/10 backdrop-blur-md border border-white/20 text-center shadow-xs">
                    <span className="block text-2xl sm:text-3xl font-black text-white mb-1">{stat.value}</span>
                    <span className="block text-xs text-blue-100 font-semibold leading-snug">{stat.label}</span>
                  </div>
                ))}
              </div>

              {/* CTAs */}
              <div className="flex flex-wrap items-center gap-4 pt-6">
                {product.downloadUrl ? (
                  <div className="flex flex-col items-start gap-3">
                    <a
                      href={product.downloadUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      onClick={handleDownloadClick}
                      className="group relative inline-flex items-center gap-3.5 px-7 py-4 rounded-xl bg-gradient-to-r from-emerald-500 via-teal-500 to-cyan-500 hover:from-emerald-400 hover:via-teal-400 hover:to-cyan-400 text-white font-bold text-base shadow-xl shadow-teal-500/25 hover:shadow-teal-500/40 hover:-translate-y-0.5 transition-all duration-300 border border-white/20 overflow-hidden"
                    >
                      <span className="absolute inset-0 bg-white/15 translate-y-full group-hover:translate-y-0 transition-transform duration-300 ease-out"></span>
                      <div className="relative p-2 rounded-lg bg-white/20 backdrop-blur-md group-hover:scale-110 transition-transform duration-300">
                        <Download className="h-5 w-5 text-white" />
                      </div>
                      <div className="relative text-left">
                        <span className="block text-base font-extrabold leading-tight tracking-wide">
                          {product.downloadLabel || `Download ${product.name} for macOS`}
                        </span>
                        <span className="block text-[11px] font-medium text-emerald-100/90 mt-0.5">
                          {product.version ? `${product.version} ` : ''}{product.fileSize ? `• ${product.fileSize} ` : ''}• Direct Download (Google Drive)
                        </span>
                      </div>
                      <ArrowDown className="relative h-4 w-4 ml-1 opacity-80 group-hover:translate-y-1 transition-transform" />
                    </a>

                    {/* Download count under the button */}
                    {product.downloadCount && (
                      <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/10 backdrop-blur-md border border-white/15 text-xs text-blue-100 font-medium">
                        <span className="relative flex h-2 w-2">
                          <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                          <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-400"></span>
                        </span>
                        <Download className="h-3.5 w-3.5 text-emerald-400" />
                        <span>Over <strong className="text-white font-bold">{downloadCountNum.toLocaleString()}+</strong> Downloads</span>
                      </div>
                    )}
                  </div>
                ) : product.externalLink ? (
                  <a
                    href={product.externalLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn btn-gradient inline-flex items-center gap-2"
                  >
                    <span>Visit Live Platform</span>
                    <ArrowUpRight className="h-5 w-5" />
                  </a>
                ) : (
                  <Link to="/contact" className="btn btn-gradient inline-flex items-center gap-2">
                    <span>Build Something Similar</span>
                    <ArrowRight className="h-5 w-5" />
                  </Link>
                )}
              </div>
            </div>

            {/* Right Hero Video / Media Player Column */}
            {heroMedia && (
              <div className="lg:col-span-5">
                <div className="relative rounded-2xl overflow-hidden shadow-2xl border border-white/20 bg-black group">
                  {heroMedia.type === 'video' && heroMedia.src ? (
                    <div className="relative aspect-video w-full">
                      <video
                        src={heroMedia.src}
                        autoPlay
                        muted
                        loop
                        controls
                        playsInline
                        preload="auto"
                        className="w-full h-full object-cover rounded-2xl"
                      />
                    </div>
                  ) : heroMedia.src ? (
                    <img
                      src={heroMedia.src}
                      alt={heroMedia.caption || product.name}
                      className="w-full h-auto object-cover rounded-2xl"
                    />
                  ) : (
                    <div className="aspect-video bg-gray-800 flex items-center justify-center p-6 text-center text-white">
                      <Play className="h-12 w-12 text-secunova-light mb-2" />
                      <p className="text-sm">{heroMedia.caption}</p>
                    </div>
                  )}
                  {heroMedia.caption && (
                    <div className="p-3 bg-secunova-dark/90 text-xs text-center text-blue-100 font-medium border-t border-white/10">
                      {heroMedia.caption}
                    </div>
                  )}
                </div>
              </div>
            )}

          </div>
        </div>
      </section>

      {/* Challenge & Problem Statement Section */}
      <section className="py-16 md:py-24 bg-gray-50 border-b border-gray-200">
        <div className="container mx-auto px-4 max-w-7xl">
          <div className="grid grid-cols-1 md:grid-cols-12 gap-12 items-start">
            <div className="md:col-span-5">
              <span className="text-xs font-semibold text-secunova-blue uppercase tracking-wider block mb-2">The Problem</span>
              <h2 className="text-3xl md:text-4xl font-bold text-secunova-dark leading-tight">
                The Challenge We Set Out to Solve
              </h2>
            </div>
            <div className="md:col-span-7">
              <p className="text-lg text-gray-700 leading-relaxed bg-white p-8 rounded-2xl shadow-sm border border-gray-200">
                {product.challenge}
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Solution & Core Architecture Section */}
      <section className="py-16 md:py-24 bg-white border-b border-gray-200">
        <div className="container mx-auto px-4 max-w-7xl">
          <div className="max-w-3xl mb-16">
            <span className="text-xs font-semibold text-secunova-blue uppercase tracking-wider block mb-2">What We Engineered</span>
            <h2 className="text-3xl md:text-5xl font-bold text-secunova-dark leading-tight mb-6">
              The Architecture & Solution
            </h2>
            <p className="text-lg text-gray-600 leading-relaxed">
              {product.solution}
            </p>
          </div>

          {/* Features Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {product.features.map((feature, i) => (
              <div
                key={i}
                className="bg-gray-50 border border-gray-200 rounded-2xl p-8 hover:shadow-xl hover:-translate-y-1 transition-all duration-300 group"
              >
                <div className="w-12 h-12 rounded-xl bg-white shadow-sm flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                  {feature.iconName && ICON_MAP[feature.iconName] ? ICON_MAP[feature.iconName] : <Code className="h-6 w-6 text-secunova-blue" />}
                </div>
                <h3 className="text-xl font-bold text-secunova-dark mb-3">{feature.title}</h3>
                <p className="text-sm text-gray-600 leading-relaxed">{feature.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Dedicated App Download Card Showcase Section */}
      {product.downloadUrl && (
        <section className="py-16 md:py-24 bg-gradient-to-b from-gray-950 via-secunova-dark to-gray-950 text-white relative overflow-hidden border-y border-white/10">
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-emerald-500/10 rounded-full blur-3xl pointer-events-none"></div>
          <div className="absolute -top-24 -right-24 w-72 h-72 bg-cyan-500/10 rounded-full blur-2xl pointer-events-none"></div>

          <div className="container mx-auto px-4 max-w-4xl relative z-10">
            <div className="bg-white/5 backdrop-blur-xl border border-white/15 rounded-3xl p-8 md:p-12 shadow-2xl text-center flex flex-col items-center">
              
              <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-emerald-500/15 border border-emerald-500/30 text-emerald-300 text-xs font-bold uppercase tracking-wider mb-6">
                <Sparkles className="h-3.5 w-3.5 text-emerald-400" />
                <span>Official Direct Download • macOS Native</span>
              </div>

              <h2 className="text-3xl md:text-5xl font-extrabold text-white tracking-tight mb-4">
                Get {product.name} Today
              </h2>
              <p className="text-blue-100 text-base md:text-lg max-w-2xl leading-relaxed mb-8">
                Download the native macOS performance and security suite directly. 100% offline, zero telemetry, and zero subscriptions.
              </p>

              {/* Main Download CTA */}
              <div className="flex flex-col items-center gap-4">
                <a
                  href={product.downloadUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  onClick={handleDownloadClick}
                  className="group relative inline-flex items-center gap-4 px-9 py-5 rounded-2xl bg-gradient-to-r from-emerald-500 via-teal-500 to-cyan-500 hover:from-emerald-400 hover:via-teal-400 hover:to-cyan-400 text-white font-extrabold text-lg shadow-2xl shadow-emerald-500/30 hover:shadow-emerald-500/50 hover:-translate-y-1 transition-all duration-300 border border-white/20 overflow-hidden"
                >
                  <div className="p-2.5 rounded-xl bg-white/20 backdrop-blur-md group-hover:scale-110 transition-transform duration-300">
                    <Download className="h-6 w-6 text-white" />
                  </div>
                  <div className="text-left">
                    <span className="block leading-tight font-extrabold">{product.downloadLabel || `Download ${product.name}`}</span>
                    <span className="block text-xs font-normal text-emerald-100/90 mt-0.5">
                      Direct Google Drive Download {product.fileSize ? `(${product.fileSize})` : ''}
                    </span>
                  </div>
                  <ArrowDown className="h-5 w-5 ml-2 opacity-90 group-hover:translate-y-1 transition-transform" />
                </a>

                {/* Download count under button */}
                {product.downloadCount && (
                  <div className="flex items-center gap-2.5 px-5 py-2.5 rounded-full bg-white/10 border border-white/15 text-sm text-blue-100 font-medium mt-1">
                    <span className="relative flex h-2.5 w-2.5">
                      <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                      <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-emerald-400"></span>
                    </span>
                    <Download className="h-4 w-4 text-emerald-400" />
                    <span>Total Downloads: <strong className="text-white font-black text-base">{downloadCountNum.toLocaleString()}</strong></span>
                  </div>
                )}
              </div>

              {/* Trust & Spec Pills */}
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 mt-10 w-full max-w-3xl border-t border-white/10 pt-8 text-xs text-blue-100">
                <div className="flex items-center justify-center gap-2 p-3 rounded-xl bg-white/5 border border-white/10">
                  <ShieldCheck className="h-4 w-4 text-emerald-400 shrink-0" />
                  <span>Zero Telemetry</span>
                </div>
                <div className="flex items-center justify-center gap-2 p-3 rounded-xl bg-white/5 border border-white/10">
                  <Lock className="h-4 w-4 text-cyan-400 shrink-0" />
                  <span>AES-256 Encryption</span>
                </div>
                <div className="flex items-center justify-center gap-2 p-3 rounded-xl bg-white/5 border border-white/10">
                  <Cpu className="h-4 w-4 text-secunova-light shrink-0" />
                  <span>Apple Silicon & Intel</span>
                </div>
                <div className="flex items-center justify-center gap-2 p-3 rounded-xl bg-white/5 border border-white/10">
                  <CheckCircle className="h-4 w-4 text-teal-400 shrink-0" />
                  <span>macOS 11.0+ Compatible</span>
                </div>
              </div>

              {/* Software Disclaimer Note */}
              <div className="mt-8 pt-6 border-t border-white/10 text-center max-w-2xl">
                <p className="text-[11px] text-blue-200/70 leading-relaxed font-normal">
                  <strong className="text-blue-100 font-semibold">Disclaimer & Software Notice:</strong> SecuBoost is provided "as is" without warranties of any kind. All system cleaning and AES-256 vault encryption operations execute 100% locally on your device. SecuNova does not collect, transmit, or store user data or encryption keys, and assumes no liability for downloads or redistribution obtained from third-party sources outside our official website.
                </p>
              </div>

            </div>
          </div>
        </section>
      )}



      {/* Outcome & Impact Section */}
      <section className="py-16 md:py-24 bg-white border-b border-gray-200">
        <div className="container mx-auto px-4 max-w-7xl">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            
            <div className="lg:col-span-6 space-y-6">
              <span className="text-xs font-semibold text-secunova-blue uppercase tracking-wider block">Proven Outcome</span>
              <h2 className="text-3xl md:text-4xl font-bold text-secunova-dark leading-tight">
                What Changed After Delivery
              </h2>
              <p className="text-lg text-gray-700 leading-relaxed font-medium">
                {product.outcome}
              </p>

              {product.testimonial && (
                <div className="p-6 rounded-2xl bg-secunova-blue/5 border border-secunova-blue/15 mt-6">
                  <p className="italic text-gray-800 text-sm leading-relaxed">
                    "{product.testimonial.quote}"
                  </p>
                  <p className="text-xs font-bold text-secunova-dark mt-3">
                    {product.testimonial.name}, <span className="text-gray-500 font-normal">{product.testimonial.role}</span>
                  </p>
                </div>
              )}
            </div>

            <div className="lg:col-span-6 space-y-4">
              {product.outcomeStats.map((stat, i) => (
                <div key={i} className="flex items-center p-6 rounded-2xl bg-gray-50 border border-gray-200 shadow-sm gap-6">
                  <span className="text-4xl font-extrabold text-secunova-blue flex-shrink-0">
                    {stat.value}
                  </span>
                  <div>
                    <span className="block text-sm font-bold text-secunova-dark">{stat.label}</span>
                    <div className="flex items-center text-xs text-gray-500 mt-1">
                      <CheckCircle className="h-4 w-4 text-secunova-light mr-1.5" /> Verified Metric
                    </div>
                  </div>
                </div>
              ))}
            </div>

          </div>
        </div>
      </section>

      {/* Tech Stack Pills */}
      <section className="py-12 bg-gray-50 border-b border-gray-200">
        <div className="container mx-auto px-4 max-w-7xl flex flex-wrap items-center gap-4">
          <span className="text-xs font-bold uppercase tracking-wider text-gray-500 mr-2">Technologies Used:</span>
          {product.techStack.map((tech, i) => (
            <span
              key={i}
              className="text-xs font-semibold px-4 py-2 rounded-full bg-white border border-gray-300 text-secunova-dark shadow-sm"
            >
              {tech}
            </span>
          ))}
        </div>
      </section>

      {/* CTA Component */}
      <CtaSection />
    </div>
  );
};

export default ProductDetailPage;
