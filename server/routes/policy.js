const express = require('express');
const router = express.Router();
const policy=require('../controller/policy');
const login=require('../controller/login');


//get all policies
router.get('/get-all-policies' ,policy.getAllPolicies);
//search
router.get('/get-policy-by-title/:keyword', policy.getPolicyById);
// create a new policy
router.post('/create-policy', policy.createPolicy);
//update a policy
router.put('/update-policy/:policyId', policy.updatePolicy);
//delete a policy
router.delete('/delete-policy/:policyId', policy.deletePolicy);

module.exports = router;

