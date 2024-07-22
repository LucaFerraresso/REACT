import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import ErrorPage from "./pages/ErrorPage.jsx";
import DefaultLayout from "./layout/DefaultLayout.jsx";

import { createBrowserRouter, RouterProvider } from "react-router-dom";

const router = createBrowserRouter([
  {
    path: "/",
    element: <DefaultLayout />,
    errorElement: <ErrorPage />,
    children: [
      {
        path: "/",
        element: <App />,
      },
      {
        path: "About",
        element: <>ciao sono about</>,
      },
      {
        path: "Services",
        element: <>ciao sono services</>,
      },
      {
        path: "Contact",
        element: <>ciao sono contacts</>,
      },
      {
        path: "Privacy",
        element: <>ciao sono pricavy</>,
      },
      {
        path: "Terms",
        element: <>ciao sono terms</>,
      },
      {
        path: "shop",
        element: <>ciao sono shop</>,
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
