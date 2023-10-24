import { useContext } from "react";
import { Outlet, useFetchers, useNavigation, Link } from "react-router-dom";

import { ThemeContext } from "../themeContext";

function Layout() {
  const { themeType, changeTheme } = useContext(ThemeContext);
  const navigation = useNavigation();
  const fetchers = useFetchers();
  const fetcherInProgress = fetchers.some((f) =>
    ["loading", "submitting"].includes(f.state)
  );

  const isLoading = navigation.state !== "idle" || fetcherInProgress;

  const handleThemeChange = () => {
    if (themeType === "light") {
      changeTheme("dark");
    } else {
      changeTheme("light");
    }
  };

  return (
    <>
      <nav>
        <Link to={"/"}>Home</Link>
        <Link to={"/users"}>Users</Link>

        <button onClick={handleThemeChange}>Change Theme</button>
      </nav>

      {isLoading && (
        <div>
          <p>Loading...</p>
        </div>
      )}

      <Outlet />
    </>
  );
}

export default Layout;
