import React from 'react';
import { motion } from 'motion/react';

export const PixelCharacter: React.FC<{ type: 'male' | 'female'; isBlinking: boolean }> = ({ type, isBlinking }) => {
  const isMale = type === 'male';

  const palette = {
    skin: "#F5CBA7",
    skinShadow: "#DC7633",
    hair: isMale ? "#4E342E" : "#8D6E63",
    hairHighlight: isMale ? "#6D4C41" : "#A1887F",
    outfit: isMale ? "#4A90E2" : "#F06292",
    outfitShadow: isMale ? "#1976D2" : "#D81B60",
    pants: isMale ? "#37474F" : "#5D4037",
    heart: "#FF1744",
    rose: "#D50000",
    leaf: "#2E7D32",
    outline: "#1A1A1A"
  };

  return (
    <motion.div 
      className="relative w-24 h-40 flex flex-col items-center"
      animate={{ 
        y: [0, -2, 0, -4, 0],
        x: isMale ? [0, 2, 0, -2, 0] : [0, -2, 0, 2, 0],
        rotate: isMale ? [2, 4, 2, 5, 2] : [-2, -4, -2, -5, -2], // Subtle lean towards each other
        scale: [1, 1.01, 1, 1.04, 1]
      }}
      transition={{ 
        y: { repeat: Infinity, duration: 10, times: [0, 0.2, 0.4, 0.7, 1], ease: "easeInOut" },
        x: { repeat: Infinity, duration: 12, ease: "easeInOut" },
        rotate: { repeat: Infinity, duration: 8, ease: "easeInOut" },
        scale: { repeat: Infinity, duration: 10, times: [0, 0.2, 0.4, 0.7, 1], ease: "easeInOut" }
      }}
    >
      <div className="absolute -bottom-1 w-12 h-2 bg-black/20 pixel-corners" />

      <motion.div 
        className="w-12 h-12 pixel-corners relative z-20 border-2 border-[#1A1A1A]" 
        style={{ backgroundColor: palette.skin }}
        animate={{ 
          // Head turn and glance towards each other
          x: isMale ? [0, 2, 0, 3, 3, 0, -1, 0] : [0, -2, 0, -3, -3, 0, 1, 0],
          y: [0, -1, 0, 1, 0, -0.5, 0],
          rotate: isMale ? [0, 5, 0, 8, 8, 0, -2, 0] : [0, -5, 0, -8, -8, 0, 2, 0],
        }}
        transition={{ 
          repeat: Infinity, 
          duration: 15, 
          times: [0, 0.1, 0.2, 0.45, 0.6, 0.75, 0.9, 1],
          ease: "easeInOut"
        }}
      >
        <div className="absolute bottom-0 right-0 w-4 h-4 opacity-20" style={{ backgroundColor: palette.skinShadow }} />
        
        <div className="absolute -top-2 -left-2 w-16 h-8 z-10" style={{ backgroundColor: palette.hair }}>
          <div className="absolute top-0 left-0 w-full h-2 opacity-30" style={{ backgroundColor: palette.hairHighlight }} />
          {!isMale && (
            <>
              <div className="absolute top-4 -left-1 w-4 h-16" style={{ backgroundColor: palette.hair }} />
              <div className="absolute top-4 -right-1 w-4 h-16" style={{ backgroundColor: palette.hair }} />
            </>
          )}
        </div>

        <div className="absolute top-7 left-3 w-3 h-3 bg-white border border-black/20">
          <div className="absolute top-0.5 left-0.5 w-1.5 h-1.5 bg-black" />
          {isBlinking && <div className="absolute inset-0" style={{ backgroundColor: palette.skin }} />}
        </div>
        <div className="absolute top-7 right-3 w-3 h-3 bg-white border border-black/20">
          <div className="absolute top-0.5 left-0.5 w-1.5 h-1.5 bg-black" />
          {isBlinking && <div className="absolute inset-0" style={{ backgroundColor: palette.skin }} />}
        </div>

        <div className="absolute top-10 left-2 w-2 h-1 bg-rose/30" />
        <div className="absolute top-10 right-2 w-2 h-1 bg-rose/30" />
      </motion.div>

      <div className="w-14 h-18 pixel-corners relative z-10 -mt-1 border-2 border-[#1A1A1A]" style={{ backgroundColor: palette.outfit }}>
        <div className="absolute right-0 bottom-0 w-4 h-full opacity-20" style={{ backgroundColor: palette.outfitShadow }} />
        
        <div className="absolute top-2 left-1/2 -translate-x-1/2 flex flex-col gap-2">
          <div className="w-1.5 h-1.5 bg-white/40 pixel-corners" />
          <div className="w-1.5 h-1.5 bg-white/40 pixel-corners" />
        </div>

        <motion.div 
          className="absolute left-1/2 -translate-x-1/2 -top-6 w-12 h-12 flex items-center justify-center z-30"
          animate={{ y: [0, -2, 0] }}
          transition={{ repeat: Infinity, duration: 2, ease: "easeInOut" }}
        >
          {isMale ? (
            <div className="text-4xl drop-shadow-[0_2px_0_rgba(0,0,0,0.5)]" style={{ color: palette.heart }}>♥</div>
          ) : (
            <div className="flex flex-col items-center">
              <div className="flex gap-1">
                <div className="w-3 h-3 pixel-corners" style={{ backgroundColor: palette.rose }} />
                <div className="w-3 h-3 pixel-corners" style={{ backgroundColor: palette.rose }} />
              </div>
              <div className="w-1.5 h-4 bg-green-800 pixel-corners" />
            </div>
          )}
        </motion.div>

        <div className="absolute top-6 -left-2 w-4 h-8 pixel-corners rotate-[30deg] border border-[#1A1A1A]" style={{ backgroundColor: palette.skin }} />
        <div className="absolute top-6 -right-2 w-4 h-8 pixel-corners -rotate-[30deg] border border-[#1A1A1A]" style={{ backgroundColor: palette.skin }} />
      </div>

      <div className="flex gap-2 -mt-1">
        <div className="w-5 h-10 pixel-corners border-2 border-[#1A1A1A]" style={{ backgroundColor: palette.pants }}>
          <div className="absolute bottom-0 left-0 w-full h-2 bg-black/20" />
        </div>
        <div className="w-5 h-10 pixel-corners border-2 border-[#1A1A1A]" style={{ backgroundColor: palette.pants }}>
          <div className="absolute bottom-0 left-0 w-full h-2 bg-black/20" />
        </div>
      </div>
    </motion.div>
  );
};
