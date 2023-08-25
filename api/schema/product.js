const mongoose = require("mongoose");


const Product = new mongoose.Schema({
    name:{
        type:String,
        required:true
    },
    brand:{
        type:String,
        required:true
    },    
    type:{
        type:String,
        required:true
    },
    price:{
        type:Number,
        required:true
    },
    rating:{
        type:Number,
        required:true
    },
    warranty_years:{
        type:Number,
        required:true
    },
    available:{
        type:Boolean,
        required:true
    },
    photo:{
        type:String,
        required:true
    },
    desc:{
        type:String,
        required:true
    },
    
})

module.exports = Product; 