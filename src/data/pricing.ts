export interface PricingItem {
  id: string;
  nameKey: string;
  descriptionKey: string;
  specs: string;
  monthlyCAD: number;
  category: 'colocation' | 'server' | 'gpu' | 'managed' | 'addon';
  unit: 'per-month' | 'per-server-month' | 'per-hour' | 'per-gb-month';
}

export const colocationPricing = [
  { id: 'colo-1u', name: '1U Rack Space', specs: '1U, 0.5kW included', monthlyCAD: 150 },
  { id: 'colo-2u', name: '2U Rack Space', specs: '2U, 0.8kW included', monthlyCAD: 250 },
  { id: 'colo-4u', name: '4U Rack Space', specs: '4U, 1.2kW included', monthlyCAD: 400 },
  { id: 'colo-quarter', name: 'Quarter Rack', specs: '10U, 2.5kW included', monthlyCAD: 800 },
  { id: 'colo-half', name: 'Half Rack', specs: '20U, 5kW included', monthlyCAD: 1400 },
  { id: 'colo-full', name: 'Full Rack', specs: '42U, 10kW included', monthlyCAD: 2500 },
];

export const bandwidthPricing = [
  { id: 'bw-100', name: '100 Mbps Committed', monthlyCAD: 200 },
  { id: 'bw-1g', name: '1 Gbps Committed', monthlyCAD: 500 },
  { id: 'bw-10g', name: '10 Gbps Committed', monthlyCAD: 3000 },
];

export const additionalPowerPricePerKW = 120; // CAD/kW/month
export const crossConnectPrice = 150; // CAD/month per cross-connect

export const serverPricing = [
  {
    id: 'srv-entry',
    name: 'Entry 1U Server',
    specs: 'Dual Xeon Silver, 64GB RAM, 2x1TB SSD',
    monthlyCAD: 350,
    category: 'server' as const,
  },
  {
    id: 'srv-mid',
    name: 'Mid-Range 1U Server',
    specs: 'Dual Xeon Gold, 128GB RAM, 2x1.92TB NVMe',
    monthlyCAD: 650,
    category: 'server' as const,
  },
  {
    id: 'srv-highmem',
    name: 'High-Memory 2U Server',
    specs: 'Dual EPYC, 512GB RAM, 4x NVMe',
    monthlyCAD: 1200,
    category: 'server' as const,
  },
];

export const gpuPricing = [
  {
    id: 'gpu-4090',
    name: '1x RTX 4090',
    specs: 'GPU Server, 2U',
    monthlyCAD: 1500,
    category: 'gpu' as const,
  },
  {
    id: 'gpu-l40s-1',
    name: '1x L40S 48GB',
    specs: 'GPU Server, 2U',
    monthlyCAD: 2200,
    category: 'gpu' as const,
  },
  {
    id: 'gpu-l40s-4',
    name: '4x L40S 48GB',
    specs: 'GPU Server, 4U',
    monthlyCAD: 7500,
    category: 'gpu' as const,
  },
  {
    id: 'gpu-a100-1',
    name: '1x A100 80GB',
    specs: 'GPU Server, PCIe',
    monthlyCAD: 3200,
    category: 'gpu' as const,
  },
  {
    id: 'gpu-a100-4',
    name: '4x A100 80GB SXM',
    specs: 'GPU Server, 4U',
    monthlyCAD: 10500,
    category: 'gpu' as const,
  },
  {
    id: 'gpu-h100-1',
    name: '1x H100 80GB',
    specs: 'GPU Server, PCIe',
    monthlyCAD: 4800,
    category: 'gpu' as const,
  },
  {
    id: 'gpu-h100-8',
    name: '8x H100 SXM',
    specs: 'DGX-class, 8U',
    monthlyCAD: 32000,
    category: 'gpu' as const,
  },
  {
    id: 'gpu-mi300x',
    name: '1x AMD MI300X',
    specs: 'GPU Server, 192GB HBM3',
    monthlyCAD: 4200,
    category: 'gpu' as const,
  },
];

export const managedServicesTiers = [
  {
    id: 'mgd-monitor',
    name: 'Monitoring Only',
    includes: 'Uptime/ping monitoring, alerts',
    monthlyCADPerServer: 75,
  },
  {
    id: 'mgd-standard',
    name: 'Standard Managed',
    includes: 'OS patching, monitoring, firewall, tickets',
    monthlyCADPerServer: 250,
  },
  {
    id: 'mgd-advanced',
    name: 'Advanced Managed',
    includes: 'Backup, security, 24/7 NOC, 4hr SLA',
    monthlyCADPerServer: 500,
  },
  {
    id: 'mgd-full',
    name: 'Fully Managed',
    includes: 'Dedicated TAM, compliance, DR, 2hr SLA',
    monthlyCADPerServer: 950,
  },
];

export const addons = {
  remoteHands: { id: 'addon-rh', name: 'Remote Hands', priceCAD: 125, unit: 'per-hour' as const },
  managedBackup: { id: 'addon-backup', name: 'Managed Backup', priceCAD: 0.08, unit: 'per-gb-month' as const },
  ddosProtection: { id: 'addon-ddos', name: 'DDoS Protection', priceCAD: 200, unit: 'per-month' as const },
};

export const regionalMultipliers: Record<string, { power: number; bandwidth: number; label: string }> = {
  toronto: { power: 1.0, bandwidth: 1.0, label: 'Toronto, ON' },
  montreal: { power: 0.75, bandwidth: 0.95, label: 'Montréal, QC' },
  edmonton: { power: 0.85, bandwidth: 1.10, label: 'Edmonton, AB' },
  vancouver: { power: 0.90, bandwidth: 1.05, label: 'Vancouver, BC' },
};
