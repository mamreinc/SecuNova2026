import React from 'react';
import { useParams, Link, useNavigate } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';
import {
  ArrowLeft, ArrowRight, ArrowUpRight, CheckCircle2, Shield, Cpu, Lock,
  Zap, Globe, Settings, FileText, Search, TrendingUp, Layout, BarChart2,
  Database, BookOpen, Star, Users, Play, Code, CheckCircle
} from 'lucide-react';
import { PRODUCT_DETAIL_DATA, ProductMediaSlot } from '../data/productDetailData';
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

      {/* Top Nav Bar / Breadcrumb */}
      <div className="bg-gray-50 border-b border-gray-200 pt-28 pb-4">
        <div className="container mx-auto px-4 max-w-7xl">
          <Link
            to="/about/our-work"
            className="inline-flex items-center text-sm font-semibold text-secunova-blue hover:text-secunova-dark transition-colors"
          >
            <ArrowLeft className="h-4 w-4 mr-2" />
            Back to Our Work & Products
          </Link>
        </div>
      </div>

      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-secunova-dark via-gray-900 to-secunova-blue text-white py-16 md:py-24">
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
              <div className="flex flex-wrap gap-4 pt-6">
                {product.externalLink ? (
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
                <Link to="/contact" className="btn btn-outline-light inline-flex items-center gap-2">
                  <span>Inquire About Technical Specs</span>
                </Link>
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
                        controls
                        playsInline
                        preload="metadata"
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

      {/* Video & Media Showcase Gallery (If additional media exists) */}
      {galleryMedia.length > 0 && (
        <section className="py-16 md:py-24 bg-gray-900 text-white">
          <div className="container mx-auto px-4 max-w-7xl">
            <div className="text-center max-w-3xl mx-auto mb-16">
              <span className="text-xs font-semibold text-secunova-light uppercase tracking-wider block mb-2">In Production</span>
              <h2 className="text-3xl md:text-4xl font-bold text-white">
                Live Video & Media Demos
              </h2>
              <p className="text-blue-200 mt-4">
                Watch real execution and user experience demonstrations for {product.name}.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {galleryMedia.map((slot, i) => (
                <div key={i} className="bg-black rounded-2xl overflow-hidden border border-gray-800 shadow-2xl">
                  {slot.type === 'video' && slot.src ? (
                    <div className="relative aspect-video w-full">
                      <video
                        src={slot.src}
                        controls
                        playsInline
                        preload="metadata"
                        className="w-full h-full object-cover"
                      />
                    </div>
                  ) : slot.src ? (
                    <div className="relative aspect-video w-full">
                      <img
                        src={slot.src}
                        alt={slot.caption || `${product.name} screenshot`}
                        className="w-full h-full object-cover"
                      />
                    </div>
                  ) : (
                    <div className="aspect-video bg-gray-800 flex items-center justify-center p-6 text-center text-gray-400">
                      <Play className="h-12 w-12 text-secunova-blue mb-2" />
                      <p className="text-sm">{slot.caption}</p>
                    </div>
                  )}
                  {slot.caption && (
                    <div className="p-4 bg-gray-950 text-xs text-gray-300 font-medium border-t border-gray-800">
                      {slot.caption}
                    </div>
                  )}
                </div>
              ))}
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
