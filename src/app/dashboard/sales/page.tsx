'use client';

import DashboardLayout from '@/components/DashboardLayout';
import LoadingSpinner from '@/components/LoadingSpinner';
import { 
  ArrowTrendingUpIcon, 
  ChartBarIcon, 
  CurrencyDollarIcon,
  ArrowUpIcon,
  ArrowDownIcon
} from '@heroicons/react/24/outline';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, BarChart, Bar, AreaChart, Area } from 'recharts';

const salesData = [
  { month: 'Jan', actual: 2400000, forecast: 2300000, target: 2500000 },
  { month: 'Feb', actual: 2600000, forecast: 2550000, target: 2700000 },
  { month: 'Mar', actual: 2800000, forecast: 2750000, target: 2900000 },
  { month: 'Apr', actual: 3000000, forecast: 2950000, target: 3100000 },
  { month: 'May', actual: 3200000, forecast: 3150000, target: 3300000 },
  { month: 'Jun', actual: 3400000, forecast: 3350000, target: 3500000 },
  { month: 'Jul', actual: 0, forecast: 3550000, target: 3700000 },
  { month: 'Aug', actual: 0, forecast: 3750000, target: 3900000 },
  { month: 'Sep', actual: 0, forecast: 3950000, target: 4100000 },
];

const productPerformance = [
  { name: 'Premium Banking', sales: 1250000, growth: 15, forecast: 1400000, confidence: 92 },
  { name: 'Investment Services', sales: 980000, growth: 12, forecast: 1100000, confidence: 88 },
  { name: 'Credit Cards', sales: 870000, growth: 8, forecast: 940000, confidence: 85 },
  { name: 'Loans', sales: 760000, growth: 5, forecast: 800000, confidence: 90 },
  { name: 'Insurance', sales: 650000, growth: 18, forecast: 770000, confidence: 87 },
];

const quarterlyForecast = [
  { quarter: 'Q1 2024', forecast: 7800000, confidence: 85 },
  { quarter: 'Q2 2024', forecast: 8200000, confidence: 80 },
  { quarter: 'Q3 2024', forecast: 8600000, confidence: 75 },
  { quarter: 'Q4 2024', forecast: 9000000, confidence: 70 },
];

const seasonalData = [
  { month: 'Jan', sales: 2400000, seasonality: 'Low' },
  { month: 'Feb', sales: 2600000, seasonality: 'Medium' },
  { month: 'Mar', sales: 2800000, seasonality: 'High' },
  { month: 'Apr', sales: 3000000, seasonality: 'High' },
  { month: 'May', sales: 3200000, seasonality: 'Peak' },
  { month: 'Jun', sales: 3400000, seasonality: 'Peak' },
  { month: 'Jul', sales: 3550000, seasonality: 'Peak' },
  { month: 'Aug', sales: 3750000, seasonality: 'High' },
  { month: 'Sep', sales: 3950000, seasonality: 'High' },
  { month: 'Oct', sales: 4100000, seasonality: 'Medium' },
  { month: 'Nov', sales: 4200000, seasonality: 'Medium' },
  { month: 'Dec', sales: 4500000, seasonality: 'Peak' },
];

export default function SalesForecast() {
  return (
    <DashboardLayout>
      <div className="space-y-6">
        {/* Header */}
        <div>
          <h1 className="text-3xl font-bold text-gray-900">Sales Forecasting</h1>
          <p className="text-gray-600">Predict future sales and optimize inventory management</p>
        </div>

        {/* Key Metrics */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          <div className="bg-white rounded-xl p-6 shadow-sm border border-gray-200">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm font-medium text-gray-600">Current Sales</p>
                <p className="text-2xl font-bold text-gray-900">$3.4M</p>
              </div>
              <CurrencyDollarIcon className="h-8 w-8 text-green-600" />
            </div>
            <div className="mt-4 flex items-center">
              <ArrowUpIcon className="h-4 w-4 text-green-500" />
              <span className="text-sm font-medium text-green-600">+12.5%</span>
              <span className="text-sm text-gray-500 ml-1">from last month</span>
            </div>
          </div>

          <div className="bg-white rounded-xl p-6 shadow-sm border border-gray-200">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm font-medium text-gray-600">Next Month Forecast</p>
                <p className="text-2xl font-bold text-gray-900">$3.55M</p>
              </div>
              <ArrowTrendingUpIcon className="h-8 w-8 text-emerald-600" />
            </div>
            <div className="mt-4 flex items-center">
              <ArrowUpIcon className="h-4 w-4 text-green-500" />
              <span className="text-sm font-medium text-green-600">+4.4%</span>
              <span className="text-sm text-gray-500 ml-1">expected growth</span>
            </div>
          </div>

          <div className="bg-white rounded-xl p-6 shadow-sm border border-gray-200">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm font-medium text-gray-600">Q3 Forecast</p>
                <p className="text-2xl font-bold text-gray-900">$8.6M</p>
              </div>
              <ChartBarIcon className="h-8 w-8 text-purple-600" />
            </div>
            <div className="mt-4 flex items-center">
              <ArrowUpIcon className="h-4 w-4 text-green-500" />
              <span className="text-sm font-medium text-green-600">+15.2%</span>
              <span className="text-sm text-gray-500 ml-1">from Q2</span>
            </div>
          </div>

          <div className="bg-white rounded-xl p-6 shadow-sm border border-gray-200">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm font-medium text-gray-600">Forecast Accuracy</p>
                <p className="text-2xl font-bold text-gray-900">94.2%</p>
              </div>
              <ArrowTrendingUpIcon className="h-8 w-8 text-green-600" />
            </div>
            <div className="mt-4 flex items-center">
              <ArrowUpIcon className="h-4 w-4 text-green-500" />
              <span className="text-sm font-medium text-green-600">+2.1%</span>
              <span className="text-sm text-gray-500 ml-1">improvement</span>
            </div>
          </div>
        </div>

        {/* Sales Trend Chart */}
        <div className="bg-white rounded-xl p-6 shadow-sm border border-gray-200">
          <h3 className="text-lg font-semibold text-gray-900 mb-4">Sales Trend & Forecast</h3>
          <ResponsiveContainer width="100%" height={400}>
            <AreaChart data={salesData}>
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="month" />
              <YAxis tickFormatter={(value) => `$${(value / 1000000).toFixed(1)}M`} />
              <Tooltip formatter={(value) => [`$${(value / 1000000).toFixed(1)}M`, '']} />
              <Area type="monotone" dataKey="actual" stackId="1" stroke="#059669" fill="#059669" fillOpacity={0.6} />
              <Area type="monotone" dataKey="forecast" stackId="2" stroke="#10b981" fill="#10b981" fillOpacity={0.3} />
              <Line type="monotone" dataKey="target" stroke="#ef4444" strokeWidth={2} strokeDasharray="5 5" />
            </AreaChart>
          </ResponsiveContainer>
          <div className="mt-4 flex justify-center space-x-6">
            <div className="flex items-center">
              <div className="w-3 h-3 bg-green-500 rounded mr-2" />
              <span className="text-sm text-gray-600">Actual Sales</span>
            </div>
            <div className="flex items-center">
              <div className="w-3 h-3 bg-blue-500 rounded mr-2" />
              <span className="text-sm text-gray-600">Forecast</span>
            </div>
            <div className="flex items-center">
              <div className="w-3 h-3 bg-red-500 rounded mr-2" />
              <span className="text-sm text-gray-600">Target</span>
            </div>
          </div>
        </div>

        {/* Product Performance & Forecast */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          <div className="bg-white rounded-xl p-6 shadow-sm border border-gray-200">
            <h3 className="text-lg font-semibold text-gray-900 mb-4">Product Performance</h3>
            <ResponsiveContainer width="100%" height={300}>
              <BarChart data={productPerformance}>
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="name" />
                <YAxis tickFormatter={(value) => `$${(value / 1000000).toFixed(1)}M`} />
                <Tooltip formatter={(value) => [`$${(value / 1000000).toFixed(1)}M`, '']} />
                <Bar dataKey="sales" fill="#059669" />
                <Bar dataKey="forecast" fill="#10b981" />
              </BarChart>
            </ResponsiveContainer>
          </div>

          <div className="bg-white rounded-xl p-6 shadow-sm border border-gray-200">
            <h3 className="text-lg font-semibold text-gray-900 mb-4">Quarterly Forecast</h3>
            <div className="space-y-4">
              {quarterlyForecast.map((quarter, index) => (
                <div key={index} className="flex items-center justify-between p-4 bg-gray-50 rounded-lg">
                  <div>
                    <p className="font-medium text-gray-900">{quarter.quarter}</p>
                    <p className="text-sm text-gray-600">Forecast: ${(quarter.forecast / 1000000).toFixed(1)}M</p>
                  </div>
                  <div className="text-right">
                    <p className="text-lg font-bold text-gray-900">{quarter.confidence}%</p>
                    <p className="text-sm text-gray-500">Confidence</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Top 10 Products Forecast */}
        <div className="bg-white rounded-xl p-6 shadow-sm border border-gray-200">
          <div className="flex items-center justify-between mb-4">
            <h3 className="text-lg font-semibold text-gray-900">Top 10 Products Forecast</h3>
            <button className="px-4 py-2 bg-emerald-600 text-white rounded-lg hover:bg-blue-700 transition-colors">
              Export Forecast
            </button>
          </div>
          <div className="overflow-x-auto">
            <table className="min-w-full divide-y divide-gray-200">
              <thead className="bg-gray-50">
                <tr>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Product
                  </th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Current Sales
                  </th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Growth Rate
                  </th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Next Quarter Forecast
                  </th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Confidence
                  </th>
                </tr>
              </thead>
              <tbody className="bg-white divide-y divide-gray-200">
                {productPerformance.map((product, index) => (
                  <tr key={index} className="hover:bg-gray-50">
                    <td className="px-6 py-4 whitespace-nowrap">
                      <div className="text-sm font-medium text-gray-900">{product.name}</div>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap">
                      <div className="text-sm text-gray-900">${(product.sales / 1000000).toFixed(1)}M</div>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap">
                      <span className={`inline-flex px-2 py-1 text-xs font-semibold rounded-full ${
                        product.growth > 15 ? 'bg-green-100 text-green-800' :
                        product.growth > 10 ? 'bg-blue-100 text-blue-800' :
                        'bg-yellow-100 text-yellow-800'
                      }`}>
                        +{product.growth}%
                      </span>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap">
                      <div className="text-sm text-gray-900">${(product.forecast / 1000000).toFixed(1)}M</div>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap">
                      <div className="text-sm text-gray-900">
                        {product.confidence}%
                      </div>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        {/* Seasonal Analysis */}
        <div className="bg-white rounded-xl p-6 shadow-sm border border-gray-200">
          <h3 className="text-lg font-semibold text-gray-900 mb-4">Seasonal Sales Analysis</h3>
          <ResponsiveContainer width="100%" height={300}>
            <LineChart data={seasonalData}>
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="month" />
              <YAxis tickFormatter={(value) => `$${(value / 1000000).toFixed(1)}M`} />
              <Tooltip formatter={(value) => [`$${(value / 1000000).toFixed(1)}M`, '']} />
              <Line type="monotone" dataKey="sales" stroke="#059669" strokeWidth={2} />
            </LineChart>
          </ResponsiveContainer>
          <div className="mt-4 grid grid-cols-2 md:grid-cols-4 gap-4">
            <div className="text-center p-3 bg-green-50 rounded-lg">
              <p className="text-sm font-medium text-green-800">Peak Season</p>
              <p className="text-xs text-green-600">May - Jul</p>
            </div>
            <div className="text-center p-3 bg-blue-50 rounded-lg">
              <p className="text-sm font-medium text-blue-800">High Season</p>
              <p className="text-xs text-emerald-600">Mar - Apr, Aug - Sep</p>
            </div>
            <div className="text-center p-3 bg-yellow-50 rounded-lg">
              <p className="text-sm font-medium text-yellow-800">Medium Season</p>
              <p className="text-xs text-yellow-600">Feb, Oct - Nov</p>
            </div>
            <div className="text-center p-3 bg-gray-50 rounded-lg">
              <p className="text-sm font-medium text-gray-800">Low Season</p>
              <p className="text-xs text-gray-600">Jan, Dec</p>
            </div>
          </div>
        </div>
      </div>
    </DashboardLayout>
  );
}
