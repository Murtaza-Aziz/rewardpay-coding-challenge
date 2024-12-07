export function calculateRevenue(data: any[]): number {
    return data
        .filter(record => record.account_category === 'revenue')
        .reduce((sum, record) => sum + record.total_value, 0);
}

export function calculateExpenses(data: any[]): number {
    return data
        .filter(record => record.account_category === 'expense')
        .reduce((sum, record) => sum + record.total_value, 0);
}

export function calculateSalesDebit(data: any[]): number {
    return data
        .filter(record => record.account_category === 'revenue' && record.value_type === 'debit')
        .reduce((sum, record) => sum + record.total_value, 0);
}

export function calculateGrossProfitMargin(revenue: number, salesDebit: number): number {
    if (revenue === 0) {
        throw new Error('Revenue cannot be zero');
    }
    return (salesDebit / revenue) * 100;
}

export function calculateNetProfitMargin(revenue: number, expenses: number): number {
    return (revenue - expenses) / revenue;
}

export function calculateWorkingCapitalRatio(data: any[]): number {
    const totalAssets = data
      .filter(
        record =>
          record.account_category === 'assets' &&
          record.value_type === 'debit' &&
          ['current', 'bank', 'current_accounts_receivable'].includes(record.account_type)
      )
      .reduce((sum, record) => sum + record.total_value, 0) -
      data
        .filter(
          record =>
            record.account_category === 'assets' &&
            record.value_type === 'credit' &&
            ['current', 'bank', 'current_accounts_receivable'].includes(record.account_type)
        )
        .reduce((sum, record) => sum + record.total_value, 0);
  
    const totalLiabilities = data
      .filter(
        record =>
          record.account_category === 'liability' &&
          record.value_type === 'credit' &&
          ['current', 'current_accounts_payable'].includes(record.account_type)
      )
      .reduce((sum, record) => sum + record.total_value, 0) -
      data
        .filter(
          record =>
            record.account_category === 'liability' &&
            record.value_type === 'debit' &&
            ['current', 'current_accounts_payable'].includes(record.account_type)
        )
        .reduce((sum, record) => sum + record.total_value, 0);
  
    if (totalLiabilities === 0) {
      throw new Error('Total liabilities cannot be zero when calculating Working Capital Ratio.');
    }
  
    return totalAssets / totalLiabilities;
  }