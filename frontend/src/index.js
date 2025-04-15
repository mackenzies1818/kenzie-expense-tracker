import React from 'react';
import { createRoot } from "react-dom/client";
import App from './App';
import { ExpensesProvider } from "./context/ExpensesContext";
import './index.css';
import './styles/tailwind.css';

const container = document.getElementById("root");
const root = createRoot(container);

root.render(
  <ExpensesProvider>
    <App />
  </ExpensesProvider>,
);