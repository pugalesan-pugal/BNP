import { collection, query, where, getDocs, addDoc } from 'firebase/firestore';
import { db } from '@/lib/firebase';

// Default admin user credentials
const DEFAULT_ADMIN = {
  email: 'admin@bnp-paribas.com',
  password: 'Admin123!',
  role: 'admin',
  displayName: 'BNP Paribas Admin',
  isActive: true,
  createdAt: new Date().toISOString(),
  updatedAt: new Date().toISOString()
};

export const initializeDefaultUser = async () => {
  try {
    console.log('Checking for default admin user...');
    
    // Check if Firebase is available
    if (!db) {
      console.warn('Firebase is not available. Using fallback credentials.');
      return {
        success: true,
        message: 'Firebase not available, using fallback credentials',
        credentials: {
          email: DEFAULT_ADMIN.email,
          password: DEFAULT_ADMIN.password
        }
      };
    }
    
    // Check if default admin user already exists
    const loginCollection = collection(db, 'login');
    const q = query(loginCollection, where('email', '==', DEFAULT_ADMIN.email));
    const querySnapshot = await getDocs(q);
    
    if (querySnapshot.empty) {
      console.log('Default admin user not found. Creating...');
      
      // Add default admin user to login collection
      const docRef = await addDoc(loginCollection, DEFAULT_ADMIN);
      console.log('Default admin user created successfully:', docRef.id);
      
      return {
        success: true,
        message: 'Default admin user created',
        credentials: {
          email: DEFAULT_ADMIN.email,
          password: DEFAULT_ADMIN.password
        }
      };
    } else {
      console.log('Default admin user already exists');
      return {
        success: true,
        message: 'Default admin user already exists',
        credentials: {
          email: DEFAULT_ADMIN.email,
          password: DEFAULT_ADMIN.password
        }
      };
    }
  } catch (error) {
    console.error('Error initializing default user:', error);
    return {
      success: false,
      message: `Error: ${error}`,
      credentials: {
        email: DEFAULT_ADMIN.email,
        password: DEFAULT_ADMIN.password
      }
    };
  }
};
