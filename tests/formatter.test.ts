import { formatCurrency, formatPercentage } from "../src/formatter";

test ("Formats Currency Correctly", () => {
    expect(formatCurrency(1234567)).toBe('$1,234,567')
})

test ("Formats Percentage Correctly", () => {
    expect(formatPercentage(0.12345)).toBe('12.3%')
})