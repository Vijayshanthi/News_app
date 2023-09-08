import React from 'react';
import { AppBar, Toolbar, Typography, Button, Box } from '@mui/material';
import { Link } from 'react-router-dom';

const Topbar = () => {
  return (
      <AppBar position="Fixed" style={{ backgroundColor: 'white' }}>
      <Toolbar>
        <Typography variant="h4" component="div" style={{ color: 'Black',fontWeight: 'bold' }}>
          PYRA NEWS      </Typography>
        <Box sx={{ marginLeft: 'auto' }}>
          <Button component={Link} to="/" color="inherit"  style={{ color: 'Black',fontWeight: 'bold' }}>Blog</Button>
          <Button component={Link} to="/links" color="inherit" style={{ color: 'Black', fontWeight: 'bold' }}>About</Button>
          <Button component={Link} to="/projects" color="inherit" style={{ color: 'Black', fontWeight: 'bold' }}>Links</Button>
          <Button component={Link} to="/about" color="inherit" style={{ color: 'Black', fontWeight: 'bold' }}>Projects</Button>
        </Box>
      </Toolbar>
    </AppBar>
  );
};

export default Topbar;
