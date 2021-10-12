import React, { createContext, useEffect, useState } from "react";

export const ThemeContext = createContext(undefined);
export const ToggleThemeContext = createContext(undefined);
// I'd do the feature via the body or root 'div', with the html tag the approach seems good to me
// localStorage was added to save last value to improve UX
export function ThemeProvider({ children }) {
	const [darkMode, setDarkMode] = useState(!!localStorage.getItem('dark-mode'));

	useEffect(() => {
		const classList = document.querySelector('html').classList;
		if (darkMode || !classList.contains("dark-mode")) {
			localStorage.setItem('dark-mode', 'dark-mode');
			classList.add("dark-mode");
		}
		if (!darkMode) {
			localStorage.setItem('dark-mode', '');
			classList.remove("dark-mode");
		}
	}, [darkMode]);

	const toggleTheme = () => setDarkMode(!darkMode);

	return (
    <ThemeContext.Provider value={darkMode}>
			<ToggleThemeContext.Provider value={toggleTheme}>
				{children}
			</ToggleThemeContext.Provider>
    </ThemeContext.Provider>
  );
}
