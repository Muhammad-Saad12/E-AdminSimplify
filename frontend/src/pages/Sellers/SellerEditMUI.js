import React from 'react'
import { Navbar, Sidebar } from '../../components'
import {Box, Button, TextField, createTheme, ThemeProvider, Typography, Grid, Toolbar} from "@mui/material";
import { Link, useLocation } from 'react-router-dom';
import axios from "axios";
import { useState, useEffect  } from 'react'
import { useNavigate} from 'react-router-dom';

const SellerEditMUI = () => {
    const navigate = useNavigate();

    const updateAPIData = async (e) => {
        e.preventDefault()
        axios.put('http://localhost:5000/sellers/update', {
             firstName,
             lastName,
             age,
             company,
             username, 
             password
        })
        navigate('../sellers')
    }

    const Location = useLocation();
    const data = Location.state;

    const [firstName, setFirstName] = useState('');
    const [lastName, setLastName] = useState('');
    const [age, setage] = useState('');
    const [company, setcompany] = useState('');
    const [username, setusername] = useState('');
    const [password, setpassword] = useState('');

    useEffect(() =>{
        setFirstName(data.sellerfname)
        setLastName(data.sellerlname)
        setcompany(data.sellercompany)
        setage(data.sellerage)
        setusername(data.sellerusername)
        setpassword(data.sellerpass)

    },[])

  return (
    <div>
        <Box sx={{ display: 'flex' }}>
            <Navbar></Navbar>
            <Sidebar></Sidebar>
            
            <Box component="main" sx={{ flexGrow: 0.8, margin:5, p: 3 }}>
                <Toolbar/>
                <Typography marginTop={6} marginLeft={4} marginBottom={3} fontWeight={700} variant="h2" color={"#2E3B55"}>
                    Seller Profile
                </Typography>

                <Box component="content"  sx={{  margin:5, p: 3 }}>
                    <Grid container margin={"2rem"} >
                        
                        <Grid conatainer xs={6}>
                            <Grid item xs={12} marginBottom={"1rem"}>
                                <Typography variant="h5" color="#2E3B55"  marginTop={2}>FirstName</Typography>
                            </Grid>
                            <Grid item xs={12}>
                                <TextField
                                id=""
                                value={firstName}
                                type="text"
                                variant = "filled" 
                                onChange={(e) => setFirstName(e.target.value)}
                                // onChange={(e) => setuser(e.target.value)}   
                                style={{paddingRight: "20px", width: "400px"}}
                            />
                            </Grid>
                        </Grid>

                        <Grid conatainer xs={4} marginLeft={"2rem"}>
                            <Grid item xs={12} marginBottom={"1rem"}>
                                <Typography variant="h5" color="#2E3B55"  marginTop={2}>LastName</Typography>
                            </Grid>
                            <Grid item xs={12}>
                                <TextField
                                id=""
                                value={lastName}
                                type="text"
                                variant = "filled" 
                                onChange={(e) => setLastName(e.target.value)}
                                // onChange={(e) => setuser(e.target.value)}   
                                style={{paddingRight: "20px", width: "400px"}}
                            />
                            </Grid>
                        </Grid>

                        <Grid conatainer xs={6} marginTop={"5rem"}>
                            <Grid item xs={12} marginBottom={"1rem"}>
                                <Typography variant="h5" color="#2E3B55"  marginTop={2}>Username</Typography>
                            </Grid>
                            <Grid item xs={12}>
                                <TextField
                                id=""
                                value={username}
                                type="text"
                                variant = "filled" 
                                onChange={(e) => setusername(e.target.value)}
                                // onChange={(e) => setuser(e.target.value)}   
                                style={{paddingRight: "20px", width: "400px"}}
                            />
                            </Grid>
                        </Grid>

                        <Grid conatainer xs={4} marginLeft={"2rem"} marginTop={"5rem"}>
                            <Grid item xs={12} marginBottom={"1rem"}>
                                <Typography variant="h5" color="#2E3B55"  marginTop={2}>Password</Typography>
                            </Grid>
                            <Grid item xs={12}>
                                <TextField
                                id=""
                                value={password}
                                type="password"
                                variant = "filled" 
                                onChange={(e) => setpassword(e.target.value)}
                                // onChange={(e) => setuser(e.target.value)}   
                                style={{paddingRight: "20px", width: "400px"}}
                            />
                            </Grid>
                        </Grid>

                        <Grid conatainer xs={6} marginTop={"5rem"}>
                            <Grid item xs={12} marginBottom={"1rem"}>
                                <Typography variant="h5" color="#2E3B55"  marginTop={2}>Age</Typography>
                            </Grid>
                            <Grid item xs={12}>
                                <TextField
                                id=""
                                value={age}
                                type="number"
                                variant = "filled" 
                                onChange={(e) => setage(e.target.value)}
                                // onChange={(e) => setuser(e.target.value)}   
                                style={{paddingRight: "20px", width: "400px"}}
                            />
                            </Grid>
                        </Grid>

                        <Grid conatainer xs={4} marginLeft={"2rem"} marginTop={"5rem"}>
                            <Grid item xs={12} marginBottom={"1rem"}>
                                <Typography variant="h5" color="#2E3B55"  marginTop={2}>Company Label</Typography>
                            </Grid>
                            <Grid item xs={12}>
                                <TextField
                                id=""
                                value={company}
                                InputProps={{
                                    readOnly: true,
                                  }}
                                type="text"
                                variant = "filled" 
                                // onChange={(e) => setuser(e.target.value)}   
                                style={{paddingRight: "20px", width: "400px"}}
                            />
                            </Grid>
                        </Grid>

                        <Grid item xs={4.5}>
                        </Grid> 
                        <Grid item xs={4}>
                            <Button variant='contained'
                            margin={5}
                            padding={5} 
                            onClick = {updateAPIData}
                            style={{ width: "100px", marginBottom: "3rem" , marginTop: "6rem"}}
                            >
                            Update
                            </Button>
                        </Grid> 
                        <Grid item xs={3}>
                        </Grid> 
                        <Grid item xs={3}>
                        </Grid> 
                       
                    </Grid>
                </Box>
            </Box>
        </Box>
    </div>
  )
}

export default SellerEditMUI