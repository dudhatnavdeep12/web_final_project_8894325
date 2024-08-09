const Order = require('../models/orderModel');
async function createOrder(req, res) {
    const Order = new Order({
        productId: req.body.productId,
        quantity: req.body.quantity,
        amount: req.body.amount,
        address: req.body.address,
        status: req.body.status,
        orderDate: Date.now(),
    });
    try {
        await Order.save();
        res.send(Order);
    } catch (error) {
        console.log(error);
        res.sendStatus(500);
    }
}

async function getOrders(req, res) {
    try {
        let Orders = await Order.find();
        res.send(Orders);
    } catch (error) {
        console.log(error);
        res.sendStatus(500);
    }
}

async function getOrder(req, res) {
    try {
        let Orders = await Order.find({id: req.params.id});
        res.send(Orders);
    } catch (error) {
        console.log(error);
        res.sendStatus(500);
    }
}

async function deleteOrder(req, res) {
    try {
        await Order.deleteOne({id: req.params.id});
        res.sendStatus(400);
    } catch (error) {
        console.log(error);
        res.sendStatus(404);
    }
}

async function updateOrder(req, res) {
    try {
        await Order.updateOne({id: req.params.id}, req.body);
        res.sendStatus(400);
    } catch (error) {
        console.log(error);
        res.sendStatus(404);
    }
}

module.exports = {
    createOrder,
    getOrders,
    getOrder,
    deleteOrder,
    updateOrder
};