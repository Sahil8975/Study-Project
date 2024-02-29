// import React, { useEffect, useState } from 'react';
// import { useLocation, useNavigate } from 'react-router-dom';
// import { useSelector, useDispatch } from 'react-redux';
// import { Box, Grid, Typography } from '@mui/material';
// import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos';
// // import CloseIcon from '@mui/icons-material/Close';
// import { COMPONENTS } from '../../Utils/Constants';
// import RenderComponents from '../RenderComponent/RenderComponent';
// import { PROJECT_DETAILS,ADD_USERS,GET_ALL_PROJECT_HEAD  } from '../../Redux/Constants';
// import { ROUTES } from '../../Routes/Path';
// import { CLIENT, MANAGER, USERS, PROJECT_HEAD } from '../../Utils/ProjectData';
// import { addProject, getAllClients, getAllProjectHead, getAllProjectManagers, getAllUsers, updateProjects } from '../../services/projectService';
// import { APIS, API_V1 } from '../../Utils/apiList';
// import { isArray } from '../../Utils/Utils';

// function UpdateDetails() {

//   const navigate = useNavigate();
//   const clientData = useSelector((state) => state.ProjectDetails?.addProject);
//   const dispatch = useDispatch();
//   const { TEXT_FIELD, SELECT_BOX, BUTTON, TYPOGRAPHY, ICON, MULTI_SELECT_BOX } = COMPONENTS;
//   const { PROJECTS } = ROUTES;
//   const[allClients, setAllClients] = useState([])
//   const [projectHeads, setProjectHeads] = useState([]);
//   const [projectManagers, setProjectManagers] = useState([]);
//   const [error, setError] = useState(false);
//   const [projectName, setProjectName] = useState('');
//   const [user, setUser] = useState([])
//   const [payload, setPayload] = useState({
//     projectName:'',
//     clientId: 0,
//     projectHead: 0,
//     projectManager: 0,
//     // projectUser: [],
//     cost: 0,
//     rate:0,
//     projectDescription: '',
//     users:[]
//   });
//   const {state} = useLocation();
//   const {val} = state
//   console.log("----vall----",val)
// //   const updatedData = 0 // updated project data
// // const projectId = 0 // project id
//  // const result = await updateProjectDetails(projectId, updatedData);

//   const updatePayload = (pairs) => setPayload((prevPayload) => ({ ...prevPayload, ...pairs }));

//   // const handleActionDispatch = (type, data = []) => dispatch({ type, data });

//   const handleChangeData = (key, val) => {
//     console.log("key",key,val)
//     if (key) {
//       const updateFields = { [key]: val };
//       // if (key === 'projectHead') {
//         //   updateFields.projectHead = val;
//       // } else if (key === 'projectManager') {
//       //   updateFields.projectManager = val;
//       // } else if (key === 'cost') {
//       //   updateFields.cost = parseFloat(val);
//       // } else if (key === 'projectDescription') {
//       //   updateFields.projectDescription = val;
//       // }
//       updatePayload({...updateFields});
//     }
//   };
//   console.log("payload", payload)
  
  

//   const projectInfo = [
//     {
//       control: TYPOGRAPHY,
//       groupStyle: {
//         height: '3rem',
//         display: 'flex',
//         justifyContent: 'flex-start',
//         alignItems: 'end'
//       },
//       isRequired: true,
//       key: 'projectName',
//       label: 'Project Name',
//       columnWidth: 3
//     },
//     {
//       control: TYPOGRAPHY,
//       groupStyle: {
//         height: '3rem',
//         display: 'flex',
//         justifyContent: 'flex-start',
//         alignItems: 'end'
//       },
//       isRequired: true,
//       key: 'currencyLabel',
//       label: 'Client Name',
//       columnWidth: 3
//     },
//     {
//         control: TYPOGRAPHY,
//         groupStyle: {
//           height: '3rem',
//           display: 'flex',
//           justifyContent: 'flex-start',
//           alignItems: 'end'
//         },
//         key: 'cost',
//         label: 'Project Cost',
//         columnWidth: 3
//       },
//         {
//         control: TYPOGRAPHY,
//         groupStyle: {
//           height: '3rem',
//           display: 'flex',
//           justifyContent: 'flex-start',
//           alignItems: 'end'
//         },
//         key: 'rate',
//         label: 'Project Rate',
//         columnWidth: 3
//       },
//     {
//       control: TYPOGRAPHY,
//       groupStyle: {
//         height: '3rem',
//         display: 'flex',
//         justifyContent: 'flex-start',
//         alignItems: 'end'
//       },
//       isRequired: true,
//       key: '',
//       label: 'Project Head',
//       columnWidth: 3
//     },
//     {
//         control: TYPOGRAPHY,
//         groupStyle: {
//           height: '3rem',
//           display: 'flex',
//           justifyContent: 'flex-start',
//           alignItems: 'end'
//         },
//         isRequired: true,
//         key: '',
//         label: 'Project Manager',
//         columnWidth: 3.5
//       },
//       {
//         control: TYPOGRAPHY,
//         groupStyle: {
//           height: '3rem',
//           display: 'flex',
//           justifyContent: 'flex-start',
//           alignItems: 'end'
//         },
//         isRequired: true,
//         key: '',
//         label: 'Project User',
//         columnWidth: 3
//       },
//       {
//         control: TYPOGRAPHY,
//         groupStyle: {
//           height: '3rem',
//           display: 'flex',
//           justifyContent: 'flex-start',
//           alignItems: 'end'
//         },
//         key: '',
//         label: 'Description',
//         columnWidth: 3
//       },
//   ];



//   const projectInputs = [
//     {
//       control: TEXT_FIELD,
//       key: 'projectName',
//       variant: 'standard',
//       label: 'Project',
//       isError: error && !payload.projectName,
//       helperText: error && 'Please fill this field',
//       columnWidth: 5  
//     },
//     {
//       control: SELECT_BOX,
//       select: true,
//       variant: 'standard',
//       groupStyle: { marginTop: '0.5rem' },
//       key: 'clientId',
//       label: 'Select Clients',
//       options: allClients,
//       isSelecteAllAllow: false,
//       isError: error && !payload.clientId,
//       helperText: error && 'Please fill this field',
//       columnWidth: 5      
//     },
//     {
//         control: TEXT_FIELD,
//         key: 'cost',
//         variant: 'standard',
//         label: 'Project Cost',
//         isError: error && !payload.cost,
//         helperText: error && 'Please fill this field',
//         columnWidth: 5        
//     },
//      {
//         control: TEXT_FIELD,
//         key: 'rate',
//         variant: 'standard',
//         label: 'Project Rate',
//         isError: error && !payload.rate,
//         helperText: error && 'Please fill this field',
//         columnWidth: 5        
//     },
//     {
//       control: SELECT_BOX,
//       select: true,
//       variant: 'standard',
//       groupStyle: { marginTop: '0.5rem' },
//       key: 'projectHead',
//       label: 'Project Head',
//       options: projectHeads,
//       isSelecteAllAllow: false,
//       isError: error && !payload.projectHead,
//       helperText: error && 'Please fill this field',
//       columnWidth: 5    
//     },
//     {
//         control: SELECT_BOX,
//         select: true,
//         variant: 'standard',
//         groupStyle: { marginTop: '0.5rem' },
//         key: 'projectManager',
//         label: 'Project Manager',
//         select: true,
//         options: projectManagers,
//         isSelecteAllAllow: false,
//         isError: error && !payload.projectManager,
//         helperText: error && 'Please fill this field',
//         columnWidth: 5    
//       },
//       {
//         control: MULTI_SELECT_BOX,
//         select: true,
//         variant: 'standard',
//         groupStyle: { marginTop: '0.5rem' },
//         key: 'users',
//         // label: 'Project User',
//         options: user,
//         isSelecteAllAllow: false,
//         maxMultipleOptions: 1,
//         controlStyle: { height: '2rem' },
//         isError: error && !payload.users,
//         helperText: error && 'Please fill this field',
//         columnWidth: 5
//       },
//       {
//         control: TEXT_FIELD,
//         key: 'projectDescription',
//         variant: 'standard',
//         label: 'Description',
//         isError: error && !payload.projectDescription,
//         helperText: error && 'Please fill this field',
//         columnWidth: 5   
//       },
//   ];

//   const actionButtons = [
//     {
//       control: BUTTON,
//       // groupStyle: { marginRight: '1rem' },
//       color: 'success',
//       btnTitle: 'Update',
//       handleClickButton: () => updateProjectDetails(val.id),
//       columnWidth: 0.8
//     },
//     {
//       control: BUTTON,
//       // groupStyle: { marginRight: '1rem' },
//       color: 'error',
//       btnTitle: 'Cancel',
//       handleClickButton: () =>navigate(PROJECTS),
//       columnWidth: 0.8
//     }
//   ];

//   const topComponents = [
//     {
//       control: ICON,
//       iconName: <ArrowBackIosIcon />,
//       // groupStyle: { paddingTop: '0rem', marginLeft: '0.6rem' },
//       color: 'primary',
//       handleClickIcon: () => navigate(PROJECTS),
//       columnWidth: 0.5
//     },
//     {
//       control: TYPOGRAPHY,
//       groupStyle: {
//         height: '3rem',
//         display: 'flex',
//         justifyContent: 'flex-start',
//         fontWeight:'bold'
//       },
//       key: 'addClientLabel',
//       label: 'Update Project',
//       columnWidth: 1
//     },
//     // {
//     //   control: ICON,
//     //   iconName: <CloseIcon />,
//     //   groupStyle: { marginLeft: '70rem' },
//     //   color: 'error',
//     //   handleClickIcon: () => navigate(PROJECTS),
//     //   columnWidth: 0.5
//     // }
//   ];

//   const findData=()=>{
//     setPayload({
//     id:val.id,
//     clientId: val.clientId,
//     cost: val.cost,
//     projectDescription: val.projectDescription,
//     projectHead: val.projectHead,
//     projectManager: val.projectManager,
//     projectName:val.projectName,
//     rate: val.rate,
//     users: val.users,
// });
//   }
// // console.log("+++++=", val.projectManager)
// console.log("users", val)
  
//   // useEffect(()=>{
//   //   if(state)
//   //   console.log("location.state",state)
//   //   setPayload({
//   //     projectHead:val.projectHead
//   //   })
//   // })

//   useEffect(()=>{
//     findData()
//   },[])

//   const getAllClientsList = async () => {
//     const res = await getAllClients(`${API_V1}/${APIS.GET_ALL_CLIENTS}`);
//     console.log("res", res)
//     setAllClients(res);
//   };

//   const getAllProjectHeadList = async () => {
//     const res = await getAllProjectHead(`${API_V1}/${APIS.GET_ALL_PROJECT_HEAD}`);
//     console.log("getAllProjectHead",res)
//     setProjectHeads(res)
//     // dispatch({ type: ADD_USERS, data: res?.data || [] });
//     // handleActionDispatch(GET_ALL_PROJECT_HEAD, res?.data);

//   };

//   const getAllProjectManagersList = async (userId) => {
//     const res = await getAllProjectManagers(`${API_V1}/${APIS.GET_ALL_PROJECT_MANAGERS}`);
//     console.log("res",res)
//     setProjectManagers(res)
//     // dispatch({ type: ADD_USERS, data: res?.data || [] });
//   };

//   const getAllUsersList = async (userId) => {
//     const res = await getAllUsers(`${API_V1}/${APIS.GET_ALL_USERS}`);
//     console.log("res",res)
//     setUser(res)
//     // dispatch({ type: ADD_USERS, data: res?.data || [] });
//     console.log("getAllUsersList", res)
//   };

//   const updateProjectDetails = async (id, data) => {
//     // const userIds = payload && Array.isArray(payload.users) ? payload.users.map((itm) => itm.id) : [];
//     const userIds = data && Array.isArray(data.users) ? data.users.map((itm) => parseInt(itm.id)) : [];
//     // const userIds = data && Array.isArray(data.users) ? data.users.map((itm) => itm.id) : [];
//     console.log("id", id)
//     const updateData = {
//       projectName:payload?.projectName,
//       clientId: parseInt(payload?.clientId),
//       projectHead:parseInt( payload?.projectHead),
//       projectManager: parseInt( payload?.projectManager),
//       users:userIds,
//       cost:parseFloat( payload?.cost),
//       projectDescription: payload?.projectDescription,    
//     };
//     const res = await updateProjects(`${API_V1}${APIS.UPDATE_PROJECT}`, updateData);
//     console.log("update", res)
//     navigate(PROJECTS)
//   };
 
// useEffect(()=>{
//   getAllProjectManagersList();
//   getAllUsersList();
//   getAllClientsList();
//   getAllProjectHeadList();
// },[])


//   return (
//     <Grid container spacing={2}>
//       <Grid
//         item
//         xs={12}
//         style={{
//           backgroundColor: '#f9fafc',
//           display: 'flex',
//           justifyContent: 'flex-start',
//           alignItems: 'center',
//           borderBottom: '1px solid #e9e9e9'
//         }}
//       >
//         {topComponents?.map((comp, ind) => (
//           <RenderComponents key={ind} metaData={comp} ind={ind} />
//         ))}
//       </Grid>
//       <Grid item xs={12} style={{ height: '32rem', overflowY: 'scroll' }}>
//         <Box style={{ padding: '1.5rem', backgroundColor: 'white' }}>
//           <Grid container spacing={1}>
//             <Grid item xs={12} style={{ paddingLeft: '0.8rem' }}>
//               <Typography style={{ display:'flex', justifyContent:'centre', marginRight:'6rem',marginBottom:'1rem', fontWeight:'bold'}}>Update Details</Typography>
//             </Grid>
//             <Grid item xs={12} style={{ display: 'flex' }}>
//               <Grid item xs={4} style={{ paddingLeft: '1.5rem' }}>
//                 {projectInfo?.map((comp, ind) => (
//                   <RenderComponents key={ind} metaData={comp} ind={ind} />
//                 ))}
//               </Grid>
//               <Grid item xs={8}>
//                 {projectInputs?.map((comp, ind) => (
//                   <RenderComponents
//                     key={ind}
//                     metaData={comp}
//                     ind={ind}
//                     payload={payload}
//                     handleChange={handleChangeData}
//                   />
//                 ))}
//               </Grid>
//             </Grid>
//           </Grid>
//         </Box>
//       </Grid>
//       <Grid
//         item
//         xs={12}
//         style={{
//           display: 'flex',
//           justifyContent: 'flex-start',
//           alignItems: 'center',
//           padding: '1rem',
//           backgroundColor: '#f9fafc',
//           borderTop: '1px solid #e9e9e9'
//         }}
//       >
//         {actionButtons?.map((comp, ind) => (
//           <RenderComponents key={ind} metaData={comp} ind={ind} />
//         ))}
//       </Grid>
//     </Grid>
//   );
// }

// export default UpdateDetails;