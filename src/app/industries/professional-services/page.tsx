import { Metadata } from 'next';
import { IndustryHero } from '@/components/sections/IndustryHero';
import { IndustryProblemSection } from '@/components/sections/IndustryProblemSection';
import { IndustrySolutionSection } from '@/components/sections/IndustrySolutionSection';
import { WhoItsFor } from '@/components/sections/WhoItsFor';
import { FinalCTASection } from '@/components/sections/FinalCTASection';

export const metadata: Metadata = {
  title: 'Marketing for Professional Services Firms | PathOpt',
  description:
    'Break the feast-or-famine cycle. Build predictable growth for your consulting, accounting, or professional services firm doing $500K-$3M.',
  openGraph: {
    title: 'Marketing for Professional Services Firms | PathOpt',
    description:
      'Break the feast-or-famine cycle. Build predictable growth for your consulting, accounting, or professional services firm.',
    type: 'website',
  },
};

const heroData = {
  headline: "Feast or Famine Isn't a Business Model. It's a Symptom.",
  subheadline:
    'Three business owners helping professional services firms build predictable growth—so you stop lurching between "too busy" and "where\'s the next client?"',
  paragraphs: [
    "You know the pattern. Great month, panic month. Pipeline full, pipeline empty. Referrals come in waves—and you can't control the waves.",
    "Meanwhile, you're so busy delivering for current clients that you have no time to find the next ones. Marketing feels like a luxury you can't afford to focus on.",
    "We've been there. That's why we built PathOpt.",
  ],
  primaryCTA: {
    text: 'Schedule a Strategy Session',
    href: '/contact',
  },
};

const problemData = {
  label: 'The Problem',
  headline: "The Founder's Trap",
  introduction:
    "You're good at what you do. Really good. That's the problem.\n\n**Your expertise got you here.** Clients hired you because you're the expert. Word spread. Referrals came in.\n\n**But your expertise can't scale.** You're still the one doing the work, finding the clients, and managing the business. There's no system. Just you.\n\n**The result:** Income tied to your hours. Growth limited by your capacity. And a business that would collapse if you took a month off.\n\nSound familiar?",
  problems: [
    {
      title: 'The Referral Dependency',
      description:
        "80% of your clients come from referrals. Which is great—until the referrals slow down. You have no control over your pipeline, just hope that the phone keeps ringing.",
    },
    {
      title: 'The Capacity Ceiling',
      description:
        "When you're busy with clients, you're not marketing. When you're marketing, you're not serving clients. There's never enough time for both—so growth happens by accident.",
    },
    {
      title: 'The Pricing Pressure',
      description:
        "Without consistent lead flow, you take what you can get. You discount. You say yes to projects you shouldn't. Your rates stay flat because you can't afford to lose the client.",
    },
  ],
};

const solutionData = {
  label: 'The PathOpt Approach',
  headline:
    "Build the Pipeline. Build the Systems. Build the Business That Doesn't Need You in Every Decision.",
  introduction:
    "We're three business owners who've built and scaled professional services firms. We know the feast-or-famine cycle intimately—and we know how to break it.",
  pillars: [
    {
      title: 'Predictable Lead Generation',
      description: "Stop depending on referrals you can't control. Build a pipeline that produces consistently:",
      bullets: [
        { text: 'Targeted marketing that attracts your ideal clients' },
        { text: 'Lead quality focus (not volume—fit)' },
        { text: 'Measurable cost per qualified lead' },
        { text: "Complete transparency into what's working" },
      ],
    },
    {
      title: 'Systems That Scale',
      description: 'Get out of the day-to-day so you can focus on growth:',
      bullets: [
        { text: "Client acquisition processes that don't require you" },
        { text: 'Follow-up systems that convert leads while you work' },
        { text: 'Operational efficiency that increases capacity' },
        { text: 'The infrastructure to hire without chaos' },
      ],
    },
    {
      title: 'Strategic Partnership',
      description: "Not another vendor. A partner who's been where you are:",
      bullets: [
        { text: "Strategy you'd expect from a CMO—without the salary" },
        { text: "Execution you'd expect from an agency—without the black box" },
        { text: "Perspective from three business owners who've built what you're building" },
      ],
    },
  ],
};

const whoItsForData = {
  headline: 'Who This Is For',
  subheadline:
    'We work with professional services firms ready to build sustainable, predictable growth.',
  items: [
    'Professional services firms doing $500K-$3M in revenue',
    'Consultants, agencies, law firms, accounting practices, advisors',
    'Owners who are still the primary rainmaker (and tired of it)',
    'Businesses ready to invest in growth, not just survive',
  ],
  cta: {
    text: 'Schedule a Strategy Session',
    href: '/contact',
  },
};

const finalCTAData = {
  headline: 'Ready to Break the Feast-or-Famine Cycle?',
  subheadline:
    "Let's talk about what predictable growth actually looks like for your firm.",
  primaryCTA: {
    text: 'Schedule Your Strategy Session',
    href: '/contact',
  },
};

export default function ProfessionalServicesPage() {
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
