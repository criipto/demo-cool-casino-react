import { Outlet } from 'react-router';
import Header from '../components/Header';
import Navbar from '../components/Navbar';

interface EnvProps {
  onToggleEnv: () => void;
  currentEnvironment: string;
}

function PageLayout({ onToggleEnv, currentEnvironment }: EnvProps) {
  return (
    <div className="bg-hero bg-cover bg-no-repeat bg-center h-screen relative">
      <Header />
      <Navbar
        onToggleEnv={onToggleEnv}
        currentEnvironment={currentEnvironment}
      />
      <Outlet />
    </div>
  );
}

export default PageLayout;
