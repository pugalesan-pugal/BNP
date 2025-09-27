import { NextRequest, NextResponse } from 'next/server';
import { db } from '@/lib/firebase';
import { collection, addDoc, query, where, getDocs } from 'firebase/firestore';

export async function POST(request: NextRequest) {
  try {
    console.log('API route called');
    const { email, password, role, displayName, isActive } = await request.json();
    console.log('Request data:', { email, password, role, displayName, isActive });

    if (!email || !password) {
      return NextResponse.json(
        { error: 'Email and password are required' },
        { status: 400 }
      );
    }

    console.log('Attempting to connect to Firestore...');
    
    // Check if user already exists
    const loginCollection = collection(db, 'login');
    console.log('Collection created:', loginCollection);
    
    const q = query(loginCollection, where('email', '==', email));
    console.log('Query created:', q);
    
    const querySnapshot = await getDocs(q);
    console.log('Query executed, docs found:', querySnapshot.size);

    if (!querySnapshot.empty) {
      return NextResponse.json(
        { error: 'User already exists' },
        { status: 409 }
      );
    }

    console.log('Adding new user to Firestore...');
    
    // Add user to login collection
    const docRef = await addDoc(loginCollection, {
      email,
      password,
      role: role || 'admin',
      displayName: displayName || email.split('@')[0],
      isActive: isActive !== undefined ? isActive : true,
      createdAt: new Date().toISOString(),
      updatedAt: new Date().toISOString()
    });

    console.log('User added successfully:', docRef.id);

    return NextResponse.json({
      success: true,
      message: 'User added successfully',
      userId: docRef.id,
      email
    });

  } catch (error: any) {
    console.error('Error adding user:', error);
    console.error('Error details:', {
      message: error.message,
      code: error.code,
      stack: error.stack
    });
    return NextResponse.json(
      { error: error.message || 'Failed to add user' },
      { status: 500 }
    );
  }
}