import React, { useState, useEffect, useRef } from 'react';
import { motion, useScroll, useTransform } from 'motion/react';
import { PixelCharacter } from './PixelCharacter';
import { PixelCat } from './PixelCat';
import { 
  WindStreak, 
  MoonMote, 
  PixelTree, 
  PixelGrass, 
  PixelFlower, 
  PixelButterfly, 
  PixelFirefly, 
  DistantHills 
} from './PixelElements';

export const PixelScene = () => {
  const [isBlinking, setIsBlinking] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);
  
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"]
  });

  const bgY = useTransform(scrollYProgress, [0, 1], [10, -10]);
  const hillY = useTransform(scrollYProgress, [0, 1], [20, -20]);
  const midY = useTransform(scrollYProgress, [0, 1], [30, -30]);
  const fgY = useTransform(scrollYProgress, [0, 1], [50, -50]);

  useEffect(() => {
    const blinkInterval = setInterval(() => {
      setIsBlinking(true);
      setTimeout(() => setIsBlinking(false), 150);
    }, 3000);
    return () => clearInterval(blinkInterval);
  }, []);

  return (
    <div ref={containerRef} className="w-full h-full relative flex items-center justify-center overflow-hidden bg-[#0a0a1a]">
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-full pointer-events-none overflow-hidden">
        <motion.div 
          animate={{ opacity: [0.02, 0.04, 0.02], scale: [1, 1.05, 1] }}
          transition={{ repeat: Infinity, duration: 10, ease: "easeInOut" }}
          className="absolute top-[-10%] left-1/2 -translate-x-1/2 w-[150%] h-[150%] bg-blue-400/5 pixel-corners" 
        />
        <motion.div 
          animate={{ opacity: [0.04, 0.08, 0.04], scale: [1, 1.1, 1] }}
          transition={{ repeat: Infinity, duration: 7, ease: "easeInOut" }}
          className="absolute top-[0%] left-1/2 -translate-x-1/2 w-[100%] h-[100%] bg-blue-400/5 pixel-corners" 
        />
        <motion.div 
          animate={{ opacity: [0.06, 0.12, 0.06], scale: [1, 1.2, 1] }}
          transition={{ repeat: Infinity, duration: 5, ease: "easeInOut" }}
          className="absolute top-[10%] left-1/2 -translate-x-1/2 w-[60%] h-[60%] bg-blue-400/5 pixel-corners" 
        />
      </div>

      <WindStreak delay={0} />
      <WindStreak delay={2} />
      <WindStreak delay={4} />
      <MoonMote delay={1} />
      <MoonMote delay={3} />
      <MoonMote delay={5} />
      
      <motion.div 
        style={{ y: bgY }}
        className="absolute top-8 right-12 w-16 h-16 overflow-hidden"
      >
        <div className="absolute inset-0 bg-[#FFF59D] pixel-corners" />
        <div className="absolute -top-4 -right-4 w-16 h-16 bg-[#0a0a1a] pixel-corners" />
        
        <motion.div 
          animate={{ opacity: [0, 1, 0], scale: [0.5, 1, 0.5] }}
          transition={{ repeat: Infinity, duration: 2, delay: 0.5 }}
          className="absolute top-2 left-2 w-2 h-2 bg-white pixel-corners"
        />
      </motion.div>
      
      {[...Array(8)].map((_, i) => (
        <motion.div
          key={`star-${i}`}
          style={{ 
            y: bgY,
            left: `${Math.random() * 100}%`,
            top: `${Math.random() * 40}%`
          }}
          animate={{ opacity: [0.1, 0.6, 0.1] }}
          transition={{ repeat: Infinity, duration: 2 + Math.random() * 3, delay: Math.random() * 5 }}
          className="absolute w-1 h-1 bg-white pixel-corners"
        />
      ))}

      <motion.div 
        animate={{ x: [-20, 20, -20] }}
        transition={{ repeat: Infinity, duration: 20, ease: "linear" }}
        className="absolute top-20 left-10 opacity-30"
      >
        <div className="w-16 h-8 bg-purple-400 pixel-corners" />
        <div className="absolute -top-3 left-4 w-10 h-6 bg-purple-300 pixel-corners" />
      </motion.div>
      <motion.div 
        animate={{ x: [20, -20, 20] }}
        transition={{ repeat: Infinity, duration: 25, ease: "linear" }}
        className="absolute top-40 right-20 opacity-20"
      >
        <div className="w-20 h-10 bg-purple-500 pixel-corners" />
        <div className="absolute -top-4 left-6 w-12 h-8 bg-purple-400 pixel-corners" />
      </motion.div>

      <div className="absolute bottom-0 w-full h-1/4 bg-[#0d1f0d] border-t border-white/5" />
      
      <motion.div style={{ y: hillY }} className="absolute bottom-[20%] w-full">
        <DistantHills className="justify-center" />
      </motion.div>

      <motion.div style={{ y: midY }} className="absolute bottom-1/4 left-8">
        <PixelTree className="scale-75 opacity-40 brightness-50" />
      </motion.div>
      <motion.div style={{ y: midY }} className="absolute bottom-1/4 right-12">
        <PixelTree className="scale-90 opacity-60 brightness-75" />
      </motion.div>
      
      <motion.div 
        style={{ y: fgY }}
        className="absolute bottom-[15%] w-full flex justify-around items-end px-4"
      >
        <div className="flex items-end gap-1">
          <PixelGrass delay={0.1} />
          <PixelFlower color="#F48FB1" type="tulip" className="brightness-75" delay={0.2} />
          <PixelGrass delay={0.4} />
        </div>
        <PixelFlower color="#CE93D8" type="cluster" className="mb-1 brightness-75" delay={0.5} />
        <div className="flex items-end gap-1">
          <PixelGrass delay={0.7} />
          <PixelFlower color="#90CAF9" type="tall" className="brightness-75" delay={0.8} />
        </div>
        <PixelFlower color="#A5D6A7" type="dot" className="mb-2 brightness-75" delay={0.1} />
        <PixelFlower color="#FFD54F" type="sunflower" className="brightness-75" delay={0.4} />
        <div className="flex items-end gap-1">
          <PixelGrass delay={0.2} />
          <PixelFlower color="#E57373" type="rose" className="brightness-75" delay={0.7} />
        </div>
        <PixelFlower color="#9575CD" type="lavender" className="brightness-75" delay={0.3} />
        <PixelFlower color="#FFFFFF" type="lily" className="brightness-75" delay={0.6} />
        <div className="flex items-end gap-1">
          <PixelGrass delay={0.5} />
          <PixelFlower color="#FFF59D" type="tulip" className="brightness-75" delay={0.9} />
        </div>
        <PixelFlower color="#FF8A65" type="cluster" className="mb-1 brightness-75" delay={0.2} />
        <PixelFlower color="#4DB6AC" type="tall" className="brightness-75" delay={0.5} />
        <div className="flex items-end gap-1">
          <PixelGrass delay={0.8} />
          <PixelFlower color="#BA68C8" type="dot" className="mb-2 brightness-75" delay={0.8} />
        </div>
        <PixelFlower color="#FFB74D" type="sunflower" className="brightness-75" delay={0.1} />
        <PixelFlower color="#F06292" type="rose" className="brightness-75" delay={0.4} />
      </motion.div>

      <motion.div style={{ y: fgY }} className="absolute inset-0 pointer-events-none">
        <PixelCat />
        <PixelButterfly color="#FFEB3B" delay={0} />
        <PixelButterfly color="#03A9F4" delay={2} />
        <PixelFirefly delay={0} />
        <PixelFirefly delay={1.5} />
        <PixelFirefly delay={3} />
      </motion.div>

      <motion.div 
        style={{ y: fgY }}
        className="flex items-end gap-8 relative z-10 mb-4"
      >
        <PixelCharacter type="male" isBlinking={isBlinking} />
        <PixelCharacter type="female" isBlinking={isBlinking} />
      </motion.div>

      {[...Array(5)].map((_, i) => (
        <motion.div
          key={i}
          className="absolute text-rose/30 pointer-events-none"
          initial={{ 
            x: (Math.random() - 0.5) * 200, 
            y: 100, 
            opacity: 0,
            scale: 0.5 
          }}
          animate={{ 
            y: -200, 
            opacity: [0, 0.6, 0],
            x: (Math.random() - 0.5) * 300
          }}
          transition={{ 
            repeat: Infinity, 
            duration: 4 + Math.random() * 2,
            delay: i * 0.8,
            ease: "linear"
          }}
        >
          ♥
        </motion.div>
      ))}
    </div>
  );
};
