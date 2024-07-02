import React, { lazy } from "react";
import About from "../pages/About/About";
import Contact from "../pages/Contact/Contact";
import RestaurantMenu from "../components/RestaurantMenu/RestaurantMenu";

// Chunking, Code Splitting, Lazy Loading, Dynamic Bundling, On Demand Loading for scaling or building your large scale web application.
const Grocery = lazy(() => import("../components/Grocery/Grocery.js"));
const BodyFile = lazy(() => import("../components/BodyFile/BodyFile.js"));
const Cart = lazy(() => import("../components/Cart/Cart.js"));
// Chunking, Code Splitting, Lazy Loading, Dynamic Bundling, On Demand Loading for scaling or building your large scale web application.

const routes = [
  {
    path: "/",
    element: <BodyFile />,
  },
  {
    path: "/about",
    element: <About />,
  },
  {
    path: "/contact",
    element: <Contact />,
  },
  {
    path: "/grocery",
    element: <Grocery />,
  },
  {
    path: "/restaurants/:resId",
    element: <RestaurantMenu />,
  },
  {
    path: "/cart",
    element: <Cart />,
  },
];

export default routes;
