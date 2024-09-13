import { createBrowserRouter, RouterProvider } from "react-router-dom";
import {
  Checkout,
  ErrorPage,
  HomeLayout,
  LandingPage,
  SingleProduct,
  About,
  Cart,
  Products,
  Orders,
  Login,
  Register,
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
        path: "checkout",
        element: <Checkout />,
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
      {
        path: "orders",
        element: <Orders />,
        errorElement: <ErrorElement />,
      },
    ],
  },
  {
    path: "/login",
    element: <Login />,
    errorElement: <ErrorPage />,
  },
  {
    path: "/register",
    element: <Register />,
    errorElement: <ErrorPage />,
  },
]);

/*
import {createRouterFromElements, Route}
const router = createBrowserRouter(
  createRoutesFromElements(
    <>
    <Route path="/" element={<HomeLayout/>} errorElement={<ErrorPage/>}>
        <Route></Route>
    </Route>
    <Route path="/login"></Route>
    <Route path="/register"></Route>
    </>
  )
)
*/

const App = () => {
  return <RouterProvider router={router} />;
};

export default App;
