// src/routes/PrivateRoute.jsx
import React from 'react';
import { Navigate } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';

const PrivateRoute = ({ children }) => {
  const { user, loading } = useAuth();

  if (loading) {
    return <p className="text-center text-gray-600 mt-10">טוען...</p>;
  }

  return user ? children : <Navigate to="/login" />;
};

export default PrivateRoute;
