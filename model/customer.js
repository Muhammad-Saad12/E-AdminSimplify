const mongoose = require("mongoose");

const customerSchema = mongoose.Schema({
  name: { type: String, required: true },
  email: { type: String, required: true },
  password: { type: String, required: true },
  customerId: { type: Number, required: true },
  contact: { type: Number },
  city: { type: String },
  province: { type: String },
  address: { type: String },
  flagCount: { type: Number, default: 0 },
});


module.exports = mongoose.model("Customer", customerSchema);

