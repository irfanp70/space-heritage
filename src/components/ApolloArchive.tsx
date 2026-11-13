import React, { useState } from 'react';
import { 
  Rocket, 
  MapPin, 
  Clock, 
  Award, 
  Layers, 
  ShieldCheck, 
  Zap, 
  Sparkles,
  ChevronRight,
  ExternalLink,
  Radio
} from 'lucide-react';
import { APOLLO_MISSIONS, ApolloMission } from '../data/apolloData';
import { spaceAudio } from '../utils/audio';
import { SpaceImage } from './SpaceImage';

export const ApolloArchive: React.FC = () => {
  const [selectedMission, setSelectedMission] = useState<ApolloMission>(APOLLO_MISSIONS[0]);
  const [isFiringLaser, setIsFiringLaser] = useState<boolean>(false);
  const [laserPingResult, setLaserPingResult] = useState<string | null>(null);

  const handleSelectMission = (mission: ApolloMission) => {
    spaceAudio.playTelemetryPing();
    setSelectedMission(mission);
  };

  const handleFireLaser = () => {
    if (isFiringLaser) return;
    spaceAudio.playLaserPulse();
    setIsFiringLaser(true);
    setLaserPingResult(null);

    // Simulate round-trip laser time: ~2.56 seconds
    setTimeout(() => {
      spaceAudio.playSuccess();
      setIsFiringLaser(false);
      setLaserPingResult("PHOTON RETURN DETECTED! Round-trip time: 2.5642 seconds (Distance: 384,402.164 km • Lunar drift rate: +3.8 cm/year)");
    }, 2560);
  };

  return (
    <section id="apollo" className="relative py-24 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
      {/* Section Header */}
      <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6 border-b border-white/10 pb-8">
        <div>
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-cyan-950/70 border border-cyan-500/30 text-cyan-300 text-xs font-mono mb-3">
            <Rocket className="w-3.5 h-3.5" />
            <span>SECTION 05 / HISTORICAL ARCHIVE</span>
          </div>
          <h2 className="font-['Orbitron'] font-black text-3xl sm:text-4xl lg:text-5xl text-white tracking-tight uppercase">
            APOLLO SURFACE <span className="text-cyan-400">ARCHIVE</span>
          </h2>
          <p className="text-slate-400 max-w-2xl mt-2 text-sm sm:text-base">
            Detailed chronicles of all six crewed lunar landings (1969–1972). Discover the descent stages, rovers, nuclear science packages, and cultural memorials permanently preserved on the Moon.
          </p>
        </div>

        {/* Total Sample Returned Counter */}
        <div className="flex items-center gap-4 bg-slate-900/80 p-3.5 rounded-2xl border border-white/10">
          <div>
            <div className="text-[11px] font-mono text-slate-400">TOTAL LUNAR SAMPLES RETURNED</div>
            <div className="font-['Orbitron'] text-2xl font-black text-white">
              382 <span className="text-sm font-sans font-normal text-cyan-400">KG (842 LBS)</span>
            </div>
          </div>
        </div>
      </div>

      {/* Mission Selector Tabs */}
      <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-2 mb-8">
        {APOLLO_MISSIONS.map((mission) => {
          const isSelected = selectedMission.missionNumber === mission.missionNumber;
          return (
            <button
              key={mission.missionNumber}
              onClick={() => handleSelectMission(mission)}
              className={`p-3.5 rounded-xl border text-left transition-all ${
                isSelected
                  ? 'bg-cyan-950/80 border-cyan-400/80 shadow-lg shadow-cyan-950/60 scale-[1.02]'
                  : 'bg-slate-900/50 border-white/5 hover:bg-slate-800/60 hover:border-white/20'
              }`}
            >
              <div className="font-['Orbitron'] font-black text-sm text-white flex items-center justify-between">
                <span>{mission.missionNumber}</span>
                {isSelected && <span className="w-1.5 h-1.5 rounded-full bg-cyan-400 animate-ping"></span>}
              </div>
              <div className="text-[11px] font-mono text-cyan-400 mt-1 truncate">
                {mission.lunarModule.split(' ')[1] || mission.lunarModule}
              </div>
              <div className="text-[10px] text-slate-500 truncate mt-0.5">
                {mission.landingSite.split(',')[0]}
              </div>
            </button>
          );
        })}
      </div>

      {/* Mission Showcase Container */}
      <div className="rounded-3xl bg-slate-900/90 border border-white/10 p-6 sm:p-10 backdrop-blur-2xl shadow-2xl space-y-8">
        
        {/* Mission Banner & Details */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
          <div className="lg:col-span-5 rounded-2xl overflow-hidden bg-slate-950 border border-white/10 shadow-xl relative">
            <SpaceImage
              src={selectedMission.imageUrl}
              alt={selectedMission.missionNumber}
              destination="Moon"
              equipmentName={selectedMission.missionNumber}
              credit={selectedMission.imageCredit}
              aspectRatio="aspect-[4/3]"
            />
            <div className="absolute bottom-2 left-2 right-2 p-2 bg-slate-950/80 backdrop-blur-md rounded-lg text-[10px] font-mono text-slate-300 border border-white/5 z-20">
              {selectedMission.imageCredit}
            </div>
          </div>

          <div className="lg:col-span-7 space-y-4">
            <div className="flex items-center gap-2">
              <span className="px-3 py-1 rounded bg-cyan-500/20 text-cyan-300 font-['Orbitron'] font-bold text-xs uppercase border border-cyan-500/30">
                {selectedMission.missionNumber}
              </span>
              <span className="text-xs font-mono text-slate-400">
                Landed: {selectedMission.landingDate}
              </span>
            </div>

            <h3 className="font-['Orbitron'] text-2xl sm:text-3xl font-black text-white">
              {selectedMission.landingSite}
            </h3>

            <div className="grid grid-cols-2 sm:grid-cols-3 gap-3 text-xs font-mono p-4 rounded-xl bg-slate-950/60 border border-white/5">
              <div>
                <span className="text-slate-500 block text-[10px]">COMMANDER</span>
                <span className="text-white font-medium">{selectedMission.commander}</span>
              </div>
              <div>
                <span className="text-slate-500 block text-[10px]">LM PILOT</span>
                <span className="text-white font-medium">{selectedMission.lunarModulePilot}</span>
              </div>
              <div>
                <span className="text-slate-500 block text-[10px]">CM PILOT</span>
                <span className="text-white font-medium">{selectedMission.commandModulePilot}</span>
              </div>
              <div>
                <span className="text-slate-500 block text-[10px]">SURFACE DURATION</span>
                <span className="text-cyan-400 font-bold">{selectedMission.durationOnSurface}</span>
              </div>
              <div>
                <span className="text-slate-500 block text-[10px]">TOTAL EVA TIME</span>
                <span className="text-cyan-400 font-bold">{selectedMission.totalEVATime}</span>
              </div>
              <div>
                <span className="text-slate-500 block text-[10px]">SAMPLES COLLECTED</span>
                <span className="text-emerald-400 font-bold">{selectedMission.samplesReturnedKg} kg</span>
              </div>
            </div>

            {/* Historical Narrative */}
            <p className="text-xs sm:text-sm text-slate-300 leading-relaxed font-sans bg-slate-950/30 p-4 rounded-xl border border-white/5">
              {selectedMission.historicalStory}
            </p>
          </div>
        </div>

        {/* Equipment Left on the Lunar Surface */}
        <div className="space-y-4">
          <h4 className="font-['Orbitron'] text-sm sm:text-base font-bold text-white flex items-center gap-2">
            <Layers className="w-4 h-4 text-cyan-400" />
            EQUIPMENT LEFT PERMANENTLY AT {selectedMission.missionNumber.toUpperCase()} LANDING SITE
          </h4>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {selectedMission.equipmentLeftBehind.map((item, idx) => (
              <div key={idx} className="p-4 rounded-xl bg-slate-950/60 border border-white/5 space-y-1.5">
                <div className="flex items-center justify-between text-xs font-mono">
                  <span className="font-bold text-cyan-300 font-['Orbitron']">{item.name}</span>
                  <span className="text-emerald-400 text-[10px] px-2 py-0.5 rounded bg-emerald-950/60 border border-emerald-500/20">
                    {item.status}
                  </span>
                </div>
                <p className="text-xs text-slate-400 leading-relaxed font-sans">
                  {item.description}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* Notable Artifacts & Memorials */}
        <div className="p-5 rounded-2xl bg-slate-950/60 border border-white/5 space-y-3">
          <h4 className="font-['Orbitron'] text-xs font-bold text-amber-300 uppercase tracking-wider flex items-center gap-2">
            <Award className="w-4 h-4 text-amber-400" />
            COMMEMORATIVE ARTIFACTS & CULTURAL HERITAGE
          </h4>
          <ul className="grid grid-cols-1 md:grid-cols-2 gap-2 text-xs text-slate-300">
            {selectedMission.notableArtifacts.map((art, i) => (
              <li key={i} className="flex items-start gap-2 bg-slate-900/60 p-2.5 rounded-lg border border-white/5">
                <span className="text-cyan-400 font-mono">•</span>
                <span>{art}</span>
              </li>
            ))}
          </ul>
        </div>

        {/* Interactive Laser Retroreflector (LRRR) Simulator */}
        <div className="p-6 rounded-2xl bg-gradient-to-br from-cyan-950/40 via-slate-950 to-blue-950/40 border border-cyan-500/30 space-y-4">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
            <div>
              <div className="text-[10px] font-mono text-cyan-400 uppercase tracking-widest flex items-center gap-1.5 mb-1">
                <Zap className="w-3.5 h-3.5 text-cyan-400" />
                <span>INTERACTIVE LUNAR LASER RANGING RETROREFLECTOR (LRRR) SIMULATOR</span>
              </div>
              <h4 className="font-['Orbitron'] text-lg font-bold text-white">
                Ping the Moon’s Quartz Prisms with Earth Laser
              </h4>
              <p className="text-xs text-slate-300 max-w-2xl mt-1">
                The optical retroreflectors left by Apollo 11, 14, and 15 have zero moving parts and require no power. Observatories still bounce green lasers off them today to measure the exact distance to the Moon.
              </p>
            </div>

            <button
              onClick={handleFireLaser}
              disabled={isFiringLaser}
              className={`px-6 py-3 rounded-xl font-['Orbitron'] text-xs font-bold tracking-wider transition-all whitespace-nowrap shadow-xl ${
                isFiringLaser
                  ? 'bg-emerald-500 text-slate-950 shadow-emerald-500/50 animate-pulse'
                  : 'bg-cyan-500 hover:bg-cyan-400 text-slate-950 shadow-cyan-500/30'
              }`}
            >
              {isFiringLaser ? 'LASER PULSE IN FLIGHT...' : 'FIRE 532NM LASER PULSE'}
            </button>
          </div>

          {/* Pulse visual line */}
          {isFiringLaser && (
            <div className="h-2 rounded-full bg-slate-950 overflow-hidden border border-cyan-500/40">
              <div className="h-full bg-gradient-to-r from-emerald-400 via-cyan-400 to-emerald-400 animate-pulse w-full"></div>
            </div>
          )}

          {laserPingResult && (
            <div className="p-3.5 rounded-xl bg-emerald-950/40 border border-emerald-500/40 text-xs font-mono text-emerald-300 animate-in fade-in">
              {laserPingResult}
            </div>
          )}
        </div>

        {/* Space Heritage Preservation Treaty Note */}
        <div className="p-4 rounded-xl bg-slate-950/40 border border-white/5 flex items-center justify-between text-xs font-mono text-slate-400 flex-wrap gap-2">
          <div className="flex items-center gap-2">
            <ShieldCheck className="w-4 h-4 text-cyan-400 shrink-0" />
            <span>PROTECTED UNDER US PUBLIC LAW 116-275 ("ONE SMALL STEP ACT 2020")</span>
          </div>
          <span className="text-slate-500 text-[10px]">Historic Preservation Zone: 2 km buffer</span>
        </div>

      </div>
    </section>
  );
};
