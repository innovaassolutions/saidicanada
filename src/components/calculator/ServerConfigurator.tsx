'use client';

import { serverPricing, gpuPricing } from '@/data/pricing';
import type { ServerSelection } from './CostCalculator';

interface Props {
  dictionary: {
    title: string;
    quantity: string;
  };
  showServers: boolean;
  showGPU: boolean;
  selections: ServerSelection;
  onUpdate: (selections: ServerSelection) => void;
}

export default function ServerConfigurator({ dictionary, showServers, showGPU, selections, onUpdate }: Props) {
  const items = [
    ...(showServers ? serverPricing : []),
    ...(showGPU ? gpuPricing : []),
  ];

  const updateQty = (id: string, qty: number) => {
    const next = { ...selections };
    if (qty <= 0) delete next[id];
    else next[id] = qty;
    onUpdate(next);
  };

  return (
    <div className="bg-white rounded-2xl p-6 md:p-8 shadow-sm border border-sage/10">
      <h3 className="text-lg font-bold text-forest-dark mb-6">{dictionary.title}</h3>
      <div className="space-y-3">
        {items.map((item) => (
          <div
            key={item.id}
            className={`flex flex-col sm:flex-row sm:items-center justify-between p-4 rounded-xl border-2 transition-all ${
              (selections[item.id] || 0) > 0
                ? 'border-forest bg-mint/50'
                : 'border-sage/10 hover:border-sage/30'
            }`}
          >
            <div className="mb-2 sm:mb-0">
              <div className="font-medium text-forest-dark">{item.name}</div>
              <div className="text-xs text-warm-gray/70">{item.specs}</div>
            </div>
            <div className="flex items-center gap-4">
              <span className="text-sm font-bold text-forest whitespace-nowrap">
                ${item.monthlyCAD.toLocaleString()}/mo
              </span>
              <div className="flex items-center gap-2">
                <label className="text-xs text-warm-gray/70">{dictionary.quantity}</label>
                <input
                  type="number"
                  min={0}
                  max={50}
                  value={selections[item.id] || 0}
                  onChange={(e) => updateQty(item.id, parseInt(e.target.value) || 0)}
                  className="w-16 bg-white border border-sage/20 rounded-lg px-2 py-1.5 text-sm text-warm-gray focus:outline-none focus:border-forest focus:ring-1 focus:ring-forest text-center"
                />
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
