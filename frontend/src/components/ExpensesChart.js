import React, { useState, useEffect } from 'react';
import { Pie } from 'react-chartjs-2';
import { useExpenses } from '../context/ExpensesContext';
import { categories } from '../constants/Categories';
import LocationFilter from './LocationFilter';
import {
  Chart as ChartJS,
  ArcElement, // Import ArcElement for pie charts
  Title,
  Tooltip,
  Legend
} from 'chart.js';

// Register the necessary components
ChartJS.register(
  ArcElement, // Needed for pie chart
  Title,
  Tooltip,
  Legend
);

//TODO: can also add a filter based on other fields and see if i can extend all of the filters from the same type of component?
const ExpensesChart = () => {
  const { expenses } = useExpenses();
  const [locationFilter, setLocationFilter] = useState('');
  const [locations, setLocations] = useState([]);

  // Extract unique locations from expenses
  useEffect(() => {
    const uniqueLocations = Array.from(new Set(expenses.map(expense => expense.location)));
    setLocations(uniqueLocations);
    console.log(expenses);
  }, [expenses]);

  // Filter expenses based on selected location
  const filteredExpenses = locationFilter
    ? expenses.filter((expense) => expense.location === locationFilter)
    : expenses;

  const data = {
    labels: categories.map((c) => c.label), // Labels for pie chart
    datasets: [
      {
        label: `Expenses by Category ${locationFilter ? `(Location: ${locationFilter})` : ''}`,
        data: filteredExpenses.reduce((acc, expense) => {
          const categoryIndex = categories.findIndex((c) => c.id === expense.category);
          if (categoryIndex !== -1) acc[categoryIndex] += expense.amount;
          return acc;
        }, Array(categories.length).fill(0)),
        backgroundColor: [
          '#4CAF50', '#FF9800', '#2196F3', '#F44336', '#9C27B0', // Pie slice colors
        ], // Ensure this matches the number of categories
        hoverOffset: 4,
      },
    ],
  };

  const options = {
    responsive: true,
    maintainAspectRatio: false, // Allows custom sizing for the chart
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
    }
  };

  return (
    <div className="chart-container">
      <LocationFilter
        locationFilter={locationFilter}
        setLocationFilter={setLocationFilter}
        locations={locations}
      />
      <div style={{ position: 'relative', height: '300px', width: '100%' }}>
        <Pie data={data} options={options} />
      </div>
    </div>
  );
};

export default ExpensesChart;
