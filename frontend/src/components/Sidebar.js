import React, { useState } from 'react';
import { Menu, X } from 'lucide-react';

export default function Sidebar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <button
        className="md:hidden fixed top-4 left-4 p-2 bg-indigo-600 text-white rounded-md z-60"
        onClick={() => setIsOpen(!isOpen)}
      >
        {isOpen ? <X size={24} /> : <Menu size={24} />}
      </button>

      <div className={`h-screen w-64 bg-indigo-600 text-white shadow-lg flex flex-col justify-start p-4 fixed top-0 left-0 transition-transform duration-300 ease-in-out
        ${isOpen ? 'translate-x-0' : '-translate-x-full'} md:translate-x-0 md:w-64 z-50`}>

        <div className="flex items-center mb-8">
          <button
            className="md:hidden p-2 bg-white text-indigo-600 rounded-md"
            onClick={() => setIsOpen(false)}
          >
            <X size={24} />
          </button>
          <h1 className="text-2xl font-bold flex-1 text-center">Expense Tracker</h1>
        </div>

        <nav className="space-y-4">
          <a href="#" className="hover:text-gray-300 block py-2">Home</a>
          <a href="https://www.linkedin.com/in/mackenzie-sheridan-997a69158/"
            className="hover:text-gray-300 block py-2"
            target="_blank"
            rel="noopener noreferrer">
            About
          </a>
          <a href="https://wa.me/16507739275"
            className="hover:text-gray-300 block py-2"
            target="_blank"
            rel="noopener noreferrer">
            Contact
          </a>
        </nav>
      </div>
    </>
  );
}