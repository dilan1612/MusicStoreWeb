import mongoose from "mongoose";

export const connectDB = async () => {
  try {
    await mongoose.connect('mongodb+srv://dilanbohorquez:foFhfd4GBlkSopD6@cluster0.pip0r.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0');
    console.log("MongoDB Connected");
  } catch (error) {
    console.error("Error: ", error.message);
    process.exit(1);
  }
};
//mongodb+srv://dilanbohorquez:<db_password>@trainninguptc.t4erk.mongodb.net/?retryWrites=true&w=majority&appName=TrainningUPTC
//foFhfd4GBlkSopD6
mongoose.connect('mongodb+srv://dilanbohorquez:foFhfd4GBlkSopD6@cluster0.pip0r.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0')