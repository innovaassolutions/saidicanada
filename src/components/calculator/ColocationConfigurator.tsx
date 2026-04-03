'use client';

import { colocationPricing, bandwidthPricing } from '@/data/pricing';
import type { ColoSelection } from './CostCalculator';

interface PricingDataItem {
  name: string;
  specs?: string;
}

interface Props {
  dictionary: {
    title: string;
    space: string;
    power: string;
    bandwidth: string;
    crossConnects: string;
    quantity: string;
  };
  pricingData: Record<string, PricingDataItem>;
  selection: ColoSelection;
  onUpdate: (selection: ColoSelection) => void;
}

export default function ColocationConfigurator({ dictionary, pricingData, selection, onUpdate }: Props) {
  return (
    <div className="bg-white rounded-2xl p-6 md:p-8 shadow-sm border border-sage/10">
      <h3 className="text-lg font-bold text-forest-dark mb-6">{dictionary.title}</h3>
      <div className="space-y-6">
        {/* Space Selection */}
        <div>
          <label className="block text-sm font-medium text-warm-gray mb-2">{dictionary.space}</label>
          <div className="grid grid-cols-2 md:grid-cols-3 gap-2">
            {colocationPricing.map((option) => {
              const t = pricingData[option.id];
              return (
                <button
                  key={option.id}
                  onClick={() => onUpdate({ ...selection, spaceId: option.id })}
                  className={`p-3 rounded-lg text-left border-2 transition-all ${
                    selection.spaceId === option.id
                      ? 'border-forest bg-mint'
                      : 'border-sage/20 hover:border-forest/50'
                  }`}
                >
                  <div className="text-sm font-medium text-forest-dark">{t?.name ?? option.name}</div>
                  <div className="text-xs text-warm-gray/70">{t?.specs ?? option.specs}</div>
                  <div className="text-sm font-bold text-forest mt-1">${option.monthlyCAD}/mo</div>
                </button>
              );
            })}
          </div>
        </div>

        {/* Quantity */}
        <div>
          <label className="block text-sm font-medium text-warm-gray mb-2">{dictionary.quantity}</label>
          <input
            type="number"
            min={1}
            max={100}
            value={selection.quantity}
            onChange={(e) => onUpdate({ ...selection, quantity: Math.max(1, parseInt(e.target.value) || 1) })}
            className="w-24 bg-white border border-sage/20 rounded-lg px-4 py-2 text-warm-gray focus:outline-none focus:border-forest focus:ring-1 focus:ring-forest"
          />
        </div>

        {/* Bandwidth */}
        <div>
          <label className="block text-sm font-medium text-warm-gray mb-2">{dictionary.bandwidth}</label>
          <div className="flex flex-wrap gap-2">
            {bandwidthPricing.map((option) => {
              const t = pricingData[option.id];
              return (
                <button
                  key={option.id}
                  onClick={() => onUpdate({ ...selection, bandwidthId: option.id })}
                  className={`px-4 py-2 rounded-lg text-sm font-medium border-2 transition-all ${
                    selection.bandwidthId === option.id
                      ? 'border-forest bg-mint text-forest-dark'
                      : 'border-sage/20 text-warm-gray hover:border-forest/50'
                  }`}
                >
                  {t?.name ?? option.name} — ${option.monthlyCAD}/mo
                </button>
              );
            })}
          </div>
        </div>

        {/* Additional Power */}
        <div>
          <label className="block text-sm font-medium text-warm-gray mb-2">
            {dictionary.power}: {selection.additionalPowerKW} kW
          </label>
          <input
            type="range"
            min={0}
            max={50}
            value={selection.additionalPowerKW}
            onChange={(e) => onUpdate({ ...selection, additionalPowerKW: parseInt(e.target.value) })}
            className="w-full accent-forest"
          />
        </div>

        {/* Cross-Connects */}
        <div>
          <label className="block text-sm font-medium text-warm-gray mb-2">{dictionary.crossConnects}</label>
          <input
            type="number"
            min={0}
            max={20}
            value={selection.crossConnects}
            onChange={(e) => onUpdate({ ...selection, crossConnects: Math.max(0, parseInt(e.target.value) || 0) })}
            className="w-24 bg-white border border-sage/20 rounded-lg px-4 py-2 text-warm-gray focus:outline-none focus:border-forest focus:ring-1 focus:ring-forest"
          />
        </div>
      </div>
    </div>
  );
}
