'use client';

import React from 'react';
import Image from 'next/image';

export default function Footer() {
  return (
    <footer className="py-16 px-6 border-t border-neutral-900 bg-neutral-950 text-neutral-600">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row justify-between items-start md:items-center gap-10">
        
        {/* Brand details */}
        <div className="space-y-4">
          <div className="relative w-28 h-8 opacity-50">
            <Image
              src="/images/logo-symbol.png"
              alt="무계 MUGYE"
              fill
              className="object-contain filter grayscale brightness-75"
              sizes="112px"
            />
          </div>
          <p className="text-[11px] text-neutral-500 font-light leading-relaxed max-w-sm">
            손가락 관절의 안착도와 출전 발시의 일관성을 극대화하는 전통 공예와 현대 인체공학적 설계의 융합. 0.1mm의 오차를 허물어 물아일체의 경지를 선사합니다.
          </p>
        </div>

        {/* Contact details */}
        <div className="space-y-2 text-left md:text-right font-light">
          <p className="text-xs text-neutral-400 font-serif-kr font-medium">
            무계 공방 · 깍지장 양봉석
          </p>
          <p className="text-[11px] text-neutral-500 font-sans">
            연락처: <span className="text-neutral-400">010.6360.4462</span>
          </p>
          <p className="text-[11px] text-neutral-500 font-sans">
            제작 재질: 흑단 (Ebony), 유창목 (Lignum Vitae), 벽조목 (Lightning Jujube)
          </p>
        </div>

      </div>

      <div className="max-w-6xl mx-auto mt-12 pt-8 border-t border-neutral-900/60 text-center text-[10px] text-neutral-600 font-sans">
        <p>© {new Date().getFullYear()} MUGYE. All rights reserved.</p>
        <p className="mt-1 opacity-70">Handcrafted in South Korea by Gakjijang Yang Bong-seok.</p>
      </div>
    </footer>
  );
}
