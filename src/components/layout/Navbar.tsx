'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { usePathname, useRouter } from 'next/navigation';
import { Menu, X, Globe } from 'lucide-react';
import Button from '@/components/ui/Button';
import { useLanguage } from '@/context/LanguageContext';

const Navbar = () => {
  const { lang, t, toggleLang } = useLanguage();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const pathname = usePathname();
  const router = useRouter();
  
  const isLanding = pathname === '/';

  const goToScheduling = () => {
    router.push('/scheduling');
  };

  const LanguageSwitcher = () => (
    <button 
      onClick={toggleLang}
      className="flex items-center gap-2 px-3 py-1 rounded-full border border-gray-700 hover:border-green-500 transition-colors text-sm font-medium text-white"
    >
      <Globe size={16} className="text-green-500" />
      <span className="uppercase">{lang}</span>
    </button>
  );

  return (
    <nav className="sticky top-0 z-50 bg-black/90 backdrop-blur-md border-b border-gray-800">
      <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
        <Link href="/" className="cursor-pointer flex items-center gap-2">
          <div className="w-8 h-8 bg-green-500 rounded flex items-center justify-center font-bold text-black text-xl">L</div>
          <span className="text-white font-bold text-xl tracking-tighter">LACB</span>
        </Link>

        <div className="hidden md:flex items-center gap-8">
          {isLanding && (
            <>
              <Link href="#vsl" className="text-gray-400 hover:text-green-500 transition-colors">{t.nav.home}</Link>
              <Link href="#testimonials" className="text-gray-400 hover:text-green-500 transition-colors">{t.nav.testimonials}</Link>
              <Link href="#faq" className="text-gray-400 hover:text-green-500 transition-colors">{t.nav.faq}</Link>
            </>
          )}
          <LanguageSwitcher />
          {isLanding && (
            <Button onClick={goToScheduling} className="!py-2 !text-sm">
              {t.nav.apply}
            </Button>
          )}
        </div>

        <div className="md:hidden flex items-center gap-4">
          <LanguageSwitcher />
          <button onClick={() => setMobileMenuOpen(!mobileMenuOpen)} className="text-white">
            {mobileMenuOpen ? <X /> : <Menu />}
          </button>
        </div>
      </div>
      
      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-gray-900 border-b border-gray-800 py-4 px-6 flex flex-col gap-4">
           {isLanding && (
            <>
              <Link onClick={() => setMobileMenuOpen(false)} href="#vsl" className="text-gray-300">{t.nav.home}</Link>
              <Link onClick={() => setMobileMenuOpen(false)} href="#testimonials" className="text-gray-300">{t.nav.testimonials}</Link>
              <Link onClick={() => setMobileMenuOpen(false)} href="#faq" className="text-gray-300">{t.nav.faq}</Link>
              <Button onClick={() => { goToScheduling(); setMobileMenuOpen(false); }} className="w-full">
                {t.nav.apply}
              </Button>
            </>
           )}
           {!isLanding && (
              <Link href="/" onClick={() => setMobileMenuOpen(false)} className="text-gray-300">
                 {t.nav.home}
              </Link>
           )}
        </div>
      )}
    </nav>
  );
};

export default Navbar;
