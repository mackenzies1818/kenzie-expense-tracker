import React, { useState, useEffect } from 'react';
import { useExpenses } from "../context/ExpensesContext";

const Summary = () => {
  const { expenses } = useExpenses();
  const [monthlyTotal, setMonthlyTotal] = useState(0);
  const [yearlyTotal, setYearlyTotal] = useState(0);

  // Function to sum amounts for the current month
  const sumAmountsForCurrentMonth = () => {
    const currentDate = new Date();
    const currentMonth = currentDate.getMonth(); // 0-based month (January = 0)
    const currentYear = currentDate.getFullYear();

    return expenses.reduce((sum, item) => {
      const itemDate = new Date(item.date);
      if (itemDate.getFullYear() === currentYear && itemDate.getMonth() === currentMonth) {
        return sum + item.amount;
      }
      return sum;
    }, 0);
  };

  // Function to sum amounts for the current year
  const sumAmountsForCurrentYear = () => {
    const currentYear = new Date().getFullYear();

    return expenses.reduce((sum, item) => {
      const itemDate = new Date(item.date);
      if (itemDate.getFullYear() === currentYear) {
        return sum + item.amount;
      }
      return sum;
    }, 0);
  };

  // Update totals when the data changes
  useEffect(() => {
    setMonthlyTotal(sumAmountsForCurrentMonth(expenses));
    setYearlyTotal(sumAmountsForCurrentYear(expenses));
  }, [expenses]);

  return (
  <div>
      <h2 className ="text-2xl font-semibold pb-3 pt-10">Summary</h2>
      <div className="grid grid-cols-2 gap-4 p-4">
        <div className="bg-white p-4 rounded shadow-md text-center">
            <h3 className="text-lg font-semibold">Monthly Expenses</h3>
            <p className="text-2xl font-bold">${monthlyTotal}</p>
        </div>
        <div className="bg-white p-4 rounded shadow-md text-center">
            <h3 className="text-lg font-semibold">Year to Date Expenses</h3>
            <p className="text-2xl font-bold">${yearlyTotal}</p>
        </div>
      </div>
  </div>
  );
};

export default Summary;
