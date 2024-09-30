import React, { createContext, useState, ReactNode } from "react";
import { ThemeProvider } from "styled-components";
import { light, dark, horriblyunreadable } from "../themes/themes";
import { ThemeOption } from "../themes/types";

// Define the type for the context value
type ThemeContextValue = {
  theme: ThemeOption;
  toggleTheme: (theme: ThemeOption) => void;
};

// Define the type for the props
type ThemeContextProviderProps = {
  children: ReactNode;
};

// Create the context with a default value
export const ThemeContext = createContext<ThemeContextValue>({
  theme: "light",
  toggleTheme: () => {},
});

export const ThemeContextProvider: React.FC<ThemeContextProviderProps> = ({
  children,
}) => {
  const [theme, toggleTheme] = useState<ThemeOption>("light");
  console.log("theme is ");

  const getTheme = (themeOption: ThemeOption) => {
    switch (themeOption) {
      case "light":
        return light;
      case "dark":
        return dark;
      case "horriblyunreadable":
        return horriblyunreadable;
    }
  };

  return (
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
      <ThemeProvider theme={getTheme(theme)}>{children}</ThemeProvider>
    </ThemeContext.Provider>
  );
};
