import mongoose from "mongoose";

export default function connect_bd(){
    return mongoose.connect(process.env.DB_URL)
}