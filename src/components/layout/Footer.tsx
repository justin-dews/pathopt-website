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
  { icon: Linkedin, href: 'https://linkedin.com/company/pathopt', label: 'LinkedIn' },
  { icon: Facebook, href: 'https://facebook.com/pathopt', label: 'Facebook' },
  { icon: Instagram, href: 'https://instagram.com/pathopt', label: 'Instagram' },
  { icon: Youtube, href: 'https://youtube.com/@pathopt', label: 'YouTube' },
];

export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-[var(--color-bg)] pt-24 pb-8 border-t border-[var(--color-border)]">
      <div className="container-site">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-16 mb-16">
          {/* Brand Column */}
          <div className="lg:col-span-1 max-w-[280px]">
            <Link
              href="/"
              className="font-[family-name:var(--font-display)] text-2xl font-semibold tracking-tight text-[var(--color-text)] mb-4 block"
            >
              Path<span className="text-[var(--color-accent)]">Opt</span>
            </Link>
            <p className="text-[0.95rem] text-[var(--color-brown)] mb-8 leading-relaxed">
              Navigate. Optimize. Secure. Three business owners helping you grow with complete transparency.
            </p>

            {/* Contact Info */}
            <div className="space-y-2 mb-6">
              <a
                href="mailto:hello@pathopt.ai"
                className="flex items-center gap-2 text-[0.9rem] text-[var(--color-text)] hover:text-[var(--color-accent)] transition-colors"
              >
                <Mail className="w-[18px] h-[18px] text-[var(--color-accent)]" />
                hello@pathopt.ai
              </a>
              <a
                href="tel:+1234567890"
                className="flex items-center gap-2 text-[0.9rem] text-[var(--color-text)] hover:text-[var(--color-accent)] transition-colors"
              >
                <Phone className="w-[18px] h-[18px] text-[var(--color-accent)]" />
                (123) 456-7890
              </a>
            </div>

            {/* Social Links */}
            <div className="flex gap-2">
              {socialLinks.map((social) => (
                <a
                  key={social.label}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 bg-[var(--color-bg-alt)] rounded-lg flex items-center justify-center transition-all hover:bg-[var(--color-accent)] group"
                  aria-label={social.label}
                >
                  <social.icon className="w-[18px] h-[18px] text-[var(--color-text)] group-hover:text-white transition-colors" />
                </a>
              ))}
            </div>
          </div>

          {/* Solutions Column */}
          <div>
            <h4 className="font-[family-name:var(--font-display)] text-[0.9rem] font-bold mb-4 text-[var(--color-text)]">
              Solutions
            </h4>
            <ul className="space-y-0">
              {footerLinks.solutions.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="block text-[0.9rem] text-[var(--color-brown)] py-1.5 hover:text-[var(--color-accent)] transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Industries Column */}
          <div>
            <h4 className="font-[family-name:var(--font-display)] text-[0.9rem] font-bold mb-4 text-[var(--color-text)]">
              Industries
            </h4>
            <ul className="space-y-0">
              {footerLinks.industries.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="block text-[0.9rem] text-[var(--color-brown)] py-1.5 hover:text-[var(--color-accent)] transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Company Column */}
          <div>
            <h4 className="font-[family-name:var(--font-display)] text-[0.9rem] font-bold mb-4 text-[var(--color-text)]">
              Company
            </h4>
            <ul className="space-y-0">
              {footerLinks.company.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="block text-[0.9rem] text-[var(--color-brown)] py-1.5 hover:text-[var(--color-accent)] transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="flex flex-col md:flex-row justify-between items-center pt-8 border-t border-[var(--color-border)] gap-4">
          <p className="text-[0.85rem] text-[var(--color-brown)]">
            &copy; {currentYear} PathOpt. All rights reserved.
          </p>
          <div className="flex gap-8">
            <Link
              href="/privacy-policy"
              className="text-[0.85rem] text-[var(--color-brown)] hover:text-[var(--color-accent)] transition-colors"
            >
              Privacy Policy
            </Link>
            <Link
              href="/terms-conditions"
              className="text-[0.85rem] text-[var(--color-brown)] hover:text-[var(--color-accent)] transition-colors"
            >
              Terms & Conditions
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
