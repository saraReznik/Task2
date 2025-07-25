// import React from 'react';
// import profileImage from '../../assets/profile.png'; // נתיב לתמונה

// const Header = () => (
//   <header className="ml-60 h-16 flex items-center justify-between px-8">
   
//     <div className="flex items-center bg-red-50 border border-red-300 text-red-700 px-4 py-2 rounded-full text-sm">
//       <span>3 clients haven’t completed payment – estimated ₪2,500</span>
//       <span className="ml-2">💰</span>
//     </div>

//     <div className="flex items-center">
//       <div className="text-right">
//         <p className="font-semibold">Hello Ofek!</p>
//         <p className="text-sm text-gray-500">Ofeksolus17@gmail.co</p>
//       </div>
//       <img
//         className="w-10 h-10 rounded-full ml-4 object-cover"
//         src={profileImage}
//         alt="User"
//       />
//     </div>
//   </header>
// );

// export default Header;
// src/components/layout/Header.jsx
import React from 'react';
import { useAuth } from '../../context/AuthContext';
import profileImage from '../../assets/profile.png';

const Header = () => {
  const { user, logout } = useAuth();

  return (
    <header className="ml-60 h-16 flex items-center justify-between px-8">
      {/* הודעת התראה */}
      <div className="flex items-center bg-red-50 border border-red-300 text-red-700 px-4 py-2 rounded-full text-sm">
        <span>3 clients haven’t completed payment – estimated ₪2,500</span>
        <span className="ml-2">💰</span>
      </div>

      {/* מידע משתמש + כפתור Logout */}
      <div className="flex items-center gap-4">
        <div className="text-right">
          <p className="font-semibold">Hello {user?.name || 'User'}!</p>
          <p className="text-sm text-gray-500">{user?.phone}</p>
        </div>

        <img
          className="w-10 h-10 rounded-full object-cover"
          src={profileImage}
          alt="User"
        />

        <button
          onClick={logout}
          className="bg-gray-200 hover:bg-gray-300 text-sm text-gray-800 px-3 py-1 rounded-lg transition"
        >
          התנתק
        </button>
      </div>
    </header>
  );
};

export default Header;
