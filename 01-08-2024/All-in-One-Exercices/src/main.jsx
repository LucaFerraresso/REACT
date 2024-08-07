import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
//default setup
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import ErrorPage from "./pages/ErrorPage.jsx";
import DefaultLayout from "./pages/DefaultLayout.jsx";
import HomePage from "./pages/HomePage.jsx";
//components/pages
import AdviceApp from "./pages/AdviceGenerator.jsx";
import AgeCalculator from "./pages/AgeCalculator.jsx";
import ContactForm from "./pages/ContactForm.jsx";
import MortgageCalculator from "./pages/MortgageCalculator.jsx";
import FakeEcommerce from "./pages/FakeEcommerce.jsx";
import ProductPage from "./pages/ProductPage.jsx";
import Cart from "./pages/Cart.jsx";
import InteractiveForm from "./pages/InteractiveCardForm.jsx";
//provider
import { CartProvider } from "./useContext/CartContext.jsx";
//toast library
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
      {
        path: "/exercise/interactivecardform",
        element: <InteractiveForm />,
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
