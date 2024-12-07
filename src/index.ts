import { parseData } from "./parser";
import { formatCurrency, formatPercentage } from "./formatter";
import {
  calculateExpenses,
  calculateSalesDebit,
  calculateGrossProfitMargin,
  calculateNetProfitMargin,
  calculateRevenue,
  calculateWorkingCapitalRatio,
} from "./calculation";

const filePath = './data.json';

const data = parseData(filePath);

const revenue = calculateRevenue(data);
const expenses = calculateExpenses(data);
const salesDebit = calculateSalesDebit(data);
const grossProfitMargin = calculateGrossProfitMargin(revenue, salesDebit);
const netProfitMargin = calculateNetProfitMargin(revenue, expenses);
const workingCapitalRatio = calculateWorkingCapitalRatio(data);

console.log(`Revenue: ${formatCurrency(revenue)}`);
console.log(`Expenses: ${formatCurrency(expenses)}`);
console.log(`Gross Profit Margin: ${formatPercentage(grossProfitMargin)}`);
console.log(`Net Profit Margin: ${formatPercentage(netProfitMargin)}`);
console.log(`Working Capital Ratio: ${formatPercentage(workingCapitalRatio)}`);
