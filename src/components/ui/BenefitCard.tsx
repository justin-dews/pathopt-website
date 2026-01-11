import { LucideIcon } from 'lucide-react';
import Image from 'next/image';

interface BenefitCardProps {
  icon?: LucideIcon;
  imageSrc?: string;
  imageAlt?: string;
  title: string;
  description: string;
}

export function BenefitCard({ icon: Icon, imageSrc, imageAlt, title, description }: BenefitCardProps) {
  return (
    <div className="bg-white rounded-xl p-8 relative overflow-hidden transition-all duration-300 hover:-translate-y-2 hover:shadow-[0_20px_40px_rgba(0,0,0,0.08)] cursor-pointer group">
      {/* Icon */}
      <div className="w-12 h-12 bg-[var(--color-accent-light)] rounded-[10px] flex items-center justify-center mb-4 overflow-hidden">
        {imageSrc ? (
          <div className="relative w-full h-full">
            <Image
              src={imageSrc}
              alt={imageAlt || title}
              fill
              sizes="48px"
              className="object-cover"
              quality={90}
            />
          </div>
        ) : Icon ? (
          <Icon className="w-6 h-6 text-[var(--color-accent)]" />
        ) : null}
      </div>

      {/* Title */}
      <h3 className="font-[family-name:var(--font-display)] text-xl font-bold mb-2 text-[var(--color-text)]">
        {title}
      </h3>

      {/* Description */}
      <p className="text-[0.95rem] text-[var(--color-brown)] leading-relaxed">
        {description}
      </p>

      {/* Accent Bar */}
      <div className="absolute bottom-0 left-0 right-0 h-1 bg-[var(--color-accent)] transform scale-x-0 origin-left transition-transform duration-300 group-hover:scale-x-100" />
    </div>
  );
}
