import React, { useState, useEffect } from 'react';
import { Search, X, Compass, Rocket, Calendar, Radio, ArrowRight } from 'lucide-react';
import { MUSEUM_ITEMS } from '../data/museumData';
import { APOLLO_MISSIONS } from '../data/apolloData';
import { NASA_UPDATES_2026 } from '../data/updates2026Data';
import { spaceAudio } from '../utils/audio';

interface SearchModalProps {
  isOpen: boolean;
  onClose: () => void;
  onSelectItem: (type: 'museum' | 'apollo' | 'update' | 'story', id: string) => void;
}

export const SearchModal: React.FC<SearchModalProps> = ({ isOpen, onClose, onSelectItem }) => {
  const [query, setQuery] = useState('');

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if ((e.metaKey || e.ctrlKey) && e.key === 'k') {
        e.preventDefault();
        if (isOpen) onClose();
        else {
          spaceAudio.playClick();
          // parent will toggle
        }
      }
      if (e.key === 'Escape' && isOpen) {
        onClose();
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  // Filter items
  const matchedMuseum = MUSEUM_ITEMS.filter(m => 
    m.name.toLowerCase().includes(query.toLowerCase()) ||
    m.mission.toLowerCase().includes(query.toLowerCase()) ||
    m.coordinates.region.toLowerCase().includes(query.toLowerCase())
  );

  const matchedApollo = APOLLO_MISSIONS.filter(a =>
    a.missionNumber.toLowerCase().includes(query.toLowerCase()) ||
    a.landingSite.toLowerCase().includes(query.toLowerCase()) ||
    a.commander.toLowerCase().includes(query.toLowerCase())
  );

  const matchedUpdates = NASA_UPDATES_2026.filter(u =>
    u.title.toLowerCase().includes(query.toLowerCase()) ||
    u.categoryTag.toLowerCase().includes(query.toLowerCase())
  );

  const handleSelect = (type: 'museum' | 'apollo' | 'update' | 'story', id: string) => {
    spaceAudio.playTelemetryPing();
    onSelectItem(type, id);
    onClose();
  };

  return (
    <div className="fixed inset-0 z-50 flex items-start justify-center pt-20 px-4 bg-slate-950/80 backdrop-blur-xl animate-in fade-in duration-200">
      <div 
        className="w-full max-w-2xl rounded-3xl bg-slate-900 border border-cyan-500/30 shadow-2xl shadow-cyan-950/60 overflow-hidden"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Search Input Bar */}
        <div className="relative flex items-center px-4 py-3.5 border-b border-white/10">
          <Search className="w-5 h-5 text-cyan-400 mr-3 shrink-0" />
          <input
            type="text"
            autoFocus
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            placeholder="Search artifacts, Apollo landing sites, rovers, or 2026 updates..."
            className="w-full bg-transparent text-white placeholder-slate-500 text-sm focus:outline-none font-mono"
          />
          <button
            onClick={onClose}
            className="p-1 rounded-lg text-slate-400 hover:text-white"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Results List */}
        <div className="max-h-[60vh] overflow-y-auto p-4 space-y-4">
          
          {/* Museum Artifacts */}
          {matchedMuseum.length > 0 && (
            <div className="space-y-1.5">
              <div className="text-[10px] font-mono text-cyan-400 uppercase tracking-wider px-2">
                HISTORICAL SPACE ARTIFACTS ({matchedMuseum.length})
              </div>
              {matchedMuseum.slice(0, 5).map((item) => (
                <div
                  key={item.id}
                  onClick={() => handleSelect('museum', item.id)}
                  className="p-3 rounded-xl hover:bg-slate-800/80 cursor-pointer flex items-center justify-between group transition-colors border border-transparent hover:border-white/5"
                >
                  <div className="flex items-center gap-3">
                    <Compass className="w-4 h-4 text-cyan-400" />
                    <div>
                      <div className="font-['Orbitron'] text-xs font-bold text-white group-hover:text-cyan-300">
                        {item.name}
                      </div>
                      <div className="text-[11px] font-mono text-slate-400">
                        {item.destination} • {item.coordinates.region} ({item.landingYear})
                      </div>
                    </div>
                  </div>
                  <ArrowRight className="w-4 h-4 text-slate-600 group-hover:text-cyan-400 transition-colors" />
                </div>
              ))}
            </div>
          )}

          {/* Apollo Missions */}
          {matchedApollo.length > 0 && (
            <div className="space-y-1.5">
              <div className="text-[10px] font-mono text-cyan-400 uppercase tracking-wider px-2">
                APOLLO ARCHIVE MISSIONS ({matchedApollo.length})
              </div>
              {matchedApollo.slice(0, 4).map((apollo) => (
                <div
                  key={apollo.missionNumber}
                  onClick={() => handleSelect('apollo', apollo.missionNumber)}
                  className="p-3 rounded-xl hover:bg-slate-800/80 cursor-pointer flex items-center justify-between group transition-colors border border-transparent hover:border-white/5"
                >
                  <div className="flex items-center gap-3">
                    <Rocket className="w-4 h-4 text-cyan-400" />
                    <div>
                      <div className="font-['Orbitron'] text-xs font-bold text-white group-hover:text-cyan-300">
                        {apollo.missionNumber} ({apollo.lunarModule})
                      </div>
                      <div className="text-[11px] font-mono text-slate-400">
                        {apollo.landingSite} • {apollo.commander}
                      </div>
                    </div>
                  </div>
                  <ArrowRight className="w-4 h-4 text-slate-600 group-hover:text-cyan-400 transition-colors" />
                </div>
              ))}
            </div>
          )}

          {/* 2026 Updates */}
          {matchedUpdates.length > 0 && (
            <div className="space-y-1.5">
              <div className="text-[10px] font-mono text-cyan-400 uppercase tracking-wider px-2">
                NASA SPACE UPDATES 2026 ({matchedUpdates.length})
              </div>
              {matchedUpdates.slice(0, 3).map((up) => (
                <div
                  key={up.id}
                  onClick={() => handleSelect('update', up.id)}
                  className="p-3 rounded-xl hover:bg-slate-800/80 cursor-pointer flex items-center justify-between group transition-colors border border-transparent hover:border-white/5"
                >
                  <div className="flex items-center gap-3">
                    <Calendar className="w-4 h-4 text-emerald-400" />
                    <div>
                      <div className="font-['Orbitron'] text-xs font-bold text-white group-hover:text-cyan-300">
                        {up.title}
                      </div>
                      <div className="text-[11px] font-mono text-slate-400">
                        {up.status} • {up.publicationDate}
                      </div>
                    </div>
                  </div>
                  <ArrowRight className="w-4 h-4 text-slate-600 group-hover:text-cyan-400 transition-colors" />
                </div>
              ))}
            </div>
          )}

          {matchedMuseum.length === 0 && matchedApollo.length === 0 && matchedUpdates.length === 0 && (
            <div className="text-center py-8 text-xs font-mono text-slate-500">
              No matching space records found for "{query}".
            </div>
          )}

        </div>

        {/* Modal Footer Key Hints */}
        <div className="px-4 py-2 bg-slate-950/80 border-t border-white/5 flex items-center justify-between text-[10px] font-mono text-slate-500">
          <span>NAVIGATION SHORTCUTS</span>
          <div className="flex items-center gap-3">
            <span>[ESC] CLOSE</span>
            <span>[ENTER] SELECT</span>
          </div>
        </div>
      </div>
    </div>
  );
};
