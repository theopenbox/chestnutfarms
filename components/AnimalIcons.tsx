import React from "react";

interface IconProps extends React.SVGProps<SVGSVGElement> {
  className?: string;
  title?: string;
}

export const CowIcon: React.FC<IconProps> = ({ className = "w-8 h-8", title, ...props }) => (
  <svg
    viewBox="0 0 64 64"
    fill="none"
    stroke="currentColor"
    strokeWidth="2.5"
    strokeLinecap="round"
    strokeLinejoin="round"
    className={className}
    {...props}
  >
    {title && <title>{title}</title>}
    {/* Head outline */}
    <path d="M18 20c0-6 4-10 14-10s14 4 14 10v16c0 6-4 10-14 10s-14-4-14-10V20z" />
    {/* Horns */}
    <path d="M18 16c-3-2-6-1-8 2M46 16c3-2 6-1 8 2" />
    {/* Ears */}
    <path d="M18 22c-4 0-8 2-8 6s4 2 8 0M46 22c4 0 8 2 8 6s-4 2-8 0" />
    {/* Snout */}
    <path d="M22 38c0-2 2-4 10-4s10 2 10 4v4c0 4-4 6-10 6s-10-2-10-6v-4z" />
    {/* Nostrils */}
    <circle cx="28" cy="40" r="1.5" fill="currentColor" />
    <circle cx="36" cy="40" r="1.5" fill="currentColor" />
    {/* Eyes */}
    <circle cx="26" cy="24" r="2.5" fill="currentColor" />
    <circle cx="38" cy="24" r="2.5" fill="currentColor" />
  </svg>
);

export const PigIcon: React.FC<IconProps> = ({ className = "w-8 h-8", title, ...props }) => (
  <svg
    viewBox="0 0 64 64"
    fill="none"
    stroke="currentColor"
    strokeWidth="2.5"
    strokeLinecap="round"
    strokeLinejoin="round"
    className={className}
    {...props}
  >
    {title && <title>{title}</title>}
    {/* Head outline */}
    <circle cx="32" cy="32" r="20" />
    {/* Ears */}
    <path d="M18 18c-1-6-6-6-8-4s-1 8 2 9M46 18c1-6 6-6 8-4s1 8-2 9" />
    {/* Snout */}
    <ellipse cx="32" cy="38" rx="8" ry="5" />
    {/* Nostrils */}
    <line x1="29" y1="38" x2="29" y2="38.1" strokeWidth="4" />
    <line x1="35" y1="38" x2="35" y2="38.1" strokeWidth="4" />
    {/* Eyes */}
    <circle cx="24" cy="26" r="2" fill="currentColor" />
    <circle cx="40" cy="26" r="2" fill="currentColor" />
  </svg>
);

export const SheepIcon: React.FC<IconProps> = ({ className = "w-8 h-8", title, ...props }) => (
  <svg
    viewBox="0 0 64 64"
    fill="none"
    stroke="currentColor"
    strokeWidth="2.5"
    strokeLinecap="round"
    strokeLinejoin="round"
    className={className}
    {...props}
  >
    {title && <title>{title}</title>}
    {/* Woolly head cloud shape */}
    <path d="M22 26c-2 0-3-1-3-3s2-3 4-2c0-3 3-4 6-3 1-3 5-3 7-1 2-2 6-1 6 2 2-1 4 0 4 2 2 0 2 3 0 4-1 2-3 2-4 2" />
    {/* Face */}
    <path d="M25 25c0 5 2 9 7 9s7-4 7-9v-4H25v4z" />
    {/* Ears */}
    <path d="M23 23c-2 2-4 5-3 7M41 23c2 2 4 5 3 7" />
    {/* Eyes */}
    <line x1="28" y1="23" x2="30" y2="23" />
    <line x1="34" y1="23" x2="36" y2="23" />
    {/* Woolly body details */}
    <path d="M15 32c-3 0-5 3-4 6 1 2 3 2 4 1 0 3 3 4 6 3 1 2 4 2 6 0 2 2 5 2 7 0 2 2 5 1 6-1" />
  </svg>
);

export const GoatIcon: React.FC<IconProps> = ({ className = "w-8 h-8", title, ...props }) => (
  <svg
    viewBox="0 0 64 64"
    fill="none"
    stroke="currentColor"
    strokeWidth="2.5"
    strokeLinecap="round"
    strokeLinejoin="round"
    className={className}
    {...props}
  >
    {title && <title>{title}</title>}
    {/* Face outline */}
    <path d="M22 18l6 24c1 4 3 6 4 6s3-2 4-6l6-24" />
    {/* Horns */}
    <path d="M26 18c-1-5-3-9-6-11M38 18c1-5 3-9 6-11" />
    {/* Ears */}
    <path d="M22 20c-3 1-6 4-6 7s2 4 4 1M42 20c3 1 6 4 6 7s-2 4-4 1" />
    {/* Beard */}
    <path d="M30 48l2 6 2-6" />
    {/* Eyes */}
    <ellipse cx="27" cy="25" rx="1.5" ry="1" fill="currentColor" />
    <ellipse cx="37" cy="25" rx="1.5" ry="1" fill="currentColor" />
    {/* Nose line */}
    <path d="M30 42h4" />
  </svg>
);
