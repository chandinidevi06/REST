var express = require("express");
var app = express();
var cors = require("cors");
require("dotenv").config();
var connectToDatabase = require("./database/db");

var productRoutes = require("./Routes/productRoutes"); 
var BookRoute=require("./Routes/bookRoutes")

connectToDatabase();

app.use(cors());
app.use(express.json());
app.use("/api/products", productRoutes);
app.use("/api/books",BookRoute)


var PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
  console.log(" the Server running");
});
