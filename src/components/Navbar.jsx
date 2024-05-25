import { AppBar, Box, Button, IconButton, Toolbar, Typography } from '@mui/material'
import React from 'react'

import AppleIcon from '@mui/icons-material/Apple';
import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <div>
      <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static">
        <Toolbar>
          <IconButton
            size="large"
            edge="start"
            color="inherit"
            aria-label="menu"
            sx={{ mr: 2 }}
          >
            <AppleIcon />
          </IconButton>
          <Typography variant="h4" component="div" sx={{ flexGrow: 1 }}>
          Blog Application
          </Typography>
          <Button color="inherit"><Link to='/'style={{color:"white"}}>HOME</Link></Button>
          <Button color="inherit"> <Link to='/add'style={{color:"white"}}>ADD</Link></Button>
          
        </Toolbar>
      </AppBar>
    </Box>
    <br /><br />
    </div>
  )
}

export default Navbar

