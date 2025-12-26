'use client';

import React from 'react';
import { useLanguage } from '@/context/LanguageContext';

const Footer = () => {
  const { t } = useLanguage();
  
  return (
    <footer className="bg-black border-t border-gray-800 py-12 px-6">
      <div className="max-w-7xl mx-auto flex flex-col items-center text-center gap-6">
        <div className="mb-2">
          <span className="text-4xl font-bold text-white tracking-tighter">LACB</span>
        </div>
        <div className="flex gap-8">
          <a href="#" className="text-gray-500 hover:text-green-500 text-sm transition-colors">{t.footer.terms}</a>
          <a href="#" className="text-gray-500 hover:text-green-500 text-sm transition-colors">{t.footer.privacy}</a>
        </div>
        <p className="text-gray-600 text-sm mt-4">© 2025 Lacb Inc. {t.footer.rights}</p>
      </div>
    </footer>
  );
};

export default Footer;
