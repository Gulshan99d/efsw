import mongoose from "mongoose";

const categorySchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
    trim: true,
  },
  subcategories: [
    {
      type: String,
      trim: true,
    },
  ],
}, {
  timestamps: true,
});

export default mongoose.models.Category || mongoose.model("Category", categorySchema);
