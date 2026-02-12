import User from '@/models/User';
import { hashPassword, verifyPassword, signJWT } from '@/lib/auth';
import connectDB from '@/lib/db';

export async function registerUser(data: any) {
  await connectDB();
  const { name, email, password } = data;

  if (!name || !email || !password) {
    throw new Error('Missing required fields');
  }

  const existingUser = await User.findOne({ email });
  if (existingUser) {
    throw new Error('User already exists');
  }

  const hashedPassword = await hashPassword(password);
  const user = await User.create({
    name,
    email,
    password: hashedPassword,
  });

  const token = await signJWT({ userId: user._id, email: user.email, role: user.role });

  return { user: { id: user._id, name: user.name, email: user.email }, token };
}

export async function loginUser(data: any) {
  await connectDB();
  const { email, password } = data;

  if (!email || !password) {
    throw new Error('Missing required fields');
  }

  const user = await User.findOne({ email }).select('+password');
  if (!user) {
    throw new Error('Invalid credentials');
  }

  const isValid = await verifyPassword(password, user.password);
  if (!isValid) {
    throw new Error('Invalid credentials');
  }

  const token = await signJWT({ userId: user._id, email: user.email, role: user.role });

  return { user: { id: user._id, name: user.name, email: user.email }, token };
}
