const mongoose = require('mongoose');
const Customer = require("../model/customer");


// get all sellers
const getAllCustomers = async (req, res) => {
  try {
    const customers = await Customer.find();
    res.status(200).json(customers);
  } catch (error) {
    res.status(500).json({ error: "Internal Server Error" });
  }
};

// search by email
const getCustomerById = async (req, res) => {
  try {
    const keyword = req.params.keyword;
    const customer = await Customer.find({ email: keyword });
    if (customer) {
      res.status(200).json(customer);
    } else {
      res.status(404).json({ error: "Seller not found" });
    }
  } catch (error) {
    res.status(500).json({ error: "Internal Server Error" });
  }
};

// filter by name
const filterCustomersByName = async (req, res) => {
    try {
      const { name } = req.query;
      const filteredCustomers = await Customer.find({
        name: { $regex: new RegExp(name, "i") },
      }).sort({ name: 'asc' }); // Sort the results in ascending order based on the name field
      res.status(200).json(filteredCustomers);
    } catch (error) {
      res.status(500).json({ error: "Internal Server Error" });
    }
  };
  
  

// add a customer


const createCustomer = async (req, res) => {
  try {
    const { name, email, password, customerId, contact, city, province, address,flagCount } = req.body;

    if (!name || !email || !password || !customerId || !contact || !city || !province || !address ) {
        return res.status(401).json({ message: 'Please fill all the fields' });
      }

      const existingCustomer = await Customer.findOne({ customerId });
      const esistingemail = await Customer.findOne({ email });

      if (existingCustomer || esistingemail) {
        return res.status(402).json({ message: 'Seller already exists' });
      }  

      const customer = new Customer({
      name,
      email,
      password,
      customerId,
      contact,
      city,
      province,
      address,
      flagCount,
    });
    const savedCustomer = await customer.save();
    res.status(201).json(savedCustomer);
  } catch (error) {
    res.status(500).json({ error: "Internal Server Error" });
  }
};

// delete a seller based on id

const deleteCustomer = async (req, res) => {
    try {
      const deletedCustomer = await Seller.findByIdAndDelete(req.params.customerId);
      if (deletedCustomer) {
        res.status(200).json({ message: "Customer deleted successfully" });
      } else {
        res.status(404).json({ error: "Customer not found" });
      }
    } catch (error) {
      res.status(500).json({ error: "Internal Server Error" });
    }
  };


// del a seller based on email

const deleteUserByEmail = async (req, res) => {
    try {
      const email = req.params.email;
      const deletedUser = await Customer.findOneAndDelete({ email });
      if (deletedUser) {
        res.status(200).json({ message: "User deleted successfully" });
      } else {
        res.status(404).json({ error: "User not found" });
      }
    } catch (error) {
      res.status(500).json({ error: "Internal Server Error" });
    }
  };

// give flag based on email

const incrementFlagCountByEmail = async (req, res) => {
    try {
      const { email } = req.params;
      const customer = await Customer.findOneAndUpdate(
        { email },
        { $inc: { flagCount: 1 } },
        { new: true }
      );
      res.status(200).json(customer);
    } catch (error) {
      res.status(500).json({ error: "Internal Server Error" });
    }
  };
  

  
module.exports = {getAllCustomers,getCustomerById,filterCustomersByName,createCustomer,deleteCustomer,deleteUserByEmail,incrementFlagCountByEmail};
