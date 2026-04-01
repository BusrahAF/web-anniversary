import React from 'react';
import { cn } from '@/src/lib/utils';
import { FloatingPixels } from './Animations';
import { motion } from 'motion/react';
import { ChevronDown, Home, Book, Heart, Music, Image, TrendingUp, Camera } from 'lucide-react';

export const SceneWrapper: React.FC<{ children: React.ReactNode, className?: string, id?: string, nextId?: string }> = ({ children, className, id, nextId }) => {
  return (
    <section 
      id={id}
      className={cn(
        "min-h-screen w-full flex flex-col items-center justify-center relative px-8 py-32 overflow-hidden",
        className
      )}
    >
      <FloatingPixels />
      <div className="max-w-7xl w-full z-10">
        {children}
      </div>
      {nextId && (
        <motion.button
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          whileHover={{ y: 5 }}
          onClick={() => document.getElementById(nextId)?.scrollIntoView({ behavior: 'smooth' })}
          className="absolute bottom-12 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 group cursor-pointer z-20"
        >
          <span className="text-[10px] font-mono tracking-[0.3em] uppercase text-rose/60 group-hover:text-rose transition-colors">Next Stage</span>
          <ChevronDown className="text-rose/40 group-hover:text-rose transition-colors animate-bounce" size={20} />
        </motion.button>
      )}
    </section>
  );
};

export const GameHUD: React.FC = () => {
  const menuItems = [
    { id: 'hero', icon: Home, label: 'Start' },
    { id: 'kisah-awal', icon: Book, label: 'Story' },
    { id: 'love-languages', icon: Heart, label: 'Love' },
    { id: 'playlist-section', icon: Music, label: 'Music' },
    { id: 'recap', icon: Image, label: 'Recap' },
    { id: 'growth', icon: TrendingUp, label: 'Growth' },
    { id: 'activities', icon: Camera, label: 'Log' },
  ];

  return (
    <nav className="fixed top-8 left-1/2 -translate-x-1/2 z-[100] flex items-center gap-2 p-2 bg-plum/40 backdrop-blur-xl border border-white/10 pixel-corners shadow-2xl">
      {menuItems.map((item) => (
        <motion.button
          key={item.id}
          whileHover={{ scale: 1.1, backgroundColor: 'rgba(255, 62, 108, 0.1)' }}
          whileTap={{ scale: 0.95 }}
          onClick={() => document.getElementById(item.id)?.scrollIntoView({ behavior: 'smooth' })}
          className="p-3 flex flex-col items-center gap-1 group transition-all"
        >
          <item.icon size={18} className="text-white/40 group-hover:text-rose transition-colors" />
          <span className="text-[8px] font-mono tracking-widest uppercase text-white/20 group-hover:text-rose/60 hidden md:block">
            {item.label}
          </span>
        </motion.button>
      ))}
    </nav>
  );
};

export const SectionDivider: React.FC = () => (
  <div className="section-divider pixel-corners" />
);
