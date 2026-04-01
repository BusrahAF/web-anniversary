import React, { useState, useEffect } from 'react';
import { SceneWrapper } from '../../components/Layout';
import { motion } from 'framer-motion';
import { AnimatedSection, AnimatedItem } from '../../components/Animations';
import { cn } from '../../lib/utils';
import { ACTIVITIES } from '../../data/globalData';

export const ActivityPhotos: React.FC<{ nextId?: string }> = ({ nextId }) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % ACTIVITIES.length);
    }, 4500);
    return () => clearInterval(timer);
  }, []);

  return (
    <SceneWrapper id="activities" nextId={nextId} className="relative">
      <AnimatedSection className="text-center mb-16 md:mb-24 space-y-6 relative z-10">
        <AnimatedItem className="flex items-center justify-center gap-4">
          <div className="h-px w-12 bg-white/10" />
          <span className="text-rose font-mono text-xs tracking-widest uppercase">05</span>
          <div className="h-px w-12 bg-white/10" />
        </AnimatedItem>
        <AnimatedItem>
          <h2 className="text-4xl md:text-5xl font-bold animate-shimmer">
            Activity Log
          </h2>
        </AnimatedItem>
      </AnimatedSection>

      <AnimatedSection className="w-full max-w-6xl mx-auto px-4 md:px-8 relative z-10">
        <div className="relative flex items-center justify-center h-[300px] md:h-[500px] overflow-hidden">
          {ACTIVITIES.map((activity, idx) => {
            let offset = idx - currentIndex;

            if (offset > ACTIVITIES.length / 2) offset -= ACTIVITIES.length;
            if (offset < -ACTIVITIES.length / 2) offset += ACTIVITIES.length;

            const isCenter = idx === currentIndex;
            const isVisible = Math.abs(offset) <= 2;

            return (
              <motion.div
                key={idx}
                initial={false}
                animate={{
                  x: `${offset * 90}%`,
                  scale: isCenter ? 1.1 : 0.85,
                  opacity: isVisible ? 1 : 0,
                  filter: isCenter ? 'blur(0px)' : 'blur(3px)',
                  zIndex: isCenter ? 10 : 5 - Math.abs(offset),
                }}
                transition={{
                  duration: 1.2,
                  ease: [0.25, 0.8, 0.25, 1],
                }}
                className={cn(
                  "absolute w-[75%] md:w-[50%] aspect-video rounded-[6px] border-2 overflow-hidden bg-black/60 shadow-2xl",
                  isCenter ? "border-rose/60" : "border-white/10"
                )}
              >
                <img
                  src={activity.image}
                  alt={`Activity ${idx + 1}`}
                  className="w-full h-full object-cover transition-transform duration-1000"
                />
                <div className="absolute inset-0 bg-black/30 pointer-events-none" />
              </motion.div>
            );
          })}
        </div>

        <div className="flex justify-center gap-3 mt-12">
          {ACTIVITIES.map((_, idx) => (
            <button
              key={idx}
              onClick={() => setCurrentIndex(idx)}
              className={`h-1 transition-all duration-700 rounded-full ${
                idx === currentIndex
                  ? 'w-10 bg-rose shadow-[0_0_15px_rgba(255,62,108,0.6)]'
                  : 'w-2 bg-white/20 hover:bg-white/40'
              }`}
            />
          ))}
        </div>
      </AnimatedSection>
    </SceneWrapper>
  );
};