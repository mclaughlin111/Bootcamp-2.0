import {
  TableContainer,
  Paper,
  Table,
  TableHead,
  TableRow,
  TableCell,
  TableBody,
} from "@mui/material";
import { Transaction } from "./Transaction";
import { useTransactions } from "./useTransactions";

type TransactionsTableProps = {
  transactions: Transaction[];
};

export const TransactionsTable = ({ transactions }: TransactionsTableProps) => {
  return (
    <TableContainer component={Paper}>
      <Table sx={{ minWidth: 1200 }} aria-label="transactions table">
        <TableHead>
          <TableRow>
            <TableCell>ID</TableCell>
            <TableCell>Timestamp</TableCell>
            <TableCell>Type</TableCell>
            <TableCell>Amount</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {transactions.map((transaction) => {
            const { id, timestamp, type, amount } = transaction;
            return (
              <TableRow key={id}>
                <TableCell>{id}</TableCell>
                <TableCell>{timestamp}</TableCell>
                <TableCell>{type}</TableCell>
                <TableCell>
                  <sub>£</sub>
                  {amount}
                </TableCell>
              </TableRow>
            );
          })}
        </TableBody>
      </Table>
    </TableContainer>
  );
};
