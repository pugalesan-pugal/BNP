import Link from "next/link";
import { ArrowLeftIcon, UserIcon, CodeBracketIcon, RocketLaunchIcon } from "@heroicons/react/24/outline";

export default function About() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100 dark:from-gray-900 dark:to-gray-800">
      {/* Navigation */}
      <nav className="bg-white/80 dark:bg-gray-900/80 backdrop-blur-md border-b border-gray-200 dark:border-gray-700">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center">
              <Link href="/" className="flex items-center text-gray-600 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white transition-colors">
                <ArrowLeftIcon className="h-5 w-5 mr-2" />
                Back to Home
              </Link>
            </div>
            <div className="flex space-x-4">
              <Link href="/" className="text-gray-600 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white transition-colors">
                Home
              </Link>
              <Link href="/contact" className="text-gray-600 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white transition-colors">
                Contact
              </Link>
            </div>
          </div>
        </div>
      </nav>

      {/* About Content */}
      <main className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-6">
            About This Project
          </h1>
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
            A modern, full-stack React application built with Next.js, TypeScript, and Tailwind CSS.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-12 mb-16">
          <div className="bg-white dark:bg-gray-800 p-8 rounded-xl shadow-lg">
            <div className="w-16 h-16 bg-blue-100 dark:bg-blue-900 rounded-lg flex items-center justify-center mb-6">
              <UserIcon className="h-8 w-8 text-blue-600 dark:text-blue-400" />
            </div>
            <h3 className="text-2xl font-semibold text-gray-900 dark:text-white mb-4">Developer Experience</h3>
            <p className="text-gray-600 dark:text-gray-300 mb-4">
              Built with modern development practices including TypeScript for type safety, 
              ESLint for code quality, and Hot Module Replacement for fast development.
            </p>
            <ul className="space-y-2 text-gray-600 dark:text-gray-300">
              <li>• TypeScript for type safety</li>
              <li>• ESLint for code quality</li>
              <li>• Hot Module Replacement</li>
              <li>• Modern React patterns</li>
            </ul>
          </div>

          <div className="bg-white dark:bg-gray-800 p-8 rounded-xl shadow-lg">
            <div className="w-16 h-16 bg-purple-100 dark:bg-purple-900 rounded-lg flex items-center justify-center mb-6">
              <RocketLaunchIcon className="h-8 w-8 text-purple-600 dark:text-purple-400" />
            </div>
            <h3 className="text-2xl font-semibold text-gray-900 dark:text-white mb-4">Performance</h3>
            <p className="text-gray-600 dark:text-gray-300 mb-4">
              Optimized for production with Next.js built-in optimizations including 
              automatic code splitting, image optimization, and static generation.
            </p>
            <ul className="space-y-2 text-gray-600 dark:text-gray-300">
              <li>• Automatic code splitting</li>
              <li>• Image optimization</li>
              <li>• Static site generation</li>
              <li>• Server-side rendering</li>
            </ul>
          </div>
        </div>

        <div className="bg-white dark:bg-gray-800 p-8 rounded-xl shadow-lg">
          <div className="w-16 h-16 bg-green-100 dark:bg-green-900 rounded-lg flex items-center justify-center mb-6">
            <CodeBracketIcon className="h-8 w-8 text-green-600 dark:text-green-400" />
          </div>
          <h3 className="text-2xl font-semibold text-gray-900 dark:text-white mb-4">Technology Stack</h3>
          <div className="grid md:grid-cols-2 gap-8">
            <div>
              <h4 className="text-lg font-semibold text-gray-900 dark:text-white mb-3">Frontend</h4>
              <ul className="space-y-2 text-gray-600 dark:text-gray-300">
                <li>• React 19.1.0</li>
                <li>• Next.js 15.5.4</li>
                <li>• TypeScript 5.x</li>
                <li>• Tailwind CSS 4.x</li>
                <li>• Heroicons</li>
              </ul>
            </div>
            <div>
              <h4 className="text-lg font-semibold text-gray-900 dark:text-white mb-3">Development</h4>
              <ul className="space-y-2 text-gray-600 dark:text-gray-300">
                <li>• ESLint for linting</li>
                <li>• PostCSS for CSS processing</li>
                <li>• Turbopack for fast builds</li>
                <li>• Git for version control</li>
                <li>• npm for package management</li>
              </ul>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}
