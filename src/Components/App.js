import React, { useEffect, useState } from "react";
import ReactDOM from "react-dom/client";
import Header from "./Header";
import Body from "./Body";

import { createBrowserRouter, RouterProvider, Outlet } from "react-router";
import About from "./About";
import RestaurantInfo from "./RestaurantInfo";
import Marketing from "./Marketing";
import { Suspense } from "react";
import UserContext from "../Utility/UserContext";
import { Provider } from "react-redux";
import appStore from "../Utility/AppStore"; 
import CartComponent from "./Cart";

const App = () => {
  const [userData, setUserData] = useState(null);
  useEffect(() => {
    let data = {
      username: "Charlie",
    };
    setUserData(data.username);
  }, []);

  return (
   <Provider store={appStore}>
    <UserContext.Provider value={{ username: userData, setUserData }}>
      <div id="app">
        <Header></Header>
        <Outlet></Outlet>
      </div>
    </UserContext.Provider>
    </Provider>
   
  );
};
const routerConfig = createBrowserRouter([
  {
    path: "/",
    element: <App></App>,
    children: [
      {
        path: "/",
        element: <Body></Body>,
      },
      {
        path: "about",
        element: <About></About>,
        children: [
          {
            path: "marketing",
            element: <Marketing></Marketing>,
          },
        ],
      },
      {
        path: "restaurant/:resId",
        element: (
          <Suspense fallback={<h1>Loading</h1>}>
            <RestaurantInfo></RestaurantInfo>
          </Suspense>
        ),
      },
      {
        path: "cart",
        element: <CartComponent></CartComponent>,
      }
    ],
  },
]);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<RouterProvider router={routerConfig}></RouterProvider>);
