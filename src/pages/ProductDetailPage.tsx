/**
 * ============================================================================
 * MAXPHAOS MARKETING: PROPRIETARY CUSTOM ENGINEERING & DESIGN ARCHITECTURE
 * ----------------------------------------------------------------------------
 * All design, software architecture, UI/UX components, and source code are
 * 100% custom-engineered and designed exclusively by MaxPhaos Marketing.
 *
 * CORE ARCHITECTURAL ETHOS:
 * - 100% Bespoke Code: Built strictly to client specifications from scratch.
 * - Zero Pre-Made Templates: No generic agency starters or off-the-shelf themes.
 * - Senior-Led AI-Augmented Workflows (Vibe Coding): 14-day execution cycles
 *   engineered for sub-second performance (99+ Lighthouse Core Web Vitals).
 * - Full IP & Repository Handoff: 100% client asset and codebase ownership.
 *
 * Copyright (c) MaxPhaos Marketing. All rights reserved.
 * ============================================================================
 */

import React from 'react';
import { useParams, Link } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';
import {
  ArrowRight, CheckCircle2, Shield, Cpu, Lock,
  Zap, Globe, Settings, FileText, Search, TrendingUp, Layout, BarChart2,
  Database, BookOpen, Star, Users, Play, Code, Download, ArrowDown
} from 'lucide-react';
import { PRODUCT_DETAIL_DATA } from '../data/productDetailData';
import { getDownloadCount, incrementDownloadCount } from '../utils/downloadTracker';
import CtaSection from '../components/CtaSection';
import { buildSeoTags } from '../utils/seo-meta';

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
        <h1 className="text-3xl font-bold text-secunova-dark mb-4">Internal R&amp;D Product Not Found</h1>
        <p className="text-gray-600 mb-6">The requested internal solution architecture could not be found.</p>
        <Link to="/about/our-work" className="btn btn-gradient">Return to R&amp;D Showcase</Link>
      </div>
    );
  }

  const heroMedia = product.mediaSlots[0];

  return (
    <div className="min-h-screen bg-white">
      <Helmet>
        <title>{product.name} | {product.tagline} | SecuNova R&amp;D Showcase</title>
        <meta name="description" content={`${product.name}: ${product.pitch}`} />
        <meta name="keywords" content={`${product.name}, ${product.techStack.join(', ')}, SecuNova internal R&amp;D, proprietary software`} />
        <link rel="canonical" href={`https://secunovainc.com/about/our-work/${product.id}`} />
        {buildSeoTags({
          title: `${product.name} | SecuNova R&D Showcase`,
          description: product.pitch,
          url: `/about/our-work/${product.id}`,
          type: 'article',
          imageAlt: `${product.name} - SecuNova Supervised Delivery`,
        })}
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Product",
            "name": product.name,
            "description": product.pitch,
            "url": `https://secunovainc.com/about/our-work/${product.id}`,
            "image": "https://secunovainc.com/og-image.png",
            "brand": { "@id": "https://secunovainc.com/#organization" },
            "category": "Enterprise Technology / Internal R&D",
            "releaseDate": product.year,
            "additionalProperty": product.techStack.map((tech) => ({
              "@type": "PropertyValue",
              "name": "Technology",
              "value": tech
            }))
          })}
        </script>
      </Helmet>

      {/* Hero Section */}
      <section className="relative min-h-[70vh] flex items-center bg-gradient-to-br from-secunova-dark via-gray-900 to-secunova-blue text-white pt-32 sm:pt-36 pb-16">
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

              <h1 className="hero-heading">
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
                          {product.version ? `${product.version} ` : ''}{product.fileSize ? `• ${product.fileSize} ` : ''}• Direct Download
                        </span>
                      </div>
                      <ArrowDown className="relative h-4 w-4 ml-1 opacity-80 group-hover:translate-y-1 transition-transform" />
                    </a>

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
                ) : (
                  <Link to="/contact" className="btn btn-gradient inline-flex items-center gap-2">
                    <span>Schedule Advisory Consultation</span>
                    <ArrowRight className="h-5 w-5" />
                  </Link>
                )}
              </div>
            </div>

            {/* Media Player Column */}
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

      {/* Challenge, Solution & Outcome */}
      <section className="secunova-section secunova-section--light">
        <div className="container mx-auto px-4 max-w-7xl">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-gray-50 p-8 rounded-2xl border border-gray-200">
              <span className="text-xs font-bold uppercase tracking-widest text-red-600 block mb-2">Technical Challenge</span>
              <h3 className="text-xl font-bold text-secunova-dark mb-4">Problem Statement</h3>
              <p className="text-sm text-secunova-dark/70 leading-relaxed">{product.challenge}</p>
            </div>

            <div className="bg-gray-50 p-8 rounded-2xl border border-gray-200">
              <span className="text-xs font-bold uppercase tracking-widest text-secunova-blue block mb-2">Engineered Solution</span>
              <h3 className="text-xl font-bold text-secunova-dark mb-4">Architectural Approach</h3>
              <p className="text-sm text-secunova-dark/70 leading-relaxed">{product.solution}</p>
            </div>

            <div className="bg-gray-50 p-8 rounded-2xl border border-gray-200">
              <span className="text-xs font-bold uppercase tracking-widest text-emerald-600 block mb-2">Proven Outcome</span>
              <h3 className="text-xl font-bold text-secunova-dark mb-4">Performance Impact</h3>
              <p className="text-sm text-secunova-dark/70 leading-relaxed">{product.outcome}</p>
            </div>
          </div>
        </div>
      </section>

      {/* Tech Stack & Features */}
      <section className="secunova-section secunova-section--gray">
        <div className="container mx-auto px-4 max-w-7xl">
          <div className="mb-16">
            <h2 className="text-3xl font-bold text-secunova-dark mb-4">Technical Stack &amp; Architecture</h2>
            <div className="flex flex-wrap gap-2">
              {product.techStack.map((tech, i) => (
                <span key={i} className="px-4 py-2 bg-white border border-gray-200 rounded-xl text-sm font-mono font-semibold text-secunova-dark shadow-sm">
                  {tech}
                </span>
              ))}
            </div>
          </div>

          <div>
            <h2 className="text-3xl font-bold text-secunova-dark mb-8">Architectural Features</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {product.features.map((feat, i) => (
                <div key={i} className="bg-white p-6 rounded-2xl border border-gray-200 shadow-sm">
                  <div className="p-3 bg-gray-50 rounded-xl inline-block mb-4">
                    {feat.iconName ? ICON_MAP[feat.iconName] || <Code className="h-6 w-6 text-secunova-blue" /> : <Code className="h-6 w-6 text-secunova-blue" />}
                  </div>
                  <h3 className="text-lg font-bold text-secunova-dark mb-2">{feat.title}</h3>
                  <p className="text-xs text-secunova-dark/70 leading-relaxed">{feat.desc}</p>
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

export default ProductDetailPage;
