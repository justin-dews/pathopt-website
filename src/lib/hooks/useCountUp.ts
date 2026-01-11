/**
 * useCountUp Hook
 *
 * Animates numbers from start to end value using requestAnimationFrame
 * with viewport-triggered activation for scroll-based counter animations.
 */

'use client';

import { useEffect, useRef, useState } from 'react';
import { useInView } from 'framer-motion';

interface UseCountUpOptions {
  /** Ending value to count to */
  end: number;
  /** Starting value (default: 0) */
  start?: number;
  /** Animation duration in milliseconds (default: 2000) */
  duration?: number;
  /** Number of decimal places (default: 0) */
  decimals?: number;
  /** Custom easing function (default: easeOutCubic) */
  easingFn?: (t: number) => number;
  /** Whether to trigger animation when in viewport (default: true) */
  triggerOnView?: boolean;
  /** Viewport trigger margin (default: '-50px') */
  viewportMargin?: string;
}

/**
 * Cubic ease-out easing function
 * Provides natural deceleration effect
 */
const easeOutCubic = (t: number): number => {
  return 1 - Math.pow(1 - t, 3);
};

/**
 * Counter animation hook with viewport triggering
 *
 * @example
 * ```tsx
 * const { count, ref } = useCountUp({ end: 100, duration: 2000 });
 * return <div ref={ref}>{count}</div>;
 * ```
 */
export function useCountUp({
  end,
  start = 0,
  duration = 2000,
  decimals = 0,
  easingFn = easeOutCubic,
  triggerOnView = true,
  viewportMargin = '-50px'
}: UseCountUpOptions) {
  const [count, setCount] = useState<number>(start);
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: viewportMargin as any });
  const hasAnimated = useRef(false);
  const frameRef = useRef<number | undefined>(undefined);

  useEffect(() => {
    // Only animate when in view (if viewport triggering is enabled)
    if (triggerOnView && !isInView) return;

    // Prevent re-running animation
    if (hasAnimated.current) return;
    hasAnimated.current = true;

    const startTime = performance.now();
    const diff = end - start;

    const animate = (currentTime: number) => {
      const elapsed = currentTime - startTime;
      const progress = Math.min(elapsed / duration, 1);

      // Apply easing function
      const easedProgress = easingFn(progress);

      // Calculate current count
      const currentCount = start + (diff * easedProgress);

      // Round to specified decimal places
      setCount(Number(currentCount.toFixed(decimals)));

      // Continue animation if not complete
      if (progress < 1) {
        frameRef.current = requestAnimationFrame(animate);
      }
    };

    // Start animation
    frameRef.current = requestAnimationFrame(animate);

    // Cleanup
    return () => {
      if (frameRef.current) {
        cancelAnimationFrame(frameRef.current);
      }
    };
  }, [isInView, end, start, duration, decimals, easingFn, triggerOnView]);

  return { count, ref };
}

/**
 * Format counter value with optional suffix/prefix
 */
export function formatCounterValue(
  value: number,
  options: {
    prefix?: string;
    suffix?: string;
    decimals?: number;
    useGrouping?: boolean;
  } = {}
): string {
  const {
    prefix = '',
    suffix = '',
    decimals = 0,
    useGrouping = false
  } = options;

  const formatted = useGrouping
    ? value.toLocaleString('en-US', {
        minimumFractionDigits: decimals,
        maximumFractionDigits: decimals
      })
    : value.toFixed(decimals);

  return `${prefix}${formatted}${suffix}`;
}

/**
 * Preset easing functions
 */
export const easingPresets = {
  linear: (t: number) => t,
  easeOutCubic: (t: number) => 1 - Math.pow(1 - t, 3),
  easeOutQuad: (t: number) => 1 - Math.pow(1 - t, 2),
  easeOutQuart: (t: number) => 1 - Math.pow(1 - t, 4),
  easeInOutCubic: (t: number) =>
    t < 0.5 ? 4 * t * t * t : 1 - Math.pow(-2 * t + 2, 3) / 2
};
