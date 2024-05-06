import mongoose from "mongoose";

mongoose.connect(process.env.MONGODB_URI!).catch((error) => {
  console.log("Failed to connect to MongoDB:", error);
});

const timeout = 10000;

const clothingSchema = new mongoose.Schema(
  {
    index: Number,
    link_1: String,
    link_2: String,
    link_3: String,
    embedding: [Number],
  },
  {
    bufferTimeoutMS: timeout,
    maxTimeMS: timeout,
  }
);

const filterSchema = new mongoose.Schema(
  {
    index: Number,
    color: String,
    person: String,
    season: String,
    type: String,
    pattern: String,
    embedding: [Number],
  },
  {
    bufferTimeoutMS: timeout,
    maxTimeMS: timeout,
  }
);

export const Clothing =
  mongoose.models.Clothing ||
  mongoose.model("Clothing", clothingSchema, "clothings");

export const Filter =
  mongoose.models.Filter || mongoose.model("Filter", filterSchema, "filters");
