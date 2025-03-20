import React, { Component } from "react";
import { FaChartPie, FaWallet, FaCog, FaGlobe } from "react-icons/fa";

//TODO
class Sidebar extends Component {
  render() {
    return (
      <div className="w-64 h-screen bg-gray-800 text-white flex flex-col">
        <h1 className="text-2xl font-bold p-4">Expense Tracker</h1>
        <nav className="flex flex-col gap-4 p-4">
          <a href="#" className="flex items-center gap-2 hover:bg-gray-700 p-2 rounded">
            <FaChartPie /> Dashboard
          </a>
          <a href="#" className="flex items-center gap-2 hover:bg-gray-700 p-2 rounded">
            <FaWallet /> Expenses
          </a>
          <a href="#" className="flex items-center gap-2 hover:bg-gray-700 p-2 rounded">
            <FaGlobe /> Locations
          </a>
          <a href="#" className="flex items-center gap-2 hover:bg-gray-700 p-2 rounded">
            <FaCog /> Settings
          </a>
        </nav>
      </div>
    );
  }
}

export default Sidebar;
