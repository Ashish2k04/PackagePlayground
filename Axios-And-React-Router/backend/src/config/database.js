import "dotenv/config";
import mongoose from 'mongoose';

async function connectDB() {
    try{
       await mongoose.connect(process.env.MONGODB_URI);
       console.log("MongoDB is connected and ready to store data.")
    }
    catch(err){
        console.log(`Something went wrong in database: `, err.message);
    }
}

export default connectDB;