import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";

import { createBrowserRouter, RouterProvider } from "react-router-dom";
import DefaultLayout from "./layout/DefaultLayout.jsx";
import ErrorPage from "./pages/ErrorPage.jsx";
import About from "./pages/About.jsx";
import Services from "./pages/Services.jsx";
import Contacts from "./pages/Contacts.jsx";
import Privacy from "./pages/Privacy.jsx";
import Terms from "./pages/Terms.jsx";

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
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
