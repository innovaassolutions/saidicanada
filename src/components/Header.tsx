import Image from 'next/image';
import Link from 'next/link';
import type { Locale } from '@/i18n/config';
import LanguageSwitcher from './LanguageSwitcher';
import MobileMenu from './MobileMenu';

interface HeaderProps {
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
  };
}

const navLinks = [
  { key: 'about', href: '/about' },
  { key: 'services', href: '/services' },
  { key: 'sustainability', href: '/sustainability' },
  { key: 'locations', href: '/locations' },
  { key: 'calculator', href: '/calculator' },
  { key: 'contact', href: '/contact' },
] as const;

export default function Header({ locale, dictionary }: HeaderProps) {
  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-white/90 backdrop-blur-md border-b border-sage/20">
      <nav className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
        <Link href={`/${locale}`} className="flex items-center gap-3">
          <Image
            src="/SAIDICanadaLogo.png"
            alt="SAIDI Canada"
            width={48}
            height={48}
            className="object-contain"
          />
          <span className="text-2xl font-bold text-forest">
            SAIDI <span className="text-sage font-normal">Canada</span>
          </span>
        </Link>
        <div className="hidden lg:flex items-center gap-6">
          {navLinks.map((link) => (
            <Link
              key={link.key}
              href={`/${locale}${link.href}`}
              className="text-warm-gray hover:text-forest transition-colors text-sm font-medium"
            >
              {dictionary.nav[link.key as keyof typeof dictionary.nav]}
            </Link>
          ))}
          <Link
            href={`/${locale}/contact`}
            className="bg-forest text-white px-5 py-2.5 rounded-lg text-sm font-semibold hover:bg-forest-light transition-colors"
          >
            {dictionary.nav.getStarted}
          </Link>
          <LanguageSwitcher locale={locale} />
        </div>
        <MobileMenu locale={locale} dictionary={dictionary} navLinks={navLinks} />
      </nav>
    </header>
  );
}
