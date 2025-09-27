import { doc, setDoc } from 'firebase/firestore';
import { db } from '@/lib/firebase';

export const createAdminUser = async (email: string, password: string, displayName: string) => {
  try {
    // Generate a unique ID for the user
    const userId = `user_${Date.now()}_${Math.random().toString(36).substr(2, 9)}`;

    // Create user document in Firestore with admin role
    await setDoc(doc(db, 'users', userId), {
      email: email,
      displayName: displayName,
      role: 'admin',
      createdAt: new Date(),
      lastLogin: null,
    });

    // Also add to login collection for authentication
    await setDoc(doc(db, 'login', userId), {
      email: email,
      password: password,
      role: 'admin',
      displayName: displayName,
      isActive: true,
      createdAt: new Date().toISOString(),
      updatedAt: new Date().toISOString()
    });

    console.log('Admin user created successfully:', userId);
    return { uid: userId, email, displayName };
  } catch (error) {
    console.error('Error creating admin user:', error);
    throw error;
  }
};

// Example usage:
// createAdminUser('admin@bnp-paribas.com', 'admin123', 'Admin User')
//   .then(() => console.log('Admin user created'))
//   .catch((error) => console.error('Error:', error));
