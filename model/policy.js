const mongoose = require("mongoose");

const policy = new mongoose.Schema({
  policyTitle: {
    type: String,
    required: true,
  },
  
  policyType: {
    type: String,
    enum: ["seller", "customer"],
    required: true,
  },
  policyDescription: {
    type: String,
    required: true,
  },
});

module.exports = mongoose.model("Policy", policy);

