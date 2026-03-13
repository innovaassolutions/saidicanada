import { type Locale } from "@/i18n/config";
import { getDictionary } from "@/i18n/getDictionary";
import ScrollReveal from "@/components/ScrollReveal";
import CostCalculator from "@/components/calculator/CostCalculator";

export async function generateMetadata({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params;
  const dict = await getDictionary(locale as Locale);
  return {
    title: dict.meta.calculator.title,
    description: dict.meta.calculator.description,
  };
}

export default async function CalculatorPage({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params;
  const dict = await getDictionary(locale as Locale);

  return (
    <>
      {/* Hero Banner */}
      <section className="relative pt-32 pb-20 bg-forest-dark">
        <div className="max-w-7xl mx-auto px-6">
          <ScrollReveal>
            <span className="text-sage-light font-semibold text-sm uppercase tracking-wider">{dict.calculator.label}</span>
            <h1 className="text-4xl md:text-5xl font-bold text-white mt-3 mb-6">{dict.calculator.title}</h1>
            <p className="text-white/80 max-w-3xl leading-relaxed">{dict.calculator.description}</p>
          </ScrollReveal>
        </div>
      </section>

      {/* Calculator */}
      <section className="py-16 bg-light-gray">
        <div className="max-w-4xl mx-auto px-6">
          <CostCalculator dictionary={dict} locale={locale} />
        </div>
      </section>
    </>
  );
}
