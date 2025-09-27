'use client';

import { useAuth } from '@/contexts/AuthContext';
import { useRouter } from 'next/navigation';
import { useEffect } from 'react';
import DashboardLayout from '@/components/DashboardLayout';
import LoadingSpinner from '@/components/LoadingSpinner';
import {
  ChartBarIcon,
  UserGroupIcon,
  ArrowTrendingUpIcon,
  ExclamationTriangleIcon,
  ArrowUpIcon,
  ArrowDownIcon
} from '@heroicons/react/24/outline';

export default function Dashboard() {
  const { user, loading } = useAuth();
  const router = useRouter();

  useEffect(() => {
    console.log('Dashboard - Auth state:', { user, loading });
    if (!loading && !user) {
      console.log('Dashboard - Redirecting to login, no user found');
      router.push('/');
    }
  }, [user, loading, router]);

  if (loading) {
    return <LoadingSpinner />;
  }

  if (!user) {
    return null;
  }

  // Mock data for demonstration
  const stats = [
    {
      name: 'Total Customers',
      value: '12,543',
      change: '+12%',
      changeType: 'positive',
      icon: UserGroupIcon,
    },
    {
      name: 'Churn Rate',
      value: '3.2%',
      change: '-0.5%',
      changeType: 'positive',
      icon: ExclamationTriangleIcon,
    },
    {
      name: 'Sales Forecast',
      value: '$2.4M',
      change: '+8.2%',
      changeType: 'positive',
      icon: ArrowTrendingUpIcon,
    },
    {
      name: 'Revenue Growth',
      value: '15.3%',
      change: '+2.1%',
      changeType: 'positive',
      icon: ChartBarIcon,
    },
  ];

  const topChurnCustomers = [
    { id: 1, name: 'John Smith', email: 'john@example.com', churnProbability: 0.89, lastPurchase: '2024-01-15' },
    { id: 2, name: 'Sarah Johnson', email: 'sarah@example.com', churnProbability: 0.85, lastPurchase: '2024-01-10' },
    { id: 3, name: 'Mike Wilson', email: 'mike@example.com', churnProbability: 0.82, lastPurchase: '2024-01-08' },
    { id: 4, name: 'Emily Davis', email: 'emily@example.com', churnProbability: 0.78, lastPurchase: '2024-01-05' },
    { id: 5, name: 'David Brown', email: 'david@example.com', churnProbability: 0.75, lastPurchase: '2024-01-03' },
  ];

  const topProducts = [
    { name: 'Premium Banking', sales: 125000, growth: '+15%' },
    { name: 'Investment Services', sales: 98000, growth: '+12%' },
    { name: 'Credit Cards', sales: 87000, growth: '+8%' },
    { name: 'Loans', sales: 76000, growth: '+5%' },
    { name: 'Insurance', sales: 65000, growth: '+18%' },
  ];

  return (
    <DashboardLayout>
      <div className="space-y-6">
        {/* Header */}
        <div>
          <h1 className="text-3xl font-bold text-gray-900">Dashboard</h1>
          <p className="text-gray-600">Welcome back! Here's what's happening with your business.</p>
        </div>

        {/* Stats Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {stats.map((stat) => (
            <div key={stat.name} className="bg-white rounded-xl p-6 shadow-sm border border-gray-200">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm font-medium text-gray-600">{stat.name}</p>
                  <p className="text-2xl font-bold text-gray-900">{stat.value}</p>
                </div>
                <div className="flex items-center">
                  <stat.icon className="h-8 w-8 text-blue-600" />
                </div>
              </div>
              <div className="mt-4 flex items-center">
                {stat.changeType === 'positive' ? (
                  <ArrowUpIcon className="h-4 w-4 text-green-500" />
                ) : (
                  <ArrowDownIcon className="h-4 w-4 text-red-500" />
                )}
                <span className={`text-sm font-medium ${
                  stat.changeType === 'positive' ? 'text-green-600' : 'text-red-600'
                }`}>
                  {stat.change}
                </span>
                <span className="text-sm text-gray-500 ml-1">from last month</span>
              </div>
            </div>
          ))}
        </div>

        {/* Main Content Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          {/* Top Churn Customers */}
          <div className="bg-white rounded-xl p-6 shadow-sm border border-gray-200">
            <div className="flex items-center justify-between mb-4">
              <h3 className="text-lg font-semibold text-gray-900">High Churn Risk Customers</h3>
              <span className="text-sm text-red-600 font-medium">Top 5</span>
            </div>
            <div className="space-y-3">
              {topChurnCustomers.map((customer) => (
                <div key={customer.id} className="flex items-center justify-between p-3 bg-red-50 rounded-lg">
                  <div>
                    <p className="font-medium text-gray-900">{customer.name}</p>
                    <p className="text-sm text-gray-600">{customer.email}</p>
                    <p className="text-xs text-gray-500">Last purchase: {customer.lastPurchase}</p>
                  </div>
                  <div className="text-right">
                    <p className="text-sm font-bold text-red-600">
                      {(customer.churnProbability * 100).toFixed(0)}%
                    </p>
                    <p className="text-xs text-gray-500">Churn Risk</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Top Products */}
          <div className="bg-white rounded-xl p-6 shadow-sm border border-gray-200">
            <div className="flex items-center justify-between mb-4">
              <h3 className="text-lg font-semibold text-gray-900">Top Performing Products</h3>
              <span className="text-sm text-green-600 font-medium">Q1 2024</span>
            </div>
            <div className="space-y-3">
              {topProducts.map((product, index) => (
                <div key={index} className="flex items-center justify-between p-3 bg-green-50 rounded-lg">
                  <div>
                    <p className="font-medium text-gray-900">{product.name}</p>
                    <p className="text-sm text-gray-600">${product.sales.toLocaleString()}</p>
                  </div>
                  <div className="text-right">
                    <p className="text-sm font-bold text-green-600">{product.growth}</p>
                    <p className="text-xs text-gray-500">Growth</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Quick Actions */}
        <div className="bg-white rounded-xl p-6 shadow-sm border border-gray-200">
          <h3 className="text-lg font-semibold text-gray-900 mb-4">Quick Actions</h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <button className="p-4 text-left border border-gray-200 rounded-lg hover:bg-gray-50 transition-colors">
              <h4 className="font-medium text-gray-900">Generate Churn Report</h4>
              <p className="text-sm text-gray-600">Create detailed churn analysis</p>
            </button>
            <button className="p-4 text-left border border-gray-200 rounded-lg hover:bg-gray-50 transition-colors">
              <h4 className="font-medium text-gray-900">Sales Forecast</h4>
              <p className="text-sm text-gray-600">View upcoming sales predictions</p>
            </button>
            <button className="p-4 text-left border border-gray-200 rounded-lg hover:bg-gray-50 transition-colors">
              <h4 className="font-medium text-gray-900">Customer Segmentation</h4>
              <p className="text-sm text-gray-600">Analyze customer groups</p>
            </button>
          </div>
        </div>
      </div>
    </DashboardLayout>
  );
}
