import { Quote } from 'lucide-react';

interface TestimonialSectionProps {
  quote: string;
  author: string;
  title: string;
  company: string;
}

export function TestimonialSection({
  quote,
  author,
  title,
  company,
}: TestimonialSectionProps) {
  return (
    <section className="py-16 lg:py-24 bg-[var(--color-green)]">
      <div className="container-content">
        <div className="relative">
          {/* Quote Icon */}
          <Quote className="w-16 h-16 text-white/20 mb-6" />

          {/* Quote Text */}
          <blockquote className="text-2xl sm:text-3xl lg:text-4xl text-white font-medium leading-snug mb-8">
            &ldquo;{quote}&rdquo;
          </blockquote>

          {/* Attribution */}
          <div className="flex items-center gap-4">
            {/* Avatar Placeholder */}
            <div className="w-14 h-14 rounded-full bg-white/20 flex items-center justify-center">
              <span className="text-white/60 text-xl font-bold">
                {author.charAt(0)}
              </span>
            </div>
            <div>
              <p className="text-white font-semibold">{author}</p>
              <p className="text-white/70 text-sm">
                {title}, {company}
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
