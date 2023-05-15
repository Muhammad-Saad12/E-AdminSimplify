const mongoose = require('mongoose');
const Policy = require("../model/policy");

//get all policies
const getAllPolicies = async (req, res) => {
  try {
    const policies = await Policy.find();
    res.status(200).json(policies);
  } catch (error) {
    res.status(500).json({ error: "Internal Server Error" });
  }
};


//get policy by title
const getPolicyById = async (req, res) => {
  try {
    const keyword = req.params.keyword;
    const policy = await Policy.find({ policyTitle: keyword });
    if (policy) {
      res.status(200).json(policy);
    } else {
      res.status(404).json({ error: "Policy not found" });
    }
  } catch (error) {
    res.status(500).json({ error: "Internal Server Error" });
  }
};


// create a new policy
const createPolicy = async (req, res) => {
    try {
      const { policyTitle, policyType, policyDescription } = req.body;

      if (!policyTitle || !policyType || !policyDescription ) {
        return res.status(401).json({ message: 'Please fill all the fields' });
      }

      const existingPolicy = await Policy.findOne({ policyTitle });

      if (existingPolicy) {
        return res.status(402).json({ message: 'Policy already exists' });
      }  

      const policy = new Policy({
        policyTitle,
        policyType,
        policyDescription,
      });

      const savedPolicy = await policy.save();
      res.status(201).json(savedPolicy);
    } catch (error) {
      res.status(500).json({ error: "Internal Server Error" });
    }
  };


//update a policy

const updatePolicy = async (req, res) => {
    try {
      const { policyTitle, policyType, policyDescription } = req.body;
      const updatedPolicy = await Policy.findByIdAndUpdate(
        req.params.policyId,
        { policyTitle, policyType, policyDescription },
        { new: true }
      );
      if (updatedPolicy) {
        res.status(200).json(updatedPolicy);
      } else {
        res.status(404).json({ error: "Policy not found" });
      }
    } catch (error) {
      res.status(500).json({ error: "Internal Server Error" });
    }
  };

//delete a policy

const deletePolicy = async (req, res) => {
    try {
      const deletedPolicy = await Policy.findByIdAndDelete(req.params.policyId);
      if (deletedPolicy) {
        res.status(200).json({ message: "Policy deleted successfully" });
      } else {
        res.status(404).json({ error: "Policy not found" });
      }
    } catch (error) {
      res.status(500).json({ error: "Internal Server Error" });
    }
  };

module.exports = {getAllPolicies,getPolicyById,createPolicy,updatePolicy,deletePolicy};