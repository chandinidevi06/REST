var mongoose=require("mongoose")
var productSchema=new mongoose.Schema({
    title:String,
    price:Number,
    author:String
})

module.exports=mongoose.model("products",productSchema)