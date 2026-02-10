
import React from 'react';

interface SectionProps {
  id?: string;
  title?: string;
  subtitle?: string;
  children: React.ReactNode;
  className?: string;
  dark?: boolean;
}

export const Section: React.FC<SectionProps> = ({ 
  id, 
  title, 
  subtitle, 
  children, 
  className = '', 
  dark = false 
}) => {
  return (
    <section 
      id={id} 
      className={`relative py-24 md:py-32 px-6 overflow-hidden ${dark ? 'bg-slate-950' : 'bg-transparent'} ${className}`}
    >
      <div className="max-w-7xl mx-auto relative z-10">
        {(title || subtitle) && (
          <div className="text-center mb-20 space-y-6">
            {title && (
              <h2 className="text-4xl md:text-6xl font-black text-white tracking-tighter leading-none">
                {title}
              </h2>
            )}
            {subtitle && (
              <p className="text-slate-400 text-lg md:text-xl max-w-3xl mx-auto font-light leading-relaxed">
                {subtitle}
              </p>
            )}
            <div className="w-24 h-1 bg-blue-600 mx-auto rounded-full opacity-50" />
          </div>
        )}
        {children}
      </div>
    </section>
  );
};
