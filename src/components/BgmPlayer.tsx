'use client';

import React, { useState, useRef, useEffect } from 'react';
import { Volume2, VolumeX } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

export default function BgmPlayer() {
  const [isPlaying, setIsPlaying] = useState(false);
  const [showTooltip, setShowTooltip] = useState(false);
  const audioRef = useRef<HTMLAudioElement | null>(null);

  useEffect(() => {
    // Initialize audio only on client side
    audioRef.current = new Audio('/audio/taut-and-released.mp3');
    audioRef.current.loop = true;
    audioRef.current.volume = 0.25; // Gentle and non-intrusive BGM volume

    return () => {
      if (audioRef.current) {
        audioRef.current.pause();
      }
    };
  }, []);

  const toggleBgm = () => {
    if (!audioRef.current) return;

    if (isPlaying) {
      audioRef.current.pause();
      setIsPlaying(false);
    } else {
      audioRef.current.play()
        .then(() => {
          setIsPlaying(true);
        })
        .catch((err) => {
          console.warn("Autoplay was blocked by browser. Click to interact.", err);
        });
    }
  };

  return (
    <div className="flex items-center gap-3 relative mr-1 select-none">
      {/* Dynamic Wave Animation Badge */}
      <AnimatePresence>
        {isPlaying && (
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.8 }}
            className="hidden sm:flex items-center gap-1 px-2.5 py-1 rounded-full border border-gold-500/20 bg-neutral-900/60 text-[9px] tracking-widest text-gold-400 font-sans uppercase"
          >
            <span className="relative flex h-1.5 w-1.5 mr-0.5">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-gold-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-1.5 w-1.5 bg-gold-500"></span>
            </span>
            BGM ON
          </motion.div>
        )}
      </AnimatePresence>

      {/* Button */}
      <div className="relative">
        <button
          onClick={toggleBgm}
          onMouseEnter={() => setShowTooltip(true)}
          onMouseLeave={() => setShowTooltip(false)}
          className={`w-9 h-9 rounded-full border flex items-center justify-center backdrop-blur-md transition-all hover:scale-105 cursor-pointer ${
            isPlaying
              ? 'border-gold-500 bg-gold-950/20 text-gold-400 shadow-lg shadow-gold-500/5'
              : 'border-neutral-800 bg-neutral-950/60 text-neutral-400 hover:border-neutral-700 hover:text-neutral-200'
          }`}
          aria-label="배경음악 토글"
        >
          {isPlaying ? (
            <Volume2 className="w-3.5 h-3.5 animate-pulse" />
          ) : (
            <VolumeX className="w-3.5 h-3.5" />
          )}
        </button>

        {/* Tooltip */}
        <AnimatePresence>
          {showTooltip && (
            <motion.div
              initial={{ opacity: 0, y: -5 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -5 }}
              className="absolute top-12 right-0 whitespace-nowrap px-3 py-1.5 rounded-xs border border-neutral-800 bg-neutral-950 text-[10px] text-neutral-300 font-serif-kr pointer-events-none shadow-xl z-50"
            >
              {isPlaying ? '배경음악 끄기' : '배경음악 켜기'}
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </div>
  );
}
