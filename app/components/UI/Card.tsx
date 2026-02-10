
import React from 'react';

interface CardProps {
  children: React.ReactNode;
  className?: string;
  hoverable?: boolean;
}

export const Card: React.FC<CardProps> = ({ 
  children, 
  className = '', 
  hoverable = true 
}) => {
  return (
    <div className={`
      relative group overflow-hidden
      bg-slate-900/40 border border-slate-800/60 rounded-3xl p-8 md:p-10
      transition-all duration-500
      ${hoverable ? 'hover:border-blue-500/40 hover:bg-slate-900/60 hover:-translate-y-2 hover:shadow-[0_20px_50px_rgba(0,0,0,0.5)]' : ''}
      ${className}
    `}>
      {/* Glow Effect on Hover */}
      <div className="absolute -inset-px bg-gradient-to-r from-blue-500/0 via-blue-500/10 to-purple-500/0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-3xl pointer-events-none" />
      
      <div className="relative z-10">
        {children}
      </div>
    </div>
  );
};
