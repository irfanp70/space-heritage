import React from 'react';
import { Rocket, Heart, ArrowUp, Compass, ExternalLink, ShieldCheck } from 'lucide-react';
import { spaceAudio } from '../utils/audio';

export const Footer: React.FC = () => {
  const scrollToTop = () => {
    spaceAudio.playClick();
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="relative bg-slate-950 border-t border-cyan-500/20 pt-16 pb-12 overflow-hidden">
      {/* Background Glow */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-3/4 h-24 bg-cyan-600/10 blur-[90px] pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
        
        {/* Top Tier */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          
          {/* Brand & Mission Statement */}
          <div className="md:col-span-2 space-y-4">
            <div className="flex items-center gap-3">
              <div className="w-9 h-9 rounded-xl bg-gradient-to-br from-cyan-500 to-blue-700 flex items-center justify-center p-0.5 shadow-lg shadow-cyan-500/20">
                <div className="w-full h-full bg-slate-950 rounded-[10px] flex items-center justify-center">
                  <Rocket className="w-4 h-4 text-cyan-400" />
                </div>
              </div>
              <span className="font-['Orbitron'] font-black text-xl text-white tracking-wider">
                SPACE<span className="text-cyan-400">HERITAGE</span>
              </span>
            </div>

            <p className="text-xs sm:text-sm text-slate-400 leading-relaxed max-w-md font-sans">
              "THE MACHINES MAY BE SILENT, BUT THEIR STORIES LIVE FOREVER."
              <br />
              A high-precision educational digital museum dedicated to safeguarding the historical legacy and scientific achievements of the robotic rovers, landers, and crewed lunar descent stages that pioneered human planetary exploration.
            </p>

            <div className="flex items-center gap-2 text-xs font-mono text-cyan-300">
              <span className="w-1.5 h-1.5 rounded-full bg-cyan-400 animate-pulse"></span>
              <span>NASA SPACE APPS CHALLENGE 2026 GLOBAL INITIATIVE</span>
            </div>
          </div>

          {/* Quick Links */}
          <div className="space-y-3">
            <h4 className="font-['Orbitron'] text-xs font-bold text-white uppercase tracking-wider">
              Museum Wings
            </h4>
            <ul className="space-y-2 text-xs font-mono text-slate-400">
              <li><a href="#museum" className="hover:text-cyan-300 transition-colors">01. Space Museum Catalog</a></li>
              <li><a href="#maps" className="hover:text-cyan-300 transition-colors">02. 3D Moon & Mars Maps</a></li>
              <li><a href="#stories" className="hover:text-cyan-300 transition-colors">03. If This Machine Could Talk</a></li>
              <li><a href="#gallery" className="hover:text-cyan-300 transition-colors">04. Before & After Gallery</a></li>
              <li><a href="#apollo" className="hover:text-cyan-300 transition-colors">05. Apollo Historical Archive</a></li>
            </ul>
          </div>

          {/* Research & Compliance */}
          <div className="space-y-3">
            <h4 className="font-['Orbitron'] text-xs font-bold text-white uppercase tracking-wider">
              Scientific Verification
            </h4>
            <ul className="space-y-2 text-xs font-mono text-slate-400">
              <li><a href="#quiz" className="hover:text-cyan-300 transition-colors">06. Ten-Question Space Quiz</a></li>
              <li><a href="#cards" className="hover:text-cyan-300 transition-colors">07. Collectible Story Cards</a></li>
              <li><a href="#updates" className="hover:text-cyan-300 transition-colors">08. NASA Space Updates 2026</a></li>
              <li><a href="#timeline" className="hover:text-cyan-300 transition-colors">09. Historical Timeline</a></li>
              <li><a href="#references" className="hover:text-cyan-300 transition-colors">10. References & AI Disclosure</a></li>
            </ul>
          </div>

        </div>

        {/* Bottom Tier */}
        <div className="pt-8 border-t border-white/10 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs font-mono text-slate-500">
          <div>
            Built with React, Tailwind CSS & verified NASA archives • Space Apps Challenge 2026
          </div>

          <div className="flex items-center gap-4">
            <button
              onClick={scrollToTop}
              className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-slate-900 hover:bg-slate-800 border border-white/10 text-slate-300 hover:text-white transition-colors"
            >
              <span>BACK TO TOP</span>
              <ArrowUp className="w-3.5 h-3.5 text-cyan-400" />
            </button>
          </div>
        </div>

      </div>
    </footer>
  );
};
