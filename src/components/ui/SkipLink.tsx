'use client';

/**
 * SkipLink Component
 * Provides a way for keyboard users to skip the navigation and jump directly to main content.
 * This is essential for WCAG 2.1 AA compliance (Success Criterion 2.4.1 Bypass Blocks).
 */
export function SkipLink() {
  return (
    <a
      href="#main-content"
      className="sr-only focus:not-sr-only focus:fixed focus:top-4 focus:left-4 focus:z-[100] focus:px-6 focus:py-3 focus:bg-[var(--color-accent)] focus:text-white focus:rounded-md focus:font-medium focus:shadow-lg focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-[var(--color-accent)]"
    >
      Skip to main content
    </a>
  );
}
