'use client';

import React from 'react';
import Image from 'next/image';
import BgmPlayer from './BgmPlayer';

interface NavigationProps {
  onFittingClick: () => void;
}

export default function Navigation({ onFittingClick }: NavigationProps) {
  return (
    <nav className="fixed top-0 left-0 w-full z-50 bg-neutral-950/80 backdrop-blur-md border-b border-neutral-900/50">
      <div className="max-w-6xl mx-auto px-6 h-20 flex items-center justify-between">
        {/* Brand Logo & Name */}
        <a href="#" className="relative w-14 h-14 group block">
          <Image
            src="/images/logo-symbol.png"
            alt="무계 MUGYE"
            fill
            className="object-contain opacity-95 group-hover:opacity-100 transition-opacity"
            sizes="56px"
            priority
          />
        </a>

        {/* Menu Links */}
        <div className="hidden md:flex items-center gap-8">
          <a
            href="#philosophy"
            className="text-xs uppercase tracking-widest text-neutral-400 hover:text-gold-400 transition-colors"
          >
            장인 정신
          </a>
          <a
            href="#configurator"
            className="text-xs uppercase tracking-widest text-neutral-400 hover:text-gold-400 transition-colors"
          >
            깍지 비주얼라이저
          </a>
          <a
            href="#science"
            className="text-xs uppercase tracking-widest text-neutral-400 hover:text-gold-400 transition-colors"
          >
            시수(矢手)의 과학
          </a>
          <a
            href="#fitting"
            className="text-xs uppercase tracking-widest text-neutral-400 hover:text-gold-400 transition-colors"
          >
            1:1 신청
          </a>
        </div>

        {/* CTA Button & BGM Player */}
        <div className="flex items-center gap-4">
          <BgmPlayer />
          <button
            onClick={onFittingClick}
            className="text-xs uppercase tracking-widest px-5 py-2.5 bg-neutral-100 text-neutral-950 font-medium hover:bg-gold-500 hover:text-neutral-950 transition-all rounded-sm font-serif-kr cursor-pointer"
          >
            맞춤 피팅 신청
          </button>
        </div>
      </div>
    </nav>
  );
}
