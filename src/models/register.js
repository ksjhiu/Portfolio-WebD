const mongoose = require("mongoose");
const visitorSchema = new mongoose.Schema({
    Name:{
        type:String,
        required:true,
    },
    Email:{
        type:String,
        required:true,
    },
    Subject:{
        type:String,
        required:true,
    },
    // Message:{
    //     type:String,
    //     required:true,
    // }

})
const Register = new mongoose.model("Register",visitorSchema);
module.exports= Register;