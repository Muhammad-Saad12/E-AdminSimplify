import React from 'react'
import {Box, Button, TextField, createTheme, ThemeProvider, Typography} from "@mui/material";
import CssBaseline from "@mui/material/CssBaseline";
import logo from './logo.png'

import { useNavigate} from 'react-router-dom';
import { useState, useEffect  } from 'react'
import axios from "axios";

const MAX_LENGTH = 10;

const theme = createTheme({
  palette: {
    background: {
      default: "#ffffff"
      // default: "#2E3B55"
    }
  }
});

const LoginForm = () => { 
  const navigate = useNavigate();
  const [admin, setadmin] = useState([])

  useEffect(() => {
    (async () =>{ axios.get("http://localhost:5000/login/admin",  { 
      crossdomain: true 
    }).then(response => {
        setadmin(response.data)
      // setText(response.data.text);
      // setAuthor(response.data.author);
    });
      
   })();
  },[]);

  const handleSubmit = (e) => {
    e.preventDefault()

    // if(username.length >= MAX_LENGTH){
    //   setErrorMessage("The Input has exceeded")
    // }


    const account = admin.find((user) => user.username === username);
    console.log(password)
    if (account && account.password === password) {
        // setauthenticated(true)
        // localStorage.setItem("authenticated", true);
        navigate("/");
    }
  };


const [username, setusername] = useState("");
const [password, setpassword] = useState("");




  return (
    <div>
      <ThemeProvider theme={theme} >
      <CssBaseline />
        <form>
            <Box display="flex" flexDirection={"column"} 
            maxWidth={400} 
            alignItems="center" 
            justifyContent={"center"} 
            margin="auto" 
            marginTop={"13rem"}
            padding={3}
            borderRadius={5}
            boxShadow={'5px 5px 10px #161616'}

            sx={{
              ":hover": {
              boxShadow: "10px 10px 20px #161616"
            },
            background: '#DFF6FF' 
          }}
            >   
                <img src={logo}></img>
                <TextField 
                
                  margin='normal' type={'text'} variant='outlined' placeholder='Username'  onChange={(e) => setusername(e.target.value)}></TextField>
                <TextField margin='normal' type={'password'} variant='outlined' placeholder='Password' onChange={(e) => setpassword(e.target.value)}></TextField>
                
                <Button variant='contained' color="warning" style={{ background: '#2E3B55', margin: '1.2rem', borderRadius: 3}} onClick={handleSubmit}>LOGIN</Button>
            </Box>
        </form>
        </ThemeProvider>
    </div>
  )
}

export default LoginForm