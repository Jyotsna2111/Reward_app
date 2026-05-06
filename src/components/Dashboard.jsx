import { useState, useEffect } from "react";
import { useTransactionContext } from "../context/TransactionContext";
import { useRewards } from "../hooks/useRewards";
import { calculateRewards } from "../utils/rewardCalculator";
import RewardChart from "./RewardChart";
import FilterPanel from "./FilterPanel";
import logger from "../logger";

import {
  Container,
  Header,
  Card,
  FlexRow,
  Select,
  Summary,
  Table,
  Th,
  Td,
  Empty
} from "../styles/styled";

const Dashboard = () => {
  const { data, loading } = useTransactionContext();

  const [customerId, setCustomerId] = useState("C1");
  const [month, setMonth] = useState(new Date().getMonth() + 1);
  const [year, setYear] = useState(2025);

  // Pagination
  const [page, setPage] = useState(1);
  const pageSize = 5;

  const { monthly, total, filtered } = useRewards(data, customerId);

  useEffect(() => {
    logger.info("Filters updated", { customerId, month, year });
    setPage(1); // reset page on filter change
  }, [customerId, month, year]);

  if (loading) return <h2>Loading...</h2>;

  const customers = [...new Set(data.map((d) => d.customerId))];

  const filteredByDate = filtered.filter((t) => {
    const d = new Date(t.date);
    return d.getMonth() + 1 === month && d.getFullYear() === year;
  });

  // Pagination logic
  const paginated = filteredByDate.slice(
    (page - 1) * pageSize,
    page * pageSize
  );

  return (
    <Container>
      <Header>Rewards Dashboard</Header>

      {/* Filters */}
      <Card>
        <FlexRow>
          <Select onChange={(e) => setCustomerId(e.target.value)}>
            {customers.map((c) => (
              <option key={c}>{c}</option>
            ))}
          </Select>

          <FilterPanel
            month={month}
            year={year}
            setMonth={setMonth}
            setYear={setYear}
          />
        </FlexRow>

        <Summary>Total Reward Points (Last 3 Months): {total}</Summary>
      </Card>

      {/* Chart */}
      <Card>
        <h3>Monthly Rewards Overview (Last 3 Months)</h3>
        <RewardChart data={monthly} />
      </Card>

      {/* Transactions */}
      <Card>
        <h3>Transactions</h3>

        {filteredByDate.length === 0 ? (
          <Empty>No transactions available</Empty>
        ) : (
          <>
            <Table>
              <thead>
                <tr>
                  <Th>Amount</Th>
                  <Th>Date</Th>
                  <Th>Reward Points</Th>
                </tr>
              </thead>
              <tbody>
                {paginated.map((t) => (
                  <tr key={t.transactionId}>
                    <Td>₹{t.amount}</Td>
                    <Td>{t.date}</Td>
                    <Td>{calculateRewards(t.amount)}</Td>
                  </tr>
                ))}
              </tbody>
            </Table>

            {/* Pagination */}
            {filteredByDate.length > pageSize && (
              <div style={{ marginTop: "15px", textAlign: "center" }}>
                <button
                  disabled={page === 1}
                  onClick={() => setPage(page - 1)}
                >
                  Prev
                </button>

                <span style={{ margin: "0 15px" }}>Page {page}</span>

                <button
                  disabled={page * pageSize >= filteredByDate.length}
                  onClick={() => setPage(page + 1)}
                >
                  Next
                </button>
              </div>
            )}
          </>
        )}
      </Card>
    </Container>
  );
};

export default Dashboard;