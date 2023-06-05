import * as React from "react";
import AspectRatio from "@mui/joy/AspectRatio";
import Button from "@mui/joy/Button";
import Card from "@mui/joy/Card";
import CardContent from "@mui/joy/CardContent";
import IconButton from "@mui/joy/IconButton";
import Typography from "@mui/joy/Typography";
import BookmarkAdd from "@mui/icons-material/BookmarkAddOutlined";
import { Navbar, Sidebar } from "../../components";
import { Box } from "@mui/material";
import  { useEffect, useState } from 'react';
import axios from 'axios';
import { useNavigate } from "react-router-dom";


const Analytics = () => {
    const navigate = useNavigate();
    const [totalSum, setTotalSum] = useState(null);
    // useEffect(() => {
    //     const fetchFulfilledOrders = async () => {
    //       try {
    //         const response = await axios.get('http://localhost:3001/calculate-fulfilled-orders');
    //         setTotalSum(response.data);
    //         console.log(response.data);
    //       } catch (error) {
    //         console.error('Failed to fetch fulfilled orders:', error);
    //       }
    //     };
    
    //     fetchFulfilledOrders();
    //   }, []);

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
        <Card
          variant="outlined"
          sx={{ width: 320, marginLeft: "200px", marginTop: "100px" }}
        >
          <div>
            {/* <Typography level="h2" fontSize="md" sx={{ mb: 0.5 }}>
              Sum of all fulfilled orders 
            </Typography> */}
            {/* <Typography level="body2">April 24 to May 02, 2021</Typography> */}
            {/* <IconButton
          aria-label="bookmark Bahamas Islands"
          variant="plain"
          color="neutral"
          size="sm"
          sx={{ position: 'absolute', top: '0.5rem', right: '0.5rem' }}
        >
          <BookmarkAdd />
        </IconButton> */}
          </div>
          {/* <AspectRatio minHeight="120px" maxHeight="200px">
            <img
              src={require("./analytics.png").default}
              //   srcSet="https://images.unsplash.com/photo-1527549993586-dff825b37782?auto=format&fit=crop&w=286&dpr=2 2x"
              loading="lazy"
              alt=""
              style={{width:"20px",height:"200px"}}
            />
          </AspectRatio> */}
          <CardContent orientation="horizontal">
            <div>
              <Typography level="body3">Total price:</Typography>
              <Typography fontSize="lg" fontWeight="lg">
            {totalSum}
              </Typography>
            </div>
            <Button
              variant="solid"
              size="sm"
              color="primary"
              onClick={handleButton}
              sx={{ ml: "auto", fontWeight: 600 }}
            >
              Explore
            </Button>
          </CardContent>
        </Card>
      </Box>
    </div>
  );
};

export default Analytics;
