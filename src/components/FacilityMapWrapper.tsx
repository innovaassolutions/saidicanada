'use client';

import dynamic from 'next/dynamic';
import type { Facility } from '@/data/facilities';

const FacilityMap = dynamic(() => import('./FacilityMap'), {
  ssr: false,
  loading: () => (
    <div className="w-full h-[350px] md:h-[500px] rounded-2xl bg-light-gray animate-pulse flex items-center justify-center">
      <span className="text-warm-gray/50 text-sm">...</span>
    </div>
  ),
});

interface FacilityMapWrapperProps {
  facilities: Facility[];
  statusLabels: {
    operational: string;
    underConstruction: string;
    planned: string;
  };
  facilityLabels: {
    tier: string;
    pue: string;
    power: string;
    status: string;
  };
  provinceLabels: Record<string, string>;
}

export default function FacilityMapWrapper({ facilities, statusLabels, facilityLabels, provinceLabels }: FacilityMapWrapperProps) {
  return <FacilityMap facilities={facilities} statusLabels={statusLabels} facilityLabels={facilityLabels} provinceLabels={provinceLabels} />;
}
