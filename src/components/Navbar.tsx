import React, { useState, useEffect } from 'react';
import { 
  Rocket, 
  Search, 
  Volume2, 
  VolumeX, 
  Menu, 
  X, 
  Compass, 
  Radio, 
  Layers, 
  Award, 
  HelpCircle, 
  BookOpen,
  Calendar,
  Sparkles
} from 'lucide-react';
import { spaceAudio } from '../utils/audio';

interface NavbarProps {
  onOpenSearch: () => void;
  activeSection: string;
}

export const Navbar: React.FC<NavbarProps> = ({ onOpenSearch, activeSection }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [isAudioMuted, setIsAudioMuted] = useState(false);
  const [earthTime, setEarthTime] = useState('');
  const [marsSol, setMarsSol] = useState('');

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 40);
    };
    window.addEventListener('scroll', handleScroll);

    // Live clocks
    const updateClocks = () => {
      const now = new Date();
      setEarthTime(now.toUTCString().slice(17, 25) + ' UTC');
      // Approximate Mars Sol clock simulation based on Perseverance sol count
      const marsSolNumber = 2038 + Math.floor((now.getTime() - 1763000000000) / (88775244));
      setMarsSol(`SOL ${marsSolNumber}`);
    };
    updateClocks();
    const interval = setInterval(updateClocks, 1000);

    return () => {
      window.removeEventListener('scroll', handleScroll);
      clearInterval(interval);
    };
  }, []);

  const handleAudioToggle = () => {
    const muted = spaceAudio.toggleMute();
    setIsAudioMuted(muted);
    if (!muted) {
      spaceAudio.startAmbientHum();
      spaceAudio.playTelemetryPing();
    } else {
      spaceAudio.stopAmbientHum();
    }
  };

  const navLinks = [
    { name: 'Museum', href: '#museum', icon: Compass },
    { name: '3D Maps', href: '#maps', icon: Layers },
    { name: 'Voices', href: '#stories', icon: Radio },
    { name: 'Before & After', href: '#gallery', icon: Sparkles },
    { name: 'Apollo Archive', href: '#apollo', icon: Rocket },
    { name: 'Quiz', href: '#quiz', icon: HelpCircle },
    { name: 'Story Cards', href: '#cards', icon: Award },
    { name: '2026 Updates', href: '#updates', icon: Calendar },
    { name: 'Timeline', href: '#timeline', icon: Compass },
    { name: 'Sources', href: '#references', icon: BookOpen }
  ];

  return (
    <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
      isScrolled ? 'bg-slate-950/85 backdrop-blur-xl border-b border-cyan-500/20 shadow-2xl shadow-cyan-950/40' : 'bg-gradient-to-b from-slate-950/90 to-transparent'
    }`}>
      {/* Top micro-bar: Space Apps 2026 header and clocks */}
      <div className="hidden lg:flex items-center justify-between px-6 py-1 bg-slate-950/60 border-b border-white/5 text-[11px] font-mono text-slate-400">
        <div className="flex items-center gap-3">
          <span className="inline-flex items-center gap-1.5 text-cyan-400 font-semibold tracking-wider">
            <span className="w-1.5 h-1.5 rounded-full bg-cyan-400 animate-pulse"></span>
            NASA SPACE APPS CHALLENGE 2026
          </span>
          <span className="text-slate-600">|</span>
          <span className="text-slate-300">PROJECT: SPACE HERITAGE</span>
          <span className="text-slate-500 text-[10px]">THE FORGOTTEN MACHINES OF THE MOON & MARS</span>
        </div>
        <div className="flex items-center gap-4 text-slate-300">
          <div className="flex items-center gap-1.5">
            <span className="text-cyan-400">EARTH:</span>
            <span className="text-slate-100">{earthTime || '12:00:00 UTC'}</span>
          </div>
          <div className="flex items-center gap-1.5">
            <span className="text-amber-400">MARS JEZERO:</span>
            <span className="text-amber-200 font-bold">{marsSol}</span>
          </div>
          <div className="flex items-center gap-1.5 text-emerald-400">
            <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-ping"></span>
            TELEMETRY LINK: STABLE
          </div>
        </div>
      </div>

      {/* Main navigation bar */}
      <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
        {/* Brand Logo */}
        <a 
          href="#home" 
          onClick={() => spaceAudio.playClick()}
          className="flex items-center gap-3 group"
        >
          <div className="relative w-10 h-10 rounded-xl bg-gradient-to-br from-cyan-600 via-blue-700 to-indigo-900 p-0.5 shadow-lg shadow-cyan-500/20 group-hover:shadow-cyan-400/40 transition-all duration-300">
            <div className="w-full h-full bg-slate-950 rounded-[10px] flex items-center justify-center overflow-hidden">
              <Rocket className="w-5 h-5 text-cyan-400 group-hover:scale-110 group-hover:rotate-6 transition-transform duration-300" />
            </div>
            <div className="absolute -inset-0.5 rounded-xl bg-cyan-500 opacity-20 group-hover:opacity-60 blur-sm transition-opacity"></div>
          </div>
          <div>
            <div className="flex items-center gap-2">
              <span className="font-['Orbitron'] font-black tracking-wider text-base sm:text-lg text-white group-hover:text-cyan-300 transition-colors">
                SPACE<span className="text-cyan-400">HERITAGE</span>
              </span>
              <span className="text-[10px] font-mono px-1.5 py-0.5 rounded bg-cyan-950/70 text-cyan-300 border border-cyan-500/30">
                2026
              </span>
            </div>
            <p className="text-[10px] text-slate-400 tracking-tight hidden sm:block">
              Moon & Mars Exploratory Museum
            </p>
          </div>
        </a>

        {/* Desktop Nav Links */}
        <div className="hidden xl:flex items-center gap-1">
          {navLinks.map((link) => {
            const Icon = link.icon;
            const isActive = activeSection === link.href.substring(1);
            return (
              <a
                key={link.name}
                href={link.href}
                onClick={() => spaceAudio.playClick()}
                className={`flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-medium transition-all duration-200 ${
                  isActive
                    ? 'text-cyan-300 bg-cyan-950/60 border border-cyan-500/30 shadow-sm shadow-cyan-500/20'
                    : 'text-slate-300 hover:text-white hover:bg-slate-800/50'
                }`}
              >
                <Icon className={`w-3.5 h-3.5 ${isActive ? 'text-cyan-400' : 'text-slate-400'}`} />
                <span>{link.name}</span>
              </a>
            );
          })}
        </div>

        {/* Action Controls: Search & Audio */}
        <div className="flex items-center gap-2 sm:gap-3">
          <button
            onClick={() => {
              spaceAudio.playClick();
              onOpenSearch();
            }}
            className="flex items-center gap-2 px-3 py-1.5 rounded-lg bg-slate-900/80 hover:bg-slate-800 border border-white/10 hover:border-cyan-500/40 text-xs text-slate-300 hover:text-white transition-all shadow-sm group"
            title="Search Artifacts, Missions & Sites (Ctrl+K)"
          >
            <Search className="w-3.5 h-3.5 text-cyan-400 group-hover:scale-110 transition-transform" />
            <span className="hidden sm:inline">Search</span>
            <kbd className="hidden md:inline-block px-1.5 py-0.5 text-[9px] font-mono rounded bg-slate-800 text-slate-400 border border-white/10">
              Ctrl K
            </kbd>
          </button>

          <button
            onClick={handleAudioToggle}
            className={`p-2 rounded-lg border transition-all ${
              isAudioMuted 
                ? 'bg-slate-900/80 text-slate-500 border-white/10 hover:text-slate-300' 
                : 'bg-cyan-950/60 text-cyan-300 border-cyan-500/40 shadow-sm shadow-cyan-500/30 animate-pulse'
            }`}
            title={isAudioMuted ? "Unmute Deep Space Audio" : "Mute Deep Space Audio"}
          >
            {isAudioMuted ? <VolumeX className="w-4 h-4" /> : <Volume2 className="w-4 h-4" />}
          </button>

          {/* Mobile menu trigger */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="p-2 rounded-lg bg-slate-900/80 text-slate-300 hover:text-white border border-white/10 xl:hidden"
            aria-label="Toggle navigation"
          >
            {mobileMenuOpen ? <X className="w-5 h-5 text-cyan-400" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>
      </nav>

      {/* Mobile Menu Drawer */}
      {mobileMenuOpen && (
        <div className="xl:hidden bg-slate-950/95 backdrop-blur-2xl border-b border-cyan-500/20 px-4 py-4 space-y-2 animate-in fade-in slide-in-from-top-4 duration-200">
          <div className="grid grid-cols-2 gap-2 pb-2">
            {navLinks.map((link) => {
              const Icon = link.icon;
              return (
                <a
                  key={link.name}
                  href={link.href}
                  onClick={() => {
                    spaceAudio.playClick();
                    setMobileMenuOpen(false);
                  }}
                  className="flex items-center gap-2 p-2.5 rounded-lg text-xs font-medium text-slate-200 hover:text-cyan-300 hover:bg-slate-800/70 border border-white/5 transition-colors"
                >
                  <Icon className="w-4 h-4 text-cyan-400" />
                  <span>{link.name}</span>
                </a>
              );
            })}
          </div>
          <div className="pt-2 border-t border-white/10 flex items-center justify-between text-[11px] font-mono text-slate-400 px-1">
            <span>NASA Space Apps 2026</span>
            <span className="text-amber-300">{marsSol}</span>
          </div>
        </div>
      )}
    </header>
  );
};
