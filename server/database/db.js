import mongoose from "mongoose";
import dotenv from "dotenv";

dotenv.config();

const Connection = async () => {
  const URL = process.env.MONGODB_URI;
  console.log(URL);
  try {
    await mongoose.connect(URL, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
    console.log("Database Connected Successfully");
  } catch (error) {
    console.log("Error: ", error.message);
  }
};

// Function to check connection status
const checkConnectionStatus = () => {
  const isConnected = mongoose.connection.readyState === 1;
  console.log(`MongoDB connected: ${isConnected}`);
};

export { Connection, checkConnectionStatus };
