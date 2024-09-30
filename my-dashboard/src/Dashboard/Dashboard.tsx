import {
  StyledListItem,
  StyledIcon,
  Container,
  SideBar,
} from "./Dashboard.styled";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemText from "@mui/material/ListItemText";
import AccessibilityIcon from "@mui/icons-material/Accessibility";
import LoginIcon from "@mui/icons-material/Login";
import { Header } from "../components/Header/Header";
import { Outlet, Link } from "react-router-dom";
import { useAuthContext } from "../context/useAuthContext";
import CottageIcon from "@mui/icons-material/Cottage";

export const Dashboard = () => {
  const { login, setUser, setLogin } = useAuthContext();

  const handleLogout = () => {
    setLogin(false); // Set login to false
    setUser(null); // Clear the user data
  };

  return (
    <div className="dashboardContainer">
      <Header />
      <Container className="container">
        <SideBar className="list">
          {/* Home Link */}
          <Link style={{ textDecoration: "none" }} to="home">
            <StyledListItem disablePadding>
              <ListItemButton>
                <StyledIcon>
                  <CottageIcon />
                </StyledIcon>
                <ListItemText primary="Home" />
              </ListItemButton>
            </StyledListItem>
          </Link>

          {login && (
            <>
              <Link style={{ textDecoration: "none" }} to="transactions">
                <StyledListItem disablePadding>
                  <ListItemButton>
                    <StyledIcon>
                      <AccessibilityIcon />
                    </StyledIcon>
                    <ListItemText primary="Transactions" />
                  </ListItemButton>
                </StyledListItem>
              </Link>
            </>
          )}

          {login ? (
            <>
              {/* Logout Link */}
              <StyledListItem disablePadding>
                <ListItemButton>
                  <StyledIcon>
                    <LoginIcon />
                  </StyledIcon>
                  <Link
                    style={{ textDecoration: "none" }}
                    to="/home"
                    onClick={handleLogout}
                  >
                    Logout
                  </Link>
                </ListItemButton>
              </StyledListItem>
            </>
          ) : (
            <>
              {/* Login Link */}
              <StyledListItem disablePadding>
                <ListItemButton>
                  <StyledIcon>
                    <LoginIcon />
                  </StyledIcon>
                  <Link style={{ textDecoration: "none" }} to="/login">
                    Login
                  </Link>
                </ListItemButton>
              </StyledListItem>
            </>
          )}
        </SideBar>
        <Outlet />
      </Container>
    </div>
  );
};
