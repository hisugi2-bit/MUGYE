'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { Eye, ShieldAlert, Award, Compass } from 'lucide-react';
import Image from 'next/image';

export default function Science() {
  return (
    <section id="science" className="py-24 md:py-32 px-6 border-t border-neutral-900 bg-neutral-950 relative overflow-hidden">
      <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-gold-950/2 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-5xl mx-auto space-y-16 relative z-10">
        
        {/* Title */}
        <div className="text-center space-y-4">
          <h2 className="text-[11px] md:text-xs uppercase tracking-[0.4em] text-gold-500 font-medium">Archery Physics & Anatomy</h2>
          <h3 className="text-3xl font-serif-kr text-neutral-100">시수(矢手)의 과학</h3>
          <p className="text-sm text-neutral-400 font-light max-w-xl mx-auto leading-relaxed">
            깍지는 단순한 받침대가 아닌, 활과 일체가 되어 화살의 궤적을 완성하는 초정밀 기계 장치입니다.
          </p>
        </div>

        {/* Core Science Grid */}
        <div className="grid lg:grid-cols-3 gap-8">
          
          {/* Visual: Pain Point close-up */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="relative aspect-[4/5] md:aspect-auto border border-neutral-900 bg-neutral-900/10 rounded-sm overflow-hidden group flex flex-col justify-end p-8 min-h-[350px]"
          >
            <Image
              src="https://lh3.googleusercontent.com/aida-public/AB6AXuBQKWKYF_GCX5bYzEZidkvxlxpU_P2olLKVkm1VpK5D9jYwGct8rmH-_vcsQbPn8K-QO6ZCTnMnOCz07QfPB1u3JF0Jaqe6ghVLZcR8BHzcbC-Nt-klivOKNrtoUC9buIGvNi3LX2BHde8EVHPfIzs4sjhXYkBO4b4-wIoZjnptEXXeIMxDaYPfDQpxlUzO-Gw9MOwk-t0CfYifz_7F4GEL1fGVS77G9yXFURdTOzzdVuFdzIcOjPbK49IeUq4AvaK01h5SCpT-gDI"
              alt="기성 깍지 사용 시의 손가락 손상과 변형 예시"
              fill
              className="object-cover opacity-45 group-hover:scale-[1.02] transition-transform duration-1000 grayscale"
              sizes="(max-width: 768px) 100vw, 30vw"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-neutral-950 via-neutral-950/40 to-transparent" />
            <div className="relative z-10 space-y-2">
              <div className="w-8 h-8 rounded-full bg-red-950/40 border border-red-900/40 flex items-center justify-center">
                <span className="text-red-500 font-sans text-xs font-bold font-semibold">!</span>
              </div>
              <h4 className="font-serif-kr text-base text-neutral-200">기성 깍지의 위험성</h4>
              <p className="text-xs md:text-sm text-neutral-400 font-light leading-relaxed">
                손가락 마디 둘레와 곡률에 맞지 않는 기성 깍지를 장시간 사용하면 마디 지골이 심하게 붓고 영구적인 관절 변형 및 통증을 초래합니다.
              </p>
            </div>
          </motion.div>

          {/* Card 1: Release mechanics */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="p-8 border border-neutral-900 bg-neutral-900/10 hover:border-gold-900/20 transition-all flex flex-col justify-between"
          >
            <div className="space-y-4">
              <div className="w-10 h-10 rounded-sm bg-gold-950/30 flex items-center justify-center border border-gold-900/20">
                <Compass className="w-5 h-5 text-gold-400" />
              </div>
              <h4 className="font-serif-kr text-xl text-neutral-100">앞나고 뒤나는 것의 이치 (Release Timing)</h4>
              <p className="text-sm text-neutral-400 leading-relaxed font-light">
                화살이 표적에 일정하게 꽂히기 위해선 시위가 깍지에서 벗어나는 찰나의 마찰 타이밍이 같아야 합니다.
              </p>
              <blockquote className="border-l-2 border-gold-500 pl-4 py-1 my-3">
                <p className="text-sm text-neutral-300 italic font-serif-kr leading-relaxed">
                  "시위가 일찍 이탈하면 화살의 뒷부분이 뒤틀리며 뒤나고,<br />
                  너무 늦게 빠지면 밀려나가며 앞이 납니다."
                </p>
              </blockquote>
              <p className="text-sm text-neutral-400 leading-relaxed font-light">
                단 0.1mm의 미세한 마모나 각도 오차로도 릴리즈가 늦어지며, 궁사는 발시할 때 억지로 줌손을 비틀어 쏘는 악습관(줌을 비트는 현상)을 가지게 됩니다. 무계는 이러한 현상을 방지하도록 고각 가공 처리를 실행합니다.
              </p>
            </div>
            <div className="text-[10px] text-neutral-600 tracking-wider pt-6 font-sans uppercase">Precision Ballistics</div>
          </motion.div>

          {/* Card 2: Joint pain */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="p-8 border border-neutral-900 bg-neutral-900/10 hover:border-gold-900/20 transition-all flex flex-col justify-between"
          >
            <div className="space-y-4">
              <div className="w-10 h-10 rounded-sm bg-gold-950/30 flex items-center justify-center border border-gold-900/20">
                <ShieldAlert className="w-5 h-5 text-gold-400" />
              </div>
              <h4 className="font-serif-kr text-xl text-neutral-100">지골 변형 방지와 인체공학 (Anatomical Health)</h4>
              <p className="text-sm text-neutral-400 leading-relaxed font-light">
                강한 활력을 당길 때 엄지손가락 마디가 받는 압력은 상상 이상입니다. 마디 구조에 맞지 않는 깍지는 신경 압박, 통증, 그리고 궁극적으로 엄지 관절이 튀어나오는 영구적 변형을 야기합니다.
              </p>
              <blockquote className="border-l-2 border-gold-500 pl-4 py-1 my-3">
                <p className="text-sm text-neutral-300 italic font-serif-kr leading-relaxed">
                  "좋은 깍지는 시위를 당길 때 아프지 않아야 하며,<br />
                  평생 사용해도 엄지손가락이 변형되지 않아야 합니다."
                </p>
              </blockquote>
              <p className="text-sm text-neutral-400 leading-relaxed font-light">
                개개인의 지골(손가락뼈) 경사도와 두께를 1:1 정밀 측정한 무계 깍지는 하중을 손가락 전체로 균등 분산하여, 장시간 수련에도 통증 없는 편안함과 안정감을 자랑합니다.
              </p>
            </div>
            <div className="text-[10px] text-neutral-600 tracking-wider pt-6 font-sans uppercase">Anatomical Protection</div>
          </motion.div>

        </div>

        {/* Educational Diagram / Steps */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="border border-neutral-900 bg-neutral-900/10 p-8 md:p-12 space-y-8"
        >
          <div className="flex items-center gap-2 text-gold-400">
            <Eye className="w-4 h-4" />
            <span className="text-[10px] tracking-widest font-sans uppercase">Correct Alignment</span>
          </div>

          <h4 className="font-serif-kr text-xl text-neutral-100">손가락 손상 없이 백발백중하는 무계의 맞춤 제작 요소</h4>

          <div className="grid md:grid-cols-3 gap-6">
            <div className="space-y-2">
              <div className="text-lg font-serif-en text-gold-500 font-semibold">01</div>
              <h5 className="font-serif-kr text-sm text-neutral-200 font-medium">초밀착 내경 맞춤</h5>
              <p className="text-xs md:text-sm text-neutral-400 leading-relaxed font-light">
                마디의 가장 넓은 관절 둘레와 손톱 부위 두께 차이를 메우기 위해 내경 곡률을 나선형으로 마감하여 미끄러짐을 방지합니다.
              </p>
            </div>

            <div className="space-y-2">
              <div className="text-lg font-serif-en text-gold-500 font-semibold">02</div>
              <h5 className="font-serif-kr text-sm text-neutral-200 font-medium">고경도 목재 내마모성</h5>
              <p className="text-xs md:text-sm text-neutral-400 leading-relaxed font-light">
                뿔이나 플라스틱과 달리, 흑단이나 유창목 등의 천연 특수목은 내마모성이 강하여 시위 접촉면이 닳아서 파이는 현상을 근본적으로 해결합니다.
              </p>
            </div>

            <div className="space-y-2">
              <div className="text-lg font-serif-en text-gold-500 font-semibold">03</div>
              <h5 className="font-serif-kr text-sm text-neutral-200 font-medium">6개 부위 정밀 튜닝</h5>
              <p className="text-xs md:text-sm text-neutral-400 leading-relaxed font-light">
                턱의 길이, 시위 각도, 엄지손가락 기울기 등 수깍지 기준 총 6개 미세 조절 부위를 장인이 직접 세공하여 최적의 사각(射角)을 확보합니다.
              </p>
            </div>
          </div>
        </motion.div>

      </div>
    </section>
  );
}
