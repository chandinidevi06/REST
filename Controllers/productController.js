var products = require("../model/products");


var getAllProducts = async (req, res) => {
    try {
        var allProducts = await products.find();
        res.status(200).json(allProducts);
    } catch (error) {
        res.status(404).json({ message: "Server error", error });
    }
};


var getSingleProduct = async (req, res) => {
    try {
        var productId = req.params.id;
        var product = await products.findById(productId);
        if (product) {
            return res.status(404).json({ message: "Product not found" });
        }
        res.status(200).json(product);
    } catch (error) {
        res.status(404).json({ message: "Server error", error });
    }
};


var addNewProduct = async (req, res) => {
    try {
        var formData = req.body;
        var newProduct = await products.create(formData);
        res.status(201).json(newProduct);
    } catch (error) {
        res.status(404).json({ message: "Server error", error });
    }
};


var updateProduct = async (req, res) => {
    try {
        var productId = req.params.id;
        var updateData = req.body;
        var updatedProduct = await products.findByIdAndUpdate(productId, updateData, { new: true });
        if (!updatedProduct) {
            return res.status(404).json({ message: "Product not found for update" });
        }
        res.status(200).json(updatedProduct);
    } catch (error) {
        res.status(404).json({ message: "Server error", error });
    }
};


var deleteProduct = async (req, res) => {
    try {
        var productId = req.params.id;
        var deletedProduct = await products.findByIdAndDelete(productId);
        if (!deletedProduct) {
            return res.status(404).json({ message: "Product not found" });
        }
        res.status(200).json(deletedProduct);
    } catch (error) {
        res.status(404).json({ message: "Server error", error });
    }
};

module.exports = { getAllProducts, getSingleProduct, addNewProduct, updateProduct, deleteProduct};
