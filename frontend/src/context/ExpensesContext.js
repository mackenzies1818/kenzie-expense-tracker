import React, { createContext, useContext, useState, useEffect } from "react";
import { fetchExpenses, addExpense, deleteExpense } from "../services/api";

const ExpensesContext = createContext();

export const ExpensesProvider = ({ children }) => {
  const [expenses, setExpenses] = useState([]);

  const loadExpenses = async () => {
    const data = await fetchExpenses();
    setExpenses(data);
  };

  const addNewExpense = async (expense) => {
    await addExpense(expense);
    loadExpenses();
  };

  const removeExpense = async (id) => {
    await deleteExpense(id);
    loadExpenses();
  };

  useEffect(() => {
    loadExpenses();
  }, []);

  return (
    <ExpensesContext.Provider value={{ expenses, addNewExpense, removeExpense }}>
      {children}
    </ExpensesContext.Provider>
  );
};

export const useExpenses = () => useContext(ExpensesContext);