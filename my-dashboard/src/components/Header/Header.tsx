import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import { ThemeToggle } from "../ThemeToggle/ThemeToggle";
import { StyledAppBar } from "../Header/Header.styled";
import { UserInfo } from "./UserInfo";

export const Header = () => {
  return (
    <>
      <StyledAppBar elevation={10} position="static">
        <Toolbar>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            Dashboard
          </Typography>

          <UserInfo />
          <ThemeToggle />
        </Toolbar>
      </StyledAppBar>
    </>
  );
};
