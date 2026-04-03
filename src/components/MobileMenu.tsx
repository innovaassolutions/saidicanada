'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { Menu, X } from 'lucide-react';
import type { Locale } from '@/i18n/config';
import LanguageSwitcher from './LanguageSwitcher';

interface MobileMenuProps {
  locale: Locale;
  dictionary: {
    nav: {
      about: string;
      services: string;
      sustainability: string;
      locations: string;
      calculator: string;
      contact: string;
      getStarted: string;
    };
    mobileMenu: {
      openMenu: string;
      closeMenu: string;
      title: string;
    };
  };
  navLinks: readonly { key: string; href: string }[];
}

export default function MobileMenu({ locale, dictionary, navLinks }: MobileMenuProps) {
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => {
      document.body.style.overflow = '';
    };
  }, [isOpen]);

  return (
    <div className="lg:hidden">
      <button
        onClick={() => setIsOpen(true)}
        className="p-2 text-warm-gray hover:text-forest transition-colors"
        aria-label={dictionary.mobileMenu.openMenu}
      >
        <Menu size={24} />
      </button>

      {/* Overlay */}
      {isOpen && (
        <div
          className="fixed inset-0 bg-black/50 z-50"
          onClick={() => setIsOpen(false)}
        />
      )}

      {/* Drawer */}
      <div
        className={`fixed top-0 right-0 h-full w-80 max-w-[85vw] bg-white z-50 transform transition-transform duration-300 ease-in-out ${
          isOpen ? 'translate-x-0' : 'translate-x-full'
        }`}
      >
        <div className="flex items-center justify-between p-6 border-b border-sage/20">
          <span className="text-lg font-bold text-forest">{dictionary.mobileMenu.title}</span>
          <button
            onClick={() => setIsOpen(false)}
            className="p-2 text-warm-gray hover:text-forest transition-colors"
            aria-label={dictionary.mobileMenu.closeMenu}
          >
            <X size={24} />
          </button>
        </div>
        <nav className="p-6 space-y-1">
          {navLinks.map((link) => (
            <Link
              key={link.key}
              href={`/${locale}${link.href}`}
              onClick={() => setIsOpen(false)}
              className="block px-4 py-3 text-warm-gray hover:text-forest hover:bg-mint/50 rounded-lg transition-colors font-medium"
            >
              {dictionary.nav[link.key as keyof typeof dictionary.nav]}
            </Link>
          ))}
          <div className="pt-4 border-t border-sage/20 mt-4">
            <Link
              href={`/${locale}/contact`}
              onClick={() => setIsOpen(false)}
              className="block w-full bg-forest text-white text-center px-5 py-3 rounded-lg font-semibold hover:bg-forest-light transition-colors"
            >
              {dictionary.nav.getStarted}
            </Link>
          </div>
          <div className="pt-4 flex justify-center">
            <LanguageSwitcher locale={locale} />
          </div>
        </nav>
      </div>
    </div>
  );
}
