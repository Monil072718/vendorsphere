import mongoose from 'mongoose';

const VendorSchema = new mongoose.Schema({
  name: {
    type: String,
    required: [true, 'Please provide a vendor name.'],
    trim: true,
  },
  slug: {
    type: String,
    required: [true, 'Please provide a unique slug.'],
    unique: true,
    lowercase: true,
    trim: true,
  },
  ownerId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User',
    required: true,
  },
  logo: String,
  description: String,
}, {
  timestamps: true,
});

export default mongoose.models.Vendor || mongoose.model('Vendor', VendorSchema);
