import React, { useState, useEffect } from 'react';
import { Pie } from 'react-chartjs-2';
import { useExpenses } from '../context/ExpensesContext';
import { categories } from '../constants/Categories';
import LocationFilter from './LocationFilter';
import {
  Chart as ChartJS,
  ArcElement,
  Title,
  Tooltip,
  Legend
} from 'chart.js';

ChartJS.register(ArcElement, Title, Tooltip, Legend);

const ExpensesChart = () => {
  const { expenses } = useExpenses();
  const [locationFilter, setLocationFilter] = useState('');
  const [locations, setLocations] = useState([]);

  useEffect(() => {
    const uniqueLocations = Array.from(new Set(expenses.map(exp => exp.location)));
    setLocations(uniqueLocations);
  }, [expenses]);

  const filteredExpenses = locationFilter
    ? expenses.filter((expense) => expense.location === locationFilter)
    : expenses;

  const data = {
    labels: categories.map((c) => c.label),
    datasets: [
      {
        label: `Expenses by Category ${locationFilter ? `(Location: ${locationFilter})` : ''}`,
        data: filteredExpenses.reduce((acc, expense) => {
          const categoryIndex = categories.findIndex((c) => c.id === expense.category);
          if (categoryIndex !== -1) acc[categoryIndex] += expense.amount;
          return acc;
        }, Array(categories.length).fill(0)),
        backgroundColor: [
          '#4CAF50', '#FF9800', '#2196F3', '#F44336', '#9C27B0',
        ],
        hoverOffset: 4,
      },
    ],
  };

  const options = {
    responsive: true,
    maintainAspectRatio: false,
    plugins: {
      title: {
        display: true,
        text: 'Expense Distribution by Category',
      },
      tooltip: {
        backgroundColor: 'rgba(0, 0, 0, 0.8)',
        titleColor: '#fff',
        bodyColor: '#fff',
      },
    },
  };

  return (
    <div className="w-full max-w-4xl mx-auto p-4 bg-white rounded-2xl">
      <div className="mb-2">
        <LocationFilter
          locationFilter={locationFilter}
          setLocationFilter={setLocationFilter}
          locations={locations}
        />
      </div>
      <div className="relative h-[300px]">
        <Pie data={data} options={options} />
      </div>
    </div>
  );
};

export default ExpensesChart;
