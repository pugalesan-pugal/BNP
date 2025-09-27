'use client';

import { useState, useEffect } from 'react';
import { useAuth } from '@/contexts/AuthContext';
import { useRouter } from 'next/navigation';
import { EyeIcon, EyeSlashIcon, ShieldCheckIcon, CheckCircleIcon, XCircleIcon } from '@heroicons/react/24/outline';
import ExactLoadingSpinner from '@/components/ExactLoadingSpinner';
import { initializeDefaultUser } from '@/utils/initializeDefaultUser';

export default function LoginPage() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);
  const [initializing, setInitializing] = useState(true);
  const [defaultCredentials, setDefaultCredentials] = useState<{email: string, password: string} | null>(null);
  const [focusedField, setFocusedField] = useState<string | null>(null);
  const [showSuccess, setShowSuccess] = useState(false);
  const [mounted, setMounted] = useState(false);
  
  const { login } = useAuth();
  const router = useRouter();

  // Initialize default user on component mount
  useEffect(() => {
    const initDefaultUser = async () => {
      try {
        const result = await initializeDefaultUser();
        if (result.success && result.credentials) {
          setDefaultCredentials(result.credentials);
          console.log('Default credentials available:', result.credentials);
        }
      } catch (error) {
        console.error('Failed to initialize default user:', error);
      } finally {
        setInitializing(false);
      }
    };

    initDefaultUser();
  }, []);

  // Mount animation
  useEffect(() => {
    setMounted(true);
  }, []);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError('');
    setLoading(true);

    try {
      await login(email, password);
      setShowSuccess(true);
      // Show success animation before redirecting
      setTimeout(() => {
        router.push('/dashboard');
      }, 1500);
    } catch (error: any) {
      setError(error.message || 'Login failed. Please check your credentials.');
      setLoading(false);
    }
  };

  if (loading || initializing) {
    return <ExactLoadingSpinner />;
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-emerald-500 via-emerald-600 to-emerald-700 flex items-center justify-center p-4 relative overflow-hidden">
      {/* Animated Background Particles */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-4 -left-4 w-72 h-72 bg-white/10 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob"></div>
        <div className="absolute -top-4 -right-4 w-72 h-72 bg-yellow-300/20 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob animation-delay-2000"></div>
        <div className="absolute -bottom-8 left-20 w-72 h-72 bg-pink-300/20 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob animation-delay-4000"></div>
      </div>

      <div className={`max-w-md w-full relative z-10 transition-all duration-1000 ${mounted ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
        {/* Logo and Title */}
        <div className={`text-center mb-8 transition-all duration-1000 delay-200 ${mounted ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
          <div className={`mx-auto w-16 h-16 bg-emerald-600 rounded-xl flex items-center justify-center mb-4 shadow-lg transition-all duration-500 hover:scale-110 hover:shadow-2xl ${mounted ? 'animate-bounce-in' : ''}`}>
            <ShieldCheckIcon className="h-8 w-8 text-white" />
          </div>
          <h1 className="text-3xl font-bold text-white mb-2 animate-fade-in-up">BNP Paribas</h1>
          <p className="text-white/80 animate-fade-in-up animation-delay-300">Admin Dashboard Access</p>
        </div>

        {/* Login Form */}
        <div className={`bg-white/10 backdrop-blur-md rounded-2xl p-8 border border-white/20 transition-all duration-1000 delay-400 ${mounted ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
          <form onSubmit={handleSubmit} className="space-y-6">
            <div className="relative">
              <label htmlFor="email" className="block text-sm font-medium text-white mb-2 transition-all duration-300">
                Email Address
              </label>
              <div className="relative">
                <input
                  id="email"
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  onFocus={() => setFocusedField('email')}
                  onBlur={() => setFocusedField(null)}
                  className={`w-full px-4 py-3 bg-white/10 border rounded-lg text-white placeholder-slate-400 focus:outline-none transition-all duration-300 ${
                    focusedField === 'email' 
                      ? 'border-emerald-400 ring-2 ring-emerald-400/50 bg-white/20' 
                      : 'border-white/20 hover:border-white/40'
                  }`}
                  placeholder="admin@bnp-paribas.com"
                  required
                />
                {focusedField === 'email' && (
                  <div className="absolute inset-0 rounded-lg border-2 border-emerald-400 pointer-events-none animate-pulse"></div>
                )}
              </div>
            </div>

            <div className="relative">
              <label htmlFor="password" className="block text-sm font-medium text-white mb-2 transition-all duration-300">
                Password
              </label>
              <div className="relative">
                <input
                  id="password"
                  type={showPassword ? 'text' : 'password'}
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  onFocus={() => setFocusedField('password')}
                  onBlur={() => setFocusedField(null)}
                  className={`w-full px-4 py-3 bg-white/10 border rounded-lg text-white placeholder-slate-400 focus:outline-none transition-all duration-300 pr-12 ${
                    focusedField === 'password' 
                      ? 'border-emerald-400 ring-2 ring-emerald-400/50 bg-white/20' 
                      : 'border-white/20 hover:border-white/40'
                  }`}
                  placeholder="Enter your password"
                  required
                />
                <button
                  type="button"
                  onClick={() => setShowPassword(!showPassword)}
                  className="absolute right-3 top-1/2 transform -translate-y-1/2 text-slate-400 hover:text-white transition-all duration-300 hover:scale-110"
                >
                  {showPassword ? (
                    <EyeSlashIcon className="h-5 w-5 transition-all duration-300" />
                  ) : (
                    <EyeIcon className="h-5 w-5 transition-all duration-300" />
                  )}
                </button>
                {focusedField === 'password' && (
                  <div className="absolute inset-0 rounded-lg border-2 border-emerald-400 pointer-events-none animate-pulse"></div>
                )}
              </div>
            </div>

            {error && (
              <div className="bg-red-500/20 border border-red-500/50 rounded-lg p-3 animate-shake">
                <div className="flex items-center space-x-2">
                  <XCircleIcon className="h-5 w-5 text-red-400 animate-pulse" />
                  <p className="text-red-200 text-sm">{error}</p>
                </div>
              </div>
            )}

            {showSuccess && (
              <div className="bg-emerald-500/20 border border-emerald-500/50 rounded-lg p-3 animate-fade-in">
                <div className="flex items-center space-x-2">
                  <CheckCircleIcon className="h-5 w-5 text-emerald-400 animate-bounce" />
                  <p className="text-emerald-200 text-sm">Login successful! Redirecting...</p>
                </div>
              </div>
            )}

            <button
              type="submit"
              disabled={loading}
              className={`w-full font-medium py-3 px-4 rounded-lg focus:outline-none transition-all duration-300 transform hover:scale-105 active:scale-95 ${
                loading 
                  ? 'bg-emerald-500 text-white cursor-not-allowed' 
                  : 'bg-emerald-600 text-white hover:bg-emerald-700 focus:ring-2 focus:ring-emerald-500 focus:ring-offset-2 focus:ring-offset-emerald-600'
              }`}
            >
              <div className="flex items-center justify-center space-x-2">
                {loading && (
                  <div className="animate-spin rounded-full h-4 w-4 border-2 border-white border-t-transparent"></div>
                )}
                <span>{loading ? 'Signing in...' : 'Sign In'}</span>
              </div>
            </button>
          </form>

          <div className={`mt-6 text-center transition-all duration-1000 delay-600 ${mounted ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
            <p className="text-white/70 text-sm animate-fade-in-up">
              Secure access to BNP Paribas Admin Dashboard
            </p>
            {defaultCredentials && (
              <div className="mt-4 p-3 bg-emerald-500/20 border border-emerald-400/50 rounded-lg animate-fade-in-up animation-delay-700 hover:bg-emerald-500/30 transition-all duration-300">
                <p className="text-emerald-200 text-xs font-medium mb-1">Default Admin Credentials:</p>
                <p className="text-emerald-100 text-xs">
                  Email: <span className="font-mono bg-emerald-600/30 px-1 rounded">{defaultCredentials.email}</span>
                </p>
                <p className="text-emerald-100 text-xs">
                  Password: <span className="font-mono bg-emerald-600/30 px-1 rounded">{defaultCredentials.password}</span>
                </p>
              </div>
            )}
          </div>
        </div>

        {/* Footer */}
        <div className={`text-center mt-8 transition-all duration-1000 delay-800 ${mounted ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
          <p className="text-white/70 text-sm animate-fade-in-up">
            © 2024 BNP Paribas. All rights reserved.
          </p>
        </div>
      </div>
    </div>
  );
}
