import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { useLocation, useNavigate } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { Box, Grid, Typography } from '@mui/material';
import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos';
import { COMPONENTS,STATUS } from '../../Utils/Constants';
import RenderComponents from '../RenderComponent/RenderComponent';
import {  PROJECT_DETAILS, ADD_DETAILS, GET_CLIENT, GET_PROJECT_HEAD, GET_PROJECT_MANAGERS, GET_USERS } from '../../Redux/Constants';
import { ROUTES } from '../../Routes/Path';
import { CLIENT, MANAGER, USERS, PROJECT_HEAD } from '../../Utils/ProjectData';
import { addProject, addProjectData, getAllClients, getAllProjectHead, getAllProjectManagers, getAllUsers, updateProjects } from '../../services/projectService';
import { APIS, API_V1 } from '../../Utils/apiList';
import DialogComponent from '../Dailog/Dailog';
import { useEffect } from 'react';
import { isArray } from '../../Utils/Utils';
import axios from 'axios';

function AddProject() {
  // const navigate = useNavigate();
  const addProject = useSelector((state) => state.MasterDeatils);
  console.log("Details",addProject)
  const dispatch = useDispatch();
  const { TEXT_FIELD, SELECT_BOX, BUTTON, TYPOGRAPHY, ICON,MULTI_SELECT_BOX } = COMPONENTS;
  const { PROJECTS } = ROUTES;
  const [alertBox, setShowAlertBox] = useState({ open: false, title: '' });
  const[client, setClient] = useState([])
  const [error, setError] = useState(false);
  const [projectHeads, setProjectHeads] = useState([]);
  const [projectManagers, setProjectManagers] = useState([]);
  const [projectName, setProjectName] = useState('');
  const [user, setUsers] = useState([])
  const { state } = useLocation();
  const isUpdateMode = state && state.val;
  console.log("isUpdateMode",isUpdateMode)  
  const navigate = useNavigate();
  const [payload, setPayload] = useState({
    id:0,
    projectName:'',
    clientId: 0,
    projectHead: 0,
    projectManager: 0,
    cost: 0,
    rate:0,
    projectDescription: '',
    users:[]
  });

 

  
  const deleteMltSlctOptn = (key, userId, ind) => {
    const updatedUsers = payload.users.filter(user => user.id !== userId);
    setPayload(prevState => ({
      ...prevState,
      users: updatedUsers
    }));
  };

  const handleActionDispatch = (type, data = []) => {
    dispatch({ type, data });
  };
  const projectInfo = [
    {
      control: TYPOGRAPHY,
      groupStyle: {
        height: '3rem',
        display: 'flex',
        justifyContent: 'flex-start',
        alignItems: 'end'
      },
      isRequired: true,
      key: 'projectName',
      label: 'Project Name',
      columnWidth: 3
    },
    {
      control: TYPOGRAPHY,
      groupStyle: {
        height: '3rem',
        display: 'flex',
        justifyContent: 'flex-start',
        alignItems: 'end'
      },
      isRequired: true,
      key: 'currencyLabel',
      label: 'Client Name',
      columnWidth: 3
    },
    {
        control: TYPOGRAPHY,
        groupStyle: {
          height: '3rem',
          display: 'flex',
          justifyContent: 'flex-start',
          alignItems: 'end'
        },
        key: 'cost',
        label: 'Project Cost',
        columnWidth: 3
      },
        {
        control: TYPOGRAPHY,
        groupStyle: {
          height: '3rem',
          display: 'flex',
          justifyContent: 'flex-start',
          alignItems: 'end'
        },
        key: 'rate',
        label: 'Project Rate',
        columnWidth: 3
      },
    {
      control: TYPOGRAPHY,
      groupStyle: {
        height: '3rem',
        display: 'flex',
        justifyContent: 'flex-start',
        alignItems: 'end'
      },
      isRequired: true,
      key: '',
      label: 'Project Head',
      columnWidth: 3
    },
    {
        control: TYPOGRAPHY,
        groupStyle: {
          height: '3rem',
          display: 'flex',
          justifyContent: 'flex-start',
          alignItems: 'end'
        },
        isRequired: true,
        key: '',
        label: 'Project Manager',
        columnWidth: 3.5
      },
      {
        control: TYPOGRAPHY,
        groupStyle: {
          height: '3rem',
          display: 'flex',
          justifyContent: 'flex-start',
          alignItems: 'end'
        },
        isRequired: true,
        key: 'users',
        label: 'Project User',
        columnWidth: 3
      },
      {
        control: TYPOGRAPHY,
        groupStyle: {
          height: '3rem',
          display: 'flex',
          justifyContent: 'flex-start',
          alignItems: 'end'
        },
        key: '',
        label: 'Description',
        columnWidth: 3
      },
  ];



  const projectInputs = [
    {
      control: TEXT_FIELD,
      key: 'projectName',
      variant: 'standard',
      label: 'Project',
      isError: error && !payload.projectName,
      helperText: error && 'Please fill this field',
      columnWidth: 5  
    },
    {
      control: SELECT_BOX,
      select: true,
      variant: 'standard',
      groupStyle: { marginTop: '0.5rem' },
      key: 'clientId',
      label: 'Select Clients',
      options: addProject.client,
      isSelecteAllAllow: false,
      isError: error && !payload.clientId,
      helperText: error && 'Please fill this field',
      columnWidth: 5      
    },
    {
        control: TEXT_FIELD,
        key: 'cost',
        variant: 'standard',
        label: 'Project Cost',
        isError: error && !payload.cost,
        helperText: error && 'Please fill this field',
        columnWidth: 5        
    },
     {
        control: TEXT_FIELD,
        key: 'rate',
        variant: 'standard',
        label: 'Project Rate',
        isError: error && !payload.rate,
        helperText: error && 'Please fill this field',
        columnWidth: 5        
    },
    {
      control: SELECT_BOX,
      select: true,
      variant: 'standard',
      groupStyle: { marginTop: '0.5rem' },
      key: 'projectHead',
      label: 'Project Head',
      options: addProject.projectHead,
      isSelecteAllAllow: false,
      isError: error && !payload.projectHead,
      helperText: error && 'Please fill this field',
      columnWidth: 5    
    },
    {
        control: SELECT_BOX,
        select: true,
        variant: 'standard',
        groupStyle: { marginTop: '0.5rem' },
        key: 'projectManager',
        label: 'Project Manager',
        select: true,
        options:addProject.projectManager,
        isSelecteAllAllow: false,
        isError: error && !payload.projectManager,
        helperText: error && 'Please fill this field',
        columnWidth: 5    
      },
      {
        control: MULTI_SELECT_BOX,
        select: true,
        variant: 'standard',
        groupStyle: { marginTop: '0.5rem' },
        key: 'users',
        options: addProject.user,
        isSelecteAllAllow: false,
        maxMultipleOptions: 1,
        controlStyle: { height: '2rem' },
        isError: error && !payload.users,
        helperText: error && 'Please fill this field',
        columnWidth: 5,
        // isShown: !isUpdateMode ,
        // deleteMltSlctOptn: deleteMltSlctOptn // Pass the deleteMltSlctOptn function as a prop
      },
      {
        control: TEXT_FIELD,
        key: 'projectDescription',
        variant: 'standard',
        label: 'Description',
        isError: error && !payload.projectDescription,
        helperText: error && 'Please fill this field',
        columnWidth: 5   
      },
  ];



  const actionButtons = [
    {
      control: BUTTON,
      btnTitle: 'Submit',
      color: 'success',
      handleClickButton: () => handleSubmit(),
      columnWidth: 0.8
    },
    {
      control: BUTTON,
      btnTitle: 'Cancel',
      color: 'error',
      handleClickButton: () =>navigate(PROJECTS),
      columnWidth: 0.8
    }
  ];

  const topComponents = [
    {
      control: ICON,
      iconName: <ArrowBackIosIcon />,
      // groupStyle: { paddingTop: '0rem', marginLeft: '0.6rem' },
      color: 'primary',
      handleClickIcon: () => navigate(PROJECTS),
      columnWidth: 0.5
    },
    {
      control: TYPOGRAPHY,
      groupStyle: {
        height: '3rem',
        display: 'flex',
        justifyContent: 'flex-start',
        fontWeight:'bold'
      },
      key: 'addClientLabel',
      label: isUpdateMode ? 'Update Project' : 'Add Project',
      columnWidth: 1
    },
  ];

  useEffect(() => {
    if (isUpdateMode) {
      // Populate fields if in update mode
      const { val } = state;
      setPayload({
            id:val.id,
        projectName: val.projectName,
        clientId: val.clientId,
        projectHead: val.projectHead,
        projectManager: val.projectManager,
        users: val.users || [],
        cost: val.cost,
        rate: val.rate,
        projectDescription: val.projectDescription,
      });
      // console.log("users",val.users)
      // console.log("users",val.id)

    }
  }, [isUpdateMode, state]);

useEffect(()=>{
  getAllProjectManagersList();
  getAllUsersList();
  getAllClientsList();
  getAllProjectHeadList();
  getAllUsersList();
},[])

const handleChangeData = (key, val) => {
  if (key === 'cost' || key === 'rate') {
    if (/^\d*\.?\d*$/.test(val)) {
      setPayload((prevState) => ({
        ...prevState,
        [key]: val,
      }));
    }
  } else {
    setPayload((prevState) => ({
      ...prevState,
      [key]: val,
    }));
  }
};




    const handleSubmit = async () => {
      const { projectName, clientId, projectHead, projectManager, users } = payload;
    
      if (!projectName || !clientId || !projectHead || !projectManager || !users) {
        setError(true);
      } else {
        setError(false);
    
        const userIds = isArray(users) ? users.map((itm) => itm.id) : [];
    
        const payloadData = {

          projectName: projectName,
          clientId: parseInt(clientId),
          projectHead: parseInt(projectHead),
          projectManager: parseInt(projectManager),
          users: userIds,
          cost: parseFloat(payload.cost),
          rate: parseFloat(payload.rate),
          projectDescription: payload.projectDescription,
        };
        try {
          if (isUpdateMode) {
            await updateProjectDetails(state.val.id, payloadData);
            console.log('Project updated successfully!');
          } else {
            const res = await addProjectData(`${API_V1}/${APIS.ADD_PROJECT}`, payloadData);
            console.log('Project added successfully!');
          }
  
          navigate(PROJECTS);
        } catch (error) {
          console.error(error);
        }
      }
    };

    const updateProjectDetails = async (id, payloadData) => {
      const userIds = isArray(payload.users) ? payload.users.filter((itm) => itm !== null).map((itm) => itm.id) : [];
      const data = {
        id: payload.id, 
        projectName: payload.projectName,
        clientId: payload.clientId,
        projectHead: payload.projectHead,
        projectManager: payload.projectManager,
        users: userIds,
        cost: parseFloat(payload.cost),
        rate: parseFloat(payload.rate),
        projectDescription: payload.projectDescription,
      };
      try {
        const response = await updateProjects(`${API_V1}/${APIS.UPDATE_PROJECT}`, data);
        console.log('Project updated successfully!');
        return response.data;
      } catch (error) {
        console.error(error);
      }
    };
    
    
    
      const getAllClientsList = async () => {
        const res = await getAllClients(`${API_V1}/${APIS.GET_ALL_CLIENTS}`);
        if (res.isSuccess) {
          const clients = res.data.map((client) => ({
            id: client.id,
            name: client.name,
          }));
          // console.log("clients",clients)
          setClient(clients);
          // dispatch({ type: ADD_DETAILS, data: clients });
          handleActionDispatch(  GET_CLIENT, res?.data||[]);

        }
      };
  
      const getAllProjectHeadList = async () => {
        const res = await getAllProjectHead(`${API_V1}/${APIS.GET_ALL_PROJECT_HEAD}`);
        if (res.isSuccess) {
          const projectHeads = res.data.map((projectHead) => ({
            id: projectHead.id,
            name: projectHead.name
          }));
          setProjectHeads(projectHeads);
          handleActionDispatch(  GET_PROJECT_HEAD, res?.data||[]);
        }
      };
      

  const getAllProjectManagersList = async () => {
    const res = await getAllProjectManagers(`${API_V1}/${APIS.GET_ALL_PROJECT_MANAGERS}`);
    if (res.isSuccess) {
      const projectManagers = res.data.map((projectManager) => ({
        id: projectManager.id,
        empId:projectManager.empId,
        name: projectManager.name
      }));
      setProjectManagers(projectManagers);
      handleActionDispatch(  GET_PROJECT_MANAGERS, res?.data||[]);
    }
  };

  const getAllUsersList = async () => {
    const res = await getAllUsers(`${API_V1}/${APIS.GET_ALL_USERS}`);
    if (res.isSuccess) {
      const users = res.data.map((user) => ({
        id: user.id,
        name: user.name
      }));
      setUsers(users);
      dispatch({ type: GET_USERS, data: users });
    }
  };




  return (
    <Grid container spacing={2}>
       <DialogComponent
        open={alertBox.open}
        // handleClose={handleCloseAlertBox}
        maxWidth="sm"
        title={alertBox.title}
        titleType={alertBox.titleType}
        content={alertBox.content}
        isProceedButton={false}
        isCancelButton
        cancelButtonText="Ok"
      />
      <Grid
        item
        xs={12}
        style={{
          backgroundColor: '#f9fafc',
          display: 'flex',
          justifyContent: 'flex-start',
          alignItems: 'center',
          marginTop: '1rem',
          borderBottom: '1px solid #e9e9e9',
          height: '4rem'
        }}
      >
        {topComponents?.map((comp, ind) => (
          <RenderComponents key={ind} metaData={comp} ind={ind} />
        ))}
      </Grid>
      <Grid item xs={12} style={{ height: '32rem', overflowY: 'scroll', padding: '1rem' }}>
        <Box style={{ padding: '1.5rem', backgroundColor: 'white' }}>
          <Grid container spacing={1}>
            <Grid item xs={12} style={{ paddingLeft: '0.8rem' }}>
              <Typography style={{fontWeight:'bold'}}>Project Configration Details</Typography>
            </Grid>
            <Grid item xs={12} style={{ display: 'flex' }}>
              <Grid item xs={4} style={{ paddingLeft: '1.5rem' }}>
                {projectInfo
                  // .filter((comp) => !isUpdateMode || comp.key !== 'users') 
                .map((comp, ind) => (
                  <RenderComponents key={ind} metaData={comp} ind={ind} />
                ))}
              </Grid>
              <Grid item xs={8}>
              {projectInputs
        // .filter((comp) => !isUpdateMode || comp.key !== 'users') 
        .map((comp, ind) => (
                  <RenderComponents
                    key={ind}
                    metaData={comp}
                    ind={ind}
                    payload={payload}
                    handleChange={handleChangeData}
                    handleBlur={handleChangeData}
                    deleteMltSlctOptn={deleteMltSlctOptn}
                    />
                ))}
              </Grid>
            </Grid>
          </Grid>
        </Box>
      </Grid>
      <Grid
        item
        xs={12}
        style={{
          display: 'flex',
          justifyContent: 'flex-start',
          alignItems: 'center',
          padding: '1rem',
          backgroundColor: '#f9fafc',
          borderTop: '1px solid #e9e9e9'
        }}
      >
        {actionButtons?.map((comp, ind) => (
          <RenderComponents key={ind} metaData={comp} ind={ind} />
        ))}
      </Grid>
    </Grid>
  );
}

AddProject.propTypes = {
  addProject: PropTypes.object.isRequired,
  dispatch: PropTypes.func.isRequired,
  isUpdateMode: PropTypes.bool,
  navigate: PropTypes.func.isRequired,
};

export default AddProject;