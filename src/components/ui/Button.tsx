import Link from 'next/link';
import { clsx } from 'clsx';

interface ButtonProps {
  children: React.ReactNode;
  href?: string;
  variant?: 'primary' | 'secondary' | 'white';
  size?: 'default' | 'small';
  className?: string;
  type?: 'button' | 'submit' | 'reset';
  onClick?: () => void;
}

export function Button({
  children,
  href,
  variant = 'primary',
  size = 'default',
  className,
  type = 'button',
  onClick,
}: ButtonProps) {
  const baseStyles = clsx(
    'inline-flex items-center justify-center gap-2',
    'font-[family-name:var(--font-body)] font-medium',
    'rounded-md transition-all duration-200',
    'focus:outline-none focus:ring-2 focus:ring-[var(--color-accent)] focus:ring-offset-2',
    {
      // Size variants
      'px-8 py-4 text-base': size === 'default',
      'px-5 py-3 text-sm': size === 'small',
      // Color variants
      'bg-[var(--color-accent)] text-white hover:bg-[var(--color-accent-hover)] hover:-translate-y-0.5 hover:shadow-lg': variant === 'primary',
      'bg-transparent text-[var(--color-text)] border-2 border-[var(--color-border)] hover:border-[var(--color-accent)] hover:text-[var(--color-accent)]': variant === 'secondary',
      'bg-white text-[var(--color-text)] hover:bg-[var(--color-bg)] hover:-translate-y-0.5 hover:shadow-lg': variant === 'white',
    },
    className
  );

  if (href) {
    return (
      <Link href={href} className={baseStyles}>
        {children}
      </Link>
    );
  }

  return (
    <button type={type} onClick={onClick} className={baseStyles}>
      {children}
    </button>
  );
}
