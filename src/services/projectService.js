import { deleteData, getData, postData, putData } from '../Utils/restServices'

export const getAllClients = (url) => getData(url);

export const getAllProjectHead = (url) => getData(url);

export const getAllProjectManagers = (url) => getData(url);

export const getAllUsers = (url) => getData(url);

export const getAllProjects = (url) => getData(url);

export const getLogin =  (url, payload) => postData(url, payload);


// export const getServiceSubjectList = (url, payload) => postData(url, payload);

export const addProjectData = (url, payload) => postData(url, payload);

export const updateProjects = (url, data) => putData(url, data);

// export const deleteProject = (url) => deleteData(url);
export const deleteProject = (url, data) => putData(url, data);
// export const deleteProject = (url, id) => putData(`${url}?id=${id}`);



export const assignUsers = (url, payload) => postData(url, payload);

