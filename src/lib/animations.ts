/**
 * PathOpt Animation Library
 *
 * Centralized animation variants and configuration for Framer Motion.
 * Provides consistent, reusable animation patterns across the website.
 */

import { Variants, Transition } from 'framer-motion';

// ============================================================================
// TIMING CONSTANTS
// ============================================================================

export const DURATIONS = {
  fast: 0.2,      // 200ms - Quick interactions
  normal: 0.4,    // 400ms - Standard animations
  medium: 0.5,    // 500ms - Medium animations
  slow: 0.6,      // 600ms - Deliberate animations
  counter: 2.0,   // 2000ms - Counter animations (Hero)
  counterFast: 1.5 // 1500ms - Faster counters (ProofSection)
} as const;

export const EASING = {
  easeOut: [0.16, 1, 0.3, 1],       // Smooth deceleration
  easeInOut: [0.45, 0, 0.55, 1],    // Balanced
  spring: { type: 'spring' as const, stiffness: 100, damping: 15 }
} as const;

// ============================================================================
// VIEWPORT CONFIGURATION
// ============================================================================

/**
 * Default viewport configuration for scroll-triggered animations
 * - Triggers 50px before element enters viewport
 * - Animations play only once per page load
 */
export const viewport = {
  once: true,
  margin: '-50px'
} as const;

// ============================================================================
// CORE ANIMATION VARIANTS
// ============================================================================

/**
 * Fade in from below with upward movement
 * Use for: Headings, paragraphs, general content reveals
 */
export const fadeInUp: Variants = {
  hidden: {
    opacity: 0,
    y: 20
  },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: DURATIONS.slow,
      ease: EASING.easeOut
    }
  }
};

/**
 * Fade in from left with horizontal movement
 * Use for: List items, alternating content, problem sections
 */
export const fadeInLeft: Variants = {
  hidden: {
    opacity: 0,
    x: -20
  },
  visible: {
    opacity: 1,
    x: 0,
    transition: {
      duration: DURATIONS.medium,
      ease: EASING.easeOut
    }
  }
};

/**
 * Fade in from right with horizontal movement
 * Use for: List items, alternating content, solution sections
 */
export const fadeInRight: Variants = {
  hidden: {
    opacity: 0,
    x: 20
  },
  visible: {
    opacity: 1,
    x: 0,
    transition: {
      duration: DURATIONS.medium,
      ease: EASING.easeOut
    }
  }
};

/**
 * Scale up with fade in - subtle pop effect
 * Use for: Buttons, CTAs, icons, stats
 */
export const scaleUp: Variants = {
  hidden: {
    opacity: 0,
    scale: 0.9
  },
  visible: {
    opacity: 1,
    scale: 1,
    transition: {
      duration: DURATIONS.normal,
      ease: EASING.easeOut
    }
  }
};

/**
 * Combined scale and slide animation - more pronounced effect
 * Use for: Feature cards, benefit cards, prominent elements
 */
export const scaleUpSlide: Variants = {
  hidden: {
    opacity: 0,
    y: 30,
    scale: 0.95
  },
  visible: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: {
      duration: DURATIONS.slow,
      ease: EASING.easeOut
    }
  }
};

/**
 * Simple fade in without movement
 * Use for: Background elements, subtle reveals
 */
export const fadeIn: Variants = {
  hidden: {
    opacity: 0
  },
  visible: {
    opacity: 1,
    transition: {
      duration: DURATIONS.medium,
      ease: EASING.easeOut
    }
  }
};

// ============================================================================
// STAGGER CONTAINERS
// ============================================================================

/**
 * Container that staggers child animations
 * Use for: Grids, lists, sequential reveals
 */
export const staggerContainer: Variants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.1
    }
  }
};

/**
 * Faster stagger for list items
 * Use for: Problem/solution lists, feature lists
 */
export const staggerContainerFast: Variants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.08
    }
  }
};

/**
 * Slower stagger for prominent elements
 * Use for: Team grids, large card layouts
 */
export const staggerContainerSlow: Variants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.15
    }
  }
};

// ============================================================================
// SPECIALIZED VARIANTS
// ============================================================================

/**
 * Paragraph reveal with slight upward movement
 * Optimized for body text
 */
export const paragraphReveal: Variants = {
  hidden: {
    opacity: 0,
    y: 15
  },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: DURATIONS.medium,
      ease: EASING.easeOut
    }
  }
};

/**
 * Heading reveal with more pronounced movement
 * Optimized for H1, H2 elements
 */
export const headingReveal: Variants = {
  hidden: {
    opacity: 0,
    y: 25
  },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: DURATIONS.slow,
      ease: EASING.easeOut
    }
  }
};

/**
 * Stats/counter block animation
 * Combines scale with fade for metric blocks
 */
export const statReveal: Variants = {
  hidden: {
    opacity: 0,
    scale: 0.8
  },
  visible: {
    opacity: 1,
    scale: 1,
    transition: {
      duration: DURATIONS.medium,
      ease: EASING.easeOut
    }
  }
};

// ============================================================================
// UTILITY FUNCTIONS
// ============================================================================

/**
 * Create a custom stagger delay
 * @param delay - Delay in seconds between children
 */
export const createStaggerContainer = (delay: number): Variants => ({
  hidden: {},
  visible: {
    transition: {
      staggerChildren: delay
    }
  }
});

/**
 * Create a transition with custom delay
 * @param delay - Delay in seconds
 * @param duration - Duration in seconds
 */
export const createDelayedTransition = (delay: number, duration: number = DURATIONS.normal): Transition => ({
  duration,
  delay,
  ease: EASING.easeOut
});

/**
 * Get animation delay based on index
 * @param index - Item index
 * @param baseDelay - Base delay in seconds (default: 0.1)
 */
export const getStaggerDelay = (index: number, baseDelay: number = 0.1): number => {
  return index * baseDelay;
};

// ============================================================================
// HOVER ANIMATIONS (For whileHover prop)
// ============================================================================

export const hoverLift = {
  y: -2,
  transition: { duration: DURATIONS.fast }
};

export const hoverLiftCard = {
  y: -4,
  transition: { duration: DURATIONS.fast }
};

export const hoverScale = {
  scale: 1.05,
  transition: { duration: DURATIONS.fast }
};

export const hoverArrowNudge = {
  x: 4,
  transition: { duration: DURATIONS.fast }
};
