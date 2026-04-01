import React, { useEffect, useRef } from 'react';
import gsap from 'gsap';

export const MeshGradient: React.FC = () => {
  return <div className="mesh-gradient" />;
};

export const PixelGrid: React.FC = () => {
  return (
    <div className="fixed inset-0 pointer-events-none z-[-2] opacity-20">
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#FF3E6C1A_1px,transparent_1px),linear-gradient(to_bottom,#FF3E6C1A_1px,transparent_1px)] bg-[size:40px_40px] [mask-image:radial-gradient(ellipse_60%_60%_at_50%_50%,#000_70%,transparent_100%)]" />
    </div>
  );
};

export const ParticleCanvas: React.FC = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    let particles: any[] = [];
    const particleCount = 10;

    const resize = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };

    class Particle {
      x: number;
      y: number;
      size: number;
      speedX: number;
      speedY: number;
      opacity: number;

      constructor() {
        this.x = Math.random() * canvas.width;
        this.y = Math.random() * canvas.height;
        this.size = Math.random() * 3 + 1;
        this.speedX = Math.random() * 0.5 - 0.25;
        this.speedY = Math.random() * 0.5 - 0.25;
        this.opacity = Math.random() * 0.5 + 0.2;
      }

      update() {
        this.x += this.speedX;
        this.y += this.speedY;

        if (this.x > canvas.width) this.x = 0;
        if (this.x < 0) this.x = canvas.width;
        if (this.y > canvas.height) this.y = 0;
        if (this.y < 0) this.y = canvas.height;
      }

      draw() {
        if (!ctx) return;
        ctx.fillStyle = `rgba(255, 62, 108, ${this.opacity})`;
        // Using squares for pixelated feel
        ctx.fillRect(this.x, this.y, this.size, this.size);
      }
    }

    const init = () => {
      particles = [];
      for (let i = 0; i < particleCount; i++) {
        particles.push(new Particle());
      }
    };

    const animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      particles.forEach(p => {
        p.update();
        p.draw();
      });
      requestAnimationFrame(animate);
    };

    resize();
    init();
    animate();

    window.addEventListener('resize', resize);
    return () => window.removeEventListener('resize', resize);
  }, []);

  return <canvas ref={canvasRef} className="fixed inset-0 pointer-events-none z-[-1]" />;
};

export const RoseAnimation: React.FC = () => {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const createRose = () => {
      if (!containerRef.current) return;
      const rose = document.createElement('div');
      rose.className = 'absolute pointer-events-none opacity-0 select-none font-mono text-rose/30';
      // Using a pixel-like character
      rose.innerText = '✦'; 
      rose.style.left = `${Math.random() * 100}%`;
      rose.style.bottom = '-50px';
      rose.style.fontSize = `${Math.random() * 10 + 10}px`;
      containerRef.current.appendChild(rose);

      gsap.to(rose, {
        y: -window.innerHeight - 100,
        x: (Math.random() - 0.5) * 200,
        rotation: Math.random() * 360,
        opacity: Math.random() * 0.3 + 0.1,
        duration: Math.random() * 15 + 15,
        ease: 'none',
        onComplete: () => rose.remove()
      });
    };

    const interval = setInterval(createRose, 5000);
    return () => clearInterval(interval);
  }, []);

  return <div ref={containerRef} className="fixed inset-0 pointer-events-none z-[-1] overflow-hidden" />;
};
