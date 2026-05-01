import React, { useState, useMemo } from 'react';
import { cn } from '../../lib/utils';
import { Activity, Zap, Shield, ChevronRight } from 'lucide-react';
import cardBg from '../../assets/howithelpscardbg.webp';

export interface CardFlipProps {
  title?: string;
  subtitle?: string;
  description?: string;
  features?: string[];
  color?: string;
  icon?: React.ReactNode;
  iconImgSrc?: string;
}

export default function CardFlip({
  title = 'Muscle Pain',
  subtitle = 'Targeted Topical Relief',
  description = 'Clinically formulated to penetrate deep into muscle tissue to relieve soreness, strains, and chronic stiffness.',
  features = [
    'Myalgias',
    'Muscle Strains',
    'Fibromyalgia',
    'Post-Exercise Soreness',
  ],
  color = '#0ea5e9',
  icon,
  iconImgSrc
}: CardFlipProps) {
  const [isFlipped, setIsFlipped] = useState(false);

  // Stable random positions — computed once on mount so hover re-renders don't reset the animation
  const particles = useMemo(() =>
    [...Array(6)].map(() => ({
      width: `${40 + Math.random() * 50}%`,
      marginLeft: `${Math.random() * 30}%`,
    })),
  []);

  return (
    <div
      style={{
        ['--primary' as any]: color ?? '#0ea5e9',
      }}
      className="group relative h-[420px] w-full max-w-[340px] [perspective:2000px] mx-auto"
      onMouseEnter={() => setIsFlipped(true)}
      onMouseLeave={() => setIsFlipped(false)}
    >
      <div
        className={cn(
          'relative h-full w-full',
          '[transform-style:preserve-3d]',
          'transition-all duration-700',
          isFlipped
            ? '[transform:rotateY(180deg)]'
            : '[transform:rotateY(0deg)]',
        )}
      >
        {/* Front of card */}
        <div
          className={cn(
            'absolute inset-0 h-full w-full',
            '[transform:rotateY(0deg)] [backface-visibility:hidden]',
            'overflow-hidden rounded-[2.5rem]',
            'border border-slate-800 shadow-xl',
            'transition-all duration-700',
            'group-hover:shadow-2xl group-hover:border-primary/40',
            isFlipped ? 'opacity-0' : 'opacity-100',
          )}
          style={{ backgroundImage: `url(${cardBg})`, backgroundSize: 'cover', backgroundPosition: 'center' }}
        >
          {/* Dark overlay to maintain contrast */}
          <div className="absolute inset-0 bg-black/55 rounded-[2.5rem]" />

          {/* Background gradient effect */}
          <div className="from-primary/10 absolute inset-0 bg-gradient-to-br via-transparent to-brand-500/5" />

          {/* Animated clinical particles + icon */}
          <div className="absolute inset-0 flex items-center justify-center pb-28">
            <div className="relative flex h-[200px] w-[260px] flex-col items-center justify-center gap-2">
              {particles.map((p, i) => (
                <div
                  key={i}
                  className={cn(
                    'h-1.5 w-full rounded-full',
                    'from-white/0 via-white/50 to-white/0 bg-gradient-to-r',
                    'animate-[clinicalSlide_3s_ease-in-out_infinite]',
                    'opacity-0',
                  )}
                  style={{
                    width: p.width,
                    animationDelay: `${i * 0.3}s`,
                    marginLeft: p.marginLeft,
                  }}
                />
              ))}

              {/* Central Icon */}
              <div className="absolute inset-0 flex items-center justify-center">
                {iconImgSrc ? (
                  <div
                    className={cn(
                      'h-36 w-36',
                      'transition-all duration-500 group-hover:scale-110',
                    )}
                  >
                    <img src={iconImgSrc} alt={`${title} relief illustration`} loading="lazy" className="w-full h-full object-contain drop-shadow-[0_0_12px_rgba(255,255,255,0.15)]" />
                  </div>
                ) : (
                  <div
                    className={cn(
                      'h-28 w-28 rounded-[1.5rem]',
                      'from-primary via-primary/90 to-primary/80 bg-gradient-to-br',
                      'flex items-center justify-center',
                      'shadow-primary/30 shadow-2xl',
                      'transition-all duration-500 group-hover:scale-110 group-hover:rotate-6',
                    )}
                  >
                    <div className="text-white scale-[1.35]">
                      {icon || <Activity size={28} />}
                    </div>
                  </div>
                )}
              </div>
            </div>
          </div>

          {/* Bottom content */}
          <div className="absolute right-0 bottom-0 left-0 p-8 bg-gradient-to-t from-brand-900/90 to-transparent">
            <div className="flex items-center justify-between gap-3">
              <div className="space-y-1.5">
                <h3 className="text-2xl leading-tight font-bold tracking-tight text-white transition-all duration-500 ease-out group-hover:translate-y-[-4px]">
                  {title} Relief
                </h3>
                <p className="text-sm font-bold tracking-tight text-brand-600 transition-all delay-[50ms] duration-500 ease-out group-hover:translate-y-[-4px] uppercase tracking-widest">
                  {subtitle}
                </p>
              </div>
              <div className="group/icon relative flex-shrink-0">
                <div
                  className={cn(
                    'absolute inset-[-12px] rounded-full transition-opacity duration-300',
                    'from-primary/30 via-primary/20 bg-gradient-to-br to-transparent',
                    'opacity-0 group-hover/icon:opacity-100',
                  )}
                />
                <Zap className="text-primary relative z-10 h-7 w-7 transition-all duration-300 group-hover/icon:scale-110 group-hover/icon:rotate-12" />
              </div>
            </div>
          </div>
        </div>

        {/* Back of card - High contrast dark clinical theme */}
        <div
          className={cn(
            'absolute inset-0 h-full w-full',
            '[transform:rotateY(180deg)] [backface-visibility:hidden]',
            'rounded-[2.5rem] p-8',
            'bg-gradient-to-br from-brand-900 via-slate-900 to-black',
            'border border-slate-700',
            'shadow-2xl',
            'flex flex-col',
            'transition-all duration-700',
            !isFlipped ? 'opacity-0' : 'opacity-100',
          )}
        >
          {/* Background pattern */}
          <div className="absolute inset-0 opacity-10 pointer-events-none">
             <svg width="100%" height="100%" xmlns="http://www.w3.org/2000/svg">
                <defs>
                   <pattern id="grid-back" width="40" height="40" patternUnits="userSpaceOnUse">
                      <path d="M 40 0 L 0 0 0 40" fill="none" stroke="currentColor" strokeWidth="0.5" className="text-brand-500" />
                   </pattern>
                </defs>
                <rect width="100%" height="100%" fill="url(#grid-back)" />
             </svg>
          </div>

          <div className="relative z-10 flex-1 space-y-6">
            <div className="space-y-3">
              <div className="flex items-center gap-3">
                <div className="from-primary via-primary/90 to-primary/80 flex h-10 w-10 items-center justify-center rounded-xl bg-gradient-to-br shadow-lg shadow-primary/20">
                  <Shield className="h-5 w-5 text-white" />
                </div>
                <h3 className="text-xl font-bold tracking-tight text-white">
                  {title} Relief
                </h3>
              </div>
              <p className="text-sm leading-relaxed tracking-tight text-slate-300">
                {description}
              </p>
            </div>

            <div className="space-y-3 pt-2">
              <p className="text-[10px] font-black text-brand-400 uppercase tracking-[0.2em]">Clinical Indications</p>
              <div className="grid grid-cols-1 gap-2.5">
                {features.slice(0, 5).map((feature, index) => (
                  <div
                    key={feature}
                    className="flex items-center gap-3 text-sm text-slate-100 transition-all duration-500"
                    style={{
                      transform: isFlipped ? 'translateX(0)' : 'translateX(-10px)',
                      opacity: isFlipped ? 1 : 0,
                      transitionDelay: `${index * 80 + 200}ms`,
                    }}
                  >
                    <div className="bg-brand-500/30 flex h-6 w-6 flex-shrink-0 items-center justify-center rounded-md border border-brand-500/40">
                      <ChevronRight className="text-brand-300 h-4 w-4" />
                    </div>
                    <span className="font-semibold truncate">{feature}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>

        </div>
      </div>

      <style dangerouslySetInnerHTML={{ __html: `
        @keyframes clinicalSlide {
          0% {
            transform: translateX(-150px);
            opacity: 0;
          }
          30% {
            opacity: 0.6;
          }
          70% {
            opacity: 0.6;
          }
          100% {
            transform: translateX(150px);
            opacity: 0;
          }
        }
      ` }} />
    </div>
  );
}
