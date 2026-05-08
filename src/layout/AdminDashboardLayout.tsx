import React from 'react';
import { 
  LayoutDashboard, 
  Users, 
  Settings, 
  ShieldCheck,
  FileText,
  BarChart3
} from 'lucide-react';
import DashboardLayout from './DashboardLayout';
import type { SidebarItem } from '../components/dashboard/Sidebar';

const adminSidebarItems: SidebarItem[] = [
  { name: 'Overview', path: '/admin-dashboard', icon: LayoutDashboard },
  { name: 'User Management', path: '/admin-dashboard/users', icon: Users },
  { name: 'System Logs', path: '/admin-dashboard/logs', icon: FileText },
  { name: 'Analytics', path: '/admin-dashboard/analytics', icon: BarChart3 },
  { name: 'Security', path: '/admin-dashboard/security', icon: ShieldCheck },
  { name: 'Settings', path: '/admin-dashboard/settings', icon: Settings },
];

const AdminDashboardLayout: React.FC = () => {
  return <DashboardLayout sidebarItems={adminSidebarItems} />;
};

export default AdminDashboardLayout;
