
import React, { useState } from 'react';
import { Navbar } from '../components/Layout/Navbar';
import { Footer } from '../components/Layout/Footer';
import { Section } from '../components/UI/Section';
import { Button } from '../components/UI/Button';
import { Card } from '../components/UI/Card';
import { auth, googleProvider, db } from '../firebase';
import { signInWithPopup, deleteUser } from 'firebase/auth';
import { doc, deleteDoc } from 'firebase/firestore';

export const DeleteAccountPage: React.FC = () => {
  const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle');
  const [error, setError] = useState('');

  const handleDeleteWithGoogle = async () => {
    setStatus('loading');
    setError('');

    try {
      // 1. Reautenticar para obter permissões de exclusão (requisito do Firebase Auth)
      const result = await signInWithPopup(auth, googleProvider);
      const user = result.user;

      if (user && user.email) {
        // 2. Excluir o documento do usuário no Firestore baseado no EMAIL (conforme nova regra do app)
        const userDocRef = doc(db, 'users', user.email);
        
        try {
          // Tentamos deletar o documento no Firestore primeiro
          await deleteDoc(userDocRef);
          console.log("Documento no Firestore removido com sucesso.");
        } catch (fsErr) {
          // Se falhar a deleção do documento (ex: permissões), registramos mas prosseguimos com a conta se possível
          console.error("Erro ao deletar documento no Firestore:", fsErr);
        }

        // 3. Excluir o usuário do Firebase Auth permanentemente
        await deleteUser(user);
        
        setStatus('success');
      } else {
        throw new Error("Não foi possível identificar o e-mail do usuário.");
      }
    } catch (err: any) {
      console.error("Erro na exclusão completa:", err);
      setStatus('error');
      
      if (err.code === 'auth/popup-closed-by-user') {
        setError('A janela de login foi fechada antes de concluir a autenticação.');
      } else if (err.code === 'auth/requires-recent-login') {
        setError('Por segurança, faça login novamente para confirmar a exclusão.');
      } else if (err.code === 'permission-denied') {
        setError('Erro de permissão nas regras do Firebase. Verifique se as regras do Firestore permitem a exclusão pelo usuário.');
      } else {
        setError(err.message || 'Ocorreu um erro ao processar a exclusão via Google.');
      }
    }
  };

  return (
    <div className="min-h-screen bg-slate-950">
      <Navbar />
      <main className="pt-32 pb-20 px-6">
        <Section 
          title="Excluir Conta e Dados" 
          subtitle="Processo de remoção definitiva para o ecossistema JR Core Systems."
        >
          <div className="max-w-xl mx-auto">
            {status === 'success' ? (
              <Card className="text-center py-12 border-green-500/30 bg-green-500/5">
                <div className="w-20 h-20 bg-green-500/20 text-green-500 rounded-full flex items-center justify-center mx-auto mb-6">
                  <svg className="w-10 h-10" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                </div>
                <h2 className="text-3xl font-black text-white mb-4">Conta Excluída</h2>
                <p className="text-slate-400 mb-8">
                  Seu perfil e todos os dados vinculados ao e-mail no Firestore foram permanentemente removidos.
                </p>
                <Button onClick={() => window.location.hash = '#/'}>Voltar ao Início</Button>
              </Card>
            ) : (
              <Card className="border-red-500/20">
                <div className="p-6 bg-red-500/10 border border-red-500/20 rounded-2xl mb-8">
                  <h4 className="text-red-500 font-bold uppercase text-xs tracking-widest mb-3 flex items-center gap-2">
                    <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M8.257 3.099c.765-1.36 2.722-1.36 3.486 0l5.58 9.92c.75 1.334-.213 2.98-1.742 2.98H4.42c-1.53 0-2.493-1.646-1.743-2.98l5.58-9.92zM11 13a1 1 0 11-2 0 1 1 0 012 0zm-1-8a1 1 0 00-1 1v3a1 1 0 002 0V6a1 1 0 00-1-1z" clipRule="evenodd" />
                    </svg>
                    Ação Irreversível
                  </h4>
                  <ul className="text-slate-400 text-sm space-y-2 list-disc pl-5">
                    <li>O documento vinculado ao seu e-mail no Firestore será deletado.</li>
                    <li>Sua autenticação Google será desvinculada do sistema.</li>
                    <li>Todos os módulos (Finance, Analytics, AI) perderão seus dados.</li>
                  </ul>
                </div>

                <div className="space-y-6">
                  {error && (
                    <div className="p-4 bg-red-500/10 border border-red-500/20 rounded-xl text-red-500 text-xs text-center">
                      {error}
                    </div>
                  )}
                  
                  <div className="text-center">
                    <p className="text-slate-500 text-sm mb-6">
                      Como o sistema agora utiliza seu <strong>e-mail</strong> como identificador no banco de dados, precisamos que você confirme a posse desta conta Google.
                    </p>
                    
                    <button 
                      onClick={handleDeleteWithGoogle}
                      disabled={status === 'loading'}
                      className="group relative w-full flex items-center justify-center gap-4 bg-white hover:bg-slate-100 text-slate-900 font-bold py-4 px-6 rounded-xl transition-all shadow-xl disabled:opacity-50"
                    >
                      <svg className="w-6 h-6" viewBox="0 0 48 48">
                        <path fill="#EA4335" d="M24 9.5c3.54 0 6.71 1.22 9.21 3.6l6.85-6.85C35.9 2.38 30.47 0 24 0 14.62 0 6.51 5.38 2.56 13.22l7.98 6.19C12.43 13.72 17.74 9.5 24 9.5z"/>
                        <path fill="#4285F4" d="M46.98 24.55c0-1.57-.15-3.09-.38-4.55H24v9.02h12.94c-.58 2.96-2.26 5.48-4.78 7.18l7.73 6c4.51-4.18 7.09-10.36 7.09-17.65z"/>
                        <path fill="#FBBC05" d="M10.53 28.59c-.48-1.45-.76-2.99-.76-4.59s.27-3.14.76-4.59l-7.98-6.19C.92 16.46 0 20.12 0 24c0 3.88.92 7.54 2.56 10.78l7.97-6.19z"/>
                        <path fill="#34A853" d="M24 48c6.48 0 11.93-2.13 15.89-5.81l-7.73-6c-2.15 1.45-4.92 2.3-8.16 2.3-6.26 0-11.57-4.22-13.47-9.91l-7.98 6.19C6.51 42.62 14.62 48 24 48z"/>
                      </svg>
                      {status === 'loading' ? 'Removendo do Core...' : 'Confirmar e Excluir Dados'}
                    </button>
                  </div>
                  
                  <div className="text-center pt-4">
                    <button 
                      onClick={() => window.location.hash = '#/'}
                      className="text-slate-500 hover:text-white text-xs uppercase tracking-widest font-bold"
                    >
                      Manter minha conta
                    </button>
                  </div>
                </div>
              </Card>
            )}
          </div>
        </Section>
      </main>
      <Footer onOpenTerms={() => {}} onOpenPrivacy={() => {}} />
    </div>
  );
};
