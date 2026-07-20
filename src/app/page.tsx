'use client';

import React, { useState } from 'react';
import Navigation from '@/components/Navigation';
import Hero from '@/components/Hero';
import Philosophy from '@/components/Philosophy';
import Configurator from '@/components/Configurator';
import Science from '@/components/Science';
import FittingForm from '@/components/FittingForm';
import Footer from '@/components/Footer';
import BgmPlayer from '@/components/BgmPlayer';
import Image from 'next/image';
import { motion } from 'framer-motion';

export default function Home() {
  // Transfer selection from customizer to fitting booking form
  const [prefilledSelection, setPrefilledSelection] = useState<{
    shape: string;
    material: string;
    decoration: string;
  } | null>(null);

  const handleFittingClick = () => {
    const el = document.getElementById('fitting');
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const handleSelectionComplete = (selection: {
    shape: string;
    material: string;
    decoration: string;
  }) => {
    setPrefilledSelection(selection);
    // Smooth scroll down to the fitting form
    setTimeout(() => {
      const el = document.getElementById('fitting');
      if (el) {
        el.scrollIntoView({ behavior: 'smooth' });
      }
    }, 100);
  };

  return (
    <div className="min-h-screen bg-neutral-950 text-neutral-100 font-sans selection:bg-gold-500 selection:text-neutral-950">
      {/* Navigation */}
      <Navigation onFittingClick={handleFittingClick} />

      {/* Hero Section */}
      <Hero />

      {/* Brand Philosophy / Story */}
      <Philosophy />

      {/* Editorial Banner 1: Misty Archery Field */}
      <section className="relative h-[45vh] md:h-[60vh] w-full flex items-center justify-center overflow-hidden border-y border-neutral-900">
        <div className="absolute inset-0">
          <Image
            src="https://lh3.googleusercontent.com/aida-public/AB6AXuDoh704otC2vPr5bCkmVuUtP6WbXbt85vXKD6dkhbS01kKJ-b_xzo2hNoB9ZAhAqW1fb7CZ-73xwDbUKGsNRYLjq-ztRo4mURQ82tm3tS9o2u2dhTW5MK4q-iFG24zH8spTiXQjg1WLmc_rACqnDIfuYYsTEEkZOC6bPLcKQex10qBYg-FfarHT6DXYrtDUZja4Inezkv939nNBibSYUoKePBKyD5CNnwM4BTXYB-udDXrLZjgmjp5To8t1Wt3W5113ExPDTGpWFeY"
            alt="안개 낀 국궁장 전경"
            fill
            className="object-cover opacity-30 grayscale"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-b from-neutral-950 via-transparent to-neutral-950" />
        </div>
        <div className="relative z-10 text-center px-6 space-y-4 max-w-2xl">
          <motion.p
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-[10px] uppercase tracking-[0.4em] text-gold-500 font-medium"
          >
            The Quiet Field
          </motion.p>
          <motion.h3
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="font-serif-kr text-xl md:text-2xl leading-relaxed text-neutral-200"
          >
            145미터 앞, 안개 낀 과녁을 향한 고요한 시선.<br />
            <span className="font-light text-neutral-400 text-sm md:text-base">흔들림 없는 깍지가 선사하는 단호한 확신.</span>
          </motion.h3>
        </div>
      </section>

      {/* Interactive Customizer Configurator */}
      <Configurator onSelectionComplete={handleSelectionComplete} />

      {/* Kkaji Science / Anatomical Guidelines */}
      <Science />

      {/* Editorial Banner 2: Archer Hand with Bow */}
      <section className="relative h-[45vh] md:h-[60vh] w-full flex items-center justify-center overflow-hidden border-y border-neutral-900">
        <div className="absolute inset-0">
          <Image
            src="https://lh3.googleusercontent.com/aida-public/AB6AXuC4RMHLzpNaWyFHUADfUxExKggIKEUXfUAhJzPt4WebKVsz4cahmZBrZrGrkGykIEd-lUh8k54CmJEMEjFVYu6uDyIGZm_czok1NwEao-Dysi8jsjysXjKK7ApEmRw3vc4PpjxzuQECQ-hfRL7yCsS-AdQZL4DIA6B6chc-YUNVIUHa8PMb1_gH_UmyaEQ_PWWkd61-MuM4O4-fmzDPi1-f6XMcSQwzoFIf4P56q0MoU2PFUs18mDNWyVG5sgyblgM9Cwct_ESBz6k"
            alt="시위를 당기는 궁사의 손끝"
            fill
            className="object-cover opacity-35 grayscale"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-neutral-950 via-transparent to-neutral-950" />
        </div>
        <div className="relative z-10 text-center px-6 space-y-4 max-w-2xl">
          <motion.p
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-[10px] uppercase tracking-[0.4em] text-gold-500 font-medium"
          >
            The Ultimate Focus
          </motion.p>
          <motion.h3
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="font-serif-kr text-xl md:text-2xl leading-relaxed text-neutral-200"
          >
            시위를 떠나는 순간, 물아일체(物我一體)의 경지.<br />
            <span className="font-light text-neutral-400 text-sm md:text-base">오직 궁사의 온전한 몰입을 위한 무계의 고집.</span>
          </motion.h3>
        </div>
      </section>

      {/* Consultation Booking Form */}
      <FittingForm prefilledValues={prefilledSelection} />

      {/* Footer */}
      <Footer />

      {/* Background BGM Player */}
      <BgmPlayer />
    </div>
  );
}
