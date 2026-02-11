
import React, { useState } from 'react';
import { Section } from '../UI/Section';
import { Button } from '../UI/Button';
import { Card } from '../UI/Card';

// INSTRUÇÃO: Crie uma conta no Formspree.io, crie um formulário e substitua o ID abaixo
const FORMSPREE_ID = "xykdkwrq"; // Ex: "mqakpogq"
const FORMSPREE_ENDPOINT = `https://formspree.io/f/${FORMSPREE_ID}`;

export const Contact: React.FC = () => {
  const [status, setStatus] = useState<'idle' | 'sending' | 'success' | 'error'>('idle');
  const [errorMessage, setErrorMessage] = useState('');

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setStatus('sending');
    setErrorMessage('');

    const formData = new FormData(e.currentTarget);
    const data = Object.fromEntries(formData.entries());

    try {
      // Se não houver ID configurado, simulamos o envio para não quebrar a experiência do usuário
      if (FORMSPREE_ID === "SEU_ID_AQUI") {
        console.warn("JR Core Systems: Endpoint de e-mail não configurado. Simulando envio...");
        await new Promise(resolve => setTimeout(resolve, 1500));
        setStatus('success');
        return;
      }

      const response = await fetch(FORMSPREE_ENDPOINT, {
        method: 'POST',
        body: JSON.stringify(data),
        headers: {
          'Accept': 'application/json',
          'Content-Type': 'application/json'
        }
      });

      if (response.ok) {
        setStatus('success');
      } else {
        const result = await response.json();
        throw new Error(result.error || "Erro ao enviar mensagem.");
      }
    } catch (error: any) {
      console.error("Erro no envio:", error);
      setStatus('error');
      setErrorMessage(error.message || "Ocorreu um erro inesperado. Tente novamente mais tarde.");
    }
  };

  return (
    <Section id="contact" title="Pronto para Evoluir seu Core?" subtitle="Fale com nossos especialistas e descubra como podemos tornar mais robusta a sua operação digital.">
      <div className="max-w-4xl mx-auto">
        <Card className="p-0 border-none overflow-hidden shadow-2xl" hoverable={false}>
          <div className="flex flex-col md:flex-row">
            <div className="md:w-[35%] bg-blue-600 p-8 md:p-10 text-white flex flex-col justify-between">
              <div>
                <h3 className="text-2xl font-bold mb-4">Informações de Contato</h3>
                <p className="opacity-80 text-sm">Estamos prontos para atender demandas críticas e projetos complexos.</p>
              </div>
              <div className="space-y-8 mt-12">
                <div className="flex items-start gap-4">
                  <div className="p-2 bg-white/10 rounded-lg shrink-0">
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" /></svg>
                  </div>
                  <span className="text-sm font-medium break-all leading-tight">jairjuniorccs@gmail.com</span>
                </div>
                <div className="flex items-center gap-4">
                  <div className="p-2 bg-white/10 rounded-lg shrink-0">
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" /><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" /></svg>
                  </div>
                  <span className="text-sm font-medium">Goiás - Brasil</span>
                </div>
                <div className="flex items-center gap-4">
                  <div className="p-2 bg-white/10 rounded-lg shrink-0">
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" /></svg>
                  </div>
                  <span className="text-sm font-medium">+55 62 99384-6943</span>
                </div>
              </div>
            </div>

            <div className="md:w-[65%] p-8 md:p-10 bg-slate-900">
              {status === 'success' ? (
                <div className="h-full flex flex-col items-center justify-center text-center py-10">
                  <div className="w-16 h-16 bg-green-500/20 text-green-500 rounded-full flex items-center justify-center mb-6">
                    <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" /></svg>
                  </div>
                  <h4 className="text-2xl font-bold text-white mb-2">Mensagem Enviada!</h4>
                  <p className="text-slate-400">Em breve um de nossos consultores entrará em contato.</p>
                  <Button variant="outline" className="mt-8" onClick={() => setStatus('idle')}>Enviar outra</Button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-6">
                  {status === 'error' && (
                    <div className="p-4 bg-red-500/10 border border-red-500/20 rounded-xl text-red-500 text-sm">
                      {errorMessage}
                    </div>
                  )}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                    <div className="space-y-2">
                      <label className="text-xs font-bold text-slate-500 uppercase tracking-widest">Nome</label>
                      <input name="name" required type="text" placeholder="Seu nome" className="w-full bg-slate-800 border border-slate-700 rounded-lg px-4 py-3 text-white focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all" />
                    </div>
                    <div className="space-y-2">
                      <label className="text-xs font-bold text-slate-500 uppercase tracking-widest">E-mail Corporativo</label>
                      <input name="email" required type="email" placeholder="exemplo@empresa.com" className="w-full bg-slate-800 border border-slate-700 rounded-lg px-4 py-3 text-white focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all" />
                    </div>
                  </div>
                  <div className="space-y-2">
                    <label className="text-xs font-bold text-slate-500 uppercase tracking-widest">Empresa</label>
                    <input name="company" type="text" placeholder="Nome da sua organização" className="w-full bg-slate-800 border border-slate-700 rounded-lg px-4 py-3 text-white focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all" />
                  </div>
                  <div className="space-y-2">
                    <label className="text-xs font-bold text-slate-500 uppercase tracking-widest">Como podemos ajudar?</label>
                    <textarea name="message" required rows={4} placeholder="Descreva seu desafio tecnológico..." className="w-full bg-slate-800 border border-slate-700 rounded-lg px-4 py-3 text-white focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all resize-none" />
                  </div>
                  <Button type="submit" className="w-full" disabled={status === 'sending'}>
                    {status === 'sending' ? 'Enviando...' : 'Solicitar Demonstração'}
                  </Button>
                </form>
              )}
            </div>
          </div>
        </Card>
      </div>
    </Section>
  );
};
