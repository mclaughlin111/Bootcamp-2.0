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
import { HomeDiv } from "./Home.styled";
import CottageIcon from "@mui/icons-material/Cottage";

export const Home = () => {
  return (
    <HomeDiv>
      <Content className="content">
        <StyledPaper>
          <h2>
            Home <CottageIcon />{" "}
          </h2>
          <StyledTypography paragraph>Welcome Home</StyledTypography>
        </StyledPaper>
      </Content>
    </HomeDiv>
  );
};
