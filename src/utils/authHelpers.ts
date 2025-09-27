import { collection, query, where, getDocs } from 'firebase/firestore';
import { db } from '@/lib/firebase';

// Simple authentication without Firebase Auth
export const simpleLoginWithCredentials = async (email: string, password: string) => {
  try {
    console.log('Checking login collection for:', email);
    
    // Check if Firebase is available
    if (!db) {
      throw new Error('Firebase is not available. Please check your configuration.');
    }
    
    // Query the login collection for the user with matching email
    const loginCollection = collection(db, 'login');
    const q = query(loginCollection, where('email', '==', email));
    const querySnapshot = await getDocs(q);
    
    if (querySnapshot.empty) {
      throw new Error('User not found in login collection');
    }
    
    // Get the first matching user (should be only one)
    const userDoc = querySnapshot.docs[0];
    const userData = userDoc.data();
    
    console.log('Found user data:', { email: userData.email, role: userData.role, isActive: userData.isActive });
    
    // Check if user is active
    if (!userData.isActive) {
      throw new Error('User account is deactivated');
    }
    
    // Verify password
    if (userData.password !== password) {
      throw new Error('Invalid password');
    }
    
    console.log('Credentials verified successfully');
    
    // Return user data without Firebase Auth
    return {
      user: {
        uid: userDoc.id,
        email: userData.email,
        displayName: userData.displayName,
        role: userData.role,
        isActive: userData.isActive
      },
      userData: userData,
    };
    
  } catch (error: any) {
    console.error('Login error:', error);
    throw error;
  }
};
