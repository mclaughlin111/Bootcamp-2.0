import { AppBar } from "@mui/material";
import styled from "styled-components";

export const StyledAppBar = styled(AppBar)`
  background-color: ${({ theme }) => theme.nav} !important;
  transition: background-color 1000ms ease-in-out !important;
  color: ${({ theme }) => theme.text} !important;
  border-radius: 15px;
  margin-bottom: 8px;
`;
