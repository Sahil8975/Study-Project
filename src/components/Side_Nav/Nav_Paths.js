import React from 'react';
import { Grid } from '@mui/material';
import Sidebar from '../SideBar/Sidebar';
import AppBar from '../SideBar/AppBar';
import RoutePaths from '../../Routes/RoutePath';
import { useLocation } from 'react-router-dom';

function Nav_Paths() {
  const location = useLocation();
  const showSidebar = !location.pathname.includes('/login');
  const showAppBar = location.pathname !== '/login'; // Exclude exact '/login' path

  return (
    <>
      {showAppBar && <AppBar />}
      <Grid container style={{ display: 'flex', alignItems: 'flex-start' }}>
        <Grid item xs={12}>
          <Grid container spacing={2}>
            {showSidebar && (
              <Grid item xs={0.8}>
                <Sidebar />
              </Grid>
            )}
            <Grid item xs={showSidebar ? 11.2 : 12} sx={{ padding: '0.5rem' }}>
              <RoutePaths />
            </Grid>
          </Grid>
        </Grid>
      </Grid>
    </>
  );
}

export default Nav_Paths;

