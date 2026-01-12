import { Metadata } from 'next';
import { CaseStudyCard } from '@/components/ui/CaseStudyCard';
import { FinalCTA } from '@/components/sections/FinalCTA';

export const metadata: Metadata = {
  title: 'Case Studies | Real Results from PathOpt Clients',
  description:
    'Real results from real businesses. See how PathOpt helps small businesses grow with complete transparency. No vanity metrics—just measurable outcomes.',
  openGraph: {
    title: 'Case Studies | Real Results from PathOpt Clients',
    description:
      'Real results from real businesses. See how PathOpt helps small businesses grow with complete transparency.',
    type: 'website',
    images: [{
      url: '/og-images/og-main-v3.png',
      width: 1456,
      height: 816,
      alt: 'Case Studies - PathOpt',
    }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Case Studies | Real Results from PathOpt Clients',
    description:
      'Real results from real businesses. See how PathOpt helps small businesses grow with complete transparency.',
    images: ['/og-images/og-main-v3.png'],
  },
};

interface CaseStudyData {
  slug: string;
  industry: string;
  title: string;
  description: string;
  metrics: { label: string; value: string; change: string }[];
}

const featuredCaseStudy: CaseStudyData = {
  slug: 'homeworks-construction',
  industry: 'Construction & Remodeling',
  title: '$47 to $27 Cost Per Lead in 30 Days',
  description:
    'How HomeWorks Construction tripled their qualified leads while reducing spend—with complete visibility into every marketing dollar.',
  metrics: [
    { label: 'Cost Per Lead', value: '$27', change: '-43%' },
    { label: 'Qualified Leads', value: '3X', change: '+200%' },
    { label: 'Monthly Spend', value: 'Reduced', change: 'Lower cost' },
    { label: 'Visibility', value: 'Real-time', change: 'Complete' },
  ],
};

// Placeholder for future case studies
const additionalCaseStudies: CaseStudyData[] = [
  // {
  //   slug: 'example-company',
  //   industry: 'Professional Services',
  //   title: 'Example Title',
  //   description: 'Example description...',
  //   metrics: [{ label: 'Key Metric', value: 'Value', change: '+X%' }],
  // },
];

export default function CaseStudiesPage() {
  return (
    <main>
        {/* Hero Section */}
        <section className="relative pt-32 pb-16 lg:pt-40 lg:pb-20 bg-[var(--color-bg)]">
          {/* Background Grid Pattern */}
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
            <span className="label">Case Studies</span>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold mt-4 mb-6 leading-[1.1]">
              Real Results from Real Businesses
            </h1>
            <p className="text-xl text-[var(--color-text-muted)] leading-relaxed max-w-2xl">
              See how PathOpt helps small businesses grow with complete
              transparency. No vanity metrics—just measurable outcomes.
            </p>
          </div>
        </section>

        {/* Featured Case Study */}
        <section className="py-16 lg:py-24 bg-[var(--color-bg-alt)]">
          <div className="container-site">
            <h2 className="text-2xl font-bold mb-8">Featured Case Study</h2>
            <CaseStudyCard {...featuredCaseStudy} featured />
          </div>
        </section>

        {/* Additional Case Studies Grid */}
        {additionalCaseStudies.length > 0 && (
          <section className="py-16 lg:py-24 bg-[var(--color-bg)]">
            <div className="container-site">
              <h2 className="text-2xl font-bold mb-8">More Success Stories</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {additionalCaseStudies.map((caseStudy, index) => (
                  <CaseStudyCard key={index} {...caseStudy} />
                ))}
              </div>
            </div>
          </section>
        )}

        {/* Coming Soon Message */}
        {additionalCaseStudies.length === 0 && (
          <section className="py-16 lg:py-24 bg-[var(--color-bg)]">
            <div className="container-content text-center">
              <h2 className="text-2xl font-bold mb-4">More Stories Coming Soon</h2>
              <p className="text-[var(--color-text-muted)] mb-8">
                We&apos;re documenting results from additional clients. In the
                meantime, schedule a conversation to hear more about the outcomes
                we&apos;ve achieved.
              </p>
            </div>
          </section>
        )}

        {/* Final CTA */}
        <FinalCTA />
    </main>
  );
}
