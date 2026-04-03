'use client';

import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import L from 'leaflet';
import type { Facility } from '@/data/facilities';
import 'leaflet/dist/leaflet.css';

interface FacilityMapProps {
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

const statusKeys = {
  operational: 'operational',
  'under-construction': 'underConstruction',
  planned: 'planned',
} as const;

// Custom forest-green marker icon using SVG data URI
const createMarkerIcon = (color: string) =>
  new L.Icon({
    iconUrl: `data:image/svg+xml;base64,${btoa(`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 36" width="24" height="36"><path d="M12 0C5.4 0 0 5.4 0 12c0 9 12 24 12 24s12-15 12-24C24 5.4 18.6 0 12 0z" fill="${color}"/><circle cx="12" cy="12" r="5" fill="white"/></svg>`)}`,
    iconSize: [24, 36],
    iconAnchor: [12, 36],
    popupAnchor: [0, -36],
  });

const markerIcons = {
  operational: createMarkerIcon('#1a5632'),
  'under-construction': createMarkerIcon('#d97706'),
  planned: createMarkerIcon('#87a96b'),
};

export default function FacilityMap({ facilities, statusLabels, facilityLabels, provinceLabels }: FacilityMapProps) {
  return (
    <MapContainer
      center={[56.13, -106.35]}
      zoom={4}
      className="w-full h-[350px] md:h-[500px] rounded-2xl z-0"
      scrollWheelZoom={false}
    >
      <TileLayer
        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a>'
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
      />
      {facilities.map((facility) => (
        <Marker
          key={facility.id}
          position={facility.coordinates}
          icon={markerIcons[facility.status]}
        >
          <Popup>
            <div className="p-1 min-w-[200px]">
              <h3 className="font-bold text-forest-dark text-sm">{facility.name}</h3>
              <p className="text-xs text-warm-gray mb-2">{facility.city}, {provinceLabels[facility.province] ?? facility.province}</p>
              <div className="grid grid-cols-2 gap-1 text-xs">
                <span className="text-warm-gray/70">{facilityLabels.status}:</span>
                <span className="font-medium">{statusLabels[statusKeys[facility.status] as keyof typeof statusLabels]}</span>
                <span className="text-warm-gray/70">{facilityLabels.tier}:</span>
                <span className="font-medium">{facility.tier}</span>
                <span className="text-warm-gray/70">{facilityLabels.power}:</span>
                <span className="font-medium">{facility.totalPowerMW} MW</span>
                <span className="text-warm-gray/70">{facilityLabels.pue}:</span>
                <span className="font-medium">{facility.pue}</span>
              </div>
            </div>
          </Popup>
        </Marker>
      ))}
    </MapContainer>
  );
}
