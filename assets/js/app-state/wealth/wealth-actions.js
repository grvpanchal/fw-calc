import {
  UPDATE_WEALTH,
} from './wealth-action-types.js';

// Helper functions for calculations
function sumArray(array) {
  let sum = 0;
  for (let i = 0; i < array.length; i += 1) {
    sum += array[i].amount || 0;
  }
  return sum;
}

function percent(quantity, total) {
  if (total === 0) return 0;
  return Math.round((quantity / total) * 100);
}

function formatDate(date) {
  const monthName = date.toLocaleString('default', { month: 'long' });
  const year = date.getFullYear();
  return `${monthName} ${year}`;
}

function calculateMonthlyAssetGrowth(assets, monthIndex) {
  return assets.map((asset) => ({
    ...asset,
    amount: asset.amount * Math.pow(1 + (asset.rate || 0) / 100 / 12, monthIndex),
  }));
}

function calculateEMI(principal, annualRate, tenureMonths) {
  if (tenureMonths === 0) return 0;
  if (annualRate === 0) return principal / tenureMonths;
  const monthlyRate = annualRate / 100 / 12;
  const emi = (principal * monthlyRate * Math.pow(1 + monthlyRate, tenureMonths))
    / (Math.pow(1 + monthlyRate, tenureMonths) - 1);
  return emi;
}

function calculateRemainingLiabilityBalance(liability, monthsPaid) {
  const { amount, rate, tenure } = liability;
  if (!tenure || monthsPaid >= tenure) return 0;

  const monthlyRate = (rate || 0) / 100 / 12;
  if (monthlyRate === 0) {
    return amount - (amount / tenure * monthsPaid);
  }

  const emi = calculateEMI(amount, rate, tenure);
  const remainingBalance = amount * Math.pow(1 + monthlyRate, monthsPaid)
    - emi * ((Math.pow(1 + monthlyRate, monthsPaid) - 1) / monthlyRate);

  return Math.max(0, remainingBalance);
}

// Calculate passive income as monthly interest from assets
function calculatePassiveIncomeFromAssets(assets) {
  let passiveIncome = 0;
  assets.forEach((asset) => {
    const monthlyReturn = (asset.amount * (asset.rate || 0) / 100) / 12;
    passiveIncome += monthlyReturn;
  });
  return passiveIncome;
}

// Calculate passive income with breakdown by original assets vs investments
function calculatePassiveIncomeBreakdown(originalAssets, investedAssets, month) {
  const grownOriginalAssets = calculateMonthlyAssetGrowth(originalAssets, month);
  const originalPassiveIncome = calculatePassiveIncomeFromAssets(grownOriginalAssets);
  
  // Calculate passive income from invested assets (already grown)
  const investedPassiveIncome = calculatePassiveIncomeFromAssets(investedAssets);
  
  // Break down invested passive income by allocation category
  const investmentBreakdown = {};
  investedAssets.forEach((asset) => {
    if (asset.type === 'investment') {
      const categoryName = asset.name; // e.g., "Invested Savings (Stocks / Equity)"
      const monthlyReturn = (asset.amount * (asset.rate || 0) / 100) / 12;
      
      if (!investmentBreakdown[categoryName]) {
        investmentBreakdown[categoryName] = {
          amount: asset.amount,
          monthlyIncome: 0,
          rate: asset.rate,
        };
      }
      investmentBreakdown[categoryName].monthlyIncome += monthlyReturn;
    }
  });
  
  return {
    originalPassiveIncome,
    investedPassiveIncome,
    totalPassiveIncome: originalPassiveIncome + investedPassiveIncome,
    investmentBreakdown,
  };
}

// Reinvest accumulated savings according to investment allocation preferences
function reinvestSavings(savingsAmount, allocations, monthIndex) {
  if (savingsAmount <= 0 || !allocations || allocations.length === 0) {
    return [];
  }

  // Filter allocations that have non-zero percentages
  const activeAllocations = allocations.filter((alloc) => (alloc.percent || 0) > 0);
  
  if (activeAllocations.length === 0) {
    return [];
  }

  // Create investment assets based on allocation percentages
  const investmentAssets = activeAllocations.map((allocation) => {
    const investmentAmount = savingsAmount * (allocation.percent / 100);
    
    // Calculate current value with compound growth from when it was invested
    const currentValue = investmentAmount * Math.pow(1 + (allocation.rate || 0) / 100 / 12, monthIndex);
    
    return {
      id: `investment-${allocation.id}-${Date.now()}`,
      name: `Invested Savings (${allocation.name})`,
      amount: currentValue,
      rate: allocation.rate || 0,
      type: 'investment',
    };
  });

  return investmentAssets;
}

// Merge investment assets with base assets, consolidating by asset type
function mergeAssets(baseAssets, investmentAssets) {
  const merged = [...baseAssets];
  
  investmentAssets.forEach((invAsset) => {
    // Find if we already have an investment of this type
    const existingIndex = merged.findIndex((a) => 
      a.type === 'investment' && a.name === invAsset.name
    );
    
    if (existingIndex >= 0) {
      // Consolidate: add amounts together, keep the rate
      merged[existingIndex] = {
        ...merged[existingIndex],
        amount: merged[existingIndex].amount + invAsset.amount,
      };
    } else {
      merged.push(invAsset);
    }
  });
  
  return merged;
}

// Auto-calculate total EMI from all liabilities
function calculateTotalEMI(liabilities, monthsPaid) {
  let totalEMI = 0;
  liabilities.forEach((liability) => {
    const remaining = calculateRemainingLiabilityBalance(liability, monthsPaid);
    if (remaining > 0) {
      const emi = calculateEMI(liability.amount, liability.rate, liability.tenure);
      totalEMI += emi;
    }
  });
  return totalEMI;
}

function generateWealthProjection(accountStatement, balanceSheet, investmentAllocations = []) {
  const { incomes = [], expenses = [] } = accountStatement || {};
  const { assets = [], liabilities = [] } = balanceSheet || {};

  const wealthTimeline = [];
  const MAX_MONTHS = 360; // 30 years
  let ffAchievedAtMonth = null;

  // Calculate initial values - only get active income from incomes (salary)
  const initialActiveIncome = sumArray(incomes.filter((i) => i.type === 'active-income'));

  // General expenses (excluding liability-expense type since EMI will be auto-calculated)
  const generalExpenses = sumArray(
    expenses.filter((e) => e.type === 'general' || e.type === 'housing'),
  );

  let accumulatedSavings = 0;
  let cumulativeInvestedAssets = []; // Track all reinvested assets over time

  // Generate monthly projections
  for (let month = 0; month < MAX_MONTHS; month += 1) {
    // Calculate date for this month
    const projectionDate = new Date();
    projectionDate.setMonth(projectionDate.getMonth() + month);

    // Combine base assets with accumulated invested assets
    const allAssets = mergeAssets(assets, cumulativeInvestedAssets);

    // Grow all assets with compound interest
    const grownAssets = calculateMonthlyAssetGrowth(allAssets, month);
    const totalAssetValue = sumArray(grownAssets);

    // Calculate remaining liabilities
    const activeLiabilities = liabilities.map((liability) => ({
      ...liability,
      remainingBalance: calculateRemainingLiabilityBalance(liability, month),
    })).filter((l) => l.remainingBalance > 0);
    const totalLiabilityValue = sumArray(
      activeLiabilities.map((l) => ({ amount: l.remainingBalance })),
    );

    // Auto-calculate EMI from liabilities (not from expense entries)
    const liabilityEMI = calculateTotalEMI(liabilities, month);

    // Calculate passive income with breakdown (original assets vs invested portfolio)
    const passiveIncomeBreakdown = calculatePassiveIncomeBreakdown(
      assets,
      cumulativeInvestedAssets,
      month,
    );
    const passiveIncomeFromAssets = passiveIncomeBreakdown.totalPassiveIncome;

    // Total expenses = General expenses + Auto-calculated EMI
    const totalExpenses = generalExpenses + liabilityEMI;

    // Check if financial freedom is achieved (for the first time)
    if (passiveIncomeFromAssets >= totalExpenses && month > 0 && ffAchievedAtMonth === null) {
      ffAchievedAtMonth = month;
      // eslint-disable-next-line no-console
      console.log(`Financial freedom achieved at month ${month}! Will continue working for 6 more months.`);
    }

    // Phased retirement logic: gradually reduce active income as passive income approaches expenses
    // Start reducing at 80% coverage, reach 0% work 6 months after achieving 100% coverage
    let monthlyActiveIncome = initialActiveIncome;
    if (passiveIncomeFromAssets >= totalExpenses * 0.8 && totalExpenses > 0) {
      const coverageRatio = passiveIncomeFromAssets / totalExpenses;
      if (coverageRatio >= 1.0) {
        // Financial freedom achieved - check if 6 months have passed
        const monthsSinceFF = ffAchievedAtMonth !== null ? (month - ffAchievedAtMonth) : 0;
        if (monthsSinceFF >= 6) {
          // Zero out active income 6 months after financial freedom
          monthlyActiveIncome = 0;
        } else {
          // Still working during the 6-month transition period
          monthlyActiveIncome = initialActiveIncome;
        }
      } else {
        // Gradual reduction from 80% to 100% coverage
        // At 80% coverage: work 100%, at 100% coverage: work 100% (until 6 months later)
        const reductionFactor = (coverageRatio - 0.8) / 0.2; // 0 to 1
        monthlyActiveIncome = initialActiveIncome * (1 - reductionFactor);
      }
    }

    // Total income = Active Income (salary, possibly reduced) + Passive Income (from assets)
    const totalActiveIncome = monthlyActiveIncome;
    const totalPassiveIncome = passiveIncomeFromAssets;
    const totalIncome = totalActiveIncome + totalPassiveIncome;

    // Calculate savings
    const monthlySavings = totalIncome - totalExpenses;
    
    // Reinvest positive savings according to allocation
    if (monthlySavings > 0 && investmentAllocations.length > 0) {
      const newInvestments = reinvestSavings(monthlySavings, investmentAllocations, 0);
      cumulativeInvestedAssets = mergeAssets(cumulativeInvestedAssets, newInvestments);
      accumulatedSavings += monthlySavings;
    } else if (monthlySavings > 0) {
      // No allocation defined, just track savings
      accumulatedSavings += monthlySavings;
    }

    // Calculate percentages relative to total income
    // fw-logo expects: income (activeIncome%), expense%, liabilities%
    // where activeIncome + passiveIncome = 100% of income
    // and expense + liabilities + savings = 100% of spending
    const activeIncomePercent = totalIncome > 0 ? percent(totalActiveIncome, totalIncome) : 0;
    const passiveIncomePercent = totalIncome > 0 ? percent(totalPassiveIncome, totalIncome) : 0;
    const expensePercent = totalIncome > 0 ? percent(generalExpenses, totalIncome) : 0;
    const liabilityPercent = totalIncome > 0 ? percent(liabilityEMI, totalIncome) : 0;
    const savingsPercent = Math.max(0, 100 - expensePercent - liabilityPercent);

    // Create wealth snapshot
    const wealthSnapshot = {
      date: formatDate(projectionDate),
      // Percentages for fw-logo
      activeIncome: activeIncomePercent,
      passiveIncome: passiveIncomePercent,
      expenses: expensePercent,
      liabilitiesExpenses: liabilityPercent,
      savings: savingsPercent,
      // Absolute values for reference
      totalIncome: Math.round(totalIncome),
      totalActiveIncome: Math.round(totalActiveIncome),
      totalPassiveIncome: Math.round(totalPassiveIncome),
      totalExpenses: Math.round(totalExpenses),
      generalExpenses: Math.round(generalExpenses),
      liabilityEMI: Math.round(liabilityEMI),
      netWorth: Math.round(totalAssetValue - totalLiabilityValue),
      accumulatedSavings: Math.round(accumulatedSavings),
      totalAssetValue: Math.round(totalAssetValue),
      totalLiabilityValue: Math.round(totalLiabilityValue),
      // Passive income breakdown
      passiveIncomeFromOriginalAssets: Math.round(passiveIncomeBreakdown.originalPassiveIncome),
      passiveIncomeFromInvestments: Math.round(passiveIncomeBreakdown.investedPassiveIncome),
      investmentBreakdown: passiveIncomeBreakdown.investmentBreakdown,
      // Future asset and liability projections
      projectedAssets: grownAssets.map((asset) => ({
        ...asset,
        amount: Math.round(asset.amount),
      })),
      projectedLiabilities: activeLiabilities.map((liability) => ({
        ...liability,
        remainingBalance: Math.round(liability.remainingBalance),
      })),
    };

    wealthTimeline.push(wealthSnapshot);

    // Continue projection for 6 months after achieving financial freedom
    if (ffAchievedAtMonth !== null && month >= ffAchievedAtMonth + 6) {
      // eslint-disable-next-line no-console
      console.log(`Projection complete: 6 months after financial freedom (achieved at month ${ffAchievedAtMonth})`);
      break;
    }
  }

  return {
    timeline: wealthTimeline,
    ffAchievedAtMonth,
  };
}

export const updateWealth = (accountStatement, balanceSheet, investmentAllocations = []) => {
  const wealthProjection = generateWealthProjection(
    accountStatement, 
    balanceSheet, 
    investmentAllocations
  );
  
  return {
    type: UPDATE_WEALTH,
    payload: wealthProjection,
  };
};
