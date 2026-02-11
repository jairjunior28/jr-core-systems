
import React, { useState } from 'react';
import { Navbar } from './components/Layout/Navbar';
import { Hero } from './components/Sections/Hero';
import { About } from './components/Sections/About';
import { Products } from './components/Sections/Products';
import { Contact } from './components/Sections/Contact';
import { Footer } from './components/Layout/Footer';
import { Modal } from './components/UI/Modal';
import { TermsOfUse } from './components/Legal/TermsOfUse';
import { PrivacyPolicy } from './components/Legal/PrivacyPolicy';

const App: React.FC = () => {
  const [modalContent, setModalContent] = useState<'terms' | 'privacy' | null>(null);

  const openTerms = () => setModalContent('terms');
  const openPrivacy = () => setModalContent('privacy');
  const closeModal = () => setModalContent(null);

  return (
    <div className="min-h-screen bg-slate-950 selection:bg-blue-500/30 selection:text-blue-200">
      <Navbar />
      
      <main>
        <Hero />
        <About />
        <Products />
        <Contact />
      </main>

      <Footer onOpenTerms={openTerms} onOpenPrivacy={openPrivacy} />

      {/* Floating CTA for Mobile only */}
      <div className="md:hidden fixed bottom-6 right-6 z-40">
        <button 
          onClick={() => document.getElementById('contact')?.scrollIntoView()}
          className="bg-blue-600 text-white p-4 rounded-full shadow-2xl shadow-blue-500/40 hover:scale-110 transition-transform active:scale-95"
        >
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
          </svg>
        </button>
      </div>

      {/* Legal Modals */}
      <Modal 
        isOpen={modalContent === 'terms'} 
        onClose={closeModal} 
        title="Termos de Uso"
      >
        <TermsOfUse />
      </Modal>

      <Modal 
        isOpen={modalContent === 'privacy'} 
        onClose={closeModal} 
        title="Política de Privacidade"
      >
        <PrivacyPolicy />
      </Modal>
    </div>
  );
};

export default App;
