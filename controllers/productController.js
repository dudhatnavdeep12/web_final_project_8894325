const Product = require('../models/productModel');
async function createProduct(req, res) {
    const product = new Product({
       
        productid:req.body.productid,
        name: req.body.name,
        price: req.body.price,
        description: req.body.description,
        category: req.body.category,
        image: req.body.image,
        sellername: req.body.sellername,
        stock: req.body.stock
    });
    try {
        await product.save();
        res.send(product);
    } catch (error) {
        console.log(error);
        res.sendStatus(500);
    }
}

async function getproducts(req, res) {
    try {
        let products = await Product.find();
        res.send(products);
    } catch (error) {
        console.log(error);
        res.sendStatus(500);
    }
}

async function getproduct(req, res) {
    try {
        let products = await Product.find({productid: req.params.id});
        res.send(products);
    } catch (error) {
        console.log(error);
        res.sendStatus(500);
    }
}

async function deleteproduct(req, res) {
    try {
        await Product.deleteOne({productid: req.params.id});
        res.sendStatus(400);
    } catch (error) {
        console.log(error);
        res.sendStatus(404);
    }
}

async function updateproduct(req, res) {
    try {
        await Product.updateOne({productid: req.params.id}, req.body);
        res.sendStatus(400);
    } catch (error) {
        console.log(error);
        res.sendStatus(404);
    }
}

module.exports = {
    createProduct,
    getproducts,
    getproduct,
    deleteproduct,
    updateproduct
};