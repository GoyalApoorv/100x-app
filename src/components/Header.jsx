import Logo from "../assets/100x-logo.svg";

function Header() {
  return (
    <header className=" flex w-full  items-center justify-center px-3 py-4">
      <img src={Logo} alt="100x-logo" />
    </header>
  );
}

export default Header;
