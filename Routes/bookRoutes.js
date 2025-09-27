var express = require("express");
var router = express.Router();
var {getAllBooks,getSingleBook,addBook,updateBook,DeleteBook} = require("../Controllers/bookController")


router.get("/get", getAllBooks);
router.get("/get/:id", getSingleBook);
router.post("/add", addBook);
router.put("/update/:id", updateBook);
router.delete("/delete/:id",DeleteBook);

module.exports = router;


