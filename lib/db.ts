import mongoose from "mongoose";

// We'll read this inside dbConnect so it has time to be loaded by dotenv
let MONGODB_URI = process.env.MONGO_URI;

/**
 * Global is used here to maintain a cached connection across hot reloads
 * in development. This prevents connections growing exponentially
 * during API Route usage.
 */
// @ts-ignore
let cached = global.mongoose;

if (!cached) {
  // @ts-ignore
  cached = global.mongoose = { conn: null, promise: null };
}

async function dbConnect() {
  console.log("Checking environment variables...");
  console.log("MONGO_URI is defined:", !!process.env.MONGO_URI);

  MONGODB_URI = process.env.MONGO_URI;

  if (!MONGODB_URI) {
    console.error("FATAL ERROR: MONGO_URI is missing from process.env!");
    throw new Error(
      "Please define the MONGO_URI environment variable inside .env.local",
    );
  }

  if (cached.conn) {
    return cached.conn;
  }

  if (!cached.promise) {
    const opts = {
      bufferCommands: false,
    };

    cached.promise = mongoose
      .connect(MONGODB_URI as string, opts)
      .then((mongoose) => {
        return mongoose;
      });
  }

  try {
    cached.conn = await cached.promise;
  } catch (e) {
    cached.promise = null;
    throw e;
  }

  return cached.conn;
}

export default dbConnect;
