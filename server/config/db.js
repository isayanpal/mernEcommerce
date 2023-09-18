const mongoose = require("mongoose");
require('dotenv').config()

//connecting mongoDB
const connectDB = async () => {
  try {
    const connect = await mongoose.connect(process.env.db_URI, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
      autoIndex: true,
    });
    console.log(`MongoDB connected successfully : ${connect.connection.host}`);
  } catch (error) {
    console.log(`error while connecting to Mongo database: ${error.message}`);
  }
};
module.exports = connectDB;
