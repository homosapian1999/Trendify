import mongoose from "mongoose";

const connectDB = async () => {
  try {
    const conn = await mongoose.connect(process.env.MONGO_URL);
    console.log(`Database connected successfully`);
  } catch (err) {
    console.log(`Error in connecting the database ${err}`);
  }
};
export default connectDB;
