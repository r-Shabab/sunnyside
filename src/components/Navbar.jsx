import { useState } from "react";
import logo from "../assets/logo.svg";
useState;
import hamBurger from "../assets/icon-hamburger.svg";
// import { RxHamburgerMenu } from "react-icons/rx";

function Navbar() {
  const [isNavbarOpen, setIsNavbarOpen] = useState(false);

  const handleToggle = () => {
    setIsNavbarOpen(!isNavbarOpen);
  };
  return (
    <nav className="sticky top-0 z-50 bg-navBlue py-2">
      <div className="mx-auto flex max-w-full flex-wrap items-center justify-between p-4 md:px-8">
        <a href="#">
          <img src={logo} alt="" className="" />
        </a>
        <button
          type="button"
          data-collapse-toggle="navbar-default"
          className="inline-flex h-10 w-10 items-center justify-center rounded-lg p-2 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 md:hidden"
          aria-controls="navbar-default"
          aria-expanded="false"
          onClick={handleToggle}
        >
          <span className="sr-only">Open main menu</span>
          <img src={hamBurger} alt="" />
        </button>
        <div
          id="navbar-default"
          className={`${isNavbarOpen ? "block" : "hidden"} w-full md:block md:w-auto`}
        >
          <ul className="absolute z-[-1] mt-8 w-11/12 flex-col justify-center space-y-3 bg-white py-6 font-semibold md:static md:z-auto md:mt-0 md:flex md:w-full md:flex-row md:items-center md:space-x-8 md:space-y-0 md:bg-navBlue md:py-0">
            <div className="triangle absolute -top-4 right-2 -translate-y-1/2 translate-x-1/3 md:hidden"></div>
            <li className="text-center">
              <a
                href="#"
                className="block px-3 py-2 font-barlow text-gray-400 decoration-2 underline-offset-4 hover:font-bold hover:text-gray-100 hover:underline md:text-white"
              >
                About
              </a>
            </li>
            <li className="text-center">
              <a
                href="#"
                className="block px-3 py-2 font-barlow text-gray-400 decoration-2 underline-offset-4 hover:font-bold hover:text-gray-100 hover:underline md:text-white"
              >
                Services
              </a>
            </li>
            <li className="text-center">
              <a
                href="#"
                className="block px-3 py-2 font-barlow text-gray-400 decoration-2 underline-offset-4 hover:font-bold hover:text-gray-100 hover:underline md:text-white"
              >
                Projects
              </a>
            </li>
            <li className="text-center md:bg-transparent">
              <a
                href="#"
                className="inline-block w-5/12 rounded-full bg-softYellow px-3 py-3 font-fraunces text-sm text-black transition hover:bg-navHoverBlue hover:text-white hover:shadow-sm hover:duration-300 md:block md:w-full md:rounded-full md:bg-white md:px-5"
              >
                CONTACT
              </a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
