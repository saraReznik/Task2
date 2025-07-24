
import React, { useEffect, useState } from 'react';
import axios from 'axios';

const formatUSD = (amount) =>
  `$${Number(amount).toLocaleString('en-US', { minimumFractionDigits: 0 })}`;

const cardsConfig = [
  {
    title: 'Payments',
    apiValue: '/api/payments/total',
    apiChange: '/api/payments/percentage-change',
    format: 'usd',
    color: 'bg-cyan-500',
  },
  {
    title: 'Invoices',
    apiValue: '/api/invoices/count',
    apiChange: '/api/invoices/percentage-change',
    format: 'number',
    color: 'bg-purple-500',
  },
];

const Overview = () => {
  const [cardData, setCardData] = useState(
    cardsConfig.map(() => ({ value: 0, change: '0%' }))
  );

  useEffect(() => {
    const fetchData = async () => {
      try {
        const results = await Promise.all(
          cardsConfig.map(async (card) => {
            const valueRes = await axios.get(
              `${process.env.REACT_APP_API_BASE_URL}${card.apiValue}`
            );
            const changeRes = await axios.get(
              `${process.env.REACT_APP_API_BASE_URL}${card.apiChange}`
            );
            return {
              value: valueRes.data,
              change: changeRes.data,
            };
          })
        );
        setCardData(results);
      } catch (err) {
        console.error('API fetch error:', err);
      }
    };

    fetchData();
  }, []);

  return (
    <div className="w-full">
      <h2 className="text-lg font-semibold text-black mb-3">Overview</h2>
      <div className="flex gap-4">
        {cardsConfig.map((card, index) => {
          const value =
            card.format === 'usd'
              ? formatUSD(cardData[index].value)
              : cardData[index].value;
          return (
            <div
              key={index}
              className="bg-white rounded-xl shadow px-5 py-4 w-[500px] h-[100px] flex items-start justify-between"
            >
              <div className="leading-tight">
                <p className="text-sm font-semibold text-black mb-1">{card.title}</p>
                <p className="text-3xl font-extrabold text-black">{value}</p>
              </div>
              <span
                className={`${card.color} text-white text-xs font-semibold px-2 py-0.5 rounded-md h-fit`}
              >
                {cardData[index].change}
              </span>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Overview;
