import * as React from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import  { useEffect, useState } from 'react';
import axios from 'axios';
import { useNavigate } from "react-router-dom";
import { Navbar, Sidebar } from "../../components";
import Box from '@mui/material/Box';

export default function MediaCard() {

    const navigate = useNavigate();
    const [totalSum, setTotalSum] = useState(null);

    const handleButton = (e) => {
        navigate("../Orders");
    }

    useEffect(() => {
        const fetchFulfilledOrders = async () => {
          try {
            const response = await axios.get(
              'http://localhost:3001/calculate-fulfilled-orders'
            );
    
            if (response.status === 200) {
              setTotalSum(response.data);
            } else if (response.status === 300) {
              const locationHeader = response.headers['location'];
              // Handle the multiple choices here, such as displaying options to the user
              console.log('Multiple choices:', locationHeader);
            } else {
              console.error('Failed to fetch fulfilled orders:', response.statusText);
            }
          } catch (error) {
            console.error('Failed to fetch fulfilled orders:', error.message);
          }
        };
    
        fetchFulfilledOrders();
      }, []);


  return (

    <div>
      <Box
        sx={{
          display: "flex",
          flexDirection: "row",
          justifyContent: "flex-start",
          
        }}
      >
        <Navbar></Navbar>
        <Sidebar></Sidebar>
    <Card sx={{ maxWidth: 345 ,width: 320, marginLeft: "200px", marginTop: "200px",marginLeft:"350px"}}>
      {/* <CardMedia
        sx={{ height: 140 }}
        img={require("../../assets/order.jpg")}
        title="green iguana"
      /> */}
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          Fulfilled orders revenue
        </Typography>
        <Typography variant="body2" color="text.secondary">
          {totalSum}
        </Typography>
      </CardContent>
      <CardActions>
        <Button size="small" onClick={handleButton}>Details</Button>
        
      </CardActions>
    </Card>
    </Box>
    </div>
  );
}