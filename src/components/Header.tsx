import whiteLogo from "../assets/logos/logo-white.svg";

function Header() {
  return (
    <header className="flex justify-between mb-12 font-semibold text-sm">
      <img
        src={whiteLogo}
        className="h-8 w-8"
      />
    </header>
  );
}

export default Header;
