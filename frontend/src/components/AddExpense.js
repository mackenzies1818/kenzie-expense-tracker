import React, { useState } from 'react';
import { useExpenses } from '../context/ExpensesContext';
import { categories } from '../constants/Categories';

//TODO: add functionality of payment method, for now, assuming cash
const AddExpense = () => {
  const { addNewExpense } = useExpenses();
  const [isOpen, setIsOpen] = useState(false);
  const [formData, setFormData] = useState({ category : '', amount: '', date: '', location : '', description: '' });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    //TODO: add validation on fields
    e.preventDefault();
    addNewExpense(formData);
    setFormData({ category : '', amount: '', date: '', location : '', description: '' });
    setIsOpen(false);
  };

  return (
    <div className = "py-4">
      <button
        onClick={() => setIsOpen(true)}
        className="px-6 py-2 bg-indigo-600 text-white rounded-lg shadow-md hover:bg-indigo-700 transition">
        Add Expense
      </button>
      {isOpen && (
        <div className="fixed inset-0 flex items-center justify-center bg-gray-800 bg-opacity-50">
          <div className="bg-white rounded-lg p-8 shadow-lg max-w-lg w-full">
            <h2 className="text-2xl font-semibold mb-4">Add New Expense</h2>
            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <label htmlFor="date" className="form-label">
                  Date:
                </label>
                <input
                  type="date"
                  name="date"
                  id="date"
                  value={formData.date}
                  onChange={handleChange}
                  required
                  className="form-field"
                />
              </div>
              <div>
                <label htmlFor="category" className="form-label">
                  Category:
                </label>
                <select
                  id="category"
                  name="category"
                  value={formData.category}
                  onChange={handleChange}
                  required
                  className="form-field"
                >
                  <option value="" disabled>
                    Select a category
                  </option>
                  {categories.map((category) => (
                    <option key={category.id} value={category.id}>
                      {category.label}
                    </option>
                  ))}
                </select>
              </div>
              <div>
                <label htmlFor="amount" className="form-label">
                  Amount:
                </label>
                <input
                  type="number"
                  name="amount"
                  id="amount"
                  value={formData.amount}
                  onChange={handleChange}
                  required
                  className="form-field"
                />
              </div>
              <div>
                <label htmlFor="location" className="form-label">
                  Location:
                </label>
                <input
                  type="text"
                  name="location"
                  id="location"
                  value={formData.location}
                  onChange={handleChange}
                  required
                  className="form-field"
                />
              </div>
              <div>
                <label htmlFor="description" className="form-label">
                  Description:
                </label>
                <input
                  type="text"
                  name="description"
                  id="description"
                  value={formData.description}
                  onChange={handleChange}
                  required
                  className="form-field"
                />
              </div>
              <div className="flex justify-between space-x-4">
                <button
                  type="submit"
                  className="w-1/2 px-4 py-2 bg-indigo-600 text-white rounded-lg hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500"
                >
                  Submit
                </button>
                <button
                  type="button"
                  onClick={() => setIsOpen(false)}
                  className="w-1/2 px-4 py-2 bg-gray-300 text-black rounded-lg hover:bg-gray-400 focus:outline-none"
                >
                  Cancel
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </div>
  );
};

export default AddExpense;