const mongoose = require("mongoose");

const orderSchema = mongoose.Schema({
  productID: { type: String, required: true },
  orderId: { type: String, required: true },
  customerId: { type: String, required: true },
  sellerId: { type: String, required: true },
  orderStatus: {
    type: String,
    enum: [
      "pending",
      "fulfilled",
      "cancelled by customer",
      "cancelled by seller",
    ],
    required: true,
  },
  shippingAddress: {
    type: String,

    required: true,
  },
  orderPrice: { type: Number, required: true },
});

module.exports = mongoose.model("Order", orderSchema);

