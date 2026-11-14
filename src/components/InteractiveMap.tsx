import React, { useState, useMemo } from 'react';
import { 
  Layers, 
  Search, 
  ZoomIn, 
  ZoomOut, 
  RotateCcw, 
  MapPin, 
  ExternalLink, 
  Compass, 
  Navigation,
  Globe,
  Radio,
  X
} from 'lucide-react';
import { MOON_LANDING_SITES, MARS_LANDING_SITES, MapLandingSite } from '../data/mapData';
import { spaceAudio } from '../utils/audio';
import { SpaceImage } from './SpaceImage';

interface InteractiveMapProps {
  onSelectEquipmentFromMap?: (machineId: string) => void;
}

export const InteractiveMap: React.FC<InteractiveMapProps> = ({ onSelectEquipmentFromMap }) => {
  const [activeBody, setActiveBody] = useState<'Moon' | 'Mars'>('Moon');
  const [zoomLevel, setZoomLevel] = useState<number>(1);
  const [panOffset, setPanOffset] = useState<{ x: number; y: number }>({ x: 0, y: 0 });
  const [isDragging, setIsDragging] = useState<boolean>(false);
  const [dragStart, setDragStart] = useState<{ x: number; y: number }>({ x: 0, y: 0 });
  const [selectedSite, setSelectedSite] = useState<MapLandingSite | null>(MOON_LANDING_SITES[0]);
  const [searchSiteQuery, setSearchSiteQuery] = useState<string>('');

  const currentSites = activeBody === 'Moon' ? MOON_LANDING_SITES : MARS_LANDING_SITES;

  const filteredSites = useMemo(() => {
    return currentSites.filter(site => 
      site.name.toLowerCase().includes(searchSiteQuery.toLowerCase()) ||
      site.landmark.toLowerCase().includes(searchSiteQuery.toLowerCase())
    );
  }, [currentSites, searchSiteQuery]);

  const handleZoomIn = () => {
    spaceAudio.playClick();
    setZoomLevel(prev => Math.min(prev + 0.3, 2.5));
  };

  const handleZoomOut = () => {
    spaceAudio.playClick();
    setZoomLevel(prev => Math.max(prev - 0.3, 0.7));
  };

  const handleReset = () => {
    spaceAudio.playClick();
    setZoomLevel(1);
    setPanOffset({ x: 0, y: 0 });
  };

  const handleMouseDown = (e: React.MouseEvent) => {
    setIsDragging(true);
    setDragStart({ x: e.clientX - panOffset.x, y: e.clientY - panOffset.y });
  };

  const handleMouseMove = (e: React.MouseEvent) => {
    if (!isDragging) return;
    const maxPanX = 220 * zoomLevel;
    const maxPanY = 160 * zoomLevel;
    const nextX = Math.max(-maxPanX, Math.min(maxPanX, e.clientX - dragStart.x));
    const nextY = Math.max(-maxPanY, Math.min(maxPanY, e.clientY - dragStart.y));
    setPanOffset({ x: nextX, y: nextY });
  };

  const handleMouseUp = () => {
    setIsDragging(false);
  };

  const handleSelectSite = (site: MapLandingSite) => {
    spaceAudio.playTelemetryPing();
    setSelectedSite(site);
  };

  // Convert lat/long to X/Y percentage on planar projection
  // Lat: +90 (top) to -90 (bottom); Lng: -180 (left) to +180 (right)
  const getCoordinatesPosition = (lat: number, lng: number) => {
    const x = ((lng + 180) / 360) * 100;
    const y = ((90 - lat) / 180) * 100;
    return { x, y };
  };

  return (
    <section id="maps" className="relative py-24 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
      {/* Section Header */}
      <div className="flex flex-col md:flex-row md:items-end justify-between mb-8 gap-4 border-b border-white/10 pb-6">
        <div>
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-cyan-950/70 border border-cyan-500/30 text-cyan-300 text-xs font-mono mb-3">
            <Layers className="w-3.5 h-3.5" />
            <span>SECTION 02 / PLANETARY RECONNAISSANCE</span>
          </div>
          <h2 className="font-['Orbitron'] font-black text-3xl sm:text-4xl text-white tracking-tight uppercase">
            3D-STYLE <span className={activeBody === 'Moon' ? 'text-cyan-400' : 'text-orange-400'}>{activeBody}</span> EXPLORATION MAP
          </h2>
          <p className="text-slate-400 max-w-2xl mt-1 text-sm">
            Topographical coordinates and verified historic touchdown sites. Zoom, drag, and click any pulsing telemetry marker to inspect surface machinery.
          </p>
        </div>

        {/* Planet Switcher Buttons */}
        <div className="flex items-center gap-2 bg-slate-900/90 p-1.5 rounded-xl border border-white/10 shadow-lg">
          <button
            onClick={() => {
              spaceAudio.playTelemetryPing();
              setActiveBody('Moon');
              setSelectedSite(MOON_LANDING_SITES[0]);
              setPanOffset({ x: 0, y: 0 });
            }}
            className={`flex items-center gap-2 px-5 py-2.5 rounded-lg font-['Orbitron'] text-xs font-bold tracking-wider transition-all ${
              activeBody === 'Moon'
                ? 'bg-gradient-to-r from-cyan-600 to-blue-600 text-white shadow-lg shadow-cyan-500/30'
                : 'text-slate-400 hover:text-white hover:bg-slate-800'
            }`}
          >
            <Globe className="w-4 h-4" />
            <span>THE MOON</span>
          </button>

          <button
            onClick={() => {
              spaceAudio.playTelemetryPing();
              setActiveBody('Mars');
              setSelectedSite(MARS_LANDING_SITES[0]);
              setPanOffset({ x: 0, y: 0 });
            }}
            className={`flex items-center gap-2 px-5 py-2.5 rounded-lg font-['Orbitron'] text-xs font-bold tracking-wider transition-all ${
              activeBody === 'Mars'
                ? 'bg-gradient-to-r from-orange-600 to-amber-600 text-white shadow-lg shadow-orange-500/30'
                : 'text-slate-400 hover:text-white hover:bg-slate-800'
            }`}
          >
            <Compass className="w-4 h-4" />
            <span>MARS</span>
          </button>
        </div>
      </div>

      {/* Main Map Viewport & Panel */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 items-start">
        
        {/* Map Canvas Frame */}
        <div className="lg:col-span-2 relative rounded-3xl overflow-hidden bg-slate-950 border border-white/10 shadow-2xl h-[520px] select-none flex flex-col justify-between">
          
          {/* Map Controls Overlay (Top) */}
          <div className="relative z-20 flex items-center justify-between p-4 bg-gradient-to-b from-slate-950/90 to-transparent">
            {/* Search Input for Sites */}
            <div className="relative w-64">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-3.5 h-3.5 text-slate-400" />
              <input
                type="text"
                value={searchSiteQuery}
                onChange={(e) => setSearchSiteQuery(e.target.value)}
                placeholder={`Search ${activeBody} landing sites...`}
                className="w-full pl-9 pr-3 py-1.5 rounded-lg bg-slate-900/90 border border-white/10 text-white placeholder-slate-500 text-xs focus:outline-none focus:border-cyan-400 font-mono"
              />
            </div>

            {/* Zoom and Pan Controls */}
            <div className="flex items-center gap-1.5 bg-slate-900/90 p-1 rounded-lg border border-white/10">
              <button
                onClick={handleZoomIn}
                className="p-1.5 text-slate-300 hover:text-white hover:bg-slate-800 rounded transition-colors"
                title="Zoom In (+)"
              >
                <ZoomIn className="w-4 h-4" />
              </button>
              <button
                onClick={handleZoomOut}
                className="p-1.5 text-slate-300 hover:text-white hover:bg-slate-800 rounded transition-colors"
                title="Zoom Out (-)"
              >
                <ZoomOut className="w-4 h-4" />
              </button>
              <button
                onClick={handleReset}
                className="p-1.5 text-slate-300 hover:text-white hover:bg-slate-800 rounded transition-colors"
                title="Reset View"
              >
                <RotateCcw className="w-3.5 h-3.5" />
              </button>
            </div>
          </div>

          {/* Interactive Planetary Surface & Markers */}
          <div 
            className="absolute inset-0 cursor-grab active:cursor-grabbing overflow-hidden flex items-center justify-center"
            onMouseDown={handleMouseDown}
            onMouseMove={handleMouseMove}
            onMouseUp={handleMouseUp}
            onMouseLeave={handleMouseUp}
          >
            <div 
              className="relative w-full h-full transition-transform duration-75 ease-out"
              style={{
                transform: `scale(${zoomLevel}) translate(${panOffset.x / zoomLevel}px, ${panOffset.y / zoomLevel}px)`
              }}
            >
              {/* Planetary Surface Graphic (Moon or Mars) */}
              <div className={`absolute inset-0 transition-all duration-700 ${
                activeBody === 'Moon' 
                  ? 'bg-[#0b0f19] bg-grid-pattern' 
                  : 'bg-[#1a0a07] bg-grid-pattern'
              }`}>
                {/* 3D Celestial Globe Spherical Illumination */}
                <div className={`absolute inset-6 rounded-3xl border opacity-30 pointer-events-none ${
                  activeBody === 'Moon' ? 'border-cyan-400/30' : 'border-orange-500/30'
                }`}></div>

                {/* Simulated Geologic Surface Topography Details */}
                {activeBody === 'Moon' ? (
                  <svg className="absolute inset-0 w-full h-full opacity-35 pointer-events-none" xmlns="http://www.w3.org/2000/svg">
                    <circle cx="28%" cy="40%" r="90" fill="#1e293b" />
                    <text x="28%" y="40%" fill="#64748b" fontSize="10" textAnchor="middle" fontFamily="monospace">OCEANUS PROCELLARUM</text>
                    <circle cx="56%" cy="48%" r="65" fill="#1e293b" />
                    <text x="56%" y="48%" fill="#64748b" fontSize="10" textAnchor="middle" fontFamily="monospace">MARE TRANQUILLITATIS</text>
                    <circle cx="48%" cy="32%" r="50" fill="#1e293b" />
                    <text x="48%" y="32%" fill="#64748b" fontSize="9" textAnchor="middle" fontFamily="monospace">MARE SERENITATIS</text>
                    <circle cx="38%" cy="26%" r="55" fill="#1e293b" />
                    <text x="38%" y="26%" fill="#64748b" fontSize="9" textAnchor="middle" fontFamily="monospace">MARE IMBRIUM</text>
                    <ellipse cx="65%" cy="34%" rx="35" ry="25" fill="#1e293b" />
                    <text x="65%" y="34%" fill="#64748b" fontSize="8" textAnchor="middle" fontFamily="monospace">MARE CRISIUM</text>
                  </svg>
                ) : (
                  <svg className="absolute inset-0 w-full h-full opacity-35 pointer-events-none" xmlns="http://www.w3.org/2000/svg">
                    <circle cx="20%" cy="45%" r="75" fill="#2d130d" />
                    <text x="20%" y="45%" fill="#ea580c" fontSize="10" textAnchor="middle" fontFamily="monospace">OLYMPUS MONS</text>
                    <ellipse cx="42%" cy="62%" rx="120" ry="28" fill="#2d130d" />
                    <text x="42%" y="62%" fill="#ea580c" fontSize="10" textAnchor="middle" fontFamily="monospace">VALLES MARINERIS</text>
                    <circle cx="38%" cy="38%" r="60" fill="#2d130d" />
                    <text x="38%" y="38%" fill="#ea580c" fontSize="9" textAnchor="middle" fontFamily="monospace">CHRYSE PLANITIA</text>
                    <circle cx="75%" cy="48%" r="65" fill="#2d130d" />
                    <text x="75%" y="48%" fill="#ea580c" fontSize="9" textAnchor="middle" fontFamily="monospace">ELYSIUM PLANITIA</text>
                    <circle cx="50%" cy="18%" r="90" fill="#3a1b12" />
                    <text x="50%" y="18%" fill="#ea580c" fontSize="9" textAnchor="middle" fontFamily="monospace">VASTITAS BOREALIS</text>
                  </svg>
                )}

                {/* Coordinate Grid Overlay */}
                <div className="absolute inset-0 pointer-events-none flex flex-col justify-between p-6 opacity-30 text-[10px] font-mono text-slate-500">
                  <div className="flex justify-between">
                    <span>+60° N</span>
                    <span>0° PRIME MERIDIAN</span>
                    <span>+60° N</span>
                  </div>
                  <div className="flex justify-between border-t border-dashed border-white/20 pt-1">
                    <span>EQUATOR 0°</span>
                    <span>COORDINATE GRID SYSTEM (IAU)</span>
                    <span>EQUATOR 0°</span>
                  </div>
                  <div className="flex justify-between">
                    <span>-60° S</span>
                    <span>180° W</span>
                    <span>-60° S</span>
                  </div>
                </div>

                {/* Historical Landing Site Markers */}
                {filteredSites.map((site) => {
                  const pos = getCoordinatesPosition(site.lat, site.lng);
                  const isSelected = selectedSite?.id === site.id;

                  return (
                    <div
                      key={site.id}
                      onClick={(e) => {
                        e.stopPropagation();
                        handleSelectSite(site);
                      }}
                      style={{ left: `${pos.x}%`, top: `${pos.y}%` }}
                      className="absolute -translate-x-1/2 -translate-y-1/2 cursor-pointer group/marker z-30"
                    >
                      {/* Pulsing Beacon Circle */}
                      <div className="relative flex items-center justify-center">
                        <span className={`absolute w-8 h-8 rounded-full animate-ping opacity-60 ${
                          activeBody === 'Moon' ? 'bg-cyan-400' : 'bg-orange-500'
                        }`} />
                        <span className={`relative w-4 h-4 rounded-full flex items-center justify-center border shadow-lg ${
                          isSelected 
                            ? 'bg-white border-cyan-300 scale-125' 
                            : activeBody === 'Moon'
                            ? 'bg-cyan-500 border-white'
                            : 'bg-orange-500 border-white'
                        }`}>
                          <span className={`w-1.5 h-1.5 rounded-full ${isSelected ? 'bg-slate-950' : 'bg-white'}`} />
                        </span>

                        {/* Hover Tooltip Pill */}
                        <div className="absolute bottom-6 left-1/2 -translate-x-1/2 px-2.5 py-1 rounded bg-slate-950/95 border border-white/20 text-[10px] font-mono text-white whitespace-nowrap opacity-0 group-hover/marker:opacity-100 transition-opacity pointer-events-none shadow-xl z-40">
                          <span className="font-bold">{site.name}</span>
                          <span className="text-slate-400 ml-1">({site.year})</span>
                        </div>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>

          {/* Map Telemetry Footer Overlay */}
          <div className="relative z-20 flex items-center justify-between p-3 bg-gradient-to-t from-slate-950/90 to-transparent border-t border-white/5 text-[11px] font-mono text-slate-400">
            <div className="flex items-center gap-2">
              <Navigation className="w-3.5 h-3.5 text-cyan-400" />
              <span>CLICK & DRAG TO PAN • SCROLL / USE BUTTONS TO ZOOM</span>
            </div>
            <div className="flex items-center gap-3">
              <span className="text-slate-200">{filteredSites.length} MARKERS</span>
              <span className="text-emerald-400">GEO-REFERENCED</span>
            </div>
          </div>
        </div>

        {/* Selected Equipment Information Panel */}
        <div className="rounded-3xl bg-slate-900/80 border border-white/10 p-6 backdrop-blur-xl shadow-2xl space-y-5">
          {selectedSite ? (
            <>
              {/* Header */}
              <div className="flex items-start justify-between">
                <div>
                  <span className={`px-2.5 py-0.5 rounded text-[10px] font-['Orbitron'] font-bold uppercase ${
                    selectedSite.destination === 'Moon'
                      ? 'bg-cyan-500/20 text-cyan-300 border border-cyan-500/30'
                      : 'bg-orange-500/20 text-orange-400 border border-orange-500/30'
                  }`}>
                    {selectedSite.destination} • {selectedSite.type}
                  </span>
                  <h3 className="font-['Orbitron'] text-xl font-black text-white mt-2">
                    {selectedSite.name}
                  </h3>
                  <div className="text-xs font-mono text-slate-400 flex items-center gap-2 mt-0.5">
                    <span>{selectedSite.agency}</span>
                    <span>•</span>
                    <span className="text-cyan-400">Landed {selectedSite.year}</span>
                  </div>
                </div>

                <div className="p-2 rounded-xl bg-slate-950 border border-white/5">
                  <Radio className="w-5 h-5 text-emerald-400 animate-pulse" />
                </div>
              </div>

              {/* Photo */}
              <div className="rounded-2xl overflow-hidden bg-slate-950 border border-white/10 relative">
                <SpaceImage
                  src={selectedSite.imageUrl}
                  alt={selectedSite.name}
                  destination={selectedSite.destination}
                  equipmentName={selectedSite.name}
                  credit={selectedSite.agency}
                  aspectRatio="aspect-[16/9]"
                />
                <div className="absolute bottom-2 left-2 px-2 py-0.5 rounded bg-slate-950/80 backdrop-blur-sm text-[10px] font-mono text-slate-300 border border-white/10 z-20">
                  {selectedSite.status}
                </div>
              </div>

              {/* Location and Landmark */}
              <div className="p-3.5 rounded-xl bg-slate-950/60 border border-white/5 space-y-2 text-xs font-mono">
                <div className="flex items-center justify-between">
                  <span className="text-slate-500">LANDMARK:</span>
                  <span className="text-slate-200 font-semibold truncate text-right">{selectedSite.landmark}</span>
                </div>
                <div className="flex items-center justify-between border-t border-white/5 pt-1.5">
                  <span className="text-slate-500">COORDINATES:</span>
                  <span className="text-cyan-400 font-bold">{selectedSite.latStr}, {selectedSite.lngStr}</span>
                </div>
              </div>

              {/* Brief Historical Fact */}
              <div className="space-y-1.5">
                <div className="text-[11px] font-['Orbitron'] font-semibold text-slate-400">
                  HISTORICAL TELEMETRY SUMMARY
                </div>
                <p className="text-xs text-slate-300 leading-relaxed bg-slate-950/40 p-3 rounded-xl border border-white/5">
                  {selectedSite.briefFact}
                </p>
              </div>

              {/* Action Button */}
              {onSelectEquipmentFromMap && (
                <button
                  onClick={() => {
                    spaceAudio.playTelemetryPing();
                    onSelectEquipmentFromMap(selectedSite.machineId);
                  }}
                  className="w-full flex items-center justify-center gap-2 py-3 rounded-xl bg-cyan-600/20 hover:bg-cyan-600/30 text-cyan-300 font-['Orbitron'] text-xs font-bold tracking-wider border border-cyan-500/40 hover:border-cyan-400 transition-all shadow-md group"
                >
                  <span>VIEW FULL MUSEUM RECORD</span>
                  <ExternalLink className="w-3.5 h-3.5 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                </button>
              )}
            </>
          ) : (
            <div className="py-20 text-center text-slate-500">
              <MapPin className="w-8 h-8 mx-auto mb-2 opacity-50" />
              <p className="text-xs font-mono">Click a landing beacon to inspect telemetry.</p>
            </div>
          )}
        </div>

      </div>
    </section>
  );
};
