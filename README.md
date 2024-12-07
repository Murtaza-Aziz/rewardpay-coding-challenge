# RewardPay Coding Challenge

This project implements a solution to calculate accounting metrics (Revenue, Expenses, Gross Profit Margin, Net Profit Margin, and Working Capital Ratio) using a dataset (`data.json`). It is built with **TypeScript** and follows **Test-Driven Development (TDD)** principles.

---

## Setup

1. **Install Dependencies**:  
   ```bash
   npm install
2. **Run the Application:**:  
   ```bash
   npm start
3. **Run tests**:  
   ```bash
   npm test


---

## Project Structure

|-- src/
|   |-- index.ts           // Entry point
|   |-- calculations.ts    // Calculation functions
|   |-- parser.ts          // Parse data.json
|   |-- formatter.ts       // Format outputs
|-- tests/                 // Unit tests
|-- data.json              // Input data file
|-- package.json           // Project dependencies
|-- tsconfig.json          // TypeScript configuration
|-- jest.config.js         // Jest configuration



---

## Key Features

1. **Revenue Calculation**:  
   ```bash
   Sum total_value for records where account_category is revenue
2. **Expenses Calculation**:  
   ```bash
   Sum total_value for records where account_category is expense
3. **Gross Profit Margin**:  
   ```bash
   Calculated as: (salesDebit/Revenue) * 100
4. **Revenue Calculation**:  
   ```bash
   Calculated as: (Revenue-Expenses / Revenue) * 100
5. **Working Capital Ratio**:  
   ```bash
   Calculated as: (Assets/Liabilities) * 100

---

## Testing

All calculations are tested with Jest. Run tests using:

npm test