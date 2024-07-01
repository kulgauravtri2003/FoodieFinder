import mongoose from "mongoose";

 export const connectDB=async()=>{
   (await mongoose.connect('mongodb+srv://jaishreeram:GDBCD73BDH@cluster0.trvpxc6.mongodb.net/food_ord')).isObjectIdOrHexString(()=>console.log("DB Connected"));
}