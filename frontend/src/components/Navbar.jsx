import React from 'react';
import { AppBar, Toolbar, Typography, Button, IconButton, Drawer, List, ListItem, ListItemText, Box } from '@mui/material';
import { FaHotel } from 'react-icons/fa';
import MenuIcon from '@mui/icons-material/Menu';
import { Link } from 'react-router-dom';

function Header() {
  const [drawerOpen, setDrawerOpen] = React.useState(false);

  const navLinks = [
    { label: 'Home', path: '/' },
    { label: 'Hotels', path: '/hotels' },
    { label: 'Contact', path: '/contact' },
  ];

  return (
    <>
      <AppBar position="static" color="primary" sx={{ mb: 2 }}>
        <Toolbar>
          <FaHotel size={32} style={{ marginRight: 12 }} />
          <Typography variant="h6" sx={{ flexGrow: 1 }}>
            Hotel Booking
          </Typography>
          <Box sx={{ display: { xs: 'none', md: 'block' } }}>
            {navLinks.map(link => (
              <Button
                key={link.label}
                color="inherit"
                component={Link}
                to={link.path}
                sx={{ mx: 1 }}
              >
                {link.label}
              </Button>
            ))}
          </Box>
          <IconButton
            color="inherit"
            edge="end"
            sx={{ display: { md: 'none' } }}
            onClick={() => setDrawerOpen(true)}
          >
            <MenuIcon />
          </IconButton>
        </Toolbar>
      </AppBar>
      <Drawer anchor="right" open={drawerOpen} onClose={() => setDrawerOpen(false)}>
        <List>
          {navLinks.map(link => (
            <ListItem button key={link.label} component={Link} to={link.path} onClick={() => setDrawerOpen(false)}>
              <ListItemText primary={link.label} />
            </ListItem>
          ))}
        </List>
      </Drawer>
    </>
  );
}

export default Header;