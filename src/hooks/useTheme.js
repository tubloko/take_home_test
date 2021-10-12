import { useContext } from 'react';
import { ThemeContext, ToggleThemeContext } from "../contexts/theme";

export const useTheme = () => {
  return [
    useContext(ThemeContext),
    useContext(ToggleThemeContext),
  ];
}
