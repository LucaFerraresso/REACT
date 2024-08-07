import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import ErrorPage from "./pages/ErrorPage.jsx";
import DefaultLayout from "./pages/DefaultLayout.jsx";
import AdviceApp from "./pages/AdviceGenerator.jsx";
import HomePage from "./pages/HomePage.jsx";
import AgeCalculator from "./pages/AgeCalculator.jsx";
import ContactForm from "./pages/ContactForm.jsx";
import MortgageCalculator from "./pages/MortgageCalculator.jsx";
import FakeEcommerce from "./pages/FakeEcommerce.jsx";
import ProductPage from "./pages/ProductPage.jsx";
import Cart from "./pages/Cart.jsx";
import { CartProvider } from "./useContext/CartContext.jsx";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

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
      {
        path: "/exercise/contactform",
        element: <ContactForm />,
      },
      {
        path: "/exercise/mortgagecalculator",
        element: <MortgageCalculator />,
      },
      {
        path: "/exercise/fakeecommerce",
        element: <FakeEcommerce />,
      },
      {
        path: "/exercise/fakeecommerce/:id",
        element: <ProductPage />,
      },
      {
        path: "/exercise/fakeecommerce/cart",
        element: <Cart />,
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <>
    <CartProvider>
      <RouterProvider router={router} />
      <ToastContainer />
    </CartProvider>
  </>
);
