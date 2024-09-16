import { Header, Navbar } from "../components/index";
import { Outlet } from "react-router-dom";
const HomeLayout = () => {
  return (
    <div className="dark:bg-gray-900 min-h-screen">
      <Header />
      <Navbar />
      <section className="align-element py-20">
        <Outlet/>
      </section>
    </div>
  );
};

export default HomeLayout;
