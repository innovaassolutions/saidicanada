import { notFound } from "next/navigation";
import { locales, type Locale } from "@/i18n/config";
import { getDictionary } from "@/i18n/getDictionary";
import { DictionaryProvider } from "@/components/DictionaryProvider";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

export function generateStaticParams() {
  return locales.map((locale) => ({ locale }));
}

export default async function LocaleLayout({
  children,
  params,
}: {
  children: React.ReactNode;
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;

  if (!locales.includes(locale as Locale)) {
    notFound();
  }

  const dictionary = await getDictionary(locale as Locale);

  return (
    <html lang={locale}>
      <body className="antialiased">
        <DictionaryProvider dictionary={dictionary}>
          <div className="min-h-screen bg-ivory text-warm-gray">
            <Header locale={locale as Locale} dictionary={dictionary} />
            <main>{children}</main>
            <Footer locale={locale as Locale} dictionary={dictionary} />
          </div>
        </DictionaryProvider>
      </body>
    </html>
  );
}
