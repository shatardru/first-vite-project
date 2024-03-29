import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Home from "./assets/components/home/home";
import About from "./assets/components/about/about";
import Contact from "./assets/components/contact/contact";
import Users from "./assets/components/users/users";
import SingleUserDetails from "./assets/components/users/single-user-details";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
    children: [
      {
        path: "/about",
        element: <About />,
      },
      {
        path: "/contact",
        element: <Contact />,
      },
      {
        path: "/users",
        loader: () => fetch("https://jsonplaceholder.typicode.com/users"),
        element: <Users />,
      },
      {
        path: "/users/:id",
        loader: (params) => {
          console.log(params);
          return fetch(
            `https://jsonplaceholder.typicode.com/users/${params.id}`
          );
        },
        element: <SingleUserDetails />,
      },
    ],
  },
]);
ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
