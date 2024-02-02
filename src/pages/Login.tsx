import { AuthMethodSelector } from '@criipto/verify-react';
import '@criipto/verify-react/dist/criipto-verify-react.css';
import 'index.css';

function Home() {
  return (
    <div className="bg-hero bg-cover bg-no-repeat bg-center h-screen relative">
      <section className="text-white absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[390px] bg-lightBlue900 bg-opacity-40 pt-12 flex flex-col items-center text-center justify-between">
        <p className="text-2xl font-semibold pb-2">Log in at Cool Casino</p>
        <img
          src="/dice-white.png"
          className="w-16 my-20"
        />
        <AuthMethodSelector acrValues={['urn:grn:authn:dk:mitid:substantial', 'urn:grn:authn:se:bankid:same-device', 'urn:grn:authn:no:bankid:substantial']} />
      </section>
    </div>
  );
}

export default Home;
