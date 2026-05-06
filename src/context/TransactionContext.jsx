import { createContext, useContext } from "react";
import { useTransactions } from "../hooks/useTransactions";

const Context = createContext();

export const TransactionProvider = ({ children }) => {
  const value = useTransactions();
  return <Context.Provider value={value}>{children}</Context.Provider>;
};

export const useTransactionContext = () => useContext(Context);