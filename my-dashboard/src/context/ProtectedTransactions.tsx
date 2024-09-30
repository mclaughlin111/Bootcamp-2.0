import { useAuthContext } from "./useAuthContext";
import { Transactions } from "../Dashboard/Transactions";
import {
  StyledPaper,
  StyledTypography,
  Content,
} from "../Dashboard/Dashboard.styled";
import { Link } from "react-router-dom";
import LockIcon from "@mui/icons-material/Lock";

export const ProtectedTransactions = () => {
  const { user } = useAuthContext();

  if (!user?.access.includes("User")) {
    return (
      <>
        <Content className="content">
          <StyledPaper>
            <h2>
              Insufficient User Access <LockIcon />
            </h2>

            <Link to="/home">
              <StyledTypography paragraph>Back ⏎</StyledTypography>
            </Link>
          </StyledPaper>
        </Content>
      </>
    );
  } else {
    return <Transactions />;
  }
};
