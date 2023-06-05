import React from 'react'
import { Navbar, Sidebar } from '../../components'
import {Box, Button, TextField, createTheme, ThemeProvider, Typography, Grid, Toolbar} from "@mui/material";
import { styled } from '@mui/material/styles';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell, { tableCellClasses } from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import axios from "axios";
// const axios = require("axios");
// const axios = require('axios');
import { useState, useEffect  } from 'react'
import { useNavigate} from 'react-router-dom';
import { Link } from 'react-router-dom';


const StyledTableCell = styled(TableCell)(({ theme }) => ({
    [`&.${tableCellClasses.head}`]: {
      backgroundColor: '#2E3B55',
      color: theme.palette.common.white,
    },
    [`&.${tableCellClasses.body}`]: {
      fontSize: 14,
    },
  }));
  
  const StyledTableRow = styled(TableRow)(({ theme }) => ({
    '&:nth-of-type(odd)': {
      backgroundColor: '#DFF6FF',
    },
    // hide last border
    '&:last-child td, &:last-child th': {
      border: 0,
    },
  }));
  

const Customer = () => {
    
  const [customers, setcustomers] = useState([]);
  const navigate = useNavigate();

  const handleSubmitEdit = (e) => {
    navigate('/CustomerEdit')
  };

  const handleSubmitDelete = (name) => {
    axios.delete('http://localhost:5000/Customers/delete', 
        { data: { answer: name } }
    )
    navigate('../Sellers')
  };

  useEffect(() => {
    (async () =>
    {
      axios.get("http://localhost:5000/Customers/list",  { 
      crossdomain: true 
    }).then(response => {
        setcustomers(response.data)
      // setText(response.data.text);
      // setAuthor(response.data.author);
    });
      
   })();
  },[]);


  return (
    <div data-testid = "customer">
        <Box sx={{ display: 'flex' }}>
            <Navbar></Navbar>
            <Sidebar></Sidebar>

            <Box component="main" sx={{ flexGrow: 0.8, margin:5, p: 3 }}>
                <Toolbar/>
                <Typography marginTop={6} marginLeft={4} marginBottom={3} fontWeight={700} variant="h2" color={"#2E3B55"}>
                <i>KernelKart</i> Customers
                </Typography>
                <Box component="content"  sx={{  margin:5, p: 3 }}>
                <TableContainer component={Paper} >
                    <Table sx={{ minWidth: 700 }} aria-label="customized table">
                        <TableHead>
                            <TableRow>
                            <StyledTableCell >First Name</StyledTableCell>
                            <StyledTableCell align="center">Last Name</StyledTableCell>
                            <StyledTableCell align="right">Age</StyledTableCell>
                            <StyledTableCell align="center">Actions</StyledTableCell>
                            </TableRow>
                        </TableHead>

                            <TableBody>
                                {customers.map((customer) => (
                                <StyledTableRow key={customer.name}>
                                    <StyledTableCell component="th" scope="row">{customer.Firstname}</StyledTableCell>
                                    <StyledTableCell align="center">{customer.Lastname}</StyledTableCell>
                                    <StyledTableCell align="right">{customer.Age}</StyledTableCell>
                                    {/* <StyledTableCell align="center">{customer.CompanyName}</StyledTableCell> */}
                                    
                                    <StyledTableCell align="center" marginLeft={"1rem"}>
                                    <Link to= '/CustomerEdit' state={ {fname :customer.Firstname , lname :customer.Lastname ,  
                                        age :customer.Age ,username :customer.username ,pass :customer.password , } }>
                                        {/* <td><Button color='link' size='sm' onClick={() => setData()}> Edit</Button></td> */}
                                        {/* <td><Button color='link' size='sm' > Edit</Button></td> */}
                                        <Button variant='text' style={{ color:'#2E3B55'}} >edit</Button>
                                    </Link>
                                    {/* <Button variant='text' style={{ color:'#2E3B55'}} >edit</Button> */}
                                    <Button variant='text' style={{ color:'red'} } onClick={() => handleSubmitDelete(customer.username)}>Delete</Button>
                                    </StyledTableCell>
                                </StyledTableRow>
                            ))}
                            </TableBody>
                        </Table>

                    </TableContainer>
                </Box>

            </Box>
        </Box>

    </div>
  )
}

export default Customer