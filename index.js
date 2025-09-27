require ("dotenv").config()
var express=require("express")

var bookRoute=require("./Routes/bookRoutes")

var connectToDataBase = require("./database/db")

var app=express()

connectToDataBase()

app.use(express.json)
app.use("/api/books",bookRoute)
var PORT=process.env.PORT || 3000

app.listen(PORT,()=>{
    console.log("the server is running") 
})


