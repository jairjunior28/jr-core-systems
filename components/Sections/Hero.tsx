
import React from 'react';
import { Button } from '../UI/Button';

export const Hero: React.FC = () => {
  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center pt-24 overflow-hidden">
      {/* Background Gradients */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-[-10%] left-[-10%] w-[50%] h-[50%] bg-blue-600/10 blur-[120px] rounded-full animate-pulse-slow" />
        <div className="absolute bottom-[-10%] right-[-10%] w-[50%] h-[50%] bg-purple-600/10 blur-[120px] rounded-full animate-pulse-slow" />
        <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-20 mix-blend-overlay pointer-events-none" />
      </div>

      <div className="max-w-7xl mx-auto px-6 relative z-10 text-center">
        <div className="inline-flex items-center gap-3 px-4 py-2 rounded-full bg-slate-900/50 border border-slate-800 text-blue-400 text-xs font-bold uppercase tracking-[0.2em] mb-10 shadow-2xl backdrop-blur-md">
          <span className="flex h-2 w-2 rounded-full bg-blue-500 animate-ping" />
          O core da Inteligência Artificial.
        </div>
        
        <h1 className="text-6xl md:text-9xl font-[900] text-white leading-[0.9] mb-10 tracking-tighter">
          Tecnologia no <br />
          <span className="text-gradient">núcleo do negócio.</span>
        </h1>
        
        <p className="text-slate-400 text-xl md:text-2xl max-w-3xl mx-auto mb-12 leading-relaxed font-light">
          Sistemas robustos e inteligentes projetados para serem o centro 
          operacional e estratégico de empresas, governos e pessoas.
        </p>
        
        <div className="flex flex-col sm:flex-row items-center justify-center gap-6 mb-24">
          <Button size="lg" className="w-full sm:w-auto" onClick={() => document.getElementById('products')?.scrollIntoView()}>
            Explorar Soluções
          </Button>
          <Button variant="outline" size="lg" className="w-full sm:w-auto" onClick={() => document.getElementById('about')?.scrollIntoView()}>
            Nossa Visão
          </Button>
        </div>
        
        {/* Brand Bar */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 py-12 border-y border-white/5 opacity-30 hover:opacity-100 transition-opacity duration-700">
          {['Finance', 'Analytics', 'Secure', 'GovTech'].map(brand => (
            <div key={brand} className="text-center font-black text-2xl md:text-3xl tracking-[0.3em] uppercase text-slate-300">
              {brand}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
