import React, { createContext, useContext, useState, useEffect } from "react";
import { fetchExpenses, addExpense, deleteExpense } from "../services/api";

const ExpensesContext = createContext();

export const ExpensesProvider = ({ children, user }) => {
  const [expenses, setExpenses] = useState([]);
  const [filters, setFilters] = useState({});

  useEffect(() => {
    if (user?.userId) {
      loadExpenses();
    }
  }, );

  const loadExpenses = async (customFilters = filters ) => {
  if (user?.userId) {
       const data = await fetchExpenses(user.userId, customFilters);
       setExpenses(data);
    }
  };

  const addNewExpense = async (expense) => {
    if (user?.userId) {
       expense.userId = user.userId;
       await addExpense(expense);
       loadExpenses();
    }
  };

  const updateFilters = (newFilters) => {
    setFilters(newFilters);
    loadExpenses(newFilters);
  };

  const removeExpense = async (id) => {
    await deleteExpense(id);
    loadExpenses();
  };

  return (
    <ExpensesContext.Provider value={{ expenses, addNewExpense, removeExpense, updateFilters, filters }}>
      {children}
    </ExpensesContext.Provider>
  );
};

export const useExpenses = () => useContext(ExpensesContext);