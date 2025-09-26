var express = require("express");
var router = express.Router();
var bookController = require("../Controllers/bookController")


router.get("/books", bookController.getAllBooks);
router.get("/books/:id", bookController.getSingleBook);
router.post("/books", bookController.addBook);
router.put("/books/:id", bookController.updateBook);
router.delete("/books/:id", bookController.DeleteBook);

module.exports = router;


