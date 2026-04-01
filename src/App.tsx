/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState, useEffect } from 'react';
import Lenis from 'lenis';
import { MeshGradient, ParticleCanvas, RoseAnimation, PixelGrid } from './components/BackgroundEffects';
import { PinGate, LoadingScreen } from './components/AccessFlow';
import { MusicPlayer } from './components/MusicPlayer';
import { SectionDivider, GameHUD } from './components/Layout';
import { CustomCursor } from './components/CustomCursor';

// Section Imports
import { Hero } from './sections/Hero/Hero';
import { KisahAwal } from './sections/KisahAwal/KisahAwal';
import { LoveLanguages } from './sections/LoveLanguages/LoveLanguages';
import { PlaylistSection } from './sections/PlaylistSection/PlaylistSection';
import { Recap } from './sections/Recap/Recap';
import { Growth } from './sections/Growth/Growth';
import { ActivityPhotos } from './sections/ActivityPhotos/ActivityPhotos';
import { Footer } from './sections/Footer/Footer';

export default function App() {
  const [step, setStep] = useState<'pin' | 'loading' | 'main'>('pin');

  useEffect(() => {
    if (step === 'main') {
      const lenis = new Lenis({
        duration: 1.2,
        easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      });

      function raf(time: number) {
        lenis.raf(time);
        requestAnimationFrame(raf);
      }

      requestAnimationFrame(raf);
      return () => lenis.destroy();
    }
  }, [step]);

  if (step === 'pin') {
    return (
      <>
        <MeshGradient />
        <PixelGrid />
        <PinGate onSuccess={() => setStep('loading')} />
      </>
    );
  }

  if (step === 'loading') {
    return <LoadingScreen onComplete={() => setStep('main')} />;
  }

  return (
    <main className="relative">
      <CustomCursor />
      <GameHUD />
      <MeshGradient />
      <PixelGrid />
      <ParticleCanvas />
      <RoseAnimation />
      <div className="grain" />

      <Hero nextId="kisah-awal" />
      <SectionDivider />
      
      <KisahAwal nextId="love-languages" />
      <SectionDivider />
      
      <LoveLanguages nextId="playlist-section" />
      <SectionDivider />
      
      <PlaylistSection nextId="recap" />
      <SectionDivider />
      
      <Recap nextId="growth" />
      <SectionDivider />
      
      <Growth nextId="activities" />
      <SectionDivider />
      
      <ActivityPhotos />

      <Footer />
    </main>
  );
}
