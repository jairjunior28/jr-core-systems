
import React, { useEffect } from 'react';
import { Navbar } from '../components/Layout/Navbar';
import { Footer } from '../components/Layout/Footer';
import { PrivacyPolicy } from '../components/Legal/PrivacyPolicy';
import { Section } from '../components/UI/Section';

export const PrivacyPage: React.FC = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="min-h-screen bg-slate-950">
      <Navbar />
      <main className="pt-32">
        <Section title="Política de Privacidade" subtitle="Transparência e segurança no tratamento do seu core de dados.">
          <div className="max-w-4xl mx-auto bg-slate-900/40 border border-slate-800 p-8 md:p-16 rounded-[2rem] shadow-2xl">
            <PrivacyPolicy />
          </div>
        </Section>
      </main>
      <Footer onOpenTerms={() => {}} onOpenPrivacy={() => {}} />
    </div>
  );
};
