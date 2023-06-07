import React, { useState } from 'react';
import { Navbar, Sidebar } from "../../components";
import { TextField, Button, Select, MenuItem, FormControl, InputLabel,Box, Typography } from '@mui/material';
import { useNavigate } from "react-router-dom";
import axios from 'axios';


const AddPolicy = () => {
    const navigate = useNavigate();

    const [policyTitle, setPolicyTitle] = useState('');
    const [policyType, setPolicyType] = useState('');
    const [policyDescription, setPolicyDescription] = useState('');
  
    const handlePolicyTitleChange = (event) => {
      setPolicyTitle(event.target.value);
    };
  
    const handlePolicyTypeChange = (event) => {
      setPolicyType(event.target.value);
    };
  
    const handlePolicyDescriptionChange = (event) => {
      setPolicyDescription(event.target.value);
    };
  
    const handleSubmit = async (event) => {
      event.preventDefault();
  
      try {
        const response = await axios.post('http://localhost:3001/create-policy', {
          policyTitle,
          policyType,
          policyDescription,
        });
        alert("Policy Created Successfully");
         navigate("../Policy");
        console.log(response.data); // You can handle the response data as needed
      } catch (error) {
        console.error(error);
      }
    };
  
    return (
        <div>
      <Box
        sx={{
          display: 'flex',
          flexDirection: 'row',
          justifyContent: 'flex-start',
        
        }}
      >
      <Navbar></Navbar>
        <Sidebar></Sidebar>
        
        <Box
          component="form"
          onSubmit={handleSubmit}
          sx={{
            display: 'flex',
            flexDirection: 'column',
            gap: '1rem',
            width: '700px', // Adjust the width as needed
            marginTop: '10rem',
            
            marginLeft:"200px", 
          }}
        >
        <Typography variant="h4" sx={{marginLeft:"200px"}}>Create Policy</Typography>
          <TextField
            label="Policy Title"
            value={policyTitle}
            onChange={handlePolicyTitleChange}
            required
            variant="outlined"
          />
          <FormControl required variant="outlined" sx={{width:"200px"}}>
            <InputLabel>Policy Type</InputLabel>
            <Select value={policyType} onChange={handlePolicyTypeChange}>
              <MenuItem value="seller">Seller</MenuItem>
              <MenuItem value="customer">Customer</MenuItem>
            </Select>
          </FormControl>
          <TextField
            label="Policy Description"
            value={policyDescription}
            onChange={handlePolicyDescriptionChange}
            required
            variant="outlined"
            multiline
            rows={4}
          />
          <Button type="submit" variant="contained" color="primary" sx={{width:"200px",backgroundColor:"#2E3B55"}}>
            Create Policy
          </Button>
        </Box>
      </Box>
    </div>
    );
}

export default AddPolicy