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
  

const Orders = () => {
     
  const [orders, setorders] = useState([]);
  const navigate = useNavigate();

//   const handleSubmitEdit = (e) => {
//     navigate('/CustomerEdit')
//   };

  const handleSubmitDelete = (name) => {
    axios.delete('http://localhost:5000/Orders/delete', 
        { data: { answer: name } }
    )
    navigate('../Orders')
  };

  
  useEffect(() => {
    (async () =>
    {
      axios.get("http://localhost:5000/Orders/list",  { 
      crossdomain: true 
    }).then(response => {
        setorders(response.data)
      // setText(response.data.text);
      // setAuthor(response.data.author);
    });
      
   })();
  },[]);


  return (
    <div data-testid = "orders">
        <Box sx={{ display: 'flex' }}>
            <Navbar></Navbar>
            <Sidebar></Sidebar>

            <Box component="main" sx={{ flexGrow: 0.8, margin:5, p: 3 }}>
                <Toolbar/>
                <Typography marginTop={6} marginLeft={4} marginBottom={4} fontWeight={700} variant="h2" color={"#2E3B55"}>
                <i>KernelKart</i> Orders
                </Typography>

                <Box component="content"  sx={{  margin:5, p: 3 }}>
                    <TableContainer component={Paper} >
                        <Table sx={{ minWidth: 700 }} aria-label="customized table">
                            <TableHead>
                                <TableRow>
                                <StyledTableCell >ID</StyledTableCell>
                                <StyledTableCell align="center">Seller</StyledTableCell>
                                <StyledTableCell align="center">Customer</StyledTableCell>
                                <StyledTableCell align="center">Due Date</StyledTableCell>
                                <StyledTableCell align="center">Actions</StyledTableCell>
                                </TableRow>
                            </TableHead>

                                <TableBody>
                                    {orders.map((order) => (
                                    <StyledTableRow key={order.id}>
                                        <StyledTableCell component="th" scope="row">{order.id}</StyledTableCell>
                                        <StyledTableCell align="center">{order.SellerUsername}</StyledTableCell>
                                        <StyledTableCell align="center">{order.CustomerUsername}</StyledTableCell>
                                        <StyledTableCell align="center">{order.DueDate}</StyledTableCell>
                                        {/* <StyledTableCell align="center">{customer.CompanyName}</StyledTableCell> */}
                                        
                                        <StyledTableCell align="center" marginLeft={"1rem"}>
                                        <Link to= '/OrdersProgress' state={ {orderid :order.id , orderSeller :order.SellerUsername , orderCustomer :order.CustomerUsername 
                                            ,orderDate :order.DueDate ,orderPrice :order.Price, orderProg: order.Progress } }>
                                            <Button variant='text' style={{ color:'#2E3B55'}} >Details</Button>
                                        </Link>
                                        {/* <Button variant='text' style={{ color:'#2E3B55'}} >edit</Button> */}
                                        <p3>| </p3>
                                        <Button variant='text' style={{ color:'red'} } onClick={() => handleSubmitDelete(order.id)}>Delete</Button>
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

export default Orders