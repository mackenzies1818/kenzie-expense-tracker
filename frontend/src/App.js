import React from 'react';
import Home from './components/Home';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import Signup from './components/Signup';
import Login from './components/Login';
import { ExpensesProvider } from './context/ExpensesContext';
import { AuthProvider, useAuth } from './context/AuthContext';

const ProtectedRoute = ({ children }) => {
  const { user, loading } = useAuth();
  if (loading) return <div>Loading...</div>;
  return user ? children : <Navigate to="/login" />;
};
const ExpensesWrapper = ({ children }) => {
  const { user, loading } = useAuth();

  if (loading) return <div>Loading...</div>;

  if (!user) return children;

  return (
    <ExpensesProvider user={user}>
      {children}
    </ExpensesProvider>
  );
};

function App() {
  return (
    <AuthProvider>
      <Router>
        <ExpensesWrapper>
          <Routes>
            <Route path="/signup" element={<Signup />} />
            <Route path="/login" element={<Login />} />
            <Route path="/" element={<ProtectedRoute><Home /></ProtectedRoute>} />
            <Route path="*" element={<Navigate to="/login" />} />
          </Routes>
        </ExpensesWrapper>
      </Router>
    </AuthProvider>
  );
}

export default App;