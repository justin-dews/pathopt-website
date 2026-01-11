import { Check, X } from 'lucide-react';

interface FitSectionProps {
  headline: string;
  goodFitTitle?: string;
  goodFitItems: string[];
  notFitTitle?: string;
  notFitItems: string[];
}

export function FitSection({
  headline,
  goodFitTitle = "You're a good fit if:",
  goodFitItems,
  notFitTitle = "You're NOT a fit if:",
  notFitItems,
}: FitSectionProps) {
  return (
    <section className="py-16 lg:py-24 bg-[var(--color-bg)]">
      <div className="container-site">
        {/* Headline */}
        <h2 className="text-3xl sm:text-4xl font-bold mb-12 text-center">
          {headline}
        </h2>

        {/* Two Column Layout */}
        <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
          {/* Good Fit Column */}
          <div className="bg-white rounded-lg p-8 border-t-4 border-[var(--color-green)]">
            <h3 className="text-xl font-bold mb-6 text-[var(--color-green)]">
              {goodFitTitle}
            </h3>
            <ul className="space-y-4">
              {goodFitItems.map((item, index) => (
                <li key={index} className="flex items-start gap-3">
                  <Check className="w-5 h-5 text-[var(--color-green)] mt-0.5 flex-shrink-0" />
                  <span className="text-[var(--color-text-muted)]">{item}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Not a Fit Column */}
          <div className="bg-white rounded-lg p-8 border-t-4 border-red-500">
            <h3 className="text-xl font-bold mb-6 text-red-500">
              {notFitTitle}
            </h3>
            <ul className="space-y-4">
              {notFitItems.map((item, index) => (
                <li key={index} className="flex items-start gap-3">
                  <X className="w-5 h-5 text-red-500 mt-0.5 flex-shrink-0" />
                  <span className="text-[var(--color-text-muted)]">{item}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
