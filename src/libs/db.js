// MONGO DB
// USER: batmin
// PASSWORD: batmin123

import mongoose from "mongoose";

export async function connectDB() {
  await mongoose.connect("mongodb+srv://batmin:batmin123@umm.jzytpm3.mongodb.net/");
}
