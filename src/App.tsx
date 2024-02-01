import { Routes, Route } from 'react-router-dom';
import Home from 'pages/Home';
import Dashboard from 'pages/Dashboard';
import Login from 'pages/Login';
import './App.css';

interface AppProps {
  onToggleEnv: () => void;
  currentEnvironment: string;
}

function App({ onToggleEnv, currentEnvironment }: AppProps) {
  return (
    <Routes>
      <Route
        path="/"
        element={
          <Home
            onToggleEnv={onToggleEnv}
            currentEnvironment={currentEnvironment}
          />
        }
      />
      <Route
        path="/login"
        element={<Login />}
      />
      <Route
        path="/dashboard"
        element={<Dashboard />}
      />
    </Routes>
  );
}

export default App;
