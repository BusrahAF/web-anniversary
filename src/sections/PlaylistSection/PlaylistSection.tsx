import React from 'react';
import { SceneWrapper } from '../../components/Layout';
import { AnimatedSection, AnimatedItem } from '../../components/Animations';
import { MusicPlayer } from '../../components/MusicPlayer';

export const PlaylistSection: React.FC<{ nextId?: string }> = ({ nextId }) => {
  return (
    <SceneWrapper id="playlist-section" nextId={nextId} className="relative">
      <div className="absolute top-1/4 left-10 w-4 h-4 bg-rose/10 pixel-corners animate-pulse" style={{ animationDuration: '2s' }} />
      <div className="absolute bottom-1/4 right-10 w-6 h-6 bg-white/5 pixel-corners animate-bounce" style={{ animationDuration: '4s' }} />
      <AnimatedSection className="relative z-10">
        <AnimatedItem>
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 md:mb-16 text-glow animate-shimmer">Soundtrack of Us</h2>
        </AnimatedItem>
      </AnimatedSection>
      <div className="relative z-10">
        <MusicPlayer />
      </div>
    </SceneWrapper>
  );
};
