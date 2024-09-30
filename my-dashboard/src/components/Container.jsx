import { Dashboard } from "../Dashboard/Dashboard";
import { useContext } from "react";
import { ThemeProvider } from "styled-components";
import { ThemeContext } from "../context/ThemeContextProvider";

export const Container = () => {
  return <Dashboard />;
};
