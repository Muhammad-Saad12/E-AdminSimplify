import {Navbar, Sidebar} from '../../components'
import Avatar from '@mui/material/Avatar';
import {Box, Button, TextField, createTheme, ThemeProvider, Typography, Grid} from "@mui/material";
import Paper from '@mui/material/Paper';
import { styled } from '@mui/material/styles';
// import pfp from '../Profile/pfp.jpg'
import '@fontsource/baloo-thambi-2/400.css';

import axios from "axios";
import { useState, useEffect  } from 'react'
import { useNavigate } from "react-router-dom";


import React from 'react'



const ProfileMUI = () => {
  const navigate = useNavigate();
  

  

  return (
    <div data-testid = "profile">
        <Navbar />

        {/* <ThemeProvider theme={theme}> */}
        <Box display="flex" flexDirection={"column"} 
            maxWidth={1350} 
            // alignItems="center" 
            justifyContent={"center"} 
            margin="auto" 
            marginTop={"11rem"}
            padding={3}
            borderRadius={3}
           

            sx={{
            background: '#DFF6FF' 
          }}
            >     
            <Grid container margin={"5rem"} >
                <Grid item xs = {5} >
                    {/* <Avatar alt="E" src={pfp}
                      sx={{ width: 380, height: 380 }}
                    /> */}
                </Grid>
                <Grid item xs = {5} marginTop={"6rem"}>
                <Typography variant="h3"  padding={3} align="left" color="#2E3B55"></Typography>
                <Typography variant="h5"  padding={3} align="left" color="#2E3B55"> - Administrator</Typography>
                </Grid>
            </Grid>
        

            <Typography variant="h3" marginLeft={"2.3rem"} marginBottom={"3rem"} padding={3} align="left" color="#2E3B55" >Account</Typography>
            
            <Grid container spacing={2} columns={10} >

                <Grid item xs={5}>
                    <Typography variant="h5" color="#2E3B55" marginLeft={"17rem"} marginTop={2}>Username</Typography>
                </Grid>
                <Grid item xs={5}>
                <TextField
                            id=""
                            // value={username}
                            InputProps={{
                              readOnly: true,
                            }}
                            type="text"
                            variant = "filled" 
                            // onChange={(e) => setuser(e.target.value)}   
                            style={{paddingRight: "20px", width: "400px"}}
                        />
                    {/* <Typography variant="h6" color="#2E3B55" marginLeft={8} marginTop={4}>Password</Typography> */}
                </Grid>

              
                <Grid item xs={5}>
                    <Typography variant="h5" color="#2E3B55" marginLeft={"17rem"} marginTop={6}>Password</Typography>
                </Grid>
                <Grid item xs={5}>
                <TextField
                            id=""
                            // value={password}
                            // label="Username"
                            type="text"
                            variant = "filled"  
                            // onChange={(e) => setpass(e.target.value)}   
                            style={{paddingRight: "20px", width: "400px", marginTop: "2rem"}}
                        />
                 
                </Grid>
              
              
                <Grid item xs={5}>
                    <Typography variant="h5" color="#2E3B55" marginLeft={"17rem"} marginTop={6}>Email</Typography>
                </Grid>
                <Grid item xs={5}>
                <TextField
                            id=""
                            // value={email}
                            // label="Username"
                            type="email"
                            variant = "filled"    
                            // onChange={(e) => setemail(e.target.value)}   

                            style={{paddingRight: "20px", width: "400px" , marginTop: "2rem"}}
                        />
                 
                </Grid>
              
                <Grid item xs={5}>
                    <Typography variant="h5" color="#2E3B55" marginLeft={"17rem"} marginTop={6}>Age</Typography>
                </Grid>
                <Grid item xs={5}>
                <TextField
                            id=""
                            // value={Age}
                            // label="Username"
                            type="number"
                            variant = "filled"    
                            // onChange={(e) => setAge(e.target.value)}   

                            style={{paddingRight: "20px", width: "400px" , marginTop: "2rem"}}
                        />
                 
                </Grid>


              <Grid item xs={4.5}>
              </Grid> 
              <Grid item xs={4}>
                <Button variant='contained'
                 margin={5}
                 padding={5} 
               
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
        {/* </ThemeProvider> */}
    </div>
  )
}

export default ProfileMUI