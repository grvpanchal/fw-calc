export const getExpenses = (state) => state.accountStatement.expenses;
export const getTypeExpenses = (state, type) => state.accountStatement.expenses.filter((expense) => expense.type === type);