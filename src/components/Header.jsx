import { Link } from "react-router-dom";
const Header = () => {
  return (
    <div className="mx-auto max-w-6xl px-8 py-2 ">
      <ul className="flex flex-row gap-5 justify-center  lg:justify-end">
        <li>
          <Link to="/login">Sign in/ Guest</Link>
        </li>
        <li>
          <Link to="/register">Create Account</Link>
        </li>
      </ul>
    </div>
  );
};

export default Header;
