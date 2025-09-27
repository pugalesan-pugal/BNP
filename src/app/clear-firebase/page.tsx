'use client';

import { useEffect, useState } from 'react';
import { CheckCircleIcon, XCircleIcon } from '@heroicons/react/24/outline';

export default function ClearFirebasePage() {
  const [status, setStatus] = useState('clearing');
  const [message, setMessage] = useState('');

  useEffect(() => {
    const clearFirebaseData = async () => {
      try {
        setStatus('clearing');
        setMessage('Clearing Firebase installation data...');

        // Clear localStorage Firebase data
        const keysToRemove = [];
        for (let i = 0; i < localStorage.length; i++) {
          const key = localStorage.key(i);
          if (key && (key.includes('firebase') || key.includes('firestore') || key.includes('analytics'))) {
            keysToRemove.push(key);
          }
        }
        
        keysToRemove.forEach(key => {
          localStorage.removeItem(key);
        });

        // Clear sessionStorage Firebase data
        const sessionKeysToRemove = [];
        for (let i = 0; i < sessionStorage.length; i++) {
          const key = sessionStorage.key(i);
          if (key && (key.includes('firebase') || key.includes('firestore') || key.includes('analytics'))) {
            sessionKeysToRemove.push(key);
          }
        }
        
        sessionKeysToRemove.forEach(key => {
          sessionStorage.removeItem(key);
        });

        // Clear IndexedDB Firebase data
        if ('indexedDB' in window) {
          try {
            const databases = await indexedDB.databases();
            const firebaseDatabases = databases.filter(db => 
              db.name && (db.name.includes('firebase') || db.name.includes('firestore'))
            );
            
            for (const db of firebaseDatabases) {
              if (db.name) {
                indexedDB.deleteDatabase(db.name);
              }
            }
          } catch (error) {
            console.warn('Could not clear IndexedDB:', error);
          }
        }

        setStatus('success');
        setMessage(`Cleared ${keysToRemove.length} localStorage items, ${sessionKeysToRemove.length} sessionStorage items, and Firebase IndexedDB data.`);
        
        // Redirect to main page after 3 seconds
        setTimeout(() => {
          window.location.href = '/';
        }, 3000);

      } catch (error) {
        setStatus('error');
        setMessage(`Error clearing Firebase data: ${error}`);
      }
    };

    clearFirebaseData();
  }, []);

  return (
    <div className="min-h-screen bg-gray-50 flex items-center justify-center p-4">
      <div className="max-w-md w-full bg-white rounded-lg shadow-lg p-8">
        <div className="text-center">
          {status === 'clearing' && (
            <>
              <div className="mx-auto w-16 h-16 border-4 border-blue-200 border-t-blue-600 rounded-full animate-spin mb-4"></div>
              <h2 className="text-xl font-semibold text-gray-900 mb-2">Clearing Firebase Data</h2>
              <p className="text-gray-600">{message}</p>
            </>
          )}
          
          {status === 'success' && (
            <>
              <CheckCircleIcon className="mx-auto w-16 h-16 text-green-500 mb-4" />
              <h2 className="text-xl font-semibold text-gray-900 mb-2">Firebase Data Cleared</h2>
              <p className="text-gray-600 mb-4">{message}</p>
              <p className="text-sm text-gray-500">Redirecting to login page...</p>
            </>
          )}
          
          {status === 'error' && (
            <>
              <XCircleIcon className="mx-auto w-16 h-16 text-red-500 mb-4" />
              <h2 className="text-xl font-semibold text-gray-900 mb-2">Error</h2>
              <p className="text-gray-600 mb-4">{message}</p>
              <button 
                onClick={() => window.location.href = '/'}
                className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition-colors"
              >
                Go to Login
              </button>
            </>
          )}
        </div>
      </div>
    </div>
  );
}
