import { useContext } from "react";
import { ThemeContext } from "../components/Theme/ChangeTheme";

export const useTheme = () => {
  const context = useContext(ThemeContext);
  if (!context) {
    throw new Error("useTheme must be used within a ThemeProvider");
  }
  return context;
};
