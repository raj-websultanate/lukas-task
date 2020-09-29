import mongoose from 'mongoose';
import { environment, liveDB, localDB } from '../config';

const connectDB = async () => {
    try {
        let dbAddress = (environment == 'development') ? localDB : liveDB;
        mongoose.connect(dbAddress, {
            useNewUrlParser: true,
            useUnifiedTopology: true,
            useFindAndModify: false,
        });
        mongoose.connection.on('connected', () => {
            console.log(`Mongo database connected`);
        });
        mongoose.connection.on('error', (error) => {
            console.log('Error connecting to Database', error)
        });
    } catch (error) {
        console.log('Error:', error.message);
        process.exit(1);
    }
}

module.exports = connectDB; 