import mongoose from "mongoose";
const {Schema}=mongoose;
const userSchema=new Schema({
    name:{
        type:String,
        required:true
    },
    location:{
        type:String,
        required:true
    },
     email:{
        type:String,
        required:true
    },
     password:{
        type:String,
        required:true
    },
    date:{
        type:Date,
        default:Date.now
    }
});
const user= mongoose.model('user',userSchema);
export {user}