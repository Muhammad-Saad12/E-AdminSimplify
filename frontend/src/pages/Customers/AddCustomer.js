import React, { useState } from 'react';
import { Navbar, Sidebar } from "../../components";
import { TextField, Button, Select, MenuItem, FormControl, InputLabel,Box, Typography } from '@mui/material';
import { useNavigate } from "react-router-dom";
import axios from 'axios';



const AddSeller = () => {
    const navigate = useNavigate();
    const [seller, setSeller] = useState({
        name: '',
        email: '',
        password: '',
        customerId: '',
        contact: '',
        city: '',
        province: '',
        address: '',
      });
    
      const handleChange = (e) => {
        const { name, value } = e.target;
        setSeller((prevSeller) => ({
          ...prevSeller,
          [name]: value,
        }));
      };
    
      const handleSubmit = async (e) => {
        e.preventDefault();
        try {
          await axios.post('/create-customer', seller);
          alert('Customer created successfully');
          navigate('../Customers')
          // Handle success, such as displaying a success message or redirecting to another page
        } catch (error) {
          alert('Failed to create customer:', error);
          // Handle error condition (e.g., show error message to the user)
        }
      };
  
    return (
        <div data-testid="seller">
      <Box sx={{ display: "flex" }}>
        <Navbar></Navbar>
        <Sidebar></Sidebar>
        
        <form onSubmit={handleSubmit}>
        
      <Box sx={{ display: 'flex', flexDirection: 'column', gap: '1rem',marginLeft:"350px"  }}>
      <Typography variant="h4" sx={{marginLeft:"100px",marginTop:"100px"}}>Create customer</Typography>
        <TextField
          label="Name"
          name="name"
          value={seller.name}
          onChange={handleChange}
          required
          sx={{ width: '400px' }}
        />
        <TextField
          label="Email"
          name="email"
          value={seller.email}
          onChange={handleChange}
          required
        />
        <TextField
          label="Password"
          name="password"
          type="password"
          value={seller.password}
          onChange={handleChange}
          required
        />
        <TextField
          label="Customer ID"
          name="customerId"
          value={seller.customerId}
          onChange={handleChange}
          required
        />
        <TextField
          label="Contact"
          name="contact"
          value={seller.contact}
          onChange={handleChange}
        />
        <TextField
          label="City"
          name="city"
          value={seller.city}
          onChange={handleChange}
        />
        <TextField
          label="Province"
          name="province"
          value={seller.province}
          onChange={handleChange}
        />
        <TextField
          label="Address"
          name="address"
          value={seller.address}
          onChange={handleChange}
        />
        <Button variant="contained" type="submit" sx={{backgroundColor:"#2E3B55"}}>
          Create Customer
        </Button>
      </Box>
    </form>
        </Box>
        </div>
    );
}

export default AddSeller