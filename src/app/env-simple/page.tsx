export default function EnvSimplePage() {
  return (
    <div className="p-8">
      <h1 className="text-2xl font-bold mb-4">Simple Environment Test</h1>
      
      <div className="space-y-2">
        <p><strong>NODE_ENV:</strong> {process.env.NODE_ENV}</p>
        <p><strong>NEXT_PUBLIC_FIREBASE_PROJECT_ID:</strong> {process.env.NEXT_PUBLIC_FIREBASE_PROJECT_ID || 'NOT SET'}</p>
        <p><strong>All env vars:</strong> {Object.keys(process.env).filter(key => key.startsWith('NEXT_PUBLIC_')).join(', ')}</p>
      </div>
    </div>
  );
}
