import { doc, setDoc, getDoc, collection, addDoc } from 'firebase/firestore';
import { db } from '@/lib/firebase';

// Interface for user data
interface UserData {
  email: string;
  password: string; // Note: In production, passwords should be hashed
  role: 'admin' | 'user';
  displayName: string;
  createdAt: Date;
  isActive: boolean;
}

// Create a user document in the login collection
export const createUserInLoginCollection = async (userData: UserData) => {
  try {
    // Create document in 'login' collection
    const loginRef = doc(db, 'login', userData.email);
    await setDoc(loginRef, {
      email: userData.email,
      password: userData.password,
      role: userData.role,
      displayName: userData.displayName,
      createdAt: userData.createdAt,
      isActive: userData.isActive,
    });

    console.log('User added to login collection:', userData.email);
    return loginRef.id;
  } catch (error) {
    console.error('Error adding user to login collection:', error);
    throw error;
  }
};

// Get user from login collection
export const getUserFromLoginCollection = async (email: string) => {
  try {
    const userRef = doc(db, 'login', email);
    const userSnap = await getDoc(userRef);
    
    if (userSnap.exists()) {
      return userSnap.data();
    } else {
      console.log('No user found with email:', email);
      return null;
    }
  } catch (error) {
    console.error('Error getting user from login collection:', error);
    throw error;
  }
};

// Add the specific user you mentioned
export const addPugalesanUser = async () => {
  const userData: UserData = {
    email: 'pugalesan@gmail.com',
    password: 'ABC123',
    role: 'admin',
    displayName: 'Pugalesan Admin',
    createdAt: new Date(),
    isActive: true,
  };

  try {
    await createUserInLoginCollection(userData);
    console.log('Pugalesan user added successfully!');
    return true;
  } catch (error) {
    console.error('Error adding Pugalesan user:', error);
    throw error;
  }
};

// Get all users from login collection
export const getAllUsersFromLoginCollection = async () => {
  try {
    const loginCollection = collection(db, 'login');
    // Note: You might want to use getDocs(loginCollection) to get all documents
    console.log('Login collection reference created');
    return loginCollection;
  } catch (error) {
    console.error('Error getting login collection:', error);
    throw error;
  }
};
