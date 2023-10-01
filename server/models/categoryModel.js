import mongoose from "mongoose";

const categorySchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
    unique: true,
  },
  slug: {
    type: String,
    lowercase: true,
  },
});

// const CategorySchema = mongoose.model("Category", categorySchema);
// export default CategorySchema;

export default mongoose.model("Category", categorySchema);
