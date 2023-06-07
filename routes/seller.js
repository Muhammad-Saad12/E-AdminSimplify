const express = require('express');
const router = express.Router();
const seller=require('../controller/seller');
const login=require('../controller/login');

// all sellers
router.get('/get-all-sellers' ,seller.getAllSellers);

// search by email
router.get('/get-seller-by-email/:keyword', seller.getSellerById);

// filter by name

router.get('/filter-sellers-by-name', seller.filterSellersByName);

// add a seller
router.post('/create-seller', seller.createSeller);

// delete a seller
router.delete('/delete-seller/:email', seller.deleteUserByEmail);

// give flag
router.put('/increment-flag-count/:email', seller.incrementFlagCountByEmail);



module.exports = router;