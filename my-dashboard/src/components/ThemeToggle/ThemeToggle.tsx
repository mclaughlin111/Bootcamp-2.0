import { MenuItem, Box } from "@mui/material";
import {
  StyledSelect,
  StyledFormControl,
  StyledInputLabel,
} from "./ThemeToggle.styled";
import { useContext, useState } from "react";
import { ThemeOption } from "../../themes/types";
import { ThemeContext } from "../../context/ThemeContextProvider";

const themeOptions: ThemeOption[] = ["light", "dark", "horriblyunreadable"];

export const ThemeToggle = () => {
  const { theme, toggleTheme } = useContext(ThemeContext);

  console.log("theme", theme);

  return (
    <StyledFormControl
      color="primary"
      variant="outlined"
      sx={{ marginLeft: "10px" }}
      size="small"
    >
      <StyledInputLabel id="simple-select-label">Theme</StyledInputLabel>
      <StyledSelect
        sx={{ minWidth: 120, height: 25 }}
        label="theme"
        value={theme}
        onChange={(event) => toggleTheme(event.target.value as ThemeOption)}
      >
        {themeOptions.map((option) => (
          <MenuItem key={option} value={option}>
            {option.charAt(0).toUpperCase() + option.slice(1)}
          </MenuItem>
        ))}
      </StyledSelect>
    </StyledFormControl>
  );
};
