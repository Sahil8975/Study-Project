import React from 'react';
import * as FaIcons from 'react-icons/fa';
import * as AiIcons from 'react-icons/ai';
import * as IoIcons from 'react-icons/io';
import HomeIcon from '@mui/icons-material/Home';
import PermIdentityIcon from '@mui/icons-material/PermIdentity';
import EventAvailableIcon from '@mui/icons-material/EventAvailable';
import AccessTimeIcon from '@mui/icons-material/AccessTime';
import CampaignIcon from '@mui/icons-material/Campaign';
import MoreHorizIcon from '@mui/icons-material/MoreHoriz';
import PieChartOutlineIcon from '@mui/icons-material/PieChartOutline';
import GrainIcon from '@mui/icons-material/Grain';
import { ROUTES } from '../../Routes/Path';

export const SidebarMenu = [   
  {
    title: 'Services',
    path: '/services',
    icon: <GrainIcon />,
    cName: 'nav-text'
  }, 
  {
    title: 'Home',
    path: '/',
    icon: <HomeIcon />,
    cName: 'nav-text'
  },
  {
    title: 'Self-service',
    path: '/selfservice',
    icon: <PermIdentityIcon/>,
    cName: 'nav-text'
  },
  {
    title: 'Projects',
    path: ROUTES.PROJECTS,
    icon: <EventAvailableIcon />,
    cName: 'nav-text'
  },
  {
    title: 'Announcement',
    path: '/announcement',
    icon: <CampaignIcon />,
    cName: 'nav-text'
  },
];