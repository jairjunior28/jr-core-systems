
import React, { useState, useEffect } from 'react';
import { Home } from './pages/Home';
import { PrivacyPage } from './pages/PrivacyPage';

/**
 * Custom router implementation to avoid dependency issues with react-router-dom.
 * This handles simple path-based navigation for our two pages.
 */
const App: React.FC = () => {
  const [currentPath, setCurrentPath] = useState(window.location.pathname);

  useEffect(() => {
    // Listen for back/forward browser navigation
    const handlePopState = () => {
      setCurrentPath(window.location.pathname);
    };

    window.addEventListener('popstate', handlePopState);
    return () => {
      window.removeEventListener('popstate', handlePopState);
    };
  }, []);

  // Simple route matcher: Anything that isn't /privacy defaults to Home (including catch-all behavior)
  const renderRoute = () => {
    if (currentPath === '/privacy') {
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
