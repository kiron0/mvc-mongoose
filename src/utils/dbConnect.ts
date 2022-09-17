import colors from "colors";
import mongoose from "mongoose";
const MONGODB_USER = process.env.MONGO_USER || "";
const MONGODB_PASSWORD = process.env.MONGO_PASS || "";
const dbConnect = async (): Promise<void> => {
  try {
    await mongoose.connect(`mongodb+srv://${MONGODB_USER}:${MONGODB_PASSWORD}@kiron.ripcl.mongodb.net/?retryWrites=true&w=majority`);
    console.log(colors.cyan.italic(`Database connection is successful 🛢`));
  } catch (error) {
    console.log(colors.red.italic(`Database connection failed 🛢`));
  }
};
export default dbConnect;
