const mongoose = require('mongoose');

const OrderSchema = new mongoose.Schema({
    productId: Number,
    quantity: Number,
    amount: Number,
    address:String,
    status: String,
    orderDate: Date,
});

const Order = mongoose.model('Order', OrderSchema);

module.exports = Order;
