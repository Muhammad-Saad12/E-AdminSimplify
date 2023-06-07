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
  FormControl,
  InputLabel,
  Select,
  MenuItem,
} from "@mui/material";
import { Link, useLocation } from "react-router-dom";
import axios from "axios";
import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { NavLink, useParams } from "react-router-dom";

const PolicyEdit = () => {
  const { policyId } = useParams("");
  console.log(policyId);
  const navigate = useNavigate();

  const updateAPIData = async (e) => {
    e.preventDefault();

    try {
      await axios.put(`/update-policy/${policyId}`, {
        policyTitle,
        policyType,
        policyDescription,
      });
        alert("Policy Updated Successfully");
      navigate("../Policy");
    } catch (error) {
      console.error(error);
      // Handle error state or display error message
    }
  };

  const Location = useLocation();
  const data = Location.state;

  const [policyTitle, setpolicyTitle] = useState("");
  const [policyType, setpolicyType] = useState("");
  const [policyDescription, setpolicyDescription] = useState("");

  useEffect(() => {
    setpolicyTitle(data.policyTitle);
    setpolicyType(data.policyType);
    setpolicyDescription(data.policyDescription);
  }, []);

  return (
    <div>
      <Box sx={{ display: "flex" }}>
        <Navbar></Navbar>
        <Sidebar></Sidebar>

        <Box component="main" sx={{ flexGrow: 0.8, margin: 5, p: 3 }}>
          <Toolbar />
          <Typography
            marginTop={6}
            marginLeft={4}
            marginBottom={3}
            fontWeight={700}
            variant="h2"
            color={"#2E3B55"}
          >
            Policy Edit
          </Typography>

          <Box component="content" sx={{ margin: 5, p: 3 }}>
            <Grid container margin={"2rem"}>
              <Grid conatainer xs={6}>
                <Grid item xs={12} marginBottom={"1rem"}>
                  <Typography variant="h5" color="#2E3B55" marginTop={2}>
                    Policy Title
                  </Typography>
                </Grid>
                <Grid item xs={12}>
                  <TextField
                    id=""
                    value={policyTitle}
                    type="text"
                    variant="filled"
                    onChange={(e) => setpolicyTitle(e.target.value)}
                    style={{ paddingRight: "20px", width: "400px" }}
                  />
                </Grid>
              </Grid>

              <Grid conatainer xs={4} marginLeft={"2rem"}>
                <Grid item xs={12} marginBottom={"1rem"}>
                  <Typography variant="h5" color="#2E3B55" marginTop={2}>
                    Policy Type
                  </Typography>
                </Grid>
               
                <Box width="250px"> 
                    <TextField
                    label="Policy Type"
                    select
                    value={policyType}
                    onChange={(e) => setpolicyType(e.target.value)}
                    fullWidth
                    >
                    <MenuItem value="seller">Seller</MenuItem>
                    <MenuItem value="customer">Customer</MenuItem>
                    </TextField>
                </Box>
              </Grid>

              <Grid conatainer xs={6} marginTop={"5rem"}>
                <Grid item xs={12} marginBottom={"1rem"}>
                  <Typography variant="h5" color="#2E3B55" marginTop={2}>
                    Policy Description
                  </Typography>
                </Grid>
                <Grid item xs={12}>
                  <TextField
                    id=""
                    value={policyDescription}
                    type="text"
                    variant="filled"
                    onChange={(e) => setpolicyDescription(e.target.value)}
                    style={{ paddingRight: "20px", width: "400px" }}
                  />
                </Grid>
              </Grid>

              <Grid item xs={4.5}></Grid>
              <Grid item xs={4}>
                <Button
                  variant="contained"
                  margin={5}
                  padding={5}
                  onClick={updateAPIData}
                  style={{
                    width: "100px",
                    marginBottom: "3rem",
                    marginTop: "6rem",
                    backgroundColor: "#2E3B55",
                  }}
                >
                  Update
                </Button>
              </Grid>
              <Grid item xs={3}></Grid>
              <Grid item xs={3}></Grid>
            </Grid>
          </Box>
        </Box>
      </Box>
    </div>
  );
};

export default PolicyEdit;
