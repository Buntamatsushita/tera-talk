import { ReactNode } from "react";

interface CardProps {
  children: ReactNode;
  className?: string;
  href?: string;
  onClick?: () => void;
  role?: string;
  "aria-label"?: string;
}

export default function Card({ children, className = "", href, onClick, role, "aria-label": ariaLabel }: CardProps) {
  const baseClasses = "card";
  const combinedClasses = `${baseClasses} ${className}`.trim();

  if (href) {
    return (
      <a href={href} className={combinedClasses} role={role} aria-label={ariaLabel}>
        {children}
      </a>
    );
  }

  if (onClick) {
    return (
      <button onClick={onClick} className={combinedClasses} role={role} aria-label={ariaLabel}>
        {children}
      </button>
    );
  }

  return (
    <div className={combinedClasses} role={role} aria-label={ariaLabel}>
      {children}
    </div>
  );
}
