import { createUserInLoginCollection } from './firebaseAdmin';

// Dummy user data for testing
export const dummyUsers = [
  {
    email: 'admin@bnp-paribas.com',
    password: 'Admin123!',
    role: 'admin' as const,
    displayName: 'System Administrator',
    isActive: true,
  },
  {
    email: 'manager@bnp-paribas.com',
    password: 'Manager123!',
    role: 'admin' as const,
    displayName: 'Branch Manager',
    isActive: true,
  },
  {
    email: 'analyst@bnp-paribas.com',
    password: 'Analyst123!',
    role: 'user' as const,
    displayName: 'Data Analyst',
    isActive: true,
  },
  {
    email: 'sales@bnp-paribas.com',
    password: 'Sales123!',
    role: 'user' as const,
    displayName: 'Sales Manager',
    isActive: true,
  },
  {
    email: 'support@bnp-paribas.com',
    password: 'Support123!',
    role: 'user' as const,
    displayName: 'Customer Support',
    isActive: true,
  },
  {
    email: 'finance@bnp-paribas.com',
    password: 'Finance123!',
    role: 'admin' as const,
    displayName: 'Finance Director',
    isActive: true,
  },
  {
    email: 'risk@bnp-paribas.com',
    password: 'Risk123!',
    role: 'admin' as const,
    displayName: 'Risk Manager',
    isActive: true,
  },
  {
    email: 'operations@bnp-paribas.com',
    password: 'Ops123!',
    role: 'user' as const,
    displayName: 'Operations Manager',
    isActive: true,
  },
  {
    email: 'marketing@bnp-paribas.com',
    password: 'Marketing123!',
    role: 'user' as const,
    displayName: 'Marketing Specialist',
    isActive: true,
  },
  {
    email: 'hr@bnp-paribas.com',
    password: 'HR123!',
    role: 'admin' as const,
    displayName: 'HR Manager',
    isActive: true,
  },
  {
    email: 'test@bnp-paribas.com',
    password: 'Test123!',
    role: 'user' as const,
    displayName: 'Test User',
    isActive: true,
  },
  {
    email: 'demo@bnp-paribas.com',
    password: 'Demo123!',
    role: 'user' as const,
    displayName: 'Demo Account',
    isActive: true,
  },
  {
    email: 'inactive@bnp-paribas.com',
    password: 'Inactive123!',
    role: 'user' as const,
    displayName: 'Inactive User',
    isActive: false,
  },
  {
    email: 'guest@bnp-paribas.com',
    password: 'Guest123!',
    role: 'user' as const,
    displayName: 'Guest User',
    isActive: true,
  },
  {
    email: 'supervisor@bnp-paribas.com',
    password: 'Supervisor123!',
    role: 'admin' as const,
    displayName: 'Team Supervisor',
    isActive: true,
  }
];

// Function to add all dummy users
export const addAllDummyUsers = async () => {
  const results = [];
  
  for (const user of dummyUsers) {
    try {
      await createUserInLoginCollection({
        ...user,
        createdAt: new Date(),
      });
      results.push({ email: user.email, status: 'success' });
      console.log(`✅ Added user: ${user.email}`);
    } catch (error) {
      results.push({ email: user.email, status: 'error', error: error.message });
      console.error(`❌ Failed to add user: ${user.email}`, error);
    }
  }
  
  return results;
};

// Function to add specific users by role
export const addUsersByRole = async (role: 'admin' | 'user') => {
  const filteredUsers = dummyUsers.filter(user => user.role === role);
  const results = [];
  
  for (const user of filteredUsers) {
    try {
      await createUserInLoginCollection({
        ...user,
        createdAt: new Date(),
      });
      results.push({ email: user.email, status: 'success' });
    } catch (error) {
      results.push({ email: user.email, status: 'error', error: error.message });
    }
  }
  
  return results;
};

// Function to add only active users
export const addActiveUsers = async () => {
  const activeUsers = dummyUsers.filter(user => user.isActive);
  const results = [];
  
  for (const user of activeUsers) {
    try {
      await createUserInLoginCollection({
        ...user,
        createdAt: new Date(),
      });
      results.push({ email: user.email, status: 'success' });
    } catch (error) {
      results.push({ email: user.email, status: 'error', error: error.message });
    }
  }
  
  return results;
};
