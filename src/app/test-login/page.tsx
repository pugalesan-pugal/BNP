'use client';

import { useState } from 'react';
import { collection, getDocs } from 'firebase/firestore';
import { db } from '@/lib/firebase';

export default function TestLoginPage() {
  const [users, setUsers] = useState<any[]>([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');

  const checkLoginCollection = async () => {
    setLoading(true);
    setError('');
    
    try {
      const loginCollection = collection(db, 'login');
      const querySnapshot = await getDocs(loginCollection);
      
      const userList: any[] = [];
      querySnapshot.forEach((doc) => {
        const userData = doc.data();
        userList.push({
          id: doc.id,
          email: userData.email,
          role: userData.role,
          displayName: userData.displayName,
          isActive: userData.isActive,
          createdAt: userData.createdAt
        });
      });
      
      setUsers(userList);
      console.log('Users in login collection:', userList);
    } catch (error: any) {
      setError(`Error: ${error.message}`);
      console.error('Error checking login collection:', error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-emerald-900 via-emerald-800 to-emerald-900 flex items-center justify-center p-4">
      <div className="max-w-4xl w-full">
        <div className="text-center mb-8">
          <h1 className="text-3xl font-bold text-white mb-2">Login Collection Test</h1>
          <p className="text-emerald-200">Check users in Firebase login collection</p>
        </div>

        <div className="bg-white/10 backdrop-blur-md rounded-2xl p-8 border border-white/20">
          <button
            onClick={checkLoginCollection}
            disabled={loading}
            className="w-full bg-emerald-600 text-white font-medium py-3 px-4 rounded-lg hover:bg-emerald-700 focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:ring-offset-2 focus:ring-offset-emerald-900 disabled:opacity-50 disabled:cursor-not-allowed transition-all duration-200 mb-6"
          >
            {loading ? 'Checking...' : 'Check Login Collection'}
          </button>

          {error && (
            <div className="mb-4 p-3 bg-red-500/20 border border-red-500/50 rounded-lg">
              <p className="text-red-200 text-sm">{error}</p>
            </div>
          )}

          {users.length > 0 && (
            <div className="space-y-4">
              <h3 className="text-lg font-semibold text-white">Users in Login Collection ({users.length})</h3>
              {users.map((user, index) => (
                <div key={user.id} className="bg-white/5 rounded-lg p-4 border border-white/10">
                  <div className="grid grid-cols-2 md:grid-cols-4 gap-4 text-sm">
                    <div>
                      <span className="text-emerald-300 font-medium">Email:</span>
                      <p className="text-white">{user.email}</p>
                    </div>
                    <div>
                      <span className="text-emerald-300 font-medium">Role:</span>
                      <p className="text-white">{user.role}</p>
                    </div>
                    <div>
                      <span className="text-emerald-300 font-medium">Display Name:</span>
                      <p className="text-white">{user.displayName}</p>
                    </div>
                    <div>
                      <span className="text-emerald-300 font-medium">Active:</span>
                      <p className="text-white">{user.isActive ? 'Yes' : 'No'}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          )}

          {users.length === 0 && !loading && (
            <div className="text-center py-8">
              <p className="text-emerald-200">No users found in login collection</p>
              <p className="text-emerald-300 text-sm mt-2">
                Try visiting the main login page to initialize the default admin user
              </p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
