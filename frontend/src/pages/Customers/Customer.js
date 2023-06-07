import React from "react";
import { Navbar, Sidebar } from "../../components";
import {
  Box,
  Button,
  TextField,
  createTheme,
  ThemeProvider,
  Typography,
  Grid,
  Toolbar,
} from "@mui/material";
import { styled } from "@mui/material/styles";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell, { tableCellClasses } from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import axios from "axios";
import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";

const StyledTableCell = styled(TableCell)(({ theme }) => ({
  [`&.${tableCellClasses.head}`]: {
    backgroundColor: "#2E3B55",
    color: theme.palette.common.white,
  },
  [`&.${tableCellClasses.body}`]: {
    fontSize: 14,
  },
}));

const StyledTableRow = styled(TableRow)(({ theme }) => ({
  "&:nth-of-type(odd)": {
    backgroundColor: "#DFF6FF",
  },
  // hide last border
  "&:last-child td, &:last-child th": {
    border: 0,
  },
}));

const Customer = () => {
  const [customer, setcustomer] = useState([]);
  const [searchResults, setSearchResults] = useState([]);
  const [search, setSearch] = useState('');

  const navigate = useNavigate();

    const handleSort = (e) => {
        navigate("/SortCustomers");
    }

  const handleSubmitAdd = (e) => {
   
    navigate("/AddCustomer");
  };
  
  const handleSubmitDelete = async (email) => {
    try {
      await axios.delete(`/delete-customer/${email}`);
      console.log('Customer deleted successfully');
      setcustomer((prevPolicies) => prevPolicies.filter((customer) => customer.email !== email));
      navigate('../Customers'); // Navigate after the delete request is complete
    } catch (error) {
      console.error('Failed to delete Customer:', error);
      alert('Failed to delete Customer');
      // Handle error condition (e.g., show error message to the user)
    }
  };

  const handleSubmitFlag = async (email) => {
    try {
      await axios.put(`/increment-customer-flag-count/${email}`);
      console.log('Flag count incremented successfully');
      setcustomer((prevcustomer) =>
        prevcustomer.map((customer) =>
        customer.email === email
            ? { ...customer, flagCount: customer.flagCount + 1 }
            : customer
        )
      );
    } catch (error) {
      console.error('Failed to increment flag count:', error);
      alert('Failed to increment flag count');
      // Handle error condition (e.g., show error message to the user)
    }
  };



  useEffect(() => {
    (async () => {
      axios
        .get("/get-all-customers", {
          crossdomain: true,
        })
        .then((response) => {
          setcustomer(response.data);
          // setText(response.data.text);
          // setAuthor(response.data.author);
        });
    })();
  }, []);

    

  const handleSearch = async () => {
    try {
      const response = await axios.get(`/get-customer-by-email/${search}`);
      if (response.status === 200) {
        setSearchResults(response.data);
      } else {
        
        setSearchResults([]);
       
      }
    } catch (error) {
      console.error(error);
      setSearchResults([]);
    }
  };

  return (
    <div data-testid="seller">
      <Box sx={{ display: "flex" }}>
        <Navbar></Navbar>
        <Sidebar></Sidebar>

        <Box component="main" sx={{ flexGrow: 0.8, margin: 5, p: 3 }}>
          <Toolbar />
          <Typography
            marginTop={2}
            marginBottom={3}
            fontWeight={500}
            variant="h2"
            color={"#2E3B55"}
          >
            <i>KernelKart</i> Customers
          </Typography>
          <Box
            sx={{
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
            }}
          >
            <Button
              variant="contained"
              sx={{ backgroundColor: "#2E3B55", marginBottom: "20px" }}
                onClick={handleSubmitAdd}
            >
              Create New Customer
            </Button>
            <Button
              variant="contained"
              sx={{ backgroundColor: "#2E3B55", marginBottom: "20px" }}
                onClick={handleSort}
            >
              Sort all Customers
            </Button>
            <Box sx={{ display: "flex", alignItems: "center" }}>
              <TextField
                label="Search"
                variant="outlined"
                value={search}
                onChange={(e) => setSearch(e.target.value)}
                sx={{ marginRight: "10px" }}
              />
              <Button
                variant="contained"
                sx={{ backgroundColor: "#2E3B55" }}
                onClick={handleSearch}
              >
                Search
              </Button>
            </Box>
          </Box>

          <Box component="content" sx={{ margin: 5, p: 3 }}>
            <TableContainer component={Paper}>
              <Table sx={{ minWidth: 700 }} aria-label="customized table">
                <TableHead>
                  <TableRow>
                  <StyledTableCell align="center">Id</StyledTableCell>
                    <StyledTableCell>Name</StyledTableCell>
                    <StyledTableCell align="center">
                      Email
                    </StyledTableCell>
                    <StyledTableCell align="right">Password</StyledTableCell>
                    <StyledTableCell align="center">
                      Seller Id
                    </StyledTableCell>
                    <StyledTableCell align="center">Contact</StyledTableCell>
                    <StyledTableCell align="center">City</StyledTableCell>
                    <StyledTableCell align="center">Province</StyledTableCell>
                    <StyledTableCell align="center">Address</StyledTableCell>
                    <StyledTableCell align="center">Flag Count</StyledTableCell>
                    <StyledTableCell align="center">Actions</StyledTableCell>
                  </TableRow>
                </TableHead>

               

                <TableBody>
          {searchResults.length > 0 ? (
            searchResults.map((customers) => (
              <StyledTableRow key={customers._id}>
              <StyledTableCell component="th" scope="row">
                        {customers._id}
                      </StyledTableCell>
                      <StyledTableCell align="center">
                        {customers.name}
                      </StyledTableCell>
                      <StyledTableCell align="right">
                        {customers.email}
                      </StyledTableCell>
                      <StyledTableCell align="center">
                        {customers.password}
                      </StyledTableCell>
                      <StyledTableCell align="center">
                        {customers.customerId}
                      </StyledTableCell>
                      <StyledTableCell align="center">
                        {customers.contact}
                      </StyledTableCell>
                      <StyledTableCell align="center">
                        {customers.city}
                      </StyledTableCell>
                      <StyledTableCell align="center">
                        {customers.province}
                      </StyledTableCell>
                      <StyledTableCell align="center">
                        {customers.address}
                      </StyledTableCell>
                      <StyledTableCell align="center">
                        {customers.flagCount}
                      </StyledTableCell>

                      <StyledTableCell align="center" marginLeft={"1rem"}>
                       
                        
                        <Button
                          variant="text"
                          style={{ color: "red" }}
                          onClick={() => handleSubmitDelete(customers.email)}
                        >
                          Delete
                        </Button>
                        <Button
                          variant="text"
                          style={{ color: "#2E3B55" }}
                          onClick={() => handleSubmitFlag(customers.email)}
                        >
                          Flag
                        </Button>
                      </StyledTableCell>

              </StyledTableRow>
            ))
          ) : (
            customer.map((customers) => (
                
              <StyledTableRow key={customers._id}>
              <StyledTableCell component="th" scope="row">
                        {customers._id}
                      </StyledTableCell>
                      <StyledTableCell align="center">
                        {customers.name}
                      </StyledTableCell>
                      <StyledTableCell align="right">
                        {customers.email}
                      </StyledTableCell>
                      <StyledTableCell align="center">
                        {customers.password}
                      </StyledTableCell>
                      <StyledTableCell align="center">
                        {customers.customerId}
                      </StyledTableCell>
                      <StyledTableCell align="center">
                        {customers.contact}
                      </StyledTableCell>
                      <StyledTableCell align="center">
                        {customers.city}
                      </StyledTableCell>
                      <StyledTableCell align="center">
                        {customers.province}
                      </StyledTableCell>
                      <StyledTableCell align="center">
                        {customers.address}
                      </StyledTableCell>
                      <StyledTableCell align="center">
                        {customers.flagCount}
                      </StyledTableCell>

                      <StyledTableCell align="center" marginLeft={"1rem"}>
                       
                        
                        <Button
                          variant="text"
                          style={{ color: "red" }}
                          onClick={() => handleSubmitDelete(customers.email)}
                          
                        >
                          Delete
                        </Button>
                        <Button
                          variant="text"
                          style={{ color: "#2E3B55" }}
                          onClick={() => handleSubmitFlag(customers.email)}
                        >
                          Flag
                        </Button>
                      </StyledTableCell>
              </StyledTableRow>
              
            ))
          )}
        </TableBody>

              </Table>
            </TableContainer>
          </Box>
        </Box>
      </Box>
    </div>
  );
};

export default Customer;
