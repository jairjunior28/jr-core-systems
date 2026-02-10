
import React, { useState, useEffect } from 'react';
import { NAV_ITEMS } from '../../constants';
import { Button } from '../UI/Button';

export const Navbar: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav className={`fixed top-0 left-0 right-0 z-[100] transition-all duration-500 ${
      isScrolled ? 'py-4 glass' : 'py-8 bg-transparent'
    }`}>
      <div className="max-w-7xl mx-auto px-6 flex items-center justify-between">
        <div className="flex items-center gap-3">
          <div className="w-12 h-12 bg-blue-600 rounded-2xl flex items-center justify-center shadow-[0_0_30px_rgba(37,99,235,0.4)] rotate-3">
            <span className="font-black text-white text-2xl -rotate-3">JR</span>
          </div>
          <div className="flex flex-col leading-none">
            <span className="text-xl font-black text-white tracking-tighter uppercase">Core</span>
            <span className="text-[10px] font-bold text-blue-500 tracking-[0.4em] uppercase">Systems</span>
          </div>
        </div>

        <div className="hidden md:flex items-center gap-12">
          {NAV_ITEMS.map((item) => (
            <a 
              key={item.label} 
              href={item.href} 
              className="text-slate-400 hover:text-white font-bold transition-all text-xs uppercase tracking-[0.2em]"
            >
              {item.label}
            </a>
          ))}
          <Button size="sm" onClick={() => document.getElementById('contact')?.scrollIntoView()}>
            Fale Conosco
          </Button>
        </div>

        <button 
          className="md:hidden text-white p-2 bg-slate-900 rounded-xl border border-slate-800"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d={isMenuOpen ? "M6 18L18 6" : "M4 6h16M4 12h16M4 18h16"} />
          </svg>
        </button>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="md:hidden absolute top-full left-0 right-0 glass border-t border-white/5 p-8 flex flex-col gap-6">
          {NAV_ITEMS.map((item) => (
            <a 
              key={item.label} 
              href={item.href} 
              className="text-xl font-bold text-white uppercase tracking-widest"
              onClick={() => setIsMenuOpen(false)}
            >
              {item.label}
            </a>
          ))}
          <Button className="w-full" onClick={() => { setIsMenuOpen(false); document.getElementById('contact')?.scrollIntoView(); }}>
            Fale Conosco
          </Button>
        </div>
      )}
    </nav>
  );
};
