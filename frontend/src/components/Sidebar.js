import React, { Component } from "react";
import { FaChartPie, FaWallet, FaCog, FaGlobe } from "react-icons/fa";

//TODO
class Sidebar extends Component {
  render() {
    return (
      <div className="h-screen w-64 bg-indigo-600 text-white shadow-lg flex flex-col justify-start p-4 fixed top-0 left-0">
        <h1 className="text-2xl font-bold mb-8">Expense Tracker</h1>
        <nav className="space-y-4">
          <a href="#" className="hover:text-gray-300 block py-2">Home</a>
          <a
            href="https://www.linkedin.com/in/mackenzie-sheridan-997a69158/"
            className="hover:text-gray-300 block py-2"
            target="_blank"
            rel="noopener noreferrer"
            >
            About</a>
          <a
            href="https://wa.me/16507739275"
            className="hover:text-gray-300 block py-2"
            target="_blank"
            rel="noopener noreferrer"
            >
            Contact</a>
        </nav>
      </div>
    );
  }
}

export default Sidebar;
