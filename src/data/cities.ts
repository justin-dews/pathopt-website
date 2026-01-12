// City data for geographic landing pages
// SEO Target: "Fractional CMO [City]" - Zero keyword difficulty

export interface CityData {
  city: string;
  state: string;
  stateAbbr: string;
  slug: string;
  region: string;
  marketContext: string;
  industries: string[];
  population: string;
  businessCount: string;
}

export const cities: CityData[] = [
  {
    city: 'Houston',
    state: 'Texas',
    stateAbbr: 'TX',
    slug: 'houston',
    region: 'Gulf Coast',
    marketContext:
      'the fourth-largest city in America with a booming construction and home services market',
    industries: ['HVAC', 'plumbing', 'roofing', 'electrical', 'remodeling'],
    population: '2.3M+',
    businessCount: '60,000+',
  },
  {
    city: 'Austin',
    state: 'Texas',
    stateAbbr: 'TX',
    slug: 'austin',
    region: 'Central Texas',
    marketContext:
      "one of America's fastest-growing cities where contractors can't keep up with demand",
    industries: ['remodeling', 'HVAC', 'landscaping', 'pool services', 'electrical'],
    population: '1M+',
    businessCount: '45,000+',
  },
  {
    city: 'Dallas',
    state: 'Texas',
    stateAbbr: 'TX',
    slug: 'dallas',
    region: 'North Texas',
    marketContext:
      'a sprawling metroplex where standing out from thousands of competitors requires more than yard signs',
    industries: ['roofing', 'HVAC', 'plumbing', 'remodeling', 'painting'],
    population: '1.3M+',
    businessCount: '55,000+',
  },
  {
    city: 'San Antonio',
    state: 'Texas',
    stateAbbr: 'TX',
    slug: 'san-antonio',
    region: 'South Texas',
    marketContext:
      'a rapidly expanding market where military families and new residents constantly need home services',
    industries: ['HVAC', 'plumbing', 'roofing', 'landscaping', 'pest control'],
    population: '1.5M+',
    businessCount: '35,000+',
  },
  {
    city: 'Denver',
    state: 'Colorado',
    stateAbbr: 'CO',
    slug: 'denver',
    region: 'Front Range',
    marketContext:
      'a competitive mountain west market where seasonal swings make marketing timing everything',
    industries: ['roofing', 'HVAC', 'plumbing', 'remodeling', 'snow removal'],
    population: '715K+',
    businessCount: '30,000+',
  },
  {
    city: 'Phoenix',
    state: 'Arizona',
    stateAbbr: 'AZ',
    slug: 'phoenix',
    region: 'Valley of the Sun',
    marketContext:
      'a sun-soaked market where HVAC is king and the right marketing separates survivors from thrivers',
    industries: ['HVAC', 'pool services', 'roofing', 'landscaping', 'plumbing'],
    population: '1.6M+',
    businessCount: '40,000+',
  },
  {
    city: 'Atlanta',
    state: 'Georgia',
    stateAbbr: 'GA',
    slug: 'atlanta',
    region: 'Metro Atlanta',
    marketContext:
      'the business hub of the Southeast where competition is fierce and reputation is everything',
    industries: ['HVAC', 'plumbing', 'roofing', 'electrical', 'remodeling'],
    population: '500K+',
    businessCount: '35,000+',
  },
  {
    city: 'Chicago',
    state: 'Illinois',
    stateAbbr: 'IL',
    slug: 'chicago',
    region: 'Chicagoland',
    marketContext:
      'a massive Midwest market where harsh winters create year-round demand for quality contractors',
    industries: ['HVAC', 'plumbing', 'roofing', 'remodeling', 'snow removal'],
    population: '2.7M+',
    businessCount: '65,000+',
  },
  {
    city: 'Miami',
    state: 'Florida',
    stateAbbr: 'FL',
    slug: 'miami',
    region: 'South Florida',
    marketContext:
      'a bilingual market where hurricane season drives demand and trust is built through results',
    industries: ['roofing', 'HVAC', 'plumbing', 'hurricane protection', 'pool services'],
    population: '450K+',
    businessCount: '25,000+',
  },
  {
    city: 'Seattle',
    state: 'Washington',
    stateAbbr: 'WA',
    slug: 'seattle',
    region: 'Pacific Northwest',
    marketContext:
      'a tech-savvy market where homeowners expect professional digital presence from their contractors',
    industries: ['roofing', 'plumbing', 'HVAC', 'remodeling', 'landscaping'],
    population: '750K+',
    businessCount: '28,000+',
  },
  {
    city: 'Nashville',
    state: 'Tennessee',
    stateAbbr: 'TN',
    slug: 'nashville',
    region: 'Middle Tennessee',
    marketContext:
      "one of America's hottest real estate markets where contractors are drowning in leads they can't convert",
    industries: ['remodeling', 'HVAC', 'plumbing', 'electrical', 'roofing'],
    population: '690K+',
    businessCount: '22,000+',
  },
  {
    city: 'Charlotte',
    state: 'North Carolina',
    stateAbbr: 'NC',
    slug: 'charlotte',
    region: 'Carolina Piedmont',
    marketContext:
      'a banking hub with explosive residential growth and homeowners who demand quality',
    industries: ['HVAC', 'roofing', 'plumbing', 'remodeling', 'landscaping'],
    population: '900K+',
    businessCount: '26,000+',
  },
  {
    city: 'Tampa',
    state: 'Florida',
    stateAbbr: 'FL',
    slug: 'tampa',
    region: 'Tampa Bay',
    marketContext:
      'a coastal market where storm damage and year-round AC needs create constant opportunity',
    industries: ['HVAC', 'roofing', 'plumbing', 'pool services', 'hurricane protection'],
    population: '400K+',
    businessCount: '20,000+',
  },
  {
    city: 'Orlando',
    state: 'Florida',
    stateAbbr: 'FL',
    slug: 'orlando',
    region: 'Central Florida',
    marketContext:
      'a tourism-adjacent market where vacation rentals and new construction drive steady demand',
    industries: ['HVAC', 'pool services', 'plumbing', 'roofing', 'landscaping'],
    population: '310K+',
    businessCount: '18,000+',
  },
  {
    city: 'Las Vegas',
    state: 'Nevada',
    stateAbbr: 'NV',
    slug: 'las-vegas',
    region: 'Southern Nevada',
    marketContext:
      'a desert market where HVAC is life-or-death and homeowners pay premium for reliability',
    industries: ['HVAC', 'plumbing', 'pool services', 'roofing', 'landscaping'],
    population: '650K+',
    businessCount: '24,000+',
  },
];

// Helper to get city by slug
export function getCityBySlug(slug: string): CityData | undefined {
  return cities.find((city) => city.slug === slug);
}

// Get all city slugs for static generation
export function getAllCitySlugs(): string[] {
  return cities.map((city) => city.slug);
}
