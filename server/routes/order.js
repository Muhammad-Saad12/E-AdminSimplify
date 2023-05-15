const express = require('express');
const router = express.Router();
const order=require('../controller/order');
const login=require('../controller/login');


router.get('/get-all-orders' ,order.getOrders);


router.post('/create-order', order.createOrders);


router.get('/calculate-fulfilled-orders', order.calculateFulfilledorders);

module.exports = router;