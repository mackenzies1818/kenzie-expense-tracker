import React, { useState, useEffect } from "react";
import { Bar } from "react-chartjs-2";
import { useExpenses } from "../context/ExpensesContext";
import { categories } from "../constants/Categories";
import LocationFilter from "./LocationFilter";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend
} from "chart.js";

// Register the necessary components
ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend
);

//TODO: can also add a filter based on other fields and see if i can extend all of the filters from the same type of component?
const ExpensesChart = () => {
  const { expenses } = useExpenses();
  const [locationFilter, setLocationFilter] = useState("");
  const [locations, setLocations] = useState([]);

  // Extract unique locations from expenses
  useEffect(() => {
    const uniqueLocations = Array.from(new Set(expenses.map(expense => expense.location)));
    setLocations(uniqueLocations);
  }, [expenses]);

  // Filter expenses based on selected location
  const filteredExpenses = locationFilter
    ? expenses.filter((expense) => expense.location === locationFilter)
    : expenses;

  const data = {
    labels: [...categories.map((c) => c.label)],
    datasets: [
      {
        label: `Expenses ${locationFilter ? `(Location: ${locationFilter})` : ""}`,
        data: filteredExpenses.reduce((acc, expense) => {
          const categoryIndex = categories.findIndex((c) => c.id === expense.category);
          if (categoryIndex !== -1) acc[categoryIndex] += expense.amount;
          return acc;
        }, Array(categories.length).fill(0)),
        backgroundColor: ["#4CAF50", "#FF9800", "#2196F3", "#F44336", "#9C27B0"],
      },
    ],
  };

  return (
    <div>
      <LocationFilter
        locationFilter={locationFilter}
        setLocationFilter={setLocationFilter}
        locations={locations}
      />
      <Bar data={data} />
    </div>
  );
};
export default ExpensesChart;
