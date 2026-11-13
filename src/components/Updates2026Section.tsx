import React, { useState, useMemo } from 'react';
import { 
  Calendar, 
  ExternalLink, 
  Sparkles, 
  CheckCircle2, 
  Clock, 
  Compass, 
  Rocket, 
  Radio,
  Search,
  Tag
} from 'lucide-react';
import { NASA_UPDATES_2026, MissionUpdate } from '../data/updates2026Data';
import { spaceAudio } from '../utils/audio';

export const Updates2026Section: React.FC = () => {
  const [selectedStatus, setSelectedStatus] = useState<'All' | 'Active' | 'Planned' | 'Completed'>('All');
  const [searchQuery, setSearchQuery] = useState<string>('');

  const filteredUpdates = useMemo(() => {
    return NASA_UPDATES_2026.filter((item) => {
      const matchesStatus = selectedStatus === 'All' || item.status === selectedStatus;
      const matchesSearch = 
        item.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
        item.summary.toLowerCase().includes(searchQuery.toLowerCase()) ||
        item.categoryTag.toLowerCase().includes(searchQuery.toLowerCase());
      return matchesStatus && matchesSearch;
    });
  }, [selectedStatus, searchQuery]);

  return (
    <section id="updates" className="relative py-24 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
      {/* Section Header */}
      <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6 border-b border-white/10 pb-8">
        <div>
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-cyan-950/70 border border-cyan-500/30 text-cyan-300 text-xs font-mono mb-3">
            <Calendar className="w-3.5 h-3.5" />
            <span>SECTION 08 / CURRENT EXPLORATION TELEMETRY</span>
          </div>
          <h2 className="font-['Orbitron'] font-black text-3xl sm:text-4xl lg:text-5xl text-white tracking-tight uppercase">
            NASA SPACE UPDATES <span className="text-cyan-400">2026</span>
          </h2>
          <p className="text-slate-400 max-w-2xl mt-2 text-sm sm:text-base">
            Verified updates on active robotic explorations, commercial lunar landings, and the Artemis human return program. Clearly categorized by mission readiness state with direct links to official NASA releases.
          </p>
        </div>

        {/* Status Count Pill */}
        <div className="flex items-center gap-3 bg-slate-900/80 px-4 py-2 rounded-xl border border-white/10">
          <span className="w-2 h-2 rounded-full bg-cyan-400 animate-pulse"></span>
          <span className="text-xs font-mono text-slate-300">
            LATEST NASA ARCHIVE SYNC: NOVEMBER 2026
          </span>
        </div>
      </div>

      {/* Filter and Search Bar */}
      <div className="flex flex-col sm:flex-row gap-4 mb-8 items-stretch sm:items-center justify-between">
        {/* Status Category Tabs */}
        <div className="flex items-center gap-2 bg-slate-900/90 p-1.5 rounded-xl border border-white/10 overflow-x-auto scrollbar-none">
          {(['All', 'Active', 'Planned', 'Completed'] as const).map((status) => {
            const isSelected = selectedStatus === status;
            return (
              <button
                key={status}
                onClick={() => {
                  spaceAudio.playClick();
                  setSelectedStatus(status);
                }}
                className={`px-4 py-2 rounded-lg text-xs font-['Orbitron'] font-bold tracking-wider transition-all whitespace-nowrap ${
                  isSelected
                    ? status === 'Active'
                      ? 'bg-emerald-500 text-slate-950 shadow-md shadow-emerald-500/30'
                      : status === 'Planned'
                      ? 'bg-cyan-500 text-slate-950 shadow-md shadow-cyan-500/30'
                      : status === 'Completed'
                      ? 'bg-purple-500 text-white shadow-md shadow-purple-500/30'
                      : 'bg-white text-slate-950 shadow-md'
                    : 'text-slate-400 hover:text-white hover:bg-slate-800'
                }`}
              >
                {status === 'All' ? 'ALL UPDATES' : `${status.toUpperCase()} MISSIONS`}
              </button>
            );
          })}
        </div>

        {/* Quick Search */}
        <div className="relative w-full sm:w-72">
          <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-400" />
          <input
            type="text"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            placeholder="Search 2026 updates..."
            className="w-full pl-9 pr-3 py-2 rounded-xl bg-slate-900/80 border border-white/10 text-white placeholder-slate-500 text-xs focus:outline-none focus:border-cyan-400 font-mono"
          />
        </div>
      </div>

      {/* Updates Cards List */}
      <div className="space-y-4">
        {filteredUpdates.map((update) => {
          const isActive = update.status === 'Active';
          const isPlanned = update.status === 'Planned';
          const isCompleted = update.status === 'Completed';

          return (
            <div
              key={update.id}
              className="p-6 rounded-2xl bg-slate-900/70 border border-white/10 hover:border-cyan-500/40 backdrop-blur-xl transition-all duration-300 hover:shadow-xl hover:shadow-cyan-950/30 space-y-4"
            >
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2">
                <div className="flex items-center gap-2 flex-wrap">
                  {/* Status Badge */}
                  <span className={`px-2.5 py-0.5 rounded text-[10px] font-['Orbitron'] font-bold uppercase tracking-wider ${
                    isActive ? 'bg-emerald-500/20 text-emerald-400 border border-emerald-500/30' :
                    isPlanned ? 'bg-cyan-500/20 text-cyan-300 border border-cyan-500/30' :
                    'bg-purple-500/20 text-purple-300 border border-purple-500/30'
                  }`}>
                    {update.status}
                  </span>

                  {/* Destination Tag */}
                  <span className="px-2 py-0.5 rounded text-[10px] font-mono bg-slate-800 text-slate-300 border border-white/5">
                    {update.destination}
                  </span>

                  {/* Category Tag */}
                  <span className="text-[11px] font-mono text-cyan-400">
                    [{update.categoryTag}]
                  </span>
                </div>

                <div className="text-xs font-mono text-slate-400 flex items-center gap-2">
                  <Calendar className="w-3.5 h-3.5 text-slate-500" />
                  <span>{update.publicationDate}</span>
                </div>
              </div>

              {/* Title & Summary */}
              <div>
                <h3 className="font-['Orbitron'] text-lg sm:text-xl font-bold text-white mb-2">
                  {update.title}
                </h3>
                <p className="text-xs sm:text-sm text-cyan-200/90 font-medium leading-relaxed mb-3">
                  {update.summary}
                </p>
                <p className="text-xs sm:text-sm text-slate-300 leading-relaxed font-sans bg-slate-950/40 p-4 rounded-xl border border-white/5">
                  {update.detailedUpdate}
                </p>
              </div>

              {/* Agency Source & Official Link */}
              <div className="pt-2 flex flex-col sm:flex-row sm:items-center justify-between gap-3 border-t border-white/5 text-xs font-mono">
                <span className="text-slate-400">
                  Source: <strong className="text-slate-200">{update.sourceAgency}</strong>
                </span>

                <a
                  href={update.officialSourceUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 text-cyan-400 hover:text-cyan-300 group"
                >
                  <span>Official NASA Mission Portal</span>
                  <ExternalLink className="w-3.5 h-3.5 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                </a>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
};
