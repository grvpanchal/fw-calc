export default {
  'wealth': [
    {
      'date': '01-02-2023', 'activeIncome': 100, 'passiveIncome': 0, 'expenses': 30, 'liabilitiesExpenses': 70, 'savings': 0,
    },
    {
      'date': '01-03-2023', 'activeIncome': 99, 'passiveIncome': 1, 'expenses': 30, 'liabilitiesExpenses': 50, 'savings': 10,
    },
    {
      'date': '01-04-2023', 'activeIncome': 90, 'passiveIncome': 10, 'expenses': 30, 'liabilitiesExpenses': 40, 'savings': 30,
    },
    {
      'date': '01-05-2023', 'activeIncome': 70, 'passiveIncome': 30, 'expenses': 30, 'liabilitiesExpenses': 33, 'savings': 37,
    },
    {
      'date': '01-06-2023', 'activeIncome': 60, 'passiveIncome': 40, 'expenses': 20, 'liabilitiesExpenses': 10, 'savings': 70,
    },
    {
      'date': '01-07-2023', 'activeIncome': 10, 'passiveIncome': 90, 'expenses': 25, 'liabilitiesExpenses': 5, 'savings': 70,
    }, // Wrong Calculation
    // { "date": "01-07-2023", "activeIncome": 40, "passiveIncome": 50, "expenses": 20, "liabilitiesExpenses": 5, "savings": 75 } // Wrong Calculation
  ],
  'accountStatement': {
    'incomes': [
      {
        'name': 'Salary', 'type': 'active-income', 'amount': 6080, 'helperText': 'Basic Salary from Job',
      },
      {
        'name': 'Portfolio', 'type': 'passive-income', 'amount': 50, 'helperText': 'Income from you market profile',
      },
    ],
    'expenses': [
      {
        'name': 'Groceries', 'type': 'general', 'amount': 1110, 'helperText': 'groceries and shopping',
      },
      {
        'name': 'India Groceries', 'type': 'general', 'amount': 400, 'helperText': 'groceries and shopping',
      },
      {
        'name': 'Subscriptions', 'type': 'general', 'amount': 150, 'helperText': 'light, internet, amc',
      },
      {
        'name': 'Rent', 'type': 'housing', 'amount': 1805, 'helperText': 'monthly rent of house',
      },
      {
        'name': 'Car loan', 'type': 'liability-expense', 'amount': 240, 'helperText': 'EMI of car',
      },
      {
        'name': 'Home Loan', 'type': 'liability-expense', 'amount': 210, 'helperText': 'EMI of Home',
      },
      {
        'name': 'Topup Loan', 'type': 'liability-expense', 'amount': 190, 'helperText': 'EMI of Top up',
      },
      {
        'name': 'Car loan India', 'type': 'liability-expense', 'amount': 138, 'helperText': 'EMI of car',
      },
      {
        'name': 'Car loan US', 'type': 'liability-expense', 'amount': 240, 'helperText': 'EMI of car',
      },
      // { "name": "Personal Kotak", "type": "liability-expense", "amount": 175, "helperText": "EMI of US Travel Expense" },
      {
        'name': 'Personal Bajaj', 'type': 'liability-expense', 'amount': 60, 'helperText': 'EMI of Marraige Expense',
      },
      { 'name': 'Savings', 'type': 'savings', 'helperText': 'Possible savings if not spent on wants' },
      // { "name": "Mutual Funds", "type": "sip", "amount": 138, "helperText": "general investments" },
    ],
  },
  'balanceSheet': {
    'assets': [
      { 'name': 'Portfolio Size', 'amount': 100000, 'rate': 7 },
    ],
    'liabilities': [
      {
        'name': 'Home Loan', 'amount': 100000, 'rate': 7, 'tenure': 120, 'startDate': '01/01/2020',
      },
    ],
  },
};
