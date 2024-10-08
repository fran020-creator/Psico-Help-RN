const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
    name:{
        type:String,
        required:true,
        unique:true
    },
    idade:{
        type:String,
        required:true
    },
    email:{
        type:String,
        required:true,
        unique:true
    },
    password:{
        type:String,
        required:true
    },
    celular:{
        type:String,
        required:true
    },
    verified:{
        type:Boolean,
        default:true
    },
    verificationToken:String,


});

const User = mongoose.model("User",userSchema);

module.exports = User;