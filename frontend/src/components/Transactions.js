import React, { useState, useEffect } from 'react';
import { useExpenses } from '../context/ExpensesContext';
import { categories } from '../constants/Categories';

const Transactions = () => {
  const { expenses, removeExpense } = useExpenses();
  const [sortedExpenses, setSortedExpenses] = useState(expenses);
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [sortOrder, setSortOrder] = useState('asc');

  const handleDelete = (id) => {
    if (window.confirm('Are you sure you want to delete this transaction?')) {
      removeExpense(id);
    }
  };
  // Sync sortedExpenses when context data changes
  useEffect(() => {
    let filtered = [...expenses];
    if (selectedCategory !== 'all') {
      filtered = filtered.filter((e) => e.category === selectedCategory);
    }

    const sorted = filtered.sort((a, b) => {
      const dateA = new Date(a.date);
      const dateB = new Date(b.date);
      return sortOrder === 'asc' ? dateA - dateB : dateB - dateA;
    });

    setSortedExpenses(sorted);
    setCurrentPage(1);

  }, [expenses, selectedCategory, sortOrder]);
  //handle sorting of date column
  const sortByDate = () => {
    const sorted = [...sortedExpenses].sort((a, b) => {
      const dateA = new Date(a.date);
      const dateB = new Date(b.date);

      return sortOrder === 'asc' ? dateA - dateB : dateB - dateA;
    });

    setSortedExpenses(sorted);
    setSortOrder(sortOrder === 'asc' ? 'desc' : 'asc');
  };

  //pagination setup
  const [currentPage, setCurrentPage] = useState(1);
  const rowsPerPage = 5;
  const indexOfLastRow = currentPage * rowsPerPage;
  const indexOfFirstRow = indexOfLastRow - rowsPerPage;
  const currentRows = sortedExpenses.slice(indexOfFirstRow, indexOfLastRow);
  const totalPages = Math.ceil(sortedExpenses.length / rowsPerPage);
  const handleNextPage = () => {
    setCurrentPage((prevPage) => Math.min(prevPage + 1, totalPages));
  };
  const handlePrevPage = () => {
    setCurrentPage((prevPage) => Math.max(prevPage - 1, 1));
  };

  // Reset page on data change
  useEffect(() => {
    setCurrentPage(1);
  }, [sortedExpenses]);


  //TODO: see if i can fetch these columns and values from constants
  return (
    <div className="bg-white shadow-lg rounded-lg mx-auto w-full">
      <table className="w-full table-auto h-full text-[10px] leading-3 border-spacing-0 border-collapse">
        <thead>
          <tr className="bg-indigo-600 text-white text-sm">
            <th
              className="py-[2px] px-[1px] text-center align-middle leading-none w-1/5 cursor-pointer hover:bg-indigo-700 transition-all duration-200"
              onClick={sortByDate}
            >
             Date {sortOrder === 'asc' ? '↑' : '↓'}
            </th>
            <th>
              <select
                value={selectedCategory}
                onChange={(e) => setSelectedCategory(e.target.value)}
                className="bg-indigo-600 text-white text-xs font-semibold rounded-md p-[2px] cursor-pointer"
              >
                <option value="all">Category</option>
                {categories.map((cat) => (
                  <option key={cat.id} value={cat.id}>
                    {cat.label}
                  </option>
                ))}
              </select>
            </th>
            <th className="transactions-label">Amount</th>
            <th className="transactions-label">Location</th>
            <th className="transactions-label">Description</th>
            <th className="transactions-label"></th>
          </tr>
        </thead>
        <tbody className="text-xs">
          {currentRows.map((expense) => (
            <tr key={expense._id} className="border-t hover:bg-gray-100 text-xs leading-none py-0 h-[30px]" >
              <td className="transactions-field">{expense.date}</td>
              <td className="transactions-field">{expense.category}</td>
              <td className="transactions-field">${expense.amount}</td>
              <td className="transactions-field">{expense.location}</td>
              <td className="transactions-field">{expense.description}</td>
              <td className="transactions-field">
                <button
                  onClick={() => handleDelete(expense._id)}
                  className="px-2 py-1 bg-red-500 text-white font-semibold rounded-lg shadow-md hover:bg-red-600 hover:shadow-lg focus:outline-none focus:ring-2 focus:ring-red-400 focus:ring-opacity-75 transition-all duration-200"
                >
                X
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
      <div className="flex justify-center space-x-4 py-4 text-sm">
        <button
          onClick={handlePrevPage}
          disabled={currentPage === 1}
          className={`px-2 py-1 rounded-lg font-semibold ${
            currentPage === 1
              ? 'bg-gray-300 cursor-not-allowed'
              : 'bg-indigo-600 hover:bg-indigo-700 text-white'
          }`}
        >
        Previous
        </button>
        <span className="font-semibold">
        Page {totalPages === 0 ? 0 : currentPage} of {totalPages}
        </span>
        <button
          onClick={handleNextPage}
          disabled={currentPage === totalPages}
          className={`px-2 py-1 rounded-lg font-semibold ${
            currentPage === totalPages
              ? 'bg-gray-300 cursor-not-allowed'
              : 'bg-indigo-600 hover:bg-indigo-700 text-white'
          }`}
        >
        Next
        </button>
      </div>
    </div>
  );
};

export default Transactions;
