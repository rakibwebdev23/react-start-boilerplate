import React, { useState } from 'react';
import { Outlet } from 'react-router-dom';
import Sidebar, { type SidebarItem } from '../components/dashboard/Sidebar';
import DashboardHeader from '../components/dashboard/DashboardHeader';

interface DashboardLayoutProps {
  sidebarItems: SidebarItem[];
}

const DashboardLayout: React.FC<DashboardLayoutProps> = ({ sidebarItems }) => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  const toggleSidebar = () => setIsSidebarOpen(!isSidebarOpen);

  return (
    <div className="flex h-screen bg-slate-50 overflow-hidden">
      {/* Sidebar */}
      <Sidebar 
        items={sidebarItems} 
        isOpen={isSidebarOpen} 
        onToggle={toggleSidebar} 
      />

      {/* Main Content Area */}
      <div className="flex-1 flex flex-col min-w-0 overflow-hidden">
        <DashboardHeader onMenuToggle={toggleSidebar} />
        
        <main className="flex-1 overflow-y-auto p-6 lg:p-10">
          <div className="max-w-7xl mx-auto">
            <Outlet />
          </div>
        </main>

        {/* Optional Footer */}
        <footer className="h-14 bg-white border-t border-slate-200 px-6 flex items-center justify-between text-xs text-slate-500 shrink-0">
          <p>© 2025 Fixlist. All rights reserved.</p>
          <p>Software version 3.3</p>
        </footer>
      </div>
    </div>
  );
};

export default DashboardLayout;
