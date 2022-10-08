import { createBrowserRouter, RouterProvider } from "react-router-dom";
import "./App.css";
import About from "./components/About/About";
import FriendDetails from "./components/FriendDetails/FriendDetails";
import Friends from "./components/Friends/Friends";
import Home from "./components/Home/Home";
import NotFound from "./components/NotFound/NotFound";
import Orders from "./components/Orders/Orders";
import Products from "./components/Products/Products";
import Shop from "./components/Shop/Shop";
import Main from "./layout/Main";
import { productsAndCartLoader } from "./Loaders/productsAndCarLoaders";

function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Main />,
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
          path: "/friends",
          loader: async () => {
            return fetch("https://jsonplaceholder.typicode.com/users");
          },
          element: <Friends />,
        },
        {
          path: "/friend/:friendId",
          loader: async ({ params }) => {
            return fetch(
              `https://jsonplaceholder.typicode.com/users/${params.friendId}`
            );
          },
          element: <FriendDetails />,
        },
        {
          path: "/orders",
          // loader: () => fetch("products.json"),
          loader: productsAndCartLoader,
          element: <Orders />,
        },
        {
          path: "/about",
          element: <About />,
        },
      ],
    },
    { path: "*", element: <NotFound /> },
  ]);

  return (
    <>
      <RouterProvider router={router} />
    </>
  );
}

export default App;
