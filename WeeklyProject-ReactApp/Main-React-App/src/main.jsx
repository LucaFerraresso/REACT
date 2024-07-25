import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import ErrorPage from "./pages/ErrorPage.jsx";
import DefaultLayout from "./layout/DefaultLayout.jsx";

import { createBrowserRouter, RouterProvider } from "react-router-dom";
import HomePage from "./pages/HomePage.jsx";
import PageOne from "./pages/PageOne.jsx";
import PageTwo from "./pages/PageTwo.jsx";
import PageThree from "./pages/PageThree.jsx";
import ProductPage from "./pages/ProductPage.jsx";
import ComponentsPage from "./pages/ComponentsPage.jsx";
import Shop from "./pages/Shop.jsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <DefaultLayout />,
    errorElement: <ErrorPage />,
    children: [
      {
        path: "/App",
        element: <App />,
      },
      {
        path: "HomePage",
        element: <HomePage />,
      },
      {
        path: "/pageone",
        element: <PageOne />,
      },
      {
        path: "pagetwo",
        element: <PageTwo />,
      },
      {
        path: "pagethree",
        element: <PageThree />,
      },
      {
        path: "pagefour",
        element: <ComponentsPage />,
      },
      {
        path: "pagefive",
        element: <Shop />,
      },

      {
        path: "products/:id",
        element: <ProductPage />,
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
