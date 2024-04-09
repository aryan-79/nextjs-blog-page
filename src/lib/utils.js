import mongoose from "mongoose";

const connection = {};

async function connectDB() {
  if (connection.isConnected) {
    // Use existing database connection
    console.log("Using existing database connection");
    return;
  }

  try {
    const db = await mongoose.connect(process.env.MONGO);
    connection.isConnected = db.connections[0].readyState;
    console.log("New database connection established");
  } catch (error) {
    console.error("Error connecting to database:", error);
  }
}

export { connectDB };
