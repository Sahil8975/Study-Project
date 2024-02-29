import React from 'react';
import { Grid, Typography,Tooltip } from '@mui/material';
import Zoho from '../../assests/images/Zoho.png';
import Page from '../../assests/images/page coming soon.png';
import { ROUTES } from '../../Routes/Path';
import RenderComponent from '../RenderComponent/RenderComponent';
import { useNavigate } from 'react-router-dom';
import { COMPONENTS } from '../../Utils/Constants';





function Services() {
    const { HOME } = ROUTES;
    const {  BUTTON } = COMPONENTS;
    const navigate = useNavigate();



  return (
    <Grid container spacing={3}>
      <Grid item xs={12}>
        <Typography variant="h4" align="center" marginBottom={'3rem'}>
          Service Page
        </Typography>
        <Typography variant="subtile" marginLeft={'42rem'}>
            Page is under construction
        </Typography>
        <img src={Page} alt="zohoLogo" style={{ height: '14rem', marginLeft:'29rem' }} />
        <Tooltip title="Click to fetch new Signatory Details">
            <RenderComponent
              metaData={{
                control: BUTTON,
                variant: 'outlined',
                color: 'success',
                size: 'small',
                tooltipTitle: 'Home page',
                groupStyle: { marginLeft: '47%', marginTop:'2rem' },
                btnTitle: 'Go to Home',
                handleClickButton: () => navigate(HOME),
                columnWidth: 1
              }}
            />
          </Tooltip>
      </Grid>
    </Grid>
  );
}

export default Services;
