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
    <div className="fixed bottom-6 left-6 z-50 flex items-center gap-3">
      {/* Dynamic Wave Animation Badge */}
      <AnimatePresence>
        {isPlaying && (
          <motion.div
            initial={{ opacity: 0, x: -10 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -10 }}
            className="flex items-center gap-0.5 px-3 py-1.5 rounded-full border border-gold-500/20 bg-neutral-950/80 backdrop-blur-md text-[9px] tracking-widest text-gold-400 font-sans uppercase"
          >
            <span className="relative flex h-2 w-2 mr-1">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-gold-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-gold-500"></span>
            </span>
            BGM Playing
          </motion.div>
        )}
      </AnimatePresence>

      {/* Button */}
      <div className="relative">
        <button
          onClick={toggleBgm}
          onMouseEnter={() => setShowTooltip(true)}
          onMouseLeave={() => setShowTooltip(false)}
          className={`w-10 h-10 rounded-full border flex items-center justify-center backdrop-blur-md transition-all shadow-lg hover:scale-105 cursor-pointer ${
            isPlaying
              ? 'border-gold-500 bg-gold-950/20 text-gold-400 shadow-gold-500/5'
              : 'border-neutral-800 bg-neutral-950/60 text-neutral-400 hover:border-neutral-700 hover:text-neutral-200'
          }`}
          aria-label="배경음악 토글"
        >
          {isPlaying ? (
            <Volume2 className="w-4 h-4 animate-pulse" />
          ) : (
            <VolumeX className="w-4 h-4" />
          )}
        </button>

        {/* Tooltip */}
        <AnimatePresence>
          {showTooltip && (
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: 10 }}
              className="absolute bottom-12 left-0 whitespace-nowrap px-3 py-1.5 rounded-xs border border-neutral-800 bg-neutral-950 text-[10px] text-neutral-300 font-serif-kr pointer-events-none shadow-xl"
            >
              {isPlaying ? '배경음악 끄기 (Mute BGM)' : '배경음악 켜기 (Play BGM)'}
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </div>
  );
}
