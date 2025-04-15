import React from "react";
import Sidebar from './Sidebar';
import Header from './Header';
import Summary from './Summary';
import ExpensesChart from './ExpensesChart';
import Transactions from './Transactions';
import AddExpense from './AddExpense';
const Home = () => {

  return (
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
  );
};

export default Home;