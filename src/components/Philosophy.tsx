'use client';

import React from 'react';
import { ShieldCheck, Target, Compass, Sparkles } from 'lucide-react';
import { motion } from 'framer-motion';
import Image from 'next/image';

export default function Philosophy() {
  return (
    <section id="philosophy" className="py-24 md:py-32 px-6 border-t border-neutral-900 bg-neutral-950 relative overflow-hidden">
      {/* Decorative background light */}
      <div className="absolute right-0 top-1/4 w-96 h-96 bg-gold-500/5 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute left-0 bottom-1/4 w-96 h-96 bg-neutral-900/50 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-5xl mx-auto space-y-20 relative z-10">
        
        {/* Brand Philosophy Heading */}
        <div className="text-center space-y-4">
          <motion.h2 
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-[10px] uppercase tracking-[0.4em] text-gold-500 font-medium"
          >
            Brand Philosophy
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-2xl md:text-3xl font-serif-kr leading-relaxed text-neutral-100 max-w-3xl mx-auto"
          >
            "손끝과 시위의 경계를 허물어<br />
            <span className="font-light text-neutral-300">완벽한 물아일체(物我一體)를 선사합니다."</span>
          </motion.p>
        </div>

        {/* Editorial Imagery Section */}
        <div className="grid md:grid-cols-12 gap-8 items-center pt-4">
          {/* Left: Silhouette/Misty morning Archery Range */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="md:col-span-7 relative aspect-[16/10] w-full rounded-sm overflow-hidden border border-neutral-900 bg-neutral-900/20 group"
          >
            <Image
              src="/images/amkkaji-collection-1.jpg"
              alt="무계 수제 깍지 콜렉션"
              fill
              className="object-cover opacity-70 group-hover:scale-[1.02] transition-transform duration-1000"
              sizes="(max-width: 768px) 100vw, 55vw"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-neutral-950 via-transparent to-transparent" />
            <div className="absolute bottom-4 left-4 text-[10px] tracking-wider text-neutral-400 font-sans uppercase">
              Finished Masterpieces · 무계의 명작
            </div>
          </motion.div>

          {/* Right: Weathered hands carving */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="md:col-span-5 relative aspect-[1/1] w-full rounded-sm overflow-hidden border border-neutral-900 bg-neutral-900/20 group"
          >
            <Image
              src="/images/ebony-raw-collection.jpg"
              alt="흑단 원목과 가공된 깍지"
              fill
              className="object-cover opacity-70 group-hover:scale-[1.02] transition-transform duration-1000"
              sizes="(max-width: 768px) 100vw, 35vw"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-neutral-950 via-transparent to-transparent" />
            <div className="absolute bottom-4 left-4 text-[10px] tracking-wider text-neutral-400 font-sans uppercase">
              Artisan Raw Curation · 흑단 원목과 깍지
            </div>
          </motion.div>
        </div>

        {/* Three Core Brand Values */}
        <div className="grid md:grid-cols-3 gap-8 pt-6">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="p-8 border border-neutral-900 bg-neutral-900/10 hover:border-gold-900/30 transition-all group flex flex-col justify-between"
          >
            <div className="space-y-4">
              <ShieldCheck className="w-6 h-6 text-gold-500" />
              <h3 className="font-serif-kr text-lg text-neutral-100 group-hover:text-gold-400 transition-colors">0.1mm의 오차</h3>
              <p className="text-sm text-neutral-400 leading-relaxed font-light">
                궁사 개개인의 손가락 관절 and 힘의 균형을 정밀 분석하여 관절의 통증과 시위 미끄러짐을 완벽히 해결합니다.
              </p>
            </div>
            <div className="text-[10px] text-neutral-600 tracking-wider pt-6 font-sans uppercase">Precision Analysis</div>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="p-8 border border-neutral-900 bg-neutral-900/10 hover:border-gold-900/30 transition-all group flex flex-col justify-between"
          >
            <div className="space-y-4">
              <Target className="w-6 h-6 text-gold-500" />
              <h3 className="font-serif-kr text-lg text-neutral-100 group-hover:text-gold-400 transition-colors">인체공학 설계</h3>
              <p className="text-sm text-neutral-400 leading-relaxed font-light">
                전통 핸드메이드 기법에 현대적인 인체공학 구조를 더해 손과 장비가 하나로 밀착되는 수작업 깍지를 제작합니다.
              </p>
            </div>
            <div className="text-[10px] text-neutral-600 tracking-wider pt-6 font-sans uppercase">Anatomical Fit</div>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="p-8 border border-neutral-900 bg-neutral-900/10 hover:border-gold-900/30 transition-all group flex flex-col justify-between"
          >
            <div className="space-y-4">
              <Compass className="w-6 h-6 text-gold-500" />
              <h3 className="font-serif-kr text-lg text-neutral-100 group-hover:text-gold-400 transition-colors">단호한 확신</h3>
              <p className="text-sm text-neutral-400 leading-relaxed font-light">
                활량(궁사)의 마음에 흔들림 없는 안정을 선사하며, 과녁을 향한 마지막 찰나에 흔들림 없는 일관성을 부여합니다.
              </p>
            </div>
            <div className="text-[10px] text-neutral-600 tracking-wider pt-6 font-sans uppercase">Absolute Confidence</div>
          </motion.div>
        </div>

        {/* Detailed Artisan Craftsmanship Narrative */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="border border-neutral-900 bg-neutral-900/20 p-8 md:p-12 space-y-6 rounded-sm max-w-4xl mx-auto"
        >
          <div className="flex items-center gap-2 text-gold-500">
            <Sparkles className="w-4 h-4" />
            <span className="text-[10px] uppercase tracking-[0.2em]">Craftsmanship values</span>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="md:col-span-2 space-y-4">
              <h4 className="font-serif-kr text-xl text-neutral-100">
                각지장(깍지장) 김종구의 명품 수제 깍지공예
              </h4>
              <p className="text-sm text-neutral-400 leading-relaxed font-light">
                30년 이상의 오랜 경력 속에서, 각지장 김종구 장인이 궁사 한 분만을 위해 나무결을 손수 가다듬습니다. 깍지는 단순한 활쏘기 장비가 아닙니다. 화살의 궤적을 좌우하고 시수(화살의 착탄 분포)를 결정하는 궁사의 심장과도 같습니다.
              </p>
              <p className="text-sm text-neutral-400 leading-relaxed font-light">
                엄지손가락 마디의 정밀한 모양과 궁력에 맞지 않는 기성 깍지는 극심한 뼈 통증과 지골 변형을 초래합니다. 무계(無界)는 자연에서 얻은 가장 단단하고 귀한 목재를 정교한 각도로 7일에서 15일간 다듬어, 궁사님 손의 연장이자 한 조각 예술품으로 재탄생시킵니다.
              </p>
            </div>
            <div className="border-t md:border-t-0 md:border-l border-neutral-900 pt-6 md:pt-0 md:pl-8 flex flex-col justify-center space-y-4">
              <div>
                <span className="text-2xl font-serif-en text-gold-500">7-15</span>
                <span className="text-sm text-neutral-400 font-light font-serif-kr ml-1">일간의 제작 기간</span>
              </div>
              <div>
                <span className="text-2xl font-serif-en text-gold-500">30</span>
                <span className="text-sm text-neutral-400 font-light font-serif-kr ml-1">년 이상의 연마 경력</span>
              </div>
              <div>
                <span className="text-2xl font-serif-en text-gold-500">1:1</span>
                <span className="text-sm text-neutral-400 font-light font-serif-kr ml-1">정밀 맞춤 커스터마이징</span>
              </div>
            </div>
          </div>
        </motion.div>

      </div>
    </section>
  );
}
