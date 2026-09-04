import 'dotenv/config';
import app from './src/app.js';
import connectDB from './src/config/database.js';

const PORT = process.env.PORT || 8000;

connectDB();

try{
    app.listen(PORT, ()=>{
    console.log(`Server is running on port ${PORT}`);
  })
}
catch(err){
    console.log("Something went wrong while running the server: ", err.message);
}
