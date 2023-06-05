const express = require('express');
const router = express.Router();
const order=require('../controller/order');
const login=require('../controller/login');

// get all orders
router.get('/get-all-orders' ,order.getOrders);


router.post('/create-order', order.createOrders);

// calculate only fulfilled order
router.get('/calculate-fulfilled-orders', order.calculateFulfilledorders);

module.exports = router;
