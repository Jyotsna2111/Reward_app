export const fetchTransactions = async () => {
  const res = await fetch("/data/transactions.json");

  if (!res.ok) {
    throw new Error("Failed to fetch");
  }

  return res.json();
};