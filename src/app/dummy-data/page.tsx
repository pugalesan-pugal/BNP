'use client';

import { useState } from 'react';
import { dummyUsers } from '@/utils/dummyData';
import { 
  CircleStackIcon, 
  UserGroupIcon, 
  ShieldCheckIcon, 
  CheckCircleIcon,
  XCircleIcon,
  EyeIcon
} from '@heroicons/react/24/outline';

export default function DummyDataPage() {
  const [loading, setLoading] = useState(false);
  const [results, setResults] = useState<any[]>([]);
  const [showUsers, setShowUsers] = useState(false);

  const addAllUsers = async () => {
    setLoading(true);
    setResults([]);
    
    try {
      const response = await fetch('/api/users/bulk-add', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          users: dummyUsers
        }),
      });

      const data = await response.json();

      if (!response.ok) {
        throw new Error(data.error || 'Failed to add users');
      }

      const results = data.results;
      setResults(results);
    } catch (error: any) {
      setResults([{ email: 'Error', success: false, error: error.message }]);
    } finally {
      setLoading(false);
    }
  };

  const addAdminUsers = async () => {
    setLoading(true);
    setResults([]);
    
    try {
      const adminUsers = dummyUsers.filter(user => user.role === 'admin');
      const response = await fetch('/api/users/bulk-add', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          users: adminUsers
        }),
      });

      const data = await response.json();

      if (!response.ok) {
        throw new Error(data.error || 'Failed to add users');
      }

      const results = data.results;
      setResults(results);
    } catch (error: any) {
      setResults([{ email: 'Error', success: false, error: error.message }]);
    } finally {
      setLoading(false);
    }
  };

  const addRegularUsers = async () => {
    setLoading(true);
    setResults([]);
    
    try {
      const regularUsers = dummyUsers.filter(user => user.role === 'user');
      const response = await fetch('/api/users/bulk-add', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          users: regularUsers
        }),
      });

      const data = await response.json();

      if (!response.ok) {
        throw new Error(data.error || 'Failed to add users');
      }

      const results = data.results;
      setResults(results);
    } catch (error: any) {
      setResults([{ email: 'Error', success: false, error: error.message }]);
    } finally {
      setLoading(false);
    }
  };

  const addOnlyActiveUsers = async () => {
    setLoading(true);
    setResults([]);
    
    try {
      const activeUsers = dummyUsers.filter(user => user.isActive);
      const response = await fetch('/api/users/bulk-add', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          users: activeUsers
        }),
      });

      const data = await response.json();

      if (!response.ok) {
        throw new Error(data.error || 'Failed to add users');
      }

      const results = data.results;
      setResults(results);
    } catch (error: any) {
      setResults([{ email: 'Error', success: false, error: error.message }]);
    } finally {
      setLoading(false);
    }
  };

  const successCount = results.filter(r => r.success).length;
  const errorCount = results.filter(r => !r.success).length;

  return (
    <div className="min-h-screen bg-gradient-to-br from-emerald-900 via-emerald-800 to-emerald-900 flex items-center justify-center p-4">
      <div className="max-w-4xl w-full">
        {/* Header */}
        <div className="text-center mb-8">
          <div className="mx-auto w-16 h-16 bg-emerald-600 rounded-xl flex items-center justify-center mb-4 shadow-lg">
            <CircleStackIcon className="h-8 w-8 text-white" />
          </div>
          <h1 className="text-3xl font-bold text-white mb-2">Dummy Data Management</h1>
          <p className="text-emerald-200">Add test users to Firebase login collection</p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          {/* Action Buttons */}
          <div className="space-y-4">
            <div className="bg-white/10 backdrop-blur-md rounded-2xl p-6 border border-white/20">
              <h2 className="text-xl font-semibold text-white mb-4">Add Users to Firebase</h2>
              
              <div className="space-y-3">
                <button
                  onClick={addAllUsers}
                  disabled={loading}
                  className="w-full bg-emerald-600 text-white font-medium py-3 px-4 rounded-lg hover:bg-emerald-700 focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:ring-offset-2 focus:ring-offset-emerald-900 disabled:opacity-50 disabled:cursor-not-allowed transition-all duration-200"
                >
                  {loading ? 'Adding Users...' : 'Add All Users (15 users)'}
                </button>

                <button
                  onClick={addAdminUsers}
                  disabled={loading}
                  className="w-full bg-blue-600 text-white font-medium py-3 px-4 rounded-lg hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 focus:ring-offset-emerald-900 disabled:opacity-50 disabled:cursor-not-allowed transition-all duration-200"
                >
                  Add Admin Users Only (6 users)
                </button>

                <button
                  onClick={addRegularUsers}
                  disabled={loading}
                  className="w-full bg-purple-600 text-white font-medium py-3 px-4 rounded-lg hover:bg-purple-700 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:ring-offset-2 focus:ring-offset-emerald-900 disabled:opacity-50 disabled:cursor-not-allowed transition-all duration-200"
                >
                  Add Regular Users Only (9 users)
                </button>

                <button
                  onClick={addOnlyActiveUsers}
                  disabled={loading}
                  className="w-full bg-green-600 text-white font-medium py-3 px-4 rounded-lg hover:bg-green-700 focus:outline-none focus:ring-2 focus:ring-green-500 focus:ring-offset-2 focus:ring-offset-emerald-900 disabled:opacity-50 disabled:cursor-not-allowed transition-all duration-200"
                >
                  Add Active Users Only (14 users)
                </button>
              </div>
            </div>

            {/* View Users Button */}
            <div className="bg-white/10 backdrop-blur-md rounded-2xl p-6 border border-white/20">
              <button
                onClick={() => setShowUsers(!showUsers)}
                className="w-full flex items-center justify-center bg-gray-600 text-white font-medium py-3 px-4 rounded-lg hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-gray-500 focus:ring-offset-2 focus:ring-offset-emerald-900 transition-all duration-200"
              >
                <EyeIcon className="h-5 w-5 mr-2" />
                {showUsers ? 'Hide' : 'View'} User List
              </button>
            </div>
          </div>

          {/* Results Display */}
          <div className="space-y-4">
            {/* Results Summary */}
            {results.length > 0 && (
              <div className="bg-white/10 backdrop-blur-md rounded-2xl p-6 border border-white/20">
                <h3 className="text-lg font-semibold text-white mb-4">Results Summary</h3>
                <div className="grid grid-cols-2 gap-4 mb-4">
                  <div className="text-center">
                    <div className="text-2xl font-bold text-green-400">{successCount}</div>
                    <div className="text-sm text-emerald-200">Success</div>
                  </div>
                  <div className="text-center">
                    <div className="text-2xl font-bold text-red-400">{errorCount}</div>
                    <div className="text-sm text-emerald-200">Errors</div>
                  </div>
                </div>
                
                <div className="space-y-2 max-h-60 overflow-y-auto">
                  {results.map((result, index) => (
                    <div key={index} className="flex items-center justify-between p-2 bg-white/5 rounded-lg">
                      <span className="text-emerald-200 text-sm">{result.email}</span>
                      {result.status === 'success' ? (
                        <CheckCircleIcon className="h-5 w-5 text-green-400" />
                      ) : (
                        <XCircleIcon className="h-5 w-5 text-red-400" />
                      )}
                    </div>
                  ))}
                </div>
              </div>
            )}

            {/* User List */}
            {showUsers && (
              <div className="bg-white/10 backdrop-blur-md rounded-2xl p-6 border border-white/20">
                <h3 className="text-lg font-semibold text-white mb-4">Available Users</h3>
                <div className="space-y-2 max-h-60 overflow-y-auto">
                  {dummyUsers.map((user, index) => (
                    <div key={index} className="p-3 bg-white/5 rounded-lg">
                      <div className="flex items-center justify-between">
                        <div>
                          <div className="text-white font-medium">{user.displayName}</div>
                          <div className="text-emerald-200 text-sm">{user.email}</div>
                          <div className="text-emerald-300 text-xs">
                            Password: {user.password} | Role: {user.role} | 
                            Status: {user.isActive ? 'Active' : 'Inactive'}
                          </div>
                        </div>
                        <div className="flex items-center space-x-2">
                          {user.role === 'admin' ? (
                            <ShieldCheckIcon className="h-5 w-5 text-blue-400" />
                          ) : (
                            <UserGroupIcon className="h-5 w-5 text-purple-400" />
                          )}
                          {user.isActive ? (
                            <CheckCircleIcon className="h-4 w-4 text-green-400" />
                          ) : (
                            <XCircleIcon className="h-4 w-4 text-red-400" />
                          )}
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            )}
          </div>
        </div>

        {/* Instructions */}
        <div className="mt-6 bg-white/5 backdrop-blur-md rounded-2xl p-6 border border-white/10">
          <h3 className="text-lg font-semibold text-white mb-3">Instructions</h3>
          <div className="space-y-2 text-emerald-200 text-sm">
            <p>1. Click any button above to add users to the Firebase login collection</p>
            <p>2. Use the "View User List" button to see all available test users</p>
            <p>3. After adding users, you can login with any of the provided credentials</p>
            <p>4. Admin users have full access, regular users have limited access</p>
            <p>5. One inactive user is included for testing inactive account handling</p>
          </div>
        </div>

        {/* Footer */}
        <div className="text-center mt-8">
          <p className="text-emerald-200 text-sm">
            © 2024 BNP Paribas. All rights reserved.
          </p>
        </div>
      </div>
    </div>
  );
}
