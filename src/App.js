import React, { Suspense, useEffect, useState } from "react";
import ReactDOM from "react-dom/client";
import Header from "./components/header/Header.js";
import Error from "./components/Error/Error";
import { createBrowserRouter, RouterProvider, Outlet } from "react-router-dom";
import routes from "./routes/routes.js";
import UserContext from "./utils/UserContext.js";
import { Provider } from "react-redux";
import store from "./store/store.js";

const AppLayout = () => {
  const [userNmae, setUserName] = useState();

  useEffect(() => {
    setUserName("Ronak Amin");
  }, []);

  return (
    <Provider store={store}>
      <UserContext.Provider value={{ loggedInUser: userNmae, setUserName }}>
        <div className="app">
          <Header />
          <Suspense fallback={<h6>Loading...</h6>}>
            <Outlet />
          </Suspense>
        </div>
      </UserContext.Provider>
    </Provider>
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
