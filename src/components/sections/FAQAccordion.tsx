'use client';

import { useState, useId } from 'react';
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
  id,
}: FAQItem & { isOpen: boolean; onToggle: () => void; id: string }) {
  const buttonId = `${id}-button`;
  const panelId = `${id}-panel`;

  return (
    <div className="border-b border-[var(--color-border)]">
      <h3>
        <button
          id={buttonId}
          onClick={onToggle}
          className="w-full py-6 flex items-center justify-between text-left hover:text-[var(--color-accent)] transition-colors focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[var(--color-accent)] rounded-sm"
          aria-expanded={isOpen}
          aria-controls={panelId}
        >
          <span className="font-[family-name:var(--font-display)] font-semibold text-lg pr-8">
            {question}
          </span>
          <ChevronDown
            className={clsx(
              'w-5 h-5 flex-shrink-0 transition-transform duration-300',
              isOpen && 'rotate-180'
            )}
            aria-hidden="true"
          />
        </button>
      </h3>
      <div
        id={panelId}
        role="region"
        aria-labelledby={buttonId}
        className={clsx(
          'overflow-hidden transition-all duration-300',
          isOpen ? 'max-h-96 pb-6' : 'max-h-0'
        )}
        hidden={!isOpen}
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
  const baseId = useId();

  const handleKeyDown = (event: React.KeyboardEvent, index: number) => {
    const itemCount = items.length;

    switch (event.key) {
      case 'ArrowDown':
        event.preventDefault();
        const nextButton = document.getElementById(`${baseId}-${(index + 1) % itemCount}-button`);
        nextButton?.focus();
        break;
      case 'ArrowUp':
        event.preventDefault();
        const prevButton = document.getElementById(`${baseId}-${(index - 1 + itemCount) % itemCount}-button`);
        prevButton?.focus();
        break;
      case 'Home':
        event.preventDefault();
        const firstButton = document.getElementById(`${baseId}-0-button`);
        firstButton?.focus();
        break;
      case 'End':
        event.preventDefault();
        const lastButton = document.getElementById(`${baseId}-${itemCount - 1}-button`);
        lastButton?.focus();
        break;
    }
  };

  const accordionContent = (
    <div
      className="bg-white rounded-lg p-8"
      role="presentation"
    >
      {items.map((item, index) => (
        <div key={index} onKeyDown={(e) => handleKeyDown(e, index)}>
          <AccordionItem
            question={item.question}
            answer={item.answer}
            isOpen={openIndex === index}
            onToggle={() =>
              setOpenIndex(openIndex === index ? null : index)
            }
            id={`${baseId}-${index}`}
          />
        </div>
      ))}
    </div>
  );

  // Inline mode - just return the accordion without section wrapper
  if (inline) {
    return accordionContent;
  }

  // Full section mode
  return (
    <section
      className="relative py-20 lg:py-28 bg-[var(--color-bg-alt)]"
      aria-labelledby={headline ? `${baseId}-headline` : undefined}
    >
      <div className="container-content">
        {/* Headline */}
        {headline && (
          <h2
            id={`${baseId}-headline`}
            className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-12"
          >
            {headline}
          </h2>
        )}

        {/* Accordion Items */}
        {accordionContent}
      </div>
    </section>
  );
}
