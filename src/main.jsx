import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { Product } from "./component/Product-page/Product.jsx";
import { ProductCart } from "./component/Product-page/ProductCart.jsx";
import { CheckOut } from "./component/Product-page/CheckOut.jsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Product />,
  },
  {
    path: "/productCart",
    element: <ProductCart />,
  },
  {
    path: "/checkOut",
    element: <CheckOut />,
  }
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
