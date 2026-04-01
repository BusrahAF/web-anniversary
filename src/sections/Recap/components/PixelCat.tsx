import React from 'react';
import { motion } from 'motion/react';

export const PixelCat = () => {
  return (
    <motion.div 
      className="absolute bottom-4 left-1/4 z-20"
      animate={{ 
        x: [0, 80, 80, 80, 80, 0, 0],
        scaleX: [1, 1, 1, 1, -1, -1, 1]
      }}
      transition={{ 
        repeat: Infinity, 
        duration: 20, // Increased duration to accommodate idle animations
        times: [0, 0.15, 0.25, 0.45, 0.55, 0.85, 1],
        ease: "easeInOut"
      }}
    >
      <motion.div 
        className="relative w-12 h-8 bg-[#90A4AE] pixel-corners border-2 border-[#37474F]"
        animate={{ 
          // Stretch animation and breathing
          scaleY: [1, 1.1, 0.8, 1.2, 1, 0.9, 0.9, 1],
          scaleX: [1, 0.9, 1.2, 0.8, 1, 1.1, 1.1, 1],
          y: [0, -2, 0, 0, 0, 2, 2, 0]
        }}
        transition={{ 
          repeat: Infinity, 
          duration: 20, 
          times: [0, 0.2, 0.25, 0.3, 0.4, 0.5, 0.6, 0.7] 
        }}
      >
        <div className="absolute bottom-0 right-0 w-4 h-full bg-black/10" />

        <motion.div 
          className="absolute -left-4 top-2 w-6 h-2 bg-[#90A4AE] pixel-corners border border-[#37474F]"
          style={{ originX: 1 }}
          animate={{ rotate: [0, 45, -20, 60, 0] }}
          transition={{ repeat: Infinity, duration: 4, ease: "easeInOut" }}
        />
        
        <motion.div 
          className="absolute -right-4 -top-4 w-8 h-8 bg-[#90A4AE] pixel-corners border-2 border-[#37474F]"
          animate={{ 
            // Look around animation
            rotate: [0, 0, -25, 25, 0, 0, -15, 15, 0],
            x: [0, 0, -1, 1, 0, 0, -0.5, 0.5, 0],
            y: [0, 0, 0, 0, 0, 1, 1, 0, 0]
          }}
          transition={{ 
            repeat: Infinity, 
            duration: 20, 
            times: [0, 0.5, 0.55, 0.6, 0.65, 0.7, 0.75, 0.8, 1] 
          }}
        >
          <div className="absolute -top-2 left-0 w-2 h-2 bg-[#90A4AE] pixel-corners border-t border-l border-[#37474F]" />
          <div className="absolute -top-2 right-0 w-2 h-2 bg-[#90A4AE] pixel-corners border-t border-r border-[#37474F]" />
          
          <div className="absolute top-3 left-2 w-1.5 h-1.5 bg-black pixel-corners" />
          <div className="absolute top-3 right-2 w-1.5 h-1.5 bg-black pixel-corners" />
          
          <div className="absolute top-5 left-1 w-2 h-1 bg-rose/20" />
          <div className="absolute top-5 right-1 w-2 h-1 bg-rose/20" />
        </motion.div>

        <div className="absolute -bottom-2 left-2 w-2 h-3 bg-[#78909C] pixel-corners border border-[#37474F]" />
        <div className="absolute -bottom-2 right-2 w-2 h-3 bg-[#78909C] pixel-corners border border-[#37474F]" />
      </motion.div>
    </motion.div>
  );
};
