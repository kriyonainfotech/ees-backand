const mongoose = require('mongoose')
require('dotenv').config();

const connectDB = async () => {
    try {
        const conn = await mongoose.connect('mongodb+srv://rajivmsurati11:rajivmsurati11@cluster0.p9hso.mongodb.net');
         const uri = process.env.MONGO ||'mongodb+srv://rajivmsurati11:rajivmsurati11@cluster0.p9hso.mongodb.net' ;
          if (!uri) {
              throw new Error('MongoDB URI is undefined');
        }
        console.log(`MongoDB Connected: ${conn.connection.host}`)
    } catch (error) {
        console.log(error);
        return false;

    }
}
module.exports = connectDB;
