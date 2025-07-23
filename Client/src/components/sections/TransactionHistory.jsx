
import React from 'react';
import { FaUtensils, FaShoppingBag } from 'react-icons/fa';

const transactions = [
  {
    name: 'Central Burger',
    category: 'Cafe and Restaurant',
    amount: -189.36,
    icon: <FaUtensils className="text-gray-400" />,
    color: 'text-purple-500',
  },
  {
    name: 'Great Coffee',
    category: 'Cafe and Restaurant',
    amount: -189.36,
    icon: <FaUtensils className="text-gray-400" />,
    color: 'text-purple-500',
  },
  {
    name: 'Grocery Delivery',
    category: 'Food Delivery',
    amount: 350.0,
    icon: <FaShoppingBag className="text-gray-400" />,
    color: 'text-cyan-500',
  },
];

const TransactionHistory = () => {
  return (
    <div className="bg-white p-6 rounded-2xl shadow-md w-full max-w-md">
      <h2 className="text-lg font-bold mb-4">Transaction history</h2>
      <div className="flex space-x-6 text-sm font-medium text-gray-500 border-b pb-2 mb-4">
        <span className="text-black border-b-2 border-black pb-1">All</span>
        <span>Income</span>
        <span>Expenses</span>
      </div>
      <p className="text-xs text-gray-400 mb-2">Pending</p>
      <div className="space-y-4">
        {transactions.map((t, index) => (
          <div key={index} className="flex items-center justify-between">
            <div className="flex items-center space-x-3">
              <div className="w-8 h-8 bg-gray-100 rounded-full flex items-center justify-center">
                {t.icon}
              </div>
              <div>
                <div className="font-semibold text-sm">{t.name}</div>
                <div className="text-xs text-gray-400">{t.category}</div>
              </div>
            </div>
            <div className={`font-semibold ${t.color}`}>
              {t.amount < 0 ? '-' : '+'}${Math.abs(t.amount).toFixed(2)}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default TransactionHistory;
