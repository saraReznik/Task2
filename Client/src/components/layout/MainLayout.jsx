import React from 'react';
import Sidebar from './Sidebar';
import Header from './Header';
import Overview from '../sections/Overview';
import ThisMonthStats from '../sections/ThisMonthStats';
import MonthlyStats from '../sections/MonthlyStats';
import EmailInsights from '../sections/EmailInsights';
import Transactions from '../sections/Transactions';
import RecommendationBox from '../sections/RecommendationBox';
import WelcomeClients from '../sections/WelcomeClients';

const MainLayout = () => (
  <div className="flex">
    <Sidebar />
    <div className="flex-1 ml-60">
      <Header />
      <main className="p-8 bg-gray-50 min-h-screen">
        <Overview />
        <div className="grid grid-cols-3 gap-4 my-6">
          <ThisMonthStats />
          <EmailInsights />
          <RecommendationBox />
        </div>
        <div className="grid grid-cols-2 gap-4">
          <MonthlyStats />
          <Transactions />
        </div>
        <div className="mt-6">
          <WelcomeClients />
        </div>
      </main>
    </div>
  </div>
);

export default MainLayout;
