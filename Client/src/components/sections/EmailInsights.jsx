import React from 'react';
import { emailStats } from '../../data/dashboardMock';

const EmailInsights = () => (
  <div className="bg-white p-6 rounded-xl shadow">
    <h3 className="text-lg font-semibold mb-4">Email Insights</h3>
    <ul className="space-y-2 text-sm">
      <li>📤 Emails Sent: {emailStats.sent}</li>
      <li>📬 Opened: {emailStats.opened}</li>
      <li>🖱️ Clicked: {emailStats.clicked}</li>
      <li>🔁 Converted: {emailStats.converted}</li>
      <li>📈 Open Rate: {emailStats.openRate}</li>
    </ul>
  </div>
);

export default EmailInsights;
