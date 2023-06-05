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
  const [sellers, setsellers] = useState([]);
  const [search, setSearch] = useState("");
  const navigate = useNavigate();

  const handleSubmitEdit = (e) => {
    navigate("/SellerEditMUI");
  };

  const handleSubmitDelete = (name) => {
    axios.delete("http://localhost:5000/sellers/delete", {
      data: { answer: name },
    });
    navigate("../Sellers");
  };

  useEffect(() => {
    (async () => {
      axios
        .get("http://localhost:3001/get-all-policies", {
          crossdomain: true,
        })
        .then((response) => {
          setsellers(response.data);
          // setText(response.data.text);
          // setAuthor(response.data.author);
        });
    })();
  }, []);

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
            >
              Create New Policy
            </Button>
            <Box sx={{ display: "flex", alignItems: "center" }}>
              <TextField
                label="Search"
                variant="outlined"
                // value={searchTerm}
                onChange={(e) => setSearch(e.target.value)}
                sx={{ marginRight: "10px" }}
              />
              <Button
                variant="contained"
                sx={{ backgroundColor: "#2E3B55" }}
                // onClick={handleSearch}
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
                  {sellers.map((seller) => (
                    <StyledTableRow key={seller._id}>
                      <StyledTableCell component="th" scope="row">
                        {seller._id}
                      </StyledTableCell>
                      <StyledTableCell align="center">
                        {seller.policyTitle}
                      </StyledTableCell>
                      <StyledTableCell align="right">
                        {seller.policyType}
                      </StyledTableCell>
                      <StyledTableCell align="center">
                        {seller.policyDescription}
                      </StyledTableCell>

                      <StyledTableCell align="center" marginLeft={"1rem"}>
                        <Link
                          to={`/PolicyEdit/${seller._id}`}
                          state={{
                            id: seller._id,
                            policyTitle: seller.policyTitle,
                            policyType: seller.policyType,
                            policyDescription: seller.policyDescription,
                          }}
                        >
                          <Button variant="text" style={{ color: "#2E3B55" }}>
                            Edit
                          </Button>
                        </Link>
                        {/* <Button variant='text' style={{ color:'#2E3B55'}} >edit</Button> */}
                        <Button
                          variant="text"
                          style={{ color: "red" }}
                          onClick={() => handleSubmitDelete(seller.username)}
                        >
                          Delete
                        </Button>
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
  );
};

export default Policy;
