import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import ErrorPage from "./pages/ErrorPage.jsx";
import DefaultLayout from "./layout/DefaultLayout.jsx";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import HomePage from "./pages/HomePage.jsx";
import PageOne from "./pages/PageOne.jsx";
import ProductPage from "./pages/ProductPage.jsx";
import ComponentsPage from "./pages/ComponentsPage.jsx";
import Shop from "./pages/Shop.jsx";
import ProductProvider from "./providers/ProductContext.jsx";
import FavoriteProvider from "./providers/FavoriteContext.jsx";
import Favorite from "./pages/Favorites.jsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <DefaultLayout />,
    errorElement: <ErrorPage />,
    children: [
      {
        path: "/",
        element: <HomePage />,
      },
      {
        path: "/HomePage",
        element: <HomePage />,
      },
      {
        path: "/Products",
        element: <PageOne />,
      },
      {
        path: "/pagefour",
        element: <ComponentsPage />,
      },
      {
        path: "/Shop",
        element: <Shop />,
      },
      {
        path: "/Favorite",
        element: <Favorite />,
      },

      {
        path: "/products/:id",
        element: <ProductPage />,
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <FavoriteProvider>
      <ProductProvider>
        <RouterProvider router={router} />
      </ProductProvider>
    </FavoriteProvider>
  </React.StrictMode>
);
