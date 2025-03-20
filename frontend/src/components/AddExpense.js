import React, { useState } from "react";
import { useExpenses } from "../context/ExpensesContext";
import { categories } from "../constants/Categories";

//TODO: add functionality of payment method, for now, assuming cash
const AddExpense = () => {
  const { addNewExpense } = useExpenses();
  const [isOpen, setIsOpen] = useState(false);
  const [formData, setFormData] = useState({ category : "", amount: "", date: "", location : "", description: "" });

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
    setFormData({ category : "", amount: "", date: "", location : "", description: "" });
    setIsOpen(false);
  };

  return (
    <div>
      <button onClick={() => setIsOpen(true)}>Add Expense</button>
      {isOpen && (
        <div className="modal">
          <form onSubmit={handleSubmit}>
            <input
              type="date"
              name="date"
              value={formData.date}
              onChange={handleChange}
              required
            />
            <select
            id="category"
            name="category"
            value={formData.category}
            onChange={handleChange}
            required
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
            <label>Amount:</label>
            <input
              type="number"
              name="amount"
              value={formData.amount}
              onChange={handleChange}
              required
            />
            <label>Location:</label>
            <input
              type="text"
              name="location"
              value={formData.location}
              onChange={handleChange}
              required
            />
            <label>description:</label>
            <input
              type="text"
              name="description"
              value={formData.description}
              onChange={handleChange}
              required
            />
            <button type="submit">Submit</button>
            <button type="button" onClick={() => setIsOpen(false)}>
              Cancel
            </button>
          </form>
        </div>
      )}
    </div>
  );
};

export default AddExpense;