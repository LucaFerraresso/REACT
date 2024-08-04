import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import ErrorPage from "./pages/ErrorPage.jsx";
import DefaultLayout from "./pages/DefaultLayout.jsx";
import AdviceApp from "./pages/AdviceGenerator.jsx";
import HomePage from "./pages/HomePage.jsx";
import AgeCalculator from "./pages/AgeCalculator.jsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <DefaultLayout />,
    errorElement: <ErrorPage />,
    children: [
      {
        path: "/homepage",
        element: <HomePage />,
      },
      {
        path: "/exercise/advicegenerator",
        element: <AdviceApp />,
      },
      {
        path: "/exercise/agecalculator",
        element: <AgeCalculator />,
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <RouterProvider router={router} />
);
