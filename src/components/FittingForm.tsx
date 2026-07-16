'use client';

import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { CheckCircle2, ChevronRight, ChevronLeft, ArrowRight, Sparkles, User, Ruler, FileText, Send } from 'lucide-react';
import Image from 'next/image';

interface FittingFormProps {
  prefilledValues: {
    shape: string;
    material: string;
    decoration: string;
  } | null;
}

export default function FittingForm({ prefilledValues }: FittingFormProps) {
  const [step, setStep] = useState(1);
  const [submitted, setSubmitted] = useState(false);

  // Form states
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    drawWeight: '',
    archeryStyle: '전통 국궁 (Traditional)',
    shape: '암깍지',
    material: '흑단 (Ebony)',
    decoration: '무계 로고 금칠 (Gold Inlay)',
    thumbWidth: '',
    thumbThickness: '',
    thumbCircumference: '',
    painPoints: '',
  });

  // Apply prefilled values if they come from the configurator
  useEffect(() => {
    if (prefilledValues) {
      setFormData((prev) => ({
        ...prev,
        shape: prefilledValues.shape,
        material: prefilledValues.material,
        decoration: prefilledValues.decoration,
      }));
      // Jump to step 2 directly to let user review pre-filled values
      setStep(2);
    }
  }, [prefilledValues]);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleNext = (e: React.FormEvent) => {
    e.preventDefault();
    if (step < 3) setStep((prev) => prev + 1);
  };

  const handleBack = () => {
    if (step > 1) setStep((prev) => prev - 1);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <section id="fitting" className="py-24 md:py-32 px-6 border-t border-neutral-900 bg-neutral-900/10">
      <div className="max-w-2xl mx-auto space-y-12">
        
        {/* Title */}
        <div className="text-center space-y-4">
          <h2 className="text-[10px] uppercase tracking-[0.4em] text-gold-500 font-medium">Bespoke Fitting</h2>
          <h3 className="text-3xl font-serif-kr text-neutral-100">1:1 맞춤 피팅 예약</h3>
          <p className="text-xs text-neutral-400 font-light max-w-md mx-auto leading-relaxed">
            궁사님의 손가락 골격과 마디 치수, 궁력을 반영하여 통증 없이 최적의 사각을 잡을 수 있는 나만의 깍지 상담을 시작합니다.
          </p>
        </div>

        {/* Luxury Packaging Showcase */}
        {!submitted && (
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="border border-neutral-900 bg-neutral-950/40 rounded-sm overflow-hidden p-6 space-y-6"
          >
            <div className="relative aspect-[16/10] w-full rounded-sm overflow-hidden border border-neutral-900 bg-neutral-900/10">
              <Image
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuBhCCRH5EqhFWY4PV7fJV2yB96AqDqEcSuvfneMr3MuTuH433ZqTJ7xyM-NAzzACyhbX0GMS9Lnmmjokx_-F7WH5ruF0_Zc75-7_SObRN7lg4PJoqcHgr3qCgK59YGqnSlTitbRfSrMmdG5lXGmDz-soxJZNmjKoXbqneKP6aABnW46uMWlLxoeQBezbly8nywDoEfVAwEWe0X-qaF0yHsRiHMn1NHFAasPl8JsQDqXW7bEke825tSa_lUxJT79nS0BR6CEfX8kc9Y"
                alt="무계 프리미엄 비스포크 패키징"
                fill
                className="object-cover opacity-70 grayscale hover:scale-[1.02] transition-transform duration-1000"
                sizes="(max-width: 768px) 100vw, 45vw"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-neutral-950 via-transparent to-transparent" />
            </div>
            <div className="space-y-2">
              <span className="text-[9px] tracking-wider text-gold-500 font-sans uppercase">Mugye Premium Package</span>
              <h4 className="font-serif-kr text-base text-neutral-200">무계 각인 오동나무 패키지 구성</h4>
              <p className="text-[11px] text-neutral-400 font-light leading-relaxed">
                피팅 상담을 통해 완성된 궁사님의 무계 깍지는 **수제 명품 오동나무 상자**, **천연 가죽 보관 파우치**, **전통 한지 보증서** 및 **황동 정밀 계측 도구**와 함께 정성스럽게 포장되어 배송됩니다.
              </p>
            </div>
          </motion.div>
        )}

        {/* Form Wizard Progress */}
        {!submitted && (
          <div className="flex items-center justify-between border-b border-neutral-900 pb-6">
            {[
              { num: 1, label: '인적 사항', icon: User },
              { num: 2, label: '상세 사양', icon: Sparkles },
              { num: 3, label: '치수 & 고충', icon: Ruler },
            ].map((s) => {
              const Icon = s.icon;
              const active = step === s.num;
              const done = step > s.num;
              return (
                <div key={s.num} className="flex items-center gap-3">
                  <div
                    className={`w-7 h-7 rounded-full flex items-center justify-center text-[10px] font-semibold border transition-all ${
                      active
                        ? 'border-gold-500 bg-gold-950/20 text-gold-400'
                        : done
                        ? 'border-gold-500 bg-gold-500 text-neutral-950'
                        : 'border-neutral-800 bg-neutral-900 text-neutral-500'
                    }`}
                  >
                    {done ? '✓' : s.num}
                  </div>
                  <span
                    className={`text-xs font-serif-kr tracking-wider hidden sm:inline ${
                      active ? 'text-neutral-100 font-medium' : 'text-neutral-500'
                    }`}
                  >
                    {s.label}
                  </span>
                  {s.num < 3 && <ChevronRight className="w-3.5 h-3.5 text-neutral-800 hidden sm:block" />}
                </div>
              );
            })}
          </div>
        )}

        {/* Success Screen */}
        {submitted ? (
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            className="p-8 md:p-12 border border-gold-900/30 bg-neutral-950 text-center space-y-6 rounded-sm relative overflow-hidden"
          >
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_rgba(212,175,55,0.03)_0%,_transparent_70%)]" />
            <CheckCircle2 className="w-16 h-16 text-gold-500 mx-auto filter drop-shadow-[0_0_10px_rgba(212,175,55,0.2)]" />
            
            <div className="space-y-2 relative z-10">
              <h4 className="text-xl font-serif-kr text-neutral-100">맞춤 피팅 상담 신청이 완료되었습니다</h4>
              <p className="text-xs text-neutral-400 leading-relaxed max-w-md mx-auto">
                입력하신 정보와 깍지 사양을 바탕으로, **깍지장 양봉석 장인**이 접수 자료를 직접 검토하여 24시간 이내에 기재해 주신 연락처로 정밀 피팅 예약 일정을 안내해 드리겠습니다.
              </p>
            </div>

            <div className="p-5 border border-neutral-900 bg-neutral-900/40 text-left space-y-3 relative z-10">
              <span className="text-[10px] tracking-wider text-neutral-500 uppercase font-sans">요청된 예약 내역 (Summary)</span>
              <ul className="text-xs text-neutral-300 space-y-1.5 font-serif-kr">
                <li>• <strong className="text-neutral-400">신청인:</strong> {formData.name} ({formData.phone})</li>
                <li>• <strong className="text-neutral-400">사용 궁력:</strong> {formData.drawWeight} lbs ({formData.archeryStyle})</li>
                <li>• <strong className="text-neutral-400">신청 깍지:</strong> {formData.shape} ({formData.material} / {formData.decoration})</li>
                {formData.thumbWidth && (
                  <li>
                    • <strong className="text-neutral-400">입력 치수:</strong> 폭 {formData.thumbWidth}mm / 두께 {formData.thumbThickness}mm / 둘레 {formData.thumbCircumference}mm
                  </li>
                )}
              </ul>
            </div>

            <div className="text-[10px] text-neutral-500 pt-2">
              급한 문의사항은 **010-6360-4462 (양봉석 장인)**으로 직접 연락 주셔도 빠릅니다.
            </div>
          </motion.div>
        ) : (
          <form onSubmit={step === 3 ? handleSubmit : handleNext} className="space-y-8">
            
            {/* Step 1: Archer Profile */}
            {step === 1 && (
              <motion.div
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -20 }}
                className="space-y-6"
              >
                <div className="space-y-2">
                  <label className="text-xs text-neutral-400 tracking-wider font-serif-kr">성함</label>
                  <input
                    type="text"
                    name="name"
                    required
                    value={formData.name}
                    onChange={handleChange}
                    placeholder="성함을 입력해 주세요"
                    className="w-full px-4 py-3 bg-neutral-950 border border-neutral-800 focus:border-gold-500 text-sm text-neutral-200 focus:outline-none transition-colors rounded-xs"
                  />
                </div>

                <div className="space-y-2">
                  <label className="text-xs text-neutral-400 tracking-wider font-serif-kr">연락처</label>
                  <input
                    type="tel"
                    name="phone"
                    required
                    value={formData.phone}
                    onChange={handleChange}
                    placeholder="010-0000-0000"
                    className="w-full px-4 py-3 bg-neutral-950 border border-neutral-800 focus:border-gold-500 text-sm text-neutral-200 focus:outline-none transition-colors rounded-xs"
                  />
                </div>

                <div className="grid grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <label className="text-xs text-neutral-400 tracking-wider font-serif-kr">주로 사용하는 궁력 (lbs)</label>
                    <input
                      type="text"
                      name="drawWeight"
                      required
                      value={formData.drawWeight}
                      onChange={handleChange}
                      placeholder="예: 45"
                      className="w-full px-4 py-3 bg-neutral-950 border border-neutral-800 focus:border-gold-500 text-sm text-neutral-200 focus:outline-none transition-colors rounded-xs"
                    />
                  </div>
                  <div className="space-y-2">
                    <label className="text-xs text-neutral-400 tracking-wider font-serif-kr">사법 선호</label>
                    <select
                      name="archeryStyle"
                      value={formData.archeryStyle}
                      onChange={handleChange}
                      className="w-full px-4 py-3 bg-neutral-950 border border-neutral-800 focus:border-gold-500 text-sm text-neutral-400 focus:outline-none transition-colors rounded-xs h-[46px]"
                    >
                      <option>전통 국궁 사법</option>
                      <option>개량궁 사법</option>
                      <option>양궁 / 컴파운드</option>
                      <option>상담 후 결정</option>
                    </select>
                  </div>
                </div>
              </motion.div>
            )}

            {/* Step 2: Kkaji Specifications */}
            {step === 2 && (
              <motion.div
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -20 }}
                className="space-y-6"
              >
                <div className="space-y-2">
                  <label className="text-xs text-neutral-400 tracking-wider font-serif-kr">원하는 깍지 형태</label>
                  <select
                    name="shape"
                    value={formData.shape}
                    onChange={handleChange}
                    className="w-full px-4 py-3 bg-neutral-950 border border-neutral-800 focus:border-gold-500 text-sm text-neutral-400 focus:outline-none transition-colors rounded-xs h-[46px]"
                  >
                    <option>암깍지 (Female)</option>
                    <option>수깍지 (Male)</option>
                    <option>상담 후 장인과 결정</option>
                  </select>
                </div>

                <div className="space-y-2">
                  <label className="text-xs text-neutral-400 tracking-wider font-serif-kr">고급 소재</label>
                  <select
                    name="material"
                    value={formData.material}
                    onChange={handleChange}
                    className="w-full px-4 py-3 bg-neutral-950 border border-neutral-800 focus:border-gold-500 text-sm text-neutral-400 focus:outline-none transition-colors rounded-xs h-[46px]"
                  >
                    <option>흑단 (Ebony)</option>
                    <option>유창목 (Lignum Vitae)</option>
                    <option>벽조목 (Lightning Jujube)</option>
                    <option>상담 후 결정</option>
                  </select>
                </div>

                <div className="space-y-2">
                  <label className="text-xs text-neutral-400 tracking-wider font-serif-kr">각인 문양 장식</label>
                  <select
                    name="decoration"
                    value={formData.decoration}
                    onChange={handleChange}
                    className="w-full px-4 py-3 bg-neutral-950 border border-neutral-800 focus:border-gold-500 text-sm text-neutral-400 focus:outline-none transition-colors rounded-xs h-[46px]"
                  >
                    <option>무계 로고 금칠 (Gold Inlay)</option>
                    <option>민무늬 (Plain Wood)</option>
                    <option>상담 후 결정</option>
                  </select>
                </div>
              </motion.div>
            )}

            {/* Step 3: Sizing & Pain Points */}
            {step === 3 && (
              <motion.div
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -20 }}
                className="space-y-6"
              >
                <div className="p-4 border border-neutral-800 bg-neutral-950 rounded-xs space-y-2">
                  <h4 className="text-xs text-gold-400 font-serif-kr font-medium">손가락 치수 측정 안내</h4>
                  <p className="text-[11px] text-neutral-400 font-light leading-relaxed">
                    버니어 캘리퍼스 등으로 **엄지 첫째 관절(가장 넓은 부위)**의 폭과 두께, 그리고 실이나 종이띠로 둘레를 측정해 적어주시면 사전 심사에 매우 큰 도움이 됩니다. (비워둘 시 내방 피팅 시 측정합니다.)
                  </p>
                </div>

                <div className="grid grid-cols-3 gap-4">
                  <div className="space-y-2">
                    <label className="text-xs text-neutral-400 tracking-wider font-serif-kr">엄지 관절 폭 (mm)</label>
                    <input
                      type="text"
                      name="thumbWidth"
                      value={formData.thumbWidth}
                      onChange={handleChange}
                      placeholder="예: 21.5"
                      className="w-full px-4 py-3 bg-neutral-950 border border-neutral-800 focus:border-gold-500 text-sm text-neutral-200 focus:outline-none transition-colors rounded-xs"
                    />
                  </div>
                  <div className="space-y-2">
                    <label className="text-xs text-neutral-400 tracking-wider font-serif-kr">엄지 관절 두께 (mm)</label>
                    <input
                      type="text"
                      name="thumbThickness"
                      value={formData.thumbThickness}
                      onChange={handleChange}
                      placeholder="예: 18.0"
                      className="w-full px-4 py-3 bg-neutral-950 border border-neutral-800 focus:border-gold-500 text-sm text-neutral-200 focus:outline-none transition-colors rounded-xs"
                    />
                  </div>
                  <div className="space-y-2">
                    <label className="text-xs text-neutral-400 tracking-wider font-serif-kr">엄지 관절 둘레 (mm)</label>
                    <input
                      type="text"
                      name="thumbCircumference"
                      value={formData.thumbCircumference}
                      onChange={handleChange}
                      placeholder="예: 62"
                      className="w-full px-4 py-3 bg-neutral-950 border border-neutral-800 focus:border-gold-500 text-sm text-neutral-200 focus:outline-none transition-colors rounded-xs"
                    />
                  </div>
                </div>

                <div className="space-y-2">
                  <label className="text-xs text-neutral-400 tracking-wider font-serif-kr">기존 깍지 사용 시의 통증 및 고충 사항</label>
                  <textarea
                    rows={4}
                    name="painPoints"
                    value={formData.painPoints}
                    onChange={handleChange}
                    placeholder="발시 시의 통증 부위, 미끄러짐 현상, 관절 비틀림 현상 등 맞춤 피팅 시 특별히 고려해야 할 점을 상세히 기록해 주십시오."
                    className="w-full px-4 py-3 bg-neutral-950 border border-neutral-800 focus:border-gold-500 text-sm text-neutral-200 focus:outline-none transition-colors rounded-xs font-light"
                  />
                </div>
              </motion.div>
            )}

            {/* Navigation Buttons */}
            <div className="flex gap-4 pt-4 border-t border-neutral-900">
              {step > 1 && (
                <button
                  type="button"
                  onClick={handleBack}
                  className="flex items-center justify-center gap-2 px-6 py-4 border border-neutral-800 text-neutral-300 hover:text-neutral-100 hover:border-neutral-700 transition-colors text-xs font-medium uppercase rounded-xs cursor-pointer"
                >
                  <ChevronLeft className="w-4 h-4" />
                  이전으로
                </button>
              )}
              
              <button
                type="submit"
                className="flex-1 py-4 bg-neutral-100 hover:bg-gold-500 text-neutral-950 font-semibold text-xs tracking-widest uppercase transition-all rounded-xs flex items-center justify-center gap-2 cursor-pointer shadow-md"
              >
                {step === 3 ? (
                  <>
                    피팅 상담 신청 완료하기
                    <Send className="w-3.5 h-3.5" />
                  </>
                ) : (
                  <>
                    다음 단계로
                    <ChevronRight className="w-3.5 h-3.5" />
                  </>
                )}
              </button>
            </div>

          </form>
        )}
      </div>
    </section>
  );
}
