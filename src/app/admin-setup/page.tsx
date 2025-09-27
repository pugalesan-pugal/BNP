'use client';

import { useState } from 'react';
import { addPugalesanUser, createUserInLoginCollection, getAllUsersFromLoginCollection } from '@/utils/firebaseAdmin';
import { ShieldCheckIcon, UserPlusIcon, CircleStackIcon } from '@heroicons/react/24/outline';

interface UserData {
  email: string;
  password: string;
  role: 'admin' | 'user';
  displayName: string;
  isActive: boolean;
}

export default function AdminSetupPage() {
  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState('');
  const [messageType, setMessageType] = useState<'success' | 'error' | ''>('');
  const [newUser, setNewUser] = useState<UserData>({
    email: '',
    password: '',
    role: 'admin',
    displayName: '',
    isActive: true,
  });

  const addPugalesan = async () => {
    setLoading(true);
    setMessage('');
    
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

      setMessage('Pugalesan user (pugalesan@gmail.com) added successfully to login collection!');
      setMessageType('success');
    } catch (error: any) {
      setMessage(`Error: ${error.message}`);
      setMessageType('error');
    } finally {
      setLoading(false);
    }
  };

  const addNewUser = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setMessage('');
    
    try {
      const response = await fetch('/api/users/add', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(newUser),
      });

      const data = await response.json();

      if (!response.ok) {
        throw new Error(data.error || 'Failed to add user');
      }
      setMessage(`User ${newUser.email} added successfully to login collection!`);
      setMessageType('success');
      setNewUser({
        email: '',
        password: '',
        role: 'admin',
        displayName: '',
        isActive: true,
      });
    } catch (error: any) {
      setMessage(`Error: ${error.message}`);
      setMessageType('error');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-emerald-900 via-emerald-800 to-emerald-900 flex items-center justify-center p-4">
      <div className="max-w-2xl w-full">
        {/* Header */}
        <div className="text-center mb-8">
          <div className="mx-auto w-16 h-16 bg-emerald-600 rounded-xl flex items-center justify-center mb-4 shadow-lg">
            <CircleStackIcon className="h-8 w-8 text-white" />
          </div>
          <h1 className="text-3xl font-bold text-white mb-2">Firebase Login Collection</h1>
          <p className="text-emerald-200">Manage user credentials in Firestore</p>
        </div>

        <div className="space-y-6">
          {/* Add Pugalesan User */}
          <div className="bg-white/10 backdrop-blur-md rounded-2xl p-6 border border-white/20">
            <div className="flex items-center mb-4">
              <UserPlusIcon className="h-6 w-6 text-emerald-400 mr-2" />
              <h2 className="text-xl font-semibold text-white">Add Pugalesan User</h2>
            </div>
            <p className="text-emerald-200 text-sm mb-4">
              This will add the specific user (pugalesan@gmail.com / ABC123) to the login collection.
            </p>
            <button
              onClick={addPugalesan}
              disabled={loading}
              className="w-full bg-emerald-600 text-white font-medium py-3 px-4 rounded-lg hover:bg-emerald-700 focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:ring-offset-2 focus:ring-offset-emerald-900 disabled:opacity-50 disabled:cursor-not-allowed transition-all duration-200"
            >
              {loading ? 'Adding User...' : 'Add Pugalesan User'}
            </button>
          </div>

          {/* Add New User Form */}
          <div className="bg-white/10 backdrop-blur-md rounded-2xl p-6 border border-white/20">
            <div className="flex items-center mb-4">
              <ShieldCheckIcon className="h-6 w-6 text-emerald-400 mr-2" />
              <h2 className="text-xl font-semibold text-white">Add New User</h2>
            </div>
            
            <form onSubmit={addNewUser} className="space-y-4">
              <div>
                <label className="block text-sm font-medium text-white mb-2">
                  Email Address
                </label>
                <input
                  type="email"
                  value={newUser.email}
                  onChange={(e) => setNewUser({ ...newUser, email: e.target.value })}
                  className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-lg text-white placeholder-emerald-400 focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:border-transparent"
                  placeholder="user@example.com"
                  required
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-white mb-2">
                  Password
                </label>
                <input
                  type="password"
                  value={newUser.password}
                  onChange={(e) => setNewUser({ ...newUser, password: e.target.value })}
                  className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-lg text-white placeholder-emerald-400 focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:border-transparent"
                  placeholder="Enter password"
                  required
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-white mb-2">
                  Display Name
                </label>
                <input
                  type="text"
                  value={newUser.displayName}
                  onChange={(e) => setNewUser({ ...newUser, displayName: e.target.value })}
                  className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-lg text-white placeholder-emerald-400 focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:border-transparent"
                  placeholder="User Name"
                  required
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-white mb-2">
                  Role
                </label>
                <select
                  value={newUser.role}
                  onChange={(e) => setNewUser({ ...newUser, role: e.target.value as 'admin' | 'user' })}
                  className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-lg text-white focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:border-transparent"
                >
                  <option value="admin" className="bg-emerald-800">Admin</option>
                  <option value="user" className="bg-emerald-800">User</option>
                </select>
              </div>

              <button
                type="submit"
                disabled={loading}
                className="w-full bg-emerald-600 text-white font-medium py-3 px-4 rounded-lg hover:bg-emerald-700 focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:ring-offset-2 focus:ring-offset-emerald-900 disabled:opacity-50 disabled:cursor-not-allowed transition-all duration-200"
              >
                {loading ? 'Adding User...' : 'Add User to Login Collection'}
              </button>
            </form>
          </div>

          {/* Message Display */}
          {message && (
            <div className={`rounded-lg p-4 ${
              messageType === 'success' 
                ? 'bg-green-500/20 border border-green-500/50' 
                : 'bg-red-500/20 border border-red-500/50'
            }`}>
              <p className={`text-sm ${
                messageType === 'success' ? 'text-green-200' : 'text-red-200'
              }`}>
                {message}
              </p>
            </div>
          )}

          {/* Instructions */}
          <div className="bg-white/5 backdrop-blur-md rounded-2xl p-6 border border-white/10">
            <h3 className="text-lg font-semibold text-white mb-3">Instructions</h3>
            <div className="space-y-2 text-emerald-200 text-sm">
              <p>1. Click "Add Pugalesan User" to add the specific user (pugalesan@gmail.com / ABC123)</p>
              <p>2. Use the form below to add additional users to the login collection</p>
              <p>3. All users will be stored in the 'login' collection in Firestore</p>
              <p>4. You can then use these credentials to login to the dashboard</p>
            </div>
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
