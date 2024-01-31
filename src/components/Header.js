import { AppBar, Box, Drawer, IconButton, Toolbar, Typography, useMediaQuery, useTheme } from "@mui/material";
import Image from "next/image";
import CustomButton from "./CustomButton";
import React, { useState } from 'react';
import MenuIcon from '@mui/icons-material/Menu';

export default function Header(props) {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('sm'));
  const [drawerOpen, setDrawerOpen] = useState(false);

  const handleDrawerToggle = () => {
    setDrawerOpen(!drawerOpen);
  };

  const drawer = (
    <Drawer anchor="right" open={drawerOpen} onClose={handleDrawerToggle}>
      <Box display="flex" flexDirection="column" p={3}>
        {/* Your navigation links */}
        <CustomButton variant="text" backgroundColor="#ffffff" textColor="#000000" borderRadius={10}>Home</CustomButton>
        <CustomButton variant="text" backgroundColor="#ffffff" textColor="#000000" borderRadius={10}>About</CustomButton>
        <CustomButton variant="text" backgroundColor="#ffffff" textColor="#000000" borderRadius={10}>Contact</CustomButton>
        <CustomButton variant="text" backgroundColor="#ffffff" textColor="#000000" borderRadius={10}>Privacy</CustomButton>
        <CustomButton variant="text" backgroundColor="#ffffff" textColor="#000000" borderRadius={10}>Terms</CustomButton>
        <CustomButton variant="contained" borderRadius={20}>Login</CustomButton>
      </Box>
    </Drawer>
  );

  return (
    <AppBar position="static" elevation={0} color="inherit">
      <Toolbar>
        <Box
          display="flex"
          justifyContent="space-between"
          flexGrow={1}
          alignItems="center"
        >
          <Box display="flex">
            <Image height={20} width={20} src="/assets/icons/logo.svg" />
            <Typography variant="h6" marginLeft={1} color={'secondary'}>
              Br@in
            </Typography>
          </Box>
          {isMobile ? (
            <>
              <IconButton edge="start" color="primary" aria-label="menu" onClick={handleDrawerToggle}>
                <MenuIcon color="action" />
              </IconButton>
              {drawer}
            </>
          ) : (
            <Box display="flex" alignItems="center">
              {/* Your navigation links */}
              <CustomButton variant="text" style={{ marginLeft: 25 }} backgroundColor="#ffffff" textColor="#000000" borderRadius={10}>Home</CustomButton>
              <CustomButton variant="text" style={{ marginLeft: 25 }} backgroundColor="#ffffff" textColor="#000000" borderRadius={10}>About</CustomButton>
              <CustomButton variant="text" style={{ marginLeft: 25 }} backgroundColor="#ffffff" textColor="#000000" borderRadius={10}>Contact</CustomButton>
              <CustomButton variant="text" style={{ marginLeft: 25 }} backgroundColor="#ffffff" textColor="#000000" borderRadius={10}>Privacy</CustomButton>
              <CustomButton variant="text" style={{ marginLeft: 25 }} backgroundColor="#ffffff" textColor="#000000" borderRadius={10}>Terms</CustomButton>
              <CustomButton variant="contained" borderRadius={20} style={{ marginLeft: 25 }}>Login</CustomButton>
            </Box>
          )}
        </Box>
      </Toolbar>
    </AppBar>
  );
}