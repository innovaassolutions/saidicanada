import Image from "next/image";
import Link from "next/link";
import {
  Leaf,
  Server,
  ShieldCheck,
  Cloud,
  Network,
  Wind,
  Zap,
  Download,
  MessageCircle,
  Monitor,
} from "lucide-react";
import { type Locale } from "@/i18n/config";
import { getDictionary } from "@/i18n/getDictionary";
import ScrollReveal from "@/components/ScrollReveal";
import AnimatedCounter from "@/components/AnimatedCounter";
import VideoHero from "@/components/VideoHero";

export async function generateMetadata({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params;
  const dict = await getDictionary(locale as Locale);
  return {
    title: dict.meta.home.title,
    description: dict.meta.home.description,
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

const whySaidiIcons = [
  <Leaf key="leaf" size={32} />,
  <ShieldCheck key="shield" size={32} />,
  <Zap key="zap" size={32} />,
  <MessageCircle key="msg" size={32} />,
];

const whySaidiKeys = ['carbon', 'sovereignty', 'power', 'support'] as const;

export default async function HomePage({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params;
  const dict = await getDictionary(locale as Locale);

  return (
    <>
      {/* ─── Hero Section ─── */}
      <VideoHero
        title={dict.hero.title}
        titleHighlight={dict.hero.titleHighlight}
        badge={dict.hero.badge}
        description={dict.hero.description}
        cta1Text={dict.hero.cta1}
        cta2Text={dict.hero.cta2}
        cta1Href={`/${locale}/services`}
        cta2Href={`/${locale}/sustainability`}
      />

      {/* ─── About / Mission ─── */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid md:grid-cols-2 gap-16 items-center">
            <ScrollReveal direction="left">
              <span className="text-forest font-semibold text-sm uppercase tracking-wider">{dict.about.label}</span>
              <h2 className="text-4xl font-bold text-forest-dark mt-3 mb-6">{dict.about.title}</h2>
              <p className="text-warm-gray leading-relaxed mb-5">{dict.about.p1}</p>
              <p className="text-warm-gray leading-relaxed mb-8">{dict.about.p2}</p>
              <div className="grid grid-cols-2 gap-6">
                <AnimatedCounter endValue={50} prefix="~" suffix="%" label={dict.about.stats.co2.label} />
                <AnimatedCounter endValue={99.99} suffix="%" decimals={2} label={dict.about.stats.uptime.label} />
                <AnimatedCounter endValue={0} nonNumeric="24/7" label={dict.about.stats.support.label} />
                <AnimatedCounter endValue={0} nonNumeric="Tier III+" label={dict.about.stats.tier.label} />
              </div>
            </ScrollReveal>
            <ScrollReveal direction="right">
              <div className="relative h-96 md:h-[500px] rounded-2xl overflow-hidden">
                <Image
                  src="https://images.unsplash.com/photo-1531366936337-7c912a4589a7?w=800&q=80"
                  alt="Northern lights over Canadian landscape"
                  fill
                  className="object-cover"
                />
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* ─── Services Overview ─── */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <ScrollReveal>
            <div className="text-center mb-16">
              <span className="text-forest font-semibold text-sm uppercase tracking-wider">{dict.services.label}</span>
              <h2 className="text-4xl font-bold text-forest-dark mt-3 mb-6">{dict.services.title}</h2>
              <p className="text-warm-gray max-w-3xl mx-auto leading-relaxed">{dict.services.description}</p>
            </div>
          </ScrollReveal>
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
          <ScrollReveal>
            <div className="text-center mt-12">
              <Link
                href={`/${locale}/services`}
                className="inline-block bg-forest text-white px-8 py-4 rounded-lg font-semibold hover:bg-forest-light transition-colors"
              >
                {dict.cta.button2}
              </Link>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* ─── Why SAIDI Canada ─── */}
      <section className="py-24 bg-forest-dark text-white">
        <div className="max-w-7xl mx-auto px-6">
          <ScrollReveal>
            <div className="text-center mb-16">
              <span className="text-sage-light font-semibold text-sm uppercase tracking-wider">{dict.whySaidi.label}</span>
              <h2 className="text-4xl font-bold text-white mt-3 mb-6">{dict.whySaidi.title}</h2>
              <p className="text-white/80 max-w-3xl mx-auto leading-relaxed">{dict.whySaidi.description}</p>
            </div>
          </ScrollReveal>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {whySaidiKeys.map((key, i) => (
              <ScrollReveal key={key} delay={i * 100}>
                <div className="text-center p-6">
                  <div className="inline-flex items-center justify-center w-16 h-16 bg-white/10 rounded-2xl text-sage-light mb-5">
                    {whySaidiIcons[i]}
                  </div>
                  <h3 className="text-lg font-bold text-white mb-2">{dict.whySaidi.items[key].title}</h3>
                  <p className="text-white/70 text-sm leading-relaxed">{dict.whySaidi.items[key].description}</p>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* ─── How It Works ─── */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <ScrollReveal>
            <div className="text-center mb-16">
              <span className="text-forest font-semibold text-sm uppercase tracking-wider">{dict.howItWorks.label}</span>
              <h2 className="text-4xl font-bold text-forest-dark mt-3 mb-6">{dict.howItWorks.title}</h2>
            </div>
          </ScrollReveal>
          <div className="grid md:grid-cols-3 gap-12">
            {(['step1', 'step2', 'step3'] as const).map((key, i) => (
              <ScrollReveal key={key} delay={i * 150}>
                <div className="text-center">
                  <div className="inline-flex items-center justify-center w-16 h-16 bg-mint text-forest text-2xl font-bold rounded-full mb-6">
                    {dict.howItWorks.steps[key].number}
                  </div>
                  <h3 className="text-xl font-bold text-forest-dark mb-3">{dict.howItWorks.steps[key].title}</h3>
                  <p className="text-warm-gray leading-relaxed">{dict.howItWorks.steps[key].description}</p>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* ─── CTA Section ─── */}
      <section className="relative py-24">
        <div className="absolute inset-0 z-0">
          <Image
            src="https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?w=1600&q=80"
            alt="Canadian mountain landscape"
            fill
            className="object-cover"
          />
          <div className="absolute inset-0 bg-forest-dark/70" />
        </div>
        <div className="relative z-10 max-w-4xl mx-auto px-6 text-center">
          <ScrollReveal>
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">{dict.cta.title}</h2>
            <p className="text-white/90 text-lg mb-10 max-w-2xl mx-auto">{dict.cta.description}</p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href={`/${locale}/contact`}
                className="bg-white text-forest px-10 py-4 rounded-lg text-base font-semibold hover:bg-sage-light transition-colors"
              >
                {dict.cta.button1}
              </Link>
              <Link
                href={`/${locale}/services`}
                className="border-2 border-white text-white px-10 py-4 rounded-lg text-base font-semibold hover:bg-white/10 transition-colors"
              >
                {dict.cta.button2}
              </Link>
            </div>
          </ScrollReveal>
        </div>
      </section>
    </>
  );
}
