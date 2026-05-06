import { useEffect, useState } from "react";
import { fetchTransactions } from "../utils/api";
import logger from "../logger";

export const useTransactions = () => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetchTransactions()
      .then((res) => {
        setData(res);
        logger.info("Data loaded");
      })
      .catch((err) => {
        console.error(err);
        logger.error(err);
      })
      .finally(() => setLoading(false));
  }, []);

  return { data, loading };
};