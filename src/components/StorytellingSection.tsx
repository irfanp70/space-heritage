import React, { useState } from 'react';
import { 
  Radio, 
  Volume2, 
  VolumeX, 
  Globe2, 
  Languages, 
  Sparkles, 
  Heart, 
  MapPin, 
  Clock, 
  ChevronRight,
  Quote
} from 'lucide-react';
import { MACHINE_STORIES, MachineStory } from '../data/storyData';
import { spaceAudio, speakNarration, stopNarration } from '../utils/audio';

interface StorytellingSectionProps {
  initialMachineId?: string;
}

export const StorytellingSection: React.FC<StorytellingSectionProps> = ({ initialMachineId }) => {
  const [selectedMachine, setSelectedMachine] = useState<MachineStory>(() => {
    if (initialMachineId) {
      const match = MACHINE_STORIES.find(m => m.id === initialMachineId);
      if (match) return match;
    }
    return MACHINE_STORIES[0];
  });

  const [language, setLanguage] = useState<'en' | 'ml'>('en');
  const [isSpeaking, setIsSpeaking] = useState(false);
  const [speakingParagraphIndex, setSpeakingParagraphIndex] = useState<number | null>(null);

  const currentContent = language === 'en' ? selectedMachine.english : selectedMachine.malayalam;

  const handleSelectMachine = (machine: MachineStory) => {
    spaceAudio.playTelemetryPing();
    stopNarration();
    setIsSpeaking(false);
    setSpeakingParagraphIndex(null);
    setSelectedMachine(machine);
  };

  const handleLanguageToggle = (lang: 'en' | 'ml') => {
    spaceAudio.playClick();
    stopNarration();
    setIsSpeaking(false);
    setSpeakingParagraphIndex(null);
    setLanguage(lang);
  };

  const handlePlayFullStory = () => {
    if (isSpeaking) {
      stopNarration();
      setIsSpeaking(false);
      setSpeakingParagraphIndex(null);
    } else {
      spaceAudio.playTelemetryPing();
      setIsSpeaking(true);
      // Combine title and paragraphs into full spoken text
      const fullText = `${currentContent.title}. ${currentContent.monologue.join(' ')}`;
      speakNarration(fullText, language, () => {
        setIsSpeaking(false);
        setSpeakingParagraphIndex(null);
      });
    }
  };

  return (
    <section id="stories" className="relative py-24 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
      {/* Background Ambience */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-cyan-950/10 to-transparent pointer-events-none"></div>

      {/* Section Header */}
      <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6 border-b border-white/10 pb-8">
        <div>
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-cyan-950/70 border border-cyan-500/30 text-cyan-300 text-xs font-mono mb-3">
            <Radio className="w-3.5 h-3.5 animate-pulse" />
            <span>SECTION 03 / FIRST-PERSON TESTIMONIALS</span>
          </div>
          <h2 className="font-['Orbitron'] font-black text-3xl sm:text-4xl lg:text-5xl text-white tracking-tight uppercase">
            IF THIS MACHINE <span className="text-cyan-400">COULD TALK</span>
          </h2>
          <p className="text-slate-400 max-w-2xl mt-2 text-sm sm:text-base">
            First-person narratives told from the perspective of the rovers and landers themselves. Simple, emotional, and scientifically accurate transmissions available in both English and Malayalam.
          </p>
        </div>

        {/* Dual Language Switcher */}
        <div className="flex items-center gap-2 bg-slate-900/90 p-1.5 rounded-xl border border-white/10 shadow-xl">
          <div className="flex items-center gap-1.5 px-2 text-slate-400 text-xs font-mono">
            <Languages className="w-4 h-4 text-cyan-400" />
            <span className="hidden sm:inline">LANGUAGE:</span>
          </div>
          <button
            onClick={() => handleLanguageToggle('en')}
            className={`px-3 py-1.5 rounded-lg text-xs font-bold font-mono transition-all ${
              language === 'en'
                ? 'bg-cyan-500 text-slate-950 shadow-md shadow-cyan-500/30'
                : 'text-slate-400 hover:text-white hover:bg-slate-800'
            }`}
          >
            ENGLISH
          </button>
          <button
            onClick={() => handleLanguageToggle('ml')}
            className={`px-3 py-1.5 rounded-lg text-xs font-bold font-['Noto_Sans_Malayalam'] transition-all ${
              language === 'ml'
                ? 'bg-amber-400 text-slate-950 shadow-md shadow-amber-400/30'
                : 'text-slate-400 hover:text-white hover:bg-slate-800'
            }`}
          >
            മലയാളം (MALAYALAM)
          </button>
        </div>
      </div>

      {/* Main Container */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
        
        {/* Machine Selector Column (Left) */}
        <div className="lg:col-span-4 space-y-3">
          <div className="text-xs font-mono text-slate-400 px-1 uppercase tracking-wider">
            SELECT A MACHINE VOICE
          </div>

          <div className="space-y-2.5">
            {MACHINE_STORIES.map((machine) => {
              const isSelected = selectedMachine.id === machine.id;
              const isMoon = machine.destination === 'Moon';

              return (
                <div
                  key={machine.id}
                  onClick={() => handleSelectMachine(machine)}
                  className={`p-4 rounded-2xl border transition-all cursor-pointer flex items-center gap-4 ${
                    isSelected
                      ? 'bg-slate-900 border-cyan-400/60 shadow-xl shadow-cyan-950/50 scale-[1.02]'
                      : 'bg-slate-900/50 border-white/5 hover:border-white/20 hover:bg-slate-900/80'
                  }`}
                >
                  <div className="relative w-12 h-12 rounded-xl overflow-hidden bg-slate-950 shrink-0 border border-white/10">
                    <img
                      src={machine.avatarUrl}
                      alt={machine.machineName}
                      className="w-full h-full object-cover"
                      loading="lazy"
                      onError={(e) => {
                        // Fallback to placeholder styling
                        (e.currentTarget as HTMLElement).style.display = 'none';
                      }}
                    />
                  </div>

                  <div className="flex-1 min-w-0">
                    <div className="flex items-center gap-2 mb-0.5">
                      <span className={`px-1.5 py-0.2 rounded text-[9px] font-['Orbitron'] font-bold uppercase ${
                        isMoon ? 'bg-cyan-950 text-cyan-300' : 'bg-orange-950 text-orange-400'
                      }`}>
                        {machine.destination}
                      </span>
                      <span className="text-[10px] font-mono text-slate-400 truncate">
                        {machine.lifeSpan}
                      </span>
                    </div>

                    <h4 className="font-['Orbitron'] font-bold text-sm text-white truncate">
                      {machine.machineName}
                    </h4>
                    <p className="text-[11px] text-slate-400 truncate">
                      {machine.codename}
                    </p>
                  </div>

                  <ChevronRight className={`w-4 h-4 shrink-0 transition-transform ${
                    isSelected ? 'text-cyan-400 translate-x-1' : 'text-slate-600'
                  }`} />
                </div>
              );
            })}
          </div>
        </div>

        {/* Narrative Stage Column (Right) */}
        <div className="lg:col-span-8 relative rounded-3xl bg-slate-900/90 border border-cyan-500/30 p-6 sm:p-10 backdrop-blur-2xl shadow-2xl shadow-cyan-950/40">
          
          {/* Telemetry Header Bar */}
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-6 border-b border-white/10">
            <div>
              <div className="flex items-center gap-2 text-xs font-mono text-cyan-400 mb-1">
                <span className="w-2 h-2 rounded-full bg-emerald-400 animate-ping"></span>
                <span>SIGNAL ESTABLISHED • DISTANCE: 220 MILLION KM</span>
              </div>
              <h3 className="font-['Orbitron'] text-xl sm:text-2xl font-black text-white">
                {selectedMachine.machineName}
              </h3>
              <p className="text-xs font-mono text-slate-400 mt-0.5">
                {selectedMachine.codename} • {selectedMachine.location}
              </p>
            </div>

            {/* Audio Voice Narrator Button */}
            <button
              onClick={handlePlayFullStory}
              className={`flex items-center gap-2.5 px-4 py-2.5 rounded-xl font-['Orbitron'] text-xs font-bold tracking-wider transition-all shadow-lg ${
                isSpeaking
                  ? 'bg-cyan-500 text-slate-950 shadow-cyan-500/40 animate-pulse'
                  : 'bg-slate-800 hover:bg-slate-700 text-cyan-300 border border-cyan-500/40'
              }`}
            >
              {isSpeaking ? <VolumeX className="w-4 h-4" /> : <Volume2 className="w-4 h-4" />}
              <span>{isSpeaking ? 'STOP AUDIO TRANSMISSION' : 'LISTEN TO MACHINE VOICE'}</span>
            </button>
          </div>

          {/* Audio Visualizer Bar when playing */}
          {isSpeaking && (
            <div className="my-4 p-3 rounded-xl bg-slate-950/70 border border-cyan-500/30 flex items-center justify-between">
              <span className="text-[11px] font-mono text-cyan-400 flex items-center gap-2">
                <Radio className="w-3.5 h-3.5 animate-pulse" />
                TRANSMITTING SPEECH SYNTHESIS ({language.toUpperCase()})
              </span>
              <div className="flex items-end gap-1 h-4">
                {[4, 12, 8, 16, 6, 14, 10, 16, 8, 12, 4].map((h, i) => (
                  <span
                    key={i}
                    className="w-1 bg-cyan-400 rounded-full animate-pulse"
                    style={{
                      height: `${h}px`,
                      animationDelay: `${i * 0.1}s`,
                      animationDuration: '0.6s'
                    }}
                  />
                ))}
              </div>
            </div>
          )}

          {/* Story Monologue Content */}
          <div className="py-6 space-y-6">
            {/* Story Title */}
            <div className="relative">
              <Quote className="absolute -top-3 -left-3 w-8 h-8 text-cyan-500/20 -z-0" />
              <h4 className={`text-xl sm:text-2xl font-bold text-cyan-300 relative z-10 ${
                language === 'ml' ? "font-['Noto_Sans_Malayalam'] leading-relaxed" : "font-['Orbitron']"
              }`}>
                "{currentContent.title}"
              </h4>
            </div>

            {/* Monologue Paragraphs */}
            <div className="space-y-4 text-slate-200 leading-relaxed font-sans text-sm sm:text-base">
              {currentContent.monologue.map((para, index) => (
                <p 
                  key={index} 
                  className={`transition-colors ${
                    language === 'ml' ? "font-['Noto_Sans_Malayalam'] leading-loose" : ""
                  }`}
                >
                  {para}
                </p>
              ))}
            </div>

            {/* Evocative Closing Thought Quote Box */}
            <div className="p-4 sm:p-5 rounded-2xl bg-slate-950/60 border border-cyan-500/20 relative overflow-hidden">
              <div className="absolute top-0 right-0 w-32 h-32 bg-cyan-500/5 rounded-full blur-2xl"></div>
              <div className="text-[10px] font-mono text-cyan-400 uppercase tracking-widest mb-1.5 flex items-center gap-1.5">
                <Heart className="w-3.5 h-3.5 text-cyan-400" />
                <span>EPILOGUE / ETERNAL MEMORY</span>
              </div>
              <p className={`italic text-slate-300 text-sm sm:text-base font-serif ${
                language === 'ml' ? "font-['Noto_Sans_Malayalam'] font-normal not-italic" : ""
              }`}>
                "{currentContent.closingThought}"
              </p>
            </div>
          </div>

          {/* Scientific Validation Footer Note */}
          <div className="pt-4 border-t border-white/10 flex flex-col sm:flex-row items-center justify-between text-[11px] font-mono text-slate-500 gap-2">
            <span>CORE SCIENTIFIC DISCOVERY: {selectedMachine.coreAchievement}</span>
            <span className="text-slate-400">100% NASA Archival Authenticity</span>
          </div>

        </div>

      </div>
    </section>
  );
};
