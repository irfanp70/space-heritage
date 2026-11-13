import React, { useState } from 'react';
import { 
  BookOpen, 
  ExternalLink, 
  ShieldCheck, 
  CheckCircle2, 
  FileText, 
  Scale, 
  Sparkles,
  Info
} from 'lucide-react';
import { OFFICIAL_DATA_SOURCES, SPACE_APPS_COMPLIANCE, ReferenceSource } from '../data/referencesData';
import { spaceAudio } from '../utils/audio';

export const ReferencesCredits: React.FC = () => {
  const [selectedCategory, setSelectedCategory] = useState<string>('All');

  const categories = ['All', 'NASA Official Catalog', 'Photographic Archive', 'Lunar Science', 'Mars Science', 'Space Law & Heritage'];

  const filteredSources = OFFICIAL_DATA_SOURCES.filter(
    (src) => selectedCategory === 'All' || src.category === selectedCategory
  );

  return (
    <section id="references" className="relative py-24 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
      {/* Section Header */}
      <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6 border-b border-white/10 pb-8">
        <div>
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-cyan-950/70 border border-cyan-500/30 text-cyan-300 text-xs font-mono mb-3">
            <BookOpen className="w-3.5 h-3.5" />
            <span>SECTION 10 / DATA CITATIONS & COMPLIANCE</span>
          </div>
          <h2 className="font-['Orbitron'] font-black text-3xl sm:text-4xl lg:text-5xl text-white tracking-tight uppercase">
            REFERENCES & <span className="text-cyan-400">CREDITS</span>
          </h2>
          <p className="text-slate-400 max-w-2xl mt-2 text-sm sm:text-base">
            Verified primary sources, official NASA documentation, planetary databases, and mandatory Space Apps 2026 AI disclosures.
          </p>
        </div>

        {/* Verification Shield Badge */}
        <div className="flex items-center gap-3 bg-emerald-950/40 border border-emerald-500/30 px-4 py-2.5 rounded-2xl">
          <ShieldCheck className="w-5 h-5 text-emerald-400" />
          <div className="text-right">
            <div className="text-[10px] font-mono text-emerald-400 font-bold">100% NASA VERIFIED DATA</div>
            <div className="text-xs text-slate-300 font-mono">ZERO SYNTHETIC PHOTOS</div>
          </div>
        </div>
      </div>

      {/* Space Apps Challenge 2026 Official AI Disclosure Banner */}
      <div className="mb-12 p-6 sm:p-8 rounded-3xl bg-gradient-to-br from-slate-900 via-slate-950 to-slate-900 border-2 border-cyan-500/30 shadow-2xl space-y-4">
        <div className="flex items-center gap-2.5 text-cyan-400 font-['Orbitron'] font-bold text-sm tracking-wider uppercase">
          <Sparkles className="w-4 h-4 text-cyan-400" />
          <span>OFFICIAL NASA SPACE APPS CHALLENGE 2026 MANDATORY DISCLOSURE</span>
        </div>

        <div className="space-y-3 text-xs sm:text-sm text-slate-300 leading-relaxed font-sans">
          <p>
            <strong className="text-white">AI-Assisted Workflow Disclosure: </strong> 
            {SPACE_APPS_COMPLIANCE.aiAssistedDisclosure}
          </p>
          <p>
            <strong className="text-emerald-400">Authenticity Guarantee: </strong>
            {SPACE_APPS_COMPLIANCE.authenticityGuarantee}
          </p>
        </div>

        <div className="pt-3 border-t border-white/10 flex flex-wrap items-center justify-between gap-2 text-[11px] font-mono text-slate-400">
          <span>PROJECT TITLE: SPACE HERITAGE — THE FORGOTTEN MACHINES OF THE MOON & MARS</span>
          <span className="text-cyan-300">NASA SPACE APPS 2026 SUBMISSION</span>
        </div>
      </div>

      {/* Category Pills */}
      <div className="flex items-center gap-2 mb-8 overflow-x-auto pb-2 scrollbar-none">
        {categories.map((cat) => (
          <button
            key={cat}
            onClick={() => {
              spaceAudio.playClick();
              setSelectedCategory(cat);
            }}
            className={`px-3.5 py-1.5 rounded-xl text-xs font-mono whitespace-nowrap transition-all ${
              selectedCategory === cat
                ? 'bg-cyan-950 text-cyan-300 border border-cyan-500/50 shadow-sm'
                : 'bg-slate-900/60 text-slate-400 border border-white/5 hover:text-slate-200 hover:bg-slate-800'
            }`}
          >
            {cat}
          </button>
        ))}
      </div>

      {/* Primary Sources Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {filteredSources.map((source, idx) => (
          <div
            key={idx}
            className="p-6 rounded-2xl bg-slate-900/70 border border-white/10 hover:border-cyan-500/40 backdrop-blur-xl transition-all duration-300 hover:shadow-xl hover:shadow-cyan-950/30 flex flex-col justify-between space-y-4"
          >
            <div className="space-y-2">
              <div className="flex items-center justify-between text-xs font-mono">
                <span className="text-cyan-400 font-semibold">{source.category}</span>
                <span className="text-slate-500">{source.organization}</span>
              </div>

              <h4 className="font-['Orbitron'] text-base font-bold text-white">
                {source.title}
              </h4>

              <p className="text-xs text-slate-300 leading-relaxed font-sans">
                {source.description}
              </p>
            </div>

            <div className="pt-3 border-t border-white/5 space-y-2">
              <div className="text-[11px] font-mono text-slate-400">
                <span className="text-slate-500 block text-[10px]">DATASET IDENTIFIER:</span>
                <span className="text-slate-300">{source.datasetOrIdentifier}</span>
              </div>

              <a
                href={source.url}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 text-xs font-mono text-cyan-400 hover:text-cyan-300 pt-1 group"
              >
                <span>Access Official NASA Archive</span>
                <ExternalLink className="w-3.5 h-3.5 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
              </a>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};
