interface JsonLdProps {
  data: Record<string, unknown>;
}

export function JsonLd({ data }: JsonLdProps) {
  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }}
    />
  );
}

// Organization Schema for the business
export const organizationSchema = {
  '@context': 'https://schema.org',
  '@type': 'Organization',
  name: 'PathOpt',
  description:
    'Three experienced business owners helping small businesses grow, systematize, and optimize with complete transparency.',
  url: 'https://pathopt.com',
  logo: 'https://pathopt.com/logo.png',
  contactPoint: {
    '@type': 'ContactPoint',
    telephone: '+1-555-123-4567',
    contactType: 'customer service',
    email: 'hello@pathopt.com',
  },
  sameAs: [
    'https://linkedin.com/company/pathopt',
  ],
  founder: [
    {
      '@type': 'Person',
      name: 'Justin Dews',
      jobTitle: 'Founder & CEO',
    },
    {
      '@type': 'Person',
      name: 'Jeremy Stakely',
      jobTitle: 'Founding Partner',
    },
    {
      '@type': 'Person',
      name: 'Reese Ormand',
      jobTitle: 'Co-Founder & Strategic Advisor',
    },
  ],
};

// Professional Service Schema
export const professionalServiceSchema = {
  '@context': 'https://schema.org',
  '@type': 'ProfessionalService',
  name: 'PathOpt',
  description:
    'Growth and operations partner for small businesses. Strategic guidance, operational excellence, and transparent performance marketing.',
  url: 'https://pathopt.com',
  priceRange: '$$',
  areaServed: 'United States',
  serviceType: [
    'Business Consulting',
    'Marketing Services',
    'Operations Consulting',
  ],
  hasOfferCatalog: {
    '@type': 'OfferCatalog',
    name: 'PathOpt Services',
    itemListElement: [
      {
        '@type': 'Offer',
        itemOffered: {
          '@type': 'Service',
          name: 'Strategic Guidance',
          description: 'CMO and COO-level expertise without the six-figure salary.',
        },
      },
      {
        '@type': 'Offer',
        itemOffered: {
          '@type': 'Service',
          name: 'Operational Excellence',
          description: 'Systematize your business so it runs without you.',
        },
      },
      {
        '@type': 'Offer',
        itemOffered: {
          '@type': 'Service',
          name: 'Performance Marketing',
          description: 'Transparent marketing with real-time dashboards and daily optimization.',
        },
      },
    ],
  },
};

// WebSite Schema for search
export const websiteSchema = {
  '@context': 'https://schema.org',
  '@type': 'WebSite',
  name: 'PathOpt',
  url: 'https://pathopt.com',
  description: 'Growth and operations partner for small businesses.',
};

// Helper to create Article schema for blog posts
export function createArticleSchema({
  title,
  description,
  url,
  datePublished,
  dateModified,
  author,
  image,
}: {
  title: string;
  description: string;
  url: string;
  datePublished: string;
  dateModified?: string;
  author: string;
  image?: string;
}) {
  return {
    '@context': 'https://schema.org',
    '@type': 'Article',
    headline: title,
    description,
    url,
    datePublished,
    dateModified: dateModified || datePublished,
    author: {
      '@type': 'Person',
      name: author,
    },
    publisher: {
      '@type': 'Organization',
      name: 'PathOpt',
      logo: {
        '@type': 'ImageObject',
        url: 'https://pathopt.com/logo.png',
      },
    },
    ...(image && {
      image: {
        '@type': 'ImageObject',
        url: image,
      },
    }),
  };
}
