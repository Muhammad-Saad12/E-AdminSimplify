const express = require('express');
const router = express.Router();
const customer=require('../controller/customer');
const login=require('../controller/login');

// all customer 
router.get('/get-all-customers' ,customer.getAllCustomers);

// search by email
router.get('/get-customer-by-email/:keyword' , customer.getCustomerById);

// filter by name 

router.get('/filter-customers-by-name' , customer.filterCustomersByName);

// add a customer
router.post('/create-customer' , customer.createCustomer);

// delete a customer 
router.delete('/delete-customer/:email' , customer.deleteUserByEmail);

// give flag 
router.put('/increment-customer-flag-count/:email', customer.incrementFlagCountByEmail);



module.exports = router;