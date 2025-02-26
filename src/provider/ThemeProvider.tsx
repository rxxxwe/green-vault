import { ReactNode, useState } from "react";
import { Theme, ThemeContext } from "../components/Theme/ChangeTheme";
import { changeCssRootVariable } from "../styles/changeCssRootVariables";
import { storage } from "../utils/storage";

interface Props {
  children: ReactNode;
}

export const ThemeProvider = ({ children }: Props) => {
  const [theme, setTheme] = useState<Theme>(
    storage.getItem("theme") ?? Theme.LIGHT
  );

  const changeTheme = (theme: Theme) => {
    storage.setItem("theme", theme);
    setTheme(theme);
    changeCssRootVariable(theme);
  };

  const contextValue = {
    theme,
    changeTheme,
  };

  return (
    <ThemeContext.Provider value={contextValue}>
      {children}
    </ThemeContext.Provider>
  );
};
