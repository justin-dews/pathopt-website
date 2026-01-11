/**
 * useReducedMotion Hook
 *
 * Detects user's motion preference for accessibility.
 * Respects `prefers-reduced-motion` system setting.
 */

'use client';

import { useEffect, useState } from 'react';

/**
 * Detect if user prefers reduced motion
 *
 * @returns boolean - true if user prefers reduced motion
 *
 * @example
 * ```tsx
 * const prefersReducedMotion = useReducedMotion();
 *
 * return (
 *   <motion.div
 *     animate={{ opacity: 1 }}
 *     transition={{ duration: prefersReducedMotion ? 0 : 0.5 }}
 *   >
 *     Content
 *   </motion.div>
 * );
 * ```
 */
export function useReducedMotion(): boolean {
  const [prefersReducedMotion, setPrefersReducedMotion] = useState(false);

  useEffect(() => {
    // Check if matchMedia is supported
    if (typeof window === 'undefined' || !window.matchMedia) {
      return;
    }

    const mediaQuery = window.matchMedia('(prefers-reduced-motion: reduce)');

    // Set initial value
    setPrefersReducedMotion(mediaQuery.matches);

    // Update value when preference changes
    const handleChange = (event: MediaQueryListEvent) => {
      setPrefersReducedMotion(event.matches);
    };

    // Modern browsers
    if (mediaQuery.addEventListener) {
      mediaQuery.addEventListener('change', handleChange);
    } else {
      // Fallback for older browsers
      mediaQuery.addListener(handleChange);
    }

    // Cleanup
    return () => {
      if (mediaQuery.removeEventListener) {
        mediaQuery.removeEventListener('change', handleChange);
      } else {
        mediaQuery.removeListener(handleChange);
      }
    };
  }, []);

  return prefersReducedMotion;
}

/**
 * Get motion-safe transition duration
 * Returns 0 if user prefers reduced motion
 *
 * @param duration - Normal animation duration in seconds
 * @returns Adjusted duration based on user preference
 */
export function useMotionSafeDuration(duration: number): number {
  const prefersReducedMotion = useReducedMotion();
  return prefersReducedMotion ? 0 : duration;
}

/**
 * Check if animations should be enabled
 * Convenience function that returns the inverse of useReducedMotion
 */
export function useAnimationsEnabled(): boolean {
  return !useReducedMotion();
}
