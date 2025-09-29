// Routes/productRoutes.js

var express = require("express");
var router = express.Router();

var {getAllProducts,getSingleProduct,addNewProduct, updateProduct, deleteProduct,} = require("../Controllers/productController"); 

// Define routes
router.get("/get", getAllProducts);
router.get("/get/:id", getSingleProduct);
router.post("/add", addNewProduct);
router.put("/update/:id", updateProduct);
router.delete("/delete/:id", deleteProduct);

module.exports = router;
