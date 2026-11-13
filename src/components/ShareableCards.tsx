import React, { useState } from 'react';
import { 
  Award, 
  Download, 
  Share2, 
  Copy, 
  Check, 
  Sparkles, 
  MapPin, 
  Calendar,
  Layers,
  ExternalLink
} from 'lucide-react';
import { MUSEUM_ITEMS, SpaceEquipment } from '../data/museumData';
import { spaceAudio } from '../utils/audio';
import { SpaceImage } from './SpaceImage';

export const ShareableCards: React.FC = () => {
  const [selectedItem, setSelectedItem] = useState<SpaceEquipment>(MUSEUM_ITEMS[5]); // Default to Opportunity
  const [copiedLink, setCopiedLink] = useState<boolean>(false);
  const [isExporting, setIsExporting] = useState<boolean>(false);

  const handleSelectCard = (item: SpaceEquipment) => {
    spaceAudio.playTelemetryPing();
    setSelectedItem(item);
    setCopiedLink(false);
  };

  const handleCopyLink = () => {
    spaceAudio.playSuccess();
    const url = `${window.location.origin}${window.location.pathname}#museum`;
    navigator.clipboard.writeText(url);
    setCopiedLink(true);
    setTimeout(() => setCopiedLink(false), 3000);
  };

  const handleNativeShare = async () => {
    spaceAudio.playClick();
    if (navigator.share) {
      try {
        await navigator.share({
          title: `Space Heritage: ${selectedItem.name}`,
          text: `Explore the forgotten machines of the Moon & Mars! Discover ${selectedItem.name} (${selectedItem.mission}) on the NASA Space Apps 2026 digital museum.`,
          url: window.location.href,
        });
      } catch {
        // Share cancelled or unavailable
      }
    } else {
      handleCopyLink();
    }
  };

  // Render high quality PNG card on HTML5 Canvas and download
  const handleDownloadCard = () => {
    setIsExporting(true);
    spaceAudio.playSuccess();

    const canvas = document.createElement('canvas');
    canvas.width = 800;
    canvas.height = 1000;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    // Draw background
    const bgGrad = ctx.createLinearGradient(0, 0, 800, 1000);
    bgGrad.addColorStop(0, '#030712');
    bgGrad.addColorStop(0.5, '#0f172a');
    bgGrad.addColorStop(1, '#050b14');
    ctx.fillStyle = bgGrad;
    ctx.fillRect(0, 0, 800, 1000);

    // Glowing border
    ctx.strokeStyle = selectedItem.destination === 'Moon' ? '#38bdf8' : '#f97316';
    ctx.lineWidth = 4;
    ctx.strokeRect(25, 25, 750, 950);

    // Header Tag
    ctx.fillStyle = '#64748b';
    ctx.font = 'bold 16px monospace';
    ctx.fillText('NASA SPACE APPS CHALLENGE 2026 • SPACE HERITAGE COLLECTIBLE', 50, 70);

    // Title
    ctx.fillStyle = '#ffffff';
    ctx.font = 'bold 32px sans-serif';
    ctx.fillText(selectedItem.name.slice(0, 36), 50, 120);

    // Subtitle
    ctx.fillStyle = selectedItem.destination === 'Moon' ? '#38bdf8' : '#f97316';
    ctx.font = '18px monospace';
    ctx.fillText(`${selectedItem.destination.toUpperCase()} • ${selectedItem.category.toUpperCase()} • ${selectedItem.mission}`, 50, 155);

    // Image frame
    const img = new Image();
    img.crossOrigin = 'anonymous';
    img.onload = () => {
      // Draw image
      ctx.drawImage(img, 50, 180, 700, 420);

      // Coordinates Bar
      ctx.fillStyle = '#0f172a';
      ctx.fillRect(50, 620, 700, 60);
      ctx.fillStyle = '#94a3b8';
      ctx.font = '14px monospace';
      ctx.fillText(`LANDMARK: ${selectedItem.coordinates.region}`, 70, 645);
      ctx.fillText(`COORDS: ${selectedItem.coordinates.latitude}, ${selectedItem.coordinates.longitude}`, 70, 665);

      // Quote / Narrative
      ctx.fillStyle = '#e2e8f0';
      ctx.font = 'italic 16px serif';
      const quoteWords = (selectedItem.audioQuote || selectedItem.purpose).slice(0, 140) + '...';
      ctx.fillText(`"${quoteWords}"`, 70, 720);

      // Stats
      ctx.fillStyle = '#38bdf8';
      ctx.font = 'bold 16px monospace';
      ctx.fillText(`NSSDCA ID: ${selectedItem.nasaCatalogId}`, 70, 780);
      ctx.fillText(`LAST STATUS: ${selectedItem.lastKnownStatus.slice(0, 40)}`, 70, 810);

      // Credits Footer
      ctx.fillStyle = '#64748b';
      ctx.font = '12px monospace';
      ctx.fillText(`IMAGE CREDIT: ${selectedItem.imageCredit}`, 70, 890);
      ctx.fillText('VERIFIED PUBLIC DOMAIN NASA ARCHIVE • SPACE HERITAGE 2026', 70, 915);

      // Trigger download
      const link = document.createElement('a');
      link.download = `Space-Heritage-${selectedItem.id}.png`;
      link.href = canvas.toDataURL('image/png');
      link.click();
      setIsExporting(false);
    };

    // If image fails to crossOrigin load, complete export anyway
    img.onerror = () => {
      ctx.fillStyle = '#1e293b';
      ctx.fillRect(50, 180, 700, 420);
      ctx.fillStyle = '#ffffff';
      ctx.font = '24px sans-serif';
      ctx.fillText(selectedItem.name, 70, 390);

      const link = document.createElement('a');
      link.download = `Space-Heritage-${selectedItem.id}.png`;
      link.href = canvas.toDataURL('image/png');
      link.click();
      setIsExporting(false);
    };

    img.src = selectedItem.imageUrl;
  };

  return (
    <section id="cards" className="relative py-24 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
      {/* Section Header */}
      <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6 border-b border-white/10 pb-8">
        <div>
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-cyan-950/70 border border-cyan-500/30 text-cyan-300 text-xs font-mono mb-3">
            <Award className="w-3.5 h-3.5" />
            <span>SECTION 07 / DIGITAL MEMORABILIA</span>
          </div>
          <h2 className="font-['Orbitron'] font-black text-3xl sm:text-4xl lg:text-5xl text-white tracking-tight uppercase">
            SHAREABLE STORY <span className="text-cyan-400">CARDS</span>
          </h2>
          <p className="text-slate-400 max-w-2xl mt-2 text-sm sm:text-base">
            Generate and download high-resolution digital collector cards of historical lunar and Martian machines. Share genuine space exploration history with students, teachers, and space enthusiasts worldwide.
          </p>
        </div>

        {/* Share Button Pill */}
        <div className="flex items-center gap-3">
          <button
            onClick={handleNativeShare}
            className="flex items-center gap-2 px-4 py-2.5 rounded-xl bg-slate-900 border border-white/10 hover:border-cyan-500/40 text-xs font-mono text-cyan-300 transition-colors shadow-lg"
          >
            <Share2 className="w-4 h-4" />
            <span>SHARE CURRENT CARD</span>
          </button>
        </div>
      </div>

      {/* Main Container */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
        
        {/* Machine Picker (Left) */}
        <div className="lg:col-span-5 space-y-3">
          <div className="text-xs font-mono text-slate-400 px-1 uppercase tracking-wider">
            CHOOSE ARTIFACT TO GENERATE CARD
          </div>
          <div className="space-y-2 max-h-[460px] overflow-y-auto pr-1">
            {MUSEUM_ITEMS.map((item) => {
              const isSelected = selectedItem.id === item.id;
              const isMoon = item.destination === 'Moon';

              return (
                <button
                  key={item.id}
                  onClick={() => handleSelectCard(item)}
                  className={`w-full p-3.5 rounded-xl border text-left flex items-center gap-3 transition-all ${
                    isSelected
                      ? 'bg-slate-900 border-cyan-400/80 shadow-lg shadow-cyan-950/60 scale-[1.01]'
                      : 'bg-slate-900/40 border-white/5 hover:bg-slate-800/60 hover:border-white/15'
                  }`}
                >
                  <div className="w-12 h-12 rounded-lg overflow-hidden bg-slate-950 shrink-0 border border-white/10">
                    <img
                      src={item.imageUrl}
                      alt={item.name}
                      className="w-full h-full object-cover"
                      loading="lazy"
                      onError={(e) => {
                        (e.currentTarget as HTMLElement).style.display = 'none';
                      }}
                    />
                  </div>
                  <div className="flex-1 min-w-0">
                    <div className="flex items-center gap-1.5 text-[10px] font-mono text-slate-400 mb-0.5">
                      <span className={isMoon ? 'text-cyan-400' : 'text-orange-400'}>
                        {item.destination}
                      </span>
                      <span>•</span>
                      <span>{item.landingYear}</span>
                    </div>
                    <div className="font-['Orbitron'] font-bold text-xs text-white truncate">
                      {item.name}
                    </div>
                  </div>
                </button>
              );
            })}
          </div>
        </div>

        {/* Digital Hologram Card Preview (Right) */}
        <div className="lg:col-span-7 flex flex-col items-center">
          
          {/* Card Body */}
          <div className="relative w-full max-w-md rounded-3xl p-6 bg-gradient-to-b from-slate-900 via-slate-950 to-slate-900 border-2 border-cyan-500/40 shadow-2xl shadow-cyan-950/70 overflow-hidden group">
            
            {/* Holographic light scan sheen */}
            <div className="absolute inset-0 bg-gradient-to-tr from-transparent via-cyan-400/5 to-transparent pointer-events-none"></div>

            {/* Top Bar */}
            <div className="flex items-center justify-between pb-4 border-b border-white/10 text-[10px] font-mono">
              <span className="text-cyan-400 font-bold tracking-wider flex items-center gap-1.5">
                <Sparkles className="w-3.5 h-3.5" />
                NASA SPACE APPS 2026
              </span>
              <span className="text-slate-400">
                NSSDCA: {selectedItem.nasaCatalogId}
              </span>
            </div>

            {/* Card Image */}
            <div className="my-4 rounded-2xl overflow-hidden bg-slate-950 border border-white/10 relative shadow-inner">
              <SpaceImage
                src={selectedItem.imageUrl}
                alt={selectedItem.name}
                destination={selectedItem.destination}
                equipmentName={selectedItem.name}
                credit={selectedItem.imageCredit}
                aspectRatio="aspect-[16/10]"
              />
              <div className="absolute top-2 right-2 px-2.5 py-1 rounded bg-slate-950/80 backdrop-blur-md text-[10px] font-['Orbitron'] font-bold border border-white/10 text-cyan-300 z-20">
                {selectedItem.destination}
              </div>
            </div>

            {/* Name & Mission */}
            <div className="space-y-1.5 mb-4">
              <h3 className="font-['Orbitron'] text-lg font-black text-white">
                {selectedItem.name}
              </h3>
              <div className="text-xs font-mono text-slate-400 flex items-center gap-2">
                <span>{selectedItem.mission}</span>
                <span>•</span>
                <span className="text-cyan-400">Landed {selectedItem.landingYear}</span>
              </div>
            </div>

            {/* Location Specs */}
            <div className="p-3 rounded-xl bg-slate-950/60 border border-white/5 space-y-1 text-xs font-mono mb-4">
              <div className="flex justify-between">
                <span className="text-slate-500">REGION:</span>
                <span className="text-slate-300 truncate max-w-[200px] text-right">{selectedItem.coordinates.region}</span>
              </div>
              <div className="flex justify-between">
                <span className="text-slate-500">COORDS:</span>
                <span className="text-cyan-300">{selectedItem.coordinates.latitude}, {selectedItem.coordinates.longitude}</span>
              </div>
            </div>

            {/* Quotation / Monologue snippet */}
            <div className="p-3.5 rounded-xl bg-cyan-950/20 border border-cyan-500/20 text-xs italic font-serif text-slate-300 leading-relaxed mb-4">
              "{selectedItem.audioQuote || selectedItem.purpose}"
            </div>

            {/* Image Credit & Authenticity */}
            <div className="pt-2 border-t border-white/10 flex items-center justify-between text-[10px] font-mono text-slate-500">
              <span className="truncate max-w-[220px]">Credit: {selectedItem.imageCredit}</span>
              <span className="text-emerald-400">VERIFIED</span>
            </div>

          </div>

          {/* Action Buttons Below Card */}
          <div className="flex items-center gap-3 mt-6">
            <button
              onClick={handleDownloadCard}
              disabled={isExporting}
              className="flex items-center gap-2 px-6 py-3 rounded-xl bg-cyan-500 hover:bg-cyan-400 text-slate-950 font-['Orbitron'] text-xs font-bold tracking-wider transition-all shadow-lg shadow-cyan-500/30"
            >
              <Download className="w-4 h-4" />
              <span>{isExporting ? 'GENERATING PNG...' : 'DOWNLOAD CARD (PNG)'}</span>
            </button>

            <button
              onClick={handleCopyLink}
              className="flex items-center gap-2 px-4 py-3 rounded-xl bg-slate-900 hover:bg-slate-800 text-slate-200 border border-white/10 text-xs font-mono transition-colors"
            >
              {copiedLink ? <Check className="w-4 h-4 text-emerald-400" /> : <Copy className="w-4 h-4" />}
              <span>{copiedLink ? 'LINK COPIED!' : 'COPY LINK'}</span>
            </button>
          </div>

        </div>

      </div>
    </section>
  );
};
