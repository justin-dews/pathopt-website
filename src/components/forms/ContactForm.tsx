'use client';

import { useState } from 'react';
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
      >
        <motion.div
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          transition={{ delay: 0.2, type: 'spring', stiffness: 200 }}
        >
          <CheckCircle className="w-16 h-16 text-[var(--color-green)] mx-auto mb-4" />
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
    'focus:outline-none focus:ring-2 focus:ring-[var(--color-accent)] focus:border-transparent ' +
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
          className="mb-6 p-4 bg-red-50 border border-red-200 rounded-md flex items-center gap-3"
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
        >
          <AlertCircle className="w-5 h-5 text-red-500 flex-shrink-0" />
          <p className="text-red-700 text-sm">{errorMessage}</p>
        </motion.div>
      )}

      <form onSubmit={handleSubmit} className="space-y-6">
        {/* Name and Email Row */}
        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 gap-6"
          variants={fadeInUp}
        >
          <div>
            <label htmlFor="name" className={labelStyles}>
              Name <span className="text-[var(--color-accent)]">*</span>
            </label>
            <input
              type="text"
              id="name"
              name="name"
              value={formData.name}
              onChange={handleChange}
              required
              className={inputStyles}
              placeholder="John Smith"
            />
          </div>
          <div>
            <label htmlFor="email" className={labelStyles}>
              Email <span className="text-[var(--color-accent)]">*</span>
            </label>
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              required
              className={inputStyles}
              placeholder="john@company.com"
            />
          </div>
        </motion.div>

        {/* Phone and Company Row */}
        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 gap-6"
          variants={fadeInUp}
        >
          <div>
            <label htmlFor="phone" className={labelStyles}>
              Phone
            </label>
            <input
              type="tel"
              id="phone"
              name="phone"
              value={formData.phone}
              onChange={handleChange}
              className={inputStyles}
              placeholder="(555) 123-4567"
            />
          </div>
          <div>
            <label htmlFor="company" className={labelStyles}>
              Company Name
            </label>
            <input
              type="text"
              id="company"
              name="company"
              value={formData.company}
              onChange={handleChange}
              className={inputStyles}
              placeholder="Your Company"
            />
          </div>
        </motion.div>

        {/* Challenge Textarea */}
        <motion.div variants={fadeInUp}>
          <label htmlFor="challenge" className={labelStyles}>
            What&apos;s your biggest challenge right now?{' '}
            <span className="text-[var(--color-accent)]">*</span>
          </label>
          <textarea
            id="challenge"
            name="challenge"
            value={formData.challenge}
            onChange={handleChange}
            required
            rows={4}
            className={inputStyles}
            placeholder="Tell us about your business and what you're looking to solve..."
          />
        </motion.div>

        {/* Source Dropdown */}
        <motion.div variants={fadeInUp}>
          <label htmlFor="source" className={labelStyles}>
            How did you hear about PathOpt?
          </label>
          <select
            id="source"
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
          >
            {status === 'submitting' ? (
              <>
                <Loader2 className="w-5 h-5 animate-spin" />
                Sending...
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
