import { NextRequest, NextResponse } from 'next/server';
import { db } from '@/lib/firebase';
import { collection, addDoc, query, where, getDocs } from 'firebase/firestore';

export async function POST(request: NextRequest) {
  try {
    const { users } = await request.json();

    if (!users || !Array.isArray(users)) {
      return NextResponse.json(
        { error: 'Users array is required' },
        { status: 400 }
      );
    }

    const results = [];
    const loginCollection = collection(db, 'login');

    for (const user of users) {
      try {
        // Check if user already exists
        const q = query(loginCollection, where('email', '==', user.email));
        const querySnapshot = await getDocs(q);

        if (!querySnapshot.empty) {
          results.push({
            email: user.email,
            success: false,
            error: 'User already exists'
          });
          continue;
        }

        // Add user to login collection
        const docRef = await addDoc(loginCollection, {
          email: user.email,
          password: user.password,
          role: user.role || 'admin',
          displayName: user.displayName || user.email.split('@')[0],
          isActive: user.isActive !== undefined ? user.isActive : true,
          createdAt: new Date().toISOString(),
          updatedAt: new Date().toISOString()
        });

        results.push({
          email: user.email,
          success: true,
          userId: docRef.id
        });

      } catch (error: any) {
        results.push({
          email: user.email,
          success: false,
          error: error.message
        });
      }
    }

    const successCount = results.filter(r => r.success).length;
    const failureCount = results.filter(r => !r.success).length;

    return NextResponse.json({
      success: true,
      message: `Bulk operation completed: ${successCount} successful, ${failureCount} failed`,
      results,
      summary: {
        total: users.length,
        successful: successCount,
        failed: failureCount
      }
    });

  } catch (error: any) {
    console.error('Error in bulk add:', error);
    return NextResponse.json(
      { error: error.message || 'Failed to add users' },
      { status: 500 }
    );
  }
}
