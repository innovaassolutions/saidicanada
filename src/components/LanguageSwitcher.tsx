'use client';

import { usePathname } from 'next/navigation';
import Link from 'next/link';
import { locales, localeNames, type Locale } from '@/i18n/config';

interface LanguageSwitcherProps {
  locale: Locale;
}

export default function LanguageSwitcher({ locale }: LanguageSwitcherProps) {
  const pathname = usePathname();

  const switchLocale = (newLocale: Locale) => {
    const segments = pathname.split('/');
    segments[1] = newLocale;
    return segments.join('/');
  };

  return (
    <div className="flex items-center gap-1" aria-label="Language switcher">
      {locales.map((l) => (
        <Link
          key={l}
          href={switchLocale(l)}
          className={`px-2 py-1 text-xs font-medium rounded transition-colors ${
            l === locale
              ? 'bg-forest text-white'
              : 'text-warm-gray hover:text-forest hover:bg-mint'
          }`}
          aria-label={localeNames[l]}
        >
          {l === 'en' ? 'EN' : l === 'fr' ? 'FR' : '中文'}
        </Link>
      ))}
    </div>
  );
}
