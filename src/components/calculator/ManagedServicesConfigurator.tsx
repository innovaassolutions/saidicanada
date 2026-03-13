'use client';

import { managedServicesTiers, addons } from '@/data/pricing';
import type { ManagedSelection } from './CostCalculator';

interface Props {
  dictionary: {
    title: string;
    perServerMonth: string;
    addons: string;
    remoteHands: string;
    managedBackup: string;
    ddosProtection: string;
  };
  selection: ManagedSelection;
  onUpdate: (selection: ManagedSelection) => void;
}

export default function ManagedServicesConfigurator({ dictionary, selection, onUpdate }: Props) {
  return (
    <div className="bg-white rounded-2xl p-6 md:p-8 shadow-sm border border-sage/10">
      <h3 className="text-lg font-bold text-forest-dark mb-6">{dictionary.title}</h3>
      <div className="space-y-6">
        {/* Tier Selection */}
        <div className="space-y-2">
          {managedServicesTiers.map((tier) => (
            <button
              key={tier.id}
              onClick={() => onUpdate({ ...selection, tierId: tier.id })}
              className={`w-full text-left p-4 rounded-xl border-2 transition-all ${
                selection.tierId === tier.id
                  ? 'border-forest bg-mint'
                  : 'border-sage/20 hover:border-forest/50'
              }`}
            >
              <div className="flex justify-between items-start">
                <div>
                  <div className="font-medium text-forest-dark">{tier.name}</div>
                  <div className="text-xs text-warm-gray/70 mt-0.5">{tier.includes}</div>
                </div>
                <span className="text-sm font-bold text-forest whitespace-nowrap">
                  ${tier.monthlyCADPerServer}{dictionary.perServerMonth}
                </span>
              </div>
            </button>
          ))}
        </div>

        {/* Server Count */}
        {selection.tierId && (
          <div>
            <label className="block text-sm font-medium text-warm-gray mb-2">
              Number of Servers
            </label>
            <input
              type="number"
              min={1}
              max={100}
              value={selection.serverCount}
              onChange={(e) => onUpdate({ ...selection, serverCount: Math.max(1, parseInt(e.target.value) || 1) })}
              className="w-24 bg-white border border-sage/20 rounded-lg px-4 py-2 text-warm-gray focus:outline-none focus:border-forest focus:ring-1 focus:ring-forest"
            />
          </div>
        )}

        {/* Add-ons */}
        <div>
          <h4 className="text-sm font-semibold text-forest-dark mb-3">{dictionary.addons}</h4>
          <div className="space-y-3">
            <label className="flex items-center gap-3 cursor-pointer">
              <input
                type="checkbox"
                checked={selection.ddosProtection}
                onChange={(e) => onUpdate({ ...selection, ddosProtection: e.target.checked })}
                className="w-4 h-4 accent-forest"
              />
              <span className="text-sm text-warm-gray">
                {dictionary.ddosProtection} — ${addons.ddosProtection.priceCAD}/mo
              </span>
            </label>

            <div className="flex items-center gap-3">
              <span className="text-sm text-warm-gray">{dictionary.managedBackup}:</span>
              <input
                type="number"
                min={0}
                max={100000}
                value={selection.backupGB}
                onChange={(e) => onUpdate({ ...selection, backupGB: Math.max(0, parseInt(e.target.value) || 0) })}
                className="w-24 bg-white border border-sage/20 rounded-lg px-3 py-1.5 text-sm text-warm-gray focus:outline-none focus:border-forest focus:ring-1 focus:ring-forest"
              />
              <span className="text-xs text-warm-gray/70">GB @ ${addons.managedBackup.priceCAD}/GB/mo</span>
            </div>

            <div className="flex items-center gap-3">
              <span className="text-sm text-warm-gray">{dictionary.remoteHands}:</span>
              <input
                type="number"
                min={0}
                max={100}
                value={selection.remoteHandsHours}
                onChange={(e) => onUpdate({ ...selection, remoteHandsHours: Math.max(0, parseInt(e.target.value) || 0) })}
                className="w-24 bg-white border border-sage/20 rounded-lg px-3 py-1.5 text-sm text-warm-gray focus:outline-none focus:border-forest focus:ring-1 focus:ring-forest"
              />
              <span className="text-xs text-warm-gray/70">hrs @ ${addons.remoteHands.priceCAD}/hr</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
