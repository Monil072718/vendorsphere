import { hash, compare } from 'bcryptjs';
export { signJWT, verifyJWT } from './jwt';

export async function hashPassword(password: string): Promise<string> {
  return await hash(password, 12);
}

export async function verifyPassword(password: string, hash: string): Promise<boolean> {
  return await compare(password, hash);
}
