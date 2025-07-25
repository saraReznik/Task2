import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import './styles/index.css';
import { AuthProvider } from './context/AuthContext'; // ✅ נייבא את ההקשר

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <AuthProvider>         {/* ✅ עטיפה של האפליקציה */}
      <App />
    </AuthProvider>
  </React.StrictMode>
);
