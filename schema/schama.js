import mongoose, { Schema } from "mongoose";;

const schema = new Schema({
    username:{type:String},
    email:{type:String},
    phone:{type:Number},
    hobbi:{type:Array},
    profile:{type:String},
})

export default mongoose.model.Logins || mongoose.model("Login",schema);