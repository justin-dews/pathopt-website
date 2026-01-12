import type { Metadata } from 'next';
import { HeroWithImage } from '@/components/sections/HeroWithImage';
import { StorySection } from '@/components/sections/StorySection';
import { TeamGrid } from '@/components/sections/TeamGrid';
import { MissionVisionValues } from '@/components/sections/MissionVisionValues';
import { FinalCTA } from '@/components/sections/FinalCTA';

export const metadata: Metadata = {
  title: 'About PathOpt | Three Business Owners in Your Corner',
  description:
    'PathOpt was founded by business owners frustrated with agencies that promise and consultants who don\'t execute. We built the partner we wished existed.',
  openGraph: {
    title: 'About PathOpt | Three Business Owners in Your Corner',
    description:
      'PathOpt was founded by business owners frustrated with agencies that promise and consultants who don\'t execute. We built the partner we wished existed.',
    type: 'website',
    images: [{ url: '/og-images/og-main-v3.png', width: 1456, height: 816, alt: 'About PathOpt' }],
  },
  twitter: {
    card: 'summary_large_image',
    images: ['/og-images/og-main-v3.png'],
  },
};

// Page Data
const heroData = {
  label: 'About Us',
  headline: "Three Business Owners Who've Been in Your Shoes",
  highlightWord: 'Your Shoes',
  subtitle:
    "We built PathOpt because we were tired of the same problem you're facing: agencies that promise and consultants who don't execute. So we created the partner we wished existed.",
  stats: [
    { value: '40+', label: 'Combined Years', color: 'accent' as const },
    { value: '3', label: 'Business Owners', color: 'accent' as const },
    { value: '100%', label: 'Transparency', color: 'green' as const },
  ],
  imagePlaceholder: 'Team Photo',
};

const storyData = {
  label: 'Our Story',
  headline: 'We Were the Frustrated Business Owners',
  introParagraph:
    "Here's the truth: PathOpt wasn't born from a business plan. It was born from frustration.",
  bodyParagraphs: [
    "Between the three of us—Justin, Jeremy, and Reese—we've built and operated multiple businesses. We've written the checks to marketing agencies and wondered if we were getting ripped off. We've hired consultants who charged premium rates but didn't stick around to actually implement anything. We've watched thousands of dollars disappear into \"marketing campaigns\" with nothing to show for it.",
    "Every business owner we know has the same story. They've switched agencies a dozen times. They still have no idea if their marketing is actually working. They're too busy running their business to become experts in Google Ads, operations systems, or growth strategy—but they can't afford six-figure executive salaries either.",
    'We knew there had to be a better way.',
    'So we built PathOpt. Three experienced business owners with complementary skills: strategy, operations, and execution. We bring the kind of expertise Fortune 500 companies have—growth strategy, marketing optimization, operational systems—but at prices that make sense for small businesses.',
  ],
  differentiators: [
    {
      title: 'Complete transparency.',
      description:
        "You'll see exactly what's happening with your marketing and operations. Real-time dashboards, daily updates, plain English explanations.",
    },
    {
      title: 'We execute, not just advise.',
      description:
        "We're not handing you a binder and walking away. We build the systems, implement the changes, and optimize the campaigns ourselves.",
    },
    {
      title: 'Aligned incentives.',
      description: 'We only win when you win. Period.',
    },
  ],
  closingParagraph:
    "We're not a faceless agency. We're three business owners who genuinely want to see you succeed—because we know what it's like when you don't.",
};

const teamData = {
  label: 'Meet',
  headline: 'Our Team',
  members: [
    {
      name: 'Justin Dews',
      title: 'Founder & CEO',
      bio: "Justin has spent 15+ years helping small businesses run smarter. From building and scaling an IT services company to advising owners on growth strategy, he's been on both sides of the table—as the business owner and as the expert brought in to help.",
      philosophy:
        'I started PathOpt because I was tired of watching small business owners get burned by agencies that charge high fees and deliver low transparency.',
      imageUrl: '/images/team/justin.avif',
    },
    {
      name: 'Jeremy Stakely',
      title: 'Founding Partner',
      bio: "Jeremy brings financial strategy and analytical rigor to PathOpt. After building financial systems for multiple 7-figure businesses, he's the partner who ensures every investment delivers measurable returns.",
      philosophy:
        "If you can't see the ROI in plain numbers, something's wrong.",
      imageUrl: '/images/team/jeremy.avif',
    },
    {
      name: 'Reese Ormand',
      title: 'Co-Founder & Strategic Advisor',
      bio: 'Reese has built and advised multiple businesses across different industries. His strategic thinking helps clients see the bigger picture—identifying opportunities, avoiding costly mistakes, and accelerating growth by 6-12 months.',
      philosophy:
        "Business advice is worthless unless someone actually executes it.",
      imageUrl: '/images/team/reese.avif',
    },
  ],
};

const missionVisionValuesData = {
  mission: {
    label: 'Our Mission',
    statement:
      'Give every owner back their two scarcest resources: time and margin.',
  },
  vision: {
    label: 'Our Vision',
    statement:
      'A world where business owners never have to wonder if their agency is ripping them off.',
  },
  values: {
    label: 'What We Stand For',
    headline: 'Our Values',
    items: [
      {
        title: 'Transparency',
        description:
          "No black boxes. You see exactly where your money goes and what results you're getting. If we can't show you, we haven't done our job.",
      },
      {
        title: 'Execution',
        description:
          "We implement, not just advise. Strategies are worthless unless someone actually does the work. We do the work.",
      },
      {
        title: 'Partnership',
        description:
          "Your success is our success. We're business owners ourselves—we know what's at stake. We treat your business like it's our own.",
      },
      {
        title: 'Honesty',
        description:
          "We tell it like it is. If something isn't working, we'll say so. If you're being ripped off by your current agency, we'll call it out.",
      },
    ],
  },
};

export default function AboutPage() {
  return (
    <main>
      <HeroWithImage {...heroData} />
      <StorySection {...storyData} />
      <TeamGrid {...teamData} />
      <MissionVisionValues {...missionVisionValuesData} />
      <FinalCTA />
    </main>
  );
}
