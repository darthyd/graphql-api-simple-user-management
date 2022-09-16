import mongoose from "mongoose";

const URI = process.env.MONGODB_URI || "mongodb://localhost:27017/your-database";

mongoose.connect(URI);
