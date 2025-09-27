'use client';

import DashboardLayout from '@/components/DashboardLayout';
import LoadingSpinner from '@/components/LoadingSpinner';
import {
  ExclamationTriangleIcon,
  UserGroupIcon,
  ArrowTrendingDownIcon,
  ArrowUpIcon,
  ArrowDownIcon
} from '@heroicons/react/24/outline';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, BarChart, Bar, PieChart, Pie, Cell } from 'recharts';

const churnData = [
  { month: 'Jan', churnRate: 2.8, customers: 12500 },
  { month: 'Feb', churnRate: 3.2, customers: 12100 },
  { month: 'Mar', churnRate: 2.9, customers: 11800 },
  { month: 'Apr', churnRate: 3.5, customers: 11400 },
  { month: 'May', churnRate: 3.1, customers: 11100 },
  { month: 'Jun', churnRate: 3.8, customers: 10700 },
];

const segmentData = [
  { name: 'High Risk', value: 15, color: '#dc2626' },
  { name: 'Medium Risk', value: 25, color: '#f59e0b' },
  { name: 'Low Risk', value: 60, color: '#059669' },
];

const topChurnCustomers = [
  { id: 1, name: 'John Smith', email: 'john@example.com', churnProbability: 0.89, lastPurchase: '2024-01-15', segment: 'High Risk' },
  { id: 2, name: 'Sarah Johnson', email: 'sarah@example.com', churnProbability: 0.85, lastPurchase: '2024-01-10', segment: 'High Risk' },
  { id: 3, name: 'Mike Wilson', email: 'mike@example.com', churnProbability: 0.82, lastPurchase: '2024-01-08', segment: 'High Risk' },
  { id: 4, name: 'Emily Davis', email: 'emily@example.com', churnProbability: 0.78, lastPurchase: '2024-01-05', segment: 'High Risk' },
  { id: 5, name: 'David Brown', email: 'david@example.com', churnProbability: 0.75, lastPurchase: '2024-01-03', segment: 'High Risk' },
  { id: 6, name: 'Lisa Anderson', email: 'lisa@example.com', churnProbability: 0.72, lastPurchase: '2024-01-01', segment: 'High Risk' },
  { id: 7, name: 'Robert Taylor', email: 'robert@example.com', churnProbability: 0.68, lastPurchase: '2023-12-28', segment: 'Medium Risk' },
  { id: 8, name: 'Jennifer White', email: 'jennifer@example.com', churnProbability: 0.65, lastPurchase: '2023-12-25', segment: 'Medium Risk' },
  { id: 9, name: 'Michael Garcia', email: 'michael@example.com', churnProbability: 0.62, lastPurchase: '2023-12-22', segment: 'Medium Risk' },
  { id: 10, name: 'Amanda Martinez', email: 'amanda@example.com', churnProbability: 0.58, lastPurchase: '2023-12-20', segment: 'Medium Risk' },
];

const churnFactors = [
  { factor: 'Low Engagement', impact: 35, customers: 1250 },
  { factor: 'Price Sensitivity', impact: 28, customers: 980 },
  { factor: 'Competitor Switch', impact: 22, customers: 780 },
  { factor: 'Poor Service', impact: 15, customers: 520 },
];

export default function ChurnAnalysis() {
  return (
    <DashboardLayout>
      <div className="space-y-6">
        {/* Header */}
        <div>
          <h1 className="text-3xl font-bold text-gray-900">Customer Churn Analysis</h1>
          <p className="text-gray-600">Identify and analyze customers at risk of churning</p>
        </div>

        {/* Key Metrics */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          <div className="bg-white rounded-xl p-6 shadow-sm border border-gray-200">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm font-medium text-gray-600">Current Churn Rate</p>
                <p className="text-2xl font-bold text-gray-900">3.8%</p>
              </div>
              <ExclamationTriangleIcon className="h-8 w-8 text-emerald-600" />
            </div>
            <div className="mt-4 flex items-center">
              <ArrowUpIcon className="h-4 w-4 text-red-500" />
              <span className="text-sm font-medium text-emerald-600">+0.3%</span>
              <span className="text-sm text-gray-500 ml-1">from last month</span>
            </div>
          </div>

          <div className="bg-white rounded-xl p-6 shadow-sm border border-gray-200">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm font-medium text-gray-600">High Risk Customers</p>
                <p className="text-2xl font-bold text-gray-900">1,250</p>
              </div>
              <UserGroupIcon className="h-8 w-8 text-orange-600" />
            </div>
            <div className="mt-4 flex items-center">
              <ArrowUpIcon className="h-4 w-4 text-red-500" />
              <span className="text-sm font-medium text-emerald-600">+150</span>
              <span className="text-sm text-gray-500 ml-1">from last month</span>
            </div>
          </div>

          <div className="bg-white rounded-xl p-6 shadow-sm border border-gray-200">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm font-medium text-gray-600">Retention Rate</p>
                <p className="text-2xl font-bold text-gray-900">96.2%</p>
              </div>
              <ArrowTrendingDownIcon className="h-8 w-8 text-green-600" />
            </div>
            <div className="mt-4 flex items-center">
              <ArrowDownIcon className="h-4 w-4 text-red-500" />
              <span className="text-sm font-medium text-emerald-600">-0.3%</span>
              <span className="text-sm text-gray-500 ml-1">from last month</span>
            </div>
          </div>

          <div className="bg-white rounded-xl p-6 shadow-sm border border-gray-200">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm font-medium text-gray-600">Revenue at Risk</p>
                <p className="text-2xl font-bold text-gray-900">$2.4M</p>
              </div>
              <ExclamationTriangleIcon className="h-8 w-8 text-emerald-600" />
            </div>
            <div className="mt-4 flex items-center">
              <ArrowUpIcon className="h-4 w-4 text-red-500" />
              <span className="text-sm font-medium text-emerald-600">+$180K</span>
              <span className="text-sm text-gray-500 ml-1">from last month</span>
            </div>
          </div>
        </div>

        {/* Charts Row */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          {/* Churn Rate Trend */}
          <div className="bg-white rounded-xl p-6 shadow-sm border border-gray-200">
            <h3 className="text-lg font-semibold text-gray-900 mb-4">Churn Rate Trend</h3>
            <ResponsiveContainer width="100%" height={300}>
              <LineChart data={churnData}>
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="month" />
                <YAxis />
                <Tooltip />
                <Line type="monotone" dataKey="churnRate" stroke="#059669" strokeWidth={2} />
              </LineChart>
            </ResponsiveContainer>
          </div>

          {/* Customer Segmentation */}
          <div className="bg-white rounded-xl p-6 shadow-sm border border-gray-200">
            <h3 className="text-lg font-semibold text-gray-900 mb-4">Customer Segmentation</h3>
            <ResponsiveContainer width="100%" height={300}>
              <PieChart>
                <Pie
                  data={segmentData}
                  cx="50%"
                  cy="50%"
                  innerRadius={60}
                  outerRadius={100}
                  paddingAngle={5}
                  dataKey="value"
                >
                  {segmentData.map((entry, index) => (
                    <Cell key={`cell-${index}`} fill={entry.color} />
                  ))}
                </Pie>
                <Tooltip />
              </PieChart>
            </ResponsiveContainer>
            <div className="mt-4 flex justify-center space-x-6">
              {segmentData.map((segment, index) => (
                <div key={index} className="flex items-center">
                  <div 
                    className="w-3 h-3 rounded-full mr-2" 
                    style={{ backgroundColor: segment.color }}
                  />
                  <span className="text-sm text-gray-600">{segment.name}: {segment.value}%</span>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Churn Factors */}
        <div className="bg-white rounded-xl p-6 shadow-sm border border-gray-200">
          <h3 className="text-lg font-semibold text-gray-900 mb-4">Top Churn Factors</h3>
          <div className="space-y-4">
            {churnFactors.map((factor, index) => (
              <div key={index} className="flex items-center justify-between p-4 bg-gray-50 rounded-lg">
                <div>
                  <p className="font-medium text-gray-900">{factor.factor}</p>
                  <p className="text-sm text-gray-600">{factor.customers} customers affected</p>
                </div>
                <div className="text-right">
                  <p className="text-lg font-bold text-gray-900">{factor.impact}%</p>
                  <p className="text-sm text-gray-500">Impact</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Top 10 Churn Risk Customers */}
        <div className="bg-white rounded-xl p-6 shadow-sm border border-gray-200">
          <div className="flex items-center justify-between mb-4">
            <h3 className="text-lg font-semibold text-gray-900">Top 10 Churn Risk Customers</h3>
            <button className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors">
              Export List
            </button>
          </div>
          <div className="overflow-x-auto">
            <table className="min-w-full divide-y divide-gray-200">
              <thead className="bg-gray-50">
                <tr>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Customer
                  </th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Churn Probability
                  </th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Segment
                  </th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Last Purchase
                  </th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Actions
                  </th>
                </tr>
              </thead>
              <tbody className="bg-white divide-y divide-gray-200">
                {topChurnCustomers.map((customer) => (
                  <tr key={customer.id} className="hover:bg-gray-50">
                    <td className="px-6 py-4 whitespace-nowrap">
                      <div>
                        <div className="text-sm font-medium text-gray-900">{customer.name}</div>
                        <div className="text-sm text-gray-500">{customer.email}</div>
                      </div>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap">
                      <span className={`inline-flex px-2 py-1 text-xs font-semibold rounded-full ${
                        customer.churnProbability > 0.8 ? 'bg-red-100 text-red-800' :
                        customer.churnProbability > 0.6 ? 'bg-orange-100 text-orange-800' :
                        'bg-yellow-100 text-yellow-800'
                      }`}>
                        {(customer.churnProbability * 100).toFixed(0)}%
                      </span>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap">
                      <span className={`inline-flex px-2 py-1 text-xs font-semibold rounded-full ${
                        customer.segment === 'High Risk' ? 'bg-red-100 text-red-800' :
                        customer.segment === 'Medium Risk' ? 'bg-orange-100 text-orange-800' :
                        'bg-green-100 text-green-800'
                      }`}>
                        {customer.segment}
                      </span>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">
                      {customer.lastPurchase}
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm font-medium">
                      <button className="text-blue-600 hover:text-blue-900 mr-3">
                        Contact
                      </button>
                      <button className="text-green-600 hover:text-green-900">
                        Retain
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </DashboardLayout>
  );
}
