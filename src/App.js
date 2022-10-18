import { createBrowserRouter, RouterProvider } from "react-router-dom";
import "./App.css";
import About from "./components/About/About";
import Home from "./components/Home/Home";
import Inventory from "./components/Inventory/Inventory";
import Login from "./components/Login/Login";
import NotFound from "./components/NotFound/NotFound";
import Orders from "./components/Orders/Orders";
import Products from "./components/Products/Products";
import Shipping from "./components/Shipping/Shipping";
import Shop from "./components/Shop/Shop";
import SignUp from "./components/SignUp/SignUp";
import Main from "./layout/Main";
import { productsAndCartLoader } from "./Loaders/productsAndCarLoaders";
import PrivateRoute from "./routes/PrivateRoute";

function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Main />,
      errorElement:<NotFound/>,
      children: [
        { path: "/", element: <Home /> },
        { path: "/home", element: <Home /> },
        {
          path: "/shop",
          loader: () => fetch("products.json"),
          // loader: productsAndCartLoader,
          element: <Shop />,
        },
        {
          path: "/products",
          element: <Products />,
        },
        {
          path: "/orders",
          // loader: () => fetch("products.json"),
          loader: productsAndCartLoader,
          element: <Orders />,
        },
        {
          path: "/shipping",
          element: <PrivateRoute><Shipping /></PrivateRoute>,
        },
        {
          path: "/about",
          element: <About />,
        },
        {
          path: "/inventory",
          element: <PrivateRoute><Inventory/></PrivateRoute>,
        },
        {
          path: "/login",
          element: <Login />,
        },
        {
          path: "/signup",
          element: <SignUp />,
        },
      ],
    },
  ]);

  return (
    <>
      <RouterProvider router={router} />
    </>
  );
}

export default App;
