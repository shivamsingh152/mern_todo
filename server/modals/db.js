import mongoose from "mongoose";
import dotenv from 'dotenv';

dotenv.config();

const connection = () =>{
    const MONGO_URI = process.env.MONGO_URI; 

    mongoose.connect(MONGO_URI, {useNewURlParser: true});

    mongoose.connection.on('connected', ()=>{
        console.log('database is connected');
    });
    mongoose.connection.on('disconnected', () =>{
        console.log('database is disconnected');
    });
    mongoose.connection.on('error', () =>{
        console.log('error while connecting the database', error.messsage);
    })

};
 
export default connection;