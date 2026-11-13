import React, { useState } from 'react';
import { 
  Sparkles, 
  ArrowLeftRight, 
  Info, 
  Calendar, 
  Camera, 
  ExternalLink,
  Sliders,
  ChevronLeft,
  ChevronRight
} from 'lucide-react';
import { GALLERY_ITEMS, GalleryItem } from '../data/galleryData';
import { spaceAudio } from '../utils/audio';

export const BeforeAfterGallery: React.FC = () => {
  const [selectedDestination, setSelectedDestination] = useState<'All' | 'Moon' | 'Mars'>('All');
  const [activeItemIndex, setActiveItemIndex] = useState<number>(0);
  const [sliderPosition, setSliderPosition] = useState<number>(50); // percentage 0 - 100
  const [isDraggingSlider, setIsDraggingSlider] = useState<boolean>(false);

  const filteredItems = GALLERY_ITEMS.filter(item => 
    selectedDestination === 'All' || item.destination === selectedDestination
  );

  const currentItem: GalleryItem = filteredItems[activeItemIndex] || GALLERY_ITEMS[0];

  const handleNext = () => {
    spaceAudio.playClick();
    setActiveItemIndex((prev) => (prev + 1) % filteredItems.length);
    setSliderPosition(50);
  };

  const handlePrev = () => {
    spaceAudio.playClick();
    setActiveItemIndex((prev) => (prev - 1 + filteredItems.length) % filteredItems.length);
    setSliderPosition(50);
  };

  const handleSliderMove = (e: React.MouseEvent<HTMLDivElement> | React.TouchEvent<HTMLDivElement>) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const clientX = 'touches' in e ? e.touches[0].clientX : e.clientX;
    const offsetX = clientX - rect.left;
    const percentage = Math.max(0, Math.min(100, (offsetX / rect.width) * 100));
    setSliderPosition(percentage);
  };

  return (
    <section id="gallery" className="relative py-24 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
      {/* Section Header */}
      <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6 border-b border-white/10 pb-8">
        <div>
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-cyan-950/70 border border-cyan-500/30 text-cyan-300 text-xs font-mono mb-3">
            <Sparkles className="w-3.5 h-3.5" />
            <span>SECTION 04 / TIME COMPARISONS</span>
          </div>
          <h2 className="font-['Orbitron'] font-black text-3xl sm:text-4xl lg:text-5xl text-white tracking-tight uppercase">
            BEFORE & AFTER <span className="text-cyan-400">HISTORICAL GALLERY</span>
          </h2>
          <p className="text-slate-400 max-w-2xl mt-2 text-sm sm:text-base">
            Witness the passage of time across other worlds. Drag the interactive split-slider to compare pristine spacecraft upon arrival versus decades of space weathering, orbital views, and Martian dust.
          </p>
        </div>

        {/* Filter Controls */}
        <div className="flex items-center gap-2 bg-slate-900/90 p-1.5 rounded-xl border border-white/10">
          {(['All', 'Moon', 'Mars'] as const).map((dest) => (
            <button
              key={dest}
              onClick={() => {
                spaceAudio.playClick();
                setSelectedDestination(dest);
                setActiveItemIndex(0);
                setSliderPosition(50);
              }}
              className={`px-4 py-2 rounded-lg text-xs font-['Orbitron'] font-semibold tracking-wider transition-all ${
                selectedDestination === dest
                  ? 'bg-cyan-500 text-slate-950 shadow-md shadow-cyan-500/30'
                  : 'text-slate-400 hover:text-white hover:bg-slate-800'
              }`}
            >
              {dest}
            </button>
          ))}
        </div>
      </div>

      {/* Main Interactive Slider Showcase */}
      <div className="rounded-3xl bg-slate-900/80 border border-white/10 p-6 sm:p-8 backdrop-blur-2xl shadow-2xl space-y-8">
        
        {/* Gallery Title & Navigation Bar */}
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
          <div>
            <div className="flex items-center gap-2 mb-1">
              <span className={`px-2 py-0.5 rounded text-[10px] font-['Orbitron'] font-bold uppercase ${
                currentItem.destination === 'Moon' 
                  ? 'bg-cyan-950 text-cyan-300 border border-cyan-500/30' 
                  : 'bg-orange-950 text-orange-400 border border-orange-500/30'
              }`}>
                {currentItem.destination} • {currentItem.era}
              </span>
              <span className="text-xs font-mono text-slate-400">
                NASA REF: {currentItem.nasaRefId}
              </span>
            </div>
            <h3 className="font-['Orbitron'] text-xl sm:text-2xl font-black text-white">
              {currentItem.title}
            </h3>
            <p className="text-xs text-slate-400 mt-1">
              {currentItem.description}
            </p>
          </div>

          {/* Stepper Buttons */}
          <div className="flex items-center gap-2">
            <span className="text-xs font-mono text-slate-400 mr-2">
              {activeItemIndex + 1} of {filteredItems.length}
            </span>
            <button
              onClick={handlePrev}
              className="p-2.5 rounded-xl bg-slate-800 text-slate-300 hover:text-white hover:bg-slate-700 transition-colors border border-white/5"
              aria-label="Previous comparison"
            >
              <ChevronLeft className="w-5 h-5" />
            </button>
            <button
              onClick={handleNext}
              className="p-2.5 rounded-xl bg-slate-800 text-slate-300 hover:text-white hover:bg-slate-700 transition-colors border border-white/5"
              aria-label="Next comparison"
            >
              <ChevronRight className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* Interactive Split-Slider Viewport */}
        <div 
          className="relative w-full aspect-[16/9] sm:aspect-[21/9] max-h-[500px] rounded-2xl overflow-hidden cursor-ew-resize select-none bg-slate-950 border border-white/10 shadow-2xl"
          onMouseMove={(e) => {
            if (isDraggingSlider || e.buttons === 1) handleSliderMove(e);
          }}
          onTouchMove={handleSliderMove}
          onMouseDown={() => setIsDraggingSlider(true)}
          onMouseUp={() => setIsDraggingSlider(false)}
          onClick={handleSliderMove}
        >
          {/* "AFTER" Image (Full background layer) */}
          <img
            src={currentItem.after.imageUrl}
            alt={currentItem.after.caption}
            className="absolute inset-0 w-full h-full object-cover object-center"
          />

          {/* "AFTER" Caption Tag */}
          <div className="absolute top-4 right-4 z-10 px-3 py-1.5 rounded-lg bg-slate-950/85 backdrop-blur-md border border-white/10 text-xs font-mono text-right pointer-events-none">
            <span className="text-amber-400 font-bold block">AFTER / LATER YEARS ({currentItem.after.year})</span>
            <span className="text-[10px] text-slate-300 block max-w-xs truncate">{currentItem.after.caption}</span>
          </div>

          {/* "BEFORE" Image (Clipped layer) */}
          <div 
            className="absolute inset-y-0 left-0 overflow-hidden"
            style={{ width: `${sliderPosition}%` }}
          >
            <img
              src={currentItem.before.imageUrl}
              alt={currentItem.before.caption}
              className="absolute inset-0 w-full h-full object-cover object-center max-w-none"
              style={{ width: '100vw', maxWidth: 'none' }}
            />
            {/* "BEFORE" Caption Tag */}
            <div className="absolute top-4 left-4 z-10 px-3 py-1.5 rounded-lg bg-slate-950/85 backdrop-blur-md border border-white/10 text-xs font-mono text-left pointer-events-none">
              <span className="text-cyan-400 font-bold block">BEFORE / UPON LANDING ({currentItem.before.year})</span>
              <span className="text-[10px] text-slate-300 block max-w-xs truncate">{currentItem.before.caption}</span>
            </div>
          </div>

          {/* Draggable Divider Handle */}
          <div 
            className="absolute top-0 bottom-0 z-20 w-0.5 bg-white shadow-[0_0_15px_rgba(255,255,255,0.8)] flex items-center justify-center pointer-events-none"
            style={{ left: `${sliderPosition}%` }}
          >
            <div className="w-9 h-9 rounded-full bg-slate-900 border-2 border-white shadow-xl flex items-center justify-center text-white">
              <ArrowLeftRight className="w-4 h-4 text-cyan-400" />
            </div>
          </div>

          {/* Help hint */}
          <div className="absolute bottom-3 left-1/2 -translate-x-1/2 z-10 px-3 py-1 rounded-full bg-slate-950/75 backdrop-blur-md text-[10px] font-mono text-slate-400 pointer-events-none flex items-center gap-1.5">
            <Sliders className="w-3 h-3 text-cyan-400" />
            <span>DRAG SLIDER HORIZONTALLY TO REVEAL</span>
          </div>
        </div>

        {/* Detailed Captions & Image Credits Breakdown */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 pt-4 border-t border-white/10 text-xs">
          <div className="p-4 rounded-xl bg-slate-950/50 border border-white/5 space-y-2">
            <div className="font-['Orbitron'] font-bold text-cyan-400 flex items-center gap-1.5">
              <Camera className="w-3.5 h-3.5" />
              BEFORE: {currentItem.before.year}
            </div>
            <p className="text-slate-300 leading-relaxed font-sans">
              {currentItem.before.caption}
            </p>
            <div className="text-[10px] font-mono text-slate-500 pt-1">
              Credit: {currentItem.before.credit}
            </div>
          </div>

          <div className="p-4 rounded-xl bg-slate-950/50 border border-white/5 space-y-2">
            <div className="font-['Orbitron'] font-bold text-amber-400 flex items-center gap-1.5">
              <Camera className="w-3.5 h-3.5" />
              AFTER: {currentItem.after.year}
            </div>
            <p className="text-slate-300 leading-relaxed font-sans">
              {currentItem.after.caption}
            </p>
            <div className="text-[10px] font-mono text-slate-500 pt-1">
              Credit: {currentItem.after.credit}
            </div>
          </div>
        </div>

        {/* Historical Context Explanatory Callout */}
        <div className="p-4 rounded-xl bg-cyan-950/30 border border-cyan-500/30 flex items-start gap-3">
          <Info className="w-5 h-5 text-cyan-400 shrink-0 mt-0.5" />
          <div>
            <div className="font-['Orbitron'] text-xs font-bold text-cyan-300 mb-1">
              GEOLOGICAL & ENVIRONMENTAL CONTEXT
            </div>
            <p className="text-xs text-slate-300 leading-relaxed">
              {currentItem.historicalContext}
            </p>
          </div>
        </div>

      </div>
    </section>
  );
};
