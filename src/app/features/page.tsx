import Link from "next/link";
import { ArrowLeftIcon, CheckIcon } from "@heroicons/react/24/outline";

export default function Features() {
  const features = [
    {
      title: "Server-Side Rendering (SSR)",
      description: "Pre-render pages on the server for better SEO and performance.",
      benefits: ["Better SEO", "Faster initial load", "Improved Core Web Vitals"]
    },
    {
      title: "Static Site Generation (SSG)",
      description: "Generate static HTML at build time for maximum performance.",
      benefits: ["Ultra-fast loading", "CDN friendly", "Zero server costs"]
    },
    {
      title: "API Routes",
      description: "Build full-stack applications with built-in API endpoints.",
      benefits: ["Full-stack capabilities", "Serverless functions", "Easy deployment"]
    },
    {
      title: "Image Optimization",
      description: "Automatic image optimization with lazy loading and modern formats.",
      benefits: ["Automatic WebP conversion", "Lazy loading", "Responsive images"]
    },
    {
      title: "TypeScript Support",
      description: "Built-in TypeScript support for type safety and better DX.",
      benefits: ["Type safety", "Better IntelliSense", "Fewer runtime errors"]
    },
    {
      title: "Tailwind CSS",
      description: "Utility-first CSS framework for rapid UI development.",
      benefits: ["Rapid prototyping", "Consistent design", "Small bundle size"]
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

      {/* Features Content */}
      <main className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-6">
            Features & Capabilities
          </h1>
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
            Discover the powerful features that make this Next.js application production-ready.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <div key={index} className="bg-white dark:bg-gray-800 p-6 rounded-xl shadow-lg hover:shadow-xl transition-shadow">
              <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-3">
                {feature.title}
              </h3>
              <p className="text-gray-600 dark:text-gray-300 mb-4">
                {feature.description}
              </p>
              <ul className="space-y-2">
                {feature.benefits.map((benefit, benefitIndex) => (
                  <li key={benefitIndex} className="flex items-center text-sm text-gray-600 dark:text-gray-300">
                    <CheckIcon className="h-4 w-4 text-green-500 mr-2 flex-shrink-0" />
                    {benefit}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Performance Metrics */}
        <div className="mt-16 bg-white dark:bg-gray-800 p-8 rounded-xl shadow-lg">
          <h2 className="text-2xl font-semibold text-gray-900 dark:text-white mb-6 text-center">
            Performance Metrics
          </h2>
          <div className="grid md:grid-cols-4 gap-6">
            <div className="text-center">
              <div className="text-3xl font-bold text-blue-600 dark:text-blue-400 mb-2">100</div>
              <div className="text-sm text-gray-600 dark:text-gray-300">Lighthouse Score</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-green-600 dark:text-green-400 mb-2">&lt;1s</div>
              <div className="text-sm text-gray-600 dark:text-gray-300">Load Time</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-purple-600 dark:text-purple-400 mb-2">0</div>
              <div className="text-sm text-gray-600 dark:text-gray-300">Bundle Size (KB)</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-orange-600 dark:text-orange-400 mb-2">A+</div>
              <div className="text-sm text-gray-600 dark:text-gray-300">SEO Grade</div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}
