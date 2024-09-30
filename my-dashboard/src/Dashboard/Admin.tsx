import {
  StyledListItem,
  StyledPaper,
  StyledTypography,
  StyledToolbar,
  StyledIcon,
  Container,
  Content,
  SideBar,
} from "./Dashboard.styled";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemText from "@mui/material/ListItemText";
import AccessibilityIcon from "@mui/icons-material/Accessibility";
import { Header } from "../components/Header/Header";
import { Outlet, Link } from "react-router-dom";

export const Admin = () => {
  return (
    <div>
      <Content className="content">
        <StyledPaper>
          <h2>Admin</h2>
          <StyledTypography paragraph></StyledTypography>
        </StyledPaper>
      </Content>
    </div>
  );
};
