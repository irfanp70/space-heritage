import React, { useState, useEffect } from 'react';
import { 
  Radio, 
  Volume2, 
  VolumeX, 
  Headphones,
  Heart, 
  ChevronRight,
  Quote,
  Play,
  Pause,
  Square,
  Sliders,
  X,
  Check,
  Sparkles,
  ShieldCheck
} from 'lucide-react';
import { MACHINE_STORIES, MachineStory } from '../data/storyData';
import { spaceAudio, spaceNarrator, NarratorState, NarratorSettings } from '../utils/audio';

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

  const [narratorState, setNarratorState] = useState<NarratorState>('idle');
  const [activeParagraphIndex, setActiveParagraphIndex] = useState<number>(-1);
  const [isSettingsOpen, setIsSettingsOpen] = useState(false);
  const [settings, setSettings] = useState<NarratorSettings>(() => spaceNarrator.getSettings());
  const [availableVoices, setAvailableVoices] = useState<SpeechSynthesisVoice[]>([]);
  const [savedSettingsNotice, setSavedSettingsNotice] = useState(false);

  // Subscribe to narrator engine state changes and sentence progression
  useEffect(() => {
    const updateState = () => {
      setNarratorState(spaceNarrator.getState());
      setActiveParagraphIndex(spaceNarrator.getCurrentParagraphIndex());
      setAvailableVoices(spaceNarrator.getVoices());
      setSettings(spaceNarrator.getSettings());
    };

    updateState();
    const unsubscribe = spaceNarrator.subscribe(updateState);
    return () => unsubscribe();
  }, []);

  // Sync external selection when user clicks "Listen to Voice" on an artifact in museum
  useEffect(() => {
    if (initialMachineId) {
      const match = MACHINE_STORIES.find(m => m.id === initialMachineId);
      if (match) {
        setSelectedMachine(match);
        spaceNarrator.stop();
      }
    }
  }, [initialMachineId]);

  const currentContent = selectedMachine.english;

  const handleSelectMachine = (machine: MachineStory) => {
    spaceAudio.playTelemetryPing();
    spaceNarrator.stop();
    setSelectedMachine(machine);
  };

  // Play narration from the start
  const handlePlayStory = () => {
    spaceAudio.playTelemetryPing();
    spaceNarrator.playStory(
      currentContent.monologue,
      currentContent.title,
      currentContent.closingThought
    );
  };

  // Pause playback
  const handlePauseStory = () => {
    spaceAudio.playClick();
    spaceNarrator.pause();
  };

  // Resume playback from exact sentence
  const handleResumeStory = () => {
    spaceAudio.playTelemetryPing();
    spaceNarrator.resume();
  };

  // Stop playback and reset
  const handleStopStory = () => {
    spaceAudio.playClick();
    spaceNarrator.stop();
  };

  const handleSaveSettings = (newSettings: Partial<NarratorSettings>) => {
    spaceNarrator.updateSettings(newSettings);
    setSettings(spaceNarrator.getSettings());
    setSavedSettingsNotice(true);
    setTimeout(() => setSavedSettingsNotice(false), 2500);
  };

  const isPlaying = narratorState === 'playing';
  const isPaused = narratorState === 'paused';
  const isIdle = narratorState === 'idle';

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
            First-person narratives told from the perspective of the rovers and landers themselves. Natural, warm English documentary narration featuring realistic prosody and sentence-by-sentence breath pauses.
          </p>
        </div>

        {/* Voice Engine Controls & Settings Trigger */}
        <div className="flex items-center gap-3">
          <div className="flex items-center gap-2.5 bg-slate-900/90 px-4 py-2 rounded-xl border border-white/10 shadow-xl">
            <Headphones className="w-4 h-4 text-cyan-400" />
            <span className="text-xs font-mono text-cyan-300">
              {settings.cloudProvider !== 'none' && settings.cloudApiKey ? 'CLOUD TTS ACTIVE' : 'NATURAL NEURAL VOICE'}
            </span>
            <span className={`w-2 h-2 rounded-full ${isPlaying ? 'bg-emerald-400 animate-pulse' : isPaused ? 'bg-amber-400' : 'bg-slate-500'}`}></span>
          </div>

          <button
            onClick={() => {
              spaceAudio.playClick();
              setIsSettingsOpen(true);
            }}
            className="p-2.5 rounded-xl bg-slate-900/90 hover:bg-slate-800 text-slate-300 hover:text-cyan-400 border border-white/10 transition-colors shadow-lg"
            title="Narrator Voice & Pitch Settings"
          >
            <Sliders className="w-4 h-4" />
          </button>
        </div>
      </div>

      {/* Main Container */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
        
        {/* Machine Selector Column (Left) */}
        <div className="lg:col-span-4 space-y-3">
          <div className="text-xs font-mono text-slate-400 px-1 uppercase tracking-wider flex items-center justify-between">
            <span>SELECT A MACHINE VOICE</span>
            <span className="text-cyan-500 font-bold">{MACHINE_STORIES.length} ARTIFACTS</span>
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
                <span className={`w-2 h-2 rounded-full ${isPlaying ? 'bg-emerald-400 animate-ping' : isPaused ? 'bg-amber-400' : 'bg-slate-500'}`}></span>
                <span>
                  {isPlaying ? 'VOICE SYNTHESIS STREAMING • 220M KM' : isPaused ? 'TRANSMISSION PAUSED' : 'AUDIO LINK STANDBY'}
                </span>
              </div>
              <h3 className="font-['Orbitron'] text-xl sm:text-2xl font-black text-white">
                {selectedMachine.machineName}
              </h3>
              <p className="text-xs font-mono text-slate-400 mt-0.5">
                {selectedMachine.codename} • {selectedMachine.location}
              </p>
            </div>

            {/* Play, Pause, Resume, Stop Controller Console */}
            <div className="flex items-center gap-2 flex-wrap">
              {isIdle && (
                <button
                  onClick={handlePlayStory}
                  className="flex items-center gap-2 px-5 py-2.5 rounded-xl bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-400 hover:to-blue-500 text-slate-950 font-['Orbitron'] text-xs font-bold tracking-wider transition-all shadow-lg shadow-cyan-500/30 active:scale-95"
                >
                  <Play className="w-4 h-4 fill-slate-950" />
                  <span>LISTEN TO MACHINE VOICE</span>
                </button>
              )}

              {isPlaying && (
                <>
                  <button
                    onClick={handlePauseStory}
                    className="flex items-center gap-2 px-4 py-2.5 rounded-xl bg-amber-500 hover:bg-amber-400 text-slate-950 font-['Orbitron'] text-xs font-bold tracking-wider transition-all shadow-lg shadow-amber-500/30 active:scale-95"
                  >
                    <Pause className="w-4 h-4 fill-slate-950" />
                    <span>PAUSE</span>
                  </button>
                  <button
                    onClick={handleStopStory}
                    className="flex items-center gap-2 px-4 py-2.5 rounded-xl bg-rose-950/80 hover:bg-rose-900 text-rose-300 border border-rose-500/40 font-['Orbitron'] text-xs font-bold tracking-wider transition-all active:scale-95"
                  >
                    <Square className="w-3.5 h-3.5 fill-rose-300" />
                    <span>STOP</span>
                  </button>
                </>
              )}

              {isPaused && (
                <>
                  <button
                    onClick={handleResumeStory}
                    className="flex items-center gap-2 px-4 py-2.5 rounded-xl bg-emerald-500 hover:bg-emerald-400 text-slate-950 font-['Orbitron'] text-xs font-bold tracking-wider transition-all shadow-lg shadow-emerald-500/30 active:scale-95"
                  >
                    <Play className="w-4 h-4 fill-slate-950" />
                    <span>RESUME</span>
                  </button>
                  <button
                    onClick={handleStopStory}
                    className="flex items-center gap-2 px-4 py-2.5 rounded-xl bg-slate-800 hover:bg-slate-700 text-slate-300 border border-white/10 font-['Orbitron'] text-xs font-bold tracking-wider transition-all active:scale-95"
                  >
                    <Square className="w-3.5 h-3.5 fill-slate-300" />
                    <span>RESET</span>
                  </button>
                </>
              )}
            </div>
          </div>

          {/* Audio Visualizer Bar */}
          <div className="my-4 p-3 rounded-xl bg-slate-950/70 border border-cyan-500/30 flex items-center justify-between">
            <span className="text-[11px] font-mono flex items-center gap-2">
              <Radio className={`w-3.5 h-3.5 ${isPlaying ? 'text-cyan-400 animate-pulse' : isPaused ? 'text-amber-400' : 'text-slate-500'}`} />
              <span className={isPlaying ? 'text-cyan-300' : isPaused ? 'text-amber-300' : 'text-slate-400'}>
                {isPlaying 
                  ? 'WARM DOCUMENTARY NARRATOR ACTIVE • SENTENCE PACING' 
                  : isPaused 
                  ? 'NARRATION PAUSED • READY TO RESUME' 
                  : 'NARRATOR READY • CLICK LISTEN TO COMMENCE AUDIO'}
              </span>
            </span>

            {/* Equalizer Frequency Bars */}
            <div className="flex items-end gap-1 h-4">
              {[4, 12, 8, 16, 6, 14, 10, 16, 8, 12, 4].map((h, i) => (
                <span
                  key={i}
                  className={`w-1 rounded-full transition-all duration-300 ${
                    isPlaying 
                      ? 'bg-cyan-400 animate-pulse' 
                      : isPaused 
                      ? 'bg-amber-400 opacity-60' 
                      : 'bg-slate-700 opacity-30'
                  }`}
                  style={{
                    height: isPlaying ? `${h}px` : isPaused ? '6px' : '3px',
                    animationDelay: `${i * 0.08}s`,
                    animationDuration: '0.6s'
                  }}
                />
              ))}
            </div>
          </div>

          {/* Story Monologue Content */}
          <div className="py-6 space-y-6">
            {/* Story Title */}
            <div className="relative">
              <Quote className="absolute -top-3 -left-3 w-8 h-8 text-cyan-500/20 -z-0" />
              <h4 className="text-xl sm:text-2xl font-bold text-cyan-300 relative z-10 font-['Orbitron']">
                "{currentContent.title}"
              </h4>
            </div>

            {/* Monologue Paragraphs with Live Telemetry Active Readout */}
            <div className="space-y-4 font-sans text-sm sm:text-base leading-relaxed">
              {currentContent.monologue.map((para, index) => {
                const isCurrentParagraph = isPlaying && activeParagraphIndex === index;

                return (
                  <p 
                    key={index} 
                    className={`p-3 -mx-3 rounded-xl transition-all duration-500 ${
                      isCurrentParagraph
                        ? 'bg-cyan-950/40 border-l-2 border-cyan-400 text-white shadow-lg shadow-cyan-950/40'
                        : 'text-slate-300 hover:text-slate-100'
                    }`}
                  >
                    {para}
                  </p>
                );
              })}
            </div>

            {/* Evocative Closing Thought Quote Box */}
            <div className={`p-4 sm:p-5 rounded-2xl relative overflow-hidden transition-all duration-500 border ${
              activeParagraphIndex === 999 && isPlaying
                ? 'bg-cyan-950/60 border-cyan-400 shadow-xl shadow-cyan-900/50 scale-[1.01]'
                : 'bg-slate-950/60 border-cyan-500/20'
            }`}>
              <div className="absolute top-0 right-0 w-32 h-32 bg-cyan-500/5 rounded-full blur-2xl"></div>
              <div className="text-[10px] font-mono text-cyan-400 uppercase tracking-widest mb-1.5 flex items-center gap-1.5">
                <Heart className="w-3.5 h-3.5 text-cyan-400" />
                <span>EPILOGUE / ETERNAL MEMORY</span>
              </div>
              <p className="italic text-slate-300 text-sm sm:text-base font-serif">
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

      {/* Voice & TTS Settings Modal */}
      {isSettingsOpen && (
        <div 
          className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/80 backdrop-blur-xl animate-in fade-in duration-200"
          onClick={() => setIsSettingsOpen(false)}
        >
          <div 
            className="w-full max-w-xl rounded-3xl bg-slate-900 border border-cyan-500/30 shadow-2xl shadow-cyan-950/60 p-6 sm:p-8 space-y-6 max-h-[90vh] overflow-y-auto"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Modal Header */}
            <div className="flex items-center justify-between pb-4 border-b border-white/10">
              <div className="flex items-center gap-2.5">
                <Sliders className="w-5 h-5 text-cyan-400" />
                <h3 className="font-['Orbitron'] text-lg font-bold text-white uppercase">
                  DOCUMENTARY NARRATOR SETTINGS
                </h3>
              </div>
              <button
                onClick={() => setIsSettingsOpen(false)}
                className="p-1.5 rounded-lg text-slate-400 hover:text-white hover:bg-slate-800"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            {/* Saved Notification Banner */}
            {savedSettingsNotice && (
              <div className="p-3 rounded-xl bg-emerald-950/60 border border-emerald-500/40 text-emerald-300 text-xs font-mono flex items-center gap-2">
                <Check className="w-4 h-4 text-emerald-400" />
                <span>Voice settings updated and saved to local storage!</span>
              </div>
            )}

            {/* 1. Voice Selection */}
            <div className="space-y-2">
              <label className="text-xs font-mono text-slate-300 uppercase block font-semibold">
                Select Narrator Voice Profile
              </label>
              <select
                value={settings.voiceURI || ''}
                onChange={(e) => handleSaveSettings({ voiceURI: e.target.value || null })}
                className="w-full p-3 rounded-xl bg-slate-950 border border-white/10 text-white text-xs font-mono focus:outline-none focus:border-cyan-400"
              >
                <option value="">Auto-Detect Warmest Natural Voice (Recommended)</option>
                {availableVoices.map((v) => (
                  <option key={v.voiceURI} value={v.voiceURI}>
                    {v.name} ({v.lang})
                  </option>
                ))}
              </select>
              <p className="text-[11px] text-slate-500 font-sans">
                Prioritizes Microsoft Natural, Google Neural, or Apple Enhanced voices when available on your operating system.
              </p>
            </div>

            {/* 2. Narration Speaking Pace */}
            <div className="space-y-2">
              <div className="flex items-center justify-between">
                <label className="text-xs font-mono text-slate-300 uppercase block font-semibold">
                  Speaking Rhythm & Speed
                </label>
                <span className="text-xs font-mono text-cyan-400 font-bold">{settings.rate}x</span>
              </div>
              <div className="grid grid-cols-4 gap-2">
                {[
                  { label: '0.85x Cinematic', value: 0.85 },
                  { label: '0.90x Paced', value: 0.90 },
                  { label: '1.0x Normal', value: 1.0 },
                  { label: '1.10x Brisk', value: 1.10 }
                ].map((s) => (
                  <button
                    key={s.value}
                    onClick={() => handleSaveSettings({ rate: s.value })}
                    className={`py-2 px-2 rounded-xl text-xs font-mono font-medium border transition-all ${
                      settings.rate === s.value
                        ? 'bg-cyan-500 text-slate-950 border-cyan-400 font-bold shadow-md shadow-cyan-500/20'
                        : 'bg-slate-950 text-slate-400 border-white/10 hover:text-white'
                    }`}
                  >
                    {s.label}
                  </button>
                ))}
              </div>
            </div>

            {/* 3. Pitch / Timbre */}
            <div className="space-y-2">
              <div className="flex items-center justify-between">
                <label className="text-xs font-mono text-slate-300 uppercase block font-semibold">
                  Voice Timbre & Warmth
                </label>
                <span className="text-xs font-mono text-cyan-400 font-bold">{settings.pitch}</span>
              </div>
              <div className="grid grid-cols-3 gap-2">
                {[
                  { label: 'Deep (0.92)', value: 0.92 },
                  { label: 'Warm (0.96)', value: 0.96 },
                  { label: 'Crisp (1.00)', value: 1.0 }
                ].map((p) => (
                  <button
                    key={p.value}
                    onClick={() => handleSaveSettings({ pitch: p.value })}
                    className={`py-2 px-2 rounded-xl text-xs font-mono font-medium border transition-all ${
                      settings.pitch === p.value
                        ? 'bg-cyan-500 text-slate-950 border-cyan-400 font-bold shadow-md shadow-cyan-500/20'
                        : 'bg-slate-950 text-slate-400 border-white/10 hover:text-white'
                    }`}
                  >
                    {p.label}
                  </button>
                ))}
              </div>
            </div>

            {/* 4. Optional Cloud TTS Provider */}
            <div className="pt-4 border-t border-white/10 space-y-3">
              <div className="flex items-center justify-between">
                <div>
                  <div className="text-xs font-mono text-slate-200 font-bold uppercase flex items-center gap-1.5">
                    <Sparkles className="w-3.5 h-3.5 text-cyan-400" />
                    <span>Optional Cloud TTS Integration</span>
                  </div>
                  <p className="text-[11px] text-slate-500">
                    Use your own OpenAI or ElevenLabs key for studio-grade generative narration.
                  </p>
                </div>
              </div>

              {/* Provider Selection */}
              <div className="grid grid-cols-3 gap-2">
                {[
                  { id: 'none', label: 'Browser Neural (Free)' },
                  { id: 'openai', label: 'OpenAI TTS' },
                  { id: 'elevenlabs', label: 'ElevenLabs' }
                ].map((prov) => (
                  <button
                    key={prov.id}
                    onClick={() => handleSaveSettings({ cloudProvider: prov.id as 'none' | 'openai' | 'elevenlabs' })}
                    className={`py-2 px-2 rounded-xl text-xs font-mono border transition-all text-center ${
                      settings.cloudProvider === prov.id
                        ? 'bg-cyan-950 text-cyan-300 border-cyan-400 shadow-sm font-bold'
                        : 'bg-slate-950 text-slate-400 border-white/10 hover:text-white'
                    }`}
                  >
                    {prov.label}
                  </button>
                ))}
              </div>

              {/* API Key Input (Only if cloud provider is active) */}
              {settings.cloudProvider !== 'none' && (
                <div className="space-y-3 p-3.5 rounded-2xl bg-slate-950 border border-cyan-500/30">
                  <div className="space-y-1">
                    <label className="text-[11px] font-mono text-cyan-400 block font-semibold">
                      {settings.cloudProvider === 'openai' ? 'OpenAI API Key (sk-...)' : 'ElevenLabs API Key'}
                    </label>
                    <input
                      type="password"
                      value={settings.cloudApiKey}
                      onChange={(e) => handleSaveSettings({ cloudApiKey: e.target.value })}
                      placeholder={settings.cloudProvider === 'openai' ? 'sk-...' : 'xi-api-key...'}
                      className="w-full p-2.5 rounded-lg bg-slate-900 border border-white/10 text-white text-xs font-mono focus:outline-none focus:border-cyan-400"
                    />
                  </div>

                  <div className="space-y-1">
                    <label className="text-[11px] font-mono text-slate-400 block">
                      {settings.cloudProvider === 'openai' ? 'Voice Model (e.g., onyx, echo, fable)' : 'Voice ID'}
                    </label>
                    <input
                      type="text"
                      value={settings.cloudVoice}
                      onChange={(e) => handleSaveSettings({ cloudVoice: e.target.value })}
                      placeholder={settings.cloudProvider === 'openai' ? 'onyx (deep documentary)' : 'voice_id...'}
                      className="w-full p-2.5 rounded-lg bg-slate-900 border border-white/10 text-white text-xs font-mono focus:outline-none focus:border-cyan-400"
                    />
                  </div>

                  {/* Security Disclosure Notice */}
                  <div className="flex items-start gap-2 text-[10px] font-mono text-slate-400 pt-1">
                    <ShieldCheck className="w-3.5 h-3.5 text-emerald-400 shrink-0 mt-0.5" />
                    <span>Your key is stored strictly in your local browser storage and is never exposed or uploaded.</span>
                  </div>
                </div>
              )}
            </div>

            {/* Footer Close Button */}
            <div className="pt-2 flex justify-end">
              <button
                onClick={() => setIsSettingsOpen(false)}
                className="px-6 py-2.5 rounded-xl bg-cyan-500 hover:bg-cyan-400 text-slate-950 font-['Orbitron'] text-xs font-bold transition-all shadow-md shadow-cyan-500/20"
              >
                DONE
              </button>
            </div>

          </div>
        </div>
      )}

    </section>
  );
};
