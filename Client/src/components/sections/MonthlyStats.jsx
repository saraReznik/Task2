import React from 'react';

const data = [
  { week: 'week 1', proposals: 30000, income: 20000, payment: 50000 },
  { week: 'week 2', proposals: 50000, income: 30000, payment: 60000 },
  { week: 'week 3', proposals: 25000, income: 15000, payment: 40000 },
  { week: 'week 4', proposals: 40000, income: 20000, payment: 45000 },
];

const Bar = ({ label, value, color }) => (
  <div className="flex flex-col items-center mx-2">
    <div
      className="w-6 rounded-t"
      style={{
        height: `${value / 1000}px`,
        backgroundColor: color,
      }}
    />
    <span className="text-xs mt-1">{label}</span>
  </div>
);

const MonthlyStats = () => (
  <div className="bg-white p-6 rounded-xl shadow">
    <h3 className="text-lg font-semibold mb-4">Monthly Statistics</h3>
    <div className="flex justify-around items-end h-48">
      {data.map((item, i) => (
        <div key={i} className="flex flex-col items-center">
          <div className="flex gap-1">
            <Bar label="P" value={item.proposals} color="#a5b4fc" />
            <Bar label="I" value={item.income} color="#67e8f9" />
            <Bar label="Pay" value={item.payment} color="#c084fc" />
          </div>
          <span className="text-xs mt-2">{item.week}</span>
        </div>
      ))}
    </div>
  </div>
);

export default MonthlyStats;
