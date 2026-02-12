import Vendor from '@/models/Vendor';
import VendorMember from '@/models/VendorMember';
import connectDB from '@/lib/db';

export async function createVendor(data: { name: string; slug: string; userId: string }) {
  await connectDB();
  const { name, slug, userId } = data;

  const existingVendor = await Vendor.findOne({ slug });
  if (existingVendor) {
    throw new Error('Vendor slug already exists');
  }

  const vendor = await Vendor.create({
    name,
    slug,
    ownerId: userId,
  });

  // Add creator as owner
  await VendorMember.create({
    userId,
    vendorId: vendor._id,
    role: 'owner',
  });

  return vendor;
}

export async function getUserVendors(userId: string) {
  await connectDB();
  const memberships = await VendorMember.find({ userId }).populate('vendorId');
  return memberships.map((m: any) => m.vendorId);
}
