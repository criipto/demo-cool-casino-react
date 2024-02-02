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
      <section className="text-white absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[364px] h-[392px] bg-lightBlue900 bg-opacity-40 rounded-lg px-[30px] py-11 flex flex-col items-center text-center justify-between mt-6">
        <Outlet />
      </section>
    </div>
  );
}

export default PageLayout;
