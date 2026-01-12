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

// Helper to create FAQ schema for blog posts with FAQ sections
export function createFAQSchema(
  faqs: Array<{ question: string; answer: string }>
) {
  return {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: faqs.map((faq) => ({
      '@type': 'Question',
      name: faq.question,
      acceptedAnswer: {
        '@type': 'Answer',
        text: faq.answer,
      },
    })),
  };
}

// Helper to create DefinedTerm schema for definition-style content (featured snippet optimization)
export function createDefinedTermSchema({
  term,
  definition,
  url,
}: {
  term: string;
  definition: string;
  url: string;
}) {
  return {
    '@context': 'https://schema.org',
    '@type': 'DefinedTerm',
    name: term,
    description: definition,
    url,
    inDefinedTermSet: {
      '@type': 'DefinedTermSet',
      name: 'Marketing Terminology',
    },
  };
}

// Helper to create LocalBusiness schema for geographic landing pages
export function createLocalBusinessSchema({
  city,
  state,
  slug,
  description,
}: {
  city: string;
  state: string;
  slug: string;
  description?: string;
}) {
  return {
    '@context': 'https://schema.org',
    '@type': 'LocalBusiness',
    '@id': `https://pathopt.com/locations/${slug}`,
    name: `PathOpt - Fractional CMO ${city}`,
    description:
      description ||
      `Fractional CMO and marketing leadership for small businesses in ${city}, ${state}. Strategic guidance, performance marketing, and operational excellence with complete transparency.`,
    url: `https://pathopt.com/locations/${slug}`,
    telephone: '+1-555-123-4567',
    email: 'hello@pathopt.com',
    areaServed: {
      '@type': 'City',
      name: city,
      containedInPlace: {
        '@type': 'State',
        name: state,
      },
    },
    serviceType: [
      'Fractional CMO',
      'Marketing Consulting',
      'Business Strategy',
      'Performance Marketing',
      'Operational Excellence',
    ],
    priceRange: '$$',
    sameAs: ['https://linkedin.com/company/pathopt'],
    parentOrganization: {
      '@type': 'Organization',
      name: 'PathOpt',
      url: 'https://pathopt.com',
    },
  };
}

// Helper to create BreadcrumbList schema for navigation
export function createBreadcrumbSchema(
  items: Array<{ name: string; url: string }>
) {
  return {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: items.map((item, index) => ({
      '@type': 'ListItem',
      position: index + 1,
      name: item.name,
      item: item.url,
    })),
  };
}

// Helper to create Service schema for service-specific landing pages
export function createServiceSchema({
  name,
  description,
  url,
  areaServed,
}: {
  name: string;
  description: string;
  url: string;
  areaServed?: string;
}) {
  return {
    '@context': 'https://schema.org',
    '@type': 'Service',
    name,
    description,
    url,
    provider: {
      '@type': 'Organization',
      name: 'PathOpt',
      url: 'https://pathopt.com',
    },
    ...(areaServed && {
      areaServed: {
        '@type': 'Place',
        name: areaServed,
      },
    }),
  };
}
