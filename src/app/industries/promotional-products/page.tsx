import { Metadata } from 'next';
import { IndustryHero } from '@/components/sections/IndustryHero';
import { IndustryProblemSection } from '@/components/sections/IndustryProblemSection';
import { IndustrySolutionSection } from '@/components/sections/IndustrySolutionSection';
import { WhoItsFor } from '@/components/sections/WhoItsFor';
import { FinalCTASection } from '@/components/sections/FinalCTASection';

export const metadata: Metadata = {
  title: 'Marketing for Promotional Products Distributors | PathOpt',
  description:
    'Systematize operations, optimize marketing, and scale without the chaos. Growth partners for promotional products distributors doing $500K-$5M.',
  openGraph: {
    title: 'Marketing for Promotional Products Distributors | PathOpt',
    description:
      'Systematize operations, optimize marketing, and scale without the chaos. Growth partners for promotional products distributors.',
    type: 'website',
    images: [{
      url: '/og-images/og-main-v3.png',
      width: 1456,
      height: 816,
      alt: 'Marketing for Promotional Products Distributors - PathOpt',
    }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Marketing for Promotional Products Distributors | PathOpt',
    description:
      'Systematize operations, optimize marketing, and scale without the chaos. Growth partners for promotional products distributors.',
    images: ['/og-images/og-main-v3.png'],
  },
};

const heroData = {
  headline: "Managing Orders Is a Full-Time Job. Running Your Business Shouldn't Be.",
  subheadline:
    'Three business owners helping promotional products distributors systematize operations, optimize marketing, and scale without the chaos.',
  paragraphs: [
    "You're juggling suppliers, managing orders, chasing approvals, and somehow finding time to actually sell. Every day feels like putting out fires.",
    "Here's the thing: that chaos isn't just exhausting. It's costing you money. It's limiting your growth. And it's keeping you stuck in the business instead of working on it.",
    "We've helped businesses just like yours build the systems and marketing that create real growth—not just more work.",
  ],
  primaryCTA: {
    text: 'Get Your Free Business Assessment',
    href: '/contact',
  },
};

const problemData = {
  label: 'The Problem',
  headline: "The Distributor's Dilemma",
  introduction:
    "You're caught between two worlds. Suppliers on one side. Clients on the other. And you're in the middle, making it all work.\n\nBut \"making it work\" isn't a growth strategy.",
  problems: [
    {
      title: 'Order Management Chaos',
      description:
        "Every order is custom. Approvals take forever. Rush orders throw everything off. You're spending more time managing orders than growing the business.",
    },
    {
      title: 'B2B Marketing Confusion',
      description:
        'You sell to businesses, not consumers. But most marketing advice is designed for B2C. You\'ve tried things that "should work" and watched them fail.',
    },
    {
      title: 'Scaling Breaks Everything',
      description:
        "When you grow, the cracks show. More orders mean more chaos. More clients mean more problems. Growth feels like a punishment, not a reward.",
    },
  ],
};

const solutionData = {
  label: 'The PathOpt Approach',
  headline: 'Operations That Scale. Marketing That Works. Partners Who Get It.',
  introduction:
    "We're not a typical marketing agency. We're three business owners who understand what it takes to systematize and scale a business—not just run ads.",
  pillars: [
    {
      title: 'Operational Systematization',
      description: 'Stop managing chaos. Build systems that work:',
      bullets: [
        { text: "Order management processes that don't require you" },
        { text: 'Workflow optimization that increases capacity' },
        { text: 'Documentation that lets you delegate' },
        { text: 'The infrastructure to grow without breaking' },
      ],
    },
    {
      title: 'B2B Marketing That Actually Works',
      description: 'Marketing designed for how businesses actually buy:',
      bullets: [
        { text: 'Lead generation focused on decision-makers' },
        { text: 'Content that builds credibility and trust' },
        { text: 'Follow-up systems for long sales cycles' },
        { text: 'Measurable ROI on every marketing dollar' },
      ],
    },
    {
      title: 'Strategic Partnership',
      description: 'Three business owners bringing real experience:',
      bullets: [
        { text: 'Strategy that accounts for your unique business model' },
        { text: "Execution that doesn't require you to become a marketing expert" },
        { text: "Complete transparency into what's working and what's not" },
      ],
    },
  ],
};

const whoItsForData = {
  headline: 'Who This Is For',
  subheadline:
    'We work with promotional products distributors ready to systematize and scale.',
  items: [
    'Promotional products distributors doing $500K-$5M in revenue',
    'Owners who feel stuck managing operations instead of growing',
    'Businesses ready to systematize and scale',
    'Teams that want a partner, not another vendor to manage',
  ],
  cta: {
    text: 'Get Your Free Business Assessment',
    href: '/contact',
  },
};

const finalCTAData = {
  headline: 'Ready to Scale Without the Chaos?',
  subheadline:
    "Let's talk about what growth looks like when you have the right systems and marketing in place.",
  primaryCTA: {
    text: 'Get Your Free Business Assessment',
    href: '/contact',
  },
};

export default function PromotionalProductsPage() {
  return (
    <main>
      {/* Hero */}
      <IndustryHero {...heroData} />

      {/* Problem Section */}
      <IndustryProblemSection {...problemData} />

      {/* Solution Section */}
      <IndustrySolutionSection {...solutionData} />

      {/* Who It's For */}
      <WhoItsFor {...whoItsForData} />

      {/* Final CTA */}
      <FinalCTASection {...finalCTAData} />
    </main>
  );
}
