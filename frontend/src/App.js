import React from "react";
import Sidebar from './components/Sidebar';
import Header from './components/Header';
import Summary from './components/Summary';
import ExpensesChart from './components/ExpensesChart';
import Transactions from './components/Transactions';
import AddExpense from './components/AddExpense';
import { ExpensesProvider } from "./context/ExpensesContext";

function App() {
  return (
    <ExpensesProvider>
      <div className="App">
        <div className="flex bg-gray-100">
            <Sidebar />
        </div>
        <div className="ml-64 p-6 flex-1">
            <h1><Header /></h1>
            <ExpensesChart />
            <h2 className ="text-xl font-semibold pb-3">Transactions</h2>
            <AddExpense />
            <Transactions />
            <Summary />
        </div>
      </div>
    </ExpensesProvider>
  );
}

export default App;