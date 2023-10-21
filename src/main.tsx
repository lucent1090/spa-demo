import React from "react";
import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";

import Layout from "./Layout";
import Error from "./page/Error";
import Home from "./page/Home";
import Users from "./page/Users";
import UserDetail from "./page/UserDetail";
import { loader as homeLoader } from "./loader/home";
import { loader as usersLoader } from "./loader/users";

import "./index.css";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    errorElement: <Error />,
    children: [
      {
        index: true,
        element: <Home />,
        loader: homeLoader,
      },
      {
        path: "users",
        element: <Users />,
        loader: usersLoader,
      },
      {
        path: "users/:id",
        element: <UserDetail />,
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <RouterProvider
      router={router}
      fallbackElement={<p>Performing initial data load</p>}
    />
  </React.StrictMode>
);
