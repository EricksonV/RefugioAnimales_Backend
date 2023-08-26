import "dotenv/config";

import {connect} from "mongoose";

const DB_URI = process.env.DB_URI;

export const DbInit = async () => {
    try{
        if(!DB_URI){
            throw new Error('environment variable problem');
        }
        await connect(DB_URI);
        console.log('DB ONLINE');
    }catch(error){
        console.log(error);
        throw new Error('Error starting database');
    }
}