'use client';

import React, { createContext, useContext, useEffect, useState } from 'react';
import { simpleLoginWithCredentials } from '@/utils/authHelpers';

interface User {
  uid: string;
  email: string;
  displayName: string;
  role: string;
  isActive: boolean;
}

interface AuthContextType {
  user: User | null;
  loading: boolean;
  login: (email: string, password: string) => Promise<void>;
  logout: () => Promise<void>;
}

const AuthContext = createContext<AuthContextType | undefined>(undefined);

export function AuthProvider({ children }: { children: React.ReactNode }) {
  const [user, setUser] = useState<User | null>(null);
  const [loading, setLoading] = useState(true);

  // Check for existing session on mount
  useEffect(() => {
    console.log('AuthContext - Checking for saved user...');
    const savedUser = localStorage.getItem('bnp-user');
    if (savedUser) {
      try {
        const parsedUser = JSON.parse(savedUser);
        console.log('AuthContext - Found saved user:', parsedUser);
        setUser(parsedUser);
      } catch (error) {
        console.error('Error parsing saved user:', error);
        localStorage.removeItem('bnp-user');
      }
    } else {
      console.log('AuthContext - No saved user found');
    }
    setLoading(false);
  }, []);

  const login = async (email: string, password: string) => {
    try {
      setLoading(true);
      const result = await simpleLoginWithCredentials(email, password);
      
      // Save user to localStorage for persistence
      localStorage.setItem('bnp-user', JSON.stringify(result.user));
      setUser(result.user);
    } catch (error) {
      throw error;
    } finally {
      setLoading(false);
    }
  };

  const logout = async () => {
    try {
      localStorage.removeItem('bnp-user');
      setUser(null);
    } catch (error) {
      throw error;
    }
  };

  const value = {
    user,
    loading,
    login,
    logout,
  };

  return (
    <AuthContext.Provider value={value}>
      {children}
    </AuthContext.Provider>
  );
}

export function useAuth() {
  const context = useContext(AuthContext);
  if (context === undefined) {
    throw new Error('useAuth must be used within an AuthProvider');
  }
  return context;
}
