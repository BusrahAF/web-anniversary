import React from 'react';
import { SceneWrapper } from '../../components/Layout';
import { motion } from 'motion/react';
import { AnimatedSection, AnimatedItem, glowVariants, TextReveal } from '../../components/Animations';

export const Hero: React.FC<{ nextId?: string }> = ({ nextId }) => {
  return (
    <SceneWrapper id="hero" nextId={nextId} className="flex flex-col items-center justify-center relative min-h-[100svh]">
      <AnimatedSection className="text-center space-y-12 relative z-10 w-full max-w-4xl mx-auto px-4">
        <motion.div 
          initial={{ height: 0 }}
          animate={{ height: 128 }}
          transition={{ duration: 1.5, ease: "easeOut" }}
          className="absolute -top-32 left-1/2 -translate-x-1/2 w-px bg-gradient-to-b from-transparent via-rose/50 to-rose/10" 
        />
        
        <div className="space-y-8 relative">
          <motion.div 
            variants={glowVariants}
            className="inline-block px-6 py-2 border border-rose/30 bg-rose/5 pixel-corners backdrop-blur-sm shadow-[0_0_15px_rgba(255,62,108,0.2)]"
          >
            <span className="text-rose font-mono text-[10px] md:text-xs tracking-[0.4em] uppercase font-bold">
              2024 - Now
            </span>
          </motion.div>
          <AnimatedItem>
            <div className="relative">
              <div className="absolute -left-12 top-0 w-8 h-8 bg-rose/20 pixel-corners animate-pulse" />
              <div className="absolute -right-12 bottom-0 w-6 h-6 bg-white/20 pixel-corners animate-bounce" style={{ animationDuration: '3s' }} />
              <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold tracking-wider text-glow leading-tight animate-shimmer relative z-10">
                HAPPY ANNIVERSARY <br /> <span className="text-rose relative inline-block">SAYANG
                  <motion.span 
                    animate={{ rotate: [0, 10, 0, -10, 0] }}
                    transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
                    className="absolute -right-8 -top-8 text-2xl md:text-4xl opacity-50"
                  >✨</motion.span>
                </span>
              </h1>
            </div>
          </AnimatedItem>
        </div>

        <div className="flex flex-col items-center gap-10 mt-8">
          <AnimatedItem>
            <div className="relative p-6 md:p-8 pixel-panel pixel-corners">
              <TextReveal 
                text="Sayang, selamat datang di ruang kecil kita. Di sini, di balik kode rahasia itu, tersimpan jejak langkah kita selama setahun ini. Sebuah personalized space khusus buat sayang, orang tersayangku. This is where everything begins—cerita tentang kita yang nggak sempurna, tapi indah." 
                className="text-cream/80 font-mono text-xs md:text-sm tracking-[0.15em] uppercase max-w-2xl mx-auto leading-loose text-justify"
              />
            </div>
          </AnimatedItem>

          <AnimatedItem>
            <motion.button
              onClick={() => document.getElementById('kisah-awal')?.scrollIntoView({ behavior: 'smooth' })}
              whileHover={{ scale: 1.05, y: -5 }}
              whileTap={{ scale: 0.95 }}
              className="px-12 py-5 bg-plum/50 border border-rose/50 pixel-corners hover:bg-rose/10 hover:border-rose transition-all duration-500 group relative overflow-hidden backdrop-blur-md"
            >
              <span className="absolute inset-0 w-full h-full bg-gradient-to-r from-transparent via-white/30 to-transparent -translate-x-full group-hover:animate-[shimmer_1.5s_infinite]" />
              <span className="font-mono text-sm font-bold tracking-[0.2em] uppercase relative z-10">Mulai Perjalanan</span>
            </motion.button>
          </AnimatedItem>
        </div>
      </AnimatedSection>
    </SceneWrapper>
  );
};
