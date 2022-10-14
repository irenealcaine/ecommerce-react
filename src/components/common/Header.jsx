import { AppBar, Divider, IconButton, List, ListItem, ListItemButton, ListItemText, Toolbar, Typography } from '@mui/material'
import { Container } from '@mui/system';
import React from 'react'
import { makeStyles } from 'tss-react/mui';
import { AccountCircleOutlined, FavoriteBorder, ShoppingCart } from '@mui/icons-material'

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
            variant='h4'
            style={{ fontFamily: 'Caveat' }}
          >
            E-commerce
          </Typography>

          <Divider />
          <nav aria-label="secondary mailbox folders">
            <List style={{ display: 'flex' }}
            >
              <ListItem disablePadding>
                <ListItemButton>
                  <ListItemText primary="Catálogo" />
                </ListItemButton>
              </ListItem>
              <ListItem disablePadding>
                <ListItemButton component="a" href="#simple-list">
                  <ListItemText primary="Trending" />
                </ListItemButton>
              </ListItem>
              <ListItem disablePadding>
                <ListItemButton component="a" href="#simple-list">
                  <ListItemText primary="Opiniones" />
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
