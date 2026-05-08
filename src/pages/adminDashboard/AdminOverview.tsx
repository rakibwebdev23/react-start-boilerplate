import React from 'react';

const AdminOverview: React.FC = () => {
  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <h1 className="text-2xl font-bold text-slate-900">Admin Dashboard</h1>
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {[
          { label: 'Total Users', value: '1,234', color: 'bg-blue-600' },
          { label: 'Revenue', value: '$45,678', color: 'bg-green-600' },
          { label: 'Active Sessions', value: '56', color: 'bg-purple-600' },
          { label: 'Support Tickets', value: '12', color: 'bg-orange-600' },
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
          <div className="w-16 h-16 bg-blue-50 rounded-full flex items-center justify-center mx-auto mb-4 text-2xl">
            🚀
          </div>
          <h2 className="text-xl font-bold text-slate-900">Admin Management Console</h2>
          <p className="text-slate-500 mt-2">
            This is your administrative control center. From here you can manage users, view system analytics, and configure platform settings.
          </p>
        </div>
      </div>
    </div>
  );
};

export default AdminOverview;
