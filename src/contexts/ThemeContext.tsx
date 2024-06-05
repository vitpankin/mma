import React, { createContext, useState, useContext, useEffect, ReactNode } from 'react';
import { initThemeParams } from '@tma.js/sdk';
import { isColorDark } from '../helpers/helpers';
import { IThemeParams } from '../types/telegram';
import { bindThemeParamsCSSVars } from '@tma.js/sdk-react';

interface ThemeContextProps {
  theme: 'dark' | 'light';
  themeParams?: IThemeParams;
  toggleTheme?: () => void;
}

const ThemeContext = createContext<ThemeContextProps>({
  theme: 'light',
  themeParams: {},
  toggleTheme: () => {},
});

interface ThemeProviderProps {
  children: ReactNode;
}

export const ThemeProvider: React.FC<ThemeProviderProps> = ({ children }) => {
  const [theme, setTheme] = useState<ThemeContextProps['theme']>('light');
  const [themeParams, setThemeParams] = useState<ThemeContextProps['themeParams']>({});

  useEffect(() => {
    const [themeParams, cleanUpFn] = initThemeParams();
    const initialTheme = {...themeParams.getState()};
    setThemeParams(initialTheme);
    bindThemeParamsCSSVars(themeParams);
    initialTheme["bgColor"] && setTheme(isColorDark(initialTheme["bgColor"]) ? 'dark' : 'light');

    // const themeChangeHandler = (newTheme: string) => {
    //   setTheme(newTheme);
    // };

    // themeParams.on('themeChange', themeChangeHandler);

    return () => {
    //   themeParams.off('themeChange', themeChangeHandler);
    };
  }, []);

  const toggleTheme = () => {
    setTheme((prevTheme) => (prevTheme === 'light' ? 'dark' : 'light'));
    // Add logic to communicate the theme change to Telegram if needed
  };

  return (
    <ThemeContext.Provider value={{ theme, themeParams, toggleTheme }}>
      {children}
    </ThemeContext.Provider>
  );
};

export const useTheme = () => useContext(ThemeContext);