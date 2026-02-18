
import React, { useState, useEffect } from 'react';
import { Home } from './pages/Home';
import { PrivacyPage } from './pages/PrivacyPage';

/**
 * Roteador customizado baseado em Hash (#) para evitar erros 404 no Vercel.
 * Links funcionarão como #/privacy.
 */
const App: React.FC = () => {
  const [hash, setHash] = useState(window.location.hash);

  useEffect(() => {
    const handleHashChange = () => {
      setHash(window.location.hash);
      // Rola para o topo quando a rota muda
      if (window.location.hash.startsWith('#/')) {
        window.scrollTo(0, 0);
      }
    };

    window.addEventListener('hashchange', handleHashChange);
    return () => {
      window.removeEventListener('hashchange', handleHashChange);
    };
  }, []);

  // Renderiza a página baseada no hash da URL
  const renderRoute = () => {
    if (hash === '#/privacy') {
      return <PrivacyPage />;
    }
    return <Home />;
  };

  return (
    <div className="app-root">
      {renderRoute()}
    </div>
  );
};

export default App;
