import { calculateRewards } from "../utils/rewardCalculator";

test("above 100", () => {
  expect(calculateRewards(120)).toBe(90);
});

test("between 50-100", () => {
  expect(calculateRewards(70)).toBe(20);
});

test("below 50", () => {
  expect(calculateRewards(30)).toBe(0);
});

test("negative", () => {
  expect(calculateRewards(-10)).toBe(0);
});

test("decimal", () => {
  expect(calculateRewards(120.5)).toBe(91);
});

test("zero", () => {
  expect(calculateRewards(0)).toBe(0);
});