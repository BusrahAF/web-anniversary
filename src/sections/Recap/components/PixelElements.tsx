import React from 'react';
import { motion } from 'motion/react';
import { cn } from '../../../lib/utils';

export const FallingPetal = ({ delay }: { delay: number }) => (
  <motion.div
    className="absolute w-1.5 h-1.5 bg-[#F48FB1] pixel-corners z-10"
    initial={{ y: -20, opacity: 0 }}
    animate={{ 
      y: [0, 100, 200],
      x: [0, 20, -20, 10],
      rotate: [0, 90, 180, 270],
      opacity: [0, 1, 1, 0]
    }}
    transition={{ 
      repeat: Infinity, 
      duration: 8 + Math.random() * 4, 
      delay,
      ease: "linear"
    }}
    style={{ left: `${Math.random() * 100}%` }}
  />
);

export const WindStreak = ({ delay }: { delay: number }) => (
  <motion.div
    className="absolute h-0.5 bg-white/5 z-0"
    initial={{ x: "-20%", opacity: 0, width: 0 }}
    animate={{ 
      x: ["0%", "120%"],
      opacity: [0, 0.2, 0],
      width: [0, 60, 0]
    }}
    transition={{ 
      repeat: Infinity, 
      duration: 5 + Math.random() * 3, 
      delay,
      ease: "linear"
    }}
    style={{ top: `${20 + Math.random() * 60}%` }}
  />
);

export const MoonMote = ({ delay }: { delay: number }) => (
  <motion.div
    className="absolute w-1 h-1 bg-blue-100/10 pixel-corners z-10"
    animate={{ 
      y: [0, -40, 0],
      x: [0, 15, 0],
      opacity: [0, 0.4, 0]
    }}
    transition={{ repeat: Infinity, duration: 6 + Math.random() * 6, delay }}
    style={{
      left: `${30 + Math.random() * 40}%`,
      top: `${10 + Math.random() * 50}%`,
    }}
  />
);

export const PixelGrass = ({ delay }: { delay: number }) => (
  <motion.div
    className="w-1 h-4 bg-green-900/30 pixel-corners"
    animate={{ rotate: [-8, 8, -8] }}
    transition={{ repeat: Infinity, duration: 3, delay, ease: "easeInOut" }}
    style={{ originY: 1 }}
  />
);

export const PixelTree = ({ className }: { className?: string }) => (
  <motion.div 
    className={cn("relative flex flex-col items-center", className)}
    animate={{ rotate: [-0.5, 0.5, -0.5] }}
    transition={{ repeat: Infinity, duration: 5, ease: "easeInOut" }}
  >
    <div className="relative w-32 h-32">
      <div className="absolute top-0 left-8 w-16 h-16 bg-[#F48FB1] pixel-corners border-2 border-[#880E4F]" />
      <div className="absolute top-4 left-0 w-12 h-12 bg-[#F06292] pixel-corners border-2 border-[#880E4F]" />
      <div className="absolute top-6 right-0 w-14 h-14 bg-[#EC407A] pixel-corners border-2 border-[#880E4F]" />
      <div className="absolute top-12 left-6 w-20 h-20 bg-[#F48FB1] pixel-corners border-2 border-[#880E4F]" />
      
      <div className="absolute top-2 left-10 w-4 h-4 bg-white/30 pixel-corners" />
      <div className="absolute top-14 left-8 w-6 h-6 bg-white/20 pixel-corners" />

      <FallingPetal delay={0} />
      <FallingPetal delay={3} />
      <FallingPetal delay={6} />
    </div>
    
    <div className="w-6 h-16 bg-[#5D4037] pixel-corners relative -mt-4 border-x-2 border-b-2 border-[#1A1A1A]">
      <div className="absolute top-0 right-0 w-2 h-full bg-black/20" />
    </div>
  </motion.div>
);

export const PixelFlower = ({ color, type = 'dot', className, delay = 0 }: { color: string; type?: 'dot' | 'tulip' | 'cluster' | 'tall' | 'sunflower' | 'rose' | 'lavender' | 'lily'; className?: string; delay?: number }) => (
  <motion.div 
    className={cn("flex flex-col items-center", className)}
    animate={{ rotate: [-3, 3, -3], y: [0, -1, 0] }}
    transition={{ repeat: Infinity, duration: 4, delay, ease: "easeInOut" }}
    style={{ originY: 1 }}
  >
    <div className="relative">
      {type === 'dot' && (
        <div className="w-3 h-3 pixel-corners border border-black/20" style={{ backgroundColor: color }} />
      )}
      {type === 'tulip' && (
        <div className="w-5 h-6 flex flex-col items-center">
          <div className="w-5 h-4 pixel-corners border border-black/20" style={{ backgroundColor: color }}>
            <div className="absolute top-0 left-1 w-1 h-1 bg-white/30" />
          </div>
        </div>
      )}
      {type === 'cluster' && (
        <div className="grid grid-cols-2 gap-0.5">
          <div className="w-2 h-2 pixel-corners" style={{ backgroundColor: color }} />
          <div className="w-2 h-2 pixel-corners" style={{ backgroundColor: color }} />
          <div className="w-2 h-2 pixel-corners" style={{ backgroundColor: color }} />
        </div>
      )}
      {type === 'sunflower' && (
        <div className="w-8 h-8 bg-yellow-400 pixel-corners border-2 border-amber-900 flex items-center justify-center">
          <div className="w-3 h-3 bg-amber-900 pixel-corners" />
        </div>
      )}
      {type === 'rose' && (
        <div className="w-6 h-6 bg-rose-600 pixel-corners border-2 border-rose-900 relative">
          <div className="absolute top-1 left-1 w-2 h-2 bg-rose-400 pixel-corners" />
        </div>
      )}
      {type === 'lavender' && (
        <div className="flex flex-col gap-0.5">
          <div className="w-2 h-2 pixel-corners bg-purple-400" />
          <div className="w-2 h-2 pixel-corners bg-purple-500" />
          <div className="w-2 h-2 pixel-corners bg-purple-600" />
        </div>
      )}
      {type === 'lily' && (
        <div className="w-6 h-4 bg-white pixel-corners border border-slate-200 relative">
          <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-2 h-1 bg-yellow-200" />
        </div>
      )}
    </div>
    <div className="w-1 h-6 bg-green-700 pixel-corners border-x border-green-900" />
  </motion.div>
);

export const PixelFirefly = ({ delay }: { delay: number }) => (
  <motion.div
    className="absolute w-2 h-2 bg-yellow-100 pixel-corners z-30"
    initial={{ opacity: 0 }}
    animate={{ 
      x: [0, 30, -30, 15, 0],
      y: [0, -40, -20, -50, 0],
      opacity: [0, 1, 0.5, 1, 0],
      scale: [1, 1.5, 1, 1.2, 1]
    }}
    transition={{ repeat: Infinity, duration: 6 + Math.random() * 4, delay, ease: "easeInOut" }}
    style={{
      left: `${20 + Math.random() * 60}%`,
      top: `${40 + Math.random() * 30}%`,
      boxShadow: '0 0 8px rgba(255, 255, 200, 0.6)'
    }}
  >
    <div className="absolute inset-0 bg-white/50 animate-pulse" />
  </motion.div>
);

export const PixelButterfly = ({ color, delay }: { color: string, delay: number }) => {
  return (
    <motion.div
      className="absolute z-20"
      initial={{ x: "50%", y: "50%" }}
      animate={{ 
        x: ["30%", "70%", "40%", "60%", "30%"],
        y: ["40%", "20%", "50%", "30%", "40%"],
        rotate: [0, 15, -15, 5, 0]
      }}
      transition={{ repeat: Infinity, duration: 10, delay, ease: "easeInOut" }}
    >
      <motion.div 
        className="flex gap-0.5"
        animate={{ scaleY: [1, 0.1, 1] }}
        transition={{ repeat: Infinity, duration: 0.15, ease: "linear" }}
      >
        <div className="w-3 h-3 pixel-corners border border-black/20" style={{ backgroundColor: color }} />
        <div className="w-3 h-3 pixel-corners border border-black/20" style={{ backgroundColor: color }} />
      </motion.div>
    </motion.div>
  );
};

export const DistantHills = ({ className }: { className?: string }) => (
  <div className={cn("flex items-end gap-0", className)}>
    <div className="w-32 h-16 bg-[#0a1a0a] pixel-corners opacity-40" />
    <div className="w-48 h-24 bg-[#0d1f0d] pixel-corners opacity-60 -ml-8" />
    <div className="w-40 h-20 bg-[#0a1a0a] pixel-corners opacity-40 -ml-12" />
  </div>
);
