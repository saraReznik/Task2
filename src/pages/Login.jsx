import React, { useState } from 'react';
import LoginForm from '../components/Auth/LoginForm';
import { useNavigate } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';
import authService from '../services/authService';

const Login = () => {
  const [loading, setLoading] = useState(false);
  const { login } = useAuth(); // ← שימוש בהקשר
  const navigate = useNavigate();

  const handleLogin = async (credentials) => {
    try {
      setLoading(true);
      const response = await authService.login(credentials);
      login(response); // ← עדכון context וה-localStorage
      navigate('/');
    } catch (error) {
      alert('שגיאה בהתחברות: ' + error.message);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-blue-100 to-blue-300">
      <LoginForm onSubmit={handleLogin} loading={loading} />
    </div>
  );
};

export default Login;
