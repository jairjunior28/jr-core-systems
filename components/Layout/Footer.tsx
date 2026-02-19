
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
            <a href="#/" className="flex items-center gap-2 group">
              <div className="w-8 h-8 bg-blue-600 rounded flex items-center justify-center shadow-lg group-hover:bg-blue-500 transition-colors">
                <span className="font-bold text-white text-lg">JR</span>
              </div>
              <span className="text-xl font-bold text-white tracking-tighter uppercase">
                Jr Core <span className="text-blue-500">Systems</span>
              </span>
            </a>
            <p className="text-slate-500 max-w-sm leading-relaxed text-sm">
              Desenvolvendo o núcleo tecnológico de negócios modernos com sistemas inteligentes, robustos e preparados para o futuro global.
            </p>
            <div className="flex gap-4">
              <a href="#" className="w-10 h-10 rounded-full bg-slate-900 border border-slate-800 flex items-center justify-center text-slate-400 hover:text-blue-500 hover:border-blue-500/50 transition-all">
                <span className="text-[10px] font-black tracking-widest uppercase">Li</span>
              </a>
              <a href="#" className="w-10 h-10 rounded-full bg-slate-900 border border-slate-800 flex items-center justify-center text-slate-400 hover:text-blue-500 hover:border-blue-500/50 transition-all">
                <span className="text-[10px] font-black tracking-widest uppercase">Gh</span>
              </a>
            </div>
          </div>

          <div>
            <h4 className="text-white font-bold mb-6 uppercase tracking-widest text-xs">Menu</h4>
            <ul className="space-y-4">
              {NAV_ITEMS.map(item => (
                <li key={item.label}>
                  <a href={item.href.startsWith('#') ? `#/${item.href}` : item.href} className="text-slate-500 hover:text-blue-400 transition-colors text-sm">
                    {item.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="text-white font-bold mb-6 uppercase tracking-widest text-xs">Contato Oficial</h4>
            <ul className="space-y-4 text-slate-500 text-sm">
              <li className="flex flex-col">
                <span className="text-[10px] text-slate-600 uppercase font-bold mb-1">CNPJ</span>
                <span className="text-slate-300">65.089.647/0001-87</span>
              </li>
              <li className="flex flex-col">
                <span className="text-[10px] text-slate-600 uppercase font-bold mb-1">E-mail</span>
                <span className="text-slate-300 break-all">jrcoresystems@gmail.com</span>
              </li>
              <li className="flex flex-col">
                <span className="text-[10px] text-slate-600 uppercase font-bold mb-1">WhatsApp</span>
                <span className="text-slate-300">+55 62 99384-6943</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="pt-8 border-t border-slate-900 flex flex-col md:flex-row justify-between items-center gap-4 text-slate-700 text-[10px] uppercase tracking-[0.2em] font-bold">
          <div className="flex flex-col md:flex-row gap-2 md:gap-4 items-center">
            <p>© {new Date().getFullYear()} Jr Core Systems</p>
            <span className="hidden md:inline text-slate-800">|</span>
            <p>Anápolis - GO - Brasil</p>
          </div>
          <div className="flex gap-8">
            <a href="#/privacy" className="hover:text-blue-500 transition-colors">Privacidade</a>
            <a href="#/delete-account" className="hover:text-red-500 transition-colors">Excluir Conta</a>
            <button onClick={onOpenTerms} className="hover:text-blue-500 transition-colors">Termos</button>
          </div>
        </div>
      </div>
    </footer>
  );
};
