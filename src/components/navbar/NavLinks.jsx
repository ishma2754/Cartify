import { NavLink } from "react-router-dom";
import { navlinks } from "../../constants/links";

const NavLinks = ({ className }) => {
  return (
    <ul className={`flex gap-6 ${className}`}>
      {navlinks.map(({ id, path, title }) => (
        <li key={id}>
          <NavLink
            to={path}
            className={({ isActive }) =>
              `block px-4 py-2 rounded-md transition-colors 
              ${
                isActive
                  ? "bg-pink-500 text-white font-bold"
                  : "text-gray-700 dark:text-gray-100"
              }
              hover:bg-gray-700 hover:text-white dark:hover:bg-gray-700`
            }
          >
            {title}
          </NavLink>
        </li>
      ))}
    </ul>
  );
};

export default NavLinks;
