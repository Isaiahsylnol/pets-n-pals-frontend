// utils/dbConnect.js

import mongoose from "mongoose";

const MONGODB_URI = `mongodb+srv://${process.env.REACT_USERNAME}:${process.env.REACT_PASSWORD}@cluster0.dw4sa.gcp.mongodb.net/${process.env.REACT_DATABASE}?retryWrites=true&w=majority`; // Replace with your actual MongoDB URI

const dbConnect = async () => {
  if (mongoose.connection.readyState >= 1) {
    return;
  }

  try {
    await mongoose.connect(MONGODB_URI, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
      useFindAndModify: false,
      useCreateIndex: true,
    });
  } catch (error) {
    console.error("Error connecting to the database:", error);
    process.exit(1); // Exit the process if the connection fails
  }
};

export default dbConnect;
