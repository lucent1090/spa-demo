import { createBrowserRouter } from "react-router-dom";

import Layout from "./page/Layout";
import Error from "./page/Error";
import Home from "./page/Home";
import Users from "./page/Users";
import UserDetail from "./page/UserDetail";
import { loader as homeLoader } from "./loader/home";
import { loader as usersLoader } from "./loader/users";
import { loader as userDetailLoader } from "./loader/userDetail";

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
        loader: userDetailLoader,
      },
    ],
  },
]);

export default router;
