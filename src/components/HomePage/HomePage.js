import React from 'react';
import { Grid, Typography } from '@mui/material';
import dashboard from '../../assests/images/dashboard.png'
function HomePage() {
  return (
    <Grid container spacing={3}>
      <Grid item xs={12}>
        <Typography variant="h4" align="center">
        <img src={dashboard} alt="dashboard" width="100%" height="100%" />
        </Typography>
      </Grid>
    </Grid>
  );
}

export default HomePage;
