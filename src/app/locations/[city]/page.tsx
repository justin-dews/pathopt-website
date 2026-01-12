import { Metadata } from 'next';
import { notFound } from 'next/navigation';
import { LocationHero } from '@/components/sections/LocationHero';
import { LocationWhySection } from '@/components/sections/LocationWhySection';
import { FitSection } from '@/components/sections/FitSection';
import { FAQAccordion } from '@/components/sections/FAQAccordion';
import { FinalCTASection } from '@/components/sections/FinalCTASection';
import {
  JsonLd,
  createLocalBusinessSchema,
  createBreadcrumbSchema,
  createFAQSchema,
} from '@/components/seo/JsonLd';
import { cities, getCityBySlug, getAllCitySlugs } from '@/data/cities';

// Generate static paths for all cities
export async function generateStaticParams() {
  return getAllCitySlugs().map((slug) => ({
    city: slug,
  }));
}

// Generate metadata for each city page
export async function generateMetadata({
  params,
}: {
  params: Promise<{ city: string }>;
}): Promise<Metadata> {
  const { city: citySlug } = await params;
  const cityData = getCityBySlug(citySlug);

  if (!cityData) {
    return {
      title: 'Location Not Found | PathOpt',
    };
  }

  const title = `Fractional CMO ${cityData.city} | Marketing for ${cityData.region} Businesses | PathOpt`;
  const description = `Looking for a fractional CMO in ${cityData.city}? PathOpt provides strategic marketing leadership for ${cityData.industries.slice(0, 3).join(', ')} and home services businesses in ${cityData.state}. Transparent pricing, real results.`;

  return {
    title,
    description,
    keywords: [
      `fractional CMO ${cityData.city}`,
      `marketing consultant ${cityData.city}`,
      `${cityData.city} marketing agency`,
      `home services marketing ${cityData.city}`,
      `HVAC marketing ${cityData.city}`,
      `contractor marketing ${cityData.city}`,
      `small business marketing ${cityData.stateAbbr}`,
    ].join(', '),
    openGraph: {
      title,
      description,
      type: 'website',
      locale: 'en_US',
      siteName: 'PathOpt',
      images: [{
        url: '/og-images/og-location-v3.png',
        width: 1456,
        height: 816,
        alt: `Fractional CMO ${cityData.city} - PathOpt`,
      }],
    },
    twitter: {
      card: 'summary_large_image',
      title,
      description,
      images: ['/og-images/og-location-v3.png'],
    },
    alternates: {
      canonical: `https://pathopt.com/locations/${cityData.slug}`,
    },
  };
}

// FAQ data generator for each city
function generateCityFAQs(cityName: string, state: string, industries: string[]) {
  return [
    {
      question: `What does a fractional CMO do for ${cityName} businesses?`,
      answer: `A fractional CMO provides part-time executive-level marketing leadership. For ${cityName} businesses, this means getting strategic marketing guidance, campaign management, and measurable results without the $200K+ salary of a full-time CMO. We handle everything from lead generation strategy to daily campaign optimization.`,
    },
    {
      question: `How much does fractional CMO services cost in ${cityName}?`,
      answer: `Our fractional CMO services are priced based on your needs, not a one-size-fits-all package. Most ${cityName} home services businesses invest $2,000-$5,000/month. The difference? You'll know exactly what you're paying for, see exactly what it's producing, and understand your exact ROI. No hidden fees, no surprises.`,
    },
    {
      question: `Do you work with ${industries[0]} businesses in ${cityName}?`,
      answer: `Yes! We specialize in ${industries.slice(0, 3).join(', ')} and other home services businesses throughout the ${cityName} area. We understand the seasonal patterns, local competition, and specific marketing challenges that ${state} contractors face.`,
    },
    {
      question: `How quickly will I see results from marketing in ${cityName}?`,
      answer: `Most clients see measurable improvements within 30 days. We recently helped a construction company cut their cost per lead from $47 to $27 in the first month. We focus on quick wins while building long-term growth—and you'll see the data every step of the way.`,
    },
    {
      question: `What makes PathOpt different from ${cityName} marketing agencies?`,
      answer: `Three things: We're business owners (not agency people who've never signed the front of a check), you see everything (complete transparency with real-time dashboards), and we only win when you win (no long-term contracts that lock you in while we underperform).`,
    },
  ];
}

// Fit section data
const fitData = {
  headline: 'Is This Right for Your Business?',
  goodFitItems: [
    "You're spending $2,000+/month on marketing and not sure if it's working",
    "You've switched agencies before and you're tired of the same cycle",
    'You want to actually understand what your marketing is doing',
    "You're ready for a partner, not another vendor to manage",
    'You value transparency and straight talk over fancy presentations',
  ],
  notFitItems: [
    "You want the cheapest option (we're not the cheapest—we're the most transparent)",
    "You're not willing to look at the data with us",
    "You want to set it and forget it (we're partners, not robots)",
    "You're expecting magic overnight (real results take 30-90 days)",
  ],
};

export default async function LocationPage({
  params,
}: {
  params: Promise<{ city: string }>;
}) {
  const { city: citySlug } = await params;
  const cityData = getCityBySlug(citySlug);

  if (!cityData) {
    notFound();
  }

  const faqData = generateCityFAQs(
    cityData.city,
    cityData.state,
    cityData.industries
  );

  const breadcrumbItems = [
    { name: 'Home', url: 'https://pathopt.com/' },
    { name: 'Locations', url: 'https://pathopt.com/locations' },
    {
      name: cityData.city,
      url: `https://pathopt.com/locations/${cityData.slug}`,
    },
  ];

  const finalCTAData = {
    label: `Ready to Grow in ${cityData.city}?`,
    headline: `Get Your Free ${cityData.city} Marketing Analysis`,
    subheadline: `We'll analyze your current marketing, show you exactly where you're leaving money on the table, and give you a clear roadmap to fix it. No pitch. No pressure. Just answers.`,
    primaryCTA: {
      text: 'Schedule Your Free Analysis',
      href: '/contact',
    },
    friction: "30-minute call. No commitment. You'll walk away with clarity either way.",
  };

  return (
    <>
      {/* Schema Markup */}
      <JsonLd data={createLocalBusinessSchema(cityData)} />
      <JsonLd data={createBreadcrumbSchema(breadcrumbItems)} />
      <JsonLd data={createFAQSchema(faqData)} />

      <main>
        {/* Hero Section */}
        <LocationHero city={cityData} />

        {/* Why Section */}
        <LocationWhySection city={cityData} />

        {/* Fit Section */}
        <FitSection {...fitData} />

        {/* FAQ Section */}
        <section className="py-16 lg:py-24 bg-[var(--color-bg-alt)]">
          <div className="container-content">
            <h2 className="text-3xl font-bold mb-4 text-center">
              Frequently Asked Questions About Fractional CMO Services in{' '}
              {cityData.city}
            </h2>
            <p className="text-center text-[var(--color-text-muted)] mb-8 max-w-2xl mx-auto">
              Get answers to common questions about marketing leadership for{' '}
              {cityData.region} businesses.
            </p>
            <FAQAccordion items={faqData} inline />
          </div>
        </section>

        {/* Final CTA */}
        <FinalCTASection {...finalCTAData} />
      </main>
    </>
  );
}
