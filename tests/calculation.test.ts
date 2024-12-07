import {
  calculateRevenue,
  calculateGrossProfitMargin,
  calculateNetProfitMargin,
  calculateExpenses,
  calculateWorkingCapitalRatio,
} from "../src/calculation";

const mockData = [
{ account_category: "revenue", total_value: 1000 },
{ account_category: "expense", total_value: 500 },
{ account_category: "assets", total_value: 300, value_type: "debit", account_type: "current" },
{ account_category: "liability", total_value: 100, value_type: "credit", account_type: "current" },
];

test("Calculates Revenue Correctly", () => {
  expect(calculateRevenue(mockData)).toBe(1000);
})

test("Calculates Expenses Correctly", () => {
  expect(calculateExpenses(mockData)).toBe(500);
})

test("Calculates Gross Profit Margin Correctly", () => {
  expect(calculateGrossProfitMargin(1000, 1000)).toBe(1);
})

test("Calculates Net Profit Margin Correctly", () => {
  expect(calculateNetProfitMargin(1000, 500)).toBe(0.5);
})

test("Calculates Working Capital Ratio Correctly", () => {
  expect(calculateWorkingCapitalRatio(mockData)).toBe(3);
})