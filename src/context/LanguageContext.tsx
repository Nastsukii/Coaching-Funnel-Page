'use client';

import React, { createContext, useContext, useState, ReactNode } from 'react';
import { Language, TranslationStructure } from '@/types';
import { translations } from '@/data/translations';

interface LanguageContextType {
  lang: Language;
  t: TranslationStructure;
  toggleLang: () => void;
  setLang: (lang: Language) => void;
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

export const LanguageProvider = ({ children }: { children: ReactNode }) => {
  const [lang, setLangState] = useState<Language>('en');

  const toggleLang = () => {
    setLangState((prev) => (prev === 'en' ? 'pt' : 'en'));
  };

  const setLang = (newLang: Language) => {
    setLangState(newLang);
  };

  const value = {
    lang,
    t: translations[lang],
    toggleLang,
    setLang,
  };

  return (
    <LanguageContext.Provider value={value}>
      {children}
    </LanguageContext.Provider>
  );
};

export const useLanguage = () => {
  const context = useContext(LanguageContext);
  if (context === undefined) {
    throw new Error('useLanguage must be used within a LanguageProvider');
  }
  return context;
};
