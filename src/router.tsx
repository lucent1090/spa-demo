import { createBrowserRouter } from "react-router-dom";

import Layout from "./page/Layout";
import Error from "./page/Error";
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
        lazy: async () => {
          const HomeComp = await import("./page/Home");
          return { Component: HomeComp.default };
        },
        loader: homeLoader,
      },
      {
        path: "users",
        lazy: async () => {
          const UserComp = await import("./page/Users");
          return { Component: UserComp.default };
        },
        loader: usersLoader,
      },
      {
        path: "users/:id",
        lazy: async () => {
          const UserDetailComp = await import("./page/UserDetail");
          return { Component: UserDetailComp.default };
        },
        loader: userDetailLoader,
      },
    ],
  },
]);

export default router;
