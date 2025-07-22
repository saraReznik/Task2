import React, { useEffect, useState } from 'react';
import { getPayments, getInvoices } from '../../services/api';

const Overview = () => {
  const [payments, setPayments] = useState(null);
  const [invoices, setInvoices] = useState(null);

  useEffect(() => {
    getPayments().then(res => setPayments(res.data.totalAmount));
    getInvoices().then(res => setInvoices(res.data.count));
  }, []);

  return (
    <div className="grid grid-cols-2 gap-4">
      <div className="bg-white p-6 rounded-xl shadow flex items-center justify-between">
        <div>
          <h4 className="text-gray-500 text-sm">Payments</h4>
          <p className="text-3xl font-bold">${payments?.toLocaleString()}</p>
        </div>
        <span className="bg-green-100 text-green-700 px-2 py-1 rounded text-sm">+15%</span>
      </div>
      <div className="bg-white p-6 rounded-xl shadow flex items-center justify-between">
        <div>
          <h4 className="text-gray-500 text-sm">Invoices</h4>
          <p className="text-3xl font-bold">{invoices}</p>
        </div>
        <span className="bg-purple-100 text-purple-700 px-2 py-1 rounded text-sm">-10%</span>
      </div>
    </div>
  );
};

export default Overview;
