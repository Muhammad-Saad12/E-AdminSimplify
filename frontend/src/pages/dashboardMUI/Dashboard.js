import {Navbar, Sidebar, CardMUI ,ListItemMUI} from '../../components'
// import {Box, CssBaseline, Drawer, Toolbar,List,ListItem, ListItemButton, ListItemIcon, InboxIcon, MailIcon, ListItemText, Divider} from '@mui/material'

import Box from '@mui/material/Box';
import Drawer from '@mui/material/Drawer';
import AppBar from '@mui/material/AppBar';
import CssBaseline from '@mui/material/CssBaseline';
import Toolbar from '@mui/material/Toolbar';
import List from '@mui/material/List';
import Typography from '@mui/material/Typography';
import Divider from '@mui/material/Divider';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import ListItemAvatar from '@mui/material/ListItemAvatar';
import Avatar from '@mui/material/Avatar';
import InboxIcon from '@mui/icons-material/MoveToInbox';
import MailIcon from '@mui/icons-material/Mail';
import { ButtonBase, Grid} from "@mui/material";
import { styled } from '@mui/material/styles';
import sellerImg from './seller.png'
import {useNavigate} from 'react-router-dom';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';



import React from 'react'




const Img = styled('img')({
  margin: 'auto',
  display: 'block',
  maxWidth: '200px',
  maxHeight: '200px',
});


const Dashboard = () => {
  const navigate = useNavigate();
 const handleAnalytics = (e) => {
    e.preventDefault();
    
    navigate("/Orders");
  }

  const handleSubmitToSellers = (e) => { 
    e.preventDefault();
    
    navigate("/Sellers");
  }

  const handleSubmitToCustomers = (e) => { 
    e.preventDefault();
    
    navigate("/Customers");
  }

  const handleSubmitToOrders = (e) => { 
    e.preventDefault();
    
    navigate("/Orders");
  }
  const handlePolicy = (e) => { 
    e.preventDefault();
    
    navigate("/Policy");
  }

  return (
    <div data-testid = "dashboard">
      <Box sx={{ display: 'flex' }}>
        <Navbar/>
        <Sidebar/>

        <Box component="main" sx={{ flexGrow: 0.8, margin:5, p: 3 }}>
        <Toolbar />
        <Typography marginTop={2} marginLeft={3} marginBottom={"5rem"} fontWeight={700} variant="h4" color={"#2E3B55"}>
              Dashboard
        </Typography>
        {/* <Box>
        <Card sx={{ maxWidth: 345 }}>
     
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
         Analytics
        </Typography>
        <Typography variant="body2" color="text.secondary">
         {`The amount collected from all fulfilled orders is `}
        </Typography>
      </CardContent>
      <CardActions>
        <Button size="small"
        onClick={handleAnalytics}
        >Orders</Button>
        <Button size="small">Learn More</Button>
      </CardActions>
    </Card>
        </Box> */}
        
        <Grid container  marginLeft={"4rem"} marginTop={2}>
            <Grid item xs={6}>
                <Grid container xs={6}>
                  <Grid item xs={12} marginBottom={"3rem"} onClick={handleSubmitToSellers}>
                    <CardMUI title="Sellers" img= {require('../../assets/sellers3.jpg')}  />
                  </Grid>
                  <Grid item xs={12} marginBottom={"3rem"} onClick={handleSubmitToCustomers}>
                    <CardMUI title="Customer" img= {require('../../assets/customer2.png')}  />
                  </Grid>
                  <Grid item xs={12} marginBottom={"3rem"} onClick={handleSubmitToOrders}>
                    <CardMUI title="Orders" img= {require('../../assets/order.png')}  />
                  </Grid>
                  <Grid item xs={12} marginBottom={"3rem"} onClick={handlePolicy}>
                    <CardMUI title="Policy" />
                  </Grid>
                </Grid>
              </Grid>

            <Grid item xs={3.5} sx={{background: "#F4F4F4", maxHeight: "320px", maxWidth: "200px" , borderRadius:3}}>
            <Typography variant="h4" marginLeft={"2rem"} marginTop={"2rem"}>
              Inbox
            </Typography>
              <List sx={{ width: '100%', maxWidth: 360, bgcolor: 'E0E0E0', marginLeft: '1rem' }}>
                  <Divider  component="li" />
                  <ListItemMUI alt = "M" title="Mark Hazelwood -- " subject = "Lunch on the weekend?" text="kesa hai bro?...."/>
                  <Divider variant="inset" component="li" />
                  <ListItemMUI alt = "K" title="Glenn Maxwell -- " subject = "Cricket Training?" text="Boss aarha hai bro"/>
                  <Divider variant="inset" component="li" />
                  <ListItemMUI alt = "A" title="Muhammad Aamir -- " subject = "Need Money" text="No ball karwaon?...."/>
                  <Divider variant="inset" component="li" />
              </List>
            </Grid>
              
        </Grid>

        </Box>     
      </Box>
        

    </div>
  )
}

export default Dashboard
