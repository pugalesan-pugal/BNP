'use client';

import { useState } from 'react';
import { db } from '@/lib/firebase';
import { collection, addDoc, getDocs } from 'firebase/firestore';

export default function FirebaseTestPage() {
  const [status, setStatus] = useState('');
  const [error, setError] = useState('');

  const testFirebase = async () => {
    try {
      setStatus('Testing Firebase connection...');
      setError('');

      // Test 1: Try to read from Firestore
      setStatus('Testing Firestore read...');
      const testCollection = collection(db, 'test');
      const snapshot = await getDocs(testCollection);
      setStatus(`Read test successful. Found ${snapshot.size} documents.`);

      // Test 2: Try to write to Firestore
      setStatus('Testing Firestore write...');
      const docRef = await addDoc(testCollection, {
        message: 'Test document',
        timestamp: new Date().toISOString()
      });
      setStatus(`Write test successful. Document ID: ${docRef.id}`);

      // Test 3: Try to write to login collection
      setStatus('Testing login collection write...');
      const loginCollection = collection(db, 'login');
      const loginDocRef = await addDoc(loginCollection, {
        email: 'test@example.com',
        password: 'test123',
        role: 'admin',
        displayName: 'Test User',
        isActive: true,
        createdAt: new Date().toISOString(),
        updatedAt: new Date().toISOString()
      });
      setStatus(`Login collection write successful. Document ID: ${loginDocRef.id}`);

    } catch (error: any) {
      console.error('Firebase test error:', error);
      setError(`Error: ${error.message}`);
      setStatus('Test failed');
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-emerald-900 via-emerald-800 to-emerald-900 flex items-center justify-center p-4">
      <div className="max-w-md w-full">
        <div className="text-center mb-8">
          <h1 className="text-3xl font-bold text-white mb-2">Firebase Test</h1>
          <p className="text-emerald-200">Testing Firebase connection and permissions</p>
        </div>

        <div className="bg-white/10 backdrop-blur-md rounded-2xl p-8 border border-white/20 text-center">
          <button
            onClick={testFirebase}
            className="w-full bg-emerald-600 text-white font-medium py-3 px-4 rounded-lg hover:bg-emerald-700 focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:ring-offset-2 focus:ring-offset-emerald-900 transition-all duration-200 mb-4"
          >
            Test Firebase Connection
          </button>

          {status && (
            <div className="mb-4">
              <p className="text-emerald-200 text-sm">{status}</p>
            </div>
          )}

          {error && (
            <div className="mb-4">
              <p className="text-red-200 text-sm">{error}</p>
            </div>
          )}
        </div>

        <div className="mt-6 bg-white/5 backdrop-blur-md rounded-2xl p-6 border border-white/10">
          <h3 className="text-lg font-semibold text-white mb-3">Firebase Configuration</h3>
          <div className="space-y-2 text-emerald-200 text-sm">
            <p><strong>Project ID:</strong> bnp-paribas-8a1ec</p>
            <p><strong>Auth Domain:</strong> bnp-paribas-8a1ec.firebaseapp.com</p>
            <p><strong>Storage Bucket:</strong> bnp-paribas-8a1ec.firebasestorage.app</p>
          </div>
        </div>
      </div>
    </div>
  );
}
