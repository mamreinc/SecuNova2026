import React from 'react';
import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';
import { Palette, Type, Shield, Download, Check, Copy, Layers, Crown, Image as ImageIcon, Sparkles, Sun, Moon } from 'lucide-react';
import Logo from '../components/Logo';
import CtaSection from '../components/CtaSection';

const BrandPage: React.FC = () => {
  const [copiedHex, setCopiedHex] = React.useState<string | null>(null);
  const [downloadingFormat, setDownloadingFormat] = React.useState<string | null>(null);

  const handleCopyHex = (hex: string) => {
    navigator.clipboard.writeText(hex);
    setCopiedHex(hex);
    setTimeout(() => setCopiedHex(null), 2000);
  };

  /**
   * Generates and downloads a High-Definition (3X Resolution) PNG logo variant on the fly
   */
  const handleDownloadLogo = (
    variant: 'horizontal' | 'vertical' | 'monogram',
    theme: 'light' | 'dark',
    filename: string,
    subtext?: string
  ) => {
    setDownloadingFormat(filename);

    const canvas = document.createElement('canvas');
    const scale = 3; // 3x High Definition scaling for ultra-crisp print & web assets

    if (variant === 'monogram') {
      canvas.width = 600 * scale;
      canvas.height = 600 * scale;
    } else if (variant === 'vertical') {
      canvas.width = 900 * scale;
      canvas.height = 760 * scale;
    } else {
      canvas.width = 1200 * scale;
      canvas.height = 420 * scale;
    }

    const ctx = canvas.getContext('2d');
    if (!ctx) {
      setDownloadingFormat(null);
      return;
    }

    // Fill background
    ctx.fillStyle = theme === 'dark' ? '#101928' : '#FFFFFF';
    ctx.fillRect(0, 0, canvas.width, canvas.height);

    const img = new Image();
    img.crossOrigin = 'anonymous';
    img.src = theme === 'dark' ? '/logo/secunova-icon-white.png' : '/logo/secunova-icon.png';

    img.onload = () => {
      if (variant === 'monogram') {
        const size = 320 * scale;
        const x = (canvas.width - size) / 2;
        const y = (canvas.height - size) / 2;
        ctx.drawImage(img, x, y, size, size);
      } else if (variant === 'vertical') {
        const imgHeight = 180 * scale;
        const imgWidth = (img.width / img.height) * imgHeight;
        const imgX = (canvas.width - imgWidth) / 2;
        const imgY = 130 * scale;
        ctx.drawImage(img, imgX, imgY, imgWidth, imgHeight);

        // Typography settings
        const fontSize = 68 * scale;
        ctx.font = `300 ${fontSize}px Montserrat, -apple-system, sans-serif`;
        const secuWidth = ctx.measureText('SECU').width;
        ctx.font = `900 ${fontSize}px Montserrat, -apple-system, sans-serif`;
        const novaWidth = ctx.measureText('NOVA').width;
        const dotWidth = ctx.measureText('.').width;

        const totalWidth = secuWidth + novaWidth + dotWidth;
        let startX = (canvas.width - totalWidth) / 2;
        const textY = imgY + imgHeight + (120 * scale);

        // SECU
        ctx.font = `300 ${fontSize}px Montserrat, -apple-system, sans-serif`;
        ctx.textAlign = 'left';
        ctx.fillStyle = theme === 'dark' ? 'rgba(255, 255, 255, 0.9)' : '#101928';
        ctx.fillText('SECU', startX, textY);
        startX += secuWidth;

        // NOVA
        ctx.font = `900 ${fontSize}px Montserrat, -apple-system, sans-serif`;
        ctx.fillStyle = theme === 'dark' ? '#FFFFFF' : '#101928';
        ctx.fillText('NOVA', startX, textY);
        startX += novaWidth;

        // Dot
        ctx.fillStyle = '#2563EB';
        ctx.fillText('.', startX, textY);

        // Subtext if present (e.g. CONSULTING)
        if (subtext) {
          const subFontSize = 26 * scale;
          ctx.font = `700 ${subFontSize}px Montserrat, -apple-system, sans-serif`;
          ctx.fillStyle = theme === 'dark' ? '#037ECC' : '#2563EB';
          ctx.textAlign = 'center';
          ctx.fillText(subtext.toUpperCase(), canvas.width / 2, textY + (48 * scale));
        }
      } else {
        // Horizontal Layout
        const imgHeight = 150 * scale;
        const imgWidth = (img.width / img.height) * imgHeight;
        const gap = 36 * scale;

        const fontSize = 64 * scale;
        ctx.font = `300 ${fontSize}px Montserrat, -apple-system, sans-serif`;
        const secuWidth = ctx.measureText('SECU').width;
        ctx.font = `900 ${fontSize}px Montserrat, -apple-system, sans-serif`;
        const novaWidth = ctx.measureText('NOVA').width;
        const dotWidth = ctx.measureText('.').width;

        const totalWidth = imgWidth + gap + secuWidth + novaWidth + dotWidth;
        let startX = (canvas.width - totalWidth) / 2;
        const centerY = canvas.height / 2 - (subtext ? 16 * scale : 0);

        // Draw Icon
        const imgY = centerY - (imgHeight / 2);
        ctx.drawImage(img, startX, imgY, imgWidth, imgHeight);
        const textStartX = startX + imgWidth + gap;
        startX = textStartX;

        const textY = centerY + (22 * scale);

        // SECU
        ctx.font = `300 ${fontSize}px Montserrat, -apple-system, sans-serif`;
        ctx.textAlign = 'left';
        ctx.fillStyle = theme === 'dark' ? 'rgba(255, 255, 255, 0.9)' : '#101928';
        ctx.fillText('SECU', startX, textY);
        startX += secuWidth;

        // NOVA
        ctx.font = `900 ${fontSize}px Montserrat, -apple-system, sans-serif`;
        ctx.fillStyle = theme === 'dark' ? '#FFFFFF' : '#101928';
        ctx.fillText('NOVA', startX, textY);
        startX += novaWidth;

        // Dot
        ctx.fillStyle = '#2563EB';
        ctx.fillText('.', startX, textY);

        // Subtext
        if (subtext) {
          const subFontSize = 24 * scale;
          ctx.font = `700 ${subFontSize}px Montserrat, -apple-system, sans-serif`;
          ctx.fillStyle = theme === 'dark' ? '#037ECC' : '#2563EB';
          ctx.textAlign = 'left';
          ctx.fillText(subtext.toUpperCase(), textStartX, textY + (42 * scale));
        }
      }

      // Export & Download
      const dataUrl = canvas.toDataURL('image/png', 1.0);
      const link = document.createElement('a');
      link.download = filename;
      link.href = dataUrl;
      link.click();
      setDownloadingFormat(null);
    };

    img.onerror = () => {
      setDownloadingFormat(null);
    };
  };

  /**
   * Generates and downloads LinkedIn Company Cover Banners (Exact 1584 x 396 pixels)
   */
  const handleDownloadLinkedInCover = (
    bannerId: 'executive' | 'consulting' | 'engineering' | 'executive-light' | 'consulting-light' | 'engineering-light',
    filename: string
  ) => {
    setDownloadingFormat(filename);

    const isLight = bannerId.endsWith('-light');
    const baseBannerId = bannerId.replace('-light', '');

    const canvas = document.createElement('canvas');
    // Standard LinkedIn Company Cover resolution at 2X scale for Retina displays (3168 x 792)
    canvas.width = 1584 * 2;
    canvas.height = 396 * 2;

    const ctx = canvas.getContext('2d');
    if (!ctx) {
      setDownloadingFormat(null);
      return;
    }

    const scale = 2;

    // Background Gradients according to theme
    if (isLight) {
      const grad = ctx.createLinearGradient(0, 0, canvas.width, canvas.height);
      grad.addColorStop(0, '#FFFFFF');
      grad.addColorStop(0.7, '#F8FAFC');
      grad.addColorStop(1, '#EFF6FF');
      ctx.fillStyle = grad;
    } else {
      if (baseBannerId === 'executive') {
        const grad = ctx.createLinearGradient(0, 0, canvas.width, canvas.height);
        grad.addColorStop(0, '#101928');
        grad.addColorStop(0.5, '#0B121E');
        grad.addColorStop(1, '#1E3A8A');
        ctx.fillStyle = grad;
      } else if (baseBannerId === 'consulting') {
        const grad = ctx.createLinearGradient(0, 0, canvas.width, canvas.height);
        grad.addColorStop(0, '#0F172A');
        grad.addColorStop(0.6, '#1E293B');
        grad.addColorStop(1, '#0284C7');
        ctx.fillStyle = grad;
      } else {
        const grad = ctx.createLinearGradient(0, 0, canvas.width, canvas.height);
        grad.addColorStop(0, '#090D16');
        grad.addColorStop(0.7, '#101928');
        grad.addColorStop(1, '#2563EB');
        ctx.fillStyle = grad;
      }
    }
    ctx.fillRect(0, 0, canvas.width, canvas.height);

    // Decorative grid lines
    ctx.strokeStyle = isLight ? 'rgba(37, 99, 235, 0.06)' : 'rgba(255, 255, 255, 0.05)';
    ctx.lineWidth = 1 * scale;
    for (let x = 0; x < canvas.width; x += 60 * scale) {
      ctx.beginPath();
      ctx.moveTo(x, 0);
      ctx.lineTo(x, canvas.height);
      ctx.stroke();
    }

    const img = new Image();
    img.crossOrigin = 'anonymous';
    img.src = isLight ? '/logo/secunova-icon.png' : '/logo/secunova-icon-white.png';

    img.onload = () => {
      // Draw Logo Mark on Left
      const iconSize = 90 * scale;
      const iconX = 70 * scale;
      const iconY = (canvas.height - iconSize) / 2;
      ctx.drawImage(img, iconX, iconY, iconSize, iconSize);

      // Logo Text next to icon
      let textStartX = iconX + iconSize + (24 * scale);
      const logoTextY = iconY + (52 * scale);

      ctx.font = `300 ${44 * scale}px Montserrat, sans-serif`;
      const secuW = ctx.measureText('SECU').width;
      ctx.font = `900 ${44 * scale}px Montserrat, sans-serif`;
      const novaW = ctx.measureText('NOVA').width;

      ctx.font = `300 ${44 * scale}px Montserrat, sans-serif`;
      ctx.fillStyle = isLight ? '#101928' : 'rgba(255, 255, 255, 0.9)';
      ctx.fillText('SECU', textStartX, logoTextY);
      textStartX += secuW;

      ctx.font = `900 ${44 * scale}px Montserrat, sans-serif`;
      ctx.fillStyle = isLight ? '#101928' : '#FFFFFF';
      ctx.fillText('NOVA', textStartX, logoTextY);
      textStartX += novaW;

      ctx.fillStyle = '#2563EB';
      ctx.fillText('.', textStartX, logoTextY);

      if (baseBannerId === 'consulting') {
        ctx.font = `700 ${16 * scale}px Montserrat, sans-serif`;
        ctx.fillStyle = isLight ? '#2563EB' : '#037ECC';
        ctx.fillText('CONSULTING', iconX + iconSize + (24 * scale), logoTextY + (24 * scale));
      }

      // Main Headlines on Right / Center - Comprehensive Copywriting tailored per variant
      const contentX = 520 * scale;
      let headline = 'STRATEGY FOR LEADERS. ENGINEERING FOR GROWTH.';
      let subheadline = 'Your Strategic Technical Shield in Calgary, AB · Zero CMS Debt · Senior-Led Execution';
      let tagText = 'SECUNOVA INC. · CALGARY, ALBERTA';
      let footerText = 'secunovainc.com  |  403-401-1552';

      if (!isLight) {
        // Dark Banners
        if (baseBannerId === 'consulting') {
          headline = 'NAVIGATE DIGITAL CHANGE BEFORE IT COSTS YOU MOMENTUM.';
          subheadline = 'Digital Transformation · Executive Innovation · Project Management (PMaaS)';
          tagText = 'SECUNOVA CONSULTING · BOARDROOM ADVISORY';
          footerText = 'secunovainc.com/services  |  North American Operations';
        } else if (baseBannerId === 'engineering') {
          headline = 'PURE CUSTOM CODE. ZERO CMS BLOAT.';
          subheadline = 'Custom React.js Applications · High-Converting Funnels · Tech Stack Audits';
          tagText = 'DIGITAL ENGINEERING · VIBE CODING ARCHITECTURE';
          footerText = 'secunovainc.com/services/web-development  |  100% Custom Code';
        }
      } else {
        // Light White Banners - Comprehensive Service Coverage & Ultra-Strong Copywriting
        if (baseBannerId === 'executive') {
          headline = 'HIGH-VELOCITY CUSTOM WEB APPS. ZERO CMS BLOAT.';
          subheadline = 'Enterprise React.js Apps · High-Converting Marketing Funnels · UI/UX Design & Figma Redesigns';
          tagText = 'DIGITAL ENGINEERING · VIBE CODING ARCHITECTURE';
          footerText = 'secunovainc.com/services/web-development  |  Calgary, AB';
        } else if (baseBannerId === 'consulting') {
          headline = 'NAVIGATE DIGITAL CHANGE. PROTECT CAPITAL. DELIVER RESULTS.';
          subheadline = 'Digital Transformation Strategy · Executive Leadership Consulting · Independent PMaaS & Vendor Oversight';
          tagText = 'SECUNOVA CONSULTING · BOARDROOM & PMaaS ADVISORY';
          footerText = 'secunovainc.com/services/digital-project-management  |  North American Operations';
        } else if (baseBannerId === 'engineering') {
          headline = 'CONVERT HIGH-INTENT B2B TRAFFIC. ELIMINATE SOFTWARE BLOAT.';
          subheadline = 'Engineered B2B Content & Organic SEO · Forensic Tech Stack & Security Audits · Web Maintenance';
          tagText = 'B2B GROWTH · SEO & TECH STACK AUDITS';
          footerText = 'secunovainc.com/services/seo-marketing  |  Direct Consultation: 403-401-1552';
        }
      }

      // Pill Tag
      ctx.fillStyle = isLight ? 'rgba(37, 99, 235, 0.08)' : 'rgba(255, 255, 255, 0.12)';
      const tagY = 95 * scale;
      ctx.font = `700 ${14 * scale}px Montserrat, sans-serif`;
      const tagW = ctx.measureText(tagText).width + (32 * scale);
      ctx.roundRect(contentX, tagY, tagW, 30 * scale, 15 * scale);
      ctx.fill();

      ctx.fillStyle = isLight ? '#2563EB' : '#38BDF8';
      ctx.fillText(tagText, contentX + (16 * scale), tagY + (20 * scale));

      // Main Headline
      ctx.font = `900 ${34 * scale}px Montserrat, sans-serif`;
      ctx.fillStyle = isLight ? '#101928' : '#FFFFFF';
      ctx.fillText(headline, contentX, tagY + (80 * scale));

      // Subheadline
      ctx.font = `500 ${18 * scale}px Montserrat, sans-serif`;
      ctx.fillStyle = isLight ? '#334155' : '#94A3B8';
      ctx.fillText(subheadline, contentX, tagY + (125 * scale));

      // Footer Info
      ctx.font = `600 ${16 * scale}px Montserrat, sans-serif`;
      ctx.fillStyle = isLight ? '#101928' : '#FFFFFF';
      ctx.fillText(footerText, contentX, tagY + (180 * scale));

      // Export PNG
      const dataUrl = canvas.toDataURL('image/png', 1.0);
      const link = document.createElement('a');
      link.download = filename;
      link.href = dataUrl;
      link.click();
      setDownloadingFormat(null);
    };

    img.onerror = () => {
      setDownloadingFormat(null);
    };
  };

  const colorPalette = [
    {
      name: 'Primary Dark Navy',
      hex: '#101928',
      rgb: '16, 25, 40',
      usage: 'Main dark background, primary heading text, executive containers',
      bgClass: 'bg-[#101928]',
      textColor: 'text-white'
    },
    {
      name: 'Accent Royal Blue',
      hex: '#2563EB',
      rgb: '37, 99, 235',
      usage: 'Primary brand accent, interactive triggers, CTAs, focus rings',
      bgClass: 'bg-[#2563EB]',
      textColor: 'text-white'
    },
    {
      name: 'Vibrant Light Blue',
      hex: '#037ECC',
      rgb: '3, 126, 204',
      usage: 'Secondary accents, gradient highlights, badges, dark mode text',
      bgClass: 'bg-[#037ECC]',
      textColor: 'text-white'
    },
    {
      name: 'Surface Light Gray',
      hex: '#F8FAFC',
      rgb: '248, 250, 252',
      usage: 'Card backgrounds, light section backgrounds, subtle contrast fills',
      bgClass: 'bg-[#F8FAFC]',
      textColor: 'text-[#101928]'
    },
    {
      name: 'Border Gray',
      hex: '#E2E8F0',
      rgb: '226, 232, 240',
      usage: 'Card borders, section dividers, input outlines',
      bgClass: 'bg-[#E2E8F0]',
      textColor: 'text-[#101928]'
    },
    {
      name: 'High-Contrast White',
      hex: '#FFFFFF',
      rgb: '255, 255, 255',
      usage: 'Card containers, primary background, inverse text',
      bgClass: 'bg-white',
      textColor: 'text-[#101928]'
    }
  ];

  const typographyScale = [
    {
      level: 'Hero Title (H1)',
      size: '3.75rem / 60px',
      weight: '900 Black / 800 ExtraBold',
      lineHeight: '1.15',
      sample: 'Engineering Digital Change With Authority'
    },
    {
      level: 'Section Header (H2)',
      size: '2.5rem / 40px',
      weight: '800 ExtraBold',
      lineHeight: '1.25',
      sample: 'Unified BEM Design Architecture'
    },
    {
      level: 'Subheading (H3)',
      size: '1.5rem / 24px',
      weight: '700 Bold',
      lineHeight: '1.3',
      sample: 'Strategic Consulting & Digital Engineering'
    },
    {
      level: 'Card Title (H4)',
      size: '1.25rem / 20px',
      weight: '700 Bold',
      lineHeight: '1.3',
      sample: 'Custom Web Application Development'
    },
    {
      level: 'Body Lead',
      size: '1.125rem / 18px',
      weight: '400 Regular / 500 Medium',
      lineHeight: '1.6',
      sample: 'SecuNova builds enterprise-grade custom web applications with senior-led Vibe Coding.'
    },
    {
      level: 'Body Standard',
      size: '0.9375rem / 15px',
      weight: '400 Regular',
      lineHeight: '1.6',
      sample: 'Pure React & TypeScript custom code designed to eliminate software entropy and CMS bloat.'
    },
    {
      level: 'Caption & Badge',
      size: '0.75rem / 12px',
      weight: '600 SemiBold',
      lineHeight: '1.0',
      sample: 'Pillar II · Digital Engineering'
    }
  ];

  return (
    <div className="min-h-screen bg-white">
      <Helmet>
        <title>Brand Design System & Assets | SecuNova Inc. (Private)</title>
        <meta name="robots" content="noindex, nofollow, noarchive, nosnippet" />
        <meta name="googlebot" content="noindex, nofollow, noarchive, nosnippet" />
        <meta name="bingbot" content="noindex, nofollow, noarchive, nosnippet" />
      </Helmet>

      {/* Hero Section */}
      <section className="relative min-h-[70vh] flex items-center justify-center pt-28 sm:pt-36 pb-16 overflow-hidden bg-gradient-to-b from-secunova-dark via-secunova-dark to-[#0B121E]">
        <div className="absolute inset-0 bg-gradient-to-br from-secunova-dark/95 via-secunova-dark/90 to-secunova-blue/80"></div>
        <div className="container mx-auto px-4 sm:px-6 relative z-10 w-full">
          <div className="max-w-5xl mx-auto text-center text-white">
            <div className="inline-flex items-center bg-white/10 backdrop-blur-sm border border-white/20 px-6 py-3 rounded-full text-sm font-medium mb-6">
              <ImageIcon className="h-4 w-4 mr-2 text-white" />
              Brand Design System & LinkedIn Banners
            </div>
            
            <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold mb-6 leading-tight">
              LinkedIn Company Banners & <span className="text-secunova-light">Brand Suite</span>
            </h1>

            <p className="text-lg sm:text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed mb-8">
              Official corporate brand standards and LinkedIn Company Page Banners (exact 1584 x 396 px). Download high-definition HD PNG banners in both <strong>Dark Theme</strong> and <strong>Light White Theme</strong> covering all SecuNova services.
            </p>
          </div>
        </div>
      </section>

      {/* NEW SECTION: LinkedIn Company Banners Showcase (1584 x 396 px) - Dark & Light Themes */}
      <section className="secunova-section secunova-section--dark">
        <div className="container mx-auto px-4 sm:px-6">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <div className="inline-flex items-center bg-white/10 text-secunova-light px-4 py-2 rounded-full text-xs font-semibold uppercase tracking-wider mb-4">
                <Sparkles className="h-4 w-4 mr-2 text-white" />
                LinkedIn Company Page Assets (1584 x 396 px)
              </div>
              <h2 className="text-3xl md:text-5xl font-bold text-white mb-4">
                LinkedIn Company Cover Banners
              </h2>
              <p className="text-gray-300 text-lg max-w-3xl mx-auto">
                Ready-to-upload, high-resolution LinkedIn cover banners in both Dark and Light White themes with executive copywriting. Aligned to LinkedIn's exact 1584 × 396 specifications.
              </p>
            </div>

            {/* DARK THEME BANNERS */}
            <div className="mb-16">
              <h3 className="text-2xl font-bold text-white mb-8 flex items-center gap-2">
                <Moon className="h-5 w-5 text-secunova-light" />
                Dark Theme Covers (Navy / Dark Backgrounds)
              </h3>
              <div className="space-y-10">
                {/* Dark Banner 1: Executive Strategic Shield */}
                <div className="bg-slate-900 border border-slate-800 rounded-2xl p-6 shadow-2xl">
                  <div className="flex flex-col md:flex-row md:items-center justify-between mb-4 gap-4">
                    <div>
                      <span className="text-xs font-bold uppercase tracking-wider text-secunova-light bg-blue-500/10 px-3 py-1 rounded-full border border-blue-500/20">
                        Option 01 · Corporate & Executive Authority
                      </span>
                      <h4 className="text-xl font-bold text-white mt-2">Executive Strategic Shield Banner (Dark)</h4>
                    </div>
                    <button
                      onClick={() => handleDownloadLinkedInCover('executive', 'secunova-linkedin-cover-executive-dark-1584x396.png')}
                      disabled={downloadingFormat === 'secunova-linkedin-cover-executive-dark-1584x396.png'}
                      className="btn btn-gradient btn-md flex items-center justify-center gap-2 self-start md:self-auto"
                    >
                      <Download className="h-4 w-4" />
                      <span>{downloadingFormat === 'secunova-linkedin-cover-executive-dark-1584x396.png' ? 'Generating 1584x396 PNG...' : 'Download Dark PNG (1584×396)'}</span>
                    </button>
                  </div>

                  <div className="w-full aspect-[1584/396] bg-gradient-to-r from-[#101928] via-[#0B121E] to-[#1E3A8A] rounded-xl p-4 sm:p-8 flex flex-col justify-between border border-slate-700/60 relative overflow-hidden shadow-inner">
                    <div className="absolute inset-0 bg-[radial-gradient(#38bdf8_1px,transparent_1px)] [background-size:24px_24px] opacity-10 pointer-events-none"></div>

                    <div className="relative z-10 flex items-center justify-between">
                      <Logo variant="horizontal" size="md" theme="dark" showLink={false} />
                      <span className="hidden sm:inline-block text-[10px] sm:text-xs font-bold uppercase tracking-widest bg-blue-500/20 text-sky-300 border border-blue-400/30 px-3 py-1 rounded-full">
                        SecuNova Inc. · Calgary, AB
                      </span>
                    </div>

                    <div className="relative z-10 my-auto">
                      <h4 className="text-sm sm:text-xl md:text-2xl font-black text-white leading-tight mb-1 sm:mb-2 tracking-tight">
                        STRATEGY FOR LEADERS. ENGINEERING FOR GROWTH.
                      </h4>
                      <p className="text-[10px] sm:text-sm text-slate-300 max-w-2xl leading-relaxed">
                        Your Strategic Technical Shield in Calgary, AB · Zero CMS Debt · Senior-Led Execution
                      </p>
                    </div>

                    <div className="relative z-10 flex items-center justify-between text-[10px] sm:text-xs text-white/80 font-semibold border-t border-white/10 pt-2">
                      <span>secunovainc.com</span>
                      <span>Direct Consultation: 403-401-1552</span>
                    </div>
                  </div>
                </div>

                {/* Dark Banner 2: SecuNova Consulting Banner */}
                <div className="bg-slate-900 border border-slate-800 rounded-2xl p-6 shadow-2xl">
                  <div className="flex flex-col md:flex-row md:items-center justify-between mb-4 gap-4">
                    <div>
                      <span className="text-xs font-bold uppercase tracking-wider text-sky-400 bg-sky-500/10 px-3 py-1 rounded-full border border-sky-500/20">
                        Option 02 · Strategic Advisory & PMaaS
                      </span>
                      <h4 className="text-xl font-bold text-white mt-2">SecuNova Consulting Division Banner (Dark)</h4>
                    </div>
                    <button
                      onClick={() => handleDownloadLinkedInCover('consulting', 'secunova-consulting-linkedin-cover-dark-1584x396.png')}
                      disabled={downloadingFormat === 'secunova-consulting-linkedin-cover-dark-1584x396.png'}
                      className="btn btn-gradient btn-md flex items-center justify-center gap-2 self-start md:self-auto"
                    >
                      <Download className="h-4 w-4" />
                      <span>{downloadingFormat === 'secunova-consulting-linkedin-cover-dark-1584x396.png' ? 'Generating 1584x396 PNG...' : 'Download Dark PNG (1584×396)'}</span>
                    </button>
                  </div>

                  <div className="w-full aspect-[1584/396] bg-gradient-to-r from-[#0F172A] via-[#1E293B] to-[#0284C7] rounded-xl p-4 sm:p-8 flex flex-col justify-between border border-slate-700/60 relative overflow-hidden shadow-inner">
                    <div className="relative z-10 flex items-center justify-between">
                      <Logo variant="horizontal" size="md" theme="dark" subtext="CONSULTING" showLink={false} />
                      <span className="hidden sm:inline-block text-[10px] sm:text-xs font-bold uppercase tracking-widest bg-sky-500/20 text-sky-200 border border-sky-400/30 px-3 py-1 rounded-full">
                        Boardroom Advisory
                      </span>
                    </div>

                    <div className="relative z-10 my-auto">
                      <h4 className="text-sm sm:text-xl md:text-2xl font-black text-white leading-tight mb-1 sm:mb-2 tracking-tight">
                        NAVIGATE DIGITAL CHANGE BEFORE IT COSTS YOU MOMENTUM.
                      </h4>
                      <p className="text-[10px] sm:text-sm text-slate-300 max-w-2xl leading-relaxed">
                        Digital Transformation · Executive Innovation · Project Management as a Service (PMaaS)
                      </p>
                    </div>

                    <div className="relative z-10 flex items-center justify-between text-[10px] sm:text-xs text-white/80 font-semibold border-t border-white/10 pt-2">
                      <span>secunovainc.com/services</span>
                      <span>North American Operations</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* LIGHT THEME BANNERS (WHITE BACKGROUND) - Comprehensive Service Suite */}
            <div>
              <h3 className="text-2xl font-bold text-white mb-8 flex items-center gap-2">
                <Sun className="h-5 w-5 text-amber-400" />
                Light Theme Covers (Clean White Backgrounds · Full Service Suite)
              </h3>
              <div className="space-y-10">
                {/* Light Banner 1: Digital Engineering, Web Apps & UI/UX Design */}
                <div className="bg-white rounded-2xl p-6 shadow-2xl border border-gray-200 text-secunova-dark">
                  <div className="flex flex-col md:flex-row md:items-center justify-between mb-4 gap-4">
                    <div>
                      <span className="text-xs font-bold uppercase tracking-wider text-secunova-blue bg-blue-50 px-3 py-1 rounded-full border border-blue-200">
                        Option 03 · Custom Web Apps, Vibe Coding & UI/UX Design
                      </span>
                      <h4 className="text-xl font-bold text-secunova-dark mt-2">Digital Engineering & Web Architecture Cover (White)</h4>
                    </div>
                    <button
                      onClick={() => handleDownloadLinkedInCover('executive-light', 'secunova-web-engineering-linkedin-cover-white-1584x396.png')}
                      disabled={downloadingFormat === 'secunova-web-engineering-linkedin-cover-white-1584x396.png'}
                      className="btn btn-gradient btn-md flex items-center justify-center gap-2 self-start md:self-auto"
                    >
                      <Download className="h-4 w-4" />
                      <span>{downloadingFormat === 'secunova-web-engineering-linkedin-cover-white-1584x396.png' ? 'Generating 1584x396 PNG...' : 'Download White PNG (1584×396)'}</span>
                    </button>
                  </div>

                  <div className="w-full aspect-[1584/396] bg-gradient-to-r from-white via-slate-50 to-blue-50/50 rounded-xl p-4 sm:p-8 flex flex-col justify-between border border-gray-200 relative overflow-hidden shadow-inner text-secunova-dark">
                    <div className="relative z-10 flex items-center justify-between">
                      <Logo variant="horizontal" size="md" theme="light" showLink={false} />
                      <span className="hidden sm:inline-block text-[10px] sm:text-xs font-bold uppercase tracking-widest bg-blue-100 text-secunova-blue border border-blue-200 px-3 py-1 rounded-full">
                        DIGITAL ENGINEERING · VIBE CODING ARCHITECTURE
                      </span>
                    </div>

                    <div className="relative z-10 my-auto">
                      <h4 className="text-sm sm:text-xl md:text-2xl font-black text-secunova-dark leading-tight mb-1 sm:mb-2 tracking-tight">
                        HIGH-VELOCITY CUSTOM WEB APPS. ZERO CMS BLOAT.
                      </h4>
                      <p className="text-[10px] sm:text-sm text-slate-600 max-w-2xl leading-relaxed">
                        Enterprise React.js Apps · High-Converting Marketing Funnels · UI/UX Design & Figma Redesigns
                      </p>
                    </div>

                    <div className="relative z-10 flex items-center justify-between text-[10px] sm:text-xs text-secunova-dark/80 font-semibold border-t border-gray-200 pt-2">
                      <span>secunovainc.com/services/web-development</span>
                      <span>Calgary, AB · 100% Custom Code</span>
                    </div>
                  </div>
                </div>

                {/* Light Banner 2: SecuNova Consulting & IT Governance (PMaaS) */}
                <div className="bg-white rounded-2xl p-6 shadow-2xl border border-gray-200 text-secunova-dark">
                  <div className="flex flex-col md:flex-row md:items-center justify-between mb-4 gap-4">
                    <div>
                      <span className="text-xs font-bold uppercase tracking-wider text-secunova-blue bg-blue-50 px-3 py-1 rounded-full border border-blue-200">
                        Option 04 · Strategic Consulting & Digital Project Management (PMaaS)
                      </span>
                      <h4 className="text-xl font-bold text-secunova-dark mt-2">SecuNova Consulting & PMaaS Governance Cover (White)</h4>
                    </div>
                    <button
                      onClick={() => handleDownloadLinkedInCover('consulting-light', 'secunova-consulting-pmaas-linkedin-cover-white-1584x396.png')}
                      disabled={downloadingFormat === 'secunova-consulting-pmaas-linkedin-cover-white-1584x396.png'}
                      className="btn btn-gradient btn-md flex items-center justify-center gap-2 self-start md:self-auto"
                    >
                      <Download className="h-4 w-4" />
                      <span>{downloadingFormat === 'secunova-consulting-pmaas-linkedin-cover-white-1584x396.png' ? 'Generating 1584x396 PNG...' : 'Download White PNG (1584×396)'}</span>
                    </button>
                  </div>

                  <div className="w-full aspect-[1584/396] bg-gradient-to-r from-white via-blue-50/30 to-sky-50 rounded-xl p-4 sm:p-8 flex flex-col justify-between border border-gray-200 relative overflow-hidden shadow-inner text-secunova-dark">
                    <div className="relative z-10 flex items-center justify-between">
                      <Logo variant="horizontal" size="md" theme="light" subtext="CONSULTING" showLink={false} />
                      <span className="hidden sm:inline-block text-[10px] sm:text-xs font-bold uppercase tracking-widest bg-sky-100 text-secunova-blue border border-sky-200 px-3 py-1 rounded-full">
                        SECUNOVA CONSULTING · BOARDROOM & PMaaS ADVISORY
                      </span>
                    </div>

                    <div className="relative z-10 my-auto">
                      <h4 className="text-sm sm:text-xl md:text-2xl font-black text-secunova-dark leading-tight mb-1 sm:mb-2 tracking-tight">
                        NAVIGATE DIGITAL CHANGE. PROTECT CAPITAL. DELIVER RESULTS.
                      </h4>
                      <p className="text-[10px] sm:text-sm text-slate-600 max-w-2xl leading-relaxed">
                        Digital Transformation Strategy · Executive Leadership Consulting · Independent PMaaS & Vendor Oversight
                      </p>
                    </div>

                    <div className="relative z-10 flex items-center justify-between text-[10px] sm:text-xs text-secunova-dark/80 font-semibold border-t border-gray-200 pt-2">
                      <span>secunovainc.com/services/digital-project-management</span>
                      <span>North American Operations</span>
                    </div>
                  </div>
                </div>

                {/* Light Banner 3: B2B Organic SEO, Copywriting & Tech Stack Audits */}
                <div className="bg-white rounded-2xl p-6 shadow-2xl border border-gray-200 text-secunova-dark">
                  <div className="flex flex-col md:flex-row md:items-center justify-between mb-4 gap-4">
                    <div>
                      <span className="text-xs font-bold uppercase tracking-wider text-secunova-blue bg-blue-50 px-3 py-1 rounded-full border border-blue-200">
                        Option 05 · B2B Content, SEO & Tech Stack Forensic Audits
                      </span>
                      <h4 className="text-xl font-bold text-secunova-dark mt-2">B2B Content, SEO Strategy & Tech Stack Audit Cover (White)</h4>
                    </div>
                    <button
                      onClick={() => handleDownloadLinkedInCover('engineering-light', 'secunova-seo-audit-linkedin-cover-white-1584x396.png')}
                      disabled={downloadingFormat === 'secunova-seo-audit-linkedin-cover-white-1584x396.png'}
                      className="btn btn-gradient btn-md flex items-center justify-center gap-2 self-start md:self-auto"
                    >
                      <Download className="h-4 w-4" />
                      <span>{downloadingFormat === 'secunova-seo-audit-linkedin-cover-white-1584x396.png' ? 'Generating 1584x396 PNG...' : 'Download White PNG (1584×396)'}</span>
                    </button>
                  </div>

                  <div className="w-full aspect-[1584/396] bg-gradient-to-r from-white via-slate-50 to-blue-100/50 rounded-xl p-4 sm:p-8 flex flex-col justify-between border border-gray-200 relative overflow-hidden shadow-inner text-secunova-dark">
                    <div className="relative z-10 flex items-center justify-between">
                      <Logo variant="horizontal" size="md" theme="light" showLink={false} />
                      <span className="hidden sm:inline-block text-[10px] sm:text-xs font-bold uppercase tracking-widest bg-blue-100 text-secunova-blue border border-blue-200 px-3 py-1 rounded-full">
                        B2B GROWTH · SEO & TECH STACK AUDITS
                      </span>
                    </div>

                    <div className="relative z-10 my-auto">
                      <h4 className="text-sm sm:text-xl md:text-2xl font-black text-secunova-dark leading-tight mb-1 sm:mb-2 tracking-tight">
                        CONVERT HIGH-INTENT B2B TRAFFIC. ELIMINATE SOFTWARE BLOAT.
                      </h4>
                      <p className="text-[10px] sm:text-sm text-slate-600 max-w-2xl leading-relaxed">
                        Engineered B2B Content & Organic SEO · Forensic Tech Stack & Security Audits · Web Maintenance
                      </p>
                    </div>

                    <div className="relative z-10 flex items-center justify-between text-[10px] sm:text-xs text-secunova-dark/80 font-semibold border-t border-gray-200 pt-2">
                      <span>secunovainc.com/services/seo-marketing</span>
                      <span>Direct Consultation: 403-401-1552</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Dedicated SecuNova Consulting Logo Suite */}
      <section className="secunova-section secunova-section--light">
        <div className="container mx-auto px-4 sm:px-6">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <div className="inline-flex items-center bg-secunova-blue/10 text-secunova-blue px-4 py-2 rounded-full text-xs font-semibold uppercase tracking-wider mb-4">
                <Crown className="h-4 w-4 mr-2 text-secunova-blue" />
                Dedicated Division Marks
              </div>
              <h2 className="text-3xl md:text-5xl font-bold text-secunova-dark mb-4">
                SecuNova Consulting Logo Suite
              </h2>
              <p className="text-gray-600 text-lg max-w-3xl mx-auto">
                Specialized corporate division logos featuring the official "CONSULTING" typography mark. Available in light and dark mode variations with 3X HD PNG download support.
              </p>
            </div>

            <div className="secunova-grid secunova-grid--3col">
              {/* Horizontal Consulting Light */}
              <div className="secunova-card flex flex-col justify-between">
                <div>
                  <div className="secunova-card__header">
                    <span className="secunova-card__badge bg-blue-50 text-secunova-blue">Consulting Horizontal</span>
                  </div>
                  <div className="p-8 bg-white border border-gray-100 rounded-xl flex items-center justify-center min-h-[140px]">
                    <Logo variant="horizontal" size="lg" theme="light" subtext="CONSULTING" showLink={false} />
                  </div>
                  <div className="secunova-card__body mt-4">
                    <h4 className="secunova-card__title text-base mb-1">SecuNova Consulting (Light)</h4>
                    <p className="secunova-card__description">
                      Horizontal logo mark with dedicated "CONSULTING" subtext for official executive proposals, light background presentation decks, and formal correspondence.
                    </p>
                  </div>
                </div>
                <div className="mt-6 pt-4 border-t border-gray-100">
                  <button
                    onClick={() => handleDownloadLogo('horizontal', 'light', 'secunova-consulting-horizontal-light-3x.png', 'CONSULTING')}
                    disabled={downloadingFormat === 'secunova-consulting-horizontal-light-3x.png'}
                    className="w-full btn btn-gradient btn-sm flex items-center justify-center gap-2"
                  >
                    <Download className="h-4 w-4" />
                    <span>{downloadingFormat === 'secunova-consulting-horizontal-light-3x.png' ? 'Generating HD PNG...' : 'Download HD PNG (3X)'}</span>
                  </button>
                </div>
              </div>

              {/* Stacked Consulting Light */}
              <div className="secunova-card flex flex-col justify-between">
                <div>
                  <div className="secunova-card__header">
                    <span className="secunova-card__badge bg-blue-50 text-secunova-blue">Consulting Vertical</span>
                  </div>
                  <div className="p-8 bg-white border border-gray-100 rounded-xl flex items-center justify-center min-h-[140px]">
                    <Logo variant="vertical" size="lg" theme="light" subtext="CONSULTING" showLink={false} />
                  </div>
                  <div className="secunova-card__body mt-4">
                    <h4 className="secunova-card__title text-base mb-1">SecuNova Consulting Vertical (Light)</h4>
                    <p className="secunova-card__description">
                      Centered vertical logo mark with "CONSULTING" title lockup. Perfect for title slides, document covers, and corporate banner displays.
                    </p>
                  </div>
                </div>
                <div className="mt-6 pt-4 border-t border-gray-100">
                  <button
                    onClick={() => handleDownloadLogo('vertical', 'light', 'secunova-consulting-vertical-light-3x.png', 'CONSULTING')}
                    disabled={downloadingFormat === 'secunova-consulting-vertical-light-3x.png'}
                    className="w-full btn btn-gradient btn-sm flex items-center justify-center gap-2"
                  >
                    <Download className="h-4 w-4" />
                    <span>{downloadingFormat === 'secunova-consulting-vertical-light-3x.png' ? 'Generating HD PNG...' : 'Download HD PNG (3X)'}</span>
                  </button>
                </div>
              </div>

              {/* Horizontal Consulting Dark */}
              <div className="secunova-card secunova-card--dark flex flex-col justify-between">
                <div>
                  <div className="secunova-card__header">
                    <span className="secunova-card__badge">Consulting Dark Mark</span>
                  </div>
                  <div className="p-8 bg-[#101928] border border-slate-700/60 rounded-xl flex items-center justify-center min-h-[140px]">
                    <Logo variant="horizontal" size="lg" theme="dark" subtext="CONSULTING" showLink={false} />
                  </div>
                  <div className="secunova-card__body mt-4">
                    <h4 className="secunova-card__title text-base mb-1 text-white">SecuNova Consulting (Dark Inverse)</h4>
                    <p className="secunova-card__description">
                      High-contrast dark theme logo variant with bright cyan "CONSULTING" subtitle. Optimized for executive dark headers and dark web applications.
                    </p>
                  </div>
                </div>
                <div className="mt-6 pt-4 border-t border-slate-700/60">
                  <button
                    onClick={() => handleDownloadLogo('horizontal', 'dark', 'secunova-consulting-horizontal-dark-3x.png', 'CONSULTING')}
                    disabled={downloadingFormat === 'secunova-consulting-horizontal-dark-3x.png'}
                    className="w-full btn btn-outline-light btn-sm flex items-center justify-center gap-2"
                  >
                    <Download className="h-4 w-4" />
                    <span>{downloadingFormat === 'secunova-consulting-horizontal-dark-3x.png' ? 'Generating HD PNG...' : 'Download HD PNG (3X)'}</span>
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Primary SecuNova Inc. Logo Variations Showcase */}
      <section className="secunova-section secunova-section--gray">
        <div className="container mx-auto px-4 sm:px-6">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <div className="inline-flex items-center bg-secunova-blue/10 text-secunova-blue px-4 py-2 rounded-full text-xs font-semibold uppercase tracking-wider mb-4">
                <Shield className="h-4 w-4 mr-2" />
                Primary Brand Variations
              </div>
              <h2 className="text-3xl md:text-5xl font-bold text-secunova-dark mb-4">
                SecuNova Inc. Core Logo Suite
              </h2>
              <p className="text-gray-600 text-lg max-w-3xl mx-auto">
                Engineered for crisp rendering across all screen resolutions and media. Download ultra-high-definition (3X HD PNG) image files for any layout variant.
              </p>
            </div>

            {/* Light Background Variants */}
            <div className="mb-12">
              <h3 className="text-xl font-bold text-secunova-dark mb-6 flex items-center gap-2">
                <span className="w-3 h-3 rounded-full bg-secunova-blue"></span>
                Light Background Variants (White / Light Gray)
              </h3>
              <div className="secunova-grid secunova-grid--3col">
                {/* Horizontal Light */}
                <div className="secunova-card flex flex-col justify-between">
                  <div>
                    <div className="secunova-card__header">
                      <span className="secunova-card__badge">Horizontal Mark</span>
                    </div>
                    <div className="p-8 bg-white border border-gray-100 rounded-xl flex items-center justify-center min-h-[140px]">
                      <Logo variant="horizontal" size="lg" theme="light" showLink={false} />
                    </div>
                    <div className="secunova-card__body mt-4">
                      <h4 className="secunova-card__title text-base mb-1">Primary Horizontal Logo</h4>
                      <p className="secunova-card__description">
                        Icon and brand name side-by-side on the exact same horizontal axis using Flexbox alignment (`display: flex; align-items: center; gap: 12px;`).
                      </p>
                    </div>
                  </div>
                  <div className="mt-6 pt-4 border-t border-gray-100">
                    <button
                      onClick={() => handleDownloadLogo('horizontal', 'light', 'secunova-logo-horizontal-light-3x.png')}
                      disabled={downloadingFormat === 'secunova-logo-horizontal-light-3x.png'}
                      className="w-full btn btn-outline btn-sm flex items-center justify-center gap-2 text-secunova-blue border-secunova-blue/30 hover:bg-secunova-blue hover:text-white transition-all"
                    >
                      <Download className="h-4 w-4" />
                      <span>{downloadingFormat === 'secunova-logo-horizontal-light-3x.png' ? 'Generating HD PNG...' : 'Download HD PNG (3X)'}</span>
                    </button>
                  </div>
                </div>

                {/* Stacked Light */}
                <div className="secunova-card flex flex-col justify-between">
                  <div>
                    <div className="secunova-card__header">
                      <span className="secunova-card__badge">Stacked / Vertical</span>
                    </div>
                    <div className="p-8 bg-white border border-gray-100 rounded-xl flex items-center justify-center min-h-[140px]">
                      <Logo variant="vertical" size="lg" theme="light" showLink={false} />
                    </div>
                    <div className="secunova-card__body mt-4">
                      <h4 className="secunova-card__title text-base mb-1">Vertical Stacked Logo</h4>
                      <p className="secunova-card__description">
                        Icon centered directly above the brand name. Used for centered hero sections, brand splash cards, and vertical presentation materials.
                      </p>
                    </div>
                  </div>
                  <div className="mt-6 pt-4 border-t border-gray-100">
                    <button
                      onClick={() => handleDownloadLogo('vertical', 'light', 'secunova-logo-vertical-light-3x.png')}
                      disabled={downloadingFormat === 'secunova-logo-vertical-light-3x.png'}
                      className="w-full btn btn-outline btn-sm flex items-center justify-center gap-2 text-secunova-blue border-secunova-blue/30 hover:bg-secunova-blue hover:text-white transition-all"
                    >
                      <Download className="h-4 w-4" />
                      <span>{downloadingFormat === 'secunova-logo-vertical-light-3x.png' ? 'Generating HD PNG...' : 'Download HD PNG (3X)'}</span>
                    </button>
                  </div>
                </div>

                {/* Monogram Light */}
                <div className="secunova-card flex flex-col justify-between">
                  <div>
                    <div className="secunova-card__header">
                      <span className="secunova-card__badge">Square / Icon Mark</span>
                    </div>
                    <div className="p-8 bg-white border border-gray-100 rounded-xl flex items-center justify-center min-h-[140px]">
                      <Logo variant="monogram" size="lg" theme="light" showLink={false} />
                    </div>
                    <div className="secunova-card__body mt-4">
                      <h4 className="secunova-card__title text-base mb-1">Standalone Icon Mark</h4>
                      <p className="secunova-card__description">
                        Standalone symbol without text. Used for app icons, social avatars, browser favicons, and compact UI triggers.
                      </p>
                    </div>
                  </div>
                  <div className="mt-6 pt-4 border-t border-gray-100">
                    <button
                      onClick={() => handleDownloadLogo('monogram', 'light', 'secunova-icon-mark-light-3x.png')}
                      disabled={downloadingFormat === 'secunova-icon-mark-light-3x.png'}
                      className="w-full btn btn-outline btn-sm flex items-center justify-center gap-2 text-secunova-blue border-secunova-blue/30 hover:bg-secunova-blue hover:text-white transition-all"
                    >
                      <Download className="h-4 w-4" />
                      <span>{downloadingFormat === 'secunova-icon-mark-light-3x.png' ? 'Generating HD PNG...' : 'Download HD PNG (3X)'}</span>
                    </button>
                  </div>
                </div>
              </div>
            </div>

            {/* Dark Background Variants */}
            <div>
              <h3 className="text-xl font-bold text-secunova-dark mb-6 flex items-center gap-2">
                <span className="w-3 h-3 rounded-full bg-secunova-dark"></span>
                Dark Background Variants (Navy / Dark Themes)
              </h3>
              <div className="secunova-grid secunova-grid--3col">
                {/* Horizontal Dark */}
                <div className="secunova-card secunova-card--dark flex flex-col justify-between">
                  <div>
                    <div className="secunova-card__header">
                      <span className="secunova-card__badge">Horizontal Mark</span>
                    </div>
                    <div className="p-8 bg-[#101928] border border-slate-700/60 rounded-xl flex items-center justify-center min-h-[140px]">
                      <Logo variant="horizontal" size="lg" theme="dark" showLink={false} />
                    </div>
                    <div className="secunova-card__body mt-4">
                      <h4 className="secunova-card__title text-base mb-1 text-white">Primary Horizontal (Inverse)</h4>
                      <p className="secunova-card__description">
                        High-contrast white typography with bright blue accent dot. Optimized for dark headers, hero banners, and footers.
                      </p>
                    </div>
                  </div>
                  <div className="mt-6 pt-4 border-t border-slate-700/60">
                    <button
                      onClick={() => handleDownloadLogo('horizontal', 'dark', 'secunova-logo-horizontal-dark-3x.png')}
                      disabled={downloadingFormat === 'secunova-logo-horizontal-dark-3x.png'}
                      className="w-full btn btn-outline-light btn-sm flex items-center justify-center gap-2 transition-all"
                    >
                      <Download className="h-4 w-4" />
                      <span>{downloadingFormat === 'secunova-logo-horizontal-dark-3x.png' ? 'Generating HD PNG...' : 'Download HD PNG (3X)'}</span>
                    </button>
                  </div>
                </div>

                {/* Stacked Dark */}
                <div className="secunova-card secunova-card--dark flex flex-col justify-between">
                  <div>
                    <div className="secunova-card__header">
                      <span className="secunova-card__badge">Stacked / Vertical</span>
                    </div>
                    <div className="p-8 bg-[#101928] border border-slate-700/60 rounded-xl flex items-center justify-center min-h-[140px]">
                      <Logo variant="vertical" size="lg" theme="dark" showLink={false} />
                    </div>
                    <div className="secunova-card__body mt-4">
                      <h4 className="secunova-card__title text-base mb-1 text-white">Vertical Stacked (Inverse)</h4>
                      <p className="secunova-card__description">
                        Centered vertical layout over dark background. Provides high visibility for corporate decks and dark landing hero banners.
                      </p>
                    </div>
                  </div>
                  <div className="mt-6 pt-4 border-t border-slate-700/60">
                    <button
                      onClick={() => handleDownloadLogo('vertical', 'dark', 'secunova-logo-vertical-dark-3x.png')}
                      disabled={downloadingFormat === 'secunova-logo-vertical-dark-3x.png'}
                      className="w-full btn btn-outline-light btn-sm flex items-center justify-center gap-2 transition-all"
                    >
                      <Download className="h-4 w-4" />
                      <span>{downloadingFormat === 'secunova-logo-vertical-dark-3x.png' ? 'Generating HD PNG...' : 'Download HD PNG (3X)'}</span>
                    </button>
                  </div>
                </div>

                {/* Monogram Dark */}
                <div className="secunova-card secunova-card--dark flex flex-col justify-between">
                  <div>
                    <div className="secunova-card__header">
                      <span className="secunova-card__badge">Square / Icon Mark</span>
                    </div>
                    <div className="p-8 bg-[#101928] border border-slate-700/60 rounded-xl flex items-center justify-center min-h-[140px]">
                      <Logo variant="monogram" size="lg" theme="dark" showLink={false} />
                    </div>
                    <div className="secunova-card__body mt-4">
                      <h4 className="secunova-card__title text-base mb-1 text-white">Standalone Icon Mark (Inverse)</h4>
                      <p className="secunova-card__description">
                        White symbol variant for dark containers, mobile app launcher icons, and dark theme favicons.
                      </p>
                    </div>
                  </div>
                  <div className="mt-6 pt-4 border-t border-slate-700/60">
                    <button
                      onClick={() => handleDownloadLogo('monogram', 'dark', 'secunova-icon-mark-dark-3x.png')}
                      disabled={downloadingFormat === 'secunova-icon-mark-dark-3x.png'}
                      className="w-full btn btn-outline-light btn-sm flex items-center justify-center gap-2 transition-all"
                    >
                      <Download className="h-4 w-4" />
                      <span>{downloadingFormat === 'secunova-icon-mark-dark-3x.png' ? 'Generating HD PNG...' : 'Download HD PNG (3X)'}</span>
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 2. Color Palette Showcase */}
      <section className="secunova-section secunova-section--gray">
        <div className="container mx-auto px-4 sm:px-6">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <div className="inline-flex items-center bg-secunova-blue/10 text-secunova-blue px-4 py-2 rounded-full text-xs font-semibold uppercase tracking-wider mb-4">
                <Palette className="h-4 w-4 mr-2" />
                Color System
              </div>
              <h2 className="text-3xl md:text-5xl font-bold text-secunova-dark mb-4">
                Brand Color Palette Swatches
              </h2>
              <p className="text-gray-600 text-lg max-w-3xl mx-auto">
                Strict color tokens engineered for optimal contrast ratios, accessibility compliance, and executive credibility.
              </p>
            </div>

            <div className="secunova-grid secunova-grid--3col">
              {colorPalette.map((color, index) => (
                <div key={index} className="secunova-card">
                  <div>
                    {/* Swatch Box */}
                    <div className={`h-32 rounded-xl mb-4 p-4 flex flex-col justify-end shadow-inner border border-black/10 ${color.bgClass}`}>
                      <span className={`text-xs font-bold font-mono px-2.5 py-1 rounded bg-black/20 backdrop-blur-sm self-start ${color.textColor}`}>
                        {color.hex}
                      </span>
                    </div>

                    <div className="secunova-card__body">
                      <div className="flex items-center justify-between mb-2">
                        <h4 className="secunova-card__title text-lg">{color.name}</h4>
                        <button
                          onClick={() => handleCopyHex(color.hex)}
                          className="p-1.5 rounded-lg bg-gray-100 hover:bg-gray-200 text-gray-700 transition-colors text-xs flex items-center gap-1"
                          title="Copy HEX code"
                        >
                          {copiedHex === color.hex ? (
                            <>
                              <Check className="h-3.5 w-3.5 text-green-600" />
                              <span className="text-green-600 font-semibold">Copied</span>
                            </>
                          ) : (
                            <>
                              <Copy className="h-3.5 w-3.5" />
                              <span>Copy</span>
                            </>
                          )}
                        </button>
                      </div>

                      <div className="text-xs font-mono text-gray-500 mb-3">RGB: {color.rgb}</div>
                      <p className="secunova-card__description text-xs">{color.usage}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* 3. Typography Scale Showcase */}
      <section className="secunova-section secunova-section--light">
        <div className="container mx-auto px-4 sm:px-6">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <div className="inline-flex items-center bg-secunova-blue/10 text-secunova-blue px-4 py-2 rounded-full text-xs font-semibold uppercase tracking-wider mb-4">
                <Type className="h-4 w-4 mr-2" />
                Typography System
              </div>
              <h2 className="text-3xl md:text-5xl font-bold text-secunova-dark mb-4">
                Standardized Typography Scale
              </h2>
              <p className="text-gray-600 text-lg max-w-3xl mx-auto">
                Typography hierarchy built on Montserrat font family for modern clarity and corporate presence.
              </p>
            </div>

            <div className="space-y-6">
              {typographyScale.map((item, index) => (
                <div key={index} className="secunova-card">
                  <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-center">
                    <div className="lg:col-span-4 border-b lg:border-b-0 lg:border-r border-gray-100 pb-4 lg:pb-0 lg:pr-6">
                      <div className="flex items-center gap-2 mb-1">
                        <span className="text-xs font-bold uppercase tracking-wider text-secunova-blue bg-blue-50 px-2 py-0.5 rounded">
                          {item.level}
                        </span>
                      </div>
                      <div className="text-sm font-semibold text-secunova-dark mt-1">Size: {item.size}</div>
                      <div className="text-xs text-gray-500 mt-0.5">Weight: {item.weight} | Height: {item.lineHeight}</div>
                    </div>
                    <div className="lg:col-span-8">
                      <p className={`text-secunova-dark font-sans leading-tight ${
                        index === 0 ? 'text-2xl sm:text-4xl font-extrabold' :
                        index === 1 ? 'text-xl sm:text-3xl font-extrabold' :
                        index === 2 ? 'text-lg sm:text-2xl font-bold' :
                        index === 3 ? 'text-base sm:text-xl font-bold' :
                        index === 4 ? 'text-base sm:text-lg font-medium text-gray-700' :
                        index === 5 ? 'text-sm sm:text-base text-gray-600' :
                        'text-xs font-semibold tracking-wide text-secunova-blue'
                      }`}>
                        {item.sample}
                      </p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* 4. Component Architecture Rules */}
      <section className="secunova-section secunova-section--dark">
        <div className="container mx-auto px-4 sm:px-6">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <div className="inline-flex items-center bg-white/10 text-secunova-light px-4 py-2 rounded-full text-xs font-semibold uppercase tracking-wider mb-4">
                <Layers className="h-4 w-4 mr-2 text-white" />
                BEM Component Standards
              </div>
              <h2 className="text-3xl md:text-5xl font-bold text-white mb-4">
                Production-Ready BEM CSS Rules
              </h2>
              <p className="text-gray-300 text-lg max-w-3xl mx-auto">
                Strict layout contracts enforcing vertical rhythm, icon alignment, and bottom-locked CTAs across all pages.
              </p>
            </div>

            <div className="secunova-grid secunova-grid--3col">
              <div className="secunova-card secunova-card--glass">
                <div>
                  <div className="secunova-card__header">
                    <span className="secunova-card__badge">Rule 01</span>
                    <h3 className="secunova-card__title">Unified Section Rhythm</h3>
                  </div>
                  <div className="secunova-card__body">
                    <p className="secunova-card__description">
                      Class `.secunova-section` applies fixed vertical padding (5rem mobile, 6rem desktop) to eliminate random section spacing.
                    </p>
                  </div>
                </div>
              </div>

              <div className="secunova-card secunova-card--glass">
                <div>
                  <div className="secunova-card__header">
                    <span className="secunova-card__badge">Rule 02</span>
                    <h3 className="secunova-card__title">Grid Equal Height</h3>
                  </div>
                  <div className="secunova-card__body">
                    <p className="secunova-card__description">
                      Grid `.secunova-grid` forces sibling cards per row to stretch to match the exact height of the tallest card automatically.
                    </p>
                  </div>
                </div>
              </div>

              <div className="secunova-card secunova-card--glass">
                <div>
                  <div className="secunova-card__header">
                    <span className="secunova-card__badge">Rule 03</span>
                    <h3 className="secunova-card__title">Icon-Title Center Alignment</h3>
                  </div>
                  <div className="secunova-card__body">
                    <p className="secunova-card__description">
                      Header `.secunova-card__header` uses Flexbox `align-items: center; gap: 12px` so icons and titles lock on the center vertical axis.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <CtaSection
        title="Need Custom Design System Architecture?"
        subtitle="Talk with our principal engineers to build a scalable, production-ready design system for your brand."
        ctaText="Book a Technical Consultation"
        ctaLink="/contact"
      />
    </div>
  );
};

export default BrandPage;
