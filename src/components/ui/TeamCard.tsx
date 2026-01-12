import Image from 'next/image';

interface TeamCardProps {
  name: string;
  title: string;
  bio: string;
  philosophy: string;
  imageUrl?: string;
}

export function TeamCard({
  name,
  title,
  bio,
  philosophy,
  imageUrl,
}: TeamCardProps) {
  return (
    <div className="group relative bg-white rounded-lg overflow-hidden transition-all duration-300 hover:-translate-y-2 hover:shadow-xl">
      {/* Photo */}
      <div className="relative aspect-[4/5] bg-[var(--color-green-light)] overflow-hidden">
        {imageUrl ? (
          <Image
            src={imageUrl}
            alt={name}
            fill
            className="object-cover object-top"
            sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
          />
        ) : (
          <div className="absolute inset-0 flex items-center justify-center">
            <span className="font-[family-name:var(--font-mono)] text-xs uppercase tracking-wider text-[var(--color-green)]">
              Photo
            </span>
          </div>
        )}
        {/* Accent bar on hover */}
        <div className="absolute bottom-0 left-0 right-0 h-1 bg-[var(--color-accent)] transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left" />
      </div>

      {/* Info */}
      <div className="p-6">
        <h3 className="font-[family-name:var(--font-display)] text-xl lg:text-2xl font-medium mb-1">
          {name}
        </h3>
        <div className="label text-xs text-[var(--color-accent)] uppercase tracking-wider mb-4">
          {title}
        </div>
        <p className="text-[var(--color-text-muted)] text-sm leading-relaxed mb-4">
          {bio}
        </p>
        <div className="pt-4 border-t border-[var(--color-border)] relative pl-4">
          <span className="absolute left-0 top-4 text-2xl font-bold text-[var(--color-accent)] leading-none">
            &ldquo;
          </span>
          <p className="font-[family-name:var(--font-display)] font-medium text-sm text-[var(--color-brown)]">
            {philosophy}&rdquo;
          </p>
        </div>
      </div>
    </div>
  );
}
