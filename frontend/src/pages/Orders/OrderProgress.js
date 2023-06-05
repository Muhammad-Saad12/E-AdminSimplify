import React from 'react'
import { Navbar, Sidebar,Progressbar } from '../../components'
import {Box, Button, TextField, createTheme, ThemeProvider, Typography, Grid, Toolbar} from "@mui/material";
import { Link, useLocation } from 'react-router-dom';
import axios from "axios";
import { useState, useEffect  } from 'react'
import { useNavigate} from 'react-router-dom';
import Divider from '@mui/material/Divider';

const OrderProgress = () => {

    const Location = useLocation();
    const data = Location.state;

    const [id, setid] = useState('');
    const [sellername, setsellname] = useState('');
    const [customername, setcustname] = useState('');
    const [DueDate, setdueDate] = useState('');
    const [Price, setprice] = useState('');
    const [Progress, setprogress] = useState('');

    useEffect(() =>{
        setid(data.orderid)
        setsellname(data.orderSeller)
        setcustname(data.orderCustomer)
        setdueDate(data.orderDate)
        setprice(data.orderPrice)
        setprogress(data.orderProg)
    },[])

    
    let progr = Progress;

  return (
    <div>
         <Box sx={{ display: 'flex' }}>
            <Navbar></Navbar>
            <Sidebar></Sidebar>

            
            <Box component="main" sx={{ flexGrow: 0.8, margin:5, p: 3 }}>
                <Toolbar/>
                <Typography marginTop={6} marginLeft={4} marginBottom={4} fontWeight={700} variant="h2" color={"#2E3B55"}>
                 ORDER# <h1>{id}</h1>
                </Typography>

                <Typography marginLeft={"2rem"}  marginTop={"5rem"} variant="h3" color={"#FFB562"}>Order Tracking</Typography>
                <Progressbar prog={progr} />

                <Typography marginLeft={"2rem"}  marginTop={"5rem"} variant="h3" color={"#FFB562"}>Details</Typography>

                  <Grid container spacing={2} columns={10}  marginTop='3rem' >
                        <Grid item xs={4}>
                            <Typography variant="h4" color="#2E3B55" marginLeft={"17rem"} marginTop={2}>Seller Username:</Typography>
                        </Grid>
                        <Grid item xs={5}>
                          <Typography variant="h5" color="#2E3B55"  marginTop={3}>{sellername}</Typography>
                        </Grid>
                        <Grid item xs={8}>
                            <Divider variant="inset" component="li" />
                        </Grid>
                        
                        <Grid item xs={4}>
                            <Typography variant="h4" color="#2E3B55" marginLeft={"17rem"} marginTop={2}>Customer Username:</Typography>
                        </Grid>
                        <Grid item xs={5}>
                          <Typography variant="h5" color="#2E3B55"  marginTop={3}>{customername}</Typography>
                        </Grid>
                        <Grid item xs={8}>
                            <Divider variant="inset" component="li" />
                        </Grid>

                        <Grid item xs={4}>
                            <Typography variant="h4" color="#2E3B55" marginLeft={"17rem"} marginTop={2}>Due Date:</Typography>
                        </Grid>
                        <Grid item xs={5}>
                          <Typography variant="h5" color="#2E3B55"  marginTop={3}>{DueDate}</Typography>
                        </Grid>

                        <Grid item xs={8}>
                            <Divider variant="inset" component="li" />
                        </Grid>
                        <Grid item xs={4}>
                            <Typography variant="h4" color="#2E3B55" marginLeft={"17rem"} marginTop={2}>Price:</Typography>
                        </Grid>
                        <Grid item xs={5} marginBottom={'9rem'}>
                          <Typography variant="h5" color="#2E3B55"  marginTop={3}>{Price}</Typography>
                        </Grid>
                  </Grid>
                
            </Box>
        </Box>
    </div>
  )
}

export default OrderProgress