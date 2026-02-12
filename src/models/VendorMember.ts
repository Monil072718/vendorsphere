import mongoose from 'mongoose';

const VendorMemberSchema = new mongoose.Schema({
  userId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User',
    required: true,
  },
  vendorId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Vendor',
    required: true,
  },
  role: {
    type: String,
    enum: ['owner', 'admin', 'member', 'guest'],
    default: 'member',
  },
}, {
  timestamps: true,
});

// Ensure a user is only added once to a vendor
VendorMemberSchema.index({ userId: 1, vendorId: 1 }, { unique: true });

export default mongoose.models.VendorMember || mongoose.model('VendorMember', VendorMemberSchema);
