import { type Locale } from "@/i18n/config";
import { getDictionary } from "@/i18n/getDictionary";
import { facilities } from "@/data/facilities";
import ScrollReveal from "@/components/ScrollReveal";
import FacilityMapWrapper from "@/components/FacilityMapWrapper";
import FacilityCard from "@/components/FacilityCard";

export async function generateMetadata({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params;
  const dict = await getDictionary(locale as Locale);
  return {
    title: dict.meta.locations.title,
    description: dict.meta.locations.description,
  };
}

export default async function LocationsPage({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params;
  const dict = await getDictionary(locale as Locale);

  const totalPower = facilities.reduce((sum, f) => sum + f.totalPowerMW, 0);
  const totalRacks = facilities.reduce((sum, f) => sum + f.rackCapacity, 0);
  const provinces = new Set(facilities.map((f) => f.province)).size;

  const statusLabels = dict.locations.status;
  const facilityLabels = dict.locations.facilityLabels;
  const facilityDataMap = dict.locations.facilityData as Record<string, { cooling: string; powerRedundancy: string; networkRedundancy: string }>;
  const provinceLabels = dict.locations.provinces as Record<string, string>;

  return (
    <>
      {/* Hero Banner */}
      <section className="relative pt-32 pb-20 bg-forest-dark">
        <div className="max-w-7xl mx-auto px-6">
          <ScrollReveal>
            <span className="text-sage-light font-semibold text-sm uppercase tracking-wider">{dict.locations.label}</span>
            <h1 className="text-4xl md:text-5xl font-bold text-white mt-3 mb-6">{dict.locations.title}</h1>
            <p className="text-white/80 max-w-3xl leading-relaxed">{dict.locations.description}</p>
          </ScrollReveal>
        </div>
      </section>

      {/* Stats Bar */}
      <section className="py-8 bg-mint">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-3 gap-4 text-center">
            <div>
              <div className="text-2xl font-bold text-forest">{facilities.length}</div>
              <div className="text-sm text-warm-gray">{dict.locations.statsBar.facilities}</div>
            </div>
            <div>
              <div className="text-2xl font-bold text-forest">{totalPower} MW / {totalRacks} Racks</div>
              <div className="text-sm text-warm-gray">{dict.locations.statsBar.totalCapacity}</div>
            </div>
            <div>
              <div className="text-2xl font-bold text-forest">{provinces}</div>
              <div className="text-sm text-warm-gray">{dict.locations.statsBar.provinces}</div>
            </div>
          </div>
        </div>
      </section>

      {/* Map */}
      <section className="py-12 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <ScrollReveal>
            <FacilityMapWrapper
              facilities={facilities}
              statusLabels={statusLabels}
              facilityLabels={facilityLabels}
              provinceLabels={provinceLabels}
            />
          </ScrollReveal>
        </div>
      </section>

      {/* Facility Cards Grid */}
      <section className="py-16 bg-light-gray">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid md:grid-cols-2 gap-6">
            {facilities.map((facility, i) => (
              <ScrollReveal key={facility.id} delay={i * 100}>
                <FacilityCard
                  facility={facility}
                  statusLabels={statusLabels}
                  facilityLabels={facilityLabels}
                  facilityData={facilityDataMap[facility.id]}
                  provinceLabel={provinceLabels[facility.province]}
                />
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
