'use client';

import Link from 'next/link';
import { 
  CircleStackIcon, 
  UserPlusIcon, 
  CogIcon,
  ShieldCheckIcon,
  UserGroupIcon,
  ArrowRightIcon
} from '@heroicons/react/24/outline';

export default function SetupMenuPage() {
  const setupOptions = [
    {
      title: 'Auto Setup',
      description: 'Automatically add Pugalesan user (pugalesan@gmail.com / ABC123)',
      href: '/auto-setup',
      icon: UserPlusIcon,
      color: 'bg-blue-600',
      hoverColor: 'hover:bg-blue-700'
    },
    {
      title: 'Bulk Setup',
      description: 'Add all 15 dummy users to Firebase login collection',
      href: '/bulk-setup',
      icon: CircleStackIcon,
      color: 'bg-green-600',
      hoverColor: 'hover:bg-green-700'
    },
    {
      title: 'Dummy Data Management',
      description: 'Manage and add specific users with detailed controls',
      href: '/dummy-data',
      icon: UserGroupIcon,
      color: 'bg-purple-600',
      hoverColor: 'hover:bg-purple-700'
    },
    {
      title: 'Admin Setup',
      description: 'Manual user management and collection tools',
      href: '/admin-setup',
      icon: CogIcon,
      color: 'bg-orange-600',
      hoverColor: 'hover:bg-orange-700'
    },
    {
      title: 'Login Page',
      description: 'Access the main login page to test authentication',
      href: '/',
      icon: ShieldCheckIcon,
      color: 'bg-emerald-600',
      hoverColor: 'hover:bg-emerald-700'
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-emerald-900 via-emerald-800 to-emerald-900 flex items-center justify-center p-4">
      <div className="max-w-4xl w-full">
        {/* Header */}
        <div className="text-center mb-8">
          <div className="mx-auto w-16 h-16 bg-emerald-600 rounded-xl flex items-center justify-center mb-4 shadow-lg">
            <ShieldCheckIcon className="h-8 w-8 text-white" />
          </div>
          <h1 className="text-3xl font-bold text-white mb-2">BNP Paribas Setup Menu</h1>
          <p className="text-emerald-200">Choose your setup option to configure Firebase users</p>
        </div>

        {/* Setup Options Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
          {setupOptions.map((option, index) => (
            <Link
              key={index}
              href={option.href}
              className="group bg-white/10 backdrop-blur-md rounded-2xl p-6 border border-white/20 hover:bg-white/20 transition-all duration-300 hover:scale-105"
            >
              <div className="flex items-start space-x-4">
                <div className={`w-12 h-12 ${option.color} rounded-lg flex items-center justify-center flex-shrink-0`}>
                  <option.icon className="h-6 w-6 text-white" />
                </div>
                <div className="flex-1">
                  <h3 className="text-lg font-semibold text-white mb-2 group-hover:text-emerald-200 transition-colors">
                    {option.title}
                  </h3>
                  <p className="text-emerald-200 text-sm mb-4">
                    {option.description}
                  </p>
                  <div className="flex items-center text-emerald-300 text-sm group-hover:text-white transition-colors">
                    <span>Get Started</span>
                    <ArrowRightIcon className="h-4 w-4 ml-2 group-hover:translate-x-1 transition-transform" />
                  </div>
                </div>
              </div>
            </Link>
          ))}
        </div>

        {/* Quick Info */}
        <div className="bg-white/10 backdrop-blur-md rounded-2xl p-6 border border-white/20">
          <h3 className="text-lg font-semibold text-white mb-4">Quick Start Guide</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <h4 className="text-white font-medium mb-2">For Quick Testing:</h4>
              <div className="space-y-1 text-emerald-200 text-sm">
                <p>1. Use "Auto Setup" to add Pugalesan user</p>
                <p>2. Go to "Login Page" to test authentication</p>
                <p>3. Use: pugalesan@gmail.com / ABC123</p>
              </div>
            </div>
            <div>
              <h4 className="text-white font-medium mb-2">For Full Testing:</h4>
              <div className="space-y-1 text-emerald-200 text-sm">
                <p>1. Use "Bulk Setup" to add all 15 users</p>
                <p>2. Test with different user roles</p>
                <p>3. Explore dashboard features</p>
              </div>
            </div>
          </div>
        </div>

        {/* Available Users Preview */}
        <div className="mt-6 bg-white/5 backdrop-blur-md rounded-2xl p-6 border border-white/10">
          <h3 className="text-lg font-semibold text-white mb-4">Available Test Users</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <h4 className="text-white font-medium mb-2">Admin Users:</h4>
              <div className="space-y-1 text-emerald-200 text-sm">
                <p>• admin@bnp-paribas.com / Admin123!</p>
                <p>• manager@bnp-paribas.com / Manager123!</p>
                <p>• finance@bnp-paribas.com / Finance123!</p>
                <p>• risk@bnp-paribas.com / Risk123!</p>
                <p>• hr@bnp-paribas.com / HR123!</p>
                <p>• supervisor@bnp-paribas.com / Supervisor123!</p>
              </div>
            </div>
            <div>
              <h4 className="text-white font-medium mb-2">Regular Users:</h4>
              <div className="space-y-1 text-emerald-200 text-sm">
                <p>• analyst@bnp-paribas.com / Analyst123!</p>
                <p>• sales@bnp-paribas.com / Sales123!</p>
                <p>• support@bnp-paribas.com / Support123!</p>
                <p>• operations@bnp-paribas.com / Ops123!</p>
                <p>• marketing@bnp-paribas.com / Marketing123!</p>
                <p>• test@bnp-paribas.com / Test123!</p>
              </div>
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
