import { createContext, useState } from "react";

export type ThemeType = "light" | "dark";

export interface ThemeChanger {
  themeType: ThemeType;
  changeTheme: (v: ThemeType) => void;
}

export const ThemeContext = createContext<ThemeChanger>({
  themeType: "light",
  changeTheme: () => {},
});

function ThemeContextProvider({ children }: { children?: React.ReactNode }) {
  const [theme, setTheme] = useState<ThemeType>("light");

  const changeTheme = (value: ThemeType) =>
    value === "light" ? setTheme("light") : setTheme("dark");

  return (
    <ThemeContext.Provider value={{ themeType: theme, changeTheme }}>
      {children}
    </ThemeContext.Provider>
  );
}

export default ThemeContextProvider;
