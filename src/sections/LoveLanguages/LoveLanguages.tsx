import React from 'react';
import { SceneWrapper } from '../../components/Layout';
import { AnimatedSection, AnimatedItem, TextReveal } from '../../components/Animations';
import { LOVE_LANGUAGES } from '../../data/globalData';

export const LoveLanguages: React.FC<{ nextId?: string }> = ({ nextId }) => {
  return (
    <SceneWrapper id="love-languages" nextId={nextId} className="relative">
      <div className="absolute top-1/4 right-10 w-6 h-6 bg-rose/10 pixel-corners animate-pulse" style={{ animationDuration: '2.5s' }} />
      <div className="absolute bottom-1/4 left-10 w-4 h-4 bg-white/5 pixel-corners animate-bounce" style={{ animationDuration: '3.5s' }} />
      <AnimatedSection className="text-center mb-24 md:mb-32 space-y-6 relative z-10">
        <AnimatedItem className="flex items-center justify-center gap-4">
          <div className="h-px w-12 bg-white/10" />
          <span className="text-rose font-mono text-xs tracking-widest uppercase">02</span>
          <div className="h-px w-12 bg-white/10" />
        </AnimatedItem>
        <AnimatedItem>
          <h2 className="text-4xl md:text-5xl font-bold animate-shimmer">Our Love Language</h2>
        </AnimatedItem>
        <AnimatedItem>
          <div className="max-w-4xl mx-auto text-lg md:text-xl text-cream/80 leading-relaxed font-light mt-8 text-justify space-y-4">
            <TextReveal text="cinta punya banyak bahasa, dan bareng sayang, akuu perlahan belajar buat ngerti semua itu dengan cara yang paling manis. akuu sadar banget, Words of Affirmation dari sayang tuh sekecil apapun selalu kena. pujian kecil, atau sekedar kata semangat di saat akuu lagi capek atau down, itu bener bener punya pengaruh besar ke akuu. hal yang mungkin keliatan sederhana, tapi buat akuu itu berarti banget. terus juga Quality Time kita… walaupun kadang cuma obrolan absurd di motor, atau makan pinggir jalan, tapi justru disitu akuu ngerasa tenang. kek keisi lagi aja energi akuu tanpa harus sesuatu yang mewah atau ribet. dan yang paling ngenain buat akuu, Physical Touch kecil dari sayang. hal hal sederhana yang mungkin buat orang lain biasa aja, tapi buat akuu itu kerasa tulus banget. bener bener pure love yang susah dijelasin." />
            <TextReveal text="dan lewat semua ini, akuu juga mau makasih… karna akuu tau, sayang juga udah banyak usaha buat ngejaga hubungan kita sejauh ini." />
          </div>
        </AnimatedItem>
      </AnimatedSection>

      <AnimatedSection className="w-full max-w-7xl mx-auto relative z-10">
        <div className="flex overflow-x-auto snap-x snap-mandatory gap-6 md:gap-8 pb-12 pt-4 px-4 md:px-8 hide-scrollbar">
          {LOVE_LANGUAGES.map((lang, i) => (
            <AnimatedItem key={i} className="snap-center shrink-0 w-[85vw] md:w-[320px] lg:w-[350px]">
              <div className="p-8 md:p-12 pixel-panel pixel-corners text-center space-y-8 group hover:bg-rose/5 transition-colors h-full flex flex-col justify-center">
                <div className="text-5xl group-hover:scale-110 transition-transform duration-500 filter drop-shadow-[0_0_10px_rgba(255,62,108,0.3)]">
                  {lang.icon}
                </div>
                <div className="space-y-4">
                  <h3 className="text-xl font-bold text-rose tracking-tight">{lang.title}</h3>
                  <p className="text-xs text-cream/60 font-mono leading-relaxed uppercase tracking-wider">{lang.desc}</p>
                </div>
              </div>
            </AnimatedItem>
          ))}
        </div>
      </AnimatedSection>
    </SceneWrapper>
  );
};

// test update