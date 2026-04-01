import React, { useState, useEffect, useRef } from 'react';
import gsap from 'gsap';
import { cn } from '@/src/lib/utils';
import { motion } from 'motion/react';

interface PinGateProps {
  onSuccess: () => void;
}

export const PinGate: React.FC<PinGateProps> = ({ onSuccess }) => {
  const [pin, setPin] = useState('');
  const [error, setError] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);

  const handleInput = (e: React.ChangeEvent<HTMLInputElement>) => {
    const val = e.target.value.replace(/\D/g, '').slice(0, 4);
    setPin(val);
    if (val.length === 4) {
      if (val === '0204') {
        onSuccess();
      } else {
        setError(true);
        gsap.to(containerRef.current, {
          x: 10,
          repeat: 5,
          yoyo: true,
          duration: 0.05,
          onComplete: () => {
            gsap.set(containerRef.current, { x: 0 });
            setPin('');
            setError(false);
          }
        });
      }
    }
  };

  return (
    <div className="fixed inset-0 flex items-center justify-center z-[100] bg-plum/95 backdrop-blur-3xl px-6">
      <motion.div 
        ref={containerRef}
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        className="w-full max-w-md pixel-panel pixel-corners p-12 space-y-10 text-center relative"
      >
        <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 w-20 h-20 bg-plum border-4 border-rose pixel-corners flex items-center justify-center text-3xl shadow-[0_0_30px_rgba(255,62,108,0.5)]">
          🔒
        </div>

        <div className="space-y-4 mt-4">
          <h2 className="text-2xl md:text-3xl font-bold tracking-widest uppercase text-glow animate-shimmer">Akses Masuk</h2>
          <p className="text-cream/60 font-mono text-xs tracking-[0.2em] uppercase">
            Masukkan PIN untuk membuka <br /> ruang kecil kita.
          </p>
        </div>

        <div className="space-y-8">
          <div className="relative">
            <input
              type="password"
              value={pin}
              onChange={handleInput}
              placeholder="••••"
              className={cn(
                "w-full bg-plum/50 border-4 border-white/20 p-6 text-center text-4xl tracking-[1em] pixel-corners focus:outline-none focus:border-rose/80 transition-all font-mono shadow-inner",
                error && "border-rose"
              )}
              maxLength={4}
              autoFocus
            />
            {error && (
              <motion.span 
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                className="absolute -bottom-8 left-0 right-0 text-rose font-mono text-[10px] tracking-widest uppercase"
              >
                PIN Tidak Valid
              </motion.span>
            )}
          </div>
          <div className="text-cream/40 text-[10px] font-mono tracking-widest uppercase">
            Tanggal spesial kita
          </div>
        </div>

        <div className="pt-8 flex justify-center gap-4">
          <div className="w-2 h-2 bg-rose/20 pixel-corners" />
          <div className="w-2 h-2 bg-rose/20 pixel-corners" />
          <div className="w-2 h-2 bg-rose/20 pixel-corners" />
        </div>
      </motion.div>
    </div>
  );
};

export const LoadingScreen: React.FC<{ onComplete: () => void }> = ({ onComplete }) => {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setProgress(prev => {
        if (prev >= 100) {
          clearInterval(timer);
          setTimeout(onComplete, 1000);
          return 100;
        }
        return prev + 1;
      });
    }, 30);
    return () => clearInterval(timer);
  }, [onComplete]);

  return (
    <div className="fixed inset-0 bg-plum flex flex-col items-center justify-center z-[200] space-y-12">
      <div className="relative">
        <motion.div 
          animate={{ rotate: 360 }}
          transition={{ duration: 4, repeat: Infinity, ease: "linear" }}
          className="w-32 h-32 border-4 border-white/10 border-t-rose pixel-corners shadow-[0_0_20px_rgba(255,62,108,0.3)]"
        />
        <div className="absolute inset-0 flex items-center justify-center">
          <span className="text-rose font-mono text-2xl font-bold animate-pulse">{progress}%</span>
        </div>
      </div>

      <div className="space-y-6 text-center">
        <h2 className="text-xl md:text-2xl font-bold tracking-[0.2em] uppercase text-glow animate-shimmer">Memuat Kenangan...</h2>
        <div className="w-64 h-3 bg-plum/50 border-2 border-white/20 relative overflow-hidden mx-auto pixel-corners">
          <motion.div 
            className="absolute inset-y-0 left-0 bg-rose shadow-[0_0_10px_rgba(255,62,108,0.8)]"
            style={{ width: `${progress}%` }}
          />
        </div>
        <p className="text-cream/40 font-mono text-[10px] tracking-[0.2em] uppercase animate-pulse">
          Menyiapkan ruang kecil kita...
        </p>
      </div>
    </div>
  );
};
