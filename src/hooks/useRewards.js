import { useMemo } from "react";
import { calculateRewards } from "../utils/rewardCalculator";

export const useRewards = (data, customerId) => {
  return useMemo(() => {
    const filtered = data.filter(d => d.customerId === customerId);

    if (filtered.length === 0) {
      return { monthly: {}, total: 0, filtered: [] };
    }

    // ✅ Get latest transaction date from data
    const latestDate = new Date(
      Math.max(...filtered.map(t => new Date(t.date)))
    );

    // ✅ Last 3 months based on DATA (not current date)
    const last3Months = [...Array(3)].map((_, i) => {
      const d = new Date(latestDate);
      d.setMonth(d.getMonth() - i);
      return `${d.getMonth() + 1}-${d.getFullYear()}`;
    });

    let total = 0;
    const monthly = {};

    filtered.forEach(t => {
      const d = new Date(t.date);
      const key = `${d.getMonth() + 1}-${d.getFullYear()}`;

      const pts = calculateRewards(t.amount);

      if (last3Months.includes(key)) {
        monthly[key] = (monthly[key] || 0) + pts;
        total += pts;
      }
    });

    return { monthly, total, filtered };
  }, [data, customerId]);
};