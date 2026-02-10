
import React from 'react';

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'secondary' | 'outline' | 'ghost';
  size?: 'sm' | 'md' | 'lg';
  children: React.ReactNode;
}

export const Button: React.FC<ButtonProps> = ({ 
  variant = 'primary', 
  size = 'md', 
  children, 
  className = '', 
  ...props 
}) => {
  const baseStyles = 'inline-flex items-center justify-center font-bold transition-all duration-300 rounded-xl active:scale-95 disabled:opacity-50 disabled:cursor-not-allowed';
  
  const variants = {
    primary: 'bg-blue-600 hover:bg-blue-500 text-white shadow-[0_0_20px_rgba(37,99,235,0.3)] hover:shadow-[0_0_25px_rgba(37,99,235,0.5)]',
    secondary: 'bg-slate-800 hover:bg-slate-700 text-white border border-slate-700',
    outline: 'border-2 border-slate-800 hover:border-blue-600 hover:text-blue-500 text-slate-300',
    ghost: 'hover:bg-slate-900/50 text-slate-400 hover:text-white'
  };

  const sizes = {
    sm: 'px-4 py-2 text-xs uppercase tracking-widest',
    md: 'px-6 py-3 text-sm uppercase tracking-widest',
    lg: 'px-10 py-4 text-base uppercase tracking-widest'
  };

  return (
    <button 
      className={`${baseStyles} ${variants[variant]} ${sizes[size]} ${className}`}
      {...props}
    >
      {children}
    </button>
  );
};
