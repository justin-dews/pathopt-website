import { Metadata } from 'next';
import { notFound } from 'next/navigation';
import Link from 'next/link';
import { ArrowLeft } from 'lucide-react';
import { blogPosts, getBlogPost, getRelatedPosts } from '@/data/blog-posts';
import { RelatedPosts } from '@/components/sections/RelatedPosts';
import { FinalCTA } from '@/components/sections/FinalCTA';
import { JsonLd, createArticleSchema, createFAQSchema, createDefinedTermSchema } from '@/components/seo/JsonLd';

// FAQ data for the "5 signs" blog post
const fiveSignsFAQs = [
  {
    question: 'How do I know if I need systems or just better people?',
    answer: 'If you replaced everyone on your team with A-players, would the problems go away? Usually the honest answer is no. A-players can compensate for bad systems, but they burn out doing it—and eventually they leave for companies that are better organized. If you have recurring issues, bottlenecks, or training problems, the system is broken regardless of who is running it.',
  },
  {
    question: 'How long does it take to systemize a small business?',
    answer: 'For a typical business doing $1-3M in revenue, expect 3-6 months to build foundational systems (SOPs, training, decision frameworks) and another 3-6 months to optimize and refine. You will see improvements within weeks, but full transformation takes closer to a year.',
  },
  {
    question: 'What is the difference between systems and micromanagement?',
    answer: 'Systems create clarity about what should happen and how. Micromanagement is telling people what to do in every situation. Good systems actually reduce micromanagement because people know what is expected and can operate independently.',
  },
  {
    question: 'Where should I start if everything feels broken?',
    answer: 'Start where it hurts most. Which sign is keeping you up at night? Which one did you immediately recognize as your biggest problem? That is your starting point. Fix the bleeding first, optimize later.',
  },
  {
    question: 'Can I build systems while still running the business?',
    answer: 'Yes, but it requires carving out dedicated time. Most owners find success with 4-6 hours per week of focused system building time—usually early mornings or a blocked afternoon where they are unavailable for operations.',
  },
  {
    question: 'What is the ROI of business systemization?',
    answer: 'Most businesses $1M+ are leaving $100-300K on the table annually in fixable operational issues. The investment in building systems is typically 10-20% of that, and returns compound every year after.',
  },
];

// FAQ data for the "transparent marketing" blog post
const transparentMarketingFAQs = [
  {
    question: 'What is transparent marketing?',
    answer: 'Transparent marketing is an approach to marketing partnerships where the client has complete visibility into pricing (exactly how much goes to ad spend vs. fees), performance (direct access to all data and accounts), process (what work is being done and why), and communication (proactive, honest updates). It is the opposite of the traditional agency model where information is gatekept and complexity is used to justify fees.',
  },
  {
    question: 'Why do marketing agencies lack transparency?',
    answer: 'Most agencies are not trying to be deceptive—they are operating on a model that rewards opacity. When clients do not understand what they are paying for, they cannot comparison shop or ask hard questions. When agencies own the accounts, clients cannot leave easily. When reporting is confusing, poor performance is easier to explain away.',
  },
  {
    question: 'How do I know if my marketing agency is being transparent?',
    answer: 'Ask yourself: Do you own your ad accounts? Can you log in and see everything anytime you want? Do you know exactly how your monthly fee breaks down? Can you clearly state your cost per lead and cost per acquisition? Does your agency proactively tell you when things are not working? If you answered no to any of these, you are not getting full transparency.',
  },
  {
    question: 'What should a marketing report include?',
    answer: 'A useful marketing report should show: money spent (by channel, by campaign), results generated (leads, customers, revenue), key metrics (cost per lead, cost per acquisition, return on ad spend), what is working (and why), what is not working (and what you are doing about it), and recommended next steps.',
  },
  {
    question: 'Is performance-based marketing better than retainer?',
    answer: 'It depends on the arrangement. Performance-based sounds great but can incentivize short-term tactics over long-term brand building. It can also lead to gaming the metrics. A transparent retainer with clear performance expectations often works better: you know what you are paying, and you hold the agency accountable for results you can actually see.',
  },
  {
    question: 'How much should I pay for marketing management?',
    answer: 'If you are spending $5,000-$10,000/month in ad spend, a reasonable management fee is $1,500-$3,000/month for a specialized small agency or freelancer. Enterprise-level spend ($50,000+) might justify $10,000+ in management fees. What matters most is whether you can see exactly where that money goes and whether the results justify the cost.',
  },
  {
    question: 'Can I see my actual ad performance data?',
    answer: 'You should be able to. If you own your ad accounts (which you should), you can log into Google Ads, Meta Ads Manager, etc., anytime and see everything. If your agency set up accounts under their business manager and you do not have admin access, you are only seeing what they choose to show you. This is a red flag.',
  },
  {
    question: 'What is a reasonable marketing agency markup on ad spend?',
    answer: 'Honestly? Zero. The cleanest model is pass-through ad spend with no markup, plus a clear management fee. Some agencies markup ad spend 10-20% as part of their fee structure, which can be acceptable if they are transparent about it. But markups of 25-50% (common in the industry) are excessive, especially when hidden.',
  },
];

interface BlogPostPageProps {
  params: Promise<{
    slug: string;
  }>;
}

export async function generateStaticParams() {
  return blogPosts.map((post) => ({
    slug: post.slug,
  }));
}

export async function generateMetadata({
  params,
}: BlogPostPageProps): Promise<Metadata> {
  const { slug } = await params;
  const post = getBlogPost(slug);

  if (!post) {
    return {
      title: 'Post Not Found | PathOpt',
    };
  }

  return {
    title: `${post.title} | PathOpt Blog`,
    description: post.excerpt,
    openGraph: {
      title: post.title,
      description: post.excerpt,
      type: 'article',
      images: [{
        url: '/og-images/og-blog-v3.png',
        width: 1456,
        height: 816,
        alt: post.title,
      }],
    },
    twitter: {
      card: 'summary_large_image',
      title: post.title,
      description: post.excerpt,
      images: ['/og-images/og-blog-v3.png'],
    },
  };
}

export default async function BlogPostPage({ params }: BlogPostPageProps) {
  const { slug } = await params;
  const post = getBlogPost(slug);

  if (!post) {
    notFound();
  }

  const relatedPosts = getRelatedPosts(slug, 3);

  // Parse date for schema (convert "January 8, 2026" to ISO format)
  const parseDate = (dateStr: string) => {
    const date = new Date(dateStr);
    return date.toISOString().split('T')[0];
  };

  const articleSchema = createArticleSchema({
    title: post.title,
    description: post.excerpt,
    url: `https://pathopt.com/blog/${slug}`,
    datePublished: parseDate(post.date),
    author: post.author.name,
  });

  // Get FAQ data for posts that have FAQs
  const getFAQsForSlug = (postSlug: string) => {
    switch (postSlug) {
      case '5-signs-your-business-needs-systems':
        return fiveSignsFAQs;
      case 'why-transparent-marketing-outperforms-agencies':
        return transparentMarketingFAQs;
      default:
        return null;
    }
  };

  const faqData = getFAQsForSlug(slug);

  // Definition schema for transparent marketing article (featured snippet optimization)
  const transparentMarketingDefinition = slug === 'why-transparent-marketing-outperforms-agencies'
    ? createDefinedTermSchema({
        term: 'Transparent Marketing',
        definition: 'A client-agency relationship model built on complete visibility into pricing, performance, process, and communication. The client knows exactly where every dollar goes, has direct access to all data and accounts, and receives honest reporting on what is working and what is not.',
        url: `https://pathopt.com/blog/${slug}`,
      })
    : null;

  return (
    <main>
      {/* Schema Markup */}
      <JsonLd data={articleSchema} />
      {faqData && <JsonLd data={createFAQSchema(faqData)} />}
      {transparentMarketingDefinition && <JsonLd data={transparentMarketingDefinition} />}

      {/* Article Hero */}
      <section className="relative pt-32 pb-12 lg:pt-40 lg:pb-16 overflow-hidden">
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
          {/* Back Link */}
          <Link
            href="/blog"
            className="inline-flex items-center gap-2 text-[var(--color-text-muted)] hover:text-[var(--color-accent)] transition-colors mb-8"
          >
            <ArrowLeft className="w-4 h-4" />
            <span className="text-sm font-medium">Back to Blog</span>
          </Link>

          <div className="max-w-3xl">
            {/* Meta Info */}
            <div className="flex flex-wrap items-center gap-3 mb-6">
              <span className="label">{post.category}</span>
              <span className="text-[var(--color-text-muted)]">|</span>
              <span className="text-sm text-[var(--color-text-muted)]">
                {post.readingTime}
              </span>
              <span className="text-[var(--color-text-muted)]">|</span>
              <time className="text-sm text-[var(--color-text-muted)]">
                {post.date}
              </time>
            </div>

            {/* Title */}
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold mb-8 leading-tight">
              {post.title}
            </h1>

            {/* Author */}
            <div className="flex items-center gap-4">
              {/* Author Avatar Placeholder */}
              <div className="w-12 h-12 rounded-full bg-[var(--color-green)] flex items-center justify-center">
                <span className="text-white font-bold text-lg">
                  {post.author.name
                    .split(' ')
                    .map((n) => n[0])
                    .join('')}
                </span>
              </div>
              <div>
                <div className="font-medium">{post.author.name}</div>
                <div className="text-sm text-[var(--color-text-muted)]">
                  {post.author.role}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Article Content */}
      <section className="py-12 lg:py-16">
        <div className="container-content">
          <article className="prose prose-lg max-w-none">
            <div
              className="blog-content"
              dangerouslySetInnerHTML={{ __html: formatContent(post.content) }}
            />
          </article>
        </div>
      </section>

      {/* Author Bio */}
      <section className="py-12 lg:py-16 border-t border-[var(--color-border)]">
        <div className="container-content">
          <div className="bg-white rounded-lg p-8 lg:p-10 shadow-sm">
            <div className="flex flex-col sm:flex-row gap-6">
              {/* Author Avatar */}
              <div className="w-20 h-20 rounded-full bg-[var(--color-green)] flex items-center justify-center flex-shrink-0">
                <span className="text-white font-bold text-2xl">
                  {post.author.name
                    .split(' ')
                    .map((n) => n[0])
                    .join('')}
                </span>
              </div>

              {/* Author Info */}
              <div>
                <div className="label mb-2">About the Author</div>
                <h3 className="text-xl font-bold mb-2">{post.author.name}</h3>
                <p className="text-[var(--color-text-muted)] mb-4">
                  {post.author.role}
                </p>
                <p className="text-[var(--color-text-muted)]">
                  {getAuthorBio(post.author.name)}
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <RelatedPosts posts={relatedPosts} />
      <FinalCTA />
    </main>
  );
}

// Helper function to convert markdown-like content to HTML
function formatContent(content: string): string {
  return content
    // Headers
    .replace(/^# (.*$)/gm, '<h1 class="text-3xl lg:text-4xl font-bold mt-12 mb-6">$1</h1>')
    .replace(/^## (.*$)/gm, '<h2 class="text-2xl lg:text-3xl font-bold mt-10 mb-4">$1</h2>')
    .replace(/^### (.*$)/gm, '<h3 class="text-xl lg:text-2xl font-bold mt-8 mb-3">$1</h3>')
    // Bold
    .replace(/\*\*(.*?)\*\*/g, '<strong>$1</strong>')
    // Links
    .replace(/\[(.*?)\]\((.*?)\)/g, '<a href="$2" class="text-[var(--color-accent)] hover:underline">$1</a>')
    // Paragraphs (lines that don't start with # or -)
    .replace(/^(?!<|#|-)(.*$)/gm, (match) => {
      if (match.trim()) {
        return `<p class="mb-6 leading-relaxed">${match}</p>`;
      }
      return '';
    })
    // Lists
    .replace(/^- (.*$)/gm, '<li class="ml-6 mb-2 list-disc">$1</li>')
    // Numbered lists
    .replace(/^\d+\. (.*$)/gm, '<li class="ml-6 mb-2 list-decimal">$1</li>');
}

// Helper function to get author bio
function getAuthorBio(name: string): string {
  const bios: Record<string, string> = {
    'Justin Dews':
      'Justin brings over a decade of experience helping small businesses build systems that scale. He specializes in operational efficiency and process design.',
    'Kyle Hopkins':
      'Kyle is a performance marketing specialist who believes in radical transparency. He has managed millions in ad spend for businesses across industries.',
    'Michael Sklar':
      'Michael combines strategic consulting experience with hands-on execution. He helps business owners see the big picture without losing sight of what matters day-to-day.',
  };

  return bios[name] || 'A partner at PathOpt, dedicated to helping small businesses grow sustainably.';
}
