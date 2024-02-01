import { Routes, Route } from 'react-router-dom';
import PageLayout from 'components/PageLayout';
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
          element={<Dashboard />}
        />
      </Route>
      <Route
        path="/login"
        element={<Login />}
      />
    </Routes>
  );
}

export default App;
