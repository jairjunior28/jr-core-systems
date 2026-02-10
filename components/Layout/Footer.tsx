
import React from 'react';
import { NAV_ITEMS } from '../../constants';

interface FooterProps {
  onOpenTerms: () => void;
  onOpenPrivacy: () => void;
}

export const Footer: React.FC<FooterProps> = ({ onOpenTerms, onOpenPrivacy }) => {
  return (
    <footer className="bg-slate-950 border-t border-slate-900 pt-16 pb-8 px-6">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-16">
          <div className="col-span-1 md:col-span-2 space-y-6">
            <div className="flex items-center gap-2">
              <div className="w-8 h-8 bg-blue-600 rounded flex items-center justify-center shadow-lg">
                <span className="font-bold text-white text-lg">JR</span>
              </div>
              <span className="text-xl font-bold text-white tracking-tighter uppercase">
                CORE <span className="text-blue-500">SYSTEMS</span>
              </span>
            </div>
            <p className="text-slate-500 max-w-sm leading-relaxed">
              Desenvolvendo o núcleo tecnológico de negócios modernos. 
              Sistemas inteligentes, robustos e preparados para o futuro global.
            </p>
            <div className="flex gap-4">
              {['Twitter', 'LinkedIn', 'GitHub'].map(social => (
                <a key={social} href="#" className="w-10 h-10 rounded-full bg-slate-900 border border-slate-800 flex items-center justify-center text-slate-500 hover:text-blue-500 hover:border-blue-500/50 transition-all">
                  <span className="sr-only">{social}</span>
                  <div className="w-5 h-5 bg-current opacity-40" />
                </a>
              ))}
            </div>
          </div>

          <div>
            <h4 className="text-white font-bold mb-6 uppercase tracking-widest text-xs">Links Rápidos</h4>
            <ul className="space-y-4">
              {NAV_ITEMS.map(item => (
                <li key={item.label}>
                  <a href={item.href} className="text-slate-500 hover:text-blue-400 transition-colors text-sm">{item.label}</a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="text-white font-bold mb-6 uppercase tracking-widest text-xs">Contato</h4>
            <ul className="space-y-4 text-slate-500 text-sm">
              <li>jairjuniorccs@gmail.com</li>
              <li>Goiás - Brasil</li>
              <li>+55 11 99384-6943</li>
            </ul>
          </div>
        </div>

        <div className="pt-8 border-t border-slate-900 flex flex-col md:flex-row justify-between items-center gap-4 text-slate-600 text-xs uppercase tracking-widest">
          <p>© {new Date().getFullYear()} JR Core Systems. Todos os direitos reservados.</p>
          <div className="flex gap-8">
            <button onClick={onOpenPrivacy} className="hover:text-slate-400 transition-colors">Privacidade</button>
            <button onClick={onOpenTerms} className="hover:text-slate-400 transition-colors">Termos de Uso</button>
          </div>
        </div>
      </div>
    </footer>
  );
};
