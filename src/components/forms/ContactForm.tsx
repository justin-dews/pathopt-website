'use client';

import { useState, useId } from 'react';
import { motion } from 'framer-motion';
import { Button } from '@/components/ui/Button';
import { Loader2, CheckCircle, AlertCircle } from 'lucide-react';
import {
  staggerContainerFast,
  fadeInUp,
  scaleUp,
  viewport
} from '@/lib/animations';

interface FormData {
  name: string;
  email: string;
  phone: string;
  company: string;
  challenge: string;
  source: string;
}

type FormStatus = 'idle' | 'submitting' | 'success' | 'error';

export function ContactForm() {
  const [formData, setFormData] = useState<FormData>({
    name: '',
    email: '',
    phone: '',
    company: '',
    challenge: '',
    source: '',
  });
  const [status, setStatus] = useState<FormStatus>('idle');
  const [errorMessage, setErrorMessage] = useState('');
  const formId = useId();
  const errorId = `${formId}-error`;

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus('submitting');
    setErrorMessage('');

    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData),
      });

      if (!response.ok) {
        throw new Error('Failed to submit form');
      }

      setStatus('success');
      setFormData({
        name: '',
        email: '',
        phone: '',
        company: '',
        challenge: '',
        source: '',
      });
    } catch {
      setStatus('error');
      setErrorMessage('Something went wrong. Please try again or email us directly.');
    }
  };

  if (status === 'success') {
    return (
      <motion.div
        className="bg-white rounded-lg p-8 text-center"
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.4 }}
        role="status"
        aria-live="polite"
      >
        <motion.div
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          transition={{ delay: 0.2, type: 'spring', stiffness: 200 }}
        >
          <CheckCircle className="w-16 h-16 text-[var(--color-green)] mx-auto mb-4" aria-hidden="true" />
        </motion.div>
        <motion.h3
          className="text-2xl font-bold mb-2"
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3 }}
        >
          Thank You!
        </motion.h3>
        <motion.p
          className="text-[var(--color-text-muted)]"
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4 }}
        >
          We&apos;ve received your message and will reach out within 24 hours.
        </motion.p>
      </motion.div>
    );
  }

  const inputStyles =
    'w-full px-4 py-3 rounded-md border border-[var(--color-border)] bg-white ' +
    'text-[var(--color-text)] placeholder:text-[var(--color-text-muted)]/60 ' +
    'focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[var(--color-accent)] ' +
    'transition-all duration-200';

  const labelStyles = 'block text-sm font-medium text-[var(--color-text)] mb-2';

  return (
    <motion.div
      className="bg-white rounded-lg p-8"
      initial="hidden"
      whileInView="visible"
      viewport={viewport}
      variants={staggerContainerFast}
    >
      <motion.h3 className="text-2xl font-bold mb-6" variants={fadeInUp}>
        Tell Us a Bit About Your Business
      </motion.h3>

      {status === 'error' && (
        <motion.div
          id={errorId}
          className="mb-6 p-4 bg-red-50 border border-red-200 rounded-md flex items-center gap-3"
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          role="alert"
          aria-live="assertive"
        >
          <AlertCircle className="w-5 h-5 text-red-500 flex-shrink-0" aria-hidden="true" />
          <p className="text-red-700 text-sm">{errorMessage}</p>
        </motion.div>
      )}

      <form
        onSubmit={handleSubmit}
        className="space-y-6"
        aria-describedby={status === 'error' ? errorId : undefined}
        noValidate
      >
        {/* Name and Email Row */}
        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 gap-6"
          variants={fadeInUp}
        >
          <div>
            <label htmlFor={`${formId}-name`} className={labelStyles}>
              Name <span className="text-[var(--color-accent)]" aria-hidden="true">*</span>
              <span className="sr-only">(required)</span>
            </label>
            <input
              type="text"
              id={`${formId}-name`}
              name="name"
              value={formData.name}
              onChange={handleChange}
              required
              aria-required="true"
              className={inputStyles}
              placeholder="John Smith"
              autoComplete="name"
            />
          </div>
          <div>
            <label htmlFor={`${formId}-email`} className={labelStyles}>
              Email <span className="text-[var(--color-accent)]" aria-hidden="true">*</span>
              <span className="sr-only">(required)</span>
            </label>
            <input
              type="email"
              id={`${formId}-email`}
              name="email"
              value={formData.email}
              onChange={handleChange}
              required
              aria-required="true"
              className={inputStyles}
              placeholder="john@company.com"
              autoComplete="email"
            />
          </div>
        </motion.div>

        {/* Phone and Company Row */}
        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 gap-6"
          variants={fadeInUp}
        >
          <div>
            <label htmlFor={`${formId}-phone`} className={labelStyles}>
              Phone <span className="sr-only">(optional)</span>
            </label>
            <input
              type="tel"
              id={`${formId}-phone`}
              name="phone"
              value={formData.phone}
              onChange={handleChange}
              className={inputStyles}
              placeholder="(555) 123-4567"
              autoComplete="tel"
            />
          </div>
          <div>
            <label htmlFor={`${formId}-company`} className={labelStyles}>
              Company Name <span className="sr-only">(optional)</span>
            </label>
            <input
              type="text"
              id={`${formId}-company`}
              name="company"
              value={formData.company}
              onChange={handleChange}
              className={inputStyles}
              placeholder="Your Company"
              autoComplete="organization"
            />
          </div>
        </motion.div>

        {/* Challenge Textarea */}
        <motion.div variants={fadeInUp}>
          <label htmlFor={`${formId}-challenge`} className={labelStyles}>
            What&apos;s your biggest challenge right now?{' '}
            <span className="text-[var(--color-accent)]" aria-hidden="true">*</span>
            <span className="sr-only">(required)</span>
          </label>
          <textarea
            id={`${formId}-challenge`}
            name="challenge"
            value={formData.challenge}
            onChange={handleChange}
            required
            aria-required="true"
            rows={4}
            className={inputStyles}
            placeholder="Tell us about your business and what you're looking to solve..."
          />
        </motion.div>

        {/* Source Dropdown */}
        <motion.div variants={fadeInUp}>
          <label htmlFor={`${formId}-source`} className={labelStyles}>
            How did you hear about PathOpt? <span className="sr-only">(optional)</span>
          </label>
          <select
            id={`${formId}-source`}
            name="source"
            value={formData.source}
            onChange={handleChange}
            className={inputStyles}
          >
            <option value="">Select an option...</option>
            <option value="google">Google Search</option>
            <option value="referral">Referral</option>
            <option value="linkedin">LinkedIn</option>
            <option value="social">Social Media</option>
            <option value="blog">Blog/Article</option>
            <option value="other">Other</option>
          </select>
        </motion.div>

        {/* Submit Button */}
        <motion.div variants={scaleUp}>
          <Button
            type="submit"
            variant="primary"
            className="w-full md:w-auto"
            disabled={status === 'submitting'}
            aria-label={status === 'submitting' ? 'Sending your message, please wait' : 'Schedule a Conversation'}
          >
            {status === 'submitting' ? (
              <>
                <Loader2 className="w-5 h-5 animate-spin" aria-hidden="true" />
                <span>Sending...</span>
              </>
            ) : (
              'Schedule a Conversation'
            )}
          </Button>
        </motion.div>

        {/* Below Form Text */}
        <motion.p
          className="text-sm text-[var(--color-text-muted)]"
          variants={fadeInUp}
        >
          We typically respond within 24 hours. No spam, no endless follow-up sequences.
        </motion.p>
      </form>
    </motion.div>
  );
}
