import React, { useState } from 'react';
import { 
  Compass, 
  Flag, 
  Rocket, 
  Radio, 
  Layers, 
  ExternalLink,
  ChevronRight,
  Sparkles
} from 'lucide-react';
import { TIMELINE_MILESTONES, TimelineMilestone } from '../data/timelineData';
import { spaceAudio } from '../utils/audio';

interface TimelineSectionProps {
  onSelectMachineFromTimeline?: (machineId: string) => void;
}

export const TimelineSection: React.FC<TimelineSectionProps> = ({ onSelectMachineFromTimeline }) => {
  const [selectedDestination, setSelectedDestination] = useState<'Both' | 'Moon' | 'Mars'>('Both');
  const [selectedEra, setSelectedEra] = useState<string>('All');

  const eras = ['All', 'Apollo Era', 'Pioneer Robotics', 'Rover Renaissance', 'Modern & Artemis'];

  const filteredMilestones = TIMELINE_MILESTONES.filter((m) => {
    const matchesDest = selectedDestination === 'Both' || m.destination === selectedDestination || m.destination === 'Both';
    const matchesEra = selectedEra === 'All' || m.era === selectedEra;
    return matchesDest && matchesEra;
  });

  const getIcon = (type: string) => {
    switch (type) {
      case 'flag': return Flag;
      case 'rocket': return Rocket;
      case 'rover': return Compass;
      case 'lander': return Layers;
      default: return Radio;
    }
  };

  return (
    <section id="timeline" className="relative py-24 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
      {/* Section Header */}
      <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6 border-b border-white/10 pb-8">
        <div>
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-cyan-950/70 border border-cyan-500/30 text-cyan-300 text-xs font-mono mb-3">
            <Compass className="w-3.5 h-3.5" />
            <span>SECTION 09 / CHRONOLOGICAL EXPEDITION</span>
          </div>
          <h2 className="font-['Orbitron'] font-black text-3xl sm:text-4xl lg:text-5xl text-white tracking-tight uppercase">
            EXPLORATION <span className="text-cyan-400">TIMELINE</span>
          </h2>
          <p className="text-slate-400 max-w-2xl mt-2 text-sm sm:text-base">
            Journey across nearly six decades of interplanetary technological triumphs. Follow humanity's robotic and crewed milestones from Apollo 11 to the modern Artemis campaign.
          </p>
        </div>

        {/* Destination Filter */}
        <div className="flex items-center gap-2 bg-slate-900/90 p-1.5 rounded-xl border border-white/10">
          {(['Both', 'Moon', 'Mars'] as const).map((dest) => (
            <button
              key={dest}
              onClick={() => {
                spaceAudio.playClick();
                setSelectedDestination(dest);
              }}
              className={`px-4 py-2 rounded-lg text-xs font-['Orbitron'] font-semibold tracking-wider transition-all ${
                selectedDestination === dest
                  ? 'bg-cyan-500 text-slate-950 shadow-md shadow-cyan-500/30'
                  : 'text-slate-400 hover:text-white hover:bg-slate-800'
              }`}
            >
              {dest === 'Both' ? 'ALL WORLDS' : dest.toUpperCase()}
            </button>
          ))}
        </div>
      </div>

      {/* Era Pills Bar */}
      <div className="flex items-center gap-2 mb-10 overflow-x-auto pb-2 scrollbar-none">
        {eras.map((era) => (
          <button
            key={era}
            onClick={() => {
              spaceAudio.playClick();
              setSelectedEra(era);
            }}
            className={`px-3.5 py-1.5 rounded-xl text-xs font-mono whitespace-nowrap transition-all ${
              selectedEra === era
                ? 'bg-cyan-950 text-cyan-300 border border-cyan-500/50 shadow-sm'
                : 'bg-slate-900/60 text-slate-400 border border-white/5 hover:text-slate-200 hover:bg-slate-800'
            }`}
          >
            {era}
          </button>
        ))}
      </div>

      {/* Vertical Timeline Nodes */}
      <div className="relative pl-6 md:pl-10 border-l-2 border-cyan-500/30 space-y-10 ml-4 sm:ml-8">
        {filteredMilestones.map((milestone, idx) => {
          const IconComponent = getIcon(milestone.iconType);
          const isMoon = milestone.destination === 'Moon';

          return (
            <div key={idx} className="relative group">
              {/* Timeline Beacon Node */}
              <div className="absolute -left-[35px] md:-left-[51px] top-1.5 w-6 h-6 md:w-8 md:h-8 rounded-full bg-slate-950 border-2 border-cyan-400 flex items-center justify-center text-cyan-400 group-hover:scale-125 group-hover:shadow-[0_0_15px_#38bdf8] transition-all duration-300">
                <IconComponent className="w-3 h-3 md:w-4 md:h-4" />
              </div>

              {/* Milestone Content Box */}
              <div className="p-6 rounded-2xl bg-slate-900/70 border border-white/10 group-hover:border-cyan-500/40 backdrop-blur-xl transition-all duration-300 group-hover:shadow-xl group-hover:shadow-cyan-950/40 space-y-3">
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2">
                  <div className="flex items-center gap-2">
                    <span className="font-['Orbitron'] font-black text-xl text-cyan-400">
                      {milestone.year}
                    </span>
                    <span className="text-xs font-mono text-slate-400">
                      ({milestone.dateStr})
                    </span>
                  </div>

                  <div className="flex items-center gap-2">
                    <span className={`px-2 py-0.5 rounded text-[10px] font-['Orbitron'] font-bold uppercase ${
                      isMoon ? 'bg-cyan-950/80 text-cyan-300 border border-cyan-500/30' : 'bg-orange-950/80 text-orange-400 border border-orange-500/30'
                    }`}>
                      {milestone.destination}
                    </span>
                    <span className="text-[10px] font-mono text-slate-500 bg-slate-950 px-2 py-0.5 rounded border border-white/5">
                      {milestone.era}
                    </span>
                  </div>
                </div>

                <h3 className="font-['Orbitron'] text-base sm:text-lg font-bold text-white group-hover:text-cyan-300 transition-colors">
                  {milestone.title}
                </h3>

                <p className="text-xs sm:text-sm text-slate-300 leading-relaxed font-sans">
                  {milestone.description}
                </p>

                <div className="pt-2 border-t border-white/5 flex flex-col sm:flex-row sm:items-center justify-between gap-2 text-xs font-mono">
                  <span className="text-slate-400">
                    Significance: <strong className="text-slate-200">{milestone.significance}</strong>
                  </span>

                  {milestone.machineId && onSelectMachineFromTimeline && (
                    <button
                      onClick={() => {
                        spaceAudio.playTelemetryPing();
                        onSelectMachineFromTimeline(milestone.machineId!);
                      }}
                      className="inline-flex items-center gap-1 text-cyan-400 hover:text-cyan-300 text-xs font-bold font-mono group/btn shrink-0"
                    >
                      <span>Inspect Machine Specs</span>
                      <ChevronRight className="w-3.5 h-3.5 group-hover/btn:translate-x-1 transition-transform" />
                    </button>
                  )}
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
};
