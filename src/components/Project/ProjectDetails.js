// @flow
import React from 'react';
import { useNavigate } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { Backdrop, Button, CircularProgress, Grid, TextField, Typography } from '@mui/material';
import { COMPONENTS, STATUS } from '../../Utils/Constants';
import {useNavigation} from  '../CustomHooks/useNavigation'
import { ROUTES } from '../../Routes/Path';
import { useEffect, useState } from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import { Paper, Tooltip } from '@mui/material';
import TablePagination from '@mui/material/TablePagination';
import RenderComponents from '../RenderComponent/RenderComponent';
import axios from 'axios';
import ClearIcon from '@mui/icons-material/Clear';
import DialogComponent from '../Dailog/Dailog';
import EditIcon from '@mui/icons-material/Edit';
// import TablePagination from '@material-ui/core/TablePagination';
import { isArray } from '../../Utils/Utils';
import { addProject, deleteProject, getAllClients, getAllProjectHead, getAllProjectManagers, getAllProjects, getAllUsers } from '../../services/projectService';
import { APIS, API_V1 } from '../../Utils/apiList';
// import { data } from 'autoprefixer';
import { Checkbox } from '@mui/material';
import { putData } from '../../Utils/restServices';


function Loader({ open }) {
  return (
    <Backdrop open={open} sx={{ zIndex: '20' }}>
      <CircularProgress />
    </Backdrop>
  );
}


function ProjectDetails() {
  const navigate = useNavigate();
  const { SELECT_BOX, BUTTON, TEXT_FIELD, TYPOGRAPHY } = COMPONENTS;
  const { PROJECTS, ADD_PROJECTS,UPDATE_PROJECTS } = ROUTES;
  const [users, setUsers]= useState([]);
  const [allClient, setAllClient] = useState([])
  const[projectHead, setProjectHead]= useState([])
  const [projectManagers, setProjectManagers] = useState([]);
  const [allDetails, setAllDetails]= useState([]);
  const [isSave, setIsSave] = useState(false);
  const [isChecked, setisChecked] = useState([]);
  const [delMsg, setDelMsg] = useState('')
  const [getId, setGetId] = useState();
  const [isRemove, setIsRemove] = useState(false);
  const [search, setSearch]= useState('')
  const [deletedIds, setDeletedIds] = useState([]);
  const [open, setOpen]= useState(false);
  const [deleteData, setDeleteData]= useState({});
  const [modal, setModal] = useState(false)
  const [projectData, setProjectData] = useState([]);
  const [projectHeadFilter, setProjectHeadFilter] = useState('');
  const [projectNameFilter, setProjectNameFilter] = useState('');
  const [projectManagerFilter, setProjectManagerFilter] = useState('');
  const [loading, setLoading] = useState(true); // Initialize loading state to true
  const [costFilter, setCostFilter] = useState('');
  const [selectedRows, setSelectedRows] = useState([]);
  const [page, setPage] = useState(0);
  const [rowsPerPage, setRowsPerPage] = useState(5);
  const totalRows = allDetails?.data?.length || 0; 
  // const { navigate, navigateToAddProject } = useNavigation();

  const handleClickEdit = (val) =>{
  console.log("val",val)
  // navigate(navigateToAddProject, { state: {val:val} })  }
  navigate(ADD_PROJECTS, { state: {val:val} })  }


  
  //   navigate(`${UPDATE_PROJECTS}/${val.id}`, { state: {val: val} });
  // navigate(`/administration/users/edit-user/${val.id}`, { state: val }, { replace: true });


  const openDelete = (detail) => {
    setModal(true);
    setGetId(detail.id);
  };

// console.log("project", projectData)
// console.log("setAllDetails", allDetails)
const handleIsRemove = async () => {
  const id = getId;
  const updatedDetails = allDetails.data.filter((detail) => detail.id !== id);
  // console.log("delete", updatedDetails);
  setAllDetails(updatedDetails);
  setModal(false);
  try {
    await deleteProject(`${API_V1}/${APIS.DELETE_PROJECT}?id=${id}`);
    const newData = projectData.filter((prj) => prj.id !== id);
    // console.log("newData", newData);
    setProjectData(newData);
    setAllDetails({ ...allDetails, data: newData });
  } catch (error) {
    console.log("error", error);
  }
};


useEffect(() => {
  getProjectList();
  getAllProjectHeadList();
  getAllProjectManagersList();
  getAllUsersList();
  getAllClientsList();
}, []);



const getProjectList = async () => {
  try {
    const res = await getAllProjects(`${API_V1}/${APIS.GET_ALL_PROJECTS}`);
    // console.log("reponse",res)
    setAllDetails(res);
    setProjectData(res.data);
    setLoading(false); 
  } catch (error) {
    // console.log("Error fetching project list:", error);
    setLoading(false); 
  }
};

  const getAllClientsList = async () => {
    const res = await getAllClients(`${API_V1}/${APIS.GET_ALL_CLIENTS}`);  
    // console.log("setAllClients",res)  
      setAllClient(res);
      // handleActionDispatch(POST_LEGAL_ENTITIES, res?.data || []);
  };

  const getAllProjectHeadList = async () => {
    const res = await getAllProjectHead(`${API_V1}/${APIS.GET_ALL_PROJECT_HEAD}`);
    console.log("res",res)
    setProjectHead(res)
    // handleActionDispatch(GET_PROJECT_HEAD, res?.data);

  };

  const getAllProjectManagersList = async () => {
    const res = await getAllProjectManagers(`${API_V1}/${APIS.GET_ALL_PROJECT_MANAGERS}`);
    console.log("res",res)
    setProjectManagers(res)
    // dispatch({ type: GET_PROJECT_MANAGERS, data: res?.data || [] });
  };

  const getAllUsersList = async () => {
    const res = await getAllUsers(`${API_V1}/${APIS.GET_ALL_USERS}`);
    console.log("res",res)
      setUsers(res);
  };

  const topComponents = [
    {
      control: BUTTON,
      // groupStyle: { marginLeft: '60rem', marginTop:'-1rem' },
      tooltipTitle:'Add Project',
      btnTitle: '+ Add Project',
      color: 'success',
      // handleClickButton: () => navigateToAddProject(),
      handleClickButton: () => navigate(ADD_PROJECTS),
      columnWidth: 1.5
    }
  ]; 
  

  const columns = [
 
    {
      name: 'Project Name',
      selector: 'projectName',
      sortable: true,
    },
    {
      name: 'Client',
      selector: 'allClient',
      sortable: true
    },
    {
      name: 'Project Head',
      selector: 'projectHead',
      sortable: true
    },
    {
      name: 'Project Manager',
      selector: 'projectManager',
      sortable: true
    },
    {
      name: 'Cost',
      selector: 'cost',
      sortable: true
    },
    {
      name: 'Action',
      // selector: 'projectDescription',
      sortable: true
    }
  ];


  return (

<Grid container spacing={2}>
<Loader open={loading} /> 
<DialogComponent
  open={modal}
  handleClose={() => setModal(false)}
  maxWidth="sm"
  title="Are you sure?"
  content="Are you sure you want to delete this project?"
  isProceedButton
  proceedButtonText="Yes"
  cancelButtonText= 'No'
  handleProceed={handleIsRemove}
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
          marginBottom: '-5rem',
          borderBottom: '1px solid #e9e9e9'
        }}
      >    
      <Grid item xs={12} style={{ backgroundColor: '#f9fafc', padding: '1rem' }}>
      </Grid>
          {topComponents?.map((comp, ind) => (
          <RenderComponents key={ind} metaData={comp} ind={ind} />
        ))}
      </Grid>
      <Grid item xs={12} style={{ height: '100vh ', marginTop: '5rem', backgroundColor: '#ffffff' }}>
      <TableContainer component={Paper}>
  <Table>
    <TableHead>
      <TableRow>
        {columns.map((column) => (
          <TableCell style={{fontWeight: 'bold'}} key={column.selector}>{column.name}</TableCell>
        ))}
      </TableRow>
    </TableHead>
    <TableBody>
    {allDetails &&
    allDetails.data &&
    allDetails.data
      .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
      .map((detail) => (
  <TableRow key={detail.id}>
    <TableCell>{detail.projectName}</TableCell>
    <TableCell>
    {allClient &&
        allClient.data &&
        allClient.data.find((user) => user.id === detail.clientId)?.name}
    </TableCell>
    <TableCell>
      {projectHead &&
        projectHead.data &&
        projectHead.data.find((user) => user.id === detail.projectHead)?.name}
    </TableCell>
    <TableCell>
      {projectManagers &&
        projectManagers.data &&
        projectManagers.data.find((manager) => manager.id === detail.projectManager)?.name}
    </TableCell>
    {/* <TableCell> 
      {detail.users &&
        users?.data &&
        detail.users.map((userId) => {
          const user = users.data.find((user) => user.id === userId);
          return user ? user.name : '';
        }).join(', ')}
    </TableCell> */}
    <TableCell>{detail.cost}</TableCell>
    {/* <TableCell>{detail.rate}</TableCell>
    <TableCell>{detail.projectDescription}</TableCell> */}
    <TableCell component="th" scope="row">
      <Tooltip title="Click to Update Project">
        <EditIcon
          style={{ cursor: 'pointer', textAlign: 'center', fontSize: '1.3rem', marginRight:'1rem' }}
          onClick={() => handleClickEdit(detail)}
        />
      </Tooltip>
      <Tooltip title="Click to Delete Project">
        <ClearIcon color="error" 
          style={{ cursor: 'pointer', textAlign: 'center', fontSize: '1.3rem' }}
          onClick={() => openDelete(detail)}
        />
      </Tooltip>
    </TableCell>
  </TableRow>
))}
    </TableBody>
  </Table>
  <TablePagination
  component="div"
  count={totalRows}
  page={page}
  onPageChange={(event, newPage) => setPage(newPage)}
  rowsPerPage={rowsPerPage}
  onRowsPerPageChange={(event) => {
    setRowsPerPage(parseInt(event.target.value, 5));
    setPage(0);
  }}
  rowsPerPageOptions={[5, 10, 25]} // Customize the available options as needed
/>
</TableContainer>
  </Grid>
</Grid> 
);
}

export default ProjectDetails;