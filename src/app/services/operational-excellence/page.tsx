import { Metadata } from 'next';
import { PillarHero } from '@/components/sections/PillarHero';
import { ProblemSection } from '@/components/sections/ProblemSection';
import { SolutionSection } from '@/components/sections/SolutionSection';
import { ProofSection } from '@/components/sections/ProofSection';
import { WhoItsFor } from '@/components/sections/WhoItsFor';
import { FinalCTASection } from '@/components/sections/FinalCTASection';

export const metadata: Metadata = {
  title: 'Business Systematization & Operational Excellence | PathOpt',
  description:
    'Systematize your business so it scales. EOS/Traction implementation, process documentation, workflow optimization for small businesses.',
  openGraph: {
    title: 'Business Systematization & Operational Excellence | PathOpt',
    description: 'Systematize your business so it scales. EOS/Traction implementation, process documentation, workflow optimization.',
    type: 'website',
    images: [{ url: '/og-images/og-main-v3.png', width: 1456, height: 816, alt: 'PathOpt Operational Excellence' }],
  },
  twitter: {
    card: 'summary_large_image',
    images: ['/og-images/og-main-v3.png'],
  },
};

// Hero Data
const heroData = {
  label: 'Operational Excellence',
  headline: 'Stop Being the Bottleneck in Your Own Business',
  subtitle:
    'Systematize your operations so your business runs without you in every decision. EOS/Traction implementation, process documentation, and scaling infrastructure—at prices that make sense for small businesses.',
  primaryCTA: {
    text: 'Get Your Operations Assessment',
    href: '/contact',
  },
  secondaryCTA: {
    text: 'See How It Works',
    href: '#solution',
  },
};

// Problem Data
const problemData = {
  headline: 'Your Business Has a Bottleneck Problem. And It\'s You.',
  introParagraphs: [
    'You built this business. You know how everything works. And that\'s exactly the problem.',
    'Every decision runs through you. Every question lands on your desk. You can\'t take a vacation without your phone blowing up. You\'re not running the business—you ARE the business.',
    'Sound familiar?',
    'This is the ceiling every growing business hits. You can\'t scale what only exists in your head. You can\'t delegate what isn\'t documented. You can\'t grow when you\'re stuck in the day-to-day.',
  ],
  symptoms: [
    'You work 60+ hours a week and still feel behind',
    'Your team asks you the same questions over and over',
    'You\'ve tried to delegate, but it always comes back to you',
    'You know you should systematize, but who has time?',
    'Growth feels like it\'s making things harder, not easier',
  ],
  closingParagraph:
    'Here\'s the truth: You don\'t have a people problem. You have a systems problem. And until you fix it, you\'ll stay stuck.',
};

// Solution Data
const solutionData = {
  headline: 'Systematize Your Business So It Runs Without You',
  introParagraph:
    'PathOpt helps you build the operational infrastructure that growing businesses need. We don\'t just tell you to "document your processes"—we help you build the systems, train your team, and make it stick.',
  items: [
    {
      title: 'EOS/Traction Implementation',
      description:
        'The same operating system used by 200,000+ businesses—implemented at a fraction of typical EOS Implementer costs. Vision, traction, healthy teams.',
    },
    {
      title: 'Process Documentation & Optimization',
      description:
        'Get what\'s in your head out of your head. We document your key processes, identify bottlenecks, and create systems your team can actually follow.',
    },
    {
      title: 'Workflow Systematization',
      description:
        'Stop reinventing the wheel on recurring tasks. Build workflows that run the same way every time, with or without you.',
    },
    {
      title: 'Team Accountability Structures',
      description:
        'Clear ownership, clear metrics, clear expectations. Your team knows exactly what they\'re responsible for and how success is measured.',
    },
    {
      title: 'Scaling Infrastructure',
      description:
        'The systems you need to 2x or 3x without everything breaking. Hire with confidence. Delegate without fear.',
    },
  ],
};

// Proof Data
const proofData = {
  headline: 'What Happens When You Systematize',
  metrics: [
    {
      value: '10-20 hrs',
      label: 'Saved per week when your systems work and you\'re not in every meeting and decision',
    },
    {
      value: '20-30%',
      label: 'Productivity improvement with clear processes and accountability',
    },
    {
      value: 'Scalable',
      label: 'Growth without chaos—from 5 employees to 15 without everything falling apart',
    },
  ],
};

// Who It's For Data
const whoItsForData = {
  headline: 'This Is For You If...',
  fitCriteria: [
    'You\'re working IN your business more than ON your business',
    'You\'ve tried to delegate but it keeps coming back to you',
    'You know you need systems but don\'t have time to build them',
    'You\'re hitting a growth ceiling and can feel the chaos increasing',
    'You want to eventually step back without the business falling apart',
  ],
  notFitCriteria: [
    'You\'re not willing to let go of control over every decision',
    'You think a single software tool will solve everything',
    'You\'re looking for a quick fix that doesn\'t require changing how you operate',
  ],
};

// Final CTA Data
const finalCTAData = {
  label: 'Take the Next Step',
  headline: 'Get Your Time Back. Build a Business That Runs Without You.',
  subheadline: 'Let\'s assess your operations and identify the systems that will make the biggest impact.',
  ctaText: 'Get Your Operations Assessment',
  ctaHref: '/contact',
};

export default function OperationalExcellencePage() {
  return (
    <main>
      <PillarHero {...heroData} />
      <ProblemSection {...problemData} />
      <div id="solution">
        <SolutionSection {...solutionData} />
      </div>
      <ProofSection {...proofData} />
      <WhoItsFor {...whoItsForData} />
      <FinalCTASection {...finalCTAData} />
    </main>
  );
}
