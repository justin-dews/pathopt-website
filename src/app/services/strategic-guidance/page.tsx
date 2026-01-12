import { Metadata } from 'next';
import { PillarHero } from '@/components/sections/PillarHero';
import { ProblemSection } from '@/components/sections/ProblemSection';
import { SolutionSection } from '@/components/sections/SolutionSection';
import { ProofSection } from '@/components/sections/ProofSection';
import { WhoItsFor } from '@/components/sections/WhoItsFor';
import { FinalCTASection } from '@/components/sections/FinalCTASection';

export const metadata: Metadata = {
  title: 'Strategic Guidance for Small Business Growth | PathOpt',
  description:
    'CMO and COO-level expertise without the six-figure salary. Three experienced business owners helping you avoid costly mistakes and accelerate growth by 6-12 months.',
  openGraph: {
    title: 'Strategic Guidance for Small Business Growth | PathOpt',
    description:
      'CMO and COO-level expertise without the six-figure salary. Avoid costly mistakes and accelerate growth by 6-12 months.',
    type: 'website',
    images: [{ url: '/og-images/og-main-v3.png', width: 1456, height: 816, alt: 'PathOpt Strategic Guidance' }],
  },
  twitter: {
    card: 'summary_large_image',
    images: ['/og-images/og-main-v3.png'],
  },
};

// Hero Data
const heroData = {
  label: 'Strategic Guidance',
  headline: 'The Strategic Thinking You Need—From People Who\'ve Actually Built Businesses',
  subtitle:
    'CMO and COO-level expertise without the six-figure salary. Three experienced business owners helping you avoid costly mistakes, find growth opportunities, and accelerate your progress by 6-12 months.',
  primaryCTA: {
    text: 'Schedule a Strategy Session',
    href: '/contact',
  },
  secondaryCTA: {
    text: 'See How It Works',
    href: '#solution',
  },
};

// Problem Data
const problemData = {
  headline: 'You Know You Need Strategic Help. But the Options Are Terrible.',
  introParagraphs: [
    'Here\'s the situation you\'re probably in:',
    'Your business is growing, but you\'re not sure you\'re making the right moves. You\'re worried about missing opportunities—or worse, making expensive mistakes that set you back months.',
    'You need someone with experience. Someone who\'s seen what works and what doesn\'t. Someone who can help you think through the big decisions before you commit.',
    'But your options?',
  ],
  problemItems: [
    {
      title: 'Option 1: Hire a CMO or COO.',
      description:
        'Great idea—if you have $150,000-250,000 for salary, benefits, and the time to find the right person. Most small businesses can\'t justify that.',
    },
    {
      title: 'Option 2: Hire a consultant.',
      description:
        'They\'ll give you a 50-page strategy document, charge you $20,000, and disappear. You\'re left holding the binder, wondering how to actually implement any of it.',
    },
    {
      title: 'Option 3: Figure it out yourself.',
      description:
        'Keep grinding, making decisions in isolation, hoping you don\'t burn six months and $50,000 on the wrong direction.',
    },
  ],
  closingParagraph:
    'None of these options work for growing businesses that need real strategic help right now. That\'s why we built something different.',
};

// Solution Data
const solutionData = {
  headline: 'Strategic Guidance from Business Owners Who\'ve Been Where You Are',
  introParagraph:
    'PathOpt gives you access to three experienced business owners—not consultants reading from playbooks, not advisors who\'ve never signed the front of a check. We\'ve built and scaled businesses ourselves. We\'ve made the expensive mistakes so you don\'t have to. And we\'re not just here to advise—we\'re here to help you execute.',
  items: [
    {
      title: 'Growth Strategy & Planning',
      description:
        'Clear roadmaps for where you\'re going and how to get there. Not theory—specific, actionable plans based on your actual business.',
    },
    {
      title: 'Business Model Optimization',
      description:
        'Identify what\'s working, what\'s not, and where the leverage is. Small tweaks in the right places can unlock major growth.',
    },
    {
      title: 'Market Positioning',
      description:
        'Stand out in your market without relying on being the cheapest. Find the positioning that attracts the customers you actually want.',
    },
    {
      title: 'Goal-Setting & Accountability',
      description:
        'Quarterly objectives that actually get done. We help you prioritize what matters and stay focused when everything feels urgent.',
    },
    {
      title: 'Decision Support',
      description:
        'A thinking partner for the big decisions. Someone to pressure-test your ideas, challenge your assumptions, and catch blind spots before they become expensive problems.',
    },
  ],
};

// Proof Data
const proofData = {
  headline: 'What Strategic Guidance Actually Looks Like',
  caseStudy: {
    title: 'HomeWorks Construction',
    description:
      'HomeWorks Construction was growing but struggling with direction. Within 30 days of working together, they had a clear growth strategy, optimized their service mix, and reduced their cost per lead from $47 to $27—while tripling qualified leads.',
    href: '/case-studies/homeworks-construction',
  },
};

// Who It's For Data
const whoItsForData = {
  headline: 'This Is For You If...',
  fitCriteria: [
    'You\'re a business owner making $500K-$5M in revenue',
    'You know you need strategic help but can\'t justify a six-figure executive hire',
    'You\'re tired of consultants who advise but don\'t stick around to implement',
    'You want someone who\'s been in your shoes, not just studied business in a classroom',
    'You\'re ready to invest in getting to the next level faster',
  ],
  notFitCriteria: [
    'You\'re looking for someone to just run ads or post on social media',
    'You want a quick fix without putting in the strategic work',
    'You\'re not willing to be honest about what\'s really going on in your business',
  ],
};

// Final CTA Data
const finalCTAData = {
  label: 'Take the Next Step',
  headline: 'Skip the Expensive Mistakes. Accelerate Your Growth.',
  subheadline: 'Let\'s talk about where you\'re trying to go and how to get there faster.',
  ctaText: 'Schedule Your Strategy Session',
  ctaHref: '/contact',
};

export default function StrategicGuidancePage() {
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
