'use client';

import React, { useState } from 'react';
import { useRouter } from 'next/navigation';
import { Users, Star, Target, Check, ChevronUp, ChevronDown } from 'lucide-react';
import Button from '@/components/ui/Button';
import Section from '@/components/ui/Section';
import VideoPlaceholder from '@/components/ui/VideoPlaceholder';
import { useLanguage } from '@/context/LanguageContext';

const LandingView = () => {
  const { t } = useLanguage();
  const router = useRouter();
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  const goToScheduling = () => {
    router.push('/scheduling');
  };

  return (
    <div className="animate-in fade-in duration-500">
      {/* Hero / VSL Section */}
      <Section id="vsl" className="text-center pt-12 md:pt-20">
        <div className="inline-block bg-green-500/10 border border-green-500/20 px-4 py-1 rounded-full text-green-500 text-sm font-bold tracking-wider mb-6 uppercase animate-pulse">
            New Cohort 2025
        </div>
        <h1 className="text-4xl md:text-6xl lg:text-7xl font-extrabold text-white mb-6 leading-tight">
          {t.landing.headline.split('&').map((part, i) => (
             <span key={i} className={i === 1 ? "text-green-500 block md:inline" : ""}>{i === 1 ? ` & ${part}` : part}</span>
          ))}
        </h1>
        <p className="text-gray-400 text-lg md:text-xl max-w-2xl mx-auto mb-12">
          {t.landing.subheadline}
        </p>
        
        <div className="max-w-4xl mx-auto mb-12 shadow-[0_0_50px_rgba(34,197,94,0.15)] rounded-xl">
          <VideoPlaceholder label={t.landing.vslPlaceholder} />
        </div>

        <div className="flex flex-col items-center gap-4">
           <Button onClick={goToScheduling}>{t.landing.applicationBtn}</Button>
           <p className="text-gray-500 text-sm flex items-center gap-2">
             <Users size={14} /> 500+ Athletes Joined
           </p>
        </div>
      </Section>

      {/* Short Testimonials */}
      <Section className="bg-gray-900/50 rounded-3xl my-8">
        <h3 className="text-center text-white font-bold text-2xl mb-12 uppercase tracking-wide">{t.landing.shortTestimonialTitle}</h3>
        <div className="grid md:grid-cols-3 gap-6">
          {[1, 2, 3].map((i) => (
            <div key={i} className="bg-black border border-gray-800 p-6 rounded-xl hover:border-green-500/50 transition-colors">
              <div className="flex gap-1 mb-4 text-green-500"><Star fill="currentColor" size={16}/><Star fill="currentColor" size={16}/><Star fill="currentColor" size={16}/><Star fill="currentColor" size={16}/><Star fill="currentColor" size={16}/></div>
              <p className="text-gray-300 text-sm mb-4">"Absolutely changed the trajectory of my career. The systems are undeniable."</p>
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 bg-gray-700 rounded-full"></div>
                <div>
                  <p className="text-white font-bold text-sm">John D.</p>
                  <p className="text-gray-500 text-xs">Pro Athlete</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </Section>

      {/* Meet Coach & Mission */}
      <Section className="grid md:grid-cols-2 gap-16 items-center">
         <div className="relative">
           <div className="aspect-[4/5] bg-gray-800 rounded-2xl relative z-10 overflow-hidden">
              {/* Image Placeholder */}
              <div className="absolute inset-0 bg-gray-700 flex items-center justify-center text-gray-500 font-bold text-2xl">
                Coach Image
              </div>
           </div>
           <div className="absolute -bottom-6 -right-6 w-full h-full border-2 border-green-500 rounded-2xl -z-0"></div>
         </div>
         <div>
           <h2 className="text-3xl font-bold text-white mb-6 uppercase border-l-4 border-green-500 pl-4">{t.landing.meetCoachTitle}</h2>
           <p className="text-gray-400 mb-8 leading-relaxed">
             {t.landing.meetCoachBody}
           </p>
           <div className="bg-gray-900 p-6 rounded-xl border border-gray-800">
              <h4 className="text-green-500 font-bold mb-2 flex items-center gap-2"><Target size={18} /> {t.landing.missionTitle}</h4>
              <p className="text-gray-300 text-sm">{t.landing.missionBody}</p>
           </div>
         </div>
      </Section>

      {/* 3 Pillars */}
      <Section className="text-center">
        <h2 className="text-3xl md:text-4xl font-bold text-white mb-16 uppercase">{t.landing.pillarsTitle}</h2>
        <div className="grid md:grid-cols-3 gap-8">
          {t.landing.pillars.map((pillar, idx) => (
            <div key={idx} className="bg-black p-8 rounded-2xl border border-gray-800 relative group hover:-translate-y-2 transition-transform duration-300">
              <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 w-16 h-16 bg-green-500 rounded-full flex items-center justify-center text-black font-bold text-2xl shadow-[0_0_20px_rgba(34,197,94,0.4)]">
                 {idx + 1}
              </div>
              <h3 className="text-white font-bold text-xl mt-8 mb-4">{pillar.title}</h3>
              <p className="text-gray-400">{pillar.desc}</p>
            </div>
          ))}
        </div>
        <div className="mt-12 flex justify-center">
          <Button onClick={goToScheduling}>{t.landing.applicationBtn}</Button>
        </div>
      </Section>

      {/* Program Inclusions (Objection Handling) */}
      <Section className="bg-white text-black rounded-3xl my-12">
         <div className="grid md:grid-cols-2 gap-12 items-center">
           <div>
             <h2 className="text-3xl md:text-4xl font-bold mb-6 uppercase">{t.landing.inclusionsTitle}</h2>
             <ul className="space-y-4 mb-8">
               {t.landing.inclusions.map((inc, i) => (
                 <li key={i} className="flex items-center gap-3 font-medium text-lg">
                   <div className="w-6 h-6 rounded-full bg-green-500 flex items-center justify-center shrink-0">
                     <Check size={14} className="text-white" />
                   </div>
                   {inc}
                 </li>
               ))}
             </ul>
             <div className="bg-gray-100 p-6 rounded-xl border-l-4 border-red-500">
                <h4 className="font-bold text-red-600 mb-2 uppercase">{t.landing.objectionTitle}</h4>
                <p className="text-gray-700 text-sm">{t.landing.objectionBody}</p>
             </div>
           </div>
           <div>
             <VideoPlaceholder label="Program Tour" />
           </div>
         </div>
         <div className="mt-12 text-center">
            <Button variant="primary" onClick={goToScheduling} className="!bg-black !text-white hover:!bg-gray-800 !shadow-none">{t.landing.applicationBtn}</Button>
         </div>
      </Section>

      {/* FAQ */}
      <Section id="faq" className="max-w-3xl">
        <h2 className="text-3xl font-bold text-white mb-12 text-center uppercase">{t.landing.faqTitle}</h2>
        <div className="space-y-4">
          {t.landing.faqs.map((faq, i) => (
            <div key={i} className="border border-gray-800 rounded-lg bg-black overflow-hidden">
              <button 
                onClick={() => setOpenFaq(openFaq === i ? null : i)}
                className="w-full flex justify-between items-center p-6 text-left hover:bg-gray-900 transition-colors"
              >
                <span className="font-bold text-white">{faq.q}</span>
                {openFaq === i ? <ChevronUp className="text-green-500" /> : <ChevronDown className="text-gray-500" />}
              </button>
              {openFaq === i && (
                <div className="p-6 pt-0 text-gray-400 border-t border-gray-800 mt-2">
                  {faq.a}
                </div>
              )}
            </div>
          ))}
        </div>
      </Section>
    </div>
  );
};

export default LandingView;
