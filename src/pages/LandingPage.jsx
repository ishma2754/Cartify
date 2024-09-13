import { HomeCarousel, PopularProducts } from "../components/index";

const LandingPage = () => {
  return (
    <div className="h-screen flex flex-col">
      <div className="flex-1 h-1/2">
        <HomeCarousel />
      </div>
      <div className="flex-1 mt-10">
        <PopularProducts />
      </div>
    </div>
  );
};

export default LandingPage;
