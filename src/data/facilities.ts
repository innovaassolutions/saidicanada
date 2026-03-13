export interface Facility {
  id: string;
  name: string;
  city: string;
  province: string;
  coordinates: [number, number]; // [lat, lng]
  tier: string;
  totalPowerMW: number;
  pue: number;
  rackCapacity: number;
  connectivity: string[];
  certifications: string[];
  cooling: string;
  status: 'operational' | 'under-construction' | 'planned';
}

export const facilities: Facility[] = [
  {
    id: 'yyz-1',
    name: 'SAIDI Toronto East',
    city: 'Toronto',
    province: 'Ontario',
    coordinates: [43.6532, -79.3832],
    tier: 'Tier III+',
    totalPowerMW: 12,
    pue: 1.18,
    rackCapacity: 450,
    connectivity: ['Equinix IX', 'TorIX', 'Rogers', 'Bell', 'Telus', 'Zayo'],
    certifications: ['SOC 2 Type II', 'ISO 27001', 'PIPEDA Compliant'],
    cooling: 'Free-air + evaporative hybrid',
    status: 'operational',
  },
  {
    id: 'yul-1',
    name: 'SAIDI Montréal',
    city: 'Montréal',
    province: 'Québec',
    coordinates: [45.5017, -73.5673],
    tier: 'Tier III+',
    totalPowerMW: 8,
    pue: 1.15,
    rackCapacity: 320,
    connectivity: ['QIX', 'Bell', 'Vidéotron', 'Cogeco', 'Hurricane Electric'],
    certifications: ['SOC 2 Type II', 'ISO 27001', 'Loi 25 Compliant'],
    cooling: 'Free-air + river water cooling',
    status: 'operational',
  },
  {
    id: 'yyc-1',
    name: 'SAIDI Calgary',
    city: 'Calgary',
    province: 'Alberta',
    coordinates: [51.0447, -114.0719],
    tier: 'Tier III',
    totalPowerMW: 15,
    pue: 1.12,
    rackCapacity: 600,
    connectivity: ['YYCIX', 'Shaw', 'Telus', 'Bell', 'Zayo'],
    certifications: ['SOC 2 Type II', 'ISO 27001'],
    cooling: 'Free-air dominant (10+ months/year)',
    status: 'under-construction',
  },
  {
    id: 'yvr-1',
    name: 'SAIDI Vancouver',
    city: 'Vancouver',
    province: 'British Columbia',
    coordinates: [49.2827, -123.1207],
    tier: 'Tier III',
    totalPowerMW: 10,
    pue: 1.2,
    rackCapacity: 400,
    connectivity: ['VANIX', 'Telus', 'Shaw', 'Zayo', 'Pacific Crossing'],
    certifications: ['SOC 2 Type II'],
    cooling: 'Free-air + seawater cooling',
    status: 'planned',
  },
];
