import { Metadata } from 'next';
import { notFound } from 'next/navigation';
import Link from 'next/link';
import { ArrowLeft } from 'lucide-react';
import { blogPosts, getBlogPost, getRelatedPosts } from '@/data/blog-posts';
import { RelatedPosts } from '@/components/sections/RelatedPosts';
import { FinalCTA } from '@/components/sections/FinalCTA';

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
  };
}

export default async function BlogPostPage({ params }: BlogPostPageProps) {
  const { slug } = await params;
  const post = getBlogPost(slug);

  if (!post) {
    notFound();
  }

  const relatedPosts = getRelatedPosts(slug, 3);

  return (
    <main>
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
    .replace(/^## (.*$)/gm, '<h2 class="text-2xl lg:text-3xl font-bold mt-10 mb-4">$2</h2>')
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
