import { AppBar, Divider, IconButton, List, ListItem, ListItemButton, ListItemText, Menu, MenuItem, Toolbar, Typography } from '@mui/material'
import { Container } from '@mui/system';
import React from 'react'
import { makeStyles } from 'tss-react/mui';
import { AccountCircleOutlined, FavoriteBorder, ShoppingBagTwoTone, ShoppingCart } from '@mui/icons-material'

const Header = () => {

  const useStyles = makeStyles()(() => {
    return {
      banner: {

      },
    };
  })

  const { classes } = useStyles();

  return (
    <AppBar position='static'>
      <Container>
        <Toolbar style={{ dislay: 'flex', justifyContent: 'space-between' }}>

          <Typography
            variant='h6'
          >
            Nombre
          </Typography>

          <Divider />
          <nav aria-label="secondary mailbox folders">
            <List style={{ display: 'flex' }}>
              <ListItem disablePadding>
                <ListItemButton>
                  <ListItemText primary="Trash" />
                </ListItemButton>
              </ListItem>
              <ListItem disablePadding>
                <ListItemButton component="a" href="#simple-list">
                  <ListItemText primary="Spam" />
                </ListItemButton>
              </ListItem>
            </List>
          </nav>

          <div>
            <IconButton>
              <ShoppingCart />
            </IconButton>
            <IconButton>
              <FavoriteBorder />
            </IconButton>
            <IconButton>
              <AccountCircleOutlined />
            </IconButton>
          </div>




        </Toolbar>
      </Container>
    </AppBar >
  )
}

export default Header
