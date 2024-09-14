import { NavLink } from "react-router-dom";

const navlinks = [
  { id: 1, path: "/", title: "Home" },
  { id: 2, path: "about", title: "About" },
  { id: 3, path: "products", title: "Products" },
  { id: 4, path: "cart", title: "Cart" },
  { id: 5, path: "checkout", title: "Checkout" },
  { id: 6, path: "orders", title: "Orders" },
];

const NavLinks = ({ className }) => {
  return (
    <ul className={`flex flex-col lg:flex-row gap-6 ${className}`}>
      {navlinks.map(({ id, path, title }) => (
        <li key={id}>
          <NavLink
            to={path}
            className={({ isActive }) =>
              `block px-4 py-2 rounded-md transition-colors 
              ${isActive ? "bg-pink-500 text-white font-bold" : "text-gray-700 dark:text-gray-100"}
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
