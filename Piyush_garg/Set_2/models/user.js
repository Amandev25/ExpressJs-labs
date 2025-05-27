import express from 'express';
import mongoose from 'mongoose';

const userSchema = new mongoose.Schema({
    firstName : {
        type :String,
        required :true, // this field is Mandatory
    },
    lastName : {
        type :String,
        required :false // this field is not Mandatory and can be left empty
    },
    email : {
        type : String,
        required : true,
        unique : true
    },
    jobtitle : {
        trpe :String,

    },
    gender : {
        type :String,
    }
})
// Creating a Model
const User = mongoose.model("User" , userSchema);
export default User;