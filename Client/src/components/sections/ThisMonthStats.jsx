import React from 'react';
import { thisMonthStats } from '../../data/dashboardMock';

const StatBox = ({ title, value }) => (
  <div className="bg-white p-4 rounded-xl shadow text-center">
    <p className="text-gray-500 text-sm">{title}</p>
    <p className="text-2xl font-bold mt-2">{value}</p>
  </div>
);

const ThisMonthStats = () => (
  <div className="grid grid-cols-3 gap-4">
    {thisMonthStats.map((item, index) => (
      <StatBox key={index} title={item.title} value={item.value} />
    ))}
  </div>
);

export default ThisMonthStats;
