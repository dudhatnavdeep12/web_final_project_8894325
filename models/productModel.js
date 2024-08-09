const mongoose = require('mongoose');

const ProductSchema = new mongoose.Schema({
  productid:Number,
  name: String,
  price: Number,
  description: String,
  category: String,
  image: String,
  sellername: String,
  stock: Number
});

const Product = mongoose.model('Product', ProductSchema);


module.exports = Product;
