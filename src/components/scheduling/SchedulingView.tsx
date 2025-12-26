'use client';

import React from 'react';
import { useRouter } from 'next/navigation';
import { Check, Clock } from 'lucide-react';
import Section from '@/components/ui/Section';
import { useLanguage } from '@/context/LanguageContext';

const SchedulingView = () => {
    const { t } = useLanguage();
    const router = useRouter();

    const goToConfirmation = () => {
        router.push('/confirmation');
    };

    return (
    <div className="animate-in slide-in-from-right duration-500">
      <div className="bg-green-500 py-3 text-center">
         <p className="text-black font-bold uppercase tracking-wide text-sm md:text-base flex items-center justify-center gap-2">
           <Check size={18} /> {t.scheduling.congrats}
         </p>
      </div>

      <Section className="text-center pt-8 md:pt-12">
        <h1 className="text-3xl md:text-5xl font-bold text-white mb-4">{t.scheduling.nextStep}</h1>
        <div className="bg-yellow-500/10 border border-yellow-500/20 p-4 rounded-lg inline-block max-w-2xl mx-auto mb-8">
           <p className="text-yellow-500 font-medium">{t.scheduling.important}</p>
        </div>

        {/* Embedded Calendar Placeholder */}
        <div className="max-w-4xl mx-auto bg-white rounded-xl shadow-2xl overflow-hidden min-h-[600px] flex flex-col">
          {/* Header of fake calendar */}
          <div className="bg-gray-100 p-6 border-b flex justify-between items-center">
            <div className="flex items-center gap-4">
               <div className="w-12 h-12 bg-gray-300 rounded-full"></div>
               <div className="text-left">
                 <h4 className="font-bold text-gray-900">Coach Strategy Session</h4>
                 <p className="text-gray-500 text-sm flex items-center gap-1"><Clock size={12}/> 30 min</p>
               </div>
            </div>
          </div>
          {/* Body of fake calendar */}
          <div className="flex-1 flex flex-col md:flex-row">
             <div className="md:w-2/3 p-6 border-r border-gray-100">
                <h3 className="text-black font-bold text-xl mb-6 text-left">{t.scheduling.calendarPlaceholder}</h3>
                <div className="grid grid-cols-7 gap-2 mb-4">
                   {['S','M','T','W','T','F','S'].map((d, i) => <div key={i} className="text-center text-gray-400 text-xs font-bold">{d}</div>)}
                   {Array.from({length: 30}).map((_, i) => (
                     <div key={i} className={`h-10 rounded-full flex items-center justify-center text-sm cursor-pointer hover:bg-green-100 hover:text-green-600 transition-colors ${i === 14 ? 'bg-green-500 text-white shadow-lg' : 'text-gray-700'}`}>
                       {i + 1}
                     </div>
                   ))}
                </div>
             </div>
             <div className="md:w-1/3 p-6 bg-gray-50 h-full">
                <h4 className="text-gray-900 font-bold mb-4 text-left">Available Times</h4>
                <div className="space-y-2">
                   {['10:00 AM', '11:30 AM', '02:00 PM', '04:15 PM'].map((time) => (
                     <button 
                       key={time}
                       onClick={goToConfirmation}
                       className="w-full py-2 border border-green-500 text-green-600 rounded hover:bg-green-500 hover:text-white transition-all font-medium"
                     >
                       {time}
                     </button>
                   ))}
                </div>
             </div>
          </div>
        </div>

        <p className="mt-8 text-gray-500 text-sm max-w-lg mx-auto">{t.scheduling.cantFindTime}</p>
      </Section>
    </div>
  );
}

export default SchedulingView;
