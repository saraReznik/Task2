// src/App.jsx
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import MainLayout from './components/layout/MainLayout';
import PrivateRoute from './routes/PrivateRoute';
import Login from './pages/Login';

function App() {
  return (
    <Router>
      <Routes>
        {/* מסך התחברות – פתוח */}
        <Route path="/login" element={<Login />} />

        {/* כל שאר הדפים – מוגנים */}
        <Route
          path="/*"
          element={
            <PrivateRoute>
              <MainLayout />
            </PrivateRoute>
          }
        />
      </Routes>
    </Router>
  );
}

export default App;
