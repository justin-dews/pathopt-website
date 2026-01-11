import { Metadata } from 'next';
import { IndustryHero } from '@/components/sections/IndustryHero';
import { IndustryProblemSection } from '@/components/sections/IndustryProblemSection';
import { AgitateSection } from '@/components/sections/AgitateSection';
import { IndustrySolutionSection } from '@/components/sections/IndustrySolutionSection';
import { IndustryProofSection } from '@/components/sections/IndustryProofSection';
import { FitSection } from '@/components/sections/FitSection';
import { FAQAccordion } from '@/components/sections/FAQAccordion';
import { FinalCTASection } from '@/components/sections/FinalCTASection';

export const metadata: Metadata = {
  title: 'Marketing for Contractors & Home Services | PathOpt',
  description:
    'Finally—marketing that works for contractors and home services businesses. Complete transparency, aligned incentives, and results you can actually see.',
  openGraph: {
    title: 'Marketing for Contractors & Home Services | PathOpt',
    description:
      'Marketing that works for contractors. Complete transparency, aligned incentives, and results you can actually see.',
    type: 'website',
  },
};

const heroData = {
  headline: "You've Switched Agencies a Dozen Times. They're All the Same.",
  subheadline:
    "Finally—three business owners who've been in your shoes, bringing you marketing that actually works, systems that scale, and complete transparency into where every dollar goes.",
  paragraphs: [
    "Here's what you already know: Marketing agencies promise the world and deliver excuses. You've tried three, four, maybe five of them. Each one had a slick pitch. Each one charged premium prices. And each one left you wondering: \"Is any of this actually working?\"",
    "We get it. We've been the business owner writing those checks.",
    "That's why we built PathOpt differently. Three experienced business owners. Complete transparency. Aligned incentives. And results you can actually see—like cutting HomeWorks Construction's cost per lead from $47 to $27 in 30 days.",
  ],
  primaryCTA: {
    text: 'Get Your Free Marketing Performance Audit',
    href: '/contact',
  },
  secondaryCTA: {
    text: 'See the HomeWorks Case Study',
    href: '/case-studies/homeworks-construction',
  },
};

const problemData = {
  label: 'The Problem',
  headline: 'The Agency Carousel Never Stops',
  introduction:
    "Let's be honest about what's happening:\n\n**Agency #1** promised you leads. You got impressions.\n\n**Agency #2** talked about \"brand awareness.\" Your phone didn't ring.\n\n**Agency #3** showed you dashboards full of metrics you didn't understand. You nodded along, wrote the check, and wondered if you were getting ripped off.\n\nNow you're on **Agency #4 or #5**, and the pitch sounds exactly the same.\n\nHere's what none of them told you:",
  problems: [
    {
      title: 'The Black Box Problem',
      description:
        "You have no idea what they're actually doing. Reports arrive monthly—if you're lucky. The numbers might be good or bad. You genuinely can't tell. When you ask questions, you get jargon.",
    },
    {
      title: 'The Lead Quality Problem',
      description:
        "They count clicks, not conversations. Your phone rings, but half the calls are tire-kickers, wrong numbers, or people who found you by accident. You're paying for volume, not value.",
    },
    {
      title: 'The Incentive Problem',
      description:
        "They get paid whether you grow or not. Your success is their talking point, not their paycheck. There's no alignment between what they earn and what you earn.",
    },
  ],
};

const agitateData = {
  headline: 'The Real Cost of "Marketing That Might Be Working"',
  introduction: 'Do the math on your current situation:',
  costs: [
    {
      label: 'Hours spent wondering if your marketing is actually working',
      value: '3-5 hours/month',
    },
    {
      label: 'Money spent on leads that never convert',
      value: '$500-2,000/month',
    },
    {
      label: 'Opportunity cost of chasing bad leads instead of serving good customers',
      value: 'Incalculable',
    },
    {
      label: "Stress of writing $3,000-5,000 checks without knowing if it's worth it",
      value: 'Every single month',
    },
  ],
  closingParagraph:
    "And the worst part? You're too busy running your business to figure out if there's a better way.",
};

const solutionData = {
  label: 'The PathOpt Difference',
  headline: 'Three Business Owners. Complete Transparency. Results You Can See.',
  introduction:
    "We're not another agency. We're three business owners who got tired of the same problem you're facing—and built the partner we wished existed.",
  pillars: [
    {
      title: 'See Exactly Where Your Money Goes',
      description: 'No more black boxes. No more monthly reports you can\'t decipher.',
      bullets: [
        { text: "Real-time dashboards showing exactly what we're doing and what it's producing" },
        { text: 'Daily updates in plain English, not marketing jargon' },
        { text: "Cost per lead tracked to the penny—so you know exactly what you're paying for every conversation" },
        { text: 'Complete access to your accounts, your data, your everything' },
      ],
    },
    {
      title: 'Marketing That Generates Actual Business',
      description:
        "We don't optimize for impressions or clicks. We optimize for your phone ringing with people who actually want to hire you.",
      bullets: [
        { text: 'Lead quality scoring so you know which calls are worth your time' },
        { text: 'Follow-up systems that turn leads into booked jobs (not just into your voicemail)' },
        { text: "Seasonal adjustments because your business isn't the same in February and July" },
        { text: "Continuous optimization based on what's actually converting—not vanity metrics" },
      ],
    },
    {
      title: "Partners Who've Built Businesses, Not Just Marketed Them",
      description:
        "Between us, we've built and operated multiple businesses. We know what it's like to:",
      bullets: [
        { text: "Write a $5,000 check and wonder if it's working" },
        { text: 'Chase leads that go nowhere' },
        { text: "Work 60-hour weeks because the systems don't exist" },
      ],
    },
  ],
};

const proofData = {
  label: 'Results',
  headline: 'HomeWorks Construction: From $47 to $27 Cost Per Lead in 30 Days',
  situation:
    "HomeWorks Construction and Remodeling was spending $4,500/month on digital marketing. They were getting leads—but had no idea if they were getting their money's worth. Sound familiar?",
  problemTitle: 'The Problem:',
  problemBullets: [
    'Cost per lead: $47 (industry average, nothing special)',
    'Lead quality: Mixed—lots of tire-kickers, not enough serious buyers',
    'Reporting: Monthly PDF nobody understood',
    'Optimization: Set-it-and-forget-it',
  ],
  solutionTitle: 'What We Did:',
  solutionBullets: [
    'Complete account transparency (they could see everything, anytime)',
    'Lead quality tracking (not just quantity—quality)',
    'Daily optimization (not monthly check-ins)',
    'Cost per lead focus (the metric that actually matters)',
  ],
  resultsTitle: 'The Results (30 Days):',
  results: [
    { label: 'Cost per lead', value: '$47 → $27' },
    { label: 'Qualified leads', value: 'Tripled' },
    { label: 'Marketing spend', value: 'Reduced' },
    { label: 'ROI', value: 'Finally measurable' },
  ],
  quote:
    'For the first time, I actually know what my marketing is doing. I can see it. Every day. That alone is worth the investment.',
  quoteAuthor: 'Chad',
  quoteCompany: 'HomeWorks Construction',
  ctaText: 'Read the Full Case Study',
  ctaHref: '/case-studies/homeworks-construction',
};

const fitData = {
  headline: 'Is This Right for Your Business?',
  goodFitItems: [
    "You're spending $2,000+/month on marketing and not sure if it's working",
    "You've switched agencies before and you're tired of the same cycle",
    'You want to actually understand what your marketing is doing',
    'You\'re ready for a partner, not another vendor to manage',
    'You value transparency and straight talk over fancy presentations',
  ],
  notFitItems: [
    "You want the cheapest option (we're not the cheapest—we're the most transparent)",
    "You're not willing to look at the data with us",
    "You want to set it and forget it (we're partners, not robots)",
    "You're expecting magic overnight (real results take 30-90 days)",
  ],
};

const faqData = [
  {
    question: "How are you different from the agencies I've already tried?",
    answer:
      "Three things: We're business owners (not agency people), you see everything (complete transparency), and we only win when you win (aligned incentives). Also, we don't do long-term contracts that lock you in while we underperform.",
  },
  {
    question: 'What does this cost?',
    answer:
      "It depends on what you need. But here's what we can tell you upfront: you'll know exactly what you're paying for, exactly what it's producing, and exactly what your return is. No surprises.",
  },
  {
    question: 'Do you work with businesses my size?',
    answer:
      'We work with trades and home services businesses doing $500K-$5M in revenue. Big enough to invest in growth, small enough that the owner still cares about where every dollar goes.',
  },
  {
    question: "What if I've been burned by agencies before?",
    answer:
      "That's exactly why we built PathOpt this way. Complete transparency, no long-term contracts, and we'll show you everything we're doing from day one. If at any point you feel like you're not getting value, we'll tell you before you tell us.",
  },
];

const finalCTAData = {
  headline: 'Ready to See Where Your Marketing Dollars Actually Go?',
  subheadline:
    "Get a free marketing performance audit. We'll show you exactly what's working, what's not, and what it would take to fix it. No pitch. No pressure. Just answers.",
  primaryCTA: {
    text: 'Get Your Free Performance Audit',
    href: '/contact',
  },
  friction: "30-minute call. No commitment. You'll walk away with clarity either way.",
};

export default function TradesHomeServicesPage() {
  return (
    <main>
      {/* Hero */}
      <IndustryHero {...heroData} />

      {/* Problem Section */}
      <IndustryProblemSection {...problemData} />

      {/* Agitate Section */}
      <AgitateSection {...agitateData} />

      {/* Solution Section */}
      <IndustrySolutionSection {...solutionData} />

      {/* Proof Section (Case Study) */}
      <IndustryProofSection {...proofData} />

      {/* Fit Section */}
      <FitSection {...fitData} />

      {/* FAQ Section */}
      <section className="py-16 lg:py-24 bg-[var(--color-bg-alt)]">
        <div className="container-content">
          <h2 className="text-3xl font-bold mb-8 text-center">
            Frequently Asked Questions
          </h2>
          <FAQAccordion items={faqData} inline />
        </div>
      </section>

      {/* Final CTA */}
      <FinalCTASection {...finalCTAData} />
    </main>
  );
}
