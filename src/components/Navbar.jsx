import { useState } from "react";
import { NavLinks } from "./index";
import { FaShoppingCart } from "react-icons/fa";
import { FaMoon } from "react-icons/fa";
import { RxHamburgerMenu } from "react-icons/rx";
import { MdCancel } from "react-icons/md";
import { Link } from "react-router-dom";

const Navbar = () => {
  const [dropdown, setDropdown] = useState(false);

  const toggleDropdown = () => {
    setDropdown((prev) => !prev);
  };

  return (
    <nav className="w-full dark:bg-gray-900 border-b border-gray-200 dark:border-gray-600">
      <div className="align-element py-4 flex flex-row items-center justify-between">
        <div className="relative">
          <Link to="/">
            <button className="hidden lg:flex px-5 py-3 rounded-md bg-pink-500 font-bold">
              C
            </button>
          </Link>

          {dropdown ? (
            <MdCancel
              className="lg:hidden h-6 w-6 cursor-pointer"
              onClick={toggleDropdown}
            />
          ) : (
            <RxHamburgerMenu
              className="lg:hidden h-6 w-6 cursor-pointer"
              onClick={toggleDropdown}
            />
          )}

          {dropdown && (
            <div className="absolute top-12 left-0 bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-600 rounded-md shadow-lg w-48">
              <NavLinks className="flex flex-col p-7" />
            </div>
          )}
        </div>

        <div className="hidden lg:flex">
          <NavLinks />
        </div>

        <div className="flex flex-row gap-4 items-center">
          <FaMoon className="h-5 w-5" />
          <FaShoppingCart className="h-6 w-6" />
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
