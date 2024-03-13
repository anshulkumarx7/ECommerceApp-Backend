const mongoose=require('mongoose');

const ProductSchema=new mongoose.Schema({
    title:{
        type:String,
        required:true,
        unique:true
    },
    desc:{
        type:String,
        required:true,
    },
    img:{
        type:String,
        required:true
    },
    categories:{
        type:Array
    },
    color:{
        type:String,
    },
    size:{
        type:String,
    },
    price:{
        type:String,
    }
},{timestamps:true});

module.exports=mongoose.model('Products',ProductSchema);