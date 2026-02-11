
import React from 'react';

export const TermsOfUse: React.FC = () => {
  return (
    <div className="space-y-8 text-slate-400 leading-relaxed text-sm">
      <div className="space-y-2">
        <p className="font-bold text-white uppercase text-xs tracking-[0.2em] text-blue-500">JR Core Systems • Atualizado em Fevereiro de 2026</p>
        <p>Bem-vindo ao ecossistema digital da <strong>JR Core Systems</strong>. Ao navegar em nosso site ou contratar nossos serviços de desenvolvimento, você concorda com os termos abaixo.</p>
      </div>

      <section className="space-y-4">
        <h4 className="text-white font-black uppercase text-xs tracking-widest border-l-2 border-blue-500 pl-3">1. Natureza dos Serviços</h4>
        <p>A JR Core Systems atua no desenvolvimento de software sob demanda, plataformas de IA e infraestrutura digital. Estes termos regem o uso das informações institucionais aqui contidas e estabelecem as bases para nossas parcerias tecnológicas.</p>
      </section>

      <section className="space-y-4">
        <h4 className="text-white font-black uppercase text-xs tracking-widest border-l-2 border-blue-500 pl-3">2. Propriedade Intelectual</h4>
        <p>Todo o conteúdo deste site (logos, textos, arquitetura visual) e os sistemas proprietários da linha "JR Core" (Finance, Analytics, AI, Secure) são propriedade intelectual exclusiva da JR Core Systems. A reprodução sem autorização é estritamente proibida.</p>
      </section>

      <section className="space-y-4">
        <h4 className="text-white font-black uppercase text-xs tracking-widest border-l-2 border-blue-500 pl-3">3. Uso de Soluções Customizadas</h4>
        <p>Para projetos desenvolvidos sob medida, os direitos de propriedade intelectual e licenciamento serão regidos por contratos específicos entre as partes, prevalecendo sobre estes termos genéricos.</p>
      </section>

      <section className="space-y-4">
        <h4 className="text-white font-black uppercase text-xs tracking-widest border-l-2 border-blue-500 pl-3">4. Limitação de Responsabilidade</h4>
        <p>A JR Core Systems entrega tecnologia de alta performance baseada nas melhores práticas de engenharia. No entanto, não nos responsabilizamos por decisões de negócio tomadas com base em análises de nossos sistemas de IA ou Analytics, sendo o usuário final o único responsável pela gestão de sua operação.</p>
      </section>

      <section className="space-y-4">
        <h4 className="text-white font-black uppercase text-xs tracking-widest border-l-2 border-blue-500 pl-3">5. Contato Jurídico</h4>
        <p>Para questões legais ou solicitações de conformidade, entre em contato através do e-mail: <span className="text-blue-400 font-bold">jairjuniorccs@gmail.com</span></p>
      </section>
    </div>
  );
};
