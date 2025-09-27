import Link from "next/link";
import { ArrowLeftIcon, DocumentTextIcon, CodeBracketIcon, RocketLaunchIcon } from "@heroicons/react/24/outline";

export default function Docs() {
  const docSections = [
    {
      title: "Getting Started",
      description: "Learn the basics of Next.js and how to set up your development environment.",
      icon: <RocketLaunchIcon className="h-6 w-6" />,
      topics: ["Installation", "Project Structure", "Development Server", "First Page"]
    },
    {
      title: "Pages & Routing",
      description: "Understand how Next.js handles routing and page creation.",
      icon: <DocumentTextIcon className="h-6 w-6" />,
      topics: ["File-based Routing", "Dynamic Routes", "API Routes", "Middleware"]
    },
    {
      title: "Styling & UI",
      description: "Learn how to style your application with Tailwind CSS and create components.",
      icon: <CodeBracketIcon className="h-6 w-6" />,
      topics: ["Tailwind CSS", "Component Library", "Dark Mode", "Responsive Design"]
    }
  ];

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
              <Link href="/about" className="text-gray-600 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white transition-colors">
                About
              </Link>
              <Link href="/contact" className="text-gray-600 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white transition-colors">
                Contact
              </Link>
            </div>
          </div>
        </div>
      </nav>

      {/* Documentation Content */}
      <main className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-6">
            Documentation
          </h1>
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
            Comprehensive guides and references to help you build amazing applications with Next.js.
          </p>
        </div>

        {/* Documentation Sections */}
        <div className="grid lg:grid-cols-3 gap-8 mb-16">
          {docSections.map((section, index) => (
            <div key={index} className="bg-white dark:bg-gray-800 p-6 rounded-xl shadow-lg hover:shadow-xl transition-shadow">
              <div className="flex items-center mb-4">
                <div className="w-12 h-12 bg-blue-100 dark:bg-blue-900 rounded-lg flex items-center justify-center mr-4">
                  {section.icon}
                </div>
                <h3 className="text-xl font-semibold text-gray-900 dark:text-white">
                  {section.title}
                </h3>
              </div>
              <p className="text-gray-600 dark:text-gray-300 mb-4">
                {section.description}
              </p>
              <ul className="space-y-2">
                {section.topics.map((topic, topicIndex) => (
                  <li key={topicIndex} className="text-sm text-gray-600 dark:text-gray-300">
                    • {topic}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Quick Start Guide */}
        <div className="bg-white dark:bg-gray-800 p-8 rounded-xl shadow-lg mb-8">
          <h2 className="text-2xl font-semibold text-gray-900 dark:text-white mb-6">Quick Start Guide</h2>
          <div className="space-y-6">
            <div>
              <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">1. Installation</h3>
              <div className="bg-gray-100 dark:bg-gray-700 p-4 rounded-lg">
                <code className="text-sm text-gray-800 dark:text-gray-200">
                  npx create-next-app@latest my-app --typescript --tailwind --eslint
                </code>
              </div>
            </div>
            <div>
              <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">2. Development Server</h3>
              <div className="bg-gray-100 dark:bg-gray-700 p-4 rounded-lg">
                <code className="text-sm text-gray-800 dark:text-gray-200">
                  npm run dev
                </code>
              </div>
            </div>
            <div>
              <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">3. Build for Production</h3>
              <div className="bg-gray-100 dark:bg-gray-700 p-4 rounded-lg">
                <code className="text-sm text-gray-800 dark:text-gray-200">
                  npm run build && npm start
                </code>
              </div>
            </div>
          </div>
        </div>

        {/* Resources */}
        <div className="grid md:grid-cols-2 gap-8">
          <div className="bg-white dark:bg-gray-800 p-6 rounded-xl shadow-lg">
            <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-4">External Resources</h3>
            <ul className="space-y-3">
              <li>
                <a href="https://nextjs.org/docs" className="text-blue-600 dark:text-blue-400 hover:underline">
                  Next.js Official Documentation
                </a>
              </li>
              <li>
                <a href="https://tailwindcss.com/docs" className="text-blue-600 dark:text-blue-400 hover:underline">
                  Tailwind CSS Documentation
                </a>
              </li>
              <li>
                <a href="https://www.typescriptlang.org/docs" className="text-blue-600 dark:text-blue-400 hover:underline">
                  TypeScript Handbook
                </a>
              </li>
              <li>
                <a href="https://react.dev" className="text-blue-600 dark:text-blue-400 hover:underline">
                  React Documentation
                </a>
              </li>
            </ul>
          </div>

          <div className="bg-white dark:bg-gray-800 p-6 rounded-xl shadow-lg">
            <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-4">Project Commands</h3>
            <div className="space-y-3">
              <div>
                <code className="text-sm text-gray-800 dark:text-gray-200 bg-gray-100 dark:bg-gray-700 px-2 py-1 rounded">
                  npm run dev
                </code>
                <span className="text-sm text-gray-600 dark:text-gray-300 ml-2">Start development server</span>
              </div>
              <div>
                <code className="text-sm text-gray-800 dark:text-gray-200 bg-gray-100 dark:bg-gray-700 px-2 py-1 rounded">
                  npm run build
                </code>
                <span className="text-sm text-gray-600 dark:text-gray-300 ml-2">Build for production</span>
              </div>
              <div>
                <code className="text-sm text-gray-800 dark:text-gray-200 bg-gray-100 dark:bg-gray-700 px-2 py-1 rounded">
                  npm run lint
                </code>
                <span className="text-sm text-gray-600 dark:text-gray-300 ml-2">Run ESLint</span>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}
