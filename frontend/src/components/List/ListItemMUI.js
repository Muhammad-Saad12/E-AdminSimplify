import React from 'react'
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import ListItemAvatar from '@mui/material/ListItemAvatar';
import Avatar from '@mui/material/Avatar';
import Typography from '@mui/material/Typography';

const ListItemMUI = (props) => {
  return (
   <div data-testid ="list">
    <ListItem alignItems="flex-start">
        <ListItemAvatar>
            <Avatar alt={props.alt} src="//" />
        </ListItemAvatar>
         <ListItemText
            primary={props.subject}
            secondary={
                <React.Fragment>
                <Typography
                    sx={{ display: 'inline' }}
                    component="span"
                    variant="body2"
                    color="text.primary"
                    >
                        {props.title}
                </Typography>
                {props.text}
            </React.Fragment>
            }
            />
    </ListItem>
   </div>
  )
}

export default ListItemMUI