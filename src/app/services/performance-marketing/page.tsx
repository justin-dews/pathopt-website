import { Metadata } from 'next';
import { PillarHero } from '@/components/sections/PillarHero';
import { ProblemSection } from '@/components/sections/ProblemSection';
import { SolutionSection } from '@/components/sections/SolutionSection';
import { ProofSection } from '@/components/sections/ProofSection';
import { WhoItsFor } from '@/components/sections/WhoItsFor';
import { FinalCTASection } from '@/components/sections/FinalCTASection';

export const metadata: Metadata = {
  title: 'Transparent Performance Marketing for Small Business | PathOpt',
  description:
    'See exactly where every dollar goes. Real-time dashboards, daily optimization, 30-60% cost reduction. Marketing with complete transparency.',
  openGraph: {
    title: 'Transparent Performance Marketing for Small Business | PathOpt',
    description: 'See exactly where every dollar goes. Real-time dashboards, daily optimization, 30-60% cost reduction.',
    type: 'website',
    images: [{ url: '/og-images/og-main-v3.png', width: 1456, height: 816, alt: 'PathOpt Performance Marketing' }],
  },
  twitter: {
    card: 'summary_large_image',
    images: ['/og-images/og-main-v3.png'],
  },
};

// Hero Data
const heroData = {
  label: 'Performance Marketing',
  headline: 'See Exactly Where Every Marketing Dollar Goes',
  subtitle:
    'Real-time dashboards. Daily optimization. Complete transparency. Finally, marketing that shows you exactly what\'s working—and stops wasting your money on what isn\'t.',
  primaryCTA: {
    text: 'Get Your Free Marketing Audit',
    href: '/contact',
  },
  secondaryCTA: {
    text: 'See Our Results',
    href: '#proof',
  },
};

// Problem Data
const problemData = {
  headline: 'You\'re Paying for Marketing. But Do You Know What It\'s Actually Doing?',
  introParagraphs: [
    'Here\'s what we hear from almost every business owner we talk to:',
    '"I\'m spending $3,000... $5,000... $10,000 a month on marketing. My agency sends me reports with a bunch of metrics. But I have no idea if it\'s actually working."',
    'Sound familiar?',
    'The agency playbook is broken:',
  ],
  symptoms: [
    'They promise results, then hide behind vanity metrics',
    'You get monthly reports you don\'t understand',
    'They won\'t show you exactly where your money goes',
    'You\'re never quite sure if you\'re getting ripped off',
    'When you ask hard questions, you get more jargon',
  ],
  closingParagraph:
    'After a year, you\'ve spent $60,000 and you\'re not sure you got $60,000 of value. Here\'s the uncomfortable truth: Most agencies are incentivized to keep you confused. If you understood exactly what they were doing, you\'d realize half of it isn\'t working. We think you deserve better.',
};

// Solution Data
const solutionData = {
  headline: 'Marketing with Complete Transparency. Results You Can See.',
  introParagraph:
    'PathOpt takes a fundamentally different approach to marketing. We believe you should see exactly what\'s happening with your marketing spend—in real-time, in plain English.',
  items: [
    {
      title: 'Marketing Audit & Optimization',
      description:
        'We start by analyzing your current marketing. What\'s working? What\'s wasting money? Where are the quick wins? No charge for the audit—you\'ll see the opportunities whether or not you work with us.',
    },
    {
      title: 'Real-Time Performance Dashboards',
      description:
        'No more waiting for monthly reports. See your cost per lead, conversion rates, and ROI updated daily. Ask questions anytime. Get straight answers.',
    },
    {
      title: 'Daily Optimization & Management',
      description:
        'We don\'t "set it and forget it." Your campaigns get reviewed and optimized every single day. Small adjustments compound into major improvements.',
    },
    {
      title: 'Website & Conversion Optimization',
      description:
        'Getting traffic is only half the battle. We optimize your website to convert more of those visitors into leads and customers.',
    },
    {
      title: 'Lead Follow-Up Automation',
      description:
        'Fast follow-up closes more deals. We set up systems so leads get contacted immediately—before they call your competitor.',
    },
  ],
};

// Proof Data
const proofData = {
  headline: 'The Results Speak for Themselves',
  metrics: [
    {
      value: '30-60%',
      label: 'Reduction in cost per lead—stop paying for expensive leads and get more for less',
    },
    {
      value: '2-3x',
      label: 'More qualified leads—not just more leads, better leads that actually convert',
    },
    {
      value: '100%',
      label: 'Complete visibility into spend—know exactly where every dollar goes, every day',
    },
  ],
  caseStudy: {
    title: 'HomeWorks Construction and Remodeling',
    description:
      'Before PathOpt: $47 cost per lead. Unclear which campaigns were working. Frustrated with agency lack of transparency. After 30 days: $27 cost per lead. Tripled qualified leads. Reduced total spend while increasing results. Complete visibility into every campaign.',
    href: '/case-studies/homeworks-construction',
  },
};

// Who It's For Data
const whoItsForData = {
  headline: 'This Is For You If...',
  fitCriteria: [
    'You\'re spending money on marketing but not sure what you\'re getting',
    'You\'ve worked with agencies before and been disappointed',
    'You want to see exactly where your money goes—no black boxes',
    'You\'re ready for marketing that\'s optimized daily, not monthly',
    'You believe you should understand your own marketing, not just trust someone else',
  ],
  notFitCriteria: [
    'You\'re looking for the cheapest option (we\'re not that)',
    'You want to "set it and forget it" with no involvement',
    'You\'re not willing to share access to your data—transparency goes both ways',
  ],
};

// Final CTA Data
const finalCTAData = {
  label: 'Take the Next Step',
  headline: 'Stop Paying Agencies to Keep You in the Dark',
  subheadline:
    'Get a free audit of your current marketing. We\'ll show you exactly what\'s working, what\'s not, and where you\'re leaving money on the table.',
  ctaText: 'Get Your Free Marketing Audit',
  ctaHref: '/contact',
};

export default function PerformanceMarketingPage() {
  return (
    <main>
      <PillarHero {...heroData} />
      <ProblemSection {...problemData} />
      <div id="solution">
        <SolutionSection {...solutionData} />
      </div>
      <div id="proof">
        <ProofSection {...proofData} />
      </div>
      <WhoItsFor {...whoItsForData} />
      <FinalCTASection {...finalCTAData} />
    </main>
  );
}
