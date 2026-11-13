import React, { useState, useMemo } from 'react';
import { 
  Search, 
  MapPin, 
  Calendar, 
  ExternalLink, 
  Sparkles, 
  CheckCircle2, 
  Info, 
  Volume2, 
  Bookmark, 
  X, 
  Compass,
  ArrowUpRight,
  ShieldCheck,
  Radio,
  FileText
} from 'lucide-react';
import { MUSEUM_ITEMS, SpaceEquipment } from '../data/museumData';
import { spaceAudio, speakNarration, stopNarration } from '../utils/audio';
import { SpaceImage } from './SpaceImage';

interface MuseumSectionProps {
  selectedDestinationFilter?: 'Moon' | 'Mars' | 'All';
  onOpenMachineVoice?: (machineId: string) => void;
}

export const MuseumSection: React.FC<MuseumSectionProps> = ({ 
  selectedDestinationFilter = 'All',
  onOpenMachineVoice 
}) => {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedDestination, setSelectedDestination] = useState<'All' | 'Moon' | 'Mars'>(selectedDestinationFilter);
  const [selectedCategory, setSelectedCategory] = useState<string>('All');
  const [activeModalItem, setActiveModalItem] = useState<SpaceEquipment | null>(null);
  const [bookmarkedIds, setBookmarkedIds] = useState<string[]>(() => {
    try {
      const saved = localStorage.getItem('space_heritage_bookmarks');
      return saved ? JSON.parse(saved) : ['apollo-11-lm', 'opportunity-mer-b'];
    } catch {
      return ['apollo-11-lm', 'opportunity-mer-b'];
    }
  });
  const [isPlayingAudio, setIsPlayingAudio] = useState(false);

  // Sync external filter change if triggered by Hero buttons
  React.useEffect(() => {
    if (selectedDestinationFilter !== 'All') {
      setSelectedDestination(selectedDestinationFilter);
    }
  }, [selectedDestinationFilter]);

  const toggleBookmark = (id: string, e: React.MouseEvent) => {
    e.stopPropagation();
    spaceAudio.playClick();
    setBookmarkedIds(prev => {
      const updated = prev.includes(id) ? prev.filter(x => x !== id) : [...prev, id];
      try {
        localStorage.setItem('space_heritage_bookmarks', JSON.stringify(updated));
      } catch {}
      return updated;
    });
  };

  const categories = ['All', 'Rover', 'Lander', 'Descent Stage', 'Scientific Instrument'];

  const filteredItems = useMemo(() => {
    return MUSEUM_ITEMS.filter(item => {
      const matchesSearch = 
        item.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
        item.mission.toLowerCase().includes(searchQuery.toLowerCase()) ||
        item.coordinates.region.toLowerCase().includes(searchQuery.toLowerCase()) ||
        item.purpose.toLowerCase().includes(searchQuery.toLowerCase());

      const matchesDest = selectedDestination === 'All' || item.destination === selectedDestination;
      const matchesCategory = selectedCategory === 'All' || item.category === selectedCategory;

      return matchesSearch && matchesDest && matchesCategory;
    });
  }, [searchQuery, selectedDestination, selectedCategory]);

  const handleOpenModal = (item: SpaceEquipment) => {
    spaceAudio.playTelemetryPing();
    setActiveModalItem(item);
  };

  const handleCloseModal = () => {
    stopNarration();
    setIsPlayingAudio(false);
    setActiveModalItem(null);
  };

  const handlePlayVoice = (text: string) => {
    if (isPlayingAudio) {
      stopNarration();
      setIsPlayingAudio(false);
    } else {
      setIsPlayingAudio(true);
      speakNarration(text, 'en', () => {
        setIsPlayingAudio(false);
      });
    }
  };

  return (
    <section id="museum" className="relative py-24 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
      {/* Section Header */}
      <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6 border-b border-white/10 pb-8">
        <div>
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-cyan-950/70 border border-cyan-500/30 text-cyan-300 text-xs font-mono mb-3">
            <Compass className="w-3.5 h-3.5" />
            <span>SECTION 01 / HISTORICAL CATALOG</span>
          </div>
          <h2 className="font-['Orbitron'] font-black text-3xl sm:text-4xl lg:text-5xl text-white tracking-tight uppercase">
            INTERACTIVE SPACE <span className="text-cyan-400">MUSEUM</span>
          </h2>
          <p className="text-slate-400 max-w-2xl mt-2 text-sm sm:text-base">
            Explore authentic technological relics currently resting on the lunar regolith and the Martian dunes. Every entry contains verified NASA telemetry, coordinates, and physical documentation.
          </p>
        </div>

        {/* Counter Badge */}
        <div className="flex items-center gap-3 bg-slate-900/80 px-4 py-2.5 rounded-xl border border-white/10">
          <div className="text-right">
            <div className="text-xs font-mono text-slate-400">CATALOG ENTRIES</div>
            <div className="font-['Orbitron'] text-xl font-bold text-cyan-300">
              {filteredItems.length} <span className="text-xs text-slate-500">/ {MUSEUM_ITEMS.length}</span>
            </div>
          </div>
        </div>
      </div>

      {/* Search and Filters Bar */}
      <div className="flex flex-col lg:flex-row gap-4 mb-10 items-stretch lg:items-center justify-between">
        {/* Search Input */}
        <div className="relative flex-1 max-w-lg">
          <Search className="absolute left-3.5 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-400" />
          <input
            type="text"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            placeholder="Search rovers, landers, Apollo missions, or landing craters..."
            className="w-full pl-10 pr-4 py-3 rounded-xl bg-slate-900/80 border border-white/10 text-white placeholder-slate-500 text-sm focus:outline-none focus:border-cyan-400 focus:ring-1 focus:ring-cyan-400 transition-all font-sans"
          />
          {searchQuery && (
            <button 
              onClick={() => setSearchQuery('')}
              className="absolute right-3.5 top-1/2 -translate-y-1/2 text-slate-500 hover:text-white"
            >
              <X className="w-4 h-4" />
            </button>
          )}
        </div>

        {/* Destination Toggle */}
        <div className="flex items-center gap-2 bg-slate-900/80 p-1.5 rounded-xl border border-white/10">
          {(['All', 'Moon', 'Mars'] as const).map((dest) => (
            <button
              key={dest}
              onClick={() => {
                spaceAudio.playClick();
                setSelectedDestination(dest);
              }}
              className={`px-4 py-2 rounded-lg text-xs font-['Orbitron'] font-semibold tracking-wider transition-all ${
                selectedDestination === dest
                  ? dest === 'Moon' 
                    ? 'bg-cyan-500 text-slate-950 shadow-md shadow-cyan-500/30'
                    : dest === 'Mars'
                    ? 'bg-orange-500 text-white shadow-md shadow-orange-500/30'
                    : 'bg-white text-slate-950 shadow-md'
                  : 'text-slate-400 hover:text-white hover:bg-slate-800'
              }`}
            >
              {dest}
            </button>
          ))}
        </div>

        {/* Category Pills */}
        <div className="flex items-center gap-1.5 overflow-x-auto pb-2 lg:pb-0 scrollbar-none">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => {
                spaceAudio.playClick();
                setSelectedCategory(cat);
              }}
              className={`px-3 py-1.5 rounded-lg text-xs font-mono whitespace-nowrap transition-all ${
                selectedCategory === cat
                  ? 'bg-cyan-950/80 text-cyan-300 border border-cyan-500/50'
                  : 'bg-slate-900/50 text-slate-400 border border-white/5 hover:text-slate-200 hover:bg-slate-800'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>
      </div>

      {/* Grid of Equipment Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {filteredItems.map((item) => {
          const isBookmarked = bookmarkedIds.includes(item.id);
          const isMoon = item.destination === 'Moon';

          return (
            <div
              key={item.id}
              onClick={() => handleOpenModal(item)}
              className="group relative rounded-2xl bg-slate-900/60 border border-white/10 hover:border-cyan-500/40 backdrop-blur-md overflow-hidden transition-all duration-300 hover:-translate-y-1 hover:shadow-2xl hover:shadow-cyan-950/40 cursor-pointer flex flex-col justify-between"
            >
              {/* Image & Badges */}
              <div className="relative overflow-hidden bg-slate-950 rounded-t-2xl">
                <SpaceImage
                  src={item.imageUrl}
                  alt={item.name}
                  destination={item.destination}
                  equipmentName={item.name}
                  credit={item.imageCredit}
                  aspectRatio="aspect-[16/10]"
                  className="group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/20 to-transparent pointer-events-none"></div>

                {/* Top badges */}
                <div className="absolute top-3 left-3 right-3 flex items-center justify-between">
                  <span className={`px-2.5 py-1 rounded-md text-[11px] font-['Orbitron'] font-bold tracking-wider uppercase border shadow-md ${
                    isMoon
                      ? 'bg-slate-950/80 text-cyan-300 border-cyan-500/40'
                      : 'bg-slate-950/80 text-orange-400 border-orange-500/40'
                  }`}>
                    {item.destination} • {item.category}
                  </span>

                  <button
                    onClick={(e) => toggleBookmark(item.id, e)}
                    className="p-1.5 rounded-lg bg-slate-950/80 backdrop-blur-md border border-white/10 text-slate-300 hover:text-amber-300 hover:border-amber-400/40 transition-colors"
                    title={isBookmarked ? "Remove Bookmark" : "Bookmark Artifact"}
                  >
                    <Bookmark className={`w-3.5 h-3.5 ${isBookmarked ? 'fill-amber-400 text-amber-400' : ''}`} />
                  </button>
                </div>

                {/* Location indicator */}
                <div className="absolute bottom-3 left-3 right-3 flex items-center gap-1.5 text-xs font-mono text-slate-300 bg-slate-950/70 backdrop-blur-sm px-2.5 py-1 rounded-md border border-white/5 truncate">
                  <MapPin className="w-3.5 h-3.5 text-cyan-400 shrink-0" />
                  <span className="truncate">{item.coordinates.region}</span>
                </div>
              </div>

              {/* Card Body */}
              <div className="p-5 flex-1 flex flex-col justify-between space-y-4">
                <div>
                  <div className="flex items-center justify-between text-xs font-mono text-slate-400 mb-1.5">
                    <span>{item.mission}</span>
                    <span className="text-cyan-400">{item.landingYear}</span>
                  </div>

                  <h3 className="font-['Orbitron'] font-bold text-lg text-white group-hover:text-cyan-300 transition-colors line-clamp-1">
                    {item.name}
                  </h3>

                  <p className="text-xs text-slate-400 line-clamp-2 mt-2 leading-relaxed">
                    {item.purpose}
                  </p>
                </div>

                {/* Key Spec Snippet */}
                <div className="pt-3 border-t border-white/5 grid grid-cols-2 gap-2 text-[11px] font-mono">
                  <div>
                    <span className="text-slate-500 block">NSSDCA ID:</span>
                    <span className="text-slate-300 font-medium">{item.nasaCatalogId}</span>
                  </div>
                  <div>
                    <span className="text-slate-500 block">STATUS:</span>
                    <span className="text-emerald-400 font-medium truncate block">{item.lastKnownStatus.slice(0, 24)}...</span>
                  </div>
                </div>

                {/* Card Action footer */}
                <div className="pt-2 flex items-center justify-between text-xs text-cyan-400 font-mono group-hover:text-cyan-300">
                  <span className="inline-flex items-center gap-1">
                    Inspect Telemetry & Specs
                  </span>
                  <ArrowUpRight className="w-4 h-4 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                </div>
              </div>
            </div>
          );
        })}
      </div>

      {filteredItems.length === 0 && (
        <div className="text-center py-16 bg-slate-900/30 rounded-2xl border border-white/5">
          <Info className="w-10 h-10 text-slate-500 mx-auto mb-3" />
          <h4 className="font-['Orbitron'] text-lg text-white mb-1">No Artifacts Match Your Search</h4>
          <p className="text-xs text-slate-400">Try modifying your search term or switching destination filters.</p>
        </div>
      )}

      {/* Detailed Modal Window */}
      {activeModalItem && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/80 backdrop-blur-xl animate-in fade-in duration-200">
          <div 
            className="relative w-full max-w-4xl max-h-[90vh] overflow-y-auto rounded-3xl bg-slate-900 border border-cyan-500/30 shadow-2xl shadow-cyan-950/60 p-6 sm:p-8 space-y-6"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Modal Close Button */}
            <button
              onClick={handleCloseModal}
              className="absolute top-5 right-5 p-2 rounded-full bg-slate-800/80 text-slate-400 hover:text-white hover:bg-slate-700 transition-colors z-10"
            >
              <X className="w-5 h-5" />
            </button>

            {/* Modal Header */}
            <div className="flex flex-col sm:flex-row gap-6 items-start">
              <div className="w-full sm:w-1/3 rounded-2xl overflow-hidden bg-slate-950 border border-white/10 shrink-0">
                <SpaceImage
                  src={activeModalItem.imageUrl}
                  alt={activeModalItem.name}
                  destination={activeModalItem.destination}
                  equipmentName={activeModalItem.name}
                  credit={activeModalItem.imageCredit}
                  aspectRatio="aspect-[4/3]"
                />
              </div>

              <div className="flex-1 space-y-3">
                <div className="flex items-center gap-2 flex-wrap">
                  <span className={`px-2.5 py-0.5 rounded text-xs font-['Orbitron'] font-bold uppercase ${
                    activeModalItem.destination === 'Moon' 
                      ? 'bg-cyan-500/20 text-cyan-300 border border-cyan-500/40' 
                      : 'bg-orange-500/20 text-orange-400 border border-orange-500/40'
                  }`}>
                    {activeModalItem.destination} • {activeModalItem.category}
                  </span>
                  <span className="text-xs font-mono text-slate-400">
                    NSSDCA ID: {activeModalItem.nasaCatalogId}
                  </span>
                </div>

                <h3 className="font-['Orbitron'] text-xl sm:text-2xl font-black text-white">
                  {activeModalItem.name}
                </h3>

                <div className="grid grid-cols-2 sm:grid-cols-3 gap-3 text-xs font-mono text-slate-300 bg-slate-950/60 p-3 rounded-xl border border-white/5">
                  <div>
                    <span className="text-slate-500 block text-[10px]">MISSION / LAUNCH</span>
                    <span>{activeModalItem.mission} ({activeModalItem.launchYear})</span>
                  </div>
                  <div>
                    <span className="text-slate-500 block text-[10px]">LANDING SITE</span>
                    <span className="truncate block">{activeModalItem.coordinates.region}</span>
                  </div>
                  <div>
                    <span className="text-slate-500 block text-[10px]">COORDINATES</span>
                    <span>{activeModalItem.coordinates.latitude}, {activeModalItem.coordinates.longitude}</span>
                  </div>
                </div>

                {activeModalItem.audioQuote && (
                  <div className="flex items-center gap-3 pt-1">
                    <button
                      onClick={() => handlePlayVoice(activeModalItem.audioQuote || '')}
                      className={`inline-flex items-center gap-2 px-3 py-1.5 rounded-lg text-xs font-mono border transition-all ${
                        isPlayingAudio 
                          ? 'bg-cyan-500 text-slate-950 border-cyan-400 font-bold animate-pulse'
                          : 'bg-slate-800 text-cyan-300 border-cyan-500/30 hover:bg-slate-700'
                      }`}
                    >
                      <Volume2 className="w-3.5 h-3.5" />
                      <span>{isPlayingAudio ? 'Speaking Telemetry Monologue...' : 'Listen to Machine Voice'}</span>
                    </button>

                    {onOpenMachineVoice && (
                      <button
                        onClick={() => {
                          handleCloseModal();
                          onOpenMachineVoice(activeModalItem.id);
                        }}
                        className="text-xs font-mono text-slate-400 hover:text-cyan-300 underline underline-offset-4"
                      >
                        Open Full Story & Malayalam &rarr;
                      </button>
                    )}
                  </div>
                )}
              </div>
            </div>

            {/* Purpose & Mission Objectives */}
            <div className="space-y-2">
              <h4 className="font-['Orbitron'] text-sm font-bold text-cyan-300 flex items-center gap-2">
                <Info className="w-4 h-4" />
                PURPOSE & MISSION OBJECTIVES
              </h4>
              <p className="text-xs sm:text-sm text-slate-300 leading-relaxed bg-slate-950/40 p-4 rounded-xl border border-white/5">
                {activeModalItem.purpose}
              </p>
            </div>

            {/* Scientific Achievements */}
            <div className="space-y-2">
              <h4 className="font-['Orbitron'] text-sm font-bold text-emerald-400 flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4" />
                KEY SCIENTIFIC ACHIEVEMENTS
              </h4>
              <div className="grid grid-cols-1 gap-2">
                {activeModalItem.scientificAchievements.map((ach, idx) => (
                  <div key={idx} className="flex items-start gap-2 text-xs sm:text-sm text-slate-300 bg-slate-950/40 p-3 rounded-xl border border-white/5">
                    <span className="w-5 h-5 rounded-full bg-emerald-950 text-emerald-400 flex items-center justify-center shrink-0 text-xs font-mono border border-emerald-500/30">
                      {idx + 1}
                    </span>
                    <span>{ach}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Why It Remains & Current Status Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="p-4 rounded-xl bg-amber-950/20 border border-amber-500/20 space-y-2">
                <h4 className="font-['Orbitron'] text-xs font-bold text-amber-400 flex items-center gap-1.5">
                  <ShieldCheck className="w-4 h-4" />
                  WHY THE EQUIPMENT REMAINS THERE
                </h4>
                <p className="text-xs text-slate-300 leading-relaxed">
                  {activeModalItem.whyItRemains}
                </p>
              </div>

              <div className="p-4 rounded-xl bg-cyan-950/20 border border-cyan-500/20 space-y-2">
                <h4 className="font-['Orbitron'] text-xs font-bold text-cyan-300 flex items-center gap-1.5">
                  <Radio className="w-4 h-4" />
                  LAST KNOWN MISSION STATUS
                </h4>
                <p className="text-xs text-slate-300 leading-relaxed">
                  {activeModalItem.lastKnownStatus}
                </p>
                <div className="text-[11px] font-mono text-cyan-400 pt-1">
                  Last Radio Contact: {activeModalItem.lastContact}
                </div>
              </div>
            </div>

            {/* Hardware Specifications */}
            <div className="p-4 rounded-xl bg-slate-950/60 border border-white/10">
              <h4 className="font-['Orbitron'] text-xs font-bold text-slate-300 uppercase tracking-wider mb-3">
                Verified Hardware Specifications
              </h4>
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 text-xs font-mono">
                <div>
                  <span className="text-slate-500 block text-[10px]">MASS</span>
                  <span className="text-slate-200">{activeModalItem.hardwareSpecs.mass}</span>
                </div>
                <div>
                  <span className="text-slate-500 block text-[10px]">POWER SOURCE</span>
                  <span className="text-slate-200">{activeModalItem.hardwareSpecs.powerSource}</span>
                </div>
                <div>
                  <span className="text-slate-500 block text-[10px]">DIMENSIONS</span>
                  <span className="text-slate-200">{activeModalItem.hardwareSpecs.dimensions}</span>
                </div>
                <div>
                  <span className="text-slate-500 block text-[10px]">OPERATIONAL DURATION</span>
                  <span className="text-slate-200">{activeModalItem.hardwareSpecs.operationalDuration}</span>
                </div>
              </div>
            </div>

            {/* Verified NASA References */}
            <div className="space-y-2 pt-2 border-t border-white/10">
              <h4 className="font-['Orbitron'] text-xs font-bold text-slate-400 uppercase tracking-wider flex items-center gap-1.5">
                <FileText className="w-3.5 h-3.5 text-cyan-400" />
                Verified NASA References & Scientific Catalog Links
              </h4>
              <div className="space-y-1.5">
                {activeModalItem.verifiedReferences.map((ref, idx) => (
                  <a
                    key={idx}
                    href={ref.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center justify-between p-2.5 rounded-lg bg-slate-950/70 hover:bg-slate-800 border border-white/5 hover:border-cyan-500/30 text-xs font-mono text-slate-300 hover:text-cyan-300 transition-colors group"
                  >
                    <div className="flex items-center gap-2 truncate">
                      <span className="text-slate-500">[{ref.archiveSource}]</span>
                      <span className="truncate text-white group-hover:text-cyan-300">{ref.title}</span>
                    </div>
                    <ExternalLink className="w-3.5 h-3.5 shrink-0 text-slate-500 group-hover:text-cyan-400 ml-2" />
                  </a>
                ))}
              </div>
              <div className="text-[10px] font-mono text-slate-500 text-right">
                Image Credit: {activeModalItem.imageCredit}
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};
