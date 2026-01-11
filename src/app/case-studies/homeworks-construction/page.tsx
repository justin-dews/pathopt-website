import { Metadata } from 'next';
import Link from 'next/link';
import { ArrowLeft } from 'lucide-react';
import { CaseStudyHero } from '@/components/sections/CaseStudyHero';
import { ChallengeSection } from '@/components/sections/ChallengeSection';
import { CaseSolutionSection } from '@/components/sections/CaseSolutionSection';
import { ResultsSection } from '@/components/sections/ResultsSection';
import { TestimonialSection } from '@/components/sections/TestimonialSection';
import { DifferenceSection } from '@/components/sections/DifferenceSection';
import { FinalCTASection } from '@/components/sections/FinalCTASection';

export const metadata: Metadata = {
  title: 'HomeWorks Construction Case Study | PathOpt',
  description:
    'How HomeWorks Construction reduced their cost per lead from $47 to $27 in 30 days while tripling qualified leads with complete marketing transparency.',
  openGraph: {
    title: '$47 to $27 Cost Per Lead in 30 Days | HomeWorks Construction',
    description:
      'How HomeWorks Construction tripled their qualified leads while reducing spend—with complete visibility into every marketing dollar.',
    type: 'article',
  },
};

const heroData = {
  industry: 'Construction & Remodeling',
  headline: '$47 to $27 Cost Per Lead in 30 Days',
  subheadline:
    'How HomeWorks Construction tripled their qualified leads while reducing spend—with complete visibility into every marketing dollar.',
  metrics: [
    { label: 'Cost Per Lead', before: '$47', after: '$27', change: '-43%' },
    { label: 'Qualified Leads', before: '1X', after: '3X', change: '+200%' },
    { label: 'Monthly Spend', before: 'High', after: 'Reduced', change: 'Lower' },
    { label: 'Visibility', before: 'Monthly', after: 'Real-time', change: 'Complete' },
  ],
};

const challengeData = {
  headline: 'The Problem: Great Work, Broken Marketing',
  introduction:
    'HomeWorks Construction and Remodeling is known for quality work and satisfied customers. But like many contractors, they struggled with marketing.',
  challenges: [
    {
      title: 'Paying too much for leads.',
      description:
        'At $47 per lead, their customer acquisition costs were eating into margins.',
    },
    {
      title: 'Flying blind on performance.',
      description:
        "Their previous agency sent monthly reports full of metrics that didn't mean anything. HomeWorks had no idea which campaigns were actually working.",
    },
    {
      title: 'Frustrated with agency runaround.',
      description:
        "Questions got vague answers. Requests for transparency got more jargon. They felt like they were being kept in the dark.",
    },
    {
      title: 'Getting leads, but not great leads.',
      description:
        "Volume wasn't the problem—quality was. Too many tire-kickers, not enough qualified buyers ready to move forward.",
    },
  ],
  closingParagraph:
    "They'd been through the agency carousel. Hired one, got disappointed, fired them, hired another. Same story, different name. They were ready for something different.",
};

const solutionData = {
  headline: 'The PathOpt Approach: Transparency + Optimization',
  introduction:
    'When HomeWorks came to PathOpt, we started with a complete audit of their marketing.',
  findingsTitle: 'What we found:',
  findings: [
    { text: '40%+ of ad spend was going to low-performing campaigns' },
    { text: 'Targeting was too broad, attracting unqualified leads' },
    { text: 'No lead scoring or follow-up automation' },
    { text: 'Conversion tracking was misconfigured, hiding true performance' },
  ],
  actionsTitle: 'What we did:',
  timeline: [
    {
      week: 'Week 1',
      title: 'Stopped the bleeding.',
      description:
        'Paused underperforming campaigns. Reallocated budget to what was actually working.',
    },
    {
      week: 'Week 2',
      title: 'Tightened targeting.',
      description:
        'Refined audience targeting to focus on qualified buyers in their service area. Cut out the tire-kickers.',
    },
    {
      week: 'Week 3',
      title: 'Fixed tracking.',
      description:
        'Implemented proper conversion tracking so we could see true performance—not vanity metrics.',
    },
    {
      week: 'Week 4',
      title: 'Optimized and scaled.',
      description:
        'With real data, we optimized daily. Small improvements compounded quickly.',
    },
  ],
  ongoingNote:
    'Throughout: Complete transparency. HomeWorks had access to a real-time dashboard from day one. They could see exactly where every dollar was going and what it was producing.',
};

const resultsData = {
  headline: 'The Results: 30 Days to Transformation',
  results: [
    {
      metric: '$47 → $27',
      description:
        'A 43% reduction in cost per lead—which translates directly to more margin and more room to grow.',
    },
    {
      metric: '3X Qualified Leads',
      description:
        'Not just more leads—better leads. People who were actually ready to move forward on projects.',
    },
    {
      metric: 'Reduced Spend',
      description:
        "They're spending less AND getting more. That's what happens when you stop wasting money on what doesn't work.",
    },
    {
      metric: 'Real-time Visibility',
      description:
        "No more wondering. HomeWorks can log in anytime and see exactly what's happening with their marketing.",
    },
  ],
};

const testimonialData = {
  quote:
    "For the first time, I actually know what my marketing is doing. I can see it. Every day. That alone is worth the investment.",
  author: 'Chad',
  title: 'Owner',
  company: 'HomeWorks Construction and Remodeling',
};

const differenceData = {
  headline: "Why PathOpt Delivered Where Others Didn't",
  introduction:
    "HomeWorks had worked with agencies before. What made this different?",
  items: [
    {
      title: 'Daily optimization, not monthly check-ins.',
      description:
        "We don't set campaigns and forget them. Every day, we're reviewing performance and making adjustments.",
    },
    {
      title: 'Complete transparency from day one.',
      description:
        "No black boxes. HomeWorks could see exactly what we were doing and why. That builds trust—and accountability.",
    },
    {
      title: 'Partners, not vendors.',
      description:
        "We weren't trying to keep them confused so they'd keep paying us. We wanted them to understand their marketing—and see the results for themselves.",
    },
    {
      title: 'Experience that matters.',
      description:
        "We're business owners ourselves. We've been in their shoes, frustrated with agencies that promise and don't deliver. That's why we built PathOpt differently.",
    },
  ],
};

const finalCTAData = {
  headline: 'Ready for Marketing Results You Can Actually See?',
  subheadline:
    "Get a free audit of your current marketing. We'll show you exactly what's working, what's not, and where you're leaving money on the table.",
  primaryCTA: {
    text: 'Get Your Free Marketing Audit',
    href: '/contact',
  },
  friction: 'Free 30-minute call. No obligation.',
};

export default function HomeWorksConstructionPage() {
  return (
    <main>
        {/* Back Link */}
        <div className="pt-24 lg:pt-28 bg-[var(--color-bg)]">
          <div className="container-site">
            <Link
              href="/case-studies"
              className="inline-flex items-center gap-2 text-[var(--color-text-muted)] hover:text-[var(--color-accent)] transition-colors"
            >
              <ArrowLeft className="w-4 h-4" />
              Back to All Case Studies
            </Link>
          </div>
        </div>

        {/* Hero */}
        <CaseStudyHero {...heroData} />

        {/* Challenge Section */}
        <ChallengeSection {...challengeData} />

        {/* Solution Section */}
        <CaseSolutionSection {...solutionData} />

        {/* Results Section */}
        <ResultsSection {...resultsData} />

        {/* Testimonial */}
        <TestimonialSection {...testimonialData} />

        {/* Difference Section */}
        <DifferenceSection {...differenceData} />

        {/* Final CTA */}
        <FinalCTASection {...finalCTAData} />
    </main>
  );
}
