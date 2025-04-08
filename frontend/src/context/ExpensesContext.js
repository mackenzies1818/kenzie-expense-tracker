import React, { createContext, useContext, useState, useEffect } from "react";
import { fetchExpenses, addExpense, deleteExpense } from "../services/api";

const ExpensesContext = createContext();

export const ExpensesProvider = ({ children }) => {
  const [expenses, setExpenses] = useState([]);
  const [filters, setFilters] = useState({});

  const loadExpenses = async (customFilters = filters ) => {
    const data = await fetchExpenses(customFilters);
    setExpenses(data);
  };

  const addNewExpense = async (expense) => {
    await addExpense(expense);
    loadExpenses();
  };

  const updateFilters = (newFilters) => {
    setFilters(newFilters);
    loadExpenses(newFilters);
  };

  const removeExpense = async (id) => {
    await deleteExpense(id);
    loadExpenses();
  };

  useEffect(() => {
    loadExpenses();
  }, []);

  return (
    <ExpensesContext.Provider value={{ expenses, addNewExpense, removeExpense, updateFilters, filters }}>
      {children}
    </ExpensesContext.Provider>
  );
};

export const useExpenses = () => useContext(ExpensesContext);