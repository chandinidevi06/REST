var express = require("express");
var router = express.Router();
var bookController = require("../Controllers/bookController")


router.get("/get", bookController.getAllBooks);
router.get("/get/:id", bookController.getSingleBook);
router.post("/add", bookController.addBook);
router.put("/update/:id", bookController.updateBook);
router.delete("/delete/:id", bookController.DeleteBook);

module.exports = router;


