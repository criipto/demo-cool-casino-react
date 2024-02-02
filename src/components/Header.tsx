import { useNavigate } from 'react-router-dom';
import logo from '/casino-logo.svg';

interface HeaderProps {
  firstName: string;
  logout: () => void;
}

export default function Header({ firstName, logout }: HeaderProps) {
  const navigate = useNavigate();
  const handleLogin = () => navigate('/login');
  return (
    <header className="bg-primary25 flex flex-row justify-between py-2.5 px-4 mt-3">
      <img src={logo} />
      {firstName ? (
        <div className="flex flex-row items-center text-sm font-medium text-primary600">
          <img
            src="log-out.png"
            className="h-4 mx-3.5 hover:scale-125 active:scale-125 transition-transform duration-300"
            onClick={() => logout()}
          />
          <div className="flex flex-row ml-3.5">
            <p className="pr-1.5 font-semibold">{firstName}</p>
            <img
              src="user-icon.png"
              className="h-5"
            />
          </div>
        </div>
      ) : (
        <div className="flex flex-row items-center">
          <button
            onClick={() => handleLogin()}
            className="text-sm font-medium text-primary600 h-8 w-[71px] bg-primary flex items-center justify-center border-2 border-primary600/[.4] hover:bg-primary600 hover:text-primary25 transition-background duration-300"
          >
            Log In
          </button>
        </div>
      )}
    </header>
  );
}
