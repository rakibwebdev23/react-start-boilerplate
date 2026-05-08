import React from 'react';

const UserOverview: React.FC = () => {
  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <h1 className="text-2xl font-bold text-slate-900">User Dashboard</h1>
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {[
          { label: 'Active Orders', value: '3', color: 'bg-indigo-600' },
          { label: 'Wishlist Items', value: '15', color: 'bg-pink-600' },
          { label: 'Notifications', value: '2', color: 'bg-yellow-600' },
          { label: 'Account Status', value: 'Pro', color: 'bg-blue-600' },
        ].map((stat, i) => (
          <div key={i} className="bg-white p-6 rounded-2xl border border-slate-100 shadow-sm hover:shadow-md transition-all">
            <div className={`w-10 h-10 ${stat.color} bg-opacity-10 rounded-lg flex items-center justify-center mb-4`}>
              <div className={`w-5 h-5 ${stat.color} rounded-sm`}></div>
            </div>
            <p className="text-sm text-slate-500 font-medium">{stat.label}</p>
            <p className="text-2xl font-bold text-slate-900 mt-1">{stat.value}</p>
          </div>
        ))}
      </div>

      <div className="bg-white p-8 rounded-2xl border border-slate-100 shadow-sm min-h-[400px] flex items-center justify-center">
        <div className="text-center max-w-md">
          <div className="w-16 h-16 bg-indigo-50 rounded-full flex items-center justify-center mx-auto mb-4 text-2xl">
            👋
          </div>
          <h2 className="text-xl font-bold text-slate-900">Welcome Back!</h2>
          <p className="text-slate-500 mt-2">
            This is your personal dashboard. Here you can track your orders, manage your profile, and see your activity history.
          </p>
        </div>
      </div>
    </div>
  );
};

export default UserOverview;
