import { useContext } from "react";
import { Outlet, useFetchers, useNavigation, Link } from "react-router-dom";
import styled from "@emotion/styled";

import Moon from "../asset/moon.svg";
import Sun from "../asset/sun.svg";

import { ThemeContext } from "../themeContext";

const Page = styled.div`
  width: 100dvw;
  height: 100dvh;
  color: ${({ theme }) => theme.colors.primary};
  background-color: ${({ theme }) => theme.colors.background};
`;

const NavBar = styled.nav`
  height: 3rem;
  display: flex;
  justify-content: space-around;
  align-items: center;
`;

const LoadingPage = styled.div`
  width: 100dvw;
  height: 100dvh;
  position: absolute;
  background-color: #000;
  opacity: 0.5;
`;

const Spinner = styled.span`
  border-bottom-color: ${({ theme }) => theme.colors.primary};
`;

const Content = styled.div`
  width: 60dvw;
  margin: 0 auto;

  @media screen and (max-width: 820px) {
    width: 80dvw;
  }
`;

function Layout() {
  const { themeType, changeTheme } = useContext(ThemeContext);
  const navigation = useNavigation();
  const fetchers = useFetchers();
  const fetcherInProgress = fetchers.some((f) =>
    ["loading", "submitting"].includes(f.state)
  );

  const isLoading = navigation.state !== "idle" || fetcherInProgress;
  const isLightMode = themeType === "light";

  const handleThemeChange = () =>
    themeType === "light" ? changeTheme("dark") : changeTheme("light");

  return (
    <Page>
      <NavBar>
        <Link to={"/"}>Home</Link>
        <Link to={"/users"}>Users</Link>

        <button onClick={handleThemeChange}>
          {isLightMode ? (
            <img src={Sun} width="20" height="20" />
          ) : (
            <img src={Moon} width="20" height="20" />
          )}
        </button>
      </NavBar>

      {isLoading && (
        <LoadingPage>
          <Spinner className="spinner" />
        </LoadingPage>
      )}

      <Content>
        <Outlet />
      </Content>
    </Page>
  );
}

export default Layout;
