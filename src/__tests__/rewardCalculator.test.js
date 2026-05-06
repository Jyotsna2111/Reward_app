import { describe, it, expect } from "vitest";
import { calculateRewards } from "../utils/rewardCalculator";

describe("Reward Calculator", () => {
  it("above 100", () => {
    expect(calculateRewards(120)).toBe(90);
  });

  it("between 50-100", () => {
    expect(calculateRewards(70)).toBe(20);
  });

  it("below 50", () => {
    expect(calculateRewards(30)).toBe(0);
  });

  it("negative value", () => {
    expect(calculateRewards(-10)).toBe(0);
  });

  it("decimal value", () => {
    expect(calculateRewards(120.5)).toBe(91);
  });

  it("zero", () => {
    expect(calculateRewards(0)).toBe(0);
  });
});