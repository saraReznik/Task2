import React from 'react';

const Header = () => (
  <header className="ml-60 h-16 flex items-center justify-end pr-8 bg-white border-b shadow-sm">
    <div className="text-right">
      <p className="font-semibold">Hello Ofek!</p>
      <p className="text-sm text-gray-500">Ofeksolus17@gmail.co</p>
    </div>
    <img className="w-10 h-10 rounded-full ml-4" src="https://via.placeholder.com/40" alt="User" />
  </header>
);

export default Header;
