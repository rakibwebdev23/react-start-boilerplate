import React from 'react';
import { 
  LayoutDashboard, 
  User, 
  Settings, 
  Heart,
  ShoppingBag,
  Bell
} from 'lucide-react';
import DashboardLayout from './DashboardLayout';
import type { SidebarItem } from '../components/dashboard/Sidebar';

const userSidebarItems: SidebarItem[] = [
  { name: 'My Dashboard', path: '/user-dashboard', icon: LayoutDashboard },
  { name: 'My Profile', path: '/user-dashboard/profile', icon: User },
  { name: 'My Orders', path: '/user-dashboard/orders', icon: ShoppingBag },
  { name: 'Wishlist', path: '/user-dashboard/wishlist', icon: Heart },
  { name: 'Notifications', path: '/user-dashboard/notifications', icon: Bell },
  { name: 'Account Settings', path: '/user-dashboard/settings', icon: Settings },
];

const UserDashboardLayout: React.FC = () => {
  return <DashboardLayout sidebarItems={userSidebarItems} />;
};

export default UserDashboardLayout;
