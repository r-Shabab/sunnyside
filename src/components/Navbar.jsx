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
          <ul
            className={`${isNavbarOpen ? "block" : "hidden"}Nav-items flex flex-col items-center justify-center font-semibold md:flex-row md:space-x-8`}
          >
            <li>
              <a
                href="#"
                className="block px-3 py-2 font-barlow text-white decoration-2 underline-offset-4 hover:font-bold hover:text-gray-100 hover:underline"
              >
                About
              </a>
            </li>
            <li>
              <a
                href="#"
                className="block px-3 py-2 font-barlow text-white decoration-2 underline-offset-4 hover:font-bold hover:text-gray-100 hover:underline"
              >
                Services
              </a>
            </li>
            <li>
              <a
                href="#"
                className="block px-3 py-2 font-barlow text-white decoration-2 underline-offset-4 hover:font-bold hover:text-gray-100 hover:underline"
              >
                Projects
              </a>
            </li>
            <li>
              <a
                href="#"
                className="hover:bg-navHoverBlue block rounded px-3 py-3 font-fraunces text-sm text-white transition hover:text-white hover:shadow-sm hover:duration-300 md:rounded-full md:bg-white md:px-5 md:text-black"
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
