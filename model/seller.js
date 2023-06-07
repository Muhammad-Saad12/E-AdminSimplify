const mongoose = require('mongoose');

const sellerSchema = mongoose.Schema({
    name: {type: String, required: true},
    email: {type: String, required: true},
    password : {type: String, required: true},
    sellerId: {type: Number, required: true},
    contact : {type: Number},
    city : {type: String},
    province : {type: String},
    address : {type: String},
    flagCount : {type: Number, default: 0},
});


module.exports = mongoose.model('Seller', sellerSchema);
