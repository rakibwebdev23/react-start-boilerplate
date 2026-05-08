import React from 'react';
import { 
  Search, 
  Bell, 
  Menu,
  ChevronDown
} from 'lucide-react';
import { useAppSelector } from '../../redux/hook';

interface DashboardHeaderProps {
  onMenuToggle: () => void;
}

const DashboardHeader: React.FC<DashboardHeaderProps> = ({ onMenuToggle }) => {
  const { user } = useAppSelector((state) => state.auth);

  return (
    <header className="h-20 bg-white border-b border-slate-200 px-6 lg:px-10 flex items-center justify-between sticky top-0 z-30">
      {/* Left side: Mobile Toggle & Search */}
      <div className="flex items-center gap-4 flex-1">
        <button 
          onClick={onMenuToggle}
          className="p-2 rounded-lg hover:bg-slate-100 lg:hidden transition-colors"
        >
          <Menu className="w-6 h-6 text-slate-600" />
        </button>
        
        <div className="hidden md:flex items-center max-w-md w-full relative">
          <Search className="w-4 h-4 text-slate-400 absolute left-3" />
          <input 
            type="text" 
            placeholder="Search anything..." 
            className="w-full pl-10 pr-4 py-2 bg-slate-50 border border-slate-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500/20 focus:border-blue-500 transition-all"
          />
        </div>
      </div>

      {/* Right side: Notifications & User Profile */}
      <div className="flex items-center gap-4 lg:gap-6">
        <button className="relative p-2 rounded-lg hover:bg-slate-100 transition-colors group">
          <Bell className="w-5 h-5 text-slate-500 group-hover:text-blue-600 transition-colors" />
          <span className="absolute top-2 right-2 w-2 h-2 bg-red-500 border-2 border-white rounded-full"></span>
        </button>

        <div className="h-8 w-px bg-slate-200 mx-2"></div>

        <button className="flex items-center gap-3 p-1.5 rounded-xl hover:bg-slate-50 transition-all border border-transparent hover:border-slate-100">
          <div className="w-9 h-9 bg-gradient-to-br from-blue-500 to-indigo-600 rounded-lg flex items-center justify-center text-white font-semibold text-sm shadow-sm">
            {user?.first_name?.charAt(0) || 'U'}
          </div>
          <div className="hidden sm:block text-left">
            <p className="text-sm font-semibold text-slate-900 leading-none">
              {user?.first_name} {user?.last_name}
            </p>
            <p className="text-xs text-slate-500 mt-1 capitalize">
              {user?.role} Account
            </p>
          </div>
          <ChevronDown className="w-4 h-4 text-slate-400" />
        </button>
      </div>
    </header>
  );
};

export default DashboardHeader;
