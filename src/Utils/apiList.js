export const API_V1 = 'http://10.235.3.8:88/api';

export const APIS = {
GET_ALL_CLIENTS: 'Client/GetClients',
GET_ALL_PROJECT_HEAD: 'Users/GetUsers?userType=head',
GET_ALL_PROJECT_MANAGERS:'Users/GetUsers?userType=manager',
GET_ALL_USERS:'Users/GetUsers?userType=user',
GET_ALL_PROJECTS:'Project/GetProjects',
GET_PROJECT:'project/getproject',
ADD_PROJECT:'Project/AddProject',
UPDATE_PROJECT:'Project/UpdateProject',
DELETE_PROJECT:'Project/DeleteProject',
ASSIGN_USERS:'project/assignusers',
LOGIN_URL:'Login/Login'
}