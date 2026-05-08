import React from 'react';
import { NavLink } from 'react-router-dom';
import {
  LogOut,
  ChevronRight,
  X
} from 'lucide-react';
import { useDispatch } from 'react-redux';
import { logout } from '../../redux/api/auth/auth.slice';

export interface SidebarItem {
  name: string;
  path: string;
  icon: React.ElementType;
}

interface SidebarProps {
  items: SidebarItem[];
  isOpen: boolean;
  onToggle: () => void;
}

const Sidebar: React.FC<SidebarProps> = ({ items, isOpen, onToggle }) => {
  const dispatch = useDispatch();

  const handleLogout = () => {
    dispatch(logout());
  };

  return (
    <>
      {/* Mobile Backdrop */}
      {isOpen && (
        <div 
          className="fixed inset-0 z-40 bg-black/50 lg:hidden backdrop-blur-sm transition-opacity"
          onClick={onToggle}
        />
      )}

      {/* Sidebar Container */}
      <aside className={`
        fixed inset-y-0 left-0 z-50 w-72 bg-white border-r border-slate-200 transform transition-transform duration-300 ease-in-out lg:relative lg:translate-x-0
        ${isOpen ? 'translate-x-0' : '-translate-x-full'}
      `}>
        <div className="flex flex-col h-full">
          {/* Logo Area */}
          <div className="flex items-center justify-between h-20 px-6 border-b border-slate-100">
            <div className="flex items-center gap-2">
              <div className="w-8 h-8 bg-blue-600 rounded-lg flex items-center justify-center">
                <span className="text-white font-bold text-xl">F</span>
              </div>
              <span className="text-xl font-bold bg-gradient-to-r from-slate-900 to-slate-700 bg-clip-text text-transparent">
                Fixlist
              </span>
            </div>
            <button 
              onClick={onToggle}
              className="p-2 rounded-lg hover:bg-slate-100 lg:hidden transition-colors"
            >
              <X className="w-5 h-5 text-slate-500" />
            </button>
          </div>

          {/* Navigation Items */}
          <nav className="flex-1 overflow-y-auto py-6 px-4 space-y-1">
            {items.map((item) => (
              <NavLink
                key={item.path}
                to={item.path}
                className={({ isActive }) => `
                  flex items-center justify-between px-4 py-3 rounded-xl transition-all duration-200 group
                  ${isActive 
                    ? 'bg-blue-50 text-blue-600 shadow-sm' 
                    : 'text-slate-600 hover:bg-slate-50 hover:text-slate-900'}
                `}
              >
                <div className="flex items-center gap-3">
                  <item.icon className={`w-5 h-5 transition-colors ${isOpen ? 'opacity-100' : 'opacity-100'}`} />
                  <span className="font-medium">{item.name}</span>
                </div>
                <ChevronRight className={`w-4 h-4 opacity-0 group-hover:opacity-100 transition-all transform ${isOpen ? 'translate-x-0' : '-translate-x-1'}`} />
              </NavLink>
            ))}
          </nav>

          {/* Bottom Action Area */}
          <div className="p-4 border-t border-slate-100">
            <button 
              onClick={handleLogout}
              className="flex items-center gap-3 w-full px-4 py-3 text-slate-600 hover:text-red-600 hover:bg-red-50 rounded-xl transition-all duration-200 font-medium"
            >
              <LogOut className="w-5 h-5" />
              <span>Logout</span>
            </button>
          </div>
        </div>
      </aside>
    </>
  );
};

export default Sidebar;
