import {
  Box,
  AppBar,
  Drawer,
  ListItem,
  Paper,
  Typography,
  Toolbar,
  ListItemIcon,
  List,
} from "@mui/material";
import styled from "styled-components";

// Styled Box component
export const StyledBox = styled(Box)`
  transition: background-color 1000ms ease-in-out !important;
  color: ${({ theme }) => theme.text} !important;
  background-color: ${({ theme }) => theme.background} !important;
  transition: color 200ms ease-in-out !important;
  height: 100% !important;
  border: 2px solid ${({ theme }) => theme.border};
`;

export const Container = styled(Box)`
  transition: background-color 1000ms ease-in-out !important;
  color: ${({ theme }) => theme.text} !important;
  background-color: ${({ theme }) => theme.background} !important;
  transition: color 200ms ease-in-out !important;
  display: flex;
  width: 100%;
  height: 100% !important;
  border: 2px;
  border-radius: 15px;
`;

export const SideBar = styled(List)`
  transition: background-color 1000ms ease-in-out !important;
  color: ${({ theme }) => theme.text} !important;
  background-color: ${({ theme }) => theme.background};
  transition: color 200ms ease-in-out !important;
  min-width: 190px;
  padding-top: 0px !important;
  border-radius: 15px;
  /* border-right: 2px solid ${({ theme }) => theme.border}; */
`;

export const Content = styled(Box)`
  transition: background-color 1000ms ease-in-out !important;
  color: ${({ theme }) => theme.text} !important;
  background-color: ${({ theme }) => theme.background} !important;
  transition: color 200ms ease-in-out !important;
  display: flex;
  flex-direction: row;
  border-left: 2px solid white;
`;

// Styled AppBar component
export const StyledAppBar = styled(AppBar)`
  transition: background-color 1000ms ease-in-out !important;
  color: ${({ theme }) => theme.text} !important;
  background-color: ${({ theme }) => theme.background} !important;
`;

// Styled Drawer
export const StyledDrawer = styled(Drawer)`
  color: ${({ theme }) => theme.text} !important;
  background-color: ${({ theme }) => theme.background} !important;
  border-radius: 5px;
`;

// Styled ListItem component
export const StyledListItem = styled(ListItem)`
  transition: background-color 1000ms ease-in-out !important;
  color: ${({ theme }) => theme.text} !important;
  border-bottom: 1px solid ${({ theme }) => theme.background};
  border-radius: 5px;
  text-decoration: none !important;
`;

// Styled Paper component
export const StyledPaper = styled(Paper)`
  transition: background-color 1000ms ease-in-out !important;
  color: ${({ theme }) => theme.text} !important;
  background-color: ${({ theme }) => theme.background} !important;
  transition: color 200ms ease-in-out !important;
  padding: 1em;
  border-radius: 5px;
`;

// Styled Typography component
export const StyledTypography = styled(Typography)`
  transition: background-color 1000ms ease-in-out !important;
  padding: 5px;
  color: ${({ theme }) => theme.text} !important;
  width: fit-content;
  background-color: ${({ theme }) => theme.background} !important;
`;

// Styled Toolbar component
export const StyledToolbar = styled(Toolbar)`
  transition: background-color 1000ms ease-in-out !important;
  color: ${({ theme }) => theme.text} !important;
  background-color: ${({ theme }) => theme.background} !important;
`;

// Styled ListItemIcon component
export const StyledIcon = styled(ListItemIcon)`
  transition: background-color 1000ms ease-in-out !important;
  color: ${({ theme }) => theme.primary} !important;
  margin-right: 2px;
`;
