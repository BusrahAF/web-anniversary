import React from 'react';
import { AnimatedSection, AnimatedItem } from '../../components/Animations';

export const Footer = () => {
  return (
    <footer className="py-12 md:py-20 text-center relative">
      <AnimatedSection>
        <AnimatedItem>
          <div className="absolute top-0 left-1/2 -translate-x-1/2 w-32 h-1 bg-rose/30 pixel-corners" />
          <p className="text-rose/80 font-mono text-xs tracking-widest uppercase mt-4">
            I Love You 3000 Sayang
          </p>
          <div className="mt-4 flex justify-center gap-4 text-rose/60 text-sm">
            <span className="animate-pulse">✦</span>
            <span className="animate-pulse delay-75">♥</span>
            <span className="animate-pulse delay-150">✦</span>
          </div>
        </AnimatedItem>
      </AnimatedSection>
    </footer>
  );
};
