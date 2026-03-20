import { Globe, Zap, Shield } from 'lucide-react';
import type { Facility } from '@/data/facilities';
import FacilityImageGallery from './FacilityImageGallery';

interface FacilityCardProps {
  facility: Facility;
  statusLabels: {
    operational: string;
    underConstruction: string;
    planned: string;
  };
}

const statusColors = {
  operational: 'bg-forest text-white',
  'under-construction': 'bg-yellow-500 text-white',
  planned: 'bg-sage text-white',
};

const statusKeys = {
  operational: 'operational',
  'under-construction': 'underConstruction',
  planned: 'planned',
} as const;

export default function FacilityCard({ facility, statusLabels }: FacilityCardProps) {
  return (
    <div className="bg-white rounded-2xl p-6 shadow-sm border border-sage/10 hover:shadow-md transition-shadow">
      {facility.images && facility.images.length > 0 && (
        <FacilityImageGallery images={facility.images} name={facility.name} />
      )}
      <div className="flex items-start justify-between mb-4">
        <div>
          <h3 className="text-lg font-bold text-forest-dark">{facility.name}</h3>
          <p className="text-warm-gray text-sm">{facility.city}, {facility.province}</p>
        </div>
        <span className={`px-3 py-1 rounded-full text-xs font-medium ${statusColors[facility.status]}`}>
          {statusLabels[statusKeys[facility.status] as keyof typeof statusLabels]}
        </span>
      </div>
      <div className="grid grid-cols-2 gap-3 text-sm">
        <div>
          <span className="text-warm-gray/70">Tier</span>
          <p className="font-medium text-forest-dark">{facility.tier}</p>
        </div>
        <div>
          <span className="text-warm-gray/70">PUE</span>
          <p className="font-medium text-forest-dark">{facility.pue}</p>
        </div>
        <div>
          <span className="text-warm-gray/70">Power</span>
          <p className="font-medium text-forest-dark">{facility.totalPowerMW} MW</p>
        </div>
        <div>
          <span className="text-warm-gray/70">Racks</span>
          <p className="font-medium text-forest-dark">{facility.rackCapacity}</p>
        </div>
      </div>
      <div className="mt-4 pt-4 border-t border-sage/10">
        <span className="text-warm-gray/70 text-sm">Cooling</span>
        <p className="text-sm font-medium text-forest-dark">{facility.cooling}</p>
      </div>
      {/* Power & Network Redundancy */}
      <div className="mt-3 pt-3 border-t border-sage/10 space-y-2">
        <div className="flex items-start gap-2">
          <Zap className="w-4 h-4 text-forest mt-0.5 flex-shrink-0" />
          <div>
            <span className="text-warm-gray/70 text-xs">Power Redundancy</span>
            <p className="text-sm font-medium text-forest-dark">{facility.powerRedundancy}</p>
          </div>
        </div>
        <div className="flex items-start gap-2">
          <Shield className="w-4 h-4 text-forest mt-0.5 flex-shrink-0" />
          <div>
            <span className="text-warm-gray/70 text-xs">Network Redundancy</span>
            <p className="text-sm font-medium text-forest-dark">{facility.networkRedundancy}</p>
          </div>
        </div>
      </div>
      {/* Connectivity */}
      {facility.connectivity.length > 0 && (
        <div className="mt-3 pt-3 border-t border-sage/10">
          <div className="flex items-center gap-1.5 mb-1.5">
            <Globe className="w-3.5 h-3.5 text-forest" />
            <span className="text-warm-gray/70 text-xs">Connectivity</span>
          </div>
          <div className="flex flex-wrap gap-1.5">
            {facility.connectivity.map((isp) => (
              <span key={isp} className="bg-forest-dark/5 text-forest-dark text-xs px-2 py-0.5 rounded-full">
                {isp}
              </span>
            ))}
          </div>
        </div>
      )}
      {facility.certifications.length > 0 && (
        <div className="mt-3 flex flex-wrap gap-1.5">
          {facility.certifications.map((cert) => (
            <span key={cert} className="bg-mint text-forest text-xs px-2 py-0.5 rounded-full">
              {cert}
            </span>
          ))}
        </div>
      )}
    </div>
  );
}
