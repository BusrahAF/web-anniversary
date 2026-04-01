import React, { useState, useRef, useEffect } from 'react';
import { Play, Pause, SkipBack, SkipForward, Music } from 'lucide-react';
import { cn } from '@/src/lib/utils';
import { motion } from 'motion/react';
import { AnimatedSection, AnimatedItem, TextReveal } from './Animations';

interface Song {
  id: number;
  title: string;
  artist: string;
  url: string;
  special?: boolean;
}

const PLAYLIST: Song[] = [
  {
    id: 1,
    title: "No. 1 Party Anthem",
    artist: "Arctic Monkeys",
    url: "/music/party-anthem.mp3"
  },
  {
    id: 2,
    title: "Last Night on Earth",
    artist: "Green Day",
    url: "/music/last-night.mp3"
  },
  {
    id: 3,
    title: "Kota Ini Tak Sama Tanpamu",
    artist: "Nadhif Basalamah",
    url: "/music/tak-sama-tanpamu.mp3"
  },
  {
    id: 4,
    title: "Penjaga Hati",
    artist: "Nadhif Basalamah",
    url: "/music/penjaga-hati.mp3"
  }
];

export const MusicPlayer: React.FC = () => {
  const [currentSongIndex, setCurrentSongIndex] = useState(0);
  const [isPlaying, setIsPlaying] = useState(false);
  const [progress, setProgress] = useState(0);
  const [currentTime, setCurrentTime] = useState("0:00");
  const [duration, setDuration] = useState("0:00");
  
  const audioRef = useRef<HTMLAudioElement>(null);
  const currentSong = PLAYLIST[currentSongIndex];

  const formatTime = (time: number) => {
    const minutes = Math.floor(time / 60);
    const seconds = Math.floor(time % 60);
    return `${minutes}:${seconds.toString().padStart(2, '0')}`;
  };

  useEffect(() => {
    const audio = audioRef.current;
    if (!audio) return;

    const updateProgress = () => {
      const p = (audio.currentTime / audio.duration) * 100;
      setProgress(p);
      setCurrentTime(formatTime(audio.currentTime));
    };

    const handleLoadedMetadata = () => {
      setDuration(formatTime(audio.duration));
    };

    const handleEnded = () => {
      nextSong();
    };

    audio.addEventListener('timeupdate', updateProgress);
    audio.addEventListener('loadedmetadata', handleLoadedMetadata);
    audio.addEventListener('ended', handleEnded);

    return () => {
      audio.removeEventListener('timeupdate', updateProgress);
      audio.removeEventListener('loadedmetadata', handleLoadedMetadata);
      audio.removeEventListener('ended', handleEnded);
    };
  }, [currentSongIndex]);

  useEffect(() => {
    if (isPlaying) {
      audioRef.current?.play().catch(() => setIsPlaying(false));
    } else {
      audioRef.current?.pause();
    }
  }, [isPlaying, currentSongIndex]);

  const togglePlay = () => setIsPlaying(!isPlaying);

  const nextSong = () => {
    setCurrentSongIndex((prev) => (prev + 1) % PLAYLIST.length);
    setIsPlaying(true);
  };

  const prevSong = () => {
    setCurrentSongIndex((prev) => (prev - 1 + PLAYLIST.length) % PLAYLIST.length);
    setIsPlaying(true);
  };

  const handleProgressClick = (e: React.MouseEvent<HTMLDivElement>) => {
    const audio = audioRef.current;
    if (!audio) return;
    const rect = e.currentTarget.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const p = x / rect.width;
    audio.currentTime = p * audio.duration;
  };

  return (
    <AnimatedSection>
      <AnimatedItem className="max-w-4xl mx-auto mb-16 text-cream/80 leading-relaxed font-light text-justify space-y-6">
        <TextReveal text="musik tuh kek mesin waktu… bisa banget ngebawa kita balik ke momen momen tertentu, dan playlist ini isinya bener bener soundtrack perjalanan kita selama setahun ini. dari awal kita jadian yang vibes nya Party Anthem, penuh energi sama euforia, terus lanjut ke fase LDR dimana 'Last Night on Earth'-nya Green Day nemenin malam malam sepi, nyuarain rasa rindu yang numpuk dan harapan buat bisa cepet ketemu. dan tentu aja, lagu lagu yang sering kita puter waktu kita healing di Solo, kek 'Kota Ini Tak Sama Tanpamu' dari Nadhif Basalamah, tiap liriknya tuh kerasa pas banget… kek ngegambarin gimana “lengkap” nya hidup akuu waktu bisa jalan jalan di Solo bareng sayang." />
        <TextReveal text="tapi dari semua lagu itu, ada satu yang paling spesial buat akuu, lagu Nadhif Basalamah - 'Penjaga Hati', specifically di menit 3:09 sampai 3:50, That particular part just hits different. disitu tuh kek akuu “nyimpen” sayang di setiap nada sama liriknya, rasanya dalem banget, kek jadi bentuk perasaan akuu yang paling jujur, kalo sayang emang penjaga hati akuu yang paling tulus. coba deh dengerin di menit itu… it's all for you, musiknya juga udah ada di playlist bawah, tinggal play aja yaa, it's all for you." />
      </AnimatedItem>

      <AnimatedItem className="w-full max-w-5xl mx-auto pixel-panel pixel-corners overflow-hidden flex flex-col md:flex-row">
      {/* Left: Playlist */}
      <div className="w-full md:w-[350px] bg-plum border-b md:border-b-0 md:border-r border-rose/20 p-6 md:p-8 relative z-10">
        <div className="flex items-center justify-between mb-8 md:mb-12">
          <h3 className="text-[10px] tracking-[0.4em] uppercase text-rose font-mono font-bold">Playlist</h3>
          <Music size={14} className="text-rose/60" />
        </div>
        <div className="space-y-3">
          {PLAYLIST.map((song, index) => (
            <button
              key={song.id}
              onClick={() => {
                setCurrentSongIndex(index);
                setIsPlaying(true);
              }}
              className={cn(
                "w-full text-left p-4 pixel-corners transition-all duration-300 group flex items-center gap-4",
                currentSongIndex === index 
                  ? "bg-rose/10 text-rose border border-rose/30 translate-x-2" 
                  : "text-cream/50 hover:text-cream/90 hover:bg-white/[0.05] border border-transparent hover:translate-x-1"
              )}
            >
              <span className="text-[10px] font-mono opacity-40 w-6">0{index + 1}</span>
              <div className="flex-1 min-w-0">
                <div className="font-bold text-sm truncate tracking-tight">{song.title}</div>
                <div className="text-[10px] opacity-60 truncate uppercase tracking-[0.2em] font-mono mt-1">{song.artist}</div>
              </div>
              {currentSongIndex === index && isPlaying && (
                <div className="flex gap-1 h-4 items-end">
                  {[1, 2, 3].map(i => (
                    <motion.div 
                      key={i} 
                      animate={{ height: ["20%", "100%", "20%"] }}
                      transition={{ duration: 0.5, repeat: Infinity, delay: i * 0.1 }}
                      className="w-0.5 bg-rose" 
                    />
                  ))}
                </div>
              )}
            </button>
          ))}
        </div>
      </div>

      {/* Right: Player */}
      <div className="flex-1 p-8 md:p-16 flex flex-col justify-between min-h-[400px] md:min-h-[500px] relative overflow-hidden bg-plum/80">
        <div className="absolute top-0 right-0 p-8 md:p-16 opacity-5 pointer-events-none">
          <Music size={150} className="text-rose md:w-[250px] md:h-[250px] transform rotate-12" />
        </div>

        <div className="space-y-12 relative z-10">
          <div className="space-y-4">
            <motion.div 
              key={currentSongIndex}
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              className="space-y-4"
            >
              <h4 className="text-3xl md:text-5xl font-bold text-cream leading-tight tracking-wider text-glow">{currentSong.title}</h4>
              <p className="text-rose font-mono uppercase tracking-[0.3em] text-[10px] font-bold">{currentSong.artist}</p>
            </motion.div>
            <p className="text-sm md:text-base text-cream/60 italic font-light max-w-md mt-6 border-l-2 border-rose/30 pl-4">
              "Every note carries a memory, every lyric a silent promise we made along the way."
            </p>
          </div>
        </div>

        <div className="space-y-10 md:space-y-12 relative z-10 mt-12 md:mt-0 bg-plum/40 p-6 md:p-8 pixel-corners border border-white/5 backdrop-blur-sm">
          <div className="space-y-6">
            <div 
              className="h-2 w-full bg-white/5 relative cursor-pointer group pixel-corners overflow-hidden"
              onClick={handleProgressClick}
            >
              <motion.div 
                className="absolute inset-y-0 left-0 bg-rose" 
                style={{ width: `${progress}%` }} 
              />
            </div>
            <div className="flex justify-between text-[10px] font-mono text-cream/40 tracking-[0.3em] uppercase font-bold">
              <span>{currentTime}</span>
              <span>{duration}</span>
            </div>
          </div>

          <div className="flex items-center justify-center gap-12 md:gap-16">
            <motion.button 
              whileHover={{ scale: 1.2, x: -5 }}
              whileTap={{ scale: 0.9 }}
              onClick={prevSong} 
              className="text-cream/40 hover:text-rose transition-all"
            >
              <SkipBack size={24} />
            </motion.button>
            
            <motion.button 
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={togglePlay}
              className="w-16 h-16 md:w-20 md:h-20 pixel-corners border border-rose/50 bg-rose/5 flex items-center justify-center hover:bg-rose/20 text-rose transition-all duration-500 group backdrop-blur-md"
            >
              {isPlaying ? <Pause size={28} className="md:w-8 md:h-8" /> : <Play size={28} className="ml-1 md:w-8 md:h-8" />}
            </motion.button>

            <motion.button 
              whileHover={{ scale: 1.2, x: 5 }}
              whileTap={{ scale: 0.9 }}
              onClick={nextSong} 
              className="text-cream/40 hover:text-rose transition-all"
            >
              <SkipForward size={24} />
            </motion.button>
          </div>
        </div>
      </div>
      <audio ref={audioRef} src={currentSong.url || null} />
      </AnimatedItem>
    </AnimatedSection>
  );
};