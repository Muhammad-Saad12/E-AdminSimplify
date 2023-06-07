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

const Policy = () => {
  const [policy, setpolicy] = useState([]);
  const [searchResults, setSearchResults] = useState([]);
  const [search, setSearch] = useState('');

  const navigate = useNavigate();



  const handleSubmitAdd = (e) => {
   
    navigate("/create-policy");
  };
  
  const handleSubmitDelete = async (policyId) => {
    try {
      await axios.delete(`/delete-policy/${policyId}`);
      console.log('Policy deleted successfully');
      setpolicy((prevPolicies) => prevPolicies.filter((policy) => policy._id !== policyId));
      navigate('../Policy'); 
    } catch (error) {
      console.error('Failed to delete policy:', error);
     
    }
  };

  useEffect(() => {
    (async () => {
      axios
        .get("/get-all-policies", {
          crossdomain: true,
        })
        .then((response) => {
          setpolicy(response.data);
          
        });
    })();
  }, []);

    

  const handleSearch = async () => {
    try {
      const response = await axios.get(`/get-policy-by-title/${search}`);
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
            <i>KernelKart</i> Policies
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
              Create New Policy
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
                    <StyledTableCell>Id</StyledTableCell>
                    <StyledTableCell align="center">
                      Policy Title
                    </StyledTableCell>
                    <StyledTableCell align="right">Policy Type</StyledTableCell>
                    <StyledTableCell align="center">
                      Policy Description
                    </StyledTableCell>
                    <StyledTableCell align="center">Actions</StyledTableCell>
                  </TableRow>
                </TableHead>

                

                <TableBody>
          {searchResults.length > 0 ? (
            searchResults.map((policies) => (
              <StyledTableRow key={policies._id}>
              <StyledTableCell component="th" scope="row">
                        {policies._id}
                      </StyledTableCell>
                      <StyledTableCell align="center">
                        {policies.policyTitle}
                      </StyledTableCell>
                      <StyledTableCell align="right">
                        {policies.policyType}
                      </StyledTableCell>
                      <StyledTableCell align="center">
                        {policies.policyDescription}
                      </StyledTableCell>

                      <StyledTableCell align="center" marginLeft={"1rem"}>
                        <Link
                          to={`/PolicyEdit/${policies._id}`}
                          state={{
                            id: policies._id,
                            policyTitle: policies.policyTitle,
                            policyType: policies.policyType,
                            policyDescription: policies.policyDescription,
                          }}
                        >
                          <Button variant="text" style={{ color: "#2E3B55" }}>
                            Edit
                          </Button>
                        </Link>
                        
                        <Button
                          variant="text"
                          style={{ color: "red" }}
                          onClick={() => handleSubmitDelete(policies._id)}
                        >
                          Delete
                        </Button>
                      </StyledTableCell>

              </StyledTableRow>
            ))
          ) : (
            policy.map((policies) => (
              <StyledTableRow key={policies._id}>
              <StyledTableCell component="th" scope="row">
                        {policies._id}
                      </StyledTableCell>
                      <StyledTableCell align="center">
                        {policies.policyTitle}
                      </StyledTableCell>
                      <StyledTableCell align="right">
                        {policies.policyType}
                      </StyledTableCell>
                      <StyledTableCell align="center">
                        {policies.policyDescription}
                      </StyledTableCell>

                      <StyledTableCell align="center" marginLeft={"1rem"}>
                        <Link
                          to={`/PolicyEdit/${policies._id}`}
                          state={{
                            id: policies._id,
                            policyTitle: policies.policyTitle,
                            policyType: policies.policyType,
                            policyDescription: policies.policyDescription,
                          }}
                        >
                          <Button variant="text" style={{ color: "#2E3B55" }}>
                            Edit
                          </Button>
                        </Link>
                        
                        <Button
                          variant="text"
                          style={{ color: "red" }}
                          onClick={() => handleSubmitDelete(policies._id)}
                          
                        >
                          Delete
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

export default Policy;
