import React from 'react'
import Box from "@mui/material/Box";
import LinearProgress, { linearProgressClasses } from '@mui/material/LinearProgress';
import { styled } from '@mui/material/styles';
import PropTypes from "prop-types";
import { useState, useEffect  } from 'react'

import Typography from "@mui/material/Typography";


function LinearProgressWithLabel(props) {
    return (
      <Box sx={{ display: "flex", alignItems: "center" }}>
        <Box sx={{ width: "100%", mr: 1 }}>
          <LinearProgress
            variant="determinate"
            sx={{
              height: 20,
              borderRadius: 8,
              backgroundColor: "f0f0f0f",
              "& .MuiLinearProgress-bar": {
                backgroundColor: "#2E3B55"
              }
            }}
            {...props}
          />
        </Box>
        
      </Box>
    );
  }

  LinearProgressWithLabel.propTypes = {
    /**
     * The value of the progress indicator for the determinate and buffer variants.
     * Value between 0 and 100.
     */
    value: PropTypes.number.isRequired
  };



const Progressbar = (props) => {
    const [progtext, setprogtest] = useState('');

    // function renderProcessing(props) {
    //   return <Typography variant="h4" align='center' color="#2E3B55 "> The Order is Processing!</Typography>
    // }
    // function renderDelivering(props) {
    //   return <Typography variant="h4" align='center' color="#2E3B55 "> The Order is Delivering!</Typography>
    // }
    // function renderDelivered(props) {
    //   return <Typography variant="h4" align='center' color="#2E3B55 "> The Order is Delivered!</Typography>
    // }

    // function renderText(props) {

    // }
    
    

    useEffect(() =>{
    if(props.prog == 0){
        setprogtest("Processing")
    }
    else if(props.prog == 50){
        setprogtest("Delivering")
    }
    else if(props.prog == 100){
        setprogtest("Delivered")
    }
   
    },[props.prog])

  return (
    <div data-testid = "progbar">
        <Box sx={{ width: 1200, marginTop:'3rem' }}>
            <LinearProgressWithLabel value={props.prog} />   
        </Box>
        <Box sx={{ minWidth: 35, width:1200, marginTop:'2.6rem' }}>
            <Typography variant="h4" align='center' color="#2E3B55 "> The Order is {progtext}!</Typography>
        </Box>
    </div>
  )
}

export default Progressbar