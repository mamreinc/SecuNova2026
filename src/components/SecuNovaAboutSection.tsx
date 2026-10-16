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
import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';

interface TeamMember {
  id: string;
  name: string;
  role: string;
  focus: string;
}

const TEAM_MEMBERS: TeamMember[] = [
  {
    id: 'max-amrein',
    name: 'Max Amrein',
    role: 'Founder & Practice Lead',
    focus: 'Fiduciary Governance & Strategic Authority',
  },
  {
    id: 'tariq-mansour',
    name: 'Tariq Mansour',
    role: 'Associate Partner',
    focus: 'Delivery Governance & SOW Defense',
  },
  {
    id: 'rajesh-singh',
    name: 'Rajesh Singh',
    role: 'Partner, Infrastructure',
    focus: 'Cloud Architecture & Vendor Oversight',
  },
  {
    id: 'marie-dubois',
    name: 'Marie Dubois',
    role: 'Director, Technical Assurance',
    focus: 'Enterprise Quality & Architecture Audits',
  },
  {
    id: 'kwame-osei',
    name: 'Kwame Osei',
    role: 'Principal, Risk & Security',
    focus: 'Compliance, Zero-Trust & Data Governance',
  },
  {
    id: 'yuki-tanaka',
    name: 'Yuki Tanaka',
    role: 'Principal, Delivery Operations',
    focus: 'Milestone Execution & Velocity SOPs',
  },
  {
    id: 'hassan-al-rashid',
    name: 'Hassan Al-Rashid',
    role: 'Director, Commercial Strategy',
    focus: 'Agency Mediation & Vendor Contract Economics',
  },
  {
    id: 'mia',
    name: 'Mia',
    role: 'Practice Administrator',
    focus: 'Executive Operations & Direct Client Care',
  },
];

const SecuNovaAboutSection: React.FC = () => {
  return (
    <section id="about" className="bg-black text-[#f5f5f7] py-28 sm:py-40 relative overflow-hidden scroll-mt-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Apple Section Narrative Header */}
        <div className="max-w-4xl mb-24 sm:mb-32">
          <span className="text-xs font-mono font-medium text-[#2997ff] uppercase tracking-widest block mb-4">
            About SecuNova // Leadership &amp; Governance
          </span>
          <motion.h2
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-50px' }}
            transition={{ duration: 0.65, ease: [0.16, 1, 0.3, 1] }}
            className="font-display font-semibold text-4xl sm:text-6xl md:text-7xl lg:text-8xl tracking-[-0.04em] text-white leading-[0.98] mb-8"
          >
            Independent counsel. <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#2997ff] via-[#64d2ff] to-white">
              Senior leadership. Zero conflicts.
            </span>
          </motion.h2>
          <p className="text-lg sm:text-2xl text-[#86868b] font-medium leading-relaxed max-w-3xl">
            SecuNova was founded to eliminate the agency-client conflict of interest. We do not sell web development packages or billable design hours. We operate as client-side fiduciary advisors, directing technology initiatives, evaluating vendors, and enforcing milestone accountability for Canadian and North American enterprises.
          </p>
        </div>

        {/* Section Sub-Title for the Leadership Roster */}
        <div className="mb-14">
          <span className="text-xs font-mono font-medium text-slate-400 uppercase tracking-widest block mb-2">
            Executive Leadership &amp; Advisory Council
          </span>
          <motion.h3
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-40px' }}
            transition={{ duration: 0.55, ease: [0.16, 1, 0.3, 1] }}
            className="font-display font-semibold text-3xl sm:text-5xl text-white tracking-tight"
          >
            The Partners Behind Every Mandate.
          </motion.h3>
        </div>

        {/* Open-Air Apple Leadership Roster (Zero Boxes, Zero Monogram Borders, Pure Typography) */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-x-8 lg:gap-x-10 gap-y-10 sm:gap-y-12">
          {TEAM_MEMBERS.map((member) => (
            <div key={member.id} className="space-y-2 group">
              <div className="flex items-center text-xs font-mono pb-1">
                <span className="text-[#2997ff] font-semibold">{member.id === 'max-amrein' ? 'LEAD' : 'PARTNER'}</span>
              </div>

              <h4 className="font-display font-semibold text-2xl text-white tracking-tight group-hover:text-[#2997ff] transition-colors">
                {member.name}
              </h4>
              
              <div className="text-xs sm:text-sm font-medium text-slate-300">
                {member.role}
              </div>

              <p className="text-xs text-slate-400 font-sans leading-relaxed pt-1">
                {member.focus}
              </p>
            </div>
          ))}
        </div>

        {/* Open-Air Direct Engagement Invitation */}
        <div className="mt-20 sm:mt-28 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-6 sm:gap-8">
          <div>
            <h4 className="font-display font-semibold text-2xl sm:text-3xl text-white tracking-tight mb-2">
              Confidential Partner Briefing
            </h4>
            <p className="text-sm sm:text-base text-slate-400 font-sans max-w-xl leading-relaxed">
              Connect directly with our practice leadership via executive email or telephone. Zero automated replies or junior gatekeepers.
            </p>
          </div>
          <a
            href="#consultation"
            className="w-full sm:w-auto px-6 sm:px-9 py-3.5 sm:py-4 rounded-full bg-[#0071e3] hover:bg-[#0077ed] text-white font-semibold text-sm sm:text-base tracking-tight transition-all duration-200 apple-press shadow-[0_4px_24px_rgba(0,113,227,0.45)] whitespace-nowrap flex items-center justify-center gap-2 text-center"
          >
            <span>Initiate Direct Consultation</span>
            <ArrowRight className="h-4 w-4" />
          </a>
        </div>

      </div>
    </section>
  );
};

export default SecuNovaAboutSection;
