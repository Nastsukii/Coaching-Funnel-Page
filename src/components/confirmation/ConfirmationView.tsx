'use client';

import React from 'react';
import { Check, Calendar, MessageCircle } from 'lucide-react';
import Section from '@/components/ui/Section';
import VideoPlaceholder from '@/components/ui/VideoPlaceholder';
import { useLanguage } from '@/context/LanguageContext';

const ConfirmationView = () => {
    const { t } = useLanguage();

    return (
    <div className="animate-in slide-in-from-right duration-500">
       <Section className="text-center pt-12">
          <div className="w-20 h-20 bg-green-500 rounded-full flex items-center justify-center mx-auto mb-6 shadow-[0_0_30px_rgba(34,197,94,0.5)]">
             <Check size={40} className="text-black" />
          </div>
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-4 uppercase">{t.confirmation.thanks}</h1>
          <p className="text-xl text-gray-400 max-w-2xl mx-auto mb-16">{t.confirmation.sub}</p>

          <div className="space-y-16 max-w-4xl mx-auto">
             
             {/* Step 1 & 2 Videos */}
             <div className="grid md:grid-cols-2 gap-8">
                <div>
                   <h3 className="text-white font-bold text-xl mb-4 text-left border-l-4 border-green-500 pl-3">{t.confirmation.steps.step1}</h3>
                   <VideoPlaceholder label="Welcome Video" />
                </div>
                <div>
                   <h3 className="text-white font-bold text-xl mb-4 text-left border-l-4 border-green-500 pl-3">{t.confirmation.steps.step2}</h3>
                   <VideoPlaceholder label="Process Breakdown" />
                </div>
             </div>

             {/* Step 3: Confirm */}
             <div className="bg-gray-900 border border-gray-800 p-8 rounded-2xl text-left flex flex-col md:flex-row items-center gap-6">
                <div className="p-4 bg-gray-800 rounded-lg">
                   <Calendar size={32} className="text-green-500" />
                </div>
                <div>
                  <h3 className="text-white font-bold text-xl mb-2">{t.confirmation.steps.step3}</h3>
                  <p className="text-gray-400">{t.confirmation.steps.step3Desc}</p>
                </div>
             </div>

             {/* Step 4: Community */}
             <div className="bg-green-600/10 border border-green-500/30 p-8 rounded-2xl text-center">
                 <h3 className="text-white font-bold text-xl mb-4">{t.confirmation.steps.step4}</h3>
                 <p className="text-gray-300 mb-6">{t.confirmation.steps.step4Desc}</p>
                 <button className="bg-[#5865F2] hover:bg-[#4752C4] text-white px-8 py-3 rounded-lg font-bold flex items-center justify-center gap-2 mx-auto transition-colors">
                    <MessageCircle size={20} /> Join Discord
                 </button>
             </div>

             {/* Footer Checklist */}
             <div className="border-t border-gray-800 pt-12">
                <h2 className="text-3xl font-bold text-white mb-8">{t.confirmation.seeYou}</h2>
                <div className="flex flex-col md:flex-row justify-center gap-6">
                   {t.confirmation.checklist.map((item, i) => (
                      <div key={i} className="flex items-center gap-3 bg-black p-4 rounded-lg border border-gray-800">
                         <div className="w-6 h-6 rounded-full border border-green-500 flex items-center justify-center">
                            <div className="w-3 h-3 bg-green-500 rounded-full"></div>
                         </div>
                         <span className="text-gray-300 font-medium">{item}</span>
                      </div>
                   ))}
                </div>
             </div>

          </div>
       </Section>
    </div>
  );
};

export default ConfirmationView;
