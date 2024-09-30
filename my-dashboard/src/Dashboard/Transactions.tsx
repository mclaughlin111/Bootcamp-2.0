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
import { TransactionsTable } from "./Transactions/TransactionsTable";
import { useTransactions } from "./Transactions/useTransactions";

export const Transactions = () => {
  const { transactions } = useTransactions();

  return (
    <div>
      <Content className="content">
        <StyledPaper>
          <h2>Transactions</h2>
          <StyledTypography paragraph>
            <TransactionsTable transactions={transactions} />
          </StyledTypography>
        </StyledPaper>
      </Content>
    </div>
  );
};
