var mongoose=require("mongoose")

async function connectToDataBase(){
    try{
        await mongoose.connect(process.env.MONGO_URL)
        console.log("connect to the data base")
    }catch(error){
        console.log("error",error)
    }
}
module.exports=connectToDataBase
