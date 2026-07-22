import { createContext, useEffect, useMemo, useState } from "react";

export const ThemeContext = createContext(null);

export default function ThemeProvider({ children }) {
    const getInitialTheme = () => {
        const saved = localStorage.getItem("theme");

        if (saved) return saved;

        return window.matchMedia("(prefers-color-scheme: dark)").matches
            ? "dark"
            : "light";
    };

    const [theme, setTheme] = useState(getInitialTheme);

    useEffect(() => {
        document.documentElement.dataset.theme = theme;
        localStorage.setItem("theme", theme);
    }, [theme]);

    const toggleTheme = () => {
        setTheme((prev) => (prev === "dark" ? "light" : "dark"));
    };

    const value = useMemo(
        () => ({
            theme,
            toggleTheme,
        }),
        [theme]
    );

    return (
        <ThemeContext.Provider value={value}>
            {children}
        </ThemeContext.Provider>
    );
}