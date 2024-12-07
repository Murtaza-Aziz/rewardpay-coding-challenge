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

export function calculateGrossProfitMargin(revenue: number, salesDebit: number): number {
    return salesDebit / revenue;
}

export function calculateNetProfitMargin(revenue: number, expenses: number): number {
    return (revenue - expenses) / revenue;
}

export function calculateWorkingCapitalRatio(data: any[]): number {
    const assets = data
        .filter(record => record.account_category === 'assets' && record.value_type === 'debit')
        .reduce((sum, record) => sum + record.total_value, 0);

    const liabilities = data
        .filter(record => record.account_category === 'liability' && record.value_type === 'credit')
        .reduce((sum, record) => sum + record.total_value, 0);

    return assets / liabilities;
}