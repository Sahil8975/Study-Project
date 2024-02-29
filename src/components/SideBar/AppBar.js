

import React from 'react';
import { useNavigate } from 'react-router-dom';
import Zoho from '../../assests/images/Zoho.png';
import AddCircleOutlineIcon from '@mui/icons-material/AddCircleOutline';
import SearchIcon from '@mui/icons-material/Search';
import NotificationsNoneIcon from '@mui/icons-material/NotificationsNone';
import LogoutIcon from '@mui/icons-material/Logout';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import { Tooltip } from '@mui/material';
import RenderComponents from '../RenderComponent/RenderComponent';
import { COMPONENTS } from '../../Utils/Constants';

function AppBar() {
  const navigate = useNavigate();
  const [logout, setLogout] = React.useState(false);
  const { TEXT_FIELD, ICON } = COMPONENTS;


  React.useEffect(() => {
    if (!localStorage.getItem('auth')) {
      navigate('/login');
    }
  }, [logout, navigate]);

  const logoutHandler = (e) => {
    e.preventDefault();
    localStorage.removeItem('email');
    localStorage.removeItem('password');
    localStorage.removeItem('auth');
    setLogout(true);
  };

  return (
    <nav className="navbar navbar-expand-lg bg-light" style={{ borderBottom: '1px solid #e9e9e9', marginTop: '1rem', marginBottom: '1rem' }}>
      <div className="container-fluid" style={{ justifyContent: 'flex-start', display: 'flex' }}>
        <img src={Zoho} alt="zohoLogo" style={{ height: '3rem' }} />
        <a className="navbar-brand" href="#" style={{ fontSize: '1.5rem', fontWeight: 'bold', marginLeft: '1rem' }}>
          People
        </a>
        <RenderComponents 
            metaData={{
              control: TEXT_FIELD,
              groupStyle: { display: 'block', marginLeft: 'auto'},
              key: 'searchBox',
              variant: 'outlined',
              label: 'Search Employee',
              endAdornmentIcon: <SearchIcon />,
              columnWidth: 3
            }}
          />
        <div style={{ marginLeft: '44rem' }}>
          <Tooltip title="Quick Add">
            <AddCircleOutlineIcon style={{ marginLeft: '-3rem', marginRight: '1rem' }} />
          </Tooltip>
          <Tooltip title="Notification">
            <NotificationsNoneIcon style={{ marginRight: '1rem' }} />
          </Tooltip>
          <Tooltip title="Logout">
            <LogoutIcon style={{ marginRight: '1rem' }} onClick={logoutHandler}/>
          </Tooltip>
          {/* <button onClick={logoutHandler}>Logout</button> */}
        </div>
      </div>
    </nav>
  );
}

export default AppBar;


