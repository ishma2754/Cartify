import { useState } from "react";
import { NavLinks } from "./index";
import ToggleTheme from "./ToggleTheme";
import { FaShoppingCart} from "react-icons/fa";
import { RxHamburgerMenu } from "react-icons/rx";
import { MdCancel } from "react-icons/md";
import { Link, NavLink } from "react-router-dom";
import { useSelector} from "react-redux";

const Navbar = () => {
  const [dropdown, setDropdown] = useState(false);

  const toggleDropdown = () => {
    setDropdown((prev) => !prev);
  };

  const numItemsInCart = useSelector((state) => state.cart.numItemsInCart);

  return (
    <nav className="w-full bg-blue-100 dark:bg-gray-800 border border-gray-200 dark:border-gray-200 dark:text-gray-100">
      <div className="align-element py-4 flex flex-row items-center justify-between">
        <div className="relative">
          <Link to="/">
            <button className="hidden lg:flex px-5 py-3 rounded-md bg-pink-500 text-white font-bold">
              C
            </button>
          </Link>

          {dropdown ? (
            <MdCancel
              className="lg:hidden h-6 w-6 cursor-pointer text-gray-700 dark:text-gray-100"
              onClick={toggleDropdown}
            />
          ) : (
            <RxHamburgerMenu
              className="lg:hidden h-6 w-6 cursor-pointer text-gray-700 dark:text-white"
              onClick={toggleDropdown}
            />
          )}

          {dropdown && (
            <div className="absolute top-14 left-0 bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-200 rounded-md shadow-lg w-48 z-10 ">
              <NavLinks className="flex flex-col p-7" />
            </div>
          )}
        </div>

        <div className="hidden lg:flex">
          <NavLinks />
        </div>

        <div className="flex flex-row gap-4 items-center">
          <ToggleTheme />

          <NavLink
            to="/cart"
            className="inline-flex items-center justify-center w-12 h-12 bg-transparent border border-transparent rounded-full text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700 ml-4"
          >
            <div className="relative">
              <FaShoppingCart className="h-6 w-6 text-gray-700 dark:text-gray-300" />
              <span className="absolute top-0 right-0 flex items-center justify-center w-5 h-5 bg-pink-500 text-white text-xs font-semibold rounded-full -translate-x-1/2 -translate-y-1/2">
                {numItemsInCart}
              </span>
            </div>
          </NavLink>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
