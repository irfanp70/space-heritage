import React, { useState, useEffect, useRef } from 'react';
import { 
  Rocket, 
  Compass, 
  ChevronDown, 
  Activity, 
  MapPin, 
  Clock, 
  Sparkles, 
  Layers,
  ArrowRight
} from 'lucide-react';
import { spaceAudio } from '../utils/audio';

interface HeroProps {
  onSelectDestination: (dest: 'Moon' | 'Mars') => void;
}

export const Hero: React.FC<HeroProps> = ({ onSelectDestination }) => {
  const [activePlanet, setActivePlanet] = useState<'Both' | 'Moon' | 'Mars'>('Both');
  const canvasRef = useRef<HTMLCanvasElement | null>(null);

  // Dynamic starry space canvas with shooting stars
  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    let animationFrameId: number;
    let width = (canvas.width = window.innerWidth);
    let height = (canvas.height = window.innerHeight);

    const handleResize = () => {
      if (!canvas) return;
      width = canvas.width = window.innerWidth;
      height = canvas.height = window.innerHeight;
    };
    window.addEventListener('resize', handleResize);

    // Stars
    interface Star {
      x: number;
      y: number;
      radius: number;
      alpha: number;
      speed: number;
    }
    const stars: Star[] = Array.from({ length: 180 }, () => ({
      x: Math.random() * width,
      y: Math.random() * height,
      radius: Math.random() * 1.5 + 0.3,
      alpha: Math.random() * 0.8 + 0.2,
      speed: Math.random() * 0.02 + 0.005
    }));

    // Shooting meteor
    interface Meteor {
      x: number;
      y: number;
      len: number;
      speed: number;
      angle: number;
      active: boolean;
      opacity: number;
    }
    const meteor: Meteor = {
      x: 0,
      y: 0,
      len: 120,
      speed: 12,
      angle: Math.PI / 4,
      active: false,
      opacity: 0
    };

    let meteorTimer = 0;

    const render = () => {
      ctx.clearRect(0, 0, width, height);

      // Draw starry sky
      stars.forEach((star) => {
        star.alpha += (Math.random() - 0.5) * 0.04;
        if (star.alpha < 0.1) star.alpha = 0.1;
        if (star.alpha > 0.95) star.alpha = 0.95;

        ctx.beginPath();
        ctx.arc(star.x, star.y, star.radius, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(255, 255, 255, ${star.alpha})`;
        ctx.fill();
      });

      // Handle shooting meteor
      meteorTimer++;
      if (meteorTimer > 240 && !meteor.active && Math.random() < 0.03) {
        meteor.x = Math.random() * width * 0.8;
        meteor.y = Math.random() * height * 0.3;
        meteor.active = true;
        meteor.opacity = 1;
        meteorTimer = 0;
      }

      if (meteor.active) {
        meteor.x += Math.cos(meteor.angle) * meteor.speed;
        meteor.y += Math.sin(meteor.angle) * meteor.speed;
        meteor.opacity -= 0.015;

        const tailX = meteor.x - Math.cos(meteor.angle) * meteor.len;
        const tailY = meteor.y - Math.sin(meteor.angle) * meteor.len;

        const grad = ctx.createLinearGradient(tailX, tailY, meteor.x, meteor.y);
        grad.addColorStop(0, 'rgba(56, 189, 248, 0)');
        grad.addColorStop(1, `rgba(255, 255, 255, ${meteor.opacity})`);

        ctx.strokeStyle = grad;
        ctx.lineWidth = 1.8;
        ctx.beginPath();
        ctx.moveTo(tailX, tailY);
        ctx.lineTo(meteor.x, meteor.y);
        ctx.stroke();

        if (meteor.opacity <= 0 || meteor.x > width || meteor.y > height) {
          meteor.active = false;
        }
      }

      animationFrameId = requestAnimationFrame(render);
    };

    render();

    return () => {
      window.removeEventListener('resize', handleResize);
      cancelAnimationFrame(animationFrameId);
    };
  }, []);

  const handleDestinationClick = (dest: 'Moon' | 'Mars') => {
    spaceAudio.playTelemetryPing();
    setActivePlanet(dest);
    onSelectDestination(dest);
    const element = document.getElementById('museum');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="home" className="relative min-h-screen flex flex-col justify-between overflow-hidden pt-20">
      {/* Canvas Starfield */}
      <canvas 
        ref={canvasRef} 
        className="absolute inset-0 z-0 pointer-events-none"
      />

      {/* Atmospheric Background Gradients */}
      <div className="absolute inset-0 bg-radial from-slate-900/40 via-[#030712]/90 to-[#030712] z-0 pointer-events-none"></div>

      {/* Dual Planetary Glow Elements */}
      <div 
        className={`absolute -top-24 -left-24 w-96 h-96 rounded-full bg-cyan-600/15 blur-[120px] transition-opacity duration-700 pointer-events-none ${
          activePlanet === 'Mars' ? 'opacity-20' : 'opacity-100'
        }`}
      />
      <div 
        className={`absolute -bottom-24 -right-24 w-96 h-96 rounded-full bg-orange-600/15 blur-[120px] transition-opacity duration-700 pointer-events-none ${
          activePlanet === 'Moon' ? 'opacity-20' : 'opacity-100'
        }`}
      />

      {/* Main Hero Container */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-8 md:pt-16 pb-12 flex-1 flex flex-col justify-center items-center text-center">
        
        {/* Challenge Badges */}
        <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-slate-900/90 border border-cyan-500/30 text-cyan-300 text-xs font-mono tracking-wider mb-6 shadow-lg shadow-cyan-950/50 backdrop-blur-md">
          <Sparkles className="w-3.5 h-3.5 text-cyan-400 animate-spin" style={{ animationDuration: '6s' }} />
          <span>NASA SPACE APPS CHALLENGE 2026</span>
          <span className="text-slate-600">|</span>
          <span className="text-slate-300 font-semibold">SPACE HERITAGE INITIATIVE</span>
        </div>

        {/* Grand Headline */}
        <h1 className="font-['Orbitron'] font-black text-3xl sm:text-5xl md:text-6xl lg:text-7xl text-white tracking-tight uppercase max-w-5xl leading-[1.1] mb-6">
          "THE MACHINES MAY BE SILENT, BUT THEIR{' '}
          <span className="bg-gradient-to-r from-cyan-400 via-sky-300 to-indigo-400 bg-clip-text text-transparent drop-shadow-[0_0_35px_rgba(56,189,248,0.4)]">
            STORIES LIVE FOREVER.
          </span>"
        </h1>

        {/* Subtitle & Mission Statement */}
        <p className="max-w-3xl text-sm sm:text-base md:text-lg text-slate-300 leading-relaxed font-sans mb-10 font-normal">
          From the gold-wrapped Apollo descent stages resting undisturbed in the Sea of Tranquility to the solitary tracks of Opportunity across Endeavour Crater — uncover the forgotten robots, landers, and instruments that pioneered human spaceflight and remain on the Moon and Mars as eternal monuments of human curiosity.
        </p>

        {/* Interactive Exploration Buttons */}
        <div className="flex flex-col sm:flex-row items-center gap-4 sm:gap-6 mb-14 w-full justify-center max-w-md">
          {/* Explore The Moon Button */}
          <button
            onClick={() => handleDestinationClick('Moon')}
            className="w-full sm:w-auto group relative inline-flex items-center justify-center gap-3 px-8 py-4 rounded-xl bg-gradient-to-r from-slate-900 via-slate-800 to-slate-900 text-white font-['Orbitron'] font-bold text-sm tracking-wider border border-cyan-400/50 shadow-xl shadow-cyan-950/60 hover:shadow-cyan-400/30 hover:border-cyan-300 transition-all duration-300 transform hover:-translate-y-0.5 active:translate-y-0 overflow-hidden"
          >
            <div className="absolute inset-0 bg-gradient-to-r from-cyan-500/20 to-blue-500/20 opacity-0 group-hover:opacity-100 transition-opacity"></div>
            <span className="w-2.5 h-2.5 rounded-full bg-cyan-400 shadow-[0_0_8px_#38bdf8]"></span>
            <span>EXPLORE THE MOON</span>
            <ArrowRight className="w-4 h-4 text-cyan-400 group-hover:translate-x-1 transition-transform" />
          </button>

          {/* Explore Mars Button */}
          <button
            onClick={() => handleDestinationClick('Mars')}
            className="w-full sm:w-auto group relative inline-flex items-center justify-center gap-3 px-8 py-4 rounded-xl bg-gradient-to-r from-stone-900 via-amber-950 to-stone-900 text-white font-['Orbitron'] font-bold text-sm tracking-wider border border-orange-500/50 shadow-xl shadow-orange-950/60 hover:shadow-orange-400/30 hover:border-orange-300 transition-all duration-300 transform hover:-translate-y-0.5 active:translate-y-0 overflow-hidden"
          >
            <div className="absolute inset-0 bg-gradient-to-r from-orange-500/20 to-amber-500/20 opacity-0 group-hover:opacity-100 transition-opacity"></div>
            <span className="w-2.5 h-2.5 rounded-full bg-orange-400 shadow-[0_0_8px_#f97316]"></span>
            <span>EXPLORE MARS</span>
            <ArrowRight className="w-4 h-4 text-orange-400 group-hover:translate-x-1 transition-transform" />
          </button>
        </div>

        {/* Live Telemetry HUD Bar */}
        <div className="w-full max-w-5xl grid grid-cols-2 md:grid-cols-4 gap-3 sm:gap-4 p-4 rounded-2xl bg-slate-950/70 backdrop-blur-xl border border-white/10 shadow-2xl">
          <div className="flex flex-col items-center justify-center p-3 rounded-xl bg-slate-900/50 border border-white/5">
            <div className="flex items-center gap-1.5 text-xs font-mono text-cyan-400 mb-1">
              <MapPin className="w-3.5 h-3.5" />
              <span>ARTIFACTS PRESERVED</span>
            </div>
            <div className="font-['Orbitron'] text-2xl sm:text-3xl font-black text-white">
              180+
            </div>
            <span className="text-[10px] text-slate-400">Across Moon & Mars surfaces</span>
          </div>

          <div className="flex flex-col items-center justify-center p-3 rounded-xl bg-slate-900/50 border border-white/5">
            <div className="flex items-center gap-1.5 text-xs font-mono text-orange-400 mb-1">
              <Activity className="w-3.5 h-3.5" />
              <span>RECORD DRIVE</span>
            </div>
            <div className="font-['Orbitron'] text-2xl sm:text-3xl font-black text-orange-300">
              45.16 <span className="text-sm font-sans font-normal text-slate-300">KM</span>
            </div>
            <span className="text-[10px] text-slate-400">Opportunity on Mars</span>
          </div>

          <div className="flex flex-col items-center justify-center p-3 rounded-xl bg-slate-900/50 border border-white/5">
            <div className="flex items-center gap-1.5 text-xs font-mono text-emerald-400 mb-1">
              <Clock className="w-3.5 h-3.5" />
              <span>OLDEST ACTIVE DATA</span>
            </div>
            <div className="font-['Orbitron'] text-2xl sm:text-3xl font-black text-emerald-300">
              57+ <span className="text-sm font-sans font-normal text-slate-300">YRS</span>
            </div>
            <span className="text-[10px] text-slate-400">Apollo 11 LRRR Laser Retroreflector</span>
          </div>

          <div className="flex flex-col items-center justify-center p-3 rounded-xl bg-slate-900/50 border border-white/5">
            <div className="flex items-center gap-1.5 text-xs font-mono text-purple-400 mb-1">
              <Layers className="w-3.5 h-3.5" />
              <span>MARSQUAKES SOUNDED</span>
            </div>
            <div className="font-['Orbitron'] text-2xl sm:text-3xl font-black text-purple-300">
              1,319
            </div>
            <span className="text-[10px] text-slate-400">Recorded by InSight SEIS</span>
          </div>
        </div>

      </div>

      {/* Down indicator */}
      <div className="relative z-10 pb-6 flex flex-col items-center text-slate-500 hover:text-cyan-400 transition-colors">
        <a 
          href="#museum" 
          onClick={() => spaceAudio.playClick()}
          className="flex flex-col items-center gap-1 text-[11px] font-mono tracking-widest uppercase"
        >
          <span>ENTER HISTORICAL ARCHIVE</span>
          <ChevronDown className="w-4 h-4 animate-bounce" />
        </a>
      </div>
    </section>
  );
};
