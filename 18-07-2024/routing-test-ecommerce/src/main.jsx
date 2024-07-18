import "./index.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import ErrorPage from "./pages/ErrorPage.jsx";
import About from "./pages/About.jsx";
import Contacts from "./pages/Contacts.jsx";
import Services from "./pages/Services.jsx";
import Privacy from "./pages/Privacy.jsx";
import Terms from "./pages/Terms.jsx";
import DefaultLayout from "./pages/DefaultLayout.jsx";
import Shop from "./pages/Shop.jsx";
import ProductPage from "./pages/ProductPage.jsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <DefaultLayout />,
    errorElement: <ErrorPage />,
    children: [
      {
        path: "/",
        element: <App />,
        errorElement: <ErrorPage />,
      },
      {
        path: "About",
        element: <About />,
      },
      {
        path: "Services",
        element: <Services />,
      },
      {
        path: "Contact",
        element: <Contacts />,
      },
      {
        path: "Privacy",
        element: <Privacy />,
      },
      {
        path: "Terms",
        element: <Terms />,
      },
      {
        path: "Shop",
        element: <Shop />,
      },
      {
        path: "product/:id",
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
