import mongoose from "mongoose";

mongoose.connect(process.env.CONNECTION_STRING!).catch((error) => {
  console.log("Failed to connect to MongoDB:", error);
});

const timeout = 10000;

const clothingSchema = new mongoose.Schema(
  {
    index: Number,
    link: String,
  },
  {
    bufferTimeoutMS: timeout,
    maxTimeMS: timeout,
  }
);

export const Clothing =
  mongoose.models.Clothing ||
  mongoose.model("Clothing", clothingSchema, "clothings");
