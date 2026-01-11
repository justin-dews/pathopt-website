interface ValueCardProps {
  title: string;
  description: string;
}

export function ValueCard({ title, description }: ValueCardProps) {
  return (
    <div className="p-6 bg-white/5 rounded-lg border border-white/10 transition-all duration-300 hover:bg-white/10 hover:-translate-y-1">
      <h4 className="font-[family-name:var(--font-display)] text-xl font-bold text-[var(--color-gold)] mb-3">
        {title}
      </h4>
      <p className="text-sm text-white/70 leading-relaxed">
        {description}
      </p>
    </div>
  );
}
