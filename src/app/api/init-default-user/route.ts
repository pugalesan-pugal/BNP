import { NextRequest, NextResponse } from 'next/server';
import { initializeDefaultUser } from '@/utils/initializeDefaultUser';

export async function POST(request: NextRequest) {
  try {
    console.log('Initializing default user...');
    
    const result = await initializeDefaultUser();
    
    if (result.success) {
      return NextResponse.json({
        success: true,
        message: result.message,
        credentials: result.credentials
      });
    } else {
      return NextResponse.json(
        { error: result.message },
        { status: 500 }
      );
    }
  } catch (error: any) {
    console.error('Error initializing default user:', error);
    return NextResponse.json(
      { error: error.message || 'Failed to initialize default user' },
      { status: 500 }
    );
  }
}

export async function GET() {
  return NextResponse.json({
    message: 'Use POST method to initialize default user',
    endpoint: '/api/init-default-user'
  });
}
