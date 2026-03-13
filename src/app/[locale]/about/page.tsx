import Image from "next/image";
import { CircleCheckBig } from "lucide-react";
import { type Locale } from "@/i18n/config";
import { getDictionary } from "@/i18n/getDictionary";
import ScrollReveal from "@/components/ScrollReveal";
import AnimatedCounter from "@/components/AnimatedCounter";

export async function generateMetadata({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params;
  const dict = await getDictionary(locale as Locale);
  return {
    title: dict.meta.about.title,
    description: dict.meta.about.description,
  };
}

export default async function AboutPage({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params;
  const dict = await getDictionary(locale as Locale);

  return (
    <>
      {/* Hero Banner */}
      <section className="relative pt-32 pb-20 bg-forest-dark">
        <div className="max-w-7xl mx-auto px-6">
          <ScrollReveal>
            <span className="text-sage-light font-semibold text-sm uppercase tracking-wider">{dict.about.label}</span>
            <h1 className="text-4xl md:text-5xl font-bold text-white mt-3 mb-6">{dict.about.title}</h1>
          </ScrollReveal>
        </div>
      </section>

      {/* About Content */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid md:grid-cols-2 gap-16 items-center">
            <ScrollReveal direction="left">
              <p className="text-warm-gray leading-relaxed mb-5 text-lg">{dict.about.p1}</p>
              <p className="text-warm-gray leading-relaxed mb-8 text-lg">{dict.about.p2}</p>
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
    </>
  );
}
