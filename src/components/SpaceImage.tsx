import React, { useState } from 'react';
import { Camera, ImageOff, Radio, Compass, Rocket } from 'lucide-react';

interface SpaceImageProps {
  src: string;
  alt: string;
  className?: string;
  containerClassName?: string;
  destination?: 'Moon' | 'Mars';
  equipmentName?: string;
  credit?: string;
  aspectRatio?: string;
}

export const SpaceImage: React.FC<SpaceImageProps> = ({
  src,
  alt,
  className = '',
  containerClassName = '',
  destination,
  equipmentName,
  credit,
  aspectRatio = 'aspect-[16/10]'
}) => {
  const [hasError, setHasError] = useState(false);
  const [isLoading, setIsLoading] = useState(true);

  const isMoon = destination === 'Moon';

  return (
    <div className={`relative overflow-hidden bg-slate-950 ${aspectRatio} ${containerClassName}`}>
      {/* Loading Skeleton */}
      {isLoading && !hasError && (
        <div className="absolute inset-0 bg-slate-900 flex items-center justify-center animate-pulse z-10">
          <div className="flex flex-col items-center gap-2 text-slate-500 font-mono text-[11px]">
            <Radio className="w-5 h-5 text-cyan-400 animate-spin" style={{ animationDuration: '4s' }} />
            <span>RECEIVING NASA TELEMETRY IMAGE...</span>
          </div>
        </div>
      )}

      {/* Main Image */}
      {!hasError ? (
        <img
          src={src}
          alt={alt}
          loading="lazy"
          onLoad={() => setIsLoading(false)}
          onError={() => {
            setIsLoading(false);
            setHasError(true);
          }}
          className={`w-full h-full object-cover object-center transition-all duration-500 ${
            isLoading ? 'opacity-0 scale-95' : 'opacity-100 scale-100'
          } ${className}`}
        />
      ) : (
        /* Clearly Labelled Fallback Placeholder */
        <div className="absolute inset-0 bg-gradient-to-br from-slate-900 via-slate-950 to-slate-900 border border-white/10 p-4 flex flex-col justify-between text-left select-none">
          <div className="flex items-center justify-between">
            <span className={`px-2 py-0.5 rounded text-[10px] font-mono font-bold uppercase ${
              isMoon ? 'bg-cyan-950 text-cyan-300 border border-cyan-500/30' : 'bg-orange-950 text-orange-400 border border-orange-500/30'
            }`}>
              {destination || 'NASA ARCHIVE'}
            </span>
            <ImageOff className="w-4 h-4 text-slate-500" />
          </div>

          <div className="space-y-1">
            <div className="font-['Orbitron'] text-xs font-bold text-white truncate">
              {equipmentName || alt}
            </div>
            <div className="text-[10px] font-mono text-cyan-400">
              OFFICIAL NASA ARCHIVAL PHOTOGRAPH
            </div>
            <p className="text-[10px] text-slate-400 font-mono line-clamp-1">
              {alt}
            </p>
          </div>

          <div className="pt-2 border-t border-white/5 flex items-center justify-between text-[9px] font-mono text-slate-500">
            <span>NASA Image Library</span>
            {credit && <span className="truncate max-w-[140px]">{credit}</span>}
          </div>
        </div>
      )}
    </div>
  );
};
