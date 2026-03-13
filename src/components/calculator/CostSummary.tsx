'use client';

import Link from 'next/link';

interface Props {
  dictionary: {
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
  coloCost: number;
  serverCost: number;
  managedCost: number;
  totalMonthly: number;
  hasSelections: boolean;
  locale: string;
}

function formatCAD(amount: number): string {
  return amount.toLocaleString('en-CA', { style: 'currency', currency: 'CAD', minimumFractionDigits: 0, maximumFractionDigits: 0 });
}

export default function CostSummary({ dictionary, coloCost, serverCost, managedCost, totalMonthly, hasSelections, locale }: Props) {
  if (!hasSelections) return null;

  return (
    <div className="bg-forest-dark rounded-2xl p-6 md:p-8 text-white">
      <h3 className="text-lg font-bold mb-6">{dictionary.title}</h3>
      <div className="space-y-3 mb-6">
        {coloCost > 0 && (
          <div className="flex justify-between">
            <span className="text-white/70">Colocation</span>
            <span className="font-medium">{formatCAD(coloCost)}{dictionary.perMonth}</span>
          </div>
        )}
        {serverCost > 0 && (
          <div className="flex justify-between">
            <span className="text-white/70">Servers & GPU</span>
            <span className="font-medium">{formatCAD(serverCost)}{dictionary.perMonth}</span>
          </div>
        )}
        {managedCost > 0 && (
          <div className="flex justify-between">
            <span className="text-white/70">Managed Services</span>
            <span className="font-medium">{formatCAD(managedCost)}{dictionary.perMonth}</span>
          </div>
        )}
      </div>
      <div className="border-t border-white/20 pt-4 space-y-2">
        <div className="flex justify-between text-xl font-bold">
          <span>{dictionary.monthlyTotal}</span>
          <span className="text-sage-light">{formatCAD(totalMonthly)}</span>
        </div>
        <div className="flex justify-between text-sm text-white/60">
          <span>{dictionary.annualProjection}</span>
          <span>{formatCAD(totalMonthly * 12)}</span>
        </div>
      </div>
      <p className="text-white/50 text-xs mt-4">{dictionary.disclaimer}</p>
      <Link
        href={`/${locale}/contact`}
        className="block mt-6 w-full bg-white text-forest text-center py-3.5 rounded-lg font-semibold hover:bg-sage-light transition-colors"
      >
        {dictionary.requestQuote}
      </Link>
    </div>
  );
}
