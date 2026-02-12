
import React from 'react';

export const PrivacyPolicy: React.FC = () => {
  return (
    <div className="space-y-8 text-slate-400 leading-relaxed text-sm">
      <div className="space-y-2">
        <p className="font-bold text-white uppercase text-xs tracking-[0.2em] text-blue-500">Privacidade Core • Jr Core Systems</p>
        <p>A <strong>Jr Core Systems</strong> (CNPJ: 65.089.647/0001-87) valoriza a integridade dos seus dados. Esta política descreve como tratamos informações no ecossistema de nossas plataformas e serviços.</p>
      </div>

      <section className="space-y-4">
        <h4 className="text-white font-black uppercase text-xs tracking-widest border-l-2 border-blue-500 pl-3">1. Coleta de Dados</h4>
        <p>Coletamos informações estritamente necessárias para o fornecimento de orçamentos, suporte técnico e melhoria de nossas ferramentas de IA. Isso inclui dados fornecidos em formulários de contato e metadados de navegação para otimização da experiência.</p>
      </section>

      <section className="space-y-4">
        <h4 className="text-white font-black uppercase text-xs tracking-widest border-l-2 border-blue-500 pl-3">2. Segurança do Core</h4>
        <p>Utilizamos criptografia de ponta e arquiteturas de segurança baseadas em nossos próprios protocolos (JR Core Secure) para garantir que qualquer dado em trânsito ou repouso esteja protegido contra acessos não autorizados.</p>
      </section>

      <section className="space-y-4">
        <h4 className="text-white font-black uppercase text-xs tracking-widest border-l-2 border-blue-500 pl-3">3. Compartilhamento</h4>
        <p>Não vendemos ou compartilhamos dados de nossos clientes com terceiros para fins publicitários. O compartilhamento ocorre apenas quando necessário para a execução de serviços contratados (ex: APIs de terceiros) ou por obrigação legal.</p>
      </section>

      <section className="space-y-4">
        <h4 className="text-white font-black uppercase text-xs tracking-widest border-l-2 border-blue-500 pl-3">4. Direitos do Usuário</h4>
        <p>Em conformidade com a LGPD, você tem direito a solicitar o acesso, correção ou exclusão de seus dados pessoais armazenados em nossos servidores a qualquer momento.</p>
      </section>

      <section className="space-y-4 text-center py-6 bg-slate-800/50 rounded-2xl">
        <p className="text-xs uppercase font-black tracking-widest text-slate-500 mb-2">Canal de Privacidade</p>
        <p className="text-white font-bold">jrcoresystems@gmail.com</p>
        <p className="text-[10px] text-slate-500 mt-1">Jr Core Systems</p>
        <p className="text-[10px] text-slate-500">65.089.647/0001-87</p>
      </section>
    </div>
  );
};
