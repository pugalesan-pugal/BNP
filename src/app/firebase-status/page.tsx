'use client';

import { useEffect, useState } from 'react';
import { db, analytics } from '@/lib/firebase';
import { CheckCircleIcon, XCircleIcon, ExclamationTriangleIcon } from '@heroicons/react/24/outline';

export default function FirebaseStatusPage() {
  const [status, setStatus] = useState({
    firebase: 'checking',
    firestore: 'checking',
    analytics: 'checking',
    error: null as string | null
  });

  useEffect(() => {
    const checkFirebaseStatus = () => {
      try {
        const firebaseStatus = db ? 'connected' : 'disconnected';
        const analyticsStatus = analytics ? 'connected' : 'disconnected';
        
        setStatus({
          firebase: firebaseStatus,
          firestore: firebaseStatus,
          analytics: analyticsStatus,
          error: null
        });
      } catch (error: any) {
        setStatus({
          firebase: 'error',
          firestore: 'error',
          analytics: 'error',
          error: error.message
        });
      }
    };

    checkFirebaseStatus();
  }, []);

  const getStatusIcon = (status: string) => {
    switch (status) {
      case 'connected':
        return <CheckCircleIcon className="h-6 w-6 text-green-500" />;
      case 'disconnected':
        return <XCircleIcon className="h-6 w-6 text-red-500" />;
      case 'error':
        return <ExclamationTriangleIcon className="h-6 w-6 text-yellow-500" />;
      default:
        return <div className="h-6 w-6 border-2 border-gray-300 border-t-blue-500 rounded-full animate-spin" />;
    }
  };

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'connected':
        return 'text-green-600 bg-green-50 border-green-200';
      case 'disconnected':
        return 'text-red-600 bg-red-50 border-red-200';
      case 'error':
        return 'text-yellow-600 bg-yellow-50 border-yellow-200';
      default:
        return 'text-blue-600 bg-blue-50 border-blue-200';
    }
  };

  return (
    <div className="min-h-screen bg-gray-50 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-3xl mx-auto">
        <div className="text-center mb-8">
          <h1 className="text-3xl font-bold text-gray-900 mb-4">Firebase Status</h1>
          <p className="text-gray-600">Check the status of your Firebase services</p>
        </div>

        <div className="bg-white shadow rounded-lg p-6">
          <div className="space-y-6">
            {/* Firebase App Status */}
            <div className={`border rounded-lg p-4 ${getStatusColor(status.firebase)}`}>
              <div className="flex items-center justify-between">
                <div className="flex items-center space-x-3">
                  {getStatusIcon(status.firebase)}
                  <div>
                    <h3 className="font-medium">Firebase App</h3>
                    <p className="text-sm opacity-75">Core Firebase initialization</p>
                  </div>
                </div>
                <span className="font-medium capitalize">{status.firebase}</span>
              </div>
            </div>

            {/* Firestore Status */}
            <div className={`border rounded-lg p-4 ${getStatusColor(status.firestore)}`}>
              <div className="flex items-center justify-between">
                <div className="flex items-center space-x-3">
                  {getStatusIcon(status.firestore)}
                  <div>
                    <h3 className="font-medium">Firestore Database</h3>
                    <p className="text-sm opacity-75">Database connection status</p>
                  </div>
                </div>
                <span className="font-medium capitalize">{status.firestore}</span>
              </div>
            </div>

            {/* Analytics Status */}
            <div className={`border rounded-lg p-4 ${getStatusColor(status.analytics)}`}>
              <div className="flex items-center justify-between">
                <div className="flex items-center space-x-3">
                  {getStatusIcon(status.analytics)}
                  <div>
                    <h3 className="font-medium">Firebase Analytics</h3>
                    <p className="text-sm opacity-75">Analytics service status</p>
                  </div>
                </div>
                <span className="font-medium capitalize">{status.analytics}</span>
              </div>
            </div>

            {/* Error Message */}
            {status.error && (
              <div className="bg-red-50 border border-red-200 rounded-lg p-4">
                <div className="flex items-center space-x-3">
                  <ExclamationTriangleIcon className="h-6 w-6 text-red-500" />
                  <div>
                    <h3 className="font-medium text-red-800">Error Details</h3>
                    <p className="text-sm text-red-600 mt-1">{status.error}</p>
                  </div>
                </div>
              </div>
            )}

            {/* Environment Variables */}
            <div className="bg-gray-50 border rounded-lg p-4">
              <h3 className="font-medium text-gray-900 mb-3">Environment Variables</h3>
              <div className="space-y-2 text-sm">
                <div className="flex justify-between">
                  <span className="text-gray-600">NEXT_PUBLIC_FIREBASE_API_KEY:</span>
                  <span className={process.env.NEXT_PUBLIC_FIREBASE_API_KEY ? 'text-green-600' : 'text-red-600'}>
                    {process.env.NEXT_PUBLIC_FIREBASE_API_KEY ? 'Set' : 'Missing'}
                  </span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-600">NEXT_PUBLIC_FIREBASE_AUTH_DOMAIN:</span>
                  <span className={process.env.NEXT_PUBLIC_FIREBASE_AUTH_DOMAIN ? 'text-green-600' : 'text-red-600'}>
                    {process.env.NEXT_PUBLIC_FIREBASE_AUTH_DOMAIN ? 'Set' : 'Missing'}
                  </span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-600">NEXT_PUBLIC_FIREBASE_PROJECT_ID:</span>
                  <span className={process.env.NEXT_PUBLIC_FIREBASE_PROJECT_ID ? 'text-green-600' : 'text-red-600'}>
                    {process.env.NEXT_PUBLIC_FIREBASE_PROJECT_ID ? 'Set' : 'Missing'}
                  </span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-600">NEXT_PUBLIC_FIREBASE_APP_ID:</span>
                  <span className={process.env.NEXT_PUBLIC_FIREBASE_APP_ID ? 'text-green-600' : 'text-red-600'}>
                    {process.env.NEXT_PUBLIC_FIREBASE_APP_ID ? 'Set' : 'Missing'}
                  </span>
                </div>
              </div>
            </div>

            {/* Troubleshooting */}
            <div className="bg-blue-50 border border-blue-200 rounded-lg p-4">
              <h3 className="font-medium text-blue-900 mb-2">Troubleshooting</h3>
              <ul className="text-sm text-blue-800 space-y-1">
                <li>• Check your Firebase project configuration</li>
                <li>• Verify all environment variables are set correctly</li>
                <li>• Ensure your Firebase project is active and billing is enabled</li>
                <li>• Check the browser console for detailed error messages</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
