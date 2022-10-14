import { List, ListItem, ListItemButton, ListItemText, Typography } from '@mui/material'
import React from 'react'

const SideBar = () => {
  return (
    <div style={{ width: '30%', backgroundColor: '#adadaddd' }}>
      <Typography sx={{ mt: 2, mx: 6 }} variant="h6">
        Categorías
      </Typography>
      <List>
        <ListItem>
          <ListItemButton component="a" href="#simple-list">
            <ListItemText primary="Ropa" />
          </ListItemButton>
        </ListItem>
        <ListItem>
          <ListItemButton component="a" href="#simple-list">
            <ListItemText primary="Electrónica" />
          </ListItemButton>
        </ListItem>
        <ListItem>
          <ListItemButton component="a" href="#simple-list">
            <ListItemText primary="Libros" />
          </ListItemButton>
        </ListItem>
        <ListItem>
          <ListItemButton component="a" href="#simple-list">
            <ListItemText primary="Jardinería" />
          </ListItemButton>
        </ListItem>
        <ListItem>
          <ListItemButton component="a" href="#simple-list">
            <ListItemText primary="Otros" />
          </ListItemButton>
        </ListItem>
      </List>
    </div>
  )
}

export default SideBar
