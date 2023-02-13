require("dotenv").config();
const mongoose = require("mongoose");
module.exports = async ()=> {
  try{
    mongoose.set("strictQuery", true);
    const conn = await mongoose.connect(process.env.MONGO_URI);
    console.log(`MongoDB Connected: ${conn.connect.host}`);

    return conn;

  }catch(error){
    console.log(error);
    process.exit(1);
  }
}