import { initializeApp, getApps, FirebaseApp } from 'firebase/app';
import { getFirestore, Firestore } from 'firebase/firestore';
import { getAnalytics, Analytics } from 'firebase/analytics';

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: process.env.NEXT_PUBLIC_FIREBASE_API_KEY || "AIzaSyBQ2I0A5_UbrieeQdhPJgepLSe-rNQJO4s",
  authDomain: process.env.NEXT_PUBLIC_FIREBASE_AUTH_DOMAIN || "bnp-paribas-8a1ec.firebaseapp.com",
  projectId: process.env.NEXT_PUBLIC_FIREBASE_PROJECT_ID || "bnp-paribas-8a1ec",
  storageBucket: process.env.NEXT_PUBLIC_FIREBASE_STORAGE_BUCKET || "bnp-paribas-8a1ec.firebasestorage.app",
  messagingSenderId: process.env.NEXT_PUBLIC_FIREBASE_MESSAGING_SENDER_ID || "1104565385",
  appId: process.env.NEXT_PUBLIC_FIREBASE_APP_ID || "1:1104565385:web:5eebd1e82ef7d0461fa258",
  measurementId: process.env.NEXT_PUBLIC_FIREBASE_MEASUREMENT_ID || "G-N48M3H1VJ3"
};

// Validate Firebase configuration
const validateFirebaseConfig = (config: any) => {
  const requiredFields = ['apiKey', 'authDomain', 'projectId', 'appId'];
  const missingFields = requiredFields.filter(field => !config[field]);
  
  if (missingFields.length > 0) {
    console.error('Firebase configuration is missing required fields:', missingFields);
    return false;
  }
  
  return true;
};

// Initialize Firebase with error handling
let app: FirebaseApp | null = null;
let db: Firestore | null = null;
let analytics: Analytics | null = null;

try {
  // Check if Firebase is already initialized
  if (getApps().length === 0) {
    if (!validateFirebaseConfig(firebaseConfig)) {
      throw new Error('Invalid Firebase configuration');
    }
    
    // Add cache-busting to prevent installation errors
    const configWithCacheBust = {
      ...firebaseConfig,
      // Force fresh installation
      _cacheBust: Date.now()
    };
    
    app = initializeApp(configWithCacheBust);
    console.log('Firebase initialized successfully');
  } else {
    app = getApps()[0];
    console.log('Firebase already initialized');
  }
  
  // Initialize Firestore
  if (app) {
    db = getFirestore(app);
    console.log('Firestore initialized successfully');
  }
  
  // Initialize Analytics (only in browser environment)
  if (typeof window !== 'undefined' && app) {
    try {
      analytics = getAnalytics(app);
      console.log('Analytics initialized successfully');
    } catch (analyticsError) {
      console.warn('Analytics initialization failed:', analyticsError);
      analytics = null;
    }
  }
  
} catch (error) {
  console.error('Firebase initialization failed:', error);
  
  // Create mock objects for graceful degradation
  app = null;
  db = null;
  analytics = null;
}

// Debug: Log the configuration status
console.log('Firebase Status:', {
  app: app ? 'Initialized' : 'Failed',
  db: db ? 'Initialized' : 'Failed',
  analytics: analytics ? 'Initialized' : 'Failed',
  config: {
    apiKey: firebaseConfig.apiKey ? 'Set' : 'Missing',
    authDomain: firebaseConfig.authDomain ? 'Set' : 'Missing',
    projectId: firebaseConfig.projectId ? 'Set' : 'Missing',
    storageBucket: firebaseConfig.storageBucket ? 'Set' : 'Missing',
    messagingSenderId: firebaseConfig.messagingSenderId ? 'Set' : 'Missing',
    appId: firebaseConfig.appId ? 'Set' : 'Missing',
    measurementId: firebaseConfig.measurementId ? 'Set' : 'Missing'
  }
});

export { db, analytics };
export default app;
