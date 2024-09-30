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
import { Link } from "react-router-dom";

export const Error = () => {
  return (
    <div>
      <Content className="content">
        <StyledPaper>
          <h2>Did you mean to come here?</h2>

          <StyledTypography paragraph>
            <Link to="/Home">Take Me Back! </Link>
          </StyledTypography>
        </StyledPaper>
      </Content>
    </div>
  );
};
