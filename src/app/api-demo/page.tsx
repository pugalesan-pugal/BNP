'use client';

import { useState } from 'react';
import Button from '@/components/Button';
import Card from '@/components/Card';

export default function ApiDemo() {
  const [response, setResponse] = useState<any>(null);
  const [loading, setLoading] = useState(false);
  const [name, setName] = useState('');

  const fetchData = async () => {
    setLoading(true);
    try {
      const res = await fetch(`/api/hello?name=${encodeURIComponent(name)}`);
      const data = await res.json();
      setResponse(data);
    } catch (error) {
      setResponse({ error: 'Failed to fetch data' });
    } finally {
      setLoading(false);
    }
  };

  const postData = async () => {
    setLoading(true);
    try {
      const res = await fetch('/api/hello', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ name }),
      });
      const data = await res.json();
      setResponse(data);
    } catch (error) {
      setResponse({ error: 'Failed to post data' });
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100 dark:from-gray-900 dark:to-gray-800">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-6">
            API Demo
          </h1>
          <p className="text-xl text-gray-600 dark:text-gray-300">
            Test the built-in API routes and see how Next.js handles full-stack development.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          <Card className="p-6">
            <h2 className="text-2xl font-semibold text-gray-900 dark:text-white mb-4">
              Test API Endpoints
            </h2>
            
            <div className="space-y-4 mb-6">
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                  Name
                </label>
                <input
                  type="text"
                  id="name"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  className="w-full px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent dark:bg-gray-700 dark:text-white"
                  placeholder="Enter your name"
                />
              </div>
            </div>

            <div className="flex gap-4">
              <Button
                onClick={fetchData}
                disabled={loading}
                className="flex-1"
              >
                {loading ? 'Loading...' : 'GET Request'}
              </Button>
              <Button
                onClick={postData}
                disabled={loading}
                variant="secondary"
                className="flex-1"
              >
                {loading ? 'Loading...' : 'POST Request'}
              </Button>
            </div>
          </Card>

          <Card className="p-6">
            <h2 className="text-2xl font-semibold text-gray-900 dark:text-white mb-4">
              API Response
            </h2>
            
            {response ? (
              <div className="bg-gray-100 dark:bg-gray-700 p-4 rounded-lg">
                <pre className="text-sm text-gray-800 dark:text-gray-200 overflow-x-auto">
                  {JSON.stringify(response, null, 2)}
                </pre>
              </div>
            ) : (
              <p className="text-gray-500 dark:text-gray-400">
                Click a button above to test the API endpoints.
              </p>
            )}
          </Card>
        </div>

        <div className="mt-12">
          <Card className="p-6">
            <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-4">
              Available API Endpoints
            </h3>
            <div className="space-y-4">
              <div>
                <code className="bg-gray-100 dark:bg-gray-700 px-2 py-1 rounded text-sm">
                  GET /api/hello?name=YourName
                </code>
                <p className="text-sm text-gray-600 dark:text-gray-300 mt-1">
                  Returns a greeting message with the provided name.
                </p>
              </div>
              <div>
                <code className="bg-gray-100 dark:bg-gray-700 px-2 py-1 rounded text-sm">
                  POST /api/hello
                </code>
                <p className="text-sm text-gray-600 dark:text-gray-300 mt-1">
                  Accepts JSON data with a name field and returns a greeting.
                </p>
              </div>
            </div>
          </Card>
        </div>
      </div>
    </div>
  );
}
