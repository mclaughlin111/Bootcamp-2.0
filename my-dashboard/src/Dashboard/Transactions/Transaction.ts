export type Transaction = {
  id: number;
  timestamp: number;
  type: "deposit" | "withdrawal";
  amount: number;
};
