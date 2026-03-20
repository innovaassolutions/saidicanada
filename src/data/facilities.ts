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
  powerRedundancy: string;
  networkRedundancy: string;
  status: 'operational' | 'under-construction' | 'planned';
  images?: string[];
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
    powerRedundancy: '2N UPS, Dual utility feeds, Diesel generators',
    networkRedundancy: 'Diverse fiber entry, redundant core switches, dual WAN',
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
    powerRedundancy: '2N UPS, Dual Hydro-Québec feeds, Diesel generators',
    networkRedundancy: 'Diverse fiber entry, redundant core switches',
    status: 'operational',
  },
  {
    id: 'yeg-1',
    name: 'SAIDI Edmonton',
    city: 'Edmonton',
    province: 'Alberta',
    coordinates: [53.5461, -113.4937],
    tier: 'Tier III',
    totalPowerMW: 15,
    pue: 1.12,
    rackCapacity: 600,
    connectivity: ['YEGIX', 'Shaw', 'Telus', 'Bell', 'Zayo'],
    certifications: ['SOC 2 Type II', 'ISO 27001'],
    cooling: 'Free-air dominant (10+ months/year)',
    powerRedundancy: '2N UPS, Dual utility feeds, LNG generators, 48hr fuel reserve',
    networkRedundancy: 'Diverse fiber entry, redundant core switches, dark fiber ring',
    status: 'under-construction',
    images: [
      '/images/10MW_datacenter/WechatIMG1140.jpg',
      '/images/10MW_datacenter/WechatIMG1130.jpg',
      '/images/10MW_datacenter/WechatIMG1150.jpg',
      '/images/10MW_datacenter/WechatIMG1142.jpg',
      '/images/10MW_datacenter/WechatIMG1135.jpg',
      '/images/10MW_datacenter/WechatIMG1148.jpg',
    ],
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
    powerRedundancy: '2N UPS, Dual BC Hydro feeds, Diesel generators',
    networkRedundancy: 'Diverse fiber entry, redundant core switches, subsea cable access',
    status: 'planned',
  },
];
