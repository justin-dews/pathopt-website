import Link from 'next/link';
import { Mail, Phone, Linkedin, Facebook, Instagram, Youtube } from 'lucide-react';

const footerLinks = {
  solutions: [
    { label: 'Strategic Guidance', href: '/services/strategic-guidance' },
    { label: 'Operational Excellence', href: '/services/operational-excellence' },
    { label: 'Performance Marketing', href: '/services/performance-marketing' },
  ],
  industries: [
    { label: 'Trades & Home Services', href: '/industries/trades-home-services' },
    { label: 'Professional Services', href: '/industries/professional-services' },
    { label: 'Promotional Products', href: '/industries/promotional-products' },
  ],
  company: [
    { label: 'About', href: '/about' },
    { label: 'Case Studies', href: '/case-studies' },
    { label: 'Blog', href: '/blog' },
    { label: 'Contact', href: '/contact' },
  ],
};

const socialLinks = [
  { icon: Linkedin, href: 'https://linkedin.com/company/pathopt', label: 'Follow PathOpt on LinkedIn' },
  { icon: Facebook, href: 'https://facebook.com/pathopt', label: 'Follow PathOpt on Facebook' },
  { icon: Instagram, href: 'https://instagram.com/pathopt', label: 'Follow PathOpt on Instagram' },
  { icon: Youtube, href: 'https://youtube.com/@pathopt', label: 'Subscribe to PathOpt on YouTube' },
];

export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer
      className="bg-[var(--color-bg)] pt-24 pb-8 border-t border-[var(--color-border)]"
      role="contentinfo"
      aria-label="Site footer"
    >
      <div className="container-site">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-16 mb-16">
          {/* Brand Column */}
          <div className="lg:col-span-1 max-w-[280px]">
            <Link
              href="/"
              className="font-[family-name:var(--font-display)] text-2xl font-semibold tracking-tight text-[var(--color-text)] mb-4 block focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[var(--color-accent)]"
              aria-label="PathOpt - Go to homepage"
            >
              Path<span className="text-[var(--color-accent)]">Opt</span>
            </Link>
            <p className="text-[0.95rem] text-[var(--color-brown)] mb-8 leading-relaxed">
              Navigate. Optimize. Secure. Three business owners helping you grow with complete transparency.
            </p>

            {/* Contact Info */}
            <address className="not-italic space-y-2 mb-6">
              <a
                href="mailto:hello@pathopt.ai"
                className="flex items-center gap-2 text-[0.9rem] text-[var(--color-text)] hover:text-[var(--color-accent)] transition-colors focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[var(--color-accent)] rounded-sm"
              >
                <Mail className="w-[18px] h-[18px] text-[var(--color-accent)]" aria-hidden="true" />
                <span>hello@pathopt.ai</span>
              </a>
              <a
                href="tel:+1234567890"
                className="flex items-center gap-2 text-[0.9rem] text-[var(--color-text)] hover:text-[var(--color-accent)] transition-colors focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[var(--color-accent)] rounded-sm"
              >
                <Phone className="w-[18px] h-[18px] text-[var(--color-accent)]" aria-hidden="true" />
                <span>(123) 456-7890</span>
              </a>
            </address>

            {/* Social Links */}
            <nav aria-label="Social media links">
              <ul className="flex gap-2">
                {socialLinks.map((social) => (
                  <li key={social.label}>
                    <a
                      href={social.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-10 h-10 bg-[var(--color-bg-alt)] rounded-lg flex items-center justify-center transition-all hover:bg-[var(--color-accent)] group focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[var(--color-accent)]"
                      aria-label={social.label}
                    >
                      <social.icon className="w-[18px] h-[18px] text-[var(--color-text)] group-hover:text-white transition-colors" aria-hidden="true" />
                    </a>
                  </li>
                ))}
              </ul>
            </nav>
          </div>

          {/* Solutions Column */}
          <nav aria-label="Solutions navigation">
            <h4 className="font-[family-name:var(--font-display)] text-[0.9rem] font-bold mb-4 text-[var(--color-text)]">
              Solutions
            </h4>
            <ul className="space-y-0">
              {footerLinks.solutions.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="block text-[0.9rem] text-[var(--color-brown)] py-1.5 hover:text-[var(--color-accent)] transition-colors focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[var(--color-accent)] rounded-sm"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>

          {/* Industries Column */}
          <nav aria-label="Industries navigation">
            <h4 className="font-[family-name:var(--font-display)] text-[0.9rem] font-bold mb-4 text-[var(--color-text)]">
              Industries
            </h4>
            <ul className="space-y-0">
              {footerLinks.industries.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="block text-[0.9rem] text-[var(--color-brown)] py-1.5 hover:text-[var(--color-accent)] transition-colors focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[var(--color-accent)] rounded-sm"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>

          {/* Company Column */}
          <nav aria-label="Company navigation">
            <h4 className="font-[family-name:var(--font-display)] text-[0.9rem] font-bold mb-4 text-[var(--color-text)]">
              Company
            </h4>
            <ul className="space-y-0">
              {footerLinks.company.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="block text-[0.9rem] text-[var(--color-brown)] py-1.5 hover:text-[var(--color-accent)] transition-colors focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[var(--color-accent)] rounded-sm"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>
        </div>

        {/* Bottom Bar */}
        <div className="flex flex-col md:flex-row justify-between items-center pt-8 border-t border-[var(--color-border)] gap-4">
          <p className="text-[0.85rem] text-[var(--color-brown)]">
            <span aria-hidden="true">&copy;</span>
            <span className="sr-only">Copyright</span> {currentYear} PathOpt. All rights reserved.
          </p>
          <nav aria-label="Legal navigation">
            <ul className="flex gap-8">
              <li>
                <Link
                  href="/privacy-policy"
                  className="text-[0.85rem] text-[var(--color-brown)] hover:text-[var(--color-accent)] transition-colors focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[var(--color-accent)] rounded-sm"
                >
                  Privacy Policy
                </Link>
              </li>
              <li>
                <Link
                  href="/terms-conditions"
                  className="text-[0.85rem] text-[var(--color-brown)] hover:text-[var(--color-accent)] transition-colors focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[var(--color-accent)] rounded-sm"
                >
                  Terms & Conditions
                </Link>
              </li>
            </ul>
          </nav>
        </div>
      </div>
    </footer>
  );
}
