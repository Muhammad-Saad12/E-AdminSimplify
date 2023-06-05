import React from 'react'
import Drawer from '@mui/material/Drawer';
import Box from '@mui/material/Box';
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
import InboxIcon from '@mui/icons-material/MoveToInbox';
import MailIcon from '@mui/icons-material/Mail';
import {useNavigate} from 'react-router-dom';


const drawerWidth = 240;

const Sidebar = () => {
  const navigate = useNavigate();

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

  const handleSubmitToProfile = (e) => { 
    e.preventDefault();
    
    navigate("/Profile");
  }

  const handlePolicy = (e) => { 
    e.preventDefault();
    
    navigate("/Policy");
  }
  const handleAnalytics = (e) => { 
    e.preventDefault();
    
    navigate("/Analytics");
  }


  return (
    <div data-testid="sidebar">
        <Drawer
        variant="permanent"
        sx={{
          width: drawerWidth,
          flexShrink: 0,
          
          [`& .MuiDrawer-paper`]: { width: drawerWidth, boxSizing: 'border-box' , backgroundColor: "#DFF6FF", },
        }}
      >
        <Toolbar  />
        <Box sx={{ overflow: 'auto' }}>
          <List>
            <ListItemButton>
            </ListItemButton>
            <ListItemButton>
            </ListItemButton>
            <ListItemButton>
            </ListItemButton>
            {/* {['Sellers', 'Customers',].map((text, index) => (
              <ListItem key={text} disablePadding>
                <ListItemButton>
                   <ListItemIcon>
                    {index % 2 === 0 ? <InboxIcon /> : <MailIcon />}
                  </ListItemIcon> 
                  <ListItemText primary={text} onClick = { text = "Sellers" ? (handleSubmitToCustomers) : (handleSubmitToCustomers) } />
                </ListItemButton>
              </ListItem>
            ))} */}
            <ListItem disablePadding>
              <ListItemButton data-testid = "button">
                <ListItemText primary= {"Sellers"} onClick= {handleSubmitToSellers} />
              </ListItemButton>
            </ListItem>
            <ListItem disablePadding>
              <ListItemButton>
                <ListItemText primary= {"Customers"} onClick= {handleSubmitToCustomers} />
              </ListItemButton>
            </ListItem>
            <ListItem disablePadding>
              <ListItemButton>
                <ListItemText primary= {"Orders"} onClick= {handleSubmitToOrders} />
              </ListItemButton>
            </ListItem>
            <ListItem disablePadding>
              <ListItemButton>
                <ListItemText primary= {"Policy"} onClick= {handlePolicy}/>
              </ListItemButton>
            </ListItem>
            <ListItem disablePadding>
              <ListItemButton>
                <ListItemText primary= {"Analytics"} onClick= {handleAnalytics}/>
              </ListItemButton>
            </ListItem>
          </List>

          <Divider />
          <List>
            {[ 'Profile', 'Settings'].map((text, index) => (
              <ListItem key={text} disablePadding >
                <ListItemButton >
                  <ListItemText primary={text} onClick = { text = "Profile" ? handleSubmitToProfile : handleSubmitToCustomers}  />
                </ListItemButton>
              </ListItem>
            ))}
          </List>
        </Box>
      </Drawer>
    </div>
  )
}

export default Sidebar