import React from 'react';
import { transactions } from '../../data/dashboardMock';

const TransactionItem = ({ name, amount, category }) => (
  <div className="flex justify-between py-2 border-b">
    <span>{name}</span>
    <span className={amount < 0 ? "text-red-500" : "text-green-600"}>
      {amount < 0 ? '-' : '+'}${Math.abs(amount).toFixed(2)}
    </span>
  </div>
);

const Transactions = () => (
  <div className="bg-white p-6 rounded-xl shadow">
    <h3 className="text-lg font-semibold mb-4">Recent Transactions</h3>
    <div className="text-sm space-y-2">
      {transactions.map((t, i) => (
        <TransactionItem key={i} {...t} />
      ))}
    </div>
  </div>
);

export default Transactions;
