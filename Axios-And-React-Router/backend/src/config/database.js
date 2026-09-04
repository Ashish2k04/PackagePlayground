import "dotenv/config";
import mongoose from 'mongoose';

async function connectDB(next) {
    try{
       await mongoose.connect(process.env.MONGODB_URI);
       console.log("MongoDB is connected and ready to store data.")
    }
    catch(err){
        console.log(`Something went wrong in database: `, err.message);
        err.status = 500;
        next(err)
    }
}

export default connectDB;