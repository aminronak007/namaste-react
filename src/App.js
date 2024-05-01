import React, { Suspense } from "react";
import ReactDOM from "react-dom/client";
import Header from "./components/header/Header";
import Error from "./components/Error/Error";
import { createBrowserRouter, RouterProvider, Outlet } from "react-router-dom";
import routes from "./routes/routes.js";

const AppLayout = () => {
  return (
    <div className="app">
      <Header />
      <Suspense fallback={<h6>Loading...</h6>}>
        <Outlet />
      </Suspense>
    </div>
  );
};

const router = createBrowserRouter([
  {
    path: "/",
    element: <AppLayout />,
    children: routes,
    errorElement: <Error />,
  },
]);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<RouterProvider router={router} />);
