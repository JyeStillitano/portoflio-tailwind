import Link from "next/link";

interface Props {
  children: React.ReactNode;
  href?: string;
  onClick?: () => void;
  label?: string;
  className?: string;
}

export default function IconButton({ children, href, onClick, label, className = "text-white hover:text-brand-secondary" }: Props) {
  const base = `flex cursor-pointer items-center justify-center p-3 transition-colors ${className}`;

  if (href) {
    return (
      <Link href={href} target="_blank" aria-label={label} className={base}>
        {children}
      </Link>
    );
  }

  return (
    <button onClick={onClick} aria-label={label} className={base}>
      {children}
    </button>
  );
}
