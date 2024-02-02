import React, { useState } from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter, useSearchParams } from 'react-router-dom';
import App from './App.tsx';
import './index.css';
import '@fontsource/ibm-plex-sans';
import { CriiptoVerifyProvider } from '@criipto/verify-react';

function CriiptoVerifyProviderWrapper() {
  const [searchParams, setSearchParams] = useSearchParams();
  const [environment, setEnvironment] = useState(searchParams.get('environment') ?? 'test');

  const domain = environment === 'test' ? 'demos-test.criipto.id' : 'demos.criipto.id';

  const handleToggleEnv = () => {
    setSearchParams((params) => {
      const newEnvironment = params.get('environment') === 'test' ? 'production' : 'test';
      params.set('environment', newEnvironment);
      setEnvironment(newEnvironment);
      return params;
    });
  };

  return (
    <CriiptoVerifyProvider
      domain={domain}
      clientID="urn:demos:cool-casino-react"
      redirectUri={window.location.origin}
      sessionStore={window.sessionStorage}
      message="Log in to Cool Casino"
    >
      <App
        onToggleEnv={handleToggleEnv}
        currentEnvironment={environment}
      />
    </CriiptoVerifyProvider>
  );
}

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <BrowserRouter>
      <CriiptoVerifyProviderWrapper />
    </BrowserRouter>
  </React.StrictMode>
);
