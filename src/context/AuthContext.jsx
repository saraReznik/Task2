import React, { createContext, useContext, useEffect, useState } from 'react';

// יצירת ההקשר (Context)
const AuthContext = createContext();

// ספקית ההקשר (Provider) שתעטוף את האפליקציה
export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);      // מחזיק את המשתמש המחובר
  const [loading, setLoading] = useState(true); // כדי להראות Spinner אם צריך

  useEffect(() => {
    const storedUser = localStorage.getItem('user');
    if (storedUser) {
      setUser(JSON.parse(storedUser));
    }
    setLoading(false);
  }, []);

  const login = (userData) => {
    localStorage.setItem('user', JSON.stringify(userData));
    setUser(userData);
  };

  const logout = () => {
    localStorage.removeItem('user');
    setUser(null);
  };

  return (
    <AuthContext.Provider value={{ user, login, logout, loading }}>
      {children}
    </AuthContext.Provider>
  );
};

// Hook מותאם אישית לשימוש נוח
export const useAuth = () => useContext(AuthContext);
