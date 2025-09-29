var express = require("express");
var route = express.Router();
var {getAllBooks,getSingleBook,addBook,updateBook,DeleteBook} = require("../Controllers/bookController")


route.get("/get", getAllBooks);
route.get("/get/:id", getSingleBook);
route.post("/add", addBook);
route.put("/update/:id", updateBook);
route.delete("/delete/:id",DeleteBook);

module.exports=route


