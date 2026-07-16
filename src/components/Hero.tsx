'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { ChevronDown } from 'lucide-react';
import Image from 'next/image';

export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-start pt-20 px-6 overflow-hidden bg-neutral-950">
      {/* Background Video */}
      <div className="absolute inset-0 w-full h-full z-0 overflow-hidden">
        <video
          autoPlay
          loop
          muted
          playsInline
          className="absolute min-w-full min-h-full top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 object-cover opacity-35"
        >
          <source src="/videos/hero-bow.mp4" type="video/mp4" />
        </video>
        {/* Radial Overlay to vignette borders */}
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_transparent_40%,_#050505_95%)] z-10" />
        <div className="absolute inset-0 bg-neutral-950/40 z-10" />
      </div>

      {/* Hero Content */}
      <div className="relative z-20 max-w-2xl w-full flex flex-col justify-center items-start text-left space-y-8 min-h-screen pt-24 pb-12 md:pl-12 lg:pl-20">
        {/* Gold Emblem Symbol */}
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1.2, ease: 'easeOut' }}
          className="relative w-44 h-44 filter drop-shadow-[0_0_15px_rgba(212,175,55,0.25)]"
        >
          <Image
            src="/images/logo-symbol.png"
            alt="무계 황금 로고"
            fill
            className="object-contain"
            sizes="176px"
            priority
          />
        </motion.div>

        {/* Small Intro Badge */}
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="inline-block px-5 py-1.5 border border-gold-900/40 bg-neutral-900/60 backdrop-blur-sm text-gold-400 text-xs tracking-[0.3em] uppercase rounded-sm"
        >
          정중동(靜中동)의 이치
        </motion.div>

        {/* Catchphrase */}
        <motion.h1
          initial={{ opacity: 0, y: 25 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="text-4xl md:text-6xl font-serif-kr tracking-wide leading-[1.6] text-neutral-100"
        >
          기백은 단호하게,<br />
          <span className="text-gold-500 font-light drop-shadow-md">손끝은 고요하게.</span>
        </motion.h1>

        {/* Brand Core Description */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.8 }}
          className="text-neutral-400 text-xs md:text-sm max-w-lg leading-relaxed font-light tracking-wider"
        >
          온 신경을 집중하여 미동조차 없는 고요함 속에,<br className="hidden md:block" />
          시위를 떠난 화살이 과녁을 매섭게 꿰뚫는 폭발적인 순간.
        </motion.p>

        {/* Discover Link */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 1.2 }}
          className="pt-4"
        >
          <a
            href="#philosophy"
            className="text-xs tracking-[0.25em] text-neutral-500 hover:text-gold-400 transition-colors inline-flex flex-col items-start gap-3 group uppercase"
          >
            <span>무계의 철학 탐구하기</span>
            <ChevronDown className="w-4 h-4 animate-bounce text-neutral-600 group-hover:text-gold-500 transition-colors ml-1" />
          </a>
        </motion.div>
      </div>
    </section>
  );
}
