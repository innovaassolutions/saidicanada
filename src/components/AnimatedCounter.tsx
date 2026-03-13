'use client';

import { useEffect, useState, useCallback } from 'react';
import { useIntersectionObserver } from '@/hooks/useIntersectionObserver';

interface AnimatedCounterProps {
  endValue: number;
  suffix?: string;
  prefix?: string;
  decimals?: number;
  duration?: number;
  label: string;
  nonNumeric?: string; // For values like "24/7" or "Tier III+"
}

function easeOutExpo(t: number): number {
  return t === 1 ? 1 : 1 - Math.pow(2, -10 * t);
}

export default function AnimatedCounter({
  endValue,
  suffix = '',
  prefix = '',
  decimals = 0,
  duration = 2000,
  label,
  nonNumeric,
}: AnimatedCounterProps) {
  const { ref, isVisible } = useIntersectionObserver({ threshold: 0.3 });
  const [displayValue, setDisplayValue] = useState(nonNumeric ? '' : '0');
  const [hasAnimated, setHasAnimated] = useState(false);

  const animate = useCallback(() => {
    if (nonNumeric) {
      setDisplayValue(nonNumeric);
      return;
    }

    const startTime = performance.now();

    const tick = (currentTime: number) => {
      const elapsed = currentTime - startTime;
      const progress = Math.min(elapsed / duration, 1);
      const easedProgress = easeOutExpo(progress);
      const currentValue = easedProgress * endValue;

      setDisplayValue(currentValue.toFixed(decimals));

      if (progress < 1) {
        requestAnimationFrame(tick);
      }
    };

    requestAnimationFrame(tick);
  }, [endValue, decimals, duration, nonNumeric]);

  useEffect(() => {
    if (isVisible && !hasAnimated) {
      setHasAnimated(true);
      animate();
    }
  }, [isVisible, hasAnimated, animate]);

  return (
    <div ref={ref} className="text-center p-4">
      <div className="text-3xl font-bold text-forest" aria-live="polite">
        {prefix}{displayValue}{suffix}
      </div>
      <div className="text-sm text-warm-gray mt-1">{label}</div>
    </div>
  );
}
