import mongoose from "mongoose";
// require('dotenv').config({ path: './config.env' });

export const connectDB = async () => {
  try {
    const { connection } = await mongoose.connect(process.env.MONGO_URI, {
      dbName: "eCommerce",
    });
    console.log(`Server connected to database ${connection.host}`);
  } catch (error) {
    console.log(`Some error has occurred ${error}`);
    process.exit(1);
  }
};
