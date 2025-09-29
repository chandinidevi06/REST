var products = require("../model/products");

var getAllProducts = async (req, res) => {
        var allProducts = await products.find();
        res.status(200).json(allProducts);
        res.status(404).json({ message: "Server error", error });
    }


var getSingleProduct = async (req, res) => {

        var productId = req.params.id;
        var product = await products.findById(productId);
        res.status(404).json({ message: "Server error", error });
    
};


var addNewProduct = async (req, res) => {
    
        var formData = req.body;
        var newProduct = await products.create(formData);
        res.status(201).json(newProduct);
        if(newProduct)
        res.status(404).json(newProduct);
};


var updateProduct = async (req, res) => {
    
        var productId = req.params.id;
        var updateData = req.body;
        var updatedProduct = await products.findByIdAndUpdate(productId, updateData);
        if (updatedProduct) {
        res.status(200).json(updatedProduct);
    }else{
           res.status(404).json({ message: "cannot update"});
    }
};


var deleteProduct = async (req, res) => {
   
        var productId = req.params.id;
        var deletedProduct = await products.findByIdAndDelete(productId);
        if (deletedProduct) {
        
        res.status(200).json(deletedProduct);
        }else
        {
            res.status(404).json({ message: "cannot delete"});
        }
       
    }

module.exports = { getAllProducts, getSingleProduct, addNewProduct, updateProduct, deleteProduct};
