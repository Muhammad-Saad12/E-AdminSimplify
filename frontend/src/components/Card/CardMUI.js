import React from 'react'
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
// import logo from '../../assets/seller2.png'

const CardMUI = (props) => {
  return (
    <div data-testid ="card">
      <Card sx={{ width: 345 }}>
        <CardMedia
          component="img"
          height="170"
          image={props.img}
          alt="Need a pic here"
        />
        <CardContent sx={{ width: 345, background: '#DFF6FF' }}>
          <Typography align='center' marginRight={"1rem"} variant="h4" >
            {props.title}
          </Typography>
        </CardContent>

      </Card>
    </div>
  ) 
}

export default CardMUI