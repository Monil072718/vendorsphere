import { NextResponse } from 'next/server';
import { loginUser } from '@/server/services/auth.service';

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const result = await loginUser(body);
    const response = NextResponse.json(result, { status: 200 });
    
    // Set cookie for session (simplified for now, ideally httpOnly)
    response.cookies.set('token', result.token, {
      httpOnly: true,
      secure: process.env.NODE_ENV === 'production',
      maxAge: 60 * 60 * 24, // 1 day
      path: '/',
    });

    return response;
  } catch (error: any) {
    return NextResponse.json({ error: error.message }, { status: 401 });
  }
}
