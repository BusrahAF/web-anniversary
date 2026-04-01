import React from 'react';
import { SceneWrapper } from '../../components/Layout';
import { AnimatedSection, AnimatedItem, TextReveal } from '../../components/Animations';
import { PixelScene } from './components/PixelScene';
import { RECAP_TEXT } from '../../data/globalData';

export const Recap: React.FC<{ nextId?: string }> = ({ nextId }) => {
  return (
    <SceneWrapper id="recap" nextId={nextId} className="relative">
      <div className="absolute top-1/4 left-10 w-4 h-4 bg-rose/10 pixel-corners animate-pulse" />
      <div className="absolute bottom-1/4 right-10 w-6 h-6 bg-white/5 pixel-corners animate-bounce" style={{ animationDuration: '4s' }} />
      <AnimatedSection className="max-w-6xl mx-auto relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          <AnimatedItem className="space-y-10">
            <div className="space-y-8">
              <div className="flex items-center gap-4">
                <span className="text-rose font-mono text-sm tracking-widest uppercase">03</span>
                <div className="h-px flex-1 bg-white/10" />
              </div>
              {/* Normalized Typography: text-4xl md:text-5xl matches other sections */}
              <h2 className="text-4xl md:text-5xl font-bold text-glow leading-tight animate-shimmer">The Recap</h2>
              {/* Normalized Typography: text-lg md:text-xl matches other sections */}
              <div className="text-lg md:text-xl leading-relaxed text-cream/90 font-light space-y-6 text-justify">
                <TextReveal text={RECAP_TEXT} />
              </div>
            </div>
          </AnimatedItem>
          
          <AnimatedItem className="relative aspect-video lg:aspect-square w-full">
            <div className="w-full h-full pixel-panel pixel-corners bg-black/40 overflow-hidden flex items-center justify-center relative border-2 border-white/10 shadow-2xl">
              <PixelScene />
            </div>
          </AnimatedItem>
        </div>
      </AnimatedSection>
    </SceneWrapper>
  );
};
