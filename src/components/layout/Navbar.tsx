'use client';

import Link from 'next/link';
import { useState, useRef, useEffect, useCallback } from 'react';
import { ChevronDown, ArrowRight, Menu, X } from 'lucide-react';
import { Button } from '@/components/ui/Button';

const pillars = [
  {
    title: 'Strategic Guidance',
    description: 'CMO/COO-level thinking without the salary',
    href: '/services/strategic-guidance',
  },
  {
    title: 'Operational Excellence',
    description: 'Systematize your business so it scales',
    href: '/services/operational-excellence',
  },
  {
    title: 'Performance Marketing',
    description: 'See exactly where every dollar goes',
    href: '/services/performance-marketing',
  },
];

const industries = [
  {
    title: 'Trades & Home Services',
    description: 'Contractors, HVAC, plumbing, and more',
    href: '/industries/trades-home-services',
  },
  {
    title: 'Professional Services',
    description: 'Consultants, agencies, and advisors',
    href: '/industries/professional-services',
  },
  {
    title: 'Promotional Products',
    description: 'Distributors and B2B suppliers',
    href: '/industries/promotional-products',
  },
];

const navLinks = [
  { label: 'About', href: '/about' },
  { label: 'Case Studies', href: '/case-studies' },
  { label: 'Blog', href: '/blog' },
  { label: 'Contact', href: '/contact' },
];

export function Navbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [howWeHelpOpen, setHowWeHelpOpen] = useState(false);
  const [industriesOpen, setIndustriesOpen] = useState(false);

  const howWeHelpRef = useRef<HTMLDivElement>(null);
  const industriesRef = useRef<HTMLDivElement>(null);
  const mobileMenuRef = useRef<HTMLDivElement>(null);

  // Close dropdowns when clicking outside
  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (howWeHelpRef.current && !howWeHelpRef.current.contains(event.target as Node)) {
        setHowWeHelpOpen(false);
      }
      if (industriesRef.current && !industriesRef.current.contains(event.target as Node)) {
        setIndustriesOpen(false);
      }
    }

    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  // Close dropdowns on Escape key
  const handleKeyDown = useCallback((event: React.KeyboardEvent) => {
    if (event.key === 'Escape') {
      setHowWeHelpOpen(false);
      setIndustriesOpen(false);
      setMobileMenuOpen(false);
    }
  }, []);

  // Prevent body scroll when mobile menu is open
  useEffect(() => {
    if (mobileMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => {
      document.body.style.overflow = '';
    };
  }, [mobileMenuOpen]);

  return (
    <nav
      className="fixed top-0 left-0 right-0 h-[var(--nav-height)] px-8 bg-[var(--color-bg)]/95 backdrop-blur-md z-50 border-b border-[var(--color-border)]"
      role="navigation"
      aria-label="Main navigation"
      onKeyDown={handleKeyDown}
    >
      <div className="flex items-center justify-between h-full max-w-[var(--max-width-site)] mx-auto">
        {/* Logo */}
        <Link
          href="/"
          className="font-[family-name:var(--font-display)] text-2xl font-semibold tracking-tight text-[var(--color-text)] focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[var(--color-accent)]"
          aria-label="PathOpt - Go to homepage"
        >
          Path<span className="text-[var(--color-accent)]">Opt</span>
        </Link>

        {/* Desktop Navigation */}
        <div className="hidden lg:flex items-center gap-8" role="menubar">
          {/* How We Help Dropdown */}
          <div className="relative" ref={howWeHelpRef}>
            <button
              className="flex items-center gap-1.5 font-[family-name:var(--font-body)] text-[0.95rem] font-medium text-[var(--color-text)] hover:text-[var(--color-accent)] transition-colors cursor-pointer"
              aria-expanded={howWeHelpOpen}
              aria-haspopup="true"
              aria-controls="how-we-help-menu"
              onClick={() => {
                setHowWeHelpOpen(!howWeHelpOpen);
                setIndustriesOpen(false);
              }}
              onMouseEnter={() => setHowWeHelpOpen(true)}
            >
              How We Help
              <ChevronDown
                className={`w-3.5 h-3.5 transition-transform ${howWeHelpOpen ? 'rotate-180' : ''}`}
                aria-hidden="true"
              />
            </button>

            {/* Dropdown Menu */}
            <div
              id="how-we-help-menu"
              className={`absolute top-full left-1/2 -translate-x-1/2 pt-4 transition-all duration-200 ${
                howWeHelpOpen ? 'opacity-100 visible' : 'opacity-0 invisible'
              }`}
              role="menu"
              aria-label="How We Help submenu"
              onMouseLeave={() => setHowWeHelpOpen(false)}
            >
              <div className="bg-white rounded-xl shadow-[0_20px_60px_rgba(0,0,0,0.12)] p-8 grid grid-cols-2 gap-8 min-w-[600px]">
                {/* Pillars Column */}
                <div>
                  <h4 className="font-[family-name:var(--font-mono)] text-xs uppercase tracking-widest text-[var(--color-brown)] mb-4">
                    Our Three Pillars
                  </h4>
                  <div className="space-y-0">
                    {pillars.map((pillar) => (
                      <Link
                        key={pillar.href}
                        href={pillar.href}
                        className="block py-2 border-b border-[var(--color-border)] last:border-b-0 group/item focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[var(--color-accent)]"
                        role="menuitem"
                        onClick={() => setHowWeHelpOpen(false)}
                      >
                        <div className="font-[family-name:var(--font-display)] font-semibold text-[0.95rem] text-[var(--color-text)] group-hover/item:text-[var(--color-accent)] transition-colors mb-0.5">
                          {pillar.title}
                        </div>
                        <div className="text-[0.85rem] text-[var(--color-brown)] leading-snug">
                          {pillar.description}
                        </div>
                      </Link>
                    ))}
                  </div>
                </div>

                {/* Featured Case Study Column */}
                <div>
                  <h4 className="font-[family-name:var(--font-mono)] text-xs uppercase tracking-widest text-[var(--color-brown)] mb-4">
                    Featured Case Study
                  </h4>
                  <div className="bg-[var(--color-bg-alt)] rounded-lg p-4">
                    <div className="font-[family-name:var(--font-mono)] text-[0.65rem] uppercase tracking-widest text-[var(--color-accent)] mb-2">
                      Case Study
                    </div>
                    <div className="font-[family-name:var(--font-display)] font-semibold text-base mb-2">
                      HomeWorks Construction
                    </div>
                    <div className="font-[family-name:var(--font-mono)] text-[0.85rem] text-[var(--color-green)] mb-3">
                      $47 → $27 cost per lead in 30 days
                    </div>
                    <Link
                      href="/case-studies/homeworks-construction"
                      className="inline-flex items-center gap-1 text-[0.85rem] text-[var(--color-accent)] font-medium hover:gap-2 transition-all focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[var(--color-accent)]"
                      role="menuitem"
                      onClick={() => setHowWeHelpOpen(false)}
                    >
                      Read the Case Study
                      <ArrowRight className="w-4 h-4" aria-hidden="true" />
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Industries Dropdown */}
          <div className="relative" ref={industriesRef}>
            <button
              className="flex items-center gap-1.5 font-[family-name:var(--font-body)] text-[0.95rem] font-medium text-[var(--color-text)] hover:text-[var(--color-accent)] transition-colors cursor-pointer"
              aria-expanded={industriesOpen}
              aria-haspopup="true"
              aria-controls="industries-menu"
              onClick={() => {
                setIndustriesOpen(!industriesOpen);
                setHowWeHelpOpen(false);
              }}
              onMouseEnter={() => setIndustriesOpen(true)}
            >
              Industries
              <ChevronDown
                className={`w-3.5 h-3.5 transition-transform ${industriesOpen ? 'rotate-180' : ''}`}
                aria-hidden="true"
              />
            </button>

            {/* Dropdown Menu */}
            <div
              id="industries-menu"
              className={`absolute top-full left-1/2 -translate-x-1/2 pt-4 transition-all duration-200 ${
                industriesOpen ? 'opacity-100 visible' : 'opacity-0 invisible'
              }`}
              role="menu"
              aria-label="Industries submenu"
              onMouseLeave={() => setIndustriesOpen(false)}
            >
              <div className="bg-white rounded-xl shadow-[0_20px_60px_rgba(0,0,0,0.12)] p-6 min-w-[300px]">
                <div className="space-y-0">
                  {industries.map((industry) => (
                    <Link
                      key={industry.href}
                      href={industry.href}
                      className="block py-2 border-b border-[var(--color-border)] last:border-b-0 group/item focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[var(--color-accent)]"
                      role="menuitem"
                      onClick={() => setIndustriesOpen(false)}
                    >
                      <div className="font-[family-name:var(--font-display)] font-semibold text-[0.95rem] text-[var(--color-text)] group-hover/item:text-[var(--color-accent)] transition-colors mb-0.5">
                        {industry.title}
                      </div>
                      <div className="text-[0.85rem] text-[var(--color-brown)] leading-snug">
                        {industry.description}
                      </div>
                    </Link>
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* Regular Nav Links */}
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="font-[family-name:var(--font-body)] text-[0.95rem] font-medium text-[var(--color-text)] hover:text-[var(--color-accent)] transition-colors focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[var(--color-accent)]"
              role="menuitem"
            >
              {link.label}
            </Link>
          ))}
        </div>

        {/* CTA Button */}
        <div className="hidden lg:block ml-4">
          <Button href="/contact" size="small">
            Get Your Free Growth Roadmap
          </Button>
        </div>

        {/* Mobile Menu Toggle */}
        <button
          className="lg:hidden p-2 cursor-pointer rounded-md focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[var(--color-accent)]"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          aria-label={mobileMenuOpen ? 'Close menu' : 'Open menu'}
          aria-expanded={mobileMenuOpen}
          aria-controls="mobile-menu"
        >
          {mobileMenuOpen ? (
            <X className="w-6 h-6 text-[var(--color-text)]" aria-hidden="true" />
          ) : (
            <Menu className="w-6 h-6 text-[var(--color-text)]" aria-hidden="true" />
          )}
        </button>
      </div>

      {/* Mobile Menu */}
      <div
        id="mobile-menu"
        ref={mobileMenuRef}
        className={`lg:hidden absolute top-[var(--nav-height)] left-0 right-0 bg-[var(--color-bg)] border-b border-[var(--color-border)] shadow-lg transition-all duration-300 ${
          mobileMenuOpen ? 'opacity-100 visible' : 'opacity-0 invisible pointer-events-none'
        }`}
        role="menu"
        aria-label="Mobile navigation"
        aria-hidden={!mobileMenuOpen}
      >
        <div className="container-site py-6 space-y-4">
          {/* How We Help Section */}
          <div className="border-b border-[var(--color-border)] pb-4">
            <div className="font-[family-name:var(--font-mono)] text-xs uppercase tracking-widest text-[var(--color-brown)] mb-3">
              How We Help
            </div>
            {pillars.map((pillar) => (
              <Link
                key={pillar.href}
                href={pillar.href}
                className="block py-2 font-[family-name:var(--font-display)] font-semibold text-[var(--color-text)] hover:text-[var(--color-accent)] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[var(--color-accent)]"
                onClick={() => setMobileMenuOpen(false)}
                role="menuitem"
                tabIndex={mobileMenuOpen ? 0 : -1}
              >
                {pillar.title}
              </Link>
            ))}
          </div>

          {/* Industries Section */}
          <div className="border-b border-[var(--color-border)] pb-4">
            <div className="font-[family-name:var(--font-mono)] text-xs uppercase tracking-widest text-[var(--color-brown)] mb-3">
              Industries
            </div>
            {industries.map((industry) => (
              <Link
                key={industry.href}
                href={industry.href}
                className="block py-2 font-[family-name:var(--font-display)] font-semibold text-[var(--color-text)] hover:text-[var(--color-accent)] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[var(--color-accent)]"
                onClick={() => setMobileMenuOpen(false)}
                role="menuitem"
                tabIndex={mobileMenuOpen ? 0 : -1}
              >
                {industry.title}
              </Link>
            ))}
          </div>

          {/* Regular Links */}
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="block py-2 font-[family-name:var(--font-body)] font-medium text-[var(--color-text)] hover:text-[var(--color-accent)] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[var(--color-accent)]"
              onClick={() => setMobileMenuOpen(false)}
              role="menuitem"
              tabIndex={mobileMenuOpen ? 0 : -1}
            >
              {link.label}
            </Link>
          ))}

          {/* Mobile CTA */}
          <div className="pt-4">
            <Button href="/contact" className="w-full" tabIndex={mobileMenuOpen ? 0 : -1}>
              Get Your Free Growth Roadmap
            </Button>
          </div>
        </div>
      </div>
    </nav>
  );
}
