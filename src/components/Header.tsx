import logo from '/casino-logo.svg';

export default function Header() {
  return (
    <header className="bg-primary25 flex flex-row justify-between py-2.5 px-4 mt-3">
      <img src={logo} />
      <div className="flex flex-row items-center">
        <button className="text-sm font-medium text-primary600 h-8 w-[71px] bg-primary flex items-center justify-center border-2 border-primary600/[.4]">Log In</button>
      </div>
    </header>
  );
}
