const mongoose = require('mongoose');
const Seller = require("../model/seller");


// get all sellers
const getAllSellers = async (req, res) => {
  try {
    const sellers = await Seller.find();
    res.status(200).json(sellers);
  } catch (error) {
    res.status(500).json({ error: "Internal Server Error" });
  }
};

// search by email
const getSellerById = async (req, res) => {
  try {
    const keyword = req.params.keyword;
    const seller = await Seller.find({ email: keyword });
    if (seller) {
      res.status(200).json(seller);
    } else {
      res.status(404).json({ error: "Seller not found" });
    }
  } catch (error) {
    res.status(500).json({ error: "Internal Server Error" });
  }
};

// filter by name
const filterSellersByName = async (req, res) => {
    try {
      const { name } = req.query;
      const filteredSellers = await Seller.find({
        name: { $regex: new RegExp(name, "i") },
      }).sort({ name: 'asc' }); // Sort the results in ascending order based on the name field
      res.status(200).json(filteredSellers);
    } catch (error) {
      res.status(500).json({ error: "Internal Server Error" });
    }
  };
  
  

// add a seller


const createSeller = async (req, res) => {
  try {
    const { name, email, password, sellerId, contact, city, province, address,flagCount } = req.body;

    if (!name || !email || !password || !sellerId || !contact || !city || !province || !address  ) {
        return res.status(401).json({ message: 'Please fill all the fields' });
      }

      const existingSeller = await Seller.findOne({ sellerId });
      const esistingemail = await Seller.findOne({ email });

      if (existingSeller || esistingemail) {
        return res.status(402).json({ message: 'Seller already exists' });
      }  

    const seller = new Seller({
      name,
      email,
      password,
      sellerId,
      contact,
      city,
      province,
      address,
      flagCount,
    });
    const savedSeller = await seller.save();
    res.status(201).json(savedSeller);
  } catch (error) {
    res.status(500).json({ error: "Internal Server Error" });
  }
};

// delete a seller based on id

const deleteSeller = async (req, res) => {
    try {
      const deletedSeller = await Seller.findByIdAndDelete(req.params.sellerId);
      if (deletedSeller) {
        res.status(200).json({ message: "Seller deleted successfully" });
      } else {
        res.status(404).json({ error: "Seller not found" });
      }
    } catch (error) {
      res.status(500).json({ error: "Internal Server Error" });
    }
  };


// del a seller based on email

const deleteUserByEmail = async (req, res) => {
    try {
      const email = req.params.email;
      const deletedUser = await Seller.findOneAndDelete({ email });
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
      const seller = await Seller.findOneAndUpdate(
        { email },
        { $inc: { flagCount: 1 } },
        { new: true }
      );
      res.status(200).json(seller);
    } catch (error) {
      res.status(500).json({ error: "Internal Server Error" });
    }
  };
  

  
module.exports = {getAllSellers,getSellerById,filterSellersByName,createSeller,deleteSeller,deleteUserByEmail,incrementFlagCountByEmail};
