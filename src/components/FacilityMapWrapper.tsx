'use client';

import dynamic from 'next/dynamic';
import type { Facility } from '@/data/facilities';

const FacilityMap = dynamic(() => import('./FacilityMap'), {
  ssr: false,
  loading: () => (
    <div className="w-full h-[350px] md:h-[500px] rounded-2xl bg-light-gray animate-pulse flex items-center justify-center">
      <span className="text-warm-gray/50 text-sm">Loading map...</span>
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
}

export default function FacilityMapWrapper({ facilities, statusLabels }: FacilityMapWrapperProps) {
  return <FacilityMap facilities={facilities} statusLabels={statusLabels} />;
}
