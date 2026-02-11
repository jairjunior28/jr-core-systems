
import React from 'react';
import { Section } from '../UI/Section';
import { Card } from '../UI/Card';
import { VALUES } from '../../constants';

export const About: React.FC = () => {
  return (
    <div id="about">
      {/* Mission Vision Row */}
      <Section className="pb-0">
        <div className="grid md:grid-cols-2 gap-12 items-center mb-20">
          <div className="space-y-6">
            <h2 className="text-4xl font-bold text-white tracking-tight">
              Transformamos código em <br />
              <span className="text-blue-500">infraestrutura estratégica.</span>
            </h2>
            <p className="text-slate-400 text-lg leading-relaxed">
              A JR Core Systems é especialista em sistemas inteligentes de alto desempenho. 
              Nossas soluções integram dados, automação e inteligência artificial para servir 
              como o núcleo operacional de empresas modernas e governos.
            </p>
            <div className="p-6 bg-slate-900/50 border-l-4 border-blue-600 rounded-r-xl">
              <p className="text-slate-300 italic">
                "Não vendemos um app isolado. Entregamos o core tecnológico que sustenta suas operações críticas."
              </p>
            </div>
          </div>
          <div className="grid gap-6">
            <div className="p-8 bg-blue-600 rounded-2xl shadow-xl shadow-blue-600/20 text-white">
              <h4 className="text-xs uppercase tracking-widest font-black opacity-70 mb-2">🎯 Missão</h4>
              <p className="text-xl font-medium">
                Desenvolver sistemas robustos, inteligentes e confiáveis que se tornem o núcleo estratégico de empresas, pessoas e governos.
              </p>
            </div>
            <div className="p-8 bg-slate-800 rounded-2xl border border-slate-700 text-white">
              <h4 className="text-xs uppercase tracking-widest font-black opacity-70 mb-2">🔭 Visão</h4>
              <p className="text-xl font-medium">
                Ser referência em plataformas de software de alta performance, reconhecida pela solidez técnica e impacto real na vida das pessoas.
              </p>
            </div>
          </div>
        </div>
      </Section>

      {/* Values Grid */}
      <Section id="mission" title="Nossos Valores" subtitle="O que nos guia no desenvolvimento de soluções enterprise." dark>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {VALUES.map((val) => (
            <Card key={val.title} hoverable={false} className="border-none bg-slate-900/30">
              <div className="text-blue-500 mb-4">{val.icon}</div>
              <h4 className="text-lg font-bold text-white mb-2">{val.title}</h4>
              <p className="text-slate-400 text-sm leading-relaxed">{val.description}</p>
            </Card>
          ))}
        </div>
      </Section>
    </div>
  );
};
