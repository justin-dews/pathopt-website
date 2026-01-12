import { Metadata } from 'next';
import Link from 'next/link';
import { Button } from '@/components/ui/Button';
import { FinalCTASection } from '@/components/sections/FinalCTASection';
import { cities } from '@/data/cities';

export const metadata: Metadata = {
  title: 'Fractional CMO Services by Location | PathOpt',
  description:
    'PathOpt provides fractional CMO and marketing leadership services across the United States. Find strategic marketing support for your home services business in Houston, Austin, Dallas, Denver, Phoenix, and more.',
  keywords:
    'fractional CMO, marketing consultant, home services marketing, contractor marketing, local marketing services',
  openGraph: {
    title: 'Fractional CMO Services by Location | PathOpt',
    description:
      'Strategic marketing leadership for home services businesses across America.',
    type: 'website',
    images: [{
      url: '/og-images/og-location-v3.png',
      width: 1456,
      height: 816,
      alt: 'Fractional CMO Services by Location - PathOpt',
    }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Fractional CMO Services by Location | PathOpt',
    description:
      'Strategic marketing leadership for home services businesses across America.',
    images: ['/og-images/og-location-v3.png'],
  },
  alternates: {
    canonical: 'https://pathopt.com/locations',
  },
};

// Group cities by state
const citiesByState = cities.reduce(
  (acc, city) => {
    if (!acc[city.state]) {
      acc[city.state] = [];
    }
    acc[city.state].push(city);
    return acc;
  },
  {} as Record<string, typeof cities>
);

// Sort states alphabetically
const sortedStates = Object.keys(citiesByState).sort();

export default function LocationsPage() {
  return (
    <main>
      {/* Hero Section */}
      <section className="relative pt-32 pb-16 lg:pt-40 lg:pb-24 bg-[var(--color-bg)]">
        <div
          className="absolute inset-0 opacity-[0.03]"
          style={{
            backgroundImage: `
              linear-gradient(var(--color-text) 1px, transparent 1px),
              linear-gradient(90deg, var(--color-text) 1px, transparent 1px)
            `,
            backgroundSize: '60px 60px',
          }}
        />

        <div className="relative container-site">
          <div className="max-w-3xl">
            <span className="label mb-4 block">Locations</span>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold mb-6 leading-[1.1]">
              Fractional CMO Services{' '}
              <span className="text-[var(--color-accent)]">
                Across America
              </span>
            </h1>
            <p className="text-xl text-[var(--color-text-muted)] mb-8 leading-relaxed">
              Strategic marketing leadership for home services and trades
              businesses. We bring the same transparent, results-focused
              approach to contractors and service businesses across the country.
            </p>
            <Button href="/contact">Find Out If We&apos;re Right for You</Button>
          </div>
        </div>
      </section>

      {/* Cities Grid */}
      <section className="py-16 lg:py-24 bg-[var(--color-bg-alt)]">
        <div className="container-site">
          <div className="grid gap-12">
            {sortedStates.map((state) => (
              <div key={state}>
                <h2 className="text-2xl font-bold mb-6 pb-2 border-b border-[var(--color-border)]">
                  {state}
                </h2>
                <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
                  {citiesByState[state].map((city) => (
                    <Link
                      key={city.slug}
                      href={`/locations/${city.slug}`}
                      className="group p-6 bg-[var(--color-bg)] rounded-xl border border-[var(--color-border)] hover:border-[var(--color-accent)] transition-all hover:shadow-lg"
                    >
                      <div className="flex items-start justify-between">
                        <div>
                          <h3 className="text-lg font-semibold mb-1 group-hover:text-[var(--color-accent)] transition-colors">
                            {city.city}
                          </h3>
                          <p className="text-sm text-[var(--color-text-muted)]">
                            {city.region}
                          </p>
                        </div>
                        <svg
                          className="w-5 h-5 text-[var(--color-text-muted)] group-hover:text-[var(--color-accent)] group-hover:translate-x-1 transition-all"
                          fill="none"
                          stroke="currentColor"
                          viewBox="0 0 24 24"
                          aria-hidden="true"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M9 5l7 7-7 7"
                          />
                        </svg>
                      </div>
                      <div className="mt-4 flex flex-wrap gap-2">
                        {city.industries.slice(0, 3).map((industry) => (
                          <span
                            key={industry}
                            className="text-xs px-2 py-1 bg-[var(--color-bg-alt)] rounded-full text-[var(--color-text-muted)]"
                          >
                            {industry}
                          </span>
                        ))}
                      </div>
                    </Link>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <FinalCTASection
        label="Not Sure Where to Start?"
        headline="Let's Talk About Your Business"
        subheadline="No matter where you're located, we can help you figure out if fractional CMO services are right for your business. Free consultation, no pressure."
        primaryCTA={{
          text: 'Schedule a Free Call',
          href: '/contact',
        }}
        friction="30 minutes. No commitment. Real answers."
      />
    </main>
  );
}
