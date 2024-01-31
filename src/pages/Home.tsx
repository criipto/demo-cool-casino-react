import Header from '../components/Header';
import Navbar from '../components/Navbar';
import '@criipto/verify-react/dist/criipto-verify-react.css';
import { useCriiptoVerify } from '@criipto/verify-react';

interface EnvProps {
  onToggleEnv: () => void;
  currentEnvironment: string;
}

function Home({ onToggleEnv, currentEnvironment }: EnvProps) {
  const { loginWithRedirect } = useCriiptoVerify();
  return (
    <div className="bg-hero bg-cover bg-no-repeat bg-center h-screen relative">
      <Header />
      <Navbar
        onToggleEnv={onToggleEnv}
        currentEnvironment={currentEnvironment}
      />
      <section className="text-white absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[364px] h-[392px] bg-lightBlue900 bg-opacity-40 px-[30px] py-11 flex flex-col items-center text-center justify-between">
        <img
          src="/dice-white.png"
          className="w-[60px] mt-2"
        />
        <div>
          <p className="text-xl pb-2">Log in and check if you received</p>
          <p className="font-semibold text-4xl">100 free playing credits</p>
        </div>
        <button
          onClick={() => {
            loginWithRedirect({ acrValues: ['urn:grn:authn:dk:mitid:substantial', 'urn:grn:authn:se:bankid:same-device', 'urn:grn:authn:no:bankid:substantial'] });
          }}
          className="uppercase text-sm font-medium h-8 w-[142px] bg-primary600 flex items-center justify-center"
        >
          Log in
        </button>
      </section>
    </div>
  );
}

export default Home;
