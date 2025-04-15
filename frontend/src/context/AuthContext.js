import React, { createContext, useContext, useState, useEffect } from 'react';

// Create a context
const AuthContext = createContext();

// Custom hook to use auth context
export const useAuth = () => {
  console.log('auth context useAuth', AuthContext);
  const context = useContext(AuthContext);
  console.log(context);
  if (!context) {
    throw new Error('useAuth must be used within an AuthProvider');
  }
  return context;
};

// AuthProvider component to wrap around your app
export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    console.log('auth context useeffect', localStorage);
    const storedUser = JSON.parse(localStorage.getItem('user'));
    if (storedUser) {
      setUser(storedUser);
    }
    setLoading(false);
  }, []);

  // Handle login
  const login = (userData) => {
    console.log('in context in login with user data:', JSON.stringify(userData));
    setUser(userData);
    localStorage.setItem('user', JSON.stringify(userData));
  };

  // Handle logout
  const logout = () => {
    setUser(null);
    localStorage.removeItem('user');
  };

  // Handle signup (you could modify this to store user data as needed)
  const signup = (userData) => {
    setUser(userData);
    localStorage.setItem('user', JSON.stringify(userData));
  };

  return (
    <AuthContext.Provider value={{ user, login, logout, signup, loading }}>
      {children}
    </AuthContext.Provider>
  );
};
