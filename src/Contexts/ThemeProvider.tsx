import { createContext, ReactNode, useState } from "react";

export const ThemeContext = createContext<{ isDarkMode: boolean }>({isDarkMode: false});
export const UpdateThemeContext = createContext<{ updateTheme: () => void } | null>(null);

export function ThemeProvider({ children } : { children: ReactNode }): JSX.Element {
    const [isDarkMode, setIsDarkMode] = useState(false);

    const updateTheme = () => {
        setIsDarkMode(prev => !prev)
    }

    return (
        <ThemeContext.Provider value={{isDarkMode}}>
            <UpdateThemeContext.Provider value={{updateTheme}}>
                {children}
            </UpdateThemeContext.Provider>
        </ThemeContext.Provider>
    )
}