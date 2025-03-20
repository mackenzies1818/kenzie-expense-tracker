import React from "react";
import { useExpenses } from "../context/ExpensesContext";

const Transactions = () => {
  const { expenses, removeExpense } = useExpenses();

  const handleDelete = (id) => {
    if (window.confirm("Are you sure you want to delete this transaction?")) {
      removeExpense(id);
    }
  };
  //TODO: see if i can fetch these columns and values from constants
  return (
    <table className="w-full bg-white shadow-md mt-4">
      <thead>
        <tr className="bg-gray-200">
          <th className="p-2">Date</th>
          <th className="p-2">Category</th>
          <th className="p-2">Amount</th>
          <th className="p-2">Location</th>
          <th className="p-2">Description</th>
        </tr>
      </thead>
      <tbody>
        {expenses.map((expense) => (
          <tr key={expense._id}>
            <td className="p-2">{expense.date}</td>
            <td className="p-2">{expense.category}</td>
            <td className="p-2">${expense.amount}</td>
            <td className="p-2">{expense.location}</td>
            <td className="p-2">{expense.description}</td>
            <td className="p-2">
              <button
                onClick={() => handleDelete(expense._id)}
                className="text-red-500 hover:text-red-700"
              >
                X
              </button>
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  );
}

export default Transactions;
