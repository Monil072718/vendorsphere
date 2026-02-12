import { SignJWT, jwtVerify } from 'jose';
import { ENV } from './env';

const SECRET_KEY = new TextEncoder().encode(ENV.JWT_SECRET);

export async function signJWT(payload: { userId: string; email: string; role: string }, expiresIn: string = '1d') {
  return await new SignJWT(payload)
    .setProtectedHeader({ alg: 'HS256' })
    .setIssuedAt()
    .setExpirationTime(expiresIn)
    .sign(SECRET_KEY);
}

export async function verifyJWT(token: string) {
  try {
    const { payload } = await jwtVerify(token, SECRET_KEY);
    return payload;
  } catch (error) {
    return null;
  }
}
