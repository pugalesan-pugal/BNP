'use client';

import { useEffect, useState } from 'react';
import { ShieldCheckIcon, CheckCircleIcon, XCircleIcon } from '@heroicons/react/24/outline';

export default function AutoSetupPage() {
  const [status, setStatus] = useState<'loading' | 'success' | 'error'>('loading');
  const [message, setMessage] = useState('');

  useEffect(() => {
    const setupUser = async () => {
      try {
        const response = await fetch('/api/users/add', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({
            email: 'pugalesan@gmail.com',
            password: 'ABC123',
            role: 'admin',
            displayName: 'Pugalesan',
            isActive: true
          }),
        });

        const data = await response.json();

        if (!response.ok) {
          throw new Error(data.error || 'Failed to add user');
        }

        setStatus('success');
        setMessage('Pugalesan user (pugalesan@gmail.com / ABC123) has been successfully added to the login collection!');
      } catch (error: any) {
        setStatus('error');
        setMessage(`Error: ${error.message}`);
      }
    };

    setupUser();
  }, []);

  return (
    <div className="min-h-screen bg-gradient-to-br from-emerald-900 via-emerald-800 to-emerald-900 flex items-center justify-center p-4">
      <div className="max-w-md w-full">
        {/* Header */}
        <div className="text-center mb-8">
          <div className="mx-auto w-16 h-16 bg-emerald-600 rounded-xl flex items-center justify-center mb-4 shadow-lg">
            <ShieldCheckIcon className="h-8 w-8 text-white" />
          </div>
          <h1 className="text-3xl font-bold text-white mb-2">Auto Setup</h1>
          <p className="text-emerald-200">Adding Pugalesan user to Firebase</p>
        </div>

        {/* Status Display */}
        <div className="bg-white/10 backdrop-blur-md rounded-2xl p-8 border border-white/20 text-center">
          {status === 'loading' && (
            <div>
              <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-emerald-400 mx-auto mb-4"></div>
              <p className="text-emerald-200">Setting up user...</p>
            </div>
          )}

          {status === 'success' && (
            <div>
              <CheckCircleIcon className="h-12 w-12 text-green-400 mx-auto mb-4" />
              <h2 className="text-xl font-semibold text-white mb-2">Success!</h2>
              <p className="text-emerald-200 text-sm">{message}</p>
            </div>
          )}

          {status === 'error' && (
            <div>
              <XCircleIcon className="h-12 w-12 text-red-400 mx-auto mb-4" />
              <h2 className="text-xl font-semibold text-white mb-2">Error</h2>
              <p className="text-red-200 text-sm">{message}</p>
            </div>
          )}
        </div>

        {/* Instructions */}
        <div className="mt-6 bg-white/5 backdrop-blur-md rounded-2xl p-6 border border-white/10">
          <h3 className="text-lg font-semibold text-white mb-3">Next Steps</h3>
          <div className="space-y-2 text-emerald-200 text-sm">
            <p>1. Go to the login page</p>
            <p>2. Use credentials: pugalesan@gmail.com / ABC123</p>
            <p>3. Access the dashboard</p>
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
