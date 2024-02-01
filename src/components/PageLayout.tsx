import { Outlet } from 'react-router';
import Header from '../components/Header';
import Navbar from '../components/Navbar';
import { useCriiptoVerify } from '@criipto/verify-react';
import '@criipto/verify-react/dist/criipto-verify-react.css';

interface EnvProps {
  onToggleEnv: () => void;
  currentEnvironment: string;
}

function PageLayout({ onToggleEnv, currentEnvironment }: EnvProps) {
  const { claims, logout } = useCriiptoVerify();

  const handleLogout = () => {
    logout({ redirectUri: window.location.origin + '/' });
  };

  const userName = claims?.given_name || claims?.name;
  const firstName = (userName as string)?.split(' ')[0];
  return (
    <div className="bg-hero bg-cover bg-no-repeat bg-center h-screen relative">
      <Header
        firstName={firstName}
        logout={handleLogout}
      />
      <Navbar
        onToggleEnv={onToggleEnv}
        currentEnvironment={currentEnvironment}
      />
      <Outlet />
    </div>
  );
}

export default PageLayout;
