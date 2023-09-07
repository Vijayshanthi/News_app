import React from 'react';
import { AppBar, Toolbar, Typography, Button, Box } from '@mui/material';
import { Link } from 'react-router-dom';

const Topbar = () => {
  return (
    <AppBar position="static">
      <Toolbar>
        <Typography variant="h6" component="div">
          NORDIC ROSE        </Typography>
        <Box sx={{ marginLeft: 'auto' }}>
          <Button component={Link} to="/" color="inherit">Blog</Button>
          <Button component={Link} to="/links" color="inherit">Link</Button>
          <Button component={Link} to="/projects" color="inherit">Project</Button>
          <Button component={Link} to="/about" color="inherit">About</Button>
        </Box>
      </Toolbar>
    </AppBar>
  );
};

export default Topbar;
