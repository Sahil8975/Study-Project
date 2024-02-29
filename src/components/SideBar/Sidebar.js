// import React, { useState } from 'react';
// import { Link } from 'react-router-dom';
// import { Box } from '@mui/material';
// import { motion } from 'framer-motion';
// import HomeIcon from '@mui/icons-material/Home';
// import PermIdentityIcon from '@mui/icons-material/PermIdentity';
// import EventAvailableIcon from '@mui/icons-material/EventAvailable';
// import AccessTimeIcon from '@mui/icons-material/AccessTime';
// import CampaignIcon from '@mui/icons-material/Campaign';
// import MoreHorizIcon from '@mui/icons-material/MoreHoriz';
// import PieChartOutlineIcon from '@mui/icons-material/PieChartOutline';
// import GrainIcon from '@mui/icons-material/Grain';
// import { ROUTES } from '../../Routes/Path';

// function Sidebar() {
//   const { PROJECTS } = ROUTES;
//   const [isOpen, setIsOpen] = useState(true);

//   const handleToggle = () => {
//     setIsOpen(!isOpen);
//   };

//   const sidebarVariants = {
//     open: {
//       width: '15rem',
//       transition: {
//         type: 'spring',
//         stiffness: 200,
//         damping: 20,
//         staggerChildren: 0.1,
//         delay: 0.1,
//       },
//     },
//     closed: {
//       width: '3rem',
//       transition: {
//         type: 'spring',
//         stiffness: 200,
//         damping: 20,
//         staggerChildren: 0.1,
//         delay: 0.1,
//       },
//     },
//   };

//   const itemVariants = {
//     open: {
//       opacity: 1,
//       x: 0,
//     },
//     closed: {
//       opacity: 0,
//       x: -20,
//     },
//   };

//   return (
//     <Box
//       style={{
//         display: 'flex',
//         justifyContent: 'flex-start',
//         alignItems: 'center',
//         // background: '#1B1A47',
//         width: '100%',
//         height: '15rem',
//       }}
//       as={motion.div}
//       variants={sidebarVariants}
//       animate={isOpen ? 'open' : 'closed'}
//     >
//       <motion.div
//         style={{
//           position: 'absolute',
//           top: '10px',
//           right: '10px',
//           zIndex: 10,
//         }}
//         onClick={handleToggle}
//         animate={{ rotate: isOpen ? 0 : 180 }}
//         transition={{ type: 'spring', stiffness: 260, damping: 20 }}
//       >
//         <MoreHorizIcon fontSize="large" />
//       </motion.div>
//       <ul
//         className="nav flex-column"
//         style={{ display: isOpen ? 'flex' : 'none', flexDirection: 'column' }}
//       >
//         <motion.li
//           className="nav-item"
//           variants={itemVariants}
//           whileHover={{ scale: 1.1 }}
//           whileTap={{ scale: 0.9 }}
//         >
//           <HomeIcon className="iconStyles" />
//           <Link to="/" className="nav-link active links">
//             Home
//           </Link>
//         </motion.li>
//           {/* <li className="nav-item">
//             <PermIdentityIcon className="iconStyles" />
//             <Link to="/" className="nav-link links">
//               Self-service
//             </Link>
//           </li> */}
//           {/* <li className="nav-item">
//             <EventAvailableIcon className="iconStyles" />
//             <Link to="/" className="nav-link links">
//               Attendance
//             </Link>
//           </li> */}
//             <motion.li
//           className="nav-item"
//           variants={itemVariants}
//           whileHover={{ scale: 1.1 }}
//           whileTap={{ scale: 0.9 }}
//         >
//             <AccessTimeIcon className="iconStyles" />
//             <Link to={PROJECTS} className="nav-link links">
//               Time Tracker
//             </Link>
//         </motion.li>
//           {/* <li className="nav-item">
//             <MoreHorizIcon className="iconStyles" />
//             <Link to="/" className="nav-link links">
//               More
//             </Link>
//           </li> */}
//           {/* <li className="nav-item">
//             <PieChartOutlineIcon className="iconStyles" />
//             <Link to="/" className="nav-link links">
//               Reports
//             </Link>
//           </li> */}
//         </ul>
//       </Box>
    
//   );
// }

// export default Sidebar;


// import React, { useState } from 'react';
// import { Link } from 'react-router-dom';
// import { Box } from '@mui/material';
// import { motion } from 'framer-motion';
// import HomeIcon from '@mui/icons-material/Home';
// import PermIdentityIcon from '@mui/icons-material/PermIdentity';
// import EventAvailableIcon from '@mui/icons-material/EventAvailable';
// import AccessTimeIcon from '@mui/icons-material/AccessTime';
// import CampaignIcon from '@mui/icons-material/Campaign';
// import MoreHorizIcon from '@mui/icons-material/MoreHoriz';
// import PieChartOutlineIcon from '@mui/icons-material/PieChartOutline';
// import GrainIcon from '@mui/icons-material/Grain';
// import DehazeIcon from '@mui/icons-material/Dehaze';
// import { ROUTES } from '../../Routes/Path';
// import { SidebarMenu } from './SidebarMenu';
// import './Sidebar.css';
// export default function Sidebar() {
//     const { PROJECTS } = ROUTES;

//     const [sidebar, setSidebar] = useState(false);

//     const showSidebar = () => setSidebar(!sidebar);
   
//   return (
//     <div>
//   <div value={{ color: '#fff' }}>
//         <div className='navbar'>
//           <Link to='#' className='menu-bars'>
//             <DehazeIcon onClick={showSidebar} />
//           </Link>
//         </div>
//         <nav className={sidebar ? 'nav-menu active' : 'nav-menu'}>
//           <ul className='nav-menu-items' onClick={showSidebar}>
//             <li className='navbar-toggle'>
//               <Link to='#' className='menu-bars'>
//                 <DehazeIcon />
//               </Link>
//             </li>
            // {SidebarMenu.map((item, index) => {
//               return (
//                 <li key={index} className={item.cName}>
//                   <Link to={item.path}>
//                     {item.icon}
//                     <span>{item.title}</span>
//                   </Link>
//                 </li>
//               );
//             })}
//           </ul>
//         </nav>
//       </div>
//   </div>
//   )
// }


import React, { useState } from 'react';
// import './index.css';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import HomeIcon from '@mui/icons-material/Home';
import PermIdentityIcon from '@mui/icons-material/PermIdentity';
import EventAvailableIcon from '@mui/icons-material/EventAvailable';
import AccessTimeIcon from '@mui/icons-material/AccessTime';
import CampaignIcon from '@mui/icons-material/Campaign';
import MoreHorizIcon from '@mui/icons-material/MoreHoriz';
import PieChartOutlineIcon from '@mui/icons-material/PieChartOutline';
import GrainIcon from '@mui/icons-material/Grain';
import DehazeIcon from '@mui/icons-material/Dehaze';
import { ROUTES } from '../../Routes/Path';
import { SidebarMenu } from './SidebarMenu';
import './Sidebar.css';



const Sidebar = () => {
  const { PROJECTS } = ROUTES;
  const [show, setShow] = useState(false);

  const toggleSidebar = () => {
    setShow(!show);
  };

  const closeSidebar = () => {
    setShow(false);
  };

  const openSidebar = () => {
    setShow(true);
  };

  return (
    <main className={show ? 'space-toggle' : null}>
      <aside className={`sidebar ${show ? 'show' : null}`}>
        <nav className='nav'>
          {/* <div>
            <Link to='/' className='nav-logo' onClick={show ? closeSidebar : openSidebar}>
              <i className={`fas fa-home-alt nav-logo-icon`}><GrainIcon/></i>
              <span className='nav-logo-name'>Services</span>
            </Link> */}
            <div className='nav-list'>
            <Link to='/' className='nav-logo' onClick={show ? closeSidebar : openSidebar}>
              <i className={`fas fa-home-alt nav-logo-icon`}><GrainIcon/></i>
              <span className='nav-logo-name'>Services</span>
            </Link>
              <Link to='/' className='nav-link'  onClick={show ? closeSidebar : openSidebar}>
              <i className='fas fa-hotel nav-link-icon'><HomeIcon /></i>
                <span className='nav-link-name'>Home</span>
              </Link>
              <Link to='/' className='nav-link'  onClick={show ? closeSidebar : openSidebar}>
                <i className='fas fa-hotel nav-link-icon'><PermIdentityIcon/></i>
                <span className='nav-link-name'>Self-service</span>
              </Link>
              <Link to={PROJECTS}  className='nav-link'  onClick={show ? closeSidebar : openSidebar}>
                <i className='fas fa-image nav-link-icon'><EventAvailableIcon /></i>
                <span className='nav-link-name'>Projects</span>
              </Link>
              <Link to='/' className='nav-link'  onClick={show ? closeSidebar : openSidebar}>
                <i className='fas fa-dollar-sign nav-link-icon'><CampaignIcon /></i>
                <span className='nav-link-name'>Announcement</span>
              </Link>
              <Link to='/' className='nav-link'  onClick={show ? closeSidebar : openSidebar}>
                <i className='fas fa-dollar-sign nav-link-icon'><MoreHorizIcon /></i>
                <span className='nav-link-name'>More</span>
              </Link>
              <Link to='/' className='nav-link'  onClick={show ? closeSidebar : openSidebar}>
                <i className='fas fa-dollar-sign nav-link-icon'><PieChartOutlineIcon /></i>
                <span className='nav-link-name'>Reports</span>
              </Link>
            </div>
          {/* </div> */}

          {/* <Link to='/logout' className='nav-link'  onClick={show ? closeSidebar : openSidebar}>
            <i className='fas fa-sign-out nav-link-icon'></i>
            <span className='nav-link-name'>Logout</span>
          </Link> */}
        </nav>
      </aside>

    </main>
  );
};

export default Sidebar;

