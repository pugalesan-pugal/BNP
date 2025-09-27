import { ReactNode } from 'react';

interface CardProps {
  children: ReactNode;
  className?: string;
  hover?: boolean;
}

export default function Card({ children, className = '', hover = false }: CardProps) {
  const baseClasses = 'bg-white dark:bg-gray-800 rounded-xl shadow-lg';
  const hoverClasses = hover ? 'hover:shadow-xl transition-shadow' : '';
  
  return (
    <div className={`${baseClasses} ${hoverClasses} ${className}`}>
      {children}
    </div>
  );
}
