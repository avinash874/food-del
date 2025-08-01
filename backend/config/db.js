import mongoose from "mongoose";

 export const connectDB = async () => {
    await mongoose.connect('mongodb+srv://itssavi:itssavi@project0.yr2mxm4.mongodb.net/food-del').then(()=>console.log("DB Connected"));   
}



