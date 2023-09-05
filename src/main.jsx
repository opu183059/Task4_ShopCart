import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Login from "./components/pages/login/Login.jsx";
import HomePage from "./components/pages/home/HomePage.jsx";
import Provider from "./components/provider/Provider.jsx";
import CartPage from "./components/pages/cart/CartPage.jsx";
import Products from "./components/pages/home/Products.jsx";
import AboutUs from "./components/pages/aboutUs/AboutUs.jsx";
import ErrorPage from "./components/pages/errorPage/ErrorPage.jsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App></App>,
    errorElement: <ErrorPage></ErrorPage>,
    children: [
      {
        path: "/",
        element: <HomePage></HomePage>,
      },
      {
        path: "/cart",
        element: <CartPage></CartPage>,
      },
      {
        path: "/product",
        element: <Products></Products>,
      },
      {
        path: "/about",
        element: <AboutUs></AboutUs>,
      },
      {
        path: "/login",
        element: <Login></Login>,
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <Provider>
    <React.StrictMode>
      <RouterProvider router={router} />
    </React.StrictMode>
  </Provider>
);
