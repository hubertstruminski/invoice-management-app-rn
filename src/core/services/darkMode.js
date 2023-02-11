import React, { 
    useContext, 
    useEffect,
    useState,
    createContext
} from 'react';

import { useColorScheme } from 'react-native';

import { 
    darkTheme, 
    lightTheme, 
} from '../constants/colors';

export const ThemeContext = createContext({
    isDark: false,
    colors: lightTheme,
});

export const ThemeProvider = ({ children }) => {
    const colorScheme = useColorScheme();

    const [isDark, setIsDark] = useState(false);

    useEffect(() => {
        setIsDark(colorScheme !== 'light');
    }, [colorScheme]);

    const defaultMode = {
        isDark,
        colors: isDark ? darkTheme : lightTheme,
    }

    return (
        <ThemeContext.Provider value={defaultMode}>
            {children}
        </ThemeContext.Provider>
    );
}

export const useTheme = () => useContext(ThemeContext);