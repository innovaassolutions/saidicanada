import { MapPin, Mail, MessageCircle } from "lucide-react";
import { type Locale } from "@/i18n/config";
import { getDictionary } from "@/i18n/getDictionary";
import ScrollReveal from "@/components/ScrollReveal";
import ContactForm from "@/components/ContactForm";

export async function generateMetadata({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params;
  const dict = await getDictionary(locale as Locale);
  return {
    title: dict.meta.contact.title,
    description: dict.meta.contact.description,
  };
}

export default async function ContactPage({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params;
  const dict = await getDictionary(locale as Locale);

  return (
    <>
      {/* Hero Banner */}
      <section className="relative pt-32 pb-20 bg-forest-dark">
        <div className="max-w-7xl mx-auto px-6">
          <ScrollReveal>
            <span className="text-sage-light font-semibold text-sm uppercase tracking-wider">{dict.contact.label}</span>
            <h1 className="text-4xl md:text-5xl font-bold text-white mt-3 mb-6">{dict.contact.title}</h1>
            <p className="text-white/80 max-w-3xl leading-relaxed">{dict.contact.description}</p>
          </ScrollReveal>
        </div>
      </section>

      {/* Contact Content */}
      <section className="py-24 bg-light-gray">
        <div className="max-w-5xl mx-auto px-6">
          <div className="grid md:grid-cols-2 gap-12">
            <ScrollReveal direction="left">
              <div className="space-y-8">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-mint rounded-xl flex items-center justify-center text-forest shrink-0">
                    <MapPin size={20} />
                  </div>
                  <div>
                    <h3 className="font-semibold text-forest-dark mb-1">{dict.contact.location.title}</h3>
                    <p className="text-warm-gray">{dict.contact.location.value}</p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-mint rounded-xl flex items-center justify-center text-forest shrink-0">
                    <Mail size={20} />
                  </div>
                  <div>
                    <h3 className="font-semibold text-forest-dark mb-1">{dict.contact.email.title}</h3>
                    <p className="text-warm-gray">{dict.contact.email.value}</p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-mint rounded-xl flex items-center justify-center text-forest shrink-0">
                    <MessageCircle size={20} />
                  </div>
                  <div>
                    <h3 className="font-semibold text-forest-dark mb-1">{dict.contact.supportInfo.title}</h3>
                    <p className="text-warm-gray">{dict.contact.supportInfo.value}</p>
                  </div>
                </div>
              </div>
            </ScrollReveal>
            <ScrollReveal direction="right">
              <ContactForm dictionary={dict.contact.form} />
            </ScrollReveal>
          </div>
        </div>
      </section>
    </>
  );
}
