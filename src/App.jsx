import { createBrowserRouter, RouterProvider } from "react-router-dom";
import {
  ErrorPage,
  HomeLayout,
  LandingPage,
  SingleProduct,
  About,
  Cart,
  Products,
  CategoryPage,
} from "./pages/index";

import { ErrorElement } from "./components/index";

const router = createBrowserRouter([
  {
    path: "/",
    element: <HomeLayout />,
    errorElement: <ErrorPage />,
    children: [
      {
        index: true,
        element: <LandingPage />,
        errorElement: <ErrorElement />,
      },
      {
        path: "about",
        element: <About />,
        errorElement: <ErrorElement />,
      },
      {
        path: "cart",
        element: <Cart />,
        errorElement: <ErrorElement />,
      },
      {
        path: "products",
        element: <Products />,
        errorElement: <ErrorElement />,
      },
      {
        path: "products/:id",
        element: <SingleProduct />,
        errorElement: <ErrorElement />,
      },
      {
        path: ":category",
        element: <CategoryPage />,
        errorElement: <ErrorElement />,
      },
    ],
  },
]);

const App = () => {
  return <RouterProvider router={router} />;
};

export default App;
