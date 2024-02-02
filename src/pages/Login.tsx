import { AuthMethodSelector, useCriiptoVerify } from '@criipto/verify-react';
import '@criipto/verify-react/dist/criipto-verify-react.css';
import 'index.css';

function Home() {
  const { error } = useCriiptoVerify();

  return (
    <div className="bg-hero bg-cover bg-no-repeat bg-center h-screen relative">
      <section className="text-white absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 rounded-lg w-[355px] lg:w-[390px] bg-lightBlue900 bg-opacity-40 pt-12 flex flex-col items-center text-center justify-between">
        <p className="text-2xl font-semibold pb-2">Log in at Cool Casino</p>
        <img
          src="/dice-white.png"
          className="w-16 my-20"
        />
        {error && (
          <>
            <div className="bg-error rounded mt-4 mx-5 pb-[26px] pt-5 w-[342px] py-5 flex flex-col items-start">
              <div className="flex flex-row nowrap px-4">
                <img
                  src="/alert.png"
                  alt="Error icon"
                  className="relative top-0 left-0 h-5 w-5 mr-2"
                />
                <h5 className="font-semibold text-black">There was an error logging in.</h5>
              </div>
              <div className="font-medium mt-2 ml-11">
                <>
                  <p className="text-black">Please try again.</p>
                  {console.log(error.error_description)}
                </>
              </div>
            </div>
          </>
        )}
        <AuthMethodSelector acrValues={['urn:grn:authn:dk:mitid:substantial', 'urn:grn:authn:se:bankid:same-device', 'urn:grn:authn:no:bankid:substantial']} />
      </section>
    </div>
  );
}

export default Home;
