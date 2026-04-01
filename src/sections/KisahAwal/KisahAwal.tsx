import React from 'react';
import { SceneWrapper } from '../../components/Layout';
import { motion } from 'motion/react';
import { AnimatedSection, AnimatedItem, TextReveal } from '../../components/Animations';
import { KISAH_AWAL_TEXT_1, KISAH_AWAL_TEXT_2 } from '../../data/globalData';

export const KisahAwal: React.FC<{ nextId?: string }> = ({ nextId }) => {
  return (
    <SceneWrapper id="kisah-awal" nextId={nextId}>
      <AnimatedSection className="grid lg:grid-cols-2 gap-32 items-center">
        <AnimatedItem className="space-y-16">
          <div className="space-y-6">
            <div className="flex items-center gap-4">
              <span className="text-rose font-mono text-xs tracking-widest uppercase">01</span>
              <div className="h-px flex-1 bg-white/10" />
            </div>
            <h2 className="text-4xl md:text-5xl font-bold leading-tight animate-shimmer">
              Kisah Awal <br /> <span className="text-rose">Kita Berdua</span>
            </h2>
          </div>
          
          <div className="space-y-10 text-lg md:text-xl text-cream/80 leading-relaxed font-light text-justify">
            <TextReveal text={KISAH_AWAL_TEXT_1} />
            <div className="p-8 md:p-10 pixel-panel pixel-corners relative group overflow-hidden">
              <div className="absolute inset-0 bg-rose/5 translate-x-full group-hover:translate-x-0 transition-transform duration-700" />
              <TextReveal text={KISAH_AWAL_TEXT_2} className="text-sm italic font-mono text-rose/90 relative z-10 leading-relaxed text-justify" />
            </div>
          </div>
        </AnimatedItem>

        <AnimatedItem>
          <motion.div 
            initial={{ y: 50, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 1, ease: "easeOut" }}
            className="relative aspect-[4/5] group w-full max-w-md mx-auto"
          >
            <motion.div 
              animate={{ y: [0, -15, 0], rotate: [-3, -5, -3] }}
              transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
              className="absolute inset-0 bg-rose/10 pixel-corners" 
            />
            <motion.div 
              animate={{ y: [0, 15, 0], rotate: [3, 5, 3] }}
              transition={{ duration: 7, repeat: Infinity, ease: "easeInOut", delay: 0.5 }}
              className="absolute inset-0 bg-white/5 pixel-corners" 
            />
            <div className="relative h-full w-full overflow-hidden pixel-corners border border-white/10 bg-plum z-10">
              <div className="group w-full h-full overflow-hidden">
            <video
            src="/videos/kita.mp4"
            autoPlay
            loop
            muted
            playsInline
            className="
              w-full h-full object-cover
              grayscale
              scale-110
              transition-all duration-1000
              group-hover:grayscale-0
              group-hover:scale-100
            "
          />
             </div>
            </div>
          </motion.div>
        </AnimatedItem>
      </AnimatedSection>
    </SceneWrapper>
  );
};
