import { useNavigate } from 'react-router-dom';

function Home() {
  const navigate = useNavigate();
  const handleLogin = () => navigate('/login');

  return (
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
        onClick={() => handleLogin()}
        className="uppercase text-sm font-medium h-8 w-[142px] bg-primary600 flex items-center justify-center hover:bg-primary800 active:bg-primary800 transition-background duration-300"
      >
        Log in
      </button>
    </section>
  );
}

export default Home;
