import React from 'react';
import { SceneWrapper } from '../../components/Layout';
import { AnimatedSection, AnimatedItem, TextReveal } from '../../components/Animations';
import { GROWTH_TEXT_1, GROWTH_TEXT_2 } from '../../data/globalData';

export const Growth: React.FC<{ nextId?: string }> = ({ nextId }) => {
  return (
    <SceneWrapper id="growth" nextId={nextId} className="relative">
      <div className="absolute top-1/2 left-4 w-8 h-8 bg-rose/5 pixel-corners animate-pulse" style={{ animationDuration: '2s' }} />
      <div className="absolute top-10 right-20 w-3 h-3 bg-white/10 pixel-corners animate-bounce" style={{ animationDuration: '5s' }} />
      <AnimatedSection className="max-w-5xl mx-auto text-center space-y-16 md:space-y-24 relative z-10">
        <AnimatedItem className="space-y-8">
          <div className="flex items-center justify-center gap-4">
            <div className="h-px w-12 bg-white/10" />
            <span className="text-rose font-mono text-xs tracking-widest uppercase">04</span>
            <div className="h-px w-12 bg-white/10" />
          </div>
          <h2 className="text-4xl md:text-5xl font-bold tracking-wider text-glow animate-shimmer">Our Growth</h2>
        </AnimatedItem>

        <div className="grid md:grid-cols-2 gap-8 md:gap-16 text-left">
          <AnimatedItem>
            <div className="p-8 md:p-12 pixel-panel pixel-corners space-y-8 h-full">
              <TextReveal text={GROWTH_TEXT_1} className="text-base md:text-lg leading-relaxed text-cream/80 font-light text-justify" />
            </div>
          </AnimatedItem>
          <AnimatedItem>
            <div className="p-8 md:p-12 pixel-panel pixel-corners space-y-8 bg-rose/5 h-full">
              <TextReveal text={GROWTH_TEXT_2} className="text-base md:text-lg leading-relaxed text-cream font-medium text-justify" />
            </div>
          </AnimatedItem>
        </div>
      </AnimatedSection>
    </SceneWrapper>
  );
};
