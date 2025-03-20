import React, { Component } from "react";
import Sidebar from './components/Sidebar';
import Header from './components/Header';
import Summary from './components/Summary';
import ExpensesChart from './components/ExpensesChart';
import Transactions from './components/Transactions';
import LocationFilter from './components/LocationFilter';
import AddExpense from './components/AddExpense';
import { FaPlusCircle } from 'react-icons/fa';
import { ExpensesProvider } from "./context/ExpensesContext";

function App() {
  return (
    <ExpensesProvider>
      <div className="App">
        <div className="flex h-screen bg-gray-100">
            <Sidebar />
        </div>
        <div className="flex flex-col flex-1">
            <Header />
        </div>
        <div className="p-4">
            <ExpensesChart />
            <Transactions />
        </div>
        <AddExpense />
      </div>
    </ExpensesProvider>
  );
}

export default App;