import React, { useState } from 'react';
import { Navbar, Sidebar } from "../../components";
import { TextField, Button, Select, MenuItem, FormControl, InputLabel,Box, Typography } from '@mui/material';
import { useNavigate } from "react-router-dom";
import axios from 'axios';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';


const AddSeller = () => {
    const navigate = useNavigate();
    const [seller, setSeller] = useState({
        name: '',
        email: '',
        password: '',
        sellerId: '',
        contact: '',
        city: '',
        province: '',
        address: '',
      });
    
      // const handleChange = (e) => {
      //   const { name, value } = e.target;
      //   setSeller((prevSeller) => ({
      //     ...prevSeller,
      //     [name]: value,
      //   }));
      // };

      const handleChange = (e) => {
        const { name, value } = e.target;
        let updatedValue = value;
      
        switch (name) {
          case "name":
            // Remove any non-alphabetic characters from the name
            updatedValue = value.replace(/[^A-Za-z]/g, "");
            break;
          case "sellerId":
            // Remove any non-alphanumeric characters from the seller ID
            updatedValue = value.replace(/\D/g, "");
            break;
          case "contact":
            // Remove any non-digit characters from the contact
            updatedValue = value.replace(/\D/g, "");
            break;
          case "city":
            updatedValue = value.replace(/[^A-Za-z]/g, "");
            break;
          case "province":
            // Remove any non-word characters from the city and province
            updatedValue = value.replace(/[^A-Za-z]/g, "");
            break;
          // case "address":
          //   // Remove any non-digit characters from the address
          //   updatedValue = value.replace(/[^0-9]/g, "");
          //   break;
          default:
            break;
        }
      
        setSeller((prevSeller) => ({
          ...prevSeller,
          [name]: updatedValue,
        }));
      };
      
    
      const handleSubmit = async (e) => {
        e.preventDefault();
        try {
          await axios.post('/create-seller', seller);
          alert('Seller created successfully');
          navigate('../Sellers')
          // Handle success, such as displaying a success message or redirecting to another page
        } catch (error) {
          alert('Failed to create seller:', error);
          // Handle error condition (e.g., show error message to the user)
        }
      };
  
    return (
        <div data-testid="seller">
      <Box sx={{ display: "flex" }}>
        <Navbar></Navbar>
        <Sidebar></Sidebar>
        
        <form onSubmit={handleSubmit}>
       
      <Box sx={{ display: 'flex', flexDirection: 'column', gap: '1rem',marginLeft:"350px" }}>
      <Typography variant="h4" sx={{marginLeft:"100px",marginTop:"100px"}}>Create seller</Typography>
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
          type='email'
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
          label="Seller ID"
          name="sellerId"
          value={seller.sellerId}
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
        <Button variant="contained" type="submit" sx={{backgroundColor:"#8fbc8f"}}>
          Create Seller
        </Button>
      </Box>
    </form>
        </Box>
        </div>
    );
}

export default AddSeller