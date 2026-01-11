import { Metadata } from 'next';
import { ContactHero } from '@/components/sections/ContactHero';
import { ValueReminder } from '@/components/ui/ValueReminder';
import { ContactForm } from '@/components/forms/ContactForm';
import { FAQAccordion } from '@/components/sections/FAQAccordion';
import { Mail, Phone, MapPin } from 'lucide-react';

export const metadata: Metadata = {
  title: 'Contact PathOpt | Get Your Free Business Assessment',
  description:
    'Talk to three business owners who\'ve been in your shoes. Get your free business assessment. No pressure, no pitch—just an honest conversation.',
  openGraph: {
    title: 'Contact PathOpt | Get Your Free Business Assessment',
    description:
      'Talk to three business owners who\'ve been in your shoes. Get your free business assessment. No pressure, no pitch.',
    type: 'website',
  },
};

const heroData = {
  headline: "Let's Talk About Your Business",
  subheadline:
    "Whether you need strategic guidance, operational help, or marketing that actually works—let's start with a conversation. No pressure, no pitch. Just an honest assessment of how we might be able to help.",
};

const faqData = {
  headline: 'Questions Before You Reach Out?',
  items: [
    {
      question: 'What happens after I submit this form?',
      answer:
        "We'll review your submission and reach out within 24 hours to schedule a conversation. That first call is just to understand your situation—no pitch, no pressure.",
    },
    {
      question: 'How much does it cost?',
      answer:
        "It depends on what you need. Our partnerships start at $497/month and scale based on scope. We'll give you a clear breakdown during our conversation.",
    },
    {
      question: "I've been burned by agencies/consultants before. Why is this different?",
      answer:
        "We've been burned too—that's why we built PathOpt. Three business owners who actually implement, not just advise. Complete transparency into what we're doing and why. If we can't show you results, we haven't done our job.",
    },
    {
      question: 'Do you only work with certain industries?',
      answer:
        "We work with small businesses across industries, though we have particular expertise in trades, home services, and professional services. If you're unsure, reach out—we'll be honest about whether we're a good fit.",
    },
    {
      question: 'What if I just need one thing, not everything?',
      answer:
        "That's fine. Many clients start with marketing and expand to operations or strategy over time. Start with what's most urgent. We can grow from there if it makes sense.",
    },
  ],
};

export default function ContactPage() {
  return (
    <main>
        {/* Hero */}
        <ContactHero {...heroData} />

        {/* Value Reminder */}
        <ValueReminder />

        {/* Contact Form Section */}
        <section className="py-16 lg:py-24 bg-[var(--color-bg-alt)]">
          <div className="container-site">
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
              {/* Form - Takes 2 columns */}
              <div className="lg:col-span-2">
                <ContactForm />
              </div>

              {/* Contact Info Sidebar */}
              <div className="lg:col-span-1">
                <div className="bg-white rounded-lg p-8">
                  <h3 className="text-xl font-bold mb-6">
                    Prefer to reach out directly?
                  </h3>
                  <div className="space-y-6">
                    <div className="flex items-start gap-4">
                      <div className="w-10 h-10 rounded-full bg-[var(--color-accent-light)] flex items-center justify-center flex-shrink-0">
                        <Mail className="w-5 h-5 text-[var(--color-accent)]" />
                      </div>
                      <div>
                        <p className="font-medium text-sm text-[var(--color-text-muted)] mb-1">
                          Email
                        </p>
                        <a
                          href="mailto:hello@pathopt.com"
                          className="text-[var(--color-text)] hover:text-[var(--color-accent)] transition-colors"
                        >
                          hello@pathopt.com
                        </a>
                      </div>
                    </div>

                    <div className="flex items-start gap-4">
                      <div className="w-10 h-10 rounded-full bg-[var(--color-accent-light)] flex items-center justify-center flex-shrink-0">
                        <Phone className="w-5 h-5 text-[var(--color-accent)]" />
                      </div>
                      <div>
                        <p className="font-medium text-sm text-[var(--color-text-muted)] mb-1">
                          Phone
                        </p>
                        <a
                          href="tel:+15551234567"
                          className="text-[var(--color-text)] hover:text-[var(--color-accent)] transition-colors"
                        >
                          (555) 123-4567
                        </a>
                      </div>
                    </div>

                    <div className="flex items-start gap-4">
                      <div className="w-10 h-10 rounded-full bg-[var(--color-accent-light)] flex items-center justify-center flex-shrink-0">
                        <MapPin className="w-5 h-5 text-[var(--color-accent)]" />
                      </div>
                      <div>
                        <p className="font-medium text-sm text-[var(--color-text-muted)] mb-1">
                          Location
                        </p>
                        <p className="text-[var(--color-text)]">
                          Serving businesses nationwide
                        </p>
                      </div>
                    </div>
                  </div>

                  {/* Trust Indicators */}
                  <div className="mt-8 pt-8 border-t border-[var(--color-border)]">
                    <p className="text-sm text-[var(--color-text-muted)] leading-relaxed">
                      <strong className="text-[var(--color-text)]">
                        What to expect:
                      </strong>{' '}
                      A 30-minute conversation with one of our partners.
                      We&apos;ll ask about your business, understand your challenges,
                      and give you honest feedback—whether or not we&apos;re the
                      right fit.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* FAQ Section */}
        <FAQAccordion {...faqData} />
    </main>
  );
}
