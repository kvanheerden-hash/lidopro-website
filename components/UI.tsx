import React from 'react';
import { Link } from 'react-router-dom';
import { LucideIcon } from 'lucide-react';

// --- Section Wrapper ---
interface SectionProps {
  className?: string;
  children: React.ReactNode;
  id?: string;
  bg?: 'white' | 'gray' | 'brand';
}

export const Section: React.FC<SectionProps> = ({ className = '', children, id, bg = 'white' }) => {
  const bgColors = {
    white: 'bg-white',
    gray: 'bg-slate-50',
    brand: 'bg-brand-900 text-white',
  };
  return (
    <section id={id} className={`py-16 md:py-24 ${bgColors[bg]} ${className}`}>
      <div className="container mx-auto px-4 md:px-6 max-w-7xl">
        {children}
      </div>
    </section>
  );
};

// --- Button ---
interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'secondary' | 'outline' | 'white';
  size?: 'sm' | 'md' | 'lg';
  to?: string;
  fullWidth?: boolean;
}

export const Button: React.FC<ButtonProps> = ({ 
  children, 
  variant = 'primary', 
  size = 'md',
  to, 
  className = '', 
  fullWidth = false,
  ...props 
}) => {
  const baseStyles = "inline-flex items-center justify-center font-medium transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-offset-2 disabled:opacity-50 disabled:cursor-not-allowed rounded-lg";
  
  const sizeStyles = {
    sm: "px-4 py-2 text-sm",
    md: "px-6 py-3 text-sm md:text-base",
    lg: "px-8 py-4 text-base md:text-lg",
  };

  const variants = {
    primary: "bg-brand-600 hover:bg-brand-700 text-white focus:ring-brand-500 shadow-md hover:shadow-lg",
    secondary: "bg-accent-500 hover:bg-accent-600 text-white focus:ring-accent-400 shadow-sm",
    outline: "border-2 border-brand-600 text-brand-700 hover:bg-brand-50 focus:ring-brand-500",
    white: "bg-white text-brand-900 hover:bg-slate-100 focus:ring-white/50 shadow-md",
  };

  const widthClass = fullWidth ? "w-full" : "";
  const classes = `${baseStyles} ${sizeStyles[size]} ${variants[variant]} ${widthClass} ${className}`;

  if (to) {
    return (
      <Link to={to} className={classes}>
        {children}
      </Link>
    );
  }

  return (
    <button className={classes} {...props}>
      {children}
    </button>
  );
};

// --- Feature Card ---
export const FeatureCard: React.FC<{
  title: string;
  description: string;
  Icon: LucideIcon;
}> = ({ title, description, Icon }) => (
  <div className="flex flex-col items-center text-center p-6 bg-white rounded-xl shadow-sm border border-slate-100 hover:shadow-md transition-shadow">
    <div className="h-12 w-12 bg-brand-50 text-brand-600 rounded-full flex items-center justify-center mb-4">
      <Icon size={24} />
    </div>
    <h3 className="text-lg font-bold text-slate-900 mb-2">{title}</h3>
    <p className="text-slate-600 leading-relaxed">{description}</p>
  </div>
);

// --- Accordion ---
interface AccordionItemProps {
  question: string;
  answer: React.ReactNode;
  isOpen: boolean;
  onClick: () => void;
}

export const AccordionItem: React.FC<AccordionItemProps> = ({ question, answer, isOpen, onClick }) => {
  return (
    <div className="border-b border-slate-200 last:border-0">
      <button
        className="w-full flex justify-between items-center py-5 text-left focus:outline-none"
        onClick={onClick}
      >
        <span className="text-lg font-medium text-slate-900">{question}</span>
        <span className={`ml-6 flex-shrink-0 transition-transform duration-300 ${isOpen ? 'rotate-180' : ''}`}>
          <svg className="h-6 w-6 text-brand-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
          </svg>
        </span>
      </button>
      <div 
        className={`overflow-hidden transition-all duration-300 ease-in-out ${isOpen ? 'max-h-96 opacity-100 pb-5' : 'max-h-0 opacity-0'}`}
      >
        <div className="text-slate-600 leading-relaxed pr-12">
          {answer}
        </div>
      </div>
    </div>
  );
};