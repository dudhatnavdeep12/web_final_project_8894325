const mongoose = require('mongoose');
const express = require('express');
const app = express();
const cors = require('cors');

app.use(cors());

mongoose.connect("mongodb+srv://ndudhat4325:navdeep@cluster0.htblyub.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0");

const Product = require('./controllers/productController');
const Order = require('./controllers/orderController');
app.use(express.json());

app.post('/product', Product.createProduct);
app.get('/product', Product.getproducts);
app.get('/product/:id', Product.getproduct);
app.delete('/product/:id', Product.deleteproduct);
app.put('/product/:id', Product.updateproduct);

app.post('/order', Order.createOrder);
app.get('/order', Order.getOrders);
app.get('/order/:id', Order.getOrder);
app.delete('/order/:id', Order.deleteOrder);
app.put('/order/:id', Order.updateOrder);

app.listen(3000, () => {
    console.log('Server started');
});
