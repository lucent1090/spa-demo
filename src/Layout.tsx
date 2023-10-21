import { Outlet } from "react-router-dom";

function Layout() {
  return (
    <>
      <div>{/** TODO: Add global loader */}</div>

      <Outlet />
    </>
  );
}

export default Layout;
