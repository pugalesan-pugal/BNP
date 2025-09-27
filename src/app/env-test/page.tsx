'use client';

export default function EnvTestPage() {
  return (
    <div className="min-h-screen bg-gray-100 p-8">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-3xl font-bold mb-6">Environment Variables Test</h1>
        
        <div className="bg-white rounded-lg shadow p-6">
          <h2 className="text-xl font-semibold mb-4">Firebase Configuration</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="space-y-2">
              <div>
                <strong>API Key:</strong> 
                <span className="ml-2 text-sm text-gray-600">
                  {process.env.NEXT_PUBLIC_FIREBASE_API_KEY ? 'Set' : 'Missing'}
                </span>
              </div>
              
              <div>
                <strong>Auth Domain:</strong> 
                <span className="ml-2 text-sm text-gray-600">
                  {process.env.NEXT_PUBLIC_FIREBASE_AUTH_DOMAIN ? 'Set' : 'Missing'}
                </span>
              </div>
              
              <div>
                <strong>Project ID:</strong> 
                <span className="ml-2 text-sm text-gray-600">
                  {process.env.NEXT_PUBLIC_FIREBASE_PROJECT_ID ? 'Set' : 'Missing'}
                </span>
              </div>
              
              <div>
                <strong>Storage Bucket:</strong> 
                <span className="ml-2 text-sm text-gray-600">
                  {process.env.NEXT_PUBLIC_FIREBASE_STORAGE_BUCKET ? 'Set' : 'Missing'}
                </span>
              </div>
            </div>
            
            <div className="space-y-2">
              <div>
                <strong>Messaging Sender ID:</strong> 
                <span className="ml-2 text-sm text-gray-600">
                  {process.env.NEXT_PUBLIC_FIREBASE_MESSAGING_SENDER_ID ? 'Set' : 'Missing'}
                </span>
              </div>
              
              <div>
                <strong>App ID:</strong> 
                <span className="ml-2 text-sm text-gray-600">
                  {process.env.NEXT_PUBLIC_FIREBASE_APP_ID ? 'Set' : 'Missing'}
                </span>
              </div>
              
              <div>
                <strong>Measurement ID:</strong> 
                <span className="ml-2 text-sm text-gray-600">
                  {process.env.NEXT_PUBLIC_FIREBASE_MEASUREMENT_ID ? 'Set' : 'Missing'}
                </span>
              </div>
            </div>
          </div>
          
          <div className="mt-6 p-4 bg-gray-50 rounded">
            <h3 className="font-semibold mb-2">Raw Values (for debugging):</h3>
            <pre className="text-xs text-gray-600 overflow-x-auto">
              {JSON.stringify({
                NEXT_PUBLIC_FIREBASE_API_KEY: process.env.NEXT_PUBLIC_FIREBASE_API_KEY,
                NEXT_PUBLIC_FIREBASE_AUTH_DOMAIN: process.env.NEXT_PUBLIC_FIREBASE_AUTH_DOMAIN,
                NEXT_PUBLIC_FIREBASE_PROJECT_ID: process.env.NEXT_PUBLIC_FIREBASE_PROJECT_ID,
                NEXT_PUBLIC_FIREBASE_STORAGE_BUCKET: process.env.NEXT_PUBLIC_FIREBASE_STORAGE_BUCKET,
                NEXT_PUBLIC_FIREBASE_MESSAGING_SENDER_ID: process.env.NEXT_PUBLIC_FIREBASE_MESSAGING_SENDER_ID,
                NEXT_PUBLIC_FIREBASE_APP_ID: process.env.NEXT_PUBLIC_FIREBASE_APP_ID,
                NEXT_PUBLIC_FIREBASE_MEASUREMENT_ID: process.env.NEXT_PUBLIC_FIREBASE_MEASUREMENT_ID,
              }, null, 2)}
            </pre>
          </div>
        </div>
      </div>
    </div>
  );
}
