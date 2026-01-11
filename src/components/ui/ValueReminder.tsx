import { LucideIcon, Users, Eye, ThumbsUp } from 'lucide-react';

interface ValueItem {
  icon: LucideIcon;
  title: string;
  description: string;
}

interface ValueReminderProps {
  items?: ValueItem[];
}

const defaultItems: ValueItem[] = [
  {
    icon: Users,
    title: 'Three Business Owners, Not a Faceless Agency',
    description:
      "You'll work directly with partners who've built businesses themselves—not junior account managers reading from scripts.",
  },
  {
    icon: Eye,
    title: 'Complete Transparency',
    description:
      "We'll tell you exactly what we think, what we'd do, and what it would cost. No surprises.",
  },
  {
    icon: ThumbsUp,
    title: "If We're Not the Right Fit, We'll Say So",
    description:
      "We'd rather point you in the right direction than take on work that won't be a good match.",
  },
];

export function ValueReminder({ items = defaultItems }: ValueReminderProps) {
  return (
    <section className="py-16 lg:py-20 bg-[var(--color-bg)]">
      <div className="container-site">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {items.map((item, index) => {
            const Icon = item.icon;
            return (
              <div key={index} className="text-center">
                <div className="inline-flex items-center justify-center w-14 h-14 rounded-full bg-[var(--color-accent-light)] mb-4">
                  <Icon className="w-7 h-7 text-[var(--color-accent)]" />
                </div>
                <h3 className="text-lg font-semibold mb-2">{item.title}</h3>
                <p className="text-[var(--color-text-muted)] text-base leading-relaxed">
                  {item.description}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
