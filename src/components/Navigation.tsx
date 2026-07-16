'use client';

import React from 'react';
import Image from 'next/image';

interface NavigationProps {
  onFittingClick: () => void;
}

export default function Navigation({ onFittingClick }: NavigationProps) {
  return (
    <nav className="fixed top-0 left-0 w-full z-50 bg-neutral-950/80 backdrop-blur-md border-b border-neutral-900/50">
      <div className="max-w-6xl mx-auto px-6 h-20 flex items-center justify-between">
        {/* Brand Logo & Name */}
        <a href="#" className="flex items-center gap-3 group">
          <div className="relative w-8 h-8 opacity-90 group-hover:opacity-100 transition-opacity">
            <Image
              src="/images/logo-symbol.png"
              alt="무계 심볼"
              fill
              className="object-contain"
              sizes="32px"
              priority
            />
          </div>
          <div className="flex flex-col">
            <span className="text-xl font-serif-kr font-semibold tracking-widest text-neutral-100 group-hover:text-gold-400 transition-colors">
              무계
            </span>
            <span className="text-[10px] font-sans font-light tracking-[0.2em] text-neutral-400 uppercase leading-none">
              MUGYE · 無界
            </span>
          </div>
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

        {/* CTA Button */}
        <button
          onClick={onFittingClick}
          className="text-xs uppercase tracking-widest px-5 py-2.5 bg-neutral-100 text-neutral-950 font-medium hover:bg-gold-500 hover:text-neutral-950 transition-all rounded-sm font-serif-kr cursor-pointer"
        >
          맞춤 피팅 신청
        </button>
      </div>
    </nav>
  );
}
