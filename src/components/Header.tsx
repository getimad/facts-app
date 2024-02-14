import whiteLogo from "../assets/logos/logo-white.svg";

interface Props {
  setIsFactShareOpen: (isOpen: boolean) => void;
}

function Header({ setIsFactShareOpen }: Props) {
  return (
    <header
      className="
        flex
        justify-between
        font-pr
        mb-12
      ">
      <img
        src={whiteLogo}
        className="
          h-8
          w-8 
        " />
      <button
        className="
          px-5
          border-white
          border-2
          rounded-full
          duration-300
          capitalize
          hover:border-green-400
          hover:text-green-400"
        onClick={() => setIsFactShareOpen(true)}>
        share a fact
      </button>
    </header>
  );
}

export default Header;
