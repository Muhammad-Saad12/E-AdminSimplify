const mongoose = require("mongoose");
const session = require("express-session");
const passport = require("passport");
require("./auth");
require("dotenv").config();
const express = require("express");
const path = require('path');
const app = express();

app.use(
  session({
    secret: process.env.SESSION_SECRET,
  })
);
app.use(passport.initialize());
app.use(passport.session());

const cors = require("cors");

const port = process.env.PORT || 5000;
app.use(express.json());

const router=require('./routes/admin');
const policyRouter=require('./routes/policy');
const sellerRouter=require('./routes/seller');
const Customer = require("./routes/customer");
const Order=require('./routes/order');
const oauth=require('./routes/oauth');


app.use(cors());

mongoose.connect(process.env.MONGODB_URI, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

mongoose.connection.on("connected", () => {
  console.log("Connected to MongoDB Atlas");
});

mongoose.connection.on("error", (err) => {
  console.error(`Error while connecting to MongoDB Atlas: ${err.message}`);
});

mongoose.connection.on("disconnected", () => {
  console.log("Disconnected from MongoDB Atlas");
});

app.use(express.urlencoded({ extended: false }));


// All routes
app.use(router);
app.use(policyRouter);
app.use(sellerRouter);
app.use(Customer);
app.use(Order);
app.use(oauth);

app.listen(port, () => {
  console.log(`App listening on port ${port}`);
});
