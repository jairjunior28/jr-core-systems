
import React, { useState, useEffect } from 'react';
import { Home } from './pages/Home';
import { PrivacyPage } from './pages/PrivacyPage';
import { DeleteAccountPage } from './pages/DeleteAccountPage';

/**
 * Roteador customizado baseado em Hash (#) para evitar erros 404 no Vercel.
 */
const App: React.FC = () => {
  const [hash, setHash] = useState(window.location.hash);

  useEffect(() => {
    const handleHashChange = () => {
      setHash(window.location.hash);
      // Rola para o topo quando a rota muda
      window.scrollTo(0, 0);
    };

    window.addEventListener('hashchange', handleHashChange);
    return () => {
      window.removeEventListener('hashchange', handleHashChange);
    };
  }, []);

  // Renderiza a página baseada no hash da URL
  const renderRoute = () => {
    switch (hash) {
      case '#/privacy':
        return <PrivacyPage />;
      case '#/delete-account':
        return <DeleteAccountPage />;
      default:
        return <Home />;
    }
  };

  return (
    <div className="app-root">
      {renderRoute()}
    </div>
  );
};

export default App;
