'use client';

import { useEffect, useState } from 'react';
import { dummyUsers } from '@/utils/dummyData';
import { 
  CircleStackIcon, 
  CheckCircleIcon, 
  XCircleIcon,
  UserGroupIcon,
  ShieldCheckIcon
} from '@heroicons/react/24/outline';

export default function BulkSetupPage() {
  const [loading, setLoading] = useState(false);
  const [results, setResults] = useState<any[]>([]);
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const setupAllUsers = async () => {
      setLoading(true);
      setProgress(0);
      
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

        setResults(data.results);
        setProgress(100);
      } catch (error: any) {
        setResults([{ email: 'Error', success: false, error: error.message }]);
      } finally {
        setLoading(false);
      }
    };

    setupAllUsers();
  }, []);

  const successCount = results.filter(r => r.success).length;
  const errorCount = results.filter(r => !r.success).length;
  const totalUsers = dummyUsers.length;

  return (
    <div className="min-h-screen bg-gradient-to-br from-emerald-900 via-emerald-800 to-emerald-900 flex items-center justify-center p-4">
      <div className="max-w-2xl w-full">
        {/* Header */}
        <div className="text-center mb-8">
          <div className="mx-auto w-16 h-16 bg-emerald-600 rounded-xl flex items-center justify-center mb-4 shadow-lg">
            <CircleStackIcon className="h-8 w-8 text-white" />
          </div>
          <h1 className="text-3xl font-bold text-white mb-2">Bulk User Setup</h1>
          <p className="text-emerald-200">Adding all dummy users to Firebase</p>
        </div>

        {/* Progress Section */}
        <div className="bg-white/10 backdrop-blur-md rounded-2xl p-8 border border-white/20 mb-6">
          {loading ? (
            <div className="text-center">
              <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-emerald-400 mx-auto mb-4"></div>
              <h2 className="text-xl font-semibold text-white mb-2">Adding Users...</h2>
              <p className="text-emerald-200">Please wait while we add all dummy users to Firebase</p>
            </div>
          ) : (
            <div className="text-center">
              {successCount > 0 ? (
                <CheckCircleIcon className="h-12 w-12 text-green-400 mx-auto mb-4" />
              ) : (
                <XCircleIcon className="h-12 w-12 text-red-400 mx-auto mb-4" />
              )}
              <h2 className="text-xl font-semibold text-white mb-2">
                {successCount > 0 ? 'Setup Complete!' : 'Setup Failed'}
              </h2>
              <p className="text-emerald-200">
                {successCount > 0 
                  ? `${successCount} users added successfully` 
                  : 'Failed to add users to Firebase'
                }
              </p>
            </div>
          )}

          {/* Progress Bar */}
          <div className="mt-6">
            <div className="flex justify-between items-center mb-2">
              <span className="text-emerald-200 text-sm">Progress</span>
              <span className="text-emerald-200 text-sm">{progress}%</span>
            </div>
            <div className="w-full bg-emerald-800 rounded-full h-2">
              <div 
                className="bg-emerald-500 h-2 rounded-full transition-all duration-300 ease-out"
                style={{ width: `${progress}%` }}
              />
            </div>
          </div>
        </div>

        {/* Results Summary */}
        {results.length > 0 && (
          <div className="bg-white/10 backdrop-blur-md rounded-2xl p-6 border border-white/20 mb-6">
            <h3 className="text-lg font-semibold text-white mb-4">Results Summary</h3>
            <div className="grid grid-cols-3 gap-4 mb-4">
              <div className="text-center">
                <div className="text-2xl font-bold text-blue-400">{totalUsers}</div>
                <div className="text-sm text-emerald-200">Total Users</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-green-400">{successCount}</div>
                <div className="text-sm text-emerald-200">Success</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-red-400">{errorCount}</div>
                <div className="text-sm text-emerald-200">Errors</div>
              </div>
            </div>
            
            <div className="space-y-2 max-h-40 overflow-y-auto">
              {results.map((result, index) => (
                <div key={index} className="flex items-center justify-between p-2 bg-white/5 rounded-lg">
                  <span className="text-emerald-200 text-sm">{result.email}</span>
                  {result.success ? (
                    <CheckCircleIcon className="h-5 w-5 text-green-400" />
                  ) : (
                    <XCircleIcon className="h-5 w-5 text-red-400" />
                  )}
                </div>
              ))}
            </div>
          </div>
        )}

        {/* User Types Info */}
        <div className="bg-white/10 backdrop-blur-md rounded-2xl p-6 border border-white/20 mb-6">
          <h3 className="text-lg font-semibold text-white mb-4">Added User Types</h3>
          <div className="grid grid-cols-2 gap-4">
            <div className="flex items-center">
              <ShieldCheckIcon className="h-6 w-6 text-blue-400 mr-3" />
              <div>
                <div className="text-white font-medium">Admin Users</div>
                <div className="text-emerald-200 text-sm">6 users with full access</div>
              </div>
            </div>
            <div className="flex items-center">
              <UserGroupIcon className="h-6 w-6 text-purple-400 mr-3" />
              <div>
                <div className="text-white font-medium">Regular Users</div>
                <div className="text-emerald-200 text-sm">9 users with limited access</div>
              </div>
            </div>
          </div>
        </div>

        {/* Sample Credentials */}
        <div className="bg-white/5 backdrop-blur-md rounded-2xl p-6 border border-white/10">
          <h3 className="text-lg font-semibold text-white mb-3">Sample Login Credentials</h3>
          <div className="space-y-2 text-emerald-200 text-sm">
            <p><strong>Admin:</strong> admin@bnp-paribas.com / Admin123!</p>
            <p><strong>Manager:</strong> manager@bnp-paribas.com / Manager123!</p>
            <p><strong>Analyst:</strong> analyst@bnp-paribas.com / Analyst123!</p>
            <p><strong>Sales:</strong> sales@bnp-paribas.com / Sales123!</p>
            <p><strong>Finance:</strong> finance@bnp-paribas.com / Finance123!</p>
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
