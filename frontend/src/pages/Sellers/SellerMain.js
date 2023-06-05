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

// function createData(FirstName, LastName, Age, Company) {
//   return { FirstName, LastName, Age, Company };
// }

// const rows = [
//   createData('Frozen yoghurt', 159, 6.0, 24, 4.0),
//   createData('Ice cream sandwich', 237, 9.0, 37, 4.3),
//   createData('Eclair', 262, 16.0, 24, 6.0),
//   createData('Cupcake', 305, 3.7, 67, 4.3),
//   createData('Gingerbread', 356, 16.0, 49, 3.9),
// ];

const SellerMain = () => {
  
  const [sellers, setsellers] = useState([]);
  const navigate = useNavigate();

  const handleSubmitEdit = (e) => {
    navigate('/SellerEditMUI')
  };

  const handleSubmitDelete = (name) => {
    axios.delete('http://localhost:5000/sellers/delete', 
        { data: { answer: name } }
    )
    navigate('../Sellers')
  };

  useEffect(() => {
    (async () =>
    {
      axios.get("http://localhost:5000/sellers/list",  { 
      crossdomain: true 
    }).then(response => {
        setsellers(response.data)
      // setText(response.data.text);
      // setAuthor(response.data.author);
    });
      
   })();
  },[]);
  


  return (
    <div data-testid = "seller">
      <Box sx={{ display: 'flex' }}>
          <Navbar></Navbar>
          <Sidebar></Sidebar>

          <Box component="main" sx={{ flexGrow: 0.8, margin:5, p: 3 }}>
            <Toolbar/>
            <Typography marginTop={6} marginLeft={4} marginBottom={3} fontWeight={700} variant="h2" color={"#2E3B55"}>
              <i>KernelKart</i> Sellers
            </Typography>
            <Box component="content"  sx={{  margin:5, p: 3 }}>

            <TableContainer component={Paper} >

              <Table sx={{ minWidth: 700 }} aria-label="customized table">
                <TableHead>
                  <TableRow>
                    <StyledTableCell >First Name</StyledTableCell>
                    <StyledTableCell align="center">Last Name</StyledTableCell>
                    <StyledTableCell align="right">Age</StyledTableCell>
                    <StyledTableCell align="center">Company</StyledTableCell>
                    <StyledTableCell align="center">Actions</StyledTableCell>
                  </TableRow>
                </TableHead>

                <TableBody>
                  {sellers.map((seller) => (
                    <StyledTableRow key={seller.name}>
                      <StyledTableCell component="th" scope="row">{seller.Firstname}</StyledTableCell>
                      <StyledTableCell align="center">{seller.Lastname}</StyledTableCell>
                      <StyledTableCell align="right">{seller.Age}</StyledTableCell>
                      <StyledTableCell align="center">{seller.CompanyName}</StyledTableCell>
                      
                      <StyledTableCell align="center" marginLeft={"1rem"}>
                      <Link to= '/SellersEdit' state={ {sellerfname :seller.Firstname , sellerlname :seller.Lastname , sellercompany :seller.CompanyName 
                            ,sellerage :seller.Age ,sellerusername :seller.username ,sellerpass :seller.password , } }>
                            {/* <td><Button color='link' size='sm' onClick={() => setData()}> Edit</Button></td> */}
                            {/* <td><Button color='link' size='sm' > Edit</Button></td> */}
                            <Button variant='text' style={{ color:'#2E3B55'}} >edit</Button>
                        </Link>
                        {/* <Button variant='text' style={{ color:'#2E3B55'}} >edit</Button> */}
                        <Button variant='text' style={{ color:'red'} } onClick={() => handleSubmitDelete(seller.username)}>Delete</Button>
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

export default SellerMain