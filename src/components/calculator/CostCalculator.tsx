'use client';

import { useState } from 'react';
import ColocationConfigurator from './ColocationConfigurator';
import ServerConfigurator from './ServerConfigurator';
import ManagedServicesConfigurator from './ManagedServicesConfigurator';
import CostSummary from './CostSummary';
import {
  colocationPricing,
  bandwidthPricing,
  additionalPowerPricePerKW,
  crossConnectPrice,
  serverPricing,
  gpuPricing,
  managedServicesTiers,
  addons,
} from '@/data/pricing';

interface CostCalculatorProps {
  dictionary: {
    calculator: {
      steps: {
        serviceType: string;
        colocation: string;
        dedicatedServer: string;
        gpuCompute: string;
        managedServices: string;
      };
      colocation: {
        title: string;
        space: string;
        power: string;
        bandwidth: string;
        crossConnects: string;
        quantity: string;
      };
      server: {
        title: string;
        quantity: string;
      };
      managed: {
        title: string;
        perServerMonth: string;
        addons: string;
        remoteHands: string;
        managedBackup: string;
        ddosProtection: string;
      };
      summary: {
        title: string;
        monthlySubtotal: string;
        monthlyTotal: string;
        annualProjection: string;
        disclaimer: string;
        requestQuote: string;
        perMonth: string;
        perHour: string;
        perGbMonth: string;
      };
    };
  };
  locale: string;
}

export interface ColoSelection {
  spaceId: string;
  quantity: number;
  bandwidthId: string;
  additionalPowerKW: number;
  crossConnects: number;
}

export interface ServerSelection {
  [id: string]: number; // id -> quantity
}

export interface ManagedSelection {
  tierId: string;
  serverCount: number;
  ddosProtection: boolean;
  backupGB: number;
  remoteHandsHours: number;
}

export default function CostCalculator({ dictionary, locale }: CostCalculatorProps) {
  const [activeServices, setActiveServices] = useState<Set<string>>(new Set());
  const [coloSelection, setColoSelection] = useState<ColoSelection>({
    spaceId: 'colo-full',
    quantity: 1,
    bandwidthId: 'bw-1g',
    additionalPowerKW: 0,
    crossConnects: 1,
  });
  const [serverSelections, setServerSelections] = useState<ServerSelection>({});
  const [managedSelection, setManagedSelection] = useState<ManagedSelection>({
    tierId: '',
    serverCount: 1,
    ddosProtection: false,
    backupGB: 0,
    remoteHandsHours: 0,
  });

  const toggleService = (service: string) => {
    setActiveServices((prev) => {
      const next = new Set(prev);
      if (next.has(service)) next.delete(service);
      else next.add(service);
      return next;
    });
  };

  // Calculate costs
  const coloCost = activeServices.has('colocation')
    ? (() => {
        const space = colocationPricing.find((p) => p.id === coloSelection.spaceId);
        const bw = bandwidthPricing.find((p) => p.id === coloSelection.bandwidthId);
        return (
          (space?.monthlyCAD ?? 0) * coloSelection.quantity +
          (bw?.monthlyCAD ?? 0) +
          coloSelection.additionalPowerKW * additionalPowerPricePerKW +
          coloSelection.crossConnects * crossConnectPrice
        );
      })()
    : 0;

  const serverCost = activeServices.has('server') || activeServices.has('gpu')
    ? [...serverPricing, ...gpuPricing].reduce((sum, item) => {
        return sum + (serverSelections[item.id] || 0) * item.monthlyCAD;
      }, 0)
    : 0;

  const managedCost = activeServices.has('managed') && managedSelection.tierId
    ? (() => {
        const tier = managedServicesTiers.find((t) => t.id === managedSelection.tierId);
        return (
          (tier?.monthlyCADPerServer ?? 0) * managedSelection.serverCount +
          (managedSelection.ddosProtection ? addons.ddosProtection.priceCAD : 0) +
          managedSelection.backupGB * addons.managedBackup.priceCAD +
          managedSelection.remoteHandsHours * addons.remoteHands.priceCAD
        );
      })()
    : 0;

  const totalMonthly = coloCost + serverCost + managedCost;

  const d = dictionary.calculator;

  const serviceTypes = [
    { id: 'colocation', label: d.steps.colocation },
    { id: 'server', label: d.steps.dedicatedServer },
    { id: 'gpu', label: d.steps.gpuCompute },
    { id: 'managed', label: d.steps.managedServices },
  ];

  return (
    <div className="space-y-8">
      {/* Step 1: Service Type Selection */}
      <div className="bg-white rounded-2xl p-6 md:p-8 shadow-sm border border-sage/10">
        <h3 className="text-lg font-bold text-forest-dark mb-4">{d.steps.serviceType}</h3>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
          {serviceTypes.map((st) => (
            <button
              key={st.id}
              onClick={() => toggleService(st.id)}
              className={`p-4 rounded-xl text-sm font-medium border-2 transition-all ${
                activeServices.has(st.id)
                  ? 'border-forest bg-forest text-white'
                  : 'border-sage/20 bg-light-gray text-warm-gray hover:border-forest/50'
              }`}
            >
              {st.label}
            </button>
          ))}
        </div>
      </div>

      {/* Step 2: Colocation */}
      {activeServices.has('colocation') && (
        <ColocationConfigurator
          dictionary={d.colocation}
          selection={coloSelection}
          onUpdate={setColoSelection}
        />
      )}

      {/* Step 3: Servers/GPU */}
      {(activeServices.has('server') || activeServices.has('gpu')) && (
        <ServerConfigurator
          dictionary={d.server}
          showServers={activeServices.has('server')}
          showGPU={activeServices.has('gpu')}
          selections={serverSelections}
          onUpdate={setServerSelections}
        />
      )}

      {/* Step 4: Managed Services */}
      {activeServices.has('managed') && (
        <ManagedServicesConfigurator
          dictionary={d.managed}
          selection={managedSelection}
          onUpdate={setManagedSelection}
        />
      )}

      {/* Step 5: Cost Summary */}
      <CostSummary
        dictionary={d.summary}
        coloCost={coloCost}
        serverCost={serverCost}
        managedCost={managedCost}
        totalMonthly={totalMonthly}
        hasSelections={activeServices.size > 0}
        locale={locale}
      />
    </div>
  );
}
