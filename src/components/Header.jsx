// import { Link } from "react-router-dom";

// const Header = () => {
//   return (
//     <header className="mx-auto max-w-6xl px-8 py-2 ">
//       <ul className="flex flex-row gap-5 justify-center lg:justify-end">
//         <li>
//           <Link
//             to="/login"
//             className="text-gray-900 dark:text-gray-300 hover:text-blue-500 dark:hover:text-blue-400 transition-colors"
//           >
//             Sign in/ Guest
//           </Link>
//         </li>
//         <li>
//           <Link
//             to="/register"
//             className="text-gray-900 dark:text-gray-300 hover:text-blue-500 dark:hover:text-blue-400 transition-colors"
//           >
//             Create Account
//           </Link>
//         </li>
//       </ul>
//     </header>
//   );
// };

// export default Header;

import { Link } from "react-router-dom";

const Header = () => {
  return (
    <header className="dark:bg-gray-900 py-2 text-black dark:text-gray-200 bg-gray-800 text-gray-100">
      <div className="container mx-auto flex justify-center sm:justify-end items-center pr-4">
        {/* USER */}
        {/* LINKS */}
        <div className="flex gap-x-6">
          <Link 
            to="/login" 
            className="text-xs sm:text-sm hover:text-blue-400 dark:hover:text-blue-300 transition-colors"
          >
            Sign in / Guest
          </Link>
          <Link 
            to="/register" 
            className="text-xs sm:text-sm hover:text-blue-400 dark:hover:text-blue-300 transition-colors"
          >
            Create Account
          </Link>
        </div>
      </div>
    </header>
  );
};

export default Header;


