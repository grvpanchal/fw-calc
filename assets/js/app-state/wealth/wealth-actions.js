import {
  UPDATE_WEALTH,
} from './wealth-action-types.js';

function sumArray(array) {
  let sum = 0;

  for (let i = 0; i < array.length; i += 1) {
    sum += array[i].amount;
  }

  return sum;
}

function percent(quantity, total) {
  return Math.round(((quantity / total) * 100), 0);
}

function getWeathPercentage(activeIncomeSum, passiveIncomeSum, generalExpenseSum, liabilityExpenseSum) {
  const totalIncomeSum = activeIncomeSum + passiveIncomeSum;
  const totalExpenseSum = generalExpenseSum + liabilityExpenseSum;
  const savingsSum = totalExpenseSum < totalIncomeSum ? (totalIncomeSum - totalExpenseSum) : 0;

  return {
    date: '01-02-2023',
    activeIncome: percent(activeIncomeSum, totalIncomeSum),
    passiveIncome: percent(passiveIncomeSum, totalIncomeSum),
    expenses: percent(generalExpenseSum, totalIncomeSum),
    liabilitiesExpenses: percent(liabilityExpenseSum, totalIncomeSum),
    savings: savingsSum > 0 ? percent(savingsSum, totalIncomeSum) : 0,
  };
}

export const updateWealth = (payload) => {
  const { incomes, expenses } = payload;

  const activeIncome = incomes.filter((income) => income.type === 'active-income');
  const passiveIncome = incomes.filter((income) => income.type === 'passive-income');
  const generalExpense = expenses.filter((expense) => expense.type === 'general');
  const liabilityExpense = expenses.filter((expense) => expense.type === 'liability-expense' || expense.type === 'housing');

  const activeIncomeSum = sumArray(activeIncome);
  const passiveIncomeSum = sumArray(passiveIncome);
  const generalExpenseSum = sumArray(generalExpense);
  const liabilityExpenseSum = sumArray(liabilityExpense);

  return {
    type: UPDATE_WEALTH,
    payload: getWeathPercentage(activeIncomeSum, passiveIncomeSum, generalExpenseSum, liabilityExpenseSum),
  };
};
