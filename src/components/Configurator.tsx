'use client';

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Check, Info, Sparkles, HelpCircle } from 'lucide-react';
import Image from 'next/image';

interface ConfiguratorProps {
  onSelectionComplete: (selection: {
    shape: string;
    material: string;
    decoration: string;
  }) => void;
}

export default function Configurator({ onSelectionComplete }: ConfiguratorProps) {
  const [shape, setShape] = useState<'female' | 'male'>('female');
  const [material, setMaterial] = useState<'ebony' | 'lignum' | 'jujube' | 'horn'>('ebony');
  const [decoration, setDecoration] = useState<'gold' | 'plain'>('gold');
  const [activeImageIndex, setActiveImageIndex] = useState<number>(0);

  // Actual product images mapping
  const productImages: Record<string, string[]> = {
    'female-ebony': ['/images/amkkaji-ebony-4.jpg'],
    'female-lignum': ['/images/amkkaji-lignum-1.jpg', '/images/amkkaji-lignum-2.jpg'],
    'female-horn': ['/images/amkkaji-horn-1.jpg'],
    'male-ebony': [
      '/images/sukkaji-ebony-1.jpg',
      '/images/sukkaji-ebony-2.jpg',
      '/images/sukkaji-ebony-3.jpg',
      '/images/sukkaji-ebony-4.jpg',
    ],
  };

  const getImages = () => {
    const key = `${shape}-${material}`;
    return productImages[key] || [shape === 'female' ? '/images/amkkaji.jpeg' : '/images/sukkaji.jpeg'];
  };

  const currentImages = getImages();
  const currentImage = currentImages[activeImageIndex] || currentImages[0];
  const isFallback = !productImages[`${shape}-${material}`];

  const handleShapeChange = (newShape: 'female' | 'male') => {
    setShape(newShape);
    setActiveImageIndex(0);
  };

  const handleMaterialChange = (newMaterial: 'ebony' | 'lignum' | 'jujube' | 'horn') => {
    setMaterial(newMaterial);
    setActiveImageIndex(0);
  };

  // Materials information
  const materialsInfo = {
    ebony: {
      name: '흑단 (Ebony)',
      colorClass: 'bg-neutral-900',
      rgb: '#0f0f0f',
      text: '가장 무겁고 단단한 최고급 목재로, 윤기 있고 칠흑 같은 어둠의 색조를 띱니다. 변형이 거의 없으며 궁극의 견고함과 묵직한 사법을 선사합니다.',
      benefit: '치수 변화 최소화, 강한 내구성, 안정적 무게감',
      time: '10 ~ 15일 소요',
    },
    lignum: {
      name: '유창목 (Lignum Vitae)',
      colorClass: 'bg-emerald-950/70',
      rgb: '#222d1b',
      text: '‘생명의 나무’로 불리며, 스스로 천연 윤활 수지(오일)를 분비하는 신비한 목재입니다. 시간이 지나며 오묘한 녹색빛을 머금으며 시위의 이탈을 가장 매끄럽게 돕습니다.',
      benefit: '스스로 윤활 수지 분비, 부드러운 출전(시위 이탈), 특유의 향',
      time: '7 ~ 10일 소요',
    },
    jujube: {
      name: '벽조목 (Lightning Jujube)',
      colorClass: 'bg-red-950/60',
      rgb: '#3d1c15',
      text: '벼락 맞은 대추나무로 붉은 빛이 감도는 단단한 나무입니다. 예로부터 악귀를 쫓는다는 기운이 담겨 있으며, 밀도가 높고 단단하여 전통적인 기품을 자랑합니다.',
      benefit: '전통적인 붉은 색조, 질기고 단단한 성질, 벽사(辟邪)의 의미',
      time: '7 ~ 12일 소요',
    },
    horn: {
      name: '소뿔 (Water Buffalo Horn)',
      colorClass: 'bg-amber-950/50',
      rgb: '#4a3b32',
      text: '전통 국궁 깍지의 최고급 천연 소재입니다. 소뿔 고유의 단단하고 끈끈한 조직감이 현을 당길 때의 마찰을 자연스럽게 줄여주며, 쓸수록 손때가 타서 고풍스럽게 길들어갑니다.',
      benefit: '최고의 전통성, 뛰어난 현 활주성, 길들여짐의 깊이',
      time: '12 ~ 18일 소요',
    },
  };

  const handleApply = () => {
    onSelectionComplete({
      shape: shape === 'female' ? '암깍지' : '수깍지',
      material: materialsInfo[material].name,
      decoration: decoration === 'gold' ? '무계 로고 금칠 (Gold Inlay)' : '민무늬 (Plain)',
    });
  };

  return (
    <section id="configurator" className="py-24 md:py-32 px-6 border-t border-neutral-900 bg-neutral-900/10">
      <div className="max-w-6xl mx-auto space-y-16">
        
        {/* Title */}
        <div className="text-center space-y-4">
          <h2 className="text-[11px] md:text-xs uppercase tracking-[0.4em] text-gold-500 font-medium">Kkaji Configurator</h2>
          <h3 className="text-3xl font-serif-kr text-neutral-100">깍지 비주얼라이저</h3>
          <p className="text-sm text-neutral-400 font-light max-w-xl mx-auto leading-relaxed">
            장인의 손길로 다듬어질 나만의 깍지 형태와 목재 재질, 로고 옵션을 미리 조합하여 시각적으로 탐색해 보십시오.
          </p>
        </div>

        {/* Configurator Area */}
        <div className="grid lg:grid-cols-12 gap-12 items-center">
          
          {/* Visual Canvas (5 Columns) */}
          <div className="lg:col-span-5 flex flex-col items-center justify-center space-y-6">
            
            {/* Dynamic Card Container */}
            <motion.div
              style={{
                perspective: 1000,
              }}
              className="w-full max-w-[340px] aspect-[4/5] rounded-sm border border-neutral-800 bg-neutral-950 relative overflow-hidden flex flex-col items-center justify-between p-8 group shadow-2xl shadow-gold-500/2"
            >
              {/* Outer border glow */}
              <div 
                className="absolute inset-0 opacity-10 group-hover:opacity-20 transition-opacity duration-700 pointer-events-none"
                style={{
                  background: `radial-gradient(circle at center, ${materialsInfo[material].rgb} 20%, transparent 80%)`,
                }}
              />

              {/* Top Details */}
              <div className="w-full flex justify-between items-start z-10">
                <div>
                  <span className="text-[9px] uppercase tracking-[0.2em] text-gold-500 font-medium">Bespoke Fitting</span>
                  <h4 className="text-lg font-serif-kr text-neutral-100 font-medium mt-1">
                    {shape === 'female' ? '암깍지' : '수깍지'}
                  </h4>
                </div>
                <div className="px-2 py-0.5 border border-neutral-800 bg-neutral-900/60 text-[9px] tracking-wider text-neutral-400 font-light rounded-xs uppercase">
                  Mugye Craft
                </div>
              </div>

              {/* Dynamic Archery Ring Rendering */}
              <div className="flex flex-col items-center gap-3 z-10 w-full select-none">
                <div className="relative w-48 h-48 flex items-center justify-center select-none">
                  {/* Outer shadow / aura */}
                  <motion.div
                    animate={{
                      boxShadow: `0 0 40px 10px ${materialsInfo[material].rgb}40`,
                    }}
                    transition={{ duration: 0.6 }}
                    className="absolute w-36 h-36 rounded-full blur-xl pointer-events-none"
                  />

                  {/* 3D simulated ring body using actual product image */}
                  <motion.div
                    key={`${shape}-${material}-${decoration}-${activeImageIndex}`}
                    initial={{ opacity: 0, scale: 0.85, rotateY: -15 }}
                    animate={{ opacity: 1, scale: 1, rotateY: 0 }}
                    exit={{ opacity: 0, scale: 0.95 }}
                    transition={{ duration: 0.5, ease: 'easeOut' }}
                    className="relative w-36 h-36 rounded-sm overflow-hidden border border-neutral-800 shadow-2xl group-hover:scale-105 transition-transform duration-500 bg-neutral-900"
                  >
                    <Image
                      src={currentImage}
                      alt={shape === 'female' ? '무계 암깍지 실물' : '무계 수깍지 실물'}
                      fill
                      className="object-cover opacity-80 group-hover:opacity-100 transition-opacity"
                      sizes="144px"
                    />
                    {/* Overlay vignette to match luxury style */}
                    <div className="absolute inset-0 bg-gradient-to-t from-neutral-950/70 via-transparent to-neutral-950/20" />
                    
                    {/* Subtly tint/tint-overlay depending on selected material (only for fallback images) */}
                    {isFallback && (
                      <>
                        {material === 'ebony' && (
                          <div className="absolute inset-0 bg-neutral-950/15 mix-blend-multiply pointer-events-none" />
                        )}
                        {material === 'lignum' && (
                          <div className="absolute inset-0 bg-emerald-950/15 mix-blend-color pointer-events-none" />
                        )}
                        {material === 'jujube' && (
                          <div className="absolute inset-0 bg-red-950/15 mix-blend-color pointer-events-none" />
                        )}
                        {material === 'horn' && (
                          <div className="absolute inset-0 bg-amber-950/15 mix-blend-color pointer-events-none" />
                        )}
                      </>
                    )}

                    {/* Logo Decoration Inlay Overlay if selected */}
                    {decoration === 'gold' && (
                      <div className="absolute right-3 bottom-3 w-5 h-5 opacity-90 transition-opacity z-20">
                        <Image
                          src="/images/logo-gold.png"
                          alt="무계 황금 각인"
                          fill
                          className="object-contain filter drop-shadow-[0_0_3px_rgba(212,175,55,0.7)]"
                          sizes="20px"
                        />
                      </div>
                    )}
                  </motion.div>
                </div>

                {/* Interactive Multi-angle Thumbnail indicators */}
                {currentImages.length > 1 && (
                  <div className="flex justify-center gap-2 mt-1">
                    {currentImages.map((img, idx) => (
                      <button
                        key={idx}
                        onClick={(e) => {
                          e.stopPropagation();
                          setActiveImageIndex(idx);
                        }}
                        className={`w-2 h-2 rounded-full border transition-all cursor-pointer ${
                          activeImageIndex === idx
                            ? 'bg-gold-500 border-gold-500 scale-125'
                            : 'bg-neutral-800 border-neutral-700 hover:bg-neutral-700'
                        }`}
                        title={`${idx + 1}번 각도 보기`}
                      />
                    ))}
                  </div>
                )}
              </div>

              {/* Bottom Specs */}
              <div className="w-full border-t border-neutral-900 pt-4 text-center z-10">
                <span className="text-[10px] text-neutral-500 font-sans tracking-widest uppercase">Material Choice</span>
                <p className="text-xs text-gold-400 font-serif-kr mt-1">
                  {materialsInfo[material].name}
                </p>
              </div>
            </motion.div>

            {/* Estimated Curation Time */}
            <div className="flex items-center gap-2 text-neutral-500 bg-neutral-900/20 px-4 py-2 border border-neutral-900">
              <Sparkles className="w-3.5 h-3.5 text-gold-500" />
              <span className="text-[10px] tracking-wider text-neutral-400">
                예상 제작 소요 기간: <strong className="text-neutral-200 font-medium">{materialsInfo[material].time}</strong>
              </span>
            </div>
          </div>

          {/* Control Options (7 Columns) */}
          <div className="lg:col-span-7 space-y-10">
            
            {/* 1. Shape Selection */}
            <div className="space-y-4">
              <h4 className="text-xs uppercase tracking-widest text-neutral-400 flex items-center gap-1.5 font-medium">
                <span>01. 깍지 형태 선택 (Shape)</span>
              </h4>
              <div className="grid grid-cols-2 gap-4">
                <button
                  onClick={() => handleShapeChange('female')}
                  className={`p-5 text-left border rounded-xs transition-all relative ${
                    shape === 'female'
                      ? 'border-gold-500 bg-gold-950/5'
                      : 'border-neutral-900 bg-neutral-900/10 hover:border-neutral-800'
                  }`}
                >
                  {shape === 'female' && (
                    <span className="absolute top-3 right-3 w-4 h-4 rounded-full bg-gold-500 flex items-center justify-center">
                      <Check className="w-2.5 h-2.5 text-neutral-950 stroke-[3]" />
                    </span>
                  )}
                  <h5 className="font-serif-kr text-sm text-neutral-100 font-medium">암깍지 (Female Kkaji)</h5>
                  <p className="text-xs md:text-sm text-neutral-400 font-light mt-2 leading-relaxed">
                    시위가 걸리는 홈이 턱처럼 파여있어 시위를 걸기 수월합니다. 현대의 대다수 궁사들이 보편적으로 애용하는 표준 형태입니다.
                  </p>
                </button>

                <button
                  onClick={() => handleShapeChange('male')}
                  className={`p-5 text-left border rounded-xs transition-all relative ${
                    shape === 'male'
                      ? 'border-gold-500 bg-gold-950/5'
                      : 'border-neutral-900 bg-neutral-900/10 hover:border-neutral-800'
                  }`}
                >
                  {shape === 'male' && (
                    <span className="absolute top-3 right-3 w-4 h-4 rounded-full bg-gold-500 flex items-center justify-center">
                      <Check className="w-2.5 h-2.5 text-neutral-950 stroke-[3]" />
                    </span>
                  )}
                  <h5 className="font-serif-kr text-sm text-neutral-100 font-medium">수깍지 (Male Kkaji)</h5>
                  <p className="text-xs md:text-sm text-neutral-400 font-light mt-2 leading-relaxed">
                    엄지손가락 마디 바깥으로 턱 모양의 혀(돌기)가 튀어나와 있습니다. 고파운드 궁력을 구사하는 전통 사법에 적합합니다.
                  </p>
                </button>
              </div>
            </div>

            {/* 2. Material Selection */}
            <div className="space-y-4">
              <h4 className="text-xs uppercase tracking-widest text-neutral-400 flex items-center gap-1.5 font-medium">
                <span>02. 명품 목재 선택 (Materials)</span>
              </h4>
              <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
                {(Object.keys(materialsInfo) as Array<'ebony' | 'lignum' | 'jujube' | 'horn'>).map((key) => {
                  const active = material === key;
                  return (
                    <button
                      key={key}
                      onClick={() => handleMaterialChange(key)}
                      className={`p-5 text-left border rounded-xs transition-all relative flex flex-col justify-between h-52 ${
                        active
                          ? 'border-gold-500 bg-gold-950/5'
                          : 'border-neutral-900 bg-neutral-900/10 hover:border-neutral-800'
                      }`}
                    >
                      <div>
                        <div className="flex items-center justify-between mb-2">
                          <span className={`w-5 h-5 rounded-full border border-neutral-700 ${materialsInfo[key].colorClass}`} />
                          {active && (
                            <span className="w-4 h-4 rounded-full bg-gold-500 flex items-center justify-center">
                              <Check className="w-2.5 h-2.5 text-neutral-950 stroke-[3]" />
                            </span>
                          )}
                        </div>
                        <h5 className="font-serif-kr text-xs md:text-sm text-neutral-100 font-medium leading-tight">
                          {materialsInfo[key].name}
                        </h5>
                        <p className="text-xs md:text-sm text-neutral-400 font-light mt-2 leading-relaxed line-clamp-5">
                          {materialsInfo[key].text}
                        </p>
                      </div>
                      <div className="text-[10px] md:text-[11px] text-gold-400/80 font-light border-t border-neutral-900 pt-2 mt-2">
                        {materialsInfo[key].benefit.split(',')[0]}
                      </div>
                    </button>
                  );
                })}
              </div>
            </div>

            {/* 3. Inlay / Decoration Selection */}
            <div className="space-y-4">
              <h4 className="text-xs uppercase tracking-widest text-neutral-400 flex items-center gap-1.5 font-medium">
                <span>03. 각인 장식 선택 (Decoration)</span>
              </h4>
              <div className="grid grid-cols-2 gap-4">
                <button
                  onClick={() => setDecoration('gold')}
                  className={`p-5 text-left border rounded-xs transition-all relative ${
                    decoration === 'gold'
                      ? 'border-gold-500 bg-gold-950/5'
                      : 'border-neutral-900 bg-neutral-900/10 hover:border-neutral-800'
                  }`}
                >
                  {decoration === 'gold' && (
                    <span className="absolute top-3 right-3 w-4 h-4 rounded-full bg-gold-500 flex items-center justify-center">
                      <Check className="w-2.5 h-2.5 text-neutral-950 stroke-[3]" />
                    </span>
                  )}
                  <h5 className="font-serif-kr text-sm text-neutral-100 font-medium">무계 로고 금칠 (Gold Lacquer)</h5>
                  <p className="text-xs md:text-sm text-neutral-400 font-light mt-2 leading-relaxed">
                    깍지 표면에 무계의 심볼 문양을 정밀하게 음각하고, 옻칠 기법과 금분을 메워 넣어 전통적인 위엄과 품격을 더합니다.
                  </p>
                </button>

                <button
                  onClick={() => setDecoration('plain')}
                  className={`p-5 text-left border rounded-xs transition-all relative ${
                    decoration === 'plain'
                      ? 'border-gold-500 bg-gold-950/5'
                      : 'border-neutral-900 bg-neutral-900/10 hover:border-neutral-800'
                  }`}
                >
                  {decoration === 'plain' && (
                    <span className="absolute top-3 right-3 w-4 h-4 rounded-full bg-gold-500 flex items-center justify-center">
                      <Check className="w-2.5 h-2.5 text-neutral-950 stroke-[3]" />
                    </span>
                  )}
                  <h5 className="font-serif-kr text-sm text-neutral-100 font-medium">민무늬 (Plain Wood)</h5>
                  <p className="text-xs md:text-sm text-neutral-400 font-light mt-2 leading-relaxed">
                    장식 각인을 생략하고, 귀한 목재의 수려하고 깊이 있는 천연 나이테와 웅장한 결의 미학을 그대로 부각합니다.
                  </p>
                </button>
              </div>
            </div>

            {/* Customizer CTA */}
            <div className="pt-4 border-t border-neutral-900 flex flex-col md:flex-row justify-between items-start md:items-center gap-6">
              <div className="space-y-1">
                <span className="text-xs text-neutral-500 tracking-wider font-sans uppercase">Selected Combination</span>
                <p className="text-sm text-neutral-300 font-serif-kr">
                  {shape === 'female' ? '암깍지' : '수깍지'} · {materialsInfo[material].name} · {decoration === 'gold' ? '금칠 각인' : '민무늬'}
                </p>
              </div>
              <button
                onClick={handleApply}
                className="w-full md:w-auto px-8 py-4 bg-gold-500 hover:bg-gold-600 text-neutral-950 font-semibold text-sm tracking-widest uppercase transition-all rounded-xs cursor-pointer shadow-lg shadow-gold-500/10"
              >
                이 설정으로 맞춤 피팅 신청하기
              </button>
            </div>

          </div>
        </div>

      </div>
    </section>
  );
}
