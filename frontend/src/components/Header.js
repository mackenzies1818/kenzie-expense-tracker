import React from 'react';
import { useAuth } from "../context/AuthContext";

const Header = () => {
  const { logout } = useAuth();

  const handleLogout = () => {
    if (window.confirm("Are you sure you want to logout?")) {
        logout();
    }
  };

  return (
      <div className="flex justify-between items-left bg-white pb-8">
        <h2 className="text-3xl font-semibold">Dashboard</h2>
          <button onClick={handleLogout}>Logout</button>

      </div>
  )
};

export default Header;
