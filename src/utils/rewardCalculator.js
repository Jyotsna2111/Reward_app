export const calculateRewards = (amount = 0) => {
  if (amount <= 0) return 0;

  if (amount > 100) return (amount - 100) * 2 + 50;
  if (amount > 50) return amount - 50;

  return 0;
};