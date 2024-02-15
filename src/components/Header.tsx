import whiteLogo from "../assets/logos/logo-white.svg";

function Header() {
  return (
    <header className="flex justify-center mb-12 font-semibold text-sm relative">
      <img
        src={whiteLogo}
        className="h-8 w-8"
      />
      <div className="bg-white blur-2xl hover:blur-xl duration-300 w-8 h-8 rounded-full absolute"></div>
    </header>
  );
}

export default Header;
