import Image from 'next/image';
import Link from 'next/link';
import type { Locale } from '@/i18n/config';

interface FooterProps {
  locale: Locale;
  dictionary: {
    footer: {
      description: string;
      services: string;
      company: string;
      serviceLinks: {
        colocation: string;
        cloud: string;
        managed: string;
        disaster: string;
        network: string;
      };
      companyLinks: {
        about: string;
        sustainability: string;
        locations: string;
        calculator: string;
        contact: string;
      };
      copyright: string;
    };
  };
}

export default function Footer({ locale, dictionary }: FooterProps) {
  const { footer } = dictionary;
  return (
    <footer className="bg-forest-dark text-white py-16">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid md:grid-cols-4 gap-12 mb-12">
          <div className="md:col-span-2">
            <Link href={`/${locale}`} className="flex items-center gap-3 mb-4">
              <Image
                src="/SAIDICanadaLogo.png"
                alt="SAIDI Canada"
                width={44}
                height={44}
                className="object-contain brightness-0 invert"
              />
              <span className="text-2xl font-bold">
                SAIDI <span className="text-sage-light font-normal">Canada</span>
              </span>
            </Link>
            <p className="text-white/70 leading-relaxed max-w-md">
              {footer.description}
            </p>
          </div>
          <div>
            <h4 className="font-semibold mb-4">{footer.services}</h4>
            <ul className="space-y-2 text-white/70 text-sm">
              <li><Link href={`/${locale}/services`} className="hover:text-sage-light transition-colors">{footer.serviceLinks.colocation}</Link></li>
              <li><Link href={`/${locale}/services`} className="hover:text-sage-light transition-colors">{footer.serviceLinks.cloud}</Link></li>
              <li><Link href={`/${locale}/services`} className="hover:text-sage-light transition-colors">{footer.serviceLinks.managed}</Link></li>
              <li><Link href={`/${locale}/services`} className="hover:text-sage-light transition-colors">{footer.serviceLinks.disaster}</Link></li>
              <li><Link href={`/${locale}/services`} className="hover:text-sage-light transition-colors">{footer.serviceLinks.network}</Link></li>
            </ul>
          </div>
          <div>
            <h4 className="font-semibold mb-4">{footer.company}</h4>
            <ul className="space-y-2 text-white/70 text-sm">
              <li><Link href={`/${locale}/about`} className="hover:text-sage-light transition-colors">{footer.companyLinks.about}</Link></li>
              <li><Link href={`/${locale}/sustainability`} className="hover:text-sage-light transition-colors">{footer.companyLinks.sustainability}</Link></li>
              <li><Link href={`/${locale}/locations`} className="hover:text-sage-light transition-colors">{footer.companyLinks.locations}</Link></li>
              <li><Link href={`/${locale}/calculator`} className="hover:text-sage-light transition-colors">{footer.companyLinks.calculator}</Link></li>
              <li><Link href={`/${locale}/contact`} className="hover:text-sage-light transition-colors">{footer.companyLinks.contact}</Link></li>
            </ul>
          </div>
        </div>
        <div className="border-t border-white/10 pt-8 text-center text-white/50 text-sm">
          <p>&copy; {new Date().getFullYear()} {footer.copyright}</p>
        </div>
      </div>
    </footer>
  );
}
