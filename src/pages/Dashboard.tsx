import '@criipto/verify-react/dist/criipto-verify-react.css';
import { useCriiptoVerify } from '@criipto/verify-react';

function Dashboard() {
  const { claims } = useCriiptoVerify();

  // NO BankID: given_name
  // SE BankID: given_name
  // DK MitID: name (full name)

  const userName = claims?.given_name || claims?.name;
  const firstName = (userName as string)?.split(' ')[0];

  return (
    <section className="text-white absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[364px] h-[458px] bg-lightBlue900 bg-opacity-40 px-[30px] py-12 flex flex-col items-center text-center justify-between">
      <img
        src="check.png"
        className="h-12 pb-5"
      />
      <div>
        {userName ? <p className="text-4xl pb-2">Hi {firstName}!</p> : <p className="text-4xl pb-2">Hi!</p>}
        <p className="text-xl">You just earned 100 high performer playing credits!</p>
      </div>
      <div className="flex flex-col gap-3">
        <button className="uppercase text-sm font-medium h-8 w-[260px] bg-primary600 flex items-center justify-center  hover:bg-primary800 transition-background duration-300">
          <img
            src="dice-outline.png"
            className="h-5 mr-2.5"
          />
          Use my 100 credits
        </button>
        <button className="uppercase text-sm font-medium h-8 w-[260px] flex items-center justify-center border border-lightBlue25 hover:bg-lightBlue900 transition-background duration-300">Check your earnings</button>
        <button className="uppercase text-sm font-medium h-8 w-[260px] flex items-center justify-center border border-lightBlue25 hover:bg-lightBlue900 transition-background duration-300">Invite friends</button>
      </div>
    </section>
  );
}

export default Dashboard;
