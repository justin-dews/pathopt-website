'use client';

import { useState } from 'react';
import { ChevronDown } from 'lucide-react';
import { clsx } from 'clsx';

interface FAQItem {
  question: string;
  answer: string;
}

interface FAQAccordionProps {
  headline?: string;
  items: FAQItem[];
  /** When true, renders only the accordion without section wrapper */
  inline?: boolean;
}

function AccordionItem({
  question,
  answer,
  isOpen,
  onToggle,
}: FAQItem & { isOpen: boolean; onToggle: () => void }) {
  return (
    <div className="border-b border-[var(--color-border)]">
      <button
        onClick={onToggle}
        className="w-full py-6 flex items-center justify-between text-left hover:text-[var(--color-accent)] transition-colors"
      >
        <span className="font-[family-name:var(--font-display)] font-semibold text-lg pr-8">
          {question}
        </span>
        <ChevronDown
          className={clsx(
            'w-5 h-5 flex-shrink-0 transition-transform duration-300',
            isOpen && 'rotate-180'
          )}
        />
      </button>
      <div
        className={clsx(
          'overflow-hidden transition-all duration-300',
          isOpen ? 'max-h-96 pb-6' : 'max-h-0'
        )}
      >
        <p className="text-[var(--color-text-muted)] leading-relaxed">
          {answer}
        </p>
      </div>
    </div>
  );
}

export function FAQAccordion({ headline, items, inline }: FAQAccordionProps) {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const accordionContent = (
    <div className="bg-white rounded-lg p-8">
      {items.map((item, index) => (
        <AccordionItem
          key={index}
          question={item.question}
          answer={item.answer}
          isOpen={openIndex === index}
          onToggle={() =>
            setOpenIndex(openIndex === index ? null : index)
          }
        />
      ))}
    </div>
  );

  // Inline mode - just return the accordion without section wrapper
  if (inline) {
    return accordionContent;
  }

  // Full section mode
  return (
    <section className="relative py-20 lg:py-28 bg-[var(--color-bg-alt)]">
      <div className="container-content">
        {/* Headline */}
        {headline && (
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-12">
            {headline}
          </h2>
        )}

        {/* Accordion Items */}
        {accordionContent}
      </div>
    </section>
  );
}
