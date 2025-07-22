import React from 'react';

const Sidebar = () => (
  <aside className="w-60 h-full bg-white shadow-md p-4 fixed left-0 top-0">
    <h2 className="text-xl font-bold mb-6">solus</h2>
    <nav className="flex flex-col gap-4 text-sm">
      <span>🏠 Home</span>
      <span>👥 Clients & Leads</span>
      <span>✅ Smart Actions</span>
      <span>📄 Business Info</span>
      <span>📬 Mail & Proposals</span>
      <span className="mt-auto pt-10 border-t">⚙️ Settings</span>
      <span>↩️ Log out</span>
    </nav>
  </aside>
);

export default Sidebar;
