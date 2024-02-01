import { Routes, Route, Navigate } from 'react-router-dom';
import PageLayout from 'components/PageLayout';
import Home from 'pages/Home';
import Dashboard from 'pages/Dashboard';
import Login from 'pages/Login';
import { useCriiptoVerify } from '@criipto/verify-react';
import '@criipto/verify-react/dist/criipto-verify-react.css';
import './App.css';

interface AppProps {
  onToggleEnv: () => void;
  currentEnvironment: string;
}

function App({ onToggleEnv, currentEnvironment }: AppProps) {
  const { claims } = useCriiptoVerify();
  return (
    <Routes>
      {claims ? (
        <>
          <Route
            element={
              <PageLayout
                onToggleEnv={onToggleEnv}
                currentEnvironment={currentEnvironment}
              />
            }
          >
            <Route
              path="/"
              element={<Navigate to="/dashboard" />}
            />
            <Route
              path="/dashboard"
              element={<Dashboard />}
            />
          </Route>
        </>
      ) : (
        <>
          <Route
            element={
              <PageLayout
                onToggleEnv={onToggleEnv}
                currentEnvironment={currentEnvironment}
              />
            }
          >
            <Route
              path="/"
              element={<Home />}
            />
            <Route
              path="/dashboard"
              element={<Navigate to="/" />}
            />
          </Route>
          <Route
            path="/login"
            element={<Login />}
          />
        </>
      )}
    </Routes>
  );
}

export default App;
