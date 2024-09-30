import { useContext, useEffect, useState } from "react";
import { Transaction } from "./Transaction";
import { useAuthContext } from "../../context/useAuthContext";
import { AxiosContext } from "../../context/axiosIntercept/AxiosContext";

export const useTransactions = () => {
  const [transactions, setTransaction] = useState<Transaction[]>([]);

  const axiosInstance = useContext(AxiosContext)!;

  const [loading, setLoading] = useState(true);
  const { token } = useAuthContext();

  const headers = {
    Authorization: `Bearer ${token}`,
  };

  const getTransactions = async () => {
    setLoading(true);
    try {
      const response = await axiosInstance.get<Transaction[]>(`/transactions`);

      // Log the full URL being called
      console.log("API Call URL:", response.config.url);

      setTransaction(response.data);
      console.log(response.data);
    } catch (error) {
      console.error("Error fetching transactions:", error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    getTransactions();
  }, []);

  return { transactions, loading };
};
