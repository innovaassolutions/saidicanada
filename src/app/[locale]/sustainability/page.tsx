import Image from "next/image";
import { Leaf, Wind, Zap } from "lucide-react";
import { type Locale } from "@/i18n/config";
import { getDictionary } from "@/i18n/getDictionary";
import ScrollReveal from "@/components/ScrollReveal";
import AnimatedCounter from "@/components/AnimatedCounter";

export async function generateMetadata({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params;
  const dict = await getDictionary(locale as Locale);
  return {
    title: dict.meta.sustainability.title,
    description: dict.meta.sustainability.description,
  };
}

const cardIcons = [
  <Leaf key="leaf" size={40} />,
  <Wind key="wind" size={40} />,
  <Zap key="zap" size={40} />,
];

const cardKeys = ['lng', 'cooling', 'efficiency'] as const;

export default async function SustainabilityPage({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params;
  const dict = await getDictionary(locale as Locale);

  return (
    <>
      {/* Hero Banner */}
      <section className="relative pt-32 pb-20 bg-forest-dark">
        <div className="max-w-7xl mx-auto px-6">
          <ScrollReveal>
            <span className="text-sage-light font-semibold text-sm uppercase tracking-wider">{dict.sustainability.label}</span>
            <h1 className="text-4xl md:text-5xl font-bold text-white mt-3 mb-6">{dict.sustainability.title}</h1>
            <p className="text-white/80 max-w-3xl leading-relaxed">{dict.sustainability.description}</p>
          </ScrollReveal>
        </div>
      </section>

      {/* Metrics Bar */}
      <section className="py-16 bg-mint">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid md:grid-cols-3 gap-8">
            <ScrollReveal delay={0}>
              <div className="text-center">
                <AnimatedCounter endValue={1.2} decimals={1} label={dict.sustainability.metrics.pue.label} />
                <p className="text-sm text-warm-gray/70 mt-1">{dict.sustainability.metrics.pue.description}</p>
              </div>
            </ScrollReveal>
            <ScrollReveal delay={150}>
              <div className="text-center">
                <AnimatedCounter endValue={40} suffix="%" label={dict.sustainability.metrics.cooling.label} />
                <p className="text-sm text-warm-gray/70 mt-1">{dict.sustainability.metrics.cooling.description}</p>
              </div>
            </ScrollReveal>
            <ScrollReveal delay={300}>
              <div className="text-center">
                <AnimatedCounter endValue={50} suffix="%" label={dict.sustainability.metrics.co2.label} />
                <p className="text-sm text-warm-gray/70 mt-1">{dict.sustainability.metrics.co2.description}</p>
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* Sustainability Cards */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid md:grid-cols-3 gap-8">
            {cardKeys.map((key, i) => (
              <ScrollReveal key={key} delay={i * 100}>
                <div className="bg-light-gray rounded-2xl p-8 shadow-sm hover:shadow-md transition-shadow border border-sage/10 h-full">
                  <div className="text-forest mb-5">{cardIcons[i]}</div>
                  <h3 className="text-xl font-bold text-forest-dark mb-3">{dict.sustainability.cards[key].title}</h3>
                  <p className="text-warm-gray leading-relaxed">{dict.sustainability.cards[key].description}</p>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* Banner Image */}
      <section className="py-0">
        <div className="max-w-7xl mx-auto px-6">
          <ScrollReveal>
            <div className="relative rounded-2xl overflow-hidden h-72 md:h-96">
              <Image
                src="https://images.unsplash.com/photo-1503614472-8c93d56e92ce?w=1600&q=80"
                alt="Moraine Lake in Banff National Park surrounded by forest"
                fill
                className="object-cover"
              />
              <div className="absolute inset-0 bg-forest-dark/50 flex items-center justify-center">
                <div className="text-center text-white px-6">
                  <h3 className="text-3xl md:text-4xl font-bold mb-4">{dict.sustainability.banner.title}</h3>
                  <p className="text-white/90 max-w-2xl text-lg">{dict.sustainability.banner.description}</p>
                </div>
              </div>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* Bottom spacing */}
      <div className="py-12 bg-white" />
    </>
  );
}
