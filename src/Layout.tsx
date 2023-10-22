import { Outlet, useFetchers, useNavigation } from "react-router-dom";

function Layout() {
  const navigation = useNavigation();
  const fetchers = useFetchers();
  const fetcherInProgress = fetchers.some((f) =>
    ["loading", "submitting"].includes(f.state)
  );

  const isLoading = navigation.state !== "idle" || fetcherInProgress;

  return (
    <>
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
