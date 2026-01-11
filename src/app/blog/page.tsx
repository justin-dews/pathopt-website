import { Metadata } from 'next';
import { BlogHero } from '@/components/sections/BlogHero';
import { BlogCard } from '@/components/ui/BlogCard';
import { FinalCTA } from '@/components/sections/FinalCTA';
import { blogPosts } from '@/data/blog-posts';

export const metadata: Metadata = {
  title: 'Blog | PathOpt - Insights for Small Business Growth',
  description:
    'Practical strategies for small business owners on operations, marketing, and growth. No fluff, no jargon—just insights you can actually use.',
};

export default function BlogPage() {
  const [featuredPost, ...otherPosts] = blogPosts;

  return (
    <main>
      <BlogHero
        label="The PathOpt Blog"
        headline="Insights for Growing Businesses"
        description="Practical strategies for operations, marketing, and growth. No fluff, no jargon—just insights you can actually use."
      />

      {/* Featured Post */}
      <section className="pb-16 lg:pb-24">
        <div className="container-site">
          <div className="mb-8">
            <span className="label">Featured</span>
          </div>
          <BlogCard
            slug={featuredPost.slug}
            category={featuredPost.category}
            title={featuredPost.title}
            excerpt={featuredPost.excerpt}
            date={featuredPost.date}
            readingTime={featuredPost.readingTime}
            featured
          />
        </div>
      </section>

      {/* More Posts Grid */}
      <section className="py-16 lg:py-24 bg-[var(--color-bg-alt)]">
        <div className="container-site">
          <div className="mb-12">
            <h2 className="text-3xl lg:text-4xl font-bold mb-4">More Articles</h2>
            <p className="text-[var(--color-text-muted)] text-lg max-w-2xl">
              Explore our latest thinking on what it takes to build a business that
              works—for you and your customers.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {otherPosts.map((post) => (
              <BlogCard
                key={post.slug}
                slug={post.slug}
                category={post.category}
                title={post.title}
                excerpt={post.excerpt}
                date={post.date}
                readingTime={post.readingTime}
              />
            ))}
          </div>
        </div>
      </section>

      <FinalCTA />
    </main>
  );
}
