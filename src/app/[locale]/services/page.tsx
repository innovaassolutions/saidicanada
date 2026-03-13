import Image from "next/image";
import Link from "next/link";
import {
  Server,
  Cloud,
  Monitor,
  Download,
  Network,
  ShieldCheck,
  CircleCheckBig,
} from "lucide-react";
import { type Locale } from "@/i18n/config";
import { getDictionary } from "@/i18n/getDictionary";
import ScrollReveal from "@/components/ScrollReveal";

export async function generateMetadata({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params;
  const dict = await getDictionary(locale as Locale);
  return {
    title: dict.meta.services.title,
    description: dict.meta.services.description,
  };
}

const serviceIcons = [
  <Server key="server" size={36} />,
  <Cloud key="cloud" size={36} />,
  <Monitor key="monitor" size={36} />,
  <Download key="download" size={36} />,
  <Network key="network" size={36} />,
  <ShieldCheck key="shield" size={36} />,
];

const serviceKeys = ['colocation', 'cloud', 'managed', 'disaster', 'network', 'security'] as const;

export default async function ServicesPage({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params;
  const dict = await getDictionary(locale as Locale);

  return (
    <>
      {/* Hero Banner */}
      <section className="relative pt-32 pb-20 bg-forest-dark">
        <div className="max-w-7xl mx-auto px-6">
          <ScrollReveal>
            <span className="text-sage-light font-semibold text-sm uppercase tracking-wider">{dict.services.label}</span>
            <h1 className="text-4xl md:text-5xl font-bold text-white mt-3 mb-6">{dict.services.title}</h1>
            <p className="text-white/80 max-w-3xl leading-relaxed">{dict.services.description}</p>
          </ScrollReveal>
        </div>
      </section>

      {/* All 6 Services */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {serviceKeys.map((key, i) => (
              <ScrollReveal key={key} delay={i * 100}>
                <div className="group bg-light-gray rounded-2xl p-8 hover:bg-forest hover:text-white transition-all duration-300 border border-sage/10 hover:border-forest h-full">
                  <div className="text-forest group-hover:text-sage-light mb-5 transition-colors">{serviceIcons[i]}</div>
                  <h3 className="text-xl font-bold text-forest-dark group-hover:text-white mb-3 transition-colors">
                    {dict.services.items[key].title}
                  </h3>
                  <p className="text-warm-gray group-hover:text-white/85 leading-relaxed transition-colors">
                    {dict.services.items[key].description}
                  </p>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* Managed Services Detail */}
      <section className="py-24 bg-ivory">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid md:grid-cols-2 gap-16 items-center">
            <ScrollReveal direction="left">
              <div className="relative h-96 md:h-[500px] rounded-2xl overflow-hidden">
                <Image
                  src="https://images.unsplash.com/photo-1508739773434-c26b3d09e071?w=800&q=80"
                  alt="Sunset over a Canadian lake with forests"
                  fill
                  className="object-cover"
                />
              </div>
            </ScrollReveal>
            <ScrollReveal direction="right">
              <span className="text-forest font-semibold text-sm uppercase tracking-wider">{dict.managedServices.label}</span>
              <h2 className="text-4xl font-bold text-forest-dark mt-3 mb-6">{dict.managedServices.title}</h2>
              <p className="text-warm-gray leading-relaxed mb-8">{dict.managedServices.description}</p>
              <div className="space-y-5">
                {dict.managedServices.features.map((item: string, i: number) => (
                  <div key={i} className="flex items-start gap-3">
                    <CircleCheckBig size={20} className="text-forest mt-0.5 shrink-0" />
                    <span className="text-warm-gray">{item}</span>
                  </div>
                ))}
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-24 bg-forest-dark text-white text-center">
        <div className="max-w-4xl mx-auto px-6">
          <ScrollReveal>
            <h2 className="text-4xl font-bold mb-6">{dict.cta.title}</h2>
            <p className="text-white/80 text-lg mb-10">{dict.cta.description}</p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href={`/${locale}/contact`}
                className="bg-white text-forest px-10 py-4 rounded-lg text-base font-semibold hover:bg-sage-light transition-colors"
              >
                {dict.cta.button1}
              </Link>
              <Link
                href={`/${locale}/calculator`}
                className="border-2 border-white text-white px-10 py-4 rounded-lg text-base font-semibold hover:bg-white/10 transition-colors"
              >
                {dict.calculator.label}
              </Link>
            </div>
          </ScrollReveal>
        </div>
      </section>
    </>
  );
}
