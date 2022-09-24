const mongoose = require("mongoose");
require("colors");

//connectDB function // this function is basically used to connect with the data base and the make a connection with the data base locaally
const connectDb = async () => {

    try {
    const conn = await mongoose.connect(process.env.MONGO_URI);
    console.log(`MongoDB Connected ${conn.connection.host}`.bgYellow);
    } 
    catch (error) {
        console.log(`Error : ${error.message}`.bgRed);
        process.exit(1);
    }

};


module.exports = connectDb;